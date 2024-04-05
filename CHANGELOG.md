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
- added `CssKeywordColorData` type
- added `CssKeywordColor` class
- added `CssHexColorData` type
- added `CssHexColor` class
- added `CssHexColorDefinition` type
- added `isCssHexColorDefinition()` type guard
- added `makeCssHexColorDefinition()` smart constructor
- added `mustBeCssHexColorDefinition()` type guarantee
- added `normaliseCssHexColorDefinition()` data transformer
- added `validateCssHexColorDefinition()` type validator
- added `CssHslColorChannelsData` type
- added `CssHslColorChannelsTuple` type
- added `CssHslColorData` type
- added `CssHslColor` class
- added `validateCssHslColorChannelsData()` type validator
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