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

import { hsv } from "culori";
import type { HsvColorModel } from "../../ColorModels/Hsv/HsvColorModel.type";
import { prepForSrgb } from "../../ColorSpaces/prepForSrgb";
import { parseCss } from "../../CssParser/parseCss";
import { round } from "../../helpers/round";
import type { ConversionModel } from "../ConversionModel.type";
import { convertViaRgb } from "../convertViaRgb";
import { HSL_MODEL_CONVERTER } from "../Hsl/HSL_MODEL_CONVERTER";
import type { ModelConverter } from "../ModelConverter.type";
import type { HsvConversionModel } from "./HsvConversionModel.type";

export const HSV_MODEL_CONVERTER: ModelConverter<HsvColorModel, HsvConversionModel> = {
    toConversionModel: (input: HsvColorModel) => {
        return HSV_MODEL_CONVERTER.normaliseConversionModel({
            mode: "hsv",
            h: input.hue,
            s: input.saturation / 100,
            v: input.value / 100,
            alpha: input.alpha,
        });
    },

    normaliseConversionModel: (input: HsvConversionModel) => {
        return {
            ...input,
            s: round(4, input.s),
            v: round(4, input.v),
        };
    },

    toColorModel: (input: ConversionModel) => {
        const model = hsv(prepForSrgb(input));

        return HSV_MODEL_CONVERTER.normaliseColorModel({
            colorModel: "hsv",
            colorSpace: "sRGB",
            hue: model.h ??= 0,
            saturation: model.s * 100,
            value: model.v * 100,
            /* c8 ignore next */
            alpha: model.alpha ??= 1,
        });
    },

    normaliseColorModel: (input: HsvColorModel) => {
        return {
            ...input,
            hue: round(0, input.hue),
            saturation: round(0, input.saturation),
            value: round(0, input.value),
        };
    },

    parse: (input: string) =>  HSV_MODEL_CONVERTER.normaliseConversionModel(hsv(parseCss(input))),

    // HSV isn't supported in CSS, but hsl() is!
    toCss: (input: HsvColorModel, fallback: string) => {
        return HSL_MODEL_CONVERTER.toCss(
            HSL_MODEL_CONVERTER.toColorModel(
                convertViaRgb(
                    HSV_MODEL_CONVERTER.toConversionModel(input)
                )
            ),
            fallback
        );
    },
};

