# Arrow Pipe (`->`) Token

> Pipes STDOUT from the left hand command to STDIN of the right hand command

## Description

This token behaves much like pipe would in Bash or similar shells. It passes
STDOUT along the pipeline while merging STDERR stream with the parents STDERR
stream.

`->` differs from `|` in the interactive terminal where it produces different
autocompletion suggestion. It returns a list of "methods". That is, commands
that are known to support the output type of the previous command. `->` helps
with the discovery of commandline tools.

In shell scripts, `->` and `|` can be used interchangeably.

## Examples

    » out: Hello, world! -> regexp: s/world/Earth/
    Hello, Earth!

    » out: Hello, world!->regexp: s/world/Earth/
    Hello, Earth!

In following example the first command is writing to STDERR rather than STDOUT
so `Hello, world!` doesn't get pipelined and thus isn't affected by `regexp`:

    » err: Hello, world! -> regexp: s/world/Earth/
    Hello, world!

## See Also

- [Generic Pipe (`=>`) Token](/parser/pipe-generic.md):
  Pipes a reformatted STDOUT stream from the left hand command to STDIN of the right hand command
- [POSIX Pipe (`|`) Token](/parser/pipe-posix.md):
  Pipes STDOUT from the left hand command to STDIN of the right hand command
- [Pipeline](/user-guide/pipeline.md):
  Overview of what a "pipeline" is
- [STDERR Pipe (`?`) Token](/parser/pipe-err.md):
  Pipes STDERR from the left hand command to STDIN of the right hand command
- [`<>` / `read-named-pipe`](/commands/namedpipe.md):
  Reads from a Murex named pipe
- [`err`](/commands/err.md):
  Print a line to the STDERR
- [`out`](/commands/out.md):
  Print a string to the STDOUT with a trailing new line character
- [`regexp`](/commands/regexp.md):
  Regexp tools for arrays / lists of strings
