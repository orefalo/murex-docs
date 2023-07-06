import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/murex-docs/",
  lang: "en-US",
  title: "",
  description: "Murex, a typed, content aware shell from the 2020s",
  theme,
});
