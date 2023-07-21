import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as s,c as l,d as e,b as o,w as n,e as t,f as u}from"./app-b92fd348.js";const i={},c=u(`<h1 id="ta-mkarray" tabindex="-1"><a class="header-anchor" href="#ta-mkarray" aria-hidden="true">#</a> <code>ta</code> (mkarray)</h1><blockquote><p>A sophisticated yet simple way to build an array of a user defined data-type</p></blockquote><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2><p>Murex has a pretty sophisticated builtin for generating arrays. It works a little bit like Bash&#39;s <code>{1..9}</code> syntax but includes a few additional nifty features and the output format is user defined.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><pre><code>ta: data-type [start..end] -&gt; \`&lt;stdout&gt;\`
ta: data-type [start..end.base] -&gt; \`&lt;stdout&gt;\`
ta: data-type [start..end,start..end] -&gt; \`&lt;stdout&gt;\`
ta: data-type [start..end][start..end] -&gt; \`&lt;stdout&gt;\`
</code></pre><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><pre><code>» ta: json [1..5]
[
    &quot;1&quot;,
    &quot;2&quot;,
    &quot;3&quot;,
    &quot;4&quot;,
    &quot;5&quot;
]

» ta: json [Monday..Sunday]
[
    &quot;Monday&quot;,
    &quot;Tuesday&quot;,
    &quot;Wednesday&quot;,
    &quot;Thursday&quot;,
    &quot;Friday&quot;,
    &quot;Saturday&quot;,
    &quot;Sunday&quot;
]
</code></pre><p>Please note that as per the first example, all arrays generated by <code>ta</code> are arrays of strings - even if you&#39;re command is ranging over integers. Also if you are only creating arrays in JSON then you could use <code>ja</code> instead.</p><h2 id="detail" tabindex="-1"><a class="header-anchor" href="#detail" aria-hidden="true">#</a> Detail</h2><p>Please read the documentation on <code>a</code> for a more detailed breakdown on of <code>ta</code>&#39;s supported features.</p><h2 id="see-also" tabindex="-1"><a class="header-anchor" href="#see-also" aria-hidden="true">#</a> See Also</h2>`,12),h=e("code",null,"%[]",-1),m=e("code",null,"[[",-1),p=e("code",null,"[",-1),y=e("code",null,"[",-1),f=e("code",null,"a",-1),_=e("code",null,"count",-1),q=e("code",null,"ja",-1),g=e("code",null,"mtac",-1);function b(x,k){const a=d("RouterLink");return s(),l("div",null,[c,e("ul",null,[e("li",null,[o(a,{to:"/parser/create-array.html"},{default:n(()=>[t("Create array ("),h,t(") constructor")]),_:1}),t(": Quickly generate arrays")]),e("li",null,[o(a,{to:"/commands/element.html"},{default:n(()=>[m,t(" (element)")]),_:1}),t(": Outputs an element from a nested structure")]),e("li",null,[o(a,{to:"/commands/"},{default:n(()=>[p,t(" (index)")]),_:1}),t(": Outputs an element from an array, map or table")]),e("li",null,[o(a,{to:"/commands/range.html"},{default:n(()=>[y,t(" (range) ")]),_:1}),t(": Outputs a ranged subset of data from STDIN")]),e("li",null,[o(a,{to:"/commands/a.html"},{default:n(()=>[f,t(" (mkarray)")]),_:1}),t(": A sophisticated yet simple way to build an array or list")]),e("li",null,[o(a,{to:"/commands/count.html"},{default:n(()=>[_]),_:1}),t(": Count items in a map, list or array")]),e("li",null,[o(a,{to:"/commands/ja.html"},{default:n(()=>[q,t(" (mkarray)")]),_:1}),t(": A sophisticated yet simply way to build a JSON array")]),e("li",null,[o(a,{to:"/commands/mtac.html"},{default:n(()=>[g]),_:1}),t(": Reverse the order of an array")])])])}const N=r(i,[["render",b],["__file","ta.html.vue"]]);export{N as default};
