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

import "../test-init.test";

import type { DataGuaranteeOptions } from "@safelytyped/core-types";
import { CssHwbColor, makeCssHwbColorData, type CssCmykColorData, type CssHslColorData, type CssHwbColorData, type CssOklchColorData, type CssRgbColorData } from "@safelytyped/css-color";
import { expect } from "chai";
import { describe, it } from "mocha";
import { CSS_CMYK_CONVERSIONS } from "../CssCmykColor/CSS_CMYK_CONVERSIONS";
import { CSS_HSL_CONVERSIONS } from "../CssHslColor/CSS_HSL_CONVERSIONS";
import { CSS_OKLCH_CONVERSIONS } from "../CssOklchColor/CSS_OKLCH_CONVERSIONS";
import { CSS_RGB_CONVERSIONS } from "../CssRgbColor/CSS_RGB_CONVERSIONS";
import { ValidCssHwbColorData } from "./_fixtures/CssHwbColorData";
import { CSS_HWB_CONVERSIONS } from "./CSS_HWB_CONVERSIONS";

describe('CssHwbColor', () => {
    describe(".constructor", () => {
        ValidCssHwbColorData.forEach((validFixture) => {
            it("can be instantiated when given a valid CssHwbColorData input " + validFixture.name, () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that we can make an instance of CssHwbColor

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssHwbColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                )

                // ----------------------------------------------------------------
                // perform the change

                const actualValue = new CssHwbColor(inputValue);

                // ----------------------------------------------------------------
                // test the results

                expect(actualValue).to.be.instanceOf(CssHwbColor);
            });
        });
    });

    // ================================================================
    //
    // COLOR FORMAT CONVERSIONS
    //
    // ----------------------------------------------------------------

    describe(".cmyk()", () => {
        ValidCssHwbColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] converts the original color to CMYK format", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that the .cmyk() method returns the CMYK
                // equivalent/ of the current color

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssHwbColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssHwbColor(inputValue);

                // ----------------------------------------------------------------
                // perform the change

                const actualResult = unit.cmyk();

                // ----------------------------------------------------------------
                // test the results

                expect(actualResult.channelsData()).to.eql(validFixture.cmykChannels);
            });

            it("[fixture " + validFixture.name + "] preserves the original color name", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that the .cmyk() method preserves the
                // original name of the test color

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssHwbColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssHwbColor(inputValue);

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

                const inputValue = makeCssHwbColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssHwbColor(inputValue);

                // ----------------------------------------------------------------
                // perform the change

                const actualResult = unit.cmyk();

                // ----------------------------------------------------------------
                // test the results

                expect(actualResult.definition()).to.eql(validFixture.definition);
            });
        });

        it("caches static conversions", () => {
            // ----------------------------------------------------------------
            // explain your test

            // this test proves that the `.cmyk` method will cache static
            // conversions

            // ----------------------------------------------------------------
            // setup your test

            const inputValue = makeCssHwbColorData(
                "original",
                "hwb(255, 0%, 0%)",
                {
                    hue: 255,
                    whiteness: 0,
                    blackness: 0,
                    alpha: 1,
                }
            );
            const unit = new CssHwbColor(inputValue);

            // make sure that the cache is empty
            CSS_CMYK_CONVERSIONS.reset();

            // ----------------------------------------------------------------
            // perform the change

            const actualValue = unit.cmyk();

            // ----------------------------------------------------------------
            // test the results

            expect(CSS_CMYK_CONVERSIONS.has(actualValue)).to.be.true;
        });

        it("supports functional operators", () => {
            // ----------------------------------------------------------------
            // explain your test

            // this test proves that the `.cmyk()` method will run any
            // functional operators that are passed into it

            // ----------------------------------------------------------------
            // setup your test

            const inputValue = makeCssHwbColorData(
                "original",
                "hwb(255, 0%, 0%)",
                {
                    hue: 255,
                    whiteness: 0,
                    blackness: 0,
                    alpha: 1,
                }
            );
            const unit = new CssHwbColor(inputValue);

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
            expect(unit.name()).eqls('original');
            expect(unit.definition()).eqls('hwb(255, 0%, 0%)');
        });
    });

    describe(".hwb()", () => {
        ValidCssHwbColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns itself when converted to HWB", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that the HWB method (required by the base class)
                // doesn't mess up the colors

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssHwbColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssHwbColor(inputValue);

                // ----------------------------------------------------------------
                // perform the change

                const actualValue = unit.hwb();

                // ----------------------------------------------------------------
                // test the results

                expect(actualValue.name()).eqls(validFixture.name);
                expect(actualValue.definition()).eqls(validFixture.definition);
                expect(actualValue.channelsData()).eqls(validFixture.channels);
            });
        });

        it("does not cache static conversions", () => {
            // ----------------------------------------------------------------
            // explain your test

            // this test proves that the HWB method does not cache static
            // conversions (because there's nothing to cache)

            // ----------------------------------------------------------------
            // setup your test

            const inputValue = makeCssHwbColorData(
                "original",
                "hwb(255, 0%, 0%)",
                {
                    hue: 255,
                    whiteness: 0,
                    blackness: 0,
                    alpha: 1,
                }
            );
            const unit = new CssHwbColor(inputValue);

            // make sure that the cache is empty
            CSS_HWB_CONVERSIONS.reset();

            // ----------------------------------------------------------------
            // perform the change

            const actualValue = unit.hwb();

            // ----------------------------------------------------------------
            // test the results

            // does not cache itself
            expect(CSS_HWB_CONVERSIONS.has(actualValue)).to.be.false;
        });

        it("supports functional operators", () => {
            // ----------------------------------------------------------------
            // explain your test

            // this test proves that the HWB method will run any functional
            // operators that are passed into it

            // ----------------------------------------------------------------
            // setup your test

            const inputValue = makeCssHwbColorData(
                "original",
                "hwb(255, 0%, 0%)",
                {
                    hue: 255,
                    whiteness: 0,
                    blackness: 0,
                    alpha: 1,
                }
            );
            const unit = new CssHwbColor(inputValue);

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
            expect(unit.name()).eqls('original');
            expect(unit.definition()).eqls('hwb(255, 0%, 0%)');
        });
    });

    describe(".hsl()", () => {
        ValidCssHwbColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] converts the original color to HSL format", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that the .hsl() method returns the HSL equivalent
                // of the current color

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssHwbColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssHwbColor(inputValue);

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

                const inputValue = makeCssHwbColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssHwbColor(inputValue);

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

                const inputValue = makeCssHwbColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssHwbColor(inputValue);

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

            // this test proves that the HSL method will cache static
            // conversions

            // ----------------------------------------------------------------
            // setup your test

            const inputValue = makeCssHwbColorData(
                "original",
                "hwb(255, 0%, 0%)",
                {
                    hue: 255,
                    whiteness: 0,
                    blackness: 0,
                    alpha: 1,
                }
            );
            const unit = new CssHwbColor(inputValue);

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

            const inputValue = makeCssHwbColorData(
                "original",
                "hwb(255, 0%, 0%)",
                {
                    hue: 255,
                    whiteness: 0,
                    blackness: 0,
                    alpha: 1,
                }
            );
            const unit = new CssHwbColor(inputValue);

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
            expect(unit.name()).eqls('original');
            expect(unit.definition()).eqls('hwb(255, 0%, 0%)');
        });

    });

    describe(".rgb()", () => {
        ValidCssHwbColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] converts the original color to RGB format", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that the .rgb() method returns the RGB equivalent
                // of the current color

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssHwbColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssHwbColor(inputValue);

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

                // this test proves that the .rgb() method preserves the
                // original name of the test color

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssHwbColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssHwbColor(inputValue);

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
                // color definition, and does not replace it with the HSL
                // definition

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssHwbColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssHwbColor(inputValue);

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

            // this test proves that the RGB method will cache static
            // conversions

            // ----------------------------------------------------------------
            // setup your test

            const inputValue = makeCssHwbColorData(
                "original",
                "hwb(255, 0%, 0%)",
                {
                    hue: 255,
                    whiteness: 0,
                    blackness: 0,
                    alpha: 1,
                }
            );
            const unit = new CssHwbColor(inputValue);

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

            const inputValue = makeCssHwbColorData(
                "original",
                "hwb(255, 0%, 0%)",
                {
                    hue: 255,
                    whiteness: 0,
                    blackness: 0,
                    alpha: 1,
                }
            );
            const unit = new CssHwbColor(inputValue);

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
            expect(unit.name()).eqls('original');
            expect(unit.definition()).eqls('hwb(255, 0%, 0%)');
        });
    });

    describe(".oklch()", () => {
        ValidCssHwbColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] converts the original color to OKLCH format", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that the .oklch() method returns the OKLCH
                // equivalent/ of the current color

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssHwbColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssHwbColor(inputValue);

                // ----------------------------------------------------------------
                // perform the change

                const actualResult = unit.oklch();

                // ----------------------------------------------------------------
                // test the results

                expect(actualResult.channelsData()).to.eql(validFixture.oklchChannels);
            });

            it("[fixture " + validFixture.name + "] preserves the original color name", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that the .oklch() method preserves the
                // original name of the test color

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssHwbColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssHwbColor(inputValue);

                // ----------------------------------------------------------------
                // perform the change

                const actualResult = unit.oklch();

                // ----------------------------------------------------------------
                // test the results

                expect(actualResult.name()).to.eql(validFixture.name);
            });

            it("[fixture " + validFixture.name + "] preserves the original color definition", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that the .oklch() method preserves the original
                // color definition, and does not replace it with the OKLCH
                // definition

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssHwbColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssHwbColor(inputValue);

                // ----------------------------------------------------------------
                // perform the change

                const actualResult = unit.oklch();

                // ----------------------------------------------------------------
                // test the results

                expect(actualResult.definition()).to.eql(validFixture.definition);
            });
        });

        it("caches static conversions", () => {
            // ----------------------------------------------------------------
            // explain your test

            // this test proves that the OKLCH method will cache static
            // conversions

            // ----------------------------------------------------------------
            // setup your test

            const inputValue = makeCssHwbColorData(
                "original",
                "hwb(255, 0%, 0%)",
                {
                    hue: 255,
                    whiteness: 0,
                    blackness: 0,
                    alpha: 1,
                }
            );
            const unit = new CssHwbColor(inputValue);

            // make sure that the cache is empty
            CSS_OKLCH_CONVERSIONS.reset();

            // ----------------------------------------------------------------
            // perform the change

            const actualValue = unit.oklch();

            // ----------------------------------------------------------------
            // test the results

            expect(CSS_OKLCH_CONVERSIONS.has(actualValue)).to.be.true;
        });

        it("supports functional operators", () => {
            // ----------------------------------------------------------------
            // explain your test

            // this test proves that the `.oklch() method will run any
            // functional operators that are passed into it

            // ----------------------------------------------------------------
            // setup your test

            const inputValue = makeCssHwbColorData(
                "original",
                "hwb(255, 0%, 0%)",
                {
                    hue: 255,
                    whiteness: 0,
                    blackness: 0,
                    alpha: 1,
                }
            );
            const unit = new CssHwbColor(inputValue);

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
            expect(unit.name()).eqls('original');
            expect(unit.definition()).eqls('hwb(255, 0%, 0%)');
        });
    });

    // ================================================================
    //
    // OTHER FORMATS
    //
    // ----------------------------------------------------------------

    describe(".channelsData()", () => {
        ValidCssHwbColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the HWBA channels as an object", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that .channelsData() returns the channel data
                // that was used to build this color in the first place

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssHwbColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssHwbColor(inputValue);

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
        ValidCssHwbColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the HWB channels as an array", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that .channelsTuple() returns the channel data
                // that was used to build this color in the first place

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssHwbColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssHwbColor(inputValue);

                const expectedValue = [
                    validFixture.channels.hue,
                    validFixture.channels.whiteness,
                    validFixture.channels.blackness,
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
        ValidCssHwbColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the HWB channels as a CSS hex color", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that .hex() returns the correct CSS
                // hex color

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssHwbColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssHwbColor(inputValue);

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
        ValidCssHwbColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the CSS color name (if available)", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that .keyword() returns the correct CSS
                // color name (if this color maps to one)

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssHwbColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssHwbColor(inputValue);

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
        ValidCssHwbColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the color's definition", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that .toString() returns the original CSS
                // definition for this color, even after converting to other
                // formats

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssHwbColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssHwbColor(inputValue);

                // for readability
                const expectedValue = validFixture.definition;

                // ----------------------------------------------------------------
                // perform the change

                const actualHwbValue = unit.hwb().toString();
                const actualHslValue = unit.hsl().toString();
                const actualRgbValue = unit.rgb().toString();

                // ----------------------------------------------------------------
                // test the results

                expect(actualHwbValue).to.eql(expectedValue);
                expect(actualHslValue).to.eql(expectedValue);
                expect(actualRgbValue).to.eql(expectedValue);
            });
        });
    });

    describe("auto-conversion to number", () => {
        ValidCssHwbColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the color's definition", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that the [Symbol.toPrimitive] auto convertor
                // converts the color to a number

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssHwbColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssHwbColor(inputValue);

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
        ValidCssHwbColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the color's definition", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that the [Symbol.toPrimitive] auto convertor
                // converts the color to a string

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssHwbColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssHwbColor(inputValue);

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
        ValidCssHwbColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the CSS definition as a hwb() spec", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that the .css() method returns CSS that
                // uses the `hwb()` format

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssHwbColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssHwbColor(inputValue);

                const expectedResult = "hwb("
                    + validFixture.channels.hue + " "
                    + validFixture.channels.whiteness + "% "
                    + validFixture.channels.blackness + "%"
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

    describe(".alpha()", () => {
        ValidCssHwbColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the A channel as a number", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that .alpha() returns the channel data
                // that was used to build this color in the first place

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssHwbColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssHwbColor(inputValue);

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

    describe(".hue()", () => {
        ValidCssHwbColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the H channel as a number", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that .hue() returns the H channel from
                // the HSL conversion

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssHwbColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssHwbColor(inputValue);

                // for readability
                const expectedValue = validFixture.hslChannels.hue;

                // ----------------------------------------------------------------
                // perform the change

                const actualValue = unit.hue();

                // ----------------------------------------------------------------
                // test the results

                expect(actualValue).to.eql(expectedValue);
            });
        });
    });

    describe(".whiteness()", () => {
        ValidCssHwbColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the W channel as a number", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that .whiteness() returns the W channel from
                // the HWB conversion

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssHwbColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssHwbColor(inputValue);

                // for readability
                const expectedValue = validFixture.channels.whiteness;

                // ----------------------------------------------------------------
                // perform the change

                const actualValue = unit.whiteness();

                // ----------------------------------------------------------------
                // test the results

                expect(actualValue).to.eql(expectedValue);
            });
        });
    });

    describe(".blackness()", () => {
        ValidCssHwbColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the B channel as a number", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that .blackness() returns the B channel from
                // the HWB conversion

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssHwbColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssHwbColor(inputValue);

                // for readability
                const expectedValue = validFixture.channels.blackness;

                // ----------------------------------------------------------------
                // perform the change

                const actualValue = unit.blackness();

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
        ValidCssHwbColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the R channel as a number", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that .red() returns the channel data
                // that was used to build this color in the first place

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssHwbColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssHwbColor(inputValue);

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
        ValidCssHwbColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the G channel as a number", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that .green() returns the channel data
                // that was used to build this color in the first place

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssHwbColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssHwbColor(inputValue);

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
        ValidCssHwbColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the B channel as a number", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that .blue() returns the channel data
                // that was used to build this color in the first place

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssHwbColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssHwbColor(inputValue);

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
        ValidCssHwbColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the H channel as a number", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that .hue() returns the H channel from
                // the HSL conversion

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssHwbColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssHwbColor(inputValue);

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
        ValidCssHwbColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the S channel as a number", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that .saturation() returns the S channel from
                // the HSL conversion

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssHwbColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssHwbColor(inputValue);

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
        ValidCssHwbColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the L channel as a number", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that .luminosity() returns the L channel from
                // the HSL conversion

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssHwbColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssHwbColor(inputValue);

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

    // ================================================================
    //
    // PROPERTIES
    //
    // ----------------------------------------------------------------

    describe(".name()", () => {
        ValidCssHwbColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the named color", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that the .name() method returns what it
                // is supposed to

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssHwbColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssHwbColor(inputValue);

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
        ValidCssHwbColorData.forEach((validFixture) => {
            it("[fixture " + validFixture.name + "] returns the color's original definition", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that the .defintion() method returns what it
                // is supposed to

                // ----------------------------------------------------------------
                // setup your test

                const inputValue = makeCssHwbColorData(
                    validFixture.name,
                    validFixture.definition,
                    validFixture.channels,
                );
                const unit = new CssHwbColor(inputValue);

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
        it("returns 'hwb'", () => {
            // ----------------------------------------------------------------
            // explain your test

            // this test proves that the .colorFormat() method returns the
            // expected result

            // ----------------------------------------------------------------
            // setup your test

            const inputValue = makeCssHwbColorData(
                "original",
                "hwb(255, 0%, 0%)",
                {
                    hue: 255,
                    whiteness: 0,
                    blackness: 0,
                    alpha: 1,
                }
            );
            const unit = new CssHwbColor(inputValue);

            const expectedValue = "hwb";

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

            // this test proves that the .colorFormat() method returns the
            // expected result

            // ----------------------------------------------------------------
            // setup your test

            const inputValue = makeCssHwbColorData(
                "original",
                "hwb(255, 0%, 0%)",
                {
                    hue: 255,
                    whiteness: 0,
                    blackness: 0,
                    alpha: 1,
                }
            );
            const unit = new CssHwbColor(inputValue);

            const expectedValue = "sRGB";

            // ----------------------------------------------------------------
            // perform the change

            const actualValue = unit.colorSpace();

            // ----------------------------------------------------------------
            // test the results

            expect(actualValue).to.eql(expectedValue);
        });
    });
});