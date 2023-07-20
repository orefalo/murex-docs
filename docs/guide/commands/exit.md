# `exit` - Command Reference

> Exit murex

## Description

Exit's Murex with either a exit number of 0 (by default if no parameters
supplied) or a custom value specified by the first parameter.

`exit` is not scope aware; if it is included in a function then the whole
shell will still exist and not just that function.

## Usage

    exit
    exit number

## Examples

    » exit
    
    » exit 42

## See Also

* [`break`](../commands/break.md):
  Terminate execution of a block within your processes scope
* [`die`](../commands/die.md):
  Terminate murex with an exit number of 1
* [`null`](../commands/devnull.md):
  null function. Similar to /dev/null