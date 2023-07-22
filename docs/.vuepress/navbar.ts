import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "Documentations",
    icon: "book",
    children: [
      {
        text: "Shortcuts",
        prefix: "/",
        children: [
          "install",
          { text: "Getting Started", link: "tour/", icon: "life-ring" },
          { text: "User Guide", link: "user-guide/", icon: "book" },
          { text: "BuiltIns", link: "commands/", icon: "terminal" },
        ],
      },
    ],
  },
  "/changelog",
  "/blog",
]);
