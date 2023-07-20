import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";import{r as n,o as i,c as l,a as e,d as o,w as r,b as t,e as s}from"./app-524c2bb5.js";const c={},u=s(`<h1 id="read-command-reference" tabindex="-1"><a class="header-anchor" href="#read-command-reference" aria-hidden="true">#</a> <code>read</code> - Command Reference</h1><blockquote><p><code>read</code> a line of input from the user and store as a variable</p></blockquote><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2><p>A readline function to allow a line of data inputed from the terminal.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><p>Classic usage:</p><pre><code>read: &quot;prompt&quot; var_name

\`&lt;stdin&gt;\` -&gt; read: var_name
</code></pre><p>Script usage:</p><pre><code>read: [ --prompt &quot;prompt&quot;         ]
      [ --variable var_name       ]
      [ --default &quot;default value&quot; ]
      [ --datatype data-type      ]
      [ --autocomplete { json }   ]
      [ --mask character          ]
</code></pre><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p><strong>Classic usage:</strong></p><pre><code>read: &quot;What is your name? &quot; name
out: &quot;Hello $name&quot;

out: What is your name? -&gt; read: name
out: &quot;Hello $name&quot;
</code></pre><p><strong>Script usage:</strong></p><pre><code>read: --prompt &quot;Are you sure? [Y/n]&quot; \\
      --variable yn \\
      --default Y
</code></pre><p><strong>Secrets:</strong></p><pre><code>read: --prompt &quot;Password: &quot; --variable pw --mask *
</code></pre><h2 id="flags" tabindex="-1"><a class="header-anchor" href="#flags" aria-hidden="true">#</a> Flags</h2><ul><li><code>--autocomplete</code> Autocompletion suggestions. Can be either a JSON array or a JSON object</li><li><code>--datatype</code> Murex data-type for the read data (default: str)</li><li><code>--default</code> If a zero length string is returned but neither <code>ctrl</code>+<code>c</code> nor <code>ctrl</code>+<code>d</code> were pressed, then the default value defined here will be returned</li><li><code>--mask</code> Optional password mask, for reading secrets</li><li><code>--prompt</code> User notification to display</li><li><code>--variable</code> Variable name to store the read data (default: read)</li></ul><h2 id="detail" tabindex="-1"><a class="header-anchor" href="#detail" aria-hidden="true">#</a> Detail</h2><h3 id="classic-usage" tabindex="-1"><a class="header-anchor" href="#classic-usage" aria-hidden="true">#</a> Classic Usage</h3><p>If <code>read</code> is called as a method then the prompt string is taken from STDIN. Otherwise the prompt string will be the first parameter. However if no prompt string is given then <code>read</code> will not write a prompt.</p><p>The last parameter will be the variable name to store the string read by <code>read</code>. This variable cannot be prefixed by dollar, <code>$</code>, otherwise the shell will write the output of that variable as the last parameter rather than the name of the variable.</p><p>The data type the <code>read</code> line will be stored as is <code>str</code> (string). If you require this to be different then please use <code>tread</code> (typed read) or call <code>read</code> with the <code>--datatype</code> flag as per the <strong>script usage</strong>.</p><h2 id="see-also" tabindex="-1"><a class="header-anchor" href="#see-also" aria-hidden="true">#</a> See Also</h2>`,24),h=e("code",null,"(",-1),p=e("code",null,">>",-1),m=e("code",null,">",-1),f=e("code",null,"cast",-1),g=e("code",null,"err",-1),_=e("code",null,"out",-1),b=e("code",null,"tout",-1),w=e("code",null,"tread",-1),v=e("code",null,"read",-1),q=e("em",null,"typed",-1);function y(x,S){const a=n("RouterLink");return i(),l("div",null,[u,e("ul",null,[e("li",null,[o(a,{to:"/guide/commands/brace-quote.html"},{default:r(()=>[h,t(" (brace quote)")]),_:1}),t(": Write a string to the STDOUT without new line")]),e("li",null,[o(a,{to:"/guide/commands/greater-than-greater-than.html"},{default:r(()=>[p,t(" (append file)")]),_:1}),t(": Writes STDIN to disk - appending contents if file already exists")]),e("li",null,[o(a,{to:"/guide/commands/greater-than.html"},{default:r(()=>[m,t(" (truncate file)")]),_:1}),t(": Writes STDIN to disk - overwriting contents if file already exists")]),e("li",null,[o(a,{to:"/guide/commands/cast.html"},{default:r(()=>[f]),_:1}),t(": Alters the data type of the previous function without altering it's output")]),e("li",null,[o(a,{to:"/guide/commands/err.html"},{default:r(()=>[g]),_:1}),t(": Print a line to the STDERR")]),e("li",null,[o(a,{to:"/guide/commands/out.html"},{default:r(()=>[_]),_:1}),t(": Print a string to the STDOUT with a trailing new line character")]),e("li",null,[o(a,{to:"/guide/commands/tout.html"},{default:r(()=>[b]),_:1}),t(": Print a string to the STDOUT and set it's data-type")]),e("li",null,[o(a,{to:"/guide/commands/tread.html"},{default:r(()=>[w]),_:1}),t(": "),v,t(" a line of input from the user and store as a user defined "),q,t(" variable (deprecated)")])])])}const D=d(c,[["render",y],["__file","read.html.vue"]]);export{D as default};
