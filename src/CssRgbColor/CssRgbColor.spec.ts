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
import { CssRgbColor, makeCssRgbColorData, type CssHslColorData, type CssHwbColorData, type CssRgbColorData } from "@safelytyped/css-color";
import { ValidCssRgbColorData } from "./_fixtures/CssRgbColorData";
import { expect } from "chai";
import type { DataGuaranteeOptions } from "@safelytyped/core-types";

describe('CssRgbColor', () => {
    describe(".constructor", () => {
        ValidCssRgbColorData.forEach((validFixture) => {
            it("can be instantiated when given a valid CssRgbColorData input " + validFixture.name, () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that we can make an instance of CssRgbColor

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssRgbColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                )

                // ----------------------------------------------------------------
                // perform the change

                const actualValue = new CssRgbColor(inputValue);

                // ----------------------------------------------------------------
                // test the results

                expect(actualValue).to.be.instanceOf(CssRgbColor);
            });
        });
    });

    // ================================================================
    //
    // COLOR FORMAT CONVERSIONS
    //
    // ----------------------------------------------------------------

    describe(".rgb()", () => {
        ValidCssRgbColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns itself when converted to RGB", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that the RGB method (required by the base class)
                // doesn't mess up the colors

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssRgbColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssRgbColor(inputValue);

                // ----------------------------------------------------------------
                // perform the change

                const actualValue = unit.rgb();

                // ----------------------------------------------------------------
                // test the results

                expect(actualValue.name()).eqls(validFixture.name);
                expect(actualValue.definition()).eqls(validFixture.definition);
                expect(actualValue.channelsData()).eqls(validFixture.channels);
            });
        });

        it("supports functional operators", () => {
            // ----------------------------------------------------------------
            // explain your test

            // this test proves that the RGB method will run any functional
            // operators that are passed into it

            // ----------------------------------------------------------------
            // setup your test

            const inputValue = makeCssRgbColorData(
                "red",
                "#ff0000",
                {
                    red: 255,
                    green: 0,
                    blue: 0,
                    alpha: 1,
                }
            );
            const unit = new CssRgbColor(inputValue);

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
        ValidCssRgbColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] converts the original color to HSL format", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that the .hsl() method returns the HSL equivalent
                // of the current color

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssRgbColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssRgbColor(inputValue);

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

                const inputValue = makeCssRgbColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssRgbColor(inputValue);

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

                const inputValue = makeCssRgbColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssRgbColor(inputValue);

                // ----------------------------------------------------------------
                // perform the change

                const actualResult = unit.hsl();

                // ----------------------------------------------------------------
                // test the results

                expect(actualResult.definition()).to.eql(validFixture.definition);
            });
        });

        it("supports functional operators", () => {
            // ----------------------------------------------------------------
            // explain your test

            // this test proves that the HSL method will run any functional
            // operators that are passed into it

            // ----------------------------------------------------------------
            // setup your test

            const inputValue = makeCssRgbColorData(
                "red",
                "#ff0000",
                {
                    red: 255,
                    green: 0,
                    blue: 0,
                    alpha: 1,
                }
            );
            const unit = new CssRgbColor(inputValue);

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
        ValidCssRgbColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] converts the original color to HWB format", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that the .hwd() method returns the HSL equivalent
                // of the current color

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssRgbColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssRgbColor(inputValue);

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

                const inputValue = makeCssRgbColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssRgbColor(inputValue);

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

                const inputValue = makeCssRgbColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssRgbColor(inputValue);

                // ----------------------------------------------------------------
                // perform the change

                const actualResult = unit.hwb();

                // ----------------------------------------------------------------
                // test the results

                expect(actualResult.definition()).to.eql(validFixture.definition);
            });
        });

        it("supports functional operators", () => {
            // ----------------------------------------------------------------
            // explain your test

            // this test proves that the HWB method will run any functional
            // operators that are passed into it

            // ----------------------------------------------------------------
            // setup your test

            const inputValue = makeCssRgbColorData(
                "red",
                "#ff0000",
                {
                    red: 255,
                    green: 0,
                    blue: 0,
                    alpha: 1,
                }
            );
            const unit = new CssRgbColor(inputValue);

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
    // OTHER FORMATS
    //
    // ----------------------------------------------------------------

    describe(".channelsData()", () => {
        ValidCssRgbColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the RGBA channels as an object", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that .channelsData() returns the channel data
                // that was used to build this color in the first place

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssRgbColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssRgbColor(inputValue);

                // ----------------------------------------------------------------
                // perform the change

                const actualValue = unit.channelsData();

                // ----------------------------------------------------------------
                // test the results

                expect(actualValue).to.eql(validFixture.channels);
            });
        });
    });

    describe(".channelsTuple()", () => {
        ValidCssRgbColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the RGB channels as an array", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that .channelsTuple() returns the channel data
                // that was used to build this color in the first place

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssRgbColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssRgbColor(inputValue);

                const expectedValue = [
                    validFixture.channels.red,
                    validFixture.channels.green,
                    validFixture.channels.blue,
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
        ValidCssRgbColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the RGB channels as a CSS hex color", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that .hex() returns the correct CSS
                // hex color

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssRgbColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssRgbColor(inputValue);

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
        ValidCssRgbColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the CSS color name (if available)", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that .keyword() returns the correct CSS
                // color name (if this color maps to one)

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssRgbColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssRgbColor(inputValue);

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
        ValidCssRgbColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the color's definition", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that .toString() returns the original CSS
                // definition for this color, even after converting to other
                // formats

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssRgbColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssRgbColor(inputValue);

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
        ValidCssRgbColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the color's definition", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that the [Symbol.toPrimitive] auto convertor
                // converts the color to a number

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssRgbColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssRgbColor(inputValue);

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
        ValidCssRgbColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the color's definition", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that the [Symbol.toPrimitive] auto convertor
                // converts the color to a string

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssRgbColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssRgbColor(inputValue);

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
    // COMPONENT VALUES
    //
    // ----------------------------------------------------------------

    describe(".red()", () => {
        ValidCssRgbColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the R channel as a number", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that .red() returns the channel data
                // that was used to build this color in the first place

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssRgbColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssRgbColor(inputValue);

                // for readability
                const expectedValue = validFixture.channels.red;

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
        ValidCssRgbColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the G channel as a number", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that .green() returns the channel data
                // that was used to build this color in the first place

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssRgbColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssRgbColor(inputValue);

                // for readability
                const expectedValue = validFixture.channels.green;

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
        ValidCssRgbColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the B channel as a number", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that .blue() returns the channel data
                // that was used to build this color in the first place

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssRgbColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssRgbColor(inputValue);

                // for readability
                const expectedValue = validFixture.channels.blue;

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
        ValidCssRgbColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the A channel as a number", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that .alpha() returns the channel data
                // that was used to build this color in the first place

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssRgbColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssRgbColor(inputValue);

                // for readability
                const expectedValue = validFixture.channels.alpha;

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
    // PROPERTIES
    //
    // ----------------------------------------------------------------

    describe(".name()", () => {
        ValidCssRgbColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the named color", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that the .name() method returns what it
                // is supposed to

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssRgbColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssRgbColor(inputValue);

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
        ValidCssRgbColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the color's original definition", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that the .defintion() method returns what it
                // is supposed to

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssRgbColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssRgbColor(inputValue);

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