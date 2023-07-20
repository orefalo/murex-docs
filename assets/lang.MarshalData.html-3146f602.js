import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as i,c as l,a,d as e,w as t,b as n,e as c}from"./app-66ffa3c3.js";const r={},u=c(`<h1 id="lang-marshaldata-system-api-api-reference" tabindex="-1"><a class="header-anchor" href="#lang-marshaldata-system-api-api-reference" aria-hidden="true">#</a> <code>lang.MarshalData()</code> (system API) - API Reference</h1><blockquote><p>Converts structured memory into a Murex data-type (eg for stdio)</p></blockquote><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>b<span class="token punctuation">,</span> err <span class="token operator">:=</span> lang<span class="token punctuation">.</span><span class="token function">MarshalData</span><span class="token punctuation">(</span>p<span class="token punctuation">,</span> dataType<span class="token punctuation">,</span> data<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">exampleCommand</span><span class="token punctuation">(</span>p <span class="token operator">*</span>lang<span class="token punctuation">.</span>Process<span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
    data <span class="token operator">:=</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;foo&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;hello foo&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;bar&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;hello bar&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>

    dataType <span class="token operator">:=</span> <span class="token string">&quot;json&quot;</span>

    b<span class="token punctuation">,</span> err <span class="token operator">:=</span> lang<span class="token punctuation">.</span><span class="token function">MarshalData</span><span class="token punctuation">(</span>p<span class="token punctuation">,</span> dataType<span class="token punctuation">,</span> data<span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> err
    <span class="token punctuation">}</span>

    <span class="token boolean">_</span><span class="token punctuation">,</span> err <span class="token operator">:=</span> p<span class="token punctuation">.</span>Stdout<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
    <span class="token keyword">return</span> err
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="detail" tabindex="-1"><a class="header-anchor" href="#detail" aria-hidden="true">#</a> Detail</h2><p>Go source file:</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> lang

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;errors&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">// MarshalData is a global marshaller which should be called from within murex</span>
<span class="token comment">// builtin commands (etc).</span>
<span class="token comment">// See docs/apis/marshaldata.md for more details</span>
<span class="token keyword">func</span> <span class="token function">MarshalData</span><span class="token punctuation">(</span>p <span class="token operator">*</span>Process<span class="token punctuation">,</span> dataType <span class="token builtin">string</span><span class="token punctuation">,</span> data <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>b <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// This is one of the very few maps in Murex which isn&#39;t hidden behind a sync</span>
	<span class="token comment">// lock of one description or other. The rational is that even mutexes can</span>
	<span class="token comment">// add a noticeable overhead on the performance of tight loops and I expect</span>
	<span class="token comment">// this function to be called _a lot_ while also only needing to be written</span>
	<span class="token comment">// to via code residing in within builtin types init() function (ie while</span>
	<span class="token comment">// murex is effectively single threaded). So there shouldn&#39;t be any data-</span>
	<span class="token comment">// races -- PROVIDING developers strictly follow the pattern of only writing</span>
	<span class="token comment">// to this map within init() func&#39;s.</span>
	<span class="token keyword">if</span> Marshallers<span class="token punctuation">[</span>dataType<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">&quot;I don&#39;t know how to marshal \`&quot;</span> <span class="token operator">+</span> dataType <span class="token operator">+</span> <span class="token string">&quot;\`.&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	b<span class="token punctuation">,</span> err <span class="token operator">=</span> Marshallers<span class="token punctuation">[</span>dataType<span class="token punctuation">]</span><span class="token punctuation">(</span>p<span class="token punctuation">,</span> data<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">&quot;[&quot;</span> <span class="token operator">+</span> dataType <span class="token operator">+</span> <span class="token string">&quot; marshaller] &quot;</span> <span class="token operator">+</span> err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ol><li><code>*lang.Process</code>: Process&#39;s runtime state. Typically expressed as the variable <code>p</code></li><li><code>string</code>: Murex data type</li><li><code>interface{}</code>: data you wish to marshal</li></ol><h2 id="see-also" tabindex="-1"><a class="header-anchor" href="#see-also" aria-hidden="true">#</a> See Also</h2>`,13),d=a("code",null,"Marshal()",-1),k=a("code",null,"Unmarshal()",-1),m=a("code",null,"lang.UnmarshalData()",-1);function v(h,b){const s=p("RouterLink");return i(),l("div",null,[u,a("ul",null,[a("li",null,[e(s,{to:"/guide/apis/Marshal.html"},{default:t(()=>[n("apis/"),d,n(" (type)")]),_:1}),n(": Converts structured memory into a structured file format (eg for stdio)")]),a("li",null,[e(s,{to:"/guide/apis/Unmarshal.html"},{default:t(()=>[n("apis/"),k,n(" (type)")]),_:1}),n(": Converts a structured file format into structured memory")]),a("li",null,[e(s,{to:"/guide/apis/lang.UnmarshalData.html"},{default:t(()=>[n("apis/"),m,n(" (system API)")]),_:1}),n(": Converts a Murex data-type into structured memory")])])])}const y=o(r,[["render",v],["__file","lang.MarshalData.html.vue"]]);export{y as default};