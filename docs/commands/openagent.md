# `openagent`

> Creates a handler function for `open

## Description

`openagent` creates and destroys handler functions for writing data to the
terminal when accessed via `open` and STDOUT is a TTY.

## Usage

Display code block for an associated data-type:

    openagent get data-type

Define an `open` handler function:

    openagent set data-type { code-block }

Undefine an `open` handler:

    !openagent data-type

## Detail

### FileRef

It is possible to track which shell script or module installed what `open`
handler by checking `runtime --open-agents` and checking it's **FileRef**.

## Synonyms

- `openagent`
- `!openagent`

## See Also

- [FileRef](/user-guide/fileref.md):
  How to track what code was loaded and from where
- [Modules and Packages](/user-guide/modules.md):
  An introduction to Murex modules and packages
- [`fexec` ](./fexec.md):
  Execute a command or function, bypassing the usual order of precedence.
- [`open`](./open.md):
  Open a file with a preferred handler
- [`runtime`](./runtime.md):
  Returns runtime information on the internal state of Murex
