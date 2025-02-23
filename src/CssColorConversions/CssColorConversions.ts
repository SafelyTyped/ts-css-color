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

import { HashMap, type DataGuaranteeOptions, type FunctionalOption } from "@safelytyped/core-types";
import type { CssRgbColor } from "../CssRgbColor/CssRgbColor";
import type { CssColorConverter } from "./CssColorConverter";
import type { CssRgbColorData } from "../CssRgbColor/CssRgbColorData.type";
import type { AnyCssColor } from "../CssColor/AnyCssColor.type";
import type { CssHslColor } from "../CssHslColor/CssHslColor";
import type { CssHwbColor } from "../CssHwbColor/CssHwbColor";
import type { CssHslColorData } from "../CssHslColor/CssHslColorData.type";
import type { CssHwbColorData } from "../CssHwbColor/CssHwbColorData.type";

interface CachedConversions {
    hsl: HashMap<CssHslColor>;
    hwb: HashMap<CssHwbColor>;
    rgb: HashMap<CssRgbColor>;
}

const CACHED_CONVERSIONS: CachedConversions = {
    hsl: {},
    hwb: {},
    rgb: {}
};

export class CssColorConversions
{
    // ================================================================
    //
    // INITIALISERS
    //
    // ----------------------------------------------------------------

    static reset()
    {
        CACHED_CONVERSIONS.hsl = {};
        CACHED_CONVERSIONS.hwb = {};
        CACHED_CONVERSIONS.rgb = {};
    }

    // ================================================================
    //
    // HSL support
    //
    // ----------------------------------------------------------------

    static deleteHsl(input: CssHslColor)
    {
        const cacheKey = this.cacheKey(input);
        delete CACHED_CONVERSIONS.hsl[cacheKey];
    }

    static hasHsl(input: CssHslColor): boolean
    {
        const cacheKey = this.cacheKey(input);
        return HashMap.has(CACHED_CONVERSIONS.hsl, cacheKey);
    }

    static toHsl(
        from: AnyCssColor,
        converter: CssColorConverter<CssHslColor>,
        fnOpts: FunctionalOption<CssHslColorData, DataGuaranteeOptions>[]
    ): CssHslColor
    {
        // uncacheable
        if (fnOpts.length > 0) {
            return converter();
        }

        const cacheKey = this.cacheKey(from);
        if (!HashMap.has(CACHED_CONVERSIONS.hsl, cacheKey)) {
            CACHED_CONVERSIONS.hsl[cacheKey] = converter();
        }

        // all done
        return CACHED_CONVERSIONS.hsl[cacheKey];
    }

    // ================================================================
    //
    // HWB support
    //
    // ----------------------------------------------------------------

    static deleteHwb(input: CssHwbColor)
    {
        const cacheKey = this.cacheKey(input);
        delete CACHED_CONVERSIONS.hwb[cacheKey];
    }

    static hasHwb(input: CssHwbColor): boolean
    {
        const cacheKey = this.cacheKey(input);
        return HashMap.has(CACHED_CONVERSIONS.hwb, cacheKey);
    }

    static toHwb(
        from: AnyCssColor,
        converter: CssColorConverter<CssHwbColor>,
        fnOpts: FunctionalOption<CssHwbColorData, DataGuaranteeOptions>[]
    ): CssHwbColor
    {
        // uncacheable
        if (fnOpts.length > 0) {
            return converter();
        }

        const cacheKey = this.cacheKey(from);
        if (!HashMap.has(CACHED_CONVERSIONS.hwb, cacheKey)) {
            CACHED_CONVERSIONS.hwb[cacheKey] = converter();
        }

        // all done
        return CACHED_CONVERSIONS.hwb[cacheKey];
    }

    // ================================================================
    //
    // RGB support
    //
    // ----------------------------------------------------------------

    static deleteRgb(input: CssRgbColor)
    {
        const cacheKey = this.cacheKey(input);
        delete CACHED_CONVERSIONS.rgb[cacheKey];
    }

    static hasRgb(input: CssRgbColor): boolean
    {
        const cacheKey = this.cacheKey(input);
        return HashMap.has(CACHED_CONVERSIONS.rgb, cacheKey);
    }

    static toRgb(
        converter: CssColorConverter<CssRgbColor>,
        input: AnyCssColor,
        fnOpts: FunctionalOption<CssRgbColorData, DataGuaranteeOptions>[]
    ): CssRgbColor
    {
        // uncacheable
        if (fnOpts.length > 0) {
            return converter();
        }

        // special case - already in RGB format
        if (input.colorFormat() === "rgb") {
            return input as CssRgbColor;
        }

        const cacheKey = this.cacheKey(input);
        if (!HashMap.has(CACHED_CONVERSIONS.rgb, cacheKey)) {
            CACHED_CONVERSIONS.rgb[cacheKey] = converter();
        }

        // all done
        return CACHED_CONVERSIONS.rgb[cacheKey];
    }

    // ================================================================
    //
    // HELPER METHODS
    //
    // ----------------------------------------------------------------

    private static cacheKey(input: AnyCssColor): string
    {
        return input.name() + "##" + input.definition();
    }
}