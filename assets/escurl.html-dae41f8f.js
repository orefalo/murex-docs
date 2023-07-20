import{_ as c}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as d,c as n,a as e,d as s,w as a,b as o,e as l}from"./app-524c2bb5.js";const u={},i=l('<h1 id="escurl-command-reference" tabindex="-1"><a class="header-anchor" href="#escurl-command-reference" aria-hidden="true">#</a> <code>escurl</code> - Command Reference</h1><blockquote><p>Encode or decodes text for the URL</p></blockquote><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2><p><code>escurl</code> takes input from either STDIN or the parameters and returns the same data, escaped for the URL.</p><p><code>!eschtml</code> does the same process in reverse, where it takes URL escaped data and returns its unescaped counterpart.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><p>Escape</p><pre><code>`&lt;stdin&gt;` -&gt; escurl -&gt; `&lt;stdout&gt;`\n\nescurl string to escape -&gt; `&lt;stdout&gt;`\n</code></pre><p>Unescape</p><pre><code>`&lt;stdin&gt;` -&gt; !escurl -&gt; `&lt;stdout&gt;`\n\n!escurl string to unescape -&gt; `&lt;stdout&gt;`\n</code></pre><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Escape</p><pre><code>» out: &quot;!? &lt;&gt;&quot; -&gt; escurl\n%21%3F%20%3C%3E%0A\n</code></pre><p>Unescape</p><pre><code>out: &#39;%21%3F%20%3C%3E%0A&#39; -&gt; !escurl\n!? &lt;&gt;\n</code></pre><h2 id="synonyms" tabindex="-1"><a class="header-anchor" href="#synonyms" aria-hidden="true">#</a> Synonyms</h2><ul><li><code>escurl</code></li><li><code>!escurl</code></li></ul><h2 id="see-also" tabindex="-1"><a class="header-anchor" href="#see-also" aria-hidden="true">#</a> See Also</h2>',18),h=e("code",null,"escape",-1),p=e("code",null,"esccli",-1),m=e("code",null,"eschtml",-1),_=e("code",null,"get",-1),g=e("code",null,"getfile",-1),f=e("code",null,"post",-1);function x(b,k){const t=r("RouterLink");return d(),n("div",null,[i,e("ul",null,[e("li",null,[s(t,{to:"/guide/commands/escape.html"},{default:a(()=>[h]),_:1}),o(": Escape or unescape input")]),e("li",null,[s(t,{to:"/guide/commands/esccli.html"},{default:a(()=>[p]),_:1}),o(": Escapes an array so output is valid shell code")]),e("li",null,[s(t,{to:"/guide/commands/eschtml.html"},{default:a(()=>[m]),_:1}),o(": Encode or decodes text for HTML")]),e("li",null,[s(t,{to:"/guide/commands/get.html"},{default:a(()=>[_]),_:1}),o(": Makes a standard HTTP request and returns the result as a JSON object")]),e("li",null,[s(t,{to:"/guide/commands/getfile.html"},{default:a(()=>[g]),_:1}),o(": Makes a standard HTTP request and return the contents as Murex-aware data type for passing along Murex pipelines.")]),e("li",null,[s(t,{to:"/guide/commands/post.html"},{default:a(()=>[f]),_:1}),o(": HTTP POST request with a JSON-parsable return")])])])}const y=c(u,[["render",x],["__file","escurl.html.vue"]]);export{y as default};
