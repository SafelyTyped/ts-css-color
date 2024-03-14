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

import { describe } from "mocha";
import { InvalidCssHexColorDefinitionInputs, InvalidCssHexColorDefinitions, ValidCssHexColorDefinitions } from "./_fixtures/CssHexColorDataDefinitionFixtures";
import { validateCssHexColorDefinition } from "./validateCssHexColorDefinition";
import { AppError } from "@safelytyped/core-types";
import { expect } from "chai";

describe("validateCssHexColorDefinition()", () => {
    ValidCssHexColorDefinitions.forEach((inputValue) => {
        it("accepts hex definition " + inputValue, () => {
            // ----------------------------------------------------------------
            // explain your test

            // this test proves that valid CSS hex definitions are supported

            // ----------------------------------------------------------------
            // setup your test



            // ----------------------------------------------------------------
            // perform the change

            const actualValue = validateCssHexColorDefinition(inputValue);

            // ----------------------------------------------------------------
            // test the results

            expect(actualValue).is.not.instanceOf(AppError);
        });
    });

    InvalidCssHexColorDefinitions.forEach((inputValue) => {
        it("rejects invalid hex definition " + inputValue, () => {
            // ----------------------------------------------------------------
            // explain your test

            // this test proves that the input string must contain a valid
            // CSS hex definition

            // ----------------------------------------------------------------
            // setup your test

            // ----------------------------------------------------------------
            // perform the change

            const actualValue = validateCssHexColorDefinition(inputValue);

            // ----------------------------------------------------------------
            // test the results

            expect(actualValue).to.be.instanceOf(AppError);
        });
    });

    InvalidCssHexColorDefinitionInputs.forEach((inputValue) => {
        it("rejects invalid input " + JSON.stringify(inputValue), () => {
            // ----------------------------------------------------------------
            // explain your test

            // this test proves that non-strings are rejected

            // ----------------------------------------------------------------
            // setup your test

            const actualValue = validateCssHexColorDefinition(inputValue);

            // ----------------------------------------------------------------
            // perform the change

            // ----------------------------------------------------------------
            // test the results

            expect(actualValue).to.be.instanceOf(AppError);
        });
    });
});
