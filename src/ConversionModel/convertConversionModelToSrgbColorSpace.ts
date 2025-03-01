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
import { rgb } from "culori";
import { normaliseRgbConversionModel } from "../CssRgbColor/normaliseRgbConversionModel";
import type { SupportedCssColorFormat } from "../SupportedCssColorFormat/SupportedCssColorFormat.type";
import type { ConversionModel } from "./ConversionModel.type";

type ConversionModelConverter = (input: ConversionModel) => ConversionModel;

const convertViaRgb = (
    input: ConversionModel
) => normaliseRgbConversionModel(rgb(input));

/**
 * how we convert each supported type of input model to the RGB color space
 */
const DISPATCH_MAP: DispatchMap<SupportedCssColorFormat, ConversionModelConverter> = {
    // CssCmykColor.conversionModel() already returns RGB
    "cmyk": identity,
    // already in the sRGB color space
    "hex": identity,
    // already in the sRGB color space
    "hsl": identity,
    // already in the sRGB color space
    "hsv": identity,
    // already in the sRGB color space
    "hwb": identity,
    // already in the sRGB color space
    "keyword": identity,
    // need to convert via RGB to get reliable color conversion
    "oklch": convertViaRgb,
    // already in the sRGB color space
    "rgb": identity,
};

export function convertConversionModelToSrgbColorSpace(
    input: ConversionModel
): ConversionModel
{
    return searchDispatchMap(DISPATCH_MAP, [input.mode], identity)(input);
}