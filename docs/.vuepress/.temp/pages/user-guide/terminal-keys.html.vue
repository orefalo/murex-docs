<template><div><h1 id="terminal-hotkeys-user-guide" tabindex="-1"><a class="header-anchor" href="#terminal-hotkeys-user-guide" aria-hidden="true">#</a> Terminal Hotkeys - User Guide</h1>
<blockquote>
<p>A list of all the terminal hotkeys and their uses</p>
</blockquote>
<h1 id="terminal-hotkeys" tabindex="-1"><a class="header-anchor" href="#terminal-hotkeys" aria-hidden="true">#</a> Terminal Hotkeys</h1>
<h2 id="tab-autocomplete" tabindex="-1"><a class="header-anchor" href="#tab-autocomplete" aria-hidden="true">#</a> <code v-pre>tab</code>: autocomplete</h2>
<p>Provides autocompletion suggestions. Press <code v-pre>esc</code> to hide suggestions.</p>
<h2 id="ctrl-c-kill-foreground-process" tabindex="-1"><a class="header-anchor" href="#ctrl-c-kill-foreground-process" aria-hidden="true">#</a> <code v-pre>ctrl</code>+<code v-pre>c</code>: kill foreground process</h2>
<p>Pressing this will send a kill (SIGINT) request to the foreground process.</p>
<h2 id="ctrl-d-end-of-file" tabindex="-1"><a class="header-anchor" href="#ctrl-d-end-of-file" aria-hidden="true">#</a> <code v-pre>ctrl</code>+<code v-pre>d</code>: end of file</h2>
<p>Send EOF (end of file). If the shell is sat on the prompt then this will exit<br>
that running session.</p>
<h2 id="ctrl-f-find-in-autocomplete-suggestions" tabindex="-1"><a class="header-anchor" href="#ctrl-f-find-in-autocomplete-suggestions" aria-hidden="true">#</a> <code v-pre>ctrl</code>+<code v-pre>f</code>: find in autocomplete suggestions</h2>
<p>This will allow you to perform a search through the autocompletion suggestions,<br>
allowing you to quickly navigate complex command options or jump to specific<br>
sub-directories.</p>
<p>By default the fuzzy finder will look for any item that includes <em>all</em> of the<br>
search words. However the search behavior can be changed if the first search<br>
term is any of these:</p>
<ul>
<li>
<p><code v-pre>or</code>: show results that match <em>any</em> of the search terms. eg <code v-pre>or .md .txt</code><br>
will match both markdown and txt files (when finding files in completion<br>
suggestions).</p>
</li>
<li>
<p><code v-pre>!</code>: only show suggestions that do not match any of the search terms. eg<br>
<code v-pre>! .md .txt</code> will match all files except markdown and txt files (when finding<br>
files in completion suggestions).</p>
</li>
<li>
<p><code v-pre>g</code>: show only results that match a shell glob. eg <code v-pre>*.txt</code>.</p>
</li>
<li>
<p><code v-pre>rx</code>: use a regexp pattern matcher instead of any fuzzy search. Expressions<br>
will be case insensitive and non-greedy by default.</p>
</li>
</ul>
<p>The fuzzy finder search is not case sensitive.</p>
<p>Press <code v-pre>esc</code> to cancel search.</p>
<h2 id="ctrl-r-search-shell-history" tabindex="-1"><a class="header-anchor" href="#ctrl-r-search-shell-history" aria-hidden="true">#</a> <code v-pre>ctrl</code>+<code v-pre>r</code>: search shell history</h2>
<p>This brings up your timestamped shell history as an autocomplete list with<br>
regexp search activated. Using <code v-pre>ctrl</code>+<code v-pre>r</code> you can rapidly rerun previous<br>
command lines.</p>
<p>Press <code v-pre>esc</code> to cancel history completion.</p>
<h2 id="ctrl-u-clear-line" tabindex="-1"><a class="header-anchor" href="#ctrl-u-clear-line" aria-hidden="true">#</a> <code v-pre>ctrl</code>+<code v-pre>u</code>: clear line</h2>
<p>Clears the current line.</p>
<h2 id="ctrl-kill-all-running-processes" tabindex="-1"><a class="header-anchor" href="#ctrl-kill-all-running-processes" aria-hidden="true">#</a> <code v-pre>ctrl</code>+<code v-pre>\</code>: kill all running processes</h2>
<p>This will kill all processes owned by the current Murex session. Including<br>
any background processes too.</p>
<p>This function is a effectively an emergency kill switch to bring you back to<br>
the command prompt.</p>
<p>Use sparingly because it doesn't allow processes to end graceful.</p>
<h2 id="ctrl-z-suspend-foreground-process" tabindex="-1"><a class="header-anchor" href="#ctrl-z-suspend-foreground-process" aria-hidden="true">#</a> <code v-pre>ctrl</code>+<code v-pre>z</code>: suspend foreground process</h2>
<p>Suspends the execution of the current foreground process. You can then use job<br>
control to resume execution in either the foreground or background. (<RouterLink to="/commands/fid-list.html">read more</RouterLink>)</p>
<h2 id="esc-aka-vim-keys" tabindex="-1"><a class="header-anchor" href="#esc-aka-vim-keys" aria-hidden="true">#</a> <code v-pre>esc</code> (aka &quot;vim keys&quot;)</h2>
<p>Pressing <code v-pre>esc</code> while no autocomplete suggestions are shown will switch the<br>
line editor into <strong>vim keys</strong> mode.</p>
<p>Press <code v-pre>i</code> to return to normal editing mode.</p>
<h3 id="supported-keys" tabindex="-1"><a class="header-anchor" href="#supported-keys" aria-hidden="true">#</a> Supported keys</h3>
<ul>
<li><code v-pre>a</code>: insert after current character</li>
<li><code v-pre>A</code>: insert at end of line</li>
<li><code v-pre>b</code>: jump to beginning of word</li>
<li><code v-pre>B</code>: jump to previous whitespace</li>
<li><code v-pre>d</code>: delete mode</li>
<li><code v-pre>D</code>: delete characters</li>
<li><code v-pre>e</code>: jump to end of word</li>
<li><code v-pre>E</code>: jump to next whitespace</li>
<li><code v-pre>h</code>: previous character (like <code v-pre>🠔</code>)</li>
<li><code v-pre>i</code>: insert mode</li>
<li><code v-pre>I</code>: insert at beginning of line</li>
<li><code v-pre>l</code>: next character (like <code v-pre>🠖</code>)</li>
<li><code v-pre>p</code>: paste after</li>
<li><code v-pre>P</code>: paste before</li>
<li><code v-pre>r</code>: replace character (replace once)</li>
<li><code v-pre>R</code>: replace many characters</li>
<li><code v-pre>u</code>: undo</li>
<li><code v-pre>v</code>: visual editor (opens line in <code v-pre>$EDITOR</code>)</li>
<li><code v-pre>w</code>: jump to end of word</li>
<li><code v-pre>W</code>: jump to next whitespace</li>
<li><code v-pre>x</code>: delete character</li>
<li><code v-pre>y</code>: yank (copy line)</li>
<li><code v-pre>Y</code>: same as <code v-pre>y</code></li>
<li><code v-pre>[</code>: jump to previous brace</li>
<li><code v-pre>]</code>: jump to next brace</li>
<li><code v-pre>$</code>: jump to end of line</li>
<li><code v-pre>%</code>: jump to either end of matching bracket</li>
<li><code v-pre>0</code> to <code v-pre>9</code>: repeat action <em>n</em> times. eg <code v-pre>5x</code> would delete five (<code v-pre>5</code>) characters (<code v-pre>x</code>)</li>
</ul>
<h3 id="full-screen-editing-via-editor" tabindex="-1"><a class="header-anchor" href="#full-screen-editing-via-editor" aria-hidden="true">#</a> Full screen editing via <code v-pre>$EDITOR</code></h3>
<p>When in &quot;vim keys&quot; mode, press <code v-pre>v</code> to bring up the visual editor. The editor<br>
will be whichever command is stored in the <code v-pre>$EDITOR</code> environmental variable.</p>
<h2 id="recalling-previous-words" tabindex="-1"><a class="header-anchor" href="#recalling-previous-words" aria-hidden="true">#</a> Recalling previous words</h2>
<ul>
<li><code v-pre>alt</code>+<code v-pre>1</code> recalls the first word</li>
<li><code v-pre>alt</code>+<code v-pre>2</code> recalls the second word</li>
<li>...</li>
<li><code v-pre>alt</code>+<code v-pre>9</code> recalls the ninth word</li>
</ul>
<p>For example (code inside square brackets represent key presses rather than text):</p>
<pre><code>» echo two three four five six seven eight nine
two three four five six seven eight nine
» [alt+1]echo [alt+5]five
</code></pre>
<p>Please note this isn't currently supported on all terminal emulators.</p>
<h2 id="see-also" tabindex="-1"><a class="header-anchor" href="#see-also" aria-hidden="true">#</a> See Also</h2>
<ul>
<li><RouterLink to="/user-guide/interactive-shell.html">Murex's Interactive Shell</RouterLink>:<br>
What's different about Murex's interactive shell?</li>
</ul>
</div></template>


