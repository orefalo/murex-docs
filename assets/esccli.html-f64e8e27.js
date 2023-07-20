import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as n,o as l,c as r,a as e,d as o,w as c,b as a,e as d}from"./app-5c3d1e58.js";const i={},u=d(`<h1 id="esccli-command-reference" tabindex="-1"><a class="header-anchor" href="#esccli-command-reference" aria-hidden="true">#</a> <code>esccli</code> - Command Reference</h1><blockquote><p>Escapes an array so output is valid shell code</p></blockquote><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2><p><code>esccli</code> takes an array and escapes any characters that might cause problems when pasted back into the terminal. Typically you&#39;d want to use this against command parameters.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><pre><code>\`&lt;stdin&gt;\` -&gt; esccli -&gt; \`&lt;stdout&gt;\`

esccli @array -&gt; \`&lt;stdout&gt;\`
</code></pre><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>As a method</p><pre><code>» alias foobar=out &#39;foo$b@r&#39;
» alias -&gt; [foobar]
[
    &quot;out&quot;,
    &quot;foo$b@r&quot;
]
» alias -&gt; [foobar] -&gt; esccli
out foo\\$b\\@r
</code></pre><p>As a function</p><pre><code>» alias -&gt; [foobar] -&gt; set: fb
» $fb
[&quot;out&quot;,&quot;foo$b@r&quot;]
» esccli: @fb
out foo\\$b\\@r
</code></pre><h2 id="see-also" tabindex="-1"><a class="header-anchor" href="#see-also" aria-hidden="true">#</a> See Also</h2>`,12),h=e("code",null,"[",-1),m=e("code",null,"alias",-1),p=e("code",null,"escape",-1),f=e("code",null,"eschtml",-1),_=e("code",null,"escurl",-1),g=e("code",null,"out",-1);function b(x,q){const t=n("RouterLink");return l(),r("div",null,[u,e("ul",null,[e("li",null,[o(t,{to:"/guide/commands/"},{default:c(()=>[h,a(" (index)")]),_:1}),a(": Outputs an element from an array, map or table")]),e("li",null,[o(t,{to:"/guide/commands/alias.html"},{default:c(()=>[m]),_:1}),a(": Create an alias for a command")]),e("li",null,[o(t,{to:"/guide/commands/escape.html"},{default:c(()=>[p]),_:1}),a(": Escape or unescape input")]),e("li",null,[o(t,{to:"/guide/commands/eschtml.html"},{default:c(()=>[f]),_:1}),a(": Encode or decodes text for HTML")]),e("li",null,[o(t,{to:"/guide/commands/escurl.html"},{default:c(()=>[_]),_:1}),a(": Encode or decodes text for the URL")]),e("li",null,[o(t,{to:"/guide/commands/out.html"},{default:c(()=>[g]),_:1}),a(": Print a string to the STDOUT with a trailing new line character")])])])}const w=s(i,[["render",b],["__file","esccli.html.vue"]]);export{w as default};
