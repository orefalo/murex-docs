import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as n,c,a as e,d as t,w as a,b as s,e as r}from"./app-524c2bb5.js";const i={},u=r(`<h1 id="base64-optional-command-reference" tabindex="-1"><a class="header-anchor" href="#base64-optional-command-reference" aria-hidden="true">#</a> <code>base64</code> - Optional Command Reference</h1><blockquote><p>Encode or decode a base64 string</p></blockquote><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2><p>An optional builtin to encode or decode a base64 string.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><pre><code>\`&lt;stdin&gt;\` -&gt; base64 -&gt; \`&lt;stdout&gt;\`

\`&lt;stdin&gt;\` -&gt; !base64 -&gt; \`&lt;stdout&gt;\`
</code></pre><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Encode base64 string</p><pre><code>» out: &quot;Hello, World!&quot; -&gt; base64
SGVsbG8sIFdvcmxkIQo=
</code></pre><p>Decode base64 string</p><pre><code>» out: &quot;SGVsbG8sIFdvcmxkIQo=&quot; -&gt; !base64
Hello, World!
</code></pre><h2 id="detail" tabindex="-1"><a class="header-anchor" href="#detail" aria-hidden="true">#</a> Detail</h2><p><code>base64</code> is very simplistic - particularly when compared to its GNU coreutil (for example) counterpart. If you want to use the <code>base64</code> binary on Linux or similar platforms then you will need to launch with the <code>exec</code> builtin:</p><pre><code>» out: &quot;Hello, World!&quot; -&gt; exec: base64
SGVsbG8sIFdvcmxkIQo=

» out: &quot;SGVsbG8sIFdvcmxkIQo=&quot; -&gt; exec: base64 -d
Hello, World!
</code></pre><p>However for simple tasks this builtin will out perform external tools because it doesn&#39;t require the OS fork processes.</p><h2 id="synonyms" tabindex="-1"><a class="header-anchor" href="#synonyms" aria-hidden="true">#</a> Synonyms</h2><ul><li><code>base64</code></li><li><code>!base64</code></li></ul><h2 id="see-also" tabindex="-1"><a class="header-anchor" href="#see-also" aria-hidden="true">#</a> See Also</h2>`,18),h=e("code",null,"!bz2",-1),p=e("code",null,"escape",-1),m=e("code",null,"esccli",-1),b=e("code",null,"eschtml",-1),f=e("code",null,"escurl",-1),_=e("code",null,"gz",-1);function g(x,k){const o=l("RouterLink");return n(),c("div",null,[u,e("ul",null,[e("li",null,[t(o,{to:"/guide/optional/bz2.html"},{default:a(()=>[h]),_:1}),s(": Decompress a bz2 file")]),e("li",null,[t(o,{to:"/guide/commands/escape.html"},{default:a(()=>[p]),_:1}),s(": Escape or unescape input")]),e("li",null,[t(o,{to:"/guide/commands/esccli.html"},{default:a(()=>[m]),_:1}),s(": Escapes an array so output is valid shell code")]),e("li",null,[t(o,{to:"/guide/commands/eschtml.html"},{default:a(()=>[b]),_:1}),s(": Encode or decodes text for HTML")]),e("li",null,[t(o,{to:"/guide/commands/escurl.html"},{default:a(()=>[f]),_:1}),s(": Encode or decodes text for the URL")]),e("li",null,[t(o,{to:"/guide/optional/gz.html"},{default:a(()=>[_]),_:1}),s(": Compress or decompress a gzip file")])])])}const v=d(i,[["render",g],["__file","base64.html.vue"]]);export{v as default};
