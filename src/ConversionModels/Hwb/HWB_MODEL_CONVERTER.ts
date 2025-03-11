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

import { hwb } from "culori";
import { convertViaRgb, parseCss, RGB_MODEL_CONVERTER, round, type ConversionModel, type HwbColorModel, type HwbConversionModel, type ModelConverter } from "../..";

export const HWB_MODEL_CONVERTER: ModelConverter<HwbColorModel, HwbConversionModel> = {
    toConversionModel: (input: HwbColorModel) => {
        return HWB_MODEL_CONVERTER.normaliseConversionModel({
            mode: "hwb",
            h: input.hue,
            w: input.whiteness / 100,
            b: input.blackness / 100,
            alpha: input.alpha,
        });
    },

    normaliseConversionModel: (input: HwbConversionModel) => {
        return {
            ...input,
            // w: round(4, input.w),
            // b: round(4, input.w),
            alpha: input.alpha ??= 1,
        };
    },

    toColorModel: (input: ConversionModel) => {
        const model = hwb(input);

        return HWB_MODEL_CONVERTER.normaliseColorModel({
            colorModel: "hwb",
            colorSpace: "sRGB",
            hue: model.h ??= 0,
            whiteness: model.w * 100,
            blackness: model.b * 100,
            /* c8 ignore next */
            alpha: model.alpha ??= 1,
        });
    },

    normaliseColorModel: (input: HwbColorModel) => {
        return {
            ...input,
            hue: round(0, input.hue),
            whiteness: round(0, input.whiteness),
            blackness: round(0, input.blackness),
        };
    },

    parse: (input: string) => HWB_MODEL_CONVERTER.normaliseConversionModel(hwb(parseCss(input))),

    // HWB isn't supported in CSS, so fallback to RGB
    toCss: (input: HwbColorModel, fallback: string) => RGB_MODEL_CONVERTER.toCss(
        RGB_MODEL_CONVERTER.toColorModel(
            convertViaRgb(
                HWB_MODEL_CONVERTER.toConversionModel(input)
            )
        ),
        fallback
    ),
};

