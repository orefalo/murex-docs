import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as d,c as r,d as e,b as s,w as n,e as t,f as l}from"./app-7f3a7ef5.js";const c={},u=l(`<h1 id="err" tabindex="-1"><a class="header-anchor" href="#err" aria-hidden="true">#</a> <code>err</code></h1><blockquote><p>Print a line to the STDERR</p></blockquote><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2><p>Write parameters to STDERR with a trailing new line character.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><pre><code>err: string to write -&gt; &lt;stderr&gt;
</code></pre><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>» err Hello, World!
Hello, World!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="detail" tabindex="-1"><a class="header-anchor" href="#detail" aria-hidden="true">#</a> Detail</h2><p><code>err</code> outputs as <code>string</code> data-type. This can be changed by casting</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>err { &quot;Code&quot;: 404, &quot;Message&quot;: &quot;Page not found&quot; } ? cast json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>However passing structured data-types along the STDERR stream is not recommended as any other function within your code might also pass error messages along the same stream and thus taint your structured data. This is why Murex does not supply a <code>tout</code> function for STDERR. The recommended solution for passing messages like these which you want separate from your STDOUT stream is to create a new Murex named pipe.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>» pipe: --create messages
» bg { &lt;messages&gt; -&gt; pretty }
» tout: &lt;messages&gt; json { &quot;Code&quot;: 404, &quot;Message&quot;: &quot;Page not found&quot; }
» pipe: --close messages
{
    &quot;Code&quot;: 404,
    &quot;Message&quot;: &quot;Page not found&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ansi-constants" tabindex="-1"><a class="header-anchor" href="#ansi-constants" aria-hidden="true">#</a> ANSI Constants</h3><p><code>err</code> supports ANSI constants.</p><h2 id="see-also" tabindex="-1"><a class="header-anchor" href="#see-also" aria-hidden="true">#</a> See Also</h2>`,16),h=e("code",null,"(",-1),m=e("code",null,"<>",-1),p=e("code",null,"read-named-pipe",-1),g=e("code",null,">>",-1),_=e("code",null,">",-1),f=e("code",null,"bg",-1),v=e("code",null,"cast",-1),b=e("code",null,"out",-1),x=e("code",null,"pipe",-1),q=e("code",null,"pretty",-1),y=e("code",null,"pt",-1),w=e("code",null,"tout",-1);function T(S,D){const a=i("RouterLink");return d(),r("div",null,[u,e("ul",null,[e("li",null,[s(a,{to:"/user-guide/ansi.html"},{default:n(()=>[t("ANSI Constants")]),_:1}),t(": Infixed constants that return ANSI escape sequences")]),e("li",null,[s(a,{to:"/commands/brace-quote.html"},{default:n(()=>[h,t(" (brace quote)")]),_:1}),t(": Write a string to the STDOUT without new line")]),e("li",null,[s(a,{to:"/commands/namedpipe.html"},{default:n(()=>[m,t(" / "),p]),_:1}),t(": Reads from a Murex named pipe")]),e("li",null,[s(a,{to:"/commands/greater-than-greater-than.html"},{default:n(()=>[g,t(" (append file)")]),_:1}),t(": Writes STDIN to disk - appending contents if file already exists")]),e("li",null,[s(a,{to:"/commands/greater-than.html"},{default:n(()=>[_,t(" (truncate file)")]),_:1}),t(": Writes STDIN to disk - overwriting contents if file already exists")]),e("li",null,[s(a,{to:"/commands/bg.html"},{default:n(()=>[f]),_:1}),t(": Run processes in the background")]),e("li",null,[s(a,{to:"/commands/cast.html"},{default:n(()=>[v]),_:1}),t(": Alters the data type of the previous function without altering it's output")]),e("li",null,[s(a,{to:"/commands/out.html"},{default:n(()=>[b]),_:1}),t(": Print a string to the STDOUT with a trailing new line character")]),e("li",null,[s(a,{to:"/commands/pipe.html"},{default:n(()=>[x]),_:1}),t(": Manage Murex named pipes")]),e("li",null,[s(a,{to:"/commands/pretty.html"},{default:n(()=>[q]),_:1}),t(": Prettifies JSON to make it human readable")]),e("li",null,[s(a,{to:"/commands/pt.html"},{default:n(()=>[y]),_:1}),t(": Pipe telemetry. Writes data-types and bytes written")]),e("li",null,[s(a,{to:"/commands/tout.html"},{default:n(()=>[w]),_:1}),t(": Print a string to the STDOUT and set it's data-type")])])])}const N=o(c,[["render",T],["__file","err.html.vue"]]);export{N as default};
