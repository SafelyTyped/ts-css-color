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

import type {
    CmykColorModel,
    CssNamedColorColorModel,
    HexColorModel,
    HslColorModel,
    HsvColorModel,
    HwbColorModel,
    OklchColorModel,
    RgbColorModel
} from "@safelytyped/css-color";
import { CSS_COLOR_FIXTURES } from "./CSS_COLOR_FIXTURES";

// Type for HSV color models with name
export type NamedHsvColorModel = {
    name: string;
    colorModels: {
        hsv: HsvColorModel;
    }
};

// Extract HSV color models with name from CSS_COLOR_FIXTURES
export const HSV_COLOR_MODELS: NamedHsvColorModel[] = CSS_COLOR_FIXTURES.map(
    (fixture) => ({
        name: fixture.name,
        colorModels: {
            hsv: fixture.colorModels.hsv,
        },
    })
);

// Type to hold all color models except HSV
export type NamedNonHsvColorModels = {
    name: string;
    colorModels: {
        cmyk: CmykColorModel;
        cssNamedColor: CssNamedColorColorModel | undefined;
        hex: HexColorModel;
        hsl: HslColorModel;
        hwb: HwbColorModel;
        oklch: OklchColorModel;
        rgb: RgbColorModel;
    }
};

// Extract everything except the HSV color models from CSS_COLOR_FIXTURES
export const NON_HSV_COLOR_MODELS: NamedNonHsvColorModels[] = CSS_COLOR_FIXTURES.map(
    (fixture) => {
        const { hsv, ...otherModels } = fixture.colorModels;
        return {
            colorModels: { ...otherModels },
            name: fixture.name
        };
    }
);