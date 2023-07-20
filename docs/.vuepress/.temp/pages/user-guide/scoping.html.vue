<template><div><h1 id="variable-and-config-scoping-user-guide" tabindex="-1"><a class="header-anchor" href="#variable-and-config-scoping-user-guide" aria-hidden="true">#</a> Variable and Config Scoping - User Guide</h1>
<blockquote>
<p>How scoping works within Murex</p>
</blockquote>
<p>A 'scope' in Murex is a collection of code blocks to which variables and<br>
config are persistent within. In Murex, a variable declared inside an <code v-pre>if</code> or<br>
<code v-pre>foreach</code> block will be persistent outside of their blocks as long as you're<br>
still inside the same function.</p>
<p>For example lets start with the following function that sets a variable called<br>
<strong>foo</strong></p>
<pre><code>function example {
    if { true } then { set foo=bar }
    out $foo
}
</code></pre>
<p>In here the value is getting set inside an <code v-pre>if</code> block but its value is is<br>
retrieved outside of that block. <code v-pre>out</code> and <code v-pre>set</code> have different parents but<br>
the same scoping.</p>
<p>Then lets set <strong>foo</strong> outside of that function and see what happens:</p>
<pre><code>» set foo=oof
» $foo
oof

» example
bar

» $foo
oof
</code></pre>
<p>Despite setting a variable named <strong>foo</strong>, the value inside <strong>example</strong> does not<br>
overwrite the value outside <strong>example</strong> because they occupy different scoping.</p>
<h2 id="what-instantiates-a-new-scope" tabindex="-1"><a class="header-anchor" href="#what-instantiates-a-new-scope" aria-hidden="true">#</a> What Instantiates A New Scope?</h2>
<p>A new scope is instantiated by anything which resembles a function. This would<br>
be code inside events, dynamic autocompletes, open agents, any code blocks<br>
defined in <code v-pre>config</code>, as well as public and private functions too.</p>
<p>Code inside an <code v-pre>if</code>, <code v-pre>switch</code>, <code v-pre>foreach</code> and <code v-pre>source</code> do not create a new<br>
scope. Subshells also do not create a new scoping either.</p>
<h2 id="see-also" tabindex="-1"><a class="header-anchor" href="#see-also" aria-hidden="true">#</a> See Also</h2>
<ul>
<li><RouterLink to="/user-guide/reserved-vars.html">Reserved Variables</RouterLink>:<br>
Special variables reserved by Murex</li>
<li><RouterLink to="/commands/autocomplete.html"><code v-pre>autocomplete</code></RouterLink>:<br>
Set definitions for tab-completion in the command line</li>
<li><RouterLink to="/commands/config.html"><code v-pre>config</code></RouterLink>:<br>
Query or define Murex runtime settings</li>
<li><RouterLink to="/commands/event.html"><code v-pre>event</code></RouterLink>:<br>
Event driven programming for shell scripts</li>
<li><RouterLink to="/commands/foreach.html"><code v-pre>foreach</code></RouterLink>:<br>
Iterate through an array</li>
<li><RouterLink to="/commands/function.html"><code v-pre>function</code></RouterLink>:<br>
Define a function block</li>
<li><RouterLink to="/commands/if.html"><code v-pre>if</code></RouterLink>:<br>
Conditional statement to execute different blocks of code depending on the result of the condition</li>
<li><RouterLink to="/commands/let.html"><code v-pre>let</code></RouterLink>:<br>
Evaluate a mathematical function and assign to variable (deprecated)</li>
<li><RouterLink to="/commands/openagent.html"><code v-pre>openagent</code></RouterLink>:<br>
Creates a handler function for `open</li>
<li><RouterLink to="/commands/private.html"><code v-pre>private</code></RouterLink>:<br>
Define a private function block</li>
<li><RouterLink to="/commands/set.html"><code v-pre>set</code></RouterLink>:<br>
Define a local variable and set it's value</li>
<li><RouterLink to="/commands/source.html"><code v-pre>source</code> </RouterLink>:<br>
Import Murex code from another file of code block</li>
<li><RouterLink to="/commands/switch.html"><code v-pre>switch</code></RouterLink>:<br>
Blocks of cascading conditionals</li>
</ul>
</div></template>


