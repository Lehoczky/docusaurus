"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["14096"],{30737:function(e,n,s){s.r(n),s.d(n,{metadata:()=>i,contentTitle:()=>c,default:()=>p,assets:()=>d,toc:()=>u,frontMatter:()=>l});var i=JSON.parse('{"id":"guides/docs/multi-instance","title":"Docs Multi-instance","description":"Use multiple docs plugin instances on a single Docusaurus site.","source":"@site/docs/guides/docs/docs-multi-instance.mdx","sourceDirName":"guides/docs","slug":"/docs-multi-instance","permalink":"/docs/docs-multi-instance","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/guides/docs/docs-multi-instance.mdx","tags":[],"version":"current","lastUpdatedBy":"Zed Spencer-Milnes","lastUpdatedAt":1735299145000,"frontMatter":{"id":"multi-instance","description":"Use multiple docs plugin instances on a single Docusaurus site.","slug":"/docs-multi-instance"},"sidebar":"docs","previous":{"title":"Versioning","permalink":"/docs/versioning"},"next":{"title":"Blog","permalink":"/docs/blog"}}'),t=s("85893"),r=s("80980"),o=s("46291"),a=s("67860");let l={id:"multi-instance",description:"Use multiple docs plugin instances on a single Docusaurus site.",slug:"/docs-multi-instance"},c="Docs Multi-instance",d={},u=[{value:"Use-cases",id:"use-cases",level:2},{value:"Mobile SDKs documentation",id:"mobile-sdks-documentation",level:3},{value:"Versioned and unversioned doc",id:"versioned-and-unversioned-doc",level:3},{value:"Setup",id:"setup",level:2},{value:"Versioned paths",id:"versioned-paths",level:2},{value:"Tagging new versions",id:"tagging-new-versions",level:2},{value:"Docs navbar items",id:"docs-navbar-items",level:2}];function h(e){let n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"docs-multi-instance",children:"Docs Multi-instance"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"@docusaurus/plugin-content-docs"})," plugin can support ",(0,t.jsx)(n.a,{href:"/docs/using-plugins#multi-instance-plugins-and-plugin-ids",children:"multi-instance"}),"."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["This feature is only useful for ",(0,t.jsx)(n.a,{href:"/docs/versioning",children:"versioned documentation"}),". It is recommended to be familiar with docs versioning before reading this page. If you just want ",(0,t.jsx)(n.a,{href:"/docs/sidebar/multiple-sidebars",children:"multiple sidebars"}),", you can do so within one plugin."]})}),"\n",(0,t.jsx)(n.h2,{id:"use-cases",children:"Use-cases"}),"\n",(0,t.jsx)(n.p,{children:"Sometimes you want a Docusaurus site to host 2 distinct sets of documentation (or more)."}),"\n",(0,t.jsx)(n.p,{children:"These documentations may even have different versioning/release lifecycles."}),"\n",(0,t.jsx)(n.h3,{id:"mobile-sdks-documentation",children:"Mobile SDKs documentation"}),"\n",(0,t.jsx)(n.p,{children:"If you build a cross-platform mobile SDK, you may have 2 documentations:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Android SDK documentation (",(0,t.jsx)(n.code,{children:"v1.0"}),", ",(0,t.jsx)(n.code,{children:"v1.1"}),")"]}),"\n",(0,t.jsxs)(n.li,{children:["iOS SDK documentation (",(0,t.jsx)(n.code,{children:"v1.0"}),", ",(0,t.jsx)(n.code,{children:"v2.0"}),")"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"In this case, you can use a distinct docs plugin instance per mobile SDK documentation."}),"\n",(0,t.jsxs)(n.admonition,{type:"warning",children:[(0,t.jsx)(n.p,{children:"If each documentation instance is very large, you should rather create 2 distinct Docusaurus sites."}),(0,t.jsx)(n.p,{children:"If someone edits the iOS documentation, is it really useful to rebuild everything, including the whole Android documentation that did not change?"})]}),"\n",(0,t.jsx)(n.h3,{id:"versioned-and-unversioned-doc",children:"Versioned and unversioned doc"}),"\n",(0,t.jsx)(n.p,{children:'Sometimes, you want some documents to be versioned, while other documents are more "global", and it feels useless to version them.'}),"\n",(0,t.jsx)(n.p,{children:"We use this pattern on the Docusaurus website itself:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.a,{href:"/docs",children:"/docs/*"})," section is versioned"]}),"\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.a,{href:"/community/support",children:"/community/*"})," section is unversioned"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,t.jsx)(n.p,{children:"Suppose you have 2 documentations:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Product: some versioned doc about your product"}),"\n",(0,t.jsx)(n.li,{children:"Community: some unversioned doc about the community around your product"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"In this case, you should use the same plugin twice in your site configuration."}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"@docusaurus/preset-classic"})," already includes a docs plugin instance for you!"]})}),"\n",(0,t.jsx)(n.p,{children:"When using the preset:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        docs: {\n          // highlight-start\n          // id: 'product', // omitted => default instance\n          // highlight-end\n          path: 'product',\n          routeBasePath: 'product',\n          sidebarPath: './sidebarsProduct.js',\n          // ... other options\n        },\n      },\n    ],\n  ],\n  plugins: [\n    [\n      '@docusaurus/plugin-content-docs',\n      {\n        // highlight-start\n        id: 'community',\n        // highlight-end\n        path: 'community',\n        routeBasePath: 'community',\n        sidebarPath: './sidebarsCommunity.js',\n        // ... other options\n      },\n    ],\n  ],\n};\n"})}),"\n",(0,t.jsx)(n.p,{children:"When not using the preset:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  plugins: [\n    [\n      '@docusaurus/plugin-content-docs',\n      {\n        // highlight-start\n        // id: 'product', // omitted => default instance\n        // highlight-end\n        path: 'product',\n        routeBasePath: 'product',\n        sidebarPath: './sidebarsProduct.js',\n        // ... other options\n      },\n    ],\n    [\n      '@docusaurus/plugin-content-docs',\n      {\n        // highlight-start\n        id: 'community',\n        // highlight-end\n        path: 'community',\n        routeBasePath: 'community',\n        sidebarPath: './sidebarsCommunity.js',\n        // ... other options\n      },\n    ],\n  ],\n};\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Don't forget to assign a unique ",(0,t.jsx)(n.code,{children:"id"})," attribute to plugin instances."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["We consider that the ",(0,t.jsx)(n.code,{children:"product"}),' instance is the most important one, and make it the "default" instance by not assigning any ID.']})}),"\n",(0,t.jsx)(n.h2,{id:"versioned-paths",children:"Versioned paths"}),"\n",(0,t.jsx)(n.p,{children:"Each plugin instance will store versioned docs in a distinct folder."}),"\n",(0,t.jsx)(n.p,{children:"The default plugin instance will use these paths:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"website/versions.json"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"website/versioned_docs"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"website/versioned_sidebars"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The other plugin instances (with an ",(0,t.jsx)(n.code,{children:"id"})," attribute) will use these paths:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"website/[pluginId]_versions.json"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"website/[pluginId]_versioned_docs"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"website/[pluginId]_versioned_sidebars"})}),"\n"]}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsxs)(n.p,{children:["You can omit the ",(0,t.jsx)(n.code,{children:"id"})," attribute (defaults to ",(0,t.jsx)(n.code,{children:"default"}),") for one of the docs plugin instances."]}),(0,t.jsx)(n.p,{children:"The instance paths will be simpler, and retro-compatible with a single-instance setup."})]}),"\n",(0,t.jsx)(n.h2,{id:"tagging-new-versions",children:"Tagging new versions"}),"\n",(0,t.jsx)(n.p,{children:"Each plugin instance will have its own CLI command to tag a new version. They will be displayed if you run:"}),"\n",(0,t.jsxs)(o.Z,{groupId:"npm2yarn",children:[(0,t.jsx)(a.Z,{value:"npm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm run docusaurus -- --help\n"})})}),(0,t.jsx)(a.Z,{value:"yarn",label:"Yarn",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yarn docusaurus --help\n"})})}),(0,t.jsx)(a.Z,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pnpm run docusaurus --help\n"})})})]}),"\n",(0,t.jsx)(n.p,{children:"To version the product/default docs plugin instance:"}),"\n",(0,t.jsxs)(o.Z,{groupId:"npm2yarn",children:[(0,t.jsx)(a.Z,{value:"npm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm run docusaurus docs:version 1.0.0\n"})})}),(0,t.jsx)(a.Z,{value:"yarn",label:"Yarn",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yarn docusaurus docs:version 1.0.0\n"})})}),(0,t.jsx)(a.Z,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pnpm run docusaurus docs:version 1.0.0\n"})})})]}),"\n",(0,t.jsx)(n.p,{children:"To version the non-default/community docs plugin instance:"}),"\n",(0,t.jsxs)(o.Z,{groupId:"npm2yarn",children:[(0,t.jsx)(a.Z,{value:"npm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm run docusaurus docs:version:community 1.0.0\n"})})}),(0,t.jsx)(a.Z,{value:"yarn",label:"Yarn",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yarn docusaurus docs:version:community 1.0.0\n"})})}),(0,t.jsx)(a.Z,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pnpm run docusaurus docs:version:community 1.0.0\n"})})})]}),"\n",(0,t.jsx)(n.h2,{id:"docs-navbar-items",children:"Docs navbar items"}),"\n",(0,t.jsxs)(n.p,{children:["Each docs-related ",(0,t.jsx)(n.a,{href:"/docs/api/themes/configuration#navbar",children:"theme navbar items"})," take an optional ",(0,t.jsx)(n.code,{children:"docsPluginId"})," attribute."]}),"\n",(0,t.jsx)(n.p,{children:"For example, if you want to have one version dropdown for each mobile SDK (iOS and Android), you could do:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  themeConfig: {\n    navbar: {\n      items: [\n        {\n          type: 'docsVersionDropdown',\n          // highlight-start\n          docsPluginId: 'ios',\n          // highlight-end\n        },\n        {\n          type: 'docsVersionDropdown',\n          // highlight-start\n          docsPluginId: 'android',\n          // highlight-end\n        },\n      ],\n    },\n  },\n};\n"})})]})}function p(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},67860:function(e,n,s){s.d(n,{Z:()=>o});var i=s("85893");s("67294");var t=s("90496");let r="tabItem_pnkT";function o(e){let{children:n,hidden:s,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.Z)(r,o),hidden:s,children:n})}},46291:function(e,n,s){s.d(n,{Z:()=>b});var i=s("85893"),t=s("67294"),r=s("90496"),o=s("12451"),a=s("3620"),l=s("89637"),c=s("74417"),d=s("46918"),u=s("58247");function h(e){return t.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||t.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function p(e){let{value:n,tabValues:s}=e;return s.some(e=>e.value===n)}var m=s("8903");let g="tabList_Qoir",x="tabItem_AQgk";function j(e){let{className:n,block:s,selectedValue:t,selectValue:a,tabValues:l}=e,c=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),u=e=>{let n=e.currentTarget,s=l[c.indexOf(n)].value;s!==t&&(d(n),a(s))},h=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{let s=c.indexOf(e.currentTarget)+1;n=c[s]??c[0];break}case"ArrowLeft":{let s=c.indexOf(e.currentTarget)-1;n=c[s]??c[c.length-1]}}n?.focus()};return(0,i.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":s},n),children:l.map(e=>{let{value:n,label:s,attributes:o}=e;return(0,i.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>{c.push(e)},onKeyDown:h,onClick:u,...o,className:(0,r.Z)("tabs__item",x,o?.className,{"tabs__item--active":t===n}),children:s??n},n)})})}function f(e){let{lazy:n,children:s,selectedValue:o}=e,a=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){let e=a.find(e=>e.props.value===o);return e?(0,t.cloneElement)(e,{className:(0,r.Z)("margin-top--md",e.props.className)}):null}return(0,i.jsx)("div",{className:"margin-top--md",children:a.map((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==o}))})}function v(e){let n=function(e){let{defaultValue:n,queryString:s=!1,groupId:i}=e,r=function(e){let{values:n,children:s}=e;return(0,t.useMemo)(()=>{let e=n??h(s).map(e=>{let{props:{value:n,label:s,attributes:i,default:t}}=e;return{value:n,label:s,attributes:i,default:t}});return!function(e){let n=(0,d.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,s])}(e),[o,m]=(0,t.useState)(()=>(function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:s}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let i=s.find(e=>e.default)??s[0];if(!i)throw Error("Unexpected error: 0 tabValues");return i.value})({defaultValue:n,tabValues:r})),[g,x]=function(e){let{queryString:n=!1,groupId:s}=e,i=(0,a.k6)(),r=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s}),o=(0,c._X)(r);return[o,(0,t.useCallback)(e=>{if(!r)return;let n=new URLSearchParams(i.location.search);n.set(r,e),i.replace({...i.location,search:n.toString()})},[r,i])]}({queryString:s,groupId:i}),[j,f]=function(e){var n;let{groupId:s}=e;let i=(n=s)?`docusaurus.tab.${n}`:null,[r,o]=(0,u.Nk)(i);return[r,(0,t.useCallback)(e=>{if(!!i)o.set(e)},[i,o])]}({groupId:i}),v=(()=>{let e=g??j;return p({value:e,tabValues:r})?e:null})();return(0,l.Z)(()=>{v&&m(v)},[v]),{selectedValue:o,selectValue:(0,t.useCallback)(e=>{if(!p({value:e,tabValues:r}))throw Error(`Can't select invalid tab value=${e}`);m(e),x(e),f(e)},[x,f,r]),tabValues:r}}(e);return(0,i.jsxs)("div",{className:(0,r.Z)("tabs-container",g),children:[(0,i.jsx)(j,{...n,...e}),(0,i.jsx)(f,{...n,...e})]})}function b(e){let n=(0,m.Z)();return(0,i.jsx)(v,{...e,children:h(e.children)},String(n))}},80980:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return o}});var i=s(67294);let t={},r=i.createContext(t);function o(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);