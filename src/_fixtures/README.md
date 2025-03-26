# Test Fixtures

## Introduction

Starting with `@safelytyped/css-color` v3.0, all of our unit tests now run off this single, central list of valid colors. It's the easiest way to keep down the effort required to support new color models.

## HOWTO TEST MORE COLORS

1. Add all new valid colors to [CSS_COLOR_FIXTURES](./CSS_COLOR_FIXTURES.ts).

## HOWTO TEST NEW COLOR MODELS

1. Add all new valid colors to [CSS_COLOR_FIXTURES](./CSS_COLOR_FIXTURES.ts).
2. Update existing colors in [CSS_COLOR_FIXTURES](./CSS_COLOR_FIXTURES.ts) with the expected values for your new color model.
3. Create a new CSS-<YOUR_COLOR_MODEL>-FIXTURE.ts file which just contains valid fixtures for your color model.