---
title: Commands
icon: arrow-down
index: true
category:
  - Guide
---

# Command Reference

This section is a glossary of Murex builtin commands.

Because Murex is loosely modelled on the functional paradigm, it means
all language constructs are exposed via functions and those are typically
builtins because they can share the Murex runtime virtual machine.
However any executable command can also be called from within Murex;
be that either via the `exec` builtin or natively like you would from any
Linux, UNIX, or even Windows command prompt.

## Other Reference Material

### Language Guides

1. [Language Tour](/tour), which is an introduction into
   the Murex language.

2. [Rosetta Stone](/rosetta), which is a reference
   table comparing Bash syntax to Murex's.

### Murex's Source Code

The source for each of these builtins can be found on [Github](https://github.com/lmorg/murex/tree/master/builtins/core).

### Shell Commands For Querying Builtins

From the shell itself: run `builtins` to list the builtin command.

If you require a manual on any of those commands, you can run `murex-docs`
to return the same markdown-formatted document as those listed below. eg

    murex-docs trypipe

## Pages

- [`!` (not)](./not.md):
  Reads the STDIN and exit number from previous process and not's it's condition
- [`(` (brace quote)](./brace-quote.md):
  Write a string to the STDOUT without new line
- [`2darray` ](./2darray.md):
  Create a 2D JSON array from multiple input sources
- [`<>` / `read-named-pipe`](./namedpipe.md):
  Reads from a Murex named pipe
- [`<stdin>` ](./stdin.md):
  Read the STDIN belonging to the parent code block
- [`=` (arithmetic evaluation)](./equ.md):
  Evaluate a mathematical function (deprecated)
- [`>>` (append file)](./greater-than-greater-than.md):
  Writes STDIN to disk - appending contents if file already exists
- [`>` (truncate file)](./greater-than.md):
  Writes STDIN to disk - overwriting contents if file already exists
- [`@g` (autoglob) ](./autoglob.md):
  Command prefix to expand globbing (deprecated)
- [`[[` (element)](./element.md):
  Outputs an element from a nested structure
- [`[` (index)](./index.md):
  Outputs an element from an array, map or table
- [`[` (range)](./range.md):
  Outputs a ranged subset of data from STDIN
- [`a` (mkarray)](./a.md):
  A sophisticated yet simple way to build an array or list
- [`addheading` ](./addheading.md):
  Adds headings to a table
- [`alias`](./alias.md):
  Create an alias for a command
- [`alter`](./alter.md):
  Change a value within a structured data-type and pass that change along the pipeline without altering the original source input
- [`and`](./and.md):
  Returns `true` or `false` depending on whether multiple conditions are met
- [`append`](./append.md):
  Add data to the end of an array
- [`args` ](./args.md):
  Command line flag parser for Murex shell scripting
- [`autocomplete`](./autocomplete.md):
  Set definitions for tab-completion in the command line
- [`bexists`](./bexists.md):
  Check which builtins exist
- [`bg`](./bg.md):
  Run processes in the background
- [`break`](./break.md):
  Terminate execution of a block within your processes scope
- [`cast`](./cast.md):
  Alters the data type of the previous function without altering it's output
- [`catch`](./catch.md):
  Handles the exception code raised by `try` or `trypipe`
- [`cd`](./cd.md):
  Change (working) directory
- [`config`](./config.md):
  Query or define Murex runtime settings
- [`continue`](./continue.md):
  Terminate process of a block within a caller function
- [`count`](./count.md):
  Count items in a map, list or array
- [`cpuarch`](./cpuarch.md):
  Output the hosts CPU architecture
- [`cpucount`](./cpucount.md):
  Output the number of CPU cores available on your host
- [`datetime` ](./datetime.md):
  A date and/or time conversion tool (like `printf` but for date and time values)
- [`debug`](./debug.md):
  Debugging information
- [`die`](./die.md):
  Terminate murex with an exit number of 1
- [`err`](./err.md):
  Print a line to the STDERR
- [`escape`](./escape.md):
  Escape or unescape input
- [`esccli`](./esccli.md):
  Escapes an array so output is valid shell code
- [`eschtml`](./eschtml.md):
  Encode or decodes text for HTML
- [`escurl`](./escurl.md):
  Encode or decodes text for the URL
- [`event`](./event.md):
  Event driven programming for shell scripts
- [`exec`](./exec.md):
  Runs an executable
- [`exit`](./exit.md):
  Exit murex
- [`exitnum`](./exitnum.md):
  Output the exit number of the previous process
- [`export`](./export.md):
  Define an environmental variable and set it's value
- [`expr`](./expr.md):
  Expressions: mathematical, string comparisons, logical operators
- [`f`](./f.md):
  Lists or filters file system objects (eg files)
- [`false`](./false.md):
  Returns a `false` value
- [`fexec` ](./fexec.md):
  Execute a command or function, bypassing the usual order of precedence.
- [`fg`](./fg.md):
  Sends a background process into the foreground
- [`fid-kill`](./fid-kill.md):
  Terminate a running Murex function
- [`fid-killall`](./fid-killall.md):
  Terminate _all_ running Murex functions
- [`fid-list`](./fid-list.md):
  Lists all running functions within the current Murex session
- [`for`](./for.md):
  A more familiar iteration loop to existing developers
- [`foreach`](./foreach.md):
  Iterate through an array
- [`formap`](./formap.md):
  Iterate through a map or other collection of data
- [`format`](./format.md):
  Reformat one data-type into another data-type
- [`function`](./function.md):
  Define a function block
- [`g`](./g.md):
  Glob pattern matching for file system objects (eg `*.txt`)
- [`get-type`](./get-type.md):
  Returns the data-type of a variable or pipe
- [`get`](./get.md):
  Makes a standard HTTP request and returns the result as a JSON object
- [`getfile`](./getfile.md):
  Makes a standard HTTP request and return the contents as Murex-aware data type for passing along Murex pipelines.
- [`global`](./global.md):
  Define a global variable and set it's value
- [`history`](./history.md):
  Outputs murex's command history
- [`if`](./if.md):
  Conditional statement to execute different blocks of code depending on the result of the condition
- [`ja` (mkarray)](./ja.md):
  A sophisticated yet simply way to build a JSON array
- [`jsplit` ](./jsplit.md):
  Splits STDIN into a JSON array based on a regex parameter
- [`left`](./left.md):
  Left substring every item in a list
- [`let`](./let.md):
  Evaluate a mathematical function and assign to variable (deprecated)
- [`lockfile`](./lockfile.md):
  Create and manage lock files
- [`man-get-flags` ](./man-get-flags.md):
  Parses man page files for command line flags
- [`man-summary`](./man-summary.md):
  Outputs a man page summary of a command
- [`map` ](./map.md):
  Creates a map from two data sources
- [`match`](./match.md):
  Match an exact value in an array
- [`method`](./method.md):
  Define a methods supported data-types
- [`msort` ](./msort.md):
  Sorts an array - data type agnostic
- [`mtac`](./mtac.md):
  Reverse the order of an array
- [`murex-docs`](./murex-docs.md):
  Displays the man pages for Murex builtins
- [`murex-package`](./murex-package.md):
  Murex's package manager
- [`murex-parser` ](./murex-parser.md):
  Runs the Murex parser against a block of code
- [`murex-update-exe-list`](./murex-update-exe-list.md):
  Forces Murex to rescan $PATH looking for executables
- [`null`](./devnull.md):
  null function. Similar to /dev/null
- [`open-image` ](./open-image.md):
  Renders bitmap image data on your terminal
- [`open`](./open.md):
  Open a file with a preferred handler
- [`openagent`](./openagent.md):
  Creates a handler function for `open
- [`or`](./or.md):
  Returns `true` or `false` depending on whether one code-block out of multiple ones supplied is successful or unsuccessful.
- [`os`](./os.md):
  Output the auto-detected OS name
- [`out`](./out.md):
  Print a string to the STDOUT with a trailing new line character
- [`pipe`](./pipe.md):
  Manage Murex named pipes
- [`post`](./post.md):
  HTTP POST request with a JSON-parsable return
- [`prefix`](./prefix.md):
  Prefix a string to every item in a list
- [`prepend` ](./prepend.md):
  Add data to the start of an array
- [`pretty`](./pretty.md):
  Prettifies JSON to make it human readable
- [`private`](./private.md):
  Define a private function block
- [`pt`](./pt.md):
  Pipe telemetry. Writes data-types and bytes written
- [`rand`](./rand.md):
  Random field generator
- [`read`](./read.md):
  `read` a line of input from the user and store as a variable
- [`regexp`](./regexp.md):
  Regexp tools for arrays / lists of strings
- [`return`](./return.md):
  Exits current function scope
- [`right`](./right.md):
  Right substring every item in a list
- [`round` ](./round.md):
  Round a number by a user defined precision
- [`runmode`](./runmode.md):
  Alter the scheduler's behaviour at higher scoping level
- [`runtime`](./runtime.md):
  Returns runtime information on the internal state of Murex
- [`rx`](./rx.md):
  Regexp pattern matching for file system objects (eg `.*\\.txt`)
- [`set`](./set.md):
  Define a local variable and set it's value
- [`source` ](./source.md):
  Import Murex code from another file of code block
- [`struct-keys`](./struct-keys.md):
  Outputs all the keys in a structure as a file path
- [`suffix`](./suffix.md):
  Prefix a string to every item in a list
- [`summary` ](./summary.md):
  Defines a summary help text for a command
- [`switch`](./switch.md):
  Blocks of cascading conditionals
- [`ta` (mkarray)](./ta.md):
  A sophisticated yet simple way to build an array of a user defined data-type
- [`tabulate`](./tabulate.md):
  Table transformation tools
- [`test`](./test.md):
  Murex's test framework - define tests, run tests and debug shell scripts
- [`time` ](./time.md):
  Returns the execution run time of a command or block
- [`tmp`](./tmp.md):
  Create a temporary file and write to it
- [`tout`](./tout.md):
  Print a string to the STDOUT and set it's data-type
- [`tread`](./tread.md):
  `read` a line of input from the user and store as a user defined _typed_ variable (deprecated)
- [`true`](./true.md):
  Returns a `true` value
- [`try`](./try.md):
  Handles errors inside a block of code
- [`trypipe`](./trypipe.md):
  Checks state of each function in a pipeline and exits block on error
- [`version` ](./version.md):
  Get Murex version
- [`while`](./while.md):
  Loop until condition false

## Optional Builtins

- [`!bz2` ](optional/bz2.md):
  Decompress a bz2 file
- [`base64` ](optional/base64.md):
  Encode or decode a base64 string
- [`gz` ](optional/gz.md):
  Compress or decompress a gzip file
- [`qr` ](optional/qr.md):
  Creates a QR code from STDIN
- [`select` ](optional/select.md):
  Inlining SQL into shell pipelines
- [`sleep` ](optional/sleep.md):
  Suspends the shell for a number of seconds
