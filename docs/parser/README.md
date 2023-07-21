---
title: Parser
icon: gear
index: true
category:
  - Guide
---

# Parser Reference

This section is a glossary of Murex tokens and parser behavior.

## Other Reference Material

### Language Guides

1. [Language Tour](/tour), which is an introduction into
   the Murex language.

2. [Rosetta Stone](/rosetta), which is a reference
   table comparing Bash syntax to Murex's.

3. [Builtins](/commands), for docs on the core builtins.

### Murex's Source Code

The parser is located Murex's source under the `lang/` path of the project
files.

## Pages

- [And (`&&`) Logical Operator](./logical-and.md):
  Continues next operation if previous operation passes
- [Append Pipe (`>>`) Token](./pipe-append.md):
  Redirects STDOUT to a file and append its contents
- [Array (`@`) Token](./array.md):
  Expand values as an array
- [Arrow Pipe (`->`) Token](./pipe-arrow.md):
  Pipes STDOUT from the left hand command to STDIN of the right hand command
- [Brace Quote (`%(`, `)`) Tokens](./brace-quote.md):
  Initiates or terminates a string (variables expanded)
- [Create array (`%[]`) constructor](./create-array.md):
  Quickly generate arrays
- [Create object (`%{}`) constructor](./create-object.md):
  Quickly generate objects and maps
- [Curly Brace (`{`, `}`) Tokens](./curly-brace.md):
  Initiates or terminates a code block
- [Double Quote (`"`) Token](./double-quote.md):
  Initiates or terminates a string (variables expanded)
- [Generic Pipe (`=>`) Token](./pipe-generic.md):
  Pipes a reformatted STDOUT stream from the left hand command to STDIN of the right hand command
- [Or (`||`) Logical Operator](./logical-or.md):
  Continues next operation only if previous operation fails
- [POSIX Pipe (`|`) Token](./pipe-posix.md):
  Pipes STDOUT from the left hand command to STDIN of the right hand command
- [STDERR Pipe (`?`) Token](./pipe-err.md):
  Pipes STDERR from the left hand command to STDIN of the right hand command
- [Single Quote (`'`) Token](./single-quote.md):
  Initiates or terminates a string (variables not expanded)
- [String (`$`) Token](./string.md):
  Expand values as a string
- [Tilde (`~`) Token](./tilde.md):
  Home directory path variable
