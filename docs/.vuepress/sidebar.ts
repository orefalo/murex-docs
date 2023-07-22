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
      text: "User Guide",
      icon: "book",
      prefix: "user-guide/",
      children: "structure",
    },
    {
      text: "Operators And Tokens",
      icon: "book",
      prefix: "parser/",
      children: "structure",
    },
    {
      text: "Builtins",
      icon: "building",
      prefix: "commands/",
      children: "structure",
    },
    {
      text: "Optional Builtins",
      icon: "building",
      prefix: "optional/",
      children: "structure",
    },
    {
      text: "Data Types",
      icon: "building",
      prefix: "types/",
      children: "structure",
    },
    {
      text: "Events",
      icon: "building",
      prefix: "events/",
      children: "structure",
    },
    {
      text: "API Reference",
      icon: "building",
      prefix: "apis/",
      children: "structure",
    },
  ],
});
