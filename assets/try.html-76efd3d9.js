import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as r,c,a as e,d as n,w as i,b as t,e as l}from"./app-66ffa3c3.js";const s={},u=l(`<h1 id="try-command-reference" tabindex="-1"><a class="header-anchor" href="#try-command-reference" aria-hidden="true">#</a> <code>try</code> - Command Reference</h1><blockquote><p>Handles errors inside a block of code</p></blockquote><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2><p><code>try</code> forces a different execution behavior where a failed process at the end of a pipeline will cause the block to terminate regardless of any functions that might follow.</p><p>It&#39;s usage is similar to try blocks in other languages (eg Java) but a closer functional example would be <code>set -e</code> in Bash.</p><p>To maintain concurrency within the pipeline, <code>try</code> will only check the last function in any given pipeline (ie series of functions joined via <code>|</code>, <code>-&gt;</code>, or similar operators). If you need the entire pipeline checked then use <code>trypipe</code>.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><pre><code>try { code-block } -&gt; \`&lt;stdout&gt;\`

\`&lt;stdin&gt;\` -&gt; try { -&gt; code-block } -&gt; \`&lt;stdout&gt;\`
</code></pre><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><pre><code>try {
    out: &quot;Hello, World!&quot; -&gt; grep: &quot;non-existent string&quot;
    out: &quot;This command will be ignored&quot;
}
</code></pre><h2 id="detail" tabindex="-1"><a class="header-anchor" href="#detail" aria-hidden="true">#</a> Detail</h2><p>A failure is determined by:</p><ul><li>Any process that returns a non-zero exit number</li><li>Any process that returns more output via STDERR than it does via STDOUT</li></ul><p>You can see which run mode your functions are executing under via the <code>fid-list</code> command.</p><h2 id="see-also" tabindex="-1"><a class="header-anchor" href="#see-also" aria-hidden="true">#</a> See Also</h2>`,15),h=e("code",null,"catch",-1),p=e("code",null,"try",-1),f=e("code",null,"trypipe",-1),m=e("code",null,"fid-list",-1),_=e("code",null,"if",-1),g=e("code",null,"runmode",-1),y=e("code",null,"switch",-1),b=e("code",null,"trypipe",-1);function x(k,v){const o=d("RouterLink");return r(),c("div",null,[u,e("ul",null,[e("li",null,[n(o,{to:"/guide/user-guide/schedulers.html"},{default:i(()=>[t("Schedulers")]),_:1}),t(": Overview of the different schedulers (or 'run modes') in Murex")]),e("li",null,[n(o,{to:"/guide/commands/catch.html"},{default:i(()=>[h]),_:1}),t(": Handles the exception code raised by "),p,t(" or "),f]),e("li",null,[n(o,{to:"/guide/commands/fid-list.html"},{default:i(()=>[m]),_:1}),t(": Lists all running functions within the current Murex session")]),e("li",null,[n(o,{to:"/guide/commands/if.html"},{default:i(()=>[_]),_:1}),t(": Conditional statement to execute different blocks of code depending on the result of the condition")]),e("li",null,[n(o,{to:"/guide/commands/runmode.html"},{default:i(()=>[g]),_:1}),t(": Alter the scheduler's behaviour at higher scoping level")]),e("li",null,[n(o,{to:"/guide/commands/switch.html"},{default:i(()=>[y]),_:1}),t(": Blocks of cascading conditionals")]),e("li",null,[n(o,{to:"/guide/commands/trypipe.html"},{default:i(()=>[b]),_:1}),t(": Checks state of each function in a pipeline and exits block on error")])])])}const T=a(s,[["render",x],["__file","try.html.vue"]]);export{T as default};