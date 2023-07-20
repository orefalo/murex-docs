import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as d,c,a as e,d as o,w as r,b as a,e as i}from"./app-66ffa3c3.js";const l={},h=i(`<h1 id="expr-command-reference" tabindex="-1"><a class="header-anchor" href="#expr-command-reference" aria-hidden="true">#</a> <code>expr</code> - Command Reference</h1><blockquote><p>Expressions: mathematical, string comparisons, logical operators</p></blockquote><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><pre><code>expr: expression -&gt; \`&lt;stdout&gt;\`
</code></pre><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Order of operations:</p><pre><code>» 3 * (3 + 1)
12
</code></pre><p>JSON array:</p><pre><code>» %[apples oranges grapes]
[
    &quot;apples&quot;,
    &quot;oranges&quot;,
    &quot;grapes&quot;
]
</code></pre><h2 id="see-also" tabindex="-1"><a class="header-anchor" href="#see-also" aria-hidden="true">#</a> See Also</h2>`,11),p=e("code",null,"=",-1),u=e("code",null,"let",-1),m=e("code",null,"set",-1);function _(f,x){const t=s("RouterLink");return d(),c("div",null,[h,e("ul",null,[e("li",null,[o(t,{to:"/guide/commands/equ.html"},{default:r(()=>[p,a(" (arithmetic evaluation)")]),_:1}),a(": Evaluate a mathematical function (deprecated)")]),e("li",null,[o(t,{to:"/guide/commands/let.html"},{default:r(()=>[u]),_:1}),a(": Evaluate a mathematical function and assign to variable (deprecated)")]),e("li",null,[o(t,{to:"/guide/commands/set.html"},{default:r(()=>[m]),_:1}),a(": Define a local variable and set it's value")])])])}const q=n(l,[["render",_],["__file","expr.html.vue"]]);export{q as default};
