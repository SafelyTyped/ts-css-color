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
import type { SupportedCssColorSpace } from "../../CssColorspace/SupportedCssColorSpace.type";
import type { CssHslColorChannelsData } from "../../CssHslColor/CssHslColorChannelsData.type";
import type { CssHsvColorChannelsData } from "../../CssHsvColor/CssHsvColorChannelsData.type";
import type { CssHwbColorChannelsData } from "../../CssHwbColor/CssHwbColorChannelsData.type";
import type { CssOklchColorChannelsData } from "../../CssOklchColor/CssOklchColorChannelsData.type";
import type { CssRgbColorChannelsData } from "../../CssRgbColor/CssRgbColorChannelsData.type";
import type { SupportedCssColorFormat } from "../../SupportedCssColorFormat/SupportedCssColorFormat.type";

export type ValidCssColor = {
    name: string;
    definition: string;
    cmykChannels: CssCmykColorChannelsData;
    hslChannels: CssHslColorChannelsData;
    hsvChannels: CssHsvColorChannelsData;
    hwbChannels: CssHwbColorChannelsData;
    rgbChannels: CssRgbColorChannelsData;
    oklchChannels: CssOklchColorChannelsData;
    hex: string;
    namedColor: Maybe<string>;
    colorFormat: SupportedCssColorFormat;
    colorSpace: SupportedCssColorSpace;
}
export const ValidCssColors: ValidCssColor[] = [
    {
        name: "all-100",
        definition: "rgb(100,100,100)",
        cmykChannels: {
            cyan: 0,
            magenta: 0,
            yellow: 0,
            key: 61,
        },
        hslChannels: {
            hue: 0,
            saturation: 0,
            luminosity: 39,
            alpha: 1,
        },
        hsvChannels: {
            hue: 0,
            saturation: 0,
            value: 39,
            alpha: 1,
        },
        hwbChannels: {
            hue: 0,
            whiteness: 39,
            blackness: 61,
            alpha: 1,
        },
        oklchChannels: {
            lightness: 0.503088,
            chroma: 0,
            hue: 0,
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
        colorFormat: "rgb",
        colorSpace: "sRGB",
    },
    {
        name: "apple-moss",
        definition: "#008040",
        cmykChannels: {
            cyan: 100,
            magenta: 0,
            yellow: 50,
            key: 50,
        },
        hslChannels: {
            hue: 150,
            saturation: 100,
            luminosity: 25,
            alpha: 1,
        },
        hsvChannels: {
            hue: 150,
            saturation: 100,
            value: 50,
            alpha: 1,
        },
        hwbChannels: {
            hue: 150,
            whiteness: 0,
            blackness: 50,
            alpha: 1,
        },
        oklchChannels: {
            lightness: 0.525477,
            chroma: 0.137772,
            hue: 152.154811,
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
        colorFormat: "rgb",
        colorSpace: "sRGB",
    },
    {
        name: "red",
        definition: "#ff0000",
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
        hsvChannels: {
            hue: 0,
            saturation: 100,
            value: 100,
            alpha: 1,
        },
        hwbChannels: {
            hue: 0,
            whiteness: 0,
            blackness: 0,
            alpha: 1,
        },
        oklchChannels: {
            lightness: 0.627955,
            chroma: 0.257683,
            hue: 29.233885,
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
        colorFormat: "keyword",
        colorSpace: "sRGB",
    },
    {
        name: "black (6 char definition)",
        definition: "#000000",
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
            alpha: 1,
        },
        hsvChannels: {
            hue: 0,
            saturation: 0,
            value: 0,
            alpha: 1,
        },
        hwbChannels: {
            hue: 0,
            whiteness: 0,
            blackness: 100,
            alpha: 1,
        },
        oklchChannels: {
            lightness: 0,
            chroma: 0,
            hue: 0,
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
        colorFormat: "rgb",
        colorSpace: "sRGB",
    },
    {
        name: "black (3 char definition)",
        definition: "#000",
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
            alpha: 1,
        },
        hsvChannels: {
            hue: 0,
            saturation: 0,
            value: 0,
            alpha: 1,
        },
        hwbChannels: {
            hue: 0,
            whiteness: 0,
            blackness: 100,
            alpha: 1,
        },
        oklchChannels: {
            lightness: 0,
            chroma: 0,
            hue: 0,
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
        colorFormat: "rgb",
        colorSpace: "sRGB",
    },
    {
        name: "white (6 char definition)",
        definition: "#ffffff",
        cmykChannels: {
            cyan: 0,
            magenta: 0,
            yellow: 0,
            key: 0,
        },
        hslChannels: {
            hue: 0,
            saturation: 0,
            luminosity: 100,
            alpha: 1,
        },
        hsvChannels: {
            hue: 0,
            saturation: 0,
            value: 100,
            alpha: 1,
        },
        hwbChannels: {
            hue: 0,
            whiteness: 100,
            blackness: 0,
            alpha: 1,
        },
        oklchChannels: {
            lightness: 1,
            chroma: 0,
            hue: 0,
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
        colorFormat: "rgb",
        colorSpace: "sRGB",
    },
    {
        name: "white (3 char definition)",
        definition: "#fff",
        cmykChannels: {
            cyan: 0,
            magenta: 0,
            yellow: 0,
            key: 0,
        },
        hslChannels: {
            hue: 0,
            saturation: 0,
            luminosity: 100,
            alpha: 1,
        },
        hsvChannels: {
            hue: 0,
            saturation: 0,
            value: 100,
            alpha: 1,
        },
        hwbChannels: {
            hue: 0,
            whiteness: 100,
            blackness: 0,
            alpha: 1,
        },
        oklchChannels: {
            lightness: 1,
            chroma: 0,
            hue: 0,
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
        colorFormat: "rgb",
        colorSpace: "sRGB",
    },
    {
        name: "skyblue",
        definition: "hsl(196, 100%, 64%)",
        cmykChannels: {
            cyan: 72,
            magenta: 19,
            yellow: 0,
            key: 0,
        },
        hslChannels: {
            hue: 196,
            saturation: 100,
            luminosity: 64,
            alpha: 1,
        },
        hsvChannels: {
            hue: 196,
            saturation: 72,
            value: 100,
            alpha: 1,
        },
        hwbChannels: {
            hue: 196,
            whiteness: 28,
            blackness: 0,
            alpha: 1,
        },
        oklchChannels: {
            lightness: 0.799156,
            chroma: 0.13273,
            hue: 226.670979,
            alpha: 1,
        },
        rgbChannels: {
            red: 71,
            green: 206,
            blue: 255,
            alpha: 1,
        },
        hex: "#47ceff",
        namedColor: undefined,
        colorFormat: "rgb",
        colorSpace: "sRGB",
    },
    {
        name: "palegreen",
        definition: "hwb(100 76% 12%)",
        cmykChannels: {
            cyan: 9,
            magenta: 0,
            yellow: 13,
            key: 12,
        },
        hslChannels: {
            hue: 100,
            saturation: 33,
            luminosity: 82,
            alpha: 1,
        },
        hsvChannels: {
            hue: 100,
            saturation: 14,
            value: 88,
            alpha: 1,
        },
        hwbChannels: {
            hue: 100,
            whiteness: 76,
            blackness: 12,
            alpha: 1,
        },
        oklchChannels: {
            lightness: 0.884487,
            chroma: 0.046611,
            hue: 135.096968,
            alpha: 1,
        },
        rgbChannels: {
            red: 204,
            green: 224,
            blue: 194,
            alpha: 1,
        },
        hex: "#cce0c2",
        namedColor: undefined,
        colorFormat: "rgb",
        colorSpace: "sRGB",
    },
    {
        name: "navyblue",
        definition: "hsv(240, 100%, 50%)",
        cmykChannels: {
            cyan: 100,
            magenta: 100,
            yellow: 0,
            key: 50,
        },
        hslChannels: {
            hue: 240,
            saturation: 100,
            luminosity: 25,
            alpha: 1,
        },
        hsvChannels: {
            hue: 240,
            saturation: 100,
            value: 50,
            alpha: 1,
        },
        hwbChannels: {
            hue: 240,
            whiteness: 0,
            blackness: 50,
            alpha: 1,
        },
        rgbChannels: {
            red: 0,
            green: 0,
            blue: 128,
            alpha: 1,
        },
        oklchChannels: {
            lightness: 0.271165,
            chroma: 0.187899,
            hue: 264.052021,
            alpha: 1,
        },
        hex: "#000080",
        namedColor: "navy",
        colorFormat: "hsv",
        colorSpace: "sRGB",
    },
];