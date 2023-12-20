"use strict";(self.webpackChunkopendal_website=self.webpackChunkopendal_website||[]).push([[7254],{9613:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var r=a(9496);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),o=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=o(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=o(a),m=n,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||l;return a?r.createElement(f,i(i({ref:t},u),{},{components:a})):r.createElement(f,i({ref:t},u))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:n,i[1]=s;for(var o=2;o<l;o++)i[o]=a[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5810:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(9496),n=a(5924);const l={tabItem:"tabItem_mw14"};function i(e){let{children:t,hidden:a,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l.tabItem,i),hidden:a},t)}},8750:(e,t,a)=>{a.d(t,{Z:()=>N});var r=a(8126),n=a(9496),l=a(5924),i=a(3053),s=a(3442),c=a(9356),o=a(4634),u=a(6038);function p(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function d(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,o.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const r=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,c._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,l=d(e),[i,s]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[c,o]=f({queryString:a,groupId:r}),[p,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,u.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),k=(()=>{const e=c??p;return m({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{k&&s(k)}),[k]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),o(e),b(e)}),[o,b,l]),tabValues:l}}var k=a(5667);const v={tabList:"tabList_r_eZ",tabItem:"tabItem_ZrSx"};function h(e){let{className:t,block:a,selectedValue:s,selectValue:c,tabValues:o}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=e=>{const t=e.currentTarget,a=u.indexOf(t),r=o[a].value;r!==s&&(p(t),c(r))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},o.map((e=>{let{value:t,label:a,attributes:i}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},i,{className:(0,l.Z)("tabs__item",v.tabItem,i?.className,{"tabs__item--active":s===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:r}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function g(e){const t=b(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",v.tabList)},n.createElement(h,(0,r.Z)({},e,t)),n.createElement(y,(0,r.Z)({},e,t)))}function N(e){const t=(0,k.Z)();return n.createElement(g,(0,r.Z)({key:String(t)},e))}},8854:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>v,frontMatter:()=>u,metadata:()=>d,toc:()=>f});var r=a(8126),n=(a(9496),a(9613));const l={toc:[{value:"Capabilities",id:"capabilities",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Example",id:"example",level:2},{value:"Via Builder",id:"via-builder",level:3}]},i="wrapper";function s(e){let{components:t,...a}=e;return(0,n.kt)(i,(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"capabilities"},"Capabilities"),(0,n.kt)("p",null,"This service can be used to:"),(0,n.kt)("ul",{className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","stat"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","read"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","write"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","create_dir"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","delete"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,n.kt)("del",{parentName:"li"},"copy")),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,n.kt)("del",{parentName:"li"},"rename")),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,n.kt)("del",{parentName:"li"},"list")),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,n.kt)("del",{parentName:"li"},"scan")),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,n.kt)("del",{parentName:"li"},"presign")),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","blocking")),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"access_token"),": set the access_token for Rest API")),(0,n.kt)("p",null,"You can refer to ","[",(0,n.kt)("inlineCode",{parentName:"p"},"VercelArtifactsBuilder"),"]","'s docs for more information"),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("h3",{id:"via-builder"},"Via Builder"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-no_run"},'use anyhow::Result;\nuse opendal::services::VercelArtifacts;\nuse opendal::Operator;\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    // create backend builder\n    let mut builder = VercelArtifacts::default();\n\n    builder.access_token("xxx");\n\n    let op: Operator = Operator::new(builder)?.finish();\n    Ok(())\n}\n')))}s.isMDXComponent=!0;var c=a(8750),o=a(5810);const u={title:"Vercel Artifacts"},p=void 0,d={unversionedId:"services/vercel_artifacts",id:"services/vercel_artifacts",title:"Vercel Artifacts",description:"Vercel Cache service support.",source:"@site/docs/services/vercel_artifacts.mdx",sourceDirName:"services",slug:"/services/vercel_artifacts",permalink:"/docs/services/vercel_artifacts",draft:!1,editUrl:"https://github.com/apache/incubator-opendal/tree/main/website/docs/services/vercel_artifacts.mdx",tags:[],version:"current",lastUpdatedBy:"Xuanwo",lastUpdatedAt:1703050364,formattedLastUpdatedAt:"Dec 20, 2023",frontMatter:{title:"Vercel Artifacts"},sidebar:"docs",previous:{title:"TiKV",permalink:"/docs/services/tikv"},next:{title:"WebDAV",permalink:"/docs/services/webdav"}},m={},f=[{value:"Via Config",id:"via-config",level:3}],b={toc:f},k="wrapper";function v(e){let{components:t,...a}=e;return(0,n.kt)(k,(0,r.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://vercel.com/docs/concepts/monorepos/remote-caching"},"Vercel Cache")," service support."),(0,n.kt)(s,{components:a.components,mdxType:"Docs"}),(0,n.kt)("h3",{id:"via-config"},"Via Config"),(0,n.kt)(c.Z,{mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"rust",label:"Rust",default:!0,mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},'use anyhow::Result;\nuse opendal::Operator;\nuse opendal::Scheme;\nuse std::collections::HashMap;\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    let mut map = HashMap::new();\n    map.insert("access_token".to_string(), "your_access_token".to_string());\n\n    let op: Operator = Operator::via_map(Scheme::VercelArtifacts, map)?;\n    Ok(())\n}\n'))),(0,n.kt)(o.Z,{value:"node.js",label:"Node.js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'import { Operator } from "opendal";\n\nasync function main() {\n  const op = new Operator("vercel_artifacts", {\n    access_token: "your_access_token",\n  });\n}\n'))),(0,n.kt)(o.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'import opendal\n\nop = opendal.Operator("vercel_artifacts",\n    access_token="your_access_token",\n)\n')))))}v.isMDXComponent=!0}}]);