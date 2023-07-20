# `[[` (element) - Command Reference

> Outputs an element from a nested structure

## Description

Outputs an element from an array, map or table. Unlike **index** (`[`),
**element** takes a path parameter which means it can work inside nested
structures without pipelining multiple commands together. However this
comes with the drawback that you can only return one element.

**Element** (`[[`) also doesn't support the bang prefix (unlike) **index**.

Please note that indexes in Murex are counted from zero.

## Usage

    `<stdin>` -> [[ element ]] -> `<stdout>`

    $variable[[ element ]] -> `<stdout>`

## Examples

Return the 2nd element in an array

    » ja [0..9] -> [[ /1 ]]
    [
        "1",
    ]

Return the data-type and description of **config shell syntax-highlighting**

    » config -> [[ /shell/syntax-highlighting/Data-Type ]]
    bool

## Detail

### Element counts from zero

Indexes in Murex behave like any other computer array in that all arrays
start from zero (`0`).

### Alternative path separators

**Element** uses the first character in the path as the separator. So the
following are all valid parameters:

    » config -> [[ ,shell,syntax-highlighting,Data-Type ]]
    bool

    » config -> [[ >shell>syntax-highlighting>Data-Type ]]
    bool

    » config -> [[ \|shell\|syntax-highlighting\|Data-Type ]]
    bool

    » config -> [[ >shell>syntax-highlighting>Data-Type ]]
    bool

However there are a few of caveats:

1.  Currently **element** does not support unicode separators. All separators
    must be 1 byte characters. This limitation is highlighted as a bug, albeit
    a low priority one. If this limitation does directly affect you then raise
    an issue on GitHub to get the priority bumped up.

2.  Any shell tokens (eg pipe `|`, `;`, `}`, etc) will need to be escaped. For
    readability reasons it is recommended not to use such characters even
    though it is technically possible to.

         # Would fail because the semi-colon is an unescaped / unquoted shell token
         config -> [[ ;shell-syntax-highlighting;Data-Type ]]

3.  Please also make sure you don't use a character that is also used inside
    key names because keys _cannot_ be escaped. For example both of the
    following would fail:

         # Would fail because 'syntax-highlighting' and 'Data-Type' both also contain
         # the separator character
         config -> [[ -shell-syntax-highlighting-Data-Type ]]

         # Would fail because you cannot escape key names (escaping happens at the
         # shell parser level rather than command parameter level)
         config -> [[ -shell-syntax\-highlighting-Data\-Type ]]

### Quoting parameters

In Murex, everything is a function. Thus even `[[` is a function name and
the closing `]]` is actually a last parameter. This means the recommended way
to quote **element** parameters is to quote specific key names or the entire
path:

    » config -> [[ /shell/"syntax-highlighting"/Data-Type ]]
    bool

    » config -> [[ "|shell|syntax-highlighting|Data-Type" ]]
    bool

## Synonyms

- `[[`
- `element`

## See Also

- [`[` (index)](../commands/index.md):
  Outputs an element from an array, map or table
- [`[` (range) ](../commands/range.md):
  Outputs a ranged subset of data from STDIN
- [`a` (mkarray)](../commands/a.md):
  A sophisticated yet simple way to build an array or list
- [`config`](../commands/config.md):
  Query or define Murex runtime settings
- [`count`](../commands/count.md):
  Count items in a map, list or array
- [`ja` (mkarray)](../commands/ja.md):
  A sophisticated yet simply way to build a JSON array
- [`mtac`](../commands/mtac.md):
  Reverse the order of an array
