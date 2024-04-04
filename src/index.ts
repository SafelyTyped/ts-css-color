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

export type { AnyCssColor } from "./CssColor/AnyCssColor";
export type { CssColorData } from "./CssColor/CssColorData";
export { CssColor } from "./CssColor/CssColor";
export { makeCssColor } from "./CssColor/makeCssColor";
export { makeCssColorData } from "./CssColor/makeCssColorData";
export { isCssColorData } from "./CssColor/isCssColorData";
export { mustBeCssColorData } from "./CssColor/mustBeCssColorData";
export { validateCssColorData } from "./CssColor/validateCssColorData";

export type { CssExtendedColor } from "./CssKeywordColor/CssExtendedColors";
export type { CssExtendedColors } from "./CssKeywordColor/CssExtendedColors";
export { CSS_EXTENDED_COLORS_TO_HEX } from "./CssKeywordColor/CssExtendedColors";
export { CSS_HEX_TO_EXTENDED_COLORS } from "./CssKeywordColor/CssExtendedColors";
export type { CssKeywordColorData } from "./CssKeywordColor/CssKeywordColor";
export { CssKeywordColor } from "./CssKeywordColor/CssKeywordColor";

export type { CssHexColorData } from "./CssHexColor/CssHexColor";
export { CssHexColor } from "./CssHexColor/CssHexColor";
export type { CssHexColorDefinition } from "./CssHexColor/CssHexColorDefinition";
export { isCssHexColorDefinition } from "./CssHexColor/isCssHexColorDefinition";
export { makeCssHexColorDefinition } from "./CssHexColor/makeCssHexColorDefinition";
export { mustBeCssHexColorDefinition } from "./CssHexColor/mustBeCssHexColorDefinition";
export { normaliseCssHexColorDefinition } from "./CssHexColor/normaliseCssHexColorDefinition";
export { validateCssHexColorDefinition } from "./CssHexColor/validateCssHexColorDefinition";

export type { CssHslColorChannelsData } from "./CssHslColor/CssHslColor";
export type { CssHslColorChannelsTuple } from "./CssHslColor/CssHslColor";
export type { CssHslColorData } from "./CssHslColor/CssHslColor";
export { CssHslColor } from "./CssHslColor/CssHslColor";

export type { CssHwbColorChannelsData } from "./CssHwbColor/CssHwbColor";
export type { CssHwbColorChannelsTuple } from "./CssHwbColor/CssHwbColor";
export type { CssHwbColorData } from "./CssHwbColor/CssHwbColor";
export { CssHwbColor } from "./CssHwbColor/CssHwbColor";

export type { CssRgbColorChannelsData } from "./CssRgbColor/CssRgbColor";
export type { CssRgbColorChannelsTuple } from "./CssRgbColor/CssRgbColor";
export type { CssRgbColorData } from "./CssRgbColor/CssRgbColor";
export { CssRgbColor } from "./CssRgbColor/CssRgbColor";

// ================================================================
//
// OTHER USEFUL DATA TYPES
//
// ----------------------------------------------------------------

export type { WcagContrastRatings } from "./WcagContrastRatings/WcagContrastRatings";

// ================================================================
//
// ERRORS THAT WE CAN THROW
//
// ----------------------------------------------------------------

export { MODULE_NAME } from "./Errors/defaults/MODULE_NAME";
export type { InvalidCssColorDataData } from "./Errors/InvalidCssColorData/InvalidCssColorDataData";
export { InvalidCssColorDataError } from "./Errors/InvalidCssColorData/InvalidCssColorDataError";
export type { UnsupportedCssColorDefinitionData } from "./Errors/UnsupportedCssColorDefinition/UnsupportedCssColorDefinitionData";
export { UnsupportedCssColorDefinitionError } from "./Errors/UnsupportedCssColorDefinition/UnsupportedCssColorDefinitionError";

// ================================================================
//
// INSPECTORS / CALCULATORS
//
// ----------------------------------------------------------------

export { contrastLevel } from "./inspectors/contrastLevel";
export { wcagContrast } from "./inspectors/wcagContrast";
export { contrastRatio } from "./inspectors/contrastRatio";
export { darkModeContrastRatio } from "./inspectors/darkModeContrastRatio";
export { hasClearContrast } from "./inspectors/hasClearContrast";
export { isDark } from "./inspectors/isDark";
export { isDull } from "./inspectors/isDull";
export { isLight } from "./inspectors/isLight";
export { lightModeContrastRatio } from "./inspectors/lightModeContrastRatio";
export { luma } from "./inspectors/luma";
export { relativeLuminance } from "./inspectors/relativeLuminance";
export { type Shade, shade } from "./inspectors/shade";

export { type Hue, hues } from "./inspectors/hues/hues";
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