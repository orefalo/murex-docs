import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as r,c as d,d as e,b as a,w as i,e as o,f as l}from"./app-32a3d18c.js";const h={},c=l(`<h1 id="reading-lists-from-the-command-line-blog" tabindex="-1"><a class="header-anchor" href="#reading-lists-from-the-command-line-blog" aria-hidden="true">#</a> Reading Lists From The Command Line - Blog</h1><blockquote><p>How hard can it be to read a list of data from the command line? If your list is line delimited then it should be easy. However what if your list is a JSON array? This post will explore how to work with lists in a different command line environments.</p></blockquote><h2 id="preface" tabindex="-1"><a class="header-anchor" href="#preface" aria-hidden="true">#</a> Preface</h2><p>A common problem we resort to shell scripting for is iterating through lists. This was easy in the days of old when most data was <code>\\n</code> (new line) delimited but these days structured data is common place with formats like JSON, YAML, TOML, XML and even S-Expressions appearing commonly throughout developer and DevOps tooling.</p><p>So lets explore a few techniques for iterating through lists.</p><h2 id="reading-lines-in-bash-and-similar-shells" tabindex="-1"><a class="header-anchor" href="#reading-lines-in-bash-and-similar-shells" aria-hidden="true">#</a> Reading lines in Bash and similar shells</h2><p>Bash shell is a popular command-line interface for Unix and Linux operating systems. One of its many useful features is the ability to read files line by line. This can be helpful for processing large files or performing repetitive tasks on a file&#39;s contents. The most basic way to read a file line by line is to use a while loop with the <code>read</code> command:</p><pre><code>while read line; do
    echo $line
done &lt; file.txt
</code></pre><p>In this example, the <code>while</code> loop reads each line of the <code>file.txt</code> file and stores it in the <code>$line</code> variable. The <code>echo</code> command then prints the contents of the <code>$line</code> variable to the console. The <code>&lt;</code> symbol tells Bash to redirect the contents of the file into the loop.</p><p>The <code>read</code> command is what actually reads each line of the file. By default, it reads one line at a time and stores it in the variable specified. You can also use the <code>-r</code> option with the <code>read</code> command to disable backslash interpretation, which can be useful when dealing with files that contain backslashes.</p><p>Another useful feature of Bash is the ability to perform operations on each line of a file before processing it. For example, you can use <code>sed</code> to replace text within each line of a file:</p><pre><code>while read line; do
    new_line=$(echo $line | sed &#39;s/foo/bar/g&#39;)
    echo $new_line
done &lt; file.txt
</code></pre><p>In this example, <code>sed</code> replaces all instances of &quot;foo&quot; with &quot;bar&quot; in each line of the file. The modified line is then stored in the <code>$new_line</code> variable and printed to the console.</p><p>Of course you could just run</p><pre><code>sed &#39;s/foo/bar/g&#39; file.txt
</code></pre><p>...but the reasons for the for this contrived example will follow.</p><h2 id="but-what-if-my-files-aren-t-line-delimited" tabindex="-1"><a class="header-anchor" href="#but-what-if-my-files-aren-t-line-delimited" aria-hidden="true">#</a> But what if my files aren&#39;t line delimited?</h2><p>The problem with Bash, and all traditional Linux or UNIX shells, is that they operate on byte streams. To be fair, this isn&#39;t so much a fault of Bash <em>per se</em> but more a result of the design of UNIX where (almost) everything is a file, including pipes. This means everything is treated as bytes. Unlike, for example, Powershell which passes .NET objects around. Byte streams make complete sense when you&#39;re working on &#39;70s or &#39;80s mainframes but it is a little less productive in the modern world of structured formats like JSON.</p><p>So how do you read lists from objects in, for example, JSON? In Bash, this isn&#39;t so easy. You need to rely on third party tools like <code>jq</code>. However you do have the benefit of compatibility with all of the older core utilities, like <code>sed</code>, that have become muscle memory by now. This does also come with its own drawbacks as well, which I&#39;ll explore in the following section.</p><h2 id="iteration-in-bash-via-jq" tabindex="-1"><a class="header-anchor" href="#iteration-in-bash-via-jq" aria-hidden="true">#</a> Iteration in Bash via <code>jq</code></h2><p><code>jq</code> is a fantastic tool that has become a staple of many a CI/CD pipeline however it is not part of most operating systems base platform, so it would need to be installed separately. This also creates additional complications whereby you end up having a language within a language -- like running <code>awk</code> or <code>sed</code> inside Bash, you&#39;re now introducing <code>jq</code> too. Thus its syntax isn&#39;t always the easiest to grok when delving deep into nested JSON with conditionals and such like compared with shells that offer first party tools for working with objects. We can delve deeper into the power of <code>jq</code> in another article but for now we are going to keep things intentionally simple:</p><p>Lets create a JSON array:</p><pre><code>json=&#39;[&quot;Monday&quot;,&quot;Tuesday&quot;,&quot;Wednesday&quot;,&quot;Thursday&quot;,&quot;Friday&quot;,&quot;Saturday&quot;,&quot;Sunday&quot;]&#39;
</code></pre><p>Straight away you should be able to see that Bash, with its reliance on whitespace delimitations, couldn&#39;t natively parse this. So now lets run it through <code>jq</code>:</p><pre><code>$ echo $json | jq -r &#39;.[]&#39; | while read -r day do; echo &quot;Happy $day&quot;; done
Happy Monday
Happy Tuesday
Happy Wednesday
Happy Thursday
Happy Friday
Happy Saturday
Happy Sunday
</code></pre><p>What&#39;s happening here is the <code>jq</code> tool is converting our JSON array into a <code>\\n</code> delimited list. And from there, we can use <code>while</code> and <code>read</code> just like we did in our first example at the start of this article.</p><p>The <code>-r</code> flag tells <code>jq</code> to strip quotation marks around the values. Without <code>-r</code> you&#39;d see <code>Happy &quot;Monday&quot;&#39;</code> and so on and so forth.</p><p><code>.[]</code> is <code>jq</code> syntax for &quot;all elements (<code>[]</code>) in the root object space (<code>.</code>).</p><h2 id="iteration-in-murex-via-foreach" tabindex="-1"><a class="header-anchor" href="#iteration-in-murex-via-foreach" aria-hidden="true">#</a> Iteration in Murex via <code>foreach</code></h2><p>Murex doesn&#39;t just treat files as byte streams, it passes type annotations too. And it uses those annotations to dynamically alter how to read files. The following examples will also use JSON as the input format, however Murex natively supports other structured data formats too, like YAML, CSV and S-Expressions.</p><p>Lets use the same JSON array as we did earlier, except use one of Murex&#39;s features to generate arrays programmatically:</p><pre><code>» %[Monday..Sunday]
[
    &quot;Monday&quot;,
    &quot;Tuesday&quot;,
    &quot;Wednesday&quot;,
    &quot;Thursday&quot;,
    &quot;Friday&quot;,
    &quot;Saturday&quot;,
    &quot;Sunday&quot;
]
</code></pre><p>The <code>jq</code> example rewritten in Murex would look like the following:</p><pre><code>%[Monday..Sunday] | foreach day { out &quot;Happy $day&quot; }
</code></pre><p>What&#39;s happening here is <code>%[...]</code> creates the JSON array (as described above) and then the <code>foreach</code> builtin iterates through the array and assigns that element to a variable named <code>day</code>.</p><blockquote><p><code>out</code> in Murex is the equivalent of <code>echo</code> in Bash. In fact you can still use <code>echo</code> in Murex albeit that is just aliased to <code>out</code>.</p></blockquote><p>It is also worth noting that since Murex version 3.1 lambdas have been available, allowing you to write code that looks a like this:</p><pre><code>$json[{out &quot;Hello $.&quot;}]
</code></pre><p>But more on that in a different article.</p><h2 id="reading-json-arrays-in-powershell" tabindex="-1"><a class="header-anchor" href="#reading-json-arrays-in-powershell" aria-hidden="true">#</a> Reading JSON arrays in PowerShell</h2><p>Microsoft PowerShell is a typed shell, like Murex, which was originally built for Windows but has since been ported to macOS and Linux too. Where PowerShell differs is that rather than using byte streams with type annotations, PowerShell passes .NET objects. Thus you&#39;ll see a little more boilerplate code in PowerShell where you need to explicitly convert types -- whereas Murex can get away with implicit definitions.</p><pre><code>$jsonString = &#39;[&quot;Monday&quot;,&quot;Tuesday&quot;,&quot;Wednesday&quot;,&quot;Thursday&quot;,&quot;Friday&quot;,&quot;Saturday&quot;,&quot;Sunday&quot;]&#39;
$jsonObject = ConvertFrom-Json $jsonString
foreach ($day in $jsonObject) { Write-Host &quot;Hello $day&quot; }
</code></pre><p>The first line is just creating a JSON string and allocating that to <code>$jsonString</code>. We can largely ignore that as it is the same as we&#39;ve seen in Bash already. The second line is more interesting as that is where the type conversion happens. <code>ConvertFrom-Json</code> does exactly as it describes -- PowerShell is generally pretty good at having descriptive names for commands,</p><p>From there on it looks relatively similar to Murex syntax: <code>foreach</code> being the statement name, followed by the variable name.</p><h2 id="conclusion" tabindex="-1"><a class="header-anchor" href="#conclusion" aria-hidden="true">#</a> Conclusion</h2><p>Iterating over a JSON array from the command line can be done in various ways using different shells. PowerShell, <code>jq</code>, and Murex offer their unique approaches and syntaxes, making it easy to work with JSON data in different environments. Whether you&#39;re a Windows user who prefers PowerShell or a Linux user who prefers Bash or Murex, there are many options available to suit your needs. Regardless of the shell you choose, mastering the art of iterating over JSON arrays can greatly enhance your command-line skills and help you work more efficiently with JSON data.</p><hr><p>Published: 22.04.2023 at 11:43</p><h2 id="see-also" tabindex="-1"><a class="header-anchor" href="#see-also" aria-hidden="true">#</a> See Also</h2>`,49),u=e("code",null,"%[]",-1),p=e("code",null,"a",-1),f=e("code",null,"cast",-1),m=e("code",null,"foreach",-1),y=e("code",null,"formap",-1);function w(b,g){const t=s("RouterLink");return r(),d("div",null,[c,e("ul",null,[e("li",null,[a(t,{to:"/parser/create-array.html"},{default:i(()=>[o("Create array ("),u,o(") constructor")]),_:1}),o(": Quickly generate arrays")]),e("li",null,[a(t,{to:"/commands/a.html"},{default:i(()=>[p,o(" (mkarray)")]),_:1}),o(": A sophisticated yet simple way to build an array or list")]),e("li",null,[a(t,{to:"/commands/cast.html"},{default:i(()=>[f]),_:1}),o(": Alters the data type of the previous function without altering it's output")]),e("li",null,[a(t,{to:"/commands/foreach.html"},{default:i(()=>[m]),_:1}),o(": Iterate through an array")]),e("li",null,[a(t,{to:"/commands/formap.html"},{default:i(()=>[y]),_:1}),o(": Iterate through a map or other collection of data")])])])}const v=n(h,[["render",w],["__file","reading_lists.html.vue"]]);export{v as default};