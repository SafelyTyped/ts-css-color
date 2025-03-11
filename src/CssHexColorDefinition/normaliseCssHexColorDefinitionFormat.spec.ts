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

import type { CssHexColorDefinition } from "@safelytyped/css-color";
import { normaliseCssHexColorDefinitionFormat } from "@safelytyped/css-color";
import { expect } from "chai";
import { describe, it } from "mocha";
import { VALID_CSS_HEX_COLOR_DEFINITIONS } from "./_fixtures/CssHexColorDefinitionFixtures";

// we need to split the fixtures up into two types:
//
// - ones that need format-normalising
// - ones that do not

const SHORT_HEX_FIXTURES: CssHexColorDefinition[] = [];
const FULL_FAT_HEX_FIXTURES: CssHexColorDefinition[] = [];

VALID_CSS_HEX_COLOR_DEFINITIONS.forEach((fixture) => {
    switch(fixture.inputValue.length) {
        case 4:
            SHORT_HEX_FIXTURES.push(fixture.inputValue);
            break;

        default:
            FULL_FAT_HEX_FIXTURES.push(fixture.inputValue);
    }
});

describe("normaliseCssHexColorDefinitionFormat()", () => {
    SHORT_HEX_FIXTURES.forEach((fixture) => {
        it(`[${fixture}] converts short hex values to RRGGBB format`, () => {
            // ----------------------------------------------------------------
            // explain your test

            // this test proves that the unit under test does the reformatting
            // that we are expecting

            // ----------------------------------------------------------------
            // setup your test

            // ----------------------------------------------------------------
            // perform the change

            const actualValue = normaliseCssHexColorDefinitionFormat(fixture);

            // ----------------------------------------------------------------
            // test the results

            expect(actualValue.length).to.eql(7);
            expect(actualValue).to.not.eql(fixture);
        });
    });

    FULL_FAT_HEX_FIXTURES.forEach((fixture) => {
        it(`[${fixture}] leaves RRGGBB hex values untouched`, () => {
            // ----------------------------------------------------------------
            // explain your test

            // this test proves that the unit under test does not make
            // unnecessary changes

            // ----------------------------------------------------------------
            // setup your test

            // ----------------------------------------------------------------
            // perform the change

            const actualValue = normaliseCssHexColorDefinitionFormat(fixture);

            // ----------------------------------------------------------------
            // test the results

            expect(actualValue).to.eql(fixture);
        });
    });
});