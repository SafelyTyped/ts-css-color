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
];