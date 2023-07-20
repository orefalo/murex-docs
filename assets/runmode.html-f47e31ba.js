import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as r,c as l,a as e,d as n,w as a,b as t,e as c}from"./app-524c2bb5.js";const s={},h=c(`<h1 id="runmode-command-reference" tabindex="-1"><a class="header-anchor" href="#runmode-command-reference" aria-hidden="true">#</a> <code>runmode</code> - Command Reference</h1><blockquote><p>Alter the scheduler&#39;s behaviour at higher scoping level</p></blockquote><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2><p>Due to dynamic nature in which blocks are compiled on demand, traditional <code>try</code> and <code>trypipe</code> blocks cannot affect the runtime behaviour of schedulers already invoked (eg for function blocks and modules which <code>try</code> et al would sit inside). To solve this we need an additional command that is executed by the compiler prior to the block being executed which can define the runmode of the scheduler. This is the purpose of <code>runmode</code>.</p><p>The caveat of being a compiler command rather than a builtin is that <code>runmode</code> needs be the first command in a block.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><pre><code>runmode try|trypipe function|module
</code></pre><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><pre><code>function hello {
    # Short conversation, exit on error
    
    runmode: try function

    read: name &quot;What is your name? &quot;
    out: &quot;Hello $name, pleased to meet you&quot;
    
    read: mood &quot;How are you feeling? &quot;
    out: &quot;I&#39;m feeling $mood too&quot;
}
</code></pre><h2 id="detail" tabindex="-1"><a class="header-anchor" href="#detail" aria-hidden="true">#</a> Detail</h2><p><code>runmode</code>&#39;s parameters are ordered:</p><h3 id="_1st-parameter" tabindex="-1"><a class="header-anchor" href="#_1st-parameter" aria-hidden="true">#</a> 1st parameter</h3><h4 id="try" tabindex="-1"><a class="header-anchor" href="#try" aria-hidden="true">#</a> try</h4><p>Checks only the last command in the pipeline for errors. However still allows commands in a pipeline to run in parallel.</p><h4 id="trypipe" tabindex="-1"><a class="header-anchor" href="#trypipe" aria-hidden="true">#</a> trypipe</h4><p>Checks every command in the pipeline before executing the next. However this blocks pipelines from running every command in parallel.</p><h3 id="_2nd-parameter" tabindex="-1"><a class="header-anchor" href="#_2nd-parameter" aria-hidden="true">#</a> 2nd parameter</h3><h4 id="function" tabindex="-1"><a class="header-anchor" href="#function" aria-hidden="true">#</a> function</h4><p>Sets the runmode for all blocks within the function when <code>runmode</code> is placed at the start of the function. This includes privates, autocompletes, events, etc.</p><h4 id="module" tabindex="-1"><a class="header-anchor" href="#module" aria-hidden="true">#</a> module</h4><p>Sets the runmode for all blocks within that module when placed at the start of the module. This include any functions, privates, autocompletes, events, etc that are inside that module. The do not need a separate <code>runmode ... function</code> if <code>runmode ... module</code> is set.</p><h2 id="see-also" tabindex="-1"><a class="header-anchor" href="#see-also" aria-hidden="true">#</a> See Also</h2>`,22),u=e("code",null,"autocomplete",-1),m=e("code",null,"catch",-1),p=e("code",null,"try",-1),f=e("code",null,"trypipe",-1),_=e("code",null,"event",-1),b=e("code",null,"fid-list",-1),g=e("code",null,"function",-1),v=e("code",null,"out",-1),x=e("code",null,"private",-1),y=e("code",null,"read",-1),k=e("code",null,"read",-1),w=e("code",null,"try",-1),q=e("code",null,"trypipe",-1);function T(S,C){const o=i("RouterLink");return r(),l("div",null,[h,e("ul",null,[e("li",null,[n(o,{to:"/guide/user-guide/pipeline.html"},{default:a(()=>[t("Pipeline")]),_:1}),t(': Overview of what a "pipeline" is')]),e("li",null,[n(o,{to:"/guide/user-guide/schedulers.html"},{default:a(()=>[t("Schedulers")]),_:1}),t(": Overview of the different schedulers (or 'run modes') in Murex")]),e("li",null,[n(o,{to:"/guide/commands/autocomplete.html"},{default:a(()=>[u]),_:1}),t(": Set definitions for tab-completion in the command line")]),e("li",null,[n(o,{to:"/guide/commands/catch.html"},{default:a(()=>[m]),_:1}),t(": Handles the exception code raised by "),p,t(" or "),f]),e("li",null,[n(o,{to:"/guide/commands/event.html"},{default:a(()=>[_]),_:1}),t(": Event driven programming for shell scripts")]),e("li",null,[n(o,{to:"/guide/commands/fid-list.html"},{default:a(()=>[b]),_:1}),t(": Lists all running functions within the current Murex session")]),e("li",null,[n(o,{to:"/guide/commands/function.html"},{default:a(()=>[g]),_:1}),t(": Define a function block")]),e("li",null,[n(o,{to:"/guide/commands/out.html"},{default:a(()=>[v]),_:1}),t(": Print a string to the STDOUT with a trailing new line character")]),e("li",null,[n(o,{to:"/guide/commands/private.html"},{default:a(()=>[x]),_:1}),t(": Define a private function block")]),e("li",null,[n(o,{to:"/guide/commands/read.html"},{default:a(()=>[y]),_:1}),t(": "),k,t(" a line of input from the user and store as a variable")]),e("li",null,[n(o,{to:"/guide/commands/try.html"},{default:a(()=>[w]),_:1}),t(": Handles errors inside a block of code")]),e("li",null,[n(o,{to:"/guide/commands/trypipe.html"},{default:a(()=>[q]),_:1}),t(": Checks state of each function in a pipeline and exits block on error")])])])}const N=d(s,[["render",T],["__file","runmode.html.vue"]]);export{N as default};
