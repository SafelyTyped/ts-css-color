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

import { rgb } from "culori";
import type { CmykColorModel } from "../../ColorModels/Cmyk/CmykColorModel.type";
import { mustBeCmykColorModel } from "../../ColorModels/Cmyk/mustBeCmykColorModel";
import { parseCmyk } from "../../CssParser/parseCmyk";
import { round } from "../../helpers/round";
import type { ConversionModel } from "../ConversionModel.type";
import type { ModelConverter } from "../ModelConverter.type";
import { RGB_MODEL_CONVERTER } from "../Rgb/RGB_MODEL_CONVERTER";
import type { RgbConversionModel } from "../Rgb/RgbConversionModel.type";

export const CMYK_MODEL_CONVERTER: ModelConverter<CmykColorModel, RgbConversionModel> = {
    normaliseColorModel: (input: CmykColorModel) => {
        return {
            ...input,
            cyan: round(0, input.cyan),
            magenta: round(0, input.magenta),
            yellow: round(0, input.yellow),
            key: round(0, input.key),
        };
    },

    toColorModel: (input: ConversionModel) => {
        const model = rgb(input);

        const k = Math.min(1 - model.r, 1 - model.g, 1 - model.b);
        const c = (1 - model.r - k) / (1 - k) || 0;
        const m = (1 - model.g - k) / (1 - k) || 0;
        const y = (1 - model.b - k) / (1 - k) || 0;

        return mustBeCmykColorModel(
            CMYK_MODEL_CONVERTER.normaliseColorModel({
                colorModel: "cmyk",
                colorSpace: "CMYK",
                cyan: c * 100,
                magenta: m * 100,
                yellow: y * 100,
                key: k * 100,
            })
        );
    },

    toConversionModel: (input: CmykColorModel) => {
        const c = input.cyan / 100;
        const m = input.magenta / 100;
        const y = input.yellow / 100;
        const k = input.key / 100;

        const r = (1 - c) * (1 - k);
        const g = (1 - m) * (1 - k);
        const b = (1 - y) * (1 - k);

        return CMYK_MODEL_CONVERTER.normaliseConversionModel({
            mode: "rgb",
            r,
            g,
            b,
        });
    },
    normaliseConversionModel: RGB_MODEL_CONVERTER.normaliseConversionModel,

    parse: (input: string) => {
        return CMYK_MODEL_CONVERTER.toConversionModel(parseCmyk(input));
    },

    // CMYK isn't supported by Culori, so we have to build the CSS
    // definition ourselves
    toCss: (input: CmykColorModel, fallback: string) => `color(--device-cmyk ${input.cyan} ${input.magenta} ${input.yellow} ${input.key})`,
};