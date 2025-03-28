# CHANGELOG

## Introduction

This CHANGELOG tells you:

* when a release was made
* what is in each release

It also tells you what changes have been completed, and will be included in the next tagged release.

For each release, changes are grouped under these headings:

* _Backwards-Compatibility Breaks_: a list of any backwards-compatibility breaks
* _New_: a list of new features. If the feature came from a contributor via a PR, make sure you link to the PR and give them a mention here.
* _Fixes_: a list of bugs that have been fixed. If there's an issue for the bug, make sure you link to the GitHub issue here.
* _Dependencies_: a list of dependencies that have been added / updated / removed.
* _Tools_: a list of bundled tools that have been added / updated / removed.

## develop branch

The following changes have been completed, and will be included in the next tagged release.

## v3.0.1

Released Wednesday, 26th March 2025.

### Fixes

- attempt at fixing ESM support without breaking CJS support

### Deprecations

- removed deprecated `shade()` function
- removed deprecated `isDull()` function

### Dependencies

- bumped everything to latest versions

## v3.0.0

Released Wednesday, 26th March 2025.

### Backwards-Compatibility Breaks

- `CssColor` is now a `type`, not a `class`
  - all child classes are now sub-types of `CssColor`
- `CssColor` methods are now static properties or getters
- `CssColor.keyword` is now `CssColor.cssNamedColor`
- `CssKeywordColor` class is completely gone
- `OKLCH` color space is now `OKLAB`
- color formats are now color modes
- `CssExtendedColors` type is now `CssNamedColors`
- `AnyCssColor` type is now just `CssColor` type

### New

- `CssColor.css` property provides the CSS definition in the current color model
- `darkModeContrastRatio()` now accepts an optional `darkModeBg` parameter
  - allows you to override the comparison color
- `lightModeContrastRatio()` now accepts an optional `lightModeBg` parameter
  - allows you to override the comparison color
- `normaliseCssHexColorDefinitionFormat()` can now be used on regular strings too

### Fixes

- OKLCH -> RGB now has gamut clamping
  - makes sure resulting RGB color is always valid
- `validateCmykColorModel()` now validates K channel correctly

## v2.1.1

Released Sunday, 2nd March 2025.

### Tools

- eslint now ignores the Mocha root hook plugin

## v2.1.0

Released Sunday, 2nd March 2025.

### New

- added HSV color format

### Fix

- color conversions from colors with alpha channel of `0` no longer end up with an alpha channel of `1`
- `makeCssXxxColorFromCssColor()` and `makeCssXxxColorFromConversionModel()` constructors now do the necessary color-space conversions internally
  - added `convertConversionModelToOklchColorSpace()` helper
  - added `convertConversionModelToSrgbColorSpace()` helper
  - added color-space conversion support
    - updated `convertConversionModelToHslChannelsData()`
    - updated `convertConversionModelToHwbChannelsData()`
    - updated `convertConversionModelToOklchChannelsData()`
    - updated `convertConversionModelToRgbChannelsData()`
  - CssColor conversion methods (`CssColor.hsl()` et al) no longer need to do their own color-space conversion

### Refactor

- Improve type strictness internally
  - `ConversionModel` replaces the wider `Color` type
  - added `validateConversionModel()` data validator
  - added `mustBeConversionModel()` data guarantee
  - added `isConversionModel()` data guard

### Tests

- `npm run build` now ignores `_fixture` folders
- `npm run build` now ignores `*.test.ts` files
- added `test-hooks.test.ts` global test startup file
- tests now show full diffs when `expect()` fails
- we now clear the internal color conversion caches before each unit test

## v2.0.2

Released Tuesday, 25th February 2025.

### Fix

* `makeCssHexColorDefinition()` no longer normalises to `##RRGGBB` format
  * `#RGB` inputs are now preserved

## v2.0.1

Released Tuesday, 25th February 2025.

### Fix

* `CssHexColor.hex()` now outputs `#RRGGBB` format-only again
  * was fixed by making `makeCssHexColorDefinition()` normalise to `#RRGGBB` format

## v2.0.0

Released Monday, 24th February 2025.

The headline is:

