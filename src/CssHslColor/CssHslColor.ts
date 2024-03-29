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
import type { CssSrgbColorSpace } from "../CssColorspace/CssSrgbColorSpace";
import { CssRgbColor } from "../CssRgbColor/CssRgbColor";
import { CssHwbColor } from "../CssHwbColor/CssHwbColor";

/**
 * CssHslColorChannelsData represents the four channels of a HSL color
 * as an object.
 */
export interface CssHslColorChannelsData {
    "hue": number;
    "saturation": number;
    "luminosity": number;
    "alpha": number;
}

/**
 * CssHslColorChannelsTuple represents the three channels of a HSL color
 * as an array.
 */
export type CssHslColorChannelsTuple = [ number, number, number ];

/**
 * CssHslColorData represents the data that makes up a CSS HSL color.
 */
export interface CssHslColorData extends CssColorData, CssSrgbColorSpace {
    channels: CssHslColorChannelsData;

    readonly "_type": "@safelytyped/css-color/CssHslColorData";
}

/**
 * CssHslColor is a {@link CssColor} that was created from a CSS HSL
 * definition.
 */
export class CssHslColor extends CssColor<CssHslColorData>
{
    // ================================================================
    //
    // CORE FORMATS
    //
    // ----------------------------------------------------------------

    public rgb(): CssRgbColor
    {
        const model = colorConvert.hsl.rgb(this.channelsTuple());

        return new CssRgbColor({
            name: this.data.name,
            definition: this.data.definition,
            channels: {
                red: model[0],
                green: model[1],
                blue: model[2],
                alpha: this.data.channels.alpha,
            },
            colorSpace: this.data.colorSpace,
            _type: "@safelytyped/css-color/CssRgbColorData",
        });
    }

    public hsl(): CssHslColor
    {
        return this;
    }

    public hwb(): CssHwbColor
    {
        const model = colorConvert.hsl.hwb(this.channelsTuple());

        return new CssHwbColor({
            name: this.data.name,
            definition: this.data.definition,
            channels: {
                hue: model[0],
                whiteness: model[1],
                blackness: model[2],
                alpha: this.data.channels.alpha,
            },
            colorSpace: this.data.colorSpace,
            _type: "@safelytyped/css-color/CssHwbColorData",
        });
    }

    // ================================================================
    //
    // OTHER FORMATS
    //
    // ----------------------------------------------------------------

    /**
     * channelsData() returns the `H`, `S`, `L` and `A` channels as
     * an object.
     */
    public channelsData(): CssHslColorChannelsData
    {
        return this.data.channels;
    }

    /**
     * channelsTuple() returns the `H`, `S` and `L` channels as an
     * array.
     *
     * NOTE that we deliberately leave out the alpha channel, in order
     * to keep the underlying `color-convert` package happy.
     */
    public channelsTuple(): CssHslColorChannelsTuple
    {
        return [
            this.data.channels.hue,
            this.data.channels.saturation,
            this.data.channels.luminosity,
        ];
    }

    // ================================================================
    //
    // COMPONENT VALUES
    //
    // ----------------------------------------------------------------

    public hue(): number
    {
        return this.data.channels.hue;
    }

    public saturation(): number
    {
        return this.data.channels.saturation;
    }

    public luminosity(): number
    {
        return this.data.channels.luminosity;
    }
}