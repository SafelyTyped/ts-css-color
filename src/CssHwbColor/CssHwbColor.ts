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
import { CssHslColor, type CssHslColorChannelsTuple } from "../CssHslColor/CssHslColor";
import { CssRgbColor } from "../CssRgbColor/CssRgbColor";

export interface CssHwbColorChannelsData {
    hue: number;
    whiteness: number;
    blackness: number;

    alpha: number;
}

export type CssHwbColorChannelsTuple = [ number, number, number ];

export interface CssHwbColorData extends CssColorData, CssSrgbColorSpace
{
    channels: CssHwbColorChannelsData;

    readonly _type: "@safelytyped/css-color/CssHwbColorData";
}

export class CssHwbColor extends CssColor<CssHwbColorData>
{
    // ================================================================
    //
    // CORE FORMATS
    //
    // ----------------------------------------------------------------

    public hsl(): CssHslColor
    {
        const model = colorConvert.hwb.hsl(this.channelsTuple());

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
        return this;
    }

    public rgb(): CssRgbColor
    {
        const model = colorConvert.hwb.rgb(this.channelsTuple());

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

    // ================================================================
    //
    // OTHER FORMATS
    //
    // ----------------------------------------------------------------

    public channelsData(): CssHwbColorChannelsData
    {
        return this.data.channels;
    }

    public channelsTuple(): CssHslColorChannelsTuple
    {
        return [
            this.data.channels.hue,
            this.data.channels.whiteness,
            this.data.channels.blackness,
        ];
    }

    // ================================================================
    //
    // COMPONENT VALUES
    //
    // ----------------------------------------------------------------

    /**
     * hue() returns the `H` channel from this color, as a number between
     * 0-359.
     */
    public hue(): number
    {
        return this.data.channels.hue;
    }

    /**
     * blackness() returns the `B` channel from this color, as a number
     * between 0-100.
     */
    public blackness(): number
    {
        return this.data.channels.blackness;
    }

    /**
     * whiteness() returns the `W` channel from this color, as a number
     * between 0-100.
     */
    public whiteness(): number
    {
        return this.data.channels.whiteness;
    }

    /**
     * alpha() returns the alpha channel from this color, as a number
     * between 0-1.
     */
    public alpha(): number
    {
        return this.data.channels.alpha;
    }
}