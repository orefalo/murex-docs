import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as r,c as d,d as e,b as o,w as a,e as l,f as s}from"./app-b92fd348.js";const c={},h=s(`<h1 id="while" tabindex="-1"><a class="header-anchor" href="#while" aria-hidden="true">#</a> <code>while</code></h1><blockquote><p>Loop until condition false</p></blockquote><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2><p><code>while</code> loops until loops until <strong>condition</strong> is false.</p><p>Normally the <strong>conditional</strong> and executed code block are 2 separate parameters however you can call <code>while</code> with just 1 parameter where the code block acts as both the conditional and the code to be ran.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><p>Until true</p><pre><code>while { condition } { code-block } -&gt; \`&lt;stdout&gt;\`

while { code-block } -&gt; \`&lt;stdout&gt;\`
</code></pre><p>Until false</p><pre><code>!while { condition } { code-block } -&gt; \`&lt;stdout&gt;\`
</code></pre><p>\`\` !while { code-block } -&gt; &lt;std</p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p><code>while</code> <strong>$i</strong> is less then <strong>5</strong></p><pre><code>» let i=0; while { =i&lt;5 } { let i=i+1; out $i }
1
2
3
4
5

» let i=0; while { let i=i+1; = i&lt;5; out }
true
true
true
true
false
</code></pre><p><code>while</code> <strong>$i</strong> is <em>NOT</em> greater than or equal to <strong>5</strong></p><pre><code>» let i=0; !while { =i&gt;=5 } { let i=i+1; out $i }
1
2
3
4
5

» let i=0; while { let i=i+1; = i&gt;=5; out }
true
true
true
true
false
</code></pre><h2 id="detail" tabindex="-1"><a class="header-anchor" href="#detail" aria-hidden="true">#</a> Detail</h2><h3 id="meta-values" tabindex="-1"><a class="header-anchor" href="#meta-values" aria-hidden="true">#</a> Meta values</h3><p>Meta values are a JSON object stored as the variable <code>$.</code>. The meta variable will get overwritten by any other block which invokes meta values. So if you wish to persist meta values across blocks you will need to reassign <code>$.</code>, eg</p><pre><code>%[1..3] -&gt; foreach {
    meta_parent = $.
    %[7..9] -&gt; foreach {
        out &quot;$(meta_parent.i): $.i&quot;
    }
}
</code></pre><p>The following meta values are defined:</p><ul><li><code>i</code>: iteration number</li></ul><h2 id="synonyms" tabindex="-1"><a class="header-anchor" href="#synonyms" aria-hidden="true">#</a> Synonyms</h2><ul><li><code>while</code></li><li><code>!while</code></li></ul><h2 id="see-also" tabindex="-1"><a class="header-anchor" href="#see-also" aria-hidden="true">#</a> See Also</h2>`,25),u=e("code",null,"err",-1),m=e("code",null,"for",-1),p=e("code",null,"foreach",-1),f=e("code",null,"formap",-1),_=e("code",null,"global",-1),g=e("code",null,"let",-1),b=e("code",null,"out",-1),w=e("code",null,"set",-1);function v(x,k){const t=i("RouterLink");return r(),d("div",null,[h,e("ul",null,[e("li",null,[o(t,{to:"/commands/err.html"},{default:a(()=>[u]),_:1}),l(": Print a line to the STDERR")]),e("li",null,[o(t,{to:"/commands/for.html"},{default:a(()=>[m]),_:1}),l(": A more familiar iteration loop to existing developers")]),e("li",null,[o(t,{to:"/commands/foreach.html"},{default:a(()=>[p]),_:1}),l(": Iterate through an array")]),e("li",null,[o(t,{to:"/commands/formap.html"},{default:a(()=>[f]),_:1}),l(": Iterate through a map or other collection of data")]),e("li",null,[o(t,{to:"/commands/global.html"},{default:a(()=>[_]),_:1}),l(": Define a global variable and set it's value")]),e("li",null,[o(t,{to:"/commands/let.html"},{default:a(()=>[g]),_:1}),l(": Evaluate a mathematical function and assign to variable (deprecated)")]),e("li",null,[o(t,{to:"/commands/out.html"},{default:a(()=>[b]),_:1}),l(": Print a string to the STDOUT with a trailing new line character")]),e("li",null,[o(t,{to:"/commands/set.html"},{default:a(()=>[w]),_:1}),l(": Define a local variable and set it's value")])])])}const N=n(c,[["render",v],["__file","while.html.vue"]]);export{N as default};
