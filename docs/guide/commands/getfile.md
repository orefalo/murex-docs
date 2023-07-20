# `getfile` - Command Reference

> Makes a standard HTTP request and return the contents as Murex-aware data type for passing along Murex pipelines.

## Description

Fetches a resource from a URL - setting STDOUT data-type

## Usage

    getfile url -> `<stdout>`

## Examples

    getfile google.com

## Detail

This simply fetches a resource (via HTTP GET request) from a URL and returns the
byte stream to STDOUT. It will set STDOUT's data-type based on MIME defined in
the `Content-Type` HTTP header.

It is recommended that you only use this command if you're pipelining the output
(eg writing to file or passing on to another function). If you just want to
render the output to the terminal then use `open` which has hooks for smart
terminal rendering.

### Configurable options

`getfile` has a number of behavioral options which can be configured via
Murex's standard `config` tool:

    config: -> [ http ]

To change a default, for example the user agent string:

    config: set http user-agent "bob"
    getfile: google.com

This enables sane, repeatable and readable defaults. Read the documents on
`config` for more details about it's usage and the rational behind the command.

## See Also

- [`config`](../commands/config.md):
  Query or define Murex runtime settings
- [`get`](../commands/get.md):
  Makes a standard HTTP request and returns the result as a JSON object
- [`open`](../commands/open.md):
  Open a file with a preferred handler
- [`post`](../commands/post.md):
  HTTP POST request with a JSON-parsable return
