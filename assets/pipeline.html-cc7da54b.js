import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as d,c as l,d as t,e,b as i,w as a,f as c}from"./app-73035245.js";const p={},h=c(`<h1 id="pipeline" tabindex="-1"><a class="header-anchor" href="#pipeline" aria-hidden="true">#</a> Pipeline</h1><blockquote><p>Overview of what a &quot;pipeline&quot; is</p></blockquote><p>In the Murex docs you&#39;ll often see the term &quot;pipeline&quot;. This refers to any commands sequenced together.</p><p>A pipeline can be joined via any pipe token (eg <code>|</code>, <code>-&gt;</code>, <code>=&gt;</code>, <code>?</code>). But, for the sake of documentation, a pipeline might even be a solitary command.</p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Typical Murex pipeline:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>open: example.json -&gt; [[ /node/0 ]]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Example of a single command pipeline:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>top
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Pipeline you might see in Bash / Zsh (this is also valid in Murex):</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cat names.txt | sort | uniq
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Pipeline filtering out a specific error from <code>example-cmd</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>example-cmd ? grep: &quot;File not found&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="detail" tabindex="-1"><a class="header-anchor" href="#detail" aria-hidden="true">#</a> Detail</h2><p>A pipeline isn&#39;t a Murex specific construct but rather something inherited from Unix. Where Murex differs is that it can support sending typed information to compatible functions (unlike standard Unix pipes which are dumb-byte streams).</p>`,15),u={href:"https://en.wikipedia.org/wiki/Pipeline_(Unix)",target:"_blank",rel:"noopener noreferrer"},m=t("blockquote",null,[t("p",null,`In Unix-like computer operating systems, a pipeline is a mechanism for inter-process communication using message passing. A pipeline is a set of processes chained together by their standard streams, so that the output text of each process (stdout) is passed directly as input (stdin) to the next one. The second process is started as the first process is still executing, and they are executed concurrently. The concept of pipelines was championed by Douglas McIlroy at Unix's ancestral home of Bell Labs, during the development of Unix, shaping its toolbox philosophy. It is named by analogy to a physical pipeline. A key feature of these pipelines is their "hiding of internals" (Ritchie & Thompson, 1974). This in turn allows for more clarity and simplicity in the system.`)],-1),f=t("h2",{id:"named-pipes",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#named-pipes","aria-hidden":"true"},"#"),e(" Named Pipes")],-1),g=t("p",null,[e('The drawback with pipes is that it assumes each command runs sequentially one after another and that everything fits neatly into the concept of "output" and "errors". The moment you need to use background ('),t("code",null,"bg"),e(") processes, do anything more specific with data streams (even if just ignore them entirely), or use more than one data stream, then this concept breaks down. This is where named pipes come to the rescue. Named pipes are out of scope for this specific document but you can read more on them in links the links below.")],-1),x=t("h2",{id:"see-also",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#see-also","aria-hidden":"true"},"#"),e(" See Also")],-1),_=t("code",null,"->",-1),b=t("code",null,"=>",-1),v=t("code",null,"|",-1),y=t("code",null,"?",-1),k=t("code",null,"bg",-1);function T(w,P){const s=o("ExternalLinkIcon"),n=o("RouterLink");return d(),l("div",null,[h,t("p",null,[e("Wikipedia has a page on "),t("a",u,[e("Pipeline (Unix)"),i(s)]),e(":")]),m,f,g,x,t("ul",null,[t("li",null,[i(n,{to:"/parser/pipe-arrow.html"},{default:a(()=>[e("Arrow Pipe ("),_,e(") Token")]),_:1}),e(": Pipes STDOUT from the left hand command to STDIN of the right hand command")]),t("li",null,[i(n,{to:"/user-guide/bang-prefix.html"},{default:a(()=>[e("Bang Prefix")]),_:1}),e(": Bang prefixing to reverse default actions")]),t("li",null,[i(n,{to:"/parser/pipe-generic.html"},{default:a(()=>[e("Generic Pipe ("),b,e(") Token")]),_:1}),e(": Pipes a reformatted STDOUT stream from the left hand command to STDIN of the right hand command")]),t("li",null,[i(n,{to:"/parser/pipe-posix.html"},{default:a(()=>[e("POSIX Pipe ("),v,e(") Token")]),_:1}),e(": Pipes STDOUT from the left hand command to STDIN of the right hand command")]),t("li",null,[i(n,{to:"/parser/pipe-err.html"},{default:a(()=>[e("STDERR Pipe ("),y,e(") Token")]),_:1}),e(": Pipes STDERR from the left hand command to STDIN of the right hand command")]),t("li",null,[i(n,{to:"/user-guide/schedulers.html"},{default:a(()=>[e("Schedulers")]),_:1}),e(": Overview of the different schedulers (or 'run modes') in Murex")]),t("li",null,[i(n,{to:"/commands/bg.html"},{default:a(()=>[k]),_:1}),e(": Run processes in the background")])])])}const D=r(p,[["render",T],["__file","pipeline.html.vue"]]);export{D as default};