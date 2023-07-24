import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as c,c as d,d as e,b as o,w as n,e as a,f as l}from"./app-d5c3dbe7.js";const s={},u=l(`<h1 id="return" tabindex="-1"><a class="header-anchor" href="#return" aria-hidden="true">#</a> <code>return</code></h1><blockquote><p>Exits current function scope</p></blockquote><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2><p><code>return</code> will terminate execution of a block at the scope level (eg <code>function</code>, <code>private</code>, etc)</p><p>Conceptually it is the same as <code>break</code> except it doesn&#39;t require the scope name as a parameter and you can specify the exit number rather than defaulting to 0.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><pre><code>return [ exit-number ]
</code></pre><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p><strong>Setting an exit number:</strong></p><pre><code>function example {
    out foo
    return 13
    out bar
}
example
exitnum
</code></pre><p>Running the above code would output:</p><pre><code>foo
13
</code></pre><p><strong>Returning withing an exit number:</strong></p><p>If we were to run the same code as above but with <code>return</code> written without any parameters (ie instead of <code>return 13</code> it would be just <code>return</code>), then you would see the following output:</p><pre><code>foo
0
</code></pre><h2 id="detail" tabindex="-1"><a class="header-anchor" href="#detail" aria-hidden="true">#</a> Detail</h2><p>Any process that has been initialised within a <code>return</code>ed scope will have their exit number updated to the value specified in <code>return</code> (or <code>0</code> if no parameter was passed).</p><h2 id="see-also" tabindex="-1"><a class="header-anchor" href="#see-also" aria-hidden="true">#</a> See Also</h2>`,18),h=e("code",null,"break",-1),p=e("code",null,"continue",-1),m=e("code",null,"exit",-1),f=e("code",null,"exitnum",-1),_=e("code",null,"function",-1),x=e("code",null,"out",-1),b=e("code",null,"private",-1);function w(g,k){const t=i("RouterLink");return c(),d("div",null,[u,e("ul",null,[e("li",null,[o(t,{to:"/commands/break.html"},{default:n(()=>[h]),_:1}),a(": Terminate execution of a block within your processes scope")]),e("li",null,[o(t,{to:"/commands/continue.html"},{default:n(()=>[p]),_:1}),a(": Terminate process of a block within a caller function")]),e("li",null,[o(t,{to:"/commands/exit.html"},{default:n(()=>[m]),_:1}),a(": Exit murex")]),e("li",null,[o(t,{to:"/commands/exitnum.html"},{default:n(()=>[f]),_:1}),a(": Output the exit number of the previous process")]),e("li",null,[o(t,{to:"/commands/function.html"},{default:n(()=>[_]),_:1}),a(": Define a function block")]),e("li",null,[o(t,{to:"/commands/out.html"},{default:n(()=>[x]),_:1}),a(": Print a string to the STDOUT with a trailing new line character")]),e("li",null,[o(t,{to:"/commands/private.html"},{default:n(()=>[b]),_:1}),a(": Define a private function block")])])])}const D=r(s,[["render",w],["__file","return.html.vue"]]);export{D as default};