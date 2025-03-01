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

import { isDark, makeCssColor } from "@safelytyped/css-color";
import { expect } from "chai";
import { describe } from "mocha";
import { DARK_COLORS, LIGHT_COLORS, MIDTONE_COLORS } from "./_fixtures/colorShades";

describe("isDark()", () => {
    it("returns 'false' from colors that are lighter", () => {
        LIGHT_COLORS.forEach((inputValue) => {
            // ----------------------------------------------------------------
            // explain your test

            // this test proves that isDark() understands lighter colours

            // ----------------------------------------------------------------
            // setup your test

            const color = makeCssColor(inputValue);

            // ----------------------------------------------------------------
            // perform the change

            const actualValue = isDark(color);

            // ----------------------------------------------------------------
            // test the results

            expect(actualValue).to.be.false;
        });
    });

    it("returns 'true' from colors that are darker", () => {
        DARK_COLORS.forEach((inputValue) => {
            // ----------------------------------------------------------------
            // explain your test

            // this test proves that isDark() understands darker colours

            // ----------------------------------------------------------------
            // setup your test

            const color = makeCssColor(inputValue);

            // ----------------------------------------------------------------
            // perform the change

            const actualValue = isDark(color);

            // ----------------------------------------------------------------
            // test the results

            expect(actualValue).to.be.true;
        });
    });

    it("returns 'false' from colors that are flat", () => {
        MIDTONE_COLORS.forEach((inputValue) => {
            // ----------------------------------------------------------------
            // explain your test

            // this test proves that isDark() understands flat colours

            // ----------------------------------------------------------------
            // setup your test

            const color = makeCssColor(inputValue);

            // ----------------------------------------------------------------
            // perform the change

            const actualValue = isDark(color);

            // ----------------------------------------------------------------
            // test the results

            expect(actualValue).to.be.false;
        });
    });
});