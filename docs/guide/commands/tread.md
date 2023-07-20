# `tread` - Command Reference

> `read` a line of input from the user and store as a user defined *typed* variable (deprecated)

## Description

A readline function to allow a line of data inputted from the terminal and then
store that as a typed variable.

**This builtin is now deprecated. Please use `read --datatype ...` instead**

## Usage

    tread: data-type "prompt" var_name
    
    <stdin> -> tread: data-type var_name

## Examples

    tread: qs "Please paste a URL: " url
    out: "The query string values included were:"
    $url -> format json
    
    out: Please paste a URL: -> tread: qs url
    out: "The query string values included were:"
    $url -> format json

## Detail

If `tread` is called as a method then the prompt string is taken from STDIN.
Otherwise the prompt string will be the first parameter. However if no prompt
string is given then `tread` will not write a prompt.

The last parameter will be the variable name to store the string read by `tread`.
This variable cannot be prefixed by dollar, `$`, otherwise the shell will write
the output of that variable as the last parameter rather than the name of the
variable.

## See Also

* [`(` (brace quote)](../commands/brace-quote.md):
  Write a string to the STDOUT without new line
* [`cast`](../commands/cast.md):
  Alters the data type of the previous function without altering it's output
* [`err`](../commands/err.md):
  Print a line to the STDERR
* [`format`](../commands/format.md):
  Reformat one data-type into another data-type
* [`out`](../commands/out.md):
  Print a string to the STDOUT with a trailing new line character
* [`pretty`](../commands/pretty.md):
  Prettifies JSON to make it human readable
* [`read`](../commands/read.md):
  `read` a line of input from the user and store as a variable
* [`tout`](../commands/tout.md):
  Print a string to the STDOUT and set it's data-type