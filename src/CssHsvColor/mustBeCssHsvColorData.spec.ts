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

import { AppError } from "@safelytyped/core-types";
import { mustBeCssHsvColorData } from "@safelytyped/css-color";
import { expect } from "chai";
import { describe, it } from "mocha";
import { InvalidCssColorDataInputs } from "../CssColor/_fixtures/CssColorDataFixtures";
import { InvalidCssHsvColorDataObjects, ValidCssHsvColorData } from "./_fixtures/CssHsvColorData";

describe("mustBeCssHsvColorData()", () => {
    ValidCssHsvColorData.forEach((inputValue) => {
        it("returns `input` when given a suitable object " + JSON.stringify(inputValue), () => {
            // ----------------------------------------------------------------
            // explain your test

            // this test proves that an object that contains the right
            // properties will pass validation

            // ----------------------------------------------------------------
            // setup your test

            // ----------------------------------------------------------------
            // perform the change

            const actualResult = mustBeCssHsvColorData(inputValue);

            // ----------------------------------------------------------------
            // test the results

            expect(actualResult).to.eqls(inputValue);
        });
    });

    InvalidCssHsvColorDataObjects.forEach(({inputValue, description}) => {
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
                actualValue = mustBeCssHsvColorData(inputValue);
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

    InvalidCssColorDataInputs.forEach((inputValue) => {
        it("throws an AppError when given " + JSON.stringify(inputValue), () => {
            // ----------------------------------------------------------------
            // explain your test

            // this test proves that primitives et al will not pass validation

            // ----------------------------------------------------------------
            // setup your test



            // ----------------------------------------------------------------
            // perform the change

            let exceptionThrown = null;
            let actualValue = null;
            try {
                actualValue = mustBeCssHsvColorData(inputValue);
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