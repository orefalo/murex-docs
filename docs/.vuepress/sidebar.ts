import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    {
      text: "Murex",
      icon: "house",
      prefix: "",
      link: "",
      children: ["/install", "/changelog", "/blog", "/tour"],
      collapsible: true,
    },
    {
      text: "User Guide",
      icon: "book",
      prefix: "user-guide/",
      children: "structure", 
      collapsible: true,
    },
    {
      text: "Operators And Tokens",
      icon: "book",
      prefix: "parser/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "Builtins",
      icon: "building",
      prefix: "commands/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "Optional Builtins",
      icon: "building",
      prefix: "optional/",
      children: "structure",
        collapsible: true,
    },
    {
      text: "Data Types",
      icon: "building",
      prefix: "types/",
      children: "structure",
      collapsible: true,

    },
    {
      text: "Events",
      icon: "building",
      prefix: "events/",
      children: "structure",
      collapsible: true,

    },
    {
      text: "API Reference",
      icon: "building",
      prefix: "apis/",
      children: "structure",
        collapsible: true,
    },
  ],
});
