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
import { convertConversionModelViaRgbChannelsData } from "../CssRgbColor/convertConversionModelViaRgbChannelsData";
import { convertRgbChannelsDataToConversionModel } from "../CssRgbColor/convertRgbChannelsDataToConversionModel";
import { normaliseRgbConversionModel } from "../CssRgbColor/normaliseRgbConversionModel";
import type { SupportedCssColorFormat } from "../SupportedCssColorFormat/SupportedCssColorFormat.type";
import type { ConversionModel } from "./ConversionModel.type";

type ConversionModelConverter = (input: ConversionModel) => ConversionModel;

/**
 * convertWithinRgb() turns the given ConversionModel into one that's in
 * the normalised RGB format.
 *
 * This step allows us to produce the same OKLCH result from different
 * color formats.
 */
const convertWithinRgb = (
    input: ConversionModel
) => convertRgbChannelsDataToConversionModel(
    convertConversionModelViaRgbChannelsData(input)
);

const convertViaRgb = (
    input: ConversionModel
) => normaliseRgbConversionModel(rgb(input));

/**
 * how we convert each supported type of input model to the OKLCH color space
 */
const OKLCH_DISPATCH_MAP: DispatchMap<SupportedCssColorFormat, ConversionModelConverter> = {
    // CssCmykColor.conversionModel() already returns RGB
    "cmyk": identity,
    // CssHexColor.conversionModel() already returns RGB
    "hex": identity,
    "hsl": convertViaRgb,
    "hsv": convertWithinRgb,
    "hwb": convertViaRgb,
    // CssKeywordColor.conversionModel() already returns RGB
    "keyword": identity,
    // CssOklchColor.conversionModel() already returns OKLCH
    "oklch": identity,
    // CssRgbColor.conversionModel() already returns RGB
    "rgb": identity,
};

export function convertConversionModelToOklchColorSpace(
    input: ConversionModel
): ConversionModel
{
    return searchDispatchMap(OKLCH_DISPATCH_MAP, [input.mode], identity)(input);
}