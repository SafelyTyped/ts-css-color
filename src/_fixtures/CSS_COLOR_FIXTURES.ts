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
    css: ColorModelsSet<string|undefined>;
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
                colorSpace: "OKLCH",
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
            cmyk: "",
            cssNamedColor: "",
            hex: "",
            hsl: "",
            hsv: "",
            hwb: "",
            oklch: "",
            rgb: "",
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
                colorSpace: "OKLCH",
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
            cmyk: "",
            cssNamedColor: "",
            hex: "",
            hsl: "",
            hsv: "",
            hwb: "",
            oklch: "",
            rgb: "",
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
                colorSpace: "OKLCH",
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
            cmyk: "",
            cssNamedColor: "",
            hex: "",
            hsl: "",
            hsv: "",
            hwb: "",
            oklch: "",
            rgb: "",
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
                colorSpace: "OKLCH",
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
            cmyk: "",
            cssNamedColor: "",
            hex: "",
            hsl: "",
            hsv: "",
            hwb: "",
            oklch: "",
            rgb: "",
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
                colorSpace: "OKLCH",
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
            cmyk: "",
            cssNamedColor: "",
            hex: "",
            hsl: "",
            hsv: "",
            hwb: "",
            oklch: "",
            rgb: "",
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
                colorSpace: "OKLCH",
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
            cmyk: "",
            cssNamedColor: "",
            hex: "",
            hsl: "",
            hsv: "",
            hwb: "",
            oklch: "",
            rgb: "",
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
                colorSpace: "OKLCH",
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
            cmyk: "",
            cssNamedColor: "",
            hex: "",
            hsl: "",
            hsv: "",
            hwb: "",
            oklch: "",
            rgb: "",
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
                colorSpace: "OKLCH",
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
            cmyk: "",
            cssNamedColor: "",
            hex: "",
            hsl: "",
            hsv: "",
            hwb: "",
            oklch: "",
            rgb: "",
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
                colorSpace: "OKLCH",
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
            cmyk: "",
            cssNamedColor: "",
            hex: "",
            hsl: "",
            hsv: "",
            hwb: "",
            oklch: "",
            rgb: "",
        },
    },
    {
        name: "navyblue",
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
                colorSpace: "OKLCH",
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
            cmyk: "",
            cssNamedColor: "",
            hex: "",
            hsl: "",
            hsv: "",
            hwb: "",
            oklch: "",
            rgb: "",
        },
    },
    {
        name: "vividorange",
        definition: "oklch(70% 0.187 60)",
        colorModel: "oklch",
        colorSpace: "OKLCH",
        colorModels: {
            cmyk: {
                colorModel: "cmyk",
                colorSpace: "CMYK",
                cyan: 0,
                magenta: 49,
                yellow: 121,
                key: 6,
            },
            cssNamedColor: undefined,
            hex: {
                colorModel: "hex",
                colorSpace: "sRGB",
                hex: makeCssHexColorDefinition("#000080"),
            },
            hsl: {
                colorModel: "hsl",
                colorSpace: "sRGB",
                hue: 36,
                saturation: 152,
                luminosity: 37,
                alpha: 1,
            },
            hsv: {
                colorModel: "hsv",
                colorSpace: "sRGB",
                hue: 36,
                saturation: 121,
                value: 94,
                alpha: 1,
            },
            hwb: {
                colorModel: "hwb",
                colorSpace: "sRGB",
                hue: 36,
                whiteness: 19,
                blackness: 6,
                alpha: 1,
            },
            oklch: {
                colorModel: "oklch",
                colorSpace: "OKLCH",
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
                blue: 49,
                alpha: 1,
            },
        },
        css: {
            cmyk: "",
            cssNamedColor: "",
            hex: "",
            hsl: "",
            hsv: "",
            hwb: "",
            oklch: "",
            rgb: "",
        },
    },
    {
        name: "vividred",
        definition: "oklch(50% 0.37 29deg)",
        colorModel: "oklch",
        colorSpace: "OKLCH",
        colorModels: {
            cmyk: {
                colorModel: "cmyk",
                colorSpace: "CMYK",
                cyan: 0,
                magenta: 142,
                yellow: 124,
                key: 4,
            },
            cssNamedColor: undefined,
            hex: {
                colorModel: "hex",
                colorSpace: "sRGB",
                hex: makeCssHexColorDefinition("#000080"),
            },
            hsl: {
                colorModel: "hsl",
                colorSpace: "sRGB",
                hue: 352,
                saturation: 247,
                luminosity: 28,
                alpha: 1,
            },
            hsv: {
                colorModel: "hsv",
                colorSpace: "sRGB",
                hue: 352,
                saturation: 142,
                value: 96,
                alpha: 1,
            },
            hwb: {
                colorModel: "hwb",
                colorSpace: "sRGB",
                hue: 352,
                whiteness: 40,
                blackness: 4,
                alpha: 1,
            },
            oklch: {
                colorModel: "oklch",
                colorSpace: "OKLCH",
                lightness: 0.5,
                chroma: 0.37,
                hue: 29,
                alpha: 1,
            },
            rgb: {
                colorModel: "rgb",
                colorSpace: "sRGB",
                red: 244,
                green: 103,
                blue: 59,
                alpha: 1,
            },
        },
        css: {
            cmyk: "",
            cssNamedColor: "",
            hex: "",
            hsl: "",
            hsv: "",
            hwb: "",
            oklch: "",
            rgb: "",
        },
    },
    {
        name: "mutedgreen",
        definition: "oklch(55% 0.15 141deg)",
        colorModel: "oklch",
        colorSpace: "OKLCH",
        colorModels: {
            cmyk: {
                colorModel: "cmyk",
                colorSpace: "CMYK",
                cyan: 59,
                magenta: 0,
                yellow: 69,
                key: 48,
            },
            cssNamedColor: undefined,
            hex: {
                colorModel: "hex",
                colorSpace: "sRGB",
                hex: makeCssHexColorDefinition("#000080"),
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
                value: 52,
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
                colorSpace: "OKLCH",
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
            cmyk: "",
            cssNamedColor: "",
            hex: "",
            hsl: "",
            hsv: "",
            hwb: "",
            oklch: "",
            rgb: "",
        },
    },
];