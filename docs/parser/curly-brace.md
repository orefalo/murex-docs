# Curly Brace (`{`, `}`) Tokens - Parser Reference

> Initiates or terminates a code block

## Description

Curly braces are used to denote the start and end of a code block. Like with
the single quotation marks (`'`), any code inside a curly brace is not parsed.
Also unlike any other quotation tokens, the curly brace is included as part
of the parsed string.

    » out: {example}
    {example}

Also like the brace quote (`(`, `)`), the curly brace character is only
recognized as a curly brace token if it is the start of a parameter.

Curly braces are also used for other fields besides code blocks. For example
inlining JSON.

## Detail

### Multiline Blocks

Curly braces can work over multiple lines

    » out: {foo
    » bar}
    {foo
    bar}

### Code Golfing

Curly braces can be used to terminate the parsing of the command name / start
the parsing of the first parameter however each new parameter would still need
to be separated by whitespace:

    # Valid
    if{true} {out: "Yipee"}

    # Invalid
    if{true}{out: "Yipee"}

### ANSI Constants

Some builtins (like `out`) also support infixing using the curly brace. eg

    out: "{GREEN}PASSED{RESET}"

This is a separate layer of parsing and happens at the parameter level for
specific builtins which opt to support ANSI constants. See the ANSI Constant
user guide (link below) for more information on supporting builtins and which
constants are available.

## See Also

- [ANSI Constants](/user-guide/ansi.md):
  Infixed constants that return ANSI escape sequences
- [Array (`@`) Token](/parser/array.md):
  Expand values as an array
- [Brace Quote (`%(`, `)`) Tokens](/parser/brace-quote.md):
  Initiates or terminates a string (variables expanded)
- [Code Block Parsing](/user-guide/code-block.md):
  Overview of how code blocks are parsed
- [Double Quote (`"`) Token](/parser/double-quote.md):
  Initiates or terminates a string (variables expanded)
- [Single Quote (`'`) Token](/parser/single-quote.md):
  Initiates or terminates a string (variables not expanded)
- [String (`$`) Token](/parser/string.md):
  Expand values as a string
- [Tilde (`~`) Token](/parser/tilde.md):
  Home directory path variable
- [`(` (brace quote)](/commands/brace-quote.md):
  Write a string to the STDOUT without new line
- [`err`](/commands/err.md):
  Print a line to the STDERR
- [`out`](/commands/out.md):
  Print a string to the STDOUT with a trailing new line character
- [`set`](/commands/set.md):
  Define a local variable and set it's value
- [`tout`](/commands/tout.md):
  Print a string to the STDOUT and set it's data-type
