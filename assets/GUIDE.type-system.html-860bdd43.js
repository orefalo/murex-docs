import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as n,o as s,c as r,a as e,b as t,d as l,w as a,e as d}from"./app-524c2bb5.js";const u={},c=e("h1",{id:"data-type-reference",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#data-type-reference","aria-hidden":"true"},"#"),t(" Data-Type Reference")],-1),h=e("p",null,"This section is a glossary of data-types which Murex is natively aware.",-1),m=e("p",null,"Most of the time you will not need to worry about typing in Murex as the shell is designed around productivity as opposed to strictness despite generally following a strictly typed design.",-1),p=d('<h2 id="definitions" tabindex="-1"><a class="header-anchor" href="#definitions" aria-hidden="true">#</a> Definitions</h2><p>For clarity, it is worth explaining a couple of terms:</p><ol><li><p>&quot;Data-types&quot; in Murex are a description of the format of data. This means that while any stdio stream in UNIX will by &quot;bytes&quot;, Murex might label that data as being a JSON string or CSV file (for example) which means any builtins that parse that stdio stream, for example to return the first 8 items, would need to parse those types differently. Thus a &quot;data-type&quot; in Murex is actually more than just a description of a data structure; it is a series of APIs to marshall and unmarshall data from complex file formats. This enables you to use the same command line tools to query any type of output.</p></li><li><p>&quot;Primitive&quot; data-types refer to types that are the required by Murex to function. These will be <code>int</code>, <code>float</code> / <code>number</code>, <code>bool</code>, <code>string</code>, <code>generic</code>, and <code>null</code>.</p></li></ol><h2 id="feature-sets" tabindex="-1"><a class="header-anchor" href="#feature-sets" aria-hidden="true">#</a> Feature Sets</h2><p>Since not all data formats are equal (for example the TOML file format doesn&#39;t support naked arrays where as JSON does), you may find some features missing in some data-types which are present in others. If in doubt then refer to the manual here or check the API manual for more details about specific hooks.</p><h2 id="pages" tabindex="-1"><a class="header-anchor" href="#pages" aria-hidden="true">#</a> Pages</h2>',6),f=e("code",null,"*",-1),_=e("code",null,"bool",-1),y=e("code",null,"commonlog",-1),g=e("code",null,"csv",-1),b=e("code",null,"float",-1),x=e("code",null,"hcl",-1),v=e("code",null,"int",-1),w=e("code",null,"json",-1),M=e("code",null,"jsonc",-1),S=e("code",null,"jsonl",-1),L=e("code",null,"num",-1),N=e("code",null,"str",-1),q=e("code",null,"toml",-1),T=e("code",null,"yaml",-1);function j(O,k){const o=n("RouterLink");return s(),r("div",null,[c,h,m,e("p",null,[t("Read the "),l(o,{to:"/tour.html"},{default:a(()=>[t("Language Tour")]),_:1}),t(" for more detail on this topic.")]),p,e("ul",null,[e("li",null,[l(o,{to:"/types/generic.html"},{default:a(()=>[f,t(" (generic) ")]),_:1}),t(": generic (primitive)")]),e("li",null,[l(o,{to:"/types/bool.html"},{default:a(()=>[_]),_:1}),t(": Boolean (primitive)")]),e("li",null,[l(o,{to:"/types/commonlog.html"},{default:a(()=>[y]),_:1}),t(': Apache httpd "common" log format')]),e("li",null,[l(o,{to:"/types/csv.html"},{default:a(()=>[g]),_:1}),t(": CSV files (and other character delimited tables)")]),e("li",null,[l(o,{to:"/types/float.html"},{default:a(()=>[b,t(" (floating point number)")]),_:1}),t(": Floating point number (primitive)")]),e("li",null,[l(o,{to:"/types/hcl.html"},{default:a(()=>[x]),_:1}),t(": HashiCorp Configuration Language (HCL)")]),e("li",null,[l(o,{to:"/types/int.html"},{default:a(()=>[v]),_:1}),t(": Whole number (primitive)")]),e("li",null,[l(o,{to:"/types/json.html"},{default:a(()=>[w]),_:1}),t(": JavaScript Object Notation (JSON)")]),e("li",null,[l(o,{to:"/types/jsonc.html"},{default:a(()=>[M]),_:1}),t(": Concatenated JSON")]),e("li",null,[l(o,{to:"/types/jsonl.html"},{default:a(()=>[S]),_:1}),t(": JSON Lines")]),e("li",null,[l(o,{to:"/types/num.html"},{default:a(()=>[L,t(" (number)")]),_:1}),t(": Floating point number (primitive)")]),e("li",null,[l(o,{to:"/types/str.html"},{default:a(()=>[N,t(" (string) ")]),_:1}),t(": string (primitive)")]),e("li",null,[l(o,{to:"/types/toml.html"},{default:a(()=>[q]),_:1}),t(": Tom's Obvious, Minimal Language (TOML)")]),e("li",null,[l(o,{to:"/types/yaml.html"},{default:a(()=>[T]),_:1}),t(": YAML Ain't Markup Language (YAML)")]),e("li",null,[l(o,{to:"/types/mxjson.html"},{default:a(()=>[t("mxjson")]),_:1}),t(": Murex-flavoured JSON (deprecated)")])])])}const A=i(u,[["render",j],["__file","GUIDE.type-system.html.vue"]]);export{A as default};
