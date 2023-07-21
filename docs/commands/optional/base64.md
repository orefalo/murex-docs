# `base64` - Optional Command Reference

> Encode or decode a base64 string

## Description

An optional builtin to encode or decode a base64 string.

## Usage

```
    <stdin> -> base64 -> <stdout>

    <stdin> -> !base64 -> <stdout>
```

## Examples

Encode base64 string

```
» out: "Hello, World!" -> base64
SGVsbG8sIFdvcmxkIQo=
```

Decode base64 string

```
» out: "SGVsbG8sIFdvcmxkIQo=" -> !base64
Hello, World!
```

## Detail

`base64` is very simplistic - particularly when compared to its GNU coreutil
(for example) counterpart. If you want to use the `base64` binary on Linux
or similar platforms then you will need to launch with the `exec` builtin:

    » out: "Hello, World!" -> exec: base64
    SGVsbG8sIFdvcmxkIQo=

    » out: "SGVsbG8sIFdvcmxkIQo=" -> exec: base64 -d
    Hello, World!

However for simple tasks this builtin will out perform external tools because
it doesn't require the OS fork processes.

## Synonyms

- `base64`
- `!base64`

## See Also

- [`!bz2` ](./bz2.md):
  Decompress a bz2 file
- [`escape`](../escape.md):
  Escape or unescape input
- [`esccli`](../esccli.md):
  Escapes an array so output is valid shell code
- [`eschtml`](../eschtml.md):
  Encode or decodes text for HTML
- [`escurl`](../escurl.md):
  Encode or decodes text for the URL
- [`gz` ](./gz.md):
  Compress or decompress a gzip file
