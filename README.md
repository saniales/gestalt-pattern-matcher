# [gestalt-pattern-matcher](https://www.npmjs.com/package/gestalt-pattern-matcher) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/saniales/gestalt-pattern-matcher/blob/master/LICENSE) [![npm version](https://img.shields.io/npm/v/gestalt-pattern-matcher.svg?style=flat-square)](https://www.npmjs.com/package/gestalt-pattern-matcher) [![downloads](https://img.shields.io/npm/dt/gestalt-pattern-matcher?style=flat-square)](https://www.npmjs.com/package/gestalt-pattern-matcher)

This is an implementation of the [***Ratcliff/Obershelp Gestalt pattern-matching algorithm***](https://en.wikipedia.org/wiki/Gestalt_Pattern_Matching) in NodeJS.

Its purpose is to compare two strings and determine approximately how different they are: a score of 0 indicates that they share no characters at all, while a score of 1 indicates that the two strings are identical.

This implementation is suitable for short strings (on the order of 1000 characters long). I haven't thoroughly analyzed complexity, but it is roughly `O(n^2)` average case, `O(n^3)` in the worst case, and `O(n)` in the best case.

# Install

Just install it with `npm` or `yarn`.

``` bash
npm install gestalt-pattern-matcher
# or
yarn add gestalt-pattern-matcher
```

# Usage

``` typescript
// ES7
import gestaltSimilarity from "gestalt-pattern-matcher";

const firstString = "Test 1";
const secondString = "Test 2";

console.log(gestaltSimilarity(firstString, secondString));

// commonJS
const gestaltSimilarity = require("gestalt-pattern-matcher").default;

const firstString = "Test 1";
const secondString = "Test 2";

console.log(gestaltSimilarity(firstString, secondString));
```

# Notice

This npm module is based on [***GitSage gestalt-pattern-matcher repository***](https://github.com/GitSage/gestalt-pattern-matcher), whom we personally thank the author for the contributions.