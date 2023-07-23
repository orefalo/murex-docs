import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as s,c,d as e,e as o,b as t,w as n,f as a}from"./app-27c1e3fb.js";const h={},u=a('<h1 id="v4-4-change-log" tabindex="-1"><a class="header-anchor" href="#v4-4-change-log" aria-hidden="true">#</a> v4.4 - Change Log</h1><p>v4.4 features two new builtins, improvements in testing, and automatic generation of autocompletion suggestions backed by man page parsing. Plus there has been a lot of focus on improving <em>readline</em> responsiveness</p><h2 id="v4-4-8000" tabindex="-1"><a class="header-anchor" href="#v4-4-8000" aria-hidden="true">#</a> v4.4.8000</h2><h3 id="breaking-changes" tabindex="-1"><a class="header-anchor" href="#breaking-changes" aria-hidden="true">#</a> Breaking Changes</h3>',4),p=e("code",null,"alt",-1),m=e("code",null,"1",-1),f=e("code",null,"9",-1),g=e("code",null,"shift",-1),_=e("code",null,"f1",-1),b=e("code",null,"f12",-1),w=e("code",null,"alt",-1),v=a('<h3 id="features" tabindex="-1"><a class="header-anchor" href="#features" aria-hidden="true">#</a> Features</h3><p>None</p><h3 id="bug-fixes" tabindex="-1"><a class="header-anchor" href="#bug-fixes" aria-hidden="true">#</a> Bug Fixes</h3><ul><li><p><code>@IncManPages</code> <code>autocomplete</code> value for <strong>Dynamic</strong> directive renamed to <code>@IncManPage</code>, like the <strong>IncManPage</strong> directive</p></li><li><p>readline: render glitch fixed with delayed completions racing against hint text updates</p></li><li><p>readline: render glitches fixed when buffers are not being reset correctly after preview box has, or should have, closed</p></li><li><p>readline: man page preview now removes backspace characters correctly from UNIX docs</p></li><li><p>readline: man page preview now more reliably scrolls to the right line when a flag is highlighted in autocompletion</p></li><li><p>readline: preview now works for list views as well as grid views</p></li></ul><h2 id="v4-4-7000" tabindex="-1"><a class="header-anchor" href="#v4-4-7000" aria-hidden="true">#</a> v4.4.7000</h2><h3 id="breaking-changes-1" tabindex="-1"><a class="header-anchor" href="#breaking-changes-1" aria-hidden="true">#</a> Breaking Changes</h3><ul><li><strong>preview-enabled</strong> <code>config</code> option removed. This actually doesn&#39;t break anything, just produces a warning. The <code>config</code> option was also undocumented and experimental</li></ul><h3 id="features-1" tabindex="-1"><a class="header-anchor" href="#features-1" aria-hidden="true">#</a> Features</h3>',8),x=e("code",null,"f1",-1),k=a('<h3 id="bug-fixes-1" tabindex="-1"><a class="header-anchor" href="#bug-fixes-1" aria-hidden="true">#</a> Bug Fixes</h3><ul><li><p>readline: render glitch fixed with delayed path completions</p></li><li><p>readline: excess white spaces removed from man page descriptions</p></li></ul><h2 id="v4-4-x" tabindex="-1"><a class="header-anchor" href="#v4-4-x" aria-hidden="true">#</a> v4.4.x</h2><h3 id="breaking-changes-2" tabindex="-1"><a class="header-anchor" href="#breaking-changes-2" aria-hidden="true">#</a> Breaking Changes</h3><ul><li>&#39;Name&#39; field dropped from <code>onCommandCompletion</code> interrupt (this field was never documented)</li></ul><h3 id="features-2" tabindex="-1"><a class="header-anchor" href="#features-2" aria-hidden="true">#</a> Features</h3>',6),y=e("code",null,"round",-1),C={href:"https://github.com/lmorg/murex/issues/630",target:"_blank",rel:"noopener noreferrer"},F=a("<li><p>Vastly improved automatic man page parsing. Now descriptions are pulled alongside the flags and results are cached</p></li><li><p><code>man-get-flags</code> now includes a <code>-d</code> / <code>--description</code> flag to expose the improved man page parser</p></li><li><p>New builtin, <code>return</code>, which exits a given function scope (eg <code>function</code>, <code>private</code>, <strong>Dynamic</strong> block in <code>autocomplete</code>, etc)</p></li><li><p>Improved <code>git</code> autocompletions</p></li><li><p><code>find</code> autocompletions added</p></li><li><p>builtin profiles are now imported as separate modules. This makes debugging easier</p></li>",6),N=e("code",null,"/integrations",-1),T={href:"https://github.com/lmorg/murex/tree/master/intergrations",target:"_blank",rel:"noopener noreferrer"},B=a("<li><p>readline: new word jump hotkeys <code>ctrl</code>+<code>left</code> / <code>ctrl</code>+<code>right</code> (PC)</p></li><li><p>readline: new word jump hotkeys <code>option</code>+<code>left</code> / <code>option</code>+<code>right</code> (Mac)</p></li>",2),I=a('<h3 id="bug-fixes-2" tabindex="-1"><a class="header-anchor" href="#bug-fixes-2" aria-hidden="true">#</a> Bug Fixes:</h3><ul><li><p><code>test</code> would always run first in any block, regardless of the preferred order of execution. This was because <code>test (unit|state|config)</code> required altering the execution state of the shell. The drawback was that <code>test (run|define|report)</code> would also run unexpectedly. This lead to hacks like <code>try { test run * }</code> to force the correct order of operations. Now the parameters of <code>test</code> are checked to determine when to execute the builtin.</p></li><li><p><code>int</code> types couldn&#39;t be compared against <code>num</code> types with <code>&gt;</code>, <code>&gt;=</code>, <code>&lt;</code>, <code>&lt;=</code> operators</p></li><li><p>readline: <code>^d</code> will not send EOF if line is not empty. The original behaviour was by design however after pressing <code>^d</code> a few too many times when I intended to press <code>^f</code> or <code>^r</code>, I decided the original design was wrong</p></li><li><p><code>FileRef</code> wasn&#39;t being set in <code>test</code>. This caused some tests to fail if they called private functions</p></li><li><p>Check <code>~/.ssh/config</code> exists before trying to parse it in <code>getHostsFile</code> private (used for SSH and similar tools autocompletions)</p></li><li><p>readline: lots of work done on speeding up redraws and overall responsiveness. eg buffered autocompletion menus</p></li><li><p>readline: hint text should <em>never</em> be displayed if disabled via <code>config</code></p></li><li><p>readline: soft timeout halved (this can be overridden via <code>config</code>)</p></li><li><p>readline: cropped autocompletion suggestions in gridded layout were one character too short (off by one error)</p></li></ul><hr><p>Published: 18.07.2023 at 22:58</p><h2 id="see-also" tabindex="-1"><a class="header-anchor" href="#see-also" aria-hidden="true">#</a> See Also</h2>',5),P=e("code",null,"autocomplete",-1),E=e("code",null,"config",-1),M=e("code",null,"event",-1),L=e("code",null,"expr",-1),R=e("code",null,"function",-1),S=e("code",null,"int",-1),V=e("code",null,"man-get-flags",-1),D=e("code",null,"num",-1),H=e("code",null,"onCommandCompletion",-1),j=e("code",null,"private",-1),A=e("code",null,"return",-1),q=e("code",null,"round",-1),G=e("code",null,"test",-1);function O(Q,U){const i=d("RouterLink"),l=d("ExternalLinkIcon");return s(),c("div",null,[u,e("ul",null,[e("li",null,[p,o("+"),m,o(".."),f,o(" hotkeys replaced with "),g,o("+"),_,o(".."),b,o(". Changed because "),w,o("+numeric rarely worked ("),t(i,{to:"/user-guide/terminal-keys.html#recalling-previous-words"},{default:n(()=>[o("read more")]),_:1}),o(")")])]),v,e("ul",null,[e("li",null,[o("Preview is now considered stable. Press "),x,o(" while autocomplete is open to use ("),t(i,{to:"/user-guide/terminal-keys.html#preview-box"},{default:n(()=>[o("read more")]),_:1}),o(")")])]),k,e("ul",null,[e("li",null,[e("p",null,[o("New builtin, "),y,o(", which can perform rounding operations on numerical inputs ("),e("a",C,[o("#630"),t(l)]),o(", "),t(i,{to:"/commands/round.html"},{default:n(()=>[o("read more")]),_:1}),o(")")])]),F,e("li",null,[e("p",null,[N,o(" directory added to Murex source, the aim of which is to make it easier for people to contribute autocompletions and other integrations with common command line tools ("),e("a",T,[o("Github"),t(l)]),o(")")])]),B]),I,e("ul",null,[e("li",null,[t(i,{to:"/user-guide/fileref.html"},{default:n(()=>[o("FileRef")]),_:1}),o(": How to track what code was loaded and from where")]),e("li",null,[t(i,{to:"/user-guide/terminal-keys.html"},{default:n(()=>[o("Terminal Hotkeys")]),_:1}),o(": A list of all the terminal hotkeys and their uses")]),e("li",null,[t(i,{to:"/commands/autocomplete.html"},{default:n(()=>[P]),_:1}),o(": Set definitions for tab-completion in the command line")]),e("li",null,[t(i,{to:"/commands/config.html"},{default:n(()=>[E]),_:1}),o(": Query or define Murex runtime settings")]),e("li",null,[t(i,{to:"/commands/event.html"},{default:n(()=>[M]),_:1}),o(": Event driven programming for shell scripts")]),e("li",null,[t(i,{to:"/commands/expr.html"},{default:n(()=>[L]),_:1}),o(": Expressions: mathematical, string comparisons, logical operators")]),e("li",null,[t(i,{to:"/commands/function.html"},{default:n(()=>[R]),_:1}),o(": Define a function block")]),e("li",null,[t(i,{to:"/types/int.html"},{default:n(()=>[S]),_:1}),o(": Whole number (primitive)")]),e("li",null,[t(i,{to:"/commands/man-get-flags.html"},{default:n(()=>[V]),_:1}),o(": Parses man page files for command line flags")]),e("li",null,[t(i,{to:"/types/num.html"},{default:n(()=>[D,o(" (number)")]),_:1}),o(": Floating point number (primitive)")]),e("li",null,[t(i,{to:"/events/oncommandcompletion.html"},{default:n(()=>[H]),_:1}),o(": Trigger an event upon a command's completion")]),e("li",null,[t(i,{to:"/commands/private.html"},{default:n(()=>[j]),_:1}),o(": Define a private function block")]),e("li",null,[t(i,{to:"/commands/return.html"},{default:n(()=>[A]),_:1}),o(": Exits current function scope")]),e("li",null,[t(i,{to:"/commands/round.html"},{default:n(()=>[q]),_:1}),o(": Round a number by a user defined precision")]),e("li",null,[t(i,{to:"/commands/test.html"},{default:n(()=>[G]),_:1}),o(": Murex's test framework - define tests, run tests and debug shell scripts")])])])}const z=r(h,[["render",O],["__file","v4.4.html.vue"]]);export{z as default};