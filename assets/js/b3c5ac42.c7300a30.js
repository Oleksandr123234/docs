"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[188],{95042:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>x,frontMatter:()=>l,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"operator-guide/artifacts-management/nexus-image-registry","title":"Nexus Image Registry","description":"This documentation guide provides comprehensive instructions for integrating Nexus Repository Manager as a docker image registry with KubeRocketCI.","source":"@site/versioned_docs/version-3.10/operator-guide/artifacts-management/nexus-image-registry.md","sourceDirName":"operator-guide/artifacts-management","slug":"/operator-guide/artifacts-management/nexus-image-registry","permalink":"/docs/operator-guide/artifacts-management/nexus-image-registry","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/operator-guide/artifacts-management/nexus-image-registry.md","tags":[],"version":"3.10","lastUpdatedBy":"Daniil Nedostup","lastUpdatedAt":1738935500000,"frontMatter":{},"sidebar":"operatorGuideSidebar","previous":{"title":"Integrate Harbor With Tekton Pipelines","permalink":"/docs/operator-guide/artifacts-management/harbor-integration"},"next":{"title":"SonarQube Integration","permalink":"/docs/operator-guide/code-quality/sonarqube"}}');var t=s(74848),i=s(28453),a=s(65537),o=s(79329);const l={},c="Nexus Image Registry",d={},u=[{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Configuration Nexus Repository Manager with nexus-operator",id:"configuration-nexus-repository-manager-with-nexus-operator",level:2},{value:"Configuration Nexus Repository Manager without nexus-operator",id:"configuration-nexus-repository-manager-without-nexus-operator",level:2},{value:"Integration Nexus Repository Manager with KubeRocketCI",id:"integration-nexus-repository-manager-with-kuberocketci",level:2},{value:"Related Articles",id:"related-articles",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{Head:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"nexus-image-registry",children:"Nexus Image Registry"})}),"\n",(0,t.jsx)(r,{children:(0,t.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/operator-guide/artifacts-management/nexus-image-registry/"})}),"\n",(0,t.jsxs)(n.p,{children:["This documentation guide provides comprehensive instructions for integrating ",(0,t.jsx)(n.strong,{children:"Nexus Repository Manager"})," as a docker image registry with KubeRocketCI."]}),"\n",(0,t.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsxs)(n.p,{children:["To install Nexus in environment, it's recommended to use the resources provided in the ",(0,t.jsx)(n.a,{href:"https://github.com/epam/edp-cluster-add-ons",children:"Cluster Add-Ons"})," repository. This approach involves installing both the Nexus repository manager and the ",(0,t.jsx)(n.a,{href:"https://github.com/epam/edp-nexus-operator",children:"nexus-operator"}),". Leveraging the Cluster Add-Ons simplifies the deployment and management process, providing a streamlined method to integrate Nexus into infrastructure."]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Navigate to the forked cluster Add-Ons repository and align the ",(0,t.jsx)(n.a,{href:"https://github.com/epam/edp-cluster-add-ons/tree/main/clusters/core/addons/nexus/values.yaml",children:"nexus values.yaml"})," and ",(0,t.jsx)(n.a,{href:"https://github.com/epam/edp-cluster-add-ons/tree/main/clusters/core/addons/nexus-operator/values.yaml",children:"nexus-operator values.yaml"})," files. Follow the instructions to deploy Nexus, ensuring it's correctly configured to serve as artifact repository."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Sync resources and wait till the all ",(0,t.jsx)(n.strong,{children:"nexus"})," and ",(0,t.jsx)(n.strong,{children:"nexus-operator"})," resources is created:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Nexus ArgoCD applications",src:s(66047).A+"",title:"Nexus ArgoCD applications",width:"2011",height:"1190"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Sign In"})," into ",(0,t.jsx)(n.strong,{children:"Nexus Repository Manager"})," using the default credentials ",(0,t.jsx)(n.strong,{children:"Username"}),": ",(0,t.jsx)(n.code,{children:"admin"})," and ",(0,t.jsx)(n.strong,{children:"Password"}),": ",(0,t.jsx)(n.code,{children:"admin123"})," and update the default password for better security:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Nexus ArgoCD applications",src:s(6918).A+"",title:"Nexus ArgoCD applications",width:"2010",height:"1200"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Update the configuration to enable ",(0,t.jsx)(n.strong,{children:"nexus"})," and ",(0,t.jsx)(n.strong,{children:"nexus-operator"})," in ",(0,t.jsx)(n.a,{href:"https://github.com/epam/edp-cluster-add-ons/blob/main/clusters/core/apps/values.yaml",children:"Add-Ons"})," repository:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title="clusters/core/apps/values.yaml"',children:"nexus:\n  createNamespace: true\n  enable: true\n\nnexus-operator:\n  createNamespace: true\n  enable: true\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsxs)(n.p,{children:["With ",(0,t.jsx)(n.a,{href:"https://github.com/epam/edp-cluster-add-ons/blob/main/clusters/core",children:"Add-Ons approach"})," ",(0,t.jsx)(n.code,{children:"nexus-operator"})," create the necessary roles, ",(0,t.jsx)(n.strong,{children:"Service Account"})," ",(0,t.jsx)(n.code,{children:"ci.user"}),", blob stores, repository, scripts, cleanup policies automatically. Below is a comprehensive guide on how to create all resources manually."]}),"\n",(0,t.jsx)(n.h2,{id:"configuration-nexus-repository-manager-with-nexus-operator",children:"Configuration Nexus Repository Manager with nexus-operator"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Create a Kubernetes Secret that the ",(0,t.jsx)(n.strong,{children:"nexus-operator"})," will use to connect to the ",(0,t.jsx)(n.strong,{children:"Nexus Repository Manager"})," and create all resources:"]}),"\n"]}),"\n",(0,t.jsxs)(a.A,{defaultValue:"manifests",values:[{label:"Manifests",value:"manifests"},{label:"External Secrets Operator",value:"externalsecret"}],children:[(0,t.jsx)(o.A,{value:"manifests",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'apiVersion: v1\nkind: Secret\nmetadata:\n  name: nexus-admin-password\n  namespace: nexus\ntype: Opaque\ndata:\n  user: YWRtaW4=     # base64-encoded value of "admin"\n  password: cGFzcw== # base64-encoded value of "pass"\n'})})}),(0,t.jsx)(o.A,{value:"externalsecret",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'"nexus-admin-password":\n{\n  "user": "XXXXXXX",\n  "password": "XXXXXXX"\n}\n'})})})]}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:["Create a secret using ",(0,t.jsx)(n.code,{children:"manifests"})," or with ",(0,t.jsx)(n.code,{children:"External Secrets Operator"})," to enable the ",(0,t.jsx)(n.strong,{children:"edp-nexus-operator"})," to connect to the ",(0,t.jsx)(n.strong,{children:"Nexus Repository Manager"})," for provisioning:"]}),"\n"]}),"\n",(0,t.jsxs)(a.A,{defaultValue:"manifests",values:[{label:"Manifests",value:"manifests"},{label:"External Secrets Operator",value:"externalsecret"}],children:[(0,t.jsx)(o.A,{value:"manifests",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"apiVersion: v1\nkind: Secret\nmetadata:\n  name: ci-nexus\n  namespace: nexus\ntype: Opaque\nstringData:\n  password: <nexus-user-password>\n"})})}),(0,t.jsx)(o.A,{value:"externalsecret",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'"ci-nexus":\n{\n  "password": "XXXXXXX"\n}\n'})})})]}),"\n",(0,t.jsx)(n.h2,{id:"configuration-nexus-repository-manager-without-nexus-operator",children:"Configuration Nexus Repository Manager without nexus-operator"}),"\n",(0,t.jsxs)(n.p,{children:["Without using the ",(0,t.jsx)(n.strong,{children:"nexus-operator"}),", manual updates are required for the Helm chart values of the ",(0,t.jsx)(n.strong,{children:"Nexus Repository Manager"}),", as well as the creation of blob stores, repositories, roles, and the ",(0,t.jsx)(n.strong,{children:"Service Account"})," ",(0,t.jsx)(n.code,{children:"ci.user"}),"."]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Update ",(0,t.jsx)(n.strong,{children:"Nexus Repository Manager"})," helm chart values:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"nexus-repository-manager:\n  nexus:\n    docker:\n      enabled: true\n      registries:\n        - host: nexus-ci-container.example.com\n          port: 5000\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Create blob store. Open the Nexus UI and navigate to ",(0,t.jsx)(n.strong,{children:"Server administration and configuration"})," -> ",(0,t.jsx)(n.strong,{children:"Repository"})," -> ",(0,t.jsx)(n.strong,{children:"Blob Stores"})," and click ",(0,t.jsx)(n.strong,{children:"Create Blob Store"}),", fill the following fields and click ",(0,t.jsx)(n.strong,{children:"Save"})," button:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Type"}),": ",(0,t.jsx)(n.code,{children:"File"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Name"}),": ",(0,t.jsx)(n.code,{children:"krci-container"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Nexus create blob store",src:s(61761).A+"",title:"Nexus create blob store",width:"1886",height:"1210"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Create repository. Open the Nexus UI and navigate to ",(0,t.jsx)(n.strong,{children:"Server administration and configuration"})," -> ",(0,t.jsx)(n.strong,{children:"Repository"})," -> ",(0,t.jsx)(n.strong,{children:"Repositories"}),", click ",(0,t.jsx)(n.strong,{children:"+ Create repository"}),", select ",(0,t.jsx)(n.strong,{children:"docker (hosted)"}),", fill the following fields and click ",(0,t.jsx)(n.strong,{children:"Save"})," button:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Name"}),": ",(0,t.jsx)(n.code,{children:"A unique identifier for this repository"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"HTTP"}),": ",(0,t.jsx)(n.code,{children:"5000"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Enable Docker V1 API"}),": ",(0,t.jsx)(n.code,{children:"check"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Blob store name"}),": ",(0,t.jsx)(n.code,{children:"krci-container"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Strict Content Type Validation"}),": ",(0,t.jsx)(n.code,{children:"check"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Nexus create registry",src:s(47457).A+"",title:"Nexus create registry",width:"1888",height:"1207"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Open the Nexus UI and navigate to ",(0,t.jsx)(n.strong,{children:"Server administration and configuration"})," -> ",(0,t.jsx)(n.strong,{children:"Security"})," -> ",(0,t.jsx)(n.strong,{children:"Roles"}),". Click the ",(0,t.jsx)(n.strong,{children:"Create Role"})," button, fill the following fields and click ",(0,t.jsx)(n.strong,{children:"Save"})," button:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Type"}),": ",(0,t.jsx)(n.code,{children:"Nexus role"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Role ID"}),": ",(0,t.jsx)(n.code,{children:"krci-admin"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Role Name"}),": ",(0,t.jsx)(n.code,{children:"krci-admin"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Role Descriptions"}),": ",(0,t.jsx)(n.code,{children:"Read and write access to all repos and scripts"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Applied Privileges"}),": ",(0,t.jsx)(n.code,{children:"nx-apikey-all"}),", ",(0,t.jsx)(n.code,{children:"nx-repository-view-*-*-add"}),", ",(0,t.jsx)(n.code,{children:"nx-repository-view-*-*-browse"}),",",(0,t.jsx)(n.code,{children:"nx-repository-view-*-*-edit"}),", ",(0,t.jsx)(n.code,{children:"nx-repository-view-*-*-read"}),", ",(0,t.jsx)(n.code,{children:"nx-script-*-add"}),", ",(0,t.jsx)(n.code,{children:"nx-script-*-delete"}),", ",(0,t.jsx)(n.code,{children:"nx-script-*-read"}),", ",(0,t.jsx)(n.code,{children:"nx-script-*-run"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Roles settings",src:s(6014).A+"",title:"Roles settings",width:"2102",height:"1206"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Create repository Service Account ",(0,t.jsx)(n.code,{children:"ci.user"}),". Open the Nexus UI and navigate to ",(0,t.jsx)(n.strong,{children:"Server administration and configuration"})," -> ",(0,t.jsx)(n.strong,{children:"Security"})," -> ",(0,t.jsx)(n.strong,{children:"User"}),". Click the ",(0,t.jsx)(n.code,{children:"Create local user"})," button to create a new user:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Nexus user settings",src:s(60437).A+"",title:"Nexus user settings",width:"1920",height:"955"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Type the ",(0,t.jsx)(n.code,{children:"ci.user"})," username, fill the following fields and click the ",(0,t.jsx)(n.strong,{children:"Create local user"})," button to create the *",(0,t.jsx)(n.strong,{children:"Service Account"}),", fill the following fields and click ",(0,t.jsx)(n.strong,{children:"Save"})," button:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"ID"}),": ",(0,t.jsx)(n.code,{children:"ci.user"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"First name"}),": ",(0,t.jsx)(n.code,{children:"ci.user"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Last name"}),": ",(0,t.jsx)(n.code,{children:"CI"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Email"}),": ",(0,t.jsx)(n.code,{children:"ci.user@krci.com"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Password"}),": ",(0,t.jsx)(n.code,{children:"<nexus-user-password>"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Status"}),": ",(0,t.jsx)(n.code,{children:"Active"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Roles"}),": ",(0,t.jsx)(n.code,{children:"krci-admin"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Nexus create user",src:s(89032).A+"",title:"Nexus create user",width:"2100",height:"1211"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"integration-nexus-repository-manager-with-kuberocketci",children:"Integration Nexus Repository Manager with KubeRocketCI"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Open ",(0,t.jsx)(n.strong,{children:"KubeRocketCI"})," -> ",(0,t.jsx)(n.strong,{children:"Configuration"})," -> ",(0,t.jsx)(n.strong,{children:"ARTIFACTS STORAGE"})," -> ",(0,t.jsx)(n.strong,{children:"REGISTRY"}),". Click ",(0,t.jsx)(n.strong,{children:"+ ADD REGISTRY"}),"  fill in the fields below, and then click ",(0,t.jsx)(n.strong,{children:"SAVE"})," button:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Registry Provider"}),": ",(0,t.jsx)(n.code,{children:"Nexus"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Registry Endpoint"}),": ",(0,t.jsx)(n.code,{children:"nexus-ci-container.example.com"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Repository"}),": ",(0,t.jsx)(n.code,{children:"krci"})," # The name of folder in nexus repository"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Push account User"}),": ",(0,t.jsx)(n.code,{children:"ci.user"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Push account Password/Token"}),": ",(0,t.jsx)(n.code,{children:"<nexus-user-password>"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Use the Push Accounts credentials"}),": ",(0,t.jsx)(n.code,{children:"check"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Kuberocketci add nexus registry",src:s(13648).A+"",title:"Kuberocketci add nexus registry",width:"1840",height:"1202"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["After build application open ",(0,t.jsx)(n.strong,{children:"Nexus Repository Manager"})," -> ",(0,t.jsx)(n.strong,{children:"Browse server contents"})," -> ",(0,t.jsx)(n.strong,{children:"Browse"})," and open container registry:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Nexus create user",src:s(86506).A+"",title:"Nexus create user",width:"1803",height:"1013"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/operator-guide/add-ons-overview",children:"Install via Add-Ons"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/user-guide/manage-container-registries",children:"Manage Container Registries"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/operator-guide/artifacts-management/nexus-sonatype",children:"Nexus Sonatype Integration"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/user-guide/change-container-registry",children:"Change Container Registry"})}),"\n"]})]})}function x(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},79329:(e,n,s)=>{s.d(n,{A:()=>a});s(96540);var r=s(34164);const t={tabItem:"tabItem_Ymn6"};var i=s(74848);function a(e){let{children:n,hidden:s,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(t.tabItem,a),hidden:s,children:n})}},65537:(e,n,s)=>{s.d(n,{A:()=>w});var r=s(96540),t=s(34164),i=s(65627),a=s(56347),o=s(50372),l=s(30604),c=s(11861),d=s(78749);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:s}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:s,attributes:r,default:t}}=e;return{value:n,label:s,attributes:r,default:t}}))}(s);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function x(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:s}=e;const t=(0,a.W6)(),i=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,l.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(t.location.search);n.set(i,e),t.replace({...t.location,search:n.toString()})}),[i,t])]}function p(e){const{defaultValue:n,queryString:s=!1,groupId:t}=e,i=h(e),[a,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!x({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=s.find((e=>e.default))??s[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[c,u]=g({queryString:s,groupId:t}),[p,j]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,i]=(0,d.Dv)(s);return[t,(0,r.useCallback)((e=>{s&&i.set(e)}),[s,i])]}({groupId:t}),m=(()=>{const e=c??p;return x({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{m&&l(m)}),[m]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!x({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),j(e)}),[u,j,i]),tabValues:i}}var j=s(9136);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=s(74848);function b(e){let{className:n,block:s,selectedValue:r,selectValue:a,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),d=e=>{const n=e.currentTarget,s=l.indexOf(n),t=o[s].value;t!==r&&(c(n),a(t))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const s=l.indexOf(e.currentTarget)+1;n=l[s]??l[0];break}case"ArrowLeft":{const s=l.indexOf(e.currentTarget)-1;n=l[s]??l[l.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":s},n),children:o.map((e=>{let{value:n,label:s,attributes:i}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>{l.push(e)},onKeyDown:u,onClick:d,...i,className:(0,t.A)("tabs__item",m.tabItem,i?.className,{"tabs__item--active":r===n}),children:s??n},n)}))})}function y(e){let{lazy:n,children:s,selectedValue:i}=e;const a=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:(0,t.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function v(e){const n=p(e);return(0,f.jsxs)("div",{className:(0,t.A)("tabs-container",m.tabList),children:[(0,f.jsx)(b,{...n,...e}),(0,f.jsx)(y,{...n,...e})]})}function w(e){const n=(0,j.A)();return(0,f.jsx)(v,{...e,children:u(e.children)},String(n))}},66047:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/nexus-registry-addons-deploy-41e2b2cd8bcacf4ebf09e12a00ee3918.png"},86506:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/nexus-registry-browse-overview-9a23a49638af3928cd403a98821a43cc.png"},6918:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/nexus-registry-change-password-64d1eda1062eff6be5835f40379a87ba.png"},61761:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/nexus-registry-create-blobstore-312992491a5b2bbb9845f5622f32f47b.png"},47457:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/nexus-registry-create-repository-392bf73f8037f5bd12d73261a2698a1b.png"},6014:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/nexus-registry-create-roles-eb7e1e53b428b4461ce908a5ff95a5d1.png"},89032:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/nexus-registry-create-user-de1d188b7993e71f6e1099e85c0fa348.png"},13648:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/nexus-registry-kuberocketci-integration-ae02d0990c477e811491443600361e6c.png"},60437:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/nexus-settings-user-90894b27360a3af57eb4ab09f8320058.png"},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>o});var r=s(96540);const t={},i=r.createContext(t);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);