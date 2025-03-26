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
import { makeCssHexColorDefinition, type CmykColorModel, type ColorModelsSet, type CssNamedColorColorModel, type HexColorModel, type HslColorModel, type HsvColorModel, type HwbColorModel, type OklchColorModel, type RgbColorModel, type SupportedColorModel, type SupportedColorSpace } from "@safelytyped/css-color";

export type ValidCssColor = {
    /**
     * we will show this name in our unit test output
     */
    name: string;

    /**
     * we will use this definition to create the color in (most of) our
     * tests
     */
    definition: string;

    /**
     * when we use the definition to create the color, we expect the returned
     * object to be using this color model
     */
    colorModel: SupportedColorModel;

    /**
     * when we use the definition to create the color, we expect the returned
     * object to be using this color space
     */
    colorSpace: SupportedColorSpace;

    /**
     * when we convert the color to a different format, we expect the
     * returned object to match these values
     *
     * (i.e. when we convert to rgb, we expect the returned object to
     * have the rgb values below)
     */
    colorModels: {
        cmyk: CmykColorModel;
        cssNamedColor: Maybe<CssNamedColorColorModel>;
        hex: HexColorModel;
        hsl: HslColorModel;
        hsv: HsvColorModel;
        hwb: HwbColorModel;
        oklch: OklchColorModel;
        rgb: RgbColorModel;
    },
    css: Omit<ColorModelsSet<string|undefined>, "hex" | "cssNamedColor">;
}

