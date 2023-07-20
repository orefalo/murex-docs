# `get-type` - Command Reference

> Returns the data-type of a variable or pipe

## Description

`get-type` returns the Murex data-type of a variable or pipe without
reading the data from it.

## Usage

    get-type: \$variable -> <stdout>
    
    get-type: stdin -> <stdout>
    
    get-type: pipe -> <stdout>

## Examples

Get the data-type of a variable

    » set: json example={[1,2,3]}
    » get-type: \$example
    json
    
> Please note that you will need to escape the dollar sign. If you don't
> the value of the variable will be passed to `get-type` rather than the
> name.

Get the data-type of a functions STDIN

    » function: example { get-type stdin }
    » tout: json {[1,2,3]} -> example
    json
    
Get the data-type of a Murex named pipe

    » pipe: example
    » tout: <example> json {[1,2,3]}
    » get-type: example
    » !pipe: example
    json

## See Also

* [Reserved Variables](../user-guide/reserved-vars.md):
  Special variables reserved by Murex
* [Variable and Config Scoping](../user-guide/scoping.md):
  How scoping works within Murex
* [`debug`](../commands/debug.md):
  Debugging information
* [`function`](../commands/function.md):
  Define a function block
* [`pipe`](../commands/pipe.md):
  Manage Murex named pipes
* [`runtime`](../commands/runtime.md):
  Returns runtime information on the internal state of Murex
* [`set`](../commands/set.md):
  Define a local variable and set it's value
* [`tout`](../commands/tout.md):
  Print a string to the STDOUT and set it's data-type