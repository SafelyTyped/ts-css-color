//
// Copyright (c) 2025-present Ganbaro Digital Ltd
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

import type { HslColorModel } from "../ColorModels/Hsl/HslColorModel.type";
import { CSSNAMEDCOLOR_MODEL_CONVERTER } from "../ConversionModels/CssNamedColor/CSSNAMEDCOLOR_MODEL_CONVERTER";
import { HEX_MODEL_CONVERTER } from "../ConversionModels/Hex/HEX_MODEL_CONVERTER";
import { HSL_MODEL_CONVERTER } from "../ConversionModels/Hsl/HSL_MODEL_CONVERTER";
import { makeCssCmykColorFromCssColor } from "../CssCmykColor/makeCssCmykColorFromCssColor";
import { makeCssHsvColorFromCssColor } from "../CssHsvColor/makeCssHsvColorFromCssColor";
import { makeCssHwbColorFromCssColor } from "../CssHwbColor/makeCssHwbColorFromCssColor";
import { makeCssOklchColorFromCssColor } from "../CssOklchColor/makeCssOklchColorFromCssColor";
import { makeCssRgbColorFromCssColor } from "../CssRgbColor/makeCssRgbColorFromCssColor";
import type { CssHslColor } from "./CssHslColor.type";


/**
 * makeCssHslColorFromHslColorModel creates a CssHslColor object from an HslColorModel.
 * 
 * This function creates a CssHslColor object directly from an HslColorModel,
 * without having to go through the more general CssColor object first.
 * 
 * @param colorName - the name to assign to the color
 * @param cssDefinition - the original CSS string that defined this color
 * @param colorModel - the HSL color model to convert
 * @returns a fully initialized CssHslColor object
 */
export function makeCssHslColorFromHslColorModel(
    colorName: string,
    cssDefinition: string,
    colorModel: HslColorModel,
): CssHslColor
{
    // shorthand
    const conversionModel = HSL_MODEL_CONVERTER.toConversionModel(colorModel);
    const hex = HEX_MODEL_CONVERTER.toColorModel(conversionModel).hex;
    const cssName = CSSNAMEDCOLOR_MODEL_CONVERTER.toColorModel(conversionModel)?.color;

    return {
        name: colorName,
        definition: cssDefinition,

        get cmyk() {
            return makeCssCmykColorFromCssColor(this);
        },
        get hsl()  {
            return this;
        },
        get hsv()  {
            return makeCssHsvColorFromCssColor(this);
        },
        get hwb() {
            return makeCssHwbColorFromCssColor(this);
        },
        get oklch() {
            return makeCssOklchColorFromCssColor(this);
        },
        get rgb() {
            return makeCssRgbColorFromCssColor(this);
        },

        hex,
        cssName,

        conversionModel: conversionModel,
        channelsData: colorModel,
        channelsTuple: [ colorModel.hue, colorModel.saturation, colorModel.luminosity ],
        css: HSL_MODEL_CONVERTER.toCss(colorModel, cssDefinition),

        ...colorModel,
    };
}