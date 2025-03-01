//
// Copyright (c) 2025-present Ganbaro Digital Ltd
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
import type { CssCmykColor } from "../CssCmykColor/CssCmykColor";
import type { CssCmykColorData } from "../CssCmykColor/CssCmykColorData.type";
import { makeCssCmykColorFromCssColor } from "../CssCmykColor/makeCssCmykColorFromCssColor";
import { CssColor } from "../CssColor/CssColor";
import type { CssHslColor } from "../CssHslColor/CssHslColor";
import type { CssHslColorData } from "../CssHslColor/CssHslColorData.type";
import { makeCssHslColorFromCssColor } from "../CssHslColor/makeCssHslColorFromCssColor";
import type { CssHwbColor } from "../CssHwbColor/CssHwbColor";
import type { CssHwbColorData } from "../CssHwbColor/CssHwbColorData.type";
import { makeCssHwbColorFromCssColor } from "../CssHwbColor/makeCssHwbColorFromCssColor";
import type { CssOklchColor } from "../CssOklchColor/CssOklchColor";
import type { CssOklchColorData } from "../CssOklchColor/CssOklchColorData.type";
import { makeCssOklchColorFromCssColor } from "../CssOklchColor/makeCssOklchColorFromCssColor";
import type { CssRgbColor } from "../CssRgbColor/CssRgbColor";
import type { CssRgbColorData } from "../CssRgbColor/CssRgbColorData.type";
import { makeCssRgbColorFromCssColor } from "../CssRgbColor/makeCssRgbColorFromCssColor";
import { convertHsvChannelsDataToConversionModel } from "./convertHsvChannelsDataToConversionModel";
import type { CssHsvColorChannelsData } from "./CssHsvColorChannelsData.type";
import type { CssHsvColorChannelsTuple } from "./CssHsvColorChannelsTuple.type";
import type { CssHsvColorData } from "./CssHsvColorData.type";
import type { Hsv } from "./Hsv.type";
import { makeCssHsvColorFromCssColor } from "./makeCssHsvColorFromCssColor";

/**
 * CssHsvColor is a {@link CssColor} that was created from a CSS HSV
 * definition.
 */
export class CssHsvColor extends CssColor<CssHsvColorData, Hsv>
{
    // ================================================================
    //
    // CORE FORMATS
    //
    // ----------------------------------------------------------------

    public cmyk(
        {
            path = DEFAULT_DATA_PATH,
            onError = THROW_THE_ERROR
        }: DataGuaranteeOptions = {},
        ...fnOpts: FunctionalOption<CssCmykColorData, DataGuaranteeOptions>[]
    ): CssCmykColor
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
        return makeCssHslColorFromCssColor(
            this,
            { path, onError },
            ...fnOpts
        );
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
        return makeCssHwbColorFromCssColor(
            this,
            { path, onError },
            ...fnOpts
        );
    }

    public oklch(
        {
            path = DEFAULT_DATA_PATH,
            onError = THROW_THE_ERROR
        }: DataGuaranteeOptions = {},
        ...fnOpts: FunctionalOption<CssOklchColorData, DataGuaranteeOptions>[]
    ): CssOklchColor
    {
        return makeCssOklchColorFromCssColor(
            this,
            { path, onError },
            ...fnOpts
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
        return makeCssRgbColorFromCssColor(
            this,
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
     * channelsData() returns the `H`, `S`, `V` and `A` channels as
     * an object.
     */
    public channelsData(): CssHsvColorChannelsData
    {
        return this.data.channels;
    }

    /**
     * channelsTuple() returns the `H`, `S` and `V` channels as an
     * array.
     *
     * NOTE that we deliberately leave out the alpha channel, as third-party
     * color conversion packages seem to prefer this.
     */
    public channelsTuple(): CssHsvColorChannelsTuple
    {
        return [
            this.data.channels.hue,
            this.data.channels.saturation,
            this.data.channels.value,
        ];
    }

    public conversionModel(): Hsv {
        return convertHsvChannelsDataToConversionModel(this.data.channels);
    }

    /**
     * css() returns the color's current data as a valid CSS definition
     *
     * HSV is not directly supported in CSS, so we return a custom
     * format: `hsv(h s% v% / alpha)` similar to other CSS color formats.
     */
    public css(): string
    {
        const channels = this.data.channels;
        const alpha = channels.alpha < 1 ? ` / ${channels.alpha}` : "";
        return `hsv(${channels.hue} ${channels.saturation}% ${channels.value}%${alpha})`;
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
    public alpha(): number
    {
        return this.data.channels.alpha;
    }

    /**
     * hue() returns the `h` component from the hsv definition, as a number
     * between 0-359
     *
     * @returns the `h` component from the hsv definition
     */
    public hue(): number
    {
        return this.data.channels.hue;
    }

    /**
     * saturation() returns the `s` component from the hsv definition,
     * as a number between 0-100
     *
     * @returns the `s` component from the hsv definition
     */
    public saturation(): number
    {
        return this.data.channels.saturation;
    }

    /**
     * value() returns the `v` component from the hsv definition,
     * as a number between 0-100
     *
     * @returns the `v` component from the hsv definition
     */
    public value(): number
    {
        return this.data.channels.value;
    }
}