* refactored to support multiple color spaces
* added support for OKLCH
* added support for CMYK

### B/C Breaks

* `CssColor` now takes a `C` generic type class parameter
  * this needs to be a `ConversionModel` type
* component values (`.red()` et al) are no longer available everywhere
  * you must access them via the appropriate class instead (`color.rgb().red()`)
* `CssHexColorData` now stores the hex value in a separate field
  * necessary to support conversions from other CssColor types
* added `CssColor.oklch()` abstract method
* added `CssColorData.colorFormat` property
* added `CssColorData.colorSpace` property

### New

* added new, direct smart constructors
  * added `makeCssHexColor()`
  * added `makeCssHslColor()`
  * added `makeCssHwbColor()`
  * added `makeCssOklchColor()`
  * added `makeCssRgbColor()`
* added support for OKLCH color space
  * added `OKLCH` to `CssColorspace` type
  * added `CssOklchColorSpace` type
  * added `CssOklchColor` class
  * added `CssOklchColorData` type
  * added `CssOklchColorChannelsData` type
  * added `isCssOklchColorChannelsData()` type guard
  * added `isCssOklchColorData()` type guard
  * added `makeCssOklchColorData()` smart constructor
  * added `mustBeCssOklchColorChannelsData()` type guarantee
  * added `mustBeCssOklchColorData()` type guarantee
  * added `validateCssOklchColorChannelsData()` type validator
  * added `validateCssOklchColorData()` type validator
* added support for CMYK color format
  * added `cmyk` to `SupportedCssColorFormat` type
  * added `CssCmykColor` class
  * added `CssCmykColorData` type
  * added `CssCmykColorChannelsData` type
  * added `isCssCmykColorChannelsData()` type guard
  * added `isCssCmykColorData()` type guard
  * added `makeCssCmykColorData()` smart constructor
  * added `mustBeCssCmykColorChannelsData()` type guarantee
  * added `mustBeCssCmykColorData()` type guarantee
  * added `validateCssCmykColorChannelsData()` type validator
  * added `validateCssCmykColorData()` type validator
  * added `CssColor.cmyk()` abstract method
    * implemented as `CssHexColor.cmyk()`
    * implemented as `CssHslColor.cmyk()`
    * implemented as `CssHwbColor.cmyk()`
    * implemented as `CssKeywordColor.cmyk()`
    * implemented as `CssOklchColor.cmyk()`
    * implemented as `CssRgbColor.cmyk()`
* reworked color format conversion support
  * added `SupportedCssColorFormat` type
  * added `UnsupportedCssConversionError` error
  * added `UnsupportedCssConversionData` supporting type
  * added `CssColor::colorFormat()` method
    * implemented as `CssHexColor.colorFormat()`
    * implemented as `CssHslColor.colorFormat()`
    * implemented as `CssHwbColor.colorFormat()`
    * implemented as `CssKeywordColor.colorFormat()`
    * implemented as `CssOklchColor.colorFormat()`
    * implemented as `CssRgbColor.colorFormat()`
  * added `AnyConversionModel` type
  * added `ConversionModel` type
  * added `CssColor::conversionModel()` method
    * implemented as `CssHexColor.conversionModel()`
    * implemented as `CssHslColor.conversionModel()`
    * implemented as `CssHwbColor.conversionModel()`
    * implemented as `CssKeywordColor.conversionModel()`
    * implemented as `CssOklchColor.conversionModel()`
    * implemented as `CssRgbColor.conversionModel()`
  * added converters to/from channel data formats
    * added `convertConversionModelToHexColorDefinition()`
    * added `convertConversionModelToHslChannelsData()`
    * added `convertConversionModelToHwbChannelsData()`
    * added `convertConversionModelToKeyword()`
    * added `convertConversionModelToOklchChannelsData()`
    * added `convertConversionModelToRgbChannelsData()`
    * added `convertHexColorDefinitionToConversionModel()`
    * added `convertHslChannelsDataToConversionModel()`
    * added `convertHwbChannelsDataToConversionModel()`
    * added `convertKeywordToConversionModel()`
    * added `convertOklchChannelsDataToConversionModel()`
    * added `convertRgbChannelsDataToConversionModel()`
  * added converters to color classes
  * * added `makeCssColorFromConversionModel()`
    * added `makeCssHexColorFromConversionModel()`
    * added `makeCssHexColorFromCssColor()`
    * added `makeCssHslColorFromConversionModel()`
    * added `makeCssHslColorFromCssColor()`
    * added `makeCssHwbColorFromConversionModel()`
    * added `makeCssHwbColorFromCssColor()`
    * added `makeCssOklchColorFromConversionModel()`
    * added `makeCssOklchColorFromCssColor()`
    * added `makeCssRgbColorFromConversionModel()`
    * added `makeCssRgbColorFromCssColor()`
