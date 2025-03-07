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

import { makeCssHexColor, type AnyCssColor } from "@safelytyped/css-color";
import { expect } from "chai";
import { describe, it } from "mocha";
import { type ValidCssColor } from "../_fixtures/CSS_COLOR_FIXTURES";
import { CSS_HEX_COLOR_FIXTURES } from "../_fixtures/CSS_HEX_COLOR_FIXTURES";
import { testCssColorConversionsToTarget } from "../CssColor/ColorConversions.test";
import { makeCssHexColorFromHexColorModel } from "./makeCssHexColorFromHexColorModel";

describe("CssHexColor", () => {
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
        CSS_HEX_COLOR_FIXTURES.forEach((fixture) => {
            const colorConstructor = (fixture: ValidCssColor) => makeCssHexColorFromHexColorModel(
                fixture.name,
                fixture.definition,
                fixture.colorModels.hex,
            );

            testCssColorConversionsToTarget(colorConstructor, fixture, "cmyk", (c: AnyCssColor) => c.cmyk, fixture.colorModels.cmyk);
        });
    });

    describe(".hsl", () => {
        CSS_HEX_COLOR_FIXTURES.forEach((fixture) => {
            const colorConstructor = (fixture: ValidCssColor) => makeCssHexColorFromHexColorModel(
                fixture.name,
                fixture.definition,
                fixture.colorModels.hex,
            );
            testCssColorConversionsToTarget(colorConstructor, fixture, "hsl", (c: AnyCssColor) => c.hsl, fixture.colorModels.hsl);
        });
    });

    describe(".hsv", () => {
        CSS_HEX_COLOR_FIXTURES.forEach((fixture) => {
            const colorConstructor = (fixture: ValidCssColor) => makeCssHexColorFromHexColorModel(
                fixture.name,
                fixture.definition,
                fixture.colorModels.hex,
            );
            testCssColorConversionsToTarget(colorConstructor, fixture, "hsv", (c: AnyCssColor) => c.hsv, fixture.colorModels.hsv);
        });
    });

    describe(".hwb", () => {
        CSS_HEX_COLOR_FIXTURES.forEach((fixture) => {
            const colorConstructor = (fixture: ValidCssColor) => makeCssHexColorFromHexColorModel(
                fixture.name,
                fixture.definition,
                fixture.colorModels.hex,
            );
            testCssColorConversionsToTarget(colorConstructor, fixture, "hwb", (c: AnyCssColor) => c.hwb, fixture.colorModels.hwb);
        });
    });

    describe(".oklch", () => {
        CSS_HEX_COLOR_FIXTURES.forEach((fixture) => {
            const colorConstructor = (fixture: ValidCssColor) => makeCssHexColorFromHexColorModel(
                fixture.name,
                fixture.definition,
                fixture.colorModels.hex,
            );
            testCssColorConversionsToTarget(colorConstructor, fixture, "oklch", (c: AnyCssColor) => c.oklch, fixture.colorModels.oklch);
        });
    });

    describe(".rgb", () => {
        CSS_HEX_COLOR_FIXTURES.forEach((fixture) => {
            const colorConstructor = (fixture: ValidCssColor) => makeCssHexColorFromHexColorModel(
                fixture.name,
                fixture.definition,
                fixture.colorModels.hex,
            );
            testCssColorConversionsToTarget(colorConstructor, fixture, "rgb", (c: AnyCssColor) => c.rgb, fixture.colorModels.rgb);
        });
    });

    // ================================================================
    //
    // OTHER FORMATS
    //
    // ----------------------------------------------------------------

    describe(".channelsData", () => {
        CSS_HEX_COLOR_FIXTURES.forEach((fixture) => {
            it("[fixture " + fixture.name + "] contains the HEX channels as an object", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that .channelsData returns the channel data
                // that was used to build this color in the first place

                // ----------------------------------------------------------------
                // setup your test

                const unit = makeCssHexColor(fixture.definition);
                const expectedValue = fixture.colorModels.hex;

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
        CSS_HEX_COLOR_FIXTURES.forEach((fixture) => {
            it("[fixture " + fixture.name + "] returns the HEX channels as an array", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that .channelsTuple() returns the channel data
                // that was used to build this color in the first place

                // ----------------------------------------------------------------
                // setup your test

                const unit = makeCssHexColor(fixture.definition);

                const expectedValue = [
                    fixture.colorModels.hex.hex,
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

    describe(".hex", () => {
        CSS_HEX_COLOR_FIXTURES.forEach((fixture) => {
            it("[fixture " + fixture.name + "] contains the hex representation of this color", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that .hex contains the channel data
                // that was used to build this color in the first place

                // ----------------------------------------------------------------
                // setup your test

                const unit = makeCssHexColor(fixture.definition);

                // for readability
                const expectedValue = fixture.colorModels.hex.hex;

                // ----------------------------------------------------------------
                // perform the change

                const actualValue = unit.hex;

                // ----------------------------------------------------------------
                // test the results

                expect(actualValue).to.eql(expectedValue);
            });
        });
    });
});