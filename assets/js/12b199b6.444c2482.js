(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[4871],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),m=a,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},615:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),i={title:"What is Generalized Metadata Service (GMS)?",hide_title:!0,slug:"/what/gms",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docs/what/gms.md"},s={unversionedId:"docs/what/gms",id:"docs/what/gms",isDocsHomePage:!1,title:"What is Generalized Metadata Service (GMS)?",description:"Metadata for entities onboarded to GMA is served through microservices known as Generalized Metadata Service (GMS). GMS typically provides a Rest.li API and must access the metadata using GMA DAOs.",source:"@site/genDocs/docs/what/gms.md",sourceDirName:"docs/what",slug:"/what/gms",permalink:"/docs/what/gms",editUrl:"https://github.com/linkedin/datahub/blob/master/docs/what/gms.md",version:"current",frontMatter:{title:"What is Generalized Metadata Service (GMS)?",hide_title:!0,slug:"/what/gms",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docs/what/gms.md"}},c=[],l={toc:c};function u(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Metadata for ",(0,o.kt)("a",{parentName:"p",href:"/docs/what/entity"},"entities")," ",(0,o.kt)("a",{parentName:"p",href:"/docs/how/entity-onboarding"},"onboarded")," to ",(0,o.kt)("a",{parentName:"p",href:"/docs/what/gma"},"GMA")," is served through microservices known as Generalized Metadata Service (GMS). GMS typically provides a ",(0,o.kt)("a",{parentName:"p",href:"http://rest.li"},"Rest.li")," API and must access the metadata using ",(0,o.kt)("a",{parentName:"p",href:"/docs/architecture/metadata-serving"},"GMA DAOs"),". "),(0,o.kt)("p",null,"While a GMS is completely free to define its public APIs, we do provide a list of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub-gma/tree/master/restli-resources/src/main/java/com/linkedin/metadata/restli"},"resource base classes")," to leverage for common patterns."),(0,o.kt)("p",null,"GMA is designed to support a distributed fleet of GMS, each serving a subset of the ",(0,o.kt)("a",{parentName:"p",href:"/docs/what/graph"},"GMA graph"),". However, for simplicity we include a single centralized GMS (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/gms"},"datahub-gms"),") that serves all entities."))}u.isMDXComponent=!0}}]);