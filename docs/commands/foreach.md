# `foreach`

> Iterate through an array

## Description

`foreach` reads an array or map from STDIN and iterates through it, running
a code block for each iteration with the value of the iterated element passed
to it.

By default `foreach`'s output data type is inherieted from its input data type.
For example is STDIN is `yaml` then so will STDOUT. The only exception to this
is if STDIN is `json` in which case STDOUT will be jsonlines (`jsonl`), or when
additional flags are used such as `--jmap`.

## Usage

`{ code-block }` reads from a variable and writes to an array / unbuffered STDOUT:

    `<stdin>` -> foreach variable { code-block } -> `<stdout>`

`{ code-block }` reads from STDIN and writes to an array / unbuffered STDOUT:

    `<stdin>` -> foreach { -> code-block } -> `<stdout>`

`foreach` writes to a buffered JSON map:

    `<stdin>` -> foreach --jmap variable { code-block (map key) } { code-block (map value) } -> `<stdout>`

## Examples

There are two basic ways you can write a `foreach` loop depending on how you
want the iterated element passed to the code block.

The first option is to specify a temporary variable which can be read by the
code block:

```
    » a [1..3] -> foreach i { out $i }
    1
    2
    3
```

> Please note that the variable is specified **without** the dollar prefix,
> then used in the code block **with** the dollar prefix.

The second option is for the code block's STDIN to read the element:

```
    » a [1..3] -> foreach { -> cat }
    1
    2
    3
```

> STDIN can only be read as the first command. If you cannot process the
> element on the first command then it is recommended you use the first
> option (passing a variable) instead.

### Writing JSON maps

```
    » ja [Monday..Friday] -> foreach --jmap day { out $day -> left 3 } { $day }
    {
        "Fri": "Friday",
        "Mon": "Monday",
        "Thu": "Thursday",
        "Tue": "Tuesday",
        "Wed": "Wednesday"
    }
```

### Using steps to jump iterations by more than 1 (one)

You can step through an array, list or table in jumps of user definable
quantities. The value passed in STDIN and $VAR will be an array of all
the records within that step range. For example:

```
    » %[1..10] -> foreach --step 3 value { out "Iteration $.i: $value" }
    Iteration 1: [
        1,
        2,
        3
    ]
    Iteration 2: [
        4,
        5,
        6
    ]
    Iteration 3: [
        7,
        8,
        9
    ]
    Iteration 4: [
        10
    ]
```

## Flags

- `--jmap`
  Write a `json` map to STDOUT instead of an array
- `--step`
  `<int>` Iterates in steps. Value passed to block is an array of items in the step range. Not (yet) supported with `--jmap

## Detail

### Meta values

Meta values are a JSON object stored as the variable `$.`. The meta variable
will get overwritten by any other block which invokes meta values. So if you
wish to persist meta values across blocks you will need to reassign `$.`, eg

```
    %[1..3] -> foreach {
        meta_parent = $.
        %[7..9] -> foreach {
            out "$(meta_parent.i): $.i"
        }
    }
```

The following meta values are defined:

- `i`: iteration number

### Preserving the data type (when no flags used)

`foreach` will preserve the data type read from STDIN in all instances where
data is being passed along the pipeline and push that data type out at the
other end:

- The temporary variable will be created with the same data-type as
  `foreach`'s STDIN, or the data type of the array element (eg if it is a
  string or number)
- The code block's STDIN will have the same data-type as `foreach`'s STDIN
- `foreeach`'s STDOUT will also be the same data-type as it's STDIN (or `jsonl`
  (jsonlines) where STDIN was `json` because `jsonl` better supports streaming)

This last point means you may need to `cast` your data if you're writing
data in a different format. For example the following is creating a YAML list
however the data-type is defined as `json`:

```
    » ja [1..3] -> foreach i { out "- $i" }
    - 1
    - 2
    - 3

    » ja [1..3] -> foreach i { out "- $i" } -> debug -> [[ /Data-Type/Murex ]]
    json
```

Thus any marshalling or other data-type-aware API's would fail because they
are expecting `json` and receiving an incompatible data format.

This can be resolved via `cast`:

```
    » ja [1..3] -> foreach i { out "- $i" } -> cast yaml
    - 1
    - 2
    - 3

    » ja [1..3] -> foreach i { out "- $i" } -> cast yaml -> debug -> [[ /Data-Type/Murex ]]
    yaml
```

The output is the same but now it's defined as `yaml` so any further pipelined
processes will now automatically use YAML marshallers when reading that data.

### Tips when writing JSON inside for loops

One of the drawbacks (or maybe advantages, depending on your perspective) of
JSON is that parsers generally expect a complete file for processing in that
the JSON specification requires closing tags for every opening tag. This means
it's not always suitable for streaming. For example

```
    » ja [1..3] -> foreach i { out ({ "$i": $i }) }
    { "1": 1 }
    { "2": 2 }
    { "3": 3 }
