import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as n,o as d,c as s,a as e,d as o,w as l,b as a,e as r}from"./app-524c2bb5.js";const c={},u=r('<h1 id="tabulate-command-reference" tabindex="-1"><a class="header-anchor" href="#tabulate-command-reference" aria-hidden="true">#</a> <code>tabulate</code> - Command Reference</h1><blockquote><p>Table transformation tools</p></blockquote><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2><p><code>tabluate</code> is a swiss army knife for table transforming human readable tables into machine readable data structure.</p><blockquote><p>Please note that this builtin is still in active development and the default behavior will continue to change and evolve. Any features marked with a flag (see below) will be stable, have numerous tests written against them, and thus safe to use.</p></blockquote><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><pre><code>`&lt;stdin&gt;` -&gt; tabulate [ flags ] -&gt; `&lt;stdout&gt;`\n</code></pre><h2 id="flags" tabindex="-1"><a class="header-anchor" href="#flags" aria-hidden="true">#</a> Flags</h2><ul><li><code>--column-wraps</code> Boolean, used with --map or --key-value to merge trailing lines if the text wraps within the same column</li><li><code>--help</code> Boolean, displays a list of flags</li><li><code>--joiner</code> String, used with --map to concatenate any trailing records in a given field</li><li><code>--key-inc-hint</code> Boolean, used with --map to split any space or equal delimited hints/examples (eg parsing flags)</li><li><code>--key-value</code> Boolean, discard any records that don&#39;t appear key value pairs (auto-enabled when --map used)</li><li><code>--map</code> Boolean, return JSON map instead of table</li><li><code>--separator</code> &#39;String, custom regex pattern for spliting fields (default: <code>(\\t|\\s[\\s]+)+</code>)&#39;</li><li><code>--split-comma</code> Boolean, split first field and duplicate the line if comma found in first field (eg parsing flags in help pages)</li><li><code>--split-space</code> Boolean, split first field and duplicate the line if white space found in first field (eg parsing flags in help pages)</li></ul><h2 id="detail" tabindex="-1"><a class="header-anchor" href="#detail" aria-hidden="true">#</a> Detail</h2><h3 id="dynamic-autocompletion" tabindex="-1"><a class="header-anchor" href="#dynamic-autocompletion" aria-hidden="true">#</a> Dynamic Autocompletion</h3><p>Because <code>tabulate</code> is designed to parse human readable tables, it is used a lot for dynamically turning command like program help output into JSON maps for <code>autocomplete</code>&#39;s <strong>DynamicDesc</strong> blocks:</p><pre><code>rsync --help -&gt; @[^Options$..--help]re -&gt; tabulate: --map --split-comma --column-wraps --key-inc-hint\n</code></pre><h2 id="see-also" tabindex="-1"><a class="header-anchor" href="#see-also" aria-hidden="true">#</a> See Also</h2>',14),h=e("code",null,"[[",-1),m=e("code",null,"[",-1),p=e("code",null,"autocomplete",-1),f=e("code",null,"formap",-1),g=e("code",null,"format",-1);function b(_,y){const t=n("RouterLink");return d(),s("div",null,[u,e("ul",null,[e("li",null,[o(t,{to:"/guide/commands/element.html"},{default:l(()=>[h,a(" (element)")]),_:1}),a(": Outputs an element from a nested structure")]),e("li",null,[o(t,{to:"/guide/commands/"},{default:l(()=>[m,a(" (index)")]),_:1}),a(": Outputs an element from an array, map or table")]),e("li",null,[o(t,{to:"/guide/commands/autocomplete.html"},{default:l(()=>[p]),_:1}),a(": Set definitions for tab-completion in the command line")]),e("li",null,[o(t,{to:"/guide/commands/formap.html"},{default:l(()=>[f]),_:1}),a(": Iterate through a map or other collection of data")]),e("li",null,[o(t,{to:"/guide/commands/format.html"},{default:l(()=>[g]),_:1}),a(": Reformat one data-type into another data-type")])])])}const x=i(c,[["render",b],["__file","tabulate.html.vue"]]);export{x as default};
