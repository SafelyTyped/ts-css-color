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

import { DEFAULT_DATA_PATH, validate, type TypeValidatorOptions, validateObject, type AppErrorOr, UnsupportedTypeError } from "@safelytyped/core-types";
import type { CssColorData } from "./CssColorData";
import { InvalidCssColorDataError } from "../Errors/InvalidCssColorData/InvalidCssColorDataError";

/**
 * validateCssColorData() is a type validator. Use it to determine if the
 * given `input` is an acceptable {@link CssColorData} object or not.
 *
 * @param input -
 * the data to validate
 * @param path -
 * dot.notation.path to where `input` is in your data structures
 * @returns
 * - `input as CssColorData` if validation passes
 * - an AppError otherwise
 */
export function validateCssColorData(
    input: unknown,
    {
        path = DEFAULT_DATA_PATH
    }: Partial<TypeValidatorOptions> = {}
): AppErrorOr<CssColorData>
{
    return validate(input)
        .next((x) => validateObject(x, { path }))
        .next((x) => validateObjectIsCssColorData(x, { path }))
        .value();
}

function validateObjectIsCssColorData(
    input: object,
    {
        path = DEFAULT_DATA_PATH
    }: Partial<TypeValidatorOptions> = {}
): AppErrorOr<CssColorData>
{
    if (typeof (input as CssColorData).name !== "string") {
        return new UnsupportedTypeError({
            public: {
                dataPath: path,
                expected: "CssColorData",
                actual: "object",
            }
        });
    }

    if ((input as CssColorData).name.trim().length == 0) {
        return new InvalidCssColorDataError({
            public: {
                dataPath: path,
                reason: "name cannot be empty",
            }
        });
    }

    if (typeof (input as CssColorData).definition !== "string") {
        return new UnsupportedTypeError({
            public: {
                dataPath: path,
                expected: "CssColorData",
                actual: "object",
            }
        });
    }

    if ((input as CssColorData).definition.trim().length == 0) {
        return new InvalidCssColorDataError({
            public: {
                dataPath: path,
                reason: "definition cannot be empty",
            }
        });
    }

    return input as CssColorData;
}