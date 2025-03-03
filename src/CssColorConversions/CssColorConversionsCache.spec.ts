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

import { CssHexColor, makeCssHexColor, type CssHexColorData } from "@safelytyped/css-color";
import { expect } from "chai";
import { describe } from "mocha";
import { CSS_RGB_CONVERSIONS } from "../CssRgbColor/CSS_RGB_CONVERSIONS";
import { CssColorConversionsCache } from "./CssColorConversionsCache";

describe("CssColorConversionsCache", () => {
    it("starts with an empty cache", () => {
        // ----------------------------------------------------------------
        // explain your test

        // this test proves that all new cache instances start with zero
        // cached colors

        // ----------------------------------------------------------------
        // setup your test

        const unit = new CssColorConversionsCache<CssHexColor, CssHexColorData>("hex");
        const expectedValue = {};

        // ----------------------------------------------------------------
        // perform the change

        const actualValue = unit.cache();

        // ----------------------------------------------------------------
        // test the results

        expect(actualValue).to.eqls(expectedValue);
    });

    describe(".convert()", () => {
        it("writes new colors to the cache", () => {
            // ----------------------------------------------------------------
            // explain your test

            //

            // ----------------------------------------------------------------
            // setup your test

            // we need the cache that our classes will actually be using!
            const unit = CSS_RGB_CONVERSIONS;

            // make sure the cache is empty
            unit.reset();
            expect(unit.cache()).to.eqls({});

            const inputValue = makeCssHexColor("#fff");

            // ----------------------------------------------------------------
            // perform the change

            const actualValue = inputValue.rgb();
            const cacheContents = Object.values(unit.cache());

            // ----------------------------------------------------------------
            // test the results

            expect(cacheContents.length).to.eql(1);
            expect(cacheContents[0]).to.eqls(actualValue);
        });

        it("returns cached colors if doing a static conversion", () => {
            // ----------------------------------------------------------------
            // explain your test

            //

            // ----------------------------------------------------------------
            // setup your test

            // we need the cache that our classes will actually be using!
            const unit = CSS_RGB_CONVERSIONS;

            // make sure the cache is empty
            unit.reset();
            expect(unit.cache()).to.eqls({});

            // we need to seed the cache
            const inputValue = makeCssHexColor("#fff");
            const cachedColor = inputValue.rgb();

            // ----------------------------------------------------------------
            // perform the change

            const actualValue = inputValue.rgb();

            // ----------------------------------------------------------------
            // test the results

            // equal() only passes if the two vars point to the same
            // memory reference
            expect(actualValue).to.equal(cachedColor);
        });
    });

    describe(".delete()", () => {
        it("removes the input color from the cache", () => {
            // ----------------------------------------------------------------
            // explain your test

            //

            // ----------------------------------------------------------------
            // setup your test

            // we need the cache that our classes will actually be using!
            const unit = CSS_RGB_CONVERSIONS;

            // we need to seed the cache
            const inputValue = makeCssHexColor("#fff");
            const cachedColor = inputValue.rgb();

            // make sure this color is now in the cache
            expect(unit.has(cachedColor)).to.be.true;

            // ----------------------------------------------------------------
            // perform the change

            unit.delete(cachedColor);

            // ----------------------------------------------------------------
            // test the results

            expect(unit.has(cachedColor)).to.be.false;
        });
    });

    describe(".has()", () => {
        it("returns `true` if the input is already cached", () => {
            // ----------------------------------------------------------------
            // explain your test

            //

            // ----------------------------------------------------------------
            // setup your test

            // we need the cache that our classes will actually be using!
            const unit = CSS_RGB_CONVERSIONS;

            // make sure the cache is empty
            unit.reset();
            expect(unit.cache()).to.eqls({});

            // we need to seed the cache
            const inputValue = makeCssHexColor("#fff");
            const cachedColor = inputValue.rgb();

            // ----------------------------------------------------------------
            // perform the change

            const actualValue = unit.has(cachedColor);

            // ----------------------------------------------------------------
            // test the results

            expect(actualValue).to.be.true;
        });

        it("returns `true` if the input is currently not cached", () => {
            // ----------------------------------------------------------------
            // explain your test

            //

            // ----------------------------------------------------------------
            // setup your test

            // we need the cache that our classes will actually be using!
            const unit = CSS_RGB_CONVERSIONS;

            // we need a value to pass into unit.has()
            const inputValue = makeCssHexColor("#fff");
            const cachedColor = inputValue.rgb();

            // make sure the cache is empty
            unit.reset();
            expect(unit.cache()).to.eqls({});

            // ----------------------------------------------------------------
            // perform the change

            const actualValue = unit.has(cachedColor);

            // ----------------------------------------------------------------
            // test the results

            expect(actualValue).to.be.false;
        });
    });
});