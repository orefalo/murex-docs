# mxjson - Data-Type Reference

> Murex-flavoured JSON (deprecated)

## Description

> This format has been deprecated in favour of `%{}` constructors.

mxjson is an extension to JSON designed to integrate more seamlessly when
use as a configuration file. Thus mxjson supports comments and Murex code
blocks embedded into the JSON schema.

> mxjson is a format that is pre-parsed into a valid JSON format.

mxjson isn't a Murex data-type in that you cannot marshal
and unmarshal mxjson files. Currently it is a format that is only supported
by a small subset of Murex builtins (eg `config` and `autocomplete`) where
config might embed Murex code blocks.

**mxjson features the following enhancements:**

### Line Comments

Line comments are prefixed with a 'hash', `#`, just like with regular Murex
code.

### Block Quotation

Code blocks are quoted with `(`, `)`. For example, below "ExampleFunction"
uses the `({ block quote })` method.

    {
        "ExampleFunction": ({
            out: "This is an example Murex function"
            if { =1==2 } then {
                err: "The laws of the universe are broken"
            }
        })
    }

Any block quoted by this method will be converted to the following valid JSON:

    {
        "ExampleFunction": "\n    out: \"This is an example Murex function\"\n    if { =1==2 } then {\n        err: \"The laws of the universe are broken\"\n    }"
    }

## See Also

- [Brace Quote (`%(`, `)`) Tokens](../parser/brace-quote.md):
  Initiates or terminates a string (variables expanded)
- [Code Block Parsing](../user-guide/code-block.md):
  Overview of how code blocks are parsed
- [Create array (`%[]`) constructor](../parser/create-array.md):
  Quickly generate arrays
- [Curly Brace (`{`, `}`) Tokens](../parser/curly-brace.md):
  Initiates or terminates a code block
- [`Marshal()` (type)](../apis/Marshal.md):
  Converts structured memory into a structured file format (eg for stdio)
- [`Unmarshal()` (type)](../apis/Unmarshal.md):
  Converts a structured file format into structured memory
- [`[[` (element)](../commands/element.md):
  Outputs an element from a nested structure
- [`[` (index)](../commands/index.md):
  Outputs an element from an array, map or table
- [`autocomplete`](../commands/autocomplete.md):
  Set definitions for tab-completion in the command line
- [`cast`](../commands/cast.md):
  Alters the data type of the previous function without altering it's output
- [`config`](../commands/config.md):
  Query or define Murex runtime settings
- [`format`](../commands/format.md):
  Reformat one data-type into another data-type
- [`hcl` ](../types/hcl.md):
  HashiCorp Configuration Language (HCL)
- [`json` ](../types/json.md):
  JavaScript Object Notation (JSON)
- [`jsonc` ](../types/jsonc.md):
  Concatenated JSON
- [`jsonl` ](../types/jsonl.md):
  JSON Lines
- [`open`](../commands/open.md):
  Open a file with a preferred handler
- [`pretty`](../commands/pretty.md):
  Prettifies JSON to make it human readable
- [`runtime`](../commands/runtime.md):
  Returns runtime information on the internal state of Murex
- [`toml` ](../types/toml.md):
  Tom's Obvious, Minimal Language (TOML)
- [`yaml` ](../types/yaml.md):
  YAML Ain't Markup Language (YAML)
- [`create-objects`](../parser/create-objects.md):
