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

import { DEFAULT_DATA_PATH } from "@safelytyped/core-types";
import type { CmykColorModel } from "../ColorModels/Cmyk/CmykColorModel.type";
import { UnsupportedCssColorDefinitionError } from "../Errors/UnsupportedCssColorDefinition/UnsupportedCssColorDefinitionError";

export function parseCmyk(
    input: string
): CmykColorModel
{
    // turn the input into an array of values
    const regex = /^color\(--device-cmyk (1[0-9]{2}|[1-9]{0,1}[0-9]) (1[0-9]{2}|[1-9]{0,1}[0-9]) (1[0-9]{2}|[1-9]{0,1}[0-9]) (1[0-9]{2}|[1-9]{0,1}[0-9])\)$/;
    const matches = regex.exec(input);
    if (!matches) {
        throw new UnsupportedCssColorDefinitionError({
            public: {
                dataPath: DEFAULT_DATA_PATH,
                colorDefinition: input,
            }
        });
    }

    return {
        colorModel: "cmyk",
        colorSpace: "CMYK",
        cyan: parseInt(matches[1]),
        magenta: parseInt(matches[2]),
        yellow: parseInt(matches[3]),
        key: parseInt(matches[4]),
    };
}