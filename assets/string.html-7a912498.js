import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as s,c as d,d as o,b as a,w as n,e,f as i}from"./app-cb2b377d.js";const u={},c=i(`<h1 id="string-token-parser-reference" tabindex="-1"><a class="header-anchor" href="#string-token-parser-reference" aria-hidden="true">#</a> String (<code>$</code>) Token - Parser Reference</h1><blockquote><p>Expand values as a string</p></blockquote><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2><p>The string token is used to tell Murex to expand variables and subshells as a string (ie one single parameter) irrespective of the data that is stored in the string. One handy common use case is file names where traditional POSIX shells would treat spaces as a new file, whereas Murex treats spaces as a printable character unless explicitly told to do otherwise.</p><p>The string token must be followed with one of the following characters: alpha, numeric, underscore (<code>_</code>) or a full stop / period (<code>.</code>).</p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p><strong>ASCII variable names:</strong></p><pre><code>» $example = &quot;foobar&quot;
» out $example
foobar
</code></pre><p><strong>Unicode variable names:</strong></p><p>Variable names can be non-ASCII however they have to be surrounded by parenthesis. eg</p><pre><code>» $(比如) = &quot;举手之劳就可以使办公室更加环保，比如，使用再生纸。&quot;
» out $(比如)
举手之劳就可以使办公室更加环保，比如，使用再生纸。
</code></pre><p><strong>Infixing inside text:</strong></p><p>Sometimes you need to denote the end of a variable and have text follow on.</p><pre><code>» $partial_word = &quot;orl&quot;
» out &quot;Hello w$(partial_word)d!&quot;
Hello world!
</code></pre><p><strong>Variables are tokens:</strong></p><p>Please note the new line (<code>\\n</code>) character. This is not split using <code>$</code>:</p><pre><code>» $example = &quot;foo\\nbar&quot;
</code></pre><p>Output as a string:</p><pre><code>» out $example
foo
bar
</code></pre><p>Output as an array:</p><pre><code>» out @example
foo bar
</code></pre><p>The string and array tokens also works for subshells:</p><pre><code>» out \${ %[Mon..Fri] }
[&quot;Mon&quot;,&quot;Tue&quot;,&quot;Wed&quot;,&quot;Thu&quot;,&quot;Fri&quot;]

» out @{ %[Mon..Fri] }
Mon Tue Wed Thu Fri
</code></pre><blockquote><p><code>out</code> will take an array and output each element, space delimited. Exactly the same how <code>echo</code> would in Bash.</p></blockquote><p><strong>Variable as a command:</strong></p><p>If a variable is used as a commend then Murex will just print the content of that variable.</p><pre><code>» $example = &quot;Hello World!&quot;

» $example
Hello World!
</code></pre><h2 id="detail" tabindex="-1"><a class="header-anchor" href="#detail" aria-hidden="true">#</a> Detail</h2><p>Strings and subshells can be expanded inside double quotes, brace quotes as well as used as barewords. But they cannot be expanded inside single quotes.</p><pre><code>» set: example=&quot;World!&quot;

» out: Hello $example
Hello World!

» out: &#39;Hello $example&#39;
Hello $example

» out: &quot;Hello $example&quot;
Hello World!

» out: %(Hello $example)
Hello World!
</code></pre><p>However you cannot expand arrays (<code>@</code>) inside any form of quotation since it wouldn&#39;t be clear how that value should be expanded relative to the other values inside the quote. This is why array and object builders (<code>%[]</code> and <code>%{}</code> respectively) support array variables but string builders (<code>%()</code>) do not.</p><h2 id="see-also" tabindex="-1"><a class="header-anchor" href="#see-also" aria-hidden="true">#</a> See Also</h2>`,32),p=o("code",null,"@",-1),h=o("code",null,"%(",-1),m=o("code",null,")",-1),b=o("code",null,'"',-1),_=o("code",null,"'",-1),f=o("code",null,"~",-1),x=o("code",null,"(",-1),g=o("code",null,"ja",-1),q=o("code",null,"let",-1),v=o("code",null,"out",-1),w=o("code",null,"set",-1);function y(k,T){const t=l("RouterLink");return s(),d("div",null,[c,o("ul",null,[o("li",null,[a(t,{to:"/parser/array.html"},{default:n(()=>[e("Array ("),p,e(") Token")]),_:1}),e(": Expand values as an array")]),o("li",null,[a(t,{to:"/parser/brace-quote.html"},{default:n(()=>[e("Brace Quote ("),h,e(", "),m,e(") Tokens")]),_:1}),e(": Initiates or terminates a string (variables expanded)")]),o("li",null,[a(t,{to:"/parser/double-quote.html"},{default:n(()=>[e("Double Quote ("),b,e(") Token")]),_:1}),e(": Initiates or terminates a string (variables expanded)")]),o("li",null,[a(t,{to:"/user-guide/reserved-vars.html"},{default:n(()=>[e("Reserved Variables")]),_:1}),e(": Special variables reserved by Murex")]),o("li",null,[a(t,{to:"/parser/single-quote.html"},{default:n(()=>[e("Single Quote ("),_,e(") Token")]),_:1}),e(": Initiates or terminates a string (variables not expanded)")]),o("li",null,[a(t,{to:"/parser/tilde.html"},{default:n(()=>[e("Tilde ("),f,e(") Token")]),_:1}),e(": Home directory path variable")]),o("li",null,[a(t,{to:"/commands/brace-quote.html"},{default:n(()=>[x,e(" (brace quote)")]),_:1}),e(": Write a string to the STDOUT without new line")]),o("li",null,[a(t,{to:"/commands/ja.html"},{default:n(()=>[g,e(" (mkarray)")]),_:1}),e(": A sophisticated yet simply way to build a JSON array")]),o("li",null,[a(t,{to:"/commands/let.html"},{default:n(()=>[q]),_:1}),e(": Evaluate a mathematical function and assign to variable (deprecated)")]),o("li",null,[a(t,{to:"/commands/out.html"},{default:n(()=>[v]),_:1}),e(": Print a string to the STDOUT with a trailing new line character")]),o("li",null,[a(t,{to:"/commands/set.html"},{default:n(()=>[w]),_:1}),e(": Define a local variable and set it's value")])])])}const S=r(u,[["render",y],["__file","string.html.vue"]]);export{S as default};
