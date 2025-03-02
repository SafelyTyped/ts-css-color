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

import { isCssHexColorData } from "@safelytyped/css-color";
import { InvalidCssColorDataInputs } from "../CssColor/_fixtures/CssColorDataFixtures";
import { InvalidCssHexColorDataObjects, ValidCssHexColorData } from "./_fixtures/CssHexColorDataFixtures";

describe("isCssHexColorData()", () => {
    ValidCssHexColorData.forEach((inputValue) => {
        it("returns true when given a suitable object " + JSON.stringify(inputValue), () => {
            // ----------------------------------------------------------------
            // explain your test

            // this test proves that an object that contains the right
            // properties will pass validation

            // ----------------------------------------------------------------
            // setup your test

            // ----------------------------------------------------------------
            // perform the change

            const actualResult = isCssHexColorData(inputValue);

            // ----------------------------------------------------------------
            // test the results

            expect(actualResult).to.be.true;
        });
    });

    InvalidCssHexColorDataObjects.forEach(({inputValue, description}) => {
        it("returns false when given an object where " + description, () => {
            // ----------------------------------------------------------------
            // explain your test

            // this test proves that a malformed / incomplete object will
            // not pass validation

            // ----------------------------------------------------------------
            // setup your test



            // ----------------------------------------------------------------
            // perform the change

            const actualResult = isCssHexColorData(inputValue);

            // ----------------------------------------------------------------
            // test the results

            expect(actualResult).is.false;
        });
    });

    InvalidCssColorDataInputs.forEach((inputValue) => {
        it("returns false when given " + JSON.stringify(inputValue), () => {
            // ----------------------------------------------------------------
            // explain your test

            // this test proves that primitives et al will not pass validation

            // ----------------------------------------------------------------
            // setup your test



            // ----------------------------------------------------------------
            // perform the change

            const actualResult = isCssHexColorData(inputValue);

            // ----------------------------------------------------------------
            // test the results

            expect(actualResult).is.false;
        });
    });
});