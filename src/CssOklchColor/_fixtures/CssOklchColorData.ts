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
import { ValidCssColors } from "../../CssColor/_fixtures/CssColorFixtures";
import type { CssHslColorChannelsData } from "../../CssHslColor/CssHslColorChannelsData.type";
import type { CssHwbColorChannelsData } from "../../CssHwbColor/CssHwbColorChannelsData.type";
import type { CssOklchColorData } from "../CssOklchColorData.type";
import type { CssRgbColorChannelsData } from "../../CssRgbColor/CssRgbColorChannelsData.type";

type ValidCssOklchColor = CssOklchColorData & {
    hslChannels: CssHslColorChannelsData;
    hwbChannels: CssHwbColorChannelsData;
    rgbChannels: CssRgbColorChannelsData;
    hex: string;
    namedColor: Maybe<string>;
}
export const ValidCssOklchColorData: ValidCssOklchColor[] = [];

ValidCssColors.forEach((fixture) => {
    if (fixture.definition.includes("#") || fixture.definition.includes('rgb')) {
        ValidCssOklchColorData.push({
            name: fixture.name,
            definition: fixture.definition,
            channels: fixture.oklchChannels,
            "_type": "@safelytyped/css-color/CssOklchColorData",
            colorFormat: "oklch",
            colorSpace: "OKLCH",
            hslChannels: fixture.hslChannels,
            hwbChannels: fixture.hwbChannels,
            rgbChannels: fixture.rgbChannels,
            hex: fixture.hex,
            namedColor: fixture.namedColor,
        });
    }
});

export const InvalidCssOklchColorDataObjects = [
    {
        description: "not CssColorData: name property missing",
        inputValue: {
            definition: "test",
            "_type": "@safelytyped/css-color/CssOklchColorData",
            colorSpace: "OKLCH",
            channels: {
                lightness: 0.5032,
                chroma: 0,
                hue: 0,
                alpha: 1,
            }
        }
    },
    {
        description: "not CssColorData: definition property missing",
        inputValue: {
            name: "test",
            "_type": "@safelytyped/css-color/CssOklchColorData",
            colorSpace: "OKLCH",
            channels: {
                lightness: 0.5032,
                chroma: 0,
                hue: 0,
                alpha: 1,
            }
        }
    },
    {
        description: "channels completely missing",
        inputValue: {
            name: "test",
            definition: "test",
            colorSpace: "OKLCH",
        }
    },
    {
        description: "lightness channel missing",
        inputValue: {
            name: "test",
            definition: "test",
            "_type": "@safelytyped/css-color/CssOklchColorData",
            colorSpace: "OKLCH",
            channels: {
                chroma: 0,
                hue: 0,
                alpha: 1,
            }
        }
    },
    {
        description: "lightness channel too small",
        inputValue: {
            name: "test",
            definition: "test",
            "_type": "@safelytyped/css-color/CssOklchColorData",
            colorSpace: "OKLCH",
            channels: {
                lightness: -1,
                chroma: 0,
                hue: 0,
                alpha: 1,
            }
        }
    },
    {
        description: "lightness channel too large",
        inputValue: {
            name: "test",
            definition: "test",
            "_type": "@safelytyped/css-color/CssOklchColorData",
            colorSpace: "OKLCH",
            channels: {
                lightness: 1.01,
                chroma: 0,
                hue: 0,
                alpha: 1,
            }
        }
    },
    {
        description: "chroma channel missing",
        inputValue: {
            name: "test",
            definition: "test",
            "_type": "@safelytyped/css-color/CssOklchColorData",
            colorSpace: "OKLCH",
            channels: {
                lightness: 0.5032,
                hue: 0,
                alpha: 1,
            }
        }
    },
    {
        description: "chroma channel too small",
        inputValue: {
            name: "test",
            definition: "test",
            "_type": "@safelytyped/css-color/CssOklchColorData",
            colorSpace: "OKLCH",
            channels: {
                lightness: 0.5032,
                chroma: -0.1,
                hue: 0,
                alpha: 1,
            }
        }
    },
    {
        description: "chroma channel too large",
        inputValue: {
            name: "test",
            definition: "test",
            "_type": "@safelytyped/css-color/CssOklchColorData",
            colorSpace: "OKLCH",
            channels: {
                lightness: 0.5032,
                chroma: 1.01,
                hue: 0,
                alpha: 1,
            }
        }
    },
    {
        description: "hue channel missing",
        inputValue: {
            name: "test",
            definition: "test",
            "_type": "@safelytyped/css-color/CssOklchColorData",
            colorSpace: "OKLCH",
            channels: {
                lightness: 0.5032,
                chroma: 0,
                alpha: 1,
            }
        }
    },
    {
        description: "hue channel too small",
        inputValue: {
            name: "test",
            definition: "test",
            "_type": "@safelytyped/css-color/CssOklchColorData",
            colorSpace: "OKLCH",
            channels: {
                lightness: 0.5032,
                chroma: 0,
                hue: -0.1,
                alpha: 1,
            }
        }
    },
    {
        description: "hue channel too large",
        inputValue: {
            name: "test",
            definition: "test",
            "_type": "@safelytyped/css-color/CssOklchColorData",
            colorSpace: "OKLCH",
            channels: {
                lightness: 0.5032,
                chroma: 0,
                hue: 360.01,
                alpha: 1,
            }
        }
    },
    {
        description: "alpha channel missing",
        inputValue: {
            name: "test",
            definition: "test",
            "_type": "@safelytyped/css-color/CssOklchColorData",
            colorSpace: "OKLCH",
            channels: {
                lightness: 0.5032,
                chroma: 0,
                hue: 0,
            }
        }
    },
    {
        description: "alpha channel too small",
        inputValue: {
            name: "test",
            definition: "test",
            "_type": "@safelytyped/css-color/CssOklchColorData",
            colorSpace: "OKLCH",
            channels: {
                lightness: 0.5032,
                chroma: 0,
                hue: 0,
                alpha: -0.1,
            }
        }
    },
    {
        description: "alpha channel too large",
        inputValue: {
            name: "test",
            definition: "test",
            "_type": "@safelytyped/css-color/CssOklchColorData",
            colorSpace: "OKLCH",
            channels: {
                lightness: 0.5032,
                chroma: 0,
                hue: 0,
                alpha: 1.1,
            }
        }
    },
];

