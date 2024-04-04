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

import type { WcagContrastRatings } from "@safelytyped/css-color";

export const WCAG_CONSTRAST_RATINGS: { [contrastRatio: string]: WcagContrastRatings } = {
    "1": {
        A_normal: false,
        AA_normal: false,
        AA_large: false,
        AA_ui: false,
        AAA_normal: false,
        AAA_large: false,
    },
    "3.0": {
        A_normal: true,
        AA_normal: false,
        AA_large: true,
        AA_ui: true,
        AAA_normal: false,
        AAA_large: false,
    },
    "4.5": {
        A_normal: true,
        AA_normal: true,
        AA_large: true,
        AA_ui: true,
        AAA_normal: false,
        AAA_large: true,
    },
    "7.0": {
        A_normal: true,
        AA_normal: true,
        AA_large: true,
        AA_ui: true,
        AAA_normal: true,
        AAA_large: true,
    },
};