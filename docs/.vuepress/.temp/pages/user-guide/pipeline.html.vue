<template><div><h1 id="pipeline-user-guide" tabindex="-1"><a class="header-anchor" href="#pipeline-user-guide" aria-hidden="true">#</a> Pipeline - User Guide</h1>
<blockquote>
<p>Overview of what a &quot;pipeline&quot; is</p>
</blockquote>
<p>In the Murex docs you'll often see the term &quot;pipeline&quot;. This refers to any<br>
commands sequenced together.</p>
<p>A pipeline can be joined via any pipe token (eg <code v-pre>|</code>, <code v-pre>-&gt;</code>, <code v-pre>=&gt;</code>, <code v-pre>?</code>). But,<br>
for the sake of documentation, a pipeline might even be a solitary command.</p>
<h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2>
<p>Typical Murex pipeline:</p>
<pre><code>open: example.json -&gt; [[ /node/0 ]]
</code></pre>
<p>Example of a single command pipeline:</p>
<pre><code>top
</code></pre>
<p>Pipeline you might see in Bash / Zsh (this is also valid in Murex):</p>
<pre><code>cat names.txt | sort | uniq
</code></pre>
<p>Pipeline filtering out a specific error from <code v-pre>example-cmd</code></p>
<pre><code>example-cmd ? grep: &quot;File not found&quot;
</code></pre>
<h2 id="detail" tabindex="-1"><a class="header-anchor" href="#detail" aria-hidden="true">#</a> Detail</h2>
<p>A pipeline isn't a Murex specific construct but rather something inherited<br>
from Unix. Where Murex differs is that it can support sending typed<br>
information to compatible functions (unlike standard Unix pipes which are<br>
dumb-byte streams).</p>
<p>Wikipedia has a page on <a href="https://en.wikipedia.org/wiki/Pipeline_(Unix)" target="_blank" rel="noopener noreferrer">Pipeline (Unix)<ExternalLinkIcon/></a>:</p>
<blockquote>
<p>In Unix-like computer operating systems, a pipeline is a mechanism for<br>
inter-process communication using message passing. A pipeline is a set of<br>
processes chained together by their standard streams, so that the output<br>
text of each process (stdout) is passed directly as input (stdin) to the<br>
next one. The second process is started as the first process is still<br>
executing, and they are executed concurrently. The concept of pipelines was<br>
championed by Douglas McIlroy at Unix's ancestral home of Bell Labs, during<br>
the development of Unix, shaping its toolbox philosophy. It is named by<br>
analogy to a physical pipeline. A key feature of these pipelines is their<br>
&quot;hiding of internals&quot; (Ritchie &amp; Thompson, 1974). This in turn allows for<br>
more clarity and simplicity in the system.</p>
</blockquote>
<h2 id="named-pipes" tabindex="-1"><a class="header-anchor" href="#named-pipes" aria-hidden="true">#</a> Named Pipes</h2>
<p>The drawback with pipes is that it assumes each command runs sequentially one<br>
after another and that everything fits neatly into the concept of &quot;output&quot; and<br>
&quot;errors&quot;. The moment you need to use background (<code v-pre>bg</code>) processes, do anything<br>
more specific with data streams (even if just ignore them entirely), or use<br>
more than one data stream, then this concept breaks down. This is where named<br>
pipes come to the rescue. Named pipes are out of scope for this specific<br>
document but you can read more on them in links the links below.</p>
<h2 id="see-also" tabindex="-1"><a class="header-anchor" href="#see-also" aria-hidden="true">#</a> See Also</h2>
<ul>
<li><RouterLink to="/parser/pipe-arrow.html">Arrow Pipe (<code v-pre>-&gt;</code>) Token</RouterLink>:<br>
Pipes STDOUT from the left hand command to STDIN of the right hand command</li>
<li><RouterLink to="/user-guide/bang-prefix.html">Bang Prefix</RouterLink>:<br>
Bang prefixing to reverse default actions</li>
<li><RouterLink to="/parser/pipe-generic.html">Generic Pipe (<code v-pre>=&gt;</code>) Token</RouterLink>:<br>
Pipes a reformatted STDOUT stream from the left hand command to STDIN of the right hand command</li>
<li><RouterLink to="/parser/pipe-posix.html">POSIX Pipe (<code v-pre>|</code>) Token</RouterLink>:<br>
Pipes STDOUT from the left hand command to STDIN of the right hand command</li>
<li><RouterLink to="/parser/pipe-err.html">STDERR Pipe (<code v-pre>?</code>) Token</RouterLink>:<br>
Pipes STDERR from the left hand command to STDIN of the right hand command</li>
<li><RouterLink to="/user-guide/schedulers.html">Schedulers</RouterLink>:<br>
Overview of the different schedulers (or 'run modes') in Murex</li>
<li><RouterLink to="/commands/bg.html"><code v-pre>bg</code></RouterLink>:<br>
Run processes in the background</li>
</ul>
</div></template>


