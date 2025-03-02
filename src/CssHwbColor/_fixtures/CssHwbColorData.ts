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
import type { CssCmykColorChannelsData } from "../../CssCmykColor/CssCmykColorChannelsData.type";
import { ValidCssColors } from "../../CssColor/_fixtures/CssColorFixtures";
import type { CssHslColorChannelsData } from "../../CssHslColor/CssHslColorChannelsData.type";
import type { CssHsvColorChannelsData } from "../../CssHsvColor/CssHsvColorChannelsData.type";
import type { CssOklchColorChannelsData } from "../../CssOklchColor/CssOklchColorChannelsData.type";
import type { CssRgbColorChannelsData } from "../../CssRgbColor/CssRgbColorChannelsData.type";
import type { CssHwbColorData } from "../CssHwbColorData.type";

type ValidCssHwbColor = CssHwbColorData & {
    cmykChannels: CssCmykColorChannelsData;
    hslChannels: CssHslColorChannelsData;
    hsvChannels: CssHsvColorChannelsData;
    rgbChannels: CssRgbColorChannelsData;
    oklchChannels: CssOklchColorChannelsData;
    hex: string;
    namedColor: Maybe<string>;
}
export const ValidCssHwbColorData: ValidCssHwbColor[] = [];

ValidCssColors.forEach((fixture) => {
    if (fixture.definition.includes('hwb')) {
        ValidCssHwbColorData.push({
            name: fixture.name,
            definition: fixture.definition,
            channels: fixture.hwbChannels,
            "_type": "@safelytyped/css-color/CssHwbColorData",
            colorFormat: "hwb",
            colorSpace: "sRGB",
            cmykChannels: fixture.cmykChannels,
            hslChannels: fixture.hslChannels,
            hsvChannels: fixture.hsvChannels,
            rgbChannels: fixture.rgbChannels,
            oklchChannels: fixture.oklchChannels,
            hex: fixture.hex,
            namedColor: fixture.namedColor,
        });
    }
});

