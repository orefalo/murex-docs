# `config` - Command Reference

> Query or define Murex runtime settings

## Description

Rather than Murex runtime settings being definable via obscure environmental
variables, Murex instead supports a registry of config defined via the
`config` command. This means any preferences and/or runtime config becomes
centralised and discoverable.

## Usage

List all settings:

    config -> <stdout>
    
Get a setting:

    config get app key -> <stdout>
    
Set a setting:

    config set app key value
    
    <stdin> -> config set app key
    
    config eval app key { -> code-block }
    
Define a new config setting:

    config define app key { mxjson }
    
Reset a setting to it's default value:

    !config app key
    
    config default app key

## Examples

Using `eval` to append to an array (in this instance, adding a function
name to the list of "safe" commands)

    » function: foobar { -> match foobar }
    » config: eval shell safe-commands { -> append foobar }

## Detail

With regards to `config`, the following terms are applied:

### "app"

This refers to a grouped category of settings. For example the name of a built
in.
  
Other app names include

* `shell`: for "global" (system wide) Murex settings
* `proc`: for scoped Murex settings
* `http`: for settings that are applied to any processes which use the builtin
   HTTP user agent (eg `open`, `get`, `getfile`, `post`)
* `test`: settings for Murex's test frameworks
* `index`: settings for `[` (index)

### "key"

This refers to the config setting itself. For example the "app" might be `http`
but the "key" might be `timeout` - where the "key", in this instance, holds the
value for how long any HTTP user agents might wait before timing out.

### "value"

Value is the actual value of a setting. So the value for "app": `http`, "key":
`timeout` might be `10`. eg

    » config get http timeout
    10
    
### "scope" / "scoped"

Settings in `config`, by default, are scoped per function and module. Any
functions called will inherit the settings of it's caller parent. However any
child functions that then change the settings will only change settings for it's
own function and not the parent caller.

Please note that `config` settings are scoped differently to local variables.

### "global"

Global settings defined inside a function will affect settings queried inside
another executing function (same concept as global variables).

## Directives

The directives for `config define` are listed below. Headings are formatted
as follows: 

    "DirectiveName": json data-type (default value)
    
Where "default value" is what will be auto-populated if you don't include that
directive (or "required" if the directive must be included).

### "DataType": string (required)

This is the Murex data-type for the value.

### "Description": string (required)

Description is a required field to force developers into writing meaning hints
enabling the discoverability of settings within Murex.

### "Global": boolean (false)

This defines whether this setting is global or scoped.

All **Dynamic** settings _must_ also be **Global**. This is because **Dynamic**
settings rely on a state that likely isn't scoped (eg the contents of a config
file).

### "Default": any (required)

This is the initialized and default value.

### "Options": array (nil)

Some suggested options (if known) to provide as autocompletion suggestions in
the interactive command line.

### "Dynamic": map of strings (nil)

Only use this if config options need to be more than just static values stored
inside Murex's runtime. Using **Dynamic** means `autocomplete get app key`
and `autocomplete set app key value` will spawn off a subshell running a code
block defined from the `Read` and `Write` mapped values. eg

    # Create the example config file
    (this is the default value) -> > example.conf
    
    # mxjson format, so we can have comments and block quotes: #, (, )
    config define example test ({
        "Description": "This is only an example",
        "DataType": "str",
        "Global": true,
        "Dynamic": {
            "Read": ({
                open example.conf
            }),
            "Write": ({
                -> > example.conf
            })
        },
        # read the config file to get the default value
        "Default": "${open example.conf}"
    })
    
It's also worth noting the different syntax between **Read** and **Default**.
The **Read** code block is being executed when the **Read** directive is being
requested, whereas the **Default** code block is being executed when the JSON
is being read.

In technical terms, the **Default** code block is being executed by Murex 
when `config define` is getting executed where as the **Read** and **Write**
code blocks are getting stored as a JSON string and then executed only when
those hooks are getting triggered.

See the `mxjson` data-type for more details.

### "Dynamic": { "Read": string ("") }

This is executed when `autocomplete get app key` is ran. The STDOUT of the code
block is the setting's value.

### "Dynamic": { "Write": string ("") }

This is executed when `autocomplete` is setting a value (eg `set`, `default`,
`eval`). is ran. The STDIN of the code block is the new value.

## Synonyms

* `config`
* `!config`


## See Also

* [`[[` (element)](../commands/element.md):
  Outputs an element from a nested structure
* [`[` (index)](../commands/index.md):
  Outputs an element from an array, map or table
* [`append`](../commands/append.md):
  Add data to the end of an array
* [`event`](../commands/event.md):
  Event driven programming for shell scripts
* [`function`](../commands/function.md):
  Define a function block
* [`get`](../commands/get.md):
  Makes a standard HTTP request and returns the result as a JSON object
* [`getfile`](../commands/getfile.md):
  Makes a standard HTTP request and return the contents as Murex-aware data type for passing along Murex pipelines.
* [`match`](../commands/match.md):
  Match an exact value in an array
* [`open`](../commands/open.md):
  Open a file with a preferred handler
* [`post`](../commands/post.md):
  HTTP POST request with a JSON-parsable return
* [`runtime`](../commands/runtime.md):
  Returns runtime information on the internal state of Murex
* [mxjson](../types/mxjson.md):
  Murex-flavoured JSON (deprecated)