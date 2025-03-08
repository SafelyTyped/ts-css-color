/**
 * taken from https://www.typescriptlang.org/play/?ssl=1&ssc=1&pln=66&pc=3#code/PQKhCgAIUhxBTALgZ0gQwDYcvD8C28AdijgB4DG8ADopAGYD2ATpABbxoAmkAlkegFpmzNAE8oMAALwyafNTyTIAFTS8MAHgDaARgA0kAEyGAzAF0AfAG5IwYJG0nIFycHCIx1eKvVaV5IjEXKgArkQA1kSMAO5E2laQALyqgcGo2uFRsUSGAHQF-PTwrABK8MiI5lCQAPyQ5ZU1AFyQRPAAbiXW4OCgENANSKHMRKhqGpoqlnz0DLzMlTh4hCSQjHMB+GiIFByoAAp5kADKjIRssZDMFYwYXai8yMihFZAxvIhsyuG8jAKebzIQwAI1CdHCLxu7FitikyHgPgA3lIMPwIuxEIhqMhmvZKmgKBFGF1mPQMLE8hRzsA0MAAKwAdgAHKYWQBORnAXS6AAM9KMzN0AF83B4vD4JhgAKpEP5ETQHNJEEKQLLROKGAKyIIqsKRDXxRIpbVkXWq9U5BI1eoqbS88zK1UHGqQOq+SbTV2QVrtUktNqdbq9frKADC-1JpDQkEqzH4AHNIGiIj4AERoPIgqlpyCIRiCdAicSODNpwxpkHlyBpihp6rQdyAnwHHZsFSME6IeNEBMAQWLYk0NVN5tQccT4BmJqdqAABgASJFFEqQAASnC4wryS5XrClwrnNscBTyra+Ha7Pf7g80G+4lnyBXP7c73cTA9EQ6llgbPscKjmD0fRgMoABiLCCGI6wggAVvAFCIIYxBMMwVCoF8Ox5hwkCpmIqDUMwJK8Fw8A8MIPiYNghEVMQiC2NQbaoBRyiyDRzxkegqBopUqAbLh8D4XwAI4SwpGsGIjChO8UkYORFDoRhHD4OsQgCIwcEIfRyiocJBJEFQhi6Wg6maYhkAUFRnEabBhg2XkmbZhQMmhHJkAgj4NzsXRnFoMgyjaGWFZVhWdYNgM0gIj45QAI6hAs8AANKCcgAAiiLUAwkGhMgaAJvAYrNkMcUJcl+HpTQn7Dm6ADycH6DUL7IB2sXxdCOrpLG769tabr2DgyBoiQAC0XBPGgIJ4MN7RmsNQ0+FIzbIBQ8a0MNFRDYgwAgiZw1LVOySQHVsGzjB8GIceNX4J8mjHYYACiZqiIhmh4fxd2QE1LXwCVNz2lYMwAGTem6rUJVw1VulDbpIiD0OOIlwmQI93aEogr2Ce99WfUx32-fA-2-q0ABy-zE65GATXgkPw-DYM3GVaUZVVx3aIl5han4srypoiWGF9jD0-AliWHD0M2GLkCirTotuq0x3AaGgwQawJnQTZWnIUQqHodhWFfD4eEEURHQkb50JUZA3kkLYMQsBEqAfF8yikTQGDQe0lSccgYgkGgZCgtBOWJlbJR-DwAAUc55HOACUXHoJApFotdQTMHkkjKDIcgKEogxFRBBYpEi6C1K0zggmXkAlxQVemIYXCtAALFLUvKEVfaHULjMVdQmiFxWaBpjYdgOEiaDl6CVc13XDfN630swEVABCXc-W1SUpb3-eMIwwXD7Y-Xj1XFetDPrT10n8-Cm3+cSpAy9hmv+M9xlO97zWTkH6P1doCfoJnwshfOekAW430Xnme+fZH7Pw3q-Gg79B65gAD6fxzCPI+E9jAAOrkAlwICwG3xAO4NiLA6BFW7lvN+Kh+anQnL2acxU4FUMqiISGNDGptkvN1G8X5FSiwluAeg4RELyjzBURAlDyoZQjvHWGboioqAkcdLSh0S5-3LrYSugDa4X1sI3UBC9gIKKgbA0qLC+5KMqCoxCSCMFjywRXaeFlZ5X0MeA3oJjvCQGgdwKxiBdBqJvh1PUPj3R+lXK0NMjAIhph6G6akYw6BoGXn4iRuhWi+K4P4wJKRomxPiZA7xWT-FGDUegC+rcQmqk7vUCJrAokxLiTURJSwUlpMqEYTJqTskSLKXkppxiik+D7LAXevTKi5NwY4qpZpOq1JrE0-89TCmtOSWMxgEyAmZI2VsqZ+Tmk1BXmYhmFipjKLMkhT+39MH-3cjo1xBjCGiiOffZePSclBNOqvOpQYGmLIKS0-4SwQQfPSa0d5HSAmHQOYUleYLOnlJmcEuZoSfmBlJP+WFQKknuQRYgLpD98X9IBc0rxPhIVbNMOUkEZ9wHfPCX8rFgycUgvxaYCF7KYUsted45euzPnF3ubgp5C8GX1AOcsv5qzgV0BBAK8FD8FWTO5YC8lSrxmlJpTovRbjnnitJVK0kMrcXys1X0iFyqCWqsOeqmBKQpFMwQf4mxVzKzoMPg4u5tLcEUGAXqhevKKVhnxVMpEKKxwPyfr8zFjS1UWVle5CgobOVQv2Syu1IaoUkvUeXWZkaYExsiaSk1ILk3ZohVmrZJLsWZq5UKn14b82dULRi4ttaE2mvLVSyt9aS1BqjfiluDbAGivpdU1Arb6nMvjWspNQ7e1QuHf2gdj8rVhuFTXXVY7m1oujYa300rWVyooOuyt66bVwreWGK1OaKnGC0Tqlw+jr67tVK2yVh7jXHqTbe895rEUDMBQO6BT8HXr3MdI51FzzpuqHpAVB7q6z2N-pPTdeDL47ulsMnxj9Q1fInbh-d0641ks7W0kE3acmpr2ZekDeHs1IrzRG+ZU6mWkdLckyjxLulVq1UBsjHcGNUu1dXcdqKalsdjf2hJiaJpUYkRyojfaO1Cb4xI5dJdG0BvE5G0DjLpMdrnfJhdyml10fVaB-F9ImMPvQ1h06+mi3-KM3J7jUL6S8esxZnDVmoUADZRNbufTpt9qAnNtpcxm8jXGFOVH815gLdH6M3oA9CoVjjH2+u3a+ljoSIufsi5x9AlGz1EYvQJnooogA
 *
 * assumed to be in the public domain
 */

