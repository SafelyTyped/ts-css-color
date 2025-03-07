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

import { CMYK_MODEL_CONVERTER, CssColor, type CmykColorModel, type CssCmykColorChannelsTuple } from "../index";

/**
 * CssCmykColor represents a {@link CssColor} that was defined in the
 * CMYK color model format.
 */
export class CssCmykColor extends CssColor<"cmyk", "CMYK", CmykColorModel, undefined>
{
    public constructor(
        name: string,
        definition: string,
        colorModel: CmykColorModel
    )
    {
        super(
            {
                name,
                definition,
                colorModel,
            },
            CMYK_MODEL_CONVERTER,
        );
    }

    // ================================================================
    //
    // OTHER FORMATS
    //
    // ----------------------------------------------------------------

    /**
     * channelsTuple() returns the color channels as an array.
     */
    public get channelsTuple(): CssCmykColorChannelsTuple
    {
        return [
            this.data.colorModel.cyan,
            this.data.colorModel.magenta,
            this.data.colorModel.yellow,
            this.data.colorModel.key,
        ];
    }

    // ================================================================
    //
    // COMPONENT VALUES
    //
    // ----------------------------------------------------------------

    /**
     * cyan() returns the `C` component from the CMYK definition, as a
     * number between 0-100.
     *
     * @returns the `C` component from the CMYK definition
     */
    public get cyan(): number
    {
        return this.data.colorModel.cyan;
    }

    /**
     * magenta() returns the `M` component from the CMYK definition, as a
     * number between 0-100.
     *
     * @returns the `M` component from the CMYK definition
     */
    public get magenta(): number
    {
        return this.data.colorModel.magenta;
    }

    /**
     * yellow() returns the `Y` component from the CMYK definition, as a
     * number between 0-100.
     *
     * @returns the `Y` component from the CMYK definition
     */
    public get yellow(): number
    {
        return this.data.colorModel.yellow;
    }

    /**
     * key() returns the 'K' component from the CMYK definition, as a number
     * between 0-100
     *
     * @returns the 'K' component from the CMYK definition
     */
    public get key(): number
    {
        return this.data.colorModel.key;
    }
}