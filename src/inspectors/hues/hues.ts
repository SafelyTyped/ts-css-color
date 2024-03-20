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

import { HashMap } from "@safelytyped/core-types";
import type { AnyCssColor } from "../../CssColor/AnyCssColor";

/**
 * Hue is a type. It represents all of the valid color hues that we
 * can classify a color into.
 */
export type Hue =
    "black"
    | "white"
    | "gray"
    | "red"
    | "pink"
    | "orange"
    | "violet"
    | "purple"
    | "yellow"
    | "green"
    | "cyan"
    | "blue"
    | "magenta"
    ;

/**
 * HuesMap is a type, mapping named {@link Hue}s onto their valid ranges.
 */
type HuesMap = Partial<Record<Hue, string>>;

/**
 * huesMap lists the hues that we calculate on their ranges
 */
const huesMap: HuesMap = {
    yellow: "31-90",
    orange: "37-44",
    green: "91-150",
    cyan: "151-210",
    blue: "211-270",
    violet: "268-273",
    purple: "272-300",
    magenta: "271-330",
    pink: "345-355",
};

/**
 * hues() returns a list of {@link Hue} that best describes the given `input`
 * color.
 *
 * This is useful for grouping colors together (e.g. for presenting them
 * in documentation).
 *
 * @param input
 * @returns
 */
export function hues(input: AnyCssColor): Hue[]
{
    // our return value
    const retval: Hue[] = [];

    // what is the hue?
    const { hue, saturation, luminosity } = input.hsl().channelsData();

    // special case
    if (saturation < 15) {
        retval.push("gray");
    }

    // special case
    if (luminosity < 15) {
        retval.push("black");
    }

    // special case
    if (luminosity > 85) {
        retval.push("white");
    }

    // special case
    if (hue > 330 || hue < 30) {
        retval.push("red");
    }

    // general case
    HashMap.forEach(huesMap, (range, hueName) => {
        const parts = range.split("-");
        const min = parseInt(parts[0]);
        const max = parseInt(parts[1]);

        if (hue >= min && hue <= max) {
            retval.push(hueName as Hue);
        }
    });

    // all done
    return retval;
}