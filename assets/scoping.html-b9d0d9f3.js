import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as l,c as d,d as e,b as t,w as i,e as o,f as c}from"./app-27c1e3fb.js";const r={},u=c(`<h1 id="variable-and-config-scoping" tabindex="-1"><a class="header-anchor" href="#variable-and-config-scoping" aria-hidden="true">#</a> Variable and Config Scoping</h1><blockquote><p>How scoping works within Murex</p></blockquote><p>A &#39;scope&#39; in Murex is a collection of code blocks to which variables and config are persistent within. In Murex, a variable declared inside an <code>if</code> or <code>foreach</code> block will be persistent outside of their blocks as long as you&#39;re still inside the same function.</p><p>For example lets start with the following function that sets a variable called <strong>foo</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function example {
    if { true } then { set foo=bar }
    out $foo
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In here the value is getting set inside an <code>if</code> block but its value is is retrieved outside of that block. <code>out</code> and <code>set</code> have different parents but the same scoping.</p><p>Then lets set <strong>foo</strong> outside of that function and see what happens:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>» set foo=oof
» $foo
oof

» example
bar

» $foo
oof
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Despite setting a variable named <strong>foo</strong>, the value inside <strong>example</strong> does not overwrite the value outside <strong>example</strong> because they occupy different scoping.</p><h2 id="what-instantiates-a-new-scope" tabindex="-1"><a class="header-anchor" href="#what-instantiates-a-new-scope" aria-hidden="true">#</a> What Instantiates A New Scope?</h2><p>A new scope is instantiated by anything which resembles a function. This would be code inside events, dynamic autocompletes, open agents, any code blocks defined in <code>config</code>, as well as public and private functions too.</p><p>Code inside an <code>if</code>, <code>switch</code>, <code>foreach</code> and <code>source</code> do not create a new scope. Subshells also do not create a new scoping either.</p><h2 id="see-also" tabindex="-1"><a class="header-anchor" href="#see-also" aria-hidden="true">#</a> See Also</h2>`,13),h=e("code",null,"autocomplete",-1),f=e("code",null,"config",-1),m=e("code",null,"event",-1),p=e("code",null,"foreach",-1),v=e("code",null,"function",-1),b=e("code",null,"if",-1),_=e("code",null,"let",-1),g=e("code",null,"openagent",-1),x=e("code",null,"private",-1),w=e("code",null,"set",-1),k=e("code",null,"source",-1),y=e("code",null,"switch",-1);function S(C,M){const n=s("RouterLink");return l(),d("div",null,[u,e("ul",null,[e("li",null,[t(n,{to:"/user-guide/reserved-vars.html"},{default:i(()=>[o("Reserved Variables")]),_:1}),o(": Special variables reserved by Murex")]),e("li",null,[t(n,{to:"/commands/autocomplete.html"},{default:i(()=>[h]),_:1}),o(": Set definitions for tab-completion in the command line")]),e("li",null,[t(n,{to:"/commands/config.html"},{default:i(()=>[f]),_:1}),o(": Query or define Murex runtime settings")]),e("li",null,[t(n,{to:"/commands/event.html"},{default:i(()=>[m]),_:1}),o(": Event driven programming for shell scripts")]),e("li",null,[t(n,{to:"/commands/foreach.html"},{default:i(()=>[p]),_:1}),o(": Iterate through an array")]),e("li",null,[t(n,{to:"/commands/function.html"},{default:i(()=>[v]),_:1}),o(": Define a function block")]),e("li",null,[t(n,{to:"/commands/if.html"},{default:i(()=>[b]),_:1}),o(": Conditional statement to execute different blocks of code depending on the result of the condition")]),e("li",null,[t(n,{to:"/commands/let.html"},{default:i(()=>[_]),_:1}),o(": Evaluate a mathematical function and assign to variable (deprecated)")]),e("li",null,[t(n,{to:"/commands/openagent.html"},{default:i(()=>[g]),_:1}),o(": Creates a handler function for `open")]),e("li",null,[t(n,{to:"/commands/private.html"},{default:i(()=>[x]),_:1}),o(": Define a private function block")]),e("li",null,[t(n,{to:"/commands/set.html"},{default:i(()=>[w]),_:1}),o(": Define a local variable and set it's value")]),e("li",null,[t(n,{to:"/commands/source.html"},{default:i(()=>[k]),_:1}),o(": Import Murex code from another file of code block")]),e("li",null,[t(n,{to:"/commands/switch.html"},{default:i(()=>[y]),_:1}),o(": Blocks of cascading conditionals")])])])}const N=a(r,[["render",S],["__file","scoping.html.vue"]]);export{N as default};