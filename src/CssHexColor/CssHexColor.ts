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

import * as colorConvert from "color-convert";

import { CssColor } from "../CssColor/CssColor";
import type { CssColorData } from "../CssColor/CssColorData";
import type { CssColorspacedColor } from "../CssColorspace/CssColorspacedColor";
import type { CssHslColor } from "../CssHslColor/CssHslColor";
import type { CssHwbColor } from "../CssHwbColor/CssHwbColor";
import { CssRgbColor, type CssRgbColorChannelsData, type CssRgbColorChannelsTuple } from "../CssRgbColor/CssRgbColor";

/**
 * CssHexColorData represents a CSS color that's defined in `#RRGGBB` format.
 */
export interface CssHexColorData extends CssColorData, CssColorspacedColor
{
    _type: "@safelytyped/css-color/CssHexColor";
}

/**
 * CssHexColor is a {@link CssColor} that was created from CSS's `#RRGGBB`
 * format.
 */
export class CssHexColor extends CssColor<CssHexColorData>
{
    public constructor(
        data: CssHexColorData
    )
    {
        // make sure that the hex value is in lower-case
        // so that we don't have to convert it everywhere
        data.definition = data.definition.toLowerCase();

        // all done
        super(data);
    }

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
        const rgb = colorConvert.hex.rgb(this.hex());

        return new CssRgbColor({
            name: this.data.name,
            definition: this.data.definition,
            channels: {
                red: rgb[0],
                green: rgb[1],
                blue: rgb[2],
                alpha: 0,
            },
            colorSpace: "sRGB",
            _type: "@safelytyped/css-color/CssRgbColorData",
        });
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

    public hex(): string
    {
        return this.data.definition;
    }
}