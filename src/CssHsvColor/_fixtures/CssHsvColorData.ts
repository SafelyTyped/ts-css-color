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

import type { Maybe } from "@safelytyped/core-types";
import type { CssCmykColorChannelsData } from "../../CssCmykColor/CssCmykColorChannelsData.type";
import type { CssHslColorChannelsData } from "../../CssHslColor/CssHslColorChannelsData.type";
import type { CssHwbColorChannelsData } from "../../CssHwbColor/CssHwbColorChannelsData.type";
import type { CssOklchColorChannelsData } from "../../CssOklchColor/CssOklchColorChannelsData.type";
import type { CssRgbColorChannelsData } from "../../CssRgbColor/CssRgbColorChannelsData.type";
import type { CssHsvColorData } from "../CssHsvColorData.type";

type ValidCssHsvColor = CssHsvColorData & {
    cmykChannels: CssCmykColorChannelsData;
    hslChannels: CssHslColorChannelsData;
    hwbChannels: CssHwbColorChannelsData;
    rgbChannels: CssRgbColorChannelsData;
    oklchChannels: CssOklchColorChannelsData;
    hex: string;
    namedColor: Maybe<string>;
}

export const ValidCssHsvColorData: ValidCssHsvColor[] = [
    {
        name: "red",
        definition: "hsv(0, 100%, 100%)",
        channels: {
            hue: 0,
            saturation: 100,
            value: 100,
            alpha: 1,
        },
        "_type": "@safelytyped/css-color/CssHsvColorData",
        colorFormat: "hsv",
        colorSpace: "sRGB",
        cmykChannels: {
            cyan: 0,
            magenta: 100,
            yellow: 100,
            key: 0,
        },
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
        rgbChannels: {
            red: 255,
            green: 0,
            blue: 0,
            alpha: 1,
        },
        oklchChannels: {
            lightness: 0.627955,
            chroma: 0.257683,
            hue: 29.233885,
            alpha: 1,
        },
        hex: "#ff0000",
        namedColor: "red",
    },
    {
        name: "green",
        definition: "hsv(120, 100%, 100%)",
        channels: {
            hue: 120,
            saturation: 100,
            value: 100,
            alpha: 1,
        },
        "_type": "@safelytyped/css-color/CssHsvColorData",
        colorFormat: "hsv",
        colorSpace: "sRGB",
        cmykChannels: {
            cyan: 100,
            magenta: 0,
            yellow: 100,
            key: 0,
        },
        hslChannels: {
            hue: 120,
            saturation: 100,
            luminosity: 50,
            alpha: 1,
        },
        hwbChannels: {
            hue: 120,
            whiteness: 0,
            blackness: 0,
            alpha: 1,
        },
        rgbChannels: {
            red: 0,
            green: 255,
            blue: 0,
            alpha: 1,
        },
        oklchChannels: {
            lightness: 0.866132,
            chroma: 0.169413,
            hue: 142.499753,
            alpha: 1,
        },
        hex: "#00ff00",
        namedColor: "lime",
    },
    {
        name: "edge-case-minimum",
        definition: "hsv(0, 0%, 0%, 0)",
        channels: {
            hue: 0,
            saturation: 0,
            value: 0,
            alpha: 0,
        },
        "_type": "@safelytyped/css-color/CssHsvColorData",
        colorFormat: "hsv",
        colorSpace: "sRGB",
        cmykChannels: {
            cyan: 0,
            magenta: 0,
            yellow: 0,
            key: 100,
        },
        hslChannels: {
            hue: 0,
            saturation: 0,
            luminosity: 0,
            alpha: 0,
        },
        hwbChannels: {
            hue: 0,
            whiteness: 0,
            blackness: 100,
            alpha: 0,
        },
        rgbChannels: {
            red: 0,
            green: 0,
            blue: 0,
            alpha: 0,
        },
        oklchChannels: {
            lightness: 0,
            chroma: 0,
            hue: 0,
            alpha: 0,
        },
        hex: "#000000",
        namedColor: "black",
    },
    {
        name: "edge-case-maximum",
        definition: "hsv(360, 100%, 100%, 1)",
        channels: {
            hue: 360,
            saturation: 100,
            value: 100,
            alpha: 1,
        },
        "_type": "@safelytyped/css-color/CssHsvColorData",
        colorFormat: "hsv",
        colorSpace: "sRGB",
        cmykChannels: {
            cyan: 0,
            magenta: 0,
            yellow: 0,
            key: 0,
        },
        hslChannels: {
            hue: 360,
            saturation: 100,
            luminosity: 100,
            alpha: 1,
        },
        hwbChannels: {
            hue: 360,
            whiteness: 100,
            blackness: 0,
            alpha: 1,
        },
        rgbChannels: {
            red: 255,
            green: 255,
            blue: 255,
            alpha: 1,
        },
        oklchChannels: {
            lightness: 1,
            chroma: 0,
            hue: 0,
            alpha: 1,
        },
        hex: "#ffffff",
        namedColor: "white",
    },
    {
        name: "blue",
        definition: "hsv(240, 100%, 100%)",
        channels: {
            hue: 240,
            saturation: 100,
            value: 100,
            alpha: 1,
        },
        "_type": "@safelytyped/css-color/CssHsvColorData",
        colorFormat: "hsv",
        colorSpace: "sRGB",
        cmykChannels: {
            cyan: 100,
            magenta: 100,
            yellow: 0,
            key: 0,
        },
        hslChannels: {
            hue: 240,
            saturation: 100,
            luminosity: 50,
            alpha: 1,
        },
        hwbChannels: {
            hue: 240,
            whiteness: 0,
            blackness: 0,
            alpha: 1,
        },
        rgbChannels: {
            red: 0,
            green: 0,
            blue: 255,
            alpha: 1,
        },
        oklchChannels: {
            lightness: 0.452053,
            chroma: 0.295603,
            hue: 264.052809,
            alpha: 1,
        },
        hex: "#0000ff",
        namedColor: "blue",
    },
    {
        name: "semi-transparent-yellow",
        definition: "hsv(60, 100%, 100%, 0.5)",
        channels: {
            hue: 60,
            saturation: 100,
            value: 100,
            alpha: 0.5,
        },
        "_type": "@safelytyped/css-color/CssHsvColorData",
        colorFormat: "hsv",
        colorSpace: "sRGB",
        cmykChannels: {
            cyan: 0,
            magenta: 0,
            yellow: 100,
            key: 0,
        },
        hslChannels: {
            hue: 60,
            saturation: 100,
            luminosity: 50,
            alpha: 0.5,
        },
        hwbChannels: {
            hue: 60,
            whiteness: 0,
            blackness: 0,
            alpha: 0.5,
        },
        rgbChannels: {
            red: 255,
            green: 255,
            blue: 0,
            alpha: 0.5,
        },
        oklchChannels: {
            lightness: 0.971393,
            chroma: 0.167745,
            hue: 109.786179,
            alpha: 0.5,
        },
        hex: "#ffff00",
        namedColor: "yellow",
    },
    {
        name: "decimal-values",
        definition: "hsv(123.45, 67.89%, 45.67%, 0.789)",
        channels: {
            hue: 123.45,
            saturation: 67.89,
            value: 45.67,
            alpha: 0.789,
        },
        "_type": "@safelytyped/css-color/CssHsvColorData",
        colorFormat: "hsv",
        colorSpace: "sRGB",
        cmykChannels: {
            cyan: 68,
            magenta: 0,
            yellow: 48,
            key: 54,
        },
        hslChannels: {
            hue: 123.45,
            saturation: 67.89,
            luminosity: 22.835,
            alpha: 0.789,
        },
        hwbChannels: {
            hue: 123.45,
            whiteness: 14.71,
            blackness: 54.33,
            alpha: 0.789,
        },
        rgbChannels: {
            red: 70,
            green: 116,
            blue: 60,
            alpha: 0.789,
        },
        oklchChannels: {
            lightness: 0.481,
            chroma: 0.091,
            hue: 142.5,
            alpha: 0.789,
        },
        hex: "#46743c",
        namedColor: undefined,
    }
];

