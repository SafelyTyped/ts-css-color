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

import type { DataGuaranteeOptions } from "@safelytyped/core-types";
import { CssHexColor, makeCssHexColorData, makeCssHexColorDefinition, type CssHslColorData, type CssHwbColorData, type CssRgbColorData } from "@safelytyped/css-color";
import { expect } from "chai";
import { describe, it } from "mocha";
import { CSS_HSL_CONVERSIONS } from "../CssHslColor/CSS_HSL_CONVERSIONS";
import { CSS_HWB_CONVERSIONS } from "../CssHwbColor/CSS_HWB_CONVERSIONS";
import { CSS_RGB_CONVERSIONS } from "../CssRgbColor/CSS_RGB_CONVERSIONS";
import { ValidCssHexColorData } from "./_fixtures/CssHexColorDataFixtures";

describe('CssHexColor', () => {
    describe(".constructor", () => {
        ValidCssHexColorData.forEach((validFixture) => {
            it("can be instantiated when given a valid CssHexColorData input " + validFixture.name, () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that we can make an instance of CssHexColor

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssHexColorData(
                    validFixture.name,
                    validFixture.definition,
                    makeCssHexColorDefinition(validFixture.hex),
                )

                // ----------------------------------------------------------------
                // perform the change

                const actualValue = new CssHexColor(inputValue);

                // ----------------------------------------------------------------
                // test the results

                expect(actualValue).to.be.instanceOf(CssHexColor);
            });
        });
    });

    // ================================================================
    //
    // COLOR FORMAT CONVERSIONS
    //
    // ----------------------------------------------------------------

    describe(".rgb()", () => {
        ValidCssHexColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] converts the original color to RGB format", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that the RGB method (required by the base class)
                // doesn't mess up the colors

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssHexColorData(
                    validFixture.name,
                    validFixture.definition,
                    makeCssHexColorDefinition(validFixture.hex),
                );
                const unit = new CssHexColor(inputValue);

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

                const inputValue = makeCssHexColorData(
                    validFixture.name,
                    validFixture.definition,
                    makeCssHexColorDefinition(validFixture.hex),
                );
                const unit = new CssHexColor(inputValue);

                // ----------------------------------------------------------------
                // perform the change

                const actualResult = unit.rgb();

                // ----------------------------------------------------------------
                // test the results

                expect(actualResult.name()).to.eql(validFixture.name);
            });

            it("[fixture " + validFixture.name + "] preserves the original color definition", () => {
                // -----------------------------------------------------------
                // explain your test

                // this test proves that the .rgb() method preserves the
                // original color definition, and does not replace it with the
                // RGB definition
                // -----------------------------------------------------------
                // setup your test

                const inputValue = makeCssHexColorData(
                    validFixture.name,
                    validFixture.definition,
                    makeCssHexColorDefinition(validFixture.hex),
                );
                const unit = new CssHexColor(inputValue);

                // ----------------------------------------------------------------
                // perform the change

                const actualResult = unit.rgb();

                // ----------------------------------------------------------------
                // test the results

                expect(actualResult.definition()).to.eql(validFixture.definition);
            });
        });

        it("caches static conversions", () => {
            // ----------------------------------------------------------------
            // explain your test

            // this test proves that the RGB method will cache any static
            // conversions (to speed up repeated conversions)

            // ----------------------------------------------------------------
            // setup your test

            const inputValue = makeCssHexColorData(
                "red",
                "#ff0000",
                makeCssHexColorDefinition("#ff0000"),
            );
            const unit = new CssHexColor(inputValue);

            // make sure that the cache is empty
            CSS_RGB_CONVERSIONS.reset();

            // ----------------------------------------------------------------
            // perform the change

            const actualValue = unit.rgb();

            // ----------------------------------------------------------------
            // test the results

            expect(CSS_RGB_CONVERSIONS.has(actualValue)).to.be.true;
        });

        it("supports functional operators", () => {
            // ----------------------------------------------------------------
            // explain your test

            // this test proves that the RGB method will run any functional
            // operators that are passed into it

            // ----------------------------------------------------------------
            // setup your test

            const inputValue = makeCssHexColorData(
                "red",
                "#ff0000",
                makeCssHexColorDefinition("#ff0000"),
            );
            const unit = new CssHexColor(inputValue);

            const f1 = (x: CssRgbColorData, o?: DataGuaranteeOptions) => { x.name = 'f1'; return x; };
            const f2 = (x: CssRgbColorData, o?: DataGuaranteeOptions) => { x.definition = 'f2'; return x; }

            // ----------------------------------------------------------------
            // perform the change

            const actualValue = unit.rgb({}, f1, f2);

            // ----------------------------------------------------------------
            // test the results

            expect(actualValue.name()).eqls('f1');
            expect(actualValue.definition()).eqls('f2');

            // make sure the original color object has not been altered
            expect(unit.name()).eqls('red');
            expect(unit.definition()).eqls('#ff0000');
        });
    });

    describe(".hsl()", () => {
        ValidCssHexColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] converts the original color to HSL format", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that the .hsl() method returns the HSL equivalent
                // of the current color

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssHexColorData(
                    validFixture.name,
                    validFixture.definition,
                    makeCssHexColorDefinition(validFixture.hex),
                );
                const unit = new CssHexColor(inputValue);

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

                const inputValue = makeCssHexColorData(
                    validFixture.name,
                    validFixture.definition,
                    makeCssHexColorDefinition(validFixture.hex),
                );
                const unit = new CssHexColor(inputValue);

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

                const inputValue = makeCssHexColorData(
                    validFixture.name,
                    validFixture.definition,
                    makeCssHexColorDefinition(validFixture.hex),
                );
                const unit = new CssHexColor(inputValue);

                // ----------------------------------------------------------------
                // perform the change

                const actualResult = unit.hsl();

                // ----------------------------------------------------------------
                // test the results

                expect(actualResult.definition()).to.eql(validFixture.definition);
            });
        });

        it("caches static conversions", () => {
            // ----------------------------------------------------------------
            // explain your test

            // this test proves that the HSL method will cache any static
            // conversions (to speed up repeated conversions)

            // ----------------------------------------------------------------
            // setup your test

            const inputValue = makeCssHexColorData(
                "red",
                "#ff0000",
                makeCssHexColorDefinition("#ff0000"),
            );
            const unit = new CssHexColor(inputValue);

            // make sure that the cache is empty
            CSS_HSL_CONVERSIONS.reset();

            // ----------------------------------------------------------------
            // perform the change

            const actualValue = unit.hsl();

            // ----------------------------------------------------------------
            // test the results

            expect(CSS_HSL_CONVERSIONS.has(actualValue)).to.be.true;
        });

        it("supports functional operators", () => {
            // ----------------------------------------------------------------
            // explain your test

            // this test proves that the HSL method will run any functional
            // operators that are passed into it

            // ----------------------------------------------------------------
            // setup your test

            const inputValue = makeCssHexColorData(
                "red",
                "#ff0000",
                makeCssHexColorDefinition("#ff0000"),
            );
            const unit = new CssHexColor(inputValue);

            const f1 = (x: CssHslColorData, o?: DataGuaranteeOptions) => { x.name = 'f1'; return x; };
            const f2 = (x: CssHslColorData, o?: DataGuaranteeOptions) => { x.definition = 'f2'; return x; }

            // ----------------------------------------------------------------
            // perform the change

            const actualValue = unit.hsl({}, f1, f2);

            // ----------------------------------------------------------------
            // test the results

            expect(actualValue.name()).eqls('f1');
            expect(actualValue.definition()).eqls('f2');

            // make sure the original color object has not been altered
            expect(unit.name()).eqls('red');
            expect(unit.definition()).eqls('#ff0000');
        });
    });

    describe(".hwb()", () => {
        ValidCssHexColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] converts the original color to HWB format", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that the .hwd() method returns the HSL equivalent
                // of the current color

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssHexColorData(
                    validFixture.name,
                    validFixture.definition,
                    makeCssHexColorDefinition(validFixture.hex),
                );
                const unit = new CssHexColor(inputValue);

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

                const inputValue = makeCssHexColorData(
                    validFixture.name,
                    validFixture.definition,
                    makeCssHexColorDefinition(validFixture.hex),
                );
                const unit = new CssHexColor(inputValue);

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

                const inputValue = makeCssHexColorData(
                    validFixture.name,
                    validFixture.definition,
                    makeCssHexColorDefinition(validFixture.hex),
                );
                const unit = new CssHexColor(inputValue);

                // ----------------------------------------------------------------
                // perform the change

                const actualResult = unit.hwb();

                // ----------------------------------------------------------------
                // test the results

                expect(actualResult.definition()).to.eql(validFixture.definition);
            });

        });

        it("caches static conversions", () => {
            // ----------------------------------------------------------------
            // explain your test

            // this test proves that the HWB method will cache any static
            // conversions (to speed up repeated conversions)

            // ----------------------------------------------------------------
            // setup your test

            const inputValue = makeCssHexColorData(
                "red",
                "#ff0000",
                makeCssHexColorDefinition("#ff0000"),
            );
            const unit = new CssHexColor(inputValue);

            // make sure that the cache is empty
            CSS_HWB_CONVERSIONS.reset();

            // ----------------------------------------------------------------
            // perform the change

            const actualValue = unit.hwb();

            // ----------------------------------------------------------------
            // test the results

            expect(CSS_HWB_CONVERSIONS.has(actualValue)).to.be.true;
        });

        it("supports functional operators", () => {
            // ----------------------------------------------------------------
            // explain your test

            // this test proves that the HWB method will run any functional
            // operators that are passed into it

            // ----------------------------------------------------------------
            // setup your test

            const inputValue = makeCssHexColorData(
                "red",
                "#ff0000",
                makeCssHexColorDefinition("#ff0000"),
            );
            const unit = new CssHexColor(inputValue);

            const f1 = (x: CssHwbColorData, o?: DataGuaranteeOptions) => { x.name = 'f1'; return x; };
            const f2 = (x: CssHwbColorData, o?: DataGuaranteeOptions) => { x.definition = 'f2'; return x; }

            // ----------------------------------------------------------------
            // perform the change

            const actualValue = unit.hwb({}, f1, f2);

            // ----------------------------------------------------------------
            // test the results

            expect(actualValue.name()).eqls('f1');
            expect(actualValue.definition()).eqls('f2');

            // make sure the original color object has not been altered
            expect(unit.name()).eqls('red');
            expect(unit.definition()).eqls('#ff0000');
        });
    });

    // ================================================================
    //
    // COMPONENT VALUES
    //
    // ----------------------------------------------------------------

    describe(".red()", () => {
        ValidCssHexColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the R channel as a number", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that .red() returns the channel data
                // that was used to build this color in the first place

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssHexColorData(
                    validFixture.name,
                    validFixture.definition,
                    makeCssHexColorDefinition(validFixture.hex),
                );
                const unit = new CssHexColor(inputValue);

                // for readability
                const expectedValue = validFixture.rgbChannels.red;

                // ----------------------------------------------------------------
                // perform the change

                const actualValue = unit.red();

                // ----------------------------------------------------------------
                // test the results

                expect(actualValue).to.eql(expectedValue);
            });
        });
    });

    describe(".green()", () => {
        ValidCssHexColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the G channel as a number", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that .green() returns the channel data
                // that was used to build this color in the first place

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssHexColorData(
                    validFixture.name,
                    validFixture.definition,
                    makeCssHexColorDefinition(validFixture.hex),
                );
                const unit = new CssHexColor(inputValue);

                // for readability
                const expectedValue = validFixture.rgbChannels.green;

                // ----------------------------------------------------------------
                // perform the change

                const actualValue = unit.green();

                // ----------------------------------------------------------------
                // test the results

                expect(actualValue).to.eql(expectedValue);
            });
        });
    });

    describe(".blue()", () => {
        ValidCssHexColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the B channel as a number", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that .blue() returns the channel data
                // that was used to build this color in the first place

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssHexColorData(
                    validFixture.name,
                    validFixture.definition,
                    makeCssHexColorDefinition(validFixture.hex),
                );
                const unit = new CssHexColor(inputValue);

                // for readability
                const expectedValue = validFixture.rgbChannels.blue;

                // ----------------------------------------------------------------
                // perform the change

                const actualValue = unit.blue();

                // ----------------------------------------------------------------
                // test the results

                expect(actualValue).to.eql(expectedValue);
            });
        });
    });

    describe(".alpha()", () => {
        ValidCssHexColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the A channel as a number", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that .alpha() returns the channel data
                // that was used to build this color in the first place

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssHexColorData(
                    validFixture.name,
                    validFixture.definition,
                    makeCssHexColorDefinition(validFixture.hex),
                );
                const unit = new CssHexColor(inputValue);

                // for readability
                const expectedValue = validFixture.rgbChannels.alpha;

                // ----------------------------------------------------------------
                // perform the change

                const actualValue = unit.alpha();

                // ----------------------------------------------------------------
                // test the results

                expect(actualValue).to.eql(expectedValue);
            });
        });
    });

    // ================================================================
    //
    // OTHER FORMATS
    //
    // ----------------------------------------------------------------

    describe(".channelsData()", () => {
        ValidCssHexColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the RGBA channels as an object", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that .channelsData() returns the channel data
                // that was used to build this color in the first place

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssHexColorData(
                    validFixture.name,
                    validFixture.definition,
                    makeCssHexColorDefinition(validFixture.hex),
                );
                const unit = new CssHexColor(inputValue);

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
        ValidCssHexColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the RGB channels as an array", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that .channelsTuple() returns the channel data
                // that was used to build this color in the first place

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssHexColorData(
                    validFixture.name,
                    validFixture.definition,
                    makeCssHexColorDefinition(validFixture.hex),
                );
                const unit = new CssHexColor(inputValue);

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
        ValidCssHexColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the RGB channels as a CSS hex color", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that .hex() returns the correct CSS
                // hex color

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssHexColorData(
                    validFixture.name,
                    validFixture.definition,
                    makeCssHexColorDefinition(validFixture.hex),
                );
                const unit = new CssHexColor(inputValue);

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
        ValidCssHexColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the CSS color name (if available)", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that .keyword() returns the correct CSS
                // color name (if this color maps to one)

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssHexColorData(
                    validFixture.name,
                    validFixture.definition,
                    makeCssHexColorDefinition(validFixture.hex),
                );
                const unit = new CssHexColor(inputValue);

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
        ValidCssHexColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the color's definition", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that .toString() returns the original CSS
                // definition for this color, even after converting to other
                // formats

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssHexColorData(
                    validFixture.name,
                    validFixture.definition,
                    makeCssHexColorDefinition(validFixture.hex),
                );
                const unit = new CssHexColor(inputValue);

                // for readability
                const expectedValue = validFixture.definition;

                // ----------------------------------------------------------------
                // perform the change

                const actualRgbValue = unit.rgb().toString();
                const actualHslValue = unit.hsl().toString();
                const actualHwbValue = unit.rgb().toString();

                // ----------------------------------------------------------------
                // test the results

                expect(actualRgbValue).to.eql(expectedValue);
                expect(actualHslValue).to.eql(expectedValue);
                expect(actualHwbValue).to.eql(expectedValue);
            });
        });
    });

    describe("auto-conversion to number", () => {
        ValidCssHexColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the color's definition", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that the [Symbol.toPrimitive] auto convertor
                // converts the color to a number

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssHexColorData(
                    validFixture.name,
                    validFixture.definition,
                    makeCssHexColorDefinition(validFixture.hex),
                );
                const unit = new CssHexColor(inputValue);

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
        ValidCssHexColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the color's definition", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that the [Symbol.toPrimitive] auto convertor
                // converts the color to a string

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssHexColorData(
                    validFixture.name,
                    validFixture.definition,
                    makeCssHexColorDefinition(validFixture.hex),
                );
                const unit = new CssHexColor(inputValue);

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
        ValidCssHexColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the CSS definition in HEX format", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that the .css() method returns a CSS
                // HEX result - even though `.conversionModel()` returns
                // an RGB model

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssHexColorData(
                    validFixture.name,
                    validFixture.definition,
                    makeCssHexColorDefinition(validFixture.hex),
                );
                const unit = new CssHexColor(inputValue);

                // ----------------------------------------------------------------
                // perform the change

                const actualResult = unit.css();

                // ----------------------------------------------------------------
                // test the results

                expect(actualResult).to.eql(validFixture.hex);
            });
        });
    });

    // ================================================================
    //
    // PROPERTIES
    //
    // ----------------------------------------------------------------

    describe(".name()", () => {
        ValidCssHexColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the named color", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that the .name() method returns what it
                // is supposed to

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssHexColorData(
                    validFixture.name,
                    validFixture.definition,
                    makeCssHexColorDefinition(validFixture.hex),
                );
                const unit = new CssHexColor(inputValue);

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
        ValidCssHexColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the color's original definition", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that the .defintion() method returns what it
                // is supposed to

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssHexColorData(
                    validFixture.name,
                    validFixture.definition,
                    makeCssHexColorDefinition(validFixture.hex),
                );
                const unit = new CssHexColor(inputValue);

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
        it("returns 'hex'", () => {
            // ----------------------------------------------------------------
            // explain your test

            // this test proves that the .colorFormat() method returns the
            // expected result

            // ----------------------------------------------------------------
            // setup your test

            const inputValue = makeCssHexColorData(
                "red",
                "#ff0000",
                makeCssHexColorDefinition("#ff0000"),
            );
            const unit = new CssHexColor(inputValue);

            const expectedValue = "hex";

            // ----------------------------------------------------------------
            // perform the change

            const actualValue = unit.colorFormat();

            // ----------------------------------------------------------------
            // test the results

            expect(actualValue).to.eql(expectedValue);
        });

    });
});