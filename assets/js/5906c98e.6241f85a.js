"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[55230],{23659:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"user-guide/change-container-registry","title":"Change Container Registry","description":"Guidelines for transitioning to a different container registry within KubeRocketCI, ensuring smooth updates for both new and existing components.","source":"@site/versioned_docs/version-3.9/user-guide/change-container-registry.md","sourceDirName":"user-guide","slug":"/user-guide/change-container-registry","permalink":"/docs/3.9/user-guide/change-container-registry","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/user-guide/change-container-registry.md","tags":[],"version":"3.9","lastUpdatedBy":"Oleksandr_Stepanov@epam.com","lastUpdatedAt":1740747668000,"frontMatter":{"title":"Change Container Registry","sidebar_label":"Change Container Registry","description":"Guidelines for transitioning to a different container registry within KubeRocketCI, ensuring smooth updates for both new and existing components."},"sidebar":"userGuideSidebar","previous":{"title":"Manage Container Registries","permalink":"/docs/3.9/user-guide/manage-container-registries"}}');var i=t(74848),r=t(28453);const a={title:"Change Container Registry",sidebar_label:"Change Container Registry",description:"Guidelines for transitioning to a different container registry within KubeRocketCI, ensuring smooth updates for both new and existing components."},o="Change Container Registry",c={},d=[{value:"Remove Container Registry",id:"remove-container-registry",level:2},{value:"Update Registry for the Existing Components and Environments",id:"update-registry-for-the-existing-components-and-environments",level:2},{value:"Related Articles",id:"related-articles",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{Head:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"change-container-registry",children:"Change Container Registry"})}),"\n",(0,i.jsx)(s,{children:(0,i.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/user-guide/change-container-registry/"})}),"\n",(0,i.jsx)(n.p,{children:"It may become essential to modify the container registry settings. This section delivers clear guidelines on how to effectively transition to a different container registry."}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"Removing registry settings may disrupt your CI/CD process. New components created after changing the registry, including Components and Environments, will seamlessly function. However, existing 'Components' require additional steps, as outlined below."})}),"\n",(0,i.jsx)(n.h2,{id:"remove-container-registry",children:"Remove Container Registry"}),"\n",(0,i.jsx)(n.p,{children:"To remove container registry integration from the KubeRocketCI, follow the steps below:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the KubeRocketCI main menu, navigate to ",(0,i.jsx)(n.strong,{children:"Configuration"})," -> ",(0,i.jsx)(n.strong,{children:"Artifacts storage"})," -> ",(0,i.jsx)(n.strong,{children:"Registry"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click the ",(0,i.jsx)(n.strong,{children:"Reset registry"})," button, type the ",(0,i.jsx)(n.code,{children:"confirm"})," word and then click ",(0,i.jsx)(n.strong,{children:"Confirm"}),":"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Registry settings",src:t(77045).A+"",title:"Registry settings",width:"3334",height:"1661"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"update-registry-for-the-existing-components-and-environments",children:"Update Registry for the Existing Components and Environments"}),"\n",(0,i.jsxs)(n.p,{children:["KubeRocketCI uses ",(0,i.jsx)(n.code,{children:"CodebaseImageStream"})," custom resource to define Container Registry settings for the codebases. To update the registry for the existing codebases, follow the steps below:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["List all the existing ",(0,i.jsx)(n.code,{children:"CodebaseImageStream"})," CR(s) and copy their ",(0,i.jsx)(n.code,{children:"<name>"})," and ",(0,i.jsx)(n.code,{children:"<codebase name>"})," fields:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"  kubectl get codebaseimagestream -n edp\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Patch the ",(0,i.jsx)(n.code,{children:"CodebaseImageStream"})," CR(s) using the commands for the registry you switched to:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"AWS ECR:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'kubectl patch codebaseimagestream <name> -n edp --type=\'json\' -p=\'[{"op": "replace", "path": "/spec/imageName", "value": "<Registry Endpoint>/<Registry Space>/<codebase name>"}]\'\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"DockerHub"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'kubectl patch codebaseimagestream <name> -n edp --type=\'json\' -p=\'[{"op": "replace", "path": "/spec/imageName", "value": "dockerhub.io/<User>/<codebase name>"}]\'\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Harbor"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'kubectl patch codebaseimagestream <name> -n edp --type=\'json\' -p=\'[{"op": "replace", "path": "/spec/imageName", "value": "<Registry Endpoint>/<Registry Space>/<codebase name>}]\'\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Nexus"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'kubectl patch codebaseimagestream <name> -n edp --type=\'json\' -p=\'[{"op": "replace", "path": "/spec/imageName", "value": "<Registry Endpoint>/<Registry Space>/<codebase name>}]\'\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["If necessary, update the registry credentials for the existing ",(0,i.jsx)(n.code,{children:"CD pipelines"})," by copying the ",(0,i.jsx)(n.code,{children:"regcred"})," secret from the ",(0,i.jsx)(n.code,{children:"edp"})," namespace to all the namespaces managed by the platform. To get the list of the namespaces, run the following command:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"kubectl get stages -n edp -o jsonpath='{range .items[*]}{.spec.namespace}{\"\\n\"}{end}'\n"})}),"\n",(0,i.jsx)(n.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/3.9/user-guide/manage-container-registries",children:"Manage Registries"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/3.9/operator-guide/artifacts-management/harbor-integration",children:"Integrate Harbor With KubeRocketCI Pipelines"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/3.9/quick-start/integrate-container-registry",children:"Integrate Docker"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},77045:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/container-registry-reset-ad4f7e27435655806f920e87edbedbc4.png"},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var s=t(96540);const i={},r=s.createContext(i);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);