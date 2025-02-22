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

import type { Oklch } from "culori";
import type { CssOklchColorChannelsData } from "../CssOklchColorChannelsData.type";

export type OklchConversionData = {
    oklchChannelsData: CssOklchColorChannelsData;
    conversionModel: Oklch;
}

export const VALID_OKLCH_CONVERSIONS_FIXTURES: OklchConversionData[] = [
    {
        oklchChannelsData: {
            lightness: 0.7992,
            chroma: 0.1327,
            hue: 226.67,
            alpha: 1,
        },
        conversionModel: {
            mode: "oklch",
            l: 0.7992,
            c: 0.1327,
            h: 226.67,
            alpha: 1,
        }
    },
    {
        oklchChannelsData: {
            lightness: 0.5254,
            chroma: 0.137763,
            hue: 152.15,
            alpha: 1,
        },
        conversionModel: {
            mode: "oklch",
            l: 0.5254,
            c: 0.137763,
            h: 152.15,
            alpha: 1,
        }
    }
];