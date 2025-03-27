"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[76640],{58145:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"operator-guide/install-kuberocketci","title":"Install KubeRocketCI","description":"Comprehensive guide on installing KubeRocketCI, covering prerequisites, various deployment methods including Helm, Argo CD GitOps, and AWS Marketplace, and additional setup options.","source":"@site/versioned_docs/version-3.10/operator-guide/install-kuberocketci.md","sourceDirName":"operator-guide","slug":"/operator-guide/install-kuberocketci","permalink":"/docs/3.10/operator-guide/install-kuberocketci","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/operator-guide/install-kuberocketci.md","tags":[],"version":"3.10","lastUpdatedBy":"Oleksandr_Stepanov@epam.com","lastUpdatedAt":1741971760000,"frontMatter":{"title":"Install KubeRocketCI","description":"Comprehensive guide on installing KubeRocketCI, covering prerequisites, various deployment methods including Helm, Argo CD GitOps, and AWS Marketplace, and additional setup options.","sidebar_label":"Install KubeRocketCI"},"sidebar":"operatorGuideSidebar","previous":{"title":"Install Tekton","permalink":"/docs/3.10/operator-guide/install-tekton"},"next":{"title":"Install via AWS Marketplace","permalink":"/docs/3.10/operator-guide/aws-marketplace-install"}}');var i=t(74848),s=t(28453),a=t(65537),o=t(79329);const l={title:"Install KubeRocketCI",description:"Comprehensive guide on installing KubeRocketCI, covering prerequisites, various deployment methods including Helm, Argo CD GitOps, and AWS Marketplace, and additional setup options.",sidebar_label:"Install KubeRocketCI"},c="Install KubeRocketCI",u={},d=[{value:"Related Articles",id:"related-articles",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{Head:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"install-kuberocketci",children:"Install KubeRocketCI"})}),"\n",(0,i.jsx)(t,{children:(0,i.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/operator-guide/install-kuberocketci"})}),"\n",(0,i.jsxs)(n.p,{children:["Inspect the main steps to install KubeRocketCI. Please check the ",(0,i.jsx)(n.a,{href:"/docs/3.10/operator-guide/prerequisites",children:"Prerequisites Overview"})," page before starting the installation. Also, to authenticate each of the release artifacts, please refer to the ",(0,i.jsx)(n.a,{href:"/docs/3.10/developer-guide/artifacts-verification",children:"Verification of KubeRocketCI Artifacts"})," guide.\nThere are multiple ways to deploy KubeRocketCI:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Using Helm (see below);"}),"\n",(0,i.jsxs)(n.li,{children:["Using ",(0,i.jsx)(n.a,{href:"/docs/3.10/operator-guide/add-ons-overview",children:"Argo CD GitOps approach"}),";"]}),"\n",(0,i.jsxs)(n.li,{children:["Using ",(0,i.jsx)(n.a,{href:"/docs/3.10/operator-guide/aws-marketplace-install",children:"AWS Marketplace"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"The installation process below is given for a Kubernetes cluster. The steps that differ for an OpenShift cluster are indicated in the notes."})}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"KubeRocketCI is aligned with industry standards for storing and managing sensitive data, ensuring optimal security. However, the use of custom solutions introduces uncertainties, thus the responsibility for the safety of your data is fully covered by the platform administrator."})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["(Optional) KubeRocketCI manages secrets via ",(0,i.jsx)(n.code,{children:"External Secret Operator"})," to integrate with a variety of tools. For more information about the secrets being used and how they are utilized, please refer to the ",(0,i.jsx)(n.a,{href:"/docs/3.10/operator-guide/secrets-management/external-secrets-operator-integration",children:"External Secrets Operator Integration"})," guide."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["(Optional) Deploy and configure Keycloak to enable Single Sign-On approach. To see the details on how to configure Keycloak correctly, please refer to the ",(0,i.jsx)(n.a,{href:"/docs/3.10/operator-guide/auth/keycloak#configuration",children:"Install Keycloak"})," page."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Add the Helm charts repository:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"helm repo add epamedp https://epam.github.io/edp-helm-charts/stable\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Choose the required Helm chart version:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"helm search repo epamedp/edp-install\nNAME                    CHART VERSION   APP VERSION     DESCRIPTION\nepamedp/edp-install     3.10.5          3.10.5           A Helm chart for KubeRocketCI Platform\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"It is highly recommended to use the latest released version."})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"KubeRocketCI can be integrated with the following version control systems:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://docs.github.com/en",children:"GitHub"})," (by default)"]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://docs.gitlab.com/",children:"GitLab"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://gerrit-review.googlesource.com/Documentation/",children:"Gerrit"})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["This integration implies in what system the development of the application will be or is already being carried out. The ",(0,i.jsx)(n.code,{children:"global.gitProviders"})," flag in the edp-install controls this integration:"]}),"\n",(0,i.jsx)(n.p,{children:"Global VCS configuration (can be multiple values):"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'title="values.yaml"',children:"...\nglobal:\n  gitProviders:\n    - gerrit\n    - github\n    - gitlab\n    - bitbucket\n...\n"})}),"\n",(0,i.jsx)(n.p,{children:"Tekton event listner configuration:"}),"\n",(0,i.jsxs)(a.A,{defaultValue:"github",values:[{label:"GitHub",value:"github"},{label:"GitLab",value:"gitlab"},{label:"Bitbucket",value:"bitbucket"},{label:"Gerrit",value:"gerrit"}],children:[(0,i.jsx)(o.A,{value:"github",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'title="values.yaml"',children:'...\nedp-tekton:\n  gitServers:\n    github:\n      gitProvider: github\n      host: github.com\n      webhook:\n        skipWebhookSSLVerification: false\n      eventListener:\n        enabled: true\n        resources:\n          requests:\n            memory: "64Mi"\n            cpu: "50m"\n          limits:\n            memory: "128Mi"\n            cpu: "500m"\n        ingress:\n          enabled: true\n...\n'})})}),(0,i.jsx)(o.A,{value:"gitlab",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'title="values.yaml"',children:'...\nedp-tekton:\n  gitServers:\n    gitlab:\n      gitProvider: gitlab\n      host: gitlab.com\n      webhook:\n        skipWebhookSSLVerification: false\n      eventListener:\n        enabled: true\n        resources:\n          requests:\n            memory: "64Mi"\n            cpu: "50m"\n          limits:\n            memory: "128Mi"\n            cpu: "500m"\n        ingress:\n          enabled: true\n...\n'})})}),(0,i.jsx)(o.A,{value:"bitbucket",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'title="values.yaml"',children:'...\nedp-tekton:\n  gitServers:\n    bitbucket:\n      gitProvider: bitbucket\n      host: bitbucket.org\n      webhook:\n        skipWebhookSSLVerification: false\n      eventListener:\n        enabled: true\n        resources:\n          requests:\n            memory: "64Mi"\n            cpu: "50m"\n          limits:\n            memory: "128Mi"\n            cpu: "500m"\n        ingress:\n          enabled: true\n...\n'})})}),(0,i.jsx)(o.A,{value:"gerrit",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'title="values.yaml"',children:"...\ngerrit-operator:\n  enabled: true\n...\nedp-tekton:\n  gitServers:\n    gerrit:\n      eventListener:\n        enabled: true\n        ingress:\n          enabled: false\n        resources:\n          limits:\n            cpu: 500m\n            memory: 128Mi\n          requests:\n            cpu: 50m\n            memory: 64Mi\n      gitProvider: gerrit\n      gitUser: edp-ci\n      host: gerrit.edp\n      nameSshKeySecret: gerrit-ciuser-sshkey\n      quickLink:\n        host: gerrit.example.com\n      sshPort: <gerrit_port>\n      webhook:\n        skipWebhookSSLVerification: false\n...\n"})})})]}),"\n",(0,i.jsxs)(n.p,{children:["Gerrit server can be deployed as a part of KubeRocketCI platform when the Gerrit is enabled.\nFor more details on how to integrate KubeRocketCI with GitLab or GitHub, please refer to the ",(0,i.jsx)(n.a,{href:"/docs/3.10/user-guide/add-git-server",children:"Add GitServer"})," page."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Configure Container Registry."}),"\n",(0,i.jsx)(n.p,{children:"KubeRocketCI supports integration with multiple container registries, providing flexibility for projects using either OpenShift or Kubernetes clusters.\nThe supported container registries include AWS ECR, DockerHub, Harbor, OpenShift (OCR), Nexus, and GitHub (GHCR). This integration simplifies the process\nof storing and managing container images across various environments."}),"\n",(0,i.jsxs)(n.p,{children:["For more details on integrating these container registries with KubeRocketCI, refer to the following documentation: ",(0,i.jsx)(n.a,{href:"/docs/3.10/user-guide/change-container-registry",children:"Container Registries Integration Guide"})," and ",(0,i.jsx)(n.a,{href:"/docs/3.10/user-guide/manage-container-registries",children:"Manage Container Registries"})]}),"\n",(0,i.jsxs)(n.p,{children:["For example, to enable ",(0,i.jsx)(n.a,{href:"/docs/3.10/operator-guide/artifacts-management/harbor-integration",children:"Harbor"})," as a registry storage, use the values below:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'global:\n  dockerRegistry:\n    type: "harbor"\n    url: "harbor.example.com"\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Install platform in the ",(0,i.jsx)(n.strong,{children:"krci"})," namespace with the Helm tool:"]}),"\n",(0,i.jsxs)(n.p,{children:["Check the parameters in the installation chart ",(0,i.jsx)(n.a,{href:"https://github.com/epam/edp-install/blob/v3.10.3/deploy-templates/values.yaml",children:"values.yaml"})," file."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"helm install krci epamedp/edp-install --wait --timeout=900s \\\n--version 3.10.5 \\\n--values values.yaml \\\n--namespace krci \\\n--create-namespace\n"})}),"\n",(0,i.jsx)(n.p,{children:"See the example on the parameters below:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'title="Example values.yaml file"',children:'global:\n  # -- platform type that can be either "kubernetes" or "openshift"\n  platform: "kubernetes"\n  # DNS wildcard for routing in the Kubernetes cluster;\n  dnsWildCard: "example.com"\n  # -- Administrators of your tenant\n  # -- Can be gerrit, github or gitlab. By default: github\n  gitProviders:\n    - github\n  dockerRegistry:\n    # -- Docker Registry endpoint\n    url: "<AWS_ACCOUNT_ID>.dkr.ecr.<AWS_REGION>.amazonaws.com"\n    type: "ecr"\n    space: "edp"\n\nsso:\n  enabled: false\n  # Keycloak address with which the platform will be integrated\n  keycloakUrl: "https://keycloak.example.com"\n  admins:\n    - "stub_user_one@example.com"\n  developers:\n    - "stub_user_one@example.com"\n    - "stub_user_two@example.com"\n\nedp-tekton:\n  # Tekton Kaniko configuration section\n  kaniko:\n    # -- AWS IAM role to be used for kaniko pod service account (IRSA). Format: arn:aws:iam::<AWS_ACCOUNT_ID>:role/<AWS_IAM_ROLE_NAME>\n    roleArn: arn:aws:iam::<AWS_ACCOUNT_ID>:role/<AWS_IAM_ROLE_NAME>\n  gitServers:\n    github:\n      gitProvider: github\n      host: github.com\n      webhook:\n        skipWebhookSSLVerification: false\n      eventListener:\n        enabled: true\n        resources:\n          requests:\n            memory: "64Mi"\n            cpu: "50m"\n          limits:\n            memory: "128Mi"\n            cpu: "500m"\n        ingress:\n          enabled: true\n\nedp-headlamp:\n  config:\n    oidc:\n      enabled: false\n'})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["Set ",(0,i.jsx)(n.code,{children:"global.platform=openshift"})," while deploying KubeRocketCI in OpenShift."]})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"The full installation with integration between tools will take at least 5 minutes."})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"To check if the installation is successful, run the command below:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"helm status krci -n krci\n"})}),"\n",(0,i.jsx)(n.p,{children:"You can also check ingress endpoints to get the Portal endpoint to enter Portal UI:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"kubectl get ingress portal -n krci\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Once KubeRocketCI is successfully installed, you can explore our ",(0,i.jsx)(n.a,{href:"/docs/3.10/use-cases/",children:"Use Cases"})," to try out the functionality of the KubeRocketCI platform."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/3.10/quick-start/platform-installation",children:"Quick Start"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/3.10/user-guide/add-git-server",children:"Manage Git Providers"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/3.10/operator-guide/kubernetes-cluster-settings",children:"Set Up Kubernetes"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/3.10/operator-guide/openshift-cluster-settings",children:"Set Up OpenShift"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/3.10/operator-guide/prerequisites",children:"KubeRocketCI Installation Prerequisites Overview"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/3.10/operator-guide/auth/ui-portal-oidc",children:"UI Portal OIDC Integration"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/3.10/developer-guide/artifacts-verification",children:"Verification of KubeRocketCI Artifacts"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},79329:(e,n,t)=>{t.d(n,{A:()=>a});t(96540);var r=t(34164);const i={tabItem:"tabItem_Ymn6"};var s=t(74848);function a(e){let{children:n,hidden:t,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,a),hidden:t,children:n})}},65537:(e,n,t)=>{t.d(n,{A:()=>y});var r=t(96540),i=t(34164),s=t(65627),a=t(56347),o=t(50372),l=t(30604),c=t(11861),u=t(78749);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:i}}=e;return{value:n,label:t,attributes:r,default:i}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const i=(0,a.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(i.location.search);n.set(s,e),i.replace({...i.location,search:n.toString()})}),[s,i])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,s=h(e),[a,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[c,d]=m({queryString:t,groupId:i}),[g,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,s]=(0,u.Dv)(t);return[i,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:i}),f=(()=>{const e=c??g;return p({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{f&&l(f)}),[f]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=t(9136);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(74848);function k(e){let{className:n,block:t,selectedValue:r,selectValue:a,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const n=e.currentTarget,t=l.indexOf(n),i=o[t].value;i!==r&&(c(n),a(i))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>{l.push(e)},onKeyDown:d,onClick:u,...s,className:(0,i.A)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:s}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function j(e){const n=g(e);return(0,x.jsxs)("div",{className:(0,i.A)("tabs-container",f.tabList),children:[(0,x.jsx)(k,{...n,...e}),(0,x.jsx)(v,{...n,...e})]})}function y(e){const n=(0,b.A)();return(0,x.jsx)(j,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var r=t(96540);const i={},s=r.createContext(i);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);