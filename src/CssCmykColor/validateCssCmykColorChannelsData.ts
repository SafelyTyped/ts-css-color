//
// Copyright (c) 2024-present Ganbaro Digital Ltd
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

import { DEFAULT_DATA_PATH, recastIfValid, validate, validateObject, type AppErrorOr, type TypeValidatorOptions } from "@safelytyped/core-types";
import { validateCssColorChannel } from "../helpers/validateCssColorChannel";
import type { CssCmykColorChannelsData } from "./CssCmykColorChannelsData.type";

export function validateCssCmykColorChannelsData(
    input: unknown,
    {
        path = DEFAULT_DATA_PATH
    }: TypeValidatorOptions = {}
): AppErrorOr<CssCmykColorChannelsData>
{
    return recastIfValid<CssCmykColorChannelsData>(
        input,
        () => validate(input)
            .next((x) => validateObject(x, { path }))
            .next((x) => validateCssColorChannel(x, "cyan", 0, 100, { path }))
            .next((x) => validateCssColorChannel(x, "magenta", 0, 100, { path }))
            .next((x) => validateCssColorChannel(x, "yellow", 0, 100, { path }))
            .next((x) => validateCssColorChannel(x, "key", 0, 100, { path }))
            .value()
    );
}