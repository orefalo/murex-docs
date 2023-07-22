import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as d,c as o,d as e,b as s,w as n,e as a,f as c}from"./app-7f3a7ef5.js";const r={},u=c(`<h1 id="esccli" tabindex="-1"><a class="header-anchor" href="#esccli" aria-hidden="true">#</a> <code>esccli</code></h1><blockquote><p>Escapes an array so output is valid shell code</p></blockquote><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2><p><code>esccli</code> takes an array and escapes any characters that might cause problems when pasted back into the terminal. Typically you&#39;d want to use this against command parameters.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;stdin&gt; -&gt; esccli -&gt; &lt;stdout&gt;

esccli @array -&gt; &lt;stdout&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>As a method</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>» alias foobar=out &#39;foo$b@r&#39;
» alias -&gt; [foobar]
[
    &quot;out&quot;,
    &quot;foo$b@r&quot;
]
» alias -&gt; [foobar] -&gt; esccli
out foo\\$b\\@r
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>As a function</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>» alias -&gt; [foobar] -&gt; set: fb
» $fb
[&quot;out&quot;,&quot;foo$b@r&quot;]
» esccli: @fb
out foo\\$b\\@r
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="see-also" tabindex="-1"><a class="header-anchor" href="#see-also" aria-hidden="true">#</a> See Also</h2>`,12),m=e("code",null,"[",-1),h=e("code",null,"alias",-1),v=e("code",null,"escape",-1),b=e("code",null,"eschtml",-1),p=e("code",null,"escurl",-1),f=e("code",null,"out",-1);function _(g,x){const t=l("RouterLink");return d(),o("div",null,[u,e("ul",null,[e("li",null,[s(t,{to:"/commands/index2.html"},{default:n(()=>[m,a(" (index)")]),_:1}),a(": Outputs an element from an array, map or table")]),e("li",null,[s(t,{to:"/commands/alias.html"},{default:n(()=>[h]),_:1}),a(": Create an alias for a command")]),e("li",null,[s(t,{to:"/commands/escape.html"},{default:n(()=>[v]),_:1}),a(": Escape or unescape input")]),e("li",null,[s(t,{to:"/commands/eschtml.html"},{default:n(()=>[b]),_:1}),a(": Encode or decodes text for HTML")]),e("li",null,[s(t,{to:"/commands/escurl.html"},{default:n(()=>[p]),_:1}),a(": Encode or decodes text for the URL")]),e("li",null,[s(t,{to:"/commands/out.html"},{default:n(()=>[f]),_:1}),a(": Print a string to the STDOUT with a trailing new line character")])])])}const y=i(r,[["render",_],["__file","esccli.html.vue"]]);export{y as default};
