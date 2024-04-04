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

/**
 * WcagContrastRatings is a map of known WCAG contrast criteria in their
 * context:
 *
 * - A_normal - is this good enough for people with healthy vision? (based on ISO-9241)
 * - AA_normal - is this good enough for AA rating for body text?
 * - AA_large - is this good enough for AA rating for headlines?
 * - AA_ui - is this good enough for AA rating for UI controls?
 * - AAA_normal - is this good enough for AAA rating for body text?
 * - AAA_large - is this good enough for AAA rating for headlines?
 *
 * NOTE that there is no AAA rating for UI controls at this time.
 *
 * See:
 *
 * - https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast
 * - https://www.w3.org/TR/WCAG21/#contrast-minimum
 * - https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html
 */
export type WcagContrastRatings = {
    /**
     * is this good enough for people with healthy vision? (based on ISO-9241)
     */
    "A_normal": boolean,

    /**
     * is this good enough for the WCAG AA rating for body text?
     */
    "AA_normal": boolean,

    /**
     * is this good enough for the WCAG AA rating for headlines?
     */
    "AA_large": boolean,

    /**
     * is this good enough for the WCAG AA rating for UI controls?
     */
    "AA_ui": boolean,

    /**
     * is this good enough for the WCAG AAA rating for body text?
     */
    "AAA_normal": boolean,

    /**
     * is this good enough for the WCAG AAA rating for headlines?
     */
    "AAA_large": boolean,
};