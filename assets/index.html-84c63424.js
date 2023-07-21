import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as i,c as d,d as t,e,b as o,w as a,f as c}from"./app-b92fd348.js";const u={},h=c('<h1 id="parser-reference" tabindex="-1"><a class="header-anchor" href="#parser-reference" aria-hidden="true">#</a> Parser Reference</h1><p>This section is a glossary of Murex tokens and parser behavior.</p><h2 id="other-reference-material" tabindex="-1"><a class="header-anchor" href="#other-reference-material" aria-hidden="true">#</a> Other Reference Material</h2><h3 id="language-guides" tabindex="-1"><a class="header-anchor" href="#language-guides" aria-hidden="true">#</a> Language Guides</h3>',4),_={href:"/tour",target:"_blank",rel:"noopener noreferrer"},p={href:"/rosetta",target:"_blank",rel:"noopener noreferrer"},f={href:"/commands",target:"_blank",rel:"noopener noreferrer"},m=t("h3",{id:"murex-s-source-code",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#murex-s-source-code","aria-hidden":"true"},"#"),e(" Murex's Source Code")],-1),g=t("p",null,[e("The parser is located Murex's source under the "),t("code",null,"lang/"),e(" path of the project files.")],-1),T=t("h2",{id:"pages",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#pages","aria-hidden":"true"},"#"),e(" Pages")],-1),x=t("code",null,"&&",-1),k=t("code",null,">>",-1),b=t("code",null,"@",-1),S=t("code",null,"->",-1),y=t("code",null,"%(",-1),v=t("code",null,")",-1),P=t("code",null,"%[]",-1),D=t("code",null,"%{}",-1),I=t("code",null,"{",-1),R=t("code",null,"}",-1),O=t("code",null,'"',-1),C=t("code",null,"=>",-1),L=t("code",null,"||",-1),N=t("code",null,"|",-1),B=t("code",null,"?",-1),E=t("code",null,"'",-1),w=t("code",null,"$",-1),M=t("code",null,"~",-1);function Q(j,A){const n=l("ExternalLinkIcon"),r=l("RouterLink");return i(),d("div",null,[h,t("ol",null,[t("li",null,[t("p",null,[t("a",_,[e("Language Tour"),o(n)]),e(", which is an introduction into the Murex language.")])]),t("li",null,[t("p",null,[t("a",p,[e("Rosetta Stone"),o(n)]),e(", which is a reference table comparing Bash syntax to Murex's.")])]),t("li",null,[t("p",null,[t("a",f,[e("Builtins"),o(n)]),e(", for docs on the core builtins.")])])]),m,g,T,t("ul",null,[t("li",null,[o(r,{to:"/parser/logical-and.html"},{default:a(()=>[e("And ("),x,e(") Logical Operator")]),_:1}),e(": Continues next operation if previous operation passes")]),t("li",null,[o(r,{to:"/parser/pipe-append.html"},{default:a(()=>[e("Append Pipe ("),k,e(") Token")]),_:1}),e(": Redirects STDOUT to a file and append its contents")]),t("li",null,[o(r,{to:"/parser/array.html"},{default:a(()=>[e("Array ("),b,e(") Token")]),_:1}),e(": Expand values as an array")]),t("li",null,[o(r,{to:"/parser/pipe-arrow.html"},{default:a(()=>[e("Arrow Pipe ("),S,e(") Token")]),_:1}),e(": Pipes STDOUT from the left hand command to STDIN of the right hand command")]),t("li",null,[o(r,{to:"/parser/brace-quote.html"},{default:a(()=>[e("Brace Quote ("),y,e(", "),v,e(") Tokens")]),_:1}),e(": Initiates or terminates a string (variables expanded)")]),t("li",null,[o(r,{to:"/parser/create-array.html"},{default:a(()=>[e("Create array ("),P,e(") constructor")]),_:1}),e(": Quickly generate arrays")]),t("li",null,[o(r,{to:"/parser/create-object.html"},{default:a(()=>[e("Create object ("),D,e(") constructor")]),_:1}),e(": Quickly generate objects and maps")]),t("li",null,[o(r,{to:"/parser/curly-brace.html"},{default:a(()=>[e("Curly Brace ("),I,e(", "),R,e(") Tokens")]),_:1}),e(": Initiates or terminates a code block")]),t("li",null,[o(r,{to:"/parser/double-quote.html"},{default:a(()=>[e("Double Quote ("),O,e(") Token")]),_:1}),e(": Initiates or terminates a string (variables expanded)")]),t("li",null,[o(r,{to:"/parser/pipe-generic.html"},{default:a(()=>[e("Generic Pipe ("),C,e(") Token")]),_:1}),e(": Pipes a reformatted STDOUT stream from the left hand command to STDIN of the right hand command")]),t("li",null,[o(r,{to:"/parser/logical-or.html"},{default:a(()=>[e("Or ("),L,e(") Logical Operator")]),_:1}),e(": Continues next operation only if previous operation fails")]),t("li",null,[o(r,{to:"/parser/pipe-posix.html"},{default:a(()=>[e("POSIX Pipe ("),N,e(") Token")]),_:1}),e(": Pipes STDOUT from the left hand command to STDIN of the right hand command")]),t("li",null,[o(r,{to:"/parser/pipe-err.html"},{default:a(()=>[e("STDERR Pipe ("),B,e(") Token")]),_:1}),e(": Pipes STDERR from the left hand command to STDIN of the right hand command")]),t("li",null,[o(r,{to:"/parser/single-quote.html"},{default:a(()=>[e("Single Quote ("),E,e(") Token")]),_:1}),e(": Initiates or terminates a string (variables not expanded)")]),t("li",null,[o(r,{to:"/parser/string.html"},{default:a(()=>[e("String ("),w,e(") Token")]),_:1}),e(": Expand values as a string")]),t("li",null,[o(r,{to:"/parser/tilde.html"},{default:a(()=>[e("Tilde ("),M,e(") Token")]),_:1}),e(": Home directory path variable")])])])}const q=s(u,[["render",Q],["__file","index.html.vue"]]);export{q as default};
