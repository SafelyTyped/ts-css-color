/**
 * This script post-processes the ESM output to add .js extensions to imports
 * which are required for ESM to work properly.
 */

const fs = require('fs');
const path = require('path');

// Base directory for ESM builds
const baseDir = path.resolve(__dirname, '../lib/esm');

/**
 * Process a single JS file to fix imports
 */
function processFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');

  // Fix circular imports from parent directories
  let newContent = content;
  
  // Fix plain "...js" imports - these should point to the root index.js
  newContent = newContent.replace(
    /from\s+["']\.\.\.js["']/g,
    'from "../../index.js"'
  );
  
  // Fix plain "..." imports without the .js - these should point to the root index.js
  newContent = newContent.replace(
    /from\s+["']\.\.\.["']/g,
    'from "../../index.js"'
  );
  
  // Fix single parent directory imports - these need the .js extension
  newContent = newContent.replace(
    /from\s+["']\.\.["']/g,
    'from "../index.js"'
  );
  
  // Fix any "../.." style imports to point to the correct files
  if (content.includes('../..')) {
    // Handle the special case of "../.." imports, make them point to index.js
    newContent = newContent.replace(
      /from\s+["'](\.\.\/\.\.)["']/g,
      'from "../../index.js"'
    );
  }
  
  // Replace other relative imports with .js extensions
  newContent = newContent.replace(
    /from\s+["'](\.[^"']+)["']/g, 
    (match, importPath) => {
      // Skip if the import already has an extension
      if (importPath.endsWith('.js')) {
        return match;
      }
      
      // Skip any remaining "..." references - these will be fixed later
      if (importPath === '...') {
        return match;
      }
      
      return `from "${importPath}.js"`;
    }
  );

  // Only write file if content has changed
  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Fixed imports in: ${path.relative(baseDir, filePath)}`);
  }
}

/**
 * Recursively process all JS files in a directory
 */
function processDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const entryPath = path.join(dir, entry.name);
    
    if (entry.isDirectory()) {
      processDirectory(entryPath);
    } else if (entry.isFile() && entry.name.endsWith('.js')) {
      processFile(entryPath);
    }
  }
}

console.log('Fixing ESM imports...');
processDirectory(baseDir);
console.log('Done fixing ESM imports');