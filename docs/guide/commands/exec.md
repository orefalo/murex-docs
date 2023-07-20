# `exec` - Command Reference

> Runs an executable

## Description

With Murex, like most other shells, you launch a process by calling the
name of that executable directly. While this is suitable 99% of the time,
occasionally you might run into an edge case where that wouldn't work. The
primary reason being if you needed to launch a process from a variable, eg

    » set exe=uname
    » $exe
    uname
    
As you can see here, Murex's behavior here is to output the contents of
the variable rather then executing the contents of the variable. This is
done for safety reasons, however if you wanted to override that behavior
then you could prefix the variable with exec:

    » set exe=uname
    » exec $exe
    Linux

## Usage

    <stdin> -> exec
    <stdin> -> exec -> <stdout>
               exec -> <stdout>

## Examples

    » exec printf "Hello, world!"
    Hello, world!
    
**Working around aliases:**

If you have an alias like `alias ls=ls --color=auto` and you wanted to run `ls`
but without colour, you might run `exec ls`.

## Detail

If any command doesn't exist as a builtin, function nor alias, then Murex
will default to forking out to any command with this name (subject to an
absolute path or the order of precedence in `$PATH`). Any forked process will
show up in both the operating systems process viewer (eg `ps`) but also
Murex's own process viewer, `fid-list`. However inside `fid-list` you will
notice that all external processes are listed as `exec` with the process name
as part of `exec`'s parameters. That is because `exec` is handler for programs
that aren't native to Murex.

### Compatibility with POSIX

For compatibility with traditional shells like Bash and Zsh, `command` is an
alias for `exec`.

## Synonyms

* `exec`
* `command`


## See Also

* [`bexists`](../commands/bexists.md):
  Check which builtins exist
* [`bg`](../commands/bg.md):
  Run processes in the background
* [`builtins`](../commands/runtime.md):
  Returns runtime information on the internal state of Murex
* [`fexec` ](../commands/fexec.md):
  Execute a command or function, bypassing the usual order of precedence.
* [`fg`](../commands/fg.md):
  Sends a background process into the foreground
* [`fid-kill`](../commands/fid-kill.md):
  Terminate a running Murex function
* [`fid-killall`](../commands/fid-killall.md):
  Terminate _all_ running Murex functions
* [`fid-list`](../commands/fid-list.md):
  Lists all running functions within the current Murex session
* [`jobs`](../commands/fid-list.md):
  Lists all running functions within the current Murex session
* [`murex-update-exe-list`](../commands/murex-update-exe-list.md):
  Forces Murex to rescan $PATH looking for executables
* [`set`](../commands/set.md):
  Define a local variable and set it's value