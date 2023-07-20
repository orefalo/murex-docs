# `history` - Command Reference

> Outputs murex's command history

## Description

Outputs _mutex_'s command history.

## Usage

    history -> <stdout>

## Examples

    » history
    ...
    {
        "Index": 16782,
        "DateTime": "2019-01-19T22:43:21.124273664Z",
        "Block": "tout: json ([\"a\", \"b\", \"c\"]) -\u003e len"
    },
    {
        "Index": 16783,
        "DateTime": "2019-01-19T22:50:42.114986768Z",
        "Block": "clear"
    },
    {
        "Index": 16784,
        "DateTime": "2019-01-19T22:51:39.82077789Z",
        "Block": "map { tout: json ([\"key 1\", \"key 2\", \"key 3\"]) }"
    },
    ...

## Detail

The history file is typically located on disk in a file called `~/.murex.history`.

## See Also

* [`config`](../commands/config.md):
  Query or define Murex runtime settings
* [`runtime`](../commands/runtime.md):
  Returns runtime information on the internal state of Murex