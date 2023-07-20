<template><div><h1 id="code-block-parsing-user-guide" tabindex="-1"><a class="header-anchor" href="#code-block-parsing-user-guide" aria-hidden="true">#</a> Code Block Parsing - User Guide</h1>
<blockquote>
<p>Overview of how code blocks are parsed</p>
</blockquote>
<p>The murex parser creates ASTs ahead of interpreting each block of code. However<br>
the AST is only generated for a block at a time. Take this sample code:</p>
<pre><code>function example {
    # An example function
    if { $ENVVAR } then {
        out: 'foobar'
    }
    out: 'Finished!'
}
</code></pre>
<p>When that code is run <code v-pre>function</code> is executed with the parameters <code v-pre>example</code> and<br>
<code v-pre>{ ... }</code> but the contents of <code v-pre>{ ... }</code> isn't converted into ASTs until someone<br>
calls <code v-pre>example</code> elsewhere in the shell.</p>
<p>When <code v-pre>example</code> (the Murex function defined above) is executed the parser will<br>
then generate AST of the commands inside said function but not any blocks that<br>
are associated with those functions. eg the AST would look something like this:</p>
<pre><code>[
    {
        &quot;Command&quot;: &quot;if&quot;,
        &quot;Parameters&quot;: [
            &quot;{ $ENVVAR }&quot;,
            &quot;then&quot;,
            &quot;{\n        out: 'foobar'\n    }&quot;
        ]
    },
    {
        &quot;Command&quot;: &quot;out&quot;,
        &quot;Parameters&quot;: [
            &quot;Finished!&quot;
        ]
    }
]
</code></pre>
<blockquote>
<p>Please note this is a mock JSON structure rather than a representation of the<br>
actual AST that would be created. Parameters are stored differently to allow<br>
infixing of variables; and there also needs to be data shared about how<br>
pipelining (eg STDOUT et al) is chained. What is being captured above is only<br>
the command name and parameters.</p>
</blockquote>
<p>So when <code v-pre>if</code> executes, the conditional (the first parameter) is then parsed and<br>
turned into ASTs and executed. Then the last parameter (the <strong>then</strong> block) is<br>
parsed and turned into ASTs, if the first conditional is true.</p>
<p>This sequence of parsing is defined within the <code v-pre>if</code> builtin rather than<br>
Murex's parser. That means any code blocks are parsed only when a builtin<br>
specifically requests that they are executed.</p>
<p>With murex, there's no distinction between text and code. It's up to commands<br>
to determine if they want to execute a parameter as code or not (eg a curly<br>
brace block might be JSON).</p>
<h2 id="see-also" tabindex="-1"><a class="header-anchor" href="#see-also" aria-hidden="true">#</a> See Also</h2>
<ul>
<li><RouterLink to="/user-guide/ansi.html">ANSI Constants</RouterLink>:<br>
Infixed constants that return ANSI escape sequences</li>
<li><RouterLink to="/parser/curly-brace.html">Curly Brace (<code v-pre>{</code>, <code v-pre>}</code>) Tokens</RouterLink>:<br>
Initiates or terminates a code block</li>
<li><RouterLink to="/user-guide/pipeline.html">Pipeline</RouterLink>:<br>
Overview of what a &quot;pipeline&quot; is</li>
<li><RouterLink to="/user-guide/schedulers.html">Schedulers</RouterLink>:<br>
Overview of the different schedulers (or 'run modes') in Murex</li>
</ul>
</div></template>


