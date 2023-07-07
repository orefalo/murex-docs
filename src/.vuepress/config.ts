import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

const environment = process.env.NODE_ENV;

let config;

if (environment === "DEV") {
  config = {
    base: "/",
    lang: "en-US",
    title: "",
    description: "Murex, a typed, content aware shell from the 2020s",
    theme,
  };
} else {
  config = {
    base: "/murex-docs/",
    lang: "en-US",
    title: "",
    description: "Murex, a typed, content aware shell from the 2020s",
    theme,
  };
}

export default defineUserConfig(config);
