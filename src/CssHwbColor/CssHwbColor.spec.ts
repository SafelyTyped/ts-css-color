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

import { makeCssHwbColor, makeCssHwbColorFromHwbColorModel, type CssColor } from "@safelytyped/css-color";
import { expect } from "chai";
import { describe, it } from "mocha";
import { type ValidCssColor } from "../_fixtures/CSS_COLOR_FIXTURES";
import { CSS_HWB_COLOR_FIXTURES } from "../_fixtures/CSS_HWB_COLOR_FIXTURES";
import { testCssColorConversionsToCssNamedColor, testCssColorConversionsToHex, testCssColorConversionsToTarget } from "../CssColor/ColorConversions.test";

describe("CssHwbColor", () => {
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
        CSS_HWB_COLOR_FIXTURES.forEach((fixture) => {
            const colorConstructor = (fixture: ValidCssColor) => makeCssHwbColorFromHwbColorModel(
                fixture.name,
                fixture.definition,
                fixture.colorModels.hwb,
            );

            testCssColorConversionsToTarget(colorConstructor, fixture, "cmyk", (c: CssColor) => c.cmyk, fixture.colorModels.cmyk);
        });
    });

    describe(".hsl", () => {
        CSS_HWB_COLOR_FIXTURES.forEach((fixture) => {
            const colorConstructor = (fixture: ValidCssColor) => makeCssHwbColorFromHwbColorModel(
                fixture.name,
                fixture.definition,
                fixture.colorModels.hwb,
            );
            testCssColorConversionsToTarget(colorConstructor, fixture, "hsl", (c: CssColor) => c.hsl, fixture.colorModels.hsl);
        });
    });

    describe(".hsv", () => {
        CSS_HWB_COLOR_FIXTURES.forEach((fixture) => {
            const colorConstructor = (fixture: ValidCssColor) => makeCssHwbColorFromHwbColorModel(
                fixture.name,
                fixture.definition,
                fixture.colorModels.hwb,
            );
            testCssColorConversionsToTarget(colorConstructor, fixture, "hsv", (c: CssColor) => c.hsv, fixture.colorModels.hsv);
        });
    });

    describe(".hwb", () => {
        CSS_HWB_COLOR_FIXTURES.forEach((fixture) => {
            const colorConstructor = (fixture: ValidCssColor) => makeCssHwbColorFromHwbColorModel(
                fixture.name,
                fixture.definition,
                fixture.colorModels.hwb,
            );
            testCssColorConversionsToTarget(colorConstructor, fixture, "hwb", (c: CssColor) => c.hwb, fixture.colorModels.hwb);

            it("[fixture " + fixture.name + "] returns itself when converted to HWB", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that the HSV method (required by the base class)
                // doesn't mess up the colors

                // ----------------------------------------------------------------
                // setup your test

                const unit = makeCssHwbColor(fixture.definition);

                // ----------------------------------------------------------------
                // perform the change

                const actualValue = unit.hwb;

                // ----------------------------------------------------------------
                // test the results

                expect(actualValue).to.eqls(unit);
            });
        });
    });

    describe(".oklch", () => {
        CSS_HWB_COLOR_FIXTURES.forEach((fixture) => {
            const colorConstructor = (fixture: ValidCssColor) => makeCssHwbColorFromHwbColorModel(
                fixture.name,
                fixture.definition,
                fixture.colorModels.hwb,
            );
            testCssColorConversionsToTarget(colorConstructor, fixture, "oklch", (c: CssColor) => c.oklch, fixture.colorModels.oklch);
        });
    });

    describe(".rgb", () => {
        CSS_HWB_COLOR_FIXTURES.forEach((fixture) => {
            const colorConstructor = (fixture: ValidCssColor) => makeCssHwbColorFromHwbColorModel(
                fixture.name,
                fixture.definition,
                fixture.colorModels.hwb,
            );
            testCssColorConversionsToTarget(colorConstructor, fixture, "rgb", (c: CssColor) => c.rgb, fixture.colorModels.rgb);
        });
    });

    // ================================================================
    //
    // OTHER FORMATS
    //
    // ----------------------------------------------------------------

    describe(".hex", () => {
        CSS_HWB_COLOR_FIXTURES.forEach((fixture) => {
            const colorConstructor = (fixture: ValidCssColor) => makeCssHwbColorFromHwbColorModel(
                fixture.name,
                fixture.definition,
                fixture.colorModels.hwb,
            );

            testCssColorConversionsToHex(colorConstructor, fixture);
        });
    });

    describe(".keyword", () => {
        CSS_HWB_COLOR_FIXTURES.forEach((fixture) => {
            const colorConstructor = (fixture: ValidCssColor) => makeCssHwbColorFromHwbColorModel(
                fixture.name,
                fixture.definition,
                fixture.colorModels.hwb,
            );

            testCssColorConversionsToCssNamedColor(colorConstructor, fixture);
        });
    });

    describe(".channelsData", () => {
        CSS_HWB_COLOR_FIXTURES.forEach((fixture) => {
            it("[fixture " + fixture.name + "] contains the HWB channels as an object", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that .channelsData returns the channel data
                // that was used to build this color in the first place

                // ----------------------------------------------------------------
                // setup your test

                const unit = makeCssHwbColor(fixture.definition);
                const expectedValue = fixture.colorModels.hwb;

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
        CSS_HWB_COLOR_FIXTURES.forEach((fixture) => {
            it("[fixture " + fixture.name + "] returns the HWB channels as an array", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that .channelsTuple() returns the channel data
                // that was used to build this color in the first place

                // ----------------------------------------------------------------
                // setup your test

                const unit = makeCssHwbColor(fixture.definition);

                const expectedValue = [
                    fixture.colorModels.hwb.hue,
                    fixture.colorModels.hwb.whiteness,
                    fixture.colorModels.hwb.blackness,
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

    describe(".hue", () => {
        CSS_HWB_COLOR_FIXTURES.forEach((fixture) => {
            it("[fixture " + fixture.name + "] contains the H channel as a number", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that .hue contains the channel data
                // that was used to build this color in the first place

                // ----------------------------------------------------------------
                // setup your test

                const unit = makeCssHwbColor(fixture.definition);

                // for readability
                const expectedValue = fixture.colorModels.hwb.hue;

                // ----------------------------------------------------------------
                // perform the change

                const actualValue = unit.hue;

                // ----------------------------------------------------------------
                // test the results

                expect(actualValue).to.eql(expectedValue);
            });
        });
    });

    describe(".whiteness", () => {
        CSS_HWB_COLOR_FIXTURES.forEach((fixture) => {
            it("[fixture " + fixture.name + "] contains the W channel as a number", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that .whiteness contains the channel data
                // that was used to build this color in the first place

                // ----------------------------------------------------------------
                // setup your test

                const unit = makeCssHwbColor(fixture.definition);

                // for readability
                const expectedValue = fixture.colorModels.hwb.whiteness;

                // ----------------------------------------------------------------
                // perform the change

                const actualValue = unit.whiteness;

                // ----------------------------------------------------------------
                // test the results

                expect(actualValue).to.eql(expectedValue);
            });
        });
    });

    describe(".blackness", () => {
        CSS_HWB_COLOR_FIXTURES.forEach((fixture) => {
            it("[fixture " + fixture.name + "] contains the B channel as a number", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that .blackness contains the channel data
                // that was used to build this color in the first place

                // ----------------------------------------------------------------
                // setup your test

                const unit = makeCssHwbColor(fixture.definition);

                // for readability
                const expectedValue = fixture.colorModels.hwb.blackness;

                // ----------------------------------------------------------------
                // perform the change

                const actualValue = unit.blackness;

                // ----------------------------------------------------------------
                // test the results

                expect(actualValue).to.eql(expectedValue);
            });
        });
    });

    describe(".alpha", () => {
        CSS_HWB_COLOR_FIXTURES.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] contains the A channel as a number", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that .alpha contains the channel data
                // that was used to build this color in the first place

                // ----------------------------------------------------------------
                // setup your test

                const unit = makeCssHwbColor(validFixture.definition);

                // for readability
                const expectedValue = validFixture.colorModels.hwb.alpha;

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