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
import type { Rgb } from "culori";
import { convertKeywordToConversionModel, CSS_EXTENDED_COLORS_TO_HEX, CssColor, makeCssHexColorDefinition, type CssExtendedColor, type CssHexColorDefinition, type CssKeywordColorData, type CssRgbColorChannelsData, type CssRgbColorChannelsTuple } from "../index";

/**
 * CssKeywordColor is a {@link CssColor} that was defined from a CSS
 * extended color name.
 */
export class CssKeywordColor extends CssColor<CssKeywordColorData, Rgb>
{
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
     * NOTE that we deliberately leave out the alpha channel, as third-party
     * color conversion packages seem to prefer this
     */
    public channelsTuple(): CssRgbColorChannelsTuple
    {
        return this.rgb().channelsTuple();
    }

    public hex(): CssHexColorDefinition {
        return makeCssHexColorDefinition(CSS_EXTENDED_COLORS_TO_HEX[this.data.definition as CssExtendedColor]);
    }

    public keyword(): Maybe<CssExtendedColor>
    {
        return this.data.definition as CssExtendedColor;
    }

    public conversionModel(): Rgb {
        return convertKeywordToConversionModel(this.definition() as CssExtendedColor);
    }

    public css() {
        return this.definition();
    }
}