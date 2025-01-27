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

import type { WcagContrastRatings } from "../WcagContrastRatings/WcagContrastRatings.type";

/**
 * wcagContrast works out whether the given contrastRatio meets
 * various WCAG success criteria for accessibility.
 *
 * See https://www.w3.org/TR/WCAG21/#contrast-minimum for details.
 *
 * @param contrastRatio -
 * the contrast ratio to evaluate
 */
export function wcagContrast(contrastRatio: number): WcagContrastRatings
{
    // our return value
    const retval: WcagContrastRatings = {
        "A_normal": contrastRatio >= 3.0,
        "AA_normal": contrastRatio >= 4.5,
        "AA_large": contrastRatio >= 3.0,
        "AA_ui": contrastRatio >= 3.0,
        "AAA_normal": contrastRatio >= 7.0,
        "AAA_large": contrastRatio >= 4.5,
        large: "not accessible",
        normal: "not accessible",
        ui: "not accessible",
    };

    // add summaries
    retval.large = retval.AAA_large ? "AAA" : retval.AA_large ? "AA" : "not accessible";
    retval.normal = retval.AAA_normal ? "AAA" : retval.AA_normal ? "AA" : retval.A_normal ? "A" : "not accessible";
    retval.ui = retval.AA_ui ? "AA" : "not accessible";

    // all done
    return retval;
}