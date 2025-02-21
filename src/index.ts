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

export type { CssColorspace } from "./CssColorspace/CssColorspaces.type";
export type { CssColorspacedColor } from "./CssColorspace/CssColorspacedColor.type";
export type { CssOklchColorSpace } from "./CssColorspace/CssOklchColorSpace.type";
export type { CssSrgbColorSpace } from "./CssColorspace/CssSrgbColorSpace.type";

export type { AnyCssColor } from "./CssColor/AnyCssColor.type";
export type { CssColorData } from "./CssColor/CssColorData.type";
export { CssColor } from "./CssColor/CssColor";
export { makeCssColor } from "./CssColor/makeCssColor";
export { makeCssColorData } from "./CssColor/makeCssColorData";
export { isCssColorData } from "./CssColor/isCssColorData";
export { mustBeCssColorData } from "./CssColor/mustBeCssColorData";
export { validateCssColorData } from "./CssColor/validateCssColorData";

export type { CssExtendedColor } from "./CssExtendedColors/CssExtendedColor.type";
export type { CssExtendedColors } from "./CssExtendedColors/CssExtendedColors.type";
export { CSS_EXTENDED_COLORS_TO_HEX } from "./CssExtendedColors/CssExtendedColors.const";
export { CSS_HEX_TO_EXTENDED_COLORS } from "./CssExtendedColors/CssExtendedColors.const";
export { isCssExtendedColor } from "./CssExtendedColors/isCssExtendedColor";
export { mustBeCssExtendedColor } from "./CssExtendedColors/mustBeCssExtendedColor";
export { validateCssExtendedColor } from "./CssExtendedColors/validateCssExtendedColor";

export type { CssKeywordColorData } from "./CssKeywordColor/CssKeywordColorData.type";
export { CssKeywordColor } from "./CssKeywordColor/CssKeywordColor";
export { isCssKeywordColorData } from "./CssKeywordColor/isCssKeywordColorData";
export { makeCssKeywordColorData } from "./CssKeywordColor/makeCssKeywordColorData";
export { mustBeCssKeywordColorData } from "./CssKeywordColor/mustBeCssKeywordColorData";
export { validateCssKeywordColorData } from "./CssKeywordColor/validateCssKeywordColorData";

export type { CssHexColorData } from "./CssHexColor/CssHexColorData.type";
export { CssHexColor } from "./CssHexColor/CssHexColor";
export type { CssHexColorDefinition } from "./CssHexColor/CssHexColorDefinition.type";
export { isCssHexColorData } from "./CssHexColor/isCssHexColorData";
export { isCssHexColorDefinition } from "./CssHexColor/isCssHexColorDefinition";
export { makeCssHexColorData } from "./CssHexColor/makeCssHexColorData";
export { makeCssHexColorDefinition } from "./CssHexColor/makeCssHexColorDefinition";
export { mustBeCssHexColorDefinition } from "./CssHexColor/mustBeCssHexColorDefinition";
export { normaliseCssHexColorDefinition } from "./CssHexColor/normaliseCssHexColorDefinition";
export { validateCssHexColorDefinition } from "./CssHexColor/validateCssHexColorDefinition";

export type { CssHslColorChannelsData } from "./CssHslColor/CssHslColorChannelsData.type";
export type { CssHslColorChannelsTuple } from "./CssHslColor/CssHslColorChannelsTuple.type";
export type { CssHslColorData } from "./CssHslColor/CssHslColorData.type";
export { CssHslColor } from "./CssHslColor/CssHslColor";
export { isCssHslColorChannelsData } from "./CssHslColor/isCssHslColorChannelsData";
export { isCssHslColorData } from "./CssHslColor/isCssHslColorData";
export { makeCssHslColorData } from "./CssHslColor/makeCssHslColorData";
export { mustBeCssHslColorChannelsData } from "./CssHslColor/mustBeCssHslColorChannelsData";
export { mustBeCssHslColorData } from "./CssHslColor/mustBeCssHslColorData";
export { validateCssHslColorChannelsData } from "./CssHslColor/validateCssHslColorChannelsData";
export { validateCssHslColorData } from "./CssHslColor/validateCssHslColorData";

