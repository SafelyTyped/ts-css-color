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

import { isHue } from "@safelytyped/css-color";
import { expect } from "chai";
import { describe } from "mocha";
import { makeCssColor } from "../CssColor/makeCssColor";
import { AZURE_COLORS, BLACK_COLORS, BLUE_COLORS, BROWN_COLORS, CHARTREUSE_COLORS, CYAN_COLORS, FUCHSIA_COLORS, GRAY_COLORS, GREEN_COLORS, INDIGO_COLORS, LIME_COLORS, MAGENTA_COLORS, NON_AZURE_COLORS, NON_BLACK_COLORS, NON_BLUE_COLORS, NON_BROWN_COLORS, NON_CHARTREUSE_COLORS, NON_CYAN_COLORS, NON_FUCHSIA_COLORS, NON_GRAY_COLORS, NON_GREEN_COLORS, NON_INDIGO_COLORS, NON_LIME_COLORS, NON_MAGENTA_COLORS, NON_ORANGE_COLORS, NON_PINK_COLORS, NON_PURPLE_COLORS, NON_RED_COLORS, NON_ROSE_COLORS, NON_SPRINGGREEN_COLORS, NON_TEAL_COLORS, NON_VIOLET_COLORS, NON_WHITE_COLORS, NON_YELLOW_COLORS, ORANGE_COLORS, PINK_COLORS, PURPLE_COLORS, RED_COLORS, ROSE_COLORS, SPRINGGREEN_COLORS, TEAL_COLORS, VIOLET_COLORS, WHITE_COLORS, YELLOW_COLORS } from "./_fixtures/colorHues";
import type { Hue } from "./hues";

type TestMatrix = {
    [ key in Hue ]: {
        accept: string[];
        reject: string[];
    };
};

const TEST_MATRIX: TestMatrix = {
    black: {
        accept: BLACK_COLORS,
        reject: NON_BLACK_COLORS,
    },
    white: {
        accept: WHITE_COLORS,
        reject: NON_WHITE_COLORS,
    },
    gray: {
        accept: GRAY_COLORS,
        reject: NON_GRAY_COLORS,
    },
    red: {
        accept: RED_COLORS,
        reject: NON_RED_COLORS,
    },
    brown: {
        accept: BROWN_COLORS,
        reject: NON_BROWN_COLORS,
    },
    orange: {
        accept: ORANGE_COLORS,
        reject: NON_ORANGE_COLORS,
    },
    yellow: {
        accept: YELLOW_COLORS,
        reject: NON_YELLOW_COLORS,
    },
    lime: {
        accept: LIME_COLORS,
        reject: NON_LIME_COLORS,
    },
    chartreuse: {
        accept: CHARTREUSE_COLORS,
        reject: NON_CHARTREUSE_COLORS,
    },
    green: {
        accept: GREEN_COLORS,
        reject: NON_GREEN_COLORS,
    },
    springgreen: {
        accept: SPRINGGREEN_COLORS,
        reject: NON_SPRINGGREEN_COLORS,
    },
    teal: {
        accept: TEAL_COLORS,
        reject: NON_TEAL_COLORS,
    },
    cyan: {
        accept: CYAN_COLORS,
        reject: NON_CYAN_COLORS,
    },
    azure: {
        accept: AZURE_COLORS,
        reject: NON_AZURE_COLORS,
    },
    indigo: {
        accept: INDIGO_COLORS,
        reject: NON_INDIGO_COLORS,
    },
    blue: {
        accept: BLUE_COLORS,
        reject: NON_BLUE_COLORS,
    },
    violet: {
        accept: VIOLET_COLORS,
        reject: NON_VIOLET_COLORS,
    },
    magenta: {
        accept: MAGENTA_COLORS,
        reject: NON_MAGENTA_COLORS,
    },
    fuchsia: {
        accept: FUCHSIA_COLORS,
        reject: NON_FUCHSIA_COLORS,
    },
    purple: {
        accept: PURPLE_COLORS,
        reject: NON_PURPLE_COLORS,
    },
    rose: {
        accept: ROSE_COLORS,
        reject: NON_ROSE_COLORS,
    },
    pink: {
        accept: PINK_COLORS,
        reject: NON_PINK_COLORS,
    },
};

function aOrAn(input: string) {
    if(input.match(/^(a|e|i|o|u)/))  {
        return "an " + input;
    }

    return "a " + input;
}

describe("isHue()", () => {
    for(const key in TEST_MATRIX) {
        // shorthand
        const hue = key as Hue;
        const colorsToAccept = TEST_MATRIX[hue].accept;
        const colorsToReject = TEST_MATRIX[hue].reject;

        describe("colors with " + aOrAn(hue) + " hue", () => {
            colorsToAccept.forEach((inputValue) => {
                it("returns `true` for " + inputValue, () => {
                    // ----------------------------------------------------------------
                    // explain your test

                    // this test proves that isHue() correctly detects red
                    // colors

                    // ----------------------------------------------------------------
                    // setup your test

                    const cssColor = makeCssColor(inputValue);

                    // ----------------------------------------------------------------
                    // perform the change

                    const actualValue = isHue(cssColor, hue);

                    // ----------------------------------------------------------------
                    // test the results

                    expect(actualValue).to.be.true;
                });
            });

            colorsToReject.forEach((inputValue) => {
                it("returns `false` for " + inputValue, () => {
                    // ----------------------------------------------------------------
                    // explain your test

                    // this test proves that isHue() correctly detects red
                    // colors

                    // ----------------------------------------------------------------
                    // setup your test

                    const cssColor = makeCssColor(inputValue);

                    // ----------------------------------------------------------------
                    // perform the change

                    const actualValue = isHue(cssColor, hue);

                    // ----------------------------------------------------------------
                    // test the results

                    expect(actualValue).to.be.false;
                });
            });
        });
    }
});