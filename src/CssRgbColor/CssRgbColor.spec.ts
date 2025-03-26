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

import { makeCssRgbColor, makeCssRgbColorFromRgbColorModel, type CssColor } from "@safelytyped/css-color";
import { expect } from "chai";
import { describe, it } from "mocha";
import type { ValidCssColor } from "../_fixtures/CSS_COLOR_FIXTURES";
import { CSS_RGB_COLOR_FIXTURES } from "../_fixtures/CSS_RGB_COLOR_FIXTURES";
import { testCssColorConversionsToCssNamedColor, testCssColorConversionsToHex, testCssColorConversionsToTarget } from "../CssColor/ColorConversions.test";

describe("CssRgbColor", () => {
    // ================================================================
    //
    // COLOR CONVERSION TESTS
    //
    // Unfortunately, we can't just do these tests by calling a single,
    // central function. It works from the command-line, but not from
    // inside VS Code.
    //
    // The big downside is that we have to manually update these tests
    // whenever we add new CssColor types.
    //
    // ----------------------------------------------------------------

    describe(".cmyk", () => {
        CSS_RGB_COLOR_FIXTURES.forEach((fixture) => {
            const colorConstructor = (fixture: ValidCssColor) => makeCssRgbColorFromRgbColorModel(
                fixture.name,
                fixture.definition,
                fixture.colorModels.rgb,
            );

            testCssColorConversionsToTarget(colorConstructor, fixture, "cmyk", (c: CssColor) => c.cmyk, fixture.colorModels.cmyk);
        });
    });

    describe(".hsl", () => {
        CSS_RGB_COLOR_FIXTURES.forEach((fixture) => {
            const colorConstructor = (fixture: ValidCssColor) => makeCssRgbColorFromRgbColorModel(
                fixture.name,
                fixture.definition,
                fixture.colorModels.rgb,
            );
            testCssColorConversionsToTarget(colorConstructor, fixture, "hsl", (c: CssColor) => c.hsl, fixture.colorModels.hsl);
        });
    });

    describe(".hsv", () => {
        CSS_RGB_COLOR_FIXTURES.forEach((fixture) => {
            const colorConstructor = (fixture: ValidCssColor) => makeCssRgbColorFromRgbColorModel(
                fixture.name,
                fixture.definition,
                fixture.colorModels.rgb,
            );
            testCssColorConversionsToTarget(colorConstructor, fixture, "hsv", (c: CssColor) => c.hsv, fixture.colorModels.hsv);
        });
    });

    describe(".hwb", () => {
        CSS_RGB_COLOR_FIXTURES.forEach((fixture) => {
            const colorConstructor = (fixture: ValidCssColor) => makeCssRgbColorFromRgbColorModel(
                fixture.name,
                fixture.definition,
                fixture.colorModels.rgb,
            );
            testCssColorConversionsToTarget(colorConstructor, fixture, "hwb", (c: CssColor) => c.hwb, fixture.colorModels.hwb);
        });
    });

    describe(".oklch", () => {
        CSS_RGB_COLOR_FIXTURES.forEach((fixture) => {
            const colorConstructor = (fixture: ValidCssColor) => makeCssRgbColorFromRgbColorModel(
                fixture.name,
                fixture.definition,
                fixture.colorModels.rgb,
            );
            testCssColorConversionsToTarget(colorConstructor, fixture, "oklch", (c: CssColor) => c.oklch, fixture.colorModels.oklch);
        });
    });

    describe(".rgb", () => {
        CSS_RGB_COLOR_FIXTURES.forEach((fixture) => {
            const colorConstructor = (fixture: ValidCssColor) => makeCssRgbColorFromRgbColorModel(
                fixture.name,
                fixture.definition,
                fixture.colorModels.rgb,
            );
            testCssColorConversionsToTarget(colorConstructor, fixture, "rgb", (c: CssColor) => c.rgb, fixture.colorModels.rgb);

            it("[fixture " + fixture.name + "] returns itself when converted to RGB", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that the RGB method (required by the base class)
                // doesn't mess up the colors

                // ----------------------------------------------------------------
                // setup your test

                const unit = makeCssRgbColor(fixture.definition);

                // ----------------------------------------------------------------
                // perform the change

                const actualValue = unit.rgb;

                // ----------------------------------------------------------------
                // test the results

                expect(actualValue).to.eqls(unit);
            });
        });
    });

    // ================================================================
    //
    // OTHER FORMATS
    //
    // ----------------------------------------------------------------

    describe(".hex", () => {
        CSS_RGB_COLOR_FIXTURES.forEach((fixture) => {
            const colorConstructor = (fixture: ValidCssColor) => makeCssRgbColorFromRgbColorModel(
                fixture.name,
                fixture.definition,
                fixture.colorModels.rgb,
            );

            testCssColorConversionsToHex(colorConstructor, fixture);
        });
    });

    describe(".cssName", () => {
        CSS_RGB_COLOR_FIXTURES.forEach((fixture) => {
            const colorConstructor = (fixture: ValidCssColor) => makeCssRgbColorFromRgbColorModel(
                fixture.name,
                fixture.definition,
                fixture.colorModels.rgb,
            );
            testCssColorConversionsToCssNamedColor(colorConstructor, fixture);
        });
    });

    describe(".channelsData", () => {
        CSS_RGB_COLOR_FIXTURES.forEach((fixture) => {
            it("[fixture " + fixture.name + "] contains the RGBA channels as an object", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that .channelsData returns the channel data
                // that was used to build this color in the first place

                // ----------------------------------------------------------------
                // setup your test

                const unit = makeCssRgbColor(fixture.definition);
                const expectedValue = fixture.colorModels.rgb;

                // ----------------------------------------------------------------
                // perform the change

                const actualValue = unit.channelsData;

                // ----------------------------------------------------------------
                // test the results

                expect(actualValue).to.eql(expectedValue);
            });
        });
    });

    describe(".channelsTuple", () => {
        CSS_RGB_COLOR_FIXTURES.forEach((fixture) => {
            it("[fixture " + fixture.name + "] returns the RGB channels as an array", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that .channelsTuple() returns the channel data
                // that was used to build this color in the first place

                // ----------------------------------------------------------------
                // setup your test

                const unit = makeCssRgbColor(fixture.definition);

                const expectedValue = [
                    fixture.colorModels.rgb.red,
                    fixture.colorModels.rgb.green,
                    fixture.colorModels.rgb.blue,
                ];

                // ----------------------------------------------------------------
                // perform the change

                const actualValue = unit.channelsTuple;

                // ----------------------------------------------------------------
                // test the results

                expect(actualValue).to.eql(expectedValue);
            });
        });
    });

    // ================================================================
    //
    // COMPONENT VALUES
    //
    // ----------------------------------------------------------------

    describe(".red", () => {
        CSS_RGB_COLOR_FIXTURES.forEach((fixture) => {
            it("[fixture " + fixture.name + "] contains the R channel as a number", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that .red contains the channel data
                // that was used to build this color in the first place

                // ----------------------------------------------------------------
                // setup your test

                const unit = makeCssRgbColor(fixture.definition);

                // for readability
                const expectedValue = fixture.colorModels.rgb.red;

                // ----------------------------------------------------------------
                // perform the change

                const actualValue = unit.red;

                // ----------------------------------------------------------------
                // test the results

                expect(actualValue).to.eql(expectedValue);
            });
        });
    });

    describe(".green", () => {
        CSS_RGB_COLOR_FIXTURES.forEach((fixture) => {
            it("[fixture " + fixture.name + "] contains the G channel as a number", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that .green contains the channel data
                // that was used to build this color in the first place

                // ----------------------------------------------------------------
                // setup your test

                const unit = makeCssRgbColor(fixture.definition);

                // for readability
                const expectedValue = fixture.colorModels.rgb.green;

                // ----------------------------------------------------------------
                // perform the change

                const actualValue = unit.green;

                // ----------------------------------------------------------------
                // test the results

                expect(actualValue).to.eql(expectedValue);
            });
        });
    });

    describe(".blue", () => {
        CSS_RGB_COLOR_FIXTURES.forEach((fixture) => {
            it("[fixture " + fixture.name + "] contains the B channel as a number", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that .blue contains the channel data
                // that was used to build this color in the first place

                // ----------------------------------------------------------------
                // setup your test

                const unit = makeCssRgbColor(fixture.definition);

                // for readability
                const expectedValue = fixture.colorModels.rgb.blue;

                // ----------------------------------------------------------------
                // perform the change

                const actualValue = unit.blue;

                // ----------------------------------------------------------------
                // test the results

                expect(actualValue).to.eql(expectedValue);
            });
        });
    });

    describe(".alpha", () => {
        CSS_RGB_COLOR_FIXTURES.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] contains the A channel as a number", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that .alpha contains the channel data
                // that was used to build this color in the first place

                // ----------------------------------------------------------------
                // setup your test

                const unit = makeCssRgbColor(validFixture.definition);

                // for readability
                const expectedValue = validFixture.colorModels.rgb.alpha;

                // ----------------------------------------------------------------
                // perform the change

                const actualValue = unit.alpha;

                // ----------------------------------------------------------------
                // test the results

                expect(actualValue).to.eql(expectedValue);
            });
        });
    });
});