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
import { formatHex, rgb } from "culori";
import type { HexColorModel } from "../../ColorModels/Hex/HexColorModel.type";
import { makeCssHexColorDefinition } from "../../CssHexColorDefinition/makeCssHexColorDefinition";
import type { ConversionModel } from "../ConversionModel.type";
import type { ModelConverter } from "../ModelConverter.type";
import { RGB_MODEL_CONVERTER } from "../Rgb/RGB_MODEL_CONVERTER";
import type { RgbConversionModel } from "../Rgb/RgbConversionModel.type";

export const HEX_MODEL_CONVERTER: ModelConverter<HexColorModel, RgbConversionModel> = {

    toColorModel: (input: ConversionModel) => {
        const model = formatHex(input);

        return {
            colorModel: "hex",
            colorSpace: "sRGB",
            hex: makeCssHexColorDefinition(model),
        };
    },

    // we don't need to normalise the color model
    normaliseColorModel: identity,

    // we know this will never fail, because the input.hex has been
    // pre-validated to be a valid CSS HEX value
    toConversionModel: (input: HexColorModel) => HEX_MODEL_CONVERTER.normaliseConversionModel(rgb(input.hex) as RgbConversionModel),

    normaliseConversionModel: RGB_MODEL_CONVERTER.normaliseConversionModel,

    // no prep required
    prepForOklch: identity,

    // no prep required
    prepForSrgb: identity,

    parse: RGB_MODEL_CONVERTER.parse,
    toCss: (input: HexColorModel) => input.hex,
};

