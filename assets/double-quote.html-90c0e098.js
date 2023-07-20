import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as i,c as s,a as t,d as o,w as n,b as e,e as d}from"./app-66ffa3c3.js";const u={},c=d(`<h1 id="double-quote-token-parser-reference" tabindex="-1"><a class="header-anchor" href="#double-quote-token-parser-reference" aria-hidden="true">#</a> Double Quote (<code>&quot;</code>) Token - Parser Reference</h1><blockquote><p>Initiates or terminates a string (variables expanded)</p></blockquote><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2><p>Double quote is used to initiate and terminate strict strings where variables can be expanded.</p><p>Commands can also be quoted using double quotes (eg where a command might contain a space character in it&#39;s name) however variables cannot be used as part of a command name.</p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><pre><code>» set: example=&quot;World!&quot;

» out: &quot;Hello $example&quot;
Hello World!
</code></pre><h2 id="detail" tabindex="-1"><a class="header-anchor" href="#detail" aria-hidden="true">#</a> Detail</h2><p>Quotes can also work over multiple lines</p><pre><code>» out: &quot;foo
» bar&quot;
foo
bar
</code></pre><h2 id="see-also" tabindex="-1"><a class="header-anchor" href="#see-also" aria-hidden="true">#</a> See Also</h2>`,11),h=t("code",null,"@",-1),_=t("code",null,"%(",-1),m=t("code",null,")",-1),p=t("code",null,"{",-1),b=t("code",null,"}",-1),f=t("code",null,"'",-1),g=t("code",null,"$",-1),x=t("code",null,"~",-1),q=t("code",null,"(",-1),k=t("code",null,"out",-1),v=t("code",null,"set",-1);function T(w,D){const a=r("RouterLink");return i(),s("div",null,[c,t("ul",null,[t("li",null,[o(a,{to:"/guide/parser/array.html"},{default:n(()=>[e("Array ("),h,e(") Token")]),_:1}),e(": Expand values as an array")]),t("li",null,[o(a,{to:"/guide/parser/brace-quote.html"},{default:n(()=>[e("Brace Quote ("),_,e(", "),m,e(") Tokens")]),_:1}),e(": Initiates or terminates a string (variables expanded)")]),t("li",null,[o(a,{to:"/guide/parser/curly-brace.html"},{default:n(()=>[e("Curly Brace ("),p,e(", "),b,e(") Tokens")]),_:1}),e(": Initiates or terminates a code block")]),t("li",null,[o(a,{to:"/guide/parser/single-quote.html"},{default:n(()=>[e("Single Quote ("),f,e(") Token")]),_:1}),e(": Initiates or terminates a string (variables not expanded)")]),t("li",null,[o(a,{to:"/guide/parser/string.html"},{default:n(()=>[e("String ("),g,e(") Token")]),_:1}),e(": Expand values as a string")]),t("li",null,[o(a,{to:"/guide/parser/tilde.html"},{default:n(()=>[e("Tilde ("),x,e(") Token")]),_:1}),e(": Home directory path variable")]),t("li",null,[o(a,{to:"/guide/commands/brace-quote.html"},{default:n(()=>[q,e(" (brace quote)")]),_:1}),e(": Write a string to the STDOUT without new line")]),t("li",null,[o(a,{to:"/guide/commands/out.html"},{default:n(()=>[k]),_:1}),e(": Print a string to the STDOUT with a trailing new line character")]),t("li",null,[o(a,{to:"/guide/commands/set.html"},{default:n(()=>[v]),_:1}),e(": Define a local variable and set it's value")])])])}const B=l(u,[["render",T],["__file","double-quote.html.vue"]]);export{B as default};