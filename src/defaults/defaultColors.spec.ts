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

import { expect } from "chai";
import { describe } from "mocha";
import { CssHexColor } from "../CssHexColor/CssHexColor";
import { BLACK, WHITE } from "./defaultColors.const";

describe("BLACK (internal const)", () => {
    it("has the hex value of #000000", () => {
        // ----------------------------------------------------------------
        // explain your test

        // this test proves that our pre-built color BLACK has the correct
        // CSS color definition

        // ----------------------------------------------------------------
        // setup your test

        const expectedHexValue = "#000000";

        // ----------------------------------------------------------------
        // perform the change

        const actualHexValue = BLACK.hex();

        // ----------------------------------------------------------------
        // test the results

        expect(actualHexValue).to.eql(expectedHexValue);
    });

    it("is a CssHexColor", () => {
        // ----------------------------------------------------------------
        // explain your test

        // this test proves that `makeCssColor()` has created the type
        // of CssColor that we're expecting for this constant

        // ----------------------------------------------------------------
        // setup your test

        // ----------------------------------------------------------------
        // perform the change

        // ----------------------------------------------------------------
        // test the results

        expect(BLACK).is.instanceOf(CssHexColor);
    });
});

describe("WHITE (internal const)", () => {
    it("has the hex value of #ffffff", () => {
        // ----------------------------------------------------------------
        // explain your test

        // this test proves that our pre-built color WHITE has the correct
        // CSS color definition

        // ----------------------------------------------------------------
        // setup your test

        const expectedHexValue = "#ffffff";

        // ----------------------------------------------------------------
        // perform the change

        const actualHexValue = WHITE.hex();

        // ----------------------------------------------------------------
        // test the results

        expect(actualHexValue).to.eql(expectedHexValue);
    });

    it("is a CssHexColor", () => {
        // ----------------------------------------------------------------
        // explain your test

        // this test proves that `makeCssColor()` has created the type
        // of CssColor that we're expecting for this constant

        // ----------------------------------------------------------------
        // setup your test

        // ----------------------------------------------------------------
        // perform the change

        // ----------------------------------------------------------------
        // test the results

        expect(WHITE).is.instanceOf(CssHexColor);
    });
});