export type { CssHwbColorChannelsData } from "./CssHwbColor/CssHwbColorChannelsData.type";
export type { CssHwbColorChannelsTuple } from "./CssHwbColor/CssHwbColorChannelsTuple.type";
export type { CssHwbColorData } from "./CssHwbColor/CssHwbColorData.type";
export { CssHwbColor } from "./CssHwbColor/CssHwbColor";
export { isCssHwbColorChannelsData } from "./CssHwbColor/isCssHwbColorChannelsData";
export { isCssHwbColorData } from "./CssHwbColor/isCssHwbColorData";
export { makeCssHwbColorData } from "./CssHwbColor/makeCssHwbColorData";
export { mustBeCssHwbColorChannelsData } from "./CssHwbColor/mustBeCssHwbColorChannelsData";
export { mustBeCssHwbColorData } from "./CssHwbColor/mustBeCssHwbColorData";
export { validateCssHwbColorChannelsData } from "./CssHwbColor/validateCssHwbColorChannelsData";
export { validateCssHwbColorData } from "./CssHwbColor/validateCssHwbColorData";

export type { CssOklchColorData } from "./CssOklchColor/CssOklchColorData.type";
export type { CssOklchColorChannelsData } from "./CssOklchColor/CssOklchColorChannelsData.type";
export { isCssOklchColorChannelsData } from "./CssOklchColor/isCssOklchColorChannelsData";
export { mustBeCssOklchColorChannelsData } from "./CssOklchColor/mustBeCssOklchColorChannelsData";
export { mustBeCssOklchColorData } from "./CssOklchColor/mustBeCssOklchColorData";
export { validateCssOklchColorChannelsData } from "./CssOklchColor/validateCssOklchColorChannelsData";
export { validateCssOklchColorData } from "./CssOklchColor/validateCssOklchColorData";

export type { CssRgbColorChannelsData } from "./CssRgbColor/CssRgbColorChannelsData.type";
export type { CssRgbColorChannelsTuple } from "./CssRgbColor/CssRgbColorChannelsTuple.type";
export type { CssRgbColorData } from "./CssRgbColor/CssRgbColorData.type";
export { CssRgbColor } from "./CssRgbColor/CssRgbColor";
export { isCssRgbColorData } from "./CssRgbColor/isCssRgbColorData";
export { isCssRgbColorChannelsData } from "./CssRgbColor/isCssRgbColorChannelsData";
export { makeCssRgbColorData } from "./CssRgbColor/makeCssRgbColorData";
export { mustBeCssRgbColorData } from "./CssRgbColor/mustBeCssRgbColorData";
export { mustBeCssRgbColorChannelsData } from "./CssRgbColor/mustBeCssRgbColorChannelsData";
export { validateCssRgbColorChannelsData } from "./CssRgbColor/validateCssRgbColorChannelsData";
export { validateCssRgbColorData } from "./CssRgbColor/validateCssRgbColorData";

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
export type { InvalidCssColorDataData } from "./Errors/InvalidCssColorData/InvalidCssColorDataData.type";
export { InvalidCssColorDataError } from "./Errors/InvalidCssColorData/InvalidCssColorDataError";
export type { UnsupportedCssColorDefinitionData } from "./Errors/UnsupportedCssColorDefinition/UnsupportedCssColorDefinitionData.type";
export { UnsupportedCssColorDefinitionError } from "./Errors/UnsupportedCssColorDefinition/UnsupportedCssColorDefinitionError";

// ================================================================
//
// USEFUL HELPERS FOR BUILDING YOUR OWN CssColor CLASSES
//
// ----------------------------------------------------------------

export { validateCssColorChannel } from "./helpers/validateCssColorChannel";
export { validateCssColorDataHasChannels } from "./helpers/validateCssColorDataHasChannels";

// ================================================================
//
// INSPECTORS / CALCULATORS
//
// ----------------------------------------------------------------

export { wcagContrast } from "./inspectors/wcagContrast";
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
export { type Shade, shade } from "./inspectors/shade";
export { type Tonality, tonality } from "./inspectors/tonality";

export { type Hue, hues } from "./inspectors/hues";
export { isHue } from "./inspectors/isHue";
export { isBlackHue } from "./inspectors/hues/isBlackHue";
export { isBlueHue } from "./inspectors/hues/isBlueHue";
export { isCyanHue } from "./inspectors/hues/isCyanHue";
export { isGreenHue } from "./inspectors/hues/isGreenHue";
export { isGrayHue } from "./inspectors/hues/isGrayHue";
export { isMagentaHue } from "./inspectors/hues/isMagentaHue";
export { isOrangeHue } from "./inspectors/hues/isOrangeHue";
export { isPinkHue } from "./inspectors/hues/isPinkHue";
export { isPurpleHue } from "./inspectors/hues/isPurpleHue";
export { isRedHue } from "./inspectors/hues/isRedHue";
export { isVioletHue } from "./inspectors/hues/isVioletHue";
export { isWhiteHue } from "./inspectors/hues/isWhiteHue";
export { isYellowHue } from "./inspectors/hues/isYellowHue";