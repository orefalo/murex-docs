# `return`

> Exits current function scope

## Description

`return` will terminate execution of a block at the scope level (eg `function`,
`private`, etc)

Conceptually it is the same as `break` except it doesn't require the scope name
as a parameter and you can specify the exit number rather than defaulting to 0.

## Usage

    return [ exit-number ]

## Examples

**Setting an exit number:**

    function example {
        out foo
        return 13
        out bar
    }
    example
    exitnum

Running the above code would output:

    foo
    13

**Returning withing an exit number:**

If we were to run the same code as above but with `return` written without any
parameters (ie instead of `return 13` it would be just `return`), then you
would see the following output:

    foo
    0

## Detail

Any process that has been initialised within a `return`ed scope will have their
exit number updated to the value specified in `return` (or `0` if no parameter
was passed).

## See Also

- [`break`](./break.md):
  Terminate execution of a block within your processes scope
- [`continue`](./continue.md):
  Terminate process of a block within a caller function
- [`exit`](./exit.md):
  Exit murex
- [`exitnum`](./exitnum.md):
  Output the exit number of the previous process
- [`function`](./function.md):
  Define a function block
- [`out`](./out.md):
  Print a string to the STDOUT with a trailing new line character
- [`private`](./private.md):
  Define a private function block