export const InvalidCssHwbColorDataObjects = [
    {
        description: "not CssColorData: name property missing",
        inputValue: {
            definition: "test",
            "_type": "@safelytyped/css-color/CssRgbColorData",
            colorSpace: "sRGB",
            channels: {
                hue: 0,
                whiteness: 39,
                blackness: 61,
                alpha: 1,
            }
        }
    },
    {
        description: "not CssColorData: definition property missing",
        inputValue: {
            name: "test",
            "_type": "@safelytyped/css-color/CssHwbColorData",
            colorSpace: "sRGB",
            channels: {
                hue: 0,
                whiteness: 39,
                blackness: 61,
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
            "_type": "@safelytyped/css-color/CssHwbColorData",
            colorSpace: "sRGB",
            channels: {
                whiteness: 39,
                blackness: 61,
                alpha: 1,
            }
        }
    },
    {
        description: "hue channel too small",
        inputValue: {
            name: "test",
            definition: "test",
            "_type": "@safelytyped/css-color/CssHwbColorData",
            colorSpace: "sRGB",
            channels: {
                hue: -1,
                whiteness: 39,
                blackness: 61,
                alpha: 1,
            }
        }
    },
    {
        description: "hue channel too large",
        inputValue: {
            name: "test",
            definition: "test",
            "_type": "@safelytyped/css-color/CssHwbColorData",
            colorSpace: "sRGB",
            channels: {
                hue: 361,
                whiteness: 39,
                blackness: 61,
                alpha: 1,
            }
        }
    },
    {
        description: "whiteness channel missing",
        inputValue: {
            name: "test",
            definition: "test",
            "_type": "@safelytyped/css-color/CssHwbColorData",
            colorSpace: "sRGB",
            channels: {
                hue: 0,
                blackness: 61,
                alpha: 1,
            }
        }
    },
    {
        description: "whiteness channel too small",
        inputValue: {
            name: "test",
            definition: "test",
            "_type": "@safelytyped/css-color/CssHwbColorData",
            colorSpace: "sRGB",
            channels: {
                hue: 0,
                whiteness: -0.1,
                blackness: 61,
                alpha: 1,
            }
        }
    },
    {
        description: "whiteness channel too large",
        inputValue: {
            name: "test",
            definition: "test",
            "_type": "@safelytyped/css-color/CssHwbColorData",
            colorSpace: "sRGB",
            channels: {
                hue: 0,
                whiteness: 101,
                blackness: 61,
                alpha: 1,
            }
        }
    },
    {
        description: "blackness channel missing",
        inputValue: {
            name: "test",
            definition: "test",
            "_type": "@safelytyped/css-color/CssHwbColorData",
            colorSpace: "sRGB",
            channels: {
                hue: 0,
                whiteness: 39,
                alpha: 1,
            }
        }
    },
    {
        description: "blackness channel too small",
        inputValue: {
            name: "test",
            definition: "test",
            "_type": "@safelytyped/css-color/CssHwbColorData",
            colorSpace: "sRGB",
            channels: {
                hue: 0,
                whiteness: 39,
                blackness: -1,
                alpha: 1,
            }
        }
    },
    {
        description: "blackness channel too large",
        inputValue: {
            name: "test",
            definition: "test",
            "_type": "@safelytyped/css-color/CssHwbColorData",
            colorSpace: "sRGB",
            channels: {
                hue: 0,
                whiteness: 39,
                blackness: 101,
                alpha: 1,
            }
        }
    },
    {
        description: "alpha channel missing",
        inputValue: {
            name: "test",
            definition: "test",
            "_type": "@safelytyped/css-color/CssHwnColorData",
            colorSpace: "sRGB",
            channels: {
                hue: 0,
                whiteness: 39,
                blackness: 61,
            }
        }
    },
    {
        description: "alpha channel too small",
        inputValue: {
            name: "test",
            definition: "test",
            "_type": "@safelytyped/css-color/CssHwbColorData",
            colorSpace: "sRGB",
            channels: {
                hue: 0,
                whiteness: 39,
                blackness: 61,
                alpha: -0.1,
            }
        }
    },
    {
        description: "alpha channel too large",
        inputValue: {
            name: "test",
            definition: "test",
            "_type": "@safelytyped/css-color/CssHwbColorData",
            colorSpace: "sRGB",
            channels: {
                hue: 0,
                whiteness: 39,
                blackness: 61,
                alpha: 1.1,
            }
        }
    },
];

export const InvalidMakeCssHwbColorParameters = [
    {
        description: "name property empty",
        inputValue: {
            name: "",
            definition: "test",
            channels: {
                hue: 0,
                whiteness: 39,
                blackness: 61,
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
                whiteness: 39,
                blackness: 61,
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
                whiteness: 39,
                blackness: 61,
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
                hue: -0.1,
                whiteness: 39,
                blackness: 61,
                alpha: 1,
            }
        }
    },
    {
        description: "whiteness channel too small",
        inputValue: {
            name: "test",
            definition: "test",
            channels: {
                hue: 0,
                whiteness: -1,
                blackness: 61,
                alpha: 1,
            }
        }
    },
    {
        description: "whiteness channel too large",
        inputValue: {
            name: "test",
            definition: "test",
            channels: {
                hue: 0,
                whiteness: 101,
                blackness: 61,
                alpha: 1,
            }
        }
    },
    {
        description: "blackness channel too small",
        inputValue: {
            name: "test",
            definition: "test",
            channels: {
                hue: 0,
                whiteness: 39,
                blackness: -1,
                alpha: 1,
            }
        }
    },
    {
        description: "blackness channel too large",
        inputValue: {
            name: "test",
            definition: "test",
            channels: {
                hue: 0,
                whiteness: 39,
                blackness: 101,
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
                whiteness: 39,
                blackness: 61,
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
                whiteness: 39,
                blackness: 61,
                alpha: 1.1,
            }
        }
    },
];
