import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as l,c as i,a as e,d as r,w as a,b as o,e as s}from"./app-524c2bb5.js";const h={},c=s(`<h1 id="stderr-pipe-token-parser-reference" tabindex="-1"><a class="header-anchor" href="#stderr-pipe-token-parser-reference" aria-hidden="true">#</a> STDERR Pipe (<code>?</code>) Token - Parser Reference</h1><blockquote><p>Pipes STDERR from the left hand command to STDIN of the right hand command</p></blockquote><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2><p>This token swaps the STDOUT and STDERR streams of the left hand command.</p><p>Please note that this token is only effective when it is prefixed by white space.</p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><pre><code>» err Hello, world! ? regexp s/world/Earth/
Hello, Earth!
</code></pre><p>In following example the first command is writing to STDOUT rather than STDERR so <code>Hello, world!</code> doesn&#39;t get pipelined and thus isn&#39;t affected by <code>regexp</code>:</p><pre><code>» out Hello, world! ? regexp s/world/Earth/
Hello, world!
</code></pre><p>In following example the STDERR token isn&#39;t whitespace padded so is treated like any ordinary printable character:</p><pre><code>» err Hello, world!? regexp s/world/Earth/
Hello, world!? regexp s/world/Earth/
</code></pre><h2 id="see-also" tabindex="-1"><a class="header-anchor" href="#see-also" aria-hidden="true">#</a> See Also</h2>`,12),p=e("code",null,"->",-1),m=e("code",null,"=>",-1),u=e("code",null,"|",-1),f=e("code",null,"<>",-1),_=e("code",null,"read-named-pipe",-1),g=e("code",null,"err",-1),T=e("code",null,"out",-1),w=e("code",null,"regexp",-1);function x(S,D){const t=d("RouterLink");return l(),i("div",null,[c,e("ul",null,[e("li",null,[r(t,{to:"/guide/parser/pipe-arrow.html"},{default:a(()=>[o("Arrow Pipe ("),p,o(") Token")]),_:1}),o(": Pipes STDOUT from the left hand command to STDIN of the right hand command")]),e("li",null,[r(t,{to:"/guide/parser/pipe-generic.html"},{default:a(()=>[o("Generic Pipe ("),m,o(") Token")]),_:1}),o(": Pipes a reformatted STDOUT stream from the left hand command to STDIN of the right hand command")]),e("li",null,[r(t,{to:"/guide/parser/pipe-posix.html"},{default:a(()=>[o("POSIX Pipe ("),u,o(") Token")]),_:1}),o(": Pipes STDOUT from the left hand command to STDIN of the right hand command")]),e("li",null,[r(t,{to:"/guide/user-guide/pipeline.html"},{default:a(()=>[o("Pipeline")]),_:1}),o(': Overview of what a "pipeline" is')]),e("li",null,[r(t,{to:"/guide/commands/namedpipe.html"},{default:a(()=>[f,o(" / "),_]),_:1}),o(": Reads from a Murex named pipe")]),e("li",null,[r(t,{to:"/guide/commands/err.html"},{default:a(()=>[g]),_:1}),o(": Print a line to the STDERR")]),e("li",null,[r(t,{to:"/guide/commands/out.html"},{default:a(()=>[T]),_:1}),o(": Print a string to the STDOUT with a trailing new line character")]),e("li",null,[r(t,{to:"/guide/commands/regexp.html"},{default:a(()=>[w]),_:1}),o(": Regexp tools for arrays / lists of strings")])])])}const E=n(h,[["render",x],["__file","pipe-err.html.vue"]]);export{E as default};
