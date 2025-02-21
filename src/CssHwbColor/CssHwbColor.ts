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

import { converter, type Hwb } from "culori";

const hslConverter = converter("hsl");
const rbgConverter = converter("rgb");

import { CssColor } from "../CssColor/CssColor";
import { CssRgbColor } from "../CssRgbColor/CssRgbColor";
import { CssHslColor } from "../CssHslColor/CssHslColor";
import type { CssHslColorChannelsTuple } from "../CssHslColor/CssHslColorChannelsTuple.type";
import type { CssHwbColorData } from "./CssHwbColorData.type";
import type { CssHwbColorChannelsData } from "./CssHwbColorChannelsData.type";
import { DEFAULT_DATA_PATH, THROW_THE_ERROR, type FunctionalOption, type DataGuaranteeOptions } from "@safelytyped/core-types";
import type { CssHslColorData } from "../CssHslColor/CssHslColorData.type";
import { makeCssHslColorData } from "../CssHslColor/makeCssHslColorData";
import { makeCssHwbColorData } from "./makeCssHwbColorData";
import type { CssRgbColorData } from "../CssRgbColor/CssRgbColorData.type";
import { makeCssRgbColorData } from "../CssRgbColor/makeCssRgbColorData";
import { CssColorConversions } from "../CssColorConversions/CssColorConversions";

export class CssHwbColor extends CssColor<CssHwbColorData>
{
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
        // how to do the conversion
        const makerFn = () => {
            const model = hslConverter(this.toModel());
            return new CssHslColor(
                makeCssHslColorData(
                    this.data.name,
                    this.data.definition,
                    {
                        hue: this.round(model.h || 0),
                        saturation: this.round(model.s * 100),
                        luminosity: this.round(model.l * 100),
                        alpha: this.data.channels.alpha,
                    },
                    { path, onError },
                    ...fnOpts,
                )
            );
        };

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
        // performance optimisation
        if (fnOpts.length === 0) {
            return this;
        }

        return new CssHwbColor(
            makeCssHwbColorData(
                this.data.name,
                this.data.definition,
                this.data.channels,
                { path, onError },
                ...fnOpts
            )
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
                )
            );
        };

        // make it happen
        return CssColorConversions.toRgb(this, makerFn, fnOpts);
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

    // ================================================================
    //
    // INTERNAL HELPERS
    //
    // ----------------------------------------------------------------

    private toModel(): Hwb
    {
        const retval = {
            mode: "hwb" as const,
            h: this.data.channels.hue,
            w: this.data.channels.whiteness / 100,
            b: this.data.channels.blackness / 100,
            alpha: this.data.channels.alpha,
        };

        return retval;
    }
}