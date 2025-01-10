import typescriptEslint from "@typescript-eslint/eslint-plugin";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import stylistic from "@stylistic/eslint-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [{
    ignores: [
        "**/.eslintrc.*",
        "**/eslint.config.mjs",
        "**/*.spec.ts",
        "**/_fixtures/**/*",
        "**/coverage/",
        "**/reference-docs/",
        "**/lib/",
        "**/.mocharc.cjs",
    ],
}, ...compat.extends("eslint:recommended", "plugin:@typescript-eslint/recommended-type-checked"), {
    plugins: {
        "@stylistic": stylistic,
        "@typescript-eslint": typescriptEslint,
    },

    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.commonjs,
        },

        parser: tsParser,
        ecmaVersion: 2018,
        sourceType: "module",

        parserOptions: {
            project: true,
            tsconfigRootDir: "src",
        },
    },

    rules: {
        "linebreak-style": ["error", "unix"],
        quotes: ["error", "double"],
        "@stylistic/indent": ["error", 4, { SwitchCase: 1 } ],
        "@stylistic/semi": ["error", "always"],
        "@typescript-eslint/no-base-to-string": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/no-import-type-side-effects": "error",
        "@typescript-eslint/method-signature-style": ["error", "property"],
    },
}, ...compat.extends("plugin:@typescript-eslint/recommended-requiring-type-checking").map(config => ({
    ...config,
    files: ["./src/**/*.{ts,tsx}"],
})), {
    files: ["./src/**/*.{ts,tsx}"],

    rules: {
        "@typescript-eslint/no-base-to-string": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-unused-vars": "off",
    },
}];