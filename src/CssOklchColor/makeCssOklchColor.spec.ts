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

import { makeCssColor, makeCssOklchColor } from "@safelytyped/css-color";
import { expect } from "chai";
import { describe } from "mocha";
import { CSS_COLOR_FIXTURES } from "../_fixtures/CSS_COLOR_FIXTURES";
import { CSS_OKLCH_COLOR_FIXTURES } from "../_fixtures/CSS_OKLCH_COLOR_FIXTURES";

const OTHER_COLOR_FIXTURES = CSS_COLOR_FIXTURES.filter((fixture) => !CSS_OKLCH_COLOR_FIXTURES.includes(fixture));

describe("makeCssOklchColor()", () => {
    describe("(string input)", () => {
        CSS_OKLCH_COLOR_FIXTURES.forEach((fixture) => {
            it("accepts " + fixture.name + ": " + fixture.definition, () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that this smart constructor accepts its
                // native input format

                // ----------------------------------------------------------------
                // setup your test

                // ----------------------------------------------------------------
                // perform the change

                const actualValue = makeCssOklchColor(fixture.definition);

                // ----------------------------------------------------------------
                // test the results

                expect(actualValue.colorModel).to.eql("oklch");
            });
        });

        OTHER_COLOR_FIXTURES.forEach((fixture) => {
            it("accepts " + fixture.name + ": " + fixture.definition, () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that this smart constructor accepts all other
                // supported input formats

                // ----------------------------------------------------------------
                // setup your test

                // ----------------------------------------------------------------
                // perform the change

                const actualValue = makeCssOklchColor(fixture.definition);

                // ----------------------------------------------------------------
                // test the results

                expect(actualValue.colorModel).to.eql("oklch");
            });
        });
    });

    describe("(CssColor input)", () => {
        OTHER_COLOR_FIXTURES.forEach((fixture) => {
            // we need this for what we show to the user
            const inputValue = makeCssColor(fixture.definition);

            it("accepts " + fixture.name + " (" + inputValue.colorModel + ")", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that this smart constructor accepts all other
                // supported input formats

                // ----------------------------------------------------------------
                // setup your test



                // ----------------------------------------------------------------
                // perform the change

                const actualValue = makeCssOklchColor(inputValue);

                // ----------------------------------------------------------------
                // test the results

                expect(actualValue.colorModel).to.eql("oklch");
            });
        });
    });

    it("returns the same object if input is a CssOklchColor", () => {
        // ----------------------------------------------------------------
        // explain your test

        //

        // ----------------------------------------------------------------
        // setup your test

        const expectedValue = makeCssOklchColor("red");

        // ----------------------------------------------------------------
        // perform the change

        const actualValue = makeCssOklchColor(expectedValue);

        // ----------------------------------------------------------------
        // test the results

        expect(actualValue).to.equal(expectedValue);
    });
});