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

import type { AnyCssColor } from "../CssColor/AnyCssColor.type";
import { shade } from "./shade";

/**
 * hasClearContrast() determines whether or not two given colors are
 * different from each other on a black-and-white scale.
 *
 * It's an alternative to the {@link contrastRatio}, useful for making
 * decisions outside of the WCAG approach.
 *
 * @param a - a color to compare
 * @param b - the other color to compare against
 * @returns
 * - `true` if one color is light and the other is dark
 * - `false` if either color is dull
 * - `false` if both colors are either light or dark
 */
export function hasClearContrast(
    a: AnyCssColor,
    b: AnyCssColor
): boolean
{
    const aShade = shade(a);
    const bShade = shade(b);

    // can't be clear contrast if either shade lands in the middle
    if (aShade === "dull" || bShade === "dull") {
        return false;
    }

    // can only be clear contrast if one is "light" and one is "dark"
    return aShade != bShade;
}