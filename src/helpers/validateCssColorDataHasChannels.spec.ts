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

import { AppError, isAppError } from "@safelytyped/core-types";
import { validateCssColorDataHasChannels, type CssColorData } from "@safelytyped/css-color";
import { expect } from "chai";
import { describe, it } from "mocha";

const INVALID_INPUTS = [
    {
        inputValue: {
            name: "test",
            definition: "test",
        },
        desc: ".channels is missing",
    },
    {
        inputValue: {
            name: "test",
            definition: "test",
            channels: true,
        },
        desc: ".channels is a boolean (true)",
    },
    {
        inputValue: {
            name: "test",
            definition: "test",
            channels: false,
        },
        desc: ".channels is a boolean (false)",
    },
    {
        inputValue: {
            name: "test",
            definition: "test",
            channels: null,
        },
        desc: ".channels is null",
    },
    {
        inputValue: {
            name: "test",
            definition: "test",
            channels: undefined,
        },
        desc: ".channels is undefined",
    },
    {
        inputValue: {
            name: "test",
            definition: "test",
            channels: [],
        },
        desc: ".channels is an array",
    },
    {
        inputValue: {
            name: "test",
            definition: "test",
            channels: "test",
        },
        desc: ".channels is a string",
    },
    {
        inputValue: {
            name: "test",
            definition: "test",
            channels: 0,
        },
        desc: ".channels is a number",
    },
];

describe("validateCssColorDataHasChannels()", () => {
    it("returns type-casted `input` if the .channels property exists", () => {
        // ----------------------------------------------------------------
        // explain your test

        // this test proves that `validateCssColorDataHasChannels()` returns
        // a suitable type-casted object on success

        // ----------------------------------------------------------------
        // setup your test

        const inputValue = {
            name: "test",
            definition: "test",
            channels: { }
        };

        const returnTypeCheck = (input: CssColorData & { channels: object}) => {
            return input;
        }

        // ----------------------------------------------------------------
        // perform the change

        const actualValue = validateCssColorDataHasChannels(inputValue);

        // ----------------------------------------------------------------
        // test the results

        expect(actualValue).to.eql(inputValue);

        // necessary to allow our returnTypeCheck() call to compile
        if (isAppError(actualValue)) {
            throw actualValue;
        }

        // this will not compile if our unit under test returns the wrong
        // data type
        returnTypeCheck(actualValue);
    });

    INVALID_INPUTS.forEach(({ inputValue, desc }) => {
        it("returns an AppError if `input` should fail validation because " + desc, () => {
            // ----------------------------------------------------------------
            // explain your test

            // this test proves that `validateCssColorDataHasChannels()` does
            // not return a false positive

            // ----------------------------------------------------------------
            // setup your test

            // ----------------------------------------------------------------
            // perform the change

            const actualValue = validateCssColorDataHasChannels(inputValue);

            // ----------------------------------------------------------------
            // test the results

            expect(actualValue).to.be.instanceOf(AppError);
        });
    });
});