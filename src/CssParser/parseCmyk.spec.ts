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
import { CSS_CMYK_COLOR_FIXTURES, NON_CMKY_COLOR_FIXTURES } from "../_fixtures/CSS_CMYK_COLOR_FIXTURES";
import { parseCmyk } from "./parseCmyk";

describe("parseCmyk()", () => {
    CSS_CMYK_COLOR_FIXTURES.forEach((fixture) => {
        it(`[fixture ${fixture.name}] parses the CMYK definition`, () => {
            // ----------------------------------------------------------------
            // explain your test

            // this tests proves that this parser accepts CMYK color definitions

            // ----------------------------------------------------------------
            // setup your test

            const inputValue = fixture.definition;
            const expectedValue = fixture.colorModels.cmyk;

            // ----------------------------------------------------------------
            // perform the change

            const actualValue = parseCmyk(inputValue);

            // ----------------------------------------------------------------
            // test the results

            expect(actualValue).to.eqls(expectedValue);
        });
    });

    NON_CMKY_COLOR_FIXTURES.forEach((fixture) => {
        it(`[fixture ${fixture.name}] throws an Error`, () => {
            // ----------------------------------------------------------------
            // explain your test

            // this test proves that this parser rejects non-CMYK color
            // definitions

            // ----------------------------------------------------------------
            // setup your test

            const inputValue = fixture.definition;
            let actualError;

            // ----------------------------------------------------------------
            // perform the change

            try {
                parseCmyk(inputValue);
            }
            catch (e) {
                actualError = e;
            }

            // ----------------------------------------------------------------
            // test the results

            expect(actualError).to.be.instanceOf(Error);
        });
    });
});