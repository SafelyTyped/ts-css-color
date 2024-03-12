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

import type { AnyCssColor } from "../CssColor/AnyCssColor";
import { relativeLuminance } from "./relativeLuminance";

/**
 * contrastRatio() calculates the WCAG relative contrast between two
 * colors.
 *
 * You don't need to pass in the colors in any set order; this function
 * will work regardless.
 *
 * @param a -
 * one of the colors to compare
 * @param b -
 * the other color to compare
 * @returns the calculated contrast ratio, which you can then use in
 * other functions such as {@link contrastLevels}.
 */
export function contrastRatio(a: AnyCssColor, b: AnyCssColor): number
{
    const fgLuminance = relativeLuminance(a);
    const bgLuminance = relativeLuminance(b);

    if (fgLuminance > bgLuminance) {
        return (fgLuminance + 0.05) / (bgLuminance + 0.05);
    }

    return (bgLuminance + 0.05) / (fgLuminance + 0.05);
}