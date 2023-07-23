import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as d,c as i,d as t,b as a,w as n,e,f as l}from"./app-27c1e3fb.js";const c={},u=l(`<h1 id="msort" tabindex="-1"><a class="header-anchor" href="#msort" aria-hidden="true">#</a> <code>msort</code></h1><blockquote><p>Sorts an array - data type agnostic</p></blockquote><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2><p>This builtin takes input from stdin, sorts it and the outputs it to stdout.</p><p>The code behind <code>msort</code> is significantly more lightweight than UNIX sort. It doesn&#39;t work with numeric types (eg sorting floating point numbers), reversed order nor multi-column data. It is specifically designed to work with lists of data. For example arrays in data formats like JSON (<code>json</code>), YAML (<code>yaml</code>) or S-Expressions (<code>sexp</code>); or lists of strings (<code>str</code>). The intention is to cover use cases not already covered by UNIX sort while also providing something rudimentary for Murex scripts to function on Windows without having to write lots of ugly platform-specific code. This is also the reason this builtin is called <code>msort</code> rather than conflicting with the existing UNIX name, <code>sort</code>.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><pre><code>\`&lt;stdin&gt;\` -&gt; msort -&gt; \`&lt;stdout&gt;\`
</code></pre><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><pre><code>» tout: json ([&quot;c&quot;, &quot;b&quot;, &quot;a&quot;]) -&gt; msort
[
    &quot;a&quot;,
    &quot;b&quot;,
    &quot;c&quot;
]
</code></pre><p>Since <code>msort</code> does not support reversed order, you will need to pipe the output of <code>msort</code> into another builtin:</p><pre><code>» tout: json ([&quot;c&quot;, &quot;b&quot;, &quot;a&quot;]) -&gt; msort -&gt; mtac
[
    &quot;c&quot;,
    &quot;b&quot;,
    &quot;a&quot;
]
</code></pre><h2 id="synonyms" tabindex="-1"><a class="header-anchor" href="#synonyms" aria-hidden="true">#</a> Synonyms</h2><ul><li><code>msort</code></li><li><code>list.sort</code></li></ul><h2 id="see-also" tabindex="-1"><a class="header-anchor" href="#see-also" aria-hidden="true">#</a> See Also</h2>`,14),h=t("code",null,"[[",-1),m=t("code",null,"[",-1),p=t("code",null,"[",-1),_=t("code",null,"a",-1),f=t("code",null,"alter",-1),g=t("code",null,"append",-1),y=t("code",null,"count",-1),q=t("code",null,"ja",-1),b=t("code",null,"jsplit",-1),x=t("code",null,"mtac",-1),w=t("code",null,"prepend",-1);function k(N,S){const o=r("RouterLink");return d(),i("div",null,[u,t("ul",null,[t("li",null,[a(o,{to:"/commands/element.html"},{default:n(()=>[h,e(" (element)")]),_:1}),e(": Outputs an element from a nested structure")]),t("li",null,[a(o,{to:"/commands/index2.html"},{default:n(()=>[m,e(" (index)")]),_:1}),e(": Outputs an element from an array, map or table")]),t("li",null,[a(o,{to:"/commands/range.html"},{default:n(()=>[p,e(" (range) ")]),_:1}),e(": Outputs a ranged subset of data from STDIN")]),t("li",null,[a(o,{to:"/commands/a.html"},{default:n(()=>[_,e(" (mkarray)")]),_:1}),e(": A sophisticated yet simple way to build an array or list")]),t("li",null,[a(o,{to:"/commands/alter.html"},{default:n(()=>[f]),_:1}),e(": Change a value within a structured data-type and pass that change along the pipeline without altering the original source input")]),t("li",null,[a(o,{to:"/commands/append.html"},{default:n(()=>[g]),_:1}),e(": Add data to the end of an array")]),t("li",null,[a(o,{to:"/commands/count.html"},{default:n(()=>[y]),_:1}),e(": Count items in a map, list or array")]),t("li",null,[a(o,{to:"/commands/ja.html"},{default:n(()=>[q,e(" (mkarray)")]),_:1}),e(": A sophisticated yet simply way to build a JSON array")]),t("li",null,[a(o,{to:"/commands/jsplit.html"},{default:n(()=>[b]),_:1}),e(": Splits STDIN into a JSON array based on a regex parameter")]),t("li",null,[a(o,{to:"/commands/mtac.html"},{default:n(()=>[x]),_:1}),e(": Reverse the order of an array")]),t("li",null,[a(o,{to:"/commands/prepend.html"},{default:n(()=>[w]),_:1}),e(": Add data to the start of an array")])])])}const I=s(c,[["render",k],["__file","msort.html.vue"]]);export{I as default};