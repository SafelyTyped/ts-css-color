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

type InvalidCssColorDefinitions = {
    name: string;
    definition: string;
}

export const INVALID_CSS_COLOR_DEFINITIONS: InvalidCssColorDefinitions[] = [
    {
        name: "empty definition",
        definition: "",
    },
    {
        name: "CMYK no channels",
        definition: "color(--device-cmyk)",
    },
    {
        name: "CMYK only one channel",
        definition: "color(--device-cmyk 100)",
    },
    {
        name: "CMYK only two channels",
        definition: "color(--device-cmyk 100 100)",
    },
    {
        name: "CMYK only three channels",
        definition: "color(--device-cmyk 100 100 100)",
    },
    {
        name: "CMYK cyan channel too small",
        definition: "color(--device-cmyk -1 100 100 100)",
    },
    {
        name: "CMYK cyan channel too large",
        definition: "color(--device-cmyk 101 100 100 100)",
    },
    {
        name: "CMYK cyan channel not a number",
        definition: "color(--device-cmyk one 100 100 100)",
    },
    {
        name: "CMYK magenta channel too small",
        definition: "color(--device-cmyk 100 -1 100 100)",
    },
    {
        name: "CMYK magenta channel too large",
        definition: "color(--device-cmyk 100 101 100 100)",
    },
    {
        name: "CMYK magenta channel not a number",
        definition: "color(--device-cmyk 100 one 100 100)",
    },
    {
        name: "CMYK yellow channel too small",
        definition: "color(--device-cmyk 100 100 -1 100)",
    },
    {
        name: "CMYK yellow channel too large",
        definition: "color(--device-cmyk 100 100 101 100)",
    },
    {
        name: "CMYK yellow channel not a number",
        definition: "color(--device-cmyk 100 100 one 100)",
    },
    {
        name: "CMYK key channel too small",
        definition: "color(--device-cmyk 100 100 100 -1)",
    },
    {
        name: "CMYK key channel too large",
        definition: "color(--device-cmyk 100 100 100 101)",
    },
    {
        name: "CMYK key channel not a number",
        definition: "color(--device-cmyk 100 100 100 one)",
    },

    {
        name: "HEX no channel data",
        definition: "#",
    },
    {
        name: "HEX only one channel",
        definition: "#FF",
    },
    {
        name: "HEX only two channels",
        definition: "#FFFF",
    },
    {
        name: "HEX four channels",
        definition: "#FFFFFFFF",
    },
    {
        name: "HEX red channel contains invalid hex",
        definition: "#G0FFFF",
    },
    {
        name: "HEX green channel contains invalid hex",
        definition: "#FFG0FF",
    },
    {
        name: "HEX blue channel contains invalid hex",
        definition: "#FFFFG0",
    },

    {
        name: "HSL only one channel",
        definition: "hsl(100)",
    },
    {
        name: "HSL only two channels",
        definition: "hsl(100 100)",
    },
    {
        name: "HSL five channels",
        definition: "hsl(100 100 100 100 100)",
    },
    {
        name: "HSL hue channel too small",
        definition: "hsl(-1 100 100)",
    },
    {
        name: "HSL hue channel too large",
        definition: "hsl(361 100 100)",
    },
    {
        name: "HSL saturation channel too small",
        definition: "hsl(100 -1 100)",
    },
    {
        name: "HSL saturation channel too large",
        definition: "hsl(100 101 100)",
    },
    {
        name: "HSL luminosity channel too small",
        definition: "hsl(100 100 -1)",
    },
    {
        name: "HSL luminosity channel too large",
        definition: "hsl(100 100 101)",
    },
    // culori's parser clamps the alpha channel values so that they are
    // always in-range
    //
    // if we ever switch parsers, we'll need to uncomment these tests!
    // {
    //     name: "HSL alpha channel too small",
    //     definition: "hsl(100 100 100 / -1)",
    // },
    // {
    //     name: "HSL alpha channel too large",
    //     definition: "hsl(100 100 100 / 1.1)",
    // },

    {
        name: "HSV only one channel",
        definition: "color(--hsv 100)",
    },
    {
        name: "HSV only two channels",
        definition: "color(--hsv 100 100)",
    },
    {
        name: "HSV five channels",
        definition: "color(--hsv 100 100 100 1 100)",
    },
    {
        name: "HSV hue channel too small",
        definition: "color(--hsv -1 100 100)",
    },
    {
        name: "HSV hue channel too large",
        definition: "color(--hsv 361 100 100)",
    },
    {
        name: "HSV saturation channel too small",
        definition: "color(--hsv 100 -1 100)",
    },
    {
        name: "HSV saturation channel too large",
        definition: "color(--hsv 100 101 100)",
    },
    {
        name: "HSV value channel too small",
        definition: "color(--hsv 100 100 -1)",
    },
    {
        name: "HSV value channel too large",
        definition: "color(--hsv 100 100 101)",
    },
    {
        name: "HSV alpha channel too small",
        definition: "color(--hsv 100 100 100 / -1)",
    },
    {
        name: "HSV alpha channel too large",
        definition: "color(--hsv 100 100 100 / 1.1)",
    },


    {
        name: "HWB only one channel",
        definition: "hwb(100)",
    },
    {
        name: "HWB only two channels",
        definition: "hwb(100 100)",
    },
    {
        name: "HWB five channels",
        definition: "hwb(100 100 100 1 100)",
    },
    {
        name: "HWB hue channel too small",
        definition: "hwb(-1 100 100)",
    },
    {
        name: "HWB hue channel too large",
        definition: "hwb(361 100 100)",
    },
    {
        name: "HWB whiteness channel too small",
        definition: "hwb(100 -1 100)",
    },
    {
        name: "HWB whiteness channel too large",
        definition: "hwb(100 101 100)",
    },
    {
        name: "HWB blackness channel too small",
        definition: "hwb(100 100 -1)",
    },
    {
        name: "HWB blackness channel too large",
        definition: "hwb(100 100 101)",
    },
    // culori's parser clamps the alpha channel values so that they are
    // always in-range
    //
    // if we ever switch parsers, we'll need to uncomment these tests!
    // {
    //     name: "HWB alpha channel too small",
    //     definition: "hwb(100 100 100 / -1)",
    // },
    // {
    //     name: "HWB alpha channel too large",
    //     definition: "hwb(100 100 100 / 1.1)",
    // },

    {
        name: "CSS NAMED COLOR not a named color",
        definition: "not-a-named-color",
    },

    {
        name: "OKLCH only one channel",
        definition: "oklch(1)",
    },
    {
        name: "OKLCH only two channels",
        definition: "oklch(1 1)",
    },
    {
        name: "OKLCH five channels",
        definition: "oklch(1 1 1 1 1)",
    },
    // culori's parser is clamping (some of) these values, so that
    // invalid values never reach our validation code
    //
    // if we switch parsers, we'll need to uncomment these tests and
    // try them again!
    // {
    //     name: "OKLCH lightness channel too small",
    //     definition: "oklch(-0.1 0.1 100)",
    // },
    // {
    //     name: "OKLCH lightness channel too large",
    //     definition: "oklch(1.1 0.1 100)",
    // },
    // {
    //     name: "OKLCH chroma channel too small",
    //     definition: "oklch(0.1 -0.1 100)",
    // },
    {
        name: "OKLCH chroma channel too large",
        definition: "oklch(0.1 0.5 100)",
    },
    {
        name: "OKLCH hue channel too small",
        definition: "oklch(0.1 0.1 -1)",
    },
    {
        name: "OKLCH hue channel too large",
        definition: "oklch(0.1 0.1 361)",
    },
    // {
    //     name: "OKLCH alpha channel too small",
    //     definition: "oklch(0.1 0.1 100 / -1)",
    // },
    // {
    //     name: "OKLCH alpha channel too large",
    //     definition: "oklch(0.1 0.1 100 / 1.1)",
    // },

    {
        name: "RGB only one channel",
        definition: "rgb(100)",
    },
    {
        name: "RGB only two channels",
        definition: "rgb(100 100)",
    },
    {
        name: "RGB five channels",
        definition: "rgb(100 100 100 100 100)",
    },
    {
        name: "RGB red channel too small",
        definition: "rgb(-1 100 100)",
    },
    {
        name: "RGB red channel too large",
        definition: "rgb(256 100 100)",
    },
    {
        name: "RGB green channel too small",
        definition: "rgb(100 -1 100)",
    },
    {
        name: "RGB green channel too large",
        definition: "rgb(100 256 100)",
    },
    {
        name: "RGB blue channel too small",
        definition: "rgb(100 100 -1)",
    },
    {
        name: "RGB blue channel too large",
        definition: "rgb(100 100 256)",
    },
    // culori's parser clamps the alpha channel values so that they are
    // always in-range
    //
    // if we ever switch parsers, we'll need to uncomment these tests
    // and try them again
    // {
    //     name: "RGB alpha channel too small",
    //     definition: "rgb(100 100 100 / -1)",
    // },
    // {
    //     name: "RGB alpha channel too large",
    //     definition: "rgb(100 100 100 / 1.1)",
    // },

];