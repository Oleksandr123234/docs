"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[71304],{44690:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"use-cases/deploy-application-from-feature-branch","title":"Deploy Application From a Feature Branch","description":"Master the deployment of feature branches with KubeRocketCI for efficient testing and deployment, ensuring seamless integration and quality control in development workflows.","source":"@site/versioned_docs/version-3.10/use-cases/deploy-application-from-feature-branch.md","sourceDirName":"use-cases","slug":"/use-cases/deploy-application-from-feature-branch","permalink":"/docs/use-cases/deploy-application-from-feature-branch","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/use-cases/deploy-application-from-feature-branch.md","tags":[],"version":"3.10","lastUpdatedBy":"Oleksandr_Stepanov@epam.com","lastUpdatedAt":1739969251000,"frontMatter":{"title":"Deploy Application From a Feature Branch","description":"Master the deployment of feature branches with KubeRocketCI for efficient testing and deployment, ensuring seamless integration and quality control in development workflows.","sidebar_label":"Deploy Application From a Feature Branch"},"sidebar":"useCasesSidebar","previous":{"title":"Set Test Suite Parameters Using Environment Variables in CD Pipelines","permalink":"/docs/use-cases/cd-autotests-run-with-env-variables"}}');var s=t(74848),l=t(28453);const r={title:"Deploy Application From a Feature Branch",description:"Master the deployment of feature branches with KubeRocketCI for efficient testing and deployment, ensuring seamless integration and quality control in development workflows.",sidebar_label:"Deploy Application From a Feature Branch"},a="Deploying Feature Branches With KubeRocketCI: A Comprehensive Guide for Efficient Application Testing and Deployment",o={},c=[{value:"Preconditions",id:"preconditions",level:3},{value:"Goals",id:"goals",level:3},{value:"Scenario",id:"scenario",level:2},{value:"Create Feature Branch",id:"create-feature-branch",level:3},{value:"Deploy Feature Branch",id:"deploy-feature-branch",level:3},{value:"Create Deployment Flow",id:"create-deployment-flow",level:4},{value:"Create Environment",id:"create-environment",level:4},{value:"Deploy Application",id:"deploy-application",level:4},{value:"Deploy With Custom Parameters",id:"deploy-with-custom-parameters",level:3},{value:"Cleanup",id:"cleanup",level:3},{value:"Delete Feature Environment",id:"delete-feature-environment",level:4},{value:"Delete Feature Branch",id:"delete-feature-branch",level:4},{value:"Related Articles",id:"related-articles",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components},{Head:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"deploying-feature-branches-with-kuberocketci-a-comprehensive-guide-for-efficient-application-testing-and-deployment",children:"Deploying Feature Branches With KubeRocketCI: A Comprehensive Guide for Efficient Application Testing and Deployment"})}),"\n",(0,s.jsx)(i,{children:(0,s.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/use-cases/deploy-application-from-feature-branch/"})}),"\n",(0,s.jsx)(n.p,{children:"Deploying feature branches is crucial for testing activities, including manual testing of the product's functionality, running quality gates, and verifying dependencies or integrations with other components."}),"\n",(0,s.jsx)(n.p,{children:"The KubeRocketCI platform enables the deployment of feature environments straight from feature branches. This guide offers comprehensive instructions for managing and deploying these branches."}),"\n",(0,s.jsx)(n.h3,{id:"preconditions",children:"Preconditions"}),"\n",(0,s.jsx)(n.p,{children:"Before you start passing the use case, ensure to meet the following requirements:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["KubeRocketCI instance is ",(0,s.jsx)(n.a,{href:"/docs/operator-guide/prerequisites",children:"configured"})," with ",(0,s.jsx)(n.a,{href:"/docs/user-guide/gitops",children:"GitOps"})," repository."]}),"\n",(0,s.jsxs)(n.li,{children:["Developer has access to the KubeRocketCI instances using the ",(0,s.jsx)(n.a,{href:"/docs/operator-guide/auth/platform-auth-model",children:"Single-Sign-On"})," approach or via token."]}),"\n",(0,s.jsxs)(n.li,{children:["Developer has access to the KubeRocketCI platform under the ",(0,s.jsx)(n.a,{href:"/docs/operator-guide/auth/platform-auth-model#keycloak-groups",children:"Developer"})," role."]}),"\n",(0,s.jsxs)(n.li,{children:["Developer has merge permissions in ",(0,s.jsx)(n.a,{href:"/docs/user-guide/gitops",children:"Bitbucket"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"Application you want to add a branch to is onboarded in KubeRocketCI."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"goals",children:"Goals"}),"\n",(0,s.jsx)(n.p,{children:"Below are the goals to complete in the use case:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Onboard a feature branch for the application."}),"\n",(0,s.jsx)(n.li,{children:"Configure GitOps approach for the environment by adding a values.yaml file with application parameters within it."}),"\n",(0,s.jsx)(n.li,{children:"Deploy application with redefined parameters."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"scenario",children:"Scenario"}),"\n",(0,s.jsx)(n.p,{children:"The use case scenario contains the following stages:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Create a feature branch"}),": Create a feature branch and build artifact for it."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Create a deployment flow"}),": Create a deployment flow that contains an environment and deploy application within the environment."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Configure application parameters"}),": Adjust a GitOps repository by adding custom application configuration into it."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Apply custom settings for application"}),": Deploy application with custom parameters."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"create-feature-branch",children:"Create Feature Branch"}),"\n",(0,s.jsx)(n.p,{children:"There are two approaches to onboard a feature branch:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Create a Feature Branch via KubeRocketCI"}),": KubeRocketCI creates a new branch in Bitbucket."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Onboard an Existing Branch in KubeRocketCI"}),": Manually ",(0,s.jsx)(n.a,{href:"https://support.atlassian.com/bitbucket-cloud/docs/branch-a-repository/",children:"create the branch in Bitbucket"})," using the correct naming convention and then onboard it into KubeRocketCI."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"In this use case, we will follow the first approach to add a branch."}),"\n",(0,s.jsxs)(n.p,{children:["When creating a feature branch, ensure the branch name is lowercase to meet Kubernetes restrictions. As an example, we will use the ",(0,s.jsx)(n.code,{children:"feature/<jira-ticket>"})," pattern as a naming convention for feature branches."]}),"\n",(0,s.jsx)(n.p,{children:"To create a feature branch via KubeRocketCI. Follow these steps:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Open the KubeRocketCI portal and log into the platform:"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Login page",src:t(11473).A+"",title:"Login page",width:"1922",height:"1114"})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Navigate to the ",(0,s.jsx)(n.strong,{children:"Components"})," section and select the desired component by clicking its name."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click the ",(0,s.jsx)(n.strong,{children:"Create branch"})," button and fill in the form:"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Branch Name"}),": Specify the name (e.g., ",(0,s.jsx)(n.code,{children:"feature/tt-000"}),")."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"From Commit Hash"}),": Specify the commit hash or leave it empty for the latest commit."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Branch Version"}),": Provide a version tag for the branch."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Review Pipeline"}),": Leave the default pipeline."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Build Pipeline"}),": Leave the default pipeline."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Create branch button",src:t(33360).A+"",title:"Create branch button",width:"1922",height:"1114"})}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click ",(0,s.jsx)(n.strong,{children:"Create"})," to finalize the branch creation."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The branch will also be created in Bitbucket. Verify its creation in the repository:"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Codebase branches in Bitbucket",src:t(9877).A+"",title:"Codebase branches in Bitbucket",width:"1922",height:"1114"})}),"\n",(0,s.jsx)(n.p,{children:"Since we don't create merge request to merge our feature with the main branch, we need to manually trigger the build pipeline in KubeRocketCI portal."}),"\n",(0,s.jsxs)(n.ol,{start:"6",children:["\n",(0,s.jsxs)(n.li,{children:["Build the application using the ",(0,s.jsx)(n.strong,{children:"Build"})," button:"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Build button",src:t(17989).A+"",title:"Build button",width:"1922",height:"1114"})}),"\n",(0,s.jsxs)(n.ol,{start:"7",children:["\n",(0,s.jsx)(n.li,{children:"View the build pipeline run details by clicking the pipeline run name:"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Build pipeline details",src:t(40204).A+"",title:"Build pipeline details",width:"1922",height:"1114"})}),"\n",(0,s.jsx)(n.h3,{id:"deploy-feature-branch",children:"Deploy Feature Branch"}),"\n",(0,s.jsx)(n.p,{children:"Once you have completed the onboarding process for the feature branch, you can deploy its artifacts to a dedicated feature environment."}),"\n",(0,s.jsx)(n.h4,{id:"create-deployment-flow",children:"Create Deployment Flow"}),"\n",(0,s.jsxs)(n.p,{children:["We recommend using initials to name the deployment flow. For example, a user with the email ",(0,s.jsx)(n.code,{children:"firstname_lastname@example.com"})," should use ",(0,s.jsx)(n.code,{children:"fl"})," as the identifier."]}),"\n",(0,s.jsx)(n.p,{children:"To create a feature environment, follow the steps below:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Open the ",(0,s.jsx)(n.strong,{children:"Deployment Flows"})," section and click ",(0,s.jsx)(n.strong,{children:"Create Deployment Flow"}),":"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Create deployment flow button",src:t(2532).A+"",title:"Create deployment flow button",width:"1922",height:"1114"})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:["Select components and branches for the deployment flow. Disable the ",(0,s.jsx)(n.strong,{children:"Promote Applications"})," switcher for environments without Quality Gate promotion and click ",(0,s.jsx)(n.strong,{children:"Create"}),":"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Enter name window",src:t(41584).A+"",title:"Enter name window",width:"1922",height:"1114"})}),"\n",(0,s.jsx)(n.h4,{id:"create-environment",children:"Create Environment"}),"\n",(0,s.jsx)(n.p,{children:"The next step is to create an environment:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Select the deployment flow from the ",(0,s.jsx)(n.strong,{children:"Deployment Flows"})," section."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click the ",(0,s.jsx)(n.strong,{children:"Create Environment"})," button and fill in the form:"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Cluster"}),": Choose the target cluster."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Environment Name"}),": Specify the name (",(0,s.jsx)(n.code,{children:"dev"}),")."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Description"}),": Specify the description for the environment."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Deploy Pipeline Template"}),": Select the deployment pipeline (",(0,s.jsx)(n.code,{children:"deploy"}),")."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Namespace"}),": Use the pre-defined namespace without modifications."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Trigger Type"}),": Select ",(0,s.jsx)(n.code,{children:"Manual"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Clean Pipeline Template"}),": Choose the clean pipeline (",(0,s.jsx)(n.code,{children:"clean"}),")"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Create environment menu",src:t(84640).A+"",title:"Create environment menu",width:"1922",height:"1114"})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsxs)(n.li,{children:["Set Manual as the Quality Gate type and click ",(0,s.jsx)(n.strong,{children:"Create"}),":"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Add quality gates menu",src:t(18327).A+"",title:"Add quality gates menu",width:"1922",height:"1114"})}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsxs)(n.li,{children:["On the congratulations window, click ",(0,s.jsx)(n.strong,{children:"Go to environment"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The feature environment is now ready for deployment."}),"\n",(0,s.jsx)(n.h4,{id:"deploy-application",children:"Deploy Application"}),"\n",(0,s.jsx)(n.p,{children:"To deploy an application, follow the steps below:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsx)(n.strong,{children:"Configure Deploy"}),", select the image tag to be deployed, and proceed with the ",(0,s.jsx)(n.strong,{children:"Start Deploy"})," button:"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Application deployment",src:t(90774).A+"",title:"Application deployment",width:"1922",height:"1114"})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:["Verify the deployment status in the ",(0,s.jsx)(n.strong,{children:"Pipelines"})," section:"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Check deploy pipeline run",src:t(895).A+"",title:"Check deploy pipeline run",width:"1922",height:"1114"})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:"Click the pipeline run name to view its details:"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"View deploy pipeline details",src:t(46349).A+"",title:"View deploy pipeline details",width:"1922",height:"1114"})}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsxs)(n.li,{children:["Open application in Argo CD by clicking the ",(0,s.jsx)(n.strong,{children:"Argo CD"})," button:"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Check deploy pipeline run",src:t(15550).A+"",title:"Check deploy pipeline run",width:"1922",height:"1114"})}),"\n",(0,s.jsxs)(n.ol,{start:"5",children:["\n",(0,s.jsx)(n.li,{children:"View enhanced insights and log analysis:"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Argo CD application state",src:t(37569).A+"",title:"Argo CD application state",width:"1922",height:"1114"})}),"\n",(0,s.jsx)(n.h3,{id:"deploy-with-custom-parameters",children:"Deploy With Custom Parameters"}),"\n",(0,s.jsxs)(n.p,{children:["The platform utilizes a Helm chart found in the ",(0,s.jsx)(n.strong,{children:"deploy-templates"})," folder of each component repository. To deploy a feature branch with custom variables, select the ",(0,s.jsx)(n.strong,{children:"Values override"})," option on the environment page. The ",(0,s.jsx)(n.strong,{children:"Values override"})," option allows to redefine default parameters in the ",(0,s.jsx)(n.strong,{children:"deploy-templates"})," folder of the Helm chart."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["Before enabling this option, you must provide custom parameters for the application. To do this, please add the required values to the ",(0,s.jsx)(n.code,{children:"values.yaml"})," file in the GitOps repository, ensuring you follow the expected structure."]})}),"\n",(0,s.jsxs)(n.p,{children:["For the ",(0,s.jsx)(n.code,{children:"inventory-service"})," application, no Helm chart variables are defined yet. So, we will modify the Helm chart to add a parameter. If your Helm chart already has variables to redefine, you can proceed to step 4."]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"In KubeRocketCI, navigate back to the application and open the branch source code:"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Open application source code",src:t(64514).A+"",title:"Open application source code",width:"1922",height:"1114"})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:["Clone the application repository to the local machine. Checkout to the feature branch and paste the contents below to the ",(0,s.jsx)(n.code,{children:"deploy-templates/templates/deployment.yaml"})," and ",(0,s.jsx)(n.code,{children:"deploy-templates/values.yaml"})," files:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="values.yaml"',children:"\nextraEnv: {}\n\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="deploy-templates/deployment.yaml"',children:"...\n          ports:\n            - name: http\n              containerPort: {{ .Values.service.port }}\n              protocol: TCP\n          {{- if .Values.extraEnv }}\n          env:\n          {{- toYaml .Values.extraEnv | nindent 12 }}\n          {{- end }}\n          livenessProbe:\n            {{- toYaml .Values.livenessProbe | nindent 12 }}\n          readinessProbe:\n            {{- toYaml .Values.readinessProbe | nindent 12 }}\n\n...\n"})}),"\n",(0,s.jsx)(n.p,{children:"The resulting difference should look this way:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Open application source code",src:t(56112).A+"",title:"Open application source code",width:"1246",height:"546"})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Commit your changes and push your branch to the origin."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Open the GitOps repository by clicking the ",(0,s.jsx)(n.strong,{children:"Go to the source code"})," button:"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Go to the source code button",src:t(71410).A+"",title:"Go to the source code button",width:"1922",height:"1114"})}),"\n",(0,s.jsxs)(n.ol,{start:"5",children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Clone the GitOps repository to the local machine. Checkout to another branch and create a file by the ",(0,s.jsx)(n.code,{children:"<deployment-flow-name>/<environment-name>/<application-name>-values.yaml"})," pattern (in our case, ",(0,s.jsx)(n.code,{children:"fl/dev/notifications-service-values.yaml"}),")."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Open the ",(0,s.jsx)(n.code,{children:"<deployment-flow-name>/<environment-name>/<application-name>-values.yaml"})," file and paste the contents below:"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="values.yaml"',children:'\nextraEnv:\n  - name: NAME\n    value: "Hello from KubeRocketCI"\n\n'})}),"\n",(0,s.jsxs)(n.ol,{start:"7",children:["\n",(0,s.jsx)(n.li,{children:"Commit your changes, push your branch to the origin and create a pull request:"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Pull request details",src:t(71292).A+"",title:"Pull request details",width:"1922",height:"1114"})}),"\n",(0,s.jsxs)(n.ol,{start:"8",children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Merge the pull request."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["On the environment page, click the ",(0,s.jsx)(n.strong,{children:"Configure Deploy"})," button. When deploying an application, enable the ",(0,s.jsx)(n.strong,{children:"Values Override"})," option in the environment settings:"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Enable values override option",src:t(59909).A+"",title:"Enable values override option",width:"1922",height:"1114"})}),"\n",(0,s.jsxs)(n.p,{children:["When the ",(0,s.jsx)(n.strong,{children:"Values Override"})," option is enabled, the platform navigates to the GitOps repository to pull the parameters from the ",(0,s.jsx)(n.code,{children:"<application-name>-values.yaml"})," file and then redefines them in an Argo CD application accordingly."]}),"\n",(0,s.jsxs)(n.ol,{start:"10",children:["\n",(0,s.jsx)(n.li,{children:'If the application is deployed in the "in-cluster", open the pod terminal using a dedicated button in the environment details page:'}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Show logs button",src:t(99487).A+"",title:"Show logs button",width:"1922",height:"1114"})}),"\n",(0,s.jsxs)(n.ol,{start:"11",children:["\n",(0,s.jsx)(n.li,{children:"Run the following command to verify that the variable has been applied to the pod:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"env | grep NAME\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Show logs button",src:t(12931).A+"",title:"Show logs button",width:"1922",height:"1114"})}),"\n",(0,s.jsxs)(n.ol,{start:"12",children:["\n",(0,s.jsxs)(n.li,{children:["(Optional) If you deploy the application in the ",(0,s.jsx)(n.a,{href:"/docs/user-guide/add-cluster",children:"remote cluster"}),", you can open the deployed application in Argo CD and click the pod block:"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Enable values override option",src:t(37060).A+"",title:"Enable values override option",width:"1922",height:"1114"})}),"\n",(0,s.jsxs)(n.ol,{start:"13",children:["\n",(0,s.jsxs)(n.li,{children:["(Optional) In the ",(0,s.jsx)(n.strong,{children:"Terminal"})," tab, run the following command to verify that the variable has been applied to the pod:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"env | grep NAME\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Application terminal (Argo CD)",src:t(12931).A+"",title:"Application terminal (Argo CD)",width:"1922",height:"1114"})}),"\n",(0,s.jsx)(n.h3,{id:"cleanup",children:"Cleanup"}),"\n",(0,s.jsx)(n.p,{children:"After merging the feature branch, please delete the branch and environment."}),"\n",(0,s.jsx)(n.h4,{id:"delete-feature-environment",children:"Delete Feature Environment"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"In the KubeRocketCI portal, return to the environment."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Select application from the ",(0,s.jsx)(n.strong,{children:"Applications"})," tab and click the ",(0,s.jsx)(n.strong,{children:"Delete"})," button to remove the application from the environment:"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Delete application from environment",src:t(10350).A+"",title:"Delete application from environment",width:"1922",height:"1114"})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsxs)(n.li,{children:["Navigate to the ",(0,s.jsx)(n.strong,{children:"Deployment Flows"})," section. Click the actions button and select ",(0,s.jsx)(n.strong,{children:"Delete"}),":"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Delete deployment flow",src:t(65162).A+"",title:"Delete deployment flow",width:"1922",height:"1114"})}),"\n",(0,s.jsx)(n.h4,{id:"delete-feature-branch",children:"Delete Feature Branch"}),"\n",(0,s.jsx)(n.p,{children:"The last step is to delete a feature branch for the application:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Navigate to the ",(0,s.jsx)(n.strong,{children:"Components"})," section."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Open to the component where you want to delete the feature branch."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Delete the branch from the ",(0,s.jsx)(n.strong,{children:"Branches"})," tab:"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Delete branch in KubeRocketCI",src:t(47330).A+"",title:"Delete branch in KubeRocketCI",width:"1922",height:"1114"})}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsx)(n.li,{children:"Delete the feature branch from Bitbucket:"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Delete branch in Bitbucket",src:t(2361).A+"",title:"Delete branch in Bitbucket",width:"1922",height:"1114"})}),"\n",(0,s.jsx)(n.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/use-cases/",children:"Use Cases"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/user-guide/add-application",children:"Add Application"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/user-guide/add-cd-pipeline",children:"Add Deployment Flow"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/user-guide/manage-environments",children:"Manage Deployment Flows"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/user-guide/gitops",children:"Manage GitOps"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},56112:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/application-diff-11b44c22a3f0a29c20cb2e9dc989baf2.png"},37060:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/application-pod-a2536a1ea8f2ecb4f77de80690072d65.png"},64514:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/application-source-code-7003265b22e4e5d966b765de5aaca473.png"},12931:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/application-terminal-krci-6c35ca7c30e4ec30be23d63575f49cf9.png"},37569:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/argo-cd-state-97f70bcbad687e264343651a712ffc28.png"},9877:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/bitbucket-codebase-branches-cb0c6e905410ab1eaaaa3aea3159c88d.png"},17989:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/build-application-55de8da221f5a562e0c944dc8f904370.png"},40204:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/build-pipeline-details-4fde57846160d886f6c73b1ea6c12db6.png"},895:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/check-deploy-pipeline-43991597ab53cf1e9806a472773a2438.png"},33360:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/create-branch-button-cf5c5587871a5ec7989430b44d068938.png"},41584:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/create-deployment-flow-add-application-b32c6130ddc62b9dfa9416631d891e10.png"},2532:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/create-deployment-flow-enter-name-e9472f110751904d65c2227ec761282c.png"},18327:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/create-environment-add-qg-3a9f39dd012c8df246abfad1a5a305ee.png"},84640:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/create-environment-configure-stage-a85b395d52c95f52c65f3249c25d255a.png"},10350:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/delete-application-40362d7cfaad8c29c4bd6abc6646c3bb.png"},65162:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/delete-deployment-flow-29661b60b3551a1f6801fac25c2e5a51.png"},2361:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/delete-feature-branch-bitbucket-085a50261f6161db5cb2338c413e541a.png"},47330:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/delete-feature-branch-portal-fa8f38b3f88a89ceb7089fc82296288d.png"},90774:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/deploy-application-31d3f183b7c410539a4ed9a1023ddc82.png"},46349:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/deploy-pipeline-details-1836c1e57620a410e5d4aa746199d11b.png"},59909:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/enable-values-override-7157213dd4de675b8835beb436354904.png"},71292:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/gitops-difference-b4e394e4311da29c7ecf145f79441bb4.png"},71410:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/go-to-the-source-code-5114af6355ab71df8d2fe3ccf7724361.png"},11473:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/kuberocketci-login-page-779ac18422c1752b6ab7b70f533b399f.png"},15550:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/open-in-argo-cd-de765fa329d6235c3fdfd1ed4d9ec377.png"},99487:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/show-terminal-button-e620ba6d65fd597365acfa8ff597b2f2.png"},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var i=t(96540);const s={},l=i.createContext(s);function r(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);