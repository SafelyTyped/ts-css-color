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

import { DEFAULT_DATA_PATH, isString, THROW_THE_ERROR, type DataGuaranteeOptions, type FunctionalOption } from "@safelytyped/core-types";
import type { AnyCssColor } from "../CssColor/AnyCssColor.type";
import { makeCssColor } from "../CssColor/makeCssColor";
import { CssHsvColor } from "./CssHsvColor";
import type { CssHsvColorData } from "./CssHsvColorData.type";
import { makeCssHsvColorFromCssColor } from "./makeCssHsvColorFromCssColor";

/**
 * makeCssHsvColor() is a smart constructor. Use it to create a CssHsvColor
 * instance from either a CSS color definition string or an existing CssColor.
 *
 * @param input - Either a CSS color definition string or an existing CssColor
 * @param options - Configuration options
 * @param fnOpts - Functions to apply to the created CssHsvColorData
 * @returns A new CssHsvColor instance
 */
export function makeCssHsvColor(
    input: string|AnyCssColor,
    {
        path = DEFAULT_DATA_PATH,
        onError = THROW_THE_ERROR
    }: DataGuaranteeOptions = {},
    ...fnOpts: FunctionalOption<CssHsvColorData, DataGuaranteeOptions>[]
): CssHsvColor
{
    // normalise to a CssColor class
    if (isString(input)) {
        input = makeCssColor(input, { path, onError });
    }

    // special case - no conversion needed
    if (input instanceof CssHsvColor) {
        return input;
    }

    // convert it (if necessary) and return it
    return makeCssHsvColorFromCssColor(
        input,
        { path, onError },
        ...fnOpts,
    );
}