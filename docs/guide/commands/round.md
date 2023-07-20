# `round`  - Command Reference

> Round a number by a user defined precision

## Description

`round` supports a few different levels of precision:

### Nearest decimal place

Syntax: `0.12345` (any numbers can be used)

If a decimal place is supplied then `round` will round your number to however
many decimal places you specify. It doesn't matter what digits you include in
your precision value as the only thing which is used to drive the result is the
position of the decimal point. Thus a precision value of `0.000` would perform
the same rounding as `9.999`.

Decimal places are always rounded to the nearest. `--down` and `--up` flags are
not supported.

### Nearest integer

Syntax: either `0` or `1` (either behaves the same)

This will round your value to the nearest whole number. For example `3.33`
would be rounded to `3`.

If `--down` flag is supplied then the remainder is dropped. For example `9.99`
would then be rounded to `9` instead of `10`.

If `--up` flag is is supplied then the the input value would always be rounded
up to the nearest whole number. For example `3.33` would be rounded to `4`
instead of `3`.

### Nearest Multiple

Syntax: `50` (any integer greater than `1)

This will round your input value to the nearest multiple of your precision.

Like with **nearest integer** (see above), `--down` and `--up` will specify to
round whether to always round down or up rather than returning the nearest
match in either direction.

## Usage

    round value precision -> <stdout>

## Examples

**Rounding to the nearest multiple of `20`:**

    » round 15 20
    20

## Flags

* `--down`
    Rounds down to the nearest multiple (not supported when precision is to decimal places)
* `--up`
    Rounds up to the nearest multiple (not supported when precision is to decimal places)
* `-d`
    shorthand for `--down
* `-u`
    shorthand for `--up

## See Also

* [`expr`](../commands/expr.md):
  Expressions: mathematical, string comparisons, logical operators