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

import { expect } from "chai";
import { describe, it } from "mocha";

import { AppError } from "@safelytyped/core-types";
import { makeCssHslColorData, type CssHslColorData } from "@safelytyped/css-color";
import { InvalidMakeCssHslColorParameters, ValidCssHslColorData } from "./_fixtures/CssHslColorData";

describe("makeCssHslColorData()", () => {
    ValidCssHslColorData.forEach((inputValue) => {
        it("returns a CssHslColorData object when given a suitable object " + JSON.stringify(inputValue), () => {
            // ----------------------------------------------------------------
            // explain your test

            // this test proves that, if validation passes, we get back
            // a valid CssHslColorData object

            // ----------------------------------------------------------------
            // setup your test

            const returnTypeCheck = (input: CssHslColorData): CssHslColorData => input;

            // ----------------------------------------------------------------
            // perform the change

            const actualResult = makeCssHslColorData(
                inputValue.name,
                inputValue.definition,
                inputValue.channels,
            );

            // ----------------------------------------------------------------
            // test the results

            // this will not compile if the function returns the wrong type
            returnTypeCheck(actualResult);

            // so that the test can pass
            expect(actualResult).is.not.instanceOf(AppError);
        });
    });

    InvalidMakeCssHslColorParameters.forEach(({inputValue, description}) => {
        it("throws an AppError when given an object where " + description, () => {
            // ----------------------------------------------------------------
            // explain your test

            // this test proves that a malformed / incomplete object will
            // not pass validation

            // ----------------------------------------------------------------
            // setup your test



            // ----------------------------------------------------------------
            // perform the change

            let exceptionThrown = null;
            let actualValue = null;
            try {
                actualValue = makeCssHslColorData(
                    inputValue.name,
                    inputValue.definition,
                    inputValue.channels,
                );
            }
            catch(e) {
                exceptionThrown = e;
            }

            // ----------------------------------------------------------------
            // test the results

            expect(actualValue).is.null;
            expect(exceptionThrown).is.instanceOf(AppError);
        });
    });
});