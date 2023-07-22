import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as d,c as s,d as e,b as t,w as i,e as o,f as u}from"./app-4653c0b0.js";const r={},c=u(`<h1 id="fileref" tabindex="-1"><a class="header-anchor" href="#fileref" aria-hidden="true">#</a> FileRef</h1><blockquote><p>How to track what code was loaded and from where</p></blockquote><p>Every function, event, autocompletion and even variable is stored with which file it was sourced, when it was loaded and what module it was loaded from. This makes it trivial to identify buggy 3rd party code, malicious libraries, or even just bugs in your own profiles and/or modules.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>» runtime: --functions -&gt; [[ /agent/FileRef/ ]]
{
    &quot;Column&quot;: 5,
    &quot;Line&quot;: 5,
    &quot;Source&quot;: {
        &quot;DateTime&quot;: &quot;2021-03-28T09:10:53.572197+01:00&quot;,
        &quot;Filename&quot;: &quot;/home/lmorg/.murex_modules/murex-dev/murex-dev.mx&quot;,
        &quot;Module&quot;: &quot;murex-dev/murex-dev&quot;
    }
}

» runtime --globals -&gt; [[ /DEVOPSBIN/FileRef ]]
{
    &quot;Column&quot;: 1,
    &quot;Line&quot;: 0,
    &quot;Source&quot;: {
        &quot;DateTime&quot;: &quot;2021-03-28T09:10:53.541952+01:00&quot;,
        &quot;Filename&quot;: &quot;/home/lmorg/.murex_modules/devops/global.mx&quot;,
        &quot;Module&quot;: &quot;devops/global&quot;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="module-strings-for-non-module-code" tabindex="-1"><a class="header-anchor" href="#module-strings-for-non-module-code" aria-hidden="true">#</a> Module Strings For Non-Module Code</h3><h4 id="source" tabindex="-1"><a class="header-anchor" href="#source" aria-hidden="true">#</a> Source</h4><p>A common shell idiom is to load shell script files via <code>source</code> / <code>.</code>. When this is done the module string (as seen in the <code>FileRef</code> structures described above) will be <code>source/hash</code> where <strong>hash</strong> will be a unique hash of the file path and load time.</p><p>Thus no two sourced files will share the same module string. Even the same file but modified and sourced twice (before and after the edit) will have different module strings due to the load time being part of the hashed data.</p><h4 id="repl" tabindex="-1"><a class="header-anchor" href="#repl" aria-hidden="true">#</a> REPL</h4><p>Any functions, variables, events, auto-completions, etc created manually, directly, in the interactive shell will have a module string of <code>murex</code> and an empty Filename string.</p><h2 id="see-also" tabindex="-1"><a class="header-anchor" href="#see-also" aria-hidden="true">#</a> See Also</h2>`,11),m=e("code",null,"[[",-1),h=e("code",null,"murex-package",-1),v=e("code",null,"runtime",-1),f=e("code",null,"source",-1);function b(q,p){const n=a("RouterLink");return d(),s("div",null,[c,e("ul",null,[e("li",null,[t(n,{to:"/user-guide/modules.html"},{default:i(()=>[o("Modules and Packages")]),_:1}),o(": An introduction to Murex modules and packages")]),e("li",null,[t(n,{to:"/commands/element.html"},{default:i(()=>[m,o(" (element)")]),_:1}),o(": Outputs an element from a nested structure")]),e("li",null,[t(n,{to:"/commands/murex-package.html"},{default:i(()=>[h]),_:1}),o(": Murex's package manager")]),e("li",null,[t(n,{to:"/commands/runtime.html"},{default:i(()=>[v]),_:1}),o(": Returns runtime information on the internal state of Murex")]),e("li",null,[t(n,{to:"/commands/source.html"},{default:i(()=>[f]),_:1}),o(": Import Murex code from another file of code block")])])])}const x=l(r,[["render",b],["__file","fileref.html.vue"]]);export{x as default};
