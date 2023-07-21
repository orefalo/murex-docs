import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as a,c as d,d as e,b as o,w as s,e as n,f as r}from"./app-b92fd348.js";const c={},u=r(`<h1 id="fg" tabindex="-1"><a class="header-anchor" href="#fg" aria-hidden="true">#</a> <code>fg</code></h1><blockquote><p>Sends a background process into the foreground</p></blockquote><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2><p><code>fg</code> resumes a stopped process and sends it into the foreground.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><p>POSIX only:</p><pre><code>fg fid
</code></pre><h2 id="detail" tabindex="-1"><a class="header-anchor" href="#detail" aria-hidden="true">#</a> Detail</h2><p>This builtin is only supported on POSIX systems. There is no support planned for Windows (due to the kernel not supporting the right signals) nor Plan 9.</p><h2 id="see-also" tabindex="-1"><a class="header-anchor" href="#see-also" aria-hidden="true">#</a> See Also</h2>`,10),h=e("code",null,"bg",-1),f=e("code",null,"exec",-1),_=e("code",null,"fid-kill",-1),m=e("code",null,"fid-killall",-1),p=e("em",null,"all",-1),g=e("code",null,"fid-list",-1),x=e("code",null,"jobs",-1);function b(k,w){const t=l("RouterLink");return a(),d("div",null,[u,e("ul",null,[e("li",null,[o(t,{to:"/commands/bg.html"},{default:s(()=>[h]),_:1}),n(": Run processes in the background")]),e("li",null,[o(t,{to:"/commands/exec.html"},{default:s(()=>[f]),_:1}),n(": Runs an executable")]),e("li",null,[o(t,{to:"/commands/fid-kill.html"},{default:s(()=>[_]),_:1}),n(": Terminate a running Murex function")]),e("li",null,[o(t,{to:"/commands/fid-killall.html"},{default:s(()=>[m]),_:1}),n(": Terminate "),p,n(" running Murex functions")]),e("li",null,[o(t,{to:"/commands/fid-list.html"},{default:s(()=>[g]),_:1}),n(": Lists all running functions within the current Murex session")]),e("li",null,[o(t,{to:"/commands/fid-list.html"},{default:s(()=>[x]),_:1}),n(": Lists all running functions within the current Murex session")])])])}const L=i(c,[["render",b],["__file","fg.html.vue"]]);export{L as default};
