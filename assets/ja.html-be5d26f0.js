import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as s,c as l,a as e,b as t,d as o,w as n,e as i}from"./app-524c2bb5.js";const u={},c=e("h1",{id:"ja-mkarray-command-reference",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ja-mkarray-command-reference","aria-hidden":"true"},"#"),t(),e("code",null,"ja"),t(" (mkarray) - Command Reference")],-1),h=e("blockquote",null,[e("p",null,"A sophisticated yet simply way to build a JSON array")],-1),m=e("h2",{id:"description",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#description","aria-hidden":"true"},"#"),t(" Description")],-1),_=e("p",null,[t("Murex has a pretty sophisticated builtin for generating JSON arrays. It works a little bit like Bash's "),e("code",null,"{1..9}"),t(" syntax but includes a few additional nifty features.")],-1),p=e("strong",null,[t("Please note that while this builtin is not marked for deprecation, it has been superseded by the "),e("code",null,"%[]"),t(" tokens.")],-1),f=i(`<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><pre><code>ja: [start..end] -&gt; \`&lt;stdout&gt;\`
ja: [start..end.base] -&gt; \`&lt;stdout&gt;\`
ja: [start..end,start..end] -&gt; \`&lt;stdout&gt;\`
ja: [start..end][start..end] -&gt; \`&lt;stdout&gt;\`
</code></pre><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><pre><code>» ja: [1..5]
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
</code></pre><p>Please note that as per the first example, all arrays generated by <code>ja</code> are arrays of strings - even if you&#39;re command is ranging over integers.</p><h2 id="detail" tabindex="-1"><a class="header-anchor" href="#detail" aria-hidden="true">#</a> Detail</h2><p>Please read the documentation on <code>a</code> for a more detailed breakdown on of <code>ja</code>&#39;s supported features.</p><h2 id="see-also" tabindex="-1"><a class="header-anchor" href="#see-also" aria-hidden="true">#</a> See Also</h2>`,8),y=e("code",null,"%[]",-1),g=e("code",null,"[[",-1),q=e("code",null,"[",-1),b=e("code",null,"[",-1),x=e("code",null,"a",-1),j=e("code",null,"count",-1),k=e("code",null,"json",-1),S=e("code",null,"mtac",-1),w=e("code",null,"ta",-1);function N(v,O){const a=d("RouterLink");return s(),l("div",null,[c,h,m,_,e("p",null,[p,t(" ("),o(a,{to:"/guide/parser/create-array.html"},{default:n(()=>[t("read more")]),_:1}),t(")")]),f,e("ul",null,[e("li",null,[o(a,{to:"/guide/parser/create-array.html"},{default:n(()=>[t("Create array ("),y,t(") constructor")]),_:1}),t(": Quickly generate arrays")]),e("li",null,[o(a,{to:"/guide/commands/element.html"},{default:n(()=>[g,t(" (element)")]),_:1}),t(": Outputs an element from a nested structure")]),e("li",null,[o(a,{to:"/guide/commands/"},{default:n(()=>[q,t(" (index)")]),_:1}),t(": Outputs an element from an array, map or table")]),e("li",null,[o(a,{to:"/guide/commands/range.html"},{default:n(()=>[b,t(" (range) ")]),_:1}),t(": Outputs a ranged subset of data from STDIN")]),e("li",null,[o(a,{to:"/guide/commands/a.html"},{default:n(()=>[x,t(" (mkarray)")]),_:1}),t(": A sophisticated yet simple way to build an array or list")]),e("li",null,[o(a,{to:"/guide/commands/count.html"},{default:n(()=>[j]),_:1}),t(": Count items in a map, list or array")]),e("li",null,[o(a,{to:"/guide/types/json.html"},{default:n(()=>[k]),_:1}),t(": JavaScript Object Notation (JSON)")]),e("li",null,[o(a,{to:"/guide/commands/mtac.html"},{default:n(()=>[S]),_:1}),t(": Reverse the order of an array")]),e("li",null,[o(a,{to:"/guide/commands/ta.html"},{default:n(()=>[w,t(" (mkarray)")]),_:1}),t(": A sophisticated yet simple way to build an array of a user defined data-type")])])])}const B=r(u,[["render",N],["__file","ja.html.vue"]]);export{B as default};
