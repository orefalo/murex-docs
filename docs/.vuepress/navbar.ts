import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "Docs",
    icon: "book",
    // prefix: "/guide/",
    children: [
      {
        text: "User Guide",
        icon: "lightbulb",
        // prefix: "user-guide/",
        children: ["user-guide", { text: "...", icon: "ellipsis", link: "#" }],
      },
      {
        text: "Commands",
        icon: "lightbulb",
        prefix: "commands/",
        children: ["ray", { text: "...", icon: "ellipsis", link: "#" }],
      },
    ],
  },
  "/changelog",
  "/blog",
]);
