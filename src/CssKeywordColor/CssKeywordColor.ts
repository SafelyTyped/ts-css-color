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

import { DEFAULT_DATA_PATH, THROW_THE_ERROR, type DataGuaranteeOptions, type FunctionalOption, type Maybe } from "@safelytyped/core-types";
import { CssColor } from "../CssColor/CssColor";
import { makeCssColor } from "../CssColor/makeCssColor";
import type { CssHslColor } from "../CssHslColor/CssHslColor";
import type { CssHwbColor } from "../CssHwbColor/CssHwbColor";
import { CSS_EXTENDED_COLORS_TO_HEX } from "../CssExtendedColors/CssExtendedColors.const";
import type { CssExtendedColor } from "../CssExtendedColors/CssExtendedColor.type";
import type { CssKeywordColorData } from "./CssKeywordColorData.type";
import type { CssRgbColor } from "../CssRgbColor/CssRgbColor";
import type { CssRgbColorChannelsData } from "../CssRgbColor/CssRgbColorChannelsData.type";
import type { CssRgbColorChannelsTuple } from "../CssRgbColor/CssRgbColorChannelsTuple.type";
import type { CssHslColorData } from "../CssHslColor/CssHslColorData.type";
import type { CssHwbColorData } from "../CssHwbColor/CssHwbColorData.type";
import type { CssRgbColorData } from "../CssRgbColor/CssRgbColorData.type";
import { makeCssHexColorDefinition } from "../CssHexColor/makeCssHexColorDefinition";
import type { CssHexColorDefinition } from "../CssHexColor/CssHexColorDefinition.type";

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

    public hsl(
        {
            path = DEFAULT_DATA_PATH,
            onError = THROW_THE_ERROR
        }: DataGuaranteeOptions = {},
        ...fnOpts: FunctionalOption<CssHslColorData, DataGuaranteeOptions>[]
    ): CssHslColor
    {
        return this.rgb().hsl(
            {path, onError},
            ...fnOpts,
        );
    }

    public hwb(
        {
            path = DEFAULT_DATA_PATH,
            onError = THROW_THE_ERROR
        }: DataGuaranteeOptions = {},
        ...fnOpts: FunctionalOption<CssHwbColorData, DataGuaranteeOptions>[]
    ): CssHwbColor
    {
        return this.rgb().hwb(
            {path, onError},
            ...fnOpts,
        );
    }

    public rgb(
        {
            path = DEFAULT_DATA_PATH,
            onError = THROW_THE_ERROR
        }: DataGuaranteeOptions = {},
        ...fnOpts: FunctionalOption<CssRgbColorData, DataGuaranteeOptions>[]
    ): CssRgbColor
    {
        // special case - can we use the cached value?
        if (this.cachedConversions.rgb && fnOpts.length === 0) {
            return this.cachedConversions.rgb;
        }

        // general case ...

        // this should inject the original definition into the returned
        // color object
        const definition = this.definition();
        const extraOpt = function (item: CssRgbColorData) {
            item.definition = definition;
            return item;
        };
        fnOpts.push(extraOpt);

        const retval = makeCssColor(
            this.hex(),
            { colorName: this.data.name },
        ).rgb(
            { path, onError },
            ...fnOpts,
        );

        // do we have a static conversion?
        if (fnOpts.length === 0) {
            // yes, so cache it!
            this.cachedConversions.rgb = retval;
        }

        // all done
        return retval;
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

    public hex(): CssHexColorDefinition {
        return makeCssHexColorDefinition(CSS_EXTENDED_COLORS_TO_HEX[this.data.definition as CssExtendedColor]);
    }

    public keyword(): Maybe<CssExtendedColor>
    {
        return this.data.definition as CssExtendedColor;
    }
}