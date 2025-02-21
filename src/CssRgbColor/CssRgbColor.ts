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

import rgb from "color-space/rgb.js";
import rgbHex from "rgb-hex";

import { CssColor } from "../CssColor/CssColor";
import { CssHslColor } from "../CssHslColor/CssHslColor";
import { CssHwbColor } from "../CssHwbColor/CssHwbColor";
import { makeCssHwbColorData } from "../CssHwbColor/makeCssHwbColorData";
import { makeCssHslColorData } from "../CssHslColor/makeCssHslColorData";
import type { CssRgbColorData } from "./CssRgbColorData.type";
import type { CssRgbColorChannelsData } from "./CssRgbColorChannelsData.type";
import type { CssRgbColorChannelsTuple } from "./CssRgbColorChannelsTuple.type";
import { DEFAULT_DATA_PATH, THROW_THE_ERROR, type FunctionalOption, type DataGuaranteeOptions } from "@safelytyped/core-types";
import type { CssHslColorData } from "../CssHslColor/CssHslColorData.type";
import type { CssHwbColorData } from "../CssHwbColor/CssHwbColorData.type";
import { makeCssRgbColorData } from "./makeCssRgbColorData";
import type { CssHexColorDefinition } from "../CssHexColor/CssHexColorDefinition.type";
import { makeCssHexColorDefinition } from "../CssHexColor/makeCssHexColorDefinition";
import { CssColorConversions } from "../CssColorConversions/CssColorConversions";

/**
 * CssRgbColor represents a {@link CssColor} that was defined using the
 * CSS RGBA format.
 */
export class CssRgbColor extends CssColor<CssRgbColorData>
{
    public hsl(
        {
            path = DEFAULT_DATA_PATH,
            onError = THROW_THE_ERROR
        }: DataGuaranteeOptions = {},
        ...fnOpts: FunctionalOption<CssHslColorData, DataGuaranteeOptions>[]
    ): CssHslColor
    {
        // how to make this color
        const makerFn = () => {
            // general case
            const model = colorConvert.rgb.hsl.raw(this.channelsTuple());
            return new CssHslColor(
                makeCssHslColorData(
                    this.data.name,
                    this.data.definition,
                    {
                        hue: this.round(model[0]),
                        saturation: this.round(model[1]),
                        luminosity: this.round(model[2]),
                        alpha: this.data.channels.alpha,
                    },
                    { path, onError },
                    ...fnOpts
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
        // how to do this conversion
        const makerFn = () => {
            const model = colorConvert.rgb.hwb.raw(this.channelsTuple());
            return new CssHwbColor(
                makeCssHwbColorData(
                    this.data.name,
                    this.data.definition,
                    {
                        hue: this.round(model[0]),
                        whiteness: this.round(model[1]),
                        blackness: this.round(model[2]),
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

    public rgb(
        {
            path = DEFAULT_DATA_PATH,
            onError = THROW_THE_ERROR
        }: DataGuaranteeOptions = {},
        ...fnOpts: FunctionalOption<CssRgbColorData, DataGuaranteeOptions>[]
    ): CssRgbColor
    {
        // performance optimisation
        if (fnOpts.length === 0) {
            return this;
        }

        return new CssRgbColor(
            makeCssRgbColorData(
                this.data.name,
                this.data.definition,
                this.data.channels,
                {path, onError},
                ...fnOpts,
            ),
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
    public channelsData(): CssRgbColorChannelsData
    {
        return this.data.channels;
    }

    /**
     * channelsTuple() returns the color channels as an array.
     */
    public channelsTuple(): CssRgbColorChannelsTuple
    {
        return [
            this.data.channels.red,
            this.data.channels.green,
            this.data.channels.blue,
        ];
    }

    public hex(): CssHexColorDefinition
    {
        const rgbData = this.channelsData();
        const hexCode = "#" + rgbHex(
            rgbData.red,
            rgbData.green,
            rgbData.blue,
        ).toLowerCase();
        return makeCssHexColorDefinition(hexCode);
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
    public red(): number
    {
        return this.data.channels.red;
    }

    /**
     * green() returns the `G` component from the RGB definition, as a
     * number between 0-255.
     *
     * @returns the `G` component from the RGB definition
     */
    public green(): number
    {
        return this.data.channels.green;
    }

    /**
     * blue() returns the `B` component from the RGB definition, as a
     * number between 0-255.
     *
     * @returns the `B` component from the RGB definition
     */
    public blue(): number
    {
        return this.data.channels.blue;
    }

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
}