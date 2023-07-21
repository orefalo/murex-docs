import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as q,o as d,c as s,d as o,b as u,w as a,e as t,f as l}from"./app-dae038b0.js";const r={},i=l(`<h1 id="murex-shell-docs" tabindex="-1"><a class="header-anchor" href="#murex-shell-docs" aria-hidden="true">#</a> Murex Shell Docs</h1><h2 id="command-reference-swivel-datatype" tabindex="-1"><a class="header-anchor" href="#command-reference-swivel-datatype" aria-hidden="true">#</a> Command Reference: <code>swivel-datatype</code></h2><blockquote><p>Converts tabulated data into a map of values for serialised data-types such as JSON and YAML</p></blockquote><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2><p><code>swivel-datatype</code> rotates a table by 90 degrees then exports the output as a series of maps to be marshalled by a serialised datatype such as JSON or YAML.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><pre><code>\`&lt;stdin&gt;\` -&gt; swivel-datatype: data-type -&gt; \`&lt;stdout&gt;\`
</code></pre><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Lets take the first 5 entries from <code>ps</code>:</p><pre><code>» ps: aux -&gt; head: -n5 -&gt; format: csv
&quot;USER&quot;,&quot;PID&quot;,&quot;%CPU&quot;,&quot;%MEM&quot;,&quot;VSZ&quot;,&quot;RSS&quot;,&quot;TTY&quot;,&quot;STAT&quot;,&quot;START&quot;,&quot;TIME&quot;,&quot;COMMAND&quot;
&quot;root&quot;,&quot;1&quot;,&quot;0.0&quot;,&quot;0.1&quot;,&quot;233996&quot;,&quot;8736&quot;,&quot;?&quot;,&quot;Ss&quot;,&quot;Feb19&quot;,&quot;0:02&quot;,&quot;/sbin/init&quot;
&quot;root&quot;,&quot;2&quot;,&quot;0.0&quot;,&quot;0.0&quot;,&quot;0&quot;,&quot;0&quot;,&quot;?&quot;,&quot;S&quot;,&quot;Feb19&quot;,&quot;0:00&quot;,&quot;[kthreadd]&quot;
&quot;root&quot;,&quot;4&quot;,&quot;0.0&quot;,&quot;0.0&quot;,&quot;0&quot;,&quot;0&quot;,&quot;?&quot;,&quot;I&lt;&quot;,&quot;Feb19&quot;,&quot;0:00&quot;,&quot;[kworker/0:0H]&quot;
&quot;root&quot;,&quot;6&quot;,&quot;0.0&quot;,&quot;0.0&quot;,&quot;0&quot;,&quot;0&quot;,&quot;?&quot;,&quot;I&lt;&quot;,&quot;Feb19&quot;,&quot;0:00&quot;,&quot;[mm_percpu_wq]&quot;
</code></pre><p>That data swivelled would look like the following:</p><pre><code>» ps: aux -&gt; head: -n5 -&gt; format: csv -&gt; swivel-datatype: yaml
&#39;%CPU&#39;:
- &quot;0.0&quot;
- &quot;0.0&quot;
- &quot;0.0&quot;
- &quot;0.0&quot;
&#39;%MEM&#39;:
- &quot;0.1&quot;
- &quot;0.0&quot;
- &quot;0.0&quot;
- &quot;0.0&quot;
COMMAND:
- /sbin/init
- &#39;[kthreadd]&#39;
- &#39;[kworker/0:0H]&#39;
- &#39;[mm_percpu_wq]&#39;
PID:
- &quot;1&quot;
- &quot;2&quot;
- &quot;4&quot;
- &quot;6&quot;
RSS:
- &quot;8736&quot;
- &quot;0&quot;
- &quot;0&quot;
- &quot;0&quot;
START:
- Feb19
- Feb19
- Feb19
- Feb19
STAT:
- Ss
- S
- I&lt;
- I&lt;
TIME:
- &quot;0:02&quot;
- &quot;0:00&quot;
- &quot;0:00&quot;
- &quot;0:00&quot;
TTY:
- &#39;?&#39;
- &#39;?&#39;
- &#39;?&#39;
- &#39;?&#39;
USER:
- root
- root
- root
- root
VSZ:
- &quot;233996&quot;
- &quot;0&quot;
- &quot;0&quot;
- &quot;0&quot;
</code></pre><p>Please note that for input data-types whose table doesn&#39;t define titles (such as the <code>generic</code> datatype), the map keys are defaulted to column numbers:</p><pre><code>» ps: aux -&gt; head: -n5 -&gt; swivel-datatype: yaml
&quot;0&quot;:
- USER
- root
- root
- root
- root
&quot;1&quot;:
- PID
- &quot;1&quot;
- &quot;2&quot;
- &quot;4&quot;
- &quot;6&quot;
&quot;2&quot;:
- &#39;%CPU&#39;
- &quot;0.0&quot;
- &quot;0.0&quot;
- &quot;0.0&quot;
- &quot;0.0&quot;
&quot;3&quot;:
- &#39;%MEM&#39;
- &quot;0.1&quot;
- &quot;0.0&quot;
- &quot;0.0&quot;
- &quot;0.0&quot;
...
</code></pre><h2 id="detail" tabindex="-1"><a class="header-anchor" href="#detail" aria-hidden="true">#</a> Detail</h2><p>You can check what output data-types are available via the <code>runtime</code> command:</p><pre><code>runtime --marshallers
</code></pre><p>Marshallers are enabled at compile time from the <code>builtins/data-types</code> directory.</p><h2 id="see-also" tabindex="-1"><a class="header-anchor" href="#see-also" aria-hidden="true">#</a> See Also</h2>`,19),c=o("code",null,"[[",-1),h=o("code",null,"[",-1),m=o("code",null,"alter",-1),p=o("code",null,"append",-1),f=o("code",null,"cast",-1),_=o("code",null,"format",-1),b=o("code",null,"prepend",-1),y=o("code",null,"runtime",-1),w=o("code",null,"swivel-table",-1);function x(g,v){const e=q("RouterLink");return d(),s("div",null,[i,o("ul",null,[o("li",null,[u(e,{to:"/commands/element.html"},{default:a(()=>[t("commands/"),c,t(" (element)")]),_:1}),t(": Outputs an element from a nested structure")]),o("li",null,[u(e,{to:"/commands/index2.html"},{default:a(()=>[t("commands/"),h,t(" (index)")]),_:1}),t(": Outputs an element from an array, map or table")]),o("li",null,[u(e,{to:"/commands/alter.html"},{default:a(()=>[t("commands/"),m]),_:1}),t(": Change a value within a structured data-type and pass that change along the pipeline without altering the original source input")]),o("li",null,[u(e,{to:"/commands/append.html"},{default:a(()=>[t("commands/"),p]),_:1}),t(": Add data to the end of an array")]),o("li",null,[u(e,{to:"/commands/cast.html"},{default:a(()=>[t("commands/"),f]),_:1}),t(": Alters the data type of the previous function without altering it's output")]),o("li",null,[u(e,{to:"/commands/format.html"},{default:a(()=>[t("commands/"),_]),_:1}),t(": Reformat one data-type into another data-type")]),o("li",null,[u(e,{to:"/commands/prepend.html"},{default:a(()=>[t("commands/"),b]),_:1}),t(": Add data to the start of an array")]),o("li",null,[u(e,{to:"/commands/runtime.html"},{default:a(()=>[t("commands/"),y]),_:1}),t(": Returns runtime information on the internal state of Murex")]),o("li",null,[u(e,{to:"/commands/swivel-table.html"},{default:a(()=>[t("commands/"),w]),_:1}),t(": Rotates a table by 90 degrees")])])])}const M=n(r,[["render",x],["__file","swivel-datatype.html.vue"]]);export{M as default};
