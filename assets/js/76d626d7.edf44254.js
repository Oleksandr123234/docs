"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[26825],{65903:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"user-guide/pipelines","title":"Pipelines Overview","description":"Optimize CI/CD workflows with KubeRocketCI\'s Pipelines section, a centralized management hub for builds, reviews, and deployments.","source":"@site/docs/user-guide/pipelines.md","sourceDirName":"user-guide","slug":"/user-guide/pipelines","permalink":"/docs/next/user-guide/pipelines","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/user-guide/pipelines.md","tags":[],"version":"current","lastUpdatedBy":"Oleksandr_Stepanov@epam.com","lastUpdatedAt":1741959075000,"frontMatter":{"title":"Pipelines Overview","sidebar_label":"Pipelines Overview","description":"Optimize CI/CD workflows with KubeRocketCI\'s Pipelines section, a centralized management hub for builds, reviews, and deployments."},"sidebar":"userGuideSidebar","previous":{"title":"Overview","permalink":"/docs/next/user-guide/"},"next":{"title":"Tekton Overview","permalink":"/docs/next/user-guide/tekton-pipelines"}}');var t=n(74848),l=n(28453);const r={title:"Pipelines Overview",sidebar_label:"Pipelines Overview",description:"Optimize CI/CD workflows with KubeRocketCI's Pipelines section, a centralized management hub for builds, reviews, and deployments."},a="Pipelines Overview",d={},p=[{value:"Pipelines Page Overview",id:"pipelines-page-overview",level:2},{value:"Pipeline Overview",id:"pipeline-overview",level:2},{value:"Operate With Pipelines",id:"operate-with-pipelines",level:2},{value:"Related Articles",id:"related-articles",level:2}];function o(e){const i={a:"a",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,l.R)(),...e.components},{Head:s}=i;return s||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"pipelines-overview",children:"Pipelines Overview"})}),"\n",(0,t.jsx)(s,{children:(0,t.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/user-guide/pipelines"})}),"\n",(0,t.jsx)(i.p,{children:"Pipelines are integral part of any CI/CD. They are involved in code build, review, and deployment procedures. Such big variety of pipelines result in a demand of having a single place where the pipelines can be managed. For this purpose, the Pipelines section was added to the KubeRocketCI portal."}),"\n",(0,t.jsx)(i.h2,{id:"pipelines-page-overview",children:"Pipelines Page Overview"}),"\n",(0,t.jsxs)(i.p,{children:["To see the Pipelines section, open the KubeRocketCI portal and select the ",(0,t.jsx)(i.strong,{children:"Pipelines"})," section:"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Pipelines overview",src:n(9100).A+"",title:"Pipelines overview",width:"3070",height:"1348"})}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Pipeline details"})," - Displays the following pages:"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Checkbox"})," - Click the check box to select the pipelines to delete."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Status"})," - Displays pipeline run status. The status can be either successful (green) or failed (red). Hover over the status to view the description."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Run"})," - Displays the pipeline run name. Click the name to view its details."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Pipeline"})," - Indicates which pipeline this pipeline run belongs to. Click the pipeline name to view its details."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Pull Request"})," - Click the icon to see which pull request started this pipeline run."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Started at"})," - Displays the time the pipeline was started."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Time"})," - Displays the total amount of time it took the pipeline to complete."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Diagram"})," - Click the icon to see the real-time pipeline diagram."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Actions"})," - This button allows for restarting and deleting pipeline runs."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Filters"})," - Filter pipeline runs by name, namespace, and pipeline they belong to."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Delete"})," - Allows to delete the selected pipeline runs."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Pagination menu"})," - Allows to navigate through the list of pipeline runs."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Chat assistant"})," - Allows to open the chat assistant menu."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"pipeline-overview",children:"Pipeline Overview"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:"Click the pipeline name to view their details:"}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Pipeline details",src:n(90106).A+"",title:"Pipeline details",width:"1922",height:"1114"})}),"\n",(0,t.jsxs)(i.p,{children:["The first tab that you view once you click the pipeline run name is the ",(0,t.jsx)(i.strong,{children:"Details"})," tab."]}),"\n",(0,t.jsxs)(i.ol,{start:"2",children:["\n",(0,t.jsxs)(i.li,{children:["Navigate to the ",(0,t.jsx)(i.strong,{children:"Overview"})," tab:"]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Pipeline overview",src:n(10438).A+"",title:"Pipeline overview",width:"1922",height:"1114"})}),"\n",(0,t.jsx)(i.p,{children:"In this tab, you can view the general information and resources that the pipeline is connected with."}),"\n",(0,t.jsxs)(i.ol,{start:"3",children:["\n",(0,t.jsxs)(i.li,{children:["Navigate to the ",(0,t.jsx)(i.strong,{children:"View YAML"})," tab:"]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Pipeline view YAML",src:n(51158).A+"",title:"Pipeline view YAML",width:"1922",height:"1114"})}),"\n",(0,t.jsx)(i.p,{children:"This tab displays the YAML configuration of your pipeline."}),"\n",(0,t.jsxs)(i.ol,{start:"4",children:["\n",(0,t.jsxs)(i.li,{children:["Navigate to the ",(0,t.jsx)(i.strong,{children:"Diagram"})," tab:"]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Pipeline diagram",src:n(20436).A+"",title:"Pipeline diagram",width:"1922",height:"1114"})}),"\n",(0,t.jsxs)(i.p,{children:["Diagram displays the pipeline's real-time status. You click the task name to navigate to the corresponding task in the ",(0,t.jsx)(i.strong,{children:"Details"})," tab."]}),"\n",(0,t.jsx)(i.h2,{id:"operate-with-pipelines",children:"Operate With Pipelines"}),"\n",(0,t.jsx)(i.p,{children:"The Pipelines section allows you to track, restart, and delete pipelines."}),"\n",(0,t.jsxs)(i.p,{children:["To restart the pipeline run, click the actions button and select ",(0,t.jsx)(i.strong,{children:"Run again"}),":"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Restart pipeline run",src:n(9735).A+"",title:"Restart pipeline run",width:"1922",height:"1114"})}),"\n",(0,t.jsxs)(i.p,{children:["To delete the pipeline run, click the actions button and select ",(0,t.jsx)(i.strong,{children:"Delete"}),":"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Delete pipeline run",src:n(37783).A+"",title:"Delete pipeline run",width:"1922",height:"1114"})}),"\n",(0,t.jsx)(i.p,{children:"Alternatively, you can enter the pipeline run and delete/restart the pipeline using the corresponding buttons:"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Rerun/delete pipeline run",src:n(81453).A+"",title:"Rerun/delete pipeline run",width:"1922",height:"1114"})}),"\n",(0,t.jsx)(i.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"/docs/next/user-guide/marketplace",children:"Marketplace Overview"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"/docs/next/user-guide/manage-environments",children:"Manage Deployment Flows"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"/docs/next/user-guide/application",children:"Manage Applications"})}),"\n"]})]})}function c(e={}){const{wrapper:i}={...(0,l.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},37783:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/delete-pipeline-run-e859d545486797ffe59a160bb239ebaa.png"},90106:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/pipeline-details-tab-48313454ffd091fe11e6680b169aab3c.png"},20436:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/pipelines-diagram-tab-956183e5049d49a326ee742e339c56a7.png"},10438:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/pipelines-overview-tab-0271a9404981a2bf45d65363b82682c1.png"},9100:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/pipelines-overview-e9de30348067d8d3b15675d524f9708e.png"},51158:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/pipelines-view-yaml-tab-6c70c3f659355f403d6f00ee8749e95c.png"},81453:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/restart-or-delete-pipeline-7e8d0b1e379fe0d3b0d9807bde0b5067.png"},9735:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/restart-pipeline-run-d681adb334834fa033dd76be3d8e83d2.png"},28453:(e,i,n)=>{n.d(i,{R:()=>r,x:()=>a});var s=n(96540);const t={},l=s.createContext(t);function r(e){const i=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(l.Provider,{value:i},e.children)}}}]);