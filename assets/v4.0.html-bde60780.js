import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as s,c as d,d as e,e as o,b as t,w as n,f as l}from"./app-b92fd348.js";const c={},u=l('<h1 id="what-s-new-in-murex-v4-0-change-log" tabindex="-1"><a class="header-anchor" href="#what-s-new-in-murex-v4-0-change-log" aria-hidden="true">#</a> What&#39;s new in murex v4.0 - Change Log</h1><p>This release sees significant improvements for use with non-latin characters in both the interactive prompt and shell scripting. It introduces new syntax to make working with structured data even easier than before. As well as new data types and smoother user experience.</p><h3 id="breaking-changes" tabindex="-1"><a class="header-anchor" href="#breaking-changes" aria-hidden="true">#</a> Breaking Changes</h3><ul><li><p><code>$PWD</code> is no longer a <code>str</code>. If you need to parse <code>$PWD</code> as a string then you should <code>out: $PWD</code> or use <code>${pwd}</code></p></li><li><p><code>.</code> is now a valid bareword character for variables. This will break any instances in code that contain something like <code>out $hello.</code> however you can now use <code>out $(hello).</code> syntax for safer string infixing</p></li></ul><h3 id="features" tabindex="-1"><a class="header-anchor" href="#features" aria-hidden="true">#</a> Features</h3>',5),h=e("li",null,[e("p",null,[o("dot notation added for variables which allow accessing and writing to object properties. eg "),e("code",null,"$json.array.index")])],-1),p=e("code",null,"$()",-1),f=e("code",null,"$(foobar)",-1),g=e("code",null,"$foobar",-1),m=e("code",null,'$(比如) = "举手之劳就可以使办公室更加环保，比如，使用再生纸。"',-1),_=e("li",null,[e("p",null,"Unicode wide characters are properly handled in readline")],-1),b=e("li",null,[e("p",null,[o("new data type "),e("code",null,"path"),o(" that is an object")])],-1),w=e("li",null,[e("p",null,[o("new data type "),e("code",null,"paths")])],-1),x=e("li",null,[e("p",null,[o("support for lambdas added to variables: eg "),e("code",null,"@array[{ function }]")])],-1),v=e("code",null,"[ctrl]",-1),y=e("code",null,"[f]",-1),k=e("code",null,"[ctrl]",-1),$=e("code",null,"[f]",-1),j=e("code",null,"*.txt",-1),C=l("<li><p><code>$ENV</code> and <code>$GLOBAL</code> objects (deprecates the need for <code>global</code> and <code>export</code>)</p></li><li><p>improved error messages in expressions</p></li><li><p>scalars can be used as assignees in expressions, eg <code>$foo = &quot;bar&quot;</code></p></li><li><p>added <code>-i</code> flag to ssh autocompletion</p></li><li><p>readline prompts are now buffered to reduce cursor flickering</p></li>",5),N=l('<h3 id="non-user-facing-maintenance-changes" tabindex="-1"><a class="header-anchor" href="#non-user-facing-maintenance-changes" aria-hidden="true">#</a> Non-User Facing / Maintenance Changes:</h3><ul><li><p>backend support added for data types to be dynamic objects</p></li><li><p>updated autocompletion code for <code>docker</code> and <code>git</code></p></li></ul><h3 id="bug-fixes" tabindex="-1"><a class="header-anchor" href="#bug-fixes" aria-hidden="true">#</a> Bug Fixes:</h3><ul><li><p>better wide character support in auto completion suggestions</p></li><li><p>function parameters default and comment fields are no longer order dependent</p></li><li><p>better string parsing for barewords inside arrays and objects</p></li><li><p>ahead of time hint caching now done on demand per hint page rather than against every executable upon Murex start up</p></li><li><p>new lines should be ignored in <code>%{}</code></p></li><li><p>bareword <code>true</code> and <code>false</code> should be converted to boolean in <code>%{}</code></p></li><li><p>autocomplete suggestions are now dedup&#39;ed when delayed results return similar suggestions to fast results</p></li><li><p>various preview pane bug fixes</p></li><li><p>support for ANSI escape sequences in experimental (disabled by default) TTY buffer</p></li><li><p>correction to <code>count</code> docs</p></li><li><p>error not handled in regexp expression matches, `=~</p></li></ul><hr><p>Published: 26.03.2023 at 17:50</p><h2 id="see-also" tabindex="-1"><a class="header-anchor" href="#see-also" aria-hidden="true">#</a> See Also</h2>',7),T=e("code",null,"%[]",-1),B=e("code",null,"$",-1),A=e("code",null,"count",-1),L=e("code",null,"function",-1);function S(V,W){const a=r("RouterLink");return s(),d("div",null,[u,e("ul",null,[h,e("li",null,[e("p",null,[o("added support variable encapsulation via "),p,o(" to avoid variable barewords from leaking into other values when infixed. eg "),f,o(" is the same as "),g,o(" ("),t(a,{to:"/parser/string.html"},{default:n(()=>[o("read more")]),_:1}),o(")")])]),e("li",null,[e("p",null,[o("variable names can now be Unicode, eg "),m,o(" ("),t(a,{to:"/parser/string.html"},{default:n(()=>[o("read more")]),_:1}),o(")")])]),_,b,w,x,e("li",null,[e("p",null,[o("readline "),v,o("+"),y,o(" now supports word matching as well as regexp ("),t(a,{to:"/user-guide/terminal-keys.html"},{default:n(()=>[o("read more")]),_:1}),o(")")])]),e("li",null,[e("p",null,[o("readline "),k,o("+"),$,o(" now supports glob filters (eg "),j,o(") too ("),t(a,{to:"/user-guide/terminal-keys.html"},{default:n(()=>[o("read more")]),_:1}),o(")")])]),C]),N,e("ul",null,[e("li",null,[t(a,{to:"/parser/create-array.html"},{default:n(()=>[o("Create array ("),T,o(") constructor")]),_:1}),o(": Quickly generate arrays")]),e("li",null,[t(a,{to:"/user-guide/interactive-shell.html"},{default:n(()=>[o("Murex's Interactive Shell")]),_:1}),o(": What's different about Murex's interactive shell?")]),e("li",null,[t(a,{to:"/parser/string.html"},{default:n(()=>[o("String ("),B,o(") Token")]),_:1}),o(": Expand values as a string")]),e("li",null,[t(a,{to:"/user-guide/terminal-keys.html"},{default:n(()=>[o("Terminal Hotkeys")]),_:1}),o(": A list of all the terminal hotkeys and their uses")]),e("li",null,[t(a,{to:"/commands/count.html"},{default:n(()=>[A]),_:1}),o(": Count items in a map, list or array")]),e("li",null,[t(a,{to:"/commands/function.html"},{default:n(()=>[L]),_:1}),o(": Define a function block")]),e("li",null,[t(a,{to:"/parser/create-object.html"},{default:n(()=>[o("create-object")]),_:1}),o(":")]),e("li",null,[t(a,{to:"/types/path.html"},{default:n(()=>[o("path")]),_:1}),o(":")])])])}const M=i(c,[["render",S],["__file","v4.0.html.vue"]]);export{M as default};
