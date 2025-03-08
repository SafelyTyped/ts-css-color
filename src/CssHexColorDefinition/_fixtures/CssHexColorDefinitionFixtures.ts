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

import { HashMap } from "@safelytyped/core-types";
import { CSS_EXTENDED_COLORS_TO_HEX } from "../../CssExtendedColors/CssExtendedColors.const";
import { DARK_COLORS, LIGHT_COLORS, MIDTONE_COLORS } from "../../inspectors/_fixtures/colorShades";
import type { CssHexColorDefinition } from "../CssHexColorDefinition.type";
import { normaliseCssHexColorDefinition } from "../normaliseCssHexColorDefinition";

export const VALID_CSS_HEX_COLOR_DEFINITIONS: {inputValue: CssHexColorDefinition, expectedValue: string}[] = [];

const validHexColors = [    // we use Set() to dedupe the color definitions
    ...new Set([
        ...HashMap.values(CSS_EXTENDED_COLORS_TO_HEX),
        ...LIGHT_COLORS,
        ...DARK_COLORS,
        ...MIDTONE_COLORS

        // add additional values here
    ]),
];
validHexColors.forEach((inputValue) => {
    VALID_CSS_HEX_COLOR_DEFINITIONS.push({
        inputValue,
        expectedValue: normaliseCssHexColorDefinition(inputValue as CssHexColorDefinition),
    })
});

export const INVALID_CSS_HEX_COLOR_DEFINITIONS = [
    "000000",
    "",
    "  ",
    "   ",
];

export const INVALID_CSS_HEX_COLOR_DEFINITION_INPUTS = [
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
];