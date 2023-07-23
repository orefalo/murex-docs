import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as i,c,d as t,b as a,w as r,e,f as l}from"./app-27c1e3fb.js";const d={},u=l(`<h1 id="create-object-constructor" tabindex="-1"><a class="header-anchor" href="#create-object-constructor" aria-hidden="true">#</a> Create object (<code>%{}</code>) constructor</h1><blockquote><p>Quickly generate objects and maps</p></blockquote><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2><p><code>%{}</code> is a way of defining objects in expressions and statements. Whenever an <code>%{}</code> object is outputted as a string, it will be converted to minified JSON.</p><p>Object elements inside <code>%{}</code> can be new line and/or comma delimited. This allows for compatibility with JSON but without the pain of accidentally invalid comma management breaking JSON parsers. However a colon is still required to separate keys from values.</p><p>Like with YAML, strings in <code>%[]</code> do not need to be quoted unless you need to force numeric or boolean looking values to be stored as strings.</p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p><strong>Object passed as a JSON string:</strong></p><pre><code>» echo %{foo: bar}
{&quot;foo&quot;:&quot;bar&quot;}
</code></pre><p><strong>The <code>%</code> prefix for the nested object is optional:</strong></p><pre><code>» %{foo: bar, baz: [1 2 3]}
{
    &quot;baz&quot;: [
        1,
        2,
        3
    ],
    &quot;foo&quot;: &quot;bar&quot;
}
</code></pre><h2 id="see-also" tabindex="-1"><a class="header-anchor" href="#see-also" aria-hidden="true">#</a> See Also</h2>`,12),p=t("code",null,"%(",-1),h=t("code",null,")",-1),m=t("code",null,"%[]",-1),b=t("code",null,'"',-1),f=t("code",null,"'",-1),_=t("code",null,"expr",-1);function g(x,k){const o=s("RouterLink");return i(),c("div",null,[u,t("ul",null,[t("li",null,[a(o,{to:"/parser/brace-quote.html"},{default:r(()=>[e("Brace Quote ("),p,e(", "),h,e(") Tokens")]),_:1}),e(": Initiates or terminates a string (variables expanded)")]),t("li",null,[a(o,{to:"/parser/create-array.html"},{default:r(()=>[e("Create array ("),m,e(") constructor")]),_:1}),e(": Quickly generate arrays")]),t("li",null,[a(o,{to:"/parser/double-quote.html"},{default:r(()=>[e("Double Quote ("),b,e(") Token")]),_:1}),e(": Initiates or terminates a string (variables expanded)")]),t("li",null,[a(o,{to:"/parser/single-quote.html"},{default:r(()=>[e("Single Quote ("),f,e(") Token")]),_:1}),e(": Initiates or terminates a string (variables not expanded)")]),t("li",null,[a(o,{to:"/mkarray/special.html"},{default:r(()=>[e("Special Ranges")]),_:1}),e(": Create arrays from ranges of dictionary terms (eg weekdays, months, seasons, etc)")]),t("li",null,[a(o,{to:"/commands/expr.html"},{default:r(()=>[_]),_:1}),e(": Expressions: mathematical, string comparisons, logical operators")])])])}const v=n(d,[["render",g],["__file","create-object.html.vue"]]);export{v as default};