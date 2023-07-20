import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as l,c,a as e,b as n,d as t,w as a,e as d}from"./app-524c2bb5.js";const h={},p=d(`<h1 id="what-s-new-in-murex-v2-2-change-log" tabindex="-1"><a class="header-anchor" href="#what-s-new-in-murex-v2-2-change-log" aria-hidden="true">#</a> What&#39;s new in murex v2.2 - Change Log</h1><p>This is mainly a bug fix release but it does include one breaking change for <code>config</code>. Please read for details.</p><p>This release sees new optional features plus major bug fixes to the existing code base:</p><h3 id="breaking-changes" tabindex="-1"><a class="header-anchor" href="#breaking-changes" aria-hidden="true">#</a> Breaking Changes:</h3><p>One <code>config</code> <strong>shell</strong> key has changed it&#39;s name:</p><ul><li>spellcheck-block -&gt; <code>spellcheck-func</code></li></ul><p>This is to bring spellcheck inline with other keys that contain executable code.</p><p><strong>This change might break some of your existing profile config!</strong></p><h3 id="user-facing-changes" tabindex="-1"><a class="header-anchor" href="#user-facing-changes" aria-hidden="true">#</a> User Facing Changes:</h3><ul><li><p>Windows coreutils no longer returns exit code of 13 for aliases</p></li><li><p>Fixed regression bug in fg (added stronger testing here to prevent future regressions)</p></li><li><p>Generic data type, <code>*</code>, now uses <code>tabwriter</code> to align columns</p></li><li><p>Spellchecker error handling tweaked to be more user friendly</p></li><li><p>Environmental variables can been created per command:</p><pre><code>&lt;pre&gt;&lt;code&gt;» env &lt;env:foo=bar&gt; | grep foo
foo=bar&lt;/code&gt;&lt;/pre&gt;
</code></pre></li><li><p>stdstream.SetDataType() only works on first call -- ignored thereafter. This will impact pipes that are written to by many processes but results in more predictable code due possible timing errors where different processes are overwriting the stream data type</p></li><li><p>stdstream.SetDataType() only works on first call -- ignored thereafter. This will impact pipes that are written to by many processes but results in more predictable code due possible timing errors where different processes are overwriting the stream data type</p></li></ul><h3 id="non-user-facing-maintenance-changes" tabindex="-1"><a class="header-anchor" href="#non-user-facing-maintenance-changes" aria-hidden="true">#</a> Non-User Facing / Maintenance Changes</h3>`,11),u=e("li",null,[e("p",null,[n("All dependencies have been updated, pinned and the "),e("code",null,"vendors"),n(" directory rebuilt")])],-1),g={href:"https://goreportcard.com/report/github.com/lmorg/murex",target:"_blank",rel:"noopener noreferrer"},m=e("li",null,[e("p",null,"Some internal API changes that have no UI/UX ramifications but makes the code more maintainable")],-1),f=e("li",null,[e("p",null,"Lots more unit tests added")],-1),_=e("li",null,[e("p",null,"Lots of code rewritten to avoid potential data races")],-1),b=e("hr",null,null,-1),k=e("p",null,"Published: 21.06.2021 at 21:51",-1),w=e("h2",{id:"see-also",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#see-also","aria-hidden":"true"},"#"),n(" See Also")],-1),x=e("code",null,"*",-1),v=e("code",null,"fg",-1);function y(T,L){const i=o("ExternalLinkIcon"),r=o("RouterLink");return l(),c("div",null,[p,e("ul",null,[u,e("li",null,[e("p",null,[n("Fixed some issues flagged up in "),e("a",g,[n("goreportcard.com"),t(i)])])]),m,f,_]),b,k,w,e("ul",null,[e("li",null,[t(r,{to:"/types/generic.html"},{default:a(()=>[x,n(" (generic) ")]),_:1}),n(": generic (primitive)")]),e("li",null,[t(r,{to:"/commands/fg.html"},{default:a(()=>[v]),_:1}),n(": Sends a background process into the foreground")])])])}const N=s(h,[["render",y],["__file","v2.2.html.vue"]]);export{N as default};
