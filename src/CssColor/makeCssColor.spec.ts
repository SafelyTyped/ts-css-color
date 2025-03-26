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

import { AppError, isObject } from "@safelytyped/core-types";
import { makeCssColor } from "@safelytyped/css-color";
import { expect } from "chai";
import { describe, it } from "mocha";
import { CSS_COLOR_FIXTURES } from "../_fixtures/CSS_COLOR_FIXTURES";
import { INVALID_CSS_COLOR_DEFINITIONS } from "../_fixtures/INVALID_CSS_COLOR_DEFINITIONS";

describe('makeCssColor()', () => {
    CSS_COLOR_FIXTURES.forEach((fixture) => {
        it(`[fixture ${fixture.name}] returns a CssColor object when given acceptable inputs`, () => {
            // ----------------------------------------------------------------
            // explain your test

            // this test proves that an object that contains the right
            // properties will pass validation

            // ----------------------------------------------------------------
            // setup your test

            // ----------------------------------------------------------------
            // perform the change

            const actualResult = makeCssColor(
                fixture.definition,
                { colorName: fixture.name }
            );

            // ----------------------------------------------------------------
            // test the results

            expect(isObject(actualResult)).to.be.true;
        });

        it(`[fixture ${fixture.name}] returns a CssColor object with the given name`, () => {
            // ----------------------------------------------------------------
            // explain your test

            // this test proves that the returned object has the definition
            // that we're expecting

            // ----------------------------------------------------------------
            // setup your test


            // ----------------------------------------------------------------
            // perform the change

            const actualResult = makeCssColor(
                fixture.definition,
                { colorName: fixture.name }
            );

            // ----------------------------------------------------------------
            // test the results

            expect(actualResult.name).eqls(fixture.name);
        });

        it(`[fixture ${fixture.name}] returns a CssColor object with the given definition`, () => {
            // ----------------------------------------------------------------
            // explain your test

            // this test proves that the returned object has the definition
            // that we're expecting

            // ----------------------------------------------------------------
            // setup your test


            // ----------------------------------------------------------------
            // perform the change

            const actualResult = makeCssColor(
                fixture.definition,
                { colorName: fixture.name }
            );

            // ----------------------------------------------------------------
            // test the results

            expect(actualResult.definition).eqls(fixture.definition);
        });
    });

    INVALID_CSS_COLOR_DEFINITIONS.forEach((fixture) => {
        it(`[fixture ${fixture.name}] throws an AppError when given invalid CSS definition "${fixture.definition}"`, () => {
            // ----------------------------------------------------------------
            // explain your test

            // this test proves that an invalid CSS definition will trigger
            // an Error

            // ----------------------------------------------------------------
            // setup your test

            // ----------------------------------------------------------------
            // perform the change

            let exceptionThrown;

            try {
                makeCssColor(fixture.definition);
            }
            catch(e) {
                exceptionThrown = e;
            }

            // ----------------------------------------------------------------
            // test the results

            expect(exceptionThrown).is.instanceOf(AppError);
        });
    });
});