/**
 * Gets all elements except for head in an array
 * @example
 * Tail<[1, 2, 3]>; // [2, 3]
 */
type Tail<T extends unknown[]> = T extends [unknown, ...infer Rest]
    ? Rest
    : never;

/**
 * Returns Tail<T> if first element of T matches P. Somehow resolves issues with
 * union types, but unsure how; @see {@link https://stackoverflow.com/a/57837897/1105281}
 */
type TailUnion<P, T extends unknown[]> = T extends unknown[]
    ? T[0] extends P
        ? Tail<T>
        : never
    : never;

/**
 * Converts a string like "a.b.c" to an array ["a", "b", "c"]
 */
type PathToStringArray<
    T extends string
> = T extends `${infer Head}.${infer Tail}`
    ? [...PathToStringArray<Head>, ...PathToStringArray<Tail>]
    : [T];

/**
 * For any object, enforces that the keys provided are all present; paths are
 * expressed as lists of keys in the order you would access them on an object;
 * for instance, for an object called obj, obj.a.b.c would be represented as
 * ["a", "b", "c"]
 *
 * @see RequireKeysDeep for usage
 */
type RequireKeysDeepArr<
    Obj,
    PathsToRequire extends string[]
> = Obj extends object
    ? Omit<Obj, Extract<keyof Obj, PathsToRequire[0]>> &
        Required<
            {
                [K in Extract<keyof Obj, PathsToRequire[0]>]: NonNullable<
                    RequireKeysDeepArr<Obj[K], TailUnion<K, PathsToRequire>>
                >;
            }
        >
    : Obj;

/**
 * For any object, enforces that the keys provided are all present; works with
 * deeply nested syntax, by using period (`.`) as a delimiter.
 *
 * @example
 * type Foo = { a?: 2, b?: { c?: 3, d: 4 } }
 * type A = RequireKeysDeep<Foo, "a">; // {a: 2, b?: { c?: 3, d: 4 } }
 * type B = RequireKeysDeep<Foo, "b">; // {a?: 2, b: { c?: 3, d: 4 } }
 * type BC = RequireKeysDeep<Foo, "b.c">; // {a?: 2, b: { c: 3, d: 4 } }
 * type ABC = RequireKeysDeep<Foo, "a" | "b.c">; // {a: 2, b: { c: 3, d: 4 } }
 */
export type RequireKeysDeep<T, P extends string> = RequireKeysDeepArr<
    T,
    PathToStringArray<P>
>;