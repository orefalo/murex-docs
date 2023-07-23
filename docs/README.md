---
home: true
icon: home
title: Murex
heroImage: favicon.svg
# bgImage: bluebg.jpg
# bgImageDark: https://theme-hope-assets.vuejs.press/bg/4-dark.svg
# bgImageStyle:
#   background-attachment: fixed
heroText: Murex.Rocks
tagline: An intuitive, typed and content aware shell for the 2020s and beyond.
actions:
  - text: Getting Started 💡
    link: ./tour
    type: primary
  - text: Rosetta Stone 🪨
    link: ./rosetta
  - text: Built-ins 📔
    link: ./commands

highlights:
  - header: A Modern shell for the rest of us
    description: Murex carries tons of unique features...
    # image: /murex.svg
    # bgImage: linesbg.svg
    # bgImageDark: https://theme-hope-assets.vuejs.press/bg/2-dark.svg
    # bgImageStyle:
    #   background-repeat: repeat
    #   background-size: initial
    features:
      - title: Content Aware
        icon: arrows-to-circle
        details: Natively manipulate JSON, TOML, YAML, XML, CSV, and commonlog files
        link: types/

      - title: Objects and Maps
        icon: table-columns
        details: Use maps, hashes, lists, and dictionaries for data manipulation
        link: mkarray/

      - title: Arrays manipulation
        icon: layer-group
        details: Native built-ins allow for proper manipulation of arrays
        link: lmkarray/

      - title: Scalar expression
        icon: check-double
        details: The shell parses variables as expressions to avoid accidental bugs due to spaces
        link: tour/#scalars

      - title: Public & Private functions
        icon: unlock-keyhole
        details: Private functions restrict scope visibility to the nearest module or source file
        link: commands/private

      - title: Type inference
        icon: text-height
        details: The shell tries to infer the data type of variables and pipelines it manages
        link: tour/#type-inference

      - title: Enhanced pipelines & redirection
        icon: puzzle-piece
        details: urex supports sending typed information to compatible functions via redirection and pipelines. This allows for more efficient and flexible data processing.
        link: user-guide/pipeline

      - title: Type casting and formats
        icon: text-width
        details: Murex allows you to change the meta-data about how an information should be read or displayed. This can be useful for manipulating and formatting data in a desired way.
        link: tour/#type-conversion

      - title: Inline spellchecking
        icon: spell-check
        details: Murex provides inline spellchecking, which quickly identifies typing spelling errors with underlined text. This helps to catch and correct errors in real-time.
        link: user-guide/spellcheck

      - title: Smart Autocomplete
        icon: wand-magic-sparkles
        details: Murex parses man pages for command line flags and provides smart autocomplete functionality. By pressing the TAB key, you can auto-complete commands and parameters, making command line navigation faster and more efficient.
        link: commands/autocomplete

      - title: Hint text
        icon: comment
        details: Murex provides hint text, which gives clues to the user without any distractions. This can be useful for providing additional information or guidance to the user
        link: user-guide/interactive-shell#hint-text

      - title: Syntax highlighting
        icon: highlighter
        details: In the interactive terminal, Murex provides syntax highlighting, making it easier to read and understand code. Syntax highlighting can also be piped to the next built-in for further processing.
        link: user-guide/interactive-shell#syntax-highlighting

      - title: Syntax Completion
        icon: down-left-and-up-right-to-center
        details: Murex balances and auto-closes brackets and accolades, making it easier to write and edit code. This feature helps to ensure that code is properly formatted and avoids syntax errors.
        link: user-guide/interactive-shell#syntax-completion

      - title: Extension Framework
        icon: cube
        details: Murex has an extension framework that allows you to design your own modules or enjoy prebuilt extensions such as `auto-jump` or `starfish`. This allows for customization and additional functionality.
        link: user-guide/modules

      - title: Built-in Package Manager
        icon: cubes
        details: Murex comes with a built-in package manager that allows you to search and manage the lifecycle of packages. This makes it easy to install and manage dependencies.
        link: commands/murex-package

      - title: 80 builtins commands
        icon: building
        details: Murex provides 80 built-in commands allowing for fast execution and portability. These built-in commands cover a wide range of functionalities.
        link: commands/

      - title: Realtime Events
        icon: bolt
        details: Murex supports realtime events, which streamline script notifications upon elapsed time, keypress, completion, prompt, or filesystem changes. This allows for more dynamic and responsive scripts.
        link: events/

      - title: PNG Generation
        icon: image
        details: Murex can generate barcodes and images directly from scripts. This can be useful for generating visual representations of data or for creating graphical outputs.
        link: optional/qr

      - title: Multi-threaded
        icon: gears
        details: Murex uses separate threads for built-ins, rather than forking processes like in a traditional POSIX shell. This optimizes resource usage and improves performance.
        link: commands/fid-list

      - title: NOT POSIX compliant!
        icon: recycle
        details: Murex is purposely not POSIX compliant in order to be performant and allow for extended capabilities. This allows for more flexibility and advanced features.
        link: /

copyright: false
footer: GPL Licensed, Copyright © 2017-present Laurence Morgan
---

## 👁‍🗨 Screenshots

<!-- markdownlint-disable -->

<div class="image-preview">
  <img src="/murex-kill-autocomplete.png" />
  <img src="/murex-open-foreach.png" />
  <img src="/murex-spellchecker.png" />
</div>

<style>
  .image-preview {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
  }

  .image-preview > img {
     box-sizing: border-box;
     width: 33.3% !important;
     padding: 9px;
     border-radius: 16px;
  }

  @media (max-width: 719px){
    .image-preview > img {
      width: 50% !important;
    }
  }

  @media (max-width: 419px){
    .image-preview > img {
      width: 100% !important;
    }
  }
</style>

<!-- markdownlint-restore -->

## 📦 Easy to Install

Install `Murex` from your favorite package manager

::: code-tabs#shell

@tab Brew

```bash
brew install murex
```

@tab AUR Package

```bash
https://aur.archlinux.org/packages/murex
```

@tab PKGBuild file

```bash
https://aur.archlinux.org/cgit/aur.git/plain/PKGBUILD?h=murex
```

@tab MacPorts

```bash
sudo port install murex
```

:::

More options are available in the [INSTALL](install/) document

## 🛟 Getting Started

Take your your first steps with `Murex` by following our [Language Tutorial](tour/)
