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

import type { SupportedCssColorFormat, SupportedCssColorSpace } from "../index";

/**
 * CssColorData is the base data for defining a CSSColor.
 *
 * Extend this to add channel and colorspace data for each different
 * CSS color format.
 */
export type CssColorData = {
    /**
     * what do humans call this color?
     *
     * this may be the same as `definition`, if the color has no name
     * (or no name was given)
     *
     * @type {string}
     */
    name: string;

    /**
     * what is the original definition of this color?
     *
     * we remember this, so that we can emit a guaranteed lossless
     * definition of the color
     *
     * @type {string}
     */
    definition: string;

    /**
     * what type of color data do we hold?
     *
     * this may be different to the notation used in the `definition` field
     * (for example, if a color was converted from `keyword` to `rgb`)
     */
    colorFormat: SupportedCssColorFormat;

    /**
     * what color space is this data in?
     *
     * it's normally lossless to convert between color formats in the same
     * color space.
     *
     * converting between two different color spaces can end up changing
     * the appearance of the color, or even producing a color that cannot
     * be rendered as-is
     */
    colorSpace: SupportedCssColorSpace;
};