import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as r,c as d,d as e,b as t,w as n,e as a,f as c}from"./app-4653c0b0.js";const u={},h=e("h1",{id:"spellcheck",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#spellcheck","aria-hidden":"true"},"#"),a(" Spellcheck")],-1),p=e("blockquote",null,[e("p",null,"How to enable inline spellchecking")],-1),m=e("p",null,"Murex supports inline spellchecking, where errors are underlined. For example",-1),g={href:"https://asciinema.org/a/408024",target:"_blank",rel:"noopener noreferrer"},f=e("img",{src:"https://asciinema.org/a/408024.svg",alt:"asciicast",loading:"lazy"},null,-1),b=c(`<p>However to use this there needs to be a few satisfied prerequisites, not all of which will be enabled by default:</p><h2 id="cli-spellchecker-3rd-party-software" tabindex="-1"><a class="header-anchor" href="#cli-spellchecker-3rd-party-software" aria-hidden="true">#</a> CLI Spellchecker (3rd Party Software)</h2><p>A CLI spellchecker needs to be installed. The recommendation is <code>aspell</code>. This might already be installed by default with your OS or has been included as a dependency with another application. You can check if <code>aspell</code> is installed by running the following:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>which: aspell
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>If that returns no data, then you will need to install <code>aspell</code> yourself. Please consult your OS docs for how to install software.</p><p>For help debugging issues with <code>aspell</code>, please see the last section in this document.</p><h2 id="murex-config" tabindex="-1"><a class="header-anchor" href="#murex-config" aria-hidden="true">#</a> Murex Config</h2><h3 id="ansi-escape-sequences" tabindex="-1"><a class="header-anchor" href="#ansi-escape-sequences" aria-hidden="true">#</a> ANSI Escape Sequences</h3><p>ANSI escape sequences need to be enabled (which they are by default). This option is found in <code>config</code> under <strong>shell</strong>, <strong>color</strong>.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>config: set shell color true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="spellcheck-enable" tabindex="-1"><a class="header-anchor" href="#spellcheck-enable" aria-hidden="true">#</a> Spellcheck Enable</h3><p>Spellcheck needs to be enabled. This option can be found in <code>config</code> under <strong>shell</strong>, <strong>spellcheck-enabled</strong>.</p><p>To enable this run:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>config: set shell spellcheck-enabled true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>...or add the above line to your Murex profile, <code>~/.murex_profile</code> to make the change persistent.</p><blockquote><p>Please note that this option will automatically be enabled if <code>aspell</code> is installed.</p></blockquote><h3 id="spellcheck-murex-code" tabindex="-1"><a class="header-anchor" href="#spellcheck-murex-code" aria-hidden="true">#</a> Spellcheck Murex Code</h3><p>This shouldn&#39;t need tweaking if you&#39;re running <code>aspell</code> but other spellcheckers will require updated code. The default will look something like this:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>» config: get shell spellcheck-func
{ -&gt; aspell list }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>The default should be good enough for most people but should you want to run an alternative spellchecker then follow the instructions in the next section:</p><h2 id="how-to-write-your-own-spellcheck-func" tabindex="-1"><a class="header-anchor" href="#how-to-write-your-own-spellcheck-func" aria-hidden="true">#</a> How To Write Your Own <code>spellcheck-func</code></h2><p>You might legitimately want to run a different spellchecker and if so you&#39;ll need to write your own <strong>spellcheck-func</strong>. Fortunately this is simple:</p><p>The function reads the command line from STDIN, if the spellchecker reads lines from parameters rather than STDIN you&#39;ll need to write something equivalent to the following</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    # This is a theoretical example. It will not work generically.
    -&gt; set: line
    newspellchecker --check &quot;$line&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The output of the function must me an array containing the misspelt words only. That array can be JSON just as long as you have set STDOUT&#39;s data type to <code>json</code>. Similarly, other supported Murex data types can be used too. However in general you might just want to go with a misspelling per line as it&#39;s pretty POSIX friendly and thus most spellcheckers are likely to support it. eg</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>» out &quot;a list of misspelt words: qwert fuubar madeupword&quot; -&gt; aspell: list
qwert
fuubar
madeupword
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="user-dictionary" tabindex="-1"><a class="header-anchor" href="#user-dictionary" aria-hidden="true">#</a> User Dictionary</h2><p>Murex has it&#39;s own user dictionary, which is held as a JSON array:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>» config: get shell spellcheck-user-dictionary
[&quot;murex&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>You can add words to a user dictionary via:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>» config: eval shell spellcheck-user-dictionary { -&gt; append &quot;myword&quot; }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>or</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>» config: eval shell spellcheck-user-dictionary { -&gt; alter: --merge / ([&quot;word1&quot;, &quot;word2&quot;, &quot;word3&quot;]) }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>Don&#39;t forget to record these in your Murex profile, <code>~/.murex_profile</code> to make the changes persistent.</p></blockquote><h3 id="ignored-by-default" tabindex="-1"><a class="header-anchor" href="#ignored-by-default" aria-hidden="true">#</a> Ignored By Default</h3><p>Sometimes commands are not valid words in ones native language. Thus any words that fall into the following categories are ignored by default:</p><ul><li>words that are also the names of commands found in <code>$PATH</code></li><li>words that are the names of Murex functions (defined via <code>function</code>)</li><li>words that are builtins (eg <code>config</code> and <code>jsplit</code>)</li><li>any global aliases</li><li>also any words that are also the names of global variables</li></ul><h2 id="common-problems-with-aspell" tabindex="-1"><a class="header-anchor" href="#common-problems-with-aspell" aria-hidden="true">#</a> Common Problems With <code>aspell</code></h2><h3 id="error-no-word-lists-can-be-found-for-the-language-en-nz" tabindex="-1"><a class="header-anchor" href="#error-no-word-lists-can-be-found-for-the-language-en-nz" aria-hidden="true">#</a> <code>Error: No word lists can be found for the language &quot;en_NZ&quot;.</code></h3><p>The <code>en_NZ</code> portion of the error will differ depending on your language.</p><p>If this error arises then it means <code>aspell</code> is installed but it doesn&#39;t have the dictionary for your language. This is an easy fix in most OSs. For example in Ubuntu:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>apt install aspell-en
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>(you may need to change <code>-en</code> with your specific language code)</p><p>Please consult your operating systems documentation for how to install software and what the package names are for <code>aspell</code> and its corresponding dictionaries.</p><h2 id="see-also" tabindex="-1"><a class="header-anchor" href="#see-also" aria-hidden="true">#</a> See Also</h2>`,45),v=e("code",null,"{",-1),x=e("code",null,"}",-1),w=e("code",null,"alter",-1),y=e("code",null,"append",-1),k=e("code",null,"config",-1),_=e("code",null,"json",-1),q=e("code",null,"jsplit",-1),S=e("code",null,"set",-1);function T(I,N){const i=o("ExternalLinkIcon"),l=o("RouterLink");return r(),d("div",null,[h,p,m,e("p",null,[e("a",g,[f,t(i)])]),b,e("ul",null,[e("li",null,[t(l,{to:"/user-guide/ansi.html"},{default:n(()=>[a("ANSI Constants")]),_:1}),a(": Infixed constants that return ANSI escape sequences")]),e("li",null,[t(l,{to:"/user-guide/code-block.html"},{default:n(()=>[a("Code Block Parsing")]),_:1}),a(": Overview of how code blocks are parsed")]),e("li",null,[t(l,{to:"/parser/curly-brace.html"},{default:n(()=>[a("Curly Brace ("),v,a(", "),x,a(") Tokens")]),_:1}),a(": Initiates or terminates a code block")]),e("li",null,[t(l,{to:"/user-guide/profile.html"},{default:n(()=>[a("Murex Profile Files")]),_:1}),a(": A breakdown of the different files loaded on start up")]),e("li",null,[t(l,{to:"/user-guide/interactive-shell.html"},{default:n(()=>[a("Murex's Interactive Shell")]),_:1}),a(": What's different about Murex's interactive shell?")]),e("li",null,[t(l,{to:"/commands/alter.html"},{default:n(()=>[w]),_:1}),a(": Change a value within a structured data-type and pass that change along the pipeline without altering the original source input")]),e("li",null,[t(l,{to:"/commands/append.html"},{default:n(()=>[y]),_:1}),a(": Add data to the end of an array")]),e("li",null,[t(l,{to:"/commands/config.html"},{default:n(()=>[k]),_:1}),a(": Query or define Murex runtime settings")]),e("li",null,[t(l,{to:"/types/json.html"},{default:n(()=>[_]),_:1}),a(": JavaScript Object Notation (JSON)")]),e("li",null,[t(l,{to:"/commands/jsplit.html"},{default:n(()=>[q]),_:1}),a(": Splits STDIN into a JSON array based on a regex parameter")]),e("li",null,[t(l,{to:"/commands/set.html"},{default:n(()=>[S]),_:1}),a(": Define a local variable and set it's value")])])])}const C=s(u,[["render",T],["__file","spellcheck.html.vue"]]);export{C as default};
