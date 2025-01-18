# JavaScript Loose Comparison Bug: NaN and -0

This repository demonstrates an uncommon bug related to JavaScript's loose comparison operator (`==`). Specifically, it highlights unexpected behavior when comparing `NaN` (Not a Number) and `-0` (negative zero).

## Bug Description

The code in `bug.js` uses a function `foo` to compare two numbers using loose comparison. However, this comparison yields incorrect results in certain edge cases:

* `NaN == NaN` evaluates to `false`, while strict equality (`===`) correctly returns `false`.
* `0 == -0` evaluates to `true`, reflecting their numerical equivalence.  This can be surprising to those unfamiliar with the nuances of floating-point representation.

## Solution

The `bugSolution.js` file provides a corrected approach. It uses strict equality (`===`) to ensure accurate comparisons, handling `NaN` and `-0` correctly.  Strict equality distinguishes between `0` and `-0`, preventing unexpected results.