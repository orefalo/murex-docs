# `tabulate`

> Table transformation tools

## Description

`tabluate` is a swiss army knife for table transforming human readable tables
into machine readable data structure.

> Please note that this builtin is still in active development and the default
> behavior will continue to change and evolve. Any features marked with a flag
> (see below) will be stable, have numerous tests written against them, and
> thus safe to use.

## Usage

    `<stdin>` -> tabulate [ flags ] -> `<stdout>`

## Flags

- `--column-wraps`
  Boolean, used with --map or --key-value to merge trailing lines if the text wraps within the same column
- `--help`
  Boolean, displays a list of flags
- `--joiner`
  String, used with --map to concatenate any trailing records in a given field
- `--key-inc-hint`
  Boolean, used with --map to split any space or equal delimited hints/examples (eg parsing flags)
- `--key-value`
  Boolean, discard any records that don't appear key value pairs (auto-enabled when --map used)
- `--map`
  Boolean, return JSON map instead of table
- `--separator`
  'String, custom regex pattern for spliting fields (default: `(\t|\s[\s]+)+`)'
- `--split-comma`
  Boolean, split first field and duplicate the line if comma found in first field (eg parsing flags in help pages)
- `--split-space`
  Boolean, split first field and duplicate the line if white space found in first field (eg parsing flags in help pages)

## Detail

### Dynamic Autocompletion

Because `tabulate` is designed to parse human readable tables, it is used a lot
for dynamically turning command like program help output into JSON maps for
`autocomplete`'s **DynamicDesc** blocks:

    rsync --help -> @[^Options$..--help]re -> tabulate: --map --split-comma --column-wraps --key-inc-hint

## See Also

- [`[[` (element)](./element.md):
  Outputs an element from a nested structure
- [`[` (index)](./index.md):
  Outputs an element from an array, map or table
- [`autocomplete`](./autocomplete.md):
  Set definitions for tab-completion in the command line
- [`formap`](./formap.md):
  Iterate through a map or other collection of data
- [`format`](./format.md):
  Reformat one data-type into another data-type
