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

import type { Maybe, PrimitiveHint } from "@safelytyped/core-types";
import type { CssHslColor } from "../CssHslColor/CssHslColor";
import type { CssHwbColor } from "../CssHwbColor/CssHwbColor";
import type { CssRgbColor } from "../CssRgbColor/CssRgbColor";
import type { CssColorData } from "./CssColorData.type";
import type { CssExtendedColor } from "../CssExtendedColors/CssExtendedColor.type";
import { CSS_HEX_TO_EXTENDED_COLORS } from "../CssExtendedColors/CssExtendedColors.const";

/**
 * CssColor holds the representation of a CSS color.
 *
 * The class provides methods to:
 *
 * - obtain the representation details
 * - convert from one format (e.g. rgb) to another (e.g. hsl or hex)
 */
export abstract class CssColor<E extends CssColorData> {
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
     * rgb() converts this color to the CSS rgba() format
     *
     * @returns {CssRgbColor}
     * @memberof CssColor
     */
    public abstract rgb(): CssRgbColor;

    /**
     * hsl() converts this color to the CSS hsl() format
     */
    public abstract hsl(): CssHslColor;

    /**
     * hwb() converts this color to the CSS hwb() format
     */
    public abstract hwb(): CssHwbColor;

    // ================================================================
    //
    // OTHER FORMATS
    //
    // ----------------------------------------------------------------

    /**
     * hex() returns this color in CSS hex format (#RRGGBB)
     *
     * the returned string will always be in lowercase
     */
    public hex(): string
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
        return this.rgb().channelsData().red;
    }

    /**
     * green() returns the `G` component from the RGB definition, as a
     * number between 0-255.
     *
     * @returns the `G` component from the RGB definition
     */
    public green(): number
    {
        return this.rgb().channelsData().green;
    }

    /**
     * blue() returns the `B` component from the RGB definition, as a
     * number between 0-255.
     *
     * @returns the `B` component from the RGB definition
     */
    public blue(): number
    {
        return this.rgb().channelsData().blue;
    }

    /**
     * alpha() returns the alpha channel value of this color, as a number
     * between 0-1
     *
     * @returns the `alpha` channel of this color
     */
    public alpha(): number
    {
        return this.rgb().channelsData().alpha;
    }

    /**
     * hue() returns the `h` component from the hsl definition, as a number
     * between 0-359
     *
     * @returns the `h` component from the hsl definition
     */
    public hue(): number
    {
        return this.hsl().channelsData().hue;
    }

    /**
     * saturation() returns the `s` component from the hsl definition,
     * as a number between 0-100
     *
     * @returns the `s` component from the hsl definition
     */
    public saturation(): number
    {
        return this.hsl().channelsData().saturation;
    }

    /**
     * luminosity() returns the `l` component from the hsl definition,
     * as a number between 0-1
     *
     * @returns the `l` component from the hsl definition
     */
    public luminosity(): number
    {
        return this.hsl().channelsData().luminosity;
    }
}