export const CSS_COLOR_FIXTURES: ValidCssColor[] = [
    {
        name: "all-100",
        definition: "rgb(100,100,100)",
        colorModel: "rgb",
        colorSpace: "sRGB",
        colorModels: {
            cmyk: {
                colorModel: "cmyk",
                colorSpace: "CMYK",
                cyan: 0,
                magenta: 0,
                yellow: 0,
                key: 61,
            },
            cssNamedColor: undefined,
            hex: {
                colorModel: "hex",
                colorSpace: "sRGB",
                hex: makeCssHexColorDefinition("#646464"),
            },
            hsl: {
                colorModel: "hsl",
                colorSpace: "sRGB",
                hue: 0,
                saturation: 0,
                luminosity: 39,
                alpha: 1,
            },
            hsv: {
                colorModel: "hsv",
                colorSpace: "sRGB",
                hue: 0,
                saturation: 0,
                value: 39,
                alpha: 1,
            },
            hwb: {
                colorModel: "hwb",
                colorSpace: "sRGB",
                hue: 0,
                whiteness: 39,
                blackness: 61,
                alpha: 1,
            },
            oklch: {
                colorModel: "oklch",
                colorSpace: "OKLAB",
                lightness: 0.503088,
                chroma: 0,
                hue: 0,
                alpha: 1,
            },
            rgb: {
                colorModel: "rgb",
                colorSpace: "sRGB",
                red: 100,
                green: 100,
                blue: 100,
                alpha: 1,
            },
        },
        css: {
            cmyk: "color(--device-cmyk 0 0 0 61)",
            hsl: "hsl(0 0% 39%)",
            hsv: "color(--hsv 0 0 0.39)",
            hwb: "hwb(0 39% 61%)",
            oklch: "oklch(0.503088 0 0)",
            rgb: "rgb(100, 100, 100)",
        },
    },
    {
        name: "apple-moss",
        definition: "#008040",
        colorModel: "hex",
        colorSpace: "sRGB",
        colorModels: {
            cmyk: {
                colorModel: "cmyk",
                colorSpace: "CMYK",
                cyan: 100,
                magenta: 0,
                yellow: 50,
                key: 50,
            },
            cssNamedColor: undefined,
            hex: {
                colorModel: "hex",
                colorSpace: "sRGB",
                hex: makeCssHexColorDefinition("#008040"),
            },
            hsl: {
                colorModel: "hsl",
                colorSpace: "sRGB",
                hue: 150,
                saturation: 100,
                luminosity: 25,
                alpha: 1,
            },
            hsv: {
                colorModel: "hsv",
                colorSpace: "sRGB",
                hue: 150,
                saturation: 100,
                value: 50,
                alpha: 1,
            },
            hwb: {
                colorModel: "hwb",
                colorSpace: "sRGB",
                hue: 150,
                whiteness: 0,
                blackness: 50,
                alpha: 1,
            },
            oklch: {
                colorModel: "oklch",
                colorSpace: "OKLAB",
                lightness: 0.525477,
                chroma: 0.137772,
                hue: 152.154811,
                alpha: 1,
            },
            rgb: {
                colorModel: "rgb",
                colorSpace: "sRGB",
                red: 0,
                green: 128,
                blue: 64,
                alpha: 1,
            },
        },
        css: {
            cmyk: "color(--device-cmyk 100 0 50 50)",
            hsl: "hsl(150 100% 25%)",
            hsv: "color(--hsv 150 1 0.5)",
            hwb: "hwb(150 0% 50%)",
            oklch: "oklch(0.525477 0.137772 152.154811)",
            rgb: "rgb(0, 128, 64)",
        },
    },
    {
        name: "red",
        definition: "#ff0000",
        colorModel: "hex",
        colorSpace: "sRGB",
        colorModels: {
            cmyk: {
                colorModel: "cmyk",
                colorSpace: "CMYK",
                cyan: 0,
                magenta: 100,
                yellow: 100,
                key: 0,
            },
            cssNamedColor: {
                colorModel: "cssNamedColor",
                colorSpace: "sRGB",
                color: "red",
            },
            hex: {
                colorModel: "hex",
                colorSpace: "sRGB",
                hex: makeCssHexColorDefinition("#ff0000"),
            },
            hsl: {
                colorModel: "hsl",
                colorSpace: "sRGB",
                hue: 0,
                saturation: 100,
                luminosity: 50,
                alpha: 1,
            },
            hsv: {
                colorModel: "hsv",
                colorSpace: "sRGB",
                hue: 0,
                saturation: 100,
                value: 100,
                alpha: 1,
            },
            hwb: {
                colorModel: "hwb",
                colorSpace: "sRGB",
                hue: 0,
                whiteness: 0,
                blackness: 0,
                alpha: 1,
            },
            oklch: {
                colorModel: "oklch",
                colorSpace: "OKLAB",
                lightness: 0.627955,
                chroma: 0.257683,
                hue: 29.233885,
                alpha: 1,
            },
            rgb: {
                colorModel: "rgb",
                colorSpace: "sRGB",
                red: 255,
                green: 0,
                blue: 0,
                alpha: 1,
            },
        },
        css: {
            cmyk: "color(--device-cmyk 0 100 100 0)",
            hsl: "hsl(0 100% 50%)",
            hsv: "color(--hsv 0 1 1)",
            hwb: "hwb(0 0% 0%)",
            oklch: "oklch(0.627955 0.257683 29.233885)",
            rgb: "rgb(255, 0, 0)",
        },
    },
    {
        name: "black (6 char definition)",
        definition: "#000000",
        colorModel: "hex",
        colorSpace: "sRGB",
        colorModels: {
            cmyk: {
                colorModel: "cmyk",
                colorSpace: "CMYK",
                cyan: 0,
                magenta: 0,
                yellow: 0,
                key: 100,
            },
            cssNamedColor: {
                colorModel: "cssNamedColor",
                colorSpace: "sRGB",
                color: "black",
            },
            hex: {
                colorModel: "hex",
                colorSpace: "sRGB",
                hex: makeCssHexColorDefinition("#000000"),
            },
            hsl: {
                colorModel: "hsl",
                colorSpace: "sRGB",
                hue: 0,
                saturation: 0,
                luminosity: 0,
                alpha: 1,
            },
            hsv: {
                colorModel: "hsv",
                colorSpace: "sRGB",
                hue: 0,
                saturation: 0,
                value: 0,
                alpha: 1,
            },
            hwb: {
                colorModel: "hwb",
                colorSpace: "sRGB",
                hue: 0,
                whiteness: 0,
                blackness: 100,
                alpha: 1,
            },
            oklch: {
                colorModel: "oklch",
                colorSpace: "OKLAB",
                lightness: 0,
                chroma: 0,
                hue: 0,
                alpha: 1,
            },
            rgb: {
                colorModel: "rgb",
                colorSpace: "sRGB",
                red: 0,
                green: 0,
                blue: 0,
                alpha: 1,
            },
        },
        css: {
            cmyk: "color(--device-cmyk 0 0 0 100)",
            hsl: "hsl(0 0% 0%)",
            hsv: "color(--hsv 0 0 0)",
            hwb: "hwb(0 0% 100%)",
            oklch: "oklch(0 0 0)",
            rgb: "rgb(0, 0, 0)",
        },
    },
    {
        name: "black (3 char definition)",
        definition: "#000",
        colorModel: "hex",
        colorSpace: "sRGB",
        colorModels: {
            cmyk: {
                colorModel: "cmyk",
                colorSpace: "CMYK",
                cyan: 0,
                magenta: 0,
                yellow: 0,
                key: 100,
            },
            cssNamedColor: {
                colorModel: "cssNamedColor",
                colorSpace: "sRGB",
                color: "black",
            },
            hex: {
                colorModel: "hex",
                colorSpace: "sRGB",
                hex: makeCssHexColorDefinition("#000000"),
            },
            hsl: {
                colorModel: "hsl",
                colorSpace: "sRGB",
                hue: 0,
                saturation: 0,
                luminosity: 0,
                alpha: 1,
            },
            hsv: {
                colorModel: "hsv",
                colorSpace: "sRGB",
                hue: 0,
                saturation: 0,
                value: 0,
                alpha: 1,
            },
            hwb: {
                colorModel: "hwb",
                colorSpace: "sRGB",
                hue: 0,
                whiteness: 0,
                blackness: 100,
                alpha: 1,
            },
            oklch: {
                colorModel: "oklch",
                colorSpace: "OKLAB",
                lightness: 0,
                chroma: 0,
                hue: 0,
                alpha: 1,
            },
            rgb: {
                colorModel: "rgb",
                colorSpace: "sRGB",
                red: 0,
                green: 0,
                blue: 0,
                alpha: 1,
            },
        },
        css: {
            cmyk: "color(--device-cmyk 0 0 0 100)",
            hsl: "hsl(0 0% 0%)",
            hsv: "color(--hsv 0 0 0)",
            hwb: "hwb(0 0% 100%)",
            oklch: "oklch(0 0 0)",
            rgb: "rgb(0, 0, 0)",
        },
    },
    {
        name: "white (6 char definition)",
        definition: "#ffffff",
        colorModel: "hex",
        colorSpace: "sRGB",
        colorModels: {
            cmyk: {
                colorModel: "cmyk",
                colorSpace: "CMYK",
                cyan: 0,
                magenta: 0,
                yellow: 0,
                key: 0,
            },
            cssNamedColor: {
                colorModel: "cssNamedColor",
                colorSpace: "sRGB",
                color: "white",
            },
            hex: {
                colorModel: "hex",
                colorSpace: "sRGB",
                hex: makeCssHexColorDefinition("#ffffff"),
            },
            hsl: {
                colorModel: "hsl",
                colorSpace: "sRGB",
                hue: 0,
                saturation: 0,
                luminosity: 100,
                alpha: 1,
            },
            hsv: {
                colorModel: "hsv",
                colorSpace: "sRGB",
                hue: 0,
                saturation: 0,
                value: 100,
                alpha: 1,
            },
            hwb: {
                colorModel: "hwb",
                colorSpace: "sRGB",
                hue: 0,
                whiteness: 100,
                blackness: 0,
                alpha: 1,
            },
            oklch: {
                colorModel: "oklch",
                colorSpace: "OKLAB",
                lightness: 1,
                chroma: 0,
                hue: 0,
                alpha: 1,
            },
            rgb: {
                colorModel: "rgb",
                colorSpace: "sRGB",
                red: 255,
                green: 255,
                blue: 255,
                alpha: 1,
            },
        },
        css: {
            cmyk: "color(--device-cmyk 0 0 0 0)",
            hsl: "hsl(0 0% 100%)",
            hsv: "color(--hsv 0 0 1)",
            hwb: "hwb(0 100% 0%)",
            oklch: "oklch(1 0 0)",
            rgb: "rgb(255, 255, 255)",
        },
    },
    {
        name: "white (3 char definition)",
        definition: "#fff",
        colorModel: "hex",
        colorSpace: "sRGB",
        colorModels: {
            cmyk: {
                colorModel: "cmyk",
                colorSpace: "CMYK",
                cyan: 0,
                magenta: 0,
                yellow: 0,
                key: 0,
            },
            cssNamedColor: {
                colorModel: "cssNamedColor",
                colorSpace: "sRGB",
                color: "white",
            },
            hex: {
                colorModel: "hex",
                colorSpace: "sRGB",
                hex: makeCssHexColorDefinition("#ffffff"),
            },
            hsl: {
                colorModel: "hsl",
                colorSpace: "sRGB",
                hue: 0,
                saturation: 0,
                luminosity: 100,
                alpha: 1,
            },
            hsv: {
                colorModel: "hsv",
                colorSpace: "sRGB",
                hue: 0,
                saturation: 0,
                value: 100,
                alpha: 1,
            },
            hwb: {
                colorModel: "hwb",
                colorSpace: "sRGB",
                hue: 0,
                whiteness: 100,
                blackness: 0,
                alpha: 1,
            },
            oklch: {
                colorModel: "oklch",
                colorSpace: "OKLAB",
                lightness: 1,
                chroma: 0,
                hue: 0,
                alpha: 1,
            },
            rgb: {
                colorModel: "rgb",
                colorSpace: "sRGB",
                red: 255,
                green: 255,
                blue: 255,
                alpha: 1,
            },
        },
        css: {
            cmyk: "color(--device-cmyk 0 0 0 0)",
            hsl: "hsl(0 0% 100%)",
            hsv: "color(--hsv 0 0 1)",
            hwb: "hwb(0 100% 0%)",
            oklch: "oklch(1 0 0)",
            rgb: "rgb(255, 255, 255)",
        },
    },
    {
        name: "skyblue",
        definition: "hsl(196, 100%, 64%)",
        colorModel: "hsl",
        colorSpace: "sRGB",
        colorModels: {
            cmyk: {
                colorModel: "cmyk",
                colorSpace: "CMYK",
                cyan: 72,
                magenta: 19,
                yellow: 0,
                key: 0,
            },
            cssNamedColor: undefined,
            hex: {
                colorModel: "hex",
                colorSpace: "sRGB",
                hex: makeCssHexColorDefinition("#47ceff"),
            },
            hsl: {
                colorModel: "hsl",
                colorSpace: "sRGB",
                hue: 196,
                saturation: 100,
                luminosity: 64,
                alpha: 1,
            },
            hsv: {
                colorModel: "hsv",
                colorSpace: "sRGB",
                hue: 196,
                saturation: 72,
                value: 100,
                alpha: 1,
            },
            hwb: {
                colorModel: "hwb",
                colorSpace: "sRGB",
                hue: 196,
                whiteness: 28,
                blackness: 0,
                alpha: 1,
            },
            oklch: {
                colorModel: "oklch",
                colorSpace: "OKLAB",
                lightness: 0.799032,
                chroma: 0.132928,
                hue: 226.616339,
                alpha: 1,
            },
            rgb: {
                colorModel: "rgb",
                colorSpace: "sRGB",
                red: 71,
                green: 206,
                blue: 255,
                alpha: 1,
            },
        },
        css: {
            cmyk: "color(--device-cmyk 72 19 0 0)",
            hsl: "hsl(196 100% 64%)",
            hsv: "color(--hsv 196 0.72 1)",
            hwb: "hwb(196 28.000000000000004% 0%)",
            oklch: "oklch(0.799032 0.132928 226.616339)",
            rgb: "rgb(71, 206, 255)",
        },
    },
    {
        name: "palegreen",
        definition: "hwb(100 76% 12%)",
        colorModel: "hwb",
        colorSpace: "sRGB",
        colorModels: {
            cmyk: {
                colorModel: "cmyk",
                colorSpace: "CMYK",
                cyan: 9,
                magenta: 0,
                yellow: 14,
                key: 12,
            },
            cssNamedColor: undefined,
            hex: {
                colorModel: "hex",
                colorSpace: "sRGB",
                hex: makeCssHexColorDefinition("#cce0c2"),
            },
            hsl: {
                colorModel: "hsl",
                colorSpace: "sRGB",
                hue: 100,
                saturation: 33,
                luminosity: 82,
                alpha: 1,
            },
            hsv: {
                colorModel: "hsv",
                colorSpace: "sRGB",
                hue: 100,
                saturation: 14,
                value: 88,
                alpha: 1,
            },
            hwb: {
                colorModel: "hwb",
                colorSpace: "sRGB",
                hue: 100,
                whiteness: 76,
                blackness: 12,
                alpha: 1,
            },
            oklch: {
                colorModel: "oklch",
                colorSpace: "OKLAB",
                lightness: 0.883484,
                chroma: 0.045467,
                hue: 135.090312,
                alpha: 1,
            },
            rgb: {
                colorModel: "rgb",
                colorSpace: "sRGB",
                red: 204,
                green: 224,
                blue: 194,
                alpha: 1,
            },
        },
        css: {
            cmyk: "color(--device-cmyk 9 0 14 12)",
            hsl: "hsl(100 33% 82%)",
            hsv: "color(--hsv 100 0.14 0.88)",
            hwb: "hwb(100 76% 12%)",
            oklch: "oklch(0.883484 0.045467 135.090312)",
            rgb: "rgb(204, 224, 194)",
        },
    },
    {
        name: "navyblue (hsv)",
        definition: "color(--hsv 240 100% 50%)",
        colorModel: "hsv",
        colorSpace: "sRGB",
        colorModels: {
            cmyk: {
                colorModel: "cmyk",
                colorSpace: "CMYK",
                cyan: 100,
                magenta: 100,
                yellow: 0,
                key: 50,
            },
            cssNamedColor: {
                colorModel: "cssNamedColor",
                colorSpace: "sRGB",
                color: "navy",
            },
            hex: {
                colorModel: "hex",
                colorSpace: "sRGB",
                hex: makeCssHexColorDefinition("#000080"),
            },
            hsl: {
                colorModel: "hsl",
                colorSpace: "sRGB",
                hue: 240,
                saturation: 100,
                luminosity: 25,
                alpha: 1,
            },
            hsv: {
                colorModel: "hsv",
                colorSpace: "sRGB",
                hue: 240,
                saturation: 100,
                value: 50,
                alpha: 1,
            },
            hwb: {
                colorModel: "hwb",
                colorSpace: "sRGB",
                hue: 240,
                whiteness: 0,
                blackness: 50,
                alpha: 1,
            },
            oklch: {
                colorModel: "oklch",
                colorSpace: "OKLAB",
                lightness: 0.271165,
                chroma: 0.187899,
                hue: 264.052021,
                alpha: 1,
            },
            rgb: {
                colorModel: "rgb",
                colorSpace: "sRGB",
                red: 0,
                green: 0,
                blue: 128,
                alpha: 1,
            },
        },
        css: {
            cmyk: "color(--device-cmyk 100 100 0 50)",
            hsl: "hsl(240 100% 25%)",
            hsv: "color(--hsv 240 1 0.5)",
            hwb: "hwb(240 0% 50%)",
            oklch: "oklch(0.271165 0.187899 264.052021)",
            rgb: "rgb(0, 0, 128)",
        },
    },
    {
        name: "navyblue (cmyk)",
        definition: "color(--device-cmyk 100 100 0 50)",
        colorModel: "cmyk",
        colorSpace: "CMYK",
        colorModels: {
            cmyk: {
                colorModel: "cmyk",
                colorSpace: "CMYK",
                cyan: 100,
                magenta: 100,
                yellow: 0,
                key: 50,
            },
            cssNamedColor: {
                colorModel: "cssNamedColor",
                colorSpace: "sRGB",
                color: "navy",
            },
            hex: {
                colorModel: "hex",
                colorSpace: "sRGB",
                hex: makeCssHexColorDefinition("#000080"),
            },
            hsl: {
                colorModel: "hsl",
                colorSpace: "sRGB",
                hue: 240,
                saturation: 100,
                luminosity: 25,
                alpha: 1,
            },
            hsv: {
                colorModel: "hsv",
                colorSpace: "sRGB",
                hue: 240,
                saturation: 100,
                value: 50,
                alpha: 1,
            },
            hwb: {
                colorModel: "hwb",
                colorSpace: "sRGB",
                hue: 240,
                whiteness: 0,
                blackness: 50,
                alpha: 1,
            },
            oklch: {
                colorModel: "oklch",
                colorSpace: "OKLAB",
                lightness: 0.270386,
                chroma: 0.187359,
                hue: 264.052021,
                alpha: 1,
            },
            rgb: {
                colorModel: "rgb",
                colorSpace: "sRGB",
                red: 0,
                green: 0,
                blue: 128,
                alpha: 1,
            },
        },
        css: {
            cmyk: "color(--device-cmyk 100 100 0 50)",
            hsl: "hsl(240 100% 25%)",
            hsv: "color(--hsv 240 1 0.5)",
            hwb: "hwb(240 0% 50%)",
            oklch: "oklch(0.270386 0.187359 264.052021)",
            rgb: "rgb(0, 0, 128)",
        },
    },
    {
        name: "navy",
        definition: "navy",
        colorModel: "rgb",
        colorSpace: "sRGB",
        colorModels: {
            cmyk: {
                colorModel: "cmyk",
                colorSpace: "CMYK",
                cyan: 100,
                magenta: 100,
                yellow: 0,
                key: 50,
            },
            cssNamedColor: {
                colorModel: "cssNamedColor",
                colorSpace: "sRGB",
                color: "navy",
            },
            hex: {
                colorModel: "hex",
                colorSpace: "sRGB",
                hex: makeCssHexColorDefinition("#000080"),
            },
            hsl: {
                colorModel: "hsl",
                colorSpace: "sRGB",
                hue: 240,
                saturation: 100,
                luminosity: 25,
                alpha: 1,
            },
            hsv: {
                colorModel: "hsv",
                colorSpace: "sRGB",
                hue: 240,
                saturation: 100,
                value: 50,
                alpha: 1,
            },
            hwb: {
                colorModel: "hwb",
                colorSpace: "sRGB",
                hue: 240,
                whiteness: 0,
                blackness: 50,
                alpha: 1,
            },
            oklch: {
                colorModel: "oklch",
                colorSpace: "OKLAB",
                lightness: 0.271165,
                chroma: 0.187899,
                hue: 264.052021,
                alpha: 1,
            },
            rgb: {
                colorModel: "rgb",
                colorSpace: "sRGB",
                red: 0,
                green: 0,
                blue: 128,
                alpha: 1,
            },
        },
        css: {
            cmyk: "color(--device-cmyk 100 100 0 50)",
            hsl: "hsl(240 100% 25%)",
            hsv: "color(--hsv 240 1 0.5)",
            hwb: "hwb(240 0% 50%)",
            oklch: "oklch(0.271165 0.187899 264.052021)",
            rgb: "rgb(0, 0, 128)",
        },
    },
    {
        name: "vividorange",
        definition: "oklch(70% 0.187 60)",
        colorModel: "oklch",
        colorSpace: "OKLAB",
        colorModels: {
            cmyk: {
                colorModel: "cmyk",
                colorSpace: "CMYK",
                cyan: 0,
                magenta: 49,
                yellow: 100,
                key: 6,
            },
            cssNamedColor: undefined,
            hex: {
                colorModel: "hex",
                colorSpace: "sRGB",
                hex: makeCssHexColorDefinition("#ef7b00"),
            },
            hsl: {
                colorModel: "hsl",
                colorSpace: "sRGB",
                hue: 31,
                saturation: 100,
                luminosity: 47,
                alpha: 1,
            },
            hsv: {
                colorModel: "hsv",
                colorSpace: "sRGB",
                hue: 31,
                saturation: 100,
                value: 94,
                alpha: 1,
            },
            hwb: {
                colorModel: "hwb",
                colorSpace: "sRGB",
                hue: 31,
                whiteness: 0,
                blackness: 6,
                alpha: 1,
            },
            oklch: {
                colorModel: "oklch",
                colorSpace: "OKLAB",
                lightness: 0.70,
                chroma: 0.187,
                hue: 60,
                alpha: 1,
            },
            rgb: {
                colorModel: "rgb",
                colorSpace: "sRGB",
                red: 239,
                green: 123,
                blue: 0,
                alpha: 1,
            },
        },
        css: {
            cmyk: "color(--device-cmyk 0 49 100 6)",
            hsl: "hsl(31 100% 47%)",
            hsv: "color(--hsv 31 1 0.94)",
            hwb: "hwb(31 0% 6%)",
            oklch: "oklch(0.7 0.187 60)",
            rgb: "rgb(239, 123, 0)",
        },
    },
    {
        name: "vividred",
        definition: "oklch(50% 0.37 29deg)",
        colorModel: "oklch",
        colorSpace: "OKLAB",
        colorModels: {
            cmyk: {
                colorModel: "cmyk",
                colorSpace: "CMYK",
                cyan: 0,
                magenta: 100,
                yellow: 100,
                key: 4,
            },
            cssNamedColor: undefined,
            hex: {
                colorModel: "hex",
                colorSpace: "sRGB",
                hex: makeCssHexColorDefinition("#f40000"),
            },
            hsl: {
                colorModel: "hsl",
                colorSpace: "sRGB",
                hue: 0,
                saturation: 100,
                luminosity: 48,
                alpha: 1,
            },
            hsv: {
                colorModel: "hsv",
                colorSpace: "sRGB",
                hue: 0,
                saturation: 100,
                value: 96,
                alpha: 1,
            },
            hwb: {
                colorModel: "hwb",
                colorSpace: "sRGB",
                hue: 0,
                whiteness: 0,
                blackness: 4,
                alpha: 1,
            },
            oklch: {
                colorModel: "oklch",
                colorSpace: "OKLAB",
                lightness: 0.5,
                chroma: 0.37,
                hue: 29,
                alpha: 1,
            },
            rgb: {
                colorModel: "rgb",
                colorSpace: "sRGB",
                red: 244,
                green: 0,
                blue: 0,
                alpha: 1,
            },
        },
        css: {
            cmyk: "color(--device-cmyk 0 100 100 4)",
            hsl: "hsl(0 100% 48%)",
            hsv: "color(--hsv 0 1 0.96)",
            hwb: "hwb(0 0% 4%)",
            oklch: "oklch(0.5 0.37 29)",
            rgb: "rgb(244, 0, 0)",
        },
    },
    {
        name: "mutedgreen",
        definition: "oklch(55% 0.15 141deg)",
        colorModel: "oklch",
        colorSpace: "OKLAB",
        colorModels: {
            cmyk: {
                colorModel: "cmyk",
                colorSpace: "CMYK",
                cyan: 60,
                magenta: 0,
                yellow: 69,
                key: 48,
            },
            cssNamedColor: undefined,
            hex: {
                colorModel: "hex",
                colorSpace: "sRGB",
                hex: makeCssHexColorDefinition("#368629"),
            },
            hsl: {
                colorModel: "hsl",
                colorSpace: "sRGB",
                hue: 112,
                saturation: 53,
                luminosity: 34,
                alpha: 1,
            },
            hsv: {
                colorModel: "hsv",
                colorSpace: "sRGB",
                hue: 112,
                saturation: 69,
                value: 53,
                alpha: 1,
            },
            hwb: {
                colorModel: "hwb",
                colorSpace: "sRGB",
                hue: 112,
                whiteness: 16,
                blackness: 48,
                alpha: 1,
            },
            oklch: {
                colorModel: "oklch",
                colorSpace: "OKLAB",
                lightness: 0.55,
                chroma: 0.15,
                hue: 141,
                alpha: 1,
            },
            rgb: {
                colorModel: "rgb",
                colorSpace: "sRGB",
                red: 54,
                green: 134,
                blue: 41,
                alpha: 1,
            },
        },
        css: {
            cmyk: "color(--device-cmyk 60 0 69 48)",
            hsl: "hsl(112 53% 34%)",
            hsv: "color(--hsv 112 0.69 0.53)",
            hwb: "hwb(112 16% 48%)",
            oklch: "oklch(0.55 0.15 141)",
            rgb: "rgb(54, 134, 41)",
        },
    },
];