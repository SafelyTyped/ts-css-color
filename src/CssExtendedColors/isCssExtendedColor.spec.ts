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

import "../test-init.test";

import { HashMap } from "@safelytyped/core-types";
import { isCssExtendedColor } from "@safelytyped/css-color";
import { expect } from "chai";
import { describe, it } from "mocha";
import { InvalidCssExtendedColors } from "./_fixtures/CssExtendedColorsFixtures";
import { CSS_EXTENDED_COLORS_TO_HEX } from "./CssExtendedColors.const";

describe("isCssExtendedColor()", () => {
    HashMap.forEach(CSS_EXTENDED_COLORS_TO_HEX, (hex, keyword) => {
        it("accepts CSS color keyword " + keyword, () => {
            // ----------------------------------------------------------------
            // explain your test

            // this test proves that isCssExtendedColor() accepts
            // the given CSS keyword

            // ----------------------------------------------------------------
            // setup your test



            // ----------------------------------------------------------------
            // perform the change

            const actualResult = isCssExtendedColor(keyword);

            // ----------------------------------------------------------------
            // test the results

            expect(actualResult).to.be.true;
        });
    });

    InvalidCssExtendedColors.forEach((inputValue) => {
        it("rejects color called " + inputValue, () => {
            // ----------------------------------------------------------------
            // explain your test

            // this test proves that isCssExtendedColor() rejects
            // common color names that are not part of the CSS standard

            // ----------------------------------------------------------------
            // setup your test

            // normalise
            inputValue = inputValue.toLowerCase();

            // ----------------------------------------------------------------
            // perform the change

            const actualResult = isCssExtendedColor(inputValue);

            // ----------------------------------------------------------------
            // test the results

            expect(actualResult).to.be.false;
        });
    });
});