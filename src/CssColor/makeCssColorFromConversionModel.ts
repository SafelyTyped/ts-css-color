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


import { DEFAULT_DATA_PATH, searchDispatchMap, THROW_THE_ERROR, type DataGuaranteeOptions, type DispatchMap } from "@safelytyped/core-types";
import { makeCssHslColorFromConversionModel, makeCssHsvColorFromConversionModel, makeCssHwbColorFromConversionModel, makeCssOklchColorFromConversionModel, makeCssRgbColorFromConversionModel, UnsupportedCssColorDefinitionError, type ConversionModel, type CssColor, type SupportedColorModel } from "../index";
import type { CssColorFromConversionModelSmartConstructor } from "./CssColorFromConversionModelSmartConstructor.type";

type UnsupportedColorModel = "cmyk" | "cssNamedColor" | "hex";

const DISPATCH_MAP: DispatchMap<Exclude<SupportedColorModel, UnsupportedColorModel>, CssColorFromConversionModelSmartConstructor> = {
    "hsl": makeCssHslColorFromConversionModel,
    "hsv": makeCssHsvColorFromConversionModel,
    "hwb": makeCssHwbColorFromConversionModel,
    "oklch": makeCssOklchColorFromConversionModel,
    "rgb": makeCssRgbColorFromConversionModel,
};

/**
 * makeCssColorFromConversionModel() is a smart constructor. Use it to build
 * a {@link CssColor} object from the third-party conversion model data.
 *
 * @param conversionModel -
 * The data to build the class from
 * @param colorName -
 * What name do you want to know this color as (e.g. `ganbaro-red-500`)?
 * @param path -
 * Dot.notation.path to this CSS definition, for keeping track of where you
 * are in a nested data structure (handy for error reporting)
 * @param onError -
 * We will call this error handler with an appropriate AppError if something
 * has gone wrong
 * @param fnOpts -
 * We will pass the newly-built {@link CssColor} to these functions, so
 * that you can make any additional changes before this function returns
 */
export function makeCssColorFromConversionModel(
    colorName: string,
    cssDefinition: string,
    model: ConversionModel,
    {
        onError = THROW_THE_ERROR,
        path = DEFAULT_DATA_PATH
    }: DataGuaranteeOptions = {},
): CssColor
{
    // shorthand
    const opts = { onError, path };

    // this code is unreachable in practice
    /* c8 ignore start */
    const fallback = () => {
        const err = new UnsupportedCssColorDefinitionError({
            public: {
                dataPath: path,
                colorDefinition: cssDefinition,
            }
        });
        return onError(err);
    };
    /* c8 ignore stop */

    // find out which function to call for the given model
    const colorMaker = searchDispatchMap(DISPATCH_MAP, [model.mode], fallback);

    // call it
    return colorMaker(colorName, cssDefinition, model, opts);
}