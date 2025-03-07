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

import { identity } from "@safelytyped/core-types";
import { formatCss, rgb } from "culori";
import type { RgbColorModel } from "../../ColorModels/Rgb/RgbColorModel.type";
import { parseCss } from "../../CssParser/parseCss";
import { round } from "../../helpers/round";
import type { ConversionModel } from "../ConversionModel.type";
import type { ModelConverter } from "../ModelConverter.type";
import type { RgbConversionModel } from "./RgbConversionModel.type";

export const RGB_MODEL_CONVERTER: ModelConverter<RgbColorModel, RgbConversionModel> = {
    toConversionModel: (input: RgbColorModel) => {
        return RGB_MODEL_CONVERTER.normaliseConversionModel({
            mode: "rgb",
            r: input.red / 255,
            g:input.green / 255,
            b: input.blue / 255,
            alpha: input.alpha,
        });
    },

    toColorModel: (input: ConversionModel) => {
        const model = rgb(input);

        return RGB_MODEL_CONVERTER.normaliseColorModel({
            colorModel: "rgb",
            colorSpace: "sRGB",
            red: model.r * 255,
            green: model.g * 255,
            blue: model.b * 255,
            alpha: model.alpha ??= 1,
        });
    },

    normaliseConversionModel: (input: RgbConversionModel) => {
        return {
            ...input,
            r: round(3, input.r),
            g: round(3, input.g),
            b: round(3, input.b),
        };
    },

    normaliseColorModel: (input: RgbColorModel) => {
        return {
            ...input,
            red: round(0, input.red),
            green: round(0, input.green),
            blue: round(0, input.blue),
        };
    },

    // no prep needed
    prepForOklch: identity,

    // we already use the RgbConversionModel
    prepForSrgb: identity,

    parse: (input: string) => RGB_MODEL_CONVERTER.normaliseConversionModel(rgb(parseCss(input))),
    toCss: (input: RgbColorModel) => formatCss(RGB_MODEL_CONVERTER.toConversionModel(input)),
};

