import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as l,c as s,d as e,b as a,w as n,e as o,f as r}from"./app-27c1e3fb.js";const c={},h=r(`<h1 id="g-autoglob" tabindex="-1"><a class="header-anchor" href="#g-autoglob" aria-hidden="true">#</a> <code>@g</code> (autoglob)</h1><blockquote><p>Command prefix to expand globbing (deprecated)</p></blockquote><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2><p><strong>This feature is now deprecated and only applies to murex version 2:</strong></p><p>By default Murex does not expand globbing (<code>*</code> and <code>?</code> wildcards) instead encouraging the use of <code>g</code> (and similar) inside a subshell. While the aim of this is to promote correctness, it can be a little annoying while working in the interactive shell. For this reason you can prefix any command with <code>@g</code> to enable Bash-like globbing.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><pre><code>@g command ...
</code></pre><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@g echo *
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="detail" tabindex="-1"><a class="header-anchor" href="#detail" aria-hidden="true">#</a> Detail</h2><p>As of Murex <code>2.9</code> and above it is possible to enable automatic globbing in the interactive shell without having to prefix the command with <code>@g</code> by enabling the following <code>config</code> option:</p><pre><code>config: set shell auto-glob true
</code></pre><p>It is enabled by default on from version 3.x onwards (and renamed to <code>expand-glob</code>)</p><h2 id="see-also" tabindex="-1"><a class="header-anchor" href="#see-also" aria-hidden="true">#</a> See Also</h2>`,14),u=e("code",null,"config",-1),g=e("code",null,"f",-1),f=e("code",null,"g",-1),m=e("code",null,"*.txt",-1),p=e("code",null,"rx",-1),b=e("code",null,".*\\\\.txt",-1);function x(_,v){const t=d("RouterLink");return l(),s("div",null,[h,e("ul",null,[e("li",null,[a(t,{to:"/user-guide/profile.html"},{default:n(()=>[o("Murex Profile Files")]),_:1}),o(": A breakdown of the different files loaded on start up")]),e("li",null,[a(t,{to:"/commands/config.html"},{default:n(()=>[u]),_:1}),o(": Query or define Murex runtime settings")]),e("li",null,[a(t,{to:"/commands/f.html"},{default:n(()=>[g]),_:1}),o(": Lists or filters file system objects (eg files)")]),e("li",null,[a(t,{to:"/commands/g.html"},{default:n(()=>[f]),_:1}),o(": Glob pattern matching for file system objects (eg "),m,o(")")]),e("li",null,[a(t,{to:"/commands/rx.html"},{default:n(()=>[p]),_:1}),o(": Regexp pattern matching for file system objects (eg "),b,o(")")])])])}const k=i(c,[["render",x],["__file","autoglob.html.vue"]]);export{k as default};