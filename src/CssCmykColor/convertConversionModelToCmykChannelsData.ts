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
import type { ConversionModel, CssCmykColorChannelsData } from "../index";

/**
 * convertConversionModelToCmykChannelsData() is a helper method. It converts
 * an instance of the RGB model used by our chosen third-party color
 * conversion package to our preferred data format.
 *
 * based on an algorithm from color-space:
 * https://github.com/colorjs/color-space/blob/master/cmyk.js
 *
 * this algorithm appears to be commonly used by color-conversion websites
 * that predate the color-space package
 *
 * @param input
 * @returns
 */
export function convertConversionModelToCmykChannelsData(
    input: ConversionModel
): CssCmykColorChannelsData
{
    const model = rgb(input);

    const k = Math.min(1 - model.r, 1 - model.g, 1 - model.b);
    const c = (1 - model.r - k) / (1 - k) || 0;
    const m = (1 - model.g - k) / (1 - k) || 0;
    const y = (1 - model.b - k) / (1 - k) || 0;

    return {
        cyan: round(c * 100),
        magenta: round(m * 100),
        yellow: round(y * 100),
        key: round(k * 100),
    };
}

function round(input: number)
{
    return Math.abs(
        roundTo(
            Math.round,
            0,
            input,
        )
    );
}