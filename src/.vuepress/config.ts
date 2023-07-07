import { defineUserConfig, Page } from "vuepress";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import theme from "./theme.js";

const environment = process.env.NODE_ENV;

const config = {
  base: "/murex-docs/",
  lang: "en-US",
  title: "",
  description: "Murex, a typed, content aware shell from the 2020s",
  theme,
  plugins: [
    searchProPlugin({
      // index all contents
      indexContent: true,
      // add supports for category and tags
      customFields: [
        {
          //@ts-ignore
          getter: (page) => page.frontmatter.category,
          formatter: "Category: $content",
        },
        {
          //@ts-ignore
          getter: (page) => page.frontmatter.tag,
          formatter: "Tag: $content",
        },
      ],
    }),
  ],
};

if (environment === "DEV") {
  config.base = "/";
}
//@ts-ignore
export default defineUserConfig(config);
