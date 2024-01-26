"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[2786],{30837:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>d,toc:()=>r});var s=o(85893),c=o(11151);const t={sidebar_position:4},i="Components",d={id:"docs/fundamentals/component_abstraction",title:"Components",description:"A Component is an object which is a combination of JSON-able parameters, and classes which are not",source:"@site/content/docs/fundamentals/component_abstraction.md",sourceDirName:"docs/fundamentals",slug:"/docs/fundamentals/component_abstraction",permalink:"/docs/docs/fundamentals/component_abstraction",draft:!1,unlisted:!1,editUrl:"https://github.com/SuperDuperDB/superduperdb/blob/main/docs/hr/content/docs/fundamentals/component_abstraction.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Datalayer",permalink:"/docs/docs/fundamentals/datalayer_overview"},next:{title:"Encoding data",permalink:"/docs/docs/fundamentals/document_encoder_abstraction"}},a={},r=[{value:"Types of component",id:"types-of-component",level:2},{value:"<code>Encoder</code>",id:"encoder",level:3},{value:"<code>Model</code>",id:"model",level:3},{value:"<code>Listener</code>",id:"listener",level:3},{value:"<code>VectorIndex</code>",id:"vectorindex",level:3},{value:"<code>Serializer</code>",id:"serializer",level:3},{value:"<code>Schema</code>",id:"schema",level:3},{value:"<code>Dataset</code>",id:"dataset",level:3},{value:"<code>Metric</code>",id:"metric",level:3},{value:"<code>Stack</code>",id:"stack",level:3},{value:"Activating components",id:"activating-components",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",strong:"strong",...(0,c.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"components",children:"Components"}),"\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"Component"})})," is an object which is a combination of ",(0,s.jsx)(n.code,{children:"JSON"}),"-able parameters, and classes which are not\nserializable by ",(0,s.jsx)(n.code,{children:"JSON"}),", but are saved as ",(0,s.jsx)(n.code,{children:"bytes"}),"-blobs."]}),"\n",(0,s.jsx)(n.h2,{id:"types-of-component",children:"Types of component"}),"\n",(0,s.jsxs)(n.p,{children:["There are several key classes of objects in ",(0,s.jsx)(n.code,{children:"superduperdb"})," all of which inherit from ",(0,s.jsx)(n.code,{children:"Component"}),".\nAll of these objects are to be found in ",(0,s.jsx)(n.code,{children:"superduperdb.component.*"})]}),"\n",(0,s.jsx)(n.p,{children:"These are:"}),"\n",(0,s.jsx)(n.h3,{id:"encoder",children:(0,s.jsx)(n.code,{children:"Encoder"})}),"\n",(0,s.jsxs)(n.p,{children:["An ",(0,s.jsx)(n.code,{children:"Encoder"})," is a class which is responsible for converting special data-types in ",(0,s.jsx)(n.code,{children:"bytes"})," and back."]}),"\n",(0,s.jsx)(n.h3,{id:"model",children:(0,s.jsx)(n.code,{children:"Model"})}),"\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.code,{children:"Model"})," is a class which wraps a classical AI-model, but in-addition, brings additional tooling, such as the functions required\nfor pre- and post-processing, as well as which ",(0,s.jsx)(n.code,{children:"Encoder"})," is needed to encode outputs."]}),"\n",(0,s.jsx)(n.h3,{id:"listener",children:(0,s.jsx)(n.code,{children:"Listener"})}),"\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.code,{children:"Listener"}),' is a class which "deploys" a ',(0,s.jsx)(n.code,{children:"Model"}),' to "listen" for incoming data, and calculate predictions on this data, which\nare saved back to the database.']}),"\n",(0,s.jsx)(n.h3,{id:"vectorindex",children:(0,s.jsx)(n.code,{children:"VectorIndex"})}),"\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.code,{children:"VectorIndex"})," is, informally, the necessary combination of ",(0,s.jsx)(n.code,{children:"Component"})," instances, to create ",(0,s.jsx)(n.strong,{children:"vector-search"})," functionality, end-2-end.\nFormally, a ",(0,s.jsx)(n.code,{children:"VectorIndex"})," is a combination of one or more ",(0,s.jsx)(n.code,{children:"Listener"})," instances which have the additional property that one of them has\nvector outputs. The ",(0,s.jsx)(n.code,{children:"Model"})," instances are used to create vectors for incoming queries, on the fly, as well as preparing incoming data, and\nsaving vectors for this data in the database."]}),"\n",(0,s.jsx)(n.h3,{id:"serializer",children:(0,s.jsx)(n.code,{children:"Serializer"})}),"\n",(0,s.jsxs)(n.p,{children:["Some ",(0,s.jsx)(n.code,{children:"Component"})," objects require special serialization protocols, in order to become saveable in the ",(0,s.jsx)(n.code,{children:"superduperdb"})," world.\n",(0,s.jsx)(n.code,{children:"Serializer"}),' is a "meta"-component which can save these custom serialization protocols for use by other ',(0,s.jsx)(n.code,{children:"Component"})," instances."]}),"\n",(0,s.jsx)(n.h3,{id:"schema",children:(0,s.jsx)(n.code,{children:"Schema"})}),"\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.code,{children:"Schema"})," connects traditional datatypes and ",(0,s.jsx)(n.code,{children:"Encoder"})," instances, with tabular data."]}),"\n",(0,s.jsx)(n.h3,{id:"dataset",children:(0,s.jsx)(n.code,{children:"Dataset"})}),"\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.code,{children:"Dataset"})," is an immutable snapshot of the database. This immutability is important for model validation, and reproducibility,\namong other tasks."]}),"\n",(0,s.jsx)(n.h3,{id:"metric",children:(0,s.jsx)(n.code,{children:"Metric"})}),"\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.code,{children:"Metric"})," serves the purpose of evaluating the quality of ",(0,s.jsx)(n.code,{children:"Component"})," instances - in particular, ",(0,s.jsx)(n.code,{children:"Model"}),", ",(0,s.jsx)(n.code,{children:"Listener"})," and ",(0,s.jsx)(n.code,{children:"VectorIndex"}),"\ninstances."]}),"\n",(0,s.jsx)(n.h3,{id:"stack",children:(0,s.jsx)(n.code,{children:"Stack"})}),"\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.code,{children:"Stack"})," is a way of connecting diverse and interoperating sets of functionality. See ",(0,s.jsx)(n.a,{href:"../walkthrough/creating_stacks_of_functionality",children:"here"})," for more details."]}),"\n",(0,s.jsx)(n.h2,{id:"activating-components",children:"Activating components"}),"\n",(0,s.jsxs)(n.p,{children:["Each of the components may be registered to work with ",(0,s.jsx)(n.code,{children:"superduperdb"})," by passing a component instance to ",(0,s.jsx)(n.code,{children:"db.add"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},11151:(e,n,o)=>{o.d(n,{Z:()=>d,a:()=>i});var s=o(67294);const c={},t=s.createContext(c);function i(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);