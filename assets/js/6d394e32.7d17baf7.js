"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[44775],{97843:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>o,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"user-guide/cd-pipeline-variables-injection","title":"Inject Variables Into Deploy Pipelines","description":"Explore variable injection in KubeRocketCI deploy pipelines for dynamic configuration, secure data management, and efficient automated testing.","source":"@site/docs/user-guide/cd-pipeline-variables-injection.md","sourceDirName":"user-guide","slug":"/user-guide/cd-pipeline-variables-injection","permalink":"/docs/next/user-guide/cd-pipeline-variables-injection","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/user-guide/cd-pipeline-variables-injection.md","tags":[],"version":"current","lastUpdatedBy":"Sergiy Kulanov","lastUpdatedAt":1740847812000,"frontMatter":{"title":"Inject Variables Into Deploy Pipelines","sidebar_label":"Inject Variables Into Deploy Pipelines","description":"Explore variable injection in KubeRocketCI deploy pipelines for dynamic configuration, secure data management, and efficient automated testing."},"sidebar":"userGuideSidebar","previous":{"title":"Manage Deployment Flows","permalink":"/docs/next/user-guide/manage-environments"},"next":{"title":"Application and Pipeline Statuses","permalink":"/docs/next/user-guide/application-and-pipeline-statuses"}}');var s=n(74848),a=n(28453);const l={title:"Inject Variables Into Deploy Pipelines",sidebar_label:"Inject Variables Into Deploy Pipelines",description:"Explore variable injection in KubeRocketCI deploy pipelines for dynamic configuration, secure data management, and efficient automated testing."},r="Inject Variables Into Deploy Pipelines",o={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Add Key-Value Variable",id:"add-key-value-variable",level:2},{value:"Related Articles",id:"related-articles",level:2}];function c(e){const i={a:"a",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components},{Head:t}=i;return t||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"inject-variables-into-deploy-pipelines",children:"Inject Variables Into Deploy Pipelines"})}),"\n",(0,s.jsx)(t,{children:(0,s.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/user-guide/cd-pipeline-variables-injection"})}),"\n",(0,s.jsx)(i.p,{children:"KubeRocketCI offers a robust set of features to build highly customizable CI/CD workflows. One of the key features is variable injection, which enables the parametrization of deploy pipelines.\nThis capability is particularly valuable for running multiple automated tests simultaneously and efficiently. Below are some key use cases where variable injection can be beneficial:"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsx)(i.li,{children:"Redefining environment-specific configurations."}),"\n",(0,s.jsx)(i.li,{children:"Securely managing sensitive information such as API keys, tokens, and passwords."}),"\n",(0,s.jsx)(i.li,{children:"Implementing feature toggles to enable or disable various tasks and checks."}),"\n",(0,s.jsx)(i.li,{children:"Dynamically configuring application behavior based on deployment contexts."}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"By leveraging variable injection, developers can ensure smoother deployments, enhance security, and improve operational efficiency."}),"\n",(0,s.jsx)(i.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(i.p,{children:"Before proceeding, ensure you have created the following resources:"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"/docs/next/user-guide/add-application",children:"Codebase"}),";"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"/docs/next/user-guide/add-cd-pipeline",children:"Deployment Flow"}),";"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"/docs/next/user-guide/manage-environments#add-a-new-environment",children:"Environment"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["Additionally, customize your deploy pipeline to utilize parameters efficiently. To learn more about creating custom deploy pipelines, read the ",(0,s.jsx)(i.a,{href:"/docs/next/operator-guide/cd/customize-deploy-pipeline",children:"Customize Deploy Pipeline"})," page."]}),"\n",(0,s.jsx)(i.h2,{id:"add-key-value-variable",children:"Add Key-Value Variable"}),"\n",(0,s.jsx)(i.p,{children:"To add a key-value variable in deploy pipelines, follow the steps below:"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["Navigate to the ",(0,s.jsx)(i.strong,{children:"KubeRocketCI portal"})," -> ",(0,s.jsx)(i.strong,{children:"Deployment Flows"}),":"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Deployment Flows section",src:n(3912).A+"",title:"Deployment Flows section",width:"1922",height:"1114"})}),"\n",(0,s.jsxs)(i.ol,{start:"2",children:["\n",(0,s.jsxs)(i.li,{children:["Enter your deployment flow and then enter the environment you need to add a variable to. In the environment details page, select the ",(0,s.jsx)(i.strong,{children:"Variables"})," tab. Click the ",(0,s.jsx)(i.strong,{children:"+"})," button to add a variable:"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Variables tab",src:n(91754).A+"",title:"Variables tab",width:"1922",height:"1114"})}),"\n",(0,s.jsxs)(i.ol,{start:"3",children:["\n",(0,s.jsxs)(i.li,{children:["Specify the variables and click ",(0,s.jsx)(i.strong,{children:"Save"}),":"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Variables populated",src:n(40494).A+"",title:"Variables populated",width:"1922",height:"1114"})}),"\n",(0,s.jsxs)(i.ol,{start:"4",children:["\n",(0,s.jsx)(i.li,{children:"Verify that the deploy pipeline uses your variables:"}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Variables demonstration",src:n(87983).A+"",title:"Variables demonstration",width:"1896",height:"922"})}),"\n",(0,s.jsx)(i.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"/docs/next/operator-guide/cd/customize-deploy-pipeline",children:"Customize Deploy Pipeline"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"/docs/next/user-guide/add-cd-pipeline",children:"Add Deployment Flow"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"/docs/next/user-guide/manage-environments",children:"Manage Deployment Flows"})}),"\n"]})]})}function p(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},40494:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/add-variables-cf4eb31575daac7b742c652cbe1125a7.png"},3912:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/deployment-flows-page-b8dbafa6d69c745b305fae7143a40d0b.png"},91754:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/variables-tab-a29b3328b15964b541700b77fdc8ede1.png"},87983:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/variables-9461a27381905536482f7079ef5ecd00.gif"},28453:(e,i,n)=>{n.d(i,{R:()=>l,x:()=>r});var t=n(96540);const s={},a=t.createContext(s);function l(e){const i=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(a.Provider,{value:i},e.children)}}}]);