* added `CssColor.colorSpace()`
* added `CssColorData.css() method

### Fixes

* added missing `CssColorspace` exports
  * added `CssColorspace` type
  * added `CssColorspacedColor` type
  * added `CssSrgbColorSpace` type
* improved performance when repeating static conversions between color types

### Refactoring

* dropped `CssColor.round()` internal helper
  * rounding is now done in each conversion function

### Dependencies

* replace `color-string` parser with `culori` package
* replace `color-convert` with `culori` package

## v1.3.1

Released Monday, 27th January 2025.

### Fixes

* revert contrast thresholds in `wcagContrast()`
  * I'm an idiot and clearly cannot read!

## v1.3.0

Released Monday, 27th January 2025.

### New

* added summary fields to `WcagContrastRatings` type
* `wcagContrast()` now returns summary fields too

### Fixes

* `relativeLuminance()` now uses the latest WCAG formula
* `wcagContrast()` now uses the correct contrast thresholds from WCAG 2.2

## v1.2.2

Released Monday, 20th January 2025.

### Fixes

* `CssColor.hex()` et al now returns a `CssHexColorDefinition`

## v1.2.1

Released Monday, 13th January 2025.

### Fixes

* Fixed definition of `indigo` color hue.

## v1.2.0

Released Monday, 13th January 2025.

### New

* Added `isHue()` inspector function
* Added support for extra hues
  * `brown`
  * `lime`
  * `chartreuse`
  * `springgreen`
  * `teal`
  * `azure`
  * `indigo`
  * `fuchsia`
  * `rose`

### Fixes

* (hopefully!) improved color hue classifications

### Deprecations

* deprecated `isBlackHue()`
* deprecated `isBlueHue()`
* deprecated `isCyanHue()`
* deprecated `isGrayHue()`
* deprecated `isGreenHue()`
* deprecated `isOrangeHue()`
* deprecated `isPinkHue()`
* deprecated `isPurpleHue()`
* deprecated `isRedHue()`
* deprecated `isVioletHue()`
* deprecated `isWhiteHue()`
* deprecated `isYellowHue()`

## v1.1.0

Released Friday, 10th January 2025.

### New

* Added `isMonochrome()` inspector function
* Added `tonality()` inspector function (to eventually replace `shade()`)
* Added `isMidtone()` inspector function (to eventually replace `isDull()`)

### Fixes

* `hues()` no longer reports monochrome colors as having a `red` hue
* package now works when used with `npm link`

### Deprecations

* deprecated `shade()` (use `tonality()` instead)
* deprecated `isDull()` (use `isMidtone()` instead)

### Tooling

* upgraded to eslint v9
  * upgraded associated linting plugins to match
* upgraded to Typescript v5.7
* upgraded @swc/cli to v0.6.0
* upgrade CI to use Node v22 and v23

## v1.0.2

Released Sunday, 16th June 2024.

### Fixes

* Fix import path problems in CommonJS build

## v1.0.1

Released Saturday, 15th June 2024.

### Fixes

* Fix release pipeline

## v1.0.0

Released Saturday, 15th June 2024.

### New

- added `AnyCssColor` type
- added `CssColorData` type
- added `CssColor` class
- added `makeCssColor()` smart constructor
- added `makeCssColorData()` smart constructor
- added `isCssColorData()` type guard
- added `mustBeCssColorData()` type guarantee
- added `validateCssColorData()` type validator
- added `MODULE_NAME` constant
- added `InvalidCssColorDataData` and `InvalidCssColorDataError` class
- added `UnsupportedCssColorDefinitionData` and `UnsupportedCssColorDefinitionError` class
- added `CssExtendedColor` type
- added `CssExtendedColors` type
- added `CSS_EXTENDED_COLORS_TO_HEX` and `CSS_HEX_TO_EXTENDED_COLORS` constants
- added `isCssExtendedColor()` type guard
- added `mustBeCssExtendedColor()` type guarantee
- added `validateCssExtendedColor()` type validator
- added `CssKeywordColorData` type
- added `CssKeywordColor` class
- added `isCssKeywordColorData()` type guard
- added `makeCssKeywordColorData()` smart constructor
- added `mustBeCssKeywordColorData()` type guarantee
- added `validateCssKeywordColor()` type validator
- added `CssHexColorData` type
- added `CssHexColor` class
- added `CssHexColorDefinition` type
- added `isCssHexColorData()` type guard
- added `isCssHexColorDefinition()` type guard
- added `makeCssHexColorData()` smart constructor
- added `makeCssHexColorDefinition()` smart constructor
- added `mustBeCssHexColorDefinition()` type guarantee
- added `normaliseCssHexColorDefinition()` data transformer
- added `validateCssHexColorDefinition()` type validator
- added `CssHslColorChannelsData` type
- added `CssHslColorChannelsTuple` type
- added `CssHslColorData` type
- added `CssHslColor` class
- added `isCssHslColorChannelsData()` type guard
- added `isCssHslColorData()` type guard
- added `makeCssHslColorData()` smart constructor
- added `mustBeCssHslColorChannelsData()` type guarantee
- added `mustBeCssHslColorData()` type guarantee
- added `validateCssHslColorChannelsData()` type validator
- added `validateCssHslColorData()` type validator
- added `CssHwbColorChannelsData` type
- added `CssHwbColorChannelsTuple` type
- added `CssHwbColorData` type
- added `CssHwbColor` class
- added `mustBeCssHwbColorChannelsData()` type guarantee
- added `isCssHwbColorChannelsData()` type guard
- added `isCssHwbColorData()` type guard
- added `makeCssHwbColorData()` smart constructor
- added `mustBeCssHwbColorData()` type guarantee
- added `validateCssHwbColorChannelsData()` type validator
- added `validateCssHwbColorData()` type validator
- added `CssRgbColorChannelsData` type
- added `CssRgbColorChannelsTuple` type
- added `CssRgbColorData` type
- added `CssRgbColor` class
- added `isCssRgbColorData()` type guard
- added `isCssRgbColorChannelsData()` type guard
- added `makeCssRgbColorData()` smart constructor
- added `mustBeCssRgbColorData()` type guarantee
- added `mustBeCssRgbColorChannelsData()` type guarantee
- added `validateCssRgbColorChannelsData()` type validator
- added `validateCssRgbColorData()` type validator
- added `validateCssColorChannel()` helper validator
- added `validateCssColorDataHasChannels()` helper validator
- added `contrastRatio()` inspector function
- added `darkModeContrastRatio()` inspector function
- added `hasClearContrast()` inspector function
- added `Hue` type
- added `hues()` inspector function
- added `isBlackHue()` inspector function
- added `isBlueHue()` inspector function
- added `isCyanHue()` inspector function
- added `isGrayHue()` inspector function
- added `isGreenHue()` inspector function
- added `isMagentaHue()` inspector function
- added `isOrangeHue()` inspector function
- added `isPinkHue()` inspector function
- added `isPurpleHue()` inspector function
- added `isRedHue()` inspector function
- added `isVioletHue()` inspector function
- added `isWhiteHue()` inspector function
- added `isYellowHue()` inspector function
- added `isDark()` inspector function
- added `isDull()` inspector function
- added `isLight()` inspector function
- added `lightModeContrastRatio()` inspector function
- added `luma()` inspector function
- added `relativeLuminance()` inspector function
- added `Shade` type
- added `shade()` inspector function
- added `wcagContrast()` inspector function

### Tools

- explicitly exclude TS files that only contain types from code coverage
  - see [c8 issue #494](https://github.com/bcoe/c8/issues/494) for the bug report
