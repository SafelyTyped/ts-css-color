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

import { converter, type Rgb } from "culori";

const rbgConverter = converter("rgb");

import { CssColor } from "../CssColor/CssColor";
import type { CssHslColor } from "../CssHslColor/CssHslColor";
import type { CssHwbColor } from "../CssHwbColor/CssHwbColor";
import { makeCssRgbColorData } from "../CssRgbColor/makeCssRgbColorData";
import type { CssHexColorData } from "./CssHexColorData.type";
import { CssRgbColor } from "../CssRgbColor/CssRgbColor";
import type { CssRgbColorChannelsData } from "../CssRgbColor/CssRgbColorChannelsData.type";
import type { CssRgbColorChannelsTuple } from "../CssRgbColor/CssRgbColorChannelsTuple.type";
import { DEFAULT_DATA_PATH, THROW_THE_ERROR, type DataGuaranteeOptions, type FunctionalOption } from "@safelytyped/core-types";
import type { CssHslColorData } from "../CssHslColor/CssHslColorData.type";
import type { CssHwbColorData } from "../CssHwbColor/CssHwbColorData.type";
import type { CssRgbColorData } from "../CssRgbColor/CssRgbColorData.type";
import type { CssHexColorDefinition } from "./CssHexColorDefinition.type";
import { makeCssHexColorDefinition } from "./makeCssHexColorDefinition";
import { CssColorConversions } from "../CssColorConversions/CssColorConversions";
import type { SupportedCssColorFormat } from "../SupportedCssColorFormat/SupportedCssColorFormat.type";

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

    public hsl(
        {
            path = DEFAULT_DATA_PATH,
            onError = THROW_THE_ERROR
        }: DataGuaranteeOptions = {},
        ...fnOpts: FunctionalOption<CssHslColorData, DataGuaranteeOptions>[]
    ): CssHslColor
    {
        // how to make the color
        const makerFn = () => this.rgb()
            .hsl(
                {path, onError},
                ...fnOpts,
            );

        // make it happen
        return CssColorConversions.toHsl(this, makerFn, fnOpts);
    }

    public hwb(
        {
            path = DEFAULT_DATA_PATH,
            onError = THROW_THE_ERROR
        }: DataGuaranteeOptions = {},
        ...fnOpts: FunctionalOption<CssHwbColorData, DataGuaranteeOptions>[]
    ): CssHwbColor
    {
        // how to make the color
        const makerFn = () => this.rgb()
            .hwb(
                {path, onError},
                ...fnOpts,
            );

        // make it happen
        return CssColorConversions.toHwb(this, makerFn, fnOpts);
    }

    public rgb(
        {
            path = DEFAULT_DATA_PATH,
            onError = THROW_THE_ERROR
        }: DataGuaranteeOptions = {},
        ...fnOpts: FunctionalOption<CssRgbColorData, DataGuaranteeOptions>[]
    ): CssRgbColor
    {
        // how to make the color
        const makerFn = () => {
            // we know this will never be undefined
            const rgbData = rbgConverter(this.hex()) as Rgb;

            const rgbColorData =                 makeCssRgbColorData(
                this.data.name,
                this.data.definition,
                {
                    red: rgbData.r * 255,
                    green: rgbData.g * 255,
                    blue: rgbData.b * 255,
                    alpha: 1,
                },
                {path, onError},
                ...fnOpts,
            );

            return new CssRgbColor(rgbColorData);
        };

        // make it happen
        return CssColorConversions.toRgb(this, makerFn, fnOpts);
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

    public hex(): CssHexColorDefinition
    {
        // general case
        if (this.data.definition.length > 4) {
            return makeCssHexColorDefinition(this.data.definition);
        }

        // if we get here, we need to convert the hex string to
        // full-length
        const r = this.data.definition.substring(1, 2);
        const g = this.data.definition.substring(2, 3);
        const b = this.data.definition.substring(3, 4);

        return makeCssHexColorDefinition("#" + r + r + g + g + b + b);
    }

    // ================================================================
    //
    // PROPERTIES
    //
    // ----------------------------------------------------------------

    /**
     * colorFormat() returns the name of the way that color is represented
     * in this object
     *
     * @returns the color notation used by this object
     */
    public colorFormat(): SupportedCssColorFormat {
        return "hex";
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
    public red()
    {
        return this.rgb().red();
    }

    /**
     * green() returns the `G` component from the RGB definition, as a
     * number between 0-255.
     *
     * @returns the `G` component from the RGB definition
     */
    public green()
    {
        return this.rgb().green();
    }

    /**
     * blue() returns the `B` component from the RGB definition, as a
src/CssHexColor/CssHexColor.ts     * number between 0-255.
     *
     * @returns the `B` component from the RGB definition
     */
    public blue()
    {
        return this.rgb().blue();
    }

    /**
     * alpha() returns the alpha channel value of this color, as a number
     * between 0-1
     *
     * @returns the `alpha` channel of this color
     */
    public alpha()
    {
        return this.rgb().alpha();
    }
}