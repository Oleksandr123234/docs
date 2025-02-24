"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[25536],{68365:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"operator-guide/install-ingress-nginx","title":"Install NGINX Ingress Controller","description":"Inspect the prerequisites and the main steps to perform for installing Install NGINX Ingress Controller on Kubernetes.","source":"@site/versioned_docs/version-3.10/operator-guide/install-ingress-nginx.md","sourceDirName":"operator-guide","slug":"/operator-guide/install-ingress-nginx","permalink":"/docs/operator-guide/install-ingress-nginx","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/operator-guide/install-ingress-nginx.md","tags":[],"version":"3.10","lastUpdatedBy":"Sergiy Kulanov","lastUpdatedAt":1737665576000,"frontMatter":{},"sidebar":"operatorGuideSidebar","previous":{"title":"Set Up OpenShift","permalink":"/docs/operator-guide/openshift-cluster-settings"},"next":{"title":"Install Tekton","permalink":"/docs/operator-guide/install-tekton"}}');var t=s(74848),i=s(28453);const l={},o="Install NGINX Ingress Controller",a={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2},{value:"Related Articles",id:"related-articles",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{Details:s,Head:r}=n;return s||u("Details",!0),r||u("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"install-nginx-ingress-controller",children:"Install NGINX Ingress Controller"})}),"\n",(0,t.jsx)(r,{children:(0,t.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/operator-guide/install-ingress-nginx/"})}),"\n",(0,t.jsxs)(n.p,{children:["Inspect the prerequisites and the main steps to perform for installing ",(0,t.jsx)(n.a,{href:"https://docs.nginx.com/nginx-ingress-controller/intro/overview/",children:"Install NGINX Ingress Controller"})," on Kubernetes."]}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Kubectl version 1.26+ is installed. Please refer to the ",(0,t.jsx)(n.a,{href:"https://kubernetes.io/releases/",children:"Kubernetes official website"})," for details."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://helm.sh",children:"Helm"})," version 3.10+ is installed. Please refer to the ",(0,t.jsx)(n.a,{href:"https://github.com/helm/helm/releases",children:"Helm page"})," on GitHub for details."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(n.p,{children:"To install the ingress-nginx chart, follow the steps below:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Create an ingress-nginx namespace:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"kubectl create namespace ingress-nginx\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Add a chart repository:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx\nhelm repo update\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Install the ingress-nginx chart:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"helm install ingress ingress-nginx/ingress-nginx \\\n--version 4.7.0 \\\n--values values.yaml \\\n--namespace ingress-nginx\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Check out the ",(0,t.jsx)(n.em,{children:"values.yaml"})," file sample of the ingress-nginx chart customization:"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)("b",{children:"View: values.yaml"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"controller:\n  addHeaders:\n    X-Content-Type-Options: nosniff\n    X-Frame-Options: SAMEORIGIN\n  resources:\n    limits:\n      memory: \"256Mi\"\n    requests:\n      cpu: \"50m\"\n      memory: \"128M\"\n  config:\n    ssl-redirect: 'true'\n    client-header-buffer-size: '64k'\n    http2-max-field-size: '64k'\n    http2-max-header-size: '64k'\n    large-client-header-buffers: '4 64k'\n    upstream-keepalive-timeout: '120'\n    keep-alive: '10'\n    use-forwarded-headers: 'true'\n    proxy-real-ip-cidr: '172.32.0.0/16'\n    proxy-buffer-size: '8k'\n\n  # To watch Ingress objects without the ingressClassName field set parameter value to true.\n  # https://kubernetes.github.io/ingress-nginx/#i-have-only-one-ingress-controller-in-my-cluster-what-should-i-do\n  watchIngressWithoutClass: true\n\n  service:\n    type: NodePort\n    nodePorts:\n      http: 32080\n      https: 32443\n  updateStrategy:\n    rollingUpdate:\n      maxUnavailable: 1\n    type: RollingUpdate\n  metrics:\n    enabled: true\ndefaultBackend:\n  enabled: true\nserviceAccount:\n  create: true\n  name: nginx-ingress-service-account\n"})})]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["Align value ",(0,t.jsx)(n.strong,{children:"controller.config.proxy-real-ip-cidr"})," with your ",(0,t.jsx)(n.a,{href:"https://kubernetes.github.io/ingress-nginx/user-guide/miscellaneous/#source-ip-address",children:"network settings"}),"."]})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["It is also possible to install the ingress controller via cluster add-ons. For details, please refer to the ",(0,t.jsx)(n.a,{href:"/docs/operator-guide/add-ons-overview",children:"Install via Add-Ons"})," page."]})}),"\n",(0,t.jsx)(n.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/operator-guide/add-ons-overview",children:"Install via Add-Ons"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/operator-guide/install-kuberocketci",children:"Install KubeRocketCI"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}function u(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>o});var r=s(96540);const t={},i=r.createContext(t);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);