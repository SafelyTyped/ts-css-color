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
import { SUPPORTED_COLOR_SPACES, validateCssColorDataHasColorSpace } from "@safelytyped/css-color";
import { expect } from "chai";
import { describe } from "mocha";

describe("validateCssColorDataHasColorSpace()", () => {
    SUPPORTED_COLOR_SPACES.forEach((cssColorSpace) => {
        it("returns the input object if it contains the expected color format: " + cssColorSpace, () => {
            // ----------------------------------------------------------------
            // explain your test

            // this tests proves that validateCssColorDataHasColorSpace()
            // works as expected if the input object contains valid
            // colorSpace data

            // ----------------------------------------------------------------
            // setup your test

            const inputValue = {
                colorSpace: cssColorSpace,
            }

            // ----------------------------------------------------------------
            // perform the change

            const actualValue = validateCssColorDataHasColorSpace(
                inputValue, cssColorSpace
            )

            // ----------------------------------------------------------------
            // test the results

            expect(actualValue).to.eqls(inputValue);
        });

        it("type-casts the returned object if the input contains the expected color format: " + cssColorSpace, () => {
            // ----------------------------------------------------------------
            // explain your test

            // this tests proves that validateCssColorDataHasColorSpace()
            // works as expected if the input object contains valid
            // colorSpace data

            // ----------------------------------------------------------------
            // setup your test

            const inputValue = {
                colorSpace: cssColorSpace,
            }
            const myTestFunc = (
                input: { colorSpace: typeof cssColorSpace }
            ) => input;

            // ----------------------------------------------------------------
            // perform the change

            const actualValue = validateCssColorDataHasColorSpace(
                inputValue as object, cssColorSpace
            )

            // this will only compile if validateCssColorDataHasColorSpace()
            // has typecast the returned value correctly
            myTestFunc(inputValue);

            // ----------------------------------------------------------------
            // test the results

            expect(actualValue).to.eqls(inputValue);
        });
    });

    it("returns an AppError if the input does not contain any colorSpace data", () => {
        // ----------------------------------------------------------------
        // explain your test

        // this test proves that validation correctly fails if the
        // .colorSpace field is completely missing

        // ----------------------------------------------------------------
        // setup your test

        const inputValue = {}

        // ----------------------------------------------------------------
        // perform the change

        const actualValue = validateCssColorDataHasColorSpace(inputValue, "sRGB");

        // ----------------------------------------------------------------
        // test the results

        expect(actualValue).to.be.instanceOf(AppError);
    });

    it("returns an AppError if the input does not contain the expected colorSpace data", () => {
        // ----------------------------------------------------------------
        // explain your test

        // this test proves that validation correctly fails if the
        // .colorSpace field is completely missing

        // ----------------------------------------------------------------
        // setup your test

        const inputValue = {
            colorSpace: "sRGB",
        }

        // ----------------------------------------------------------------
        // perform the change

        const actualValue = validateCssColorDataHasColorSpace(inputValue, "OKLCH");

        // ----------------------------------------------------------------
        // test the results

        expect(actualValue).to.be.instanceOf(AppError);
    });
});