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

import { AppError, HashMap } from "@safelytyped/core-types";
import { validateCssNamedColor } from "@safelytyped/css-color";
import { expect } from "chai";
import { describe, it } from "mocha";
import { InvalidCssNamedColors } from "./_fixtures/CssExtendedColorsFixtures";
import { CSS_NAMED_COLOR_TO_HEX } from "./CssNamedColors.const";

describe("validateCssNamedColor()", () => {
    HashMap.forEach(CSS_NAMED_COLOR_TO_HEX, (hex, cssName) => {
        it("accepts named CSS color: " + cssName, () => {
            // ----------------------------------------------------------------
            // explain your test

            // this test proves that validateCssExtendedColor() accepts
            // the given named CSS color

            // ----------------------------------------------------------------
            // setup your test



            // ----------------------------------------------------------------
            // perform the change

            const actualResult = validateCssNamedColor(cssName);

            // ----------------------------------------------------------------
            // test the results

            expect(actualResult).to.eql(cssName);
        });
    });

    InvalidCssNamedColors.forEach((inputValue) => {
        it("rejects color called " + inputValue, () => {
            // ----------------------------------------------------------------
            // explain your test

            // this test proves that validateCssNamedColor() rejects
            // common color names that are not part of the CSS standard

            // ----------------------------------------------------------------
            // setup your test

            // normalise
            inputValue = inputValue.toLowerCase();

            // ----------------------------------------------------------------
            // perform the change

            const actualValue = validateCssNamedColor(inputValue);

            // ----------------------------------------------------------------
            // test the results

            expect(actualValue).to.be.instanceOf(AppError);
        });
    });
});