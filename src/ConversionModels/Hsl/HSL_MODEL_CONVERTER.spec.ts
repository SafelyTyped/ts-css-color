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

import { HSL_MODEL_CONVERTER } from "@safelytyped/css-color";
import { expect } from "chai";
import { describe, it } from "mocha";
import { CSS_HSL_COLOR_FIXTURES } from "../../_fixtures/CSS_HSL_COLOR_FIXTURES";

describe("HSL_MODEL_CONVERTER", () => {
    describe(".parse()", () => {
        CSS_HSL_COLOR_FIXTURES.forEach((fixture) => {
            it(`[fixture ${fixture.name}] converts valid CSS colors into the expected color model`, () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that .parse() works as expected

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = fixture.definition;
                const expectedResult = HSL_MODEL_CONVERTER.toConversionModel(
                    fixture.colorModels.hsl
                );

                // ----------------------------------------------------------------
                // perform the change

                const actualResult = HSL_MODEL_CONVERTER.parse(inputValue);

                // ----------------------------------------------------------------
                // test the results

                expect(actualResult).to.eqls(expectedResult);
            });
        });
    });
});