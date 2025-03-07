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

import { formatCss, oklch } from "culori";
import { parseCss, round, type ConversionModel, type ModelConverter, type OklchColorModel, type OklchConversionModel } from "../..";

export const OKLCH_MODEL_CONVERTER: ModelConverter<OklchColorModel, OklchConversionModel> = {
    toConversionModel: (input: OklchColorModel) => {
        return OKLCH_MODEL_CONVERTER.normaliseConversionModel({
            mode: "oklch",
            l: input.lightness,
            c: input.chroma,
            h: input.hue,
            alpha: input.alpha,
        });
    },

    normaliseConversionModel: (input: OklchConversionModel) => input,

    toColorModel: (input: ConversionModel) => {
        const model = oklch(input);

        return OKLCH_MODEL_CONVERTER.normaliseColorModel({
            colorModel: "oklch",
            colorSpace: "OKLCH",
            lightness: model.l,
            chroma: model.c,
            hue: model.h ??= 0,
            /* c8 ignore next */
            alpha: model.alpha ??= 1,
        });
    },

    normaliseColorModel: (input: OklchColorModel) => {
        return {
            ...input,
            hue: round(6, input.hue),
            lightness: round(6, input.lightness),
            chroma: round(6, input.chroma),
        };
    },

    parse: (input: string) => OKLCH_MODEL_CONVERTER.normaliseConversionModel(oklch(parseCss(input))),
    toCss: (input: OklchColorModel) => formatCss(OKLCH_MODEL_CONVERTER.toConversionModel(input)),
};

