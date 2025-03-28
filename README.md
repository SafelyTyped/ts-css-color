# Welcome to CssColor

## Introduction

CssColor is a Typescript package. It helps you work with popular color models.

It is released under the 3-clause New BSD license. See [LICENSE.md](LICENSE.md) for details.

## Quick Start

```
# run this from your Terminal
npm install @safelytyped/css-color
```

```typescript
// add this import to your Typescript code
import { makeCssColor } from "@safelytyped/css-color"

const myColor = makeCssColor("red");
```

## Table of Contents <!-- omit in toc -->

- [Introduction](#introduction)
- [Quick Start](#quick-start)
- [Why Use CssColor?](#why-use-csscolor)
  - [Who Is CssColor For?](#who-is-csscolor-for)
  - [Why Use CssColor?](#why-use-csscolor-1)
- [How Does It Work?](#how-does-it-work)
  - [Getting Started](#getting-started)
- [CssColor](#csscolor)
  - [What Is A CssColor Object?](#what-is-a-csscolor-object)
  - [Creating A CssColor Object](#creating-a-csscolor-object)
  - [Assigning A Name To A CssColor Object](#assigning-a-name-to-a-csscolor-object)
  - [Getting The Individual Color Channels](#getting-the-individual-color-channels)
  - [Converting Between Color Models and Color Spaces](#converting-between-color-models-and-color-spaces)
  - [Getting the CSS Hex Value](#getting-the-css-hex-value)
  - [Getting The CSS Named Color](#getting-the-css-named-color)
  - [Getting The CSS For Different Color Models](#getting-the-css-for-different-color-models)
- [Color Models and Color Spaces](#color-models-and-color-spaces)
  - [What Are Color Models and Color Spaces?](#what-are-color-models-and-color-spaces)
  - [Why We Need To Keep Track Of Both](#why-we-need-to-keep-track-of-both)
  - [Color Models Are Not Always Unique](#color-models-are-not-always-unique)
  - [Converting Between Color Spaces Gets Funky Real Quick](#converting-between-color-spaces-gets-funky-real-quick)
- [CssCmykColor](#csscmykcolor)
  - [How To Create A CssCmykColor](#how-to-create-a-csscmykcolor)
  - [Color Channels](#color-channels)
  - [Channel Data](#channel-data)
- [CssHexColor](#csshexcolor)
  - [How To Create A CssHexColor](#how-to-create-a-csshexcolor)
  - [Color Channels](#color-channels-1)
  - [Channel Data](#channel-data-1)
- [CssHslColor](#csshslcolor)
  - [How To Create A CssHslColor](#how-to-create-a-csshslcolor)
  - [Color Channels](#color-channels-2)
  - [Channel Data](#channel-data-2)
- [CssHsvColor](#csshsvcolor)
  - [How To Create A CssHsvColor](#how-to-create-a-csshsvcolor)
  - [Color Channels](#color-channels-3)
  - [Channel Data](#channel-data-3)
- [CssHwbColor](#csshwbcolor)
  - [How To Create A CssHwbColor](#how-to-create-a-csshwbcolor)
  - [Color Channels](#color-channels-4)
  - [Channel Data](#channel-data-4)
- [CssOklchColor](#cssoklchcolor)
  - [How To Create A CssOklchColor](#how-to-create-a-cssoklchcolor)
  - [Color Channels](#color-channels-5)
  - [Channel Data](#channel-data-5)
- [CssRgbColor](#cssrgbcolor)
  - [How To Create A CssRgbColor](#how-to-create-a-cssrgbcolor)
  - [Color Channels](#color-channels-6)
  - [Channel Data](#channel-data-6)
- [Inspectors](#inspectors)
  - [contrastRatio()](#contrastratio)
  - [darkModeContrastRatio()](#darkmodecontrastratio)
  - [hasClearContrast()](#hasclearcontrast)
  - [isDark()](#isdark)
  - [isLight()](#islight)
  - [isMidtone()](#ismidtone)
  - [isMonochrome()](#ismonochrome)
  - [lightModeContrastRatio()](#lightmodecontrastratio)
  - [luma()](#luma)
  - [relativeLuminance()](#relativeluminance)
  - [tonality()](#tonality)
  - [wcagContrast()](#wcagcontrast)
- [CSS Named Colors](#css-named-colors)
  - [What Are CSS Named Colors?](#what-are-css-named-colors)
  - [CssNamedColor](#cssnamedcolor)
  - [CSS\_NAMED\_COLOR\_TO\_HEX](#css_named_color_to_hex)
  - [CSS\_HEX\_TO\_NAMED\_COLOR](#css_hex_to_named_color)
  - [isCssNamedColor()](#iscssnamedcolor)
  - [mustBeCssNamedColor()](#mustbecssnamedcolor)
  - [validateCssNamedColor()](#validatecssnamedcolor)

## Why Use CssColor?

### Who Is CssColor For?

We've built CssColor for anyone who wants to work with popular CSS color formats (aka color models) in their Typescript code.

We're using CssColor to produce the documentation for Imprint CSS, our upcoming Tailwind CSS plugin.

### Why Use CssColor?

There are plenty of well-established Javascript packages for working with CSS colors. So what makes CssColor different?

* Smart constructors (such as [makeCssColor()](#makeCssColor)) ensure that CssColor objects _always_ contain valid colors.
* Need to convert a color to another format? Each CssColor object has conversion built in.
* Need to analyse a color pair for accessibility compliance? WCAG 2.2 compliance is available for every supported CssColor.

It's basically safer and easier to use than many other packages.

## How Does It Work?

### Getting Started

Install the CssPackage into your Typescript project:

```
# run this from your Terminal
npm install @safelytyped/css-color
```

Import `makeCssColor()` into your Typescript file:

```js
import { makeCssColor } from "@safelytyped/css-color";
```

and then call `makeCssColor()` to create a CssColor object:

```typescript
const red = makeCssColor("red");
```

Once you have your CssColor object, you can do things like:

* get its individual components (e.g. get the red channel on its own)
* convert it to different color models (e.g. convert from RGB to OKLCH)
  * and then convert that back into CSS (e.g. generate the CSS for `oklch()` after converting from RGB to OKLCH)
* analyse it for accessibility

## CssColor

### What Is A CssColor Object?

A CssColor object represents a CSS color:

```typescript
// a summary of what's available in all CssColor objects
type CssColor = {
    // a name that you have assigned to your color
    name: string;

    // the original CSS used to create this color
    //
    // the definition field remains the same, even if you convert
    // your color to another format
    definition: string;

    // the CSS string to define your color
    // this will always match the current color format
    css: string;

    // your color, in #RRGGBB format
    hex: string;

    // the format that this color is in (e.g. 'rgb' or 'oklch')
    colorModel: string;

    // the color space that this color is defined within
    colorSpace: string;

    // your color, as a CSS named color
    // will be undefined if your color doesn't match a CSS named color
    cssName: string|undefined;

    // your color, in CMYK format
    cmyk: CssCmykColor;

    // your color, in HSL format
    hsl: CssHslColor;

    // your color, in HSV format
    hsv: CssHsvColor;

    // your color, in HWB format
    hwb: CssHwbColor;

    // your color, in OKLCH format
    oklch: CssOklchColor;

    // your color, in RGB format
    rgb: CssRgbColor;
}
```

### Creating A CssColor Object

To create a CSS color object, call `makeCssColor()`:

```typescript
import { makeCssColor } from "@safelytyped/css-color";

const red = makeCssColor("red");
const black = makeCssColor("#000");
const white = makeCssColor("#ffffff");
const mutedGreen = makeCssColor("oklch(55% 0.15 141deg)");
const navyBlue = makeCssColor("color(--device-cmyk 100 100 0 50)");
const paleGreen = makeCssColor("hwb(100 76% 12%)");
const skyBlue = makeCssColor("hsl(196, 100%, 64%)");
```

### Assigning A Name To A CssColor Object

If you want to give the color a name and store it in the CssColor object, you can pass that into `makeCssColor()`:

```typescript
import { makeCssColor } from "@safelytyped/css-color";

const mutedGreen = makeCssColor(
    "oklch(55% 0.15 141deg)",
    {
        colorName: "mutedGreen"
    }
);

// outputs: mutedGreen
console.log(mutedGreen.name);
```

### Getting The Individual Color Channels

You can get the individual color channels out of your CssColor object. Just convert it to the right color model first:

```typescript
import { makeCssColor } from "@safelytyped/css-color";

const mutedGreen = makeCssColor("oklch(55% 0.15 141deg)");

// get the red channel
console.log(mutedGreen.rgb.red);

// get the cyan channel
console.log(mutedGreen.cmyk.cyan);

// get all the RGB channels as a plain object
//
// useful if you want the smallest possible object for logging,
// storage or debugging
console.log(mutedGreen.rgb.channelsData);

// get all the RGB channels as an array
//
// can be useful for passing colors into other Javascript color packages :)
console.log(mutedGreen.rgb.channelsTuple);
```

### Converting Between Color Models and Color Spaces

Every CssColor object can be converted to a different color model / color space.

CssColor property | Converts To                     | Color Model / Color Space
------------------|---------------------------------|--------------------------
`.cmyk`           | [CssCmykColor](#csscmykcolor)   | `cmyk/CMYK`
`.hsl`            | [CssHslColor](#csshslcolor)     | `hsl/sRGB`
`.hsv`            | [CssHsvColor](#csshsvcolor)     | `hsv/sRGB`
`.hwb`            | [CssHwbColor](#csshwbcolor)     | `hwb/sRGB`
`.oklch`          | [CssOklchColor](#cssoklchcolor) | `oklch/OKLAB`
`.rgb`            | [CssRgbColor](#cssrgbcolor)     | `rgb/sRGB`

This then gives you access to the individual color channels of that color model.

### Getting the CSS Hex Value

You can get the CSS hex definition (`#RRGGBB`) for every CssColor object, even if it wasn't originally created using a CSS hex value:

```typescript
import { makeCssColor } from "@safelytyped/css-color";

const mutedGreen = makeCssColor("oklch(55% 0.15 141deg)");

// outputs: #368629
console.log(mutedGreen.hex);
```

### Getting The CSS Named Color

[CSS named colors](https://www.w3.org/TR/css-color-4/#named-colors) are colors that are baked into every browser. At the time of writing, all named colors are defined in the `sRGB` color space.

You can get the CSS name for your color from your CssColor object:

```typescript
import { makeCssColor } from "@safelytyped/css-color";

const myColor = makeCssColor("#000080");

// outputs: navy
console.log(myColor.cssName);
```

If your color doesn't match any of the CSS named colors, you'll get an `undefined` value back:

```typescript
import { makeCssColor } from "@safelytyped/css-color";

const myColor = makeCssColor("oklch(70% 0.187 60)");

// outputs: undefined
console.log(myColor.cssName);
```

### Getting The CSS For Different Color Models

You can get the CSS for any color model. Just convert your CssColor object into the format you want, and then get the `.css` property:

```typescript
import { makeCssColor } from "@safelytyped/css-color";

const myColor = makeCssColor("#000080");

// outputs: hsl(240, 100%, 25%)
console.log(myColor.hsl.css);
```

## Color Models and Color Spaces

### What Are Color Models and Color Spaces?

Every CssColor represents a color using a _color model_ within a _color space_.

First off, some definitions:

* A _color model_ is the notation that's used to define a color.
* A _color space_ defines the range of colors that can be created.

But what does that mean?

If you've worked with CSS colors before, you're probably familiar with defining colors like this:

```css
.alert {
    color: rgb(34 34 34);
    background-color: #ff0000;
}
```

There are two _color models_ used in that CSS snippet:

* `rgb(34 34 34)` is the `RGB` color model, and
* `#ff0000` is the `hex` color model.

In CSS, both the `RGB` and `hex` color models define colors in the same _color space_: the `sRGB` color space.

### Why We Need To Keep Track Of Both

There's two reasons why CssColor objects keep track of both the _color model_ and _color space_.

1. Some _color models_ aren't unique to a single _color space_.
2. Converting colors between _color spaces_ is handled differently to converting colors within the same _color space_.

Let's expand on that a bit.

### Color Models Are Not Always Unique

Some color models are supported in more than one color space. For example, you can use the `RGB` color model in both the `sRGB` color space (which is what CSS uses) and in the `lRGB` color space.

However, an `RGB` color in the `sRGB` color space isn't the same color in the `lRGB` color space, even if it has the same values. That's because it's the color space that defines what the `RGB` values actually look like.

That's one reason why each CssColor object keeps track of both the color model and the color space: the color only makes sense if we know them both.

### Converting Between Color Spaces Gets Funky Real Quick

It's very straight-forward to convert a color within the same color space (e.g. convert `RGB` to `HSL` in the `sRGB` color space). But converting between color spaces (e.g. `HSL` in `sRGB` to `OKLCH` in `OKLAB`)? That gets funky.

The problem is that there aren't established algorithms to directly convert every color model / color space pair to every other color model / color space pair. For example, there isn't an established algorithm to go directly from `HSL/sRGB` to `OKLCH/OKLAB`.

But there is an established algorithm to convert `RGB/sRGB` to `OKLCH/OKLAB`.

So, if we're converting `HSL/sRGB` to `OKLCH/OKLAB`, we have to add an intermediate step: we need to convert `HSL/sRGB` to `RGB/sRGB` first.

That's the other reason why each CssColor object keeps track of both the color model and the color space: it simplifies the code for converting between color spaces when there's no direct conversion available.

## CssCmykColor

### How To Create A CssCmykColor

You can convert other CssColor objects to a `CssCmykColor` object:

```typescript
import { makeCssColor } from "@safelytyped/css-color";

const cmykColor = makeCssColor("red").cmyk;
```

You can call `makeCssCmykColor()` directly to create a `CssCmykColor` object.

```typescript
import { makeCssCmykColor } from "@safelytyped/css-color";

// works with CMYK definitions
const cmykColor1 = makeCssCmykColor("color(--device-cmyk 100 100 0 50)");

// also works with other valid CSS color definitions!
const cmykColor2 = makeCssCmykColor("#000080");
```

### Color Channels

`CssCmykColor` has four color channels:

CssCmykColor Property | Color Channel | Valid Range
----------------------|---------------|-------------
`.cyan`               | C             | 0-100
`.magenta`            | M             | 0-100
`.yellow`             | Y             | 0-100
`.key`                | K             | 0-100

### Channel Data

`CssCmykColor.channelsData` returns the channels as a plain object:

```typescript
// smart constructor for creating CssCmykColor objects directly
import { makeCssCmykColor } from "@safelytyped/css-color";

// create a CMYK color to inspect
const cmykColor = makeCssCmykColor("color(--device-cmyk 100 100 0 50)");

// outputs:
//
// {
//     colorModel: "cmyk",
//     colorSpace: "CMYK",
//     cyan: 100,
//     magenta: 100,
//     yellow: 0,
//     key: 50,
// }
console.log(cmykColor.channelsData);
```

If you ever need to, you can create a `CssCmykColor` from its channel data:

```typescript
import {
    makeCssCmykColor,
    makeCssCmykColorFromCmykColorModel
} from "@safelytyped/css-color";

const cmykColor1 = makeCssCmykColor("color(--device-cmyk 100 100 0 50)");
const channelData = cmykColor1.channelsData;

// recreate the color at a later date
const cmykColor2 = makeCssCmykColorFromCmykColorModel(channelData);
```

## CssHexColor

### How To Create A CssHexColor

`CssHexColor` is special. You cannot convert other colors to it. Mostly because there's no need to: we already add the `.hex` property to all CssColor objects.

You can call `makeCssHexColor()` directly to create a `CssHexColor` object.

```typescript
import { makeCssHexColor } from "@safelytyped/css-color";

// works with HEX definitions
const hexColor1 = makeCssHexColor("#000080");

// also works with other valid CSS color definitions!
const hexColor2 = makeCssHexColor("hsl(240 100% 25%)");
```

### Color Channels

`CssHexColor` has no color channels of its own. Convert `CssHexColor` objects to other formats to access their color channels instead.

### Channel Data

`CssHexColor.channelsData` returns the hex definition as a plain object:

```typescript
// smart constructor for creating CssHexColor objects directly
import { makeCssHexColor } from "@safelytyped/css-color";

// create a HEX color to inspect
const hexColor1 = makeCssHexColor("#000080");

// outputs:
//
// {
//     colorModel: "hex",
//     colorSpace: "sRGB",
//     hex: "#000080",
// }
console.log(hexColor.channelsData);
```

If you ever need to, you can create a `CssHexColor` from its channel data:

```typescript
import {
    makeCssHexColor,
    makeCssHexColorFromHexColorModel
} from "@safelytyped/css-color";

const hexColor1 = makeCssHexColor("#000080");
const channelData = hexColor1.channelsData;

// recreate the color at a later date
const hexColor2 = makeCssHexColorFromHexColorModel(channelData);
```

## CssHslColor

### How To Create A CssHslColor

You can convert other CssColor objects to a `CssHslColor` object:

```typescript
import { makeCssColor } from "@safelytyped/css-color";

const hslColor = makeCssColor("red").hsl;
```

You can call `makeCssHslColor()` directly to create a `CssHslColor` object.

```typescript
import { makeCssHslColor } from "@safelytyped/css-color";

// works with HSL definitions
const hslColor1 = makeCssHslColor("hsl(196, 100%, 64%)");

// also works with other valid CSS color definitions!
const hslColor2 = makeCssHslColor("#47ceff");
```

### Color Channels

`CssHslColor` has four color channels:

CssHslColor Property | Color Channel | Valid Range
---------------------|---------------|-------------
`.hue`               | H             | 0-360
`.saturation`        | S             | 0-100
`.luminosity`        | L             | 0-100
`.alpha`             | A             | 0-1

### Channel Data

`CssHslColor.channelsData` returns the channels as a plain object:

```typescript
// smart constructor for creating CssHslColor objects directly
import { makeCssHslColor } from "@safelytyped/css-color";

// create a HSL color to inspect
const hslColor = makeCssHslColor("hsl(196, 100%, 64%)");

// outputs:
//
// {
//     colorModel: "hsl",
//     colorSpace: "sRGB",
//     hue: 196,
//     saturation: 100,
//     luminosity: 64,
//     alpha:1,
// }
console.log(hslColor.channelsData);
```

If you ever need to, you can create a `CssHslColor` from its channel data:

```typescript
import {
    makeCssHslColor,
    makeCssHslColorFromHslColorModel
} from "@safelytyped/css-color";

const hslColor1 = makeCssHslColor("hsl(196, 100%, 64%)");
const channelData = hslColor1.channelsData;

// recreate the color at a later date
const hslColor2 = makeCssHslColorFromHslColorModel(channelData);
```

## CssHsvColor

### How To Create A CssHsvColor

You can convert other CssColor objects to a `CssHsvColor` object:

```typescript
import { makeCssColor } from "@safelytyped/css-color";

const hsvColor = makeCssColor("red").hsv;
```

You can call `makeCssHsvColor()` directly to create a `CssHsvColor` object.

```typescript
import { makeCssHsvColor } from "@safelytyped/css-color";

// works with HSV definitions
const hsvColor1 = makeCssHsvColor("color(--hsv 240 100% 50%)");

// also works with other valid CSS color definitions!
const hsvColor2 = makeCssHsvColor("#000080");
```

### Color Channels

`CssHsvColor` has four color channels:

CssHsvColor Property | Color Channel | Valid Range
---------------------|---------------|-------------
`.hue`               | H             | 0-360
`.saturation`        | S             | 0-100
`.value`             | V             | 0-100
`.alpha`             | A             | 0-1

### Channel Data

`CssHsvColor.channelsData` returns the channels as a plain object:

```typescript
// smart constructor for creating CssHsvColor objects directly
import { makeCssHsvColor } from "@safelytyped/css-color";

// create a HSV color to inspect
const hsvColor = makeCssHsvColor("color(--hsv 240 100% 50%)");

// outputs:
//
// {
//     colorModel: "hsv",
//     colorSpace: "sRGB",
//     hue: 240,
//     saturation: 100,
//     value: 50,
//     alpha:1,
// }
console.log(hsvColor.channelsData);
```

If you ever need to, you can create a `CssHsvColor` from its channel data:

```typescript
import {
    makeCssHsvColor,
    makeCssHsvColorFromHsvColorModel
} from "@safelytyped/css-color";

const hsvColor1 = makeCssHsvColor("color(--hsv 240 100% 50%)");
const channelData = hsvColor1.channelsData;

// recreate the color at a later date
const hsvColor2 = makeCssHsvColorFromHsvColorModel(channelData);
```

## CssHwbColor

### How To Create A CssHwbColor

You can convert other CssColor objects to a `CssHwbColor` object:

```typescript
import { makeCssColor } from "@safelytyped/css-color";

const hwbColor = makeCssColor("red").hwb;
```

You can call `makeCssHwbColor()` directly to create a `CssHwbColor` object.

```typescript
import { makeCssHwbColor } from "@safelytyped/css-color";

// works with HWB definitions
const hwbColor1 = makeCssHwbColor("hwb(100 76% 12%)");

// also works with other valid CSS color definitions!
const hwbColor2 = makeCssHwbColor("#000080");
```

### Color Channels

`CssHwbColor` has four color channels:

CssHwbColor Property | Color Channel | Valid Range
---------------------|---------------|-------------
`.hue`               | H             | 0-360
`.whiteness`         | W             | 0-100
`.blackness`         | B             | 0-100
`.alpha`             | A             | 0-1

### Channel Data

`CssHwbColor.channelsData` returns the channels as a plain object:

```typescript
// smart constructor for creating CssHwbColor objects directly
import { makeCssHwbColor } from "@safelytyped/css-color";

// create a HWB color to inspect
const hwbColor = makeCssHwbColor("hwb(100 76% 12%)");

// outputs:
//
// {
//     colorModel: "hwb",
//     colorSpace: "sRGB",
//     hue: 240,
//     whiteness: 76,
//     blackness: 12,
//     alpha:1,
// }
console.log(hwbColor.channelsData);
```

If you ever need to, you can create a `CssHwbColor` from its channel data:

```typescript
import {
    makeCssHwbColor,
    makeCssHwbColorFromHwbColorModel
} from "@safelytyped/css-color";

const hwbColor1 = makeCssHsvColor("hwb(100 76% 12%)");
const channelData = hwbColor1.channelsData;

// recreate the color at a later date
const hwbColor2 = makeCssHwbColorFromHwbColorModel(channelData);
```

## CssOklchColor

### How To Create A CssOklchColor

You can convert other CssColor objects to a `CssOklchColor` object:

```typescript
import { makeCssColor } from "@safelytyped/css-color";

const oklchColor = makeCssColor("red").oklch;
```

You can call `makeCssOklchColor()` directly to create a `CssOklchColor` object.

```typescript
import { makeCssOklchColor } from "@safelytyped/css-color";

// works with OKLCH definitions
const oklchColor1 = makeCssOklchColor("oklch(70% 0.187 60)");

// also works with other valid CSS color definitions!
const oklchColor2 = makeCssOklchColor("#ef7b00");
```

### Color Channels

`CssOklchColor` has four color channels:

CssOklchColor Property | Color Channel | Valid Range
-----------------------|---------------|-------------
`.lightness`           | L             | 0-1
`.chroma`              | C             | 0-0.4
`.hue`                 | H             | 0-360
`.alpha`               | A             | 0-1

### Channel Data

`CssOklchColor.channelsData` returns the channels as a plain object:

```typescript
// smart constructor for creating CssOklchColor objects directly
import { makeCssOklchColor } from "@safelytyped/css-color";

// create a OKLCH color to inspect
const oklchColor = makeCssOklchColor("oklch(70% 0.187 60)");

// outputs:
//
// {
//     colorModel: "oklch",
//     colorSpace: "OKLAB",
//     lightness: 0.70,
//     chroma: 0.187,
//     hue: 60,
//     alpha:1,
// }
console.log(oklchColor.channelsData);
```

If you ever need to, you can create a `CssOklchColor` from its channel data:

```typescript
import {
    makeCssOklchColor,
    makeCssOklchColorFromOklchColorModel
} from "@safelytyped/css-color";

const oklchColor1 = makeCssHsvColor("oklch(70% 0.187 60)");
const channelData = oklchColor1.channelsData;

// recreate the color at a later date
const oklchColor2 = makeCssOklchColorFromOklchColorModel(channelData);
```

## CssRgbColor

### How To Create A CssRgbColor

You can convert other CssColor objects to a `CssRgbColor` object:

```typescript
import { makeCssColor } from "@safelytyped/css-color";

const rgbColor = makeCssColor("red").rgb;
```

You can call `makeCssRgbColor()` directly to create a `CssRgbColor` object.

```typescript
import { makeCssRgbColor } from "@safelytyped/css-color";

// works with RGB definitions
const rgbColor1 = makeCssRgbColor("rgb(100,100,100)");

// also works with other valid CSS color definitions!
const rgbColor2 = makeCssRgbColor("#646464");
```

### Color Channels

`CssRgbColor` has four color channels:

CssRgbColor Property | Color Channel | Valid Range
---------------------|---------------|-------------
`.red`               | R             | 0-255
`.green`             | G             | 0-255
`.blue`              | B             | 0-255
`.alpha`             | A             | 0-1

### Channel Data

`CssRgbColor.channelsData` returns the channels as a plain object:

```typescript
// smart constructor for creating CssRgbColor objects directly
import { makeCssRgbColor } from "@safelytyped/css-color";

// create a RGB color to inspect
const rgbColor = makeCssRgbColor("rgb(100,100,100)");

// outputs:
//
// {
//     colorModel: "rgb",
//     colorSpace: "sRGB",
//     red: 100,
//     green: 100,
//     blue: 100,
//     alpha:1,
// }
console.log(rgbColor.channelsData);
```

If you ever need to, you can create a `CssRgbColor` from its channel data:

```typescript
import {
    makeCssRgbColor,
    makeCssRgbColorFromRgbColorModel
} from "@safelytyped/css-color";

const rgbColor1 = makeCssHsvColor("rgb(100,100,100)");
const channelData = rgbColor1.channelsData;

// recreate the color at a later date
const rgbColor2 = makeCssRgbColorFrRgbColorModel(channelData);
```

## Inspectors

### contrastRatio()

`contrastRatio()` calculates the WCAG 2.2 relative contrast between two colors.

You don't need to pass in the the colors in any set order. This function will work regardless.

```typescript
import { makeCssColor, contrastRatio } from "@safelytyped/css-color";

// outputs: 14.7
console.log(
    contrastRatio(
        makeCssColor("#222"),
        makeCssColor("#f6f6f6f"),
    )
);
```

### darkModeContrastRatio()

`darkModeContrastRatio()` calculates the WCAG 2.2 relative contrast of the given input color against a black (`#000`) background.

```typescript
import { makeCssColor, darkModeContrastRatio } from "@safelytyped/css-color";

console.log(
    darkModeContrastRatio(
        makeCssColor("#f6f6f6")
    )
);
```

Using a different color as your dark mode background? You can pass that color in as an optional named parameter:

```typescript
import { makeCssColor, darkModeContrastRatio } from "@safelytyped/css-color";

console.log(
    darkModeContrastRatio(
        makeCssColor("#f6f6f6"),
        { darkModeBg: makeCssColor("#222") }
    )
);
```

### hasClearContrast()

`hasClearContrast()` determines whether or not two given colors are truly different from each other on a black-and-white scale.

Combine this with [`contrastRatio()`](#contrastratio) to catch the color pairs that the WCAG 2.2 formula alone doesn't catch.

```typescript
import { makeCssColor, hasClearContrast } from "@safelytyped/css-color";

// outputs: true
console.log(
    hasClearContrast(
        makeCssColor("#222"),
        makeCssColor("#f6f6f6")
    )
);

// outputs: false
console.log(
    hasClearContrast(
        makeCssColor("#222"),
        makeCssColor("#fd7e14")
    )
);
```

### isDark()

`isDark()` returns `true` if the given input color is a dark color. It uses [`tonality()`](#tonality) to determine this.

```typescript
import { makeCssColor, isDark } from "@safelytyped/css-color";

// outputs: true
console.log(
    isDark(
        makeCssColor("#222")
    )
);
```

### isLight()

`isLight()` returns `true` if the given input color is a light color. It uses [`tonality()`](#tonality) to determine this.

```typescript
import { makeCssColor, isLight } from "@safelytyped/css-color";

// outputs: true
console.log(
    isLight(
        makeCssColor("#f6f6f6")
    )
);
```

### isMidtone()

`isMidtone()` returns `true` if the given input color is not a light color, and is not a dark color either. It uses [`tonality()`](#tonality) to determine this.

```typescript
import { makeCssColor, isMidtone } from "@safelytyped/css-color";

// outputs: true
console.log(
    isMidtone(
        makeCssColor("#fd7e14")
    )
);
```

### isMonochrome()

`isMonochrome()` returns `true` if the given input color is black, white, or a pure gray color.

```typescript
import { makeCssColor, isMonochrome } from "@safelytyped/css-color";

// outputs: true
console.log(
    isMidtone(
        makeCssColor("#222")
    )
);

// outputs: false
console.log(
    isMidtone(
        makeCssColor("#9CA3AF")
    )
);
```

### lightModeContrastRatio()

`lightModeContrastRatio()` calculates the WCAG 2.2 relative contrast of the given input color against a white (`#fff`) background.

```typescript
import { makeCssColor, lightModeContrastRatio } from "@safelytyped/css-color";

console.log(
    lightModeContrastRatio(
        makeCssColor("#222")
    )
);
```

Using a different color as your light mode background? You can pass that color in as an optional named parameter:

```typescript
import { makeCssColor, lightModeContrastRatio } from "@safelytyped/css-color";

console.log(
    lightModeContrastRatio(
        makeCssColor("#222"),
        { lightModeBg: makeCssColor("#f6f6f6") }
    )
);
```

### luma()

`luma()` calculates the given color's "Y" component from the YIQ color space.

YIQ is the old NTSC color space used on American TVs back in the day.

This is based on [Brian Suda's formula](https://24ways.org/2010/calculating-color-contrast).

```typescript
import { makeCssColor, luma } from "@safelytyped/css-color";

// outputs: 71.772
console.log(
    luma(
        makeCssColor("#234f83")
    )
);
```

### relativeLuminance()

`relativeLuminance()` calculates the WCAG 2.2 relative luminance of the given input color.

This is an alternative to the [`luma()`](#luma) value.

This value is used in determining the [WCAG contrast ratings](#wcagcontrast).

```typescript
import { makeCssColor, relativeLuminance } from "@safelytyped/css-color";

// outputs: 0.075
console.log(
    relativeLuminance(
        makeCssColor("#234f83")
    )
);
```

### tonality()

`tonality()` uses the given color's [`luma()`](#luma) to work out whether the color is `light`, `dark`, or `midtone`.

```typescript
import { makeCssColor, tonality } from "@safelytyped/css-color";

// outputs: light
console.log(
    tonality(
        makeCssColor("#f6f6f6")
    )
);

// outputs: dark
console.log(
    tonality(
        makeCssColor("#222")
    )
);

// outputs: midtone
console.log(
    tonality(
        makeCssColor("#fd7e14")
    )
);
```

### wcagContrast()

`wcagContrast()` works out whether the given contrast ratio meets the WCAG 2.2 success criteria for accessibility.

Here's the structure of the object returned by `wcagContrast()`:

```typescript
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

    /**
     * what is the WCAG rating for headlines?
     */
    large: "AAA" | "AA" | "not accessible",

    /**
     * what is the WCAG rating for body text?
     */
    normal: "AAA" | "AA" | "A" | "not accessible",

    /**
     * what is the WCAG rating for UI controls?
     */
    ui: "AA" | "A" | "not accessible",
};
```

Here's an example of how to use `wcagContrast()`:

```typescript
import {
    makeCssColor,
    contrastRatio,
    wcagContrast
} from "@safelytyped/css-color";

// calculate the contrast ratio between our two colors
const contrast = contrastRatio(
    makeCssColor("#222"),
    makeCssColor("#f6f6f6")
);

// outputs: {
//     "A_normal": true,
//     "AA_normal": true,
//     "AA_large": true,
//     "AA_ui": true,
//     "AAA_normal": true,
//     "AAA_large": true,
//     "large": "AAA",
//     "normal": "AAA",
//     "ui": "AA"
// },
console.log(
    wcagContrast(contrast)
);
```

## CSS Named Colors

### What Are CSS Named Colors?

[CSS named colors](https://developer.mozilla.org/en-US/docs/Web/CSS/named-color) are the color names supported by all browsers.

For example: "black", "white", "rebeccapurple" are all CSS named colors.

(You may have seen these referred to as "CSS extended colors" in the past. This term has been dropped in the latest [CSS Color Module Level 4 draft spec](https://drafts.csswg.org/css-color/#named-colors)).

### CssNamedColor

`CssNamedColor` is a string literal type. It contains all the known CSS color names.

Use it whenever you want to force someone to pass a CSS named color as a parameter into a function.

### CSS_NAMED_COLOR_TO_HEX

`CSS_NAMED_COLOR_TO_HEX` is a map. Use it to find the CSS hex value of any given CSS named color.

```typescript
import {
    type CssNamedColor,
    CSS_NAMED_COLOR_TO_HEX
} from "@safelytyped/css-color";

// outputs: #ff0000
console.log(
    CSS_NAMED_COLOR_TO_HEX(mustBeCssNamedColor("red"))
);
```

### CSS_HEX_TO_NAMED_COLOR

`CSS_HEX_TO_NAMED_COLOR` is a map. Use it to find the named CSS color that matches the given CSS hex definition.

```typescript
import {
    mustBeCssHexDefinition,
    CSS_HEX_TO_NAMED_COLOR
} from "@safelytyped/css-color";

// outputs: white
console.log(
    CSS_HEX_TO_NAMED_COLOR(
        mustBeCssHexDefinition("#ffffff")
    )
);
```

If two or more CSS named colors have the same hex definition, we don't guarantee which named color we'll return.

### isCssNamedColor()

`isCssNamedColor()` is a data guard. Use it to prove to the Typescript compiler that the given input is a CSS named color.

```typescript
import { isCssNamedColor } from "@safelytyped/css-color";

const myColor = "red";
if (isCssNamedColor(myColor)) {
    // tsc now treats `myColor` as a `CssNamedColor`
}
```

### mustBeCssNamedColor()

`mustBeCssNamedColor()` is a data guarantee. Use it to ensure that the given input is a CSS named color.

Throws an error if the given input is not a valid CSS named color.

```typescript
import { mustBeCssNamedColor } from "@safelytyped/css-color";

// myColor has the type: CssNamedColor
const myColor = mustBeCssNamedColor("red");

// throws an error
const badColor = mustBeCssNamedColor("amaranth");
```

### validateCssNamedColor()

`validateCssNamedColor()` is a data validator. It's used by both `isCssNamedColor()` and `mustBeCssNamedColor()` to determine if the given input is a CSS named color or not.

Only call this directly from other validators.