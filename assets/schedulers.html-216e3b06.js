import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as a,c as s,d as t,b as r,w as o,e,f as d}from"./app-143dece1.js";const h={},c=d('<h1 id="schedulers-user-guide" tabindex="-1"><a class="header-anchor" href="#schedulers-user-guide" aria-hidden="true">#</a> Schedulers - User Guide</h1><blockquote><p>Overview of the different schedulers (or &#39;run modes&#39;) in Murex</p></blockquote><p>There are a few distinct schedulers (or run modes) in Murex which are invoked<br> by builtin commands. This means you can alter the way commands are executed<br> dynamically within Murex shell scripts.</p><h2 id="normal" tabindex="-1"><a class="header-anchor" href="#normal" aria-hidden="true">#</a> Normal</h2><p>This is a traditional shell where anything in a pipeline (eg <code>cmd1 -&gt; cmd2 -&gt; cmd3</code>)<br> is executed in parallel. The scheduler only pauses launching new commands when<br> the last command in any pipeline is still executing. A pipeline could be multiple<br> commands (like above) or a single command (eg <code>top</code>).</p><h2 id="try" tabindex="-1"><a class="header-anchor" href="#try" aria-hidden="true">#</a> Try</h2><p>This is similar to normal where commands in a pipeline are run in parallel except<br> Murex validates the stderr and exit status of the last command in any pipeline.</p><p>If stderr is greater than stdout (per bytes written) <strong>OR</strong> the exit status is<br> non-zero then the scheduler exits that entire block.</p><h2 id="try-pipe" tabindex="-1"><a class="header-anchor" href="#try-pipe" aria-hidden="true">#</a> Try Pipe</h2><p>This runs the commands sequentially because the stderr and the exit status of<br> each command is checked irrespective of whether that command is at the start of<br> the pipeline (eg <code>start -&gt; middle -&gt; end</code>), or anywhere else.</p><p>Like with <code>try</code>, if stderr is greater than stdout (per bytes written) <strong>OR</strong><br> the exit status is non-zero then the scheduler exits that entire block. Unlike<br> with <code>try</code>, this check happens on every command rather than the last command in<br> the pipeline.</p><h2 id="see-also" tabindex="-1"><a class="header-anchor" href="#see-also" aria-hidden="true">#</a> See Also</h2>',12),u=t("code",null,"->",-1),m=t("br",null,null,-1),p=t("code",null,"=>",-1),_=t("br",null,null,-1),f=t("code",null,"|",-1),b=t("br",null,null,-1),g=t("br",null,null,-1),x=t("code",null,"?",-1),y=t("br",null,null,-1),T=t("code",null,"runmode",-1),k=t("br",null,null,-1),w=t("code",null,"try",-1),v=t("br",null,null,-1),S=t("code",null,"trypipe",-1),P=t("br",null,null,-1);function D(N,O){const n=l("RouterLink");return a(),s("div",null,[c,t("ul",null,[t("li",null,[r(n,{to:"/parser/pipe-arrow.html"},{default:o(()=>[e("Arrow Pipe ("),u,e(") Token")]),_:1}),e(":"),m,e(" Pipes STDOUT from the left hand command to STDIN of the right hand command")]),t("li",null,[r(n,{to:"/parser/pipe-generic.html"},{default:o(()=>[e("Generic Pipe ("),p,e(") Token")]),_:1}),e(":"),_,e(" Pipes a reformatted STDOUT stream from the left hand command to STDIN of the right hand command")]),t("li",null,[r(n,{to:"/parser/pipe-posix.html"},{default:o(()=>[e("POSIX Pipe ("),f,e(") Token")]),_:1}),e(":"),b,e(" Pipes STDOUT from the left hand command to STDIN of the right hand command")]),t("li",null,[r(n,{to:"/user-guide/pipeline.html"},{default:o(()=>[e("Pipeline")]),_:1}),e(":"),g,e(' Overview of what a "pipeline" is')]),t("li",null,[r(n,{to:"/parser/pipe-err.html"},{default:o(()=>[e("STDERR Pipe ("),x,e(") Token")]),_:1}),e(":"),y,e(" Pipes STDERR from the left hand command to STDIN of the right hand command")]),t("li",null,[r(n,{to:"/commands/runmode.html"},{default:o(()=>[T]),_:1}),e(":"),k,e(" Alter the scheduler's behaviour at higher scoping level")]),t("li",null,[r(n,{to:"/commands/try.html"},{default:o(()=>[w]),_:1}),e(":"),v,e(" Handles errors inside a block of code")]),t("li",null,[r(n,{to:"/commands/trypipe.html"},{default:o(()=>[S]),_:1}),e(":"),P,e(" Checks state of each function in a pipeline and exits block on error")])])])}const U=i(h,[["render",D],["__file","schedulers.html.vue"]]);export{U as default};
