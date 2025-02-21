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

import { CssColor } from "../CssColor/CssColor";
import { CssHslColor } from "../CssHslColor/CssHslColor";
import { CssHwbColor } from "../CssHwbColor/CssHwbColor";
import type { CssOklchColorData } from "./CssOklchColorData.type";
import type { CssOklchColorChannelsData } from "./CssOklchColorChannelsData.type";
import type { CssOklchColorChannelsTuple } from "./CssOklchColorChannelsTuple.type";
import { DEFAULT_DATA_PATH, THROW_THE_ERROR, type FunctionalOption, type DataGuaranteeOptions } from "@safelytyped/core-types";
import type { CssHslColorData } from "../CssHslColor/CssHslColorData.type";
import type { CssHwbColorData } from "../CssHwbColor/CssHwbColorData.type";
import type { CssHexColorDefinition } from "../CssHexColor/CssHexColorDefinition.type";
import { CssRgbColor } from "../CssRgbColor/CssRgbColor";
import { makeCssRgbColorData } from "../CssRgbColor/makeCssRgbColorData";
import type { CssRgbColorData } from "../CssRgbColor/CssRgbColorData.type";
import { makeCssOklchColorData } from "./makeCssOklchColorData";

import { converter, type Oklch } from "culori";
import { CssColorConversions } from "../CssColorConversions/CssColorConversions";

const rgbConverter = converter("rgb");

/**
 * CssOklchColor represents a {@link CssColor} that was defined using the
 * CSS RGBA format.
 */
export class CssOklchColor extends CssColor<CssOklchColorData>
{
    public hsl(
        {
            path = DEFAULT_DATA_PATH,
            onError = THROW_THE_ERROR
        }: DataGuaranteeOptions = {},
        ...fnOpts: FunctionalOption<CssHslColorData, DataGuaranteeOptions>[]
    ): CssHslColor
    {
        // because we are converting between color spaces,
        // best we go via rgb() first
        return this.rgb().hsl({ path, onError}, ...fnOpts);
    }

    public hwb(
        {
            path = DEFAULT_DATA_PATH,
            onError = THROW_THE_ERROR
        }: DataGuaranteeOptions = {},
        ...fnOpts: FunctionalOption<CssHwbColorData, DataGuaranteeOptions>[]
    ): CssHwbColor
    {
        // because we are converting between color spaces,
        // best we go via rgb() first
        return this.rgb().hwb({ path, onError}, ...fnOpts);
    }

    public oklch(
        {
            path = DEFAULT_DATA_PATH,
            onError = THROW_THE_ERROR,
        }: DataGuaranteeOptions = {},
        ...fnOpts: FunctionalOption<CssOklchColorData, DataGuaranteeOptions>[]
    ): CssOklchColor
    {
        // performance optimisation
        if (fnOpts.length === 0) {
            return this;
        }

        return new CssOklchColor(
            makeCssOklchColorData(
                this.data.name,
                this.data.definition,
                this.data.channels,
                { path, onError },
                ...fnOpts,
            ),
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
        const conversionFn = () => {
            const model = rgbConverter(this.toModel());

            return new CssRgbColor(
                makeCssRgbColorData(
                    this.data.name,
                    this.data.definition,
                    {
                        red: Math.abs(this.round(model.r * 255)),
                        green: Math.abs(this.round(model.g * 255)),
                        blue: Math.abs(this.round(model.b * 255)),
                        alpha: this.data.channels.alpha,
                    },
                    { path, onError },
                    ...fnOpts,
                ),
            );
        };

        // make it happen
        return CssColorConversions.toRgb(this, conversionFn, fnOpts);
    }

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

    private toModel(): Oklch
    {
        const retval = {
            mode: "oklch" as const,
            l: this.data.channels.lightness,
            c: this.data.channels.chroma,
            h: this.data.channels.hue,
            alpha: this.data.channels.alpha,
        };

        return retval;
    }
}