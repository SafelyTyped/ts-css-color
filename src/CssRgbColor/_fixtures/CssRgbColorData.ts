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
import type { CssHslColorChannelsData } from "../../CssHslColor/CssHslColorChannelsData.type";
import type { CssHwbColorChannelsData } from "../../CssHwbColor/CssHwbColorChannelsData.type";
import type { CssOklchColorChannelsData } from "../../CssOklchColor/CssOklchColorChannelsData.type";
import type { CssRgbColorData } from "../CssRgbColorData.type";

type ValidCssRgbColor = CssRgbColorData & {
    hslChannels: CssHslColorChannelsData;
    hwbChannels: CssHwbColorChannelsData;
    oklchChannels: CssOklchColorChannelsData;
    hex: string;
    namedColor: Maybe<string>;
}
export const ValidCssRgbColorData: ValidCssRgbColor[] = [];

ValidCssColors.forEach((fixture) => {
    if (fixture.definition.includes("#") || fixture.definition.includes('rgb')) {
        ValidCssRgbColorData.push({
            name: fixture.name,
            definition: fixture.definition,
            channels: fixture.rgbChannels,
            "_type": "@safelytyped/css-color/CssRgbColorData",
            colorFormat: "rgb",
            colorSpace: "sRGB",
            hslChannels: fixture.hslChannels,
            hwbChannels: fixture.hwbChannels,
            oklchChannels: fixture.oklchChannels,
            hex: fixture.hex,
            namedColor: fixture.namedColor,
        });
    }
});

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