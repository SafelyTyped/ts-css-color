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

import type { ConversionModel } from "../../ConversionModels/ConversionModel.type";
import type { CssHexColorDefinition } from "../../CssHexColorDefinition/CssHexColorDefinition.type";
import { makeCssHexColorDefinition } from "../../CssHexColorDefinition/makeCssHexColorDefinition";

export type HexConversionData = {
    hex: CssHexColorDefinition;
    conversionModel: ConversionModel;
}

export const VALID_HEX_CONVERSIONS_FIXTURES: HexConversionData[] = [
    {
        hex: makeCssHexColorDefinition("#646464"),
        conversionModel: {
            mode: "rgb",
            r: 0.392,
            g: 0.392,
            b: 0.392,
            alpha: 1,
        }
    },
    {
        hex: makeCssHexColorDefinition("#008040"),
        conversionModel: {
            mode: "rgb",
            r: 0,
            g: 0.502,
            b: 0.251,
            alpha: 1,
        }
    }
];