import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as l,c,d as e,b as i,w as o,e as t,f as r}from"./app-d5c3dbe7.js";const s={},u=r(`<h1 id="break" tabindex="-1"><a class="header-anchor" href="#break" aria-hidden="true">#</a> <code>break</code></h1><blockquote><p>Terminate execution of a block within your processes scope</p></blockquote><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2><p><code>break</code> will terminate execution of a block (eg <code>function</code>, <code>private</code>, <code>foreach</code>, <code>if</code>, etc).</p><p><code>break</code> requires a parameter and that parameter is the name of the caller block you wish to break out of. If it is a <code>function</code> or <code>private</code>, then it will be the name of that function or private. If it is an <code>if</code> or <code>foreach</code> loop, then it will be <code>if</code> or <code>foreach</code> (respectively).</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><pre><code>break block-name
</code></pre><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p><strong>Exiting an iteration block:</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function foo {
    %[1..10] -&gt; foreach i {
        out $i
        if { $i == 5 } then {
            out &quot;exit running function&quot;
            break foo
            out &quot;ended&quot;
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Running the above code would output:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>» foo
1
2
3
4
5
exit running function
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Exiting a function:</strong></p><p><code>break</code> can be considered to exhibit the behavior of <em>return</em> (from other languages) too</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function example {
    if { $USER == &quot;root&quot; } then {
        err &quot;Don&#39;t run this as root&quot;
        break example
    }

    # ... do something ...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Though in this particular use case it is recommended that you use <code>return</code> instead, the above code does illustrate how <code>break</code> behaves.</p><h2 id="detail" tabindex="-1"><a class="header-anchor" href="#detail" aria-hidden="true">#</a> Detail</h2><p><code>break</code> cannot escape the bounds of its scope (typically the function it is running inside). For example, in the following code we are calling <code>break bar</code> (which is a different function) inside of the function <code>foo</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function foo {
    %[1..10] -&gt; foreach i {
        out $i
        if { $i == 5 } then {
            out &quot;exit running function&quot;
            break bar
            out &quot;ended&quot;
        }
    }
}

function bar {
    foo
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Regardless of whether we run <code>foo</code> or <code>bar</code>, both of those functions will raise the following error:</p><pre><code>Error in \`break\` (7,17): no block found named \`bar\` within the scope of \`foo\`
</code></pre><h2 id="see-also" tabindex="-1"><a class="header-anchor" href="#see-also" aria-hidden="true">#</a> See Also</h2>`,22),h=e("code",null,"continue",-1),m=e("code",null,"exit",-1),v=e("code",null,"foreach",-1),b=e("code",null,"formap",-1),f=e("code",null,"function",-1),p=e("code",null,"if",-1),x=e("code",null,"out",-1),g=e("code",null,"private",-1),_=e("code",null,"return",-1);function k(w,q){const n=d("RouterLink");return l(),c("div",null,[u,e("ul",null,[e("li",null,[i(n,{to:"/commands/continue.html"},{default:o(()=>[h]),_:1}),t(": Terminate process of a block within a caller function")]),e("li",null,[i(n,{to:"/commands/exit.html"},{default:o(()=>[m]),_:1}),t(": Exit murex")]),e("li",null,[i(n,{to:"/commands/foreach.html"},{default:o(()=>[v]),_:1}),t(": Iterate through an array")]),e("li",null,[i(n,{to:"/commands/formap.html"},{default:o(()=>[b]),_:1}),t(": Iterate through a map or other collection of data")]),e("li",null,[i(n,{to:"/commands/function.html"},{default:o(()=>[f]),_:1}),t(": Define a function block")]),e("li",null,[i(n,{to:"/commands/if.html"},{default:o(()=>[p]),_:1}),t(": Conditional statement to execute different blocks of code depending on the result of the condition")]),e("li",null,[i(n,{to:"/commands/out.html"},{default:o(()=>[x]),_:1}),t(": Print a string to the STDOUT with a trailing new line character")]),e("li",null,[i(n,{to:"/commands/private.html"},{default:o(()=>[g]),_:1}),t(": Define a private function block")]),e("li",null,[i(n,{to:"/commands/return.html"},{default:o(()=>[_]),_:1}),t(": Exits current function scope")])])])}const D=a(s,[["render",k],["__file","break.html.vue"]]);export{D as default};
