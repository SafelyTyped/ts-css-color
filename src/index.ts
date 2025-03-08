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
// COLOR SPACES
//
// ----------------------------------------------------------------

export type { ColorSpacesSet } from "./ColorSpaces/ColorSpacesSet.type";
export { SUPPORTED_COLOR_SPACES } from "./ColorSpaces/SUPPORTED_COLOR_SPACES";
export type { SupportedColorSpace } from "./ColorSpaces/SupportedColorSpace.type";

// ================================================================
//
// COLOR MODELS
//
// Color models are how different color notations are represented
// internally.
//
// ----------------------------------------------------------------

export type { ColorModel } from "./ColorModels/ColorModel.type";

export type { CmykColorModel } from "./ColorModels/Cmyk/CmykColorModel.type";
export type { CssNamedColorColorModel } from "./ColorModels/CssNamedColor/CssNamedColorColorModel.type";
export type { HexColorModel } from "./ColorModels/Hex/HexColorModel.type";
export type { HslColorModel } from "./ColorModels/Hsl/HslColorModel.type";
export type { HsvColorModel } from "./ColorModels/Hsv/HsvColorModel.type";
export type { HwbColorModel } from "./ColorModels/Hwb/HwbColorModel.type";
export type { OklchColorModel } from "./ColorModels/Oklch/OklchColorModel.type";
export type { RgbColorModel } from "./ColorModels/Rgb/RgbColorModel.type";

export type { SupportedColorModel } from "./ColorModels/SupportedColorModel.type";

export type { ColorModelsSet } from "./ColorModels/ColorModelsSet.type";
export { SUPPORTED_COLOR_MODELS } from "./ColorModels/SUPPORTED_COLOR_MODELS";

export { isCmykColorModel } from "./ColorModels/Cmyk/isCmykColorModel";
export { mustBeCmykColorModel } from "./ColorModels/Cmyk/mustBeCmykColorModel";
export { validateCmykColorModel } from "./ColorModels/Cmyk/validateCmykColorModel";

export { isHexColorModel } from "./ColorModels/Hex/isHexColorModel";
export { mustBeHexColorModel } from "./ColorModels/Hex/mustBeHexColorModel";
export { validateHexColorModel } from "./ColorModels/Hex/validateHexColorModel";

export { isHslColorModel } from "./ColorModels/Hsl/isHslColorModel";
export { mustBeHslColorModel } from "./ColorModels/Hsl/mustBeHslColorModel";
export { validateHslColorModel } from "./ColorModels/Hsl/validateHslColorModel";

export { isHsvColorModel } from "./ColorModels/Hsv/isHsvColorModel";
export { mustBeHsvColorModel } from "./ColorModels/Hsv/mustBeHsvColorModel";
export { validateHsvColorModel } from "./ColorModels/Hsv/validateHsvColorModel";

export { isHwbColorModel } from "./ColorModels/Hwb/isHwbColorModel";
export { mustBeHwbColorModel } from "./ColorModels/Hwb/mustBeHwbColorModel";
export { validateHwbColorModel } from "./ColorModels/Hwb/validateHwbColorModel";

export { isOklchColorModel } from "./ColorModels/Oklch/isOklchColorModel";
export { mustBeOklchColorModel } from "./ColorModels/Oklch/mustBeOklchColorModel";
export { validateOklchColorModel } from "./ColorModels/Oklch/validateOklchColorModel";

export { isRgbColorModel } from "./ColorModels/Rgb/isRgbColorModel";
export { mustBeRgbColorModel } from "./ColorModels/Rgb/mustBeRgbColorModel";
export { validateRgbColorModel } from "./ColorModels/Rgb/validateRgbColorModel";

export { isCssNamedColorColorModel } from "./ColorModels/CssNamedColor/isCssNamedColorColorModel";
export { mustBeCssNamedColorColorModel } from "./ColorModels/CssNamedColor/mustBeCssNamedColorColorModel";
export { validateCssNamedColorColorModel } from "./ColorModels/CssNamedColor/validateCssNamedColorColorModel";

// ================================================================
//
// CONVERSION MODELS
//
// Conversion models are how our chosen third-party color conversion
// package represents different color models.
//
// Some color models share the same conversion model.
//
// We need to support two-way conversion.
//
// ----------------------------------------------------------------

export type { ConversionModel } from "./ConversionModels/ConversionModel.type";
export type { ModelConverter } from "./ConversionModels/ModelConverter.type";
export { mustBeConversionModel } from "./ConversionModels/mustBeConversionModel";
export { validateConversionModel } from "./ConversionModels/validateConversionModel";

