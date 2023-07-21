# `right`

> Right substring every item in a list

## Description

Takes a list from STDIN and returns a right substring of that same list.

One parameter is required and that is the number of characters to return. If
the parameter is a negative then `right` counts from the left.

## Usage

    `<stdin>` -> right int -> `<stdout>`

## Examples

Count from the right

    » ja: [Monday..Wednesday] -> right 4
    [
        "nday",
        "sday",
        "sday"
    ]

Count from the left

    » ja: [Monday..Wednesday] -> left -3
    [
        "day",
        "sday",
        "nesday"
    ]

## Detail

Supported data types can queried via `runtime`

    runtime: --marshallers
    runtime: --unmarshallers

## Synonyms

- `right`
- `list.right`

## See Also

- [`a` (mkarray)](./a.md):
  A sophisticated yet simple way to build an array or list
- [`count`](./count.md):
  Count items in a map, list or array
- [`ja` (mkarray)](./ja.md):
  A sophisticated yet simply way to build a JSON array
- [`lang.MarshalData()` (system API)](/apis/lang.MarshalData.md):
  Converts structured memory into a Murex data-type (eg for stdio)
- [`lang.UnmarshalData()` (system API)](/apis/lang.UnmarshalData.md):
  Converts a Murex data-type into structured memory
- [`prefix`](./prefix.md):
  Prefix a string to every item in a list
- [`right`](./right.md):
  Right substring every item in a list
- [`runtime`](./runtime.md):
  Returns runtime information on the internal state of Murex
- [`suffix`](./suffix.md):
  Prefix a string to every item in a list
