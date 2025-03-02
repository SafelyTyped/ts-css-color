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
import { CssCmykColor, makeCssCmykColorData, makeCssRgbColor, type CssCmykColorData, type CssHsvColorData, type CssHwbColorData } from "@safelytyped/css-color";
import { expect } from "chai";
import { describe, it } from "mocha";
import type { SupportedCssColorSpace } from "../CssColorspace/SupportedCssColorSpace.type";
import { CSS_HSL_CONVERSIONS } from "../CssHslColor/CSS_HSL_CONVERSIONS";
import { CSS_HSV_CONVERSIONS } from "../CssHsvColor/CSS_HSV_CONVERSIONS";
import { CSS_HWB_CONVERSIONS } from "../CssHwbColor/CSS_HWB_CONVERSIONS";
import { ValidCssCmykColorData } from "./_fixtures/CssCmykColorData";
import { CSS_CMYK_CONVERSIONS } from "./CSS_CMYK_CONVERSIONS";

describe('CssCmykColor', () => {
    describe(".constructor", () => {
        ValidCssCmykColorData.forEach((validFixture) => {
            it("can be instantiated when given a valid CssCmykColorData input " + validFixture.name, () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that we can make an instance of CssCmykColor

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssCmykColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                )

                // ----------------------------------------------------------------
                // perform the change

                const actualValue = new CssCmykColor(inputValue);

                // ----------------------------------------------------------------
                // test the results

                expect(actualValue).to.be.instanceOf(CssCmykColor);
            });
        });
    });

    // ================================================================
    //
    // COLOR FORMAT CONVERSIONS
    //
    // ----------------------------------------------------------------

    describe(".cmyk()", () => {
        ValidCssCmykColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns itself when converted to CMYK", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that the CMYK method (required by the base class)
                // doesn't mess up the colors

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssCmykColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssCmykColor(inputValue);

                // ----------------------------------------------------------------
                // perform the change

                const actualValue = unit.cmyk();

                // ----------------------------------------------------------------
                // test the results

                expect(actualValue).to.equal(unit);
            });
        });

        it("does not cache static conversions", () => {
            // ----------------------------------------------------------------
            // explain your test

            // this test proves that the CMYK method will not use the
            // static conversions cache (because there is nothing to cache)

            // ----------------------------------------------------------------
            // setup your test

            const inputValue = makeCssCmykColorData(
                "red",
                "#ff0000",
                {
                    cyan: 100,
                    magenta: 0,
                    yellow: 0,
                    key: 1,
                }
            );
            const unit = new CssCmykColor(inputValue);

            // make sure that the cache is empty
            CSS_CMYK_CONVERSIONS.reset();

            // ----------------------------------------------------------------
            // perform the change

            unit.cmyk();

            // ----------------------------------------------------------------
            // test the results

            // does not cache itself
            expect(CSS_CMYK_CONVERSIONS.has(unit)).to.be.false;
        });

        it("supports functional operators", () => {
            // ----------------------------------------------------------------
            // explain your test

            // this test proves that the CMYK method will run any functional
            // operators that are passed into it

            // ----------------------------------------------------------------
            // setup your test

            const inputValue = makeCssCmykColorData(
                "red",
                "#ff0000",
                {
                    cyan: 100,
                    magenta: 0,
                    yellow: 0,
                    key: 1,
                }
            );
            const unit = new CssCmykColor(inputValue);

            const f1 = (x: CssCmykColorData, o?: DataGuaranteeOptions) => { x.name = 'f1'; return x; };
            const f2 = (x: CssCmykColorData, o?: DataGuaranteeOptions) => { x.definition = 'f2'; return x; }

            // ----------------------------------------------------------------
            // perform the change

            const actualValue = unit.cmyk({}, f1, f2);

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
        ValidCssCmykColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] converts the original color to HSL format", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that the .hsl() method returns the HSL equivalent
                // of the current color

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssCmykColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssCmykColor(inputValue);

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

                const inputValue = makeCssCmykColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssCmykColor(inputValue);

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

                const inputValue = makeCssCmykColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssCmykColor(inputValue);

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
            // conversions

            // ----------------------------------------------------------------
            // setup your test

            const inputValue = makeCssCmykColorData(
                "red",
                "#ff0000",
                {
                    cyan: 100,
                    magenta: 0,
                    yellow: 0,
                    key: 1,
                }
            );
            const unit = new CssCmykColor(inputValue);

            // make sure that the cache is empty
            CSS_HSL_CONVERSIONS.reset();

            // ----------------------------------------------------------------
            // perform the change

            const actualValue = unit.hsl();

            // ----------------------------------------------------------------
            // test the results

            expect(CSS_HSL_CONVERSIONS.has(actualValue)).to.be.true;
        });
    });

    describe(".hsv()", () => {
        ValidCssCmykColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] converts the original color to HSV format", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that the .hsv() method returns the HSV equivalent
                // of the current color

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssCmykColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssCmykColor(inputValue);

                // ----------------------------------------------------------------
                // perform the change

                const actualResult = unit.hsv();

                // ----------------------------------------------------------------
                // test the results

                expect(actualResult.channelsData()).to.eql(validFixture.hsvChannels);
            });

            it("[fixture " + validFixture.name + "] preserves the original color name", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that the .hsv() method preserves the
                // original name of the test color

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssCmykColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssCmykColor(inputValue);

                // ----------------------------------------------------------------
                // perform the change

                const actualResult = unit.hsv();

                // ----------------------------------------------------------------
                // test the results

                expect(actualResult.name()).to.eql(validFixture.name);
            });

            it("[fixture " + validFixture.name + "] preserves the original color definition", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that the .hsv() method preserves the original
                // color definition, and does not replace it with the HSV
                // definition

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssCmykColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssCmykColor(inputValue);

                // ----------------------------------------------------------------
                // perform the change

                const actualResult = unit.hsv();

                // ----------------------------------------------------------------
                // test the results

                expect(actualResult.definition()).to.eql(validFixture.definition);
            });
        });

        it("caches static conversions", () => {
            // ----------------------------------------------------------------
            // explain your test

            // this test proves that the .hsv() method will cache any static
            // conversions

            // ----------------------------------------------------------------
            // setup your test

            const inputValue = makeCssCmykColorData(
                "red",
                "#ff0000",
                {
                    cyan: 100,
                    magenta: 0,
                    yellow: 0,
                    key: 1,
                }
            );
            const unit = new CssCmykColor(inputValue);

            // make sure that the cache is empty
            CSS_HSV_CONVERSIONS.reset();

            // ----------------------------------------------------------------
            // perform the change

            const actualValue = unit.hsv();

            // ----------------------------------------------------------------
            // test the results

            expect(CSS_HSV_CONVERSIONS.has(actualValue)).to.be.true;
        });

        it("supports functional operators", () => {
            // ----------------------------------------------------------------
            // explain your test

            // this test proves that the .hsv() method will run any functional
            // operators that are passed into it

            // ----------------------------------------------------------------
            // setup your test

            const inputValue = makeCssCmykColorData(
                "red",
                "#ff0000",
                {
                    cyan: 100,
                    magenta: 0,
                    yellow: 0,
                    key: 1,
                }
            );
            const unit = new CssCmykColor(inputValue);

            const f1 = (x: CssHsvColorData, o?: DataGuaranteeOptions) => { x.name = 'f1'; return x; };
            const f2 = (x: CssHsvColorData, o?: DataGuaranteeOptions) => { x.definition = 'f2'; return x; }

            // ----------------------------------------------------------------
            // perform the change

            const actualValue = unit.hsv({}, f1, f2);

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
        ValidCssCmykColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] converts the original color to HWB format", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that the .hwd() method returns the HSL equivalent
                // of the current color

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssCmykColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssCmykColor(inputValue);

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

                const inputValue = makeCssCmykColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssCmykColor(inputValue);

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

                const inputValue = makeCssCmykColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssCmykColor(inputValue);

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
            // conversions

            // ----------------------------------------------------------------
            // setup your test

            const inputValue = makeCssCmykColorData(
                "red",
                "#ff0000",
                {
                    cyan: 100,
                    magenta: 0,
                    yellow: 0,
                    key: 1,
                }
            );
            const unit = new CssCmykColor(inputValue);

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

            const inputValue = makeCssCmykColorData(
                "red",
                "#ff0000",
                {
                    cyan: 100,
                    magenta: 0,
                    yellow: 0,
                    key: 1,
                }
            );
            const unit = new CssCmykColor(inputValue);

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
        ValidCssCmykColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the CMYKA channels as an object", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that .channelsData() returns the channel data
                // that was used to build this color in the first place

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssCmykColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssCmykColor(inputValue);

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
        ValidCssCmykColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the CMYK channels as an array", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that .channelsTuple() returns the channel data
                // that was used to build this color in the first place

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssCmykColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssCmykColor(inputValue);

                const expectedValue = [
                    validFixture.channels.cyan,
                    validFixture.channels.magenta,
                    validFixture.channels.yellow,
                    validFixture.channels.key,
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
        ValidCssCmykColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the CMYK channels as a CSS hex color", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that .hex() returns the correct CSS
                // hex color

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssCmykColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssCmykColor(inputValue);

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
        ValidCssCmykColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the CSS color name (if available)", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that .keyword() returns the correct CSS
                // color name (if this color maps to one)

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssCmykColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssCmykColor(inputValue);

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
        ValidCssCmykColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the color's definition", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that .toString() returns the original CSS
                // definition for this color, even after converting to other
                // formats

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssCmykColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssCmykColor(inputValue);

                // for readability
                const expectedValue = validFixture.definition;

                // ----------------------------------------------------------------
                // perform the change

                const actualCmykValue = unit.cmyk().toString();
                const actualHslValue = unit.hsl().toString();
                const actualHwbValue = unit.cmyk().toString();

                // ----------------------------------------------------------------
                // test the results

                expect(actualCmykValue).to.eql(expectedValue);
                expect(actualHslValue).to.eql(expectedValue);
                expect(actualHwbValue).to.eql(expectedValue);
            });
        });
    });

    describe("auto-conversion to number", () => {
        ValidCssCmykColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the color's definition", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that the [Symbol.toPrimitive] auto convertor
                // converts the color to a number

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssCmykColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssCmykColor(inputValue);

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
        ValidCssCmykColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the color's definition", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that the [Symbol.toPrimitive] auto convertor
                // converts the color to a string

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssCmykColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssCmykColor(inputValue);

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
        ValidCssCmykColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the CSS definition as a rgb() spec", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that the .css() method returns CSS that
                // uses the `rgb()` format
                //
                // there is no `cmyk()` format in CSS!

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssCmykColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssCmykColor(inputValue);

                const expectedResult = "rgb("
                    + validFixture.rgbChannels.red + ", "
                    + validFixture.rgbChannels.green + ", "
                    + validFixture.rgbChannels.blue
                    + (validFixture.rgbChannels.alpha < 1 ? " / " + validFixture.rgbChannels.alpha : "")
                    + ")";

                // ----------------------------------------------------------------
                // perform the change

                const actualResult = unit.css();

                // ----------------------------------------------------------------
                // test the results

                expect(actualResult).to.eql(expectedResult);
            });
        });
    });

    // ================================================================
    //
    // COMPONENT VALUES
    //
    // ----------------------------------------------------------------

    describe(".cyan()", () => {
        ValidCssCmykColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the C channel as a number", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that .cyan() returns the channel data
                // that was used to build this color in the first place

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssCmykColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssCmykColor(inputValue);

                // for readability
                const expectedValue = validFixture.channels.cyan;

                // ----------------------------------------------------------------
                // perform the change

                const actualValue = unit.cyan();

                // ----------------------------------------------------------------
                // test the results

                expect(actualValue).to.eql(expectedValue);
            });
        });
    });

    describe(".magenta()", () => {
        ValidCssCmykColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the M channel as a number", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that .magenta() returns the channel data
                // that was used to build this color in the first place

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssCmykColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssCmykColor(inputValue);

                // for readability
                const expectedValue = validFixture.channels.magenta;

                // ----------------------------------------------------------------
                // perform the change

                const actualValue = unit.magenta();

                // ----------------------------------------------------------------
                // test the results

                expect(actualValue).to.eql(expectedValue);
            });
        });
    });

    describe(".yellow()", () => {
        ValidCssCmykColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the Y channel as a number", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that .yellow() returns the channel data
                // that was used to build this color in the first place

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssCmykColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssCmykColor(inputValue);

                // for readability
                const expectedValue = validFixture.channels.yellow;

                // ----------------------------------------------------------------
                // perform the change

                const actualValue = unit.yellow();

                // ----------------------------------------------------------------
                // test the results

                expect(actualValue).to.eql(expectedValue);
            });
        });
    });

    describe(".key()", () => {
        ValidCssCmykColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the K channel as a number", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that .key() returns the channel data
                // that was used to build this color in the first place

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssCmykColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssCmykColor(inputValue);

                // for readability
                const expectedValue = validFixture.channels.key;

                // ----------------------------------------------------------------
                // perform the change

                const actualValue = unit.key();

                // ----------------------------------------------------------------
                // test the results

                expect(actualValue).to.eql(expectedValue);
            });
        });
    });

    describe(".conversionModel()", () => {
        ValidCssCmykColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the same conversion model as CssRgbColor does", () => {
                // ----------------------------------------------------------------
                // explain your test

                // our underlying third-party color library does not support
                // CMYK at this time, so CssCmykColor builds its own RGB
                // conversion model
                //
                // we need to prove that this conversion is 100% accurate
                // and the best way to do that is to compare CssCmykColor's
                // hand-build efforts with CssRgbColor's results

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssCmykColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssCmykColor(inputValue);

                const rgbColor = makeCssRgbColor(validFixture.definition);

                // for readability
                const expectedValue = rgbColor.conversionModel();

                // ----------------------------------------------------------------
                // perform the change

                const actualValue = unit.conversionModel();

                // ----------------------------------------------------------------
                // test the results

                expect(actualValue).to.eql(expectedValue);
            });
        });
    });

    // ================================================================
    //
    // DERIVED COMPONENT VALUES
    //
    // ----------------------------------------------------------------

    describe(".hsl().hue()", () => {
        ValidCssCmykColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the H channel as a number", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that .hue() returns the H channel from
                // the HSL conversion

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssCmykColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssCmykColor(inputValue);

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
        ValidCssCmykColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the S channel as a number", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that .saturation() returns the S channel from
                // the HSL conversion

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssCmykColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssCmykColor(inputValue);

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
        ValidCssCmykColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the L channel as a number", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that .luminosity() returns the L channel from
                // the HSL conversion

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssCmykColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssCmykColor(inputValue);

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
        ValidCssCmykColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the H channel as a number", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that .hue() returns the H channel from
                // the HSL conversion

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssCmykColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssCmykColor(inputValue);

                // for readability
                const expectedValue = validFixture.hslChannels.hue;

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
        ValidCssCmykColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the W channel as a number", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that .whiteness() returns the W channel from
                // the HWB conversion

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssCmykColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssCmykColor(inputValue);

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
        ValidCssCmykColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the B channel as a number", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that .blackness() returns the B channel from
                // the HWB conversion

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssCmykColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssCmykColor(inputValue);

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

    describe(".oklch().lightness()", () => {
        ValidCssCmykColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the L channel as a number", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that .lightness() returns the L channel
                // from the OKLCH conversion

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssCmykColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssCmykColor(inputValue);

                // for readability
                const expectedValue = validFixture.oklchChannels.lightness;

                // ----------------------------------------------------------------
                // perform the change

                const actualValue = unit.oklch().lightness();

                // ----------------------------------------------------------------
                // test the results

                expect(actualValue).to.eql(expectedValue);
            });
        });
    });

    describe(".oklch().chroma()", () => {
        ValidCssCmykColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the C channel as a number", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that .chroma() returns the C channel from
                // the OKLCH conversion

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssCmykColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssCmykColor(inputValue);

                // for readability
                const expectedValue = validFixture.oklchChannels.chroma;

                // ----------------------------------------------------------------
                // perform the change

                const actualValue = unit.oklch().chroma();

                // ----------------------------------------------------------------
                // test the results

                expect(actualValue).to.eql(expectedValue);
            });
        });
    });

    describe(".oklch().hue()", () => {
        ValidCssCmykColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the H channel as a number", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that .hue() returns the H channel from
                // the OKLCH conversion

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssCmykColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssCmykColor(inputValue);

                // for readability
                const expectedValue = validFixture.oklchChannels.hue;

                // ----------------------------------------------------------------
                // perform the change

                const actualValue = unit.oklch().hue();

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
        ValidCssCmykColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the named color", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that the .name() method returns what it
                // is supposed to

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssCmykColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssCmykColor(inputValue);

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
        ValidCssCmykColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the color's original definition", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that the .defintion() method returns what it
                // is supposed to

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssCmykColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssCmykColor(inputValue);

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
        it("returns 'cmyk'", () => {
            // ----------------------------------------------------------------
            // explain your test

            // this test proves that the .colorFormat() method returns the
            // expected result

            // ----------------------------------------------------------------
            // setup your test

            const inputValue = makeCssCmykColorData(
                "red",
                "#ff0000",
                {
                    cyan: 100,
                    magenta: 0,
                    yellow: 0,
                    key: 1,
                }
            );
            const unit = new CssCmykColor(inputValue);
            const expectedValue = "cmyk";

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

            const inputValue = makeCssCmykColorData(
                "red",
                "#ff0000",
                {
                    cyan: 100,
                    magenta: 0,
                    yellow: 0,
                    key: 1,
                }
            );
            const unit = new CssCmykColor(inputValue);
            const expectedValue: SupportedCssColorSpace = "sRGB";

            // ----------------------------------------------------------------
            // perform the change

            const actualValue = unit.colorSpace();

            // ----------------------------------------------------------------
            // test the results

            expect(actualValue).to.eql(expectedValue);
        });
    });
});