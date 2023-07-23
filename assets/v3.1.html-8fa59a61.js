import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as s,c,d as e,e as t,b as o,w as r,f as d}from"./app-73035245.js";const p={},h=d('<h1 id="what-s-new-in-murex-v3-1-change-log" tabindex="-1"><a class="header-anchor" href="#what-s-new-in-murex-v3-1-change-log" aria-hidden="true">#</a> What&#39;s new in murex v3.1 - Change Log</h1><p>This release includes mostly bug fixes and new experimental features which are opt into. To enable all experimental features, set the environmental variable <code>MUREX_EXPERIMENTAL</code> to any value. Or you can enable specific features individually via `config</p><p>Breaking Changes:</p><ul><li>None</li></ul><p>Features:</p><ul><li><p><code>default</code> statement added to <code>switch</code> (this will deprecate <code>catch</code>, albeit <code>catch</code> will remain supported for compatibility)</p></li><li><p>Option to change start directory: <code>config: set shell start-directory $path</code> (where $path is the working directory you wish to start the shell in)</p></li><li><p><code>onCommandCompletion</code> event no spawns a pty. This allows capturing of stdout while still presenting a tty to the executing process</p></li><li><p>EXPERIMENTAL: preview files. This can be enabled via <code>config: set shell preview-enabled true</code></p></li><li><p>EXPERIMENTAL: preview images. This can be enabled via <code>config: set shell preview-images true</code></p></li><li><p>EXPERIMENTAL: tty buffer. This can be enabled via <code>config: set shell tty-buffer-enabled true</code></p></li><li><p><code>ctrl</code>+<code>r</code> has been tweaked to make it more user friendly</p></li><li><p>Long overdue SIGWINCH signal handler to reflow after terminal resized</p></li><li><p>Lots of improvements to documentation</p></li></ul><p>Non-User Facing / Maintenance Changes:</p><ul><li>none</li></ul><p>Bug Fixes:</p><ul><li><p>re-added <code>columns</code> data-type to fix <code>jobs</code> builtin</p></li><li><p>added bang alternatives to the glob exception list</p></li><li><p>added missing support for <code>&amp;&amp;</code> tokens in expressions</p></li><li><p><code>![]</code> can now produce empty maps</p></li><li><p>fixed regression bug in file pipe mutex</p></li><li><p>fixed missing bounds check in statement parser</p></li></ul><hr><p>Published: 12.02.2023 at 21:22</p><h2 id="see-also" tabindex="-1"><a class="header-anchor" href="#see-also" aria-hidden="true">#</a> See Also</h2>',13),u={href:"/rosetta",target:"_blank",rel:"noopener noreferrer"},m=e("code",null,"switch",-1);function f(g,b){const a=i("ExternalLinkIcon"),n=i("RouterLink");return s(),c("div",null,[h,e("ul",null,[e("li",null,[e("a",u,[t("Rosetta Stone"),o(a)]),t(": A tabulated list of Bashism's and their equivalent Murex syntax")]),e("li",null,[o(n,{to:"/commands/switch.html"},{default:r(()=>[m]),_:1}),t(": Blocks of cascading conditionals")])])])}const v=l(p,[["render",f],["__file","v3.1.html.vue"]]);export{v as default};