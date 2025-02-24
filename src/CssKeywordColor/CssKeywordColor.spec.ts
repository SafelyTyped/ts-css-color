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

import { CssKeywordColor, makeCssKeywordColorData } from "@safelytyped/css-color";
import { expect } from "chai";
import { describe, it } from "mocha";
import { ValidCssKeywordColorData } from "./_fixtures/CssKeywordColorDataFixtures";

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

            it("[fixture " + validFixture.name + "] preserves the original color name", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that the .rgb() method preserves the
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

                const actualResult = unit.rgb();

                // ----------------------------------------------------------------
                // test the results

                expect(actualResult.name()).to.eql(validFixture.name);
            });

            it("[fixture " + validFixture.name + "] preserves the original color definition", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that the .rgb() method preserves the original
                // color definition, and does not replace it with the RGB
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

                const actualResult = unit.rgb();

                // ----------------------------------------------------------------
                // test the results

                expect(actualResult.definition()).to.eql(validFixture.definition);
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
                expect(unit.name()).to.eql(validFixture.name);

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

    describe(".css()", () => {
        ValidCssKeywordColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the CSS definition as a keyword", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that the .css() method returns a CSS
                // named color - even though `.conversionModel()` returns
                // an RGB model

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssKeywordColorData(
                    validFixture.name,
                    validFixture.definition,
                );
                const unit = new CssKeywordColor(inputValue);

                // ----------------------------------------------------------------
                // perform the change

                const actualResult = unit.css();

                // ----------------------------------------------------------------
                // test the results

                expect(actualResult).to.eql(validFixture.definition);
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

                // this test proves that the .definition() method returns what it
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

    describe(".colorFormat()", () => {
        it("returns 'keyword'", () => {
            // ----------------------------------------------------------------
            // explain your test

            // this test proves that the .colorFormat() method returns the
            // expected result

            // ----------------------------------------------------------------
            // setup your test

            const inputValue = makeCssKeywordColorData(
                "red",
                "red",
            );
            const unit = new CssKeywordColor(inputValue);
            const expectedValue = "keyword";

            // ----------------------------------------------------------------
            // perform the change

            const actualValue = unit.colorFormat();

            // ----------------------------------------------------------------
            // test the results

            expect(actualValue).to.eql(expectedValue);
        });
    });

    describe(".colorSpace()", () => {
        it("returns 'sRGB'", () => {
            // ----------------------------------------------------------------
            // explain your test

            // this test proves that the .colorSpace() method returns the
            // expected result

            // ----------------------------------------------------------------
            // setup your test

            const inputValue = makeCssKeywordColorData(
                "red",
                "red",
            );
            const unit = new CssKeywordColor(inputValue);
            const expectedValue = "sRGB";

            // ----------------------------------------------------------------
            // perform the change

            const actualValue = unit.colorSpace();

            // ----------------------------------------------------------------
            // test the results

            expect(actualValue).to.eql(expectedValue);
        });
    });

    // ================================================================
    //
    // DERIVED COMPONENTS
    //
    // ----------------------------------------------------------------

     describe(".rgb().red()", () => {
        ValidCssKeywordColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the R channel as a number", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that .red() returns the channel data
                // that was used to build this color in the first place

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssKeywordColorData(
                    validFixture.name,
                    validFixture.definition,
                );
                const unit = new CssKeywordColor(inputValue);

                // for readability
                const expectedValue = validFixture.rgbChannels.red;

                // ----------------------------------------------------------------
                // perform the change

                const actualValue = unit.rgb().red();

                // ----------------------------------------------------------------
                // test the results

                expect(actualValue).to.eql(expectedValue);
            });
        });
    });

    describe(".rgb().green()", () => {
        ValidCssKeywordColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the G channel as a number", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that .green() returns the channel data
                // that was used to build this color in the first place

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssKeywordColorData(
                    validFixture.name,
                    validFixture.definition,
                );
                const unit = new CssKeywordColor(inputValue);

                // for readability
                const expectedValue = validFixture.rgbChannels.green;

                // ----------------------------------------------------------------
                // perform the change

                const actualValue = unit.rgb().green();

                // ----------------------------------------------------------------
                // test the results

                expect(actualValue).to.eql(expectedValue);
            });
        });
    });

    describe(".rgb().blue()", () => {
        ValidCssKeywordColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the B channel as a number", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that .blue() returns the channel data
                // that was used to build this color in the first place

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssKeywordColorData(
                    validFixture.name,
                    validFixture.definition,
                );
                const unit = new CssKeywordColor(inputValue);

                // for readability
                const expectedValue = validFixture.rgbChannels.blue;

                // ----------------------------------------------------------------
                // perform the change

                const actualValue = unit.rgb().blue();

                // ----------------------------------------------------------------
                // test the results

                expect(actualValue).to.eql(expectedValue);
            });
        });
    });

    describe(".rgb().alpha()", () => {
        ValidCssKeywordColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the A channel as a number", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that .alpha() returns the channel data
                // that was used to build this color in the first place

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssKeywordColorData(
                    validFixture.name,
                    validFixture.definition,
                );
                const unit = new CssKeywordColor(inputValue);

                // for readability
                const expectedValue = validFixture.rgbChannels.alpha;

                // ----------------------------------------------------------------
                // perform the change

                const actualValue = unit.rgb().alpha();

                // ----------------------------------------------------------------
                // test the results

                expect(actualValue).to.eql(expectedValue);
            });
        });
    });

    describe(".hsl().hue()", () => {
        ValidCssKeywordColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the H channel as a number", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that .hue() returns the H channel from
                // the HSL conversion

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssKeywordColorData(
                    validFixture.name,
                    validFixture.definition,
                );
                const unit = new CssKeywordColor(inputValue);

                // for readability
                const expectedValue = validFixture.hslChannels.hue;

                // ----------------------------------------------------------------
                // perform the change

                const actualValue = unit.hsl().hue();

                // ----------------------------------------------------------------
                // test the results

                expect(actualValue).to.eql(expectedValue);
            });
        });
    });

    describe(".hsl().saturation()", () => {
        ValidCssKeywordColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the S channel as a number", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that .saturation() returns the S channel from
                // the HSL conversion

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssKeywordColorData(
                    validFixture.name,
                    validFixture.definition,
                );
                const unit = new CssKeywordColor(inputValue);

                // for readability
                const expectedValue = validFixture.hslChannels.saturation;

                // ----------------------------------------------------------------
                // perform the change

                const actualValue = unit.hsl().saturation();

                // ----------------------------------------------------------------
                // test the results

                expect(actualValue).to.eql(expectedValue);
            });
        });
    });

    describe(".hsl().luminosity()", () => {
        ValidCssKeywordColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the L channel as a number", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that .luminosity() returns the L channel from
                // the HSL conversion

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssKeywordColorData(
                    validFixture.name,
                    validFixture.definition,
                );
                const unit = new CssKeywordColor(inputValue);

                // for readability
                const expectedValue = validFixture.hslChannels.luminosity;

                // ----------------------------------------------------------------
                // perform the change

                const actualValue = unit.hsl().luminosity();

                // ----------------------------------------------------------------
                // test the results

                expect(actualValue).to.eql(expectedValue);
            });
        });
    });

    describe(".hwb().hue()", () => {
        ValidCssKeywordColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the H channel as a number", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that .hue() returns the H channel from
                // the HSL conversion

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssKeywordColorData(
                    validFixture.name,
                    validFixture.definition,
                );
                const unit = new CssKeywordColor(inputValue);

                // for readability
                const expectedValue = validFixture.hwbChannels.hue;

                // ----------------------------------------------------------------
                // perform the change

                const actualValue = unit.hwb().hue();

                // ----------------------------------------------------------------
                // test the results

                expect(actualValue).to.eql(expectedValue);
            });
        });
    });

    describe(".hwb().whiteness()", () => {
        ValidCssKeywordColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the W channel as a number", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that .whiteness() returns the W channel from
                // the HWB conversion

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssKeywordColorData(
                    validFixture.name,
                    validFixture.definition,
                );
                const unit = new CssKeywordColor(inputValue);

                // for readability
                const expectedValue = validFixture.hwbChannels.whiteness;

                // ----------------------------------------------------------------
                // perform the change

                const actualValue = unit.hwb().whiteness();

                // ----------------------------------------------------------------
                // test the results

                expect(actualValue).to.eql(expectedValue);
            });
        });
    });

    describe(".hwb().blackness()", () => {
        ValidCssKeywordColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the B channel as a number", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that .blackness() returns the B channel from
                // the HWB conversion

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssKeywordColorData(
                    validFixture.name,
                    validFixture.definition,
                );
                const unit = new CssKeywordColor(inputValue);

                // for readability
                const expectedValue = validFixture.hwbChannels.blackness;

                // ----------------------------------------------------------------
                // perform the change

                const actualValue = unit.hwb().blackness();

                // ----------------------------------------------------------------
                // test the results

                expect(actualValue).to.eql(expectedValue);
            });
        });
    });
});