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
    link: ./getting_started
    type: primary
  - text: Rosetta Stone
    link: ./rosetta/
  - text: Docs
    link: ./guide/

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
        details: natively manipulate JSON, TOML, YAML, XML, Markdown structures
        link: https://theme-hope.vuejs.press/guide/markdown/tabs.html

      - title: Objects and Maps
        icon: table-columns
        details: use maps, hashed, lists and dictionaries
        link: https://theme-hope.vuejs.press/guide/markdown/tabs.html

      - title: Arrays manipulation
        icon: layer-group
        details: native builtins allows the proper manipulation of arrays
        link: link to GUIDE.arrays-and-maps.html

      - title: Scalar expression
        icon: check-double
        details: the shell parses variables as expression to get around accidental bugs due to spaces
        link: https://theme-hope.vuejs.press/guide/markdown/tabs.html

      - title: Public & Private functions
        icon: unlock-keyhole
        details: private functions restrict scope visibility to nearest module or source file
        link: https://theme-hope.vuejs.press/guide/markdown/tabs.html

      - title: Type inference
        icon: text-height
        details: the shell tries to infer the data type of variable and pipelines it manages
        link: https://theme-hope.vuejs.press/guide/markdown/tabs.html

      - title: Enhanced pipelines & redirection
        icon: puzzle-piece
        details: supports sending typed information to compatible functions via redirection and pipelines
        link: https://theme-hope.vuejs.press/guide/markdown/others.html#link-check

      - title: Type casting and formats
        icon: text-width
        details: change the meta-data about how an information should be read or displayed
        link: https://theme-hope.vuejs.press/guide/markdown/tabs.html

      - title: Inline spellchecking
        icon: spell-check
        details: quickly identify typing spelling errors with underlines text
        link: https://theme-hope.vuejs.press/guide/markdown/container.html

      - title: Smart Autocomplete
        icon: wand-magic-sparkles
        details: use `TAB` to auto-complete commands and parameters
        link: https://theme-hope.vuejs.press/guide/markdown/tabs.html

      - title: Hint text
        icon: comment
        details: the hinttext gives clues to the user without any distractions
        link: https://theme-hope.vuejs.press/guide/markdown/container.html

      - title: Syntax highlighting
        icon: highlighter
        details: in the interactive terminal, syntax is highlighted and style can be piped to the next built-in
        link: https://theme-hope.vuejs.press/guide/markdown/tabs.html

      - title: Syntax Completion
        icon: down-left-and-up-right-to-center
        details: balances and auto-closes brackets and accolades
        link: https://theme-hope.vuejs.press/guide/markdown/tabs.html

      - title: Extension Framework
        icon: building
        details: design yourself or enjoy prebuilt extensions such as `auto-jump` or `starfish` 
        link: https://theme-hope.vuejs.press/guide/markdown/tabs.html

      - title: Built-in Package Manager
        icon: building
        details: 
        link: https://theme-hope.vuejs.press/guide/markdown/tabs.html

      - title: 65 builtins commands
        icon: building
        details: full featured builtins allow fast execution and portability
        link: https://theme-hope.vuejs.press/guide/markdown/tabs.html

      - title: Notifications and Events
        icon: building
        details: events streamline notifications upon files changes, process lifecycle and simple content availability.
        link: https://theme-hope.vuejs.press/guide/markdown/tabs.html

      - title: PNG Generation
        icon: building
        details: Generate barcodes or images diretly from you scripts
        link: https://theme-hope.vuejs.press/guide/markdown/tabs.html

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

More options are available in the [INSTALL](../cookbook/tutorial/README.md) document

## 🛟 Getting Started Tutorial

- [Tutorial](../cookbook/tutorial/README.md)
