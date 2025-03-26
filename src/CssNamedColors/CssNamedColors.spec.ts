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

import { HashMap } from "@safelytyped/core-types";
import { CSS_NAMED_COLOR_TO_HEX, makeCssColor } from "@safelytyped/css-color";
import { expect } from "chai";
import { describe } from "mocha";

describe("CSS Named Colors", () => {
    HashMap.forEach(CSS_NAMED_COLOR_TO_HEX, (value, name) => {
        describe(name, () => {
            it("can be instantiated", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that we can create each CSS named color

                // ----------------------------------------------------------------
                // setup your test

                // ----------------------------------------------------------------
                // perform the change

                const unit = makeCssColor(name);

                // ----------------------------------------------------------------
                // test the results

                expect(unit).is.not.null;
                expect(unit).is.not.undefined;
            });

            it("can be converted to RGB format", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that the predefined color can be turned into
                // a CssRgbColor

                // ----------------------------------------------------------------
                // setup your test

                const unit = makeCssColor(name);

                // ----------------------------------------------------------------
                // perform the change

                const converted = unit.rgb;

                // ----------------------------------------------------------------
                // test the results

                // we can check that the .hex property matches the color definition
                // because conversion is loss-less
                expect(converted.hex).eql(value);
            });

            it("can be converted to HSL format", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that the predefined color can be turned into
                // a CssHslColor

                // ----------------------------------------------------------------
                // setup your test

                const unit = makeCssColor(name);

                // ----------------------------------------------------------------
                // perform the change

                const converted = unit.hsl;

                // ----------------------------------------------------------------
                // test the results

                expect(converted.colorModel).to.eql("hsl");

                // we cannot check that the hex() matches the color definition
                // because conversion is NOT lossless
            });

            it("can be converted to HWB format", () => {
                // ----------------------------------------------------------------
                // explain your test

                // this test proves that the predefined color can be turned into
                // a CssHwbColor

                // ----------------------------------------------------------------
                // setup your test

                const unit = makeCssColor(name);

                // ----------------------------------------------------------------
                // perform the change

                const converted = unit.hwb;

                // ----------------------------------------------------------------
                // test the results

                expect(converted.colorModel).to.eql("hwb");

                // we cannot check that the .hex matches the color definition
                // because conversion is NOT lossless
            });
        });
    });
});