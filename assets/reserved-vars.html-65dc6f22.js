import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as r,c as d,d as e,b as t,w as i,e as a,f as l}from"./app-73035245.js";const c={},u=l(`<h1 id="reserved-variables" tabindex="-1"><a class="header-anchor" href="#reserved-variables" aria-hidden="true">#</a> Reserved Variables</h1><blockquote><p>Special variables reserved by Murex</p></blockquote><p>Murex reserves a few special variables which cannot be assigned via <code>set</code> nor <code>let</code>.</p><p>The following is a list of reserved variables, their data type, and its usage:</p><h2 id="self-json" tabindex="-1"><a class="header-anchor" href="#self-json" aria-hidden="true">#</a> <code>SELF</code> (json)</h2><p>This returns meta information about the running scope.</p><p>A &#39;scope&#39; in Murex is a collection of code blocks to which variables and config are persistent within. In Murex, a variable declared inside an <code>if</code> or <code>foreach</code> block will be persistent outside of their blocks as long as you&#39;re still inside the same function.</p><p>Please see scoping document (link below) for more information on scoping.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>» function example { out $SELF }
» example
{
    &quot;Parent&quot;: 11357,
    &quot;Scope&quot;: 11357,
    &quot;TTY&quot;: true,
    &quot;Method&quot;: false,
    &quot;Not&quot;: false,
    &quot;Background&quot;: false,
    &quot;Module&quot;: &quot;murex&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="parent-num" tabindex="-1"><a class="header-anchor" href="#parent-num" aria-hidden="true">#</a> Parent (num)</h4><p>This is the function ID of the parent function that created the scope. In some instances this will be the same value as scope FID. However if in doubt then please using <strong>Scope</strong> instead.</p><h4 id="scope-num" tabindex="-1"><a class="header-anchor" href="#scope-num" aria-hidden="true">#</a> Scope (num)</h4><p>The scope value here returns the function ID of the top level function in the scope.</p><h4 id="tty-bool" tabindex="-1"><a class="header-anchor" href="#tty-bool" aria-hidden="true">#</a> TTY (bool)</h4><p>A boolean value as to whether STDOUT is a TTY (ie are we printing to the terminal (TTY) or a pipe?)</p><h4 id="method-bool" tabindex="-1"><a class="header-anchor" href="#method-bool" aria-hidden="true">#</a> Method (bool)</h4><p>A boolean value to describe whether the current scope is a method (ie being called mid-way or at the end of a pipeline).</p><h4 id="not-bool" tabindex="-1"><a class="header-anchor" href="#not-bool" aria-hidden="true">#</a> Not (bool)</h4><p>A boolean value which represents whether the function was called with a bang- prefix or not.</p><h4 id="background-bool" tabindex="-1"><a class="header-anchor" href="#background-bool" aria-hidden="true">#</a> Background (bool)</h4><p>A boolean value to identify whether the current scope is running in the background for foreground.</p><h4 id="module-str" tabindex="-1"><a class="header-anchor" href="#module-str" aria-hidden="true">#</a> Module (str)</h4><p>This will be the module string for the current scope.</p><h3 id="args-json" tabindex="-1"><a class="header-anchor" href="#args-json" aria-hidden="true">#</a> <code>ARGS</code> (json)</h3><p>This returns a JSON array of the command name and parameters within a given scope.</p><p>Unlike <code>$PARAMS</code>, <code>$ARGS</code> includes the function name.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>» function example { out $ARGS }
» example abc 1 2 3
[
    &quot;example&quot;,
    &quot;abc&quot;,
    &quot;1&quot;,
    &quot;2&quot;,
    &quot;3&quot;
]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="params-json" tabindex="-1"><a class="header-anchor" href="#params-json" aria-hidden="true">#</a> <code>PARAMS</code> (json)</h3><p>This returns a JSON array of the parameters within a given scope.</p><p>Unlike <code>$ARGS</code>, <code>$PARAMS</code> does not include the function name.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>» function example { out $PARAMS }
» example abc 1 2 3
[
    &quot;abc&quot;,
    &quot;1&quot;,
    &quot;2&quot;,
    &quot;3&quot;
]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="murex-exe-str" tabindex="-1"><a class="header-anchor" href="#murex-exe-str" aria-hidden="true">#</a> <code>MUREX_EXE</code> (str)</h3><p>This is very similar to the <code>$SHELL</code> environmental variable in that it holds the full path to the running shell. The reason for defining a reserved variable is so that the shell path cannot be overridden.</p><h3 id="murex-args-json" tabindex="-1"><a class="header-anchor" href="#murex-args-json" aria-hidden="true">#</a> <code>MUREX_ARGS</code> (json)</h3><p>This is TODO: [https://github.com/lmorg/murex/issues/304](Github issue 304)</p><h3 id="hostname-str" tabindex="-1"><a class="header-anchor" href="#hostname-str" aria-hidden="true">#</a> <code>HOSTNAME</code> (str)</h3><p>This returns the hostname of the machine Murex is running from.</p><h3 id="_0-str" tabindex="-1"><a class="header-anchor" href="#_0-str" aria-hidden="true">#</a> <code>0</code> (str)</h3><p>This returns the name of the executable (like <code>$ARGS[0]</code>)</p><h3 id="_1-2-3-str" tabindex="-1"><a class="header-anchor" href="#_1-2-3-str" aria-hidden="true">#</a> <code>1</code>, <code>2</code>, <code>3</code>... (str)</h3><p>This returns parameter <em>n</em> (like <code>$ARGS[n]</code>). If there is no parameter <em>n</em> then the variable will not be set thus the upper limit variable is determined by how many parameters are set. For example if you have 19 parameters passed then variables <code>$1</code> through to <code>$19</code> (inclusive) will all be set.</p><h2 id="see-also" tabindex="-1"><a class="header-anchor" href="#see-also" aria-hidden="true">#</a> See Also</h2>`,42),h=e("code",null,"@",-1),m=e("code",null,"$",-1),p=e("code",null,"config",-1),v=e("code",null,"foreach",-1),b=e("code",null,"function",-1),f=e("code",null,"if",-1),g=e("code",null,"let",-1),x=e("code",null,"private",-1),_=e("code",null,"set",-1),q=e("code",null,"switch",-1);function w(k,T){const n=s("RouterLink");return r(),d("div",null,[u,e("ul",null,[e("li",null,[t(n,{to:"/parser/array.html"},{default:i(()=>[a("Array ("),h,a(") Token")]),_:1}),a(": Expand values as an array")]),e("li",null,[t(n,{to:"/user-guide/bang-prefix.html"},{default:i(()=>[a("Bang Prefix")]),_:1}),a(": Bang prefixing to reverse default actions")]),e("li",null,[t(n,{to:"/user-guide/modules.html"},{default:i(()=>[a("Modules and Packages")]),_:1}),a(": An introduction to Murex modules and packages")]),e("li",null,[t(n,{to:"/user-guide/pipeline.html"},{default:i(()=>[a("Pipeline")]),_:1}),a(': Overview of what a "pipeline" is')]),e("li",null,[t(n,{to:"/parser/string.html"},{default:i(()=>[a("String ("),m,a(") Token")]),_:1}),a(": Expand values as a string")]),e("li",null,[t(n,{to:"/user-guide/scoping.html"},{default:i(()=>[a("Variable and Config Scoping")]),_:1}),a(": How scoping works within Murex")]),e("li",null,[t(n,{to:"/commands/config.html"},{default:i(()=>[p]),_:1}),a(": Query or define Murex runtime settings")]),e("li",null,[t(n,{to:"/commands/foreach.html"},{default:i(()=>[v]),_:1}),a(": Iterate through an array")]),e("li",null,[t(n,{to:"/commands/function.html"},{default:i(()=>[b]),_:1}),a(": Define a function block")]),e("li",null,[t(n,{to:"/commands/if.html"},{default:i(()=>[f]),_:1}),a(": Conditional statement to execute different blocks of code depending on the result of the condition")]),e("li",null,[t(n,{to:"/commands/let.html"},{default:i(()=>[g]),_:1}),a(": Evaluate a mathematical function and assign to variable (deprecated)")]),e("li",null,[t(n,{to:"/commands/private.html"},{default:i(()=>[x]),_:1}),a(": Define a private function block")]),e("li",null,[t(n,{to:"/commands/set.html"},{default:i(()=>[_]),_:1}),a(": Define a local variable and set it's value")]),e("li",null,[t(n,{to:"/commands/switch.html"},{default:i(()=>[q]),_:1}),a(": Blocks of cascading conditionals")])])])}const M=o(c,[["render",w],["__file","reserved-vars.html.vue"]]);export{M as default};