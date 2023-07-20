<template><div><h1 id="the-split-personalities-of-shell-usage-blog" tabindex="-1"><a class="header-anchor" href="#the-split-personalities-of-shell-usage-blog" aria-hidden="true">#</a> The Split Personalities of Shell Usage - Blog</h1>
<blockquote>
<p>Shell usage is split between the need to write something quickly and frequently verses the need to write something more complex but only the once. In this article is explore those opposing use cases and how different $SHELLs have chosen to address them.</p>
</blockquote>
<h2 id="a-very-brief-history" tabindex="-1"><a class="header-anchor" href="#a-very-brief-history" aria-hidden="true">#</a> A Very Brief History</h2>
<p>In the very early days of UNIX you had the Thompson shell which supported<br>
pipes, some basic control structures and wildcards. Thompson shell was based<br>
after the Multics shell, which in turn was inspired from <code v-pre>RUNCOM</code>. In fact the<br>
'rc' extension often seen in shell profiles is directly taken from <code v-pre>RUNCOM</code>.</p>
<p>It wasn't until a little later that variables were a feature in shells. That<br>
came with the PWB shell, which was designed to be upwardly-compatible with the<br>
Thompson shell, supporting Thompson syntax while bringing advancements intended<br>
to make shell scripting much more practical.</p>
<p>While the inspiration behind modern shells, <code v-pre>RUNCOM</code>, is a program that<br>
literally just ran commands from a file; it is this authors opinion that early<br>
UNIX shells were originally designed to be interactive terminals for launching<br>
applications first and foremost, with scripting as a feature that took a few<br>
years to mature. Furthermore, the ALGOL-inspired scripting commands were<br>
originally external executables and only later rewritten as shell builtins for<br>
performance reasons. For example running <code v-pre>if</code> in the shell would originally<br>
<code v-pre>fork()</code> the executable <code v-pre>/bin/if</code> but that quickly became call a builtin<br>
function that was part of the shell itself.</p>
<p>I believe it is these reasons why $SHELLs based on that lineage, be it the<br>
Bourne shell, Bash or Zsh, all share a scripting syntax which very much feels<br>
like it is extended from REPL usage.</p>
<h2 id="opposing-requirements" tabindex="-1"><a class="header-anchor" href="#opposing-requirements" aria-hidden="true">#</a> Opposing Requirements</h2>
<p>The problem with shell usage is it falls into two contradictory categories<br>
equally:</p>
<ol>
<li>
<p>You need an interactive terminal that is optimized for the operators<br>
productivity. Since it is a REPL environment, any instructions you do pass<br>
are going to be write-many read-once. In other words, the syntax needs to be<br>
quick to type because it's going to be typed often. However it doesn't have<br>
to be particularly readable because you're not going to save and read back<br>
whatever instructions you've keyed into the REPL.</p>
</li>
<li>
<p>You need the ability to write short scripts. The language here needs to be<br>
familiar because it is aimed at non-developers (otherwise they might just as<br>
well use C, FORTRAN, ALGOL or others) and succinct (again, otherwise a<br>
developer might as well use a compiled language). However it also should be<br>
readable because scripts are saved, recalled, reused and often extended over<br>
time. So they fall into the write-once read-many category.</p>
</li>
</ol>
<p>In an interactive program manager it makes sense to forgo quotation marks<br>
around strings, commas to separate parameters and semi-colons to terminate the<br>
line. Even the C shell, <code v-pre>csh</code> then later <code v-pre>tcsh</code>, doesn't follow C's syntax that<br>
strictly -- instead understanding that brevity is required for interactive use.</p>
<p>When I first started writing my own shell, Murex, I originally started out<br>
with syntax that was inspired by the C. A pipeline would look something like<br>
the following:</p>
<pre><code>cat (&quot;./example.csv&quot;) | grep (&quot;-n&quot;, &quot;foobar&quot;)
</code></pre>
<p>While this came with some readability improvements, it was a <em>massive</em> pain to<br>
write over and over. So I added some syntax completion to the terminal,<br>
inspired by IDE's and how they attempt to minimize the repetition of entering<br>
syntax tokens. However this didn't remove the pain entirely, it just masked it<br>
a little. So I removed the redundant braces. But the enforced quotation marks<br>
were still annoying, so I decided to make the quotation marks optional. Then<br>
the commas were removed...and before I knew it, I'd basically just reinvented<br>
the same syntax for writing commands as everyone had already been using for a<br>
multitude of decades prior. What started out as the example above ended up<br>
looking more like the example below:</p>
<pre><code>cat ./example.csv | grep -n foobar
</code></pre>
<p>(please excuse the useless use of <code v-pre>cat</code> in these examples -- it's purely there<br>
for illustrative reasons)</p>
<h2 id="the-traditional" tabindex="-1"><a class="header-anchor" href="#the-traditional" aria-hidden="true">#</a> The Traditional</h2>
<p>As I've already hinted in the section before, Bourne, Bash, Zsh all fall nicely<br>
into the first camp. The write-many read-once camp. And that makes sense to me<br>
when I consider the evolution of those shells. Their heritage does stem from<br>
interactive terminals firstly and scripting secondly.</p>
<p>The problem with traditional shells is that their grammar is lousy for anyone<br>
who needs a write-once read-many language. Worse still, while a significant<br>
amount of their grammar has now been included as builtins, for practical use<br>
operators often find themselves inlining other languages anyway, such as awk,<br>
sed, Perl and others. So it is understandable that a great many chose to do<br>
away with traditional shells for scripting and instead use more other, more<br>
powerful and readable languages like Python.</p>
<p>Unfortunately the same problems transfer the other way too, in that I have<br>
already demonstrated why Python (and other programming languages) don't always<br>
make good shells. While I will conceded that there is a loyal fanbase who will<br>
swear by their Python REPL for terminal usage, and if they're happy with that<br>
then I salute them, their usage is as niche as those who enjoy using Bash for<br>
complex scripts. Perhaps the only language I've used which translates well both<br>
for terse REPLs and lengthier scripts is LISP.</p>
<h2 id="the-modern" tabindex="-1"><a class="header-anchor" href="#the-modern" aria-hidden="true">#</a> The Modern</h2>
<p>So how are modern shells addressing these split concerns?</p>
<h3 id="powershell" tabindex="-1"><a class="header-anchor" href="#powershell" aria-hidden="true">#</a> Powershell</h3>
<p>Microsoft had the benefit of being able to start from a clean room. They didn't<br>
need to inherit 50+ years of UNIX legacy when they wrote Powershell. So their<br>
approach was naturally to base their shell on .NET. Passing .NET objects around<br>
has a number of advantages over the POSIX specification of passing files, byte<br>
streams, to applications. This allows developers to write richer command line<br>
applications in their preferred .NET language rather than being tied to the<br>
shell's syntax. However one could argue the same is true with POSIX shells and<br>
how you can write a program in any language you like. But in Powershell those<br>
other .NET programs feel more tightly integrated into Powershell than a forked<br>
process does in Bash. Again, I put this down to Powershell passing .NET objects<br>
along the pipeline.</p>
<p>Where Powershell falls down for me is in two key areas:</p>
<ol>
<li>
<p>Many of the flags passed are verbose. Calling .NET objects can be verbose.<br>
Take this example of base64 encoding a string:</p>
<pre><code> [Convert]::ToBase64String([System.Text.Encoding]::Unicode.GetBytes(&quot;TextToEncode&quot;))
</code></pre>
</li>
<li>
<p>Powershell doesn't play nicely with POSIX. Okay, I'm arguably contradicting<br>
myself now because earlier I raised this as a benefit. And in many ways it<br>
is. However if you wish to run Powershell on Linux, which you can do, you<br>
may find that you'll want to work with CLI tools that do &quot;think&quot; in terms of<br>
byte streams. Many of these tools have equivalent aliases written in .NET so<br>
you can appear to use them without escaping the rich programming environment<br>
provided by Powershell. However you may, and I often did, run into a great<br>
many scenarios where my expectations didn't match the practicalities of<br>
Powershell.</p>
</li>
</ol>
<p>(I will talk more about the second point in another article where I'll discuss<br>
pipelines, data types and the need for modern shells to understand rich data<br>
rather than treating everything as a flat stream of bytes)</p>
<p>There is no question that Powershell is a more powerful REPL than Bash but it<br>
definitely slides more towards the &quot;write-once read-many&quot; end of the spectrum.</p>
<h3 id="oil" tabindex="-1"><a class="header-anchor" href="#oil" aria-hidden="true">#</a> Oil</h3>
<p><a href="https://www.oilshell.org/" target="_blank" rel="noopener noreferrer">Oil<ExternalLinkIcon/></a> describes itself as the following:</p>
<blockquote>
<p>Oil is a new Unix shell. It's our upgrade path from bash to a better language<br>
and runtime. It's also for Python and JavaScript users who avoid shell!</p>
</blockquote>
<p>The way Oil achieves this is a lot of how PWB improved upon the Thompson shell<br>
in the 1970s. Oil aims to be upwards-compatible with Bash. Any command line or<br>
shell script you can run in Bash should, eventually, be supported in Oil as<br>
well. Oil can extend on that and support a syntax and grammar that is more<br>
readable and sane to write longer lived scripts in. Thus bridging the conflict<br>
between &quot;write-many&quot; and &quot;read-many&quot; languages.</p>
<p>This make Oil one of the most interesting alternative shells I have come<br>
across.</p>
<h3 id="murex" tabindex="-1"><a class="header-anchor" href="#murex" aria-hidden="true">#</a> Murex</h3>
<p>The approach Murex takes sits somewhere in between the previous two shells.<br>
It attempts to retain familiarity with POSIX syntax but isn't afraid to break<br>
compatibility where it makes sense. The emphasis is on creating grammar that<br>
is both succinct but also readable. This mission was driven from originally<br>
attempting to create something more familiar to Javascript developers then<br>
falling back to some old Bash-ism's when I realized that for all of it's warts,<br>
Bash and its kin aren't actually bad for quick REPL usage of C-style braces<br>
over ALGOL style named scopes:</p>
<p><strong>POSIX:</strong></p>
<pre><code>if [ 0 -eq 1 ]; then
    echo '0 == 1'
