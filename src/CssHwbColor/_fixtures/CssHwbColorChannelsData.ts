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

import type { CssHwbColorChannelsData } from "../CssHwbColorChannelsData.type";

export const ValidCssHwbColorChannelsData: CssHwbColorChannelsData[] = [
    {
        hue: 0,
        whiteness: 39.22,
        blackness: 60.78,
        alpha: 1,
    },
];

export const InvalidCssHwbColorChannelsDataObjects = [
    {
        description: "channels completely missing",
        inputValue: {}
    },
    {
        description: "hue channel missing",
        inputValue: {
            whiteness: 39.22,
            blackness: 60.78,
            alpha: 1,
        }
    },
    {
        description: "whiteness channel missing",
        inputValue: {
            hue: 0,
            blackness: 60.78,
            alpha: 1,
        }
    },
    {
        description: "blackness channel missing",
        inputValue: {
            hue: 0,
            whiteness: 39.22,
            alpha: 1,
        }
    },
    {
        description: "alpha channel missing",
        inputValue: {
            hue: 0,
            whiteness: 39.22,
            blackness: 60.78,
        }
    },
];

export const InvalidCssHwbColorChannelsDataInputs = [
    null,
    undefined,
    [],
    true,
    false,
    0,
    -100,
    100,
    3.1415927,
    () => true,
    {},
    "#ffffff",
]