```

**What does this even mean and how can you build a JSON file up sequentially?**

One answer if to write the output in a streaming file format and convert back
to JSON

```
    » ja [1..3] -> foreach i { out (- "$i": $i) }
    - "1": 1
    - "2": 2
    - "3": 3

    » ja [1..3] -> foreach i { out (- "$i": $i) } -> cast yaml -> format json
    [
        {
            "1": 1
        },
        {
            "2": 2
        },
        {
            "3": 3
        }
    ]
```

**What if I'm returning an object rather than writing one?**

The problem with building JSON structures from existing structures is that you
can quickly end up with invalid JSON due to the specifications strict use of
commas.

For example in the code below, each item block is it's own object and there are
no `[ ... ]` encapsulating them to denote it is an array of objects, nor are
the objects terminated by a comma.

```
    » config -> [ shell ] -> formap k v { $v -> alter /Foo Bar }
    {
        "Data-Type": "bool",
        "Default": true,
        "Description": "Display the interactive shell's hint text helper. Please note, even when this is disabled, it will still appear when used for regexp searches and other readline-specific functions",
        "Dynamic": false,
        "Foo": "Bar",
        "Global": true,
        "Value": true
    }
    {
        "Data-Type": "block",
        "Default": "{ progress $PID }",
        "Description": "Murex function to execute when an `exec` process is stopped",
        "Dynamic": false,
        "Foo": "Bar",
        "Global": true,
        "Value": "{ progress $PID }"
    }
    {
        "Data-Type": "bool",
        "Default": true,
        "Description": "ANSI escape sequences in Murex builtins to highlight syntax errors, history completions, {SGR} variables, etc",
        "Dynamic": false,
        "Foo": "Bar",
        "Global": true,
        "Value": true
    }
    ...
```

Luckily JSON also has it's own streaming format: JSON lines (`jsonl`). We can
`cast` this output as `jsonl` then `format` it back into valid JSON:

```
    » config -> [ shell ] -> formap k v { $v -> alter /Foo Bar } -> cast jsonl -> format json
    [
        {
            "Data-Type": "bool",
            "Default": true,
            "Description": "Write shell history (interactive shell) to disk",
            "Dynamic": false,
            "Foo": "Bar",
            "Global": true,
            "Value": true
        },
        {
            "Data-Type": "int",
            "Default": 4,
            "Description": "Maximum number of lines with auto-completion suggestions to display",
            "Dynamic": false,
            "Foo": "Bar",
            "Global": true,
            "Value": "6"
        },
        {
            "Data-Type": "bool",
            "Default": true,
            "Description": "Display some status information about the stop process when ctrl+z is pressed (conceptually similar to ctrl+t / SIGINFO on some BSDs)",
            "Dynamic": false,
            "Foo": "Bar",
            "Global": true,
            "Value": true
        },
    ...
```

#### `foreach` will automatically cast it's output as `jsonl` _if_ it's STDIN type is `json`

```
    » ja: [Tom,Dick,Sally] -> foreach: name { out Hello $name }
    Hello Tom
    Hello Dick
    Hello Sally

    » ja [Tom,Dick,Sally] -> foreach name { out Hello $name } -> debug -> [[ /Data-Type/Murex ]]
    jsonl

    » ja: [Tom,Dick,Sally] -> foreach: name { out Hello $name } -> format: json
    [
        "Hello Tom",
        "Hello Dick",
        "Hello Sally"
    ]
```

## See Also

- [`ReadArrayWithType()` (type)](../apis/ReadArrayWithType.md):
  Read from a data type one array element at a time and return the elements contents and data type
- [`[[` (element)](./element.md):
  Outputs an element from a nested structure
- [`a` (mkarray)](./a.md):
  A sophisticated yet simple way to build an array or list
- [`break`](./break.md):
  Terminate execution of a block within your processes scope
- [`cast`](./cast.md):
  Alters the data type of the previous function without altering it's output
- [`debug`](./debug.md):
  Debugging information
- [`for`](./for.md):
  A more familiar iteration loop to existing developers
- [`formap`](./formap.md):
  Iterate through a map or other collection of data
- [`format`](./format.md):
  Reformat one data-type into another data-type
- [`if`](./if.md):
  Conditional statement to execute different blocks of code depending on the result of the condition
- [`ja` (mkarray)](./ja.md):
  A sophisticated yet simply way to build a JSON array
- [`json` ](../types/json.md):
  JavaScript Object Notation (JSON)
- [`jsonl` ](../types/jsonl.md):
  JSON Lines
- [`left`](./left.md):
  Left substring every item in a list
- [`out`](./out.md):
  Print a string to the STDOUT with a trailing new line character
- [`while`](./while.md):
  Loop until condition false
- [`yaml` ](../types/yaml.md):
  YAML Ain't Markup Language (YAML)
