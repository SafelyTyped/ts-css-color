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
import type { AnyCssColor } from "../CssColor/AnyCssColor.type";
import { isMonochrome } from "./isMonochome";

/**
 * Hue is a type. It represents all of the valid color hues that we
 * can classify a color into.
 */
export type Hue =
    // achromatic
    "black"
    | "white"
    | "gray"
    | "red"
    | "brown"
    | "orange"
    | "yellow"
    | "lime"
    | "chartreuse"
    | "green"
    | "springgreen"
    | "teal"
    | "cyan"
    | "azure"
    | "indigo"
    | "blue"
    | "violet"
    | "magenta"
    | "fuchsia"
    | "purple"
    | "rose"
    | "pink"
    ;

type PolarRangeChecker = (min: number, max: number, hue: number) => boolean;

const fallsInRange: PolarRangeChecker =
    (min: number, max: number, value: number) =>
        (max > min)
            ? (value >= min) && (value < max)
            : (value >= min) || (value < max);


type HueRangeChecker = (hue: number) => boolean;

/**
 * HuesMap is a type, mapping named {@link Hue}s onto their valid ranges.
 */
type HuesMap = Partial<Record<Hue, HueRangeChecker>>;

/**
 * huesMap lists the ranges for each hue
 *
 * color hue classifications seem to be highly subjective, and many
 * of the CSS extended colors do not fall into the hue that you might
 * expect!
 */
const CHROMA_HUES_MAP: HuesMap = {
    red: (x) => fallsInRange(355, 30, x),
    brown: (x) => fallsInRange(5, 20, x),
    orange: (x) => fallsInRange(25, 55, x),
    yellow: (x) => fallsInRange(55, 85, x),
    lime: (x) => fallsInRange(65, 75, x),
    chartreuse: (x) => fallsInRange(85, 115, x),
    green: (x) => fallsInRange(115, 145, x),
    springgreen: (x) => fallsInRange(145, 175, x),
    teal: (x) => fallsInRange(168, 180, x),
    cyan: (x) => fallsInRange(175, 215, x),
    azure: (x) => fallsInRange(205, 235, x),
    blue: (x) => fallsInRange(235, 270, x),
    indigo: (x) => fallsInRange(250, 265, x),
    violet: (x) => fallsInRange(265, 295, x),
    magenta: (x) => fallsInRange(295, 325, x),
    fuchsia: (x) => fallsInRange(295, 325, x),
    purple: (x) => fallsInRange(295, 325, x),
    rose: (x) => fallsInRange(325, 345, x),
    pink: (x) => fallsInRange(345, 355, x),
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
    let retval = grayHues(input);

    // special case - we need to bail early if this is a true monochrome
    // color
    //
    // it doesn't make sense to look at the color hue in this case
    if (isMonochrome(input)) {
        return retval;
    }

    // at this point, we can add in the color hues
    retval = [
        ...retval,
        ...colorHues(input)
    ];

    // all done
    return retval;
}

function grayHues(input: AnyCssColor): Hue[]
{
    // our return value
    const retval: Hue[] = [];

    // what is the hue?
    const { saturation, luminosity } = input.hsl().channelsData();

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

    // all done
    return retval;
}

function colorHues(input: AnyCssColor): Hue[]
{
    // what is the hue?
    const hue = input.hue();

    // our return value
    const filteredHuesMap = HashMap.filter(
        CHROMA_HUES_MAP,
        (checker) => checker(hue)
    );

    // all done
    return HashMap.keys(filteredHuesMap) as Hue[];
}
