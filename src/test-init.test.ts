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

import chai from "chai";

import { CSS_HEX_CONVERSIONS } from "./CssHexColor/CSS_HEX_CONVERSIONS";
import { CSS_HSL_CONVERSIONS } from "./CssHslColor/CSS_HSL_CONVERSIONS";
import { CSS_HWB_CONVERSIONS } from "./CssHwbColor/CSS_HWB_CONVERSIONS";
import { CSS_OKLCH_CONVERSIONS } from "./CssOklchColor/CSS_OKLCH_CONVERSIONS";
import { CSS_RGB_CONVERSIONS } from "./CssRgbColor/CSS_RGB_CONVERSIONS";

// ================================================================
//
// TEST FAILURE REPORTING
//
// ----------------------------------------------------------------

// show full-length test failure
chai.config.truncateThreshold = 0;

// ================================================================
//
// CACHE MANAGEMENT
//
// ----------------------------------------------------------------

// reset all color conversion caches, to avoid failed tests
// poisoning the cache
CSS_HEX_CONVERSIONS.reset();
CSS_HSL_CONVERSIONS.reset();
CSS_HWB_CONVERSIONS.reset();
CSS_OKLCH_CONVERSIONS.reset();
CSS_RGB_CONVERSIONS.reset();
