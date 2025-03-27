"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[16292],{38617:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"quick-start/platform-installation","title":"Install KubeRocketCI","description":"Quick start guide for installing KubeRocketCI, including prerequisites like Tekton installation, deploying the platform with Helm, and accessing the Portal UI.","source":"@site/docs/quick-start/platform-installation.md","sourceDirName":"quick-start","slug":"/quick-start/platform-installation","permalink":"/docs/next/quick-start/platform-installation","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/quick-start/platform-installation.md","tags":[],"version":"current","lastUpdatedBy":"Mykola Serdiuk","lastUpdatedAt":1743077202000,"frontMatter":{"title":"Install KubeRocketCI","description":"Quick start guide for installing KubeRocketCI, including prerequisites like Tekton installation, deploying the platform with Helm, and accessing the Portal UI.","sidebar_label":"Install KubeRocketCI"},"sidebar":"quickStartSidebar","previous":{"title":"Overview","permalink":"/docs/next/quick-start/quick-start-overview"},"next":{"title":"Integrate SonarQube","permalink":"/docs/next/quick-start/integrate-sonarcloud"}}');var l=n(74848),i=n(28453);const r={title:"Install KubeRocketCI",description:"Quick start guide for installing KubeRocketCI, including prerequisites like Tekton installation, deploying the platform with Helm, and accessing the Portal UI.",sidebar_label:"Install KubeRocketCI"},a="Install KubeRocketCI",o={},c=[{value:"Install Tekton",id:"install-tekton",level:2},{value:"Install platform",id:"install-platform",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{Head:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.header,{children:(0,l.jsx)(t.h1,{id:"install-kuberocketci",children:"Install KubeRocketCI"})}),"\n",(0,l.jsx)(s,{children:(0,l.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/quick-start/platform-installation"})}),"\n",(0,l.jsx)(t.p,{children:"This page serves as the starting point for the quick start guide, where we will install Tekton as a prerequisite and then proceed to install the KubeRocketCI itself."}),"\n",(0,l.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,l.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/ILlY4niCWeU",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"allowfullscreen"})}),"\n",(0,l.jsx)(t.h2,{id:"install-tekton",children:"Install Tekton"}),"\n",(0,l.jsx)(t.p,{children:"KubeRocketCI relies on Tekton resources, including Tasks, Pipelines, Triggers, and Interceptors to execute CI/CD pipelines."}),"\n",(0,l.jsx)(t.p,{children:"To install Tekton, run the commands below:"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-bash",children:"kubectl apply -f https://storage.googleapis.com/tekton-releases/pipeline/previous/v0.53.4/release.yaml\nkubectl apply -f https://storage.googleapis.com/tekton-releases/triggers/previous/v0.25.3/release.yaml\nkubectl apply -f https://storage.googleapis.com/tekton-releases/triggers/previous/v0.25.3/interceptors.yaml\n"})}),"\n",(0,l.jsx)(t.h2,{id:"install-platform",children:"Install platform"}),"\n",(0,l.jsx)(t.p,{children:"To deploy the platform, follow the steps below:"}),"\n",(0,l.jsxs)(t.ol,{children:["\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsx)(t.p,{children:"Add a Helm Chart repository:"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-bash",children:"helm repo add epamedp https://epam.github.io/edp-helm-charts/stable\nhelm repo update\n"})}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsxs)(t.p,{children:["Deploy the platform using the ",(0,l.jsx)(t.code,{children:"helm install"})," command:"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-bash",children:"helm install krci epamedp/edp-install --version 3.11.0 --create-namespace --atomic -n krci --set global.dnsWildCard=example.com\n"})}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsxs)(t.p,{children:["Upon successful deployment of the KubeRocketCI Helm Chart, run the ",(0,l.jsx)(t.code,{children:"kubectl port-forward"})," command:"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-bash",children:"kubectl port-forward service/portal 59480:80 -n krci\n"})}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsx)(t.p,{children:"Enter the localhost in your browser to access the login menu:"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-bash",children:"localhost:59480\n"})}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.img,{alt:"Portal login menu",src:n(1415).A+"",title:"Portal login menu",width:"3475",height:"2061"})}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsx)(t.p,{children:"Create the edp-admin service account and generate an access token to open the KubeRocketCI:"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-bash",children:"kubectl -n krci create serviceaccount edp-admin\nkubectl create clusterrolebinding edp-admin --serviceaccount=krci:edp-admin --clusterrole=cluster-admin\nkubectl create token edp-admin -n krci\n"})}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsxs)(t.p,{children:["In the login menu, paste the generated token in the ",(0,l.jsx)(t.strong,{children:"ID token"})," field and click the ",(0,l.jsx)(t.strong,{children:"SIGN IN"})," button."]}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsxs)(t.p,{children:["Upon logging in, specify the namespace for KubeRocketCI where platform is deployed by clicking the ",(0,l.jsx)(t.strong,{children:"cluster settings"})," link in the bottom left corner of the UI:"]}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.img,{alt:"Specify namespaces",src:n(65022).A+"",title:"Specify namespaces",width:"1922",height:"1114"})}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsxs)(t.p,{children:["In the ",(0,l.jsx)(t.strong,{children:"Cluster Settings"})," page, define the following for fields:"]}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:["Default namespace: ",(0,l.jsx)(t.code,{children:"krci"})]}),"\n",(0,l.jsxs)(t.li,{children:["Allowed namespaces: ",(0,l.jsx)(t.code,{children:"krci"})]}),"\n"]}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.img,{alt:"Cluster Settings menu",src:n(69339).A+"",title:"Cluster Settings menu",width:"1922",height:"1114"})}),"\n",(0,l.jsx)(t.admonition,{type:"note",children:(0,l.jsxs)(t.p,{children:["Remember to click the ",(0,l.jsx)(t.strong,{children:"+ ADD"})," icon when adding the allowed namespace."]})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(t.p,{children:["After completing these steps, you will gain access to KubeRocketCI components through the Portal UI. You can now proceed with the integration steps, starting with the ",(0,l.jsx)(t.a,{href:"/docs/next/quick-start/integrate-sonarcloud",children:"SonarQube"})," integration."]})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},69339:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/cluster_settings-f99b8eb6ad87b1b60d07f3c052d1acfc.png"},1415:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/edp_portal_login_menu-70fafeb7c70c32e3672248a801f0811b.png"},65022:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/edp_portal_ui-29024a17e94a2f8ce7a2a9defbd81154.png"},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var s=n(96540);const l={},i=s.createContext(l);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);