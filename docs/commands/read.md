# `read`

> `read` a line of input from the user and store as a variable

## Description

A readline function to allow a line of data inputed from the terminal.

## Usage

Classic usage:

    read: "prompt" var_name

    `<stdin>` -> read: var_name

Script usage:

    read: [ --prompt "prompt"         ]
          [ --variable var_name       ]
          [ --default "default value" ]
          [ --datatype data-type      ]
          [ --autocomplete { json }   ]
          [ --mask character          ]

## Examples

**Classic usage:**

    read: "What is your name? " name
    out: "Hello $name"

    out: What is your name? -> read: name
    out: "Hello $name"

**Script usage:**

    read: --prompt "Are you sure? [Y/n]" \
          --variable yn \
          --default Y

**Secrets:**

    read: --prompt "Password: " --variable pw --mask *

## Flags

- `--autocomplete`
  Autocompletion suggestions. Can be either a JSON array or a JSON object
- `--datatype`
  Murex data-type for the read data (default: str)
- `--default`
  If a zero length string is returned but neither `ctrl`+`c` nor `ctrl`+`d` were pressed, then the default value defined here will be returned
- `--mask`
  Optional password mask, for reading secrets
- `--prompt`
  User notification to display
- `--variable`
  Variable name to store the read data (default: read)

## Detail

### Classic Usage

If `read` is called as a method then the prompt string is taken from STDIN.
Otherwise the prompt string will be the first parameter. However if no prompt
string is given then `read` will not write a prompt.

The last parameter will be the variable name to store the string read by `read`.
This variable cannot be prefixed by dollar, `$`, otherwise the shell will write
the output of that variable as the last parameter rather than the name of the
variable.

The data type the `read` line will be stored as is `str` (string). If you
require this to be different then please use `tread` (typed read) or call `read`
with the `--datatype` flag as per the **script usage**.

## See Also

- [`(` (brace quote)](./brace-quote.md):
  Write a string to the STDOUT without new line
- [`>>` (append file)](./greater-than-greater-than.md):
  Writes STDIN to disk - appending contents if file already exists
- [`>` (truncate file)](./greater-than.md):
  Writes STDIN to disk - overwriting contents if file already exists
- [`cast`](./cast.md):
  Alters the data type of the previous function without altering it's output
- [`err`](./err.md):
  Print a line to the STDERR
- [`out`](./out.md):
  Print a string to the STDOUT with a trailing new line character
- [`tout`](./tout.md):
  Print a string to the STDOUT and set it's data-type
- [`tread`](./tread.md):
  `read` a line of input from the user and store as a user defined _typed_ variable (deprecated)
