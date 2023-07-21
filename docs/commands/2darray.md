# `2darray`

> Create a 2D JSON array from multiple input sources

## Description

`2darray` merges multiple input sources to create a two dimensional array in JSON

## Usage

    2darray: { code-block } { code-block } -> `<stdout>`

## Examples

    » ps: -fe -> head: -n 10 -> set: ps
    » 2darray { $ps[UID] } { $ps[PID] } { $ps[TTY] } { $ps[TIME] }
    [
        [
            "",
            "",
            "",
            ""
        ],
        [
            "UID",
            "PID",
            "TTY",
            "TIME"
        ],
        [
            "root",
            "1",
            "?",
            "00:00:02"
        ],
        [
            "root",
            "2",
            "?",
            "00:00:00"
        ],
        [
            "root",
            "3",
            "?",
            "00:00:00"
        ],
        [
            "root",
            "4",
            "?",
            "00:00:00"
        ],
        [
            "root",
            "6",
            "?",
            "00:00:00"
        ],
        [
            "root",
            "8",
            "?",
            "00:00:00"
        ],
        [
            "root",
            "9",
            "?",
            "00:00:03"
        ],
        [
            "root",
            "10",
            "?",
            "00:00:19"
        ],
        [
            "root",
            "11",
            "?",
            "00:00:01"
        ]
    ]

## Detail

`2darray` can have as many or as few code blocks as you wish.

## See Also

- [`[` (index)](./index.md):
  Outputs an element from an array, map or table
- [`[` (range) ](./range.md):
  Outputs a ranged subset of data from STDIN
- [`a` (mkarray)](./a.md):
  A sophisticated yet simple way to build an array or list
- [`append`](./append.md):
  Add data to the end of an array
- [`count`](./count.md):
  Count items in a map, list or array
- [`ja` (mkarray)](./ja.md):
  A sophisticated yet simply way to build a JSON array
- [`json` ](../types/json.md):
  JavaScript Object Notation (JSON)
- [`jsplit` ](./jsplit.md):
  Splits STDIN into a JSON array based on a regex parameter
- [`map` ](./map.md):
  Creates a map from two data sources
- [`msort` ](./msort.md):
  Sorts an array - data type agnostic
- [`mtac`](./mtac.md):
  Reverse the order of an array
- [`prepend` ](./prepend.md):
  Add data to the start of an array
