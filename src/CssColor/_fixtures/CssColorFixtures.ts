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
import type { CssHslColorChannelsData } from "../../CssHslColor/CssHslColorChannelsData.type";
import type { CssHwbColorChannelsData } from "../../CssHwbColor/CssHwbColorChannelsData.type";
import type { CssRgbColorChannelsData } from "../../CssRgbColor/CssRgbColorChannelsData.type";

export type ValidCssColor = {
    name: string;
    definition: string;
    hslChannels: CssHslColorChannelsData;
    hwbChannels: CssHwbColorChannelsData;
    rgbChannels: CssRgbColorChannelsData;
    hex: string;
    namedColor: Maybe<string>;
}
export const ValidCssColors: ValidCssColor[] = [
    {
        name: "all-100",
        definition: "rgb(100,100,100)",
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
        rgbChannels: {
            red: 100,
            green: 100,
            blue: 100,
            alpha: 1,
        },
        hex: "#646464",
        namedColor: undefined,
    },
    {
        name: "apple-moss",
        definition: "#008040",
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
        rgbChannels: {
            red: 0,
            green: 128,
            blue: 64,
            alpha: 1,
        },
        hex: "#008040",
        namedColor: undefined,
    },
    {
        name: "red",
        definition: "#ff0000",
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
        hex: "#ff0000",
        namedColor: "red",
    },
    {
        name: "black",
        definition: "#000",
        hslChannels: {
            hue: 0,
            saturation: 0,
            luminosity: 0,
            alpha: 1,
        },
        hwbChannels: {
            hue: 0,
            whiteness: 0,
            blackness: 100,
            alpha: 1,
        },
        rgbChannels: {
            red: 0,
            green: 0,
            blue: 0,
            alpha: 1,
        },
        hex: "#000000",
        namedColor: "black",
    },
    {
        name: "white",
        definition: "#ffffff",
        hslChannels: {
            hue: 0,
            saturation: 0,
            luminosity: 100,
            alpha: 1,
        },
        hwbChannels: {
            hue: 0,
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
        hex: "#ffffff",
        namedColor: "white",
    },
];