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

import { formatCss, hsl } from "culori";
import { convertViaRgb, convertWithinSrgb, parseCss, round, type ConversionModel, type HslColorModel, type HslConversionModel, type ModelConverter } from "../..";

export const HSL_MODEL_CONVERTER: ModelConverter<HslColorModel, HslConversionModel> = {
    toConversionModel: (input: HslColorModel) => {
        return HSL_MODEL_CONVERTER.normaliseConversionModel({
            mode: "hsl",
            h: input.hue,
            s: input.saturation / 100,
            l: input.luminosity / 100,
            alpha: input.alpha,
        });
    },

    normaliseConversionModel: (input: HslConversionModel) => {
        return {
            ...input,
            s: round(4, input.s),
            l: round(4, input.l),
        };
    },

    toColorModel: (input: ConversionModel) => {
        const model = hsl(input);

        return HSL_MODEL_CONVERTER.normaliseColorModel({
            colorModel: "hsl",
            colorSpace: "sRGB",
            hue: model.h ??= 0,
            saturation: model.s * 100,
            luminosity: model.l * 100,
            /* c8 ignore next */
            alpha: model.alpha ??= 1,
        });
    },


    normaliseColorModel: (input: HslColorModel) => {
        return {
            ...input,
            hue: round(0, input.hue),
            saturation: round(0, input.saturation),
            luminosity: round(0, input.luminosity),
        };
    },

    // direct conversion to OKLCH produces different results
    prepForOklch: convertViaRgb,

    // direct conversion to other sRGB models produces different results
    prepForSrgb: convertWithinSrgb,

    // hsl() is directly supported in CSS
    parse: (input: string) => HSL_MODEL_CONVERTER.normaliseConversionModel(hsl(parseCss(input))),
    toCss: (input: HslColorModel) => formatCss(HSL_MODEL_CONVERTER.toConversionModel(input)),
};

