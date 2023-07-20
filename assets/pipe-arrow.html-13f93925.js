import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as l,c as d,a as e,d as r,w as a,b as o,e as s}from"./app-66ffa3c3.js";const c={},h=s(`<h1 id="arrow-pipe-token-parser-reference" tabindex="-1"><a class="header-anchor" href="#arrow-pipe-token-parser-reference" aria-hidden="true">#</a> Arrow Pipe (<code>-&gt;</code>) Token - Parser Reference</h1><blockquote><p>Pipes STDOUT from the left hand command to STDIN of the right hand command</p></blockquote><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2><p>This token behaves much like pipe would in Bash or similar shells. It passes STDOUT along the pipeline while merging STDERR stream with the parents STDERR stream.</p><p><code>-&gt;</code> differs from <code>|</code> in the interactive terminal where it produces different autocompletion suggestion. It returns a list of &quot;methods&quot;. That is, commands that are known to support the output type of the previous command. <code>-&gt;</code> helps with the discovery of commandline tools.</p><p>In shell scripts, <code>-&gt;</code> and <code>|</code> can be used interchangeably.</p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><pre><code>» out: Hello, world! -&gt; regexp: s/world/Earth/
Hello, Earth!

» out: Hello, world!-&gt;regexp: s/world/Earth/
Hello, Earth!
</code></pre><p>In following example the first command is writing to STDERR rather than STDOUT so <code>Hello, world!</code> doesn&#39;t get pipelined and thus isn&#39;t affected by <code>regexp</code>:</p><pre><code>» err: Hello, world! -&gt; regexp: s/world/Earth/
Hello, world!
</code></pre><h2 id="see-also" tabindex="-1"><a class="header-anchor" href="#see-also" aria-hidden="true">#</a> See Also</h2>`,11),p=e("code",null,"=>",-1),m=e("code",null,"|",-1),u=e("code",null,"?",-1),f=e("code",null,"<>",-1),g=e("code",null,"read-named-pipe",-1),_=e("code",null,"err",-1),T=e("code",null,"out",-1),w=e("code",null,"regexp",-1);function x(S,D){const t=i("RouterLink");return l(),d("div",null,[h,e("ul",null,[e("li",null,[r(t,{to:"/guide/parser/pipe-generic.html"},{default:a(()=>[o("Generic Pipe ("),p,o(") Token")]),_:1}),o(": Pipes a reformatted STDOUT stream from the left hand command to STDIN of the right hand command")]),e("li",null,[r(t,{to:"/guide/parser/pipe-posix.html"},{default:a(()=>[o("POSIX Pipe ("),m,o(") Token")]),_:1}),o(": Pipes STDOUT from the left hand command to STDIN of the right hand command")]),e("li",null,[r(t,{to:"/guide/user-guide/pipeline.html"},{default:a(()=>[o("Pipeline")]),_:1}),o(': Overview of what a "pipeline" is')]),e("li",null,[r(t,{to:"/guide/parser/pipe-err.html"},{default:a(()=>[o("STDERR Pipe ("),u,o(") Token")]),_:1}),o(": Pipes STDERR from the left hand command to STDIN of the right hand command")]),e("li",null,[r(t,{to:"/guide/commands/namedpipe.html"},{default:a(()=>[f,o(" / "),g]),_:1}),o(": Reads from a Murex named pipe")]),e("li",null,[r(t,{to:"/guide/commands/err.html"},{default:a(()=>[_]),_:1}),o(": Print a line to the STDERR")]),e("li",null,[r(t,{to:"/guide/commands/out.html"},{default:a(()=>[T]),_:1}),o(": Print a string to the STDOUT with a trailing new line character")]),e("li",null,[r(t,{to:"/guide/commands/regexp.html"},{default:a(()=>[w]),_:1}),o(": Regexp tools for arrays / lists of strings")])])])}const E=n(c,[["render",x],["__file","pipe-arrow.html.vue"]]);export{E as default};