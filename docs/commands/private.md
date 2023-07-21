# `private`

> Define a private function block

## Description

`private` defines a function who's scope is limited to that module or source
file.

Privates cannot be called from one module to another (unless they're wrapped
around a global `function`) and nor can they be called from the interactive
command line. The purpose of a `private` is to reduce repeated code inside
a module or source file without cluttering up the global namespace.

## Usage

    private: name { code-block }

## Examples

    # The following cannot be entered via the command line. You need to write
    # it to a file and execute it from there.

    private hw {
        out "Hello, World!"
    }

    function tom {
        hw
        out "My name is Tom."
    }

    function dick {
        hw
        out "My name is Dick."
    }

    function harry {
        hw
        out "My name is Harry."
    }

## Detail

### Allowed characters

Private names can only include any characters apart from dollar (`$`).
This is to prevent functions from overwriting variables (see the order of
preference below).

### Undefining a private

Because private functions are fixed to the source file that declares them,
there isn't much point in undefining them. Thus at this point in time, it
is not possible to do so.

### Order of preference

There is an order of precedence for which commands are looked up:

1. `runmode`: this is executed before the rest of the script. It is invoked by
   the pre-compiler forking process and is required to sit at the top of any
   scripts.

1. `test` and `pipe` functions also alter the behavior of the compiler and thus
   are executed ahead of any scripts.

1. private functions - defined via `private`. Private's cannot be global and
   are scoped only to the module or source that defined them. For example, You
   cannot call a private function directly from the interactive command line
   (however you can force an indirect call via `fexec`).

1. Aliases - defined via `alias`. All aliases are global.

1. Murex functions - defined via `function`. All functions are global.

1. Variables (dollar prefixed) which are declared via `global`, `set` or `let`.
   Also environmental variables too, declared via `export`.

1. globbing: however this only applies for commands executed in the interactive
   shell.

1. Murex builtins.

1. External executable files

You can override this order of precedence via the `fexec` and `exec` builtins.

## See Also

- [`alias`](./alias.md):
  Create an alias for a command
- [`break`](./break.md):
  Terminate execution of a block within your processes scope
- [`exec`](./exec.md):
  Runs an executable
- [`export`](./export.md):
  Define an environmental variable and set it's value
- [`fexec` ](./fexec.md):
  Execute a command or function, bypassing the usual order of precedence.
- [`function`](./function.md):
  Define a function block
- [`g`](./g.md):
  Glob pattern matching for file system objects (eg `*.txt`)
- [`global`](./global.md):
  Define a global variable and set it's value
- [`let`](./let.md):
  Evaluate a mathematical function and assign to variable (deprecated)
- [`method`](./method.md):
  Define a methods supported data-types
- [`set`](./set.md):
  Define a local variable and set it's value
- [`source` ](./source.md):
  Import Murex code from another file of code block
