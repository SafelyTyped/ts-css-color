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
import type { AnyCssColor } from "../CssColor/AnyCssColor.type";
import type { CssColorData } from "../CssColor/CssColorData.type";
import type { CssColorConverter } from "../CssColorConversions/CssColorConverter.type";
import type { SupportedCssColorFormat } from "../SupportedCssColorFormat/SupportedCssColorFormat.type";

export class CssColorConversionsCache<T extends AnyCssColor, D extends CssColorData>
{
    protected CACHED_CONVERSIONS: HashMap<T> = {};

    protected colorFormat: SupportedCssColorFormat;

    // ================================================================
    //
    // INITIALISERS
    //
    // ----------------------------------------------------------------

    public constructor(
        colorFormat: SupportedCssColorFormat
    )
    {
        this.colorFormat = colorFormat;
    }

    public reset()
    {
        this.CACHED_CONVERSIONS = {};
    }

    // ================================================================
    //
    // HEX support
    //
    // ----------------------------------------------------------------

    public delete(input: T)
    {
        const cacheKey = this.cacheKey(input);
        delete this.CACHED_CONVERSIONS[cacheKey];
    }

    public has(input: T): boolean
    {
        const cacheKey = this.cacheKey(input);
        return HashMap.has(this.CACHED_CONVERSIONS, cacheKey);
    }

    public convert(
        converter: CssColorConverter<T>,
        input: AnyCssColor,
        fnOpts: FunctionalOption<D, DataGuaranteeOptions>[]
    ): T
    {
        // uncacheable
        if (fnOpts.length > 0) {
            return converter();
        }

        // special case - already in the format we hold
        if (input.colorFormat() === this.colorFormat) {
            return input as T;
        }

        const cacheKey = this.cacheKey(input);
        if (!HashMap.has(this.CACHED_CONVERSIONS, cacheKey)) {
            this.CACHED_CONVERSIONS[cacheKey] = converter();
        }

        // all done
        return this.CACHED_CONVERSIONS[cacheKey];
    }

    // ================================================================
    //
    // HELPER METHODS
    //
    // ----------------------------------------------------------------

    private cacheKey(input: AnyCssColor): string
    {
        return input.name() + "##" + input.definition();
    }
}