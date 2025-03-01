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

import { expect } from "chai";
import { describe } from "mocha";
import { CssHwbColor } from "./CssHwbColor";
import { makeCssHwbColor } from "./makeCssHwbColor";

const VALID_COLOR_CSS = [
    {
        description: "hex CSS definition",
        inputValue: "#fff",
    },
    {
        description: "CSS named color",
        inputValue: "red",
    },
    {
        description: "hsl() CSS definition",
        inputValue: "hsl(359 100 100)",
    },
    {
        description: "hwb() CSS definition",
        inputValue: "hwb(359 100 100)"
    },
    {
        description: "oklch() CSS definition",
        inputValue: "oklch(0.5032 0 0)"
    },
    {
        description: "rgb() CSS definition",
        inputValue: "rgb(255, 255, 255)"
    },
];

describe("makeCssHwbColor()", () => {
    VALID_COLOR_CSS.forEach((fixture) => {
        it("accepts " + fixture.description + ": " + fixture.inputValue, () => {
            // ----------------------------------------------------------------
            // explain your test

            // this test proves that makeCssHwbColor() accepts a range of
            // input formats

            // ----------------------------------------------------------------
            // setup your test

            // ----------------------------------------------------------------
            // perform the change

            const actualValue = makeCssHwbColor(fixture.inputValue);

            // ----------------------------------------------------------------
            // test the results

            expect(actualValue).to.be.instanceof(CssHwbColor);
        });
    });
})