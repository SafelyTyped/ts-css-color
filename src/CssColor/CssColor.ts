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

import type { Maybe } from "@safelytyped/core-types";
import type { SupportedColorModel } from "../ColorModels/SupportedColorModel.type";
import type { SupportedColorSpace } from "../ColorSpaces/SupportedColorSpace.type";
import { CssCmykColor } from "../CssCmykColor/CssCmykColor";
import type { CssExtendedColor } from "../CssExtendedColors/CssExtendedColor.type";
import type { CssHexColorDefinition } from "../CssHexColorDefinition/CssHexColorDefinition.type";
import type { CssHslColor } from "../CssHslColor/CssHslColor";
import { CssHsvColor } from "../CssHsvColor/CssHsvColor";
import { CssHwbColor } from "../CssHwbColor/CssHwbColor";
import { CssOklchColor } from "../CssOklchColor/CssOklchColor";
import { CSS_HEX_TO_EXTENDED_COLORS, CssRgbColor, makeCssCmykColorFromCssColor, makeCssHslColorFromCssColor, makeCssHsvColorFromCssColor, makeCssHwbColorFromCssColor, makeCssOklchColorFromCssColor, makeCssRgbColorFromCssColor, RGB_MODEL_CONVERTER, type AnyCssColor, type ColorModel, type ConversionModel, type CssColorData, type ModelConverter } from "../index";

type ConversionCache = {
    cmyk: Maybe<CssCmykColor>,
    hex: Maybe<CssHexColorDefinition>,
    hsl: Maybe<CssHslColor>,
    hsv: Maybe<CssHsvColor>,
    hwb: Maybe<CssHwbColor>,
    oklch: Maybe<CssOklchColor>,
    rgb: Maybe<CssRgbColor>,
};

/**
 * CssColor holds the representation of a CSS color.
 *
 * The class provides methods to:
 *
 * - obtain the representation details
 * - convert from one format (e.g. rgb) to another (e.g. hsl or hex)
 */
export abstract class CssColor<M extends SupportedColorModel, S extends SupportedColorSpace, CM extends ColorModel<M,S>, CV extends ConversionModel|undefined> {
    /**
     * holds the internal representation of the CSS color,
     * along with common details such as its name and its original
     * definition
     *
     * NOTE: even when we convert formats, we retain the color's original
     * definition
     */
    protected readonly data: CssColorData<M,S,CM>;

    /**
     * how do we convert this color into other colors?
     */
    protected modelConverter: ModelConverter<CM,CV>;

    private conversionCache: ConversionCache = {
        cmyk: undefined,
        hex: undefined,
        hsl: undefined,
        hsv: undefined,
        hwb: undefined,
        oklch: undefined,
        rgb: undefined,
    };

    /**
     * constructor
     *
     * @param data
     */
    public constructor(
        data: CssColorData<M,S,CM>,
        modelConverter: ModelConverter<CM,CV>,
    )
    {
        this.data = data;
        this.modelConverter = modelConverter;
    }

    // ================================================================
    //
    // CONVERSION TO OTHER COLOR MODELS
    //
    // ----------------------------------------------------------------

    /**
     * cmyk() converts this color to CMYK format
     *
     * NOTE that CSS does not support CMYK colors at this time.
     *
     * - We have one-way support for converting to CMYK via RGB.
     * - Conversion FROM CMYK is done by re-creating the color from its
     *   original definition (there's no 100% lossless 2-way conversion
     *   algorithm at this time)
     */
    public get cmyk(): CssCmykColor
    {
        if (this.conversionCache.cmyk === undefined) {
            this.conversionCache.cmyk = makeCssCmykColorFromCssColor(this as unknown as AnyCssColor);
        }

        return this.conversionCache.cmyk;

        // return makeCssCmykColorFromCssColor(
        //     this,
        //     { path, onError },
        //     ...fnOpts
        // );
    }

    /**
     * hsl() converts this color to the CSS hsl() format
     */
    public get hsl(): CssHslColor
    {
        if (this.conversionCache.hsl === undefined) {
            this.conversionCache.hsl = makeCssHslColorFromCssColor(this as unknown as AnyCssColor);
        }

        return this.conversionCache.hsl;
    }

    public get hsv(): CssHsvColor
    {
        if (this.conversionCache.hsv === undefined) {
            this.conversionCache.hsv = makeCssHsvColorFromCssColor(this as unknown as AnyCssColor);
        }

        return this.conversionCache.hsv;
    }

    /**
     * hwb() converts this color to the CSS hwb() format
     */
    public get hwb(): CssHwbColor
    {
        if (this.conversionCache.hwb === undefined) {
            this.conversionCache.hwb = makeCssHwbColorFromCssColor(this as unknown as AnyCssColor);
        }

        return this.conversionCache.hwb;
    }

    /**
     * oklch() converts this color to the CSS oklch() format
     */
    public get oklch(): CssOklchColor
    {
        if (this.conversionCache.oklch === undefined) {
            this.conversionCache.oklch = makeCssOklchColorFromCssColor(this as unknown as AnyCssColor);
        }

        return this.conversionCache.oklch;
    }

    /**
     * rgb
     */
    public get rgb(): CssRgbColor
    {
        // we don't want to do this conversion multiple times
        if (this.conversionCache.rgb === undefined) {
            this.conversionCache.rgb = makeCssRgbColorFromCssColor(this as unknown as AnyCssColor);
        }

        return this.conversionCache.rgb;
    }

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
    public get hex(): CssHexColorDefinition
    {
        // we don't want to do this conversion multiple times
        if (this.conversionCache.hex === undefined) {
            this.conversionCache.hex = this.rgb.hex;
        }

        return this.conversionCache.hex;
    }

    /**
     * keyword() returns the CSS color keyword (e.g. `aqua`) for this color
     * IF this color matches one of the CSS predefined colors.
     *
     * Otherwise, returns `undefined`
     */
    public get keyword(): Maybe<CssExtendedColor>
    {
        return CSS_HEX_TO_EXTENDED_COLORS[this.hex];
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
        return this.definition;
    }

    /**
     * returns this color's data in a format that's compatible with our
     * chosen third-party color conversion package.
     */
    public get conversionModel(): ConversionModel
    {
        // do we support color conversion?
        if (this.modelConverter.toConversionModel) {
            return this.modelConverter.toConversionModel(this.data.colorModel);
        }

        // no, we do not
        return RGB_MODEL_CONVERTER.parse(this.data.definition);
    }

    /**
     * channelsData() returns the color channels as an object.
     */
    public get channelsData()
    {
        return this.data.colorModel;
    }

    private cachedCss: Maybe<string>;

    /**
     * css() returns the color's current data as a valid CSS definition
     *
     * for example, "new CssRgbColor(XXX).hsl().css()" returns the color
     * as a `hsl(h% s l / alpha)` notation.
     *
     * Use {@link CssColor.definition()} if you want the color's original
     * CSS string.
     */
    public get css(): string
    {
        if (!this.cachedCss) {
            this.cachedCss = this.modelConverter.toCss(this.data.colorModel, this.data.definition);
        }
        return this.cachedCss;
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
    public get name(): string
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
    public get definition(): string
    {
        return this.data.definition;
    }

    /**
     * colorModel() returns the name of the way that color is represented
     * in this object
     *
     * @returns the color notation used by this object
     */
    public get colorModel(): SupportedColorModel
    {
        return this.data.colorModel.colorModel;
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
    public get colorSpace(): SupportedColorSpace
    {
        return this.data.colorModel.colorSpace;
    }
}