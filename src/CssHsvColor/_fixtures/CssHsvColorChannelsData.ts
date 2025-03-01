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

import type { CssHsvColorChannelsData } from "../CssHsvColorChannelsData.type";

export const ValidCssHsvColorChannelsData: CssHsvColorChannelsData[] = [
    {
        hue: 0,
        saturation: 0,
        value: 39,
        alpha: 1,
    },
    {
        hue: 150,
        saturation: 100,
        value: 50,
        alpha: 1,
    },
    {
        hue: 200,
        saturation: 75,
        value: 80,
        alpha: 0.5,
    },
    {
        hue: 0,
        saturation: 0,
        value: 0,
        alpha: 0
    },
    {
        hue: 360,
        saturation: 100,
        value: 100,
        alpha: 1,
    },
];

export const InvalidCssHsvColorChannelsDataObjects = [
    {
        description: "channels completely missing",
        inputValue: {}
    },
    {
        description: "hue channel missing",
        inputValue: {
            saturation: 0,
            value: 39,
            alpha: 1,
        }
    },
    {
        description: "saturation channel missing",
        inputValue: {
            hue: 0,
            value: 39,
            alpha: 1,
        }
    },
    {
        description: "value channel missing",
        inputValue: {
            hue: 0,
            saturation: 0,
            alpha: 1,
        }
    },
    {
        description: "alpha channel missing",
        inputValue: {
            hue: 0,
            saturation: 0,
            value: 39,
        }
    },
    {
        description: "hue channel too small",
        inputValue: {
            hue: -1,
            saturation: 50,
            value: 50,
            alpha: 1,
        },
    },
    {
        description: "hue channel too large",
        inputValue: {
            hue: 361,
            saturation: 50,
            value: 50,
            alpha: 1,
        },
    },
    {
        description: "saturation channel is too small",
        inputValue: {
            hue: 180,
            saturation: -1,
            value: 50,
            alpha: 1,
        },
    },
    {
        description: "saturation channel is too large",
        inputValue: {
            hue: 180,
            saturation: 101,
            value: 50,
            alpha: 1,
        }
    },
    {
        description: "value channel is too small",
        inputValue: {
            hue: 180,
            saturation: 50,
            value: -1,
            alpha: 1,
        }
    },
    {
        description: "value channel is too large",
        inputValue: {
            hue: 180,
            saturation: 50,
            value: 101,
            alpha: 1,
        }
    },
    {
        description: "alpha channel is too small",
        inputValue: {
            hue: 180,
            saturation: 50,
            value: 50,
            alpha: -0.1,
        },
    },
    {
        description: "alpha channel is too large",
        inputValue: {
            hue: 180,
            saturation: 50,
            value: 50,
            alpha: 1.1,
        },
    },
];

export const InvalidCssHsvColorChannelsDataInputs = [
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