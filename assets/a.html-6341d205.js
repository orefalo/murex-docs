import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as r,c as l,d as a,b as i,w as s,e,f as o}from"./app-73035245.js";const c={},u=o(`<h1 id="a-mkarray" tabindex="-1"><a class="header-anchor" href="#a-mkarray" aria-hidden="true">#</a> <code>a</code> (mkarray)</h1><blockquote><p>A sophisticated yet simple way to build an array or list</p></blockquote><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2><p>Pronounced &quot;make array&quot;, like <code>mkdir</code> (etc), Murex has a pretty sophisticated builtin for generating arrays. Think like bash&#39;s <code>{1..9}</code> syntax:</p><pre><code>a: [1..9]
</code></pre><p>Except Murex also supports other sets of ranges like dates, days of the week, and alternative number bases.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>a: [start..end] -&gt; &lt;stdout&gt;
a: [start..end,start..end] -&gt; &lt;stdout&gt;
a: [start..end][start..end] -&gt; &lt;stdout&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>All usages also work with <code>ja</code> and <code>ta</code> as well, eg:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ja: [start..end] -&gt; &lt;stdout&gt;
ta: data-type [start..end] -&gt; &lt;stdout&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>You can also inline arrays with the <code>%[]</code> syntax, eg:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>%[start..end]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>» a: [1..3]
1
2
3

» a: [3..1]
3
2
1

» a: [01..03]
01
02
03
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="detail" tabindex="-1"><a class="header-anchor" href="#detail" aria-hidden="true">#</a> Detail</h2><h3 id="advanced-array-syntax" tabindex="-1"><a class="header-anchor" href="#advanced-array-syntax" aria-hidden="true">#</a> Advanced Array Syntax</h3><p>The syntax for <code>a</code> is a comma separated list of parameters with expansions stored in square brackets. You can have an expansion embedded inside a parameter or as it&#39;s own parameter. Expansions can also have multiple parameters.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>» a: 01,02,03,05,06,07
01
02
03
05
06
07

» a: 0[1..3],0[5..7]
01
02
03
05
06
07

» a: 0[1..3,5..7]
01
02
03
05
06
07

» a: b[o,i]b
bob
bib
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You can also have multiple expansion blocks in a single parameter:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>» a: a[1..3]b[5..7]
a1b5
a1b6
a1b7
a2b5
a2b6
a2b7
a3b5
a3b6
a3b7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>a</code> will cycle through each iteration of the last expansion, moving itself backwards through the string; behaving like an normal counter.</p><h3 id="creating-json-arrays-with-ja" tabindex="-1"><a class="header-anchor" href="#creating-json-arrays-with-ja" aria-hidden="true">#</a> Creating JSON arrays with <code>ja</code></h3><p>As you can see from the previous examples, <code>a</code> returns the array as a list of strings. This is so you can stream excessively long arrays, for example every IPv4 address: <code>a: [0..254].[0..254].[0..254].[0..254]</code> (this kind of array expansion would hang bash).</p><p>However if you needed a JSON string then you can use all the same syntax as <code>a</code> but forgo the streaming capability:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>» ja: [Monday..Sunday]
[
    &quot;Monday&quot;,
    &quot;Tuesday&quot;,
    &quot;Wednesday&quot;,
    &quot;Thursday&quot;,
    &quot;Friday&quot;,
    &quot;Saturday&quot;,
    &quot;Sunday&quot;
]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This is particularly useful if you are adding formatting that might break under <code>a</code>&#39;s formatting (which uses the <code>str</code> data type).</p><h3 id="smart-arrays" tabindex="-1"><a class="header-anchor" href="#smart-arrays" aria-hidden="true">#</a> Smart arrays</h3><p>Murex supports a number of different formats that can be used to generate arrays. For more details on these please refer to the documents for each format</p>`,28),m=a("h2",{id:"see-also",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#see-also","aria-hidden":"true"},"#"),e(" See Also")],-1),v=a("code",null,"%[]",-1),h=a("code",null,"[[",-1),b=a("code",null,"[",-1),p=a("code",null,"[",-1),y=a("code",null,"count",-1),g=a("code",null,"ja",-1),f=a("code",null,"mtac",-1),x=a("code",null,"str",-1),_=a("code",null,"ta",-1);function k(w,q){const n=t("RouterLink");return r(),l("div",null,[u,a("ul",null,[a("li",null,[i(n,{to:"/mkarray/date.html"},{default:s(()=>[e("Calendar Date Ranges")]),_:1}),e(": Create arrays of dates")]),a("li",null,[i(n,{to:"/mkarray/character.html"},{default:s(()=>[e("Character arrays")]),_:1}),e(": Making character arrays (a to z)")]),a("li",null,[i(n,{to:"/mkarray/decimal.html"},{default:s(()=>[e("Decimal Ranges")]),_:1}),e(": Create arrays of decimal integers")]),a("li",null,[i(n,{to:"/mkarray/non-decimal.html"},{default:s(()=>[e("Non-Decimal Ranges")]),_:1}),e(": Create arrays of integers from non-decimal number bases")]),a("li",null,[i(n,{to:"/mkarray/special.html"},{default:s(()=>[e("Special Ranges")]),_:1}),e(": Create arrays from ranges of dictionary terms (eg weekdays, months, seasons, etc)")])]),m,a("ul",null,[a("li",null,[i(n,{to:"/parser/create-array.html"},{default:s(()=>[e("Create array ("),v,e(") constructor")]),_:1}),e(": Quickly generate arrays")]),a("li",null,[i(n,{to:"/commands/element.html"},{default:s(()=>[h,e(" (element)")]),_:1}),e(": Outputs an element from a nested structure")]),a("li",null,[i(n,{to:"/commands/index2.html"},{default:s(()=>[b,e(" (index)")]),_:1}),e(": Outputs an element from an array, map or table")]),a("li",null,[i(n,{to:"/commands/range.html"},{default:s(()=>[p,e(" (range) ")]),_:1}),e(": Outputs a ranged subset of data from STDIN")]),a("li",null,[i(n,{to:"/commands/count.html"},{default:s(()=>[y]),_:1}),e(": Count items in a map, list or array")]),a("li",null,[i(n,{to:"/commands/ja.html"},{default:s(()=>[g,e(" (mkarray)")]),_:1}),e(": A sophisticated yet simply way to build a JSON array")]),a("li",null,[i(n,{to:"/commands/mtac.html"},{default:s(()=>[f]),_:1}),e(": Reverse the order of an array")]),a("li",null,[i(n,{to:"/types/str.html"},{default:s(()=>[x,e(" (string) ")]),_:1}),e(": string (primitive)")]),a("li",null,[i(n,{to:"/commands/ta.html"},{default:s(()=>[_,e(" (mkarray)")]),_:1}),e(": A sophisticated yet simple way to build an array of a user defined data-type")])])])}const j=d(c,[["render",k],["__file","a.html.vue"]]);export{j as default};
