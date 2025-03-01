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

import { AppError, isAppError } from "@safelytyped/core-types";
import { validateCssHsvColorChannelsData } from "@safelytyped/css-color";
import { expect } from "chai";
import { describe } from "mocha";
import { InvalidCssHsvColorChannelsDataInputs, InvalidCssHsvColorChannelsDataObjects, ValidCssHsvColorChannelsData } from "./_fixtures/CssHsvColorChannelsData";

describe("validateCssHsvColorChannelsData()", () => {
    ValidCssHsvColorChannelsData.forEach((inputValue, index) => {
        it("correctly validates test input #" + index.toString(), () => {
            // ----------------------------------------------------------------
            // explain your test

            // this test proves that validateCssHsvColorChannelsData() accepts the
            // data that we want it to

            // ----------------------------------------------------------------
            // setup your test

            // ----------------------------------------------------------------
            // perform the change

            const actualValue = validateCssHsvColorChannelsData(inputValue);

            // ----------------------------------------------------------------
            // test the results

            if (isAppError(actualValue)) {
                console.log(actualValue);
            }
            expect(actualValue).is.not.instanceOf(AppError);
        });

        it("returns the given input when validation passes, using test input #" + index.toString(), () => {
            // ----------------------------------------------------------------
            // explain your test

            // this test proves that validateCssHsvColorChannelsData() returns the
            // given input value on success

            // ----------------------------------------------------------------
            // setup your test

            // ----------------------------------------------------------------
            // perform the change

            const actualValue = validateCssHsvColorChannelsData(inputValue);

            // ----------------------------------------------------------------
            // test the results

            expect(actualValue).eqls(inputValue);
        });
    });

    InvalidCssHsvColorChannelsDataObjects.forEach(({inputValue, description}) => {
        it("rejects an object where " + description, () => {
            // ----------------------------------------------------------------
            // explain your test

            // this test proves that a malformed / incomplete object will
            // not pass validation

            // ----------------------------------------------------------------
            // setup your test

            // ----------------------------------------------------------------
            // perform the change

            const actualValue = validateCssHsvColorChannelsData(inputValue);

            // ----------------------------------------------------------------
            // test the results

            expect(actualValue).is.instanceOf(AppError);
        });
    });

    InvalidCssHsvColorChannelsDataInputs.forEach((inputValue) => {
        it("rejects " + JSON.stringify(inputValue), () => {
            // ----------------------------------------------------------------
            // explain your test

            // this test proves that primitives et al will not pass validation

            // ----------------------------------------------------------------
            // setup your test

            // ----------------------------------------------------------------
            // perform the change

            const actualValue = validateCssHsvColorChannelsData(inputValue);

            // ----------------------------------------------------------------
            // test the results

            expect(actualValue).is.instanceOf(AppError);
        });
    });

    it("rejects when hue is out of range (below 0)", () => {
        // ----------------------------------------------------------------
        // explain your test

        // this test proves that validateCssHsvColorChannelsData() rejects
        // values where the hue is less than the allowed minimum (0)

        // ----------------------------------------------------------------
        // setup your test

        const inputValue = {
            hue: -1,
            saturation: 50,
            value: 50,
            alpha: 1
        };

        // ----------------------------------------------------------------
        // perform the change

        const actualValue = validateCssHsvColorChannelsData(inputValue);

        // ----------------------------------------------------------------
        // test the results

        expect(actualValue).is.instanceOf(AppError);
    });

    it("rejects when hue is out of range (above 360)", () => {
        // ----------------------------------------------------------------
        // explain your test

        // this test proves that validateCssHsvColorChannelsData() rejects
        // values where the hue is greater than the allowed maximum (360)

        // ----------------------------------------------------------------
        // setup your test

        const inputValue = {
            hue: 361,
            saturation: 50,
            value: 50,
            alpha: 1
        };

        // ----------------------------------------------------------------
        // perform the change

        const actualValue = validateCssHsvColorChannelsData(inputValue);

        // ----------------------------------------------------------------
        // test the results

        expect(actualValue).is.instanceOf(AppError);
    });

    it("rejects when saturation is out of range (below 0)", () => {
        // ----------------------------------------------------------------
        // explain your test

        // this test proves that validateCssHsvColorChannelsData() rejects
        // values where the saturation is less than the allowed minimum (0)

        // ----------------------------------------------------------------
        // setup your test

        const inputValue = {
            hue: 180,
            saturation: -1,
            value: 50,
            alpha: 1
        };

        // ----------------------------------------------------------------
        // perform the change

        const actualValue = validateCssHsvColorChannelsData(inputValue);

        // ----------------------------------------------------------------
        // test the results

        expect(actualValue).is.instanceOf(AppError);
    });

    it("rejects when saturation is out of range (above 100)", () => {
        // ----------------------------------------------------------------
        // explain your test

        // this test proves that validateCssHsvColorChannelsData() rejects
        // values where the saturation is greater than the allowed maximum (100)

        // ----------------------------------------------------------------
        // setup your test

        const inputValue = {
            hue: 180,
            saturation: 101,
            value: 50,
            alpha: 1
        };

        // ----------------------------------------------------------------
        // perform the change

        const actualValue = validateCssHsvColorChannelsData(inputValue);

        // ----------------------------------------------------------------
        // test the results

        expect(actualValue).is.instanceOf(AppError);
    });

    it("rejects when value is out of range (below 0)", () => {
        // ----------------------------------------------------------------
        // explain your test

        // this test proves that validateCssHsvColorChannelsData() rejects
        // values where the value is less than the allowed minimum (0)

        // ----------------------------------------------------------------
        // setup your test

        const inputValue = {
            hue: 180,
            saturation: 50,
            value: -1,
            alpha: 1
        };

        // ----------------------------------------------------------------
        // perform the change

        const actualValue = validateCssHsvColorChannelsData(inputValue);

        // ----------------------------------------------------------------
        // test the results

        expect(actualValue).is.instanceOf(AppError);
    });

    it("rejects when value is out of range (above 100)", () => {
        // ----------------------------------------------------------------
        // explain your test

        // this test proves that validateCssHsvColorChannelsData() rejects
        // values where the value is greater than the allowed maximum (100)

        // ----------------------------------------------------------------
        // setup your test

        const inputValue = {
            hue: 180,
            saturation: 50,
            value: 101,
            alpha: 1
        };

        // ----------------------------------------------------------------
        // perform the change

        const actualValue = validateCssHsvColorChannelsData(inputValue);

        // ----------------------------------------------------------------
        // test the results

        expect(actualValue).is.instanceOf(AppError);
    });

    it("rejects when alpha is out of range (below 0)", () => {
        // ----------------------------------------------------------------
        // explain your test

        // this test proves that validateCssHsvColorChannelsData() rejects
        // values where the alpha is less than the allowed minimum (0)

        // ----------------------------------------------------------------
        // setup your test

        const inputValue = {
            hue: 180,
            saturation: 50,
            value: 50,
            alpha: -0.1
        };

        // ----------------------------------------------------------------
        // perform the change

        const actualValue = validateCssHsvColorChannelsData(inputValue);

        // ----------------------------------------------------------------
        // test the results

        expect(actualValue).is.instanceOf(AppError);
    });

    it("rejects when alpha is out of range (above 1)", () => {
        // ----------------------------------------------------------------
        // explain your test

        // this test proves that validateCssHsvColorChannelsData() rejects
        // values where the alpha is greater than the allowed maximum (1)

        // ----------------------------------------------------------------
        // setup your test

        const inputValue = {
            hue: 180,
            saturation: 50,
            value: 50,
            alpha: 1.1
        };

        // ----------------------------------------------------------------
        // perform the change

        const actualValue = validateCssHsvColorChannelsData(inputValue);

        // ----------------------------------------------------------------
        // test the results

        expect(actualValue).is.instanceOf(AppError);
    });

    it("accepts when all values are at their minimum allowed values", () => {
        // ----------------------------------------------------------------
        // explain your test

        // this test proves that validateCssHsvColorChannelsData() accepts
        // values where all channels are at their minimum allowed values

        // ----------------------------------------------------------------
        // setup your test

        const inputValue = {
            hue: 0,
            saturation: 0,
            value: 0,
            alpha: 0
        };

        // ----------------------------------------------------------------
        // perform the change

        const actualValue = validateCssHsvColorChannelsData(inputValue);

        // ----------------------------------------------------------------
        // test the results

        expect(actualValue).is.not.instanceOf(AppError);
        expect(actualValue).eqls(inputValue);
    });

    it("accepts when all values are at their maximum allowed values", () => {
        // ----------------------------------------------------------------
        // explain your test

        // this test proves that validateCssHsvColorChannelsData() accepts
        // values where all channels are at their maximum allowed values

        // ----------------------------------------------------------------
        // setup your test

        const inputValue = {
            hue: 360,
            saturation: 100,
            value: 100,
            alpha: 1
        };

        // ----------------------------------------------------------------
        // perform the change

        const actualValue = validateCssHsvColorChannelsData(inputValue);

        // ----------------------------------------------------------------
        // test the results

        expect(actualValue).is.not.instanceOf(AppError);
        expect(actualValue).eqls(inputValue);
    });
});