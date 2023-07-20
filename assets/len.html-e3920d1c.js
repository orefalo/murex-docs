import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as l,c as s,a as t,d as o,w as n,b as e,e as c}from"./app-66ffa3c3.js";const u={},i=c(`<h1 id="murex-shell-docs" tabindex="-1"><a class="header-anchor" href="#murex-shell-docs" aria-hidden="true">#</a> Murex Shell Docs</h1><h2 id="command-reference-len" tabindex="-1"><a class="header-anchor" href="#command-reference-len" aria-hidden="true">#</a> Command Reference: <code>len</code></h2><blockquote><p>Outputs the length of an array</p></blockquote><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2><p>This will read an array from STDIN and outputs the length for that array</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><pre><code>\`&lt;stdin&gt;\` -&gt; len -&gt; \`&lt;stdout&gt;\`
</code></pre><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><pre><code>» tout: json ([&quot;a&quot;, &quot;b&quot;, &quot;c&quot;]) -&gt; len
3
</code></pre><h2 id="detail" tabindex="-1"><a class="header-anchor" href="#detail" aria-hidden="true">#</a> Detail</h2><p>Please note that this returns the length of the <em>array</em> rather than string. For example <code>out &quot;foobar&quot; -&gt; len</code> would return <code>1</code> because an array in the <code>str</code> data type would be new line separated (eg <code>out &quot;foo\\nbar&quot; -&gt; len</code> would return <code>2</code>). If you need to count characters in a string and are running POSIX (eg Linux / BSD / OSX) then it is recommended to use <code>wc</code> instead. But be mindful that <code>wc</code> will also count new line characters</p><pre><code>» out: &quot;foobar&quot; -&gt; len
1

» out: &quot;foo\\nbar&quot; -&gt; len
2

» out: &quot;foobar&quot; -&gt; wc: -c
7

» out: &quot;foo\\nbar&quot; -&gt; wc: -c
8

» printf: &quot;foobar&quot; -&gt; wc: -c
6
# (printf does not print a trailing new line)
</code></pre><h2 id="see-also" tabindex="-1"><a class="header-anchor" href="#see-also" aria-hidden="true">#</a> See Also</h2>`,13),m=t("code",null,"@[",-1),h=t("code",null,"[[",-1),p=t("code",null,"[",-1),f=t("code",null,"a",-1),_=t("code",null,"append",-1),g=t("code",null,"ja",-1),b=t("code",null,"jsplit",-1),y=t("code",null,"map",-1),q=t("code",null,"msort",-1),x=t("code",null,"mtac",-1),w=t("code",null,"prepend",-1);function S(N,k){const a=r("RouterLink");return l(),s("div",null,[i,t("ul",null,[t("li",null,[o(a,{to:"/guide/commands/range.html"},{default:n(()=>[e("commands/"),m,e(" (range) ")]),_:1}),e(": Outputs a ranged subset of data from STDIN")]),t("li",null,[o(a,{to:"/guide/commands/element.html"},{default:n(()=>[e("commands/"),h,e(" (element)")]),_:1}),e(": Outputs an element from a nested structure")]),t("li",null,[o(a,{to:"/guide/commands/"},{default:n(()=>[e("commands/"),p,e(" (index)")]),_:1}),e(": Outputs an element from an array, map or table")]),t("li",null,[o(a,{to:"/guide/commands/a.html"},{default:n(()=>[e("commands/"),f,e(" (mkarray)")]),_:1}),e(": A sophisticated yet simple way to build an array or list")]),t("li",null,[o(a,{to:"/guide/commands/append.html"},{default:n(()=>[e("commands/"),_]),_:1}),e(": Add data to the end of an array")]),t("li",null,[o(a,{to:"/guide/commands/ja.html"},{default:n(()=>[e("commands/"),g,e(" (mkarray)")]),_:1}),e(": A sophisticated yet simply way to build a JSON array")]),t("li",null,[o(a,{to:"/guide/commands/jsplit.html"},{default:n(()=>[e("commands/"),b]),_:1}),e(": Splits STDIN into a JSON array based on a regex parameter")]),t("li",null,[o(a,{to:"/guide/commands/map.html"},{default:n(()=>[e("commands/"),y]),_:1}),e(": Creates a map from two data sources")]),t("li",null,[o(a,{to:"/guide/commands/msort.html"},{default:n(()=>[e("commands/"),q]),_:1}),e(": Sorts an array - data type agnostic")]),t("li",null,[o(a,{to:"/guide/commands/mtac.html"},{default:n(()=>[e("commands/"),x]),_:1}),e(": Reverse the order of an array")]),t("li",null,[o(a,{to:"/guide/commands/prepend.html"},{default:n(()=>[e("commands/"),w]),_:1}),e(": Add data to the start of an array")])])])}const j=d(u,[["render",S],["__file","len.html.vue"]]);export{j as default};