import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as d,c as i,a as e,b as t,d as o,w as n,e as u}from"./app-524c2bb5.js";const r={},c=u('<h1>User Guide</h1><p>This section contains miscellaneous documents on using and configuring the shell and Murex&#39;s numerous features.</p><h2>Table of Contents</h2><div id="toc"><ul><li><a href="#language-tour">Language Tour</a></li><li><a href="#user-guides">User Guides</a></li><li><a href="#operators-and-tokens">Operators And Tokens</a></li><li><a href="#builtin-commands">Builtin Commands</a><ul><li><a href="#standard-builtins">Standard Builtins</a></li><li><a href="#optional-builtins">Optional Builtins</a></li></ul></li><li><a href="#data-types">Data Types</a></li><li><a href="#events">Events</a></li><li><a href="#api-reference">API Reference</a></li></ul></div><h2 id="language-tour" tabindex="-1"><a class="header-anchor" href="#language-tour" aria-hidden="true">#</a> Language Tour</h2>',5),m=e("h2",{id:"user-guides",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#user-guides","aria-hidden":"true"},"#"),t(" User Guides")],-1),h=e("h2",{id:"operators-and-tokens",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#operators-and-tokens","aria-hidden":"true"},"#"),t(" Operators And Tokens")],-1),_=e("code",null,"&&",-1),f=e("code",null,">>",-1),p=e("code",null,"@",-1),g=e("code",null,"->",-1),y=e("code",null,"%(",-1),b=e("code",null,")",-1),x=e("code",null,"%[]",-1),v=e("code",null,"%{}",-1),T=e("code",null,"{",-1),k=e("code",null,"}",-1),S=e("code",null,'"',-1),w=e("code",null,"=>",-1),R=e("code",null,"||",-1),M=e("code",null,"|",-1),A=e("code",null,"?",-1),O=e("code",null,"'",-1),C=e("code",null,"$",-1),D=e("code",null,"~",-1),I=e("h2",{id:"builtin-commands",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#builtin-commands","aria-hidden":"true"},"#"),t(" Builtin Commands")],-1),P=e("h3",{id:"standard-builtins",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#standard-builtins","aria-hidden":"true"},"#"),t(" Standard Builtins")],-1),N=e("code",null,"!",-1),E=e("code",null,"(",-1),j=e("code",null,"2darray",-1),L=e("code",null,"<>",-1),U=e("code",null,"read-named-pipe",-1),B=e("code",null,"<stdin>",-1),H=e("code",null,"=",-1),W=e("code",null,">>",-1),q=e("code",null,">",-1),J=e("code",null,"@g",-1),G=e("code",null,"[[",-1),Q=e("code",null,"[",-1),V=e("code",null,"[",-1),z=e("code",null,"a",-1),F=e("code",null,"addheading",-1),Y=e("code",null,"alias",-1),$=e("code",null,"alter",-1),X=e("code",null,"and",-1),K=e("code",null,"true",-1),Z=e("code",null,"false",-1),ee=e("code",null,"append",-1),te=e("code",null,"args",-1),le=e("code",null,"autocomplete",-1),oe=e("code",null,"bexists",-1),ne=e("code",null,"bg",-1),ae=e("code",null,"break",-1),se=e("code",null,"cast",-1),de=e("code",null,"catch",-1),ie=e("code",null,"try",-1),ue=e("code",null,"trypipe",-1),re=e("code",null,"cd",-1),ce=e("code",null,"config",-1),me=e("code",null,"continue",-1),he=e("code",null,"count",-1),_e=e("code",null,"cpuarch",-1),fe=e("code",null,"cpucount",-1),pe=e("code",null,"datetime",-1),ge=e("code",null,"printf",-1),ye=e("code",null,"debug",-1),be=e("code",null,"die",-1),xe=e("code",null,"err",-1),ve=e("code",null,"escape",-1),Te=e("code",null,"esccli",-1),ke=e("code",null,"eschtml",-1),Se=e("code",null,"escurl",-1),we=e("code",null,"event",-1),Re=e("code",null,"exec",-1),Me=e("code",null,"exit",-1),Ae=e("code",null,"exitnum",-1),Oe=e("code",null,"export",-1),Ce=e("code",null,"expr",-1),De=e("code",null,"f",-1),Ie=e("code",null,"false",-1),Pe=e("code",null,"false",-1),Ne=e("code",null,"fexec",-1),Ee=e("code",null,"fg",-1),je=e("code",null,"fid-kill",-1),Le=e("code",null,"fid-killall",-1),Ue=e("em",null,"all",-1),Be=e("code",null,"fid-list",-1),He=e("code",null,"for",-1),We=e("code",null,"foreach",-1),qe=e("code",null,"formap",-1),Je=e("code",null,"format",-1),Ge=e("code",null,"function",-1),Qe=e("code",null,"g",-1),Ve=e("code",null,"*.txt",-1),ze=e("code",null,"get-type",-1),Fe=e("code",null,"get",-1),Ye=e("code",null,"getfile",-1),$e=e("code",null,"global",-1),Xe=e("code",null,"history",-1),Ke=e("code",null,"if",-1),Ze=e("code",null,"ja",-1),et=e("code",null,"jsplit",-1),tt=e("code",null,"left",-1),lt=e("code",null,"let",-1),ot=e("code",null,"lockfile",-1),nt=e("code",null,"man-get-flags",-1),at=e("code",null,"man-summary",-1),st=e("code",null,"map",-1),dt=e("code",null,"match",-1),it=e("code",null,"method",-1),ut=e("code",null,"msort",-1),rt=e("code",null,"mtac",-1),ct=e("code",null,"murex-docs",-1),mt=e("code",null,"murex-package",-1),ht=e("code",null,"murex-parser",-1),_t=e("code",null,"murex-update-exe-list",-1),ft=e("code",null,"null",-1),pt=e("code",null,"open-image",-1),gt=e("code",null,"open",-1),yt=e("code",null,"openagent",-1),bt=e("code",null,"or",-1),xt=e("code",null,"true",-1),vt=e("code",null,"false",-1),Tt=e("code",null,"os",-1),kt=e("code",null,"out",-1),St=e("code",null,"pipe",-1),wt=e("code",null,"post",-1),Rt=e("code",null,"prefix",-1),Mt=e("code",null,"prepend",-1),At=e("code",null,"pretty",-1),Ot=e("code",null,"private",-1),Ct=e("code",null,"pt",-1),Dt=e("code",null,"rand",-1),It=e("code",null,"read",-1),Pt=e("code",null,"read",-1),Nt=e("code",null,"regexp",-1),Et=e("code",null,"return",-1),jt=e("code",null,"right",-1),Lt=e("code",null,"round",-1),Ut=e("code",null,"runmode",-1),Bt=e("code",null,"runtime",-1),Ht=e("code",null,"rx",-1),Wt=e("code",null,".*\\\\.txt",-1),qt=e("code",null,"set",-1),Jt=e("code",null,"source",-1),Gt=e("code",null,"struct-keys",-1),Qt=e("code",null,"suffix",-1),Vt=e("code",null,"summary",-1),zt=e("code",null,"switch",-1),Ft=e("code",null,"ta",-1),Yt=e("code",null,"tabulate",-1),$t=e("code",null,"test",-1),Xt=e("code",null,"time",-1),Kt=e("code",null,"tmp",-1),Zt=e("code",null,"tout",-1),el=e("code",null,"tread",-1),tl=e("code",null,"read",-1),ll=e("em",null,"typed",-1),ol=e("code",null,"true",-1),nl=e("code",null,"true",-1),al=e("code",null,"try",-1),sl=e("code",null,"trypipe",-1),dl=e("code",null,"version",-1),il=e("code",null,"while",-1),ul=e("h3",{id:"optional-builtins",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#optional-builtins","aria-hidden":"true"},"#"),t(" Optional Builtins")],-1),rl=e("p",null,[t("These builtins are optional. "),e("code",null,"select"),t(" is included as part of the default build but can be disabled without breaking functionality. The other optional builtins are only included by default on Windows.")],-1),cl=e("code",null,"!bz2",-1),ml=e("code",null,"base64",-1),hl=e("code",null,"gz",-1),_l=e("code",null,"qr",-1),fl=e("code",null,"select",-1),pl=e("code",null,"sleep",-1),gl=e("h2",{id:"data-types",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#data-types","aria-hidden":"true"},"#"),t(" Data Types")],-1),yl=e("code",null,"*",-1),bl=e("code",null,"bool",-1),xl=e("code",null,"commonlog",-1),vl=e("code",null,"csv",-1),Tl=e("code",null,"float",-1),kl=e("code",null,"hcl",-1),Sl=e("code",null,"int",-1),wl=e("code",null,"json",-1),Rl=e("code",null,"jsonc",-1),Ml=e("code",null,"jsonl",-1),Al=e("code",null,"num",-1),Ol=e("code",null,"str",-1),Cl=e("code",null,"toml",-1),Dl=e("code",null,"yaml",-1),Il=e("h2",{id:"events",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#events","aria-hidden":"true"},"#"),t(" Events")],-1),Pl=e("code",null,"onCommandCompletion",-1),Nl=e("code",null,"onFileSystemChange",-1),El=e("code",null,"onPrompt",-1),jl=e("code",null,"onSecondsElapsed",-1),Ll=e("h2",{id:"api-reference",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#api-reference","aria-hidden":"true"},"#"),t(" API Reference")],-1),Ul=e("p",null,"These API docs are provided for any developers wishing to write their own builtins.",-1),Bl=e("code",null,"Marshal()",-1),Hl=e("code",null,"ReadArray()",-1),Wl=e("code",null,"ReadArrayWithType()",-1),ql=e("code",null,"ReadIndex()",-1),Jl=e("code",null,"[",-1),Gl=e("code",null,"ReadMap()",-1),Ql=e("code",null,"ReadNotIndex()",-1),Vl=e("code",null,"![",-1),zl=e("code",null,"Unmarshal()",-1),Fl=e("code",null,"WriteArray()",-1),Yl=e("code",null,"lang.ArrayTemplate()",-1),$l=e("code",null,"lang.ArrayWithTypeTemplate()",-1),Xl=e("code",null,"lang.IndexTemplateObject()",-1),Kl=e("code",null,"lang.IndexTemplateTable()",-1),Zl=e("code",null,"lang.MarshalData()",-1),eo=e("code",null,"lang.UnmarshalData()",-1);function to(lo,oo){const l=s("RouterLink");return d(),i("div",null,[c,e("p",null,[t("The "),o(l,{to:"/tour.html"},{default:n(()=>[t("Language Tour")]),_:1}),t(" is a great introduction into the Murex language.")]),m,e("ul",null,[e("li",null,[o(l,{to:"/user-guide/ansi.html"},{default:n(()=>[t("ANSI Constants")]),_:1}),t(": Infixed constants that return ANSI escape sequences")]),e("li",null,[o(l,{to:"/user-guide/bang-prefix.html"},{default:n(()=>[t("Bang Prefix")]),_:1}),t(": Bang prefixing to reverse default actions")]),e("li",null,[o(l,{to:"/user-guide/code-block.html"},{default:n(()=>[t("Code Block Parsing")]),_:1}),t(": Overview of how code blocks are parsed")]),e("li",null,[o(l,{to:"/user-guide/fileref.html"},{default:n(()=>[t("FileRef")]),_:1}),t(": How to track what code was loaded and from where")]),e("li",null,[o(l,{to:"/user-guide/modules.html"},{default:n(()=>[t("Modules and Packages")]),_:1}),t(": An introduction to Murex modules and packages")]),e("li",null,[o(l,{to:"/user-guide/namedpipes.html"},{default:n(()=>[t("Murex Named Pipes")]),_:1}),t(": A detailed breakdown of named pipes in Murex")]),e("li",null,[o(l,{to:"/user-guide/profile.html"},{default:n(()=>[t("Murex Profile Files")]),_:1}),t(": A breakdown of the different files loaded on start up")]),e("li",null,[o(l,{to:"/user-guide/interactive-shell.html"},{default:n(()=>[t("Murex's Interactive Shell")]),_:1}),t(": What's different about Murex's interactive shell?")]),e("li",null,[o(l,{to:"/user-guide/pipeline.html"},{default:n(()=>[t("Pipeline")]),_:1}),t(': Overview of what a "pipeline" is')]),e("li",null,[o(l,{to:"/user-guide/reserved-vars.html"},{default:n(()=>[t("Reserved Variables")]),_:1}),t(": Special variables reserved by Murex")]),e("li",null,[o(l,{to:"/user-guide/rosetta-stone.html"},{default:n(()=>[t("Rosetta Stone")]),_:1}),t(": A tabulated list of Bashism's and their equivalent Murex syntax")]),e("li",null,[o(l,{to:"/user-guide/schedulers.html"},{default:n(()=>[t("Schedulers")]),_:1}),t(": Overview of the different schedulers (or 'run modes') in Murex")]),e("li",null,[o(l,{to:"/user-guide/spellcheck.html"},{default:n(()=>[t("Spellcheck")]),_:1}),t(": How to enable inline spellchecking")]),e("li",null,[o(l,{to:"/user-guide/terminal-keys.html"},{default:n(()=>[t("Terminal Hotkeys")]),_:1}),t(": A list of all the terminal hotkeys and their uses")]),e("li",null,[o(l,{to:"/user-guide/scoping.html"},{default:n(()=>[t("Variable and Config Scoping")]),_:1}),t(": How scoping works within Murex")])]),h,e("ul",null,[e("li",null,[o(l,{to:"/parser/logical-and.html"},{default:n(()=>[t("And ("),_,t(") Logical Operator")]),_:1}),t(": Continues next operation if previous operation passes")]),e("li",null,[o(l,{to:"/parser/pipe-append.html"},{default:n(()=>[t("Append Pipe ("),f,t(") Token")]),_:1}),t(": Redirects STDOUT to a file and append its contents")]),e("li",null,[o(l,{to:"/parser/array.html"},{default:n(()=>[t("Array ("),p,t(") Token")]),_:1}),t(": Expand values as an array")]),e("li",null,[o(l,{to:"/parser/pipe-arrow.html"},{default:n(()=>[t("Arrow Pipe ("),g,t(") Token")]),_:1}),t(": Pipes STDOUT from the left hand command to STDIN of the right hand command")]),e("li",null,[o(l,{to:"/parser/brace-quote.html"},{default:n(()=>[t("Brace Quote ("),y,t(", "),b,t(") Tokens")]),_:1}),t(": Initiates or terminates a string (variables expanded)")]),e("li",null,[o(l,{to:"/parser/create-array.html"},{default:n(()=>[t("Create array ("),x,t(") constructor")]),_:1}),t(": Quickly generate arrays")]),e("li",null,[o(l,{to:"/parser/create-object.html"},{default:n(()=>[t("Create object ("),v,t(") constructor")]),_:1}),t(": Quickly generate objects and maps")]),e("li",null,[o(l,{to:"/parser/curly-brace.html"},{default:n(()=>[t("Curly Brace ("),T,t(", "),k,t(") Tokens")]),_:1}),t(": Initiates or terminates a code block")]),e("li",null,[o(l,{to:"/parser/double-quote.html"},{default:n(()=>[t("Double Quote ("),S,t(") Token")]),_:1}),t(": Initiates or terminates a string (variables expanded)")]),e("li",null,[o(l,{to:"/parser/pipe-generic.html"},{default:n(()=>[t("Generic Pipe ("),w,t(") Token")]),_:1}),t(": Pipes a reformatted STDOUT stream from the left hand command to STDIN of the right hand command")]),e("li",null,[o(l,{to:"/parser/logical-or.html"},{default:n(()=>[t("Or ("),R,t(") Logical Operator")]),_:1}),t(": Continues next operation only if previous operation fails")]),e("li",null,[o(l,{to:"/parser/pipe-posix.html"},{default:n(()=>[t("POSIX Pipe ("),M,t(") Token")]),_:1}),t(": Pipes STDOUT from the left hand command to STDIN of the right hand command")]),e("li",null,[o(l,{to:"/parser/pipe-err.html"},{default:n(()=>[t("STDERR Pipe ("),A,t(") Token")]),_:1}),t(": Pipes STDERR from the left hand command to STDIN of the right hand command")]),e("li",null,[o(l,{to:"/parser/single-quote.html"},{default:n(()=>[t("Single Quote ("),O,t(") Token")]),_:1}),t(": Initiates or terminates a string (variables not expanded)")]),e("li",null,[o(l,{to:"/parser/string.html"},{default:n(()=>[t("String ("),C,t(") Token")]),_:1}),t(": Expand values as a string")]),e("li",null,[o(l,{to:"/parser/tilde.html"},{default:n(()=>[t("Tilde ("),D,t(") Token")]),_:1}),t(": Home directory path variable")])]),I,P,e("ul",null,[e("li",null,[o(l,{to:"/commands/not.html"},{default:n(()=>[N,t(" (not)")]),_:1}),t(": Reads the STDIN and exit number from previous process and not's it's condition")]),e("li",null,[o(l,{to:"/commands/brace-quote.html"},{default:n(()=>[E,t(" (brace quote)")]),_:1}),t(": Write a string to the STDOUT without new line")]),e("li",null,[o(l,{to:"/commands/2darray.html"},{default:n(()=>[j]),_:1}),t(": Create a 2D JSON array from multiple input sources")]),e("li",null,[o(l,{to:"/commands/namedpipe.html"},{default:n(()=>[L,t(" / "),U]),_:1}),t(": Reads from a Murex named pipe")]),e("li",null,[o(l,{to:"/commands/stdin.html"},{default:n(()=>[B]),_:1}),t(": Read the STDIN belonging to the parent code block")]),e("li",null,[o(l,{to:"/commands/equ.html"},{default:n(()=>[H,t(" (arithmetic evaluation)")]),_:1}),t(": Evaluate a mathematical function (deprecated)")]),e("li",null,[o(l,{to:"/commands/greater-than-greater-than.html"},{default:n(()=>[W,t(" (append file)")]),_:1}),t(": Writes STDIN to disk - appending contents if file already exists")]),e("li",null,[o(l,{to:"/commands/greater-than.html"},{default:n(()=>[q,t(" (truncate file)")]),_:1}),t(": Writes STDIN to disk - overwriting contents if file already exists")]),e("li",null,[o(l,{to:"/commands/autoglob.html"},{default:n(()=>[J,t(" (autoglob) ")]),_:1}),t(": Command prefix to expand globbing (deprecated)")]),e("li",null,[o(l,{to:"/commands/element.html"},{default:n(()=>[G,t(" (element)")]),_:1}),t(": Outputs an element from a nested structure")]),e("li",null,[o(l,{to:"/commands/"},{default:n(()=>[Q,t(" (index)")]),_:1}),t(": Outputs an element from an array, map or table")]),e("li",null,[o(l,{to:"/commands/range.html"},{default:n(()=>[V,t(" (range) ")]),_:1}),t(": Outputs a ranged subset of data from STDIN")]),e("li",null,[o(l,{to:"/commands/a.html"},{default:n(()=>[z,t(" (mkarray)")]),_:1}),t(": A sophisticated yet simple way to build an array or list")]),e("li",null,[o(l,{to:"/commands/addheading.html"},{default:n(()=>[F]),_:1}),t(": Adds headings to a table")]),e("li",null,[o(l,{to:"/commands/alias.html"},{default:n(()=>[Y]),_:1}),t(": Create an alias for a command")]),e("li",null,[o(l,{to:"/commands/alter.html"},{default:n(()=>[$]),_:1}),t(": Change a value within a structured data-type and pass that change along the pipeline without altering the original source input")]),e("li",null,[o(l,{to:"/commands/and.html"},{default:n(()=>[X]),_:1}),t(": Returns "),K,t(" or "),Z,t(" depending on whether multiple conditions are met")]),e("li",null,[o(l,{to:"/commands/append.html"},{default:n(()=>[ee]),_:1}),t(": Add data to the end of an array")]),e("li",null,[o(l,{to:"/commands/args.html"},{default:n(()=>[te]),_:1}),t(": Command line flag parser for Murex shell scripting")]),e("li",null,[o(l,{to:"/commands/autocomplete.html"},{default:n(()=>[le]),_:1}),t(": Set definitions for tab-completion in the command line")]),e("li",null,[o(l,{to:"/commands/bexists.html"},{default:n(()=>[oe]),_:1}),t(": Check which builtins exist")]),e("li",null,[o(l,{to:"/commands/bg.html"},{default:n(()=>[ne]),_:1}),t(": Run processes in the background")]),e("li",null,[o(l,{to:"/commands/break.html"},{default:n(()=>[ae]),_:1}),t(": Terminate execution of a block within your processes scope")]),e("li",null,[o(l,{to:"/commands/cast.html"},{default:n(()=>[se]),_:1}),t(": Alters the data type of the previous function without altering it's output")]),e("li",null,[o(l,{to:"/commands/catch.html"},{default:n(()=>[de]),_:1}),t(": Handles the exception code raised by "),ie,t(" or "),ue]),e("li",null,[o(l,{to:"/commands/cd.html"},{default:n(()=>[re]),_:1}),t(": Change (working) directory")]),e("li",null,[o(l,{to:"/commands/config.html"},{default:n(()=>[ce]),_:1}),t(": Query or define Murex runtime settings")]),e("li",null,[o(l,{to:"/commands/continue.html"},{default:n(()=>[me]),_:1}),t(": Terminate process of a block within a caller function")]),e("li",null,[o(l,{to:"/commands/count.html"},{default:n(()=>[he]),_:1}),t(": Count items in a map, list or array")]),e("li",null,[o(l,{to:"/commands/cpuarch.html"},{default:n(()=>[_e]),_:1}),t(": Output the hosts CPU architecture")]),e("li",null,[o(l,{to:"/commands/cpucount.html"},{default:n(()=>[fe]),_:1}),t(": Output the number of CPU cores available on your host")]),e("li",null,[o(l,{to:"/commands/datetime.html"},{default:n(()=>[pe]),_:1}),t(": A date and/or time conversion tool (like "),ge,t(" but for date and time values)")]),e("li",null,[o(l,{to:"/commands/debug.html"},{default:n(()=>[ye]),_:1}),t(": Debugging information")]),e("li",null,[o(l,{to:"/commands/die.html"},{default:n(()=>[be]),_:1}),t(": Terminate murex with an exit number of 1")]),e("li",null,[o(l,{to:"/commands/err.html"},{default:n(()=>[xe]),_:1}),t(": Print a line to the STDERR")]),e("li",null,[o(l,{to:"/commands/escape.html"},{default:n(()=>[ve]),_:1}),t(": Escape or unescape input")]),e("li",null,[o(l,{to:"/commands/esccli.html"},{default:n(()=>[Te]),_:1}),t(": Escapes an array so output is valid shell code")]),e("li",null,[o(l,{to:"/commands/eschtml.html"},{default:n(()=>[ke]),_:1}),t(": Encode or decodes text for HTML")]),e("li",null,[o(l,{to:"/commands/escurl.html"},{default:n(()=>[Se]),_:1}),t(": Encode or decodes text for the URL")]),e("li",null,[o(l,{to:"/commands/event.html"},{default:n(()=>[we]),_:1}),t(": Event driven programming for shell scripts")]),e("li",null,[o(l,{to:"/commands/exec.html"},{default:n(()=>[Re]),_:1}),t(": Runs an executable")]),e("li",null,[o(l,{to:"/commands/exit.html"},{default:n(()=>[Me]),_:1}),t(": Exit murex")]),e("li",null,[o(l,{to:"/commands/exitnum.html"},{default:n(()=>[Ae]),_:1}),t(": Output the exit number of the previous process")]),e("li",null,[o(l,{to:"/commands/export.html"},{default:n(()=>[Oe]),_:1}),t(": Define an environmental variable and set it's value")]),e("li",null,[o(l,{to:"/commands/expr.html"},{default:n(()=>[Ce]),_:1}),t(": Expressions: mathematical, string comparisons, logical operators")]),e("li",null,[o(l,{to:"/commands/f.html"},{default:n(()=>[De]),_:1}),t(": Lists or filters file system objects (eg files)")]),e("li",null,[o(l,{to:"/commands/false.html"},{default:n(()=>[Ie]),_:1}),t(": Returns a "),Pe,t(" value")]),e("li",null,[o(l,{to:"/commands/fexec.html"},{default:n(()=>[Ne]),_:1}),t(": Execute a command or function, bypassing the usual order of precedence.")]),e("li",null,[o(l,{to:"/commands/fg.html"},{default:n(()=>[Ee]),_:1}),t(": Sends a background process into the foreground")]),e("li",null,[o(l,{to:"/commands/fid-kill.html"},{default:n(()=>[je]),_:1}),t(": Terminate a running Murex function")]),e("li",null,[o(l,{to:"/commands/fid-killall.html"},{default:n(()=>[Le]),_:1}),t(": Terminate "),Ue,t(" running Murex functions")]),e("li",null,[o(l,{to:"/commands/fid-list.html"},{default:n(()=>[Be]),_:1}),t(": Lists all running functions within the current Murex session")]),e("li",null,[o(l,{to:"/commands/for.html"},{default:n(()=>[He]),_:1}),t(": A more familiar iteration loop to existing developers")]),e("li",null,[o(l,{to:"/commands/foreach.html"},{default:n(()=>[We]),_:1}),t(": Iterate through an array")]),e("li",null,[o(l,{to:"/commands/formap.html"},{default:n(()=>[qe]),_:1}),t(": Iterate through a map or other collection of data")]),e("li",null,[o(l,{to:"/commands/format.html"},{default:n(()=>[Je]),_:1}),t(": Reformat one data-type into another data-type")]),e("li",null,[o(l,{to:"/commands/function.html"},{default:n(()=>[Ge]),_:1}),t(": Define a function block")]),e("li",null,[o(l,{to:"/commands/g.html"},{default:n(()=>[Qe]),_:1}),t(": Glob pattern matching for file system objects (eg "),Ve,t(")")]),e("li",null,[o(l,{to:"/commands/get-type.html"},{default:n(()=>[ze]),_:1}),t(": Returns the data-type of a variable or pipe")]),e("li",null,[o(l,{to:"/commands/get.html"},{default:n(()=>[Fe]),_:1}),t(": Makes a standard HTTP request and returns the result as a JSON object")]),e("li",null,[o(l,{to:"/commands/getfile.html"},{default:n(()=>[Ye]),_:1}),t(": Makes a standard HTTP request and return the contents as Murex-aware data type for passing along Murex pipelines.")]),e("li",null,[o(l,{to:"/commands/global.html"},{default:n(()=>[$e]),_:1}),t(": Define a global variable and set it's value")]),e("li",null,[o(l,{to:"/commands/history.html"},{default:n(()=>[Xe]),_:1}),t(": Outputs murex's command history")]),e("li",null,[o(l,{to:"/commands/if.html"},{default:n(()=>[Ke]),_:1}),t(": Conditional statement to execute different blocks of code depending on the result of the condition")]),e("li",null,[o(l,{to:"/commands/ja.html"},{default:n(()=>[Ze,t(" (mkarray)")]),_:1}),t(": A sophisticated yet simply way to build a JSON array")]),e("li",null,[o(l,{to:"/commands/jsplit.html"},{default:n(()=>[et]),_:1}),t(": Splits STDIN into a JSON array based on a regex parameter")]),e("li",null,[o(l,{to:"/commands/left.html"},{default:n(()=>[tt]),_:1}),t(": Left substring every item in a list")]),e("li",null,[o(l,{to:"/commands/let.html"},{default:n(()=>[lt]),_:1}),t(": Evaluate a mathematical function and assign to variable (deprecated)")]),e("li",null,[o(l,{to:"/commands/lockfile.html"},{default:n(()=>[ot]),_:1}),t(": Create and manage lock files")]),e("li",null,[o(l,{to:"/commands/man-get-flags.html"},{default:n(()=>[nt]),_:1}),t(": Parses man page files for command line flags")]),e("li",null,[o(l,{to:"/commands/man-summary.html"},{default:n(()=>[at]),_:1}),t(": Outputs a man page summary of a command")]),e("li",null,[o(l,{to:"/commands/map.html"},{default:n(()=>[st]),_:1}),t(": Creates a map from two data sources")]),e("li",null,[o(l,{to:"/commands/match.html"},{default:n(()=>[dt]),_:1}),t(": Match an exact value in an array")]),e("li",null,[o(l,{to:"/commands/method.html"},{default:n(()=>[it]),_:1}),t(": Define a methods supported data-types")]),e("li",null,[o(l,{to:"/commands/msort.html"},{default:n(()=>[ut]),_:1}),t(": Sorts an array - data type agnostic")]),e("li",null,[o(l,{to:"/commands/mtac.html"},{default:n(()=>[rt]),_:1}),t(": Reverse the order of an array")]),e("li",null,[o(l,{to:"/commands/murex-docs.html"},{default:n(()=>[ct]),_:1}),t(": Displays the man pages for Murex builtins")]),e("li",null,[o(l,{to:"/commands/murex-package.html"},{default:n(()=>[mt]),_:1}),t(": Murex's package manager")]),e("li",null,[o(l,{to:"/commands/murex-parser.html"},{default:n(()=>[ht]),_:1}),t(": Runs the Murex parser against a block of code")]),e("li",null,[o(l,{to:"/commands/murex-update-exe-list.html"},{default:n(()=>[_t]),_:1}),t(": Forces Murex to rescan $PATH looking for executables")]),e("li",null,[o(l,{to:"/commands/devnull.html"},{default:n(()=>[ft]),_:1}),t(": null function. Similar to /dev/null")]),e("li",null,[o(l,{to:"/commands/open-image.html"},{default:n(()=>[pt]),_:1}),t(": Renders bitmap image data on your terminal")]),e("li",null,[o(l,{to:"/commands/open.html"},{default:n(()=>[gt]),_:1}),t(": Open a file with a preferred handler")]),e("li",null,[o(l,{to:"/commands/openagent.html"},{default:n(()=>[yt]),_:1}),t(": Creates a handler function for `open")]),e("li",null,[o(l,{to:"/commands/or.html"},{default:n(()=>[bt]),_:1}),t(": Returns "),xt,t(" or "),vt,t(" depending on whether one code-block out of multiple ones supplied is successful or unsuccessful.")]),e("li",null,[o(l,{to:"/commands/os.html"},{default:n(()=>[Tt]),_:1}),t(": Output the auto-detected OS name")]),e("li",null,[o(l,{to:"/commands/out.html"},{default:n(()=>[kt]),_:1}),t(": Print a string to the STDOUT with a trailing new line character")]),e("li",null,[o(l,{to:"/commands/pipe.html"},{default:n(()=>[St]),_:1}),t(": Manage Murex named pipes")]),e("li",null,[o(l,{to:"/commands/post.html"},{default:n(()=>[wt]),_:1}),t(": HTTP POST request with a JSON-parsable return")]),e("li",null,[o(l,{to:"/commands/prefix.html"},{default:n(()=>[Rt]),_:1}),t(": Prefix a string to every item in a list")]),e("li",null,[o(l,{to:"/commands/prepend.html"},{default:n(()=>[Mt]),_:1}),t(": Add data to the start of an array")]),e("li",null,[o(l,{to:"/commands/pretty.html"},{default:n(()=>[At]),_:1}),t(": Prettifies JSON to make it human readable")]),e("li",null,[o(l,{to:"/commands/private.html"},{default:n(()=>[Ot]),_:1}),t(": Define a private function block")]),e("li",null,[o(l,{to:"/commands/pt.html"},{default:n(()=>[Ct]),_:1}),t(": Pipe telemetry. Writes data-types and bytes written")]),e("li",null,[o(l,{to:"/commands/rand.html"},{default:n(()=>[Dt]),_:1}),t(": Random field generator")]),e("li",null,[o(l,{to:"/commands/read.html"},{default:n(()=>[It]),_:1}),t(": "),Pt,t(" a line of input from the user and store as a variable")]),e("li",null,[o(l,{to:"/commands/regexp.html"},{default:n(()=>[Nt]),_:1}),t(": Regexp tools for arrays / lists of strings")]),e("li",null,[o(l,{to:"/commands/return.html"},{default:n(()=>[Et]),_:1}),t(": Exits current function scope")]),e("li",null,[o(l,{to:"/commands/right.html"},{default:n(()=>[jt]),_:1}),t(": Right substring every item in a list")]),e("li",null,[o(l,{to:"/commands/round.html"},{default:n(()=>[Lt]),_:1}),t(": Round a number by a user defined precision")]),e("li",null,[o(l,{to:"/commands/runmode.html"},{default:n(()=>[Ut]),_:1}),t(": Alter the scheduler's behaviour at higher scoping level")]),e("li",null,[o(l,{to:"/commands/runtime.html"},{default:n(()=>[Bt]),_:1}),t(": Returns runtime information on the internal state of Murex")]),e("li",null,[o(l,{to:"/commands/rx.html"},{default:n(()=>[Ht]),_:1}),t(": Regexp pattern matching for file system objects (eg "),Wt,t(")")]),e("li",null,[o(l,{to:"/commands/set.html"},{default:n(()=>[qt]),_:1}),t(": Define a local variable and set it's value")]),e("li",null,[o(l,{to:"/commands/source.html"},{default:n(()=>[Jt]),_:1}),t(": Import Murex code from another file of code block")]),e("li",null,[o(l,{to:"/commands/struct-keys.html"},{default:n(()=>[Gt]),_:1}),t(": Outputs all the keys in a structure as a file path")]),e("li",null,[o(l,{to:"/commands/suffix.html"},{default:n(()=>[Qt]),_:1}),t(": Prefix a string to every item in a list")]),e("li",null,[o(l,{to:"/commands/summary.html"},{default:n(()=>[Vt]),_:1}),t(": Defines a summary help text for a command")]),e("li",null,[o(l,{to:"/commands/switch.html"},{default:n(()=>[zt]),_:1}),t(": Blocks of cascading conditionals")]),e("li",null,[o(l,{to:"/commands/ta.html"},{default:n(()=>[Ft,t(" (mkarray)")]),_:1}),t(": A sophisticated yet simple way to build an array of a user defined data-type")]),e("li",null,[o(l,{to:"/commands/tabulate.html"},{default:n(()=>[Yt]),_:1}),t(": Table transformation tools")]),e("li",null,[o(l,{to:"/commands/test.html"},{default:n(()=>[$t]),_:1}),t(": Murex's test framework - define tests, run tests and debug shell scripts")]),e("li",null,[o(l,{to:"/commands/time.html"},{default:n(()=>[Xt]),_:1}),t(": Returns the execution run time of a command or block")]),e("li",null,[o(l,{to:"/commands/tmp.html"},{default:n(()=>[Kt]),_:1}),t(": Create a temporary file and write to it")]),e("li",null,[o(l,{to:"/commands/tout.html"},{default:n(()=>[Zt]),_:1}),t(": Print a string to the STDOUT and set it's data-type")]),e("li",null,[o(l,{to:"/commands/tread.html"},{default:n(()=>[el]),_:1}),t(": "),tl,t(" a line of input from the user and store as a user defined "),ll,t(" variable (deprecated)")]),e("li",null,[o(l,{to:"/commands/true.html"},{default:n(()=>[ol]),_:1}),t(": Returns a "),nl,t(" value")]),e("li",null,[o(l,{to:"/commands/try.html"},{default:n(()=>[al]),_:1}),t(": Handles errors inside a block of code")]),e("li",null,[o(l,{to:"/commands/trypipe.html"},{default:n(()=>[sl]),_:1}),t(": Checks state of each function in a pipeline and exits block on error")]),e("li",null,[o(l,{to:"/commands/version.html"},{default:n(()=>[dl]),_:1}),t(": Get Murex version")]),e("li",null,[o(l,{to:"/commands/while.html"},{default:n(()=>[il]),_:1}),t(": Loop until condition false")])]),ul,rl,e("ul",null,[e("li",null,[o(l,{to:"/optional/bz2.html"},{default:n(()=>[cl]),_:1}),t(": Decompress a bz2 file")]),e("li",null,[o(l,{to:"/optional/base64.html"},{default:n(()=>[ml]),_:1}),t(": Encode or decode a base64 string")]),e("li",null,[o(l,{to:"/optional/gz.html"},{default:n(()=>[hl]),_:1}),t(": Compress or decompress a gzip file")]),e("li",null,[o(l,{to:"/optional/qr.html"},{default:n(()=>[_l]),_:1}),t(": Creates a QR code from STDIN")]),e("li",null,[o(l,{to:"/optional/select.html"},{default:n(()=>[fl]),_:1}),t(": Inlining SQL into shell pipelines")]),e("li",null,[o(l,{to:"/optional/sleep.html"},{default:n(()=>[pl]),_:1}),t(": Suspends the shell for a number of seconds")])]),gl,e("ul",null,[e("li",null,[o(l,{to:"/types/generic.html"},{default:n(()=>[yl,t(" (generic) ")]),_:1}),t(": generic (primitive)")]),e("li",null,[o(l,{to:"/types/bool.html"},{default:n(()=>[bl]),_:1}),t(": Boolean (primitive)")]),e("li",null,[o(l,{to:"/types/commonlog.html"},{default:n(()=>[xl]),_:1}),t(': Apache httpd "common" log format')]),e("li",null,[o(l,{to:"/types/csv.html"},{default:n(()=>[vl]),_:1}),t(": CSV files (and other character delimited tables)")]),e("li",null,[o(l,{to:"/types/float.html"},{default:n(()=>[Tl,t(" (floating point number)")]),_:1}),t(": Floating point number (primitive)")]),e("li",null,[o(l,{to:"/types/hcl.html"},{default:n(()=>[kl]),_:1}),t(": HashiCorp Configuration Language (HCL)")]),e("li",null,[o(l,{to:"/types/int.html"},{default:n(()=>[Sl]),_:1}),t(": Whole number (primitive)")]),e("li",null,[o(l,{to:"/types/json.html"},{default:n(()=>[wl]),_:1}),t(": JavaScript Object Notation (JSON)")]),e("li",null,[o(l,{to:"/types/jsonc.html"},{default:n(()=>[Rl]),_:1}),t(": Concatenated JSON")]),e("li",null,[o(l,{to:"/types/jsonl.html"},{default:n(()=>[Ml]),_:1}),t(": JSON Lines")]),e("li",null,[o(l,{to:"/types/num.html"},{default:n(()=>[Al,t(" (number)")]),_:1}),t(": Floating point number (primitive)")]),e("li",null,[o(l,{to:"/types/str.html"},{default:n(()=>[Ol,t(" (string) ")]),_:1}),t(": string (primitive)")]),e("li",null,[o(l,{to:"/types/toml.html"},{default:n(()=>[Cl]),_:1}),t(": Tom's Obvious, Minimal Language (TOML)")]),e("li",null,[o(l,{to:"/types/yaml.html"},{default:n(()=>[Dl]),_:1}),t(": YAML Ain't Markup Language (YAML)")]),e("li",null,[o(l,{to:"/types/mxjson.html"},{default:n(()=>[t("mxjson")]),_:1}),t(": Murex-flavoured JSON (deprecated)")])]),Il,e("ul",null,[e("li",null,[o(l,{to:"/events/oncommandcompletion.html"},{default:n(()=>[Pl]),_:1}),t(": Trigger an event upon a command's completion")]),e("li",null,[o(l,{to:"/events/onfilesystemchange.html"},{default:n(()=>[Nl]),_:1}),t(": Add a filesystem watch")]),e("li",null,[o(l,{to:"/events/onprompt.html"},{default:n(()=>[El]),_:1}),t(": Events triggered by changes in state of the interactive shell")]),e("li",null,[o(l,{to:"/events/onsecondselapsed.html"},{default:n(()=>[jl]),_:1}),t(": Events triggered by time intervals")])]),Ll,Ul,e("ul",null,[e("li",null,[o(l,{to:"/apis/Marshal.html"},{default:n(()=>[Bl,t(" (type)")]),_:1}),t(": Converts structured memory into a structured file format (eg for stdio)")]),e("li",null,[o(l,{to:"/apis/ReadArray.html"},{default:n(()=>[Hl,t(" (type)")]),_:1}),t(": Read from a data type one array element at a time")]),e("li",null,[o(l,{to:"/apis/ReadArrayWithType.html"},{default:n(()=>[Wl,t(" (type)")]),_:1}),t(": Read from a data type one array element at a time and return the elements contents and data type")]),e("li",null,[o(l,{to:"/apis/ReadIndex.html"},{default:n(()=>[ql,t(" (type)")]),_:1}),t(": Data type handler for the index, "),Jl,t(", builtin")]),e("li",null,[o(l,{to:"/apis/ReadMap.html"},{default:n(()=>[Gl,t(" (type)")]),_:1}),t(": Treat data type as a key/value structure and read its contents")]),e("li",null,[o(l,{to:"/apis/ReadNotIndex.html"},{default:n(()=>[Ql,t(" (type)")]),_:1}),t(": Data type handler for the bang-prefixed index, "),Vl,t(", builtin")]),e("li",null,[o(l,{to:"/apis/Unmarshal.html"},{default:n(()=>[zl,t(" (type)")]),_:1}),t(": Converts a structured file format into structured memory")]),e("li",null,[o(l,{to:"/apis/WriteArray.html"},{default:n(()=>[Fl,t(" (type)")]),_:1}),t(": Write a data type, one array element at a time")]),e("li",null,[o(l,{to:"/apis/lang.ArrayTemplate.html"},{default:n(()=>[Yl,t(" (template API)")]),_:1}),t(": Unmarshals a data type into a Go struct and returns the results as an array")]),e("li",null,[o(l,{to:"/apis/lang.ArrayWithTypeTemplate.html"},{default:n(()=>[$l,t(" (template API)")]),_:1}),t(": Unmarshals a data type into a Go struct and returns the results as an array with data type included")]),e("li",null,[o(l,{to:"/apis/lang.IndexTemplateObject.html"},{default:n(()=>[Xl,t(" (template API)")]),_:1}),t(": Returns element(s) from a data structure")]),e("li",null,[o(l,{to:"/apis/lang.IndexTemplateTable.html"},{default:n(()=>[Kl,t(" (template API)")]),_:1}),t(": Returns element(s) from a table")]),e("li",null,[o(l,{to:"/apis/lang.MarshalData.html"},{default:n(()=>[Zl,t(" (system API)")]),_:1}),t(": Converts structured memory into a Murex data-type (eg for stdio)")]),e("li",null,[o(l,{to:"/apis/lang.UnmarshalData.html"},{default:n(()=>[eo,t(" (system API)")]),_:1}),t(": Converts a Murex data-type into structured memory")])])])}const so=a(r,[["render",to],["__file","user-guide.html.vue"]]);export{so as default};
