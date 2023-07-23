import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as l,c as o,d as e,b as s,w as a,e as n,f as c}from"./app-27c1e3fb.js";const r={},u=c(`<h1 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> <code>switch</code></h1><blockquote><p>Blocks of cascading conditionals</p></blockquote><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2><p><code>switch</code> is a large block for simplifying cascades of conditional statements.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>switch [value] {
  case | if { conditional } [then] { code-block }
  case | if { conditional } [then] { code-block }
  ...
  [ default { code-block } ]
} -&gt; &lt;stdout&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The first parameter should be either <strong>case</strong> or <strong>if</strong> -- the statements are subtly different and thus alter the behavior of <code>switch</code>.</p><p><strong>then</strong> is optional (&#39;then&#39; is assumed even if not explicitly present).</p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Output an array of editors installed:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>switch {
    if { which: vi    } { out: vi    }
    if { which: vim   } { out: vim   }
    if { which: nano  } { out: nano  }
    if { which: emacs } { out: emacs }
} -&gt; format: json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>A higher/lower game written using <code>switch</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function higherlower {
  try {
    rand: int 100 -&gt; set rand
    while { $rand } {
      read: guess &quot;Guess a number between 1 and 100: &quot;

      switch {
        case: { = $guess &lt; $rand } then {
          out: &quot;Too low&quot;
        }

        case: { = $guess &gt; $rand } then {
          out: &quot;Too high&quot;
        }

        default: {
          out: &quot;Correct&quot;
          let: rand=0
        }
      }
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>String matching with <code>switch</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>read: name &quot;What is your name? &quot;
switch $name {
    case &quot;Tom&quot;   { out: &quot;I have a brother called Tom&quot; }
    case &quot;Dick&quot;  { out: &quot;I have an uncle called Dick&quot; }
    case &quot;Sally&quot; { out: &quot;I have a sister called Sally&quot; }
    default      { err: &quot;That is an odd name&quot; }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="detail" tabindex="-1"><a class="header-anchor" href="#detail" aria-hidden="true">#</a> Detail</h2><h3 id="comparing-values-vs-boolean-state" tabindex="-1"><a class="header-anchor" href="#comparing-values-vs-boolean-state" aria-hidden="true">#</a> Comparing Values vs Boolean State</h3><h4 id="by-values" tabindex="-1"><a class="header-anchor" href="#by-values" aria-hidden="true">#</a> By Values</h4><p>If you supply a value with <code>switch</code>...</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>switch value { ... }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>...then all the conditionals are compared against that value. For example:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>switch foo {
    case bar {
        # not executed because foo != bar
    }
    case foo {
        # executed because foo != foo
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You can use code blocks to return strings too</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>switch foo {
    case {out: bar} then {
        # not executed because foo != bar
    }
    case {out: foo} then {
        # executed because foo != foo
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="by-boolean-state" tabindex="-1"><a class="header-anchor" href="#by-boolean-state" aria-hidden="true">#</a> By Boolean State</h4><p>This style of syntax could be argued as a prettier counterpart to if/else if. Only code blocks are support and each block is checked for its boolean state rather than string matching.</p><p>This is simply written as:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>switch { ... }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="when-to-use-case-if-and-default" tabindex="-1"><a class="header-anchor" href="#when-to-use-case-if-and-default" aria-hidden="true">#</a> When To Use <code>case</code>, <code>if</code> and <code>default</code>?</h3><p>A <code>switch</code> command may contain multiple <strong>case</strong> and <strong>if</strong> blocks. These statements subtly alter the behavior of <code>switch</code>. You can mix and match <strong>if</strong> and <strong>case</strong> statements within the same <code>switch</code> block.</p><h4 id="case" tabindex="-1"><a class="header-anchor" href="#case" aria-hidden="true">#</a> case</h4><p>A <strong>case</strong> statement will only move on to the next statement if the result of the <strong>case</strong> statement is <strong>false</strong>. If a <strong>case</strong> statement is <strong>true</strong> then <code>switch</code> will exit with an exit number of <code>0</code>.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>switch {
    case { false } then {
        # ignored because case == false
    }
    case { true } then {
        # executed because case == true
    }
    case { true } then {
        # ignored because a previous case was true
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="if" tabindex="-1"><a class="header-anchor" href="#if" aria-hidden="true">#</a> if</h3><p>An <strong>if</strong> statement will proceed to the next statement <em>even</em> if the result of the <strong>if</strong> statement is <strong>true</strong>.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>switch {
    if { false } then {
        # ignored because if == false
    }
    if { true } then {
        # executed because if == true
    }
    if { true } then {
        # executed because if == true
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="default" tabindex="-1"><a class="header-anchor" href="#default" aria-hidden="true">#</a> default</h3><p><strong>default</strong> statements are only run if <em>all</em> <strong>case</strong> <em>and</em> <strong>if</strong> statements are false.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>switch {
    if { false } then {
        # ignored because if == false
    }
    if { true } then {
        # executed because if == true
    }
    if { true } then {
        # executed because if == true
    }
    if { false } then {
        # ignored because if == false
    }
    default {
        # ignored because one or more previous if&#39;s were true
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>default</strong> was added in Murex version 3.1</p></blockquote><h3 id="catch" tabindex="-1"><a class="header-anchor" href="#catch" aria-hidden="true">#</a> catch</h3><p><strong>catch</strong> has been deprecated in version 3.1 and replaced with <strong>default</strong>.</p><h2 id="see-also" tabindex="-1"><a class="header-anchor" href="#see-also" aria-hidden="true">#</a> See Also</h2>`,43),v=e("code",null,"!",-1),h=e("code",null,"and",-1),m=e("code",null,"true",-1),b=e("code",null,"false",-1),f=e("code",null,"break",-1),g=e("code",null,"catch",-1),p=e("code",null,"try",-1),x=e("code",null,"trypipe",-1),_=e("code",null,"false",-1),w=e("code",null,"false",-1),y=e("code",null,"if",-1),k=e("code",null,"let",-1),q=e("code",null,"or",-1),T=e("code",null,"true",-1),B=e("code",null,"false",-1),S=e("code",null,"set",-1),R=e("code",null,"true",-1),C=e("code",null,"true",-1),D=e("code",null,"try",-1),I=e("code",null,"trypipe",-1),V=e("code",null,"while",-1);function $(A,N){const i=d("RouterLink");return l(),o("div",null,[u,e("ul",null,[e("li",null,[s(i,{to:"/commands/not.html"},{default:a(()=>[v,n(" (not)")]),_:1}),n(": Reads the STDIN and exit number from previous process and not's it's condition")]),e("li",null,[s(i,{to:"/commands/and.html"},{default:a(()=>[h]),_:1}),n(": Returns "),m,n(" or "),b,n(" depending on whether multiple conditions are met")]),e("li",null,[s(i,{to:"/commands/break.html"},{default:a(()=>[f]),_:1}),n(": Terminate execution of a block within your processes scope")]),e("li",null,[s(i,{to:"/commands/catch.html"},{default:a(()=>[g]),_:1}),n(": Handles the exception code raised by "),p,n(" or "),x]),e("li",null,[s(i,{to:"/commands/false.html"},{default:a(()=>[_]),_:1}),n(": Returns a "),w,n(" value")]),e("li",null,[s(i,{to:"/commands/if.html"},{default:a(()=>[y]),_:1}),n(": Conditional statement to execute different blocks of code depending on the result of the condition")]),e("li",null,[s(i,{to:"/commands/let.html"},{default:a(()=>[k]),_:1}),n(": Evaluate a mathematical function and assign to variable (deprecated)")]),e("li",null,[s(i,{to:"/commands/or.html"},{default:a(()=>[q]),_:1}),n(": Returns "),T,n(" or "),B,n(" depending on whether one code-block out of multiple ones supplied is successful or unsuccessful.")]),e("li",null,[s(i,{to:"/commands/set.html"},{default:a(()=>[S]),_:1}),n(": Define a local variable and set it's value")]),e("li",null,[s(i,{to:"/commands/true.html"},{default:a(()=>[R]),_:1}),n(": Returns a "),C,n(" value")]),e("li",null,[s(i,{to:"/commands/try.html"},{default:a(()=>[D]),_:1}),n(": Handles errors inside a block of code")]),e("li",null,[s(i,{to:"/commands/trypipe.html"},{default:a(()=>[I]),_:1}),n(": Checks state of each function in a pipeline and exits block on error")]),e("li",null,[s(i,{to:"/commands/while.html"},{default:a(()=>[V]),_:1}),n(": Loop until condition false")])])])}const H=t(r,[["render",$],["__file","switch.html.vue"]]);export{H as default};
