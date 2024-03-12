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

import type { Maybe } from "@safelytyped/core-types";
import { CssColor } from "../CssColor/CssColor";
import type { CssColorData } from "../CssColor/CssColorData";
import { makeCssColor } from "../CssColor/makeCssColor";
import type { CssSrgbColorSpace } from "../CssColorspace/CssSrgbColorSpace";
import type { CssHslColor } from "../CssHslColor/CssHslColor";
import type { CssHwbColor } from "../CssHwbColor/CssHwbColor";
import type { CssRgbColor, CssRgbColorChannelsData, CssRgbColorChannelsTuple } from "../CssRgbColor/CssRgbColor";
import { CSS_EXTENDED_COLORS_TO_HEX, type CssExtendedColor } from "./CssExtendedColors";

/**
 * CssKeywordColorData represents a CSS color that's defined using one
 * of the CSS extended color names.
 *
 * We reuse the `definition` field from {@link CssColorData} to hold
 * the keyword.
 */
export interface CssKeywordColorData extends CssColorData, CssSrgbColorSpace
{
    readonly _type: "@safelytyped/css-color/CssKeywordColor";
}

/**
 * CssKeywordColor is a {@link CssColor} that was defined from a CSS
 * extended color name.
 */
export class CssKeywordColor extends CssColor<CssKeywordColorData>
{
    // ================================================================
    //
    // CORE FORMATS
    //
    // ----------------------------------------------------------------

    public hsl(): CssHslColor
    {
        return this.rgb().hsl();
    }

    public hwb(): CssHwbColor
    {
        return this.rgb().hwb();
    }

    public rgb(): CssRgbColor
    {
        // get the hex for this color
        const hex = CSS_EXTENDED_COLORS_TO_HEX[this.data.definition as CssExtendedColor];

        // will always return a CssRgbColor
        return makeCssColor(hex) as CssRgbColor;
    }

    // ================================================================
    //
    // OTHER FORMATS
    //
    // ----------------------------------------------------------------

    /**
     * channelsData() returns the `R`, `G`, `B` and `A` components of
     * this color as an object.
     *
     * @returns
     */
    public channelsData(): CssRgbColorChannelsData
    {
        return this.rgb().channelsData();
    }

    /**
     * channelsTuple() returns the `R`, `G`, `B` components of
     * this color as an array.
     *
     * NOTE that we deliberately leave out the alpha channel, in order
     * to keep the underlying `color-convert` package happy.
     *
     * @returns
     */
    public channelsTuple(): CssRgbColorChannelsTuple
    {
        return this.rgb().channelsTuple();
    }

    public keyword(): Maybe<CssExtendedColor>
    {
        return this.data.definition as CssExtendedColor;
    }
}