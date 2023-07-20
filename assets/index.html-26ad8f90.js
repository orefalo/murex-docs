import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as d,c as u,a as e,d as t,w as a,b as o,e as i}from"./app-66ffa3c3.js";const c={},h=i('<h1 id="optional-command-reference" tabindex="-1"><a class="header-anchor" href="#optional-command-reference" aria-hidden="true">#</a> Optional Command Reference</h1><p>This section is a glossary of Murex optional builtins.</p><p>These builtins likely wont be compiled with Murex unless you specifically request them to be. This might be because they duplicate functionality already available on POSIX systems or introduce more complex dependencies. It might also be because that specific builtin is in an alpha stage and thus not ready to ship with Murex.</p><h2 id="other-reference-material" tabindex="-1"><a class="header-anchor" href="#other-reference-material" aria-hidden="true">#</a> Other Reference Material</h2><h3 id="language-guides" tabindex="-1"><a class="header-anchor" href="#language-guides" aria-hidden="true">#</a> Language Guides</h3>',5),p=e("h3",{id:"murex-s-source-code",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#murex-s-source-code","aria-hidden":"true"},"#"),o(" Murex's Source Code")],-1),m={href:"https://github.com/lmorg/murex/tree/master/builtins/optional",target:"_blank",rel:"noopener noreferrer"},f=i(`<h3 id="shell-commands-for-querying-builtins" tabindex="-1"><a class="header-anchor" href="#shell-commands-for-querying-builtins" aria-hidden="true">#</a> Shell Commands For Querying Builtins</h3><p>From the shell itself: run <code>builtins</code> to list the builtin command.</p><p>If you require a manual on any of those commands, you can run <code>murex-docs</code> to return the same markdown-formatted document as those listed below. eg</p><pre><code>murex-docs trypipe
</code></pre><h2 id="pages" tabindex="-1"><a class="header-anchor" href="#pages" aria-hidden="true">#</a> Pages</h2>`,5),_=e("code",null,"!bz2",-1),g=e("code",null,"base64",-1),b=e("code",null,"gz",-1),x=e("code",null,"qr",-1),y=e("code",null,"select",-1),k=e("code",null,"sleep",-1);function w(C,I){const n=l("RouterLink"),s=l("ExternalLinkIcon");return d(),u("div",null,[h,e("ol",null,[e("li",null,[e("p",null,[t(n,{to:"/guide/optional/GUIDE.builtin-functions.html"},{default:a(()=>[o("Core Builtins")]),_:1}),o(", for docs on the core builtins.")])]),e("li",null,[e("p",null,[t(n,{to:"/guide/optional/tour.html"},{default:a(()=>[o("Language Tour")]),_:1}),o(", which is an introduction into the Murex language.")])]),e("li",null,[e("p",null,[t(n,{to:"/guide/optional/user-guide/rosetta-stone.html"},{default:a(()=>[o("Rosetta Stone")]),_:1}),o(", which is a reference table comparing Bash syntax to Murex's.")])])]),p,e("p",null,[o("The source for each of these builtins can be found on "),e("a",m,[o("Github"),t(s)]),o(".")]),f,e("ul",null,[e("li",null,[t(n,{to:"/guide/optional/optional/bz2.html"},{default:a(()=>[_]),_:1}),o(": Decompress a bz2 file")]),e("li",null,[t(n,{to:"/guide/optional/optional/base64.html"},{default:a(()=>[g]),_:1}),o(": Encode or decode a base64 string")]),e("li",null,[t(n,{to:"/guide/optional/optional/gz.html"},{default:a(()=>[b]),_:1}),o(": Compress or decompress a gzip file")]),e("li",null,[t(n,{to:"/guide/optional/optional/qr.html"},{default:a(()=>[x]),_:1}),o(": Creates a QR code from STDIN")]),e("li",null,[t(n,{to:"/guide/optional/optional/select.html"},{default:a(()=>[y]),_:1}),o(": Inlining SQL into shell pipelines")]),e("li",null,[t(n,{to:"/guide/optional/optional/sleep.html"},{default:a(()=>[k]),_:1}),o(": Suspends the shell for a number of seconds")])])])}const M=r(c,[["render",w],["__file","index.html.vue"]]);export{M as default};