export const InvalidMakeCssOklchColorParameters = [
    {
        description: "name property empty",
        inputValue: {
            name: "",
            definition: "test",
            channels: {
                lightness: 0.5032,
                chroma: 0,
                hue: 0,
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
                lightness: 0.5032,
                chroma: 0,
                hue: 0,
                alpha: 1,
            }
        }
    },
    {
        description: "lightness channel too small",
        inputValue: {
            name: "test",
            definition: "test",
            channels: {
                lightness: -0.1,
                chroma: 0,
                hue: 0,
                alpha: 1,
            }
        }
    },
    {
        description: "lightness channel too large",
        inputValue: {
            name: "test",
            definition: "test",
            channels: {
                lightness: 1.01,
                chroma: 0,
                hue: 0,
                alpha: 1,
            }
        }
    },
    {
        description: "chroma channel too small",
        inputValue: {
            name: "test",
            definition: "test",
            channels: {
                lightness: 0.5032,
                chroma: -0.1,
                hue: 0,
                alpha: 1,
            }
        }
    },
    {
        description: "chroma channel too large",
        inputValue: {
            name: "test",
            definition: "test",
            channels: {
                lightness: 0.5032,
                chroma: 1.01,
                hue: 0,
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
                lightness: 0.5032,
                chroma: 0,
                hue: -0.1,
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
                lightness: 0.5032,
                chroma: 0,
                hue: 360.01,
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
                lightness: 0.5032,
                chroma: 0,
                hue: 0,
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
                lightness: 0.5032,
                chroma: 0,
                hue: 0,
                alpha: 1.1,
            }
        }
    },
];