# `method`

> Define a methods supported data-types

## Description

`method` defines what the typical data type would be for a function's STDIN
and STDOUT.

## Usage

    method: define name { json }

## Examples

    method: define name {
        "Stdin":  "@Any",
        "Stdout": "json"
    }

## Detail

### Type Groups

You can define a Murex data type or use a type group. The following type
groups are available to use:

```go
package types

// These are the different supported type groups
const (
	Any               = "@Any"
	Text              = "@Text"
	Math              = "@Math"
	Unmarshal         = "@Unmarshal"
	Marshal           = "@Marshal"
	ReadArray         = "@ReadArray"
	ReadArrayWithType = "@ReadArrayWithType"
	WriteArray        = "@WriteArray"
	ReadIndex         = "@ReadIndex"
	ReadNotIndex      = "@ReadNotIndex"
	ReadMap           = "@ReadMap"
)

// GroupText is an array of the data types that make up the `text` type
var GroupText = []string{
	Generic,
	String,
	`generic`,
	`string`,
}

// GroupMath is an array of the data types that make up the `math` type
var GroupMath = []string{
	Number,
	Integer,
	Float,
	Boolean,
}
```

## See Also

- [Arrow Pipe (`->`) Token](../parser/pipe-arrow.md):
  Pipes STDOUT from the left hand command to STDIN of the right hand command
- [Murex's Interactive Shell](../user-guide/interactive-shell.md):
  What's different about Murex's interactive shell?
- [`alias`](./alias.md):
  Create an alias for a command
- [`autocomplete`](./autocomplete.md):
  Set definitions for tab-completion in the command line
- [`function`](./function.md):
  Define a function block
- [`private`](./private.md):
  Define a private function block
- [`runtime`](./runtime.md):
  Returns runtime information on the internal state of Murex
