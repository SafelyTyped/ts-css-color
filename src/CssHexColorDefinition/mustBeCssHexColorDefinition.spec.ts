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

import { AppError } from "@safelytyped/core-types";
import { mustBeCssHexColorDefinition, type CssHexColorDefinition } from "@safelytyped/css-color";
import { expect } from "chai";
import { describe } from "mocha";
import { INVALID_CSS_HEX_COLOR_DEFINITIONS, INVALID_CSS_HEX_COLOR_DEFINITION_INPUTS, VALID_CSS_HEX_COLOR_DEFINITIONS } from "./_fixtures/CssHexColorDefinitionFixtures";

describe("mustBeCssHexColorDefinition()", () => {
    it("casts the return value to CssHexColorDefinition", () => {
        // ----------------------------------------------------------------
        // explain your test

        // this test proves that this function acts as a type caster for
        // the Typescript compiler

        // ----------------------------------------------------------------
        // setup your test

        const exampleFunc = (input: CssHexColorDefinition) => input;
        const inputValue = "#000000";

        // ----------------------------------------------------------------
        // perform the change

        // this will only compile if isCssHexColorDefinition() is a working
        // type guard
        const res = mustBeCssHexColorDefinition(inputValue);
        exampleFunc(res);

        // ----------------------------------------------------------------
        // test the results

        // just so that the test registers as passing
        expect(true).to.be.true;
    });

    VALID_CSS_HEX_COLOR_DEFINITIONS.forEach((fixture) => {
        it("accepts hex definition " + fixture.inputValue, () => {
            // ----------------------------------------------------------------
            // explain your test

            // this test proves that valid CSS hex definitions are supported

            // ----------------------------------------------------------------
            // setup your test

            const inputValue = fixture.inputValue;
            const expectedValue = fixture.expectedValue;

            // ----------------------------------------------------------------
            // perform the change

            let errorThrown = null;
            let actualValue = null;

            try {
                actualValue = mustBeCssHexColorDefinition(inputValue);
            }
            catch (e) {
                errorThrown = e;
            }

            // ----------------------------------------------------------------
            // test the results

            expect(actualValue).to.eqls(expectedValue);
            expect(errorThrown).to.be.null;
        });
    });

    INVALID_CSS_HEX_COLOR_DEFINITIONS.forEach((inputValue) => {
        it("rejects invalid hex definition " + inputValue, () => {
            // ----------------------------------------------------------------
            // explain your test

            // this test proves that the input string must contain a valid
            // CSS hex definition

            // ----------------------------------------------------------------
            // setup your test

            // ----------------------------------------------------------------
            // perform the change

            let errorThrown = null;
            let actualValue = null;

            try {
                actualValue = mustBeCssHexColorDefinition(inputValue);
            }
            catch (e) {
                errorThrown = e;
            }

            // ----------------------------------------------------------------
            // test the results

            expect(errorThrown).to.be.instanceOf(AppError);
            expect(actualValue).to.be.null;
        });
    });

    INVALID_CSS_HEX_COLOR_DEFINITION_INPUTS.forEach((inputValue) => {
        it("rejects invalid input " + JSON.stringify(inputValue), () => {
            // ----------------------------------------------------------------
            // explain your test

            // this test proves that non-strings are rejected

            // ----------------------------------------------------------------
            // setup your test

            let errorThrown = null;
            let actualValue = null;

            try {
                actualValue = mustBeCssHexColorDefinition(inputValue);
            }
            catch (e) {
                errorThrown = e;
            }

            // ----------------------------------------------------------------
            // test the results

            expect(errorThrown).to.be.instanceOf(AppError);
            expect(actualValue).to.be.null;
        });
    });
});
