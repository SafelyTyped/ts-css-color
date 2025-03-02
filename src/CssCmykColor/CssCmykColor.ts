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

import { DEFAULT_DATA_PATH, THROW_THE_ERROR, type DataGuaranteeOptions, type FunctionalOption } from "@safelytyped/core-types";
import type { Rgb } from "culori";
import { CssColor } from "../CssColor/CssColor";
import { makeCssColor } from "../CssColor/makeCssColor";
import type { CssHexColorDefinition } from "../CssHexColor/CssHexColorDefinition.type";
import { CssHslColor } from "../CssHslColor/CssHslColor";
import type { CssHslColorData } from "../CssHslColor/CssHslColorData.type";
import { makeCssHslColorFromCssColor } from "../CssHslColor/makeCssHslColorFromCssColor";
import type { CssHsvColor } from "../CssHsvColor/CssHsvColor";
import type { CssHsvColorData } from "../CssHsvColor/CssHsvColorData.type";
import { makeCssHsvColorFromCssColor } from "../CssHsvColor/makeCssHsvColorFromCssColor";
import { CssHwbColor } from "../CssHwbColor/CssHwbColor";
import type { CssHwbColorData } from "../CssHwbColor/CssHwbColorData.type";
import { makeCssHwbColorFromCssColor } from "../CssHwbColor/makeCssHwbColorFromCssColor";
import { CssOklchColor } from "../CssOklchColor/CssOklchColor";
import type { CssOklchColorData } from "../CssOklchColor/CssOklchColorData.type";
import { makeCssOklchColorFromCssColor } from "../CssOklchColor/makeCssOklchColorFromCssColor";
import type { CssRgbColor } from "../CssRgbColor/CssRgbColor";
import type { CssRgbColorData } from "../CssRgbColor/CssRgbColorData.type";
import { makeCssRgbColorFromCssColor } from "../CssRgbColor/makeCssRgbColorFromCssColor";
import type { CssCmykColorChannelsData } from "./CssCmykColorChannelsData.type";
import type { CssCmykColorChannelsTuple } from "./CssCmykColorChannelsTuple.type";
import type { CssCmykColorData } from "./CssCmykColorData.type";
import { makeCssCmykColorFromCssColor } from "./makeCssCmykColorFromCssColor";

/**
 * CssCmykColor represents a {@link CssColor} that was defined in the
 * CMYK color model format.
 */
export class CssCmykColor extends CssColor<CssCmykColorData, Rgb>
{
    // ================================================================
    //
    // CONVERSIONS TO OTHER FORMATS
    //
    // ----------------------------------------------------------------

    public cmyk(
        {
            path = DEFAULT_DATA_PATH,
            onError = THROW_THE_ERROR
        }: DataGuaranteeOptions = {},
        ...fnOpts: FunctionalOption<CssCmykColorData, DataGuaranteeOptions>[]
    )
    {
        return makeCssCmykColorFromCssColor(
            this,
            { path, onError },
            ...fnOpts
        );
    }

    public hsl(
        {
            path = DEFAULT_DATA_PATH,
            onError = THROW_THE_ERROR
        }: DataGuaranteeOptions = {},
        ...fnOpts: FunctionalOption<CssHslColorData, DataGuaranteeOptions>[]
    ): CssHslColor
    {
        return makeCssHslColorFromCssColor(this, {path, onError}, ...fnOpts);
    }

    public hsv(
        {
            path = DEFAULT_DATA_PATH,
            onError = THROW_THE_ERROR
        }: DataGuaranteeOptions = {},
        ...fnOpts: FunctionalOption<CssHsvColorData, DataGuaranteeOptions>[]
    ): CssHsvColor
    {
        return makeCssHsvColorFromCssColor(
            this,
            { path, onError },
            ...fnOpts
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
        return makeCssHwbColorFromCssColor(this, {path, onError}, ...fnOpts);
    }

    public oklch(
        {
            path = DEFAULT_DATA_PATH,
            onError = THROW_THE_ERROR
        }: DataGuaranteeOptions = {},
        ...fnOpts: FunctionalOption<CssOklchColorData, DataGuaranteeOptions>[]
    ): CssOklchColor
    {
        return makeCssOklchColorFromCssColor(this, { path, onError }, ...fnOpts);
    }

    public rgb(
        {
            path = DEFAULT_DATA_PATH,
            onError = THROW_THE_ERROR
        }: DataGuaranteeOptions = {},
        ...fnOpts: FunctionalOption<CssRgbColorData, DataGuaranteeOptions>[]
    ): CssRgbColor
    {
        // conversion FROM cmyk isn't 100% lossless
        //
        // safest way is to recreate the color instead
        return makeCssRgbColorFromCssColor(
            makeCssColor(
                this.definition(),
                {
                    colorName: this.name(),
                    path,
                    onError
                }
            ),
            { path, onError },
            ...fnOpts
        );
    }

    // ================================================================
    //
    // OTHER FORMATS
    //
    // ----------------------------------------------------------------

    /**
     * channelsData() returns the color channels as an object.
     */
    public channelsData(): CssCmykColorChannelsData
    {
        return this.data.channels;
    }

    /**
     * channelsTuple() returns the color channels as an array.
     */
    public channelsTuple(): CssCmykColorChannelsTuple
    {
        return [
            this.data.channels.cyan,
            this.data.channels.magenta,
            this.data.channels.yellow,
            this.data.channels.key,
        ];
    }

    public hex(): CssHexColorDefinition
    {
        return this.rgb().hex();
    }

    public conversionModel(): Rgb {
        return this.rgb().conversionModel();
    }

    public css()
    {
        // CMYK isn't supported in CSS
        return this.rgb().css();
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
    public cyan(): number
    {
        return this.data.channels.cyan;
    }

    /**
     * magenta() returns the `M` component from the CMYK definition, as a
     * number between 0-100.
     *
     * @returns the `M` component from the CMYK definition
     */
    public magenta(): number
    {
        return this.data.channels.magenta;
    }

    /**
     * yellow() returns the `Y` component from the CMYK definition, as a
     * number between 0-100.
     *
     * @returns the `Y` component from the CMYK definition
     */
    public yellow(): number
    {
        return this.data.channels.yellow;
    }

    /**
     * key() returns the 'K' component from the CMYK definition, as a number
     * between 0-100
     *
     * @returns the 'K' component from the CMYK definition
     */
    public key(): number
    {
        return this.data.channels.key;
    }
}