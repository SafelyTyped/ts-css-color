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

import type { AnyCssColor } from "../index";

/**
 * relativeLuminance() calculates the WCAG relative luminance of the
 * given `input` color
 *
 * This is an alternative to the {@link luma} value.
 *
 * Algorithm from: https://www.w3.org/TR/WCAG22/#dfn-relative-luminance
 *
 * @param input -
 * the color to calculate the relative luminance of
 * @returns the calculated relative luminance
 */
export function relativeLuminance(input: AnyCssColor): number
{
    const { red, green, blue } = input.rgb().channelsData();

    // convert the channels to a number between 0-1
    const rsRGB = red / 255;
    const gsRGB = green / 255;
    const bsRGB = blue / 255;

    // normalise the channel values
    const r = rsRGB <= 0.04045 ? rsRGB / 12.92 : ((rsRGB+0.055) / 1.055) ** 2.4;
    const g = gsRGB <= 0.04045 ? gsRGB / 12.92 : ((gsRGB+0.055) / 1.055) ** 2.4;
    const b = bsRGB <= 0.04045 ? bsRGB / 12.92 : ((bsRGB+0.055) / 1.055) ** 2.4;

    // calculate the relative luminance
    const l = 0.2126 * r + 0.7152 * g + 0.0722 * b;

    // all done
    return l;
}