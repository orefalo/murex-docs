import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "Documentations",
    icon: "book",
    // prefix: "/guide/",
    children: [
      {
        text: "Shortcuts",
        icon: "lightbulb",
        prefix: "/",
        children: [
          { text: "install", icon: "ellipsis", link: "install/" },
          "install",
          "user-guide",
          "commands",
          // { text: "...", icon: "ellipsis", link: "#" },
        ],
      },
      //   {
      //     text: "Commands",
      //     icon: "lightbulb",
      //     prefix: "commands/",
      //     children: ["ray", { text: "...", icon: "ellipsis", link: "#" }],
      //   },
    ],
  },
  "/changelog",
  "/blog",
]);
