# `escape` - Command Reference

> Escape or unescape input

## Description

`escape` takes input from either STDIN or the parameters and returns the same
data, escaped.

`!escape` does the same process in reverse, where it takes escaped data and
returns its unescaped counterpart.

## Usage

Escape

    `<stdin>` -> escape -> `<stdout>`

    escape string to escape -> `<stdout>`

Unescape

    `<stdin>` -> !escape -> `<stdout>`

    !escape string to unescape -> `<stdout>`

## Examples

Escape

    » out (multi
    » line
    » string) -> escape
    "multi\nline\nstring\n"

## Synonyms

- `escape`
- `!escape`

## See Also

- [`esccli`](../commands/esccli.md):
  Escapes an array so output is valid shell code
- [`eschtml`](../commands/eschtml.md):
  Encode or decodes text for HTML
- [`escurl`](../commands/escurl.md):
  Encode or decodes text for the URL
