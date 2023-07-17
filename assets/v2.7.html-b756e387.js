import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as d,c as r,d as e,b as l,w as i,e as o,f as a}from"./app-143dece1.js";const c={},u=a('<h1 id="what-s-new-in-murex-v2-7-change-log" tabindex="-1"><a class="header-anchor" href="#what-s-new-in-murex-v2-7-change-log" aria-hidden="true">#</a> What&#39;s new in murex v2.7 - Change Log</h1><p>This update has introduced another potential breaking change for your safety: zero length arrays now fail by default. Also errors inside subshells will cause the parent command to fail if ran inside a <code>try</code> or <code>trypipe</code> block.</p><p>Breaking Changes:</p><ul><li><p>zero length arrays returned from subshells (eg <code>echo @{g this-file-does-not-exist}</code>) should fail by default, like unset variables. This is enabled by default but can be disabled via <code>config: set proc strict-arrays false</code></p></li><li><p>autoglob should fail if it doesn&#39;t match any results. eg <code>@g echo this-file-does-not-exist.*</code></p></li><li><p>Subshells should fail parent command when used inside <code>try</code> and <code>trypipe</code> blocks. eg <code>try { echo ${false} }</code></p></li></ul><p>Features:</p><ul><li><p><code>function</code> now supports defining parameters</p></li><li><p>Added support fro <code>&amp;&amp;</code> eg <code>do-something &amp;&amp; do-something-else</code> for chaining successful commands</p></li><li><p>Added support for <code>||</code> eg <code>do-something || do-something-else</code> for chaining unsuccessful commands</p></li><li><p>Added support for writing to the terminal emulator&#39;s titlebar via <code>config: set shell titlebar-func { block }</code></p></li><li><p><code>titlebar-func</code> can also be written to your <code>tmux</code> window title via <code>config: set shell tmux-echo true</code>.</p></li><li><p>New reserved variable: <code>$HOSTNAME</code></p></li><li><p>New reserved variables: <code>$1</code> (and upwards) which correlates to the scope&#39;s parameter index. <code>$1</code> is the functions first parameter. <code>$2</code> is the second. <code>$13</code> is the thirteenth.</p></li><li><p>New reserved variable: <code>$0</code> which contains the function name</p></li><li><p>New event: <code>onCommandCompletion</code> (this is experimental and subject to change in the next release)</p></li><li><p>Macro variables. eg <code>echo Hello ^$name</code> will prompt the user to enter a name. Macro variables are only support in the REPL</p></li><li><p><code>read</code> now supports flags (eg default option, etc) to allow for a better experience in shell scripting</p></li></ul><p>Minor Changes:</p><ul><li><p>You can now overwrite <code>onKeyPress</code> events. This no longer produces an error forcing you to remove the old event before adding the new one</p></li><li><p>Autocompletion suggestions shouldn&#39;t be sorted is results include paths (improves the ordering of autocompletion suggestions)</p></li><li><p>Autocompletion suggestions for <code>openagent</code> builtin</p></li><li><p>Autocompletion suggestions for hashtags</p></li><li><p>Test counts re-added to website</p></li><li><p>Windows should show file extensions by default in autocompletion results</p></li></ul><p>Bug Fixes:</p><ul><li><p>Fix inverted logic on <code>forceTTY</code>: <code>config: get proc force-tty false</code> set by default, which then proxies STDERR and prints them in red</p></li><li><p>ctrl+c (^c) now currectly sends SIGTERM rather than just ending the child process</p></li><li><p>Better handling of SIGTERM</p></li><li><p>SIGTSTP isn&#39;t working. Switched to SIGSTOP when (^z) doesn&#39;t</p></li><li><p>Fix panic in event <code>onFilesystemChange</code> where fileRef is not getting passed correctly</p></li><li><p>Fix panic in event <code>onFilesystemChange</code> where path is zero length string</p></li><li><p>Some improvements to variable previews in the REPL</p></li><li><p><code>count</code> should check if it is a method</p></li><li><p>AST cache now checked more regukarly. This is to reduce the risk of memory leaks during fuzz or load testing</p></li><li><p><code>murex-docs</code> still referred to <code>len</code> builtin. That should be changed to <code>count</code></p></li><li><p>Lots of fuzzing added -- a few edge case bugs discovered</p></li></ul><hr><p>Published: 15.05.2022 at 22:49</p><h2 id="see-also" tabindex="-1"><a class="header-anchor" href="#see-also" aria-hidden="true">#</a> See Also</h2>',13),p=e("code",null,"&&",-1),h=e("br",null,null,-1),f=e("code",null,"||",-1),m=e("br",null,null,-1),g=e("br",null,null,-1),_=e("code",null,"@g",-1),b=e("br",null,null,-1),v=e("code",null,"config",-1),w=e("br",null,null,-1),x=e("code",null,"event",-1),y=e("br",null,null,-1),k=e("code",null,"function",-1),T=e("br",null,null,-1),S=e("code",null,"openagent",-1),C=e("br",null,null,-1),A=e("code",null,"read",-1),R=e("br",null,null,-1),N=e("code",null,"read",-1);function z(E,L){const t=s("RouterLink");return d(),r("div",null,[u,e("ul",null,[e("li",null,[l(t,{to:"/parser/logical-and.html"},{default:i(()=>[o("And ("),p,o(") Logical Operator")]),_:1}),o(":"),h,o(" Continues next operation if previous operation passes")]),e("li",null,[l(t,{to:"/parser/logical-or.html"},{default:i(()=>[o("Or ("),f,o(") Logical Operator")]),_:1}),o(":"),m,o(" Continues next operation only if previous operation fails")]),e("li",null,[l(t,{to:"/user-guide/reserved-vars.html"},{default:i(()=>[o("Reserved Variables")]),_:1}),o(":"),g,o(" Special variables reserved by Murex")]),e("li",null,[l(t,{to:"/commands/autoglob.html"},{default:i(()=>[_,o(" (autoglob) ")]),_:1}),o(":"),b,o(" Command prefix to expand globbing (deprecated)")]),e("li",null,[l(t,{to:"/commands/config.html"},{default:i(()=>[v]),_:1}),o(":"),w,o(" Query or define Murex runtime settings")]),e("li",null,[l(t,{to:"/commands/event.html"},{default:i(()=>[x]),_:1}),o(":"),y,o(" Event driven programming for shell scripts")]),e("li",null,[l(t,{to:"/commands/function.html"},{default:i(()=>[k]),_:1}),o(":"),T,o(" Define a function block")]),e("li",null,[l(t,{to:"/commands/openagent.html"},{default:i(()=>[S]),_:1}),o(":"),C,o(" Creates a handler function for `open")]),e("li",null,[l(t,{to:"/commands/read.html"},{default:i(()=>[A]),_:1}),o(":"),R,N,o(" a line of input from the user and store as a variable")])])])}const F=n(c,[["render",z],["__file","v2.7.html.vue"]]);export{F as default};