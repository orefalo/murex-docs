import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as s,c as d,d as e,b as n,w as a,e as t,f as c}from"./app-32a3d18c.js";const r={},u=c('<h1 id="what-s-new-in-murex-v2-8-change-log" tabindex="-1"><a class="header-anchor" href="#what-s-new-in-murex-v2-8-change-log" aria-hidden="true">#</a> What&#39;s new in murex v2.8 - Change Log</h1><p>This release comes with a number of experimental but stable features that might eventually become standard practice. The features are there to use if you with but adjacent from the older code so there is zero risk in updating to this version.</p><p>Breaking Changes:</p><ul><li>None</li></ul><p>Features:</p><ul><li><p>New data-type <code>jsonc</code> (Concatenated JSON). This is an experimental parser for reading multiple JSON documents in a single file or stream. The expectation is that it will eventually replace <code>jsonl</code> (jsonlines) and possibly even the default <code>json</code> data-type</p></li><li><p>Autocomplete can now split on <code>=</code>. However this is an experimental feature</p></li><li><p>New <code>autocomplete</code> directive: <code>Goto</code>. This is an experimental way to add a little more structure to autocomplete definitions without resorting to using dynamic code everywhere</p></li><li><p><code>autocomplete</code> directive <code>FlagValues</code> now supports two values: <code>&quot;*&quot;</code> and <code>&quot;&quot;</code>. These define default properties regardless of the flag used</p></li></ul><p>Minor Changes:</p><ul><li><p>Unmatched records in <strong>index</strong> (<code>[</code>) when parsing a table now produces the same configurable behavior (erroring by default but which can be disabled) as when using <strong>index</strong> against an object</p></li><li><p>Autocompletion suggestions for <code>yarn</code></p></li><li><p>Data-type field in <code>function</code> is now optional</p></li><li><p>Lots of improvements to the docs</p></li></ul><p>Bug Fixes:</p><ul><li><code>$MyVar[[/path/to/element]]</code> now behaves the same when used infixed as it did when used as a function</li></ul><hr><p>Published: 23.05.2022 at 22:23</p><h2 id="see-also" tabindex="-1"><a class="header-anchor" href="#see-also" aria-hidden="true">#</a> See Also</h2>',13),h=e("code",null,"[[",-1),p=e("code",null,"[",-1),m=e("code",null,"autocomplete",-1),f=e("code",null,"function",-1),_=e("code",null,"jsonc",-1);function g(w,b){const o=l("RouterLink");return s(),d("div",null,[u,e("ul",null,[e("li",null,[n(o,{to:"/user-guide/reserved-vars.html"},{default:a(()=>[t("Reserved Variables")]),_:1}),t(": Special variables reserved by Murex")]),e("li",null,[n(o,{to:"/commands/element.html"},{default:a(()=>[h,t(" (element)")]),_:1}),t(": Outputs an element from a nested structure")]),e("li",null,[n(o,{to:"/commands/index2.html"},{default:a(()=>[p,t(" (index)")]),_:1}),t(": Outputs an element from an array, map or table")]),e("li",null,[n(o,{to:"/commands/autocomplete.html"},{default:a(()=>[m]),_:1}),t(": Set definitions for tab-completion in the command line")]),e("li",null,[n(o,{to:"/commands/function.html"},{default:a(()=>[f]),_:1}),t(": Define a function block")]),e("li",null,[n(o,{to:"/types/jsonc.html"},{default:a(()=>[_]),_:1}),t(": Concatenated JSON")])])])}const y=i(r,[["render",g],["__file","v2.8.html.vue"]]);export{y as default};