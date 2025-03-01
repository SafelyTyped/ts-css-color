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

import { convertHexColorDefinitionToConversionModel, type CssHexColorDefinition } from "@safelytyped/css-color";
import { expect } from "chai";
import { describe } from "mocha";
import { VALID_HEX_CONVERSIONS_FIXTURES } from "./_fixtures/HexConversionData";

describe("convertHexChannelsDataToConversionModel()", () => {
    VALID_HEX_CONVERSIONS_FIXTURES.forEach((fixture) => {
        it("successfully converts for input: " + JSON.stringify(fixture.hex), () => {
            // ----------------------------------------------------------------
            // explain your test

            // this test proves that the converter function returns the
            // expected output for the given input

            // ----------------------------------------------------------------
            // setup your test

            const inputValue = fixture.hex;
            const expectedResult = fixture.conversionModel;

            // ----------------------------------------------------------------
            // perform the change

            const actualResult = convertHexColorDefinitionToConversionModel(inputValue);

            // ----------------------------------------------------------------
            // test the results

            expect(actualResult).to.eql(expectedResult);
        });
    });

    it("throws an error when given an invalid input string", () => {
        // ----------------------------------------------------------------
        // explain your test

        // this test proves that the unit under test throws an error if
        // someone overrides the type-safety and forces an invalid string
        // into it

        // ----------------------------------------------------------------
        // setup your test

        const inputValue = "this is junk" as CssHexColorDefinition;

        let caughtException;

        // ----------------------------------------------------------------
        // perform the change

        try {
            convertHexColorDefinitionToConversionModel(inputValue);
        }
        catch (e) {
            caughtException = e;
        }

        // ----------------------------------------------------------------
        // test the results

        expect(caughtException).is.instanceof(Error);
    });
});