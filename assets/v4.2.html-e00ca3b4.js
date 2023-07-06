import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as d,c,a as e,b as o,d as l,w as n,e as a}from"./app-8d32d054.js";const u={},h=a('<h1 id="what-s-new-in-murex-v4-2-change-log" tabindex="-1"><a class="header-anchor" href="#what-s-new-in-murex-v4-2-change-log" aria-hidden="true">#</a> What&#39;s new in murex v4.2 - Change Log</h1><p>Murex usage has raised considerably in recent weeks. This release addresses a number of feature requests and bugs raised on Github.</p><h3 id="breaking-changes" tabindex="-1"><a class="header-anchor" href="#breaking-changes" aria-hidden="true">#</a> Breaking Changes</h3><p>none</p><h3 id="features" tabindex="-1"><a class="header-anchor" href="#features" aria-hidden="true">#</a> Features</h3>',5),m=e("li",null,[e("p",null,[o("new flag in "),e("code",null,"foreach"),o(": "),e("code",null,"--step <int>"),o(". This allows the "),e("code",null,"foreach"),o(" to jump indexes at a time. When used, all the lines jumped are merged into a JSON array and that is passed to the "),e("code",null,"foreach"),o(" nested code block")])],-1),p=e("code",null,"builtin",-1),_=e("code",null,"fexec builtin",-1),f={href:"https://github.com/lmorg/murex/issues/608",target:"_blank",rel:"noopener noreferrer"},b=e("li",null,[e("p",null,"on Darwin, Homebrew defaults are imported, just like you'd expect them to be from any other shell")],-1),g={href:"https://github.com/lmorg/murex/issues/611",target:"_blank",rel:"noopener noreferrer"},x={href:"https://github.com/lmorg/murex/issues/613",target:"_blank",rel:"noopener noreferrer"},w=a("<ol><li><p><code>ctrl</code>+<code>a</code>: jump to beginning of line</p></li><li><p><code>ctrl</code>+<code>e</code>: jump to end of line</p></li><li><p><code>alt</code>+<code>f</code>: jump forwards a word at a time</p></li><li><p><code>alt</code>+<code>b</code>: jump backwards a word at a time</p></li><li><p><code>ctrl</code>+<code>k</code>: clear line after cursor position</p></li><li><p><code>ctrl</code>+<code>l</code>: clear entire screen</p></li><li><p><code>ctrl</code>+<code>g</code>: same as <code>esc</code></p></li></ol>",1),k=e("code",null,"open",-1),v={href:"https://github.com/lmorg/murex/issues/620",target:"_blank",rel:"noopener noreferrer"},y=a("<li><p><code>pre-prompt-func</code> added to <code>config</code>. Block runs before the interactive prompt is displayed</p></li><li><p><code>post-prompt-func</code> added to <code>config</code>. Block runs after the interactive prompt has been exited but before any command lines have been executed</p></li><li><p><strong>auto-cd</strong> option added to <code>config</code>: <code>config: set shell auto-cd true</code>. This allows you to traverse directories without having to prefix <code>cd</code>. By default it is disabled</p></li><li><p>Meta values added to <code>foreach</code>, <code>formap</code>, and <code>while</code>. Meta values are a <code>$.</code> variable that holds meta-information about the running block, such as the number of iterations in a loop</p></li><li><p><code>command</code> alias for <code>exec</code> (for familiarity with Bash)</p></li><li><p><code>builtin</code> alias for <code>fexec builtin</code> (for familiarity with Bash)</p></li>",6),B=e("h3",{id:"bug-fixes",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#bug-fixes","aria-hidden":"true"},"#"),o(" Bug Fixes:")],-1),T=a("<li><p>brace encapsulated variables, eg <code>$(foobar)</code>, now autocomplete as expected</p></li><li><p>improvements to inlining images in iTerm2 when shell running on top of <code>tmux</code>. It still doesn&#39;t work reliably but this is an issue with <code>tmux</code> rather than Murex</p></li><li><p><code>method</code> forwards exceptions rather than errors. This behaviour has been changed to surface issues as errors</p></li><li><p><code>profile_preload.mx</code> added to profile defaults. This will be loaded before any of the OS-specific profiles</p></li>",4),j={href:"https://github.com/lmorg/murex/issues/617",target:"_blank",rel:"noopener noreferrer"},M=e("li",null,[e("p",null,"fixed deadlock in flag parsing")],-1),I={href:"https://github.com/lmorg/murex/issues/614",target:"_blank",rel:"noopener noreferrer"},L=e("li",null,[e("p",null,"minor improvements to documentation")],-1),C=e("hr",null,null,-1),N=e("p",null,"Published: 19.06.2023 at 23:15",-1),S=e("h2",{id:"see-also",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#see-also","aria-hidden":"true"},"#"),o(" See Also")],-1),E=e("br",null,null,-1),V=e("br",null,null,-1),O=e("code",null,"alias",-1),R=e("br",null,null,-1),W=e("code",null,"config",-1),A=e("br",null,null,-1),D=e("code",null,"exec",-1),F=e("br",null,null,-1),H=e("code",null,"fexec",-1),$=e("br",null,null,-1),q=e("code",null,"foreach",-1),z=e("br",null,null,-1),G=e("code",null,"formap",-1),J=e("br",null,null,-1),P=e("code",null,"method",-1),Q=e("br",null,null,-1),K=e("code",null,"open",-1),U=e("br",null,null,-1),X=e("code",null,"while",-1),Y=e("br",null,null,-1);function Z(ee,oe){const i=s("ExternalLinkIcon"),t=s("RouterLink");return d(),c("div",null,[h,e("ul",null,[m,e("li",null,[e("p",null,[o("new alias "),p,o(" => "),_,o(". This was added to bring more familiarity to those coming from Bash et al ("),e("a",f,[o("#608"),l(i)]),o(")")])]),b,e("li",null,[e("p",null,[o("new hotkeys ("),e("a",g,[o("#611"),l(i)]),o(") ("),e("a",x,[o("#613"),l(i)]),o("):")]),w]),e("li",null,[e("p",null,[k,o(" builtin should fallback to system default if type unknown ("),e("a",v,[o("#620"),l(i)]),o(")")])]),y]),B,e("ul",null,[T,e("li",null,[e("p",null,[o("missing rune length check causing the shell to panic ("),e("a",j,[o("#617"),l(i)]),o(")")])]),M,e("li",null,[e("p",null,[o("zero length string title bars should be ignored ("),e("a",I,[o("#614"),l(i)]),o(")")])]),L]),C,N,S,e("ul",null,[e("li",null,[l(t,{to:"/user-guide/interactive-shell.html"},{default:n(()=>[o("Murex's Interactive Shell")]),_:1}),o(":"),E,o(" What's different about Murex's interactive shell?")]),e("li",null,[l(t,{to:"/user-guide/terminal-keys.html"},{default:n(()=>[o("Terminal Hotkeys")]),_:1}),o(":"),V,o(" A list of all the terminal hotkeys and their uses")]),e("li",null,[l(t,{to:"/commands/alias.html"},{default:n(()=>[O]),_:1}),o(":"),R,o(" Create an alias for a command")]),e("li",null,[l(t,{to:"/commands/config.html"},{default:n(()=>[W]),_:1}),o(":"),A,o(" Query or define Murex runtime settings")]),e("li",null,[l(t,{to:"/commands/exec.html"},{default:n(()=>[D]),_:1}),o(":"),F,o(" Runs an executable")]),e("li",null,[l(t,{to:"/commands/fexec.html"},{default:n(()=>[H]),_:1}),o(":"),$,o(" Execute a command or function, bypassing the usual order of precedence.")]),e("li",null,[l(t,{to:"/commands/foreach.html"},{default:n(()=>[q]),_:1}),o(":"),z,o(" Iterate through an array")]),e("li",null,[l(t,{to:"/commands/formap.html"},{default:n(()=>[G]),_:1}),o(":"),J,o(" Iterate through a map or other collection of data")]),e("li",null,[l(t,{to:"/commands/method.html"},{default:n(()=>[P]),_:1}),o(":"),Q,o(" Define a methods supported data-types")]),e("li",null,[l(t,{to:"/commands/open.html"},{default:n(()=>[K]),_:1}),o(":"),U,o(" Open a file with a preferred handler")]),e("li",null,[l(t,{to:"/commands/while.html"},{default:n(()=>[X]),_:1}),o(":"),Y,o(" Loop until condition false")])])])}const ne=r(u,[["render",Z],["__file","v4.2.html.vue"]]);export{ne as default};
