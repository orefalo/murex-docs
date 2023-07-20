import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as r,c as d,a as t,d as o,w as n,b as e,e as s}from"./app-524c2bb5.js";const u={},c=s(`<h1 id="tilde-token-parser-reference" tabindex="-1"><a class="header-anchor" href="#tilde-token-parser-reference" aria-hidden="true">#</a> Tilde (<code>~</code>) Token - Parser Reference</h1><blockquote><p>Home directory path variable</p></blockquote><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2><p>The tilde token is used as a lazy reference to the users home directory.</p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><pre><code>» out: ~
/home/bob

» out: ~joe
/home/joe
</code></pre><h2 id="detail" tabindex="-1"><a class="header-anchor" href="#detail" aria-hidden="true">#</a> Detail</h2><p>Tilde can be expanded inside double quotes, brace quotes as well as used naked. But it cannot be expanded inside single quotes.</p><pre><code>» out: ~
/home/bob

» out: &#39;~&#39;
~

» out: &quot;~&quot;
/home/bob

» out: %(~)
/home/bob
</code></pre><h2 id="see-also" tabindex="-1"><a class="header-anchor" href="#see-also" aria-hidden="true">#</a> See Also</h2>`,10),h=t("code",null,"@",-1),_=t("code",null,"%(",-1),m=t("code",null,")",-1),p=t("code",null,'"',-1),b=t("code",null,"'",-1),f=t("code",null,"$",-1),g=t("code",null,"(",-1),x=t("code",null,"ja",-1),k=t("code",null,"out",-1),T=t("code",null,"set",-1);function q(v,y){const a=i("RouterLink");return r(),d("div",null,[c,t("ul",null,[t("li",null,[o(a,{to:"/guide/parser/array.html"},{default:n(()=>[e("Array ("),h,e(") Token")]),_:1}),e(": Expand values as an array")]),t("li",null,[o(a,{to:"/guide/parser/brace-quote.html"},{default:n(()=>[e("Brace Quote ("),_,e(", "),m,e(") Tokens")]),_:1}),e(": Initiates or terminates a string (variables expanded)")]),t("li",null,[o(a,{to:"/guide/parser/double-quote.html"},{default:n(()=>[e("Double Quote ("),p,e(") Token")]),_:1}),e(": Initiates or terminates a string (variables expanded)")]),t("li",null,[o(a,{to:"/guide/parser/single-quote.html"},{default:n(()=>[e("Single Quote ("),b,e(") Token")]),_:1}),e(": Initiates or terminates a string (variables not expanded)")]),t("li",null,[o(a,{to:"/guide/parser/string.html"},{default:n(()=>[e("String ("),f,e(") Token")]),_:1}),e(": Expand values as a string")]),t("li",null,[o(a,{to:"/guide/commands/brace-quote.html"},{default:n(()=>[g,e(" (brace quote)")]),_:1}),e(": Write a string to the STDOUT without new line")]),t("li",null,[o(a,{to:"/guide/commands/ja.html"},{default:n(()=>[x,e(" (mkarray)")]),_:1}),e(": A sophisticated yet simply way to build a JSON array")]),t("li",null,[o(a,{to:"/guide/commands/out.html"},{default:n(()=>[k]),_:1}),e(": Print a string to the STDOUT with a trailing new line character")]),t("li",null,[o(a,{to:"/guide/commands/set.html"},{default:n(()=>[T]),_:1}),e(": Define a local variable and set it's value")])])])}const D=l(u,[["render",q],["__file","tilde.html.vue"]]);export{D as default};
