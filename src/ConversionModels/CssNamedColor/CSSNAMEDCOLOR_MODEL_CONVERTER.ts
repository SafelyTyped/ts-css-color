//
// Copyright (c) 2025-present Ganbaro Digital Ltd
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

import { identity } from "@safelytyped/core-types";
import type { CssNamedColorColorModel } from "../../ColorModels/CssNamedColor/CssNamedColorColorModel.type";
import { makeCssHexColorDefinition } from "../../CssHexColorDefinition/makeCssHexColorDefinition";
import { CSS_HEX_TO_NAMED_COLOR, CSS_NAMED_COLOR_TO_HEX } from "../../CssNamedColors/CssNamedColors.const";
import type { ConversionModel } from "../ConversionModel.type";
import { HEX_MODEL_CONVERTER } from "../Hex/HEX_MODEL_CONVERTER";
import type { ModelConverter } from "../ModelConverter.type";
import { RGB_MODEL_CONVERTER } from "../Rgb/RGB_MODEL_CONVERTER";
import type { RgbConversionModel } from "../Rgb/RgbConversionModel.type";

/**
 * CSSNAMEDCOLOR_MODEL_CONVERTER is a ModelConverter for CSS named colors.
 *
 * It handles conversion to and from CSS named colors like "red", "blue", etc.
 */
export const CSSNAMEDCOLOR_MODEL_CONVERTER: ModelConverter<CssNamedColorColorModel, RgbConversionModel> = {

    toColorModel: (input: ConversionModel) => {
        const model = HEX_MODEL_CONVERTER.toColorModel(input);

        return CSSNAMEDCOLOR_MODEL_CONVERTER.normaliseColorModel({
            colorModel: "cssNamedColor",
            colorSpace: "sRGB",
            color: CSS_HEX_TO_NAMED_COLOR[model.hex],
        });
    },

    // we don't need to normalise the color model
    normaliseColorModel: identity,

    // we know this will never fail, because the input.hex has been
    // pre-validated to be a valid CSS HEX value
    toConversionModel: (input: CssNamedColorColorModel) => CSSNAMEDCOLOR_MODEL_CONVERTER.normaliseConversionModel(
        HEX_MODEL_CONVERTER.toConversionModel({
            colorModel: "hex",
            colorSpace: "sRGB",
            hex: makeCssHexColorDefinition(CSS_NAMED_COLOR_TO_HEX[input.color]),
        })
    ),

    normaliseConversionModel: RGB_MODEL_CONVERTER.normaliseConversionModel,

    parse: RGB_MODEL_CONVERTER.parse,
    toCss: (input: CssNamedColorColorModel) => input.color,
};

