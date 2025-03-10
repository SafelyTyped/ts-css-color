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
import { expect } from "chai";
import { describe, it } from "mocha";
import { NON_RGB_COLOR_MODELS, RGB_COLOR_MODELS } from "../../_fixtures/RGB_COLOR_MODELS";
import { validateRgbColorModel } from "./validateRgbColorModel";

describe("validateRgbColorModel()", () => {
    RGB_COLOR_MODELS.forEach((fixture) => {
        it(`[fixture ${fixture.name}] accepts valid RgbColorModel`, () => {
            // ----------------------------------------------------------------
            // explain your test

            // this test proves that the unit under test does not reject
            // valid input

            // ----------------------------------------------------------------
            // setup your test

            const inputValue = fixture.colorModels.rgb;

            // ----------------------------------------------------------------
            // perform the change

            const actualValue = validateRgbColorModel(inputValue);

            // ----------------------------------------------------------------
            // test the results

            expect(actualValue).to.eqls(inputValue);
        });
    });

    NON_RGB_COLOR_MODELS.forEach((fixture) => {
        for(const fixtureModel in fixture.colorModels) {
            it(`[fixture ${fixture.name}] rejects ${fixtureModel} color model`, () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that the under under test does not accept
                // invalid models

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = HashMap.get(fixture.colorModels, fixtureModel) || {};

                // ----------------------------------------------------------------
                // perform the change

                const actualValue = validateRgbColorModel(inputValue);

                // ----------------------------------------------------------------
                // test the results

                expect(actualValue).to.be.instanceof(Error);
            });
        }
    });
});