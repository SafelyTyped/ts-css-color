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


import { CssColor, HSL_MODEL_CONVERTER, type CssHslColorChannelsTuple, type HslColorModel, type HslConversionModel } from "../index";

/**
 * CssHslColor is a {@link CssColor} that was created from a CSS HSL
 * definition.
 */
export class CssHslColor extends CssColor<"hsl", "sRGB", HslColorModel, HslConversionModel>
{
    public constructor(
        name: string,
        definition: string,
        colorModel: HslColorModel
    )
    {
        super(
            {
                name,
                definition,
                colorModel,
            },
            HSL_MODEL_CONVERTER,
        );
    }

    // ================================================================
    //
    // OTHER FORMATS
    //
    // ----------------------------------------------------------------

    /**
     * channelsTuple() returns the `H`, `S` and `L` channels as an
     * array.
     *
     * NOTE that we deliberately leave out the alpha channel, as third-party
     * color conversion packages seem to prefer this.
     */
    public get channelsTuple(): CssHslColorChannelsTuple
    {
        return [
            this.data.colorModel.hue,
            this.data.colorModel.saturation,
            this.data.colorModel.luminosity,
        ];
    }

    // ================================================================
    //
    // COMPONENT VALUES
    //
    // ----------------------------------------------------------------

    /**
     * alpha() returns the alpha channel value of this color, as a number
     * between 0-1
     *
     * @returns the `alpha` channel of this color
     */
    public get alpha(): number
    {
        return this.data.colorModel.alpha;
    }

    /**
     * hue() returns the `h` component from the hsl definition, as a number
     * between 0-359
     *
     * @returns the `h` component from the hsl definition
     */
    public get hue(): number
    {
        return this.data.colorModel.hue;
    }

    /**
     * saturation() returns the `s` component from the hsl definition,
     * as a number between 0-100
     *
     * @returns the `s` component from the hsl definition
     */
    public get saturation(): number
    {
        return this.data.colorModel.saturation;
    }

    /**
     * luminosity() returns the `l` component from the hsl definition,
     * as a number between 0-1
     *
     * @returns the `l` component from the hsl definition
     */
    public get luminosity(): number
    {
        return this.data.colorModel.luminosity;
    }
}