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
        },

        // additional properties here are used to validate CssRgbColor
        // class tests ...
        hslChannels: {
            hue: 0,
            saturation: 0,
            luminosity: 39.22,
            alpha: 1,
        },
        hwbChannels: {
            hue: 0,
            whiteness: 39.22,
            blackness: 60.78,
            alpha: 1,
        },
        hex: "#646464",
        namedColor: undefined,
    },
    {
        name: "apple-moss",
        definition: "#008040",
        "_type": "@safelytyped/css-color/CssRgbColorData",
        colorSpace: "sRGB",
        channels: {
            red: 0,
            green: 128,
            blue: 64,
            alpha: 1,
        },

        // additional properties here are used to validate CssRgbColor
        // class tests ...
        hslChannels: {
            hue: 150,
            saturation: 100,
            luminosity: 25.1,
            alpha: 1,
        },
        hwbChannels: {
            hue: 150,
            whiteness: 0,
            blackness: 49.8,
            alpha: 1,
        },
        hex: "#008040",
        namedColor: undefined,
    },
    {
        name: "red",
        definition: "#ffffff",
        "_type": "@safelytyped/css-color/CssRgbColorData",
        colorSpace: "sRGB",
        channels: {
            red: 255,
            green: 0,
            blue: 0,
            alpha: 1,
        },

        // additional properties here are used to validate CssRgbColor
        // class tests ...
        hslChannels: {
            hue: 0,
            saturation: 100,
            luminosity: 50,
            alpha: 1,
        },
        hwbChannels: {
            hue: 0,
            whiteness: 0,
            blackness: 0,
            alpha: 1,
        },
        hex: "#ff0000",
        namedColor: "red",
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
        description: "red channel too small",
        inputValue: {
            name: "test",
            definition: "test",
            "_type": "@safelytyped/css-color/CssRgbColorData",
            colorSpace: "sRGB",
            channels: {
                red: -1,
                green: 100,
                blue: 100,
                alpha: 1,
            }
        }
    },
    {
        description: "red channel too large",
        inputValue: {
            name: "test",
            definition: "test",
            "_type": "@safelytyped/css-color/CssRgbColorData",
            colorSpace: "sRGB",
            channels: {
                red: 256,
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
        description: "green channel too small",
        inputValue: {
            name: "test",
            definition: "test",
            "_type": "@safelytyped/css-color/CssRgbColorData",
            colorSpace: "sRGB",
            channels: {
                red: 100,
                green: -1,
                blue: 100,
                alpha: 1,
            }
        }
    },
    {
        description: "green channel too large",
        inputValue: {
            name: "test",
            definition: "test",
            "_type": "@safelytyped/css-color/CssRgbColorData",
            colorSpace: "sRGB",
            channels: {
                red: 100,
                green: 256,
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
        description: "blue channel too small",
        inputValue: {
            name: "test",
            definition: "test",
            "_type": "@safelytyped/css-color/CssRgbColorData",
            colorSpace: "sRGB",
            channels: {
                red: 100,
                green: 100,
                blue: -1,
                alpha: 1,
            }
        }
    },
    {
        description: "blue channel too large",
        inputValue: {
            name: "test",
            definition: "test",
            "_type": "@safelytyped/css-color/CssRgbColorData",
            colorSpace: "sRGB",
            channels: {
                red: 100,
                green: 100,
                blue: 256,
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
    {
        description: "alpha channel too small",
        inputValue: {
            name: "test",
            definition: "test",
            "_type": "@safelytyped/css-color/CssRgbColorData",
            colorSpace: "sRGB",
            channels: {
                red: 100,
                green: 100,
                blue: 100,
                alpha: -0.1,
            }
        }
    },
    {
        description: "alpha channel too large",
        inputValue: {
            name: "test",
            definition: "test",
            "_type": "@safelytyped/css-color/CssRgbColorData",
            colorSpace: "sRGB",
            channels: {
                red: 100,
                green: 100,
                blue: 100,
                alpha: 1.1,
            }
        }
    },
];

export const InvalidMakeCssRgbColorParameters = [
    {
        description: "name property empty",
        inputValue: {
            name: "",
            definition: "test",
            channels: {
                red: 100,
                green: 100,
                blue: 100,
                alpha: 1,
            }
        }
    },
    {
        description: "definition property empty",
        inputValue: {
            name: "test",
            definition: "",
            channels: {
                red: 100,
                green: 100,
                blue: 100,
                alpha: 1,
            }
        }
    },
    {
        description: "red channel too small",
        inputValue: {
            name: "test",
            definition: "test",
            channels: {
                red: -1,
                green: 100,
                blue: 100,
                alpha: 1,
            }
        }
    },
    {
        description: "red channel too large",
        inputValue: {
            name: "test",
            definition: "test",
            channels: {
                red: 256,
                green: 100,
                blue: 100,
                alpha: 1,
            }
        }
    },
    {
        description: "green channel too small",
        inputValue: {
            name: "test",
            definition: "test",
            channels: {
                red: 100,
                green: -1,
                blue: 100,
                alpha: 1,
            }
        }
    },
    {
        description: "green channel too large",
        inputValue: {
            name: "test",
            definition: "test",
            channels: {
                red: 100,
                green: 256,
                blue: 100,
                alpha: 1,
            }
        }
    },
    {
        description: "blue channel too small",
        inputValue: {
            name: "test",
            definition: "test",
            channels: {
                red: 100,
                green: 100,
                blue: -1,
                alpha: 1,
            }
        }
    },
    {
        description: "blue channel too large",
        inputValue: {
            name: "test",
            definition: "test",
            channels: {
                red: 100,
                green: 100,
                blue: 256,
                alpha: 1,
            }
        }
    },
    {
        description: "alpha channel too small",
        inputValue: {
            name: "test",
            definition: "test",
            channels: {
                red: 100,
                green: 100,
                blue: 100,
                alpha: -0.1,
            }
        }
    },
    {
        description: "alpha channel too large",
        inputValue: {
            name: "test",
            definition: "test",
            channels: {
                red: 100,
                green: 100,
                blue: 100,
                alpha: 1.1,
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