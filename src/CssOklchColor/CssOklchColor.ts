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

import type { Oklch } from "culori";
import { convertOklchChannelsDataToConversionModel, CssColor, type CssHexColorDefinition, type CssOklchColorChannelsData, type CssOklchColorChannelsTuple, type CssOklchColorData } from "../index";

/**
 * CssOklchColor represents a {@link CssColor} that was defined using the
 * CSS RGBA format.
 */
export class CssOklchColor extends CssColor<CssOklchColorData, Oklch>
{
    // ================================================================
    //
    // OTHER FORMATS
    //
    // ----------------------------------------------------------------

    /**
     * channelsData() returns the color channels as an object.
     */
    public channelsData(): CssOklchColorChannelsData
    {
        return this.data.channels;
    }

    /**
     * channelsTuple() returns the color channels as an array.
     *
     * NOTE that we deliberately leave out the alpha channel, as third-party
     * color conversion packages seem to prefer this.
     */
    public channelsTuple(): CssOklchColorChannelsTuple
    {
        return [
            this.data.channels.lightness,
            this.data.channels.chroma,
            this.data.channels.hue,
        ];
    }

    public hex(): CssHexColorDefinition
    {
        return this.rgb().hex();
    }

    public conversionModel(): Oklch {
        return convertOklchChannelsDataToConversionModel(this.data.channels);
    }

    // ================================================================
    //
    // COMPONENT VALUES
    //
    // ----------------------------------------------------------------

    public lightness(): number
    {
        return this.data.channels.lightness;
    }

    public chroma(): number
    {
        return this.data.channels.chroma;
    }

    public hue(): number
    {
        return this.data.channels.hue;
    }

    public alpha(): number
    {
        return this.data.channels.alpha;
    }
}