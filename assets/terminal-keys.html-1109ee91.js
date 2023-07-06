import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as a,c as s,a as o,b as e,d as r,w as c,e as t}from"./app-8d32d054.js";const n={},h=t('<h1 id="terminal-hotkeys-user-guide" tabindex="-1"><a class="header-anchor" href="#terminal-hotkeys-user-guide" aria-hidden="true">#</a> Terminal Hotkeys - User Guide</h1><blockquote><p>A list of all the terminal hotkeys and their uses</p></blockquote><h1 id="terminal-hotkeys" tabindex="-1"><a class="header-anchor" href="#terminal-hotkeys" aria-hidden="true">#</a> Terminal Hotkeys</h1><h2 id="tab-autocomplete" tabindex="-1"><a class="header-anchor" href="#tab-autocomplete" aria-hidden="true">#</a> <code>tab</code>: autocomplete</h2><p>Provides autocompletion suggestions. Press <code>esc</code> to hide suggestions.</p><h2 id="ctrl-c-kill-foreground-process" tabindex="-1"><a class="header-anchor" href="#ctrl-c-kill-foreground-process" aria-hidden="true">#</a> <code>ctrl</code>+<code>c</code>: kill foreground process</h2><p>Pressing this will send a kill (SIGINT) request to the foreground process.</p><h2 id="ctrl-d-end-of-file" tabindex="-1"><a class="header-anchor" href="#ctrl-d-end-of-file" aria-hidden="true">#</a> <code>ctrl</code>+<code>d</code>: end of file</h2><p>Send EOF (end of file). If the shell is sat on the prompt then this will exit<br> that running session.</p><h2 id="ctrl-f-find-in-autocomplete-suggestions" tabindex="-1"><a class="header-anchor" href="#ctrl-f-find-in-autocomplete-suggestions" aria-hidden="true">#</a> <code>ctrl</code>+<code>f</code>: find in autocomplete suggestions</h2><p>This will allow you to perform a search through the autocompletion suggestions,<br> allowing you to quickly navigate complex command options or jump to specific<br> sub-directories.</p><p>By default the fuzzy finder will look for any item that includes <em>all</em> of the<br> search words. However the search behavior can be changed if the first search<br> term is any of these:</p><ul><li><p><code>or</code>: show results that match <em>any</em> of the search terms. eg <code>or .md .txt</code><br> will match both markdown and txt files (when finding files in completion<br> suggestions).</p></li><li><p><code>!</code>: only show suggestions that do not match any of the search terms. eg<br><code>! .md .txt</code> will match all files except markdown and txt files (when finding<br> files in completion suggestions).</p></li><li><p><code>g</code>: show only results that match a shell glob. eg <code>*.txt</code>.</p></li><li><p><code>rx</code>: use a regexp pattern matcher instead of any fuzzy search. Expressions<br> will be case insensitive and non-greedy by default.</p></li></ul><p>The fuzzy finder search is not case sensitive.</p><p>Press <code>esc</code> to cancel search.</p><h2 id="ctrl-r-search-shell-history" tabindex="-1"><a class="header-anchor" href="#ctrl-r-search-shell-history" aria-hidden="true">#</a> <code>ctrl</code>+<code>r</code>: search shell history</h2><p>This brings up your timestamped shell history as an autocomplete list with<br> regexp search activated. Using <code>ctrl</code>+<code>r</code> you can rapidly rerun previous<br> command lines.</p><p>Press <code>esc</code> to cancel history completion.</p><h2 id="ctrl-u-clear-line" tabindex="-1"><a class="header-anchor" href="#ctrl-u-clear-line" aria-hidden="true">#</a> <code>ctrl</code>+<code>u</code>: clear line</h2><p>Clears the current line.</p><h2 id="ctrl-kill-all-running-processes" tabindex="-1"><a class="header-anchor" href="#ctrl-kill-all-running-processes" aria-hidden="true">#</a> <code>ctrl</code>+<code>\\</code>: kill all running processes</h2><p>This will kill all processes owned by the current Murex session. Including<br> any background processes too.</p><p>This function is a effectively an emergency kill switch to bring you back to<br> the command prompt.</p><p>Use sparingly because it doesn&#39;t allow processes to end graceful.</p><h2 id="ctrl-z-suspend-foreground-process" tabindex="-1"><a class="header-anchor" href="#ctrl-z-suspend-foreground-process" aria-hidden="true">#</a> <code>ctrl</code>+<code>z</code>: suspend foreground process</h2>',25),u=o("br",null,null,-1),p=t(`<h2 id="esc-aka-vim-keys" tabindex="-1"><a class="header-anchor" href="#esc-aka-vim-keys" aria-hidden="true">#</a> <code>esc</code> (aka &quot;vim keys&quot;)</h2><p>Pressing <code>esc</code> while no autocomplete suggestions are shown will switch the<br> line editor into <strong>vim keys</strong> mode.</p><p>Press <code>i</code> to return to normal editing mode.</p><h3 id="supported-keys" tabindex="-1"><a class="header-anchor" href="#supported-keys" aria-hidden="true">#</a> Supported keys</h3><ul><li><code>a</code>: insert after current character</li><li><code>A</code>: insert at end of line</li><li><code>b</code>: jump to beginning of word</li><li><code>B</code>: jump to previous whitespace</li><li><code>d</code>: delete mode</li><li><code>D</code>: delete characters</li><li><code>e</code>: jump to end of word</li><li><code>E</code>: jump to next whitespace</li><li><code>h</code>: previous character (like <code>🠔</code>)</li><li><code>i</code>: insert mode</li><li><code>I</code>: insert at beginning of line</li><li><code>l</code>: next character (like <code>🠖</code>)</li><li><code>p</code>: paste after</li><li><code>P</code>: paste before</li><li><code>r</code>: replace character (replace once)</li><li><code>R</code>: replace many characters</li><li><code>u</code>: undo</li><li><code>v</code>: visual editor (opens line in <code>$EDITOR</code>)</li><li><code>w</code>: jump to end of word</li><li><code>W</code>: jump to next whitespace</li><li><code>x</code>: delete character</li><li><code>y</code>: yank (copy line)</li><li><code>Y</code>: same as <code>y</code></li><li><code>[</code>: jump to previous brace</li><li><code>]</code>: jump to next brace</li><li><code>$</code>: jump to end of line</li><li><code>%</code>: jump to either end of matching bracket</li><li><code>0</code> to <code>9</code>: repeat action <em>n</em> times. eg <code>5x</code> would delete five (<code>5</code>) characters (<code>x</code>)</li></ul><h3 id="full-screen-editing-via-editor" tabindex="-1"><a class="header-anchor" href="#full-screen-editing-via-editor" aria-hidden="true">#</a> Full screen editing via <code>$EDITOR</code></h3><p>When in &quot;vim keys&quot; mode, press <code>v</code> to bring up the visual editor. The editor<br> will be whichever command is stored in the <code>$EDITOR</code> environmental variable.</p><h2 id="recalling-previous-words" tabindex="-1"><a class="header-anchor" href="#recalling-previous-words" aria-hidden="true">#</a> Recalling previous words</h2><ul><li><code>alt</code>+<code>1</code> recalls the first word</li><li><code>alt</code>+<code>2</code> recalls the second word</li><li>...</li><li><code>alt</code>+<code>9</code> recalls the ninth word</li></ul><p>For example (code inside square brackets represent key presses rather than text):</p><pre><code>» echo two three four five six seven eight nine
two three four five six seven eight nine
» [alt+1]echo [alt+5]five
</code></pre><p>Please note this isn&#39;t currently supported on all terminal emulators.</p><h2 id="see-also" tabindex="-1"><a class="header-anchor" href="#see-also" aria-hidden="true">#</a> See Also</h2>`,13),m=o("br",null,null,-1);function f(g,b){const i=l("RouterLink");return a(),s("div",null,[h,o("p",null,[e("Suspends the execution of the current foreground process. You can then use job"),u,e(" control to resume execution in either the foreground or background. ("),r(i,{to:"/commands/fid-list.html"},{default:c(()=>[e("read more")]),_:1}),e(")")]),p,o("ul",null,[o("li",null,[r(i,{to:"/user-guide/interactive-shell.html"},{default:c(()=>[e("Murex's Interactive Shell")]),_:1}),e(":"),m,e(" What's different about Murex's interactive shell?")])])])}const k=d(n,[["render",f],["__file","terminal-keys.html.vue"]]);export{k as default};
