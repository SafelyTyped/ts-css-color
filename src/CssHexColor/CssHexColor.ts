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


import { CssColor, HEX_MODEL_CONVERTER, type CssHexColorDefinition, type CssRgbColorChannelsTuple, type HexColorModel, type RgbConversionModel } from "../index";

/**
 * CssHexColor is a {@link CssColor} that was created from CSS's `#RRGGBB`
 * format.
 */
export class CssHexColor extends CssColor<HexColorModel, RgbConversionModel>
{
    public constructor(
        name: string,
        definition: string,
        colorModel: HexColorModel,
    )
    {
        super(
            {
                name,
                definition,
                colorModel,
            },
            HEX_MODEL_CONVERTER,
        );
    }

    /**
     * channelsTuple() returns the `R`, `G`, `B` components of
     * this color as an array.
     *
     * NOTE that we deliberately leave out the alpha channel, as third-party
     * color conversion packages seem to prefer this.
     *
     * @returns
     */
    public get channelsTuple(): CssRgbColorChannelsTuple
    {
        return this.rgb.channelsTuple;
    }

    public get hex(): CssHexColorDefinition
    {
        // general case
        return this.data.colorModel.hex;
    }

    // ================================================================
    //
    // COMPONENT VALUES
    //
    // ----------------------------------------------------------------

    /**
     * red() returns the `R` component from the RGB definition, as a
     * number between 0-255.
     *
     * @returns the `R` component from the RGB definition
     */
    public get red()
    {
        return this.rgb.red;
    }

    /**
     * green() returns the `G` component from the RGB definition, as a
     * number between 0-255.
     *
     * @returns the `G` component from the RGB definition
     */
    public get green()
    {
        return this.rgb.green;
    }

    /**
     * blue() returns the `B` component from the RGB definition, as a
     * number between 0-255.
     *
     * @returns the `B` component from the RGB definition
     */
    public get blue()
    {
        return this.rgb.blue;
    }

    /**
     * alpha() returns the alpha channel value of this color, as a number
     * between 0-1
     *
     * @returns the `alpha` channel of this color
     */
    public get alpha()
    {
        return this.rgb.alpha;
    }
}