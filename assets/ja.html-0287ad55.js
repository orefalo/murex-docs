import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as l,c as i,d as e,e as a,b as n,w as s,f as r}from"./app-dae038b0.js";const u={},c=e("h1",{id:"ja-mkarray",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ja-mkarray","aria-hidden":"true"},"#"),a(),e("code",null,"ja"),a(" (mkarray)")],-1),m=e("blockquote",null,[e("p",null,"A sophisticated yet simply way to build a JSON array")],-1),h=e("h2",{id:"description",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#description","aria-hidden":"true"},"#"),a(" Description")],-1),_=e("p",null,[a("Murex has a pretty sophisticated builtin for generating JSON arrays. It works a little bit like Bash's "),e("code",null,"{1..9}"),a(" syntax but includes a few additional nifty features.")],-1),v=e("strong",null,[a("Please note that while this builtin is not marked for deprecation, it has been superseded by the "),e("code",null,"%[]"),a(" tokens.")],-1),p=r(`<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><pre><code>ja: [start..end] -&gt; \`&lt;stdout&gt;\`
ja: [start..end.base] -&gt; \`&lt;stdout&gt;\`
ja: [start..end,start..end] -&gt; \`&lt;stdout&gt;\`
ja: [start..end][start..end] -&gt; \`&lt;stdout&gt;\`
</code></pre><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>» ja: [1..5]
[
    &quot;1&quot;,
    &quot;2&quot;,
    &quot;3&quot;,
    &quot;4&quot;,
    &quot;5&quot;
]

» ja: [Monday..Sunday]
[
    &quot;Monday&quot;,
    &quot;Tuesday&quot;,
    &quot;Wednesday&quot;,
    &quot;Thursday&quot;,
    &quot;Friday&quot;,
    &quot;Saturday&quot;,
    &quot;Sunday&quot;
]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Please note that as per the first example, all arrays generated by <code>ja</code> are arrays of strings - even if you&#39;re command is ranging over integers.</p><h2 id="detail" tabindex="-1"><a class="header-anchor" href="#detail" aria-hidden="true">#</a> Detail</h2><p>Please read the documentation on <code>a</code> for a more detailed breakdown on of <code>ja</code>&#39;s supported features.</p><h2 id="see-also" tabindex="-1"><a class="header-anchor" href="#see-also" aria-hidden="true">#</a> See Also</h2>`,8),b=e("code",null,"%[]",-1),f=e("code",null,"[[",-1),y=e("code",null,"[",-1),g=e("code",null,"[",-1),q=e("code",null,"a",-1),x=e("code",null,"count",-1),j=e("code",null,"json",-1),k=e("code",null,"mtac",-1),S=e("code",null,"ta",-1);function w(N,O){const t=o("RouterLink");return l(),i("div",null,[c,m,h,_,e("p",null,[v,a(" ("),n(t,{to:"/parser/create-array.html"},{default:s(()=>[a("read more")]),_:1}),a(")")]),p,e("ul",null,[e("li",null,[n(t,{to:"/parser/create-array.html"},{default:s(()=>[a("Create array ("),b,a(") constructor")]),_:1}),a(": Quickly generate arrays")]),e("li",null,[n(t,{to:"/commands/element.html"},{default:s(()=>[f,a(" (element)")]),_:1}),a(": Outputs an element from a nested structure")]),e("li",null,[n(t,{to:"/commands/index2.html"},{default:s(()=>[y,a(" (index)")]),_:1}),a(": Outputs an element from an array, map or table")]),e("li",null,[n(t,{to:"/commands/range.html"},{default:s(()=>[g,a(" (range) ")]),_:1}),a(": Outputs a ranged subset of data from STDIN")]),e("li",null,[n(t,{to:"/commands/a.html"},{default:s(()=>[q,a(" (mkarray)")]),_:1}),a(": A sophisticated yet simple way to build an array or list")]),e("li",null,[n(t,{to:"/commands/count.html"},{default:s(()=>[x]),_:1}),a(": Count items in a map, list or array")]),e("li",null,[n(t,{to:"/types/json.html"},{default:s(()=>[j]),_:1}),a(": JavaScript Object Notation (JSON)")]),e("li",null,[n(t,{to:"/commands/mtac.html"},{default:s(()=>[k]),_:1}),a(": Reverse the order of an array")]),e("li",null,[n(t,{to:"/commands/ta.html"},{default:s(()=>[S,a(" (mkarray)")]),_:1}),a(": A sophisticated yet simple way to build an array of a user defined data-type")])])])}const C=d(u,[["render",w],["__file","ja.html.vue"]]);export{C as default};
