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

import { HashMap, type FunctionalOption, type Maybe, type PrimitiveHint, type TypeGuaranteeOptions } from "@safelytyped/core-types";
import type { CssHslColor } from "../CssHslColor/CssHslColor";
import type { CssHwbColor } from "../CssHwbColor/CssHwbColor";
import type { CssRgbColor } from "../CssRgbColor/CssRgbColor";
import type { CssColorData } from "./CssColorData.type";
import type { CssExtendedColor } from "../CssExtendedColors/CssExtendedColor.type";
import { CSS_HEX_TO_EXTENDED_COLORS } from "../CssExtendedColors/CssExtendedColors.const";
import { roundTo } from "@safelytyped/math-rounding";
import type { CssRgbColorData } from "../CssRgbColor/CssRgbColorData.type";
import type { CssHslColorData } from "../CssHslColor/CssHslColorData.type";
import type { CssHwbColorData } from "../CssHwbColor/CssHwbColorData.type";
import type { CssHexColorDefinition } from "../CssHexColor/CssHexColorDefinition.type";

interface CachedConversions {
    hsl: Maybe<CssHslColor>;
    hwb: Maybe<CssHwbColor>;
    rgb: Maybe<CssRgbColor>;
}

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
     * how many decimal places do we want to preserve when converting
     * between different color formats?
     *
     * @protected
     * @memberof CssColor
     */
    protected conversionPrecision = 0;

    /**
     * how do we want to go about rounding numbers, when we convert between
     * different color formats?
     *
     * by default, we just want to round
     *
     * @protected
     * @memberof CssColor
     */
    protected conversionRoundingFunc = Math.round;

    /**
     * we don't want to constantly repeat color conversions just to access
     * the component values
     *
     * so we'll cache them here
     *
     * @protected
     * @type {CachedConversions}
     * @memberof CssColor
     */
    protected cachedConversions: CachedConversions = {
        hsl: undefined,
        hwb: undefined,
        rgb: undefined,
    };

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
    public abstract rgb(
        opt?: TypeGuaranteeOptions,
        ...fnOpts: FunctionalOption<CssRgbColorData, TypeGuaranteeOptions>[]
    ): CssRgbColor;

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
    // INTERNAL HELPERS
    //
    // ----------------------------------------------------------------

    /**
     * round() is an internal helper method. Use it when you need to
     * round numbers during converting to other formats.
     *
     * By default, it uses Math.round() internally, and rounds to two
     * decimal places.
     *
     * You can change this by changing the {@link this.conversionRoundingFunc}
     * and/or {@link this.conversionPrecision} object properties as required.
     *
     * @param input
     * - the value to round
     * @returns
     * - the rounded number
     */
    protected round(input: number): number
    {
        return roundTo(
            this.conversionRoundingFunc,
            this.conversionPrecision,
            input,
        );
    }

    protected cacheStaticConversion<T extends CssHslColor|CssHwbColor|CssRgbColor>(
        cacheTarget: Maybe<T>,
        cacheKey: keyof CachedConversions,
        callbackFn: () => T,
        fnOpts: unknown[]
    ): T
    {
        // special case - non-static conversion
        if (fnOpts.length > 0) {
            return callbackFn();
        }

        // general case - static conversion

        // has this already been cached?
        if (cacheTarget) {
            return cacheTarget;
        }

        // no, so cache it!
        (this.cachedConversions[cacheKey] as unknown) = callbackFn();
        return this.cachedConversions[cacheKey] as T;
    }

    // ================================================================
    //
    // TEST HELPERS
    //
    // ----------------------------------------------------------------

    public hasCachedStaticConversion(type: keyof CachedConversions): boolean
    {
        // to keep the compiler happy
        const tmp = this.cachedConversions as unknown as HashMap<unknown>;

        // do we have a value set?
        return HashMap.has(tmp, type) && HashMap.get(tmp, type) !== undefined;
    }
}