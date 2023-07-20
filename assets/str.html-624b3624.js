import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as i,c as d,a as e,d as o,w as l,b as t,e as s}from"./app-66ffa3c3.js";const c={},u=s('<h1 id="str-string-data-type-reference" tabindex="-1"><a class="header-anchor" href="#str-string-data-type-reference" aria-hidden="true">#</a> <code>str</code> (string) - Data-Type Reference</h1><blockquote><p>string (primitive)</p></blockquote><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2><p>This type is modelled closely on generic but is more tailored for textual (non-tabulated) data.</p><h2 id="supported-hooks" tabindex="-1"><a class="header-anchor" href="#supported-hooks" aria-hidden="true">#</a> Supported Hooks</h2><ul><li><code>Marshal()</code> Supported</li><li><code>ReadArray()</code> Treats each new line as a new array element</li><li><code>ReadArrayWithType()</code> Treats each new line as a new array element, each array element is <code>str</code></li><li><code>ReadIndex()</code> Indexes treated as a new line separated list</li><li><code>ReadMap()</code> Treats each new line as a numbered map element</li><li><code>ReadNotIndex()</code> Indexes treated as a new line separated list</li><li><code>Unmarshal()</code> Supported</li><li><code>WriteArray()</code> Writes a new line per array element</li></ul><h2 id="see-also" tabindex="-1"><a class="header-anchor" href="#see-also" aria-hidden="true">#</a> See Also</h2>',7),m=e("code",null,"*",-1),h=e("code",null,"Marshal()",-1),p=e("code",null,"Unmarshal()",-1),_=e("code",null,"[[",-1),f=e("code",null,"[",-1),y=e("code",null,"cast",-1),g=e("code",null,"format",-1),x=e("code",null,"int",-1),b=e("code",null,"num",-1),w=e("code",null,"open",-1),v=e("code",null,"runtime",-1);function R(k,T){const a=r("RouterLink");return i(),d("div",null,[u,e("ul",null,[e("li",null,[o(a,{to:"/guide/types/generic.html"},{default:l(()=>[m,t(" (generic) ")]),_:1}),t(": generic (primitive)")]),e("li",null,[o(a,{to:"/guide/apis/Marshal.html"},{default:l(()=>[h,t(" (type)")]),_:1}),t(": Converts structured memory into a structured file format (eg for stdio)")]),e("li",null,[o(a,{to:"/guide/apis/Unmarshal.html"},{default:l(()=>[p,t(" (type)")]),_:1}),t(": Converts a structured file format into structured memory")]),e("li",null,[o(a,{to:"/guide/commands/element.html"},{default:l(()=>[_,t(" (element)")]),_:1}),t(": Outputs an element from a nested structure")]),e("li",null,[o(a,{to:"/guide/commands/"},{default:l(()=>[f,t(" (index)")]),_:1}),t(": Outputs an element from an array, map or table")]),e("li",null,[o(a,{to:"/guide/commands/cast.html"},{default:l(()=>[y]),_:1}),t(": Alters the data type of the previous function without altering it's output")]),e("li",null,[o(a,{to:"/guide/commands/format.html"},{default:l(()=>[g]),_:1}),t(": Reformat one data-type into another data-type")]),e("li",null,[o(a,{to:"/guide/types/int.html"},{default:l(()=>[x]),_:1}),t(": Whole number (primitive)")]),e("li",null,[o(a,{to:"/guide/types/num.html"},{default:l(()=>[b,t(" (number)")]),_:1}),t(": Floating point number (primitive)")]),e("li",null,[o(a,{to:"/guide/commands/open.html"},{default:l(()=>[w]),_:1}),t(": Open a file with a preferred handler")]),e("li",null,[o(a,{to:"/guide/commands/runtime.html"},{default:l(()=>[v]),_:1}),t(": Returns runtime information on the internal state of Murex")])])])}const N=n(c,[["render",R],["__file","str.html.vue"]]);export{N as default};