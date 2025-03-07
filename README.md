# CssColor Safe Type for TypeScript

## Introduction

This TypeScript library gives you a CssColor safe type, for when you are working with CSS color values.

## Quick Start

```
# run this from your Terminal
npm install @safelytyped/css-color
```

```typescript
// add this import to your Typescript code
import { makeCssColor } from "@safelytyped/css-color"

const myColor = makeCssColor("red");
```

## Adding Support For New Color Types

### Overview

1. define its color space (if it uses one we do not support)
1. define its color model
1. define its model converter