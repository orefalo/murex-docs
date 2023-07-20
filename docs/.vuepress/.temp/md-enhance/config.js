import { defineClientConfig } from "@vuepress/client";
import ChartJS from "/Users/orefalo/GitRepositories/murex-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.233_vuepress@2.0.0-beta.66/node_modules/vuepress-plugin-md-enhance/lib/client/components/ChartJS.js";
import CodeTabs from "/Users/orefalo/GitRepositories/murex-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.233_vuepress@2.0.0-beta.66/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs.js";
import { hasGlobalComponent } from "/Users/orefalo/GitRepositories/murex-docs/node_modules/.pnpm/vuepress-shared@2.0.0-beta.233_vuepress@2.0.0-beta.66/node_modules/vuepress-shared/lib/client/index.js";
import { CodeGroup, CodeGroupItem } from "/Users/orefalo/GitRepositories/murex-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.233_vuepress@2.0.0-beta.66/node_modules/vuepress-plugin-md-enhance/lib/client/compact/index.js";
import "/Users/orefalo/GitRepositories/murex-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.233_vuepress@2.0.0-beta.66/node_modules/vuepress-plugin-md-enhance/lib/client/styles/container/index.scss";
import "/Users/orefalo/GitRepositories/murex-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.233_vuepress@2.0.0-beta.66/node_modules/vuepress-plugin-md-enhance/lib/client/styles/figure.scss";
import "/Users/orefalo/GitRepositories/murex-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.233_vuepress@2.0.0-beta.66/node_modules/vuepress-plugin-md-enhance/lib/client/styles/footnote.scss";
import "/Users/orefalo/GitRepositories/murex-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.233_vuepress@2.0.0-beta.66/node_modules/vuepress-plugin-md-enhance/lib/client/styles/image-mark.scss"
import "/Users/orefalo/GitRepositories/murex-docs/node_modules/.pnpm/reveal.js@4.5.0/node_modules/reveal.js/dist/reveal.css";
import Presentation from "/Users/orefalo/GitRepositories/murex-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.233_vuepress@2.0.0-beta.66/node_modules/vuepress-plugin-md-enhance/lib/client/components/Presentation.js";
import { injectRevealConfig } from "/Users/orefalo/GitRepositories/murex-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.233_vuepress@2.0.0-beta.66/node_modules/vuepress-plugin-md-enhance/lib/client/index.js";
import Playground from "/Users/orefalo/GitRepositories/murex-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.233_vuepress@2.0.0-beta.66/node_modules/vuepress-plugin-md-enhance/lib/client/components/Playground.js";
import Tabs from "/Users/orefalo/GitRepositories/murex-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.233_vuepress@2.0.0-beta.66/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs.js";
import "/Users/orefalo/GitRepositories/murex-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.233_vuepress@2.0.0-beta.66/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("ChartJS", ChartJS)
    app.component("CodeTabs", CodeTabs);
    if(!hasGlobalComponent("CodeGroup", app)) app.component("CodeGroup", CodeGroup);
    if(!hasGlobalComponent("CodeGroupItem", app)) app.component("CodeGroupItem", CodeGroupItem);
    injectRevealConfig(app);
    app.component("Presentation", Presentation);
    app.component("Playground", Playground);
    app.component("Tabs", Tabs);
  },
  setup: () => {

  }
});
