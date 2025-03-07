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

// this file contains unit tests that apply to all child classes of
// CssColor

import { expect } from "chai";
import { describe, it } from "mocha";
import type { AnyCssColor } from "./AnyCssColor.type";

type CssColorFixture<T,C> = {
    name: string;
    definition: string;

    inputChannels: T;
    expectedChannels: C;
}

type ColorConstructor<T,C> = (fixture: CssColorFixture<T,C>) => T;
type ColorConverter<T,R extends AnyCssColor> = (color: T) => R;

export function testCssColorConversionsToTarget<T extends AnyCssColor, C, R extends AnyCssColor>(
    colorConstructor: ColorConstructor<T,C>,
    fixtures: CssColorFixture<T,C>[],
    target: string,
    colorConverter: ColorConverter<T,R>
)
{
    // we need to know whether we're testing conversion back to its own color
    // format or not
    const color = colorConstructor(fixtures[0]);
    const convertedColor = colorConverter(color);
    const convertingToSelf = ((color as AnyCssColor) === convertedColor);

    describe("." + target + "()", () => {
        fixtures.forEach((fixture) => {
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

                expect(actualResult.channelsData()).to.eqls(fixture.expectedChannels);
            });

            it("[fixture " + fixture.name + "] preserves the original color name", () => {
                // ----------------------------------------------------------------
                // explain your test

                // when we convert a color to a different format, the new object
                // still has the same name as our original color

                // ----------------------------------------------------------------
                // setup your test

                const unit = colorConstructor(fixture);
                const expectedResult = unit.name();

                // ----------------------------------------------------------------
                // perform the change

                const actualResult = colorConverter(unit).name();

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
                const expectedResult = unit.definition();

                // ----------------------------------------------------------------
                // perform the change

                const actualResult = colorConverter(unit).definition();

                // ----------------------------------------------------------------
                // test the results

                expect(actualResult).to.eql(expectedResult);
            });
        });

        it("caches static conversions", () => {
            // ----------------------------------------------------------------
            // explain your test

            // this test proves that

            // ----------------------------------------------------------------
            // setup your test



            // ----------------------------------------------------------------
            // perform the change

            // ----------------------------------------------------------------
            // test the results

        });
    });
}

export function testCssColorConversions<T extends AnyCssColor, C>(
    colorConstructor: ColorConstructor<T,C>,
    fixtures: CssColorFixture<T,C>[]
)
{
    testCssColorConversionsToTarget(colorConstructor, fixtures, "cmyk", (c: AnyCssColor) => c.cmyk());
    testCssColorConversionsToTarget(colorConstructor, fixtures, "hsl", (c: AnyCssColor) => c.hsl());
    testCssColorConversionsToTarget(colorConstructor, fixtures, "hsv", (c: AnyCssColor) => c.hsv());
    testCssColorConversionsToTarget(colorConstructor, fixtures, "hwb", (c: AnyCssColor) => c.hwb());
    testCssColorConversionsToTarget(colorConstructor, fixtures, "oklch", (c: AnyCssColor) => c.oklch());
    testCssColorConversionsToTarget(colorConstructor, fixtures, "rgb", (c: AnyCssColor) => c.rgb());
}