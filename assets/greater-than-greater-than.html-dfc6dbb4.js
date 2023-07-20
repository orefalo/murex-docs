import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as l,c as r,a as e,d as o,w as n,b as t,e as s}from"./app-524c2bb5.js";const c={},h=s('<h1 id="append-file-command-reference" tabindex="-1"><a class="header-anchor" href="#append-file-command-reference" aria-hidden="true">#</a> <code>&gt;&gt;</code> (append file) - Command Reference</h1><blockquote><p>Writes STDIN to disk - appending contents if file already exists</p></blockquote><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2><p>Redirects output to file.</p><p>If a file already exists, the contents will be appended to existing contents. Otherwise a new file is created.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><pre><code>`&lt;stdin&gt;` &gt;&gt; filename\n</code></pre><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><pre><code>g * &gt;&gt; files.txt\n</code></pre><h2 id="synonyms" tabindex="-1"><a class="header-anchor" href="#synonyms" aria-hidden="true">#</a> Synonyms</h2><ul><li><code>&gt;&gt;</code></li><li><code>fappend</code></li></ul><h2 id="see-also" tabindex="-1"><a class="header-anchor" href="#see-also" aria-hidden="true">#</a> See Also</h2>',12),p=e("code",null,"->",-1),m=e("code",null,"|",-1),u=e("code",null,"?",-1),f=e("code",null,"<>",-1),_=e("code",null,"read-named-pipe",-1),g=e("code",null,">",-1),x=e("code",null,"g",-1),T=e("code",null,"*.txt",-1),S=e("code",null,"pipe",-1),b=e("code",null,"tmp",-1);function k(y,D){const a=i("RouterLink");return l(),r("div",null,[h,e("ul",null,[e("li",null,[o(a,{to:"/guide/parser/pipe-arrow.html"},{default:n(()=>[t("Arrow Pipe ("),p,t(") Token")]),_:1}),t(": Pipes STDOUT from the left hand command to STDIN of the right hand command")]),e("li",null,[o(a,{to:"/guide/parser/pipe-posix.html"},{default:n(()=>[t("POSIX Pipe ("),m,t(") Token")]),_:1}),t(": Pipes STDOUT from the left hand command to STDIN of the right hand command")]),e("li",null,[o(a,{to:"/guide/parser/pipe-err.html"},{default:n(()=>[t("STDERR Pipe ("),u,t(") Token")]),_:1}),t(": Pipes STDERR from the left hand command to STDIN of the right hand command")]),e("li",null,[o(a,{to:"/guide/commands/namedpipe.html"},{default:n(()=>[f,t(" / "),_]),_:1}),t(": Reads from a Murex named pipe")]),e("li",null,[o(a,{to:"/guide/commands/greater-than.html"},{default:n(()=>[g,t(" (truncate file)")]),_:1}),t(": Writes STDIN to disk - overwriting contents if file already exists")]),e("li",null,[o(a,{to:"/guide/commands/g.html"},{default:n(()=>[x]),_:1}),t(": Glob pattern matching for file system objects (eg "),T,t(")")]),e("li",null,[o(a,{to:"/guide/commands/pipe.html"},{default:n(()=>[S]),_:1}),t(": Manage Murex named pipes")]),e("li",null,[o(a,{to:"/guide/commands/tmp.html"},{default:n(()=>[b]),_:1}),t(": Create a temporary file and write to it")])])])}const R=d(c,[["render",k],["__file","greater-than-greater-than.html.vue"]]);export{R as default};
