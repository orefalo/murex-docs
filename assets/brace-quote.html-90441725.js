import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as i,c as d,d as t,b as o,w as r,e,f as l}from"./app-b92fd348.js";const c={},u=l(`<h1 id="brace-quote-tokens-parser-reference" tabindex="-1"><a class="header-anchor" href="#brace-quote-tokens-parser-reference" aria-hidden="true">#</a> Brace Quote (<code>%(</code>, <code>)</code>) Tokens - Parser Reference</h1><blockquote><p>Initiates or terminates a string (variables expanded)</p></blockquote><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2><p>Brace quote is used to initiate and terminate strict strings where variables can be expanded.</p><p>While brace quotes are untraditional compared to your typical string quotations in POSIX shells, brace quotes have one advantage in that the open and close grapheme differ (ie <code>(</code> is a different character to <code>)</code>). This brings benefits when nesting quotes as it saves the developer from having to carefully escape the nested quotation marks just the right number of times.</p><p>Commands cannot be quoted using brace quotes because <code>%(</code> is recognized as its own function.</p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><h4 id="as-a-parameter" tabindex="-1"><a class="header-anchor" href="#as-a-parameter" aria-hidden="true">#</a> As a parameter:</h4><pre><code>name = %(Bob)
</code></pre><h4 id="as-a-function" tabindex="-1"><a class="header-anchor" href="#as-a-function" aria-hidden="true">#</a> As a function:</h4><pre><code>» %(hello world)
hello world
</code></pre><h4 id="nested-quotes" tabindex="-1"><a class="header-anchor" href="#nested-quotes" aria-hidden="true">#</a> Nested quotes:</h4><pre><code>» murex -c %(out: %(Hello &quot;\${murex -c %(out: %(Bob))}&quot;))
Hello &quot;Bob&quot;
</code></pre><p>In this example we are calling Murex to execute code as a command line parameter (the <code>-c</code> flag). That code outputs <code>Hello &quot;...&quot;</code> but inside the double quotes is a name that is generated from a sub-shell. That sub-shell itself runs another murex instance which also executes another command line parameter, this time outputting the name <strong>Bob</strong>.</p><p>The example is contrived but it does demonstrate how you can heavily nest quotes and even mix and match that with other quotation marks if desired.</p><p>This is something that is extremely difficult to write in traditional shells because it would require lots of escaping, and even escaping the escape characters (and so on) the further deep you get in your nest.</p><h2 id="detail" tabindex="-1"><a class="header-anchor" href="#detail" aria-hidden="true">#</a> Detail</h2><h3 id="multi-line-quotes" tabindex="-1"><a class="header-anchor" href="#multi-line-quotes" aria-hidden="true">#</a> Multi-Line Quotes</h3><p>Quotes can also work over multiple lines</p><pre><code>» out: %(foo
» bar)
foo
bar
</code></pre><h3 id="legacy-support" tabindex="-1"><a class="header-anchor" href="#legacy-support" aria-hidden="true">#</a> Legacy Support</h3><p>Version 3.x of Murex introduced support for the <code>%</code> token, before that brace quotes worked without it. However to retain backwards compatibility, the older syntax is still supported...albeit officially classed as &quot;deprecated&quot; and may be removed from a future release.</p><p>Below is a little detail about how the legacy syntax worked:</p><h4 id="deprecated-syntax" tabindex="-1"><a class="header-anchor" href="#deprecated-syntax" aria-hidden="true">#</a> Deprecated Syntax</h4><p>The open brace character is only recognized as a brace quote token if it is the start of a parameter.</p><pre><code>» set: example=(World!)
» out: (Hello $example)
Hello (World!)
</code></pre><h2 id="see-also" tabindex="-1"><a class="header-anchor" href="#see-also" aria-hidden="true">#</a> See Also</h2>`,27),h=t("code",null,"@",-1),p=t("code",null,"{",-1),m=t("code",null,"}",-1),f=t("code",null,'"',-1),b=t("code",null,"'",-1),_=t("code",null,"$",-1),x=t("code",null,"~",-1),g=t("code",null,"(",-1),q=t("code",null,"out",-1),k=t("code",null,"set",-1);function w(y,v){const a=s("RouterLink");return i(),d("div",null,[u,t("ul",null,[t("li",null,[o(a,{to:"/parser/array.html"},{default:r(()=>[e("Array ("),h,e(") Token")]),_:1}),e(": Expand values as an array")]),t("li",null,[o(a,{to:"/user-guide/code-block.html"},{default:r(()=>[e("Code Block Parsing")]),_:1}),e(": Overview of how code blocks are parsed")]),t("li",null,[o(a,{to:"/parser/curly-brace.html"},{default:r(()=>[e("Curly Brace ("),p,e(", "),m,e(") Tokens")]),_:1}),e(": Initiates or terminates a code block")]),t("li",null,[o(a,{to:"/parser/double-quote.html"},{default:r(()=>[e("Double Quote ("),f,e(") Token")]),_:1}),e(": Initiates or terminates a string (variables expanded)")]),t("li",null,[o(a,{to:"/parser/single-quote.html"},{default:r(()=>[e("Single Quote ("),b,e(") Token")]),_:1}),e(": Initiates or terminates a string (variables not expanded)")]),t("li",null,[o(a,{to:"/parser/string.html"},{default:r(()=>[e("String ("),_,e(") Token")]),_:1}),e(": Expand values as a string")]),t("li",null,[o(a,{to:"/parser/tilde.html"},{default:r(()=>[e("Tilde ("),x,e(") Token")]),_:1}),e(": Home directory path variable")]),t("li",null,[o(a,{to:"/commands/brace-quote.html"},{default:r(()=>[g,e(" (brace quote)")]),_:1}),e(": Write a string to the STDOUT without new line")]),t("li",null,[o(a,{to:"/commands/out.html"},{default:r(()=>[q]),_:1}),e(": Print a string to the STDOUT with a trailing new line character")]),t("li",null,[o(a,{to:"/commands/set.html"},{default:r(()=>[k]),_:1}),e(": Define a local variable and set it's value")])])])}const S=n(c,[["render",w],["__file","brace-quote.html.vue"]]);export{S as default};
