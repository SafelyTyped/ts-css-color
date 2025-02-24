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

import { DEFAULT_DATA_PATH, extendDataPath, recastIfValid, UnsupportedTypeError, validate, type AppErrorOr, type TypeValidatorOptions } from "@safelytyped/core-types";
import type { SupportedCssColorSpace } from "../CssColorspace/CssColorspaces.type";
import { validateObjectHasStringProperty } from "./validateObjectHasStringProperty";

/**
 * validateColorSpace() is a data validator. Use it to prove that:
 *
 * - the given input contains a `.colorSpace` with the given value
 *
 * @typedef T -
 * what type of input object are we receiving (and returning on success)?
 * @param input -
 * the object to inspect
 * @param expectedColorSpace -
 * the value we require in `.colorSpace`
 * @param path -
 * what's the path through your data structures to `input`?
 * we will use this in any errors we return (and automatically extend the
 * path to include `.colorSpace`)
 * @returns
 * - input on success
 * - an AppError otherwise
 */
export function validateCssColorSpace<T extends object>(
    input: T,
    expectedColorSpace: SupportedCssColorSpace,
    {
        path = DEFAULT_DATA_PATH
    }: TypeValidatorOptions= {}
): AppErrorOr<T & { colorSpace: SupportedCssColorSpace }>
{
    return validate(input)
        .next((x) => validateObjectHasStringProperty(x, ["colorSpace"], { path }))
        .next((x) => recastIfValid<T & { colorSpace: SupportedCssColorSpace }>(
            x,
            () => validateObjectHasExpectedColorSpace(x, expectedColorSpace, { path })
        ))
        .value();
}

function validateObjectHasExpectedColorSpace<T extends object & Record<"colorSpace", string>>(
    input: T,
    expectedColorSpace: SupportedCssColorSpace,
    {
        path = DEFAULT_DATA_PATH
    }: TypeValidatorOptions= {}
): AppErrorOr<T>
{
    path = extendDataPath(path, "colorSpace");

    if (input.colorSpace === expectedColorSpace) {
        return input;
    }

    return new UnsupportedTypeError({
        public: {
            dataPath: path,
            expected: ".colorSpace == " + expectedColorSpace,
            actual: ".colorSpace == " + input.colorSpace,
        }
    });
}