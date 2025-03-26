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

import { makeCssColor, validateConversionModel } from "@safelytyped/css-color";
import { expect } from "chai";
import { describe, it } from "mocha";
import { CSS_COLOR_FIXTURES } from "../_fixtures/CSS_COLOR_FIXTURES";

import { jab, lab, lch, lrgb, rgb, type Jab, type Lab, type Lch, type Lrgb, type P3 } from "culori";
type UnsupportedConversionModels = {
    name: string;
    conversionModel: Jab | Lab | Lch | Lrgb | P3;
}

const UNSUPPORTED_CONVERSION_MODELS: UnsupportedConversionModels[] = [
    {
        name: "Jab color model",
        conversionModel: jab(rgb("red")) as Jab,
    },
    {
        name: "CIELab color model",
        conversionModel: lab(rgb("red")) as Lab,
    },
    {
        name: "CIELch color model",
        conversionModel: lch(rgb("red")) as Lch,
    },
    {
        name: "Linear RGB color model",
        conversionModel: lrgb("red") as Lrgb,
    },
];

describe("validateConversionModel()", () => {
    CSS_COLOR_FIXTURES.forEach((fixture) => {
        it(`[fixture ${fixture.name}] accepts a supported conversion model`, () => {
            // ----------------------------------------------------------------
            // explain your test

            // this test will catch any problems with accepting conversion
            // models used by color models / spaces that we support

            // ----------------------------------------------------------------
            // setup your test

            const unit = makeCssColor(fixture.definition, { colorName: fixture.name });
            const inputValue = unit.conversionModel;

            // ----------------------------------------------------------------
            // perform the change

            const actualResult = validateConversionModel(inputValue);

            // ----------------------------------------------------------------
            // test the results

            expect(actualResult).to.eqls(inputValue);
        });
    });

    UNSUPPORTED_CONVERSION_MODELS.forEach((fixture) => {
        it(`[fixture ${fixture.name}] rejects unsupported conversion model`, () => {
            // ----------------------------------------------------------------
            // explain your test

            // this test may catch any problems with accepting color models
            // when we shouldn't

            // ----------------------------------------------------------------
            // setup your test

            const inputValue = fixture.conversionModel;
            expect(inputValue).is.not.undefined;

            // ----------------------------------------------------------------
            // perform the change

            const actualResult = validateConversionModel(inputValue);

            // ----------------------------------------------------------------
            // test the results

            expect(actualResult).to.be.instanceOf(Error);
        });
    });
});