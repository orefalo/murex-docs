import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as i,c as d,d as e,b as t,w as o,e as r,f as l}from"./app-32a3d18c.js";const c={},h=l(`<h1 id="man-get-flags" tabindex="-1"><a class="header-anchor" href="#man-get-flags" aria-hidden="true">#</a> <code>man-get-flags</code></h1><blockquote><p>Parses man page files for command line flags</p></blockquote><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2><p>Sometimes you might want to programmatically search <code>man</code> pages for any supported flag. Particularly if you&#39;re writing a dynamic autocompletion. <code>man-get-flags</code> does this and returns a JSON document.</p><p>You can either pipe a man page to <code>man-get-flags</code>, or pass the name of the command as a parameter.</p><p><code>man-get-flags</code> returns a JSON document. Either an array or an object, depending on what flags (if any) are passed.</p><p>If no flags are passed, <code>man-get-flags</code> will default to just parsing the man page for anything that looks like a flag (ie no descriptions or other detail).</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><pre><code>\`&lt;stdin&gt;\` -&gt; man-get-flags [--descriptions] -&gt; \`&lt;stdout&gt;\`

man-get-flags command [--descriptions] -&gt; \`&lt;stdout&gt;\`
</code></pre><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><pre><code>» man-get-flags --descriptions find -&gt; [{$.key =~ &#39;regex&#39;}]
{
    &quot;-iregex&quot;: &quot;eg: pattern -- Like -regex, but the match is case insensitive.&quot;,
    &quot;-regex&quot;: &quot;eg: pattern -- True if the whole path of the file matches pattern using regular expression.  To match a file named “./foo/xyzzy”, you can use the regular expression “.*/[xyz]*” or “.*/foo/.*”, but not “xyzzy” or “/foo/”.&quot;
}
</code></pre><h2 id="flags" tabindex="-1"><a class="header-anchor" href="#flags" aria-hidden="true">#</a> Flags</h2><ul><li><code>--descriptions</code> return a map of flags with their described usage</li><li><code>-d</code> shorthand for \`--descriptions</li></ul><h2 id="detail" tabindex="-1"><a class="header-anchor" href="#detail" aria-hidden="true">#</a> Detail</h2><h3 id="limitations" tabindex="-1"><a class="header-anchor" href="#limitations" aria-hidden="true">#</a> Limitations</h3><p>Due to the freeform nature of man pages - that they&#39;re intended to be human readable rather than machine readable - and the flexibility that developers have to parse command line parameters however they wish, there will always be a margin for error with how reliably any parser can autodetect parameters. one requirement is that flags are hyphen prefixed, eg <code>--flag</code>.</p><h2 id="see-also" tabindex="-1"><a class="header-anchor" href="#see-also" aria-hidden="true">#</a> See Also</h2>`,17),m=e("code",null,"man-summary",-1),u=e("code",null,"murex-docs",-1),p=e("code",null,"summary",-1);function f(g,x){const a=s("RouterLink");return i(),d("div",null,[h,e("ul",null,[e("li",null,[t(a,{to:"/commands/man-summary.html"},{default:o(()=>[m]),_:1}),r(": Outputs a man page summary of a command")]),e("li",null,[t(a,{to:"/commands/murex-docs.html"},{default:o(()=>[u]),_:1}),r(": Displays the man pages for Murex builtins")]),e("li",null,[t(a,{to:"/commands/summary.html"},{default:o(()=>[p]),_:1}),r(": Defines a summary help text for a command")])])])}const b=n(c,[["render",f],["__file","man-get-flags.html.vue"]]);export{b as default};