else
    echo '0 != 1'
fi
</code></pre>
<p><strong>Murex:</strong></p>
<pre><code>if { 0 == 1 } then {
    echo '0 == 1'
} else {
    echo '0 != 1'
}
</code></pre>
<p>But since the curly braces are tokens, grammar like <code v-pre>then</code> / <code v-pre>else</code> become<br>
superfluous words that only exist for readability. So then we can make them<br>
optional. And you end up with a syntax that allows for a certain amount of<br>
golfing in the REPL should the operator want to save a few key strokes</p>
<pre><code>if { 0 == 1 } { echo '0 == 1' } { echo '0 != 1' }
</code></pre>
<h2 id="conclusion" tabindex="-1"><a class="header-anchor" href="#conclusion" aria-hidden="true">#</a> Conclusion</h2>
<p>The write-many read-once tendencies of the interactive terminal and the<br>
write-once read-many demands of scripting might be difficult to consolidate<br>
but I do think it is achievable and I'm not convinced the current heavy weights<br>
do a good job at addressing those conflicting concerns. Whereas alternative<br>
shells like <a href="https://www.oilshell.org/" target="_blank" rel="noopener noreferrer">Oil<ExternalLinkIcon/></a>, <a href="https://elv.sh/" target="_blank" rel="noopener noreferrer">Elfish<ExternalLinkIcon/></a> and<br>
<a href="https://github.com/lmorg/murex" target="_blank" rel="noopener noreferrer">Murex<ExternalLinkIcon/></a> seem to be putting a lot more thought<br>
into this problem and it is really exciting seeing the different ideas that are<br>
being produced.</p>
<hr>
<p>Published: 02.10.2021 at 22:42</p>
<h2 id="see-also" tabindex="-1"><a class="header-anchor" href="#see-also" aria-hidden="true">#</a> See Also</h2>
<ul>
<li><RouterLink to="/user-guide/interactive-shell.html">Murex's Interactive Shell</RouterLink>:<br>
What's different about Murex's interactive shell?</li>
<li><RouterLink to="/blog/reading_lists.html">Reading Lists From The Command Line</RouterLink>:<br>
How hard can it be to read a list of data from the command line? If your list is line delimited then it should be easy. However what if your list is a JSON array? This post will explore how to work with lists in a different command line environments.</li>
<li><RouterLink to="/user-guide/rosetta-stone.html">Rosetta Stone</RouterLink>:<br>
A tabulated list of Bashism's and their equivalent Murex syntax</li>
<li><RouterLink to="/commands/if.html"><code v-pre>if</code></RouterLink>:<br>
Conditional statement to execute different blocks of code depending on the result of the condition</li>
</ul>
</div></template>


