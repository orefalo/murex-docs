import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as r,c as t,a as e,d as n,w as i,b as c,e as s}from"./app-524c2bb5.js";const l={},h=s('<h1 id="round-command-reference" tabindex="-1"><a class="header-anchor" href="#round-command-reference" aria-hidden="true">#</a> <code>round</code> - Command Reference</h1><blockquote><p>Round a number by a user defined precision</p></blockquote><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2><p><code>round</code> supports a few different levels of precision:</p><h3 id="nearest-decimal-place" tabindex="-1"><a class="header-anchor" href="#nearest-decimal-place" aria-hidden="true">#</a> Nearest decimal place</h3><p>Syntax: <code>0.12345</code> (any numbers can be used)</p><p>If a decimal place is supplied then <code>round</code> will round your number to however many decimal places you specify. It doesn&#39;t matter what digits you include in your precision value as the only thing which is used to drive the result is the position of the decimal point. Thus a precision value of <code>0.000</code> would perform the same rounding as <code>9.999</code>.</p><p>Decimal places are always rounded to the nearest. <code>--down</code> and <code>--up</code> flags are not supported.</p><h3 id="nearest-integer" tabindex="-1"><a class="header-anchor" href="#nearest-integer" aria-hidden="true">#</a> Nearest integer</h3><p>Syntax: either <code>0</code> or <code>1</code> (either behaves the same)</p><p>This will round your value to the nearest whole number. For example <code>3.33</code> would be rounded to <code>3</code>.</p><p>If <code>--down</code> flag is supplied then the remainder is dropped. For example <code>9.99</code> would then be rounded to <code>9</code> instead of <code>10</code>.</p><p>If <code>--up</code> flag is is supplied then the the input value would always be rounded up to the nearest whole number. For example <code>3.33</code> would be rounded to <code>4</code> instead of <code>3</code>.</p><h3 id="nearest-multiple" tabindex="-1"><a class="header-anchor" href="#nearest-multiple" aria-hidden="true">#</a> Nearest Multiple</h3><p>Syntax: <code>50</code> (any integer greater than `1)</p><p>This will round your input value to the nearest multiple of your precision.</p><p>Like with <strong>nearest integer</strong> (see above), <code>--down</code> and <code>--up</code> will specify to round whether to always round down or up rather than returning the nearest match in either direction.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><pre><code>round value precision -&gt; `&lt;stdout&gt;`\n</code></pre><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p><strong>Rounding to the nearest multiple of <code>20</code>:</strong></p><pre><code>» round 15 20\n20\n</code></pre><h2 id="flags" tabindex="-1"><a class="header-anchor" href="#flags" aria-hidden="true">#</a> Flags</h2><ul><li><code>--down</code> Rounds down to the nearest multiple (not supported when precision is to decimal places)</li><li><code>--up</code> Rounds up to the nearest multiple (not supported when precision is to decimal places)</li><li><code>-d</code> shorthand for `--down</li><li><code>-u</code> shorthand for `--up</li></ul><h2 id="see-also" tabindex="-1"><a class="header-anchor" href="#see-also" aria-hidden="true">#</a> See Also</h2>',25),u=e("code",null,"expr",-1);function p(m,f){const o=d("RouterLink");return r(),t("div",null,[h,e("ul",null,[e("li",null,[n(o,{to:"/guide/commands/expr.html"},{default:i(()=>[u]),_:1}),c(": Expressions: mathematical, string comparisons, logical operators")])])])}const x=a(l,[["render",p],["__file","round.html.vue"]]);export{x as default};
