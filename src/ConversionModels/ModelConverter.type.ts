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

import type { ConversionModel } from "./ConversionModel.type";

/**
 * ModelConverters contain the rules for converting to/from a given
 * ColorModel
 */
export type ModelConverter<INT,EXT> = {

    // ================================================================
    //
    // FROM ConversionModel => ColorModel
    //
    // ----------------------------------------------------------------

    /**
     * converts any conversion model into our color model
     */
    toColorModel: (input: ConversionModel) => INT;

    /**
     * tidies up our color model as necessary
     */
    normaliseColorModel: (input: INT) => INT;

    // ================================================================
    //
    // FROM ColorModel => ConversionModel
    //
    // some Color Models (e.g. CMYK) cannot be converted back into
    // a ConversionModel
    //
    // ----------------------------------------------------------------

    /**
     * converts our color model to the corresponding conversion model
     */
    toConversionModel: EXT extends undefined ? undefined : (input: INT) => EXT;

    /**
     * tidies up the conversion model as necessary
     */
    normaliseConversionModel: EXT extends undefined ? undefined : (input: EXT) => EXT;

    // ================================================================
    //
    // CONVERSION BETWEEN COLOR SPACES
    //
    // we manage this explicitly, to make sure that we get reliable
    // two-way conversion between color spaces
    //
    // some Color Models (e.g. CMYK) do not support conversion between
    // color spaces, because they don't support conversion at all
    //
    // ----------------------------------------------------------------

    /**
     * prepares our conversion model for conversion into the OKLCH color space
     */
    prepForOklch: EXT extends undefined ? undefined : (input: ConversionModel) => ConversionModel;

    /**
     * prepares our conversion model for conversion into the sRGB color space
     */
    prepForSrgb: EXT extends undefined ? undefined : (input: ConversionModel) => ConversionModel;

    // ================================================================
    //
    // to/from CSS definitions
    //
    // ----------------------------------------------------------------

    parse: EXT extends undefined? undefined : (input: string) => EXT;

    /**
     * converts our color model to a CSS string
     */
    toCss: (input: INT, fallback: string) => string;
};