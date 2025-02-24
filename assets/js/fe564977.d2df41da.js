"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[57162],{89908:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>d,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"user-guide/widgets","title":"KubeRocketCI Widgets","description":"Explore KubeRocketCI\'s widgets for real-time data visualization of platform resources, including code quality and resource quotas, enhancing observability.","source":"@site/versioned_docs/version-3.10/user-guide/widgets.md","sourceDirName":"user-guide","slug":"/user-guide/widgets","permalink":"/docs/user-guide/widgets","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/user-guide/widgets.md","tags":[],"version":"3.10","lastUpdatedBy":"Oleksandr_Stepanov@epam.com","lastUpdatedAt":1740146509000,"frontMatter":{"title":"KubeRocketCI Widgets","description":"Explore KubeRocketCI\'s widgets for real-time data visualization of platform resources, including code quality and resource quotas, enhancing observability.","sidebar_label":"KubeRocketCI Widgets"},"sidebar":"userGuideSidebar","previous":{"title":"Add Gen AI Assistant","permalink":"/docs/user-guide/add-ai-assistant"},"next":{"title":"Platform Cleanup Guide","permalink":"/docs/user-guide/platform-cleanup-guide"}}');var n=s(74848),r=s(28453);const o={title:"KubeRocketCI Widgets",description:"Explore KubeRocketCI's widgets for real-time data visualization of platform resources, including code quality and resource quotas, enhancing observability.",sidebar_label:"KubeRocketCI Widgets"},d="KubeRocketCI Widgets",a={},c=[{value:"Widgets Overview",id:"widgets-overview",level:2},{value:"SonarQube &amp; Dependency-Track Widgets",id:"sonarqube--dependency-track-widgets",level:2},{value:"Resource Quota Widget",id:"resource-quota-widget",level:2},{value:"Related Articles",id:"related-articles",level:2}];function l(e){const t={a:"a",admonition:"admonition",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{Head:i}=t;return i||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"kuberocketci-widgets",children:"KubeRocketCI Widgets"})}),"\n",(0,n.jsx)(i,{children:(0,n.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/user-guide/widgets"})}),"\n",(0,n.jsx)(t.p,{children:"KubeRocketCI offers widgets as data visualization tools to observe the status of both the platform and its resources.\nThis page describes all the widgets presented in KubeRocketCI."}),"\n",(0,n.jsx)(t.h2,{id:"widgets-overview",children:"Widgets Overview"}),"\n",(0,n.jsx)(t.p,{children:"The first widgets users view when using KubeRocketCI portal are KubeRocketCI resource widgets:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Overview page",src:s(3017).A+"",title:"Overview page",width:"1919",height:"1110"})}),"\n",(0,n.jsxs)(t.p,{children:["These widgets reflect all the resources in the ",(0,n.jsx)(t.strong,{children:"default namespace"}),":"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Codebases"}),": Displays all the created codebases;"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Branches"}),": Shows the total amount of codebase branches;"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Pipelines"}),": Shows all the initiated pipeline runs;"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Deployment Flows"}),": Displays all the created deployment flows;"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Environments"}),": Shows the total amount of created environments."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"The status of the resources is displayed real-time and doesn't require any preliminary configuration to for widgets to work. Not only these widgets display the amount of resources but also their statuses (success, fail, in progress)."}),"\n",(0,n.jsx)(t.h2,{id:"sonarqube--dependency-track-widgets",children:"SonarQube & Dependency-Track Widgets"}),"\n",(0,n.jsx)(t.p,{children:"KubeRocketCI also offers widgets to track codebases' code quality directly from the KubeRocketCI portal. These widgets pull codebase-related data from SonarQube and Dependency-Track tools:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Overview page",src:s(30536).A+"",title:"Overview page",width:"1920",height:"1110"})}),"\n",(0,n.jsx)(t.p,{children:"To enable these widgets, you need to pass the following steps:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Integrate platform with ",(0,n.jsx)(t.a,{href:"/docs/operator-guide/code-quality/sonarqube",children:"SonarQube"})," and/or ",(0,n.jsx)(t.a,{href:"/docs/operator-guide/devsecops/dependency-track",children:"Dependency-Track"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Install and configure the ",(0,n.jsx)(t.a,{href:"/docs/operator-guide/extensions/krakend",children:"KrakenD"})," tool."]}),"\n",(0,n.jsx)(t.li,{children:"Trigger the review pipeline in a codebase, allowing SonarQube and Dependency-Track to scan your code."}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"At least one build pipeline must be run for the codebase to activate the widgets."})}),"\n",(0,n.jsxs)(t.ol,{start:"4",children:["\n",(0,n.jsx)(t.li,{children:"Verify the widgets started working for the codebase:"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"SonarQube and Dependency-Track widgets",src:s(77697).A+"",title:"SonarQube and Dependency-Track widgets",width:"1918",height:"1111"})}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"The SonarQube and Dependency-Track widgets only track the default branch."})}),"\n",(0,n.jsx)(t.h2,{id:"resource-quota-widget",children:"Resource Quota Widget"}),"\n",(0,n.jsx)(t.p,{children:"The last available widget is a resource quota widget. To open the widget, click the circle icon in the top-left corner of the screen:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Overview page",src:s(21509).A+"",title:"Overview page",width:"1904",height:"1081"})}),"\n",(0,n.jsx)(t.p,{children:"This widget shows resource requests and limits (CPU, Memory, Namespace) of both the deployment flows and the entire platform."}),"\n",(0,n.jsxs)(t.p,{children:["To enable the widget, you need to deploy KubeRocketCI in a ",(0,n.jsx)(t.a,{href:"/docs/operator-guide/advanced-installation/capsule",children:"Capsule"})," tenant."]}),"\n",(0,n.jsx)(t.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/docs/operator-guide/code-quality/sonarqube",children:"SonarQube Integration"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/docs/operator-guide/devsecops/dependency-track",children:"Integrate Dependency-Track"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/docs/operator-guide/extensions/krakend",children:"KrakenD Integration"})}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},77697:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/active-sq-dt-widgets-5374eee94ef3952c3b25a9ab53287465.png"},30536:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/empty-sq-dt-widgets-47664efc32218bd4483fcac2b31d1263.png"},21509:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/resource-quota-widget-73be4865f1f469ec5177d3b32f44aedf.png"},3017:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/resource-widgets-60b227ebcff46962971ed28c5d4f832a.png"},28453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>d});var i=s(96540);const n={},r=i.createContext(n);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);