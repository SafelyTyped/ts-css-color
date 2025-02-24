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

import type { FunctionalOption, Maybe, PrimitiveHint, TypeGuaranteeOptions } from "@safelytyped/core-types";
import { formatCss } from "culori";
import type { ConversionModel } from "../ConversionModel/ConversionModel.type";
import type { SupportedCssColorSpace } from "../CssColorspace/SupportedCssColorSpace.type";
import type { CssExtendedColor } from "../CssExtendedColors/CssExtendedColor.type";
import { CSS_HEX_TO_EXTENDED_COLORS } from "../CssExtendedColors/CssExtendedColors.const";
import type { CssHexColorDefinition } from "../CssHexColor/CssHexColorDefinition.type";
import type { CssHslColor } from "../CssHslColor/CssHslColor";
import type { CssHslColorData } from "../CssHslColor/CssHslColorData.type";
import type { CssHwbColor } from "../CssHwbColor/CssHwbColor";
import type { CssHwbColorData } from "../CssHwbColor/CssHwbColorData.type";
import type { CssOklchColor } from "../CssOklchColor/CssOklchColor";
import type { CssOklchColorData } from "../CssOklchColor/CssOklchColorData.type";
import type { CssRgbColor } from "../CssRgbColor/CssRgbColor";
import type { CssRgbColorData } from "../CssRgbColor/CssRgbColorData.type";
import type { SupportedCssColorFormat } from "../SupportedCssColorFormat/SupportedCssColorFormat.type";
import type { CssColorData } from "./CssColorData.type";

/**
 * CssColor holds the representation of a CSS color.
 *
 * The class provides methods to:
 *
 * - obtain the representation details
 * - convert from one format (e.g. rgb) to another (e.g. hsl or hex)
 */
export abstract class CssColor<E extends CssColorData, C extends ConversionModel> {
    /**
     * holds the internal representation of the CSS color,
     * along with common details such as its name and its original
     * definition
     *
     * NOTE: even when we convert formats, we retain the color's original
     * definition
     *
     * @protected
     * @type {E}
     * @memberof CssColor
     */
    protected readonly data: E;

    /**
     * constructor
     *
     * @param data
     */
    public constructor(
        data: E
    )
    {
        this.data = data;
    }

    /**
     * hsl() converts this color to the CSS hsl() format
     */
    public abstract hsl(
        opt?: TypeGuaranteeOptions,
        ...fnOpts: FunctionalOption<CssHslColorData, TypeGuaranteeOptions>[]
    ): CssHslColor;

    /**
     * hwb() converts this color to the CSS hwb() format
     */
    public abstract hwb(
        opt?: TypeGuaranteeOptions,
        ...fnOpts: FunctionalOption<CssHwbColorData, TypeGuaranteeOptions>[]
    ): CssHwbColor;

    /**
     * oklch() converts this color to the CSS oklch() format
     */
    public abstract oklch(
        opt?: TypeGuaranteeOptions,
        ...fnOpts: FunctionalOption<CssOklchColorData, TypeGuaranteeOptions>[]
    ): CssOklchColor;

    /**
     * rgb() converts this color to the CSS rgb()
     */
    public abstract rgb(
        opt?: TypeGuaranteeOptions,
        ...fnOpts: FunctionalOption<CssRgbColorData, TypeGuaranteeOptions>[]
    ): CssRgbColor;

    // ================================================================
    //
    // OTHER FORMATS
    //
    // ----------------------------------------------------------------

    /**
     * hex() returns this color in CSS hex format (#RRGGBB)
     *
     * the returned string will always be in lowercase
     * the returned string will always be 7 chars long
     */
    public hex(): CssHexColorDefinition
    {
        return this.rgb().hex();
    }

    /**
     * keyword() returns the CSS color keyword (e.g. `aqua`) for this color
     * IF this color matches one of the CSS predefined colors.
     *
     * Otherwise, returns `undefined`
     */
    public keyword(): Maybe<CssExtendedColor>
    {
        return CSS_HEX_TO_EXTENDED_COLORS[this.hex()];
    }

    /**
     * adds support for automatic conversion to string and number
     * (although your eslint rules may prevent you making use of this!)
     *
     * - for number conversion, returns the {@link CssColor.hex()} value as
     *   a number
     * - for string conversion, returns the color's original definition
     *
     * @param hint
     * @returns
     */
    public [ Symbol.toPrimitive ](hint: PrimitiveHint): string | number {
        if (hint === "number") {
            return parseInt(this.hex().substring(1), 16);
        }

        return this.toString();
    }

    /**
     * returns the color's original definition
     *
     * this definition will be the one used when the object was first
     * created, even if you have converted this object to different
     * color formats
     *
     * this guarantees that the definition is always 100% accurate
     *
     * @returns the original CSS definition of the color
     */
    public toString(): string
    {
        return this.definition();
    }

    /**
     * returns this color's data in a format that's compatible with our
     * chosen third-party color conversion package.
     */
    public abstract conversionModel(): C;

    /**
     * css() returns the color's current data as a valid CSS definition
     *
     * for example, "new CssRgbColor(XXX).hsl().css()" returns the color
     * as a `hsl(h% s l / alpha)` notation.
     *
     * Use {@link CssColor.definition} if you want the color's original
     * CSS string.
     */
    public css(): string
    {
        return formatCss(this.conversionModel());
    }

    // ================================================================
    //
    // PROPERTIES
    //
    // ----------------------------------------------------------------

    /**
     * name() returns the name you assigned to this color when this class
     * was first instantiated
     *
     * if no name was provided, this returns the color's original definition
     *
     * @returns your name for this color
     */
    public name(): string
    {
        return this.data.name;
    }

    /**
     * definition() returns the CSS definition that you provided when this
     * class was first instantiated
     *
     * if you've converted this color to other formats, definition() still
     * returns the original definition (i.e. the definition is not changed)
     * when converting to other formats
     *
     * this guarantees that the definition is always 100% accurate
     *
     * @returns the color's original definition
     */
    public definition(): string
    {
        return this.data.definition;
    }

    /**
     * colorFormat() returns the name of the way that color is represented
     * in this object
     *
     * @returns the color notation used by this object
     */
    public colorFormat(): SupportedCssColorFormat
    {
        return this.data.colorFormat;
    }

    /**
     * colorSpace() returns the name of the color space that this color's
     * data exists in
     *
     * NOTE that this represents the color's current data, NOT the
     * color space that the `.definition()` originally existed in
     *
     * @returns the name of the color space used by this object
     */
    public colorSpace(): SupportedCssColorSpace
    {
        return this.data.colorSpace;
    }
}