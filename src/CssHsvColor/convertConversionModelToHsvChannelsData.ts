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

import { roundTo } from "@safelytyped/math-rounding";
import { rgb } from "culori";
import type { ConversionModel } from "../ConversionModel/ConversionModel.type";
import { convertConversionModelToSrgbColorSpace } from "../ConversionModel/convertConversionModelToSrgbColorSpace";
import type { CssHsvColorChannelsData } from "./CssHsvColorChannelsData.type";

/**
 * convertConversionModelToHsvChannelsData() is a helper method. It converts
 * a ConversionModel to our HSV channels data format.
 *
 * Since culori doesn't directly support HSV, we convert via RGB.
 *
 * @param input
 * @returns
 */
export function convertConversionModelToHsvChannelsData(
    input: ConversionModel
): CssHsvColorChannelsData
{
    // Convert to RGB first
    const rgbModel = rgb(
        convertConversionModelToSrgbColorSpace(input)
    );

    // Extract RGB components (0-1 scale)
    const r = rgbModel.r;
    const g = rgbModel.g;
    const b = rgbModel.b;

    // Calculate min, max, and delta
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const delta = max - min;

    // Initialize HSV values
    let h = 0;
    let s = max === 0 ? 0 : delta / max;
    let v = max;

    // Calculate hue
    if (delta !== 0) {
        if (max === r) {
            h = ((g - b) / delta) % 6;
        } else if (max === g) {
            h = (b - r) / delta + 2;
        } else {
            h = (r - g) / delta + 4;
        }

        h = h * 60;
        if (h < 0) {
            h += 360;
        }
    }

    return {
        hue: round(h),
        saturation: round(s * 100),
        value: round(v * 100),
        alpha: input.alpha || 1,
    };
}

function round(input: number): number
{
    return Math.abs(
        roundTo(
            Math.round,
            0,
            input,
        )
    );
}