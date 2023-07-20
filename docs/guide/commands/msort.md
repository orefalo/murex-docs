# `msort` - Command Reference

> Sorts an array - data type agnostic

## Description

This builtin takes input from stdin, sorts it and the outputs it to stdout.

The code behind `msort` is significantly more lightweight than UNIX sort.
It doesn't work with numeric types (eg sorting floating point numbers),
reversed order nor multi-column data. It is specifically designed to work
with lists of data. For example arrays in data formats like JSON (`json`),
YAML (`yaml`) or S-Expressions (`sexp`); or lists of strings (`str`). The
intention is to cover use cases not already covered by UNIX sort while also
providing something rudimentary for Murex scripts to function on Windows
without having to write lots of ugly platform-specific code. This is also
the reason this builtin is called `msort` rather than conflicting with the
existing UNIX name, `sort`.

## Usage

    `<stdin>` -> msort -> `<stdout>`

## Examples

    » tout: json (["c", "b", "a"]) -> msort
    [
        "a",
        "b",
        "c"
    ]

Since `msort` does not support reversed order, you will need to pipe the
output of `msort` into another builtin:

    » tout: json (["c", "b", "a"]) -> msort -> mtac
    [
        "c",
        "b",
        "a"
    ]

## Synonyms

- `msort`
- `list.sort`

## See Also

- [`[[` (element)](../commands/element.md):
  Outputs an element from a nested structure
- [`[` (index)](../commands/index.md):
  Outputs an element from an array, map or table
- [`[` (range) ](../commands/range.md):
  Outputs a ranged subset of data from STDIN
- [`a` (mkarray)](../commands/a.md):
  A sophisticated yet simple way to build an array or list
- [`alter`](../commands/alter.md):
  Change a value within a structured data-type and pass that change along the pipeline without altering the original source input
- [`append`](../commands/append.md):
  Add data to the end of an array
- [`count`](../commands/count.md):
  Count items in a map, list or array
- [`ja` (mkarray)](../commands/ja.md):
  A sophisticated yet simply way to build a JSON array
- [`jsplit` ](../commands/jsplit.md):
  Splits STDIN into a JSON array based on a regex parameter
- [`mtac`](../commands/mtac.md):
  Reverse the order of an array
- [`prepend` ](../commands/prepend.md):
  Add data to the start of an array
