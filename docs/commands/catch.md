# `catch`

> Handles the exception code raised by `try` or `trypipe`

## Description

`catch` is designed to be used in conjunction with `try` and `trypipe` as it
handles the exceptions raised by the aforementioned.

## Usage

    [ try | trypipe ] { code-block } -> `<stdout>`

    catch { code-block } -> `<stdout>`

    !catch { code-block } -> `<stdout>`

## Examples

    try {
        out: "Hello, World!" -> grep: "non-existent string"
        out: "This command will be ignored"
    }

    catch {
        out: "An error was caught"
    }

    !catch {
        out: "No errors were raised"
    }

## Detail

`catch` can be used with a bang prefix to check for a lack of errors.

`catch` forwards on the STDIN and exit number of the calling function.

## Synonyms

- `catch`
- `!catch`

## See Also

- [Schedulers](../user-guide/schedulers.md):
  Overview of the different schedulers (or 'run modes') in Murex
- [`if`](./if.md):
  Conditional statement to execute different blocks of code depending on the result of the condition
- [`runmode`](./runmode.md):
  Alter the scheduler's behaviour at higher scoping level
- [`switch`](./switch.md):
  Blocks of cascading conditionals
- [`try`](./try.md):
  Handles errors inside a block of code
- [`trypipe`](./trypipe.md):
  Checks state of each function in a pipeline and exits block on error
