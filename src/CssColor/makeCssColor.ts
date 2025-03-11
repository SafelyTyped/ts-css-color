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


import { DEFAULT_DATA_PATH, THROW_THE_ERROR, type DataPath, type OnError } from "@safelytyped/core-types";
import { makeCssNamedColor } from "../CssNamedColor/makeCssNamedColor";
import { mustBeNonEmptyString } from "../helpers/mustBeNonEmptyString";
import { CMYK_MODEL_CONVERTER, HEX_MODEL_CONVERTER, isCssExtendedColor, makeCssCmykColorFromConversionModel, makeCssColorFromConversionModel, makeCssHexColorFromConversionModel, mustBeConversionModel, parseCss, type CssColor } from "../index";

/**
 * makeCssColor() is a smart constructor. Use it to convert a CSS definition
 * into a {@link CssColor} object.
 *
 * @param cssDefinition -
 * The CSS color definition to use
 * @param colorName -
 * What name do you want to know this color as (e.g. `ganbaro-red-500`)?
 * @param path -
 * Dot.notation.path to this CSS definition, for keeping track of where you
 * are in a nested data structure (handy for error reporting)
 * @param onError -
 * We will call this error handler with an appropriate AppError if something
 * has gone wrong
 */
export function makeCssColor(
    cssDefinition: string,
    {
        colorName = cssDefinition,
        onError = THROW_THE_ERROR,
        path = DEFAULT_DATA_PATH
    }: {
        colorName? : string,
        onError?: OnError,
        path?: DataPath,
    } = {},
): CssColor
{
    // shorthand
    const opts = { onError, path };

    // robustness
    colorName = mustBeNonEmptyString(colorName);

    // special case - do we have a CSS keyword color?
    if (isCssExtendedColor(cssDefinition)) {
        return makeCssNamedColor(cssDefinition, { colorName });
    }

    // special case - do we have a CSS hex color?
    if (cssDefinition.startsWith("#")) {
        return makeCssHexColorFromConversionModel(
            colorName,
            cssDefinition,
            HEX_MODEL_CONVERTER.parse(cssDefinition),
        );
    }

    // special case - do we have a CMYK color?
    //
    // these are not supported by CSS at this time, so we have to
    // handle them ourselves
    if (cssDefinition.startsWith("color(--device-cmyk ")) {
        return makeCssCmykColorFromConversionModel(
            colorName,
            cssDefinition,
            CMYK_MODEL_CONVERTER.parse(cssDefinition),
        );
    }

    // general case - CSS color function
    // what are we looking at?
    const model = parseCss(cssDefinition);

    return makeCssColorFromConversionModel(
        colorName,
        cssDefinition,
        mustBeConversionModel(model),
        opts,
    );
}