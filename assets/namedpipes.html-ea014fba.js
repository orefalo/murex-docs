import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as d,c as l,a as e,b as a,d as t,w as o,e as c}from"./app-524c2bb5.js";const p={},u=e("h1",{id:"murex-named-pipes-user-guide",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#murex-named-pipes-user-guide","aria-hidden":"true"},"#"),a(" Murex Named Pipes - User Guide")],-1),m=e("blockquote",null,[e("p",null,"A detailed breakdown of named pipes in Murex")],-1),h=e("h2",{id:"background",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#background","aria-hidden":"true"},"#"),a(" Background")],-1),f={href:"https://en.wikipedia.org/wiki/Named_pipe",target:"_blank",rel:"noopener noreferrer"},g=c(`<blockquote><p>In computing, a named pipe (also known as a FIFO for its behavior) is an extension to the traditional pipe concept on Unix and Unix-like systems, and is one of the methods of inter-process communication (IPC). The concept is also found in OS/2 and Microsoft Windows, although the semantics differ substantially. A traditional pipe is &quot;unnamed&quot; and lasts only as long as the process. A named pipe, however, can last as long as the system is up, beyond the life of the process. It can be deleted if no longer used. Usually a named pipe appears as a file, and generally processes attach to it for IPC.</p></blockquote><p>Where Murex differs from standard Linux/UNIX is that named pipes are not special files but rather an object or construct within the shell runtime. This allows for more user friendly tooling and syntactic sugar to implemented around it while largely still having the same functionality as a more traditional file based named pipe.</p><h2 id="in-murex" tabindex="-1"><a class="header-anchor" href="#in-murex" aria-hidden="true">#</a> In Murex</h2><p>In Murex, named pipes are described in code as a value inside angle brackets. There are four named pipes pre-configured: <code>&lt;in&gt;</code> (STDIN), <code>&lt;out&gt;</code> (STDOUT), <code>&lt;err&gt;</code> (STDERR), and <code>&lt;null&gt;</code> (/dev/null equivalent).</p><p>You can call a named pipe as either a method, function, or parameter.</p><p><strong>As a method:</strong></p><pre><code>&lt;in&gt; -&gt; command parameter1 parameter2 parameter3
</code></pre><p><strong>As a function:</strong></p><pre><code>command parameter1 parameter2 parameter3 -&gt; &lt;out&gt;
</code></pre><p><strong>As a parameter:</strong></p><pre><code>command &lt;out&gt; &lt;!err&gt; parameter1 parameter2 parameter3
</code></pre><h2 id="see-also" tabindex="-1"><a class="header-anchor" href="#see-also" aria-hidden="true">#</a> See Also</h2>`,12),_=e("code",null,"<>",-1),x=e("code",null,"read-named-pipe",-1),b=e("code",null,"<stdin>",-1),k=e("code",null,"test",-1);function w(I,y){const s=r("ExternalLinkIcon"),n=r("RouterLink");return d(),l("div",null,[u,m,h,e("p",null,[e("a",f,[a("Wikipedia describes"),t(s)]),a(" a named pipe as the following:")]),g,e("ul",null,[e("li",null,[t(n,{to:"/guide/commands/namedpipe.html"},{default:o(()=>[_,a(" / "),x]),_:1}),a(": Reads from a Murex named pipe")]),e("li",null,[t(n,{to:"/guide/commands/stdin.html"},{default:o(()=>[b]),_:1}),a(": Read the STDIN belonging to the parent code block")]),e("li",null,[t(n,{to:"/guide/commands/test.html"},{default:o(()=>[k]),_:1}),a(": Murex's test framework - define tests, run tests and debug shell scripts")])])])}const T=i(p,[["render",w],["__file","namedpipes.html.vue"]]);export{T as default};
