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

import { isAppError } from "@safelytyped/core-types";
import { validateObjectHasStringProperty } from "@safelytyped/css-color";
import { expect } from "chai";
import { describe } from "mocha";

describe("validateObjectHasStringProperty()", () => {
    it("returns the input if the given string property exists", () => {
        // ----------------------------------------------------------------
        // explain your test

        // this test proves that validateObjectHasStringProperty() works
        // if asked to verify that a single string property exists on
        // the input object

        // ----------------------------------------------------------------
        // setup your test

        const inputValue = {
            myTestString: "",
        }

        // ----------------------------------------------------------------
        // perform the change

        const actualValue = validateObjectHasStringProperty(
            inputValue,
            [ "myTestString" ]
        );

        // ----------------------------------------------------------------
        // test the results

        expect(actualValue).to.eqls(inputValue);
    });

    it("typecasts the returned input if the given string property exists", () => {
        // ----------------------------------------------------------------
        // explain your test

        // this test proves that validateObjectHasStringProperty() works
        // if asked to verify that a single string property exists on
        // the input object

        // ----------------------------------------------------------------
        // setup your test

        const myTestFunc = (input: {myTestString: string}) => input;
        const inputValue = {
            myTestString: "",
        }

        // ----------------------------------------------------------------
        // perform the change

        const actualValue = validateObjectHasStringProperty(
            inputValue,
            [ "myTestString" ]
        );
        if (isAppError(actualValue)) {
            throw actualValue;
        }

        // the test will only compile and run if `actualValue` has been
        // correctly type-cast
        myTestFunc(actualValue);

        // ----------------------------------------------------------------
        // test the results

        // this is necessary so that the test registers as passing
        expect(actualValue).to.eqls(inputValue);
    });

    it("returns the input if the given string properties all exist", () => {
        // ----------------------------------------------------------------
        // explain your test

        // this test proves that validateObjectHasStringProperty() works
        // if asked to verify that multiple string properties exists on
        // the input object

        // ----------------------------------------------------------------
        // setup your test

        const inputValue = {
            myTestString: "",
            mySecondTestString: "",
        }

        // ----------------------------------------------------------------
        // perform the change

        const actualValue = validateObjectHasStringProperty(
            inputValue,
            [ "myTestString", "mySecondTestString" ]
        );

        // ----------------------------------------------------------------
        // test the results

        expect(actualValue).to.eqls(inputValue);
    });

    it("typecasts the returned input if the given string properties all exist", () => {
        // ----------------------------------------------------------------
        // explain your test

        // this test proves that validateObjectHasStringProperty() works
        // if asked to verify that multiple string properties exists on
        // the input object

        // ----------------------------------------------------------------
        // setup your test

        const myTestFunc = (input: {myTestString: string; mySecondTestString: string}) => input;
        const inputValue = {
            myTestString: "",
            mySecondTestString: "",
        }

        // ----------------------------------------------------------------
        // perform the change

        const actualValue = validateObjectHasStringProperty(
            inputValue,
            [ "myTestString", "mySecondTestString" ]
        );
        if (isAppError(actualValue)) {
            throw actualValue;
        }

        // the test will only compile and run if `actualValue` has been
        // correctly type-cast
        myTestFunc(actualValue);

        // ----------------------------------------------------------------
        // test the results

        // this is necessary so that the test registers as passing
        expect(actualValue).to.eqls(inputValue);
    });

    it("returns an AppError if any of the given string properties do not exist", () => {
        // ----------------------------------------------------------------
        // explain your test

        // this test proves that validateObjectHasStringProperty() correctly
        // spots any missing string properties

        // ----------------------------------------------------------------
        // setup your test

        const inputValue = {
            myTestString: "",
            mySecondTestString: "",
        }

        // ----------------------------------------------------------------
        // perform the change

        const actualValue = validateObjectHasStringProperty(
            inputValue,
            [ "myTestString", "myOtherTestString" ]
        );

        // ----------------------------------------------------------------
        // test the results

        expect(actualValue).to.be.instanceOf(Error);
    })

    it("returns an AppError if any of the given properties are not strings", () => {
        // ----------------------------------------------------------------
        // explain your test

        // this test proves that validateObjectHasStringProperty() correctly
        // spots any missing string properties

        // ----------------------------------------------------------------
        // setup your test

        const inputValue = {
            myTestString: "",
            mySecondTestString: 100,
        }

        // ----------------------------------------------------------------
        // perform the change

        const actualValue = validateObjectHasStringProperty(
            inputValue,
            [ "myTestString", "mySecondTestString" ]
        );

        // ----------------------------------------------------------------
        // test the results

        expect(actualValue).to.be.instanceOf(Error);
    })
});