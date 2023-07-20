import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as i,c,a as e,d as o,w as a,b as n,e as s}from"./app-524c2bb5.js";const l={},u=s(`<h1 id="time-command-reference" tabindex="-1"><a class="header-anchor" href="#time-command-reference" aria-hidden="true">#</a> <code>time</code> - Command Reference</h1><blockquote><p>Returns the execution run time of a command or block</p></blockquote><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2><p><code>time</code> is an optional builtin which runs a command or block of code and returns it&#39;s running time.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><pre><code>time: command parameters -&gt; &lt;stderr&gt;

time: { code-block } -&gt; &lt;stderr&gt;
</code></pre><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><pre><code>» time: sleep 5
5.000151513

» time { out &quot;Going to sleep&quot;; sleep 5; out &quot;Waking up&quot; }
Going to sleep
Waking up
5.000240977
</code></pre><h2 id="detail" tabindex="-1"><a class="header-anchor" href="#detail" aria-hidden="true">#</a> Detail</h2><p><code>time</code>&#39;s output is written to STDERR. However any output and errors written by the commands executed by time will also be written to <code>time</code>&#39;s STDOUT and STDERR as usual.</p><h2 id="see-also" tabindex="-1"><a class="header-anchor" href="#see-also" aria-hidden="true">#</a> See Also</h2>`,11),h=e("code",null,"exec",-1),m=e("code",null,"sleep",-1),p=e("code",null,"source",-1);function f(_,x){const t=d("RouterLink");return i(),c("div",null,[u,e("ul",null,[e("li",null,[o(t,{to:"/guide/commands/exec.html"},{default:a(()=>[h]),_:1}),n(": Runs an executable")]),e("li",null,[o(t,{to:"/guide/optional/sleep.html"},{default:a(()=>[m]),_:1}),n(": Suspends the shell for a number of seconds")]),e("li",null,[o(t,{to:"/guide/commands/source.html"},{default:a(()=>[p]),_:1}),n(": Import Murex code from another file of code block")])])])}const k=r(l,[["render",f],["__file","time.html.vue"]]);export{k as default};
