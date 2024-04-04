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

import { CSS_EXTENDED_COLORS_TO_HEX } from "@safelytyped/css-color";

export const GRAY_COLORS = [
    CSS_EXTENDED_COLORS_TO_HEX.gray,
    CSS_EXTENDED_COLORS_TO_HEX.dimgray,
    CSS_EXTENDED_COLORS_TO_HEX.darkgray,
];

export const BLACK_COLORS = [
    CSS_EXTENDED_COLORS_TO_HEX.black,
    "#222",
];

export const WHITE_COLORS = [
    CSS_EXTENDED_COLORS_TO_HEX.white,
];

export const RED_COLORS = [
    CSS_EXTENDED_COLORS_TO_HEX.red,
];

export const PINK_COLORS = [
    CSS_EXTENDED_COLORS_TO_HEX.pink,
];

export const ORANGE_COLORS = [
    CSS_EXTENDED_COLORS_TO_HEX.orange,
];

export const VIOLET_COLORS = [
    CSS_EXTENDED_COLORS_TO_HEX.rebeccapurple,
];

export const PURPLE_COLORS = [
    CSS_EXTENDED_COLORS_TO_HEX.purple,
];

export const YELLOW_COLORS = [
    CSS_EXTENDED_COLORS_TO_HEX.yellow,
];

export const GREEN_COLORS = [
    CSS_EXTENDED_COLORS_TO_HEX.green,
];

export const CYAN_COLORS = [
    CSS_EXTENDED_COLORS_TO_HEX.cyan,
];

export const BLUE_COLORS = [
    CSS_EXTENDED_COLORS_TO_HEX.blue,
];

export const MAGENTA_COLORS = [
    CSS_EXTENDED_COLORS_TO_HEX.magenta,
];

export const NON_GRAY_COLORS = [
    CSS_EXTENDED_COLORS_TO_HEX.rebeccapurple,
];

export const NON_BLACK_COLORS = [
    CSS_EXTENDED_COLORS_TO_HEX.white,
    CSS_EXTENDED_COLORS_TO_HEX.red,
    CSS_EXTENDED_COLORS_TO_HEX.green,
    CSS_EXTENDED_COLORS_TO_HEX.blue,
];

export const NON_BLUE_COLORS = [
    ...YELLOW_COLORS,
    ...ORANGE_COLORS,
];

export const NON_CYAN_COLORS = [
    ...PURPLE_COLORS,
    ...YELLOW_COLORS,
];

export const NON_GREEN_COLORS = [
    ...PINK_COLORS,
    ...MAGENTA_COLORS,
];

export const NON_MAGENTA_COLORS = [
    ...ORANGE_COLORS,
    ...GREEN_COLORS,
];

export const NON_ORANGE_COLORS = [
    ...MAGENTA_COLORS,
    ...BLUE_COLORS,
];

export const NON_PINK_COLORS = [
    ...GREEN_COLORS,
    ...CYAN_COLORS,
];

export const NON_PURPLE_COLORS = [
    ...YELLOW_COLORS,
    ...GREEN_COLORS,
    ...ORANGE_COLORS,
];

export const NON_RED_COLORS = [
    ...GREEN_COLORS,
    ...BLUE_COLORS,
];

export const NON_VIOLET_COLORS = [
    ...YELLOW_COLORS,
    ...ORANGE_COLORS,
    ...CYAN_COLORS
];

export const NON_YELLOW_COLORS = [
    ...PURPLE_COLORS,
    ...MAGENTA_COLORS,
];

export const NON_WHITE_COLORS = [
    ...BLACK_COLORS,
];