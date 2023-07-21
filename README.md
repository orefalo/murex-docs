This is the documentation for murex shell

https://orefalo.github.io/murex-docs/

## Benefits

- free hosting with your own domain name
- based on vuepress (no need to learn it, just edit .md files)
- theme based on [vuepress-theme-hope](https://theme-hope.vuejs.press/) - which comes with tons of features, check it out!
- auto generates robots.txt and sitemap
- better landing page
- local search index
- nice & slick Murex theme!
- auto publishing upon content change

Vuepress hope theme provide many many features - many were disabled

## Important files

- `docs/.vuepress/config.ts` - the main vuepress configuration file, documentation [vuepress-theme-hope](https://theme-hope.vuejs.press/)
- `docs/.vuepress/theme.ts` - theme preferences
- `docs/.vuepress/public` - static content like icons and images
- `docs/.vuepress/navbar.ts` - the configuration of the top level bar
- `docs/.vuepress/sidebar.ts` - the configuration of the side bar
- `docs/README` - commercial landing page
- `docs/quickmenu/README` - the menu that shows in the nav bar

per vuepress conventions, landing pages are called `README.md`. There is typically a `README.md` per content folder which can be enriched with metadata.

In the example below, we are instructing vuepress to name the page 'Blog', with an icon 'custom', the page will be picked up by the search under categoryy Murex

```
---
title: Blog
icon: comment
index: true
category:
  - Murex
---

# Some TITLE
```

## Run local

To run the site locally, use

- `pnpm i`
- `pnpm docs:dev`

## Generate content locally

To generate a static version of the site locally, run

- `pnpm docs:build`
- generates the static `html` at `src/.vuepress/dist`
