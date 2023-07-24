import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as r,c as d,d as e,b as o,w as l,e as t,f as i}from"./app-d5c3dbe7.js";const c={},u=i(`<h1 id="jsplit" tabindex="-1"><a class="header-anchor" href="#jsplit" aria-hidden="true">#</a> <code>jsplit</code></h1><blockquote><p>Splits STDIN into a JSON array based on a regex parameter</p></blockquote><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2><p><code>jsplit</code> will read from STDIN and split it based on a regex parameter. It outputs a JSON array.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><pre><code>\`&lt;stdin&gt;\` -&gt; jsplit: regex -&gt; \`&lt;stdout&gt;\`
</code></pre><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><pre><code>» (hello, world) -&gt; jsplit: l+
[
    &quot;he&quot;,
    &quot;o, wor&quot;,
    &quot;d&quot;
]
</code></pre><h2 id="detail" tabindex="-1"><a class="header-anchor" href="#detail" aria-hidden="true">#</a> Detail</h2><p><code>jsplit</code> will trim trailing carriage returns and line feeds from each element as well as any trailing empty elements (zero length strings) in the JSON array. However any empty elements will be retained and any other whitespace characters</p><ul><li>or carriage returns and/or line feeds in the middle of an element - will be retained.</li></ul><p>This is so that the formatting of (multiline) text is retained as much as possible to ensure the <code>jsplit</code> is accurate while at the same time any commonly unwanted &quot;noise&quot; is stripped from the output.</p><h2 id="synonyms" tabindex="-1"><a class="header-anchor" href="#synonyms" aria-hidden="true">#</a> Synonyms</h2><ul><li><code>jsplit</code></li><li><code>list.split</code></li></ul><h2 id="see-also" tabindex="-1"><a class="header-anchor" href="#see-also" aria-hidden="true">#</a> See Also</h2>`,15),m=e("code",null,"2darray",-1),h=e("code",null,"[[",-1),p=e("code",null,"[",-1),_=e("code",null,"[",-1),f=e("code",null,"a",-1),y=e("code",null,"append",-1),g=e("code",null,"count",-1),x=e("code",null,"ja",-1),b=e("code",null,"map",-1),w=e("code",null,"msort",-1),j=e("code",null,"mtac",-1),S=e("code",null,"prepend",-1);function N(q,k){const a=s("RouterLink");return r(),d("div",null,[u,e("ul",null,[e("li",null,[o(a,{to:"/commands/2darray.html"},{default:l(()=>[m]),_:1}),t(": Create a 2D JSON array from multiple input sources")]),e("li",null,[o(a,{to:"/commands/element.html"},{default:l(()=>[h,t(" (element)")]),_:1}),t(": Outputs an element from a nested structure")]),e("li",null,[o(a,{to:"/commands/index2.html"},{default:l(()=>[p,t(" (index)")]),_:1}),t(": Outputs an element from an array, map or table")]),e("li",null,[o(a,{to:"/commands/range.html"},{default:l(()=>[_,t(" (range) ")]),_:1}),t(": Outputs a ranged subset of data from STDIN")]),e("li",null,[o(a,{to:"/commands/a.html"},{default:l(()=>[f,t(" (mkarray)")]),_:1}),t(": A sophisticated yet simple way to build an array or list")]),e("li",null,[o(a,{to:"/commands/append.html"},{default:l(()=>[y]),_:1}),t(": Add data to the end of an array")]),e("li",null,[o(a,{to:"/commands/count.html"},{default:l(()=>[g]),_:1}),t(": Count items in a map, list or array")]),e("li",null,[o(a,{to:"/commands/ja.html"},{default:l(()=>[x,t(" (mkarray)")]),_:1}),t(": A sophisticated yet simply way to build a JSON array")]),e("li",null,[o(a,{to:"/commands/map.html"},{default:l(()=>[b]),_:1}),t(": Creates a map from two data sources")]),e("li",null,[o(a,{to:"/commands/msort.html"},{default:l(()=>[w]),_:1}),t(": Sorts an array - data type agnostic")]),e("li",null,[o(a,{to:"/commands/mtac.html"},{default:l(()=>[j]),_:1}),t(": Reverse the order of an array")]),e("li",null,[o(a,{to:"/commands/prepend.html"},{default:l(()=>[S]),_:1}),t(": Add data to the start of an array")])])])}const v=n(c,[["render",N],["__file","jsplit.html.vue"]]);export{v as default};