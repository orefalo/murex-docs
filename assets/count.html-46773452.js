import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as l,c as s,d as e,b as o,w as n,e as t,f as r}from"./app-7f3a7ef5.js";const u={},c=r(`<h1 id="count" tabindex="-1"><a class="header-anchor" href="#count" aria-hidden="true">#</a> <code>count</code></h1><blockquote><p>Count items in a map, list or array</p></blockquote><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><pre><code>&lt;stdin&gt; -&gt; count: [ --duplications | --unique | --total ] -&gt; &lt;stdout&gt;
</code></pre><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Count number of items in a map, list or array:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>» tout: json ([&quot;a&quot;, &quot;b&quot;, &quot;c&quot;]) -&gt; count
3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="flags" tabindex="-1"><a class="header-anchor" href="#flags" aria-hidden="true">#</a> Flags</h2><ul><li><code>--duplications</code> Output a JSON map of items and the number of their occurrences in a list or array</li><li><code>--total</code> Read an array, list or map from STDIN and output the length for that array (default behaviour)</li><li><code>--unique</code> Print the number of unique elements in a list or array</li><li><code>-d</code> Alias for \`--duplications</li><li><code>-t</code> Alias for \`--total</li><li><code>-u</code> Alias for \`--unique</li></ul><h2 id="detail" tabindex="-1"><a class="header-anchor" href="#detail" aria-hidden="true">#</a> Detail</h2><h3 id="modes" tabindex="-1"><a class="header-anchor" href="#modes" aria-hidden="true">#</a> Modes</h3><p>If no flags are set, <code>count</code> will default to using <code>--total</code>.</p><h4 id="total-total-t" tabindex="-1"><a class="header-anchor" href="#total-total-t" aria-hidden="true">#</a> Total: <code>--total</code> / <code>-t</code></h4><p>This will read an array, list or map from STDIN and output the length for that array.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>» a [25-Dec-2020..05-Jan-2021] -&gt; count
12
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>This also replaces the older <code>len</code> method.</p></blockquote><p>Please note that this returns the length of the <em>array</em> rather than string. For example <code>out &quot;foobar&quot; -&gt; count</code> would return <code>1</code> because an array in the <code>str</code> data type would be new line separated (eg <code>out &quot;foo\\nbar&quot; -&gt; count</code> would return <code>2</code>). If you need to count characters in a string and are running POSIX (eg Linux / BSD / OSX) then it is recommended to use <code>wc</code> instead. But be mindful that <code>wc</code> will also count new line characters.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>» out: &quot;foobar&quot; -&gt; count
1

» out: &quot;foo\\nbar&quot; -&gt; count
2

» out: &quot;foobar&quot; -&gt; wc: -c
7

» out: &quot;foo\\nbar&quot; -&gt; wc: -c
8

» printf: &quot;foobar&quot; -&gt; wc: -c
6
# (printf does not print a trailing new line)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="duplications-duplications-d" tabindex="-1"><a class="header-anchor" href="#duplications-duplications-d" aria-hidden="true">#</a> Duplications: <code>--duplications</code> / <code>-d</code></h4><p>This returns a JSON map of items and the number of their occurrences in a list or array.</p><p>For example in the quote below, only the word &quot;the&quot; is repeated so that entry will have a value of <code>2</code> while ever other entry has a value of <code>1</code> because they only appear once in the quote.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>» out: &quot;the quick brown fox jumped over the lazy dog&quot; -&gt; jsplit: \\s -&gt; count: --duplications
{
    &quot;brown&quot;: 1,
    &quot;dog&quot;: 1,
    &quot;fox&quot;: 1,
    &quot;jumped&quot;: 1,
    &quot;lazy&quot;: 1,
    &quot;over&quot;: 1,
    &quot;quick&quot;: 1,
    &quot;the&quot;: 2
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="unique-unique-u" tabindex="-1"><a class="header-anchor" href="#unique-unique-u" aria-hidden="true">#</a> Unique: <code>--unique</code> / <code>-u</code></h4><p>Returns the number of unique elements in a list or array.</p><p>For example in the quote below, only the word &quot;the&quot; is repeated, thus the unique count should be one less than the total count:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>» out &quot;the quick brown fox jumped over the lazy dog&quot; -&gt; jsplit \\s -&gt; count --unique
8
» out &quot;the quick brown fox jumped over the lazy dog&quot; -&gt; jsplit \\s -&gt; count --total
9
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="synonyms" tabindex="-1"><a class="header-anchor" href="#synonyms" aria-hidden="true">#</a> Synonyms</h2><ul><li><code>count</code></li><li><code>len</code></li></ul><h2 id="see-also" tabindex="-1"><a class="header-anchor" href="#see-also" aria-hidden="true">#</a> See Also</h2>`,30),h=e("code",null,"[[",-1),m=e("code",null,"[",-1),p=e("code",null,"[",-1),v=e("code",null,"a",-1),b=e("code",null,"append",-1),f=e("code",null,"ja",-1),q=e("code",null,"jsplit",-1),g=e("code",null,"jsplit",-1),_=e("code",null,"map",-1),y=e("code",null,"msort",-1),x=e("code",null,"mtac",-1),w=e("code",null,"prepend",-1),S=e("code",null,"ta",-1),k=e("code",null,"tout",-1);function j(N,O){const a=i("RouterLink");return l(),s("div",null,[c,e("ul",null,[e("li",null,[o(a,{to:"/commands/element.html"},{default:n(()=>[h,t(" (element)")]),_:1}),t(": Outputs an element from a nested structure")]),e("li",null,[o(a,{to:"/commands/index2.html"},{default:n(()=>[m,t(" (index)")]),_:1}),t(": Outputs an element from an array, map or table")]),e("li",null,[o(a,{to:"/commands/range.html"},{default:n(()=>[p,t(" (range) ")]),_:1}),t(": Outputs a ranged subset of data from STDIN")]),e("li",null,[o(a,{to:"/commands/a.html"},{default:n(()=>[v,t(" (mkarray)")]),_:1}),t(": A sophisticated yet simple way to build an array or list")]),e("li",null,[o(a,{to:"/commands/append.html"},{default:n(()=>[b]),_:1}),t(": Add data to the end of an array")]),e("li",null,[o(a,{to:"/commands/ja.html"},{default:n(()=>[f,t(" (mkarray)")]),_:1}),t(": A sophisticated yet simply way to build a JSON array")]),e("li",null,[o(a,{to:"/commands/jsplit.html"},{default:n(()=>[q]),_:1}),t(": Splits STDIN into a JSON array based on a regex parameter")]),e("li",null,[o(a,{to:"/commands/jsplit.html"},{default:n(()=>[g]),_:1}),t(": Splits STDIN into a JSON array based on a regex parameter")]),e("li",null,[o(a,{to:"/commands/map.html"},{default:n(()=>[_]),_:1}),t(": Creates a map from two data sources")]),e("li",null,[o(a,{to:"/commands/msort.html"},{default:n(()=>[y]),_:1}),t(": Sorts an array - data type agnostic")]),e("li",null,[o(a,{to:"/commands/mtac.html"},{default:n(()=>[x]),_:1}),t(": Reverse the order of an array")]),e("li",null,[o(a,{to:"/commands/prepend.html"},{default:n(()=>[w]),_:1}),t(": Add data to the start of an array")]),e("li",null,[o(a,{to:"/commands/ta.html"},{default:n(()=>[S,t(" (mkarray)")]),_:1}),t(": A sophisticated yet simple way to build an array of a user defined data-type")]),e("li",null,[o(a,{to:"/commands/tout.html"},{default:n(()=>[k]),_:1}),t(": Print a string to the STDOUT and set it's data-type")])])])}const A=d(u,[["render",j],["__file","count.html.vue"]]);export{A as default};
