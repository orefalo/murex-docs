# Tilde (`~`) Token - Parser Reference

> Home directory path variable

## Description

The tilde token is used as a lazy reference to the users home directory.

## Examples

    » out: ~
    /home/bob

    » out: ~joe
    /home/joe

## Detail

Tilde can be expanded inside double quotes, brace quotes as well as used naked.
But it cannot be expanded inside single quotes.

    » out: ~
    /home/bob

    » out: '~'
    ~

    » out: "~"
    /home/bob

    » out: %(~)
    /home/bob

## See Also

- [Array (`@`) Token](/parser/array.md):
  Expand values as an array
- [Brace Quote (`%(`, `)`) Tokens](/parser/brace-quote.md):
  Initiates or terminates a string (variables expanded)
- [Double Quote (`"`) Token](/parser/double-quote.md):
  Initiates or terminates a string (variables expanded)
- [Single Quote (`'`) Token](/parser/single-quote.md):
  Initiates or terminates a string (variables not expanded)
- [String (`$`) Token](/parser/string.md):
  Expand values as a string
- [`(` (brace quote)](/commands/brace-quote.md):
  Write a string to the STDOUT without new line
- [`ja` (mkarray)](/commands/ja.md):
  A sophisticated yet simply way to build a JSON array
- [`out`](/commands/out.md):
  Print a string to the STDOUT with a trailing new line character
- [`set`](/commands/set.md):
  Define a local variable and set it's value
