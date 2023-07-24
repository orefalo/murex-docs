import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as r,c as l,d as e,b as n,w as t,e as o,f as d}from"./app-d5c3dbe7.js";const c={},u=d(`<h1 id="version" tabindex="-1"><a class="header-anchor" href="#version" aria-hidden="true">#</a> <code>version</code></h1><blockquote><p>Get Murex version</p></blockquote><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2><p>Returns Murex version number</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><pre><code>version [ flags ] -&gt; &lt;stdout&gt;
</code></pre><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Ran without any parameters</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>» version
murex: 0.51.1200 BETA
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Ran with the <code>--no-app-name</code> parameter</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>» version --no-app-name
0.51.1200 BETA
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Ran with the <code>--short</code> parameter</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>» version --short
0.51
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="flags" tabindex="-1"><a class="header-anchor" href="#flags" aria-hidden="true">#</a> Flags</h2><ul><li><code>--no-app-name</code> Returns full version string minus app name</li><li><code>--short</code> Returns only the major and minor version as a <code>num</code> data-type</li></ul><h2 id="see-also" tabindex="-1"><a class="header-anchor" href="#see-also" aria-hidden="true">#</a> See Also</h2>`,16),m=e("code",null,"args",-1),h=e("code",null,"autocomplete",-1),p=e("code",null,"config",-1),f=e("code",null,"function",-1),v=e("code",null,"murex-parser",-1),_=e("code",null,"private",-1),x=e("code",null,"runtime",-1),g=e("code",null,"source",-1);function b(k,R){const a=s("RouterLink");return r(),l("div",null,[u,e("ul",null,[e("li",null,[n(a,{to:"/commands/args.html"},{default:t(()=>[m]),_:1}),o(": Command line flag parser for Murex shell scripting")]),e("li",null,[n(a,{to:"/commands/autocomplete.html"},{default:t(()=>[h]),_:1}),o(": Set definitions for tab-completion in the command line")]),e("li",null,[n(a,{to:"/commands/config.html"},{default:t(()=>[p]),_:1}),o(": Query or define Murex runtime settings")]),e("li",null,[n(a,{to:"/commands/function.html"},{default:t(()=>[f]),_:1}),o(": Define a function block")]),e("li",null,[n(a,{to:"/commands/murex-parser.html"},{default:t(()=>[v]),_:1}),o(": Runs the Murex parser against a block of code")]),e("li",null,[n(a,{to:"/commands/private.html"},{default:t(()=>[_]),_:1}),o(": Define a private function block")]),e("li",null,[n(a,{to:"/commands/runtime.html"},{default:t(()=>[x]),_:1}),o(": Returns runtime information on the internal state of Murex")]),e("li",null,[n(a,{to:"/commands/source.html"},{default:t(()=>[g]),_:1}),o(": Import Murex code from another file of code block")])])])}const B=i(c,[["render",b],["__file","version.html.vue"]]);export{B as default};