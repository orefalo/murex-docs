<template><div><h1 id="fileref-user-guide" tabindex="-1"><a class="header-anchor" href="#fileref-user-guide" aria-hidden="true">#</a> FileRef - User Guide</h1>
<blockquote>
<p>How to track what code was loaded and from where</p>
</blockquote>
<p>Every function, event, autocompletion and even variable is stored with which<br>
file it was sourced, when it was loaded and what module it was loaded from.<br>
This makes it trivial to identify buggy 3rd party code, malicious libraries, or<br>
even just bugs in your own profiles and/or modules.</p>
<pre><code>» runtime: --functions -&gt; [[ /agent/FileRef/ ]]
{
    &quot;Column&quot;: 5,
    &quot;Line&quot;: 5,
    &quot;Source&quot;: {
        &quot;DateTime&quot;: &quot;2021-03-28T09:10:53.572197+01:00&quot;,
        &quot;Filename&quot;: &quot;/home/lmorg/.murex_modules/murex-dev/murex-dev.mx&quot;,
        &quot;Module&quot;: &quot;murex-dev/murex-dev&quot;
    }
}

» runtime --globals -&gt; [[ /DEVOPSBIN/FileRef ]]
{
    &quot;Column&quot;: 1,
    &quot;Line&quot;: 0,
    &quot;Source&quot;: {
        &quot;DateTime&quot;: &quot;2021-03-28T09:10:53.541952+01:00&quot;,
        &quot;Filename&quot;: &quot;/home/lmorg/.murex_modules/devops/global.mx&quot;,
        &quot;Module&quot;: &quot;devops/global&quot;
    }
}
</code></pre>
<h3 id="module-strings-for-non-module-code" tabindex="-1"><a class="header-anchor" href="#module-strings-for-non-module-code" aria-hidden="true">#</a> Module Strings For Non-Module Code</h3>
<h4 id="source" tabindex="-1"><a class="header-anchor" href="#source" aria-hidden="true">#</a> Source</h4>
<p>A common shell idiom is to load shell script files via <code v-pre>source</code> / <code v-pre>.</code>. When<br>
this is done the module string (as seen in the <code v-pre>FileRef</code> structures described<br>
above) will be <code v-pre>source/hash</code> where <strong>hash</strong> will be a unique hash of the file<br>
path and load time.</p>
<p>Thus no two sourced files will share the same module string. Even the same file<br>
but modified and sourced twice (before and after the edit) will have different<br>
module strings due to the load time being part of the hashed data.</p>
<h4 id="repl" tabindex="-1"><a class="header-anchor" href="#repl" aria-hidden="true">#</a> REPL</h4>
<p>Any functions, variables, events, auto-completions, etc created manually,<br>
directly, in the interactive shell will have a module string of <code v-pre>murex</code> and an<br>
empty Filename string.</p>
<h2 id="see-also" tabindex="-1"><a class="header-anchor" href="#see-also" aria-hidden="true">#</a> See Also</h2>
<ul>
<li><RouterLink to="/user-guide/modules.html">Modules and Packages</RouterLink>:<br>
An introduction to Murex modules and packages</li>
<li><RouterLink to="/commands/element.html"><code v-pre>[[</code> (element)</RouterLink>:<br>
Outputs an element from a nested structure</li>
<li><RouterLink to="/commands/murex-package.html"><code v-pre>murex-package</code></RouterLink>:<br>
Murex's package manager</li>
<li><RouterLink to="/commands/runtime.html"><code v-pre>runtime</code></RouterLink>:<br>
Returns runtime information on the internal state of Murex</li>
<li><RouterLink to="/commands/source.html"><code v-pre>source</code> </RouterLink>:<br>
Import Murex code from another file of code block</li>
</ul>
</div></template>


