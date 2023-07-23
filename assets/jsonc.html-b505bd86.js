import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as d,c,d as e,e as t,b as o,w as a,f as l}from"./app-73035245.js";const u={},h=e("h1",{id:"jsonc",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#jsonc","aria-hidden":"true"},"#"),t(),e("code",null,"jsonc")],-1),p=e("blockquote",null,[e("p",null,"Concatenated JSON")],-1),m=e("h2",{id:"description",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#description","aria-hidden":"true"},"#"),t(" Description")],-1),q={href:"https://en.wikipedia.org/wiki/JSON_streaming#Concatenated_JSON",target:"_blank",rel:"noopener noreferrer"},_=l(`<blockquote><p>Concatenated JSON streaming allows the sender to simply write each JSON object into the stream with no delimiters. It relies on the receiver using a parser that can recognize and emit each JSON object as the terminating character is parsed. Concatenated JSON isn&#39;t a new format, it&#39;s simply a name for streaming multiple JSON objects without any delimiters.</p><p>The advantage of this format is that it can handle JSON objects that have been formatted with embedded newline characters, e.g., pretty-printed for human readability. For example, these two inputs are both valid and produce the same output:</p><h4 id="single-line-concatenated-json" tabindex="-1"><a class="header-anchor" href="#single-line-concatenated-json" aria-hidden="true">#</a> Single line concatenated JSON</h4><pre><code>{&quot;some&quot;:&quot;thing\\n&quot;}{&quot;may&quot;:{&quot;include&quot;:&quot;nested&quot;,&quot;objects&quot;:[&quot;and&quot;,&quot;arrays&quot;]}}
</code></pre><h4 id="multi-line-concatenated-json" tabindex="-1"><a class="header-anchor" href="#multi-line-concatenated-json" aria-hidden="true">#</a> Multi-line concatenated JSON</h4><pre><code>{
  &quot;some&quot;: &quot;thing\\n&quot;
}
{
  &quot;may&quot;: {
    &quot;include&quot;: &quot;nested&quot;,
    &quot;objects&quot;: [
      &quot;and&quot;,
      &quot;arrays&quot;
    ]
  }
}
</code></pre></blockquote><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Because of the similiaries with jsonlines (<code>jsonl</code>), the examples here will focus on jsonlines examples. However concatenated JSON doesn&#39;t need a new line separator. So the examples below could all be concatenated into one long line.</p>`,3),f={href:"http://jsonlines.org/examples/",target:"_blank",rel:"noopener noreferrer"},g=l(`<h3 id="tabulated-data" tabindex="-1"><a class="header-anchor" href="#tabulated-data" aria-hidden="true">#</a> Tabulated data</h3><pre><code>[&quot;Name&quot;, &quot;Session&quot;, &quot;Score&quot;, &quot;Completed&quot;]
[&quot;Gilbert&quot;, &quot;2013&quot;, 24, true]
[&quot;Alexa&quot;, &quot;2013&quot;, 29, true]
[&quot;May&quot;, &quot;2012B&quot;, 14, false]
[&quot;Deloise&quot;, &quot;2012A&quot;, 19, true]
</code></pre><p>This format is equatable to <code>generic</code> and <code>csv</code>.</p><h3 id="nested-objects" tabindex="-1"><a class="header-anchor" href="#nested-objects" aria-hidden="true">#</a> Nested objects</h3><pre><code>{&quot;name&quot;: &quot;Gilbert&quot;, &quot;wins&quot;: [[&quot;straight&quot;, &quot;7♣&quot;], [&quot;one pair&quot;, &quot;10♥&quot;]]}
{&quot;name&quot;: &quot;Alexa&quot;, &quot;wins&quot;: [[&quot;two pair&quot;, &quot;4♠&quot;], [&quot;two pair&quot;, &quot;9♠&quot;]]}
{&quot;name&quot;: &quot;May&quot;, &quot;wins&quot;: []}
{&quot;name&quot;: &quot;Deloise&quot;, &quot;wins&quot;: [[&quot;three of a kind&quot;, &quot;5♣&quot;]]}
</code></pre><h2 id="detail" tabindex="-1"><a class="header-anchor" href="#detail" aria-hidden="true">#</a> Detail</h2><h3 id="similarities-with-jsonl" tabindex="-1"><a class="header-anchor" href="#similarities-with-jsonl" aria-hidden="true">#</a> Similarities with <code>jsonl</code></h3><p>The advantage of concatenated JSON is that it supports everything jsonlines supports but without the dependency of a new line as a separator.</p><p>Eventually it is planned that this Murex data-type will replace jsonlines and possibly even the regular JSON parser. However this concatenated JSON parser currently requires reading the entire file first before parsing whereas jsonlines can read one line at a time. Which makes jsonlines a better data- type for pipelining super large documents. For this reason (and that this parser is still in beta), it is shipped as an additional data-type.</p><h2 id="default-associations" tabindex="-1"><a class="header-anchor" href="#default-associations" aria-hidden="true">#</a> Default Associations</h2><ul><li><strong>Extension</strong>: <code>concatenated-json</code></li><li><strong>Extension</strong>: <code>json-seq</code></li><li><strong>Extension</strong>: <code>jsonc</code></li><li><strong>Extension</strong>: <code>jsonconcat</code></li><li><strong>Extension</strong>: <code>jsons</code></li><li><strong>Extension</strong>: <code>jsonseq</code></li><li><strong>MIME</strong>: <code>application/concatenated-json</code></li><li><strong>MIME</strong>: <code>application/json-seq</code></li><li><strong>MIME</strong>: <code>application/jsonc</code></li><li><strong>MIME</strong>: <code>application/jsonconcat</code></li><li><strong>MIME</strong>: <code>application/jsonseq</code></li><li><strong>MIME</strong>: <code>application/x-concatenated-json</code></li><li><strong>MIME</strong>: <code>application/x-json-seq</code></li><li><strong>MIME</strong>: <code>application/x-jsonc</code></li><li><strong>MIME</strong>: <code>application/x-jsonconcat</code></li><li><strong>MIME</strong>: <code>application/x-jsonseq</code></li><li><strong>MIME</strong>: <code>text/concatenated-json</code></li><li><strong>MIME</strong>: <code>text/concatenated-json</code></li><li><strong>MIME</strong>: <code>text/json-seq</code></li><li><strong>MIME</strong>: <code>text/jsonc</code></li><li><strong>MIME</strong>: <code>text/jsonconcat</code></li><li><strong>MIME</strong>: <code>text/jsonseq</code></li><li><strong>MIME</strong>: <code>text/x-json-seq</code></li><li><strong>MIME</strong>: <code>text/x-jsonc</code></li><li><strong>MIME</strong>: <code>text/x-jsonconcat</code></li><li><strong>MIME</strong>: <code>text/x-jsonseq</code></li></ul><h2 id="supported-hooks" tabindex="-1"><a class="header-anchor" href="#supported-hooks" aria-hidden="true">#</a> Supported Hooks</h2><ul><li><code>Marshal()</code> Supported</li><li><code>ReadArray()</code> Works with JSON arrays. Maps are converted into arrays</li><li><code>ReadArrayWithType()</code> Works with JSON arrays. Maps are converted into arrays. Element data type is <code>json</code></li><li><code>ReadIndex()</code> Works against all properties in JSON</li><li><code>ReadMap()</code> Not currently supported.</li><li><code>ReadNotIndex()</code> Works against all properties in JSON</li><li><code>Unmarshal()</code> Supported</li><li><code>WriteArray()</code> Supported</li></ul><h2 id="see-also" tabindex="-1"><a class="header-anchor" href="#see-also" aria-hidden="true">#</a> See Also</h2>`,14),x=e("code",null,"*",-1),y=e("code",null,"Marshal()",-1),j=e("code",null,"ReadArray()",-1),M=e("code",null,"ReadIndex()",-1),b=e("code",null,"[",-1),S=e("code",null,"ReadMap()",-1),w=e("code",null,"ReadNotIndex()",-1),N=e("code",null,"![",-1),E=e("code",null,"Unmarshal()",-1),I=e("code",null,"WriteArray()",-1),O=e("code",null,"[[",-1),k=e("code",null,"[",-1),v=e("code",null,"cast",-1),J=e("code",null,"csv",-1),R=e("code",null,"foreach",-1),A=e("code",null,"format",-1),C=e("code",null,"hcl",-1),L=e("code",null,"json",-1),W=e("code",null,"jsonl",-1),T=e("code",null,"open",-1),D=e("code",null,"pretty",-1),B=e("code",null,"runtime",-1),H=e("code",null,"toml",-1),V=e("code",null,"yaml",-1);function U(F,G){const i=s("ExternalLinkIcon"),n=s("RouterLink");return d(),c("div",null,[h,p,m,e("p",null,[t("The following description is taken from "),e("a",q,[t("Wikipedia"),o(i)]),t(":")]),_,e("p",null,[t("Example JSON lines documents taken from "),e("a",f,[t("jsonlines.org"),o(i)])]),g,e("ul",null,[e("li",null,[o(n,{to:"/types/generic.html"},{default:a(()=>[x,t(" (generic) ")]),_:1}),t(": generic (primitive)")]),e("li",null,[o(n,{to:"/apis/Marshal.html"},{default:a(()=>[y,t(" (type)")]),_:1}),t(": Converts structured memory into a structured file format (eg for stdio)")]),e("li",null,[o(n,{to:"/apis/ReadArray.html"},{default:a(()=>[j,t(" (type)")]),_:1}),t(": Read from a data type one array element at a time")]),e("li",null,[o(n,{to:"/apis/ReadIndex.html"},{default:a(()=>[M,t(" (type)")]),_:1}),t(": Data type handler for the index, "),b,t(", builtin")]),e("li",null,[o(n,{to:"/apis/ReadMap.html"},{default:a(()=>[S,t(" (type)")]),_:1}),t(": Treat data type as a key/value structure and read its contents")]),e("li",null,[o(n,{to:"/apis/ReadNotIndex.html"},{default:a(()=>[w,t(" (type)")]),_:1}),t(": Data type handler for the bang-prefixed index, "),N,t(", builtin")]),e("li",null,[o(n,{to:"/apis/Unmarshal.html"},{default:a(()=>[E,t(" (type)")]),_:1}),t(": Converts a structured file format into structured memory")]),e("li",null,[o(n,{to:"/apis/WriteArray.html"},{default:a(()=>[I,t(" (type)")]),_:1}),t(": Write a data type, one array element at a time")]),e("li",null,[o(n,{to:"/commands/element.html"},{default:a(()=>[O,t(" (element)")]),_:1}),t(": Outputs an element from a nested structure")]),e("li",null,[o(n,{to:"/commands/index2.html"},{default:a(()=>[k,t(" (index)")]),_:1}),t(": Outputs an element from an array, map or table")]),e("li",null,[o(n,{to:"/commands/cast.html"},{default:a(()=>[v]),_:1}),t(": Alters the data type of the previous function without altering it's output")]),e("li",null,[o(n,{to:"/types/csv.html"},{default:a(()=>[J]),_:1}),t(": CSV files (and other character delimited tables)")]),e("li",null,[o(n,{to:"/commands/foreach.html"},{default:a(()=>[R]),_:1}),t(": Iterate through an array")]),e("li",null,[o(n,{to:"/commands/format.html"},{default:a(()=>[A]),_:1}),t(": Reformat one data-type into another data-type")]),e("li",null,[o(n,{to:"/types/hcl.html"},{default:a(()=>[C]),_:1}),t(": HashiCorp Configuration Language (HCL)")]),e("li",null,[o(n,{to:"/types/json.html"},{default:a(()=>[L]),_:1}),t(": JavaScript Object Notation (JSON)")]),e("li",null,[o(n,{to:"/types/jsonl.html"},{default:a(()=>[W]),_:1}),t(": JSON Lines")]),e("li",null,[o(n,{to:"/commands/open.html"},{default:a(()=>[T]),_:1}),t(": Open a file with a preferred handler")]),e("li",null,[o(n,{to:"/commands/pretty.html"},{default:a(()=>[D]),_:1}),t(": Prettifies JSON to make it human readable")]),e("li",null,[o(n,{to:"/commands/runtime.html"},{default:a(()=>[B]),_:1}),t(": Returns runtime information on the internal state of Murex")]),e("li",null,[o(n,{to:"/types/toml.html"},{default:a(()=>[H]),_:1}),t(": Tom's Obvious, Minimal Language (TOML)")]),e("li",null,[o(n,{to:"/types/yaml.html"},{default:a(()=>[V]),_:1}),t(": YAML Ain't Markup Language (YAML)")]),e("li",null,[o(n,{to:"/types/mxjson.html"},{default:a(()=>[t("mxjson")]),_:1}),t(": Murex-flavoured JSON (deprecated)")])])])}const P=r(u,[["render",U],["__file","jsonc.html.vue"]]);export{P as default};