export type { CmykConversionModel } from "./ConversionModels/Cmyk/CmykConversionModel.type";
export type { HslConversionModel } from "./ConversionModels/Hsl/HslConversionModel.type";
export type { HsvConversionModel } from "./ConversionModels/Hsv/HsvConversionModel.type";
export type { HwbConversionModel } from "./ConversionModels/Hwb/HwbConversionModel.type";
export type { OklchConversionModel } from "./ConversionModels/Oklch/OklchConversionModel.type";
export type { RgbConversionModel } from "./ConversionModels/Rgb/RgbConversionModel.type";

export { convertViaRgb } from "./ConversionModels/convertViaRgb";
export { convertWithinSrgb } from "./ConversionModels/convertWithinSrgb";

export { CMYK_MODEL_CONVERTER } from "./ConversionModels/Cmyk/CMYK_MODEL_CONVERTER";
export { HSL_MODEL_CONVERTER } from "./ConversionModels/Hsl/HSL_MODEL_CONVERTER";
export { HSV_MODEL_CONVERTER } from "./ConversionModels/Hsv/HSV_MODEL_CONVERTER";
export { HWB_MODEL_CONVERTER } from "./ConversionModels/Hwb/HWB_MODEL_CONVERTER";
export { RGB_MODEL_CONVERTER } from "./ConversionModels/Rgb/RGB_MODEL_CONVERTER";

export { CSSNAMEDCOLOR_MODEL_CONVERTER } from "./ConversionModels/CssNamedColor/CSSNAMEDCOLOR_MODEL_CONVERTER";
export { HEX_MODEL_CONVERTER } from "./ConversionModels/Hex/HEX_MODEL_CONVERTER";

export type { AnyCssColor } from "./CssColor/AnyCssColor.type";
export type { CssColorData } from "./CssColor/CssColorData.type";

export type { CssExtendedColor } from "./CssExtendedColors/CssExtendedColor.type";
export { CSS_EXTENDED_COLORS_TO_HEX, CSS_HEX_TO_EXTENDED_COLORS } from "./CssExtendedColors/CssExtendedColors.const";
export type { CssExtendedColors } from "./CssExtendedColors/CssExtendedColors.type";
export { isCssExtendedColor } from "./CssExtendedColors/isCssExtendedColor";
export { mustBeCssExtendedColor } from "./CssExtendedColors/mustBeCssExtendedColor";
export { validateCssExtendedColor } from "./CssExtendedColors/validateCssExtendedColor";

export type { CmykColorTuple as CssCmykColorChannelsTuple } from "./CssCmykColor/CmykColorTuple.type";
export type { CssCmykColor } from "./CssCmykColor/CssCmykColor.type";
export { makeCssCmykColor } from "./CssCmykColor/makeCssCmykColor";
export { makeCssCmykColorFromCmykColorModel } from "./CssCmykColor/makeCssCmykColorFromCmykColorModel";
export { makeCssCmykColorFromConversionModel } from "./CssCmykColor/makeCssCmykColorFromConversionModel";
export { makeCssCmykColorFromCssColor } from "./CssCmykColor/makeCssCmykColorFromCssColor";

export type { CssKeywordColor } from "./CssKeywordColor/CssKeywordColor.type";

export type { CssHexColor } from "./CssHexColor/CssHexColor.type";
export { makeCssHexColor } from "./CssHexColor/makeCssHexColor";
export { makeCssHexColorFromCssColor } from "./CssHexColor/makeCssHexColorFromCssColor";

export type { CssHexColorDefinition } from "./CssHexColorDefinition/CssHexColorDefinition.type";
export { isCssHexColorDefinition } from "./CssHexColorDefinition/isCssHexColorDefinition";
export { makeCssHexColorDefinition } from "./CssHexColorDefinition/makeCssHexColorDefinition";
export { mustBeCssHexColorDefinition } from "./CssHexColorDefinition/mustBeCssHexColorDefinition";
export { normaliseCssHexColorDefinition } from "./CssHexColorDefinition/normaliseCssHexColorDefinition";
export { normaliseCssHexColorDefinitionFormat } from "./CssHexColorDefinition/normaliseCssHexColorDefinitionFormat";
export { validateCssHexColorDefinition } from "./CssHexColorDefinition/validateCssHexColorDefinition";

