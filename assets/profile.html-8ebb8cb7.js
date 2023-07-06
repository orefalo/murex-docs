import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as s,c,a as e,b as o,d as r,w as a,e as n}from"./app-11d32613.js";const u={},h=n(`<h1 id="murex-profile-files-user-guide" tabindex="-1"><a class="header-anchor" href="#murex-profile-files-user-guide" aria-hidden="true">#</a> Murex Profile Files - User Guide</h1><blockquote><p>A breakdown of the different files loaded on start up</p></blockquote><p>Murex has several profile files which are loaded in the following order of<br> execution:</p><ol><li><code>~/.murex_preload</code></li><li><code>~/.murex_modules/*/</code></li><li><code>~/.murex_profile</code></li></ol><h3 id="murex-preload" tabindex="-1"><a class="header-anchor" href="#murex-preload" aria-hidden="true">#</a> <code>.murex_preload</code></h3><p>This file should only used to define any environmental variables that might<br> need to be set before the modules are loaded (eg including directories in<br><code>$PATH</code> if you have anything installed in non-standard locations).</p><p>Most of the time this file will be empty bar the standard warning message:</p><pre><code># This file is loaded before any murex modules. It should only contain
# environmental variables required for the modules to work eg:
#
#     export PATH=...
#
# Any other profile config belongs in your profile script instead:
# /home/$USER/.murex_profile
</code></pre><p>This file is created upon the first run of Murex.</p><h3 id="murex-modules" tabindex="-1"><a class="header-anchor" href="#murex-modules" aria-hidden="true">#</a> <code>.murex_modules/</code></h3><p>Murex&#39;s module directory - where all the modules are installed<br> to. This directory is managed by <code>murex-package</code> builtin.</p><h3 id="murex-profile" tabindex="-1"><a class="header-anchor" href="#murex-profile" aria-hidden="true">#</a> <code>.murex_profile</code></h3><p>This file is comparable to <code>.bash_profile</code>, <code>.bashrc</code> and <code>.zshrc</code> etc. It<br> is the standard place to put all user and/or machine specific config in.</p><p><code>.murex_profile</code> is only read from the users home directory. Unlike bash et<br> al, profiles will not be read from <code>/etc/profile.d</code> nor similar. Modules<br> should be used in its place.</p><h2 id="overriding-the-default-paths-xdg" tabindex="-1"><a class="header-anchor" href="#overriding-the-default-paths-xdg" aria-hidden="true">#</a> Overriding The Default Paths (XDG)</h2>`,15),p=e("br",null,null,-1),f={href:"https://specifications.freedesktop.org/basedir-spec/basedir-spec-latest.html",target:"_blank",rel:"noopener noreferrer"},m=e("br",null,null,-1),_=e("br",null,null,-1),b=e("em",null,"de facto",-1),x=e("br",null,null,-1),g=e("br",null,null,-1),M=e("br",null,null,-1),y=n(`<ul><li><code>MUREX_PRELOAD</code> defines the preload path (and file name)</li><li><code>MUREX_MODULES</code> defines the module path (only)</li><li><code>MUREX_PROFILE</code> defines the profile path (and file name)</li></ul><p>Where <code>MUREX_PRELOAD</code> and/or <code>MUREX_PROFILE</code> are directories rather than<br> absolute file names, the path is appended with the default file names as<br> named above.</p><p>For people who wish to use XDG paths, in many instances you can get away<br> with setting the follow prior to launching Murex (eg in <code>/etc/profile.d</code>):</p><pre><code>MUREX_PRELOAD=&quot;$XDG_CONFIG_HOME/murex/&quot;
MUREX_MODULES=&quot;$XDG_CONFIG_HOME/murex/&quot;
MUREX_PROFILE=&quot;$XDG_CONFIG_HOME/murex/&quot;
</code></pre><p>This, however, depends on <code>$XDG_CONFIG_HOME</code> pointing to a single path rather<br> than an array of paths (like <code>$PATH</code>). In that instance you can still use<br> custom paths in Murex but you might need to get a little more creative in<br> how you define that value.</p><h2 id="see-also" tabindex="-1"><a class="header-anchor" href="#see-also" aria-hidden="true">#</a> See Also</h2>`,6),v=e("br",null,null,-1),E=e("code",null,"export",-1),w=e("br",null,null,-1),k=e("code",null,"murex-package",-1),O=e("br",null,null,-1);function R(D,X){const l=i("ExternalLinkIcon"),t=i("RouterLink");return s(),c("div",null,[h,e("p",null,[o("Some individuals, particularly those running Linux, follow a standard called"),p,e("a",f,[o("XDG Base Directory Specification"),r(l)]),o("."),m,o(" While Murex does not adhere to this standard, instead conforming to the"),_,b,o(" standard defined by the past precedents of previous shells, in"),x,o(" order to offer flexibility for those who do prefer the XDG specification"),g,o(" Murex does support overriding its own default paths via special environmental"),M,o(" variables.")]),y,e("ul",null,[e("li",null,[r(t,{to:"/user-guide/modules.html"},{default:a(()=>[o("Modules and Packages")]),_:1}),o(":"),v,o(" An introduction to Murex modules and packages")]),e("li",null,[r(t,{to:"/commands/export.html"},{default:a(()=>[E]),_:1}),o(":"),w,o(" Define an environmental variable and set it's value")]),e("li",null,[r(t,{to:"/commands/murex-package.html"},{default:a(()=>[k]),_:1}),o(":"),O,o(" Murex's package manager")])])])}const U=d(u,[["render",R],["__file","profile.html.vue"]]);export{U as default};