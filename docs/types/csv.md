# `csv`

> CSV files (and other character delimited tables)

## Description

This data type can be used for not only CSV files but also TSV (tab separated)
or any other exotic characters used as a delimiter.

## Detail

The CSV parser is configurable via `config` (see link below for docs on how to
use `config`)

    » config: -> [csv]
    {
        "comment": {
            "Data-Type": "str",
            "Default": "#",
            "Description": "The prefix token for comments in a CSV table.",
            "Dynamic": false,
            "Global": false,
            "Value": "#"
        },
        "separator": {
            "Data-Type": "str",
            "Default": ",",
            "Description": "The delimiter for records in a CSV file.",
            "Dynamic": false,
            "Global": false,
            "Value": ","
        }
    }

## Default Associations

- **Extension**: `csv`
- **MIME**: `application/csv`
- **MIME**: `application/x-csv`
- **MIME**: `text/csv`
- **MIME**: `text/x-csv`

## Supported Hooks

- `Marshal()`
  Supported
- `ReadArray()`
  Treats each new line as a new array element
- `ReadArrayWithType()`
  Treats each new line as a new array element, each element is mini `csv` file
- `ReadIndex()`
  Indexes treated as table coordinates
- `ReadMap()`
  Works against tables such as the output from `ps -fe`
- `ReadNotIndex()`
  Indexes treated as table coordinates
- `Unmarshal()`
  Supported
- `WriteArray()`
  Writes a new line per array element

## See Also

- [`*` (generic) ](/types/generic.md):
  generic (primitive)
- [`Marshal()` (type)](/apis/Marshal.md):
  Converts structured memory into a structured file format (eg for stdio)
- [`Unmarshal()` (type)](/apis/Unmarshal.md):
  Converts a structured file format into structured memory
- [`[[` (element)](/commands/element.md):
  Outputs an element from a nested structure
- [`[` (index)](/commands/index2.md):
  Outputs an element from an array, map or table
- [`cast`](/commands/cast.md):
  Alters the data type of the previous function without altering it's output
- [`config`](/commands/config.md):
  Query or define Murex runtime settings
- [`format`](/commands/format.md):
  Reformat one data-type into another data-type
- [`int` ](/types/int.md):
  Whole number (primitive)
- [`jsonl` ](/types/jsonl.md):
  JSON Lines
- [`select` ](/optional/select.md):
  Inlining SQL into shell pipelines
- [`str` (string) ](/types/str.md):
  string (primitive)
