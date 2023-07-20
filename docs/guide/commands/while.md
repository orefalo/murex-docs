# `while` - Command Reference

> Loop until condition false

## Description

`while` loops until loops until **condition** is false.

Normally the **conditional** and executed code block are 2 separate parameters
however you can call `while` with just 1 parameter where the code block acts
as both the conditional and the code to be ran.

## Usage

Until true

    while { condition } { code-block } -> `<stdout>`

    while { code-block } -> `<stdout>`

Until false

    !while { condition } { code-block } -> `<stdout>`

``
!while { code-block } -> <std

## Examples

`while` **$i** is less then **5**

    » let i=0; while { =i<5 } { let i=i+1; out $i }
    1
    2
    3
    4
    5

    » let i=0; while { let i=i+1; = i<5; out }
    true
    true
    true
    true
    false

`while` **$i** is _NOT_ greater than or equal to **5**

    » let i=0; !while { =i>=5 } { let i=i+1; out $i }
    1
    2
    3
    4
    5

    » let i=0; while { let i=i+1; = i>=5; out }
    true
    true
    true
    true
    false

## Detail

### Meta values

Meta values are a JSON object stored as the variable `$.`. The meta variable
will get overwritten by any other block which invokes meta values. So if you
wish to persist meta values across blocks you will need to reassign `$.`, eg

    %[1..3] -> foreach {
        meta_parent = $.
        %[7..9] -> foreach {
            out "$(meta_parent.i): $.i"
        }
    }

The following meta values are defined:

- `i`: iteration number

## Synonyms

- `while`
- `!while`

## See Also

- [`err`](../commands/err.md):
  Print a line to the STDERR
- [`for`](../commands/for.md):
  A more familiar iteration loop to existing developers
- [`foreach`](../commands/foreach.md):
  Iterate through an array
- [`formap`](../commands/formap.md):
  Iterate through a map or other collection of data
- [`global`](../commands/global.md):
  Define a global variable and set it's value
- [`let`](../commands/let.md):
  Evaluate a mathematical function and assign to variable (deprecated)
- [`out`](../commands/out.md):
  Print a string to the STDOUT with a trailing new line character
- [`set`](../commands/set.md):
  Define a local variable and set it's value
