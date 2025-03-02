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

import { expect } from "chai";
import { jab, type Color } from "culori";
import { describe, it } from "mocha";
import { VALID_CMYK_CONVERSIONS_FIXTURES } from "../CssCmykColor/_fixtures/CmykConversionData";
import { VALID_HEX_CONVERSIONS_FIXTURES } from "../CssHexColor/_fixtures/HexConversionData";
import { VALID_HSL_CONVERSIONS_FIXTURES } from "../CssHslColor/_fixtures/HslConversionData";
import { VALID_HSV_CONVERSIONS_FIXTURES } from "../CssHsvColor/_fixtures/HsvConversionData";
import { VALID_HWB_CONVERSIONS_FIXTURES } from "../CssHwbColor/_fixtures/HwbConversionData";
import { VALID_OKLCH_CONVERSIONS_FIXTURES } from "../CssOklchColor/_fixtures/OklchConversionData";
import { VALID_RGB_CONVERSIONS_FIXTURES } from "../CssRgbColor/_fixtures/RgbConversionData";
import type { ConversionModel } from "./ConversionModel.type";
import { isConversionModel } from "./isConversionModel";

const VALID_CONVERSION_MODELS: ConversionModel[] = [];

[
    ...VALID_CMYK_CONVERSIONS_FIXTURES,
    ...VALID_HEX_CONVERSIONS_FIXTURES,
    ...VALID_HSL_CONVERSIONS_FIXTURES,
    ...VALID_HSV_CONVERSIONS_FIXTURES,
    ...VALID_HWB_CONVERSIONS_FIXTURES,
    ...VALID_OKLCH_CONVERSIONS_FIXTURES,
    ...VALID_RGB_CONVERSIONS_FIXTURES,
].forEach((fixture) => VALID_CONVERSION_MODELS.push(fixture.conversionModel));

const INVALID_CONVERSION_MODELS: Color[] = [];

[
    jab("red")
].forEach((maybeModel) => {
    if (maybeModel !== undefined) {
        INVALID_CONVERSION_MODELS.push(maybeModel);
    }
});

describe("isConversionModel()", () => {
    VALID_CONVERSION_MODELS.forEach((model) => {
        it("accepts valid model: " + JSON.stringify(model), () => {
            // ----------------------------------------------------------------
            // explain your test

            // this test proves that the type guard works for valid
            // ConversionModel data

            // ----------------------------------------------------------------
            // setup your test



            // ----------------------------------------------------------------
            // perform the change

            const actualValue = isConversionModel(model);

            // ----------------------------------------------------------------
            // test the results

            expect(actualValue).to.be.true;
        });
    });

    INVALID_CONVERSION_MODELS.forEach((model) => {
        it("rejects unsupported model: " + JSON.stringify(model), () => {
            // ----------------------------------------------------------------
            // explain your test

            // this test proves that the type guard isn't fooled by valid
            // (but unsupported) results from our underlying color conversion
            // package

            // ----------------------------------------------------------------
            // setup your test



            // ----------------------------------------------------------------
            // perform the change

            const actualValue = isConversionModel(model);

            // ----------------------------------------------------------------
            // test the results

            expect(actualValue).to.be.false;
        });
    });
});