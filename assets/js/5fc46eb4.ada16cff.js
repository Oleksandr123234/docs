"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[52902],{45569:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"operator-guide/add-ons-overview","title":"Install via Add-Ons","description":"Overview of Cluster Add-Ons for KubeRocketCI, explaining how to seamlessly integrate additional components like SonarQube, Nexus, Keycloak, and Jira using Argo CD applications.","source":"@site/versioned_docs/version-3.10/operator-guide/add-ons-overview.md","sourceDirName":"operator-guide","slug":"/operator-guide/add-ons-overview","permalink":"/docs/operator-guide/add-ons-overview","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/operator-guide/add-ons-overview.md","tags":[],"version":"3.10","lastUpdatedBy":"Oleksandr_Stepanov@epam.com","lastUpdatedAt":1740746844000,"frontMatter":{"title":"Install via Add-Ons","description":"Overview of Cluster Add-Ons for KubeRocketCI, explaining how to seamlessly integrate additional components like SonarQube, Nexus, Keycloak, and Jira using Argo CD applications.","sidebar_label":"Install via Add-Ons"},"sidebar":"operatorGuideSidebar","previous":{"title":"Install Argo CD","permalink":"/docs/operator-guide/install-argocd"},"next":{"title":"Prerequisites Overview","permalink":"/docs/operator-guide/prerequisites"}}');var l=n(74848),i=n(28453);const r={title:"Install via Add-Ons",description:"Overview of Cluster Add-Ons for KubeRocketCI, explaining how to seamlessly integrate additional components like SonarQube, Nexus, Keycloak, and Jira using Argo CD applications.",sidebar_label:"Install via Add-Ons"},a="Install via Add-Ons",d={},o=[{value:"What Are Add-Ons",id:"what-are-add-ons",level:2},{value:"Add-Ons Repository Structure",id:"add-ons-repository-structure",level:2},{value:"Enable KubeRocketCI Add-Ons",id:"enable-kuberocketci-add-ons",level:2},{value:"Install Add-Ons",id:"install-add-ons",level:2},{value:"Available Add-Ons List",id:"available-add-ons-list",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{Details:s,Head:r}=t;return s||p("Details",!0),r||p("Head",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.header,{children:(0,l.jsx)(t.h1,{id:"install-via-add-ons",children:"Install via Add-Ons"})}),"\n",(0,l.jsx)(r,{children:(0,l.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/operator-guide/add-ons-overview/"})}),"\n",(0,l.jsx)(t.p,{children:"This page provides an overview of Cluster Add-Ons for KubeRocketCI, including their purpose, benefits, and usage."}),"\n",(0,l.jsx)(t.h2,{id:"what-are-add-ons",children:"What Are Add-Ons"}),"\n",(0,l.jsx)(t.p,{children:"KubeRocketCI Add-Ons is essentially a Kubernetes-based deployment pattern that allows users to easily install additional components for the platform using Argo CD applications."}),"\n",(0,l.jsxs)(t.p,{children:["Add-Ons have been introduced into KubeRocketCI starting from version 3.4.0. They empower users to seamlessly integrate the platform with various additional components, such as SonarQube, Nexus, Keycloak, Jira, and more. This eliminates the need for manual installations, as described in the ",(0,l.jsx)(t.a,{href:"/docs/operator-guide/install-kuberocketci",children:"Install KubeRocketCI"})," page."]}),"\n",(0,l.jsx)(t.p,{children:"In a nutshell, Add-Ons are separate Helm Charts that can be installed with just one click using the Argo CD tool."}),"\n",(0,l.jsx)(t.h2,{id:"add-ons-repository-structure",children:"Add-Ons Repository Structure"}),"\n",(0,l.jsxs)(t.p,{children:["All the Add-Ons for KubeRocketCI are stored in our ",(0,l.jsx)(t.a,{href:"https://github.com/epam/edp-cluster-add-ons",children:"GitHub repository"})," following the GitOps approach. In addition to default Helm and Git files, the repository contains custom resources called Applications for Argo CD and application source code. The repository adheres to the GitOps approach, allowing for easy rollback of changes when necessary. The structure of the repository is as follows:"]}),"\n",(0,l.jsxs)(s,{children:[(0,l.jsx)("summary",{children:(0,l.jsx)("b",{children:"View: edp-cluster-add-ons repo structure"})}),(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-bash",children:"edp-cluster-add-ons\n\u251c\u2500\u2500 argo-cd\n\u2502   \u251c\u2500\u2500 Chart.yaml\n\u2502   \u251c\u2500\u2500 README.md\n\u2502   \u251c\u2500\u2500 templates\n\u2502   \u2502   \u251c\u2500\u2500 appProjectCore.yaml\n\u2502   \u2502   \u251c\u2500\u2500 appProjectKRCI.yaml\n\u2502   \u2502   \u251c\u2500\u2500 ...\n\u2502   \u2514\u2500\u2500 values.yaml\n\u251c\u2500\u2500 ...\n\u251c\u2500\u2500 clusters\n\u2502   \u251c\u2500\u2500 core\n\u2502   \u2502   \u251c\u2500\u2500 addons\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 atlantis\n\u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 Chart.yaml\n\u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 README.md\n\u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 templates\n\u2502   \u2502   \u2502   \u2502   \u2514\u2500\u2500 values.yaml\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 aws-efs-csi-driver\n\u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 Chart.yaml\n\u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 README.md\n\u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 templates\n\u2502   \u2502   \u2502   \u2502   \u2514\u2500\u2500 values.yaml\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 ...\n\u2502   \u2502   \u251c\u2500\u2500 apps\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 templates\n\u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 atlantis.yaml\n\u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 aws-efs-csi-driver.yaml\n\u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 ...\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 Chart.yaml\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 README.md\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 values.yaml\n\u2502   \u2502   \u2514\u2500\u2500 bootstrap-addons.yaml\n\u2502   \u2514\u2500\u2500 prod\n\u251c\u2500\u2500 ...\n"})})]}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:"argo-cd"})," - The directory containing the Helm chart for deploying the main Argo CD instance and prepared project templates."]}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:"clusters"})," - A directory for organizing configurations and Helm charts specific to individual clusters. Each subdirectory corresponds to a particular cluster environment (e.g., core, prod, or dev)."]}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:"addons"})," - The directory containing subdirectories with Helm charts for applications to install, such as Nexus, SonarQube, Keycloak, etc. See the full add-ons list ",(0,l.jsx)(t.a,{href:"#available-add-ons-list",children:"below"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:"apps"})," - Contains application ",(0,l.jsx)(t.code,{children:"templates"})," directory used to create Argo CD application. The deployment of these applications is managed by modifying the ",(0,l.jsx)(t.code,{children:"apps/values.yaml"})," file, where you can enable or disable specific applications."]}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:"bootstrap-addons.yaml"})," - The manifest file defining the app of apps application responsible for deploying all enabled application to the cluster. This manifest is applied manually."]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(t.h2,{id:"enable-kuberocketci-add-ons",children:"Enable KubeRocketCI Add-Ons"}),"\n",(0,l.jsx)(t.p,{children:"To enable Add-Ons, it is necessary to have the configured Argo CD, and connect and synchronize the forked repository. To do this, follow the guidelines below:"}),"\n",(0,l.jsxs)(t.ol,{children:["\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsxs)(t.p,{children:["Create a fork of the ",(0,l.jsx)(t.a,{href:"https://github.com/epam/edp-cluster-add-ons",children:"Add-Ons repository"})," in your personal Git account."]}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsxs)(t.p,{children:["Align ",(0,l.jsx)(t.strong,{children:"repoUrl"})," in ",(0,l.jsx)(t.a,{href:"https://github.com/epam/edp-cluster-add-ons/blob/main/clusters/core/apps/values.yaml#L14",children:"/clusters/core/apps/values.yaml"}),", ",(0,l.jsx)(t.a,{href:"https://github.com/epam/edp-cluster-add-ons/blob/main/clusters/core/bootstrap-addons.yaml#L16",children:"/clusters/core/bootstrap-addons.yaml"})," and ",(0,l.jsx)(t.strong,{children:"repoSource"})," in the ",(0,l.jsx)(t.a,{href:"https://github.com/epam/edp-cluster-add-ons/blob/main/argo-cd/templates/appProjectCore.yaml#L36",children:"/argo-cd/templates/appProjectCore.yaml"}),", ",(0,l.jsx)(t.a,{href:"https://github.com/epam/edp-cluster-add-ons/blob/main/argo-cd/templates/appProjectKRCI.yaml#L55",children:"/argo-cd/templates/appProjectCore.yaml"})," files of the repository, specify the SSH URL of your fork. For GitHub, replace ",(0,l.jsx)(t.code,{children:"kuberocketci"})," with your ",(0,l.jsx)(t.code,{children:"<github_account_name>"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsxs)(t.p,{children:["Clone a forked add-ons repository to your local machine and install pre-configured ",(0,l.jsx)(t.strong,{children:"Argo CD"})," Helm chart from ",(0,l.jsx)(t.code,{children:"/argo-cd"})," folder using the command below:"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-bash",children:"helm install argocd argo-cd -n argocd --create-namespace\n"})}),"\n",(0,l.jsxs)(t.ol,{start:"4",children:["\n",(0,l.jsx)(t.li,{children:"(Optional) If you don't have an ingress controller created in your Kubernetes cluster, enable port-forwarding for the Argo CD service using the command below:"}),"\n"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-bash",children:"kubectl port-forward -n argocd service/argo-cd-argocd-server 65080:80\n"})}),"\n",(0,l.jsxs)(t.p,{children:["This will forward the Argo CD service to ",(0,l.jsx)(t.code,{children:"http://localhost:65080"})," on your local machine. Open this URL in your browser to access the Argo CD interface."]}),"\n",(0,l.jsxs)(t.ol,{start:"5",children:["\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsxs)(t.p,{children:["As soon as Helm chart is deployed, open your Argo CD endpoint and navigate to ",(0,l.jsx)(t.strong,{children:"Settings"})," -> ",(0,l.jsx)(t.strong,{children:"Repositories"}),". Connect your repository where you have the values.yaml files changed by clicking the ",(0,l.jsx)(t.strong,{children:"+ CONNECT REPO"})," button:"]}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.img,{alt:"Connect the forked repository",src:n(3521).A+"",title:"Connect the forked repository",width:"1948",height:"1162"})}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsxs)(t.p,{children:["In the appeared window, fill in the following fields and click the ",(0,l.jsx)(t.strong,{children:"CONNECT"})," button:"]}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:["Choose your connection method - ",(0,l.jsx)(t.code,{children:"VIA SSH"}),";"]}),"\n",(0,l.jsxs)(t.li,{children:["Name - ",(0,l.jsx)(t.code,{children:"addons-demo"})," (optional);"]}),"\n",(0,l.jsx)(t.li,{children:"Project - select project;"}),"\n",(0,l.jsxs)(t.li,{children:["Repository URL - enter the ",(0,l.jsx)(t.code,{children:"SSH URL"})," of your forked repository (ssh://git@github.com:22/",(0,l.jsx)(t.code,{children:"<github_account_name>"}),"/edp-cluster-add-ons.git);"]}),"\n"]}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.img,{alt:"Repository parameters",src:n(62794).A+"",title:"Repository parameters",width:"1934",height:"1166"})}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsx)(t.p,{children:"As soon as the repository is connected, the new item will appear in the repository list:"}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.img,{alt:"Connected repository",src:n(12180).A+"",title:"Connected repository",width:"1943",height:"1162"})}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsxs)(t.p,{children:["Apply the add-ons management application manifest and open ",(0,l.jsx)(t.strong,{children:"Application"})," tab:"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-bash",children:"kubectl apply -f edp-cluster-add-ons/clusters/core/bootstrap-addons.yaml -n argocd\n"})}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.img,{alt:"Applications list",src:n(97805).A+"",title:"Applications list",width:"1965",height:"1159"})}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsxs)(t.p,{children:["Click the ",(0,l.jsx)(t.strong,{children:"addon-core"})," application to open its details:"]}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.img,{alt:"Add-ons management menu",src:n(99592).A+"",title:"Add-ons management menu",width:"1961",height:"1158"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(t.h2,{id:"install-add-ons",children:"Install Add-Ons"}),"\n",(0,l.jsx)(t.p,{children:"Now that Add-Ons are enabled in Argo CD, they can be installed by following the steps below:"}),"\n",(0,l.jsxs)(t.ol,{children:["\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsx)(t.p,{children:"Choose the Add-On to install."}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsxs)(t.p,{children:["Enable the Add-Ons chosen in the ",(0,l.jsx)(t.a,{href:"https://github.com/epam/edp-cluster-add-ons/blob/main/clusters/core/apps/values.yaml",children:"/clusters/core/apps/values.yaml"})," file. You can also re-define Add-On parameters. Refer to the example below:"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-bash",children:"sonar:\n  createNamespace: true\n  enable: true\n\nsonar-operator:\n  createNamespace: true\n  enable: true\n"})}),"\n",(0,l.jsxs)(t.ol,{start:"3",children:["\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsxs)(t.p,{children:["Navigate to the Argo CD Add-Ons application. On the chosen Add-On, click the ",(0,l.jsx)(t.strong,{children:"\u22ee"})," button and then ",(0,l.jsx)(t.strong,{children:"Details"}),":"]}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.img,{alt:"Open the Add-On",src:n(51600).A+"",title:"Open Add-Ons",width:"1960",height:"1159"})}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsxs)(t.p,{children:["To install the Add-On, click the ",(0,l.jsx)(t.strong,{children:"\u22ee"})," button -> ",(0,l.jsx)(t.strong,{children:"Sync"}),":"]}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.img,{alt:"Install Add-Ons",src:n(80247).A+"",title:"Install Add-Ons",width:"1959",height:"1159"})}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsxs)(t.p,{children:["Once the Add-On is installed, the ",(0,l.jsx)(t.em,{children:"Sync OK"})," message will appear in the Add-On status bar:"]}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.img,{alt:"Sync OK message",src:n(40464).A+"",title:"Sync OK message",width:"1961",height:"1159"})}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsx)(t.p,{children:"Open the application details by clicking on the little square with an arrow underneath the Add-On name:"}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.img,{alt:"Open details",src:n(4631).A+"",title:"Open details",width:"1961",height:"1159"})}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsxs)(t.p,{children:["By default in all addons application ",(0,l.jsx)(t.code,{children:"auto sync is not enabled"})," to install application click ",(0,l.jsx)(t.strong,{children:"Sync"})," button."]}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.img,{alt:"Open details",src:n(23980).A+"",title:"Open details",width:"1949",height:"1163"})}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsxs)(t.p,{children:["Track application resources and status in the ",(0,l.jsx)(t.strong,{children:"App details"})," menu:"]}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.img,{alt:"Application details",src:n(93619).A+"",title:"Application details",width:"1958",height:"1162"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(t.p,{children:"Argo CD provides excellent observability and monitoring capabilities for its resources, which is particularly beneficial when utilizing KubeRocketCI Add-Ons."}),"\n",(0,l.jsx)(t.h2,{id:"available-add-ons-list",children:"Available Add-Ons List"}),"\n",(0,l.jsx)(t.p,{children:"The list of the available Add-Ons:"}),"\n",(0,l.jsx)(t.admonition,{type:"info",children:(0,l.jsxs)(t.p,{children:["Consult repository ",(0,l.jsx)(t.a,{href:"https://github.com/epam/edp-cluster-add-ons?tab=readme-ov-file#available-add-ons",children:"README.md"})," for the most up-to-date information."]})}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"Default"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Argo CD"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"A GitOps continuous delivery tool that helps automate the deployment, configuration, and lifecycle management of applications in Kubernetes clusters."}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"false"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"AWS EFS CSI Driver"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"A Container Storage Interface (CSI) driver that enables the dynamic provisioning of Amazon Elastic File System (EFS) volumes in Kubernetes clusters."}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"false"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Cert Manager"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"A native Kubernetes certificate management controller that automates the issuance and renewal of TLS certificates."}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"false"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Capsule"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"A multi-tenancy solution for Kubernetes clusters that provides each tenant with a dedicated namespace where they can freely run their workloads with resource quotas."}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"false"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Capsule tenant"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"A specific tenant within the Capsule multi-tenancy solution. Each tenant has its own isolated environment within the Kubernetes cluster."}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"false"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"DefectDojo"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"A security vulnerability management tool that allows tracking and managing security findings in applications."}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"false"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"DependencyTrack"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"A Software Composition Analysis (SCA) platform that helps identify and manage open-source dependencies and their associated vulnerabilities."}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"false"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"KubeRocketCI(EDP)"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"An internal platform created by EPAM to enhance software delivery processes using DevOps principles and tools."}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"false"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Extensions OIDC"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"KubeRocketCI Helm chart to provision OIDC clients for different Add-Ons using EDP Keycloak Operator."}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"false"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"External Secrets"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"A Kubernetes Operator that fetches secrets from external secret management systems and injects them as Kubernetes Secrets."}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"false"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Fluent Bit"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"A lightweight and efficient log processor and forwarder that collects and routes logs from various sources in Kubernetes clusters."}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"false"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Harbor"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"A cloud-native container image registry that provides support for vulnerability scanning, policy-based image replication, and more."}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"false"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Ingress nginx"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"An Ingress controller that provides external access to services running within a Kubernetes cluster using Nginx as the underlying server."}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"false"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Jaeger Operator"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"An operator for deploying and managing Jaeger, an end-to-end distributed tracing system, in Kubernetes clusters."}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"false"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Keycloak"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"An open-source Identity and Access Management (IAM) solution that enables authentication, authorization, and user management in Kubernetes clusters."}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"false"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Keycloak PostgreSQL"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"A PostgreSQL database operator that simplifies the deployment and management of PostgreSQL instances in Kubernetes clusters."}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"false"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"MinIO Operator"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"An operator that simplifies the deployment and management of MinIO, a high-performance object storage server compatible with Amazon S3, in Kubernetes clusters."}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"false"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Nexus"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Serves as a repository manager, enabling the proxying, aggregation, and management of dependencies, as well as the storage of artifacts."}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"false"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Nexus Operator"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"A tool designed to streamline the handling of Nexus resources and configurations, facilitating the proxying, collection, and management of dependencies within a repository manager."}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"false"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"OpenSearch"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"A community-driven, open-source search and analytics engine that provides scalable and distributed search capabilities for Kubernetes clusters."}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"false"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"OpenTelemetry Operator"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"An operator for automating the deployment and management of OpenTelemetry, a set of observability tools for capturing, analyzing, and exporting telemetry data."}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"false"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"PostgreSQL Operator"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"An operator for running and managing PostgreSQL databases in Kubernetes clusters with high availability and scalability."}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"false"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Report Portal"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"An powered test automation dashboard that allows you to analyze test results, identify issues, and track testing progress."}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"false"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Prometheus Operator"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"An operator that simplifies the deployment and management of Prometheus, a monitoring and alerting toolkit, in Kubernetes clusters."}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"false"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Redis Operator"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"An operator for managing Redis, an in-memory data structure store, in Kubernetes clusters, providing high availability and horizontal scalability."}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"false"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Sonar"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"A comprehensive open-source platform dedicated to the continuous evaluation of code quality, automatically scrutinizing code to identify bugs, code smells, and security vulnerabilities."}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"false"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Sonar Operator"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"An operator that simplifies the management and configuration of SonarQube."}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"false"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"StorageClass"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"A Kubernetes resource that provides a way to define different classes of storage with different performance characteristics for persistent volumes."}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"false"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Tekton"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"A flexible and cloud-native framework for building, testing, and deploying applications using Kubernetes-native workflows."}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"false"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Tekton-cache"}),(0,l.jsx)(t.td,{style:{textAlign:"left"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"false"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Vault"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"An open-source secrets management solution that provides secure storage, encryption, and access control for sensitive data in Kubernetes clusters."}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"false"})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}function p(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},23980:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/acgo_cd_sync_sonar_app-aa45e18e35b885b5397edf6ea433ca99.png"},99592:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/argo_cd_app_of_apps-68e0a1a42d57099218f0e3dc5ac4c1e8.png"},97805:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/argo_cd_application_list-c6ab7176bd1f4671c3bb622049624766.png"},93619:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/argo_cd_application_status-62b50eb93cae1010fef617700d2fad33.png"},3521:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/argo_cd_connect_repo-e376b631299508a60555c81ba7cda28a.png"},12180:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/argo_cd_connected_repo-c2249840a642d74e9399d4327341f0b5.png"},4631:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/argo_cd_open_details_sonar-68553bfce4873f465af3e8aae8f7943c.png"},62794:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/argo_cd_repo_fields-0a0122fbf8032f38dbc4ed98b7fff361.png"},40464:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/argo_cd_sync_ok-68553bfce4873f465af3e8aae8f7943c.png"},51600:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/argo_cd_sync_schonen_app-75c84cbf197b3cec0bfa3b638a6b7dd8.png"},80247:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/argocd_synchronize-838d018f3938053a58d8e3e4b0e1a276.png"},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var s=n(96540);const l={},i=s.createContext(l);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);