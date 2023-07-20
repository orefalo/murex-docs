import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as d,c,d as a,e,b as t,w as n,f as s}from"./app-fcc1aefa.js";const u={},h=s('<h1>Language Tour</h1><h2>Table of Contents</h2><div id="toc"><ul><li><a href="#introduction">Introduction</a><ul><li><a href="#readevalprint-loop">Read–Eval–Print Loop</a></li><li><a href="#barewords">Barewords</a></li><li><a href="#expressions-and-statements">Expressions and Statements</a></li><li><a href="#functions-and-methods">Functions and Methods</a></li><li><a href="#the-bang-prefix">The Bang Prefix</a></li></ul></li><li><a href="#rosetta-stone">Rosetta Stone</a></li><li><a href="#basic-syntax">Basic Syntax</a><ul><li><a href="#quoting-strings">Quoting Strings</a></li><li><a href="#code-comments">Code Comments</a></li></ul></li><li><a href="#variables">Variables</a><ul><li><a href="#global-variables">Global variables</a></li><li><a href="#environmental-variables">Environmental Variables</a></li><li><a href="#type-inference">Type Inference</a></li><li><a href="#scalars">Scalars</a></li><li><a href="#arrays">Arrays</a></li></ul></li><li><a href="#piping-and-redirection">Piping and Redirection</a><ul><li><a href="#pipes">Pipes</a></li><li><a href="#redirection">Redirection</a></li><li><a href="#redirecting-to-files">Redirecting to files</a></li><li><a href="#type-conversion">Type Conversion</a><ul><li><a href="#cast">Cast</a></li><li><a href="#format">Format</a></li></ul></li></ul></li><li><a href="#sub-shells">Sub-Shells</a></li><li><a href="#filesystem-wildcards-globbing">Filesystem Wildcards (Globbing)</a></li><li><a href="#brace-expansion">Brace expansion</a></li><li><a href="#executables">Executables</a><ul><li><a href="#aliases">Aliases</a></li><li><a href="#public-functions">Public Functions</a></li><li><a href="#private-functions">Private Functions</a></li><li><a href="#external-executables">External Executables</a></li></ul></li><li><a href="#control-structures">Control Structures</a><ul><li><a href="#using-if-statements">Using <code>if</code> Statements</a></li><li><a href="#using-switch-statements">Using <code>switch</code> Statements</a></li><li><a href="#using-foreach-loops">Using <code>foreach</code> Loops</a></li><li><a href="#using-formap-loops">Using <code>formap</code> Loops</a></li></ul></li><li><a href="#stopping-execution">Stopping Execution</a><ul><li><a href="#the-continue-statement">The <code>continue</code> Statement</a></li><li><a href="#the-break-statement">The <code>break</code> Statement</a></li><li><a href="#the-exit-statement">The <code>exit</code> Statement</a></li><li><a href="#signal-sigint">Signal: SIGINT</a></li><li><a href="#signal-sigquit">Signal: SIGQUIT</a></li><li><a href="#signal-sigtstp">Signal: SIGTSTP</a></li></ul></li></ul></div><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>Murex is a typed shell. By this we mean it still passes byte streams along<br> POSIX pipes (and thus will work with all your existing command line tools) but<br> in addition will add annotations to describe the type of data that is being<br> written and read. This allows Murex to expand upon your command line tools<br> with some really interesting and advanced features not available in traditional<br> shells.</p><blockquote><p>POSIX is a set of underlying standards that Linux, macOS and various other<br> operating systems support. Most typed shells do not work well with existing<br> commands whereas Murex does.</p></blockquote><h3 id="read–eval–print-loop" tabindex="-1"><a class="header-anchor" href="#read–eval–print-loop" aria-hidden="true">#</a> Read–Eval–Print Loop</h3>',7),m=a("br",null,null,-1),b=a("h3",{id:"barewords",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#barewords","aria-hidden":"true"},"#"),e(" Barewords")],-1),p=a("br",null,null,-1),v=a("br",null,null,-1),g=a("br",null,null,-1),f=a("br",null,null,-1),x=s(`<p>Murex also makes heavy use of barewords and so that places requirements on<br> the choice of syntax we can use.</p><h3 id="expressions-and-statements" tabindex="-1"><a class="header-anchor" href="#expressions-and-statements" aria-hidden="true">#</a> Expressions and Statements</h3><p>An <strong>expression</strong> is an evaluation, operation or assignment, for example:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>» 6 &gt; 5
» fruit = %[ apples oranges bananas ]
» 5 + 5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Expressions are type sensitive</p></blockquote><p>Whereas a <strong>statement</strong> is a shell command to execute:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>» echo &quot;Hello Murex&quot;
» kill 1234
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>All values in a statement are treated as strings</p></blockquote><p>Due to the expectation of shell commands supporting bareword parameters,<br> expressions have to be parsed differently to statements. Thus Murex first<br> parses a command line to see if it is a valid expression, and if it is not, it<br> then assumes it is an statement and parses it as such.</p><p>This allow expressions and statements to be used interchangeably in a pipeline:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>» 5 + 5 | grep 10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="functions-and-methods" tabindex="-1"><a class="header-anchor" href="#functions-and-methods" aria-hidden="true">#</a> Functions and Methods</h3><p>A <strong>function</strong> is command that doesn&#39;t take data from STDIN whereas a <strong>method</strong><br> is any command that does.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>echo &quot;Hello Murex&quot; | grep &quot;Murex&quot;
^ a function         ^ a method
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>In practical terms, functions and methods are executed in exactly the same way<br> however some builtins might behave differently depending on whether values are<br> passed via STDIN or as parameters. Thus you will often find references to<br> functions and methods, and sometimes for the same command, within these<br> documents.</p><h3 id="the-bang-prefix" tabindex="-1"><a class="header-anchor" href="#the-bang-prefix" aria-hidden="true">#</a> The Bang Prefix</h3><p>Some Murex builtins support a bang prefix. This prefix alters the behavior of<br> those builtins to perform the conceptual opposite of their primary role.</p><p>For example, you could grep a file with <code>regexp &#39;m/(dogs|cats)/&#39;</code> but then you<br> might want to exclude any matches by using <code>!regexp &#39;m/(dogs|cats)/&#39;</code> instead.</p><p>The details for each supported bang prefix will be in the documents for their<br> respective builtin.</p><h2 id="rosetta-stone" tabindex="-1"><a class="header-anchor" href="#rosetta-stone" aria-hidden="true">#</a> Rosetta Stone</h2>`,20),_=a("br",null,null,-1),y=a("br",null,null,-1),w=a("h2",{id:"basic-syntax",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#basic-syntax","aria-hidden":"true"},"#"),e(" Basic Syntax")],-1),k=a("h3",{id:"quoting-strings",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#quoting-strings","aria-hidden":"true"},"#"),e(" Quoting Strings")],-1),q=a("blockquote",null,[a("p",null,[e("It is important to note that all strings in expressions are quoted whereas"),a("br"),e(" strings in statements can be barewords.")])],-1),T=a("p",null,"There are three ways to quote a string in Murex:",-1),S=a("code",null,"'single quote'",-1),I=a("code",null,'"double quote"',-1),M=a("code",null,"%(brace quote)",-1),E=s(`<h3 id="code-comments" tabindex="-1"><a class="header-anchor" href="#code-comments" aria-hidden="true">#</a> Code Comments</h3><p>You can comment out a single like, or end of a line with <code>#</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># this is a comment

echo Hello Murex # this is also a comment
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Multiple lines or mid-line comments can be achieved with <code>/#</code> and <code>#/</code> tokens:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/#
This is
a multi-line
command
#/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>...which can also be inlined...</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>» echo Hello /# comment #/ Murex
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>(<code>/#</code> was chosen because it is similar to C-style comments however <code>/*</code> is a<br> valid glob so Murex has substituted the asterisks with a hash symbol instead)</p><h2 id="variables" tabindex="-1"><a class="header-anchor" href="#variables" aria-hidden="true">#</a> Variables</h2><p>All variables can be defined as expressions and their data types are inferred:</p><ul><li><code>name = &quot;bob&quot;</code></li><li><code>age = 20 * 2</code></li><li><code>fruit = %[ apples oranges bananas ]</code></li></ul><p>If any variables are unset then reading from them will produce an error (under<br> Murex&#39;s default behavior):</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>» echo $foobar
Error in \`echo\` (1,1): variable &#39;foobar&#39; does not exist
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="global-variables" tabindex="-1"><a class="header-anchor" href="#global-variables" aria-hidden="true">#</a> Global variables</h3><p>Global variables can be defined using the <code>$GLOBAL</code> namespace:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>» $GLOBAL.foo = &quot;bar&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>You can also force Murex to read the global assignment of <code>$foo</code> (ignoring<br> any local assignments, should they exist) using the same syntax. eg:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>» $GLOBAL.name = &quot;Tom&quot;
» out $name
Tom

» $name = &quot;Sally&quot;
» out $GLOBAL.name
Tom
» out $name
Sally
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="environmental-variables" tabindex="-1"><a class="header-anchor" href="#environmental-variables" aria-hidden="true">#</a> Environmental Variables</h3><p>Environmental Variables are like global variables except they are copied to any<br> other programs that are launched from your shell session.</p><p>Environmental variables can be assigned using the <code>$ENV</code> namespace:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>» $ENV.foo = &quot;bar&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,22),$=a("code",null,"export",-1),B=a("p",null,[e("Like with global variables, you can force Murex to read the environmental"),a("br"),e(" variable, bypassing and local or global variables of the same name, by also"),a("br"),e(" using the "),a("code",null,"$ENV"),e(" namespace prefix.")],-1),L=a("h3",{id:"type-inference",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#type-inference","aria-hidden":"true"},"#"),e(" Type Inference")],-1),P=a("br",null,null,-1),R=a("code",null,"Content-Type",-1),A=a("br",null,null,-1),C=a("br",null,null,-1),G=s(`<h3 id="scalars" tabindex="-1"><a class="header-anchor" href="#scalars" aria-hidden="true">#</a> Scalars</h3><p>In traditional shells, variables are expanded in a way that results in spaces<br> be parsed as different command parameters. This results in numerous problems<br> where developers need to remember to enclose variables inside quotes.</p><p>Murex parses variables as tokens and expands them into the command line<br> arguments intuitively. So, there are no more accidental bugs due to spaces in<br> file names, or other such problems due to developers forgetting to quote<br> variables. For example:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>» file = &quot;file name.txt&quot;
» touch $file # this would normally need to be quoted
» ls
&#39;file name.txt&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="arrays" tabindex="-1"><a class="header-anchor" href="#arrays" aria-hidden="true">#</a> Arrays</h3><p>Due to variables not being expanded into arrays by default, Murex supports an<br> additional variable construct for arrays. These are <code>@</code> prefixed:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>» files = %[file1.txt, file2.txt, file3.txt]
» touch @files
» ls
file1.txt  file2.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="piping-and-redirection" tabindex="-1"><a class="header-anchor" href="#piping-and-redirection" aria-hidden="true">#</a> Piping and Redirection</h2><h3 id="pipes" tabindex="-1"><a class="header-anchor" href="#pipes" aria-hidden="true">#</a> Pipes</h3><p>Murex supports multiple different pipe tokens. The main two being <code>|</code> and<br><code>-&gt;</code>.</p>`,10),F=a("code",null,"|",-1),U=a("code",null,"->",-1),N=a("br",null,null,-1),V=a("br",null,null,-1),j=s(`<p>In Murex scripts you can use <code>|</code> and <code>-&gt;</code> interchangeably, so there&#39;s no need<br> to remember which commands are methods and which are not. The difference only<br> applies in the interactive shell where <code>-&gt;</code> can be used with tab-autocompletion<br> to display a shortlist of supported functions that can manipulate the data from<br> the previous command. It&#39;s purely a clue to the parser to generate different<br> autocompletion suggestions to help with your discovery of different commandline<br> tools.</p><h3 id="redirection" tabindex="-1"><a class="header-anchor" href="#redirection" aria-hidden="true">#</a> Redirection</h3><p>Redirection of stdout and stderr is very different in Murex. There is no<br> support for the <code>2&gt;</code> or <code>&amp;1</code> tokens, instead you name the pipe inside angle<br> brackets, in the first parameter(s).</p><p><code>out</code> is that processes stdout (fd1), <code>err</code> is that processes stderr (fd2), and<br><code>null</code> is the equivalent of piping to <code>/dev/null</code>.</p><p>Any pipes prefixed by a bang means reading from that processes stderr.</p><p>So to redirect stderr to stdout you would use <code>&lt;!out&gt;</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>err &lt;!out&gt; &quot;error message redirected to stdout&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>And to redirect stdout to stderr you would use <code>&lt;err&gt;</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>out &lt;err&gt; &quot;output redirected to stderr&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Likewise you can redirect either stdout, or stderr to <code>/dev/null</code> via <code>&lt;null&gt;</code><br> or <code>&lt;!null&gt;</code> respectively.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>command &lt;!null&gt; # ignore stderr
command &lt;null&gt;  # ignore stdout
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,11),H=a("br",null,null,-1),O=s(`<h3 id="redirecting-to-files" tabindex="-1"><a class="header-anchor" href="#redirecting-to-files" aria-hidden="true">#</a> Redirecting to files</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>out &quot;message&quot; |&gt; truncate-file.txt
out &quot;message&quot; &gt;&gt; append-file.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="type-conversion" tabindex="-1"><a class="header-anchor" href="#type-conversion" aria-hidden="true">#</a> Type Conversion</h3><p>Aside from annotating variables upon definition, you can also transform data<br> along the pipeline.</p><h4 id="cast" tabindex="-1"><a class="header-anchor" href="#cast" aria-hidden="true">#</a> Cast</h4><p>Casting doesn&#39;t alter the data, it simply changes the meta-information about<br> how that data should be read.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>out [1,2,3] | cast json | foreach { ... }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>There is also a little syntactic sugar to do the same:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>out [1,2,3] | :json: foreach { ... }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="format" tabindex="-1"><a class="header-anchor" href="#format" aria-hidden="true">#</a> Format</h4><p><code>format</code> takes the source data and reformats it into another data format:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>» out [1,2,3] | :json: format yaml
- 1
- 2
- 3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="sub-shells" tabindex="-1"><a class="header-anchor" href="#sub-shells" aria-hidden="true">#</a> Sub-Shells</h2><p>There are two types of emendable sub-shells: strings and arrays.</p><ul><li><p>string sub-shells, <code>\${ command }</code>, take the results from the sub-shell and<br> return it as a single parameter. This saves the need to encapsulate the shell<br> inside quotation marks.</p></li><li><p>array sub-shells, <code>@{ command }</code>, take the results from the sub-shell<br> and expand it as parameters.</p></li></ul><p><strong>Examples:</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>touch \${ %[1,2,3] } # creates a file named &#39;[1,2,3]&#39;
touch @{ %[1,2,3] } # creates three files, named &#39;1&#39;, &#39;2&#39; and &#39;3&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>The reason Murex breaks from the POSIX tradition of using backticks and<br> parentheses is because Murex works on the principle that everything inside<br> a curly bracket is considered a new block of code.</p><h2 id="filesystem-wildcards-globbing" tabindex="-1"><a class="header-anchor" href="#filesystem-wildcards-globbing" aria-hidden="true">#</a> Filesystem Wildcards (Globbing)</h2><p>While glob expansion is supported in the interactive shell, there isn&#39;t<br> auto-expansion of globbing in shell scripts. This is to protect against<br> accidental damage. Instead globbing is achieved via sub-shells using either:</p>`,20),D=a("code",null,"g",-1),Y=a("code",null,"rx",-1),Q=a("code",null,"f",-1),W=s(`<p><strong>Examples:</strong></p><p>All text files via globbing:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>g *.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>All text and markdown files via regexp:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>rx &#39;\\.(txt|md)$&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>All directories via type matching:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>f +d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>You can also chain them together, eg all directories named <code>*.txt</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>g *.txt | f +d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>To use them in a shell script it could look something a like this:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>rm @{g *.txt | f +s}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>(this deletes any symlinks called <code>*.txt</code>)</p><h2 id="brace-expansion" tabindex="-1"><a class="header-anchor" href="#brace-expansion" aria-hidden="true">#</a> Brace expansion</h2>`,13),X={href:"https://en.wikipedia.org/wiki/Bash_(Unix_shell)#Brace_expansion",target:"_blank",rel:"noopener noreferrer"},z=a("br",null,null,-1),J=a("code",null,"a{1..5}b",-1),K=a("br",null,null,-1),Z=a("code",null,"a: a[1..5]b",-1),ee=a("br",null,null,-1),ae=s(`<h2 id="executables" tabindex="-1"><a class="header-anchor" href="#executables" aria-hidden="true">#</a> Executables</h2><h3 id="aliases" tabindex="-1"><a class="header-anchor" href="#aliases" aria-hidden="true">#</a> Aliases</h3><p>You can create &quot;aliases&quot; to common commands to save you a few keystrokes. For<br> example:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>alias gc=git commit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,4),te=a("code",null,"alias",-1),ie=a("h3",{id:"public-functions",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#public-functions","aria-hidden":"true"},"#"),e(" Public Functions")],-1),ne=a("code",null,"function",-1),se=s(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function gc (message: str) {
    # shorthand for \`git commit\`
    
    git commit -m $message
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="private-functions" tabindex="-1"><a class="header-anchor" href="#private-functions" aria-hidden="true">#</a> Private Functions</h3>`,2),oe=a("code",null,"private",-1),le=a("a",{href:"#public-functions"},"public functions",-1),re=a("br",null,null,-1),de=a("h3",{id:"external-executables",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#external-executables","aria-hidden":"true"},"#"),e(" External Executables")],-1),ce=a("code",null,"$PATH",-1),ue=a("br",null,null,-1),he=a("code",null,"exec",-1),me=a("br",null,null,-1),be=a("br",null,null,-1),pe=a("code",null,"exec",-1),ve=s(`<p>For example the two following statements are the same:</p><ol><li><code>exec uname</code></li><li><code>uname</code></li></ol><p>Thus for normal day to day usage, you shouldn&#39;t need to include <code>exec</code>.</p><h2 id="control-structures" tabindex="-1"><a class="header-anchor" href="#control-structures" aria-hidden="true">#</a> Control Structures</h2><h3 id="using-if-statements" tabindex="-1"><a class="header-anchor" href="#using-if-statements" aria-hidden="true">#</a> Using <code>if</code> Statements</h3><p><code>if</code> can be used in a number of different ways, the most common being:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>if { true } then {
    # do something
} else {
    # do something else
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),ge=a("code",null,"if",-1),fe=s(`<h3 id="using-switch-statements" tabindex="-1"><a class="header-anchor" href="#using-switch-statements" aria-hidden="true">#</a> Using <code>switch</code> Statements</h3><p>Because <code>if ... else if</code> chains are ugly, Murex supports <code>switch</code> statements:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>switch $USER {
    case &quot;Tom&quot;   { out: &quot;Hello Tom&quot; }
    case &quot;Dick&quot;  { out: &quot;Howdie Richard&quot; }
    case &quot;Sally&quot; { out: &quot;Nice to meet you&quot; }

    default {
        out: &quot;I don&#39;t know who you are&quot;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),xe=a("code",null,"switch",-1),_e=a("br",null,null,-1),ye=a("h3",{id:"using-foreach-loops",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#using-foreach-loops","aria-hidden":"true"},"#"),e(" Using "),a("code",null,"foreach"),e(" Loops")],-1),we=a("code",null,"foreach",-1),ke=s(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>%[ apples bananas oranges ] | foreach fruit { out &quot;I like $fruit&quot; }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="using-formap-loops" tabindex="-1"><a class="header-anchor" href="#using-formap-loops" aria-hidden="true">#</a> Using <code>formap</code> Loops</h3>`,2),qe=a("code",null,"formap",-1),Te=a("code",null,"foreach",-1),Se=s(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>%{
    Bob:     {age: 10},
    Richard: {age: 20},
    Sally:   {age: 30}
} | formap name person {
    out &quot;$name is $person[age] years old&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="stopping-execution" tabindex="-1"><a class="header-anchor" href="#stopping-execution" aria-hidden="true">#</a> Stopping Execution</h2><h3 id="the-continue-statement" tabindex="-1"><a class="header-anchor" href="#the-continue-statement" aria-hidden="true">#</a> The <code>continue</code> Statement</h3><p><code>continue</code> will terminate execution of an inner block in iteration loops like<br><code>foreach</code> and <code>formap</code>. Thus <em>continuing</em> the loop from the next iteration:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>%[1..10] | foreach i {
    if { $i == 5 } then {
        continue foreach
        # ^ jump back to the next iteration
    }

    out $i
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),Ie=a("code",null,"continue",-1),Me=a("br",null,null,-1),Ee=a("code",null,"continue",-1),$e=s(`<h3 id="the-break-statement" tabindex="-1"><a class="header-anchor" href="#the-break-statement" aria-hidden="true">#</a> The <code>break</code> Statement</h3><p><code>break</code> will terminate execution of a block (eg <code>function</code>, <code>private</code>, <code>if</code>,<br><code>foreach</code>, etc):</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>%[1..10] | foreach i {
    if { $i == 5 } then {
        break foreach
        # ^ exit foreach
    }

    out $i
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>break</code> requires a parameter to define while block to end. Thus <code>break</code> can be<br> considered to exhibit the behavior of <em>return</em> as well as <em>break</em> in other<br> languages:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function example {
    if { $USER == &quot;root&quot; } then {
        err &quot;Don&#39;t run this as root&quot;
        break example
    }

    # ... do something ...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),Be=a("code",null,"break",-1),Le=a("h3",{id:"the-exit-statement",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#the-exit-statement","aria-hidden":"true"},"#"),e(" The "),a("code",null,"exit"),e(" Statement")],-1),Pe=a("code",null,"exit",-1),Re=a("br",null,null,-1),Ae=s('<h3 id="signal-sigint" tabindex="-1"><a class="header-anchor" href="#signal-sigint" aria-hidden="true">#</a> Signal: SIGINT</h3><p>This can be invoked by pressing <code>Ctrl</code> + <code>c</code>.</p><h3 id="signal-sigquit" tabindex="-1"><a class="header-anchor" href="#signal-sigquit" aria-hidden="true">#</a> Signal: SIGQUIT</h3><p>This can be invoked by pressing <code>Ctrl</code> + <code>\\</code></p><p>Sending SIGQUIT will terminate all running functions in the current Murex<br> session. Which is a handy escape hatch if your shell code starts misbehaving.</p><h3 id="signal-sigtstp" tabindex="-1"><a class="header-anchor" href="#signal-sigtstp" aria-hidden="true">#</a> Signal: SIGTSTP</h3><p>This can be invoked by pressing <code>Ctrl</code> + <code>z</code></p>',7);function Ce(Ge,Fe){const i=o("RouterLink"),l=o("ExternalLinkIcon");return d(),c("div",null,[h,a("p",null,[e("If you want to learn more about the interactive shell then there is a dedicated"),m,e(" document detailing "),t(i,{to:"/user-guide/interactive-shell.html"},{default:n(()=>[e("Murex's REPL features")]),_:1}),e(".")]),b,a("p",null,[e("Shells need to "),t(i,{to:"/blog/split_personalities.html"},{default:n(()=>[e("balance scripting with an efficient interactive terminal")]),_:1}),p,e(" interface. One of the most common approaches to solving that conflict between"),v,e(" readability and terseness is to make heavy use of barewords. Barewords are"),g,e(" ostensibly just instructions that are not quoted. In our case, command names"),f,e(" and command parameters.")]),x,a("p",null,[e("If you already know Bash and looking for the equivalent syntax in Murex, then"),_,e(" our "),t(i,{to:"/user-guide/rosetta-stone.html"},{default:n(()=>[e("Rosetta Stone")]),_:1}),e(" reference will help you to"),y,e(" translate your Bash code into Murex code.")]),w,k,q,T,a("ul",null,[a("li",null,[S,e(": use this for string literals ("),t(i,{to:"/parser/single-quote.html"},{default:n(()=>[e("read more")]),_:1}),e(")")]),a("li",null,[I,e(": use this for infixing variables ("),t(i,{to:"/parser/double-quote.html"},{default:n(()=>[e("read more")]),_:1}),e(")")]),a("li",null,[M,e(": use this for nesting quotes ("),t(i,{to:"/parser/brace-quote.html"},{default:n(()=>[e("read more")]),_:1}),e(")")])]),E,a("p",null,[e("as well as using the "),$,e(" statement like with traditional shells. ("),t(i,{to:"/commands/export.html"},{default:n(()=>[e("read more")]),_:1}),e(")")]),B,L,a("p",null,[e("In general, Murex will try to infer the data type of a variable or pipe. It"),P,e(" can do this by checking the "),R,e(" HTTP header, the file name"),A,e(" extension or just looking at how that data was constructed (when defined via"),C,e(" expressions). However sometimes you may need to annotate your types. "),t(i,{to:"/commands/set.html#type-annotations"},{default:n(()=>[e("Read more")]),_:1})]),G,a("ul",null,[a("li",null,[a("p",null,[F,e(" works exactly the same as in any normal shell ("),t(i,{to:"/parser/pipe-posix.html"},{default:n(()=>[e("read more")]),_:1}),e(")")])]),a("li",null,[a("p",null,[U,e(" displays all of the supported methods (commands that support the output"),N,e(" of the previous command). Think of it a little like object orientated"),V,e(" programming where an object will have functions (methods) attached. ("),t(i,{to:"/parser/pipe-arrow.html"},{default:n(()=>[e("read more")]),_:1}),e(")")])])]),j,a("p",null,[e("You can also create your own pipes that are files, network connections, or any"),H,e(" other custom data input or output endpoint. "),t(i,{to:"/user-guide/namedpipes.html"},{default:n(()=>[e("read more")]),_:1})]),O,a("ul",null,[a("li",null,[D,e(" - traditional globbing ("),t(i,{to:"/commands/g.html"},{default:n(()=>[e("read more")]),_:1}),e(")")]),a("li",null,[Y,e(" - regexp matching in current directory only ("),t(i,{to:"/commands/rx.html"},{default:n(()=>[e("read more")]),_:1}),e(")")]),a("li",null,[Q,e(" - file type matching ("),t(i,{to:"/commands/f.html"},{default:n(()=>[e("read more")]),_:1}),e(")")])]),W,a("p",null,[e("In "),a("a",X,[e("bash you can expand lists"),t(l)]),z,e(" using the following syntax: "),J,e(". In Murex, like with globbing, brace"),K,e(" expansion is a function: "),Z,e(" and supports a much wider range of lists"),ee,e(" that can be expanded. ("),t(i,{to:"/commands/a.html"},{default:n(()=>[e("read more")]),_:1}),e(")")]),ae,a("p",null,[te,e(" behaves slightly differently to Bash. ("),t(i,{to:"/commands/alias.html"},{default:n(()=>[e("read more")]),_:1}),e(")")]),ie,a("p",null,[e("You can create custom functions in Murex using "),ne,e(". ("),t(i,{to:"/commands/function.html"},{default:n(()=>[e("read more")]),_:1}),e(")")]),se,a("p",null,[oe,e(" functions are like "),le,e(" except they"),re,e(" are only available within their own modules namespace. ("),t(i,{to:"/commands/private.html"},{default:n(()=>[e("read more")]),_:1}),e(")")]),de,a("p",null,[e("External executables (including any programs located in "),ce,e(") are invoked"),ue,e(" via the "),he,e(" builtin ("),t(i,{to:"/commands/exec.html"},{default:n(()=>[e("read more")]),_:1}),e(") however if a command"),me,e(" isn't an expression, alias, function nor builtin, then Murex assumes it is an"),be,e(" external executable and automatically invokes "),pe,e(".")]),ve,a("p",null,[ge,e(" supports a flexible variety of incarnation to solve different problems. ("),t(i,{to:"/commands/if.html"},{default:n(()=>[e("read more")]),_:1}),e(")")]),fe,a("p",null,[xe,e(" supports a flexible variety of different usages to solve different"),_e,e(" problems. ("),t(i,{to:"/commands/switch.html"},{default:n(()=>[e("read more")]),_:1}),e(")")]),ye,a("p",null,[we,e(" allows you to easily iterate through an array or list of any type: ("),t(i,{to:"/commands/foreach.html"},{default:n(()=>[e("read more")]),_:1}),e(")")]),ke,a("p",null,[qe,e(" loops are the equivalent of "),Te,e(" but against map objects: ("),t(i,{to:"/commands/formap.html"},{default:n(()=>[e("read more")]),_:1}),e(")")]),Se,a("p",null,[Ie,e(" requires a parameter to define while block to iterate on. This means"),Me,e(" you can use "),Ee,e(" within nested loops and still have readable code. ("),t(i,{to:"/commands/continue.html"},{default:n(()=>[e("read more")]),_:1}),e(")")]),$e,a("p",null,[Be,e(" cannot exit anything above it's callers scope. ("),t(i,{to:"/commands/break.html"},{default:n(()=>[e("read more")]),_:1}),e(")")]),Le,a("p",null,[e("Terminates Murex. "),Pe,e(" is not scope aware; if it is included in a function"),Re,e(" then the whole shell will still exist and not just that function. ("),t(i,{to:"/commands/exit.html"},{default:n(()=>[e("read more")]),_:1}),e(")")]),Ae])}const Ve=r(u,[["render",Ce],["__file","getting_started.html.vue"]]);export{Ve as default};
