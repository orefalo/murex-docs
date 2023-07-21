# `test`

> Murex's test framework - define tests, run tests and debug shell scripts

## Description

`test` is used to define tests, run tests and debug Murex shell scripts.

## Usage

Define an inlined test

    test: define test-name { json-properties }

Define a state report

    test: state name { code block }

Define a unit test

    test: unit function|private|open|event test-name { json-properties }

Enable or disable boolean test states (more options available in `config`)

    test: config [ enable|!enable ] [ verbose|!verbose ] [ auto-report|!auto-report ]

Disable test mode

    !test

Execute a function with testing enabled

    test: run { code-block }

Execute unit test(s)

    test: run package/module/test-name|*

Write report

    test: report

## Examples

Inlined test

    function: hello-world {
        test: define example {
            "StdoutRegex": (^Hello World$)
        }

        out: <test_example> "Hello Earth"
    }

    test: run { hello-world }

Unit test

    test: unit function aliases {
        "PreBlock": ({
            alias ALIAS_UNIT_TEST=example param1 param2 param3
        }),
        "StdoutRegex": "([- _0-9a-zA-Z]+ => .*?\n)+",
        "StdoutType": "str",
        "PostBlock": ({
            !alias ALIAS_UNIT_TEST
        })
    }

    function: aliases {
        # Output the aliases in human readable format
        runtime: --aliases -> formap: name alias {
            $name -> sprintf: "%10s => ${esccli @alias}\n"
        } -> cast: str
    }

    test: run aliases

## Detail

### Report

`test: report` is only needed if `config: test auto-report` is set false.
However `test: run` automatically enables **auto-report**.

When the report is generated, be it automatically or manually triggered, it
flushes the table of pending reports.

## Synonyms

- `test`
- `!test`

## See Also

- [`<>` / `read-named-pipe`](./namedpipe.md):
  Reads from a Murex named pipe
- [`config`](./config.md):
  Query or define Murex runtime settings
