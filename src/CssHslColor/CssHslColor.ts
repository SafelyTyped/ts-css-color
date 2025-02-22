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

import { converter, type Hsl } from "culori";

const hwbConverter = converter("hwb");
const rbgConverter = converter("rgb");


import { CssColor } from "../CssColor/CssColor";
import { CssRgbColor } from "../CssRgbColor/CssRgbColor";
import { CssHwbColor } from "../CssHwbColor/CssHwbColor";
import { makeCssRgbColorData } from "../CssRgbColor/makeCssRgbColorData";
import { makeCssHwbColorData } from "../CssHwbColor/makeCssHwbColorData";
import type { CssHslColorData } from "./CssHslColorData.type";
import type { CssHslColorChannelsData } from "./CssHslColorChannelsData.type";
import type { CssHslColorChannelsTuple } from "./CssHslColorChannelsTuple.type";
import { DEFAULT_DATA_PATH, THROW_THE_ERROR, type DataGuaranteeOptions, type FunctionalOption } from "@safelytyped/core-types";
import { makeCssHslColorData } from "./makeCssHslColorData";
import type { CssHwbColorData } from "../CssHwbColor/CssHwbColorData.type";
import type { CssRgbColorData } from "../CssRgbColor/CssRgbColorData.type";
import { CssColorConversions } from "../CssColorConversions/CssColorConversions";
import type { SupportedCssColorFormat } from "../SupportedCssColorFormat/SupportedCssColorFormat.type";
import { convertHslChannelsDataToConversionModel } from "./convertHslChannelsDataToConversionModel";

/**
 * CssHslColor is a {@link CssColor} that was created from a CSS HSL
 * definition.
 */
export class CssHslColor extends CssColor<CssHslColorData, Hsl>
{
    // ================================================================
    //
    // CORE FORMATS
    //
    // ----------------------------------------------------------------

    public rgb(
        {
            path = DEFAULT_DATA_PATH,
            onError = THROW_THE_ERROR
        }: DataGuaranteeOptions = {},
        ...fnOpts: FunctionalOption<CssRgbColorData, DataGuaranteeOptions>[]
    ): CssRgbColor
    {
        // how to do the conversion
        const makerFn = () => {
            const model = rbgConverter(this.toModel());
            return new CssRgbColor(
                makeCssRgbColorData(
                    this.data.name,
                    this.data.definition,
                    {
                        red: this.round(model.r * 255),
                        green: this.round(model.g * 255),
                        blue: this.round(model.b * 255),
                        alpha: this.data.channels.alpha,
                    },
                    { path, onError },
                    ...fnOpts,
                ),
            );
        };

        // make it happen
        return CssColorConversions.toRgb(this, makerFn, fnOpts);
    }

    public hsl(
        {
            path = DEFAULT_DATA_PATH,
            onError = THROW_THE_ERROR
        }: DataGuaranteeOptions = {},
        ...fnOpts: FunctionalOption<CssHslColorData, DataGuaranteeOptions>[]
    ): CssHslColor
    {
        // performance optimisation
        if (fnOpts.length === 0) {
            return this;
        }

        return new CssHslColor(
            makeCssHslColorData(
                this.data.name,
                this.data.definition,
                this.data.channels,
                { path, onError },
                ...fnOpts
            )
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
        // how to do the conversion
        const makerFn = () => {
            const model = hwbConverter(this.toModel());
            return new CssHwbColor(
                makeCssHwbColorData(
                    this.data.name,
                    this.data.definition,
                    {
                        hue: this.round(model.h || 0),
                        whiteness: this.round(model.w * 100),
                        blackness: this.round(model.b * 100),
                        alpha: this.data.channels.alpha,
                    },
                    { path, onError },
                    ...fnOpts,
                ),
            );
        };

        // make it happen
        return CssColorConversions.toHwb(this, makerFn, fnOpts);
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

    public conversionModel(): Hsl {
        return convertHslChannelsDataToConversionModel(this.data.channels);
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
        return "hsl";
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
     * hue() returns the `h` component from the hsl definition, as a number
     * between 0-359
     *
     * @returns the `h` component from the hsl definition
     */
    public hue(): number
    {
        return this.data.channels.hue;
    }

    /**
     * saturation() returns the `s` component from the hsl definition,
     * as a number between 0-100
     *
     * @returns the `s` component from the hsl definition
     */
    public saturation(): number
    {
        return this.data.channels.saturation;
    }

    /**
     * luminosity() returns the `l` component from the hsl definition,
     * as a number between 0-1
     *
     * @returns the `l` component from the hsl definition
     */
    public luminosity(): number
    {
        return this.data.channels.luminosity;
    }

    // ================================================================
    //
    // INTERNAL HELPERS
    //
    // ----------------------------------------------------------------

    private toModel(): Hsl
    {
        const retval = {
            mode: "hsl" as const,
            h: this.data.channels.hue,
            s: this.data.channels.saturation / 100,
            l: this.data.channels.luminosity / 100,
            alpha: this.data.channels.alpha,
        };

        return retval;
    }
}