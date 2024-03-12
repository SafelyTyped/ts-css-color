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
import { CssHslColor } from "../CssHslColor/CssHslColor";
import { CssHwbColor } from "../CssHwbColor/CssHwbColor";

/**
 * CssRgbColorChannelsData represents the channels of a CSS RGBA color,
 * as an object.
 */
export interface CssRgbColorChannelsData {
    "red": number;
    "green": number;
    "blue": number;
    "alpha": number;
}

/**
 * CssRgbColorChannelsTuple represents the channels of a CSS RGB color,
 * as an array.
 *
 * NOTE that we deliberately leave out the alpha channel, to keep the
 * underlying `color-convert` package happy.
 */
export type CssRgbColorChannelsTuple = [ number, number, number ];

/**
 * CssRgbColorData represents the data for a CSS color that was defined
 * in the RGBA format.
 */
export interface CssRgbColorData extends CssColorData, CssSrgbColorSpace {
    channels: CssRgbColorChannelsData;

    readonly "_type": "@safelytyped/css-color/CssRgbColorData";
}

/**
 * CssRgbColor represents a {@link CssColor} that was defined using the
 * CSS RGBA format.
 */
export class CssRgbColor extends CssColor<CssRgbColorData>
{
    public hsl(): CssHslColor
    {
        const model = colorConvert.rgb.hsl(this.channelsTuple());

        return new CssHslColor({
            name: this.data.name,
            definition: this.data.definition,
            channels: {
                hue: model[0],
                saturation: model[1],
                luminosity: model[2],
                alpha: this.data.channels.alpha,
            },
            colorSpace: this.data.colorSpace,
            _type: "@safelytyped/css-color/CssHslColorData",
        });
    }

    public hwb(): CssHwbColor
    {
        const model = colorConvert.rgb.hwb(this.channelsTuple());

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

    public rgb(): CssRgbColor
    {
        return this;
    }

    // ================================================================
    //
    // OTHER FORMATS
    //
    // ----------------------------------------------------------------

    /**
     * channelsData() returns the color channels as an object.
     */
    public channelsData(): CssRgbColorChannelsData
    {
        return this.data.channels;
    }

    /**
     * channelsTuple() returns the color channels as an array.
     */
    public channelsTuple(): CssRgbColorChannelsTuple
    {
        return [
            this.data.channels.red,
            this.data.channels.green,
            this.data.channels.blue,
        ];
    }

    public hex(): string
    {
        return "#" + colorConvert.rgb.hex(this.channelsTuple()).toLowerCase();
    }

    // ================================================================
    //
    // COMPONENT VALUES
    //
    // ----------------------------------------------------------------

    public red(): number
    {
        return this.data.channels.red;
    }

    public green(): number
    {
        return this.data.channels.green;
    }

    public blue(): number
    {
        return this.data.channels.blue;
    }

    public alpha(): number
    {
        return this.data.channels.alpha;
    }
}