"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[9594],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),d=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=d(e.components);return r.createElement(l.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(t),u=o,f=c["".concat(l,".").concat(u)]||c[u]||m[u]||i;return t?r.createElement(f,a(a({ref:n},p),{},{components:t})):r.createElement(f,a({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[c]="string"==typeof e?e:o,a[1]=s;for(var d=2;d<i;d++)a[d]=t[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9715:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=t(7462),o=(t(7294),t(3905));const i={},a="Component versioning",s={unversionedId:"docs/explanations/versioning",id:"docs/explanations/versioning",title:"Component versioning",description:"SuperDuperDB has a component versioning system. This versioning system applies to subclasses of",source:"@site/content/docs/explanations/versioning.md",sourceDirName:"docs/explanations",slug:"/docs/explanations/versioning",permalink:"/docs/docs/explanations/versioning",draft:!1,editUrl:"https://github.com/SuperDuperDB/superduperdb/content/docs/explanations/versioning.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Serialization",permalink:"/docs/docs/explanations/serialization"},next:{title:"Cluster",permalink:"/docs/category/cluster"}},l={},d=[],p={toc:d},c="wrapper";function m(e){let{components:n,...t}=e;return(0,o.kt)(c,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"component-versioning"},"Component versioning"),(0,o.kt)("p",null,"SuperDuperDB has a component versioning system. This versioning system applies to subclasses of\n",(0,o.kt)("inlineCode",{parentName:"p"},"Component"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/docs/usage/models"},"models")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/docs/usage/encoders"},"encoders")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/docs/usage/models#daemonizing-models-with-listeners"},"listeners")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/docs/usage/vector_index"},"vector-indexes"))),(0,o.kt)("p",null,"Here's how it works:"),(0,o.kt)("p",null,"When users create a component, they are required to choose an ",(0,o.kt)("inlineCode",{parentName:"p"},"identifier"),".\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"identifier")," must be unique for each of the distinct classes above."),(0,o.kt)("p",null,"After the ",(0,o.kt)("inlineCode",{parentName:"p"},"identifier")," has been chosen, SuperDuperDB creates a version\nstarting at 0, and incremented each time an item with ",(0,o.kt)("inlineCode",{parentName:"p"},"identifier")," is recreated. "),(0,o.kt)("p",null,"For example the following would create two versions of a ",(0,o.kt)("inlineCode",{parentName:"p"},"Model"),", identified by ",(0,o.kt)("inlineCode",{parentName:"p"},'"test-model"'),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},">>> db.add(Model(identifier='test-model', object=my_model))\n>>> db.add(Model(identifier='test-model', object=my_model))\n>>> db.show('model')   # shows distinct identifiers\n['test-model']\n>>> db.show('model', 'test-model')       # shows distinct versions\n[0, 1]\n>>> db.show('model', 'test-model', 0)     # shows full meta-data record of model version\n")),(0,o.kt)("p",null,"When creating a ",(0,o.kt)("inlineCode",{parentName:"p"},"Component"),", other ",(0,o.kt)("inlineCode",{parentName:"p"},"Component")," contained in the first are created inline."),(0,o.kt)("p",null,"When removing a ",(0,o.kt)("inlineCode",{parentName:"p"},"Component")," the versioning system is interrogated and if they play a role in other ",(0,o.kt)("inlineCode",{parentName:"p"},"Component")," instances, they may not be deleted. If deletion is forced, they are marked as hidden, rather than deleted."),(0,o.kt)("p",null,"For example the following raises an ",(0,o.kt)("inlineCode",{parentName:"p"},"Exception"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},">>> enc = Encoder('my-enc', encode=lambda x: x, decode=lambda x: x)\n>>> db.add(Model(identifier='test-model', object=my_model, enc=enc))\n>>> db.remove('encoder', 'my-enc')\n")))}m.isMDXComponent=!0}}]);