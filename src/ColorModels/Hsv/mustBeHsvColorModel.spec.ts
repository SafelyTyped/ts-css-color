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

import { HashMap } from "@safelytyped/core-types";
import { mustBeHsvColorModel } from "@safelytyped/css-color";
import { expect } from "chai";
import { describe } from "mocha";
import { HSV_COLOR_MODELS, NON_HSV_COLOR_MODELS } from "../../_fixtures/HSV_COLOR_MODELS";

describe("mustBeHsvColorModel()", () => {
    HSV_COLOR_MODELS.forEach((fixture) => {
        it(`[fixture ${fixture.name}] accepts valid HsvColorModel`, () => {
            // ----------------------------------------------------------------
            // explain your test

            // this test proves that the unit under test works as expected
            // when given a valid input

            // ----------------------------------------------------------------
            // setup your test

            const inputValue = fixture.colorModels.hsv;

            // ----------------------------------------------------------------
            // perform the change

            const actualValue = mustBeHsvColorModel(inputValue);

            // ----------------------------------------------------------------
            // test the results

            expect(actualValue).to.eqls(inputValue);
        });
    });

    NON_HSV_COLOR_MODELS.forEach((fixture) => {
        for(const fixtureModel in fixture.colorModels) {
            it(`[fixture ${fixture.name}] rejects ${fixtureModel} color model`, () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that the under under test does not accept
                // invalid models

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = HashMap.get(fixture.colorModels, fixtureModel) || {};
                let actualError;

                // ----------------------------------------------------------------
                // perform the change

                try {
                    mustBeHsvColorModel(inputValue);
                }
                catch (e) {
                    actualError = e;
                }

                // ----------------------------------------------------------------
                // test the results

                expect(actualError).to.be.instanceof(Error);
            });
        };
    });
});