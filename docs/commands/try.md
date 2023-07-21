# `try`

> Handles errors inside a block of code

## Description

`try` forces a different execution behavior where a failed process at the end
of a pipeline will cause the block to terminate regardless of any functions that
might follow.

It's usage is similar to try blocks in other languages (eg Java) but a closer
functional example would be `set -e` in Bash.

To maintain concurrency within the pipeline, `try` will only check the last
function in any given pipeline (ie series of functions joined via `|`, `->`, or
similar operators). If you need the entire pipeline checked then use `trypipe`.

## Usage

```
try { code-block } -> <stdout>

<stdin> -> try { -> code-block } -> <stdout>
```

## Examples

```
try {
    out: "Hello, World!" -> grep: "non-existent string"
    out: "This command will be ignored"
}
```

## Detail

A failure is determined by:

- Any process that returns a non-zero exit number
- Any process that returns more output via STDERR than it does via STDOUT

You can see which run mode your functions are executing under via the `fid-list`
command.

## See Also

- [Schedulers](/user-guide/schedulers.md):
  Overview of the different schedulers (or 'run modes') in Murex
- [`catch`](./catch.md):
  Handles the exception code raised by `try` or `trypipe`
- [`fid-list`](./fid-list.md):
  Lists all running functions within the current Murex session
- [`if`](./if.md):
  Conditional statement to execute different blocks of code depending on the result of the condition
- [`runmode`](./runmode.md):
  Alter the scheduler's behaviour at higher scoping level
- [`switch`](./switch.md):
  Blocks of cascading conditionals
- [`trypipe`](./trypipe.md):
  Checks state of each function in a pipeline and exits block on error
