import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as s,c as l,a as e,d as n,w as r,b as a,e as i}from"./app-66ffa3c3.js";const c={},h=i(`<h1 id="range-command-reference" tabindex="-1"><a class="header-anchor" href="#range-command-reference" aria-hidden="true">#</a> <code>[</code> (range) - Command Reference</h1><blockquote><p>Outputs a ranged subset of data from STDIN</p></blockquote><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2><p>This will read from STDIN and output a subset of data in a defined range.</p><p>The range can be defined as a number of different range types - such as the content of the array or it&#39;s index / row number. You can also omit either the start or the end of the search criteria to cover all items before or after the remaining search criteria.</p><p><strong>Please note that <code>@[</code> syntax has been deprecated in favour of <code>[</code> syntax instead</strong></p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><pre><code>\`&lt;stdin&gt;\` -&gt; [start..end]flags -&gt; \`&lt;stdout&gt;\`
</code></pre><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p><strong>Range over all months after March:</strong></p><pre><code>» a: [January..December] -&gt; [March..]se
April
May
June
July
August
September
October
November
December
</code></pre><p><strong>Range from the 6th to the 10th month:</strong></p><p>By default, ranges start from one, <code>1</code></p><pre><code>» a: [January..December] -&gt; [5..9]
May
June
July
August
September
</code></pre><p><strong>Return the first 3 months:</strong></p><p>This usage is similar to <code>head -n3</code></p><pre><code>» a: [January..December] -&gt; [..3]
October
November
December
</code></pre><p><strong>Return the last 3 months:</strong></p><p>This usage is similar to <code>tail -n3</code></p><pre><code>» a: [January..December] -&gt; [-3..]
October
November
December
</code></pre><h2 id="flags" tabindex="-1"><a class="header-anchor" href="#flags" aria-hidden="true">#</a> Flags</h2><ul><li><code>8</code> handles backspace characters (char 8) instead of treating it like a printable character</li><li><code>b</code> removes blank (empty) lines from source</li><li><code>e</code> exclude the start and end search criteria from the range</li><li><code>n</code> numeric offset (indexed from 0)</li><li><code>r</code> regexp match</li><li><code>s</code> exact string match</li><li><code>t</code> trims whitespace from source</li></ul><h2 id="synonyms" tabindex="-1"><a class="header-anchor" href="#synonyms" aria-hidden="true">#</a> Synonyms</h2><ul><li><code>@[</code></li></ul><h2 id="see-also" tabindex="-1"><a class="header-anchor" href="#see-also" aria-hidden="true">#</a> See Also</h2>`,25),u=e("code",null,"[[",-1),m=e("code",null,"[",-1),p=e("code",null,"a",-1),f=e("code",null,"alter",-1),g=e("code",null,"append",-1),_=e("code",null,"count",-1),b=e("code",null,"ja",-1),y=e("code",null,"jsplit",-1),x=e("code",null,"prepend",-1);function N(k,v){const t=d("RouterLink");return s(),l("div",null,[h,e("ul",null,[e("li",null,[n(t,{to:"/guide/commands/element.html"},{default:r(()=>[u,a(" (element)")]),_:1}),a(": Outputs an element from a nested structure")]),e("li",null,[n(t,{to:"/guide/commands/"},{default:r(()=>[m,a(" (index)")]),_:1}),a(": Outputs an element from an array, map or table")]),e("li",null,[n(t,{to:"/guide/commands/a.html"},{default:r(()=>[p,a(" (mkarray)")]),_:1}),a(": A sophisticated yet simple way to build an array or list")]),e("li",null,[n(t,{to:"/guide/commands/alter.html"},{default:r(()=>[f]),_:1}),a(": Change a value within a structured data-type and pass that change along the pipeline without altering the original source input")]),e("li",null,[n(t,{to:"/guide/commands/append.html"},{default:r(()=>[g]),_:1}),a(": Add data to the end of an array")]),e("li",null,[n(t,{to:"/guide/commands/count.html"},{default:r(()=>[_]),_:1}),a(": Count items in a map, list or array")]),e("li",null,[n(t,{to:"/guide/commands/ja.html"},{default:r(()=>[b,a(" (mkarray)")]),_:1}),a(": A sophisticated yet simply way to build a JSON array")]),e("li",null,[n(t,{to:"/guide/commands/jsplit.html"},{default:r(()=>[y]),_:1}),a(": Splits STDIN into a JSON array based on a regex parameter")]),e("li",null,[n(t,{to:"/guide/commands/prepend.html"},{default:r(()=>[x]),_:1}),a(": Add data to the start of an array")])])])}const J=o(c,[["render",N],["__file","range.html.vue"]]);export{J as default};
