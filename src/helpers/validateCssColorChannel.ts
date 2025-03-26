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

import { DEFAULT_DATA_PATH, extendDataPath, HashMap, UnsupportedTypeError, type AppErrorOr, type TypeValidatorOptions } from "@safelytyped/core-types";
import { InvalidCssColorChannelValueError } from "../index";

/**
 * validateCssColorChannel() is a data validator. Use it to prove that:
 *
 * - the given input contains the named CSS color channel
 * - the CSS color channel has a value in an acceptable range
 *
 * @typedef T -
 * what type of input object are we receiving (and returning on success)?
 * @param input -
 * the object to inspect
 * @param channelName -
 * the name of the property to inspect
 * @param min -
 * what's the minimum acceptable value for `input[channelName]`? (inclusive)
 * @param max -
 * what's the maximum acceptable value for `input[channelName]`? (inclusive)
 * @param path -
 * what's the path through your data structures to `input`?
 * we will use this in any errors we return (and automatically extend the
 * path to include the `channelName`)
 * @returns
 * - `input as T` on success
 * - an AppError otherwise
 */
export function validateCssColorChannel<T extends object = object>(
    input: T,
    channelName: string,
    min: number,
    max: number,
    {
        path = DEFAULT_DATA_PATH
    }: TypeValidatorOptions= {}
): AppErrorOr<T>
{
    const channels = (input as unknown) as HashMap<number>;
    const channelPath = extendDataPath(path, channelName);

    if (typeof (channels[channelName]) !== "number") {
        return new UnsupportedTypeError({
            public: {
                dataPath: channelPath,
                expected: "number",
                actual: typeof channels[channelName],
            }
        });
    }

    if (channels[channelName] < min || channels[channelName] > max || Number.isNaN(channels[channelName])) {
        return new InvalidCssColorChannelValueError({
            public: {
                dataPath: channelPath,
                invalidValue: channels[channelName],
            }
        });
    }

    // all done
    return input;
}