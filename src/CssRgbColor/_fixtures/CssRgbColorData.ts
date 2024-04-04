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

export const ValidCssRgbColorData = [
    {
        name: "test",
        definition: "test",
        "_type": "@safelytyped/css-color/CssRgbColorData",
        colorSpace: "sRGB",
        channels: {
            red: 100,
            green: 100,
            blue: 100,
            alpha: 1,
        }
    },
];

export const InvalidCssRgbColorDataObjects = [
    {
        description: "not CssColorData: name property missing",
        inputValue: {
            definition: "test",
            "_type": "@safelytyped/css-color/CssRgbColorData",
            colorSpace: "sRGB",
            channels: {
                red: 100,
                green: 100,
                blue: 100,
                alpha: 1,
            }
        }
    },
    {
        description: "not CssColorData: definition property missing",
        inputValue: {
            name: "test",
            "_type": "@safelytyped/css-color/CssRgbColorData",
            colorSpace: "sRGB",
            channels: {
                red: 100,
                green: 100,
                blue: 100,
                alpha: 1,
            }
        }
    },
    {
        description: "channels completely missing",
        inputValue: {
            name: "test",
            definition: "test",
            colorSpace: "sRGB",
        }
    },
    {
        description: "red channel missing",
        inputValue: {
            name: "test",
            definition: "test",
            "_type": "@safelytyped/css-color/CssRgbColorData",
            colorSpace: "sRGB",
            channels: {
                green: 100,
                blue: 100,
                alpha: 1,
            }
        }
    },
    {
        description: "green channel missing",
        inputValue: {
            name: "test",
            definition: "test",
            "_type": "@safelytyped/css-color/CssRgbColorData",
            colorSpace: "sRGB",
            channels: {
                red: 100,
                blue: 100,
                alpha: 1,
            }
        }
    },
    {
        description: "blue channel missing",
        inputValue: {
            name: "test",
            definition: "test",
            "_type": "@safelytyped/css-color/CssRgbColorData",
            colorSpace: "sRGB",
            channels: {
                red: 100,
                green: 100,
                alpha: 1,
            }
        }
    },
    {
        description: "alpha channel missing",
        inputValue: {
            name: "test",
            definition: "test",
            "_type": "@safelytyped/css-color/CssRgbColorData",
            colorSpace: "sRGB",
            channels: {
                red: 100,
                green: 100,
                blue: 100,
            }
        }
    },
];

export const InvalidCssRgbColorDataInputs = [
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