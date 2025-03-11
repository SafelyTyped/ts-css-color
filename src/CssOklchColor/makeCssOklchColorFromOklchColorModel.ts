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

import type { OklchColorModel } from "../ColorModels/Oklch/OklchColorModel.type";
import { CSSNAMEDCOLOR_MODEL_CONVERTER } from "../ConversionModels/CssNamedColor/CSSNAMEDCOLOR_MODEL_CONVERTER";
import { HEX_MODEL_CONVERTER } from "../ConversionModels/Hex/HEX_MODEL_CONVERTER";
import { OKLCH_MODEL_CONVERTER } from "../ConversionModels/Oklch/OKLCH_MODEL_CONVERTER";
import { makeCssCmykColorFromCssColor } from "../CssCmykColor/makeCssCmykColorFromCssColor";
import { makeCssHslColorFromCssColor } from "../CssHslColor/makeCssHslColorFromCssColor";
import { makeCssHsvColorFromCssColor } from "../CssHsvColor/makeCssHsvColorFromCssColor";
import { makeCssHwbColorFromCssColor } from "../CssHwbColor/makeCssHwbColorFromCssColor";
import { makeCssRgbColorFromCssColor } from "../CssRgbColor/makeCssRgbColorFromCssColor";
import type { CssOklchColor } from "./CssOklchColor.type";

export function makeCssOklchColorFromOklchColorModel(
    colorName: string,
    cssDefinition: string,
    colorModel: OklchColorModel,
): CssOklchColor
{
    // shorthand
    const conversionModel = OKLCH_MODEL_CONVERTER.toConversionModel(colorModel);
    const hex = HEX_MODEL_CONVERTER.toColorModel(conversionModel).hex;
    const keyword = CSSNAMEDCOLOR_MODEL_CONVERTER.toColorModel(conversionModel)?.color;

    return {
        name: colorName,
        definition: cssDefinition,

        get cmyk() {
            return makeCssCmykColorFromCssColor(this);
        },
        get hsl()  {
            return makeCssHslColorFromCssColor(this);
        },
        get hsv()  {
            return makeCssHsvColorFromCssColor(this);
        },
        get hwb() {
            return makeCssHwbColorFromCssColor(this);
        },
        get oklch() {
            return this;
        },
        get rgb() {
            return makeCssRgbColorFromCssColor(this);
        },

        hex,
        keyword,

        conversionModel: conversionModel,
        channelsData: colorModel,
        channelsTuple: [ colorModel.lightness, colorModel.chroma, colorModel.hue ],
        css: OKLCH_MODEL_CONVERTER.toCss(colorModel, cssDefinition),

        ...colorModel,
    };
}