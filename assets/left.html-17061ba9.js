import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as s,c as i,d as e,b as o,w as n,e as t,f as d}from"./app-b92fd348.js";const u={},c=d(`<h1 id="left" tabindex="-1"><a class="header-anchor" href="#left" aria-hidden="true">#</a> <code>left</code></h1><blockquote><p>Left substring every item in a list</p></blockquote><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2><p>Takes a list from STDIN and returns a left substring of that same list.</p><p>One parameter is required and that is the number of characters to return. If the parameter is a negative then <code>left</code> counts from the right.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><pre><code>\`&lt;stdin&gt;\` -&gt; left int -&gt; \`&lt;stdout&gt;\`
</code></pre><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Count from the left</p><pre><code>» ja: [Monday..Wednesday] -&gt; left 2
[
    &quot;Mo&quot;,
    &quot;Tu&quot;,
    &quot;We&quot;
]
</code></pre><p>Count from the right</p><pre><code>» ja: [Monday..Wednesday] -&gt; left -3
[
    &quot;Mon&quot;,
    &quot;Tues&quot;,
    &quot;Wednes&quot;
]
</code></pre><h2 id="detail" tabindex="-1"><a class="header-anchor" href="#detail" aria-hidden="true">#</a> Detail</h2><p>Supported data types can queried via <code>runtime</code></p><pre><code>runtime: --marshallers
runtime: --unmarshallers
</code></pre><h2 id="synonyms" tabindex="-1"><a class="header-anchor" href="#synonyms" aria-hidden="true">#</a> Synonyms</h2><ul><li><code>left</code></li><li><code>list.left</code></li></ul><h2 id="see-also" tabindex="-1"><a class="header-anchor" href="#see-also" aria-hidden="true">#</a> See Also</h2>`,18),h=e("code",null,"a",-1),m=e("code",null,"count",-1),f=e("code",null,"ja",-1),p=e("code",null,"lang.MarshalData()",-1),_=e("code",null,"lang.UnmarshalData()",-1),y=e("code",null,"prefix",-1),g=e("code",null,"right",-1),x=e("code",null,"runtime",-1),b=e("code",null,"suffix",-1);function q(v,k){const a=l("RouterLink");return s(),i("div",null,[c,e("ul",null,[e("li",null,[o(a,{to:"/commands/a.html"},{default:n(()=>[h,t(" (mkarray)")]),_:1}),t(": A sophisticated yet simple way to build an array or list")]),e("li",null,[o(a,{to:"/commands/count.html"},{default:n(()=>[m]),_:1}),t(": Count items in a map, list or array")]),e("li",null,[o(a,{to:"/commands/ja.html"},{default:n(()=>[f,t(" (mkarray)")]),_:1}),t(": A sophisticated yet simply way to build a JSON array")]),e("li",null,[o(a,{to:"/apis/lang.MarshalData.html"},{default:n(()=>[p,t(" (system API)")]),_:1}),t(": Converts structured memory into a Murex data-type (eg for stdio)")]),e("li",null,[o(a,{to:"/apis/lang.UnmarshalData.html"},{default:n(()=>[_,t(" (system API)")]),_:1}),t(": Converts a Murex data-type into structured memory")]),e("li",null,[o(a,{to:"/commands/prefix.html"},{default:n(()=>[y]),_:1}),t(": Prefix a string to every item in a list")]),e("li",null,[o(a,{to:"/commands/right.html"},{default:n(()=>[g]),_:1}),t(": Right substring every item in a list")]),e("li",null,[o(a,{to:"/commands/runtime.html"},{default:n(()=>[x]),_:1}),t(": Returns runtime information on the internal state of Murex")]),e("li",null,[o(a,{to:"/commands/suffix.html"},{default:n(()=>[b]),_:1}),t(": Prefix a string to every item in a list")])])])}const D=r(u,[["render",q],["__file","left.html.vue"]]);export{D as default};
