---
title: ChangeLog
index: false
icon: laptop-code
category:
  - Guide
---

# Change Log

Track new features, any breaking changes, and the release history here.

## Articles

### 18.07.2023 - [v4.4](changelog/v4.4.md)

v4.4 features two new builtins, improvements in testing, and automatic generation of autocompletion suggestions backed by man page parsing. Plus there has been a lot of focus on improving _readline_ responsiveness

### 02.07.2023 - [What's new in murex v4.3](v4.3.md)

This brings improved support on Windows plus one breaking change from the previous release (v4.2)

### 19.06.2023 - [What's new in murex v4.2](v4.2.md)

Murex usage has raised considerably in recent weeks. This release addresses a number of feature requests and bugs raised on Github.

### 04.06.2023 - [What's new in murex v4.1.x](v4.1.md)

The previous releases have brought significant advancements to Murex's syntax but at the cost of longer gaps between releases. So the 4.1.x versions will be shorter releases but focusing on bug fixes. The 4.1.x release notes will be appended to [murex.rocks changelog](https://murex.rocks/changelog/) and available on [Github releases](https://github.com/lmorg/murex/releases) too

### 26.03.2023 - [What's new in murex v4.0](v4.0.md)

This release sees significant improvements for use with non-latin characters in both the interactive prompt and shell scripting. It introduces new syntax to make working with structured data even easier than before. As well as new data types and smoother user experience.

### 12.02.2023 - [What's new in murex v3.1](v3.1.md)

This release includes mostly bug fixes and new experimental features which are opt into. To enable all experimental features, set the environmental variable `MUREX_EXPERIMENTAL` to any value. Or you can enable specific features individually via `config

### 31.12.2022 - [What's new in murex v3.0](v3.0.md)

This is a major release that brings a significant number of changes and improvements, including a complete overhaul of the parser. Backwards compatibility is a high priority however these new features bring greater readability and consistency to shell scripting. So while the older syntax remains for compatibility, it is worth migrating over to the newer syntax for all new code being written

### 12.09.2022 - [What's new in murex v2.11](v2.11.md)

This release mainly focuses on refinements in performance and usability, rather than introducing new features

### 01.08.2022 - [What's new in murex v2.10](v2.10.md)

This release brings a few minor improvements and bug fixes rather than big new headline features.

### 15.07.2022 - [What's new in murex v2.9](v2.9.md)

This release focuses on testing and REPL usability improvements but also includes updates several new run modes to make error handling easier in larger scripts.

### 23.05.2022 - [What's new in murex v2.8](v2.8.md)

This release comes with a number of experimental but stable features that might eventually become standard practice. The features are there to use if you with but adjacent from the older code so there is zero risk in updating to this version.

### 15.05.2022 - [What's new in murex v2.7](v2.7.md)

This update has introduced another potential breaking change for your safety: zero length arrays now fail by default. Also errors inside subshells will cause the parent command to fail if ran inside a `try` or `trypipe` block.

### 26.02.2022 - [What's new in murex v2.6](v2.6.md)

This update has introduced a potential breaking change: variables now need to be defined before usage otherwise the commandline will fail. Read notes to learn how to disable this feature where needed. Also included in this release is the `select` command as part of the standard build.

### 12.02.2022 - [What's new in murex v2.5](v2.5.md)

This release introduces a number of new builtins, fixes some regression bugs and supercharges the `select` optional builtin (which I plan to include into the core builtins for non-Windows users in the next release).

### 09.12.2021 - [What's new in murex v2.4](v2.4.md)

This release introduces a strict mode for variables, new builtin, performance improvements, and better error messages; plus a potential breaking change

### 26.09.2021 - [What's new in murex v2.3](v2.3.md)

This release includes significant changes to the interactive terminal

### 21.06.2021 - [What's new in murex v2.2](v2.2.md)

This is mainly a bug fix release but it does include one breaking change for `config`. Please read for details.

### 30.04.2021 - [What's new in murex v2.1](v2.1.md)

This release comes with support for inlining SQL and some major bug fixes plus a breaking change for `config`. Please read for details.

### 17.04.2021 - [What's new in murex v2.0](v2.0.md)

This release comes with spellchecking, inlined images, smarter syntax completion and more
