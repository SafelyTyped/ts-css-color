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

import { DEFAULT_DATA_PATH, type AppErrorOr, type TypeValidatorOptions, UnsupportedTypeError, isObject } from "@safelytyped/core-types";
import type { CssColorData } from "../CssColor/CssColorData.type";

/**
 * validateCssColorDataHasChannels() is a data validator. Use it to prove
 * that the given `input` has the expected `.channels` property.
 *
 * @param input
 * - the {@link CssColorData} to inspect
 * @param path
 * - dot.notation.path through your nested data structures to `input`
 * @returns
 * - `input` type-casted to include the `.channels` property on success
 * - a suitable `AppError` otherwise
 */
export function validateCssColorDataHasChannels(
    input: CssColorData,
    {
        path = DEFAULT_DATA_PATH,
    }: TypeValidatorOptions = {}
): AppErrorOr<CssColorData & { channels: object }>
{
    // we use `isObject()` here to prevent `null` and `array` types from being
    // wrongly accepted as valid
    if (!isObject((input as CssColorData & { channels: object }).channels)) {
        return new UnsupportedTypeError({
            public: {
                dataPath: path,
                expected: "CssColorData with .channels object property",
                actual: "object without .channels object property",
            }
        });
    }

    return input as CssColorData & { channels: object };
}