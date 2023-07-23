import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as s,c as l,d as e,b as n,w as a,e as t,f as r}from"./app-27c1e3fb.js";const c={},u=r(`<h1 id="trypipe" tabindex="-1"><a class="header-anchor" href="#trypipe" aria-hidden="true">#</a> <code>trypipe</code></h1><blockquote><p>Checks state of each function in a pipeline and exits block on error</p></blockquote><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2><p><code>trypipe</code> checks the state of each function and exits the block if any of them fail. Where <code>trypipe</code> differs from regular <code>try</code> blocks is <code>trypipe</code> will check every process along the pipeline as well as the terminating function (which <code>try</code> only validates against). The downside to this is that piped functions can no longer run in parallel.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>trypipe { code-block } -&gt; &lt;stdout&gt;

&lt;stdin&gt; -&gt; trypipe { -&gt; code-block } -&gt; &lt;stdout&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>trypipe {
    out: &quot;Hello, World!&quot; -&gt; grep: &quot;non-existent string&quot; -&gt; cat
    out: &quot;This command will be ignored&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Formated pager (<code>less</code>) where the pager isn&#39;t called if the formatter (<code>pretty</code>) fails (eg input isn&#39;t valid JSON):</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>func pless {
    -&gt; trypipe { -&gt; pretty -&gt; less }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="detail" tabindex="-1"><a class="header-anchor" href="#detail" aria-hidden="true">#</a> Detail</h2><p>A failure is determined by:</p><ul><li>Any process that returns a non-zero exit number</li><li>Any process that returns more output via STDERR than it does via STDOUT</li></ul><p>You can see which run mode your functions are executing under via the <code>fid-list</code> command.</p><h2 id="see-also" tabindex="-1"><a class="header-anchor" href="#see-also" aria-hidden="true">#</a> See Also</h2>`,15),h=e("code",null,"catch",-1),p=e("code",null,"try",-1),m=e("code",null,"trypipe",-1),f=e("code",null,"fid-list",-1),g=e("code",null,"if",-1),v=e("code",null,"runmode",-1),_=e("code",null,"switch",-1),b=e("code",null,"try",-1);function x(y,k){const i=o("RouterLink");return s(),l("div",null,[u,e("ul",null,[e("li",null,[n(i,{to:"/user-guide/schedulers.html"},{default:a(()=>[t("Schedulers")]),_:1}),t(": Overview of the different schedulers (or 'run modes') in Murex")]),e("li",null,[n(i,{to:"/commands/catch.html"},{default:a(()=>[h]),_:1}),t(": Handles the exception code raised by "),p,t(" or "),m]),e("li",null,[n(i,{to:"/commands/fid-list.html"},{default:a(()=>[f]),_:1}),t(": Lists all running functions within the current Murex session")]),e("li",null,[n(i,{to:"/commands/if.html"},{default:a(()=>[g]),_:1}),t(": Conditional statement to execute different blocks of code depending on the result of the condition")]),e("li",null,[n(i,{to:"/commands/runmode.html"},{default:a(()=>[v]),_:1}),t(": Alter the scheduler's behaviour at higher scoping level")]),e("li",null,[n(i,{to:"/commands/switch.html"},{default:a(()=>[_]),_:1}),t(": Blocks of cascading conditionals")]),e("li",null,[n(i,{to:"/commands/try.html"},{default:a(()=>[b]),_:1}),t(": Handles errors inside a block of code")])])])}const S=d(c,[["render",x],["__file","trypipe.html.vue"]]);export{S as default};