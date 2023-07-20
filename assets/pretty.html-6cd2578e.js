import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as i,c as s,a as e,d as a,w as o,b as r,e as u}from"./app-66ffa3c3.js";const c={},l=u(`<h1 id="pretty-command-reference" tabindex="-1"><a class="header-anchor" href="#pretty-command-reference" aria-hidden="true">#</a> <code>pretty</code> - Command Reference</h1><blockquote><p>Prettifies JSON to make it human readable</p></blockquote><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2><p>Takes JSON from the STDIN and reformats it to make it human readable, then outputs that to STDOUT.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><pre><code>\`&lt;stdin&gt;\` -&gt; pretty -&gt; \`&lt;stdout&gt;\`
</code></pre><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><pre><code>» tout: json {&quot;Array&quot;:[1,2,3],&quot;Map&quot;:{&quot;String&quot;: &quot;Foobar&quot;,&quot;Number&quot;:123.456}} -&gt; pretty
{
    &quot;Array&quot;: [
        1,
        2,
        3
    ],
    &quot;Map&quot;: {
        &quot;String&quot;: &quot;Foobar&quot;,
        &quot;Number&quot;: 123.456
    }
}
</code></pre><h2 id="see-also" tabindex="-1"><a class="header-anchor" href="#see-also" aria-hidden="true">#</a> See Also</h2>`,9),h=e("code",null,"format",-1),m=e("code",null,"out",-1),p=e("code",null,"tout",-1);function f(_,q){const t=d("RouterLink");return i(),s("div",null,[l,e("ul",null,[e("li",null,[a(t,{to:"/guide/commands/format.html"},{default:o(()=>[h]),_:1}),r(": Reformat one data-type into another data-type")]),e("li",null,[a(t,{to:"/guide/commands/out.html"},{default:o(()=>[m]),_:1}),r(": Print a string to the STDOUT with a trailing new line character")]),e("li",null,[a(t,{to:"/guide/commands/tout.html"},{default:o(()=>[p]),_:1}),r(": Print a string to the STDOUT and set it's data-type")])])])}const x=n(c,[["render",f],["__file","pretty.html.vue"]]);export{x as default};
