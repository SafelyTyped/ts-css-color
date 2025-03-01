//
// Copyright (c) 2024-present Ganbaro Digital Ltd
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions
// are met:
//
//   * Re-distributions of source code must retain the above copyright
//     notice, this list of conditions and the following disclaimer.
//
//   * Redistributions in binary form must reproduce the above copyright
//     notice, this list of conditions and the following disclaimer in
//     the documentation and/or other materials provided with the
//     distribution.
//
//   * Neither the names of the copyright holders nor the names of his
//     contributors may be used to endorse or promote products derived
//     from this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS
// FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
// COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
// INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
// BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
// LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
// CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
// LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN
// ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.
//

// ================================================================
//
// CSS Colors
//
// ----------------------------------------------------------------

export type { CssColorspacedColor } from "./CssColorspace/CssColorspacedColor.type";
export type { CssOklchColorSpace } from "./CssColorspace/CssOklchColorSpace.type";
export type { CssSrgbColorSpace } from "./CssColorspace/CssSrgbColorSpace.type";
export { SUPPORTED_CSS_COLOR_SPACES } from "./CssColorspace/SUPPORTED_CSS_COLOR_SPACES";
export type { SupportedCssColorSpace } from "./CssColorspace/SupportedCssColorSpace.type";

export type { AnyCssColor } from "./CssColor/AnyCssColor.type";
export { CssColor } from "./CssColor/CssColor";
export type { CssColorData } from "./CssColor/CssColorData.type";
export { isCssColorData } from "./CssColor/isCssColorData";
export { makeCssColor } from "./CssColor/makeCssColor";
export { makeCssColorData } from "./CssColor/makeCssColorData";
export { mustBeCssColorData } from "./CssColor/mustBeCssColorData";
export { validateCssColorData } from "./CssColor/validateCssColorData";

export type { CssExtendedColor } from "./CssExtendedColors/CssExtendedColor.type";
export { CSS_EXTENDED_COLORS_TO_HEX, CSS_HEX_TO_EXTENDED_COLORS } from "./CssExtendedColors/CssExtendedColors.const";
export type { CssExtendedColors } from "./CssExtendedColors/CssExtendedColors.type";
export { isCssExtendedColor } from "./CssExtendedColors/isCssExtendedColor";
export { mustBeCssExtendedColor } from "./CssExtendedColors/mustBeCssExtendedColor";
export { validateCssExtendedColor } from "./CssExtendedColors/validateCssExtendedColor";

export { convertConversionModelToCmykChannelsData } from "./CssCmykColor/convertConversionModelToCmykChannelsData";
export { CssCmykColor } from "./CssCmykColor/CssCmykColor";
export type { CssCmykColorChannelsData } from "./CssCmykColor/CssCmykColorChannelsData.type";
export type { CssCmykColorChannelsTuple } from "./CssCmykColor/CssCmykColorChannelsTuple.type";
export type { CssCmykColorData } from "./CssCmykColor/CssCmykColorData.type";
export { isCssCmykColorChannelsData } from "./CssCmykColor/isCssCmykColorChannelsData";
export { isCssCmykColorData } from "./CssCmykColor/isCssCmykColorData";
export { makeCssCmykColor } from "./CssCmykColor/makeCssCmykColor";
export { makeCssCmykColorData } from "./CssCmykColor/makeCssCmykColorData";
export { makeCssCmykColorFromConversionModel } from "./CssCmykColor/makeCssCmykColorFromConversionModel";
export { makeCssCmykColorFromCssColor } from "./CssCmykColor/makeCssCmykColorFromCssColor";
export { mustBeCssCmykColorChannelsData } from "./CssCmykColor/mustBeCssCmykColorChannelsData";
export { mustBeCssCmykColorData } from "./CssCmykColor/mustBeCssCmykColorData";
export { validateCssCmykColorChannelsData } from "./CssCmykColor/validateCssCmykColorChannelsData";
export { validateCssCmykColorData } from "./CssCmykColor/validateCssCmykColorData";


export { convertKeywordToConversionModel } from "./CssKeywordColor/convertKeywordToConversionModel";
export { CssKeywordColor } from "./CssKeywordColor/CssKeywordColor";
export type { CssKeywordColorData } from "./CssKeywordColor/CssKeywordColorData.type";
export { isCssKeywordColorData } from "./CssKeywordColor/isCssKeywordColorData";
export { makeCssKeywordColorData } from "./CssKeywordColor/makeCssKeywordColorData";
export { mustBeCssKeywordColorData } from "./CssKeywordColor/mustBeCssKeywordColorData";
export { validateCssKeywordColorData } from "./CssKeywordColor/validateCssKeywordColorData";

