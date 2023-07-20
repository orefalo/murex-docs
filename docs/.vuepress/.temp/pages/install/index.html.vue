<template><div><h1>Install Murex</h1>
<h2>Table of Contents</h2>
<div id="toc">
<ul>
<li><a href="#supported-platforms">Supported Platforms</a></li>
<li><a href="#pre-compiled-binaries-https-download">Pre-Compiled Binaries (HTTPS download)</a></li>
<li><a href="#installing-from-a-package-manager">Installing From A Package Manager</a>
<ul>
<li><a href="#archlinux">ArchLinux</a></li>
<li><a href="#homebrew">Homebrew</a></li>
<li><a href="#macports">MacPorts</a></li>
</ul>
</li>
<li><a href="#compiling-from-source">Compiling From Source</a>
<ul>
<li><a href="#installation-from-source-steps">Installation From Source Steps</a></li>
</ul>
</li>
<li><a href="#including-optional-builtins">Including Optional Builtins</a></li>
<li><a href="#external-dependencies-optional">External Dependencies (Optional)</a></li>
<li><a href="#recommended-terminal-typeface">Recommended Terminal Typeface</a></li>
</ul>
</div>
<h2 id="supported-platforms" tabindex="-1"><a class="header-anchor" href="#supported-platforms" aria-hidden="true">#</a> Supported Platforms</h2>
<p>Linux, BSD and macOS are fully supported, with other platforms considered<br>
experimental and/or having known limitations.</p>
<h2 id="pre-compiled-binaries-https-download" tabindex="-1"><a class="header-anchor" href="#pre-compiled-binaries-https-download" aria-hidden="true">#</a> Pre-Compiled Binaries (HTTPS download)</h2>
<p><RouterLink to="/install/DOWNLOAD.html"><img src="https://raw.githubusercontent.com/lmorg/murex/master/version.svg" alt="Version" loading="lazy"></RouterLink><br>
<RouterLink to="/install/DOWNLOAD.html"><img src="https://codebuild.eu-west-1.amazonaws.com/badges?uuid=eyJlbmNyeXB0ZWREYXRhIjoib3cxVnoyZUtBZU5wN1VUYUtKQTJUVmtmMHBJcUJXSUFWMXEyc2d3WWJldUdPTHh4QWQ1eFNRendpOUJHVnZ5UXBpMXpFVkVSb3k2UUhKL2xCY2JhVnhJPSIsIml2UGFyYW1ldGVyU3BlYyI6Im9QZ2dPS3ozdWFyWHIvbm8iLCJtYXRlcmlhbFNldFNlcmlhbCI6MX0%3D&amp;branch=master" alt="CodeBuild" loading="lazy"></RouterLink></p>
<p>If you wish to download a pre-compiled binary then head to the <RouterLink to="/install/DOWNLOAD.html">DOWNLOAD</RouterLink><br>
page to select your platform.</p>
<h2 id="installing-from-a-package-manager" tabindex="-1"><a class="header-anchor" href="#installing-from-a-package-manager" aria-hidden="true">#</a> Installing From A Package Manager</h2>
<p><a href="https://repology.org/project/murex/versions" target="_blank" rel="noopener noreferrer"><img src="https://repology.org/badge/vertical-allrepos/murex.svg" alt="Packaging status" loading="lazy"><ExternalLinkIcon/></a></p>
<h3 id="archlinux" tabindex="-1"><a class="header-anchor" href="#archlinux" aria-hidden="true">#</a> ArchLinux</h3>
<p>Available as an AUR package:</p>
<ul>
<li>
<p>PKGBUILD file:<br>
<a href="https://aur.archlinux.org/cgit/aur.git/plain/PKGBUILD?h=murex" target="_blank" rel="noopener noreferrer">https://aur.archlinux.org/cgit/aur.git/plain/PKGBUILD?h=murex<ExternalLinkIcon/></a></p>
</li>
<li>
<p>AUR package repository:<br>
<a href="https://aur.archlinux.org/packages/murex" target="_blank" rel="noopener noreferrer">https://aur.archlinux.org/packages/murex<ExternalLinkIcon/></a></p>
</li>
</ul>
<h3 id="homebrew" tabindex="-1"><a class="header-anchor" href="#homebrew" aria-hidden="true">#</a> Homebrew</h3>
<pre><code>brew install murex
</code></pre>
<h3 id="macports" tabindex="-1"><a class="header-anchor" href="#macports" aria-hidden="true">#</a> MacPorts</h3>
<pre><code>sudo port install murex
</code></pre>
<h2 id="compiling-from-source" tabindex="-1"><a class="header-anchor" href="#compiling-from-source" aria-hidden="true">#</a> Compiling From Source</h2>
<p><a href="https://circleci.com/gh/lmorg/murex/tree/master" target="_blank" rel="noopener noreferrer"><img src="https://circleci.com/gh/lmorg/murex/tree/master.svg?style=svg" alt="CircleCI" loading="lazy"><ExternalLinkIcon/></a></p>
<p><strong>Prerequisites:</strong></p>
<p>You will need <code v-pre>go</code> (Golang) compiler, <code v-pre>gcc</code> (C compiler) and <code v-pre>git</code> installed<br>
as well as your <code v-pre>$GOPATH</code> environmental variable set.</p>
<blockquote>
<p>Go 1.18 or higher is required.</p>
</blockquote>
<p>These should be easy to install on most operating systems however Windows is a<br>
lot more tricky with regards to <code v-pre>gcc</code>. Please check with your operating systems<br>
package manager first but see further reading below if you get stuck.</p>
<p><strong>Further Reading:</strong></p>
<ul>
<li><a href="https://golang.org/doc/install" target="_blank" rel="noopener noreferrer">How to install Go<ExternalLinkIcon/></a></li>
<li><a href="https://github.com/git-guides/install-git" target="_blank" rel="noopener noreferrer">How to install git<ExternalLinkIcon/></a></li>
<li><a href="https://gcc.gnu.org/install/" target="_blank" rel="noopener noreferrer">How to install gcc<ExternalLinkIcon/></a></li>
<li><a href="https://github.com/golang/go/wiki/SettingGOPATH" target="_blank" rel="noopener noreferrer">How to set GOPATH<ExternalLinkIcon/></a></li>
</ul>
<h3 id="installation-from-source-steps" tabindex="-1"><a class="header-anchor" href="#installation-from-source-steps" aria-hidden="true">#</a> Installation From Source Steps</h3>
<p>The following instructions are assuming you're compiling on a POSIX-compatible<br>
system like Linux, BSD or macOS. Compiling from source is untested on Plan 9<br>
(if you run into issues there then please use the pre-compiled binary for that<br>
platform) and Windows. In the case of Windows you may run into issues with the<br>
<code v-pre>gcc</code> installation and some of the commands below will need to be adapted (eg<br>
<code v-pre>murex.exe</code> used instead of <code v-pre>./murex</code>).</p>
<blockquote>
<p>Compiling from source is not recommended unless you already have a strong<br>
understanding of compiling Go projects for your specific platform.</p>
</blockquote>
<p><strong>Importing the source code:</strong></p>
<p>At present, Murex depends on being in a specific directory hierarchy for<br>
the tests to work and packages to import correctly. These instructions will<br>
talk you through creating that initial structure ready to import the source<br>
into. Experienced users in Go may opt to ignore some of these steps and run<br>
<code v-pre>go get -u github.com/lmorg/murex</code> instead. While this <em>should</em> work in most<br>
cases, it is difficult to run automated tests to ensure any updates doesn't<br>
break the <code v-pre>go get</code> import tool. And thus that approach is not officially<br>
supported. If you are in any doubt, please follow the <code v-pre>git clone</code> process<br>
below.</p>
<p>First create the directory path and clone the source into the appropriate<br>
directory structure.</p>
<pre><code>mkdir -p $GOPATH/src/github.com/lmorg/murex
cd $GOPATH/src/github.com/lmorg/murex
git clone https://github.com/lmorg/murex .
</code></pre>
<p>At this point you can add and remove any optional builtins by following the<br>
instructions on this located further down this document. This is entirely<br>
optional as Murex attempts to ship with sane defaults.</p>
<p><strong>Compile the code:</strong></p>
<pre><code>go build github.com/lmorg/murex
</code></pre>
<p><strong>Test the executable (optional stage):</strong></p>
<pre><code>./murex -c 'g: behavioural/*.mx -&gt; foreach: f { source $f }; try {test: run *}'
</code></pre>
<p><strong>Start the shell:</strong></p>
<pre><code>./murex
</code></pre>
<h2 id="including-optional-builtins" tabindex="-1"><a class="header-anchor" href="#including-optional-builtins" aria-hidden="true">#</a> Including Optional Builtins</h2>
<p>Some optional builtins will be included by default, however there may be others<br>
you wish to include which are not part of the default build (such as <code v-pre>qr</code>). To<br>
add them, copy (or symlink) the applicable include file from<br>
<code v-pre>builtins/import_src</code> to <code v-pre>builtins/import_build</code>.</p>
<p>A tool will be introduced in a later version to automate this.</p>
<h2 id="external-dependencies-optional" tabindex="-1"><a class="header-anchor" href="#external-dependencies-optional" aria-hidden="true">#</a> External Dependencies (Optional)</h2>
<p>Some of Murex's extended features will have additional external dependencies.</p>
<ul>
<li><code v-pre>aspell</code>: This is used for spellchecking. Murex will automatically enable or<br>
disable spellchecking based on whether <code v-pre>aspell</code> can be found in your <code v-pre>$PATH</code>.<br>
<a href="http://aspell.net" target="_blank" rel="noopener noreferrer">http://aspell.net<ExternalLinkIcon/></a></li>
</ul>
<h2 id="recommended-terminal-typeface" tabindex="-1"><a class="header-anchor" href="#recommended-terminal-typeface" aria-hidden="true">#</a> Recommended Terminal Typeface</h2>
<p>This is obviously just a subjective matter and everyone will have their own<br>
personal preference. However if I was asked what my preference was then that<br>
would be <a href="https://github.com/i-tu/Hasklig" target="_blank" rel="noopener noreferrer">Hasklig<ExternalLinkIcon/></a>. It's a clean typeface<br>
based off Source Code Pro but with a few added ligatures - albeit subtle ones<br>
designed to make Haskell more readable. Those ligatures also suite Murex<br>
pretty well. So the overall experience is a clean and readable terminal.</p>
</div></template>


