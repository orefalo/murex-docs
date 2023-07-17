import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as s,c as l,a as e,b as a,d as r,e as i}from"./app-b2dd4304.js";const d={},h=e("h1",{id:"what-s-new-in-murex-v4-1-x-change-log",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#what-s-new-in-murex-v4-1-x-change-log","aria-hidden":"true"},"#"),a(" What's new in murex v4.1.x - Change Log")],-1),c={href:"https://murex.rocks/docs/changelog/v4.1.html",target:"_blank",rel:"noopener noreferrer"},u={href:"https://github.com/lmorg/murex/releases",target:"_blank",rel:"noopener noreferrer"},p=i('<h2 id="v4-1-7300" tabindex="-1"><a class="header-anchor" href="#v4-1-7300" aria-hidden="true">#</a> v4.1.7300</h2><h3 id="breaking-changes" tabindex="-1"><a class="header-anchor" href="#breaking-changes" aria-hidden="true">#</a> Breaking Changes</h3><p>None</p><h3 id="features" tabindex="-1"><a class="header-anchor" href="#features" aria-hidden="true">#</a> Features</h3>',4),g=e("code",null,"*",-1),m={href:"https://github.com/lmorg/murex/issues/593",target:"_blank",rel:"noopener noreferrer"},f={href:"https://murex.rocks/docs/commands/range.html",target:"_blank",rel:"noopener noreferrer"},b=e("h3",{id:"bug-fixes",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#bug-fixes","aria-hidden":"true"},"#"),a(" Bug Fixes")],-1),_=e("code",null,"fexec private",-1),x={href:"https://github.com/lmorg/murex/issues/600",target:"_blank",rel:"noopener noreferrer"},v=e("li",null,[e("p",null,[e("code",null,"source"),a("-ed files should be loaded into a module of a similar name to the parent module")])],-1),w=e("code",null,"{",-1),k=e("code",null,"}",-1),y={href:"https://github.com/lmorg/murex/issues/603",target:"_blank",rel:"noopener noreferrer"},B=e("li",null,[e("p",null,[a("fixed problem with encapsulated variables, eg "),e("code",null,"$(PWD)"),a(", not getting parsed correctly by syntax highlighter")])],-1),F=i('<h2 id="v4-1-6140" tabindex="-1"><a class="header-anchor" href="#v4-1-6140" aria-hidden="true">#</a> v4.1.6140</h2><h3 id="breaking-changes-1" tabindex="-1"><a class="header-anchor" href="#breaking-changes-1" aria-hidden="true">#</a> Breaking Changes</h3><p>None</p><h3 id="features-1" tabindex="-1"><a class="header-anchor" href="#features-1" aria-hidden="true">#</a> Features</h3><ul><li><p>readline: blinking cursor added to fuzzy find. This is just a very minor UI change to make it easier to tell where keyboard input would be updating</p></li><li><p><code>git</code> autocomplete now includes git aliases</p></li></ul><h3 id="bug-fixes-1" tabindex="-1"><a class="header-anchor" href="#bug-fixes-1" aria-hidden="true">#</a> Bug Fixes</h3>',6),N=i("<li><p>merge operator (<code>&lt;~</code>) should unmarshal strings</p></li><li><p>scalars available in all assigns (eg <code>+=</code>, <code>-=</code>, etc)</p></li><li><p>lazy assigns allowed when strict types is set to <code>false</code>. Meaning merge operations and <code>+=</code> (et al) will work even if the left scalar is unset</p></li><li><p>suppress <code>!!!</code> style warnings upon <code>^C</code></p></li>",4),C=e("code",null,":",-1),T={href:"https://github.com/lmorg/murex/issues/601",target:"_blank",rel:"noopener noreferrer"},I=i('<h2 id="v4-1-5200" tabindex="-1"><a class="header-anchor" href="#v4-1-5200" aria-hidden="true">#</a> v4.1.5200</h2><h3 id="breaking-changes-2" tabindex="-1"><a class="header-anchor" href="#breaking-changes-2" aria-hidden="true">#</a> Breaking Changes</h3><p>None</p><h3 id="features-2" tabindex="-1"><a class="header-anchor" href="#features-2" aria-hidden="true">#</a> Features</h3>',4),z=i("<li><p>Merge into operator added: <code>~&gt;</code></p></li><li><p><code>f</code>: new flag <code>i</code> -- deprecates <code>?</code> flag due to <code>?</code> being a glob pattern. However <code>?</code> will remain supported</p></li>",2),P=e("code",null,"$PREFIX",-1),D=e("strong",null,"Dynamic",-1),E=e("strong",null,"DynamicDesc",-1),M=e("code",null,"autocomplete",-1),V={href:"https://murex.rocks/docs/commands/autocomplete.html#directives",target:"_blank",rel:"noopener noreferrer"},A=e("li",null,[e("p",null,[e("code",null,"user@"),a(" completion support for "),e("code",null,"ssh")])],-1),L=e("code",null,"autocomplete",-1),$={href:"https://murex.rocks/docs/commands/autocomplete.html",target:"_blank",rel:"noopener noreferrer"},j=e("li",null,[e("p",null,"command line is included in error message when error running inside another module")],-1),H=e("li",null,[e("p",null,"errors within other modules now include the command line string to make debugging even easier")],-1),O=e("li",null,[e("p",null,[a("lambdas success/fail criteria is now driven by the exitnum rather than stdout data type. This allows it to be much more robust. In addition "),e("code",null,"$."),a(" is now mutable")])],-1),R=i('<h3 id="bug-fixes-2" tabindex="-1"><a class="header-anchor" href="#bug-fixes-2" aria-hidden="true">#</a> Bug Fixes</h3><ul><li><p><code>f</code> improved help message (previously some items displayed code numbers instead of descriptions)</p></li><li><p>readline: hint text flicker removed</p></li></ul><h2 id="v4-1-4200" tabindex="-1"><a class="header-anchor" href="#v4-1-4200" aria-hidden="true">#</a> v4.1.4200</h2><h3 id="breaking-changes-3" tabindex="-1"><a class="header-anchor" href="#breaking-changes-3" aria-hidden="true">#</a> Breaking Changes</h3><p>None</p><h3 id="features-3" tabindex="-1"><a class="header-anchor" href="#features-3" aria-hidden="true">#</a> Features</h3><ul><li>Merge operator added: <code>&lt;~</code></li></ul><h3 id="bug-fixes-3" tabindex="-1"><a class="header-anchor" href="#bug-fixes-3" aria-hidden="true">#</a> Bug Fixes</h3><ul><li><p>readline: fixed out of bounds errors when calculating unicode cell positions</p></li><li><p>readline: fixed panic raised when vim key <code>p</code> is used on an empty buffer</p></li><li><p>readline: fixed bug where vim mode became unavailable / <code>esc</code> didn&#39;t work as expected. This was due to autocompletion find (<code>^f</code>, <code>^r</code>) being launched before <code>tab</code> completions and state not being handled correctly</p></li></ul><h2 id="v4-1-3010" tabindex="-1"><a class="header-anchor" href="#v4-1-3010" aria-hidden="true">#</a> v4.1.3010</h2><h3 id="breaking-changes-4" tabindex="-1"><a class="header-anchor" href="#breaking-changes-4" aria-hidden="true">#</a> Breaking Changes</h3><p>None</p><h3 id="features-4" tabindex="-1"><a class="header-anchor" href="#features-4" aria-hidden="true">#</a> Features</h3><ul><li><p>lambda support added to piped indexes, ie <code>example -&gt; [{ lambda }]</code>, to mirror existing <code>@example[{ lambda }]</code> functionality</p></li><li><p><code>--autocomplete</code> flag added to <code>read</code></p></li></ul><h3 id="bug-fixes-4" tabindex="-1"><a class="header-anchor" href="#bug-fixes-4" aria-hidden="true">#</a> Bug Fixes</h3>',15),S=e("li",null,[e("p",null,[a("application specific environmental variables (eg "),e("code",null,"<env:FOO=BAR>"),a(") were not getting set")])],-1),U=e("li",null,[e("p",null,[e("code",null,"cast"),a(" now checks if it is a method. Previously was piping regardless")])],-1),W=e("li",null,[e("p",null,[a("fixed by where nested maps would overwrite when altered with "),e("code",null,"--merge"),a(". Now they merge as expected")])],-1),G=e("code",null,"alter",-1),K={href:"https://github.com/lmorg/murex/issues/536",target:"_blank",rel:"noopener noreferrer"},X=e("li",null,[e("p",null,"remove debugging symbol in deprecated math builtin")],-1),Y=i('<h2 id="v4-1-1100" tabindex="-1"><a class="header-anchor" href="#v4-1-1100" aria-hidden="true">#</a> v4.1.1100</h2><h3 id="breaking-changes-5" tabindex="-1"><a class="header-anchor" href="#breaking-changes-5" aria-hidden="true">#</a> Breaking Changes</h3><ul><li>Any code that expects <code>formap</code> values to be strings despite that value being a different primitive from the originating object. However this type of code would be an anti-pattern so we shouldn&#39;t expect much, if any, code written like this</li></ul><h3 id="features-5" tabindex="-1"><a class="header-anchor" href="#features-5" aria-hidden="true">#</a> Features</h3><ul><li><code>formap</code> values are now data type aware. You no longer need to cast values. Keys are still string only and the intention is to keep them this way</li></ul><h3 id="bug-fixes-5" tabindex="-1"><a class="header-anchor" href="#bug-fixes-5" aria-hidden="true">#</a> Bug Fixes</h3><ul><li><p>improved error messages around a few internal APIs</p></li><li><p>micro optimisations in string parsing (minor order to operations, now converting points at a slightly later stage. This adds zero impact on code complexity and almost zero code refactoring but results in slightly less memory getting copied about)</p></li></ul><h2 id="v4-1-10" tabindex="-1"><a class="header-anchor" href="#v4-1-10" aria-hidden="true">#</a> v4.1.10</h2><h3 id="breaking-changes-6" tabindex="-1"><a class="header-anchor" href="#breaking-changes-6" aria-hidden="true">#</a> Breaking Changes</h3><p>None</p><h3 id="features-6" tabindex="-1"><a class="header-anchor" href="#features-6" aria-hidden="true">#</a> Features</h3><p>No new features</p><h3 id="bug-fixes-6" tabindex="-1"><a class="header-anchor" href="#bug-fixes-6" aria-hidden="true">#</a> Bug Fixes</h3>',13),q=e("li",null,[e("p",null,"code references in error messages are cropped to terminal width")],-1),J={href:"https://github.com/lmorg/murex/issues/566",target:"_blank",rel:"noopener noreferrer"},Q=e("hr",null,null,-1),Z=e("p",null,"Published: 04.06.2023 at 10:44",-1);function ee(ae,ne){const n=t("ExternalLinkIcon");return s(),l("div",null,[h,e("p",null,[a("The previous releases have brought significant advancements to Murex's syntax but at the cost of longer gaps between releases. So the 4.1.x versions will be shorter releases but focusing on bug fixes. The 4.1.x release notes will be appended to "),e("a",c,[a("murex.rocks changelog"),r(n)]),a(" and available on "),e("a",u,[a("Github releases"),r(n)]),a(" too")]),p,e("ul",null,[e("li",null,[e("p",null,[a("generic "),g,a(" data type marshaller can now marshal maps ("),e("a",m,[a("#593"),r(n)]),a(")")])]),e("li",null,[e("p",null,[a("range can count from end when supplied with a negative index ("),e("a",f,[a("read more"),r(n)]),a(")")])])]),b,e("ul",null,[e("li",null,[e("p",null,[_,a(" should inherit module string from the owners module ("),e("a",x,[a("#600"),r(n)]),a(")")])]),v,e("li",null,[e("p",null,[a("new code blocks, "),w,a(", should force a new parameter when following a closing block, "),k,a(" ("),e("a",y,[a("#603"),r(n)]),a(")")])]),B]),F,e("ul",null,[N,e("li",null,[e("p",null,[a("strip "),C,a(" colon from command name when command string is passed from the pre-parser ("),e("a",T,[a("#601"),r(n)]),a(")")])])]),I,e("ul",null,[z,e("li",null,[e("p",null,[P,a(" variable passed to "),D,a(" and "),E,a(" functions in "),M,a(" -- includes the partial term ("),e("a",V,[a("read more"),r(n)]),a(")")])]),A,e("li",null,[e("p",null,[a("Updated "),L,a(" docs ("),e("a",$,[a("read more"),r(n)]),a(")")])]),j,H,O]),R,e("ul",null,[S,U,W,e("li",null,[e("p",null,[G,a(" panics are caught issue ("),e("a",K,[a("#536"),r(n)]),a(")")])]),X]),Y,e("ul",null,[q,e("li",null,[e("p",null,[a("error handling around multiple chained but incompatible tokens ("),e("a",J,[a("#566"),r(n)]),a(")")])])]),Q,Z])}const oe=o(d,[["render",ee],["__file","v4.1.html.vue"]]);export{oe as default};