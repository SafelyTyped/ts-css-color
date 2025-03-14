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
import type { CssHwbColorChannelsData } from "../../CssHwbColor/CssHwbColorChannelsData.type";
import type { CssOklchColorChannelsData } from "../../CssOklchColor/CssOklchColorChannelsData.type";
import type { CssRgbColorChannelsData } from "../../CssRgbColor/CssRgbColorChannelsData.type";
import type { CssKeywordColorData } from "../CssKeywordColorData.type";

type ValidCssKeywordColorData = CssKeywordColorData & {
    cmykChannels: CssCmykColorChannelsData;
    rgbChannels: CssRgbColorChannelsData;
    hslChannels: CssHslColorChannelsData;
    hsvChannels: CssHsvColorChannelsData;
    hwbChannels: CssHwbColorChannelsData;
    oklchChannels: CssOklchColorChannelsData;
    hex: string;
    namedColor: Maybe<string>;
}
export const ValidCssKeywordColorData: ValidCssKeywordColorData[] = [];

ValidCssColors.forEach((fixture) => {
    if (fixture.namedColor) {
        ValidCssKeywordColorData.push({
            name: fixture.name,
            definition: fixture.namedColor,
            "_type": "@safelytyped/css-color/CssKeywordColor",
            colorFormat: "keyword",
            colorSpace: "sRGB",
            cmykChannels: fixture.cmykChannels,
            hslChannels: fixture.hslChannels,
            hsvChannels: fixture.hsvChannels,
            hwbChannels: fixture.hwbChannels,
            rgbChannels: fixture.rgbChannels,
            oklchChannels: fixture.oklchChannels,
            hex: fixture.hex,
            namedColor: fixture.namedColor,
        });
    }
});

export const InvalidCssKeywordColorData = [
    {
        name: "not-a-color",
        definition: "not-a-color",
    },
];

export const InvalidCssKeywordColorDataObjects = [
    {
        description: "missing 'name' field",
        inputValue: {
            definition: "black",
        }
    },
    {
        description: "missing 'definition' field",
        inputValue: {
            name: "black",
        }
    },
];

export const InvalidCssKeywordColorDataInput = [
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
];