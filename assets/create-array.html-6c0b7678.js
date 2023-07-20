import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as i,c as l,a,b as e,d as t,w as o,e as n}from"./app-66ffa3c3.js";const c={},u=n(`<h1 id="create-array-constructor-parser-reference" tabindex="-1"><a class="header-anchor" href="#create-array-constructor-parser-reference" aria-hidden="true">#</a> Create array (<code>%[]</code>) constructor - Parser Reference</h1><blockquote><p>Quickly generate arrays</p></blockquote><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2><p><code>%[]</code> is a way of defining arrays in expressions and statements. Whenever a <code>%[]</code> array is outputted as a string, it will be converted to minified JSON.</p><p>Array elements inside <code>%[]</code> can be whitespace and/or comma delimited. This allows for compatibility with both Bash muscle memory, and people more familiar with JSON.</p><p>Additionally you can also embed <code>a</code> style parameters inside <code>%[]</code> arrays too.</p><p>Like with YAML, strings in <code>%[]</code> do not need to be quoted unless you need to force numeric or boolean looking values to be stored as strings.</p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><h3 id="arrays-passed-as-a-json-string" tabindex="-1"><a class="header-anchor" href="#arrays-passed-as-a-json-string" aria-hidden="true">#</a> Arrays passed as a JSON string:</h3><pre><code>» echo %[1..3]
[1,2,3]

» %[1..3] -&gt; cat
[1,2,3]
</code></pre><h3 id="different-supported-syntax-for-creating-a-numeric-array" tabindex="-1"><a class="header-anchor" href="#different-supported-syntax-for-creating-a-numeric-array" aria-hidden="true">#</a> Different supported syntax for creating a numeric array:</h3><h4 id="as-a-range" tabindex="-1"><a class="header-anchor" href="#as-a-range" aria-hidden="true">#</a> As a range</h4><pre><code>» %[1..3]
[
    1,
    2,
    3
]
</code></pre><h4 id="json-formatted" tabindex="-1"><a class="header-anchor" href="#json-formatted" aria-hidden="true">#</a> JSON formatted</h4><pre><code>» %[1,2,3]
[
    1,
    2,
    3
]
</code></pre><h4 id="whitespace-separated" tabindex="-1"><a class="header-anchor" href="#whitespace-separated" aria-hidden="true">#</a> Whitespace separated</h4><pre><code>» %[1 2 3]
[
    1,
    2,
    3
]
</code></pre><h4 id="values-and-ranges" tabindex="-1"><a class="header-anchor" href="#values-and-ranges" aria-hidden="true">#</a> Values and ranges</h4><pre><code>» %[1,2..3]
[
    1,
    2,
    3
]
</code></pre><h3 id="strings" tabindex="-1"><a class="header-anchor" href="#strings" aria-hidden="true">#</a> Strings:</h3><h4 id="barewords-and-whitespace-separated" tabindex="-1"><a class="header-anchor" href="#barewords-and-whitespace-separated" aria-hidden="true">#</a> barewords and whitespace separated</h4><p>This will allow you to copy/paste lists from traditional shells like Bash</p><pre><code>» %[foo bar]
[
    &quot;foo&quot;,
    &quot;bar&quot;
]
</code></pre><h4 id="json-formatted-1" tabindex="-1"><a class="header-anchor" href="#json-formatted-1" aria-hidden="true">#</a> JSON formatted</h4><pre><code>» %[&quot;foo&quot;, &quot;bar&quot;]
[
    &quot;foo&quot;,
    &quot;bar&quot;
]
</code></pre><h3 id="special-ranges" tabindex="-1"><a class="header-anchor" href="#special-ranges" aria-hidden="true">#</a> Special ranges</h3><pre><code>» %[June..August]
[
    &quot;June&quot;,
    &quot;July&quot;,
    &quot;August&quot;
]
</code></pre>`,27),h=n(`<h3 id="multiple-expansion-blocks" tabindex="-1"><a class="header-anchor" href="#multiple-expansion-blocks" aria-hidden="true">#</a> Multiple expansion blocks:</h3><pre><code>» %[[A,B]:[1..4]]
[
    &quot;A:1&quot;,
    &quot;A:2&quot;,
    &quot;A:3&quot;,
    &quot;A:4&quot;,
    &quot;B:1&quot;,
    &quot;B:2&quot;,
    &quot;B:3&quot;,
    &quot;B:4&quot;
]
</code></pre><h3 id="nested-arrays" tabindex="-1"><a class="header-anchor" href="#nested-arrays" aria-hidden="true">#</a> Nested arrays:</h3><pre><code>» %[foo [bar]]
[
    &quot;foo&quot;,
    [
        &quot;bar&quot;
    ]
]
</code></pre><p>The <code>%</code> prefix for the nested array is optional.</p><h3 id="json-objects-within-arrays" tabindex="-1"><a class="header-anchor" href="#json-objects-within-arrays" aria-hidden="true">#</a> JSON objects within arrays</h3><pre><code>» %[foo {bar: baz}]
[
    &quot;foo&quot;,
    {
        &quot;bar&quot;: &quot;baz&quot;
    }
]
</code></pre><p>The <code>%</code> prefix for the nested object is optional.</p><h2 id="detail" tabindex="-1"><a class="header-anchor" href="#detail" aria-hidden="true">#</a> Detail</h2><p>Murex supports a number of different formats that can be used to generate arrays. For more details on these please refer to the documents for each format</p>`,10),p=a("h2",{id:"see-also",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#see-also","aria-hidden":"true"},"#"),e(" See Also")],-1),m=a("code",null,"%(",-1),f=a("code",null,")",-1),y=a("code",null,"%{}",-1),b=a("code",null,'"',-1),g=a("code",null,"'",-1),_=a("code",null,"a",-1),q=a("code",null,"expr",-1),x=a("code",null,"ja",-1),k=a("code",null,"ta",-1);function w(A,j){const r=d("RouterLink");return i(),l("div",null,[u,a("p",null,[e("A full list of special ranges are available at "),t(r,{to:"/guide/mkarray/special.html"},{default:o(()=>[e("docs/mkarray/special")]),_:1})]),h,a("ul",null,[a("li",null,[t(r,{to:"/guide/mkarray/date.html"},{default:o(()=>[e("Calendar Date Ranges")]),_:1}),e(": Create arrays of dates")]),a("li",null,[t(r,{to:"/guide/mkarray/character.html"},{default:o(()=>[e("Character arrays")]),_:1}),e(": Making character arrays (a to z)")]),a("li",null,[t(r,{to:"/guide/mkarray/decimal.html"},{default:o(()=>[e("Decimal Ranges")]),_:1}),e(": Create arrays of decimal integers")]),a("li",null,[t(r,{to:"/guide/mkarray/non-decimal.html"},{default:o(()=>[e("Non-Decimal Ranges")]),_:1}),e(": Create arrays of integers from non-decimal number bases")]),a("li",null,[t(r,{to:"/guide/mkarray/special.html"},{default:o(()=>[e("Special Ranges")]),_:1}),e(": Create arrays from ranges of dictionary terms (eg weekdays, months, seasons, etc)")])]),p,a("ul",null,[a("li",null,[t(r,{to:"/guide/parser/brace-quote.html"},{default:o(()=>[e("Brace Quote ("),m,e(", "),f,e(") Tokens")]),_:1}),e(": Initiates or terminates a string (variables expanded)")]),a("li",null,[t(r,{to:"/guide/parser/create-object.html"},{default:o(()=>[e("Create object ("),y,e(") constructor")]),_:1}),e(": Quickly generate objects and maps")]),a("li",null,[t(r,{to:"/guide/parser/double-quote.html"},{default:o(()=>[e("Double Quote ("),b,e(") Token")]),_:1}),e(": Initiates or terminates a string (variables expanded)")]),a("li",null,[t(r,{to:"/guide/parser/single-quote.html"},{default:o(()=>[e("Single Quote ("),g,e(") Token")]),_:1}),e(": Initiates or terminates a string (variables not expanded)")]),a("li",null,[t(r,{to:"/guide/mkarray/special.html"},{default:o(()=>[e("Special Ranges")]),_:1}),e(": Create arrays from ranges of dictionary terms (eg weekdays, months, seasons, etc)")]),a("li",null,[t(r,{to:"/guide/commands/a.html"},{default:o(()=>[_,e(" (mkarray)")]),_:1}),e(": A sophisticated yet simple way to build an array or list")]),a("li",null,[t(r,{to:"/guide/commands/expr.html"},{default:o(()=>[q]),_:1}),e(": Expressions: mathematical, string comparisons, logical operators")]),a("li",null,[t(r,{to:"/guide/commands/ja.html"},{default:o(()=>[x,e(" (mkarray)")]),_:1}),e(": A sophisticated yet simply way to build a JSON array")]),a("li",null,[t(r,{to:"/guide/commands/ta.html"},{default:o(()=>[k,e(" (mkarray)")]),_:1}),e(": A sophisticated yet simple way to build an array of a user defined data-type")])])])}const v=s(c,[["render",w],["__file","create-array.html.vue"]]);export{v as default};