export { convertConversionModelToHexColorDefinition } from "./CssHexColor/convertConversionModelToHexColorDefinition";
export { convertHexColorDefinitionToConversionModel } from "./CssHexColor/convertHexColorDefinitionToConversionModel";
export { CssHexColor } from "./CssHexColor/CssHexColor";
export type { CssHexColorData } from "./CssHexColor/CssHexColorData.type";
export type { CssHexColorDefinition } from "./CssHexColor/CssHexColorDefinition.type";
export { isCssHexColorData } from "./CssHexColor/isCssHexColorData";
export { isCssHexColorDefinition } from "./CssHexColor/isCssHexColorDefinition";
export { makeCssHexColor } from "./CssHexColor/makeCssHexColor";
export { makeCssHexColorData } from "./CssHexColor/makeCssHexColorData";
export { makeCssHexColorDefinition } from "./CssHexColor/makeCssHexColorDefinition";
export { makeCssHexColorFromConversionModel } from "./CssHexColor/makeCssHexColorFromConversionModel";
export { makeCssHexColorFromCssColor } from "./CssHexColor/makeCssHexColorFromCssColor";
export { mustBeCssHexColorDefinition } from "./CssHexColor/mustBeCssHexColorDefinition";
export { normaliseCssHexColorDefinition } from "./CssHexColor/normaliseCssHexColorDefinition";
export { validateCssHexColorDefinition } from "./CssHexColor/validateCssHexColorDefinition";

export { convertConversionModelToHslChannelsData } from "./CssHslColor/convertConversionModelToHslChannelsData";
export { convertHslChannelsDataToConversionModel } from "./CssHslColor/convertHslChannelsDataToConversionModel";
export { CssHslColor } from "./CssHslColor/CssHslColor";
export type { CssHslColorChannelsData } from "./CssHslColor/CssHslColorChannelsData.type";
export type { CssHslColorChannelsTuple } from "./CssHslColor/CssHslColorChannelsTuple.type";
export type { CssHslColorData } from "./CssHslColor/CssHslColorData.type";
export { isCssHslColorChannelsData } from "./CssHslColor/isCssHslColorChannelsData";
export { isCssHslColorData } from "./CssHslColor/isCssHslColorData";
export { makeCssHslColor } from "./CssHslColor/makeCssHslColor";
export { makeCssHslColorData } from "./CssHslColor/makeCssHslColorData";
export { makeCssHslColorFromConversionModel } from "./CssHslColor/makeCssHslColorFromConversionModel";
export { makeCssHslColorFromCssColor } from "./CssHslColor/makeCssHslColorFromCssColor";
export { mustBeCssHslColorChannelsData } from "./CssHslColor/mustBeCssHslColorChannelsData";
export { mustBeCssHslColorData } from "./CssHslColor/mustBeCssHslColorData";
export { validateCssHslColorChannelsData } from "./CssHslColor/validateCssHslColorChannelsData";
export { validateCssHslColorData } from "./CssHslColor/validateCssHslColorData";

export type { CssHsvColorChannelsData } from "./CssHsvColor/CssHsvColorChannelsData.type";
export { isCssHsvColorChannelsData } from "./CssHsvColor/isCssHsvColorChannelsData";
export { isCssHsvColorData } from "./CssHsvColor/isCssHsvColorData";
export { mustBeCssHsvColorChannelsData } from "./CssHsvColor/mustBeCssHsvColorChannelsData";
export { mustBeCssHsvColorData } from "./CssHsvColor/mustBeCssHsvColorData";
export { validateCssHsvColorChannelsData } from "./CssHsvColor/validateCssHsvColorChannelsData";
export { validateCssHsvColorData } from "./CssHsvColor/validateCssHsvColorData";

