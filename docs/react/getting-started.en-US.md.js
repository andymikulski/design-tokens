webpackJsonp([50,151],{1123:function(n,s){n.exports={content:["article",["p",["strong","Photon Ant"]," is a theme for the ",["a",{title:null,href:"https://ant.design/"},"Ant Design"]," UI library. By including the ",["code","photon-ant"]," package in your stylesheets, Photon's styles are injected directly into Ant's components!"],["h3","Installation"],["ul",["li",["p",["code","npm install photon-ant"]," or ",["code","yarn add photon-ant"]]]],["h3","Usage (LESS)"],["p","Including ",["code","photon-ant"]," through LESS allows access to theme variables. Example:"],["pre",{lang:"jsx",highlighted:'@<span class="token keyword">import</span> <span class="token string">\'~photon-ant\'</span><span class="token punctuation">;</span>\nbody <span class="token punctuation">{</span> background<span class="token punctuation">:</span> @blue<span class="token number">-50</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>'},["code","@import '~photon-ant';\nbody { background: @blue-50; }"]],["h3","Usage (JS)"],["p",["code","import 'photon-ant';"]],["h3","Usage (create-react-app)"],["ul",["li",["p",["a",{title:null,href:"https://github.com/timarney/react-app-rewired"},"Rewire your CRA"]]],["li",["p","Install ",["a",{title:null,href:"https://npm.taobao.org/package/react-app-rewire-less"},"react-app-rewire-less"]," through npm/yarn"]],["li",["p","Set up ",["code","config-overrides.js"],":"]]],["pre",{lang:"jsx",highlighted:'<span class="token comment" spellcheck="true">// config-overrides.js</span>\n<span class="token keyword">const</span> <span class="token punctuation">{</span>injectBabelPlugin<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'react-app-rewired\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> rewireLess <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'react-app-rewire-less\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">override</span><span class="token punctuation">(</span>config<span class="token punctuation">,</span> env<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  config <span class="token operator">=</span> <span class="token function">injectBabelPlugin</span><span class="token punctuation">(</span>\n    <span class="token comment" spellcheck="true">// https://ant.design/docs/react/use-with-create-react-app#Use-babel-plugin-import</span>\n    <span class="token punctuation">[</span><span class="token string">\'import\'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>libraryName<span class="token punctuation">:</span> <span class="token string">\'antd\'</span><span class="token punctuation">,</span> style<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    config<span class="token punctuation">,</span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token comment" spellcheck="true">// The following enables LESS compilation through less-loader.</span>\n  config <span class="token operator">=</span> <span class="token function">rewireLess</span><span class="token punctuation">(</span>config<span class="token punctuation">,</span> env<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">return</span> config<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>'},["code","// config-overrides.js\nconst {injectBabelPlugin} = require('react-app-rewired');\nconst rewireLess = require('react-app-rewire-less');\n\nmodule.exports = function override(config, env) {\n  config = injectBabelPlugin(\n    // https://ant.design/docs/react/use-with-create-react-app#Use-babel-plugin-import\n    ['import', {libraryName: 'antd', style: true}],\n    config,\n  );\n\n  // The following enables LESS compilation through less-loader.\n  config = rewireLess(config, env);\n\n  return config;\n};"]],["ul",["li",["p","Include ",["code","photon-ant"]," somewhere:"]]],["pre",{lang:"jsx",highlighted:'<span class="token comment" spellcheck="true">// App.js</span>\n<span class="token keyword">import</span> <span class="token string">\'photon-ant\'</span><span class="token punctuation">;</span>'},["code","// App.js\nimport 'photon-ant';"]]],meta:{order:0,title:"Getting Started",filename:"docs/react/getting-started.en-US.md"},toc:["ul"]}}});