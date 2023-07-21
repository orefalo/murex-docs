# `sleep`  - Optional Command Reference

> Suspends the shell for a number of seconds

## Description

`sleep` is an optional builtin which suspends the shell for a defined number
of seconds.

## Usage

    sleep: integer

## Examples

    » sleep 5
    # murex sleeps for 5 seconds

## Detail

`sleep` is very simplistic - particularly when compared to its GNU coreutil
(for example) counterpart. If you want to use the `sleep` binary on Linux
or similar platforms then you will need to launch with the `exec` builtin:

    » exec: sleep 5

## See Also

* [`exec`](../commands/exec.md):
  Runs an executable
* [`source` ](../commands/source.md):
  Import Murex code from another file of code block
* [`time` ](../commands/time.md):
  Returns the execution run time of a command or block