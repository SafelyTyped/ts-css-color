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

import { describe, it } from "mocha";
import { CssKeywordColor, makeCssKeywordColorData } from "@safelytyped/css-color";
import { ValidCssKeywordColorData } from "./_fixtures/CssKeywordColorDataFixtures";
import { expect } from "chai";

describe('CssKeywordColor', () => {
    describe(".constructor", () => {
        ValidCssKeywordColorData.forEach((validFixture) => {
            it("can be instantiated when given a valid CssKeywordColorData input " + validFixture.name, () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that we can make an instance of CssKeywordColor

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssKeywordColorData(
                    validFixture.name,
                    validFixture.definition,
                )

                // ----------------------------------------------------------------
                // perform the change

                const actualValue = new CssKeywordColor(inputValue);

                // ----------------------------------------------------------------
                // test the results

                expect(actualValue).to.be.instanceOf(CssKeywordColor);
            });
        });
    });

    // ================================================================
    //
    // COLOR FORMAT CONVERSIONS
    //
    // ----------------------------------------------------------------

    describe(".rgb()", () => {
        ValidCssKeywordColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns itself when converted to RGB", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that the RGB method (required by the base class)
                // doesn't mess up the colors

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssKeywordColorData(
                    validFixture.name,
                    validFixture.definition,
                );
                const unit = new CssKeywordColor(inputValue);

                // ----------------------------------------------------------------
                // perform the change

                const actualValue = unit.rgb();

                // ----------------------------------------------------------------
                // test the results

                expect(actualValue.name()).eqls(validFixture.name);
                expect(actualValue.definition()).eqls(validFixture.definition);
                expect(actualValue.channelsData()).eqls(validFixture.rgbChannels);
            });
        });
    });

    describe(".hsl()", () => {
        ValidCssKeywordColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] converts the original color to HSL format", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that the .hsl() method returns the HSL equivalent
                // of the current color

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssKeywordColorData(
                    validFixture.name,
                    validFixture.definition,
                );
                const unit = new CssKeywordColor(inputValue);

                // ----------------------------------------------------------------
                // perform the change

                const actualResult = unit.hsl();

                // ----------------------------------------------------------------
                // test the results

                expect(actualResult.channelsData()).to.eql(validFixture.hslChannels);
            });

            it("[fixture " + validFixture.name + "] preserves the original color name", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that the .hsl() method preserves the
                // original name of the test color

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssKeywordColorData(
                    validFixture.name,
                    validFixture.definition,
                );
                const unit = new CssKeywordColor(inputValue);

                // ----------------------------------------------------------------
                // perform the change

                const actualResult = unit.hsl();

                // ----------------------------------------------------------------
                // test the results

                expect(actualResult.name()).to.eql(validFixture.name);
            });

            it("[fixture " + validFixture.name + "] preserves the original color definition", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that the .hsl() method preserves the original
                // color definition, and does not replace it with the HSL
                // definition

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssKeywordColorData(
                    validFixture.name,
                    validFixture.definition,
                );
                const unit = new CssKeywordColor(inputValue);

                // ----------------------------------------------------------------
                // perform the change

                const actualResult = unit.hsl();

                // ----------------------------------------------------------------
                // test the results

                expect(actualResult.definition()).to.eql(validFixture.definition);
            });
        });
    });

    describe(".hwb()", () => {
        ValidCssKeywordColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] converts the original color to HWB format", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that the .hwd() method returns the HSL equivalent
                // of the current color

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssKeywordColorData(
                    validFixture.name,
                    validFixture.definition,
                );
                const unit = new CssKeywordColor(inputValue);

                // ----------------------------------------------------------------
                // perform the change

                const actualResult = unit.hwb();

                // ----------------------------------------------------------------
                // test the results

                expect(actualResult.channelsData()).to.eql(validFixture.hwbChannels);
            });

            it("[fixture " + validFixture.name + "] preserves the original color name", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that the .hwb() method preserves the
                // original name of the test color

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssKeywordColorData(
                    validFixture.name,
                    validFixture.definition,
                );
                const unit = new CssKeywordColor(inputValue);

                // ----------------------------------------------------------------
                // perform the change

                const actualResult = unit.hwb();

                // ----------------------------------------------------------------
                // test the results

                expect(actualResult.name()).to.eql(validFixture.name);
            });

            it("[fixture " + validFixture.name + "] preserves the original color definition", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that the .hwb() method preserves the original
                // color definition, and does not replace it with the HSL
                // definition

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssKeywordColorData(
                    validFixture.name,
                    validFixture.definition,
                );
                const unit = new CssKeywordColor(inputValue);

                // ----------------------------------------------------------------
                // perform the change

                const actualResult = unit.hwb();

                // ----------------------------------------------------------------
                // test the results

                expect(actualResult.definition()).to.eql(validFixture.definition);
            });
        });
    });

    // ================================================================
    //
    // OTHER FORMATS
    //
    // ----------------------------------------------------------------

    describe(".channelsData()", () => {
        ValidCssKeywordColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the RGBA channels as an object", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that .channelsData() returns the channel data
                // that was used to build this color in the first place

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssKeywordColorData(
                    validFixture.name,
                    validFixture.definition,
                );
                const unit = new CssKeywordColor(inputValue);

                // ----------------------------------------------------------------
                // perform the change

                const actualValue = unit.channelsData();

                // ----------------------------------------------------------------
                // test the results

                expect(actualValue).to.eql(validFixture.rgbChannels);
            });
        });
    });

    describe(".channelsTuple()", () => {
        ValidCssKeywordColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the RGB channels as an array", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that .channelsTuple() returns the channel data
                // that was used to build this color in the first place

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssKeywordColorData(
                    validFixture.name,
                    validFixture.definition,
                );
                const unit = new CssKeywordColor(inputValue);

                const expectedValue = [
                    validFixture.rgbChannels.red,
                    validFixture.rgbChannels.green,
                    validFixture.rgbChannels.blue,
                ];

                // ----------------------------------------------------------------
                // perform the change

                const actualValue = unit.channelsTuple();

                // ----------------------------------------------------------------
                // test the results

                expect(actualValue).to.eql(expectedValue);
            });
        });
    });

    describe(".hex()", () => {
        ValidCssKeywordColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the RGB channels as a CSS hex color", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that .hex() returns the correct CSS
                // hex color

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssKeywordColorData(
                    validFixture.name,
                    validFixture.definition,
                );
                const unit = new CssKeywordColor(inputValue);

                // for readability
                const expectedValue = validFixture.hex;

                // ----------------------------------------------------------------
                // perform the change

                const actualValue = unit.hex();

                // ----------------------------------------------------------------
                // test the results

                expect(actualValue).to.eql(expectedValue);
            });
        });
    });

    describe(".keyword()", () => {
        ValidCssKeywordColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the CSS color name (if available)", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that .keyword() returns the correct CSS
                // color name (if this color maps to one)

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssKeywordColorData(
                    validFixture.name,
                    validFixture.definition,
                );
                const unit = new CssKeywordColor(inputValue);

                // for readability
                const expectedValue = validFixture.namedColor;

                // ----------------------------------------------------------------
                // perform the change

                const actualValue = unit.keyword();

                // ----------------------------------------------------------------
                // test the results

                expect(actualValue).to.eql(expectedValue);
            });
        });
    });

    describe(".toString()", () => {
        ValidCssKeywordColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the color's definition", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that .toString() returns the original CSS
                // definition for this color, even after converting to other
                // formats

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssKeywordColorData(
                    validFixture.name,
                    validFixture.definition,
                );
                const unit = new CssKeywordColor(inputValue);

                // for readability
                const expectedValue = validFixture.definition;

                // ----------------------------------------------------------------
                // perform the change

                const actualRgbValue = unit.rgb().toString();
                const actualHslValue = unit.hsl().toString();
                const actualHwbValue = unit.rgb().toString();

                // ----------------------------------------------------------------
                // test the results

                expect(actualHslValue).to.eql(expectedValue);
                expect(actualHwbValue).to.eql(expectedValue);
                expect(actualRgbValue).to.eql(expectedValue);
            });
        });
    });

    describe("auto-conversion to number", () => {
        ValidCssKeywordColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the color's definition", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that the [Symbol.toPrimitive] auto convertor
                // converts the color to a number

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssKeywordColorData(
                    validFixture.name,
                    validFixture.definition,
                );
                const unit = new CssKeywordColor(inputValue);

                // we're expecting the base-10 equivalent of the color's
                // hex definition
                const expectedValue = parseInt(validFixture.hex.substring(1), 16);

                // ----------------------------------------------------------------
                // perform the change

                const actualValue = +unit;

                // ----------------------------------------------------------------
                // test the results

                expect(actualValue).to.eql(expectedValue);
            });
        });
    });

    describe("auto-conversion to string", () => {
        ValidCssKeywordColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the color's definition", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that the [Symbol.toPrimitive] auto convertor
                // converts the color to a string

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssKeywordColorData(
                    validFixture.name,
                    validFixture.definition,
                );
                const unit = new CssKeywordColor(inputValue);

                // for readability
                const expectedValue = validFixture.definition;

                // ----------------------------------------------------------------
                // perform the change

                const actualValue = "" + unit;

                // ----------------------------------------------------------------
                // test the results

                expect(actualValue).to.eql(expectedValue);
            });
        });
    });

    // ================================================================
    //
    // PROPERTIES
    //
    // ----------------------------------------------------------------

    describe(".name()", () => {
        ValidCssKeywordColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the named color", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that the .name() method returns what it
                // is supposed to

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssKeywordColorData(
                    validFixture.name,
                    validFixture.definition,
                );
                const unit = new CssKeywordColor(inputValue);

                // ----------------------------------------------------------------
                // perform the change

                const actualValue = unit.name();

                // ----------------------------------------------------------------
                // test the results

                expect(actualValue).to.eql(validFixture.name);
            });
        });
    });

    describe(".definition()", () => {
        ValidCssKeywordColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the color's original definition", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that the .defintion() method returns what it
                // is supposed to

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssKeywordColorData(
                    validFixture.name,
                    validFixture.definition,
                );
                const unit = new CssKeywordColor(inputValue);

                // ----------------------------------------------------------------
                // perform the change

                const actualValue = unit.definition();

                // ----------------------------------------------------------------
                // test the results

                expect(actualValue).to.eql(validFixture.definition);
            });
        });
    });
});