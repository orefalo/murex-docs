import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as s,c as r,d as a,b as n,w as o,e,f as i}from"./app-51a772a0.js";const c={},u=i(`<h1 id="len" tabindex="-1"><a class="header-anchor" href="#len" aria-hidden="true">#</a> <code>len</code></h1><blockquote><p>Outputs the length of an array</p></blockquote><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2><p>This will read an array from STDIN and outputs the length for that array</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><pre><code>\`&lt;stdin&gt;\` -&gt; len -&gt; \`&lt;stdout&gt;\`
</code></pre><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>» tout: json ([&quot;a&quot;, &quot;b&quot;, &quot;c&quot;]) -&gt; len
3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="detail" tabindex="-1"><a class="header-anchor" href="#detail" aria-hidden="true">#</a> Detail</h2><p>Please note that this returns the length of the <em>array</em> rather than string. For example <code>out &quot;foobar&quot; -&gt; len</code> would return <code>1</code> because an array in the <code>str</code> data type would be new line separated (eg <code>out &quot;foo\\nbar&quot; -&gt; len</code> would return <code>2</code>). If you need to count characters in a string and are running POSIX (eg Linux / BSD / OSX) then it is recommended to use <code>wc</code> instead. But be mindful that <code>wc</code> will also count new line characters</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>» out: &quot;foobar&quot; -&gt; len
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="see-also" tabindex="-1"><a class="header-anchor" href="#see-also" aria-hidden="true">#</a> See Also</h2>`,12),m=a("code",null,"@[",-1),h=a("code",null,"[[",-1),p=a("code",null,"[",-1),f=a("code",null,"a",-1),_=a("code",null,"append",-1),b=a("code",null,"ja",-1),v=a("code",null,"jsplit",-1),g=a("code",null,"map",-1),x=a("code",null,"msort",-1),y=a("code",null,"mtac",-1),q=a("code",null,"prepend",-1);function w(S,N){const t=l("RouterLink");return s(),r("div",null,[u,a("ul",null,[a("li",null,[n(t,{to:"/commands/range.html"},{default:o(()=>[e("commands/"),m,e(" (range) ")]),_:1}),e(": Outputs a ranged subset of data from STDIN")]),a("li",null,[n(t,{to:"/commands/element.html"},{default:o(()=>[e("commands/"),h,e(" (element)")]),_:1}),e(": Outputs an element from a nested structure")]),a("li",null,[n(t,{to:"/commands/index2.html"},{default:o(()=>[e("commands/"),p,e(" (index)")]),_:1}),e(": Outputs an element from an array, map or table")]),a("li",null,[n(t,{to:"/commands/a.html"},{default:o(()=>[e("commands/"),f,e(" (mkarray)")]),_:1}),e(": A sophisticated yet simple way to build an array or list")]),a("li",null,[n(t,{to:"/commands/append.html"},{default:o(()=>[e("commands/"),_]),_:1}),e(": Add data to the end of an array")]),a("li",null,[n(t,{to:"/commands/ja.html"},{default:o(()=>[e("commands/"),b,e(" (mkarray)")]),_:1}),e(": A sophisticated yet simply way to build a JSON array")]),a("li",null,[n(t,{to:"/commands/jsplit.html"},{default:o(()=>[e("commands/"),v]),_:1}),e(": Splits STDIN into a JSON array based on a regex parameter")]),a("li",null,[n(t,{to:"/commands/map.html"},{default:o(()=>[e("commands/"),g]),_:1}),e(": Creates a map from two data sources")]),a("li",null,[n(t,{to:"/commands/msort.html"},{default:o(()=>[e("commands/"),x]),_:1}),e(": Sorts an array - data type agnostic")]),a("li",null,[n(t,{to:"/commands/mtac.html"},{default:o(()=>[e("commands/"),y]),_:1}),e(": Reverse the order of an array")]),a("li",null,[n(t,{to:"/commands/prepend.html"},{default:o(()=>[e("commands/"),q]),_:1}),e(": Add data to the start of an array")])])])}const D=d(c,[["render",w],["__file","len.html.vue"]]);export{D as default};
