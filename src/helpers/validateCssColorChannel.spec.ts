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

import { AppError } from "@safelytyped/core-types";
import { validateCssColorChannel } from "@safelytyped/css-color";
import { expect } from "chai";
import { describe, it } from "mocha";

const VALID_INPUTS = [
    {
        inputValue: {
            red: 255,
            green: 255,
            blue: 255,
        },
        channelName: "red",
        min: 0,
        max: 255,
    },
    {
        inputValue: {
            red: 255,
            green: 255,
            blue: 255,
        },
        channelName: "green",
        min: 0,
        max: 255,
    },
    {
        inputValue: {
            red: 255,
            green: 255,
            blue: 255,
        },
        channelName: "blue",
        min: 0,
        max: 255,
    },
    {
        inputValue: {
            red: 0,
            green: 255,
            blue: 255,
        },
        channelName: "blue",
        min: 0,
        max: 255,
    },
];

const INVALID_INPUTS = [
    {
        inputValue: {
            red: "255",
        },
        channelName: "green",
        min: 0,
        max: 255,
        desc: "channel does not exist",
    },
    {
        inputValue: {
            red: true,
        },
        channelName: "red",
        min: 0,
        max: 255,
        desc: "channel exists but is unsupported input type of boolean (true)",
    },
    {
        inputValue: {
            red: false,
        },
        channelName: "red",
        min: 0,
        max: 255,
        desc: "channel exists but is unsupported input type of boolean (false)",
    },
    {
        inputValue: {
            red: null,
        },
        channelName: "red",
        min: 0,
        max: 255,
        desc: "channel exists but is unsupported input type of null",
    },
    {
        inputValue: {
            red: undefined,
        },
        channelName: "red",
        min: 0,
        max: 255,
        desc: "channel exists but is unsupported input type of undefined",
    },
    {
        inputValue: {
            red: NaN,
        },
        channelName: "red",
        min: 0,
        max: 255,
        desc: "channel exists but is unsupported input type of NaN",
    },
    {
        inputValue: {
            red: "255",
        },
        channelName: "red",
        min: 0,
        max: 255,
        desc: "channel exists but is unsupported input type of string",
    },
    {
        inputValue: {
            red: -1,
        },
        channelName: "red",
        min: 0,
        max: 255,
        desc: "channel exists but is less than `min` parameter",
    },
    {
        inputValue: {
            red: 256,
        },
        channelName: "red",
        min: 0,
        max: 255,
        desc: "channel exists but is more than `max` parameter",
    },
];

describe("validateCssColorChannel()", () => {
    VALID_INPUTS.forEach(({inputValue, channelName, min, max}, index) => {
        it("correctly validates test input #" + index.toString(), () => {
            // ----------------------------------------------------------------
            // explain your test

            // this tests proves that validateCssColorChannel() correctly
            // validates data that we want it to accept

            // ----------------------------------------------------------------
            // setup your test



            // ----------------------------------------------------------------
            // perform the change

            const actualValue = validateCssColorChannel(inputValue, channelName, min, max);

            // ----------------------------------------------------------------
            // test the results

            expect(actualValue).is.not.instanceOf(AppError);
        });

        it("returns the given input when validation passes, using test input #" + index.toString(), () => {
            // ----------------------------------------------------------------
            // explain your test

            // this tests proves that validateCssColorChannel() returns our
            // input value on success

            // ----------------------------------------------------------------
            // setup your test



            // ----------------------------------------------------------------
            // perform the change

            const actualValue = validateCssColorChannel(inputValue, channelName, min, max);

            // ----------------------------------------------------------------
            // test the results

            expect(actualValue).is.eql(inputValue);
        });
    });

    INVALID_INPUTS.forEach(({inputValue, channelName, min, max, desc}) => {
        it("returns an AppError when " + desc, () => {
            // ----------------------------------------------------------------
            // explain your test

            // this test proves that the validator doesn't return a false
            // positive; ie that it rejects all the data that it should

            // ----------------------------------------------------------------
            // setup your test



            // ----------------------------------------------------------------
            // perform the change

            const actualValue = validateCssColorChannel(inputValue, channelName, min, max);

            // ----------------------------------------------------------------
            // test the results

            expect(actualValue).to.be.instanceOf(AppError);
        });
    });
});

