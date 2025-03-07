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

import { identity, searchDispatchMap, type DispatchMap } from "@safelytyped/core-types";
import type { SupportedColorModel } from "../ColorModels/SupportedColorModel.type";
import type { ConversionModel } from "../ConversionModels/ConversionModel.type";
import { CSSNAMEDCOLOR_MODEL_CONVERTER } from "../ConversionModels/CssNamedColor/CSSNAMEDCOLOR_MODEL_CONVERTER";
import { HEX_MODEL_CONVERTER } from "../ConversionModels/Hex/HEX_MODEL_CONVERTER";
import { HSL_MODEL_CONVERTER } from "../ConversionModels/Hsl/HSL_MODEL_CONVERTER";
import { HSV_MODEL_CONVERTER } from "../ConversionModels/Hsv/HSV_MODEL_CONVERTER";
import { HWB_MODEL_CONVERTER } from "../ConversionModels/Hwb/HWB_MODEL_CONVERTER";
import { OKLCH_MODEL_CONVERTER } from "../ConversionModels/Oklch/OKLCH_MODEL_CONVERTER";
import { RGB_MODEL_CONVERTER } from "../ConversionModels/Rgb/RGB_MODEL_CONVERTER";

type UnsupportedColorModel = "cmyk";
type ConversionModelPrepper = (input: ConversionModel) => ConversionModel;

const DISPATCH_MAP: DispatchMap<Exclude<SupportedColorModel, UnsupportedColorModel>, ConversionModelPrepper> = {
    "cssNamedColor": CSSNAMEDCOLOR_MODEL_CONVERTER.prepForSrgb,
    "hex": HEX_MODEL_CONVERTER.prepForSrgb,
    "hsl": HSL_MODEL_CONVERTER.prepForSrgb,
    "hsv": HSV_MODEL_CONVERTER.prepForSrgb,
    "hwb": HWB_MODEL_CONVERTER.prepForSrgb,
    "oklch": OKLCH_MODEL_CONVERTER.prepForSrgb,
    "rgb": RGB_MODEL_CONVERTER.prepForSrgb,
};

export function prepForSrgb(
    input: ConversionModel
): ConversionModel
{
    return searchDispatchMap(DISPATCH_MAP, [input.mode], identity)(input);
}