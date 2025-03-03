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

import { DEFAULT_DATA_PATH, makeNominalTypeFromTypeGuarantee, THROW_THE_ERROR, type FunctionalOption, type TypeGuaranteeOptions } from "@safelytyped/core-types";
import { mustBeCssColorData, type CssColorData } from "../index";

/**
 * makeCssColorData() is a smart constructor. Use it to build a
 * {@link CssColorData} object from the given input data.
 *
 * We will throw a suitable AppError if input validation fails.
 *
 * @param colorName -
 * your name for this color (can be same as `definition`)
 * @param definition -
 * the CSS definition of this color
 * @param path -
 * dot.notation.path to where this data sits in your data structures
 * @param onError -
 * we will call this error handler if input validation fails
 * @param fnOpts
 * callbacks to manipulate the created {@link CssColorData} object before
 * we return it
 */
export function makeCssColorData(
    colorName: string,
    definition: string,
    {
        path = DEFAULT_DATA_PATH,
        onError = THROW_THE_ERROR
    }: TypeGuaranteeOptions = {},
    ...fnOpts: FunctionalOption<CssColorData>[]
): CssColorData
{
    return makeNominalTypeFromTypeGuarantee(
        mustBeCssColorData,
        {
            name: colorName,
            definition,
        },
        { path, onError },
        ...fnOpts
    );
}