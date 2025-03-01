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

import "../test-init.test";

import { isMonochrome, makeCssColor } from "@safelytyped/css-color";
import { expect } from "chai";
import { describe } from "mocha";
import { MONOCHROME_COLORS, NON_MONOCHROME_COLORS } from "./_fixtures/colorHues";

describe("isMonochrome()", () => {
    it("returns `true` for black", () => {
        // ----------------------------------------------------------------
        // explain your test

        // this test proves that `black` is treated as a monochrome color

        // ----------------------------------------------------------------
        // setup your test

        const input = makeCssColor("black");

        // ----------------------------------------------------------------
        // perform the change

        const actualValue = isMonochrome(input);

        // ----------------------------------------------------------------
        // test the results

        expect(actualValue).to.be.true;
    });

    it("returns `true` for white", () => {
        // ----------------------------------------------------------------
        // explain your test

        // this test proves that `white` is treated as a monochrome color

        // ----------------------------------------------------------------
        // setup your test

        const input = makeCssColor("white");

        // ----------------------------------------------------------------
        // perform the change

        const actualValue = isMonochrome(input);

        // ----------------------------------------------------------------
        // test the results

        expect(actualValue).to.be.true;
    });

    describe("returns `true` for colors that are perfectly gray", () => {
        MONOCHROME_COLORS.forEach((inputValue) => {
            it("returns `true` for " + inputValue, () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that colors with equal red, green and blue
                // components are treated as monochrome

                // ----------------------------------------------------------------
                // setup your test

                const color = makeCssColor(inputValue);

                // ----------------------------------------------------------------
                // perform the change

                const actualValue = isMonochrome(color);

                // ----------------------------------------------------------------
                // test the results

                expect(actualValue).to.be.true;
            });
        });
    });

    describe("returns `false` for colors that are not perfectly gray", () => {
        NON_MONOCHROME_COLORS.forEach((inputValue) => {
            it("returns `false` for " + inputValue, () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that colors with uneqal equal red, green
                // or blue components are treated as non-monochrome

                // ----------------------------------------------------------------
                // setup your test

                const color = makeCssColor(inputValue);

                // ----------------------------------------------------------------
                // perform the change

                const actualValue = isMonochrome(color);

                // ----------------------------------------------------------------
                // test the results

                expect(actualValue).to.be.false;
            });
        });
    });
});