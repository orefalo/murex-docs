import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as d,c as l,d as e,b as t,w as s,e as n,f as r}from"./app-2cc7946f.js";const u={},c=r(`<h1 id="summary" tabindex="-1"><a class="header-anchor" href="#summary" aria-hidden="true">#</a> <code>summary</code></h1><blockquote><p>Defines a summary help text for a command</p></blockquote><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2><p><code>summary</code> define help text for a command. This is effectively like a tooltip message that appears, by default, in blue in the interactive shell.</p><p>Normally this text is populated from the <code>man</code> pages or <code>murex-docs</code>, however if neither exist or if you wish to override their text, then you can use <code>summary</code> to define that text.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><p>Define a commands summary</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>summary command description
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Undefine a summary</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>!summary command
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Define a commands summary</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>» summary: foobar &quot;Hello, world!&quot;
» runtime: --summaries -&gt; [ foobar ]
Hello, world!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Undefine a summary</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>» !summary: foobar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="synonyms" tabindex="-1"><a class="header-anchor" href="#synonyms" aria-hidden="true">#</a> Synonyms</h2><ul><li><code>summary</code></li><li><code>!summary</code></li></ul><h2 id="see-also" tabindex="-1"><a class="header-anchor" href="#see-also" aria-hidden="true">#</a> See Also</h2>`,18),m=e("code",null,"bexists",-1),h=e("code",null,"builtins",-1),x=e("code",null,"config",-1),f=e("code",null,"exec",-1),p=e("code",null,"fid-list",-1),_=e("code",null,"murex-docs",-1),b=e("code",null,"murex-update-exe-list",-1),v=e("code",null,"runtime",-1);function y(g,k){const a=o("RouterLink");return d(),l("div",null,[c,e("ul",null,[e("li",null,[t(a,{to:"/commands/bexists.html"},{default:s(()=>[m]),_:1}),n(": Check which builtins exist")]),e("li",null,[t(a,{to:"/commands/runtime.html"},{default:s(()=>[h]),_:1}),n(": Returns runtime information on the internal state of Murex")]),e("li",null,[t(a,{to:"/commands/config.html"},{default:s(()=>[x]),_:1}),n(": Query or define Murex runtime settings")]),e("li",null,[t(a,{to:"/commands/exec.html"},{default:s(()=>[f]),_:1}),n(": Runs an executable")]),e("li",null,[t(a,{to:"/commands/fid-list.html"},{default:s(()=>[p]),_:1}),n(": Lists all running functions within the current Murex session")]),e("li",null,[t(a,{to:"/commands/murex-docs.html"},{default:s(()=>[_]),_:1}),n(": Displays the man pages for Murex builtins")]),e("li",null,[t(a,{to:"/commands/murex-update-exe-list.html"},{default:s(()=>[b]),_:1}),n(": Forces Murex to rescan $PATH looking for executables")]),e("li",null,[t(a,{to:"/commands/runtime.html"},{default:s(()=>[v]),_:1}),n(": Returns runtime information on the internal state of Murex")])])])}const D=i(u,[["render",y],["__file","summary.html.vue"]]);export{D as default};
