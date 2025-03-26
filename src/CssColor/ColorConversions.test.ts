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

// this file contains unit tests for proving that we can convert between
// the different CssColor sub-types accurately

import { expect } from "chai";
import { it } from "mocha";
import type { ValidCssColor } from "../_fixtures/CSS_COLOR_FIXTURES";
import type { ColorModel } from "../ColorModels/ColorModel.type";
import type { CssColor } from "./CssColor.type";

type ColorConstructor<T> = (fixture: ValidCssColor) => T;
type ColorConverter<T,R extends CssColor> = (color: T) => R;

export function testCssColorConversionsToTarget<T extends CssColor, R extends CssColor, M extends ColorModel>(
    colorConstructor: ColorConstructor<T>,
    fixture: ValidCssColor,
    target: string,
    colorConverter: ColorConverter<T,R>,
    expectedColorModel: M,
)
{
    it("[fixture " + fixture.name + "] converts the original color to " + target.toUpperCase() + " format", () => {
        // ----------------------------------------------------------------
        // explain your test

        // this test proves that that color conversion to the target
        // format works

        // ----------------------------------------------------------------
        // setup your test

        const unit = colorConstructor(fixture);

        // ----------------------------------------------------------------
        // perform the change

        const actualResult = colorConverter(unit);

        // ----------------------------------------------------------------
        // test the results

        expect(actualResult.channelsData).to.eqls(expectedColorModel);
    });

    it("[fixture " + fixture.name + "] preserves the original color name", () => {
        // ----------------------------------------------------------------
        // explain your test

        // when we convert a color to a different format, the new object
        // still has the same name as our original color

        // ----------------------------------------------------------------
        // setup your test

        const unit = colorConstructor(fixture);
        const expectedResult = unit.name;

        // ----------------------------------------------------------------
        // perform the change

        const actualResult = colorConverter(unit).name;

        // ----------------------------------------------------------------
        // test the results

        expect(actualResult).to.eql(expectedResult);
    });

    it("[fixture " + fixture.name + "] preserves the original color definition", () => {
        // ----------------------------------------------------------------
        // explain your test

        // when we convert a color to a different format, the new object
        // still has the definition of the original object
        //
        // i.e. the definition isn't replaced by one in the new color
        // format

        // ----------------------------------------------------------------
        // setup your test

        const unit = colorConstructor(fixture);
        const expectedResult = unit.definition;

        // ----------------------------------------------------------------
        // perform the change

        const actualResult = colorConverter(unit).definition;

        // ----------------------------------------------------------------
        // test the results

        expect(actualResult).to.eql(expectedResult);
    });
}

export function testCssColorConversionsToHex<T extends CssColor>(
    colorConstructor: ColorConstructor<T>,
    fixture: ValidCssColor,
)
{
    it("[fixture " + fixture.name + "] converts the original color to the expected hex value", () => {
        // ----------------------------------------------------------------
        // explain your test

        // this test proves that that the color's .hex field contains
        // the value we are expecting

        // ----------------------------------------------------------------
        // setup your test

        const unit = colorConstructor(fixture);
        const expectedValue = fixture.colorModels.hex.hex;

        // ----------------------------------------------------------------
        // perform the change

        const actualValue = unit.hex;

        // ----------------------------------------------------------------
        // test the results

        expect(actualValue).to.eqls(expectedValue);
    });
}

export function testCssColorConversionsToCssNamedColor<T extends CssColor>(
    colorConstructor: ColorConstructor<T>,
    fixture: ValidCssColor,
)
{
    it("[fixture " + fixture.name + "] converts the original color to the expected CSS named color", () => {
        // ----------------------------------------------------------------
        // explain your test

        // this test proves that that the color's .cssName field contains
        // the value we are expecting

        // ----------------------------------------------------------------
        // setup your test

        const unit = colorConstructor(fixture);
        const expectedValue = fixture.colorModels.cssNamedColor?.color;

        // ----------------------------------------------------------------
        // perform the change

        const actualValue = unit.cssName;

        // ----------------------------------------------------------------
        // test the results

        expect(actualValue).to.eqls(expectedValue);
    });
}