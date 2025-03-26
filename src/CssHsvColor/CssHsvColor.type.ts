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

import type { Maybe } from "@safelytyped/core-types";
import type { HsvColorModel } from "../ColorModels/Hsv/HsvColorModel.type";
import type { HsvConversionModel } from "../ConversionModels/Hsv/HsvConversionModel.type";
import type { CssCmykColor } from "../CssCmykColor/CssCmykColor.type";
import type { CssHexColorDefinition } from "../CssHexColorDefinition/CssHexColorDefinition.type";
import type { CssHslColor } from "../CssHslColor/CssHslColor.type";
import type { CssHwbColor } from "../CssHwbColor/CssHwbColor.type";
import type { CssNamedColor } from "../CssNamedColors/CssNamedColor.type";
import type { CssOklchColor } from "../CssOklchColor/CssOklchColor.type";
import type { CssRgbColor } from "../CssRgbColor/CssRgbColor.type";
import type { HsvColorTuple } from "./HsvColorTuple.type";

export type CssHsvColor = {
    name: string;
    definition: string;
    colorModel: "hsv";
    colorSpace: "sRGB";

    cmyk: CssCmykColor;
    hsl: CssHslColor;
    hsv: CssHsvColor;
    hwb: CssHwbColor;
    oklch: CssOklchColor;
    rgb: CssRgbColor;

    hex: CssHexColorDefinition;
    cssName: Maybe<CssNamedColor>;
    conversionModel: HsvConversionModel;
    channelsData: HsvColorModel;
    channelsTuple: HsvColorTuple;
    css: string;

    hue: number;
    saturation: number;
    value: number;
    alpha: number;
};