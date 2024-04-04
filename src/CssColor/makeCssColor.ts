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

import * as colorString from "color-string";

import type { AnyCssColor } from "./AnyCssColor.type";
import { CssHslColor } from "../CssHslColor/CssHslColor";
import { CssKeywordColor } from "../CssKeywordColor/CssKeywordColor";
import { CssHwbColor } from "../CssHwbColor/CssHwbColor";
import { CssRgbColor } from "../CssRgbColor/CssRgbColor";
import { UnsupportedCssColorDefinitionError } from "../Errors/UnsupportedCssColorDefinition/UnsupportedCssColorDefinitionError";
import { DEFAULT_DATA_PATH, THROW_THE_ERROR, type OnError, type DataPath, type FunctionalOption, applyFunctionalOptions, type DataValidatorOptions } from "@safelytyped/core-types";
import { CssHexColor } from "../CssHexColor/CssHexColor";
import { makeCssHexColorData } from "../CssHexColor/makeCssHexColorData";
import { makeCssKeywordColorData } from "../CssKeywordColor/makeCssKeywordColorData";
import { makeCssHslColorData } from "../CssHslColor/makeCssHslColorData";
import { makeCssHwbColorData } from "../CssHwbColor/makeCssHwbColorData";
import { makeCssRgbColorData } from "../CssRgbColor/makeCssRgbColorData";
import { CSS_EXTENDED_COLORS_TO_HEX } from "../CssExtendedColors/CssExtendedColors.const";

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
 * @param fnOpts -
 * We will pass the newly-built {@link CssColor} to these functions, so
 * that you can make any additional changes before this function returns
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
    ...fnOpts: FunctionalOption<AnyCssColor, DataValidatorOptions>[]
): AnyCssColor
{
    // shorthand
    const opts = { onError, path };

    // special case - do we have a CSS keyword color?
    if (cssDefinition in CSS_EXTENDED_COLORS_TO_HEX) {
        return applyFunctionalOptions<AnyCssColor, DataValidatorOptions>(
            new CssKeywordColor(
                makeCssKeywordColorData(colorName, cssDefinition, { path, onError })
            ),
            opts,
            ...fnOpts
        );
    }

    // special case - do we have a CSS hex color?
    if (cssDefinition.startsWith("#")) {
        return applyFunctionalOptions(
            new CssHexColor(
                makeCssHexColorData(colorName, cssDefinition, { path, onError })
            ),
            opts,
            ...fnOpts
        );
    }

    // what are we looking at?
    const model = colorString.get(cssDefinition);

    // did we get a model in the first place?
    if (model === null) {
        // no we did not
        throw onError(
            new UnsupportedCssColorDefinitionError({
                public: {
                    dataPath: path,
                    colorDefinition: cssDefinition,
                }
            })
        );
    }

    switch(model.model) {
    case "hsl":
        return applyFunctionalOptions(
            new CssHslColor(
                makeCssHslColorData(
                    colorName,
                    cssDefinition,
                    {
                        hue: model.value[0],
                        saturation: model.value[1],
                        luminosity: model.value[2],
                        alpha: model.value[3],
                    },
                    { path, onError }
                )
            ),
            opts,
            ...fnOpts
        );
    case "hwb":
        return applyFunctionalOptions(
            new CssHwbColor(
                makeCssHwbColorData(
                    colorName,
                    cssDefinition,
                    {
                        hue: model.value[0],
                        whiteness: model.value[1],
                        blackness: model.value[2],
                        alpha: model.value[3],
                    },
                    { path, onError }
                )
            ),
            opts,
            ...fnOpts
        );

    case "rgb":
        return applyFunctionalOptions(
            new CssRgbColor(
                makeCssRgbColorData(
                    colorName,
                    cssDefinition,
                    {
                        red: model.value[0],
                        green: model.value[1],
                        blue: model.value[2],
                        alpha: model.value[3],
                    },
                    { path, onError }
                )
            ),
            opts,
            ...fnOpts
        );
    }
}