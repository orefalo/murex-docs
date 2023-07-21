import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as s,c as l,d as t,b as n,w as r,e,f as d}from"./app-cb2b377d.js";const h={},c=d('<h1 id="schedulers" tabindex="-1"><a class="header-anchor" href="#schedulers" aria-hidden="true">#</a> Schedulers</h1><blockquote><p>Overview of the different schedulers (or &#39;run modes&#39;) in Murex</p></blockquote><p>There are a few distinct schedulers (or run modes) in Murex which are invoked by builtin commands. This means you can alter the way commands are executed dynamically within Murex shell scripts.</p><h2 id="normal" tabindex="-1"><a class="header-anchor" href="#normal" aria-hidden="true">#</a> Normal</h2><p>This is a traditional shell where anything in a pipeline (eg <code>cmd1 -&gt; cmd2 -&gt; cmd3</code>) is executed in parallel. The scheduler only pauses launching new commands when the last command in any pipeline is still executing. A pipeline could be multiple commands (like above) or a single command (eg <code>top</code>).</p><h2 id="try" tabindex="-1"><a class="header-anchor" href="#try" aria-hidden="true">#</a> Try</h2><p>This is similar to normal where commands in a pipeline are run in parallel except Murex validates the stderr and exit status of the last command in any pipeline.</p><p>If stderr is greater than stdout (per bytes written) <strong>OR</strong> the exit status is non-zero then the scheduler exits that entire block.</p><h2 id="try-pipe" tabindex="-1"><a class="header-anchor" href="#try-pipe" aria-hidden="true">#</a> Try Pipe</h2><p>This runs the commands sequentially because the stderr and the exit status of each command is checked irrespective of whether that command is at the start of the pipeline (eg <code>start -&gt; middle -&gt; end</code>), or anywhere else.</p><p>Like with <code>try</code>, if stderr is greater than stdout (per bytes written) <strong>OR</strong> the exit status is non-zero then the scheduler exits that entire block. Unlike with <code>try</code>, this check happens on every command rather than the last command in the pipeline.</p><h2 id="see-also" tabindex="-1"><a class="header-anchor" href="#see-also" aria-hidden="true">#</a> See Also</h2>',12),m=t("code",null,"->",-1),p=t("code",null,"=>",-1),u=t("code",null,"|",-1),f=t("code",null,"?",-1),_=t("code",null,"runmode",-1),x=t("code",null,"try",-1),y=t("code",null,"trypipe",-1);function g(T,k){const a=i("RouterLink");return s(),l("div",null,[c,t("ul",null,[t("li",null,[n(a,{to:"/parser/pipe-arrow.html"},{default:r(()=>[e("Arrow Pipe ("),m,e(") Token")]),_:1}),e(": Pipes STDOUT from the left hand command to STDIN of the right hand command")]),t("li",null,[n(a,{to:"/parser/pipe-generic.html"},{default:r(()=>[e("Generic Pipe ("),p,e(") Token")]),_:1}),e(": Pipes a reformatted STDOUT stream from the left hand command to STDIN of the right hand command")]),t("li",null,[n(a,{to:"/parser/pipe-posix.html"},{default:r(()=>[e("POSIX Pipe ("),u,e(") Token")]),_:1}),e(": Pipes STDOUT from the left hand command to STDIN of the right hand command")]),t("li",null,[n(a,{to:"/user-guide/pipeline.html"},{default:r(()=>[e("Pipeline")]),_:1}),e(': Overview of what a "pipeline" is')]),t("li",null,[n(a,{to:"/parser/pipe-err.html"},{default:r(()=>[e("STDERR Pipe ("),f,e(") Token")]),_:1}),e(": Pipes STDERR from the left hand command to STDIN of the right hand command")]),t("li",null,[n(a,{to:"/commands/runmode.html"},{default:r(()=>[_]),_:1}),e(": Alter the scheduler's behaviour at higher scoping level")]),t("li",null,[n(a,{to:"/commands/try.html"},{default:r(()=>[x]),_:1}),e(": Handles errors inside a block of code")]),t("li",null,[n(a,{to:"/commands/trypipe.html"},{default:r(()=>[y]),_:1}),e(": Checks state of each function in a pipeline and exits block on error")])])])}const v=o(h,[["render",g],["__file","schedulers.html.vue"]]);export{v as default};
