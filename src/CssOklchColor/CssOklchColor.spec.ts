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

import "../test-init.test";

import type { DataGuaranteeOptions } from "@safelytyped/core-types";
import { CssOklchColor, makeCssOklchColorData, type CssCmykColorData, type CssHslColorData, type CssHwbColorData, type CssOklchColorData, type CssRgbColorData } from "@safelytyped/css-color";
import { expect } from "chai";
import { describe, it } from "mocha";
import type { SupportedCssColorSpace } from "../CssColorspace/SupportedCssColorSpace.type";
import { ValidCssOklchColorData } from "./_fixtures/CssOklchColorData";

describe('CssOklchColor', () => {
    describe(".constructor", () => {
        ValidCssOklchColorData.forEach((validFixture) => {
            it("can be instantiated when given a valid CssOklchColorData input " + validFixture.name, () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that we can make an instance of CssOklchColor

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssOklchColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                )

                // ----------------------------------------------------------------
                // perform the change

                const actualValue = new CssOklchColor(inputValue);

                // ----------------------------------------------------------------
                // test the results

                expect(actualValue).to.be.instanceOf(CssOklchColor);
            });
        });
    });

    // ================================================================
    //
    // COLOR FORMAT CONVERSIONS
    //
    // ----------------------------------------------------------------

    describe(".oklch()", () => {
        ValidCssOklchColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns itself when converted to OKLCH", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that the RGB method (required by the base class)
                // doesn't mess up the colors

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssOklchColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssOklchColor(inputValue);

                // ----------------------------------------------------------------
                // perform the change

                const actualValue = unit.oklch();

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

            const inputValue = makeCssOklchColorData(
                "red",
                "#ff0000",
                {
                    lightness: 0.628,
                    chroma: 0.2577,
                    hue: 29.23,
                    alpha: 1,
                }
            );
            const unit = new CssOklchColor(inputValue);

            const f1 = (x: CssOklchColorData, o?: DataGuaranteeOptions) => { x.name = 'f1'; return x; };
            const f2 = (x: CssOklchColorData, o?: DataGuaranteeOptions) => { x.definition = 'f2'; return x; }

            // ----------------------------------------------------------------
            // perform the change

            const actualValue = unit.oklch({}, f1, f2);

            // ----------------------------------------------------------------
            // test the results

            expect(actualValue.name()).eqls('f1');
            expect(actualValue.definition()).eqls('f2');

            // make sure the original color object has not been altered
            expect(unit.name()).eqls('red');
            expect(unit.definition()).eqls('#ff0000');
        });
    });

    describe(".cmyk()", () => {
        ValidCssOklchColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] converts the original color to CMYK format", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that the .cmyk() method returns the CMYK
                // equivalent of the current color

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssOklchColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssOklchColor(inputValue);

                const expectedChannels = validFixture.cmykChannels;

                // ----------------------------------------------------------------
                // perform the change

                const actualResult = unit.cmyk();

                // ----------------------------------------------------------------
                // test the results

                expect(actualResult.channelsData()).to.eqls(expectedChannels);
            });

            it("[fixture " + validFixture.name + "] preserves the original color name", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that the .cmyk() method preserves the
                // original name of the test color

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssOklchColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssOklchColor(inputValue);

                // ----------------------------------------------------------------
                // perform the change

                const actualResult = unit.cmyk();

                // ----------------------------------------------------------------
                // test the results

                expect(actualResult.name()).to.eql(validFixture.name);
            });

            it("[fixture " + validFixture.name + "] preserves the original color definition", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that the .cmyk() method preserves the original
                // color definition, and does not replace it with the CMYK
                // definition

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssOklchColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssOklchColor(inputValue);

                // ----------------------------------------------------------------
                // perform the change

                const actualResult = unit.cmyk();

                // ----------------------------------------------------------------
                // test the results

                expect(actualResult.definition()).to.eql(validFixture.definition);
            });
        });

        it("supports functional operators", () => {
            // ----------------------------------------------------------------
            // explain your test

            // this test proves that the .cmyk() method will run any functional
            // operators that are passed into it

            // ----------------------------------------------------------------
            // setup your test

            const inputValue = makeCssOklchColorData(
                "red",
                "#ff0000",
                {
                    lightness: 0.628,
                    chroma: 0.2577,
                    hue: 29.23,
                    alpha: 1,
                }
            );
            const unit = new CssOklchColor(inputValue);

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
        ValidCssOklchColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] converts the original color to HSL format", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that the .hsl() method returns the HSL equivalent
                // of the current color

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssOklchColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssOklchColor(inputValue);

                const expectedChannels = validFixture.hslChannels;

                // ----------------------------------------------------------------
                // perform the change

                const actualResult = unit.hsl();
                const actualChannels = actualResult.channelsData();

                // ----------------------------------------------------------------
                // test the results

                expect(actualChannels.hue).to.eql(expectedChannels.hue);
                expect(actualChannels.saturation).to.eql(expectedChannels.saturation);
                expect(actualChannels.luminosity).to.eql(expectedChannels.luminosity);
                expect(actualChannels.alpha).to.eql(expectedChannels.alpha);
            });

            it("[fixture " + validFixture.name + "] preserves the original color name", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that the .hsl() method preserves the
                // original name of the test color

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssOklchColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssOklchColor(inputValue);

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

                const inputValue = makeCssOklchColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssOklchColor(inputValue);

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

            const inputValue = makeCssOklchColorData(
                "red",
                "#ff0000",
                {
                    lightness: 0.628,
                    chroma: 0.2577,
                    hue: 29.23,
                    alpha: 1,
                }
            );
            const unit = new CssOklchColor(inputValue);

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
        ValidCssOklchColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] converts the original color to HWB format", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that the .hwd() method returns the HSL equivalent
                // of the current color

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssOklchColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssOklchColor(inputValue);

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

                const inputValue = makeCssOklchColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssOklchColor(inputValue);

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

                const inputValue = makeCssOklchColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssOklchColor(inputValue);

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

            const inputValue = makeCssOklchColorData(
                "red",
                "#ff0000",
                {
                    lightness: 0.628,
                    chroma: 0.2577,
                    hue: 29.23,
                    alpha: 1,
                }
            );
            const unit = new CssOklchColor(inputValue);

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

    describe(".rgb()", () => {
        ValidCssOklchColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] converts the original color to sRGB format", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that the .hwd() method returns the HSL equivalent
                // of the current color

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssOklchColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssOklchColor(inputValue);

                // ----------------------------------------------------------------
                // perform the change

                const actualResult = unit.rgb();

                // ----------------------------------------------------------------
                // test the results

                expect(actualResult.channelsData()).to.eql(validFixture.rgbChannels);
            });

            it("[fixture " + validFixture.name + "] preserves the original color name", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that the .hwb() method preserves the
                // original name of the test color

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssOklchColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssOklchColor(inputValue);

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

                // this test proves that the .hwb() method preserves the original
                // color definition, and does not replace it with the HSL
                // definition

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssOklchColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssOklchColor(inputValue);

                // ----------------------------------------------------------------
                // perform the change

                const actualResult = unit.rgb();

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

            const inputValue = makeCssOklchColorData(
                "red",
                "#ff0000",
                {
                    lightness: 0.628,
                    chroma: 0.2577,
                    hue: 29.23,
                    alpha: 1,
                }
            );
            const unit = new CssOklchColor(inputValue);

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

    // ================================================================
    //
    // OTHER FORMATS
    //
    // ----------------------------------------------------------------

    describe(".channelsData()", () => {
        ValidCssOklchColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the RGBA channels as an object", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that .channelsData() returns the channel data
                // that was used to build this color in the first place

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssOklchColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssOklchColor(inputValue);

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
        ValidCssOklchColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the LCH channels as an array", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that .channelsTuple() returns the channel data
                // that was used to build this color in the first place

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssOklchColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssOklchColor(inputValue);

                const expectedValue = [
                    validFixture.channels.lightness,
                    validFixture.channels.chroma,
                    validFixture.channels.hue,
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
        ValidCssOklchColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the color as a CSS hex value", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that .hex() returns the correct CSS
                // hex color

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssOklchColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssOklchColor(inputValue);

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
        ValidCssOklchColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the CSS color name (if available)", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that .keyword() returns the correct CSS
                // color name (if this color maps to one)

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssOklchColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssOklchColor(inputValue);

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
        ValidCssOklchColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the color's definition", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that .toString() returns the original CSS
                // definition for this color, even after converting to other
                // formats

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssOklchColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssOklchColor(inputValue);

                // for readability
                const expectedValue = validFixture.definition;

                // ----------------------------------------------------------------
                // perform the change

                const actualOklchValue = unit.oklch().toString();
                const actualHslValue = unit.hsl().toString();
                const actualHwbValue = unit.rgb().toString();
                const actualRgbValue = unit.rgb().toString();

                // ----------------------------------------------------------------
                // test the results

                expect(actualOklchValue).to.eql(expectedValue);
                expect(actualHslValue).to.eql(expectedValue);
                expect(actualHwbValue).to.eql(expectedValue);
                expect(actualRgbValue).to.eql(expectedValue);
            });
        });
    });

    describe("auto-conversion to number", () => {
        ValidCssOklchColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the color's definition", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that the [Symbol.toPrimitive] auto convertor
                // converts the color to a number

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssOklchColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssOklchColor(inputValue);

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
        ValidCssOklchColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the color's definition", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that the [Symbol.toPrimitive] auto convertor
                // converts the color to a string

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssOklchColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssOklchColor(inputValue);

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
        ValidCssOklchColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the CSS definition as an oklch() spec", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that the .css() method returns CSS that
                // uses the `oklch()` format

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssOklchColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssOklchColor(inputValue);

                const expectedResult = "oklch("
                    + validFixture.channels.lightness + " "
                    + validFixture.channels.chroma + " "
                    + validFixture.channels.hue
                    + (validFixture.channels.alpha < 1 ? " / " + validFixture.channels.alpha : "")
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

    describe(".lightness()", () => {
        ValidCssOklchColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the L channel as a number", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that .lightness() returns the channel data
                // that was used to build this color in the first place

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssOklchColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssOklchColor(inputValue);

                // for readability
                const expectedValue = validFixture.channels.lightness;

                // ----------------------------------------------------------------
                // perform the change

                const actualValue = unit.lightness();

                // ----------------------------------------------------------------
                // test the results

                expect(actualValue).to.eql(expectedValue);
            });
        });
    });

    describe(".chroma()", () => {
        ValidCssOklchColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the C channel as a number", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that .chroma() returns the channel data
                // that was used to build this color in the first place

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssOklchColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssOklchColor(inputValue);

                // for readability
                const expectedValue = validFixture.channels.chroma;

                // ----------------------------------------------------------------
                // perform the change

                const actualValue = unit.chroma();

                // ----------------------------------------------------------------
                // test the results

                expect(actualValue).to.eql(expectedValue);
            });
        });
    });

    describe(".hue()", () => {
        ValidCssOklchColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the H channel as a number", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that .hue() returns the channel data
                // that was used to build this color in the first place

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssOklchColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssOklchColor(inputValue);

                // for readability
                const expectedValue = validFixture.channels.hue;

                // ----------------------------------------------------------------
                // perform the change

                const actualValue = unit.hue();

                // ----------------------------------------------------------------
                // test the results

                expect(actualValue).to.eql(expectedValue);
            });
        });
    });

    describe(".alpha()", () => {
        ValidCssOklchColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the A channel as a number", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that .alpha() returns the channel data
                // that was used to build this color in the first place

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssOklchColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssOklchColor(inputValue);

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
    // DERIVED COMPONENT VALUES
    //
    // ----------------------------------------------------------------

    describe(".rgb().red()", () => {
        ValidCssOklchColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the R channel as a number", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that .red() returns the channel data
                // that was used to build this color in the first place

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssOklchColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssOklchColor(inputValue);

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
        ValidCssOklchColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the G channel as a number", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that .green() returns the channel data
                // that was used to build this color in the first place

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssOklchColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssOklchColor(inputValue);

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
        ValidCssOklchColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the B channel as a number", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that .blue() returns the channel data
                // that was used to build this color in the first place

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssOklchColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssOklchColor(inputValue);

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

    describe(".hsl().hue()", () => {
        ValidCssOklchColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the H channel as a number", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that .hue() returns the H channel from
                // the HSL conversion

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssOklchColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssOklchColor(inputValue);

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
        ValidCssOklchColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the S channel as a number", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that .saturation() returns the S channel from
                // the HSL conversion

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssOklchColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssOklchColor(inputValue);

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
        ValidCssOklchColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the L channel as a number", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that .luminosity() returns the L channel from
                // the HSL conversion

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssOklchColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssOklchColor(inputValue);

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
        ValidCssOklchColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the H channel as a number", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that .hue() returns the H channel from
                // the HSL conversion

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssOklchColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssOklchColor(inputValue);

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
        ValidCssOklchColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the W channel as a number", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that .whiteness() returns the W channel from
                // the HWB conversion

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssOklchColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssOklchColor(inputValue);

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
        ValidCssOklchColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the B channel as a number", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that .blackness() returns the B channel from
                // the HWB conversion

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssOklchColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssOklchColor(inputValue);

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

    // ================================================================
    //
    // PROPERTIES
    //
    // ----------------------------------------------------------------

    describe(".name()", () => {
        ValidCssOklchColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the named color", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that the .name() method returns what it
                // is supposed to

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssOklchColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssOklchColor(inputValue);

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
        ValidCssOklchColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the color's original definition", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that the .defintion() method returns what it
                // is supposed to

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssOklchColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssOklchColor(inputValue);

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
        it("returns 'oklch'", () => {
            // ----------------------------------------------------------------
            // explain your test

            // this test proves that the .colorFormat() method returns the
            // expected result

            // ----------------------------------------------------------------
            // setup your test

            const inputValue = makeCssOklchColorData(
                "red",
                "#ff0000",
                {
                    lightness: 0.628,
                    chroma: 0.2577,
                    hue: 29.23,
                    alpha: 1,
                }
            );
            const unit = new CssOklchColor(inputValue);
            const expectedValue = "oklch";

            // ----------------------------------------------------------------
            // perform the change

            const actualValue = unit.colorFormat();

            // ----------------------------------------------------------------
            // test the results

            expect(actualValue).to.eql(expectedValue);
        });
    });

    describe(".colorSpace()", () => {
        it("returns 'OKLCH'", () => {
            // ----------------------------------------------------------------
            // explain your test

            // this test proves that the .colorSpace() method returns the
            // expected result

            // ----------------------------------------------------------------
            // setup your test

            const inputValue = makeCssOklchColorData(
                "red",
                "#ff0000",
                {
                    lightness: 0.628,
                    chroma: 0.2577,
                    hue: 29.23,
                    alpha: 1,
                }
            );
            const unit = new CssOklchColor(inputValue);
            const expectedValue: SupportedCssColorSpace = "OKLCH";

            // ----------------------------------------------------------------
            // perform the change

            const actualValue = unit.colorSpace();

            // ----------------------------------------------------------------
            // test the results

            expect(actualValue).to.eql(expectedValue);
        });
    });
});