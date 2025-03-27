"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[3953],{10617:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"operator-guide/ci/tekton-monitoring","title":"Pipeline Monitoring with Prometheus and Grafana","description":"Guide on integrating Tekton pipelines metrics with Prometheus and Grafana in KubeRocketCI for comprehensive monitoring and visualization.","source":"@site/versioned_docs/version-3.10/operator-guide/ci/tekton-monitoring.md","sourceDirName":"operator-guide/ci","slug":"/operator-guide/ci/tekton-monitoring","permalink":"/docs/3.10/operator-guide/ci/tekton-monitoring","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/operator-guide/ci/tekton-monitoring.md","tags":[],"version":"3.10","lastUpdatedBy":"Oleksandr_Stepanov@epam.com","lastUpdatedAt":1741605107000,"frontMatter":{"title":"Pipeline Monitoring with Prometheus and Grafana","description":"Guide on integrating Tekton pipelines metrics with Prometheus and Grafana in KubeRocketCI for comprehensive monitoring and visualization.","sidebar_label":"Pipeline Monitoring with Prometheus and Grafana"},"sidebar":"operatorGuideSidebar","previous":{"title":"Tekton Overview","permalink":"/docs/3.10/operator-guide/ci/tekton-overview"},"next":{"title":"Tekton Long-Term Log Storage","permalink":"/docs/3.10/operator-guide/ci/tekton-long-term-storage"}}');var r=t(74848),a=t(28453);const o={title:"Pipeline Monitoring with Prometheus and Grafana",description:"Guide on integrating Tekton pipelines metrics with Prometheus and Grafana in KubeRocketCI for comprehensive monitoring and visualization.",sidebar_label:"Pipeline Monitoring with Prometheus and Grafana"},s="Pipeline Monitoring with Prometheus and Grafana",l={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Integration Overview",id:"integration-overview",level:2},{value:"Integration via Service Monitor",id:"integration-via-service-monitor",level:2},{value:"Integration via edp-install Helm Chart",id:"integration-via-edp-install-helm-chart",level:2},{value:"Related Articles",id:"related-articles",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components},{Head:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"pipeline-monitoring-with-prometheus-and-grafana",children:"Pipeline Monitoring with Prometheus and Grafana"})}),"\n",(0,r.jsx)(i,{children:(0,r.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/operator-guide/ci/tekton-monitoring"})}),"\n",(0,r.jsx)(n.p,{children:"This documentation describes how to integrate tekton-pipelines metrics with Prometheus and Grafana monitoring stack."}),"\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsx)(n.p,{children:"Ensure the following requirements are met first before moving ahead:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://prometheus-community.github.io/helm-charts",children:"Kube prometheus stack"})," is installed;"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://github.com/tektoncd/pipeline/releases",children:"Tekton pipeline"})," is installed."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"integration-overview",children:"Integration Overview"}),"\n",(0,r.jsx)(n.p,{children:"Currently, there are two methods for integrating tekton-pipelines metrics with the Prometheus and Grafana monitoring stack."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#integration-via-service-monitor",children:"Integration via Service Monitor"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#integration-via-edp-install-helm-chart",children:"Integration via edp-install Helm Chart"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"integration-via-service-monitor",children:"Integration via Service Monitor"}),"\n",(0,r.jsx)(n.p,{children:"To implement Pipeline Monitoring using the Service Monitor resource, follow the steps below:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Create a Service Monitor resource file with the following configuration:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:"service-monitor.yaml",children:"apiVersion: monitoring.coreos.com/v1\nkind: ServiceMonitor\nmetadata:\n  labels:\n    release: prom               # kube-prometheus-stack release name\n  name: tekton-overview\nspec:\n  endpoints:\n    - interval: 10s\n      path: /metrics\n      port: http-metrics\n      scrapeTimeout: 10s\n  namespaceSelector:\n    matchNames:\n      - tekton-pipelines\n  selector:\n    matchLabels:\n      app.kubernetes.io/component: controller\n      app.kubernetes.io/part-of: tekton-pipelines\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Apply the created resource to the ",(0,r.jsx)(n.code,{children:"tekton-pipelines"})," namespace:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"kubectl apply -f service-monitor.yaml -n tekton-pipelines\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Download the ",(0,r.jsx)(n.a,{href:"https://grafana.com/grafana/dashboards/18321",children:"KubeRocketCi"})," dashboard:"]}),"\n",(0,r.jsx)(n.p,{children:"a. Click on the dashboard menu;"}),"\n",(0,r.jsxs)(n.p,{children:["b. In the upper right corner, click on the ",(0,r.jsx)(n.code,{children:"New"})," button. In the dropdown menu, click the ",(0,r.jsx)(n.code,{children:"Import"}),";"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Import dashboard grafana",src:t(26679).A+"",title:"Import Grafana dashboard",width:"3364",height:"1662"})}),"\n",(0,r.jsxs)(n.p,{children:["c. Select the downloaded ",(0,r.jsx)(n.code,{children:"18321_rev*.json"})," file;"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Import dashboard grafana options",src:t(37358).A+"",title:"Import Grafana dashboard: Options",width:"3364",height:"1662"})}),"\n",(0,r.jsx)(n.p,{children:"d. Type the name of the dashboard;"}),"\n",(0,r.jsx)(n.p,{children:"e. Select the folder for the dashboard;"}),"\n",(0,r.jsx)(n.p,{children:"f. Change the UID if necessary;"}),"\n",(0,r.jsxs)(n.p,{children:["g. Click the ",(0,r.jsx)(n.code,{children:"Import"})," button."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"As soon as the dashboard procedure is completed, you can track the newcoming metrics in the dashboard menu:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Tekton dashboard",src:t(332).A+"",title:"Tekton dashboard",width:"3582",height:"1852"})}),"\n",(0,r.jsx)(n.h2,{id:"integration-via-edp-install-helm-chart",children:"Integration via edp-install Helm Chart"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.a,{href:"https://github.com/epam/edp-install/",children:"edp-install"})," helm chart allows to integrate tekton-pipelines metrics with the Prometheus and Grafana stack through the ",(0,r.jsx)(n.code,{children:"edp-tekton.grafana.enabled"})," field in ",(0,r.jsx)(n.a,{href:"https://github.com/epam/edp-install/blob/d149baeb9756bdf113996620630f9b04f896e08d/deploy-templates/values.yaml#L309",children:"values.yaml"})," file.\nTo enable integration, set the ",(0,r.jsx)(n.code,{children:"edp-tekton.grafana.enabled"})," field to ",(0,r.jsx)(n.code,{children:"true"})," and apply the changes to the cluster."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:"values.yaml",children:"edp-tekton:\n  grafana:\n    enabled: true\n"})}),"\n",(0,r.jsxs)(n.p,{children:["After the changes are applied, the tekton-pipelines metrics will be available in the ",(0,r.jsx)(n.code,{children:"KRCI Tekton overview"})," Grafana dashboard:"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Tekton dashboard",src:t(86295).A+"",title:"Tekton dashboard is created",width:"3364",height:"1662"})}),"\n",(0,r.jsx)(n.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/3.10/operator-guide/install-tekton",children:"Install Tekton"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/3.10/operator-guide/install-kuberocketci",children:"Install KubeRocketCI"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},86295:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/grafana-dashboard-is-created-c56537b68fabbca6f5976436b0194d22.png"},37358:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/grafana-tekton-dasboard-import-options-80eed39e5e1efe273ec52ac5c710988d.png"},26679:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/grafana-tekton-dasboard-import-4af500d3ab1b3d0be3ab7cb86d6f2ca0.png"},332:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/tekton-dashboard-e75b492e24527d517a5c7d6dda230ade.png"},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>s});var i=t(96540);const r={},a=i.createContext(r);function o(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);