export type { CssHslColor } from "./CssHslColor/CssHslColor.type";
export type { CssHslColorChannelsTuple } from "./CssHslColor/CssHslColorChannelsTuple.type";
export { makeCssHslColor } from "./CssHslColor/makeCssHslColor";
export { makeCssHslColorFromConversionModel } from "./CssHslColor/makeCssHslColorFromConversionModel";
export { makeCssHslColorFromCssColor } from "./CssHslColor/makeCssHslColorFromCssColor";

export type { CssHsvColor } from "./CssHsvColor/CssHsvColor.type";
export type { CssHsvColorChannelsTuple } from "./CssHsvColor/CssHsvColorChannelsTuple.type";
export { makeCssHsvColor } from "./CssHsvColor/makeCssHsvColor";
export { makeCssHsvColorFromConversionModel } from "./CssHsvColor/makeCssHsvColorFromConversionModel";
export { makeCssHsvColorFromCssColor } from "./CssHsvColor/makeCssHsvColorFromCssColor";

export type { CssHwbColor } from "./CssHwbColor/CssHwbColor.type";
export type { CssHwbColorChannelsTuple } from "./CssHwbColor/CssHwbColorChannelsTuple.type";
export { makeCssHwbColor } from "./CssHwbColor/makeCssHwbColor";
export { makeCssHwbColorFromConversionModel } from "./CssHwbColor/makeCssHwbColorFromConversionModel";
export { makeCssHwbColorFromCssColor } from "./CssHwbColor/makeCssHwbColorFromCssColor";

export type { CssOklchColor } from "./CssOklchColor/CssOklchColor.type";
export { makeCssOklchColor } from "./CssOklchColor/makeCssOklchColor";
export { makeCssOklchColorFromConversionModel } from "./CssOklchColor/makeCssOklchColorFromConversionModel";
export { makeCssOklchColorFromCssColor } from "./CssOklchColor/makeCssOklchColorFromCssColor";
export type { OklchColorTuple as CssOklchColorChannelsTuple } from "./CssOklchColor/OklchColorTuple.type";

export type { CssRgbColor } from "./CssRgbColor/CssRgbColor.type";
export { makeCssRgbColor } from "./CssRgbColor/makeCssRgbColor";
export { makeCssRgbColorFromConversionModel } from "./CssRgbColor/makeCssRgbColorFromConversionModel";
export { makeCssRgbColorFromCssColor } from "./CssRgbColor/makeCssRgbColorFromCssColor";
export type { RgbColorTuple as CssRgbColorChannelsTuple } from "./CssRgbColor/RgbColorTuple.type";

export { makeCssColor } from "./CssColor/makeCssColor";
export { makeCssColorFromConversionModel } from "./CssColor/makeCssColorFromConversionModel";
export { makeCssHexColorFromConversionModel } from "./CssHexColor/makeCssHexColorFromConversionModel";

// ================================================================
//
// OTHER USEFUL DATA TYPES
//
// ----------------------------------------------------------------

export type { WcagContrastRatings } from "./WcagContrastRatings/WcagContrastRatings.type";

// ================================================================
//
// ERRORS THAT WE CAN THROW
//
// ----------------------------------------------------------------

export { MODULE_NAME } from "./Errors/defaults/MODULE_NAME";
export { InvalidCssColorChannelValueError } from "./Errors/InvalidCssColorChannelValue/InvalidCssColorChannelValueError";
export type { InvalidCssColorDataData } from "./Errors/InvalidCssColorData/InvalidCssColorDataData.type";
export { InvalidCssColorDataError } from "./Errors/InvalidCssColorData/InvalidCssColorDataError";
export { InvalidCssColorNameError } from "./Errors/InvalidCssColorName/InvalidCssColorNameError";
export type { UnsupportedCssColorConversionData } from "./Errors/UnsupportedCssColorConversion/UnsupportedCssColorConversionData.type";
export { UnsupportedCssColorConversionError } from "./Errors/UnsupportedCssColorConversion/UnsupportedCssColorConversionError";
export type { UnsupportedCssColorDefinitionData } from "./Errors/UnsupportedCssColorDefinition/UnsupportedCssColorDefinitionData.type";
export { UnsupportedCssColorDefinitionError } from "./Errors/UnsupportedCssColorDefinition/UnsupportedCssColorDefinitionError";

// ================================================================
//
// USEFUL HELPERS FOR BUILDING YOUR OWN CssColor CLASSES
//
// ----------------------------------------------------------------

export { parseCss } from "./CssParser/parseCss";
export { round } from "./helpers/round";
export { validateCssColorChannel } from "./helpers/validateCssColorChannel";
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

