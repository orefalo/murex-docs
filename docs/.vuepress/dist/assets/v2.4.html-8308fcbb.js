import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as d,c,d as e,e as t,b as n,w as a,f as i}from"./app-fcc1aefa.js";const u={},h=i('<h1 id="what-s-new-in-murex-v2-4-change-log" tabindex="-1"><a class="header-anchor" href="#what-s-new-in-murex-v2-4-change-log" aria-hidden="true">#</a> What&#39;s new in murex v2.4 - Change Log</h1><p>This release introduces a strict mode for variables, new builtin, performance improvements, and better error messages; plus a potential breaking change</p><p>There are a number of new features in this release</p><h3 id="breaking-changes" tabindex="-1"><a class="header-anchor" href="#breaking-changes" aria-hidden="true">#</a> Breaking Changes:</h3><ul><li>mkarray (<code>a</code> et al) no longer returns an error if the start and end ranges<br> are the same. Instead it returns an array of 1 value.</li></ul><h3 id="user-facing-changes" tabindex="-1"><a class="header-anchor" href="#user-facing-changes" aria-hidden="true">#</a> User Facing Changes:</h3>',6),p=i(`<li><p>Strict variables now supported (like <code>set -u</code> in Bash). This will mean any<br> variables passed that haven&#39;t been initialized beforehand will cause that<br> pipeline to fail. Currently this is opt in, a future release of Murex will<br> flip that and make it opt out. So take this opportunity to enable it in your<br><code>~/.murex_profile</code> and test your scripts. Enable this via <code>config</code>:</p><pre><code>&lt;pre&gt;&lt;code&gt;config: set proc strict-vars true&lt;/code&gt;&lt;/pre&gt;

This feature was requested in [issue #380](https://github.com/lmorg/murex/issues/380).
</code></pre></li><li><p>New builtin: <code>datetime</code>. This builtin allows you to convert date and/or time<br> strings of one format into strings of another format. <code>datetime</code> is a<br> supercharged alternative to the UNIX command <code>date</code> aimed at making scripting<br> easier.</p></li><li><p>mkarray (<code>a</code> et al) now supports dates. eg <code>[01-Jan-20..05-May-21]</code>. If no<br> start nor end date appears then mkarray assumes range starts or ends at<br> current date.</p></li><li><p><code>openagent</code> profile for <code>image</code> data types has been improved. Murex now<br> better supports tmux and iTerm2.</p></li><li><p><code>runtime --config</code> now displays <code>FileRef</code> for every <code>set</code> as well as <code>define</code>,<br> named <code>FileRefSet</code> and <code>FileRefDefine</code> respectively. So you can now easily<br> trace where global config is being set and defined.</p></li><li><p>Better error messages in the interactive terminal.</p></li><li><p>Prompt now defaults to only displaying current directory rather than the full<br> path. You can revert this change by adding your own prompt in <code>config</code>. eg:</p><pre><code>&lt;pre&gt;&lt;code&gt;config: set shell prompt {
    out &quot;{RESET}{YELLOW}\${pwd_short} {RESET}» &quot;
}

config: set shell prompt-multiline {
    let len = \${pwd_short -&gt; wc -c} - 1
    printf &quot;%\${$len}s » &quot; $linenum
}&lt;/code&gt;&lt;/pre&gt;
</code></pre></li>`,7),m=e("br",null,null,-1),f={href:"https://github.com/lmorg/murex/issues/379",target:"_blank",rel:"noopener noreferrer"},g=e("br",null,null,-1),_=e("br",null,null,-1),b=i("<li><p>Fixed regression bugs with autocomplete parameters that affected some dynamic<br> blocks.</p></li><li><p><code>readline</code> now caches syntax highlighting and hint text to improve the<br> responsiveness of the interactive terminal. This is set to a hard limit of<br> 200 cached items however that will be a configurable metric in a future<br> release. Also planned for the future is caching autocompletion suggestions.</p></li><li><p>Loading message added for the default profile, ie the one that is compiled<br> into and thus shipped with Murex.</p></li><li><p>Fixed bug with <code>fid-list</code> and <code>jobs</code> where they were outputting the <code>p.Name</code><br> struct rather than <code>p.Name.String()</code>. This lead to the process name appearing<br> garbled under some circumstances.</p></li><li><p><code>{BG-BLUE}</code> emitted the wrong ANSI escape code, this has been corrected.</p></li><li><p>Several <code>readline</code> bug fixes.</p></li>",6),w=i('<h3 id="non-user-facing-maintenance-changes" tabindex="-1"><a class="header-anchor" href="#non-user-facing-maintenance-changes" aria-hidden="true">#</a> Non-User Facing / Maintenance Changes</h3><ul><li><p>Thread safe copying of parameters upon fork. The previous code never actually<br> generated any race conditions and I don&#39;t think ever could. However it was<br> ambiguous. This new code makes the copy more explicit and appears to have<br> also brought some minor performance improvements in benchmarks too.</p></li><li><p>Behavioural test framework has been refactored to make it easier to add new<br> behavioural tests.</p></li><li><p>Lots of new tests added.</p></li><li><p>Updated documentation.</p></li></ul><hr><p>Published: 09.12.2021 at 08:00</p><h2 id="see-also" tabindex="-1"><a class="header-anchor" href="#see-also" aria-hidden="true">#</a> See Also</h2>',5),y=e("br",null,null,-1),v=e("br",null,null,-1),x=e("br",null,null,-1),k=e("br",null,null,-1),T=e("code",null,"a",-1),S=e("br",null,null,-1),N=e("code",null,"config",-1),A=e("br",null,null,-1),L=e("code",null,"datetime",-1),M=e("br",null,null,-1),E=e("code",null,"printf",-1),I=e("code",null,"fid-list",-1),B=e("br",null,null,-1),C=e("code",null,"ja",-1),F=e("br",null,null,-1),R=e("code",null,"open",-1),q=e("br",null,null,-1),P=e("code",null,"openagent",-1),U=e("br",null,null,-1),$=e("code",null,"runtime",-1),V=e("br",null,null,-1),j=e("code",null,"ta",-1),O=e("br",null,null,-1);function H(J,W){const l=r("ExternalLinkIcon"),o=r("RouterLink");return d(),c("div",null,[h,e("ul",null,[p,e("li",null,[e("p",null,[t("Parser updated to better support multiline pipelines where the newline is"),m,t(" escaped and a comment exists after "),e("a",f,[t("issue #379"),n(l)]),t("."),g,t(" This only applies to shell scripts, the interactive terminal hasn't yet been"),_,t(" updated to reflect this change.")])]),b]),w,e("ul",null,[e("li",null,[n(o,{to:"/user-guide/ansi.html"},{default:a(()=>[t("ANSI Constants")]),_:1}),t(":"),y,t(" Infixed constants that return ANSI escape sequences")]),e("li",null,[n(o,{to:"/user-guide/fileref.html"},{default:a(()=>[t("FileRef")]),_:1}),t(":"),v,t(" How to track what code was loaded and from where")]),e("li",null,[n(o,{to:"/user-guide/modules.html"},{default:a(()=>[t("Modules and Packages")]),_:1}),t(":"),x,t(" An introduction to Murex modules and packages")]),e("li",null,[n(o,{to:"/user-guide/profile.html"},{default:a(()=>[t("Murex Profile Files")]),_:1}),t(":"),k,t(" A breakdown of the different files loaded on start up")]),e("li",null,[n(o,{to:"/commands/a.html"},{default:a(()=>[T,t(" (mkarray)")]),_:1}),t(":"),S,t(" A sophisticated yet simple way to build an array or list")]),e("li",null,[n(o,{to:"/commands/config.html"},{default:a(()=>[N]),_:1}),t(":"),A,t(" Query or define Murex runtime settings")]),e("li",null,[n(o,{to:"/commands/datetime.html"},{default:a(()=>[L]),_:1}),t(":"),M,t(" A date and/or time conversion tool (like "),E,t(" but for date and time values)")]),e("li",null,[n(o,{to:"/commands/fid-list.html"},{default:a(()=>[I]),_:1}),t(":"),B,t(" Lists all running functions within the current Murex session")]),e("li",null,[n(o,{to:"/commands/ja.html"},{default:a(()=>[C,t(" (mkarray)")]),_:1}),t(":"),F,t(" A sophisticated yet simply way to build a JSON array")]),e("li",null,[n(o,{to:"/commands/open.html"},{default:a(()=>[R]),_:1}),t(":"),q,t(" Open a file with a preferred handler")]),e("li",null,[n(o,{to:"/commands/openagent.html"},{default:a(()=>[P]),_:1}),t(":"),U,t(" Creates a handler function for `open")]),e("li",null,[n(o,{to:"/commands/runtime.html"},{default:a(()=>[$]),_:1}),t(":"),V,t(" Returns runtime information on the internal state of Murex")]),e("li",null,[n(o,{to:"/commands/ta.html"},{default:a(()=>[j,t(" (mkarray)")]),_:1}),t(":"),O,t(" A sophisticated yet simple way to build an array of a user defined data-type")])])])}const D=s(u,[["render",H],["__file","v2.4.html.vue"]]);export{D as default};
