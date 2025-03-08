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
import { makeCssHexColorDefinition } from "../CssHexColorDefinition/makeCssHexColorDefinition";
import type { CssExtendedColor } from "./CssExtendedColor.type";
import type { CssExtendedColors } from "./CssExtendedColors.type";

/**
 * CSS_EXTENDED_COLORS_TO_HEX is a map, mapping the list of CSS extended
 * color names to their hex definition.
 */
export const CSS_EXTENDED_COLORS_TO_HEX: CssExtendedColors = {
    "aliceblue": makeCssHexColorDefinition("#f0f8ff"),
    "antiquewhite": makeCssHexColorDefinition("#faebd7"),
    "aqua": makeCssHexColorDefinition("#00ffff"),
    "aquamarine": makeCssHexColorDefinition("#7fffd4"),
    "azure": makeCssHexColorDefinition("#f0ffff"),
    "beige": makeCssHexColorDefinition("#f5f5dc"),
    "bisque": makeCssHexColorDefinition("#ffe4c4"),
    "black": makeCssHexColorDefinition("#000000"),
    "blanchedalmond": makeCssHexColorDefinition("#ffebcd"),
    "blue": makeCssHexColorDefinition("#0000ff"),
    "blueviolet": makeCssHexColorDefinition("#8a2be2"),
    "brown": makeCssHexColorDefinition("#a52a2a"),
    "burlywood": makeCssHexColorDefinition("#deb887"),
    "cadetblue": makeCssHexColorDefinition("#5f9ea0"),
    "chartreuse": makeCssHexColorDefinition("#7fff00"),
    "chocolate": makeCssHexColorDefinition("#d2691e"),
    "coral": makeCssHexColorDefinition("#ff7f50"),
    "cornflowerblue": makeCssHexColorDefinition("#6495ed"),
    "cornsilk": makeCssHexColorDefinition("#fff8dc"),
    "crimson": makeCssHexColorDefinition("#dc143c"),
    "cyan": makeCssHexColorDefinition("#00ffff"),
    "darkblue": makeCssHexColorDefinition("#00008b"),
    "darkcyan": makeCssHexColorDefinition("#008b8b"),
    "darkgoldenrod": makeCssHexColorDefinition("#b8860b"),
    "darkgray": makeCssHexColorDefinition("#a9a9a9"),
    "darkgreen": makeCssHexColorDefinition("#006400"),
    "darkgrey": makeCssHexColorDefinition("#a9a9a9"),
    "darkkhaki": makeCssHexColorDefinition("#bdb76b"),
    "darkmagenta": makeCssHexColorDefinition("#8b008b"),
    "darkolivegreen": makeCssHexColorDefinition("#556b2f"),
    "darkorange": makeCssHexColorDefinition("#ff8c00"),
    "darkorchid": makeCssHexColorDefinition("#9932cc"),
    "darkred": makeCssHexColorDefinition("#8b0000"),
    "darksalmon": makeCssHexColorDefinition("#e9967a"),
    "darkseagreen": makeCssHexColorDefinition("#8fbc8f"),
    "darkslateblue": makeCssHexColorDefinition("#483d8b"),
    "darkslategray": makeCssHexColorDefinition("#2f4f4f"),
    "darkslategrey": makeCssHexColorDefinition("#2f4f4f"),
    "darkturquoise": makeCssHexColorDefinition("#00ced1"),
    "darkviolet": makeCssHexColorDefinition("#9400d3"),
    "deeppink": makeCssHexColorDefinition("#ff1493"),
    "deepskyblue": makeCssHexColorDefinition("#00bfff"),
    "dimgray": makeCssHexColorDefinition("#696969"),
    "dimgrey": makeCssHexColorDefinition("#696969"),
    "dodgerblue": makeCssHexColorDefinition("#1e90ff"),
    "firebrick": makeCssHexColorDefinition("#b22222"),
    "floralwhite": makeCssHexColorDefinition("#fffaf0"),
    "forestgreen": makeCssHexColorDefinition("#228b22"),
    "fuchsia": makeCssHexColorDefinition("#ff00ff"),
    "gainsboro": makeCssHexColorDefinition("#dcdcdc"),
    "ghostwhite": makeCssHexColorDefinition("#f8f8ff"),
    "gold": makeCssHexColorDefinition("#ffd700"),
    "goldenrod": makeCssHexColorDefinition("#daa520"),
    "gray": makeCssHexColorDefinition("#808080"),
    "green": makeCssHexColorDefinition("#008000"),
    "greenyellow": makeCssHexColorDefinition("#adff2f"),
    "grey": makeCssHexColorDefinition("#808080"),
    "honeydew": makeCssHexColorDefinition("#f0fff0"),
    "hotpink": makeCssHexColorDefinition("#ff69b4"),
    "indianred": makeCssHexColorDefinition("#cd5c5c"),
    "indigo": makeCssHexColorDefinition("#4b0082"),
    "ivory": makeCssHexColorDefinition("#fffff0"),
    "khaki": makeCssHexColorDefinition("#f0e68c"),
    "lavender": makeCssHexColorDefinition("#e6e6fa"),
    "lavenderblush": makeCssHexColorDefinition("#fff0f5"),
    "lawngreen": makeCssHexColorDefinition("#7cfc00"),
    "lemonchiffon": makeCssHexColorDefinition("#fffacd"),
    "lightblue": makeCssHexColorDefinition("#add8e6"),
    "lightcoral": makeCssHexColorDefinition("#f08080"),
    "lightcyan": makeCssHexColorDefinition("#e0ffff"),
    "lightgoldenrodyellow": makeCssHexColorDefinition("#fafad2"),
    "lightgray": makeCssHexColorDefinition("#d3d3d3"),
    "lightgreen": makeCssHexColorDefinition("#90ee90"),
    "lightgrey": makeCssHexColorDefinition("#d3d3d3"),
    "lightpink": makeCssHexColorDefinition("#ffb6c1"),
    "lightsalmon": makeCssHexColorDefinition("#ffa07a"),
    "lightseagreen": makeCssHexColorDefinition("#20b2aa"),
    "lightskyblue": makeCssHexColorDefinition("#87cefa"),
    "lightslategray": makeCssHexColorDefinition("#778899"),
    "lightslategrey": makeCssHexColorDefinition("#778899"),
    "lightsteelblue": makeCssHexColorDefinition("#b0c4de"),
    "lightyellow": makeCssHexColorDefinition("#ffffe0"),
    "lime": makeCssHexColorDefinition("#00ff00"),
    "limegreen": makeCssHexColorDefinition("#32cd32"),
    "linen": makeCssHexColorDefinition("#faf0e6"),
    "magenta": makeCssHexColorDefinition("#ff00ff"),
    "maroon": makeCssHexColorDefinition("#800000"),
    "mediumaquamarine": makeCssHexColorDefinition("#66cdaa"),
    "mediumblue": makeCssHexColorDefinition("#0000cd"),
    "mediumorchid": makeCssHexColorDefinition("#ba55d3"),
    "mediumpurple": makeCssHexColorDefinition("#9370db"),
    "mediumseagreen": makeCssHexColorDefinition("#3cb371"),
    "mediumslateblue": makeCssHexColorDefinition("#7b68ee"),
    "mediumspringgreen": makeCssHexColorDefinition("#00fa9a"),
    "mediumturquoise": makeCssHexColorDefinition("#48d1cc"),
    "mediumvioletred": makeCssHexColorDefinition("#c71585"),
    "midnightblue": makeCssHexColorDefinition("#191970"),
    "mintcream": makeCssHexColorDefinition("#f5fffa"),
    "mistyrose": makeCssHexColorDefinition("#ffe4e1"),
    "moccasin": makeCssHexColorDefinition("#ffe4b5"),
    "navajowhite": makeCssHexColorDefinition("#ffdead"),
    "navy": makeCssHexColorDefinition("#000080"),
    "oldlace": makeCssHexColorDefinition("#fdf5e6"),
    "olive": makeCssHexColorDefinition("#808000"),
    "olivedrab": makeCssHexColorDefinition("#6b8e23"),
    "orange": makeCssHexColorDefinition("#ffa500"),
    "orangered": makeCssHexColorDefinition("#ff4500"),
    "orchid": makeCssHexColorDefinition("#da70d6"),
    "palegoldenrod": makeCssHexColorDefinition("#eee8aa"),
    "palegreen": makeCssHexColorDefinition("#98fb98"),
    "paleturquoise": makeCssHexColorDefinition("#afeeee"),
    "palevioletred": makeCssHexColorDefinition("#db7093"),
    "papayawhip": makeCssHexColorDefinition("#ffefd5"),
    "peachpuff": makeCssHexColorDefinition("#ffdab9"),
    "peru": makeCssHexColorDefinition("#cd853f"),
    "pink": makeCssHexColorDefinition("#ffc0cb"),
    "plum": makeCssHexColorDefinition("#dda0dd"),
    "powderblue": makeCssHexColorDefinition("#b0e0e6"),
    "purple": makeCssHexColorDefinition("#800080"),
    "rebeccapurple": makeCssHexColorDefinition("#663399"),
    "red": makeCssHexColorDefinition("#ff0000"),
    "rosybrown": makeCssHexColorDefinition("#bc8f8f"),
    "royalblue": makeCssHexColorDefinition("#4169e1"),
    "saddlebrown": makeCssHexColorDefinition("#8b4513"),
    "salmon": makeCssHexColorDefinition("#fa8072"),
    "sandybrown": makeCssHexColorDefinition("#f4a460"),
    "seagreen": makeCssHexColorDefinition("#2e8b57"),
    "seashell": makeCssHexColorDefinition("#fff5ee"),
    "sienna": makeCssHexColorDefinition("#a0522d"),
    "silver": makeCssHexColorDefinition("#c0c0c0"),
    "skyblue": makeCssHexColorDefinition("#87ceeb"),
    "slateblue": makeCssHexColorDefinition("#6a5acd"),
    "slategray": makeCssHexColorDefinition("#708090"),
    "slategrey": makeCssHexColorDefinition("#708090"),
    "snow": makeCssHexColorDefinition("#fffafa"),
    "springgreen": makeCssHexColorDefinition("#00ff7f"),
    "steelblue": makeCssHexColorDefinition("#4682b4"),
    "tan": makeCssHexColorDefinition("#d2b48c"),
    "teal": makeCssHexColorDefinition("#008080"),
    "thistle": makeCssHexColorDefinition("#d8bfd8"),
    "tomato": makeCssHexColorDefinition("#ff6347"),
    "turquoise": makeCssHexColorDefinition("#40e0d0"),
    "violet": makeCssHexColorDefinition("#ee82ee"),
    "wheat": makeCssHexColorDefinition("#f5deb3"),
    "white": makeCssHexColorDefinition("#ffffff"),
    "whitesmoke": makeCssHexColorDefinition("#f5f5f5"),
    "yellow": makeCssHexColorDefinition("#ffff00"),
    "yellowgreen": makeCssHexColorDefinition("#9acd32"),
};

/**
 * CSS_HEX_TO_EXTENDED_COLORS is a map, mapping CSS hex colors to their
 * CSS extended color names.
 *
 * Some CSS extended colors are aliases; in this case, CSS_HEX_TO_EXTENDED_COLORS
 * will map onto only one of the aliases (we do not guarantee which one).
 */
export const CSS_HEX_TO_EXTENDED_COLORS: Record<string, CssExtendedColor> = {};

HashMap.forEach(CSS_EXTENDED_COLORS_TO_HEX, (value, name) => {
    CSS_HEX_TO_EXTENDED_COLORS[value] = name as CssExtendedColor;
});