export { convertConversionModelToHwbChannelsData } from "./CssHwbColor/convertConversionModelToHwbChannelsData";
export { convertHwbChannelsDataToConversionModel } from "./CssHwbColor/convertHwbChannelsDataToConversionModel";
export { CssHwbColor } from "./CssHwbColor/CssHwbColor";
export type { CssHwbColorChannelsData } from "./CssHwbColor/CssHwbColorChannelsData.type";
export type { CssHwbColorChannelsTuple } from "./CssHwbColor/CssHwbColorChannelsTuple.type";
export type { CssHwbColorData } from "./CssHwbColor/CssHwbColorData.type";
export { isCssHwbColorChannelsData } from "./CssHwbColor/isCssHwbColorChannelsData";
export { isCssHwbColorData } from "./CssHwbColor/isCssHwbColorData";
export { makeCssHwbColor } from "./CssHwbColor/makeCssHwbColor";
export { makeCssHwbColorData } from "./CssHwbColor/makeCssHwbColorData";
export { makeCssHwbColorFromConversionModel } from "./CssHwbColor/makeCssHwbColorFromConversionModel";
export { makeCssHwbColorFromCssColor } from "./CssHwbColor/makeCssHwbColorFromCssColor";
export { mustBeCssHwbColorChannelsData } from "./CssHwbColor/mustBeCssHwbColorChannelsData";
export { mustBeCssHwbColorData } from "./CssHwbColor/mustBeCssHwbColorData";
export { validateCssHwbColorChannelsData } from "./CssHwbColor/validateCssHwbColorChannelsData";
export { validateCssHwbColorData } from "./CssHwbColor/validateCssHwbColorData";

export { convertConversionModelToOklchChannelsData } from "./CssOklchColor/convertConversionModelToOklchChannelsData";
export { convertOklchChannelsDataToConversionModel } from "./CssOklchColor/convertOklchChannelsDataToConversionModel";
export { CssOklchColor } from "./CssOklchColor/CssOklchColor";
export type { CssOklchColorChannelsData } from "./CssOklchColor/CssOklchColorChannelsData.type";
export type { CssOklchColorData } from "./CssOklchColor/CssOklchColorData.type";
export { isCssOklchColorChannelsData } from "./CssOklchColor/isCssOklchColorChannelsData";
export { isCssOklchColorData } from "./CssOklchColor/isCssOklchColorData";
export { makeCssOklchColor } from "./CssOklchColor/makeCssOklchColor";
export { makeCssOklchColorData } from "./CssOklchColor/makeCssOklchColorData";
export { makeCssOklchColorFromConversionModel } from "./CssOklchColor/makeCssOklchColorFromConversionModel";
export { makeCssOklchColorFromCssColor } from "./CssOklchColor/makeCssOklchColorFromCssColor";
export { mustBeCssOklchColorChannelsData } from "./CssOklchColor/mustBeCssOklchColorChannelsData";
export { mustBeCssOklchColorData } from "./CssOklchColor/mustBeCssOklchColorData";
export { validateCssOklchColorChannelsData } from "./CssOklchColor/validateCssOklchColorChannelsData";
export { validateCssOklchColorData } from "./CssOklchColor/validateCssOklchColorData";

export { convertConversionModelToRgbChannelsData } from "./CssRgbColor/convertConversionModelToRgbChannelsData";
export { convertRgbChannelsDataToConversionModel } from "./CssRgbColor/convertRgbChannelsDataToConversionModel";
export { CssRgbColor } from "./CssRgbColor/CssRgbColor";
export type { CssRgbColorChannelsData } from "./CssRgbColor/CssRgbColorChannelsData.type";
export type { CssRgbColorChannelsTuple } from "./CssRgbColor/CssRgbColorChannelsTuple.type";
export type { CssRgbColorData } from "./CssRgbColor/CssRgbColorData.type";
export { isCssRgbColorChannelsData } from "./CssRgbColor/isCssRgbColorChannelsData";
export { isCssRgbColorData } from "./CssRgbColor/isCssRgbColorData";
export { makeCssRgbColor } from "./CssRgbColor/makeCssRgbColor";
export { makeCssRgbColorData } from "./CssRgbColor/makeCssRgbColorData";
export { makeCssRgbColorFromConversionModel } from "./CssRgbColor/makeCssRgbColorFromConversionModel";
export { makeCssRgbColorFromCssColor } from "./CssRgbColor/makeCssRgbColorFromCssColor";
export { mustBeCssRgbColorChannelsData } from "./CssRgbColor/mustBeCssRgbColorChannelsData";
export { mustBeCssRgbColorData } from "./CssRgbColor/mustBeCssRgbColorData";
export { validateCssRgbColorChannelsData } from "./CssRgbColor/validateCssRgbColorChannelsData";
export { validateCssRgbColorData } from "./CssRgbColor/validateCssRgbColorData";

// ================================================================
//
// OTHER USEFUL DATA TYPES
//
// ----------------------------------------------------------------

