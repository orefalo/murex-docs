# `datetime`

> A date and/or time conversion tool (like `printf` but for date and time values)

## Description

While `date` is a standard UNIX tool, it's syntax can vary from Linux to macOS.
`datetype` aims to be a cross platform alternative while also offering a range
of saner syntax options too.

The syntax for `datetime` is modelled from date and time libraries from various
popular programming languages.

## Usage

Pass date/time value as a parameter:

    datetime --in "format" --out "format" --value "date/time" -> `<stdout>`

Read date/time value from STDIN:

    `<stdin>` -> datetime --in "format" --out "format" -> `<stdout>`

## Examples

Output current date and time:

    » datetime: --in "{now}" --out "{go}01/02/06 15:04:05"
    12/08/21 22:32:30

Convert STDIN into epoch:

    » echo "12/08/21 22:32:30" -> datetime: --in "{go}01/02/06 15:04:05" --out "{unix}"
    1639002750

Convert value passed as a command line argument:

    » datetime: --value "12/08/21 22:32:30" --in "{go}01/02/06 15:04:05" --out "{unix}"
    1639002750

## Flags

- `--in`
  Defines the date/time string is formatted in `--value
- `--out`
  Defined how the date/time string should be formatted in STDOUT
- `--value`
  Date/time value to convert (if omitted and the input format is not set to `{now}` then date/time is read from STDIN)

## Detail

### Date Time Format Code Parsers

`datetime` supports a number of parsers, defined in curly braces.

#### `{py}`: Python strftime / strptime format codes

Murex doesn't support all the language and locale features of Python, instead
defaulting to English. However enough support is there to cover most use cases.

Documentation regarding these format codes can be found on [docs.python.org](https://docs.python.org/3/library/datetime.html#strftime-and-strptime-behavior).

#### `{go}`: Go (lang) time.Time format codes

Murex has full support for Go's date/time parsing.

Documentation regarding these format codes can be found on [pkg.go.dev](https://pkg.go.dev/time#pkg-constants).

#### `{now}`: Current date and time

This is only supported as an input. When it is used `--value` flag is not
required.

## See Also

- [`[` (range) ](./range.md):
  Outputs a ranged subset of data from STDIN
- [`a` (mkarray)](./a.md):
  A sophisticated yet simple way to build an array or list