export const InvalidCssHsvColorDataObjects = [
    {
        description: "not CssColorData: name property missing",
        inputValue: {
            definition: "test",
            "_type": "@safelytyped/css-color/CssHsvColorData",
            colorSpace: "sRGB",
            channels: {
                hue: 0,
                saturation: 0,
                value: 39,
                alpha: 1,
            }
        }
    },
    {
        description: "not CssColorData: definition property missing",
        inputValue: {
            name: "test",
            "_type": "@safelytyped/css-color/CssHsvColorData",
            colorSpace: "sRGB",
            channels: {
                hue: 0,
                saturation: 0,
                value: 39,
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
        description: "hue channel missing",
        inputValue: {
            name: "test",
            definition: "test",
            "_type": "@safelytyped/css-color/CssHsvColorData",
            colorSpace: "sRGB",
            channels: {
                saturation: 0,
                value: 39,
                alpha: 1,
            }
        }
    },
    {
        description: "hue channel too small",
        inputValue: {
            name: "test",
            definition: "test",
            "_type": "@safelytyped/css-color/CssHsvColorData",
            colorSpace: "sRGB",
            channels: {
                hue: -0.1,
                saturation: 0,
                value: 39,
                alpha: 1,
            }
        }
    },
    {
        description: "hue channel too large",
        inputValue: {
            name: "test",
            definition: "test",
            "_type": "@safelytyped/css-color/CssHsvColorData",
            colorSpace: "sRGB",
            channels: {
                hue: 361,
                saturation: 0,
                value: 39,
                alpha: 1,
            }
        }
    },
    {
        description: "saturation channel missing",
        inputValue: {
            name: "test",
            definition: "test",
            "_type": "@safelytyped/css-color/CssHsvColorData",
            colorSpace: "sRGB",
            channels: {
                hue: 0,
                value: 39,
                alpha: 1,
            }
        }
    },
    {
        description: "saturation channel too small",
        inputValue: {
            name: "test",
            definition: "test",
            "_type": "@safelytyped/css-color/CssHsvColorData",
            colorSpace: "sRGB",
            channels: {
                hue: 0,
                saturation: -0.1,
                value: 39,
                alpha: 1,
            }
        }
    },
    {
        description: "saturation channel too large",
        inputValue: {
            name: "test",
            definition: "test",
            "_type": "@safelytyped/css-color/CssHsvColorData",
            colorSpace: "sRGB",
            channels: {
                hue: 0,
                saturation: 100.1,
                value: 39,
                alpha: 1,
            }
        }
    },
    {
        description: "value channel missing",
        inputValue: {
            name: "test",
            definition: "test",
            "_type": "@safelytyped/css-color/CssHsvColorData",
            colorSpace: "sRGB",
            channels: {
                hue: 0,
                saturation: 0,
                alpha: 1,
            }
        }
    },
    {
        description: "value channel too small",
        inputValue: {
            name: "test",
            definition: "test",
            "_type": "@safelytyped/css-color/CssHsvColorData",
            colorSpace: "sRGB",
            channels: {
                hue: 0,
                saturation: 0,
                value: -0.1,
                alpha: 1,
            }
        }
    },
    {
        description: "value channel too large",
        inputValue: {
            name: "test",
            definition: "test",
            "_type": "@safelytyped/css-color/CssHsvColorData",
            colorSpace: "sRGB",
            channels: {
                hue: 0,
                saturation: 0,
                value: 100.1,
                alpha: 1,
            }
        }
    },
    {
        description: "alpha channel missing",
        inputValue: {
            name: "test",
            definition: "test",
            "_type": "@safelytyped/css-color/CssHsvColorData",
            colorSpace: "sRGB",
            channels: {
                hue: 0,
                saturation: 0,
                value: 39,
            }
        }
    },
    {
        description: "alpha channel too small",
        inputValue: {
            name: "test",
            definition: "test",
            "_type": "@safelytyped/css-color/CssHsvColorData",
            colorSpace: "sRGB",
            channels: {
                hue: 0,
                saturation: 0,
                value: 39,
                alpha: -0.1,
            }
        }
    },
    {
        description: "alpha channel too large",
        inputValue: {
            name: "test",
            definition: "test",
            "_type": "@safelytyped/css-color/CssHsvColorData",
            colorSpace: "sRGB",
            channels: {
                hue: 0,
                saturation: 0,
                value: 39,
                alpha: 1.1,
            }
        }
    },
    {
        description: "colorFormat is incorrect",
        inputValue: {
            name: "test",
            definition: "test",
            "_type": "@safelytyped/css-color/CssHsvColorData",
            colorFormat: "hsl", // wrong format, should be "hsv"
            colorSpace: "sRGB",
            channels: {
                hue: 0,
                saturation: 0,
                value: 39,
                alpha: 1,
            }
        }
    },
    {
        description: "colorSpace is incorrect",
        inputValue: {
            name: "test",
            definition: "test",
            "_type": "@safelytyped/css-color/CssHsvColorData",
            colorFormat: "hsv",
            colorSpace: "Display P3", // wrong space, should be "sRGB"
            channels: {
                hue: 0,
                saturation: 0,
                value: 39,
                alpha: 1,
            }
        }
    },
    {
        description: "saturation channel is a string",
        inputValue: {
            name: "test",
            definition: "test",
            "_type": "@safelytyped/css-color/CssHsvColorData",
            colorFormat: "hsv",
            colorSpace: "sRGB",
            channels: {
                hue: 0,
                saturation: "50",
                value: 39,
                alpha: 1,
            }
        }
    },
    {
        description: "value channel is a string",
        inputValue: {
            name: "test",
            definition: "test",
            "_type": "@safelytyped/css-color/CssHsvColorData",
            colorFormat: "hsv",
            colorSpace: "sRGB",
            channels: {
                hue: 0,
                saturation: 50,
                value: "39",
                alpha: 1,
            }
        }
    },
    {
        description: "alpha channel is a string",
        inputValue: {
            name: "test",
            definition: "test",
            "_type": "@safelytyped/css-color/CssHsvColorData",
            colorFormat: "hsv",
            colorSpace: "sRGB",
            channels: {
                hue: 0,
                saturation: 50,
                value: 39,
                alpha: "1",
            }
        }
    },
    {
        description: "hue is Infinity",
        inputValue: {
            name: "test",
            definition: "test",
            "_type": "@safelytyped/css-color/CssHsvColorData",
            colorFormat: "hsv",
            colorSpace: "sRGB",
            channels: {
                hue: Infinity,
                saturation: 50,
                value: 50,
                alpha: 1,
            }
        }
    },
    {
        description: "hue is -Infinity",
        inputValue: {
            name: "test",
            definition: "test",
            "_type": "@safelytyped/css-color/CssHsvColorData",
            colorFormat: "hsv",
            colorSpace: "sRGB",
            channels: {
                hue: -Infinity,
                saturation: 50,
                value: 50,
                alpha: 1,
            }
        }
    },
    {
        description: "hue channel is an empty string",
        inputValue: {
            hue: "",
            saturation: 50,
            value: 50,
            alpha: 1,
        }
    },
    {
        description: "saturation channel is an object",
        inputValue: {
            hue: 180,
            saturation: {},
            value: 50,
            alpha: 1,
        }
    },
    {
        description: "value channel is an array",
        inputValue: {
            hue: 180,
            saturation: 50,
            value: [],
            alpha: 1,
        }
    },
    {
        description: "alpha channel is a function",
        inputValue: {
            hue: 180,
            saturation: 50,
            value: 50,
            alpha: function() {},
        }
    },
    {
        description: "all channels are strings",
        inputValue: {
            hue: "180",
            saturation: "50",
            value: "75",
            alpha: "1"
        }
    },
    {
        description: "all channels have incorrect types",
        inputValue: {
            hue: true,
            saturation: null,
            value: undefined,
            alpha: {}
        }
    },
    {
        description: "saturation is negative infinity",
        inputValue: {
            name: "test",
            definition: "test",
            "_type": "@safelytyped/css-color/CssHsvColorData",
            colorFormat: "hsv",
            colorSpace: "sRGB",
            channels: {
                hue: 0,
                saturation: -Infinity,
                value: 39,
                alpha: 1,
            }
        }
    },
    {
        description: "value is NaN",
        inputValue: {
            name: "test",
            definition: "test",
            "_type": "@safelytyped/css-color/CssHsvColorData",
            colorFormat: "hsv",
            colorSpace: "sRGB",
            channels: {
                hue: 0,
                saturation: 0,
                value: NaN,
                alpha: 1,
            }
        }
    },
    {
        description: "name is not a string",
        inputValue: {
            name: 123,
            definition: "test",
            "_type": "@safelytyped/css-color/CssHsvColorData",
            colorFormat: "hsv",
            colorSpace: "sRGB",
            channels: {
                hue: 0,
                saturation: 0,
                value: 39,
                alpha: 1,
            }
        }
    },
    {
        description: "definition is not a string",
        inputValue: {
            name: "test",
            definition: 123,
            "_type": "@safelytyped/css-color/CssHsvColorData",
            colorFormat: "hsv",
            colorSpace: "sRGB",
            channels: {
                hue: 0,
                saturation: 0,
                value: 39,
                alpha: 1,
            }
        }
    },
    {
        description: "colorFormat missing",
        inputValue: {
            name: "test",
            definition: "test",
            "_type": "@safelytyped/css-color/CssHsvColorData",
            colorSpace: "sRGB",
            channels: {
                hue: 0,
                saturation: 0,
                value: 39,
                alpha: 1,
            }
        }
    },
    {
        description: "colorSpace missing",
        inputValue: {
            name: "test",
            definition: "test",
            "_type": "@safelytyped/css-color/CssHsvColorData",
            colorFormat: "hsv",
            channels: {
                hue: 0,
                saturation: 0,
                value: 39,
                alpha: 1,
            }
        }
    }
];

export const InvalidMakeCssHsvColorParameters = [
    {
        description: "name property empty",
        inputValue: {
            name: "",
            definition: "test",
            channels: {
                hue: 0,
                saturation: 0,
                value: 39,
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
                hue: 0,
                saturation: 0,
                value: 39,
                alpha: 1,
            }
        }
    },
    {
        description: "hue channel too small",
        inputValue: {
            name: "test",
            definition: "test",
            channels: {
                hue: -0.1,
                saturation: 0,
                value: 39,
                alpha: 1,
            }
        }
    },
    {
        description: "hue channel too large",
        inputValue: {
            name: "test",
            definition: "test",
            channels: {
                hue: 360.1,
                saturation: 0,
                value: 39,
                alpha: 1,
            }
        }
    },
    {
        description: "saturation channel too small",
        inputValue: {
            name: "test",
            definition: "test",
            channels: {
                hue: 0,
                saturation: -0.1,
                value: 39,
                alpha: 1,
            }
        }
    },
    {
        description: "saturation channel too large",
        inputValue: {
            name: "test",
            definition: "test",
            channels: {
                hue: 0,
                saturation: 100.1,
                value: 39,
                alpha: 1,
            }
        }
    },
    {
        description: "value channel too small",
        inputValue: {
            name: "test",
            definition: "test",
            channels: {
                hue: 0,
                saturation: 0,
                value: -0.1,
                alpha: 1,
            }
        }
    },
    {
        description: "value channel too large",
        inputValue: {
            name: "test",
            definition: "test",
            channels: {
                hue: 0,
                saturation: 0,
                value: 100.1,
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
                hue: 0,
                saturation: 0,
                value: 39,
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
                hue: 0,
                saturation: 0,
                value: 39,
                alpha: 1.1,
            }
        }
    },
    {
        description: "name is not a string",
        inputValue: {
            name: 123,
            definition: "test",
            channels: {
                hue: 0,
                saturation: 0,
                value: 39,
                alpha: 1,
            }
        }
    },
    {
        description: "definition is not a string",
        inputValue: {
            name: "test",
            definition: 123,
            channels: {
                hue: 0,
                saturation: 0,
                value: 39,
                alpha: 1,
            }
        }
    },
    {
        description: "channels is null",
        inputValue: {
            name: "test",
            definition: "test",
            channels: null
        }
    },
    {
        description: "channels is not an object",
        inputValue: {
            name: "test",
            definition: "test",
            channels: "invalid"
        }
    },
    {
        description: "hue channel is NaN",
        inputValue: {
            name: "test",
            definition: "test",
            channels: {
                hue: NaN,
                saturation: 0,
                value: 39,
                alpha: 1,
            }
        }
    },
    {
        description: "channels are non-numeric strings",
        inputValue: {
            name: "test",
            definition: "test",
            channels: {
                hue: "abc",
                saturation: "def",
                value: "ghi",
                alpha: "jkl",
            }
        }
    },
];