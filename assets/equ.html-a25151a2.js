import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o,c as r,d as e,e as n,b as a,w as i,f as c}from"./app-74c664c1.js";const u={},m=e("h1",{id:"arithmetic-evaluation",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#arithmetic-evaluation","aria-hidden":"true"},"#"),n(),e("code",null,"="),n(" (arithmetic evaluation)")],-1),v=e("blockquote",null,[e("p",null,"Evaluate a mathematical function (deprecated)")],-1),h=e("h2",{id:"description",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#description","aria-hidden":"true"},"#"),n(" Description")],-1),b=e("p",null,[e("code",null,"="),n(" evaluates a mathematical function and returns it's output")],-1),p=e("code",null,"expr",-1),g=c(`<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;stdin&gt; -&gt; = evaluation -&gt; &lt;stdout&gt;

= evaluation -&gt; &lt;stdout&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>As a method:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>» let: age=18
» $age -&gt; = &lt; 21
true

» $age -&gt; = &lt; 21 -&gt; if { out: &quot;Under 21&quot; } else { out: &quot;Over 21&quot; }
Under 21
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>As a function:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>» let: age=18
» = age &lt; 21
true

» = age &lt; 21 -&gt; if { out: &quot;Under 21&quot; } else { out: &quot;Over 21&quot; }
Under 21
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Inlining as a function:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>» let: age=18
» if { = age &lt; 21 } then { out: &quot;Under 21&quot; } else { out: &quot;Over 21&quot; }
Under 21
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="detail" tabindex="-1"><a class="header-anchor" href="#detail" aria-hidden="true">#</a> Detail</h2><h3 id="variables" tabindex="-1"><a class="header-anchor" href="#variables" aria-hidden="true">#</a> Variables</h3><p>There are two ways you can use variables with the math functions. Either by string interpolation like you would normally with any other function, or directly by name.</p><p>String interpolation:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>» set abc=123
» = $abc==123
true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Directly by name:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>» set abc=123
» = abc==123
false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>To understand the difference between the two, you must first understand how string interpolation works; which is where the parser tokenised the parameters like so</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>command line: = $abc==123
token 1: command (name: &quot;=&quot;)
token 2: parameter 1, string (content: &quot;&quot;)
token 3: parameter 1, variable (name: &quot;abc&quot;)
token 4: parameter 1, string (content: &quot;==123&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then when the command line gets executed, the parameters are compiled on demand similarly to this crude pseudo-code</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>command: &quot;=&quot;
parameters 1: concatenate(&quot;&quot;, GetValue(abc), &quot;==123&quot;)
output: &quot;=&quot; &quot;123==123&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Thus the actual command getting run is literally <code>123==123</code> due to the variable being replace <strong>before</strong> the command executes.</p><p>Whereas when you call the variable by name it&#39;s up to <code>=</code> or <code>let</code> to do the variable substitution.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>command line: = abc==123
token 1: command (name: &quot;=&quot;)
token 2: parameter 1, string (content: &quot;abc==123&quot;)

command: &quot;=&quot;
parameters 1: concatenate(&quot;abc==123&quot;)
output: &quot;=&quot; &quot;abc==123&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The main advantage (or disadvantage, depending on your perspective) of using variables this way is that their data-type is preserved.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>» set str abc=123
» = abc==123
false

» set int abc=123
» = abc==123
true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Unfortunately is one of the biggest areas in Murex where you&#39;d need to be careful. The simple addition or omission of the dollar prefix, <code>$</code>, can change the behavior of <code>=</code> and <code>let</code>.</p><h3 id="strings" tabindex="-1"><a class="header-anchor" href="#strings" aria-hidden="true">#</a> Strings</h3><p>Because the usual Murex tools for encapsulating a string (<code>&quot;</code>, <code>&#39;</code> and <code>()</code>) are interpreted by the shell language parser, it means we need a new token for handling strings inside <code>=</code> and <code>let</code>. This is where backtick comes to our rescue.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>» set str abc=123
» = abc==\`123\`
true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Please be mindful that if you use string interpolation then you will need to instruct <code>=</code> and <code>let</code> that your field is a string</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>» set str abc=123
» = \`$abc\`==\`123\`
true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="best-practice-recommendation" tabindex="-1"><a class="header-anchor" href="#best-practice-recommendation" aria-hidden="true">#</a> Best practice recommendation</h3><p>As you can see from the sections above, string interpolation offers us some conveniences when comparing variables of differing data-types, such as a <code>str</code> type with a number (eg <code>num</code> or <code>int</code>). However it makes for less readable code when just comparing strings. Thus the recommendation is to avoid using string interpolation except only where it really makes sense (ie use it sparingly).</p><h3 id="non-boolean-logic" tabindex="-1"><a class="header-anchor" href="#non-boolean-logic" aria-hidden="true">#</a> Non-boolean logic</h3><p>Thus far the examples given have been focused on comparisons however <code>=</code> and <code>let</code> supports all the usual arithmetic operators:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>» = 10+10
20

» = 10/10
1

» = (4 * (3 + 2))
20

» = \`foo\`+\`bar\`
foobar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="read-more" tabindex="-1"><a class="header-anchor" href="#read-more" aria-hidden="true">#</a> Read more</h3>`,37),x={href:"https://github.com/Knetic/govaluate",target:"_blank",rel:"noopener noreferrer"},f=e("h2",{id:"synonyms",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#synonyms","aria-hidden":"true"},"#"),n(" Synonyms")],-1),_=e("ul",null,[e("li",null,[e("code",null,"=")])],-1),q=e("h2",{id:"see-also",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#see-also","aria-hidden":"true"},"#"),n(" See Also")],-1),y=e("code",null,"(",-1),w=e("code",null,"[[",-1),k=e("code",null,"[",-1),T=e("code",null,"export",-1),U=e("code",null,"expr",-1),D=e("code",null,"global",-1),E=e("code",null,"global",-1),S=e("code",null,"if",-1),V=e("code",null,"let",-1),M=e("code",null,"set",-1);function O($,B){const t=s("RouterLink"),d=s("ExternalLinkIcon");return o(),r("div",null,[m,v,h,b,e("p",null,[e("strong",null,[n("This is a deprecated feature. Please refer to "),a(t,{to:"/commands/expr.html"},{default:i(()=>[p]),_:1}),n(" instead.")])]),g,e("p",null,[n("Murex uses the "),e("a",x,[n("govaluate package"),a(d)]),n(". More information can be found in it's manual.")]),f,_,q,e("ul",null,[e("li",null,[a(t,{to:"/user-guide/reserved-vars.html"},{default:i(()=>[n("Reserved Variables")]),_:1}),n(": Special variables reserved by Murex")]),e("li",null,[a(t,{to:"/user-guide/scoping.html"},{default:i(()=>[n("Variable and Config Scoping")]),_:1}),n(": How scoping works within Murex")]),e("li",null,[a(t,{to:"/commands/brace-quote.html"},{default:i(()=>[y,n(" (brace quote)")]),_:1}),n(": Write a string to the STDOUT without new line")]),e("li",null,[a(t,{to:"/commands/element.html"},{default:i(()=>[w,n(" (element)")]),_:1}),n(": Outputs an element from a nested structure")]),e("li",null,[a(t,{to:"/commands/index2.html"},{default:i(()=>[k,n(" (index)")]),_:1}),n(": Outputs an element from an array, map or table")]),e("li",null,[a(t,{to:"/commands/export.html"},{default:i(()=>[T]),_:1}),n(": Define an environmental variable and set it's value")]),e("li",null,[a(t,{to:"/commands/expr.html"},{default:i(()=>[U]),_:1}),n(": Expressions: mathematical, string comparisons, logical operators")]),e("li",null,[a(t,{to:"/commands/global.html"},{default:i(()=>[D]),_:1}),n(": Define a global variable and set it's value")]),e("li",null,[a(t,{to:"/commands/global.html"},{default:i(()=>[E]),_:1}),n(": Define a global variable and set it's value")]),e("li",null,[a(t,{to:"/commands/if.html"},{default:i(()=>[S]),_:1}),n(": Conditional statement to execute different blocks of code depending on the result of the condition")]),e("li",null,[a(t,{to:"/commands/let.html"},{default:i(()=>[V]),_:1}),n(": Evaluate a mathematical function and assign to variable (deprecated)")]),e("li",null,[a(t,{to:"/commands/set.html"},{default:i(()=>[M]),_:1}),n(": Define a local variable and set it's value")])])])}const C=l(u,[["render",O],["__file","equ.html.vue"]]);export{C as default};