export type { AnyConversionModel } from "./ConversionModel/AnyConversionModel.type";
export type { ConversionModel } from "./ConversionModel/ConversionModel.type";
export { convertConversionModelToOklchColorSpace } from "./ConversionModel/convertConversionModelToOklchColorSpace";
export { convertConversionModelToSrgbColorSpace } from "./ConversionModel/convertConversionModelToSrgbColorSpace";
export { isConversionModel } from "./ConversionModel/isConversionModel";
export { mustBeConversionModel } from "./ConversionModel/mustBeConversionModel";
export { validateConversionModel } from "./ConversionModel/validateConversionModel";
export type { CssColorConverter } from "./CssColorConversions/CssColorConverter.type";
export { SUPPORTED_CSS_COLOR_FORMATS } from "./SupportedCssColorFormat/SUPPORTED_CSS_COLOR_FORMATS";
export type { SupportedCssColorFormat } from "./SupportedCssColorFormat/SupportedCssColorFormat.type";
export type { WcagContrastRatings } from "./WcagContrastRatings/WcagContrastRatings.type";

// ================================================================
//
// ERRORS THAT WE CAN THROW
//
// ----------------------------------------------------------------

export { MODULE_NAME } from "./Errors/defaults/MODULE_NAME";
export type { InvalidCssColorDataData } from "./Errors/InvalidCssColorData/InvalidCssColorDataData.type";
export { InvalidCssColorDataError } from "./Errors/InvalidCssColorData/InvalidCssColorDataError";
export type { UnsupportedCssColorConversionData } from "./Errors/UnsupportedCssColorConversion/UnsupportedCssColorConversionData.type";
export { UnsupportedCssColorConversionError } from "./Errors/UnsupportedCssColorConversion/UnsupportedCssColorConversionError";
export type { UnsupportedCssColorDefinitionData } from "./Errors/UnsupportedCssColorDefinition/UnsupportedCssColorDefinitionData.type";
export { UnsupportedCssColorDefinitionError } from "./Errors/UnsupportedCssColorDefinition/UnsupportedCssColorDefinitionError";

// ================================================================
//
// USEFUL HELPERS FOR BUILDING YOUR OWN CssColor CLASSES
//
// ----------------------------------------------------------------

export { validateCssColorChannel } from "./helpers/validateCssColorChannel";
export { validateCssColorDataHasChannels } from "./helpers/validateCssColorDataHasChannels";
export { validateCssColorDataHasColorFormat } from "./helpers/validateCssColorDataHasColorFormat";
export { validateCssColorDataHasColorSpace } from "./helpers/validateCssColorDataHasColorSpace";
export { validateObjectHasStringProperty } from "./helpers/validateObjectHasStringProperty";

// ================================================================
//
// INSPECTORS / CALCULATORS
//
// ----------------------------------------------------------------

export { contrastRatio } from "./inspectors/contrastRatio";
export { darkModeContrastRatio } from "./inspectors/darkModeContrastRatio";
export { hasClearContrast } from "./inspectors/hasClearContrast";
export { isDark } from "./inspectors/isDark";
export { isDull } from "./inspectors/isDull";
export { isLight } from "./inspectors/isLight";
export { isMidtone } from "./inspectors/isMidtone";
export { isMonochrome } from "./inspectors/isMonochome";
export { lightModeContrastRatio } from "./inspectors/lightModeContrastRatio";
export { luma } from "./inspectors/luma";
export { relativeLuminance } from "./inspectors/relativeLuminance";
export { shade, type Shade } from "./inspectors/shade";
export { tonality, type Tonality } from "./inspectors/tonality";
export { wcagContrast } from "./inspectors/wcagContrast";

export { hues, type Hue } from "./inspectors/hues";
export { isBlackHue } from "./inspectors/hues/isBlackHue";
export { isBlueHue } from "./inspectors/hues/isBlueHue";
export { isCyanHue } from "./inspectors/hues/isCyanHue";
export { isGrayHue } from "./inspectors/hues/isGrayHue";
export { isGreenHue } from "./inspectors/hues/isGreenHue";
export { isMagentaHue } from "./inspectors/hues/isMagentaHue";
export { isOrangeHue } from "./inspectors/hues/isOrangeHue";
export { isPinkHue } from "./inspectors/hues/isPinkHue";
export { isPurpleHue } from "./inspectors/hues/isPurpleHue";
export { isRedHue } from "./inspectors/hues/isRedHue";
export { isVioletHue } from "./inspectors/hues/isVioletHue";
export { isWhiteHue } from "./inspectors/hues/isWhiteHue";
export { isYellowHue } from "./inspectors/hues/isYellowHue";
export { isHue } from "./inspectors/isHue";

