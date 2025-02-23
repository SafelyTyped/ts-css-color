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

import type { Maybe } from "@safelytyped/core-types";
import { ValidCssColors } from "../../CssColor/_fixtures/CssColorFixtures";
import type { CssHwbColorChannelsData } from "../../CssHwbColor/CssHwbColorChannelsData.type";
import type { CssHslColorData } from "../CssHslColorData.type";
import type { CssRgbColorChannelsData } from "../../CssRgbColor/CssRgbColorChannelsData.type";

type ValidCssHslColor = CssHslColorData & {
    hwbChannels: CssHwbColorChannelsData;
    rgbChannels: CssRgbColorChannelsData;
    hex: string;
    namedColor: Maybe<string>;
}
export const ValidCssHslColorData: ValidCssHslColor[] = [];

ValidCssColors.forEach((fixture) => {
    if (fixture.definition.includes('hsl')) {
        ValidCssHslColorData.push({
            name: fixture.name,
            definition: fixture.definition,
            channels: fixture.hslChannels,
            "_type": "@safelytyped/css-color/CssHslColorData",
            colorFormat: "hsl",
            colorSpace: "sRGB",
            hwbChannels: fixture.hwbChannels,
            rgbChannels: fixture.rgbChannels,
            hex: fixture.hex,
            namedColor: fixture.namedColor,
        });
    }
});

export const InvalidCssHslColorDataObjects = [
    {
        description: "not CssColorData: name property missing",
        inputValue: {
            definition: "test",
            "_type": "@safelytyped/css-color/CssHslColorData",
            colorSpace: "sRGB",
            channels: {
                hue: 0,
                saturation: 0,
                luminosity: 39,
                alpha: 1,
            }
        }
    },
    {
        description: "not CssColorData: definition property missing",
        inputValue: {
            name: "test",
            "_type": "@safelytyped/css-color/CssHslColorData",
            colorSpace: "sRGB",
            channels: {
                hue: 0,
                saturation: 0,
                luminosity: 39,
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
            "_type": "@safelytyped/css-color/CssHslColorData",
            colorSpace: "sRGB",
            channels: {
                saturation: 0,
                luminosity: 39,
                alpha: 1,
            }
        }
    },
    {
        description: "hue channel too small",
        inputValue: {
            name: "test",
            definition: "test",
            "_type": "@safelytyped/css-color/CssHslColorData",
            colorSpace: "sRGB",
            channels: {
                hue: -0.1,
                saturation: 0,
                luminosity: 39,
                alpha: 1,
            }
        }
    },
    {
        description: "hue channel too large",
        inputValue: {
            name: "test",
            definition: "test",
            "_type": "@safelytyped/css-color/CssHslColorData",
            colorSpace: "sRGB",
            channels: {
                hue: 361,
                saturation: 0,
                luminosity: 39,
                alpha: 1,
            }
        }
    },
    {
        description: "saturation channel missing",
        inputValue: {
            name: "test",
            definition: "test",
            "_type": "@safelytyped/css-color/CssHslColorData",
            colorSpace: "sRGB",
            channels: {
                hue: 0,
                luminosity: 39,
                alpha: 1,
            }
        }
    },
    {
        description: "saturation channel too small",
        inputValue: {
            name: "test",
            definition: "test",
            "_type": "@safelytyped/css-color/CssHslColorData",
            colorSpace: "sRGB",
            channels: {
                hue: 0,
                saturation: -0.1,
                luminosity: 39,
                alpha: 1,
            }
        }
    },
    {
        description: "saturation channel too large",
        inputValue: {
            name: "test",
            definition: "test",
            "_type": "@safelytyped/css-color/CssHslColorData",
            colorSpace: "sRGB",
            channels: {
                hue: 0,
                saturation: 100.1,
                luminosity: 39,
                alpha: 1,
            }
        }
    },
    {
        description: "luminosity channel missing",
        inputValue: {
            name: "test",
            definition: "test",
            "_type": "@safelytyped/css-color/CssHslColorData",
            colorSpace: "sRGB",
            channels: {
                hue: 0,
                saturation: 0,
                alpha: 1,
            }
        }
    },
    {
        description: "luminosity channel too small",
        inputValue: {
            name: "test",
            definition: "test",
            "_type": "@safelytyped/css-color/CssHslColorData",
            colorSpace: "sRGB",
            channels: {
                hue: 0,
                saturation: 0,
                luminosity: -0.1,
                alpha: 1,
            }
        }
    },
    {
        description: "luminosity channel too large",
        inputValue: {
            name: "test",
            definition: "test",
            "_type": "@safelytyped/css-color/CssHslColorData",
            colorSpace: "sRGB",
            channels: {
                hue: 0,
                saturation: 0,
                luminosity: 100.1,
                alpha: 1,
            }
        }
    },
    {
        description: "alpha channel missing",
        inputValue: {
            name: "test",
            definition: "test",
            "_type": "@safelytyped/css-color/CssHslColorData",
            colorSpace: "sRGB",
            channels: {
                hue: 0,
                saturation: 0,
                luminosity: 39,
            }
        }
    },
    {
        description: "alpha channel too small",
        inputValue: {
            name: "test",
            definition: "test",
            "_type": "@safelytyped/css-color/CssHslColorData",
            colorSpace: "sRGB",
            channels: {
                hue: 0,
                saturation: 0,
                luminosity: 39,
                alpha: -0.1,
            }
        }
    },
    {
        description: "alpha channel too large",
        inputValue: {
            name: "test",
            definition: "test",
            "_type": "@safelytyped/css-color/CssHslColorData",
            colorSpace: "sRGB",
            channels: {
                hue: 0,
                saturation: 0,
                luminosity: 39,
                alpha: 1.1,
            }
        }
    },
];

export const InvalidMakeCssHslColorParameters = [
    {
        description: "name property empty",
        inputValue: {
            name: "",
            definition: "test",
            channels: {
                hue: 0,
                saturation: 0,
                luminosity: 39,
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
                luminosity: 39,
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
                luminosity: 39,
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
                luminosity: 39,
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
                luminosity: 39,
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
                luminosity: 39,
                alpha: 1,
            }
        }
    },
    {
        description: "luminosity channel too small",
        inputValue: {
            name: "test",
            definition: "test",
            channels: {
                hue: 0,
                saturation: 0,
                luminosity: -0.1,
                alpha: 1,
            }
        }
    },
    {
        description: "luminosity channel too large",
        inputValue: {
            name: "test",
            definition: "test",
            channels: {
                hue: 0,
                saturation: 0,
                luminosity: 100.1,
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
                luminosity: 39,
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
                luminosity: 39,
                alpha: 1.1,
            }
        }
    },
];