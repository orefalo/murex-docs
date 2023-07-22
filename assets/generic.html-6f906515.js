import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as i,c as d,d as e,b as a,w as l,e as t,f as s}from"./app-ed1b6a51.js";const c={},u=s('<h1 id="generic" tabindex="-1"><a class="header-anchor" href="#generic" aria-hidden="true">#</a> <code>*</code> (generic)</h1><blockquote><p>generic (primitive)</p></blockquote><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2><p>This is the default data type used when STDOUT is returned from any external executables.</p><h2 id="supported-hooks" tabindex="-1"><a class="header-anchor" href="#supported-hooks" aria-hidden="true">#</a> Supported Hooks</h2><ul><li><code>Marshal()</code> Supported. Tables columns are aligned</li><li><code>ReadArray()</code> Treats each new line as a new array element</li><li><code>ReadArrayWithType()</code> Treats each new line as a new array element, each element is <code>*</code></li><li><code>ReadIndex()</code> Indexes treated as table coordinates</li><li><code>ReadMap()</code> Works against tables such as the output from <code>ps -fe</code></li><li><code>ReadNotIndex()</code> Indexes treated as table coordinates</li><li><code>Unmarshal()</code> Supported</li><li><code>WriteArray()</code> Writes a new line per array element - tabs are treated as columns</li></ul><h2 id="see-also" tabindex="-1"><a class="header-anchor" href="#see-also" aria-hidden="true">#</a> See Also</h2>',7),h=e("code",null,"Marshal()",-1),m=e("code",null,"Unmarshal()",-1),p=e("code",null,"[[",-1),_=e("code",null,"[",-1),f=e("code",null,"cast",-1),y=e("code",null,"format",-1),x=e("code",null,"int",-1),b=e("code",null,"num",-1),g=e("code",null,"open",-1),k=e("code",null,"runtime",-1),v=e("code",null,"str",-1);function w(R,T){const o=r("RouterLink");return i(),d("div",null,[u,e("ul",null,[e("li",null,[a(o,{to:"/apis/Marshal.html"},{default:l(()=>[h,t(" (type)")]),_:1}),t(": Converts structured memory into a structured file format (eg for stdio)")]),e("li",null,[a(o,{to:"/apis/Unmarshal.html"},{default:l(()=>[m,t(" (type)")]),_:1}),t(": Converts a structured file format into structured memory")]),e("li",null,[a(o,{to:"/commands/element.html"},{default:l(()=>[p,t(" (element)")]),_:1}),t(": Outputs an element from a nested structure")]),e("li",null,[a(o,{to:"/commands/index2.html"},{default:l(()=>[_,t(" (index)")]),_:1}),t(": Outputs an element from an array, map or table")]),e("li",null,[a(o,{to:"/commands/cast.html"},{default:l(()=>[f]),_:1}),t(": Alters the data type of the previous function without altering it's output")]),e("li",null,[a(o,{to:"/commands/format.html"},{default:l(()=>[y]),_:1}),t(": Reformat one data-type into another data-type")]),e("li",null,[a(o,{to:"/types/int.html"},{default:l(()=>[x]),_:1}),t(": Whole number (primitive)")]),e("li",null,[a(o,{to:"/types/num.html"},{default:l(()=>[b,t(" (number)")]),_:1}),t(": Floating point number (primitive)")]),e("li",null,[a(o,{to:"/commands/open.html"},{default:l(()=>[g]),_:1}),t(": Open a file with a preferred handler")]),e("li",null,[a(o,{to:"/commands/runtime.html"},{default:l(()=>[k]),_:1}),t(": Returns runtime information on the internal state of Murex")]),e("li",null,[a(o,{to:"/types/str.html"},{default:l(()=>[v,t(" (string) ")]),_:1}),t(": string (primitive)")])])])}const M=n(c,[["render",w],["__file","generic.html.vue"]]);export{M as default};
