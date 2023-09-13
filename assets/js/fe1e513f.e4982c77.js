"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[517],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(a),c=n,k=d["".concat(s,".").concat(c)]||d[c]||m[c]||o;return a?r.createElement(k,l(l({ref:t},u),{},{components:a})):r.createElement(k,l({ref:t},u))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},21946:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const o={},l="Supported Features",i={unversionedId:"docs/features",id:"docs/features",title:"Supported Features",description:"This is a feature list of features supported in v0.1.",source:"@site/content/docs/features.md",sourceDirName:"docs",slug:"/docs/features",permalink:"/docs/docs/features",draft:!1,editUrl:"https://github.com/SuperDuperDB/superduperdb/content/docs/features.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Frequently asked questions",permalink:"/docs/docs/faq"}},s={},p=[{value:"Components",id:"components",level:2},{value:"AI Models",id:"ai-models",level:2},{value:"API structure",id:"api-structure",level:3},{value:"In-database compute",id:"in-database-compute",level:3},{value:"Natively supported AI frameworks",id:"natively-supported-ai-frameworks",level:3},{value:"Versioning and storage",id:"versioning-and-storage",level:3},{value:"listeners: daemonizing models on database",id:"listeners-daemonizing-models-on-database",level:3},{value:"Database",id:"database",level:2},{value:"Supported datastores",id:"supported-datastores",level:3},{value:"Datatypes",id:"datatypes",level:3},{value:"Model Feature storage",id:"model-feature-storage",level:3},{value:"Features for production use-cases",id:"features-for-production-use-cases",level:2}],u={toc:p},d="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"supported-features"},"Supported Features"),(0,n.kt)("p",null,"This is a feature list of features supported in ",(0,n.kt)("inlineCode",{parentName:"p"},"v0.1"),"."),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SuperDuperDB/superduperdb-stealth/wiki/Roadmap"},"here")," for the high-level roadmap going forward."),(0,n.kt)("h2",{id:"components"},"Components"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"db"},"DB")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"models"},"Models")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"encoders"},"Encoders")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"listeners"},"listeners")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"metrics"},"Metrics")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/docs/usage/vector_index"},"Vector-Indexes")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"datasets"},"Datasets"))),(0,n.kt)("h2",{id:"ai-models"},"AI Models"),(0,n.kt)("h3",{id:"api-structure"},"API structure"),(0,n.kt)("p",null,"All model frameworks are equipped with:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"model.predict(X, db=<db>, select=<query>)"))),(0,n.kt)("p",null,"Optional support for:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"model.fit(X, y=None, db=<db>, select=<query>)"))),(0,n.kt)("h3",{id:"in-database-compute"},"In-database compute"),(0,n.kt)("p",null,"For ",(0,n.kt)("inlineCode",{parentName:"p"},"model.fit")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"model.predict"),":"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"All model frameworks may applied client-side, automatically fetching data from the data layer, and iterating through this data, reinserting predictions into the database"),(0,n.kt)("li",{parentName:"ol"},'The same workflow may be flagged to happen "in" the SuperDuperDB environment.'),(0,n.kt)("li",{parentName:"ol"},"Workflows may be configured to run in parallel on Dask workers")),(0,n.kt)("h3",{id:"natively-supported-ai-frameworks"},"Natively supported AI frameworks"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"PyTorch")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Sklearn")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Transformers")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"OpenAI"))),(0,n.kt)("h3",{id:"versioning-and-storage"},"Versioning and storage"),(0,n.kt)("p",null,"Models, and components associated with models are automatically stored in a configured artifact store, and versioned. Dependencies between models and components are logged, and versions are protected from deletion which participate in other components."),(0,n.kt)("h3",{id:"listeners-daemonizing-models-on-database"},"listeners: daemonizing models on database"),(0,n.kt)("p",null,"Models may be configured to listen the database for changes, and when new data is inserted, compute new outputs over that data, and store this back in the database."),(0,n.kt)("h2",{id:"database"},"Database"),(0,n.kt)("h3",{id:"supported-datastores"},"Supported datastores"),(0,n.kt)("p",null,"Currently supported"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Primary data")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"MongoDB"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Artifacts and linked data")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"AWS s3"))),(0,n.kt)("p",null,"View plans to support additional databases in the roadmap ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SuperDuperDB/superduperdb-stealth/wiki/Roadmap"},"here"),"."),(0,n.kt)("h3",{id:"datatypes"},"Datatypes"),(0,n.kt)("p",null,"Native support:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"images")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"tensors")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"arrays"))),(0,n.kt)("p",null,"Configurable"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Any data encodable using a saveable ",(0,n.kt)("em",{parentName:"li"},"Encoder")," with ",(0,n.kt)("inlineCode",{parentName:"li"},".encode")," and ",(0,n.kt)("inlineCode",{parentName:"li"},".decode")," methods")),(0,n.kt)("h3",{id:"model-feature-storage"},"Model Feature storage"),(0,n.kt)("p",null,"The outputs of models may be stored directly in the database along-side the inputs which led to those outputs. These outputs may be flexibly be of any type which can be handled by a SuperDuperDB ",(0,n.kt)("em",{parentName:"p"},"Encoder"),"."),(0,n.kt)("h2",{id:"features-for-production-use-cases"},"Features for production use-cases"),(0,n.kt)("p",null,"We have support for these features:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Task parallelization on Dask"),(0,n.kt)("li",{parentName:"ul"},"Client-server for working with SuperDuperDB from a remote client"),(0,n.kt)("li",{parentName:"ul"},"Change-data capture (CDC): users are enabled to insert data from any client and models may be executed on workers, capturing new inputs and populating outputs to the database"),(0,n.kt)("li",{parentName:"ul"},"Vector-search using LanceDB, which is kept in sync with the database using CDC.")))}m.isMDXComponent=!0}}]);