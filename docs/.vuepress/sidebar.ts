import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    {
      text: "Murex",
      icon: "house",
      prefix: "",
      link: "",
      children: ["/install", "/changelog", "/blog", "/tour"],
    },
    {
      text: "Docs",
      icon: "book",
      prefix: "guide/",
      children: "structure",
    },
    {
      text: "Builtins",
      icon: "building",
      prefix: "guide/",
      children: "structure",
    },
  ],
});
