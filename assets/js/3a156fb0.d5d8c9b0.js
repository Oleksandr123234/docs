"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[66607],{89812:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>p,frontMatter:()=>c,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"quick-start/create-application","title":"Create Application","description":"Step-by-step guide on creating a Go application using the Gin framework in KubeRocketCI via Marketplace, including build and deployment steps.","source":"@site/docs/quick-start/create-application.md","sourceDirName":"quick-start","slug":"/quick-start/create-application","permalink":"/docs/next/quick-start/create-application","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/quick-start/create-application.md","tags":[],"version":"current","lastUpdatedBy":"Oleksandr_Stepanov@epam.com","lastUpdatedAt":1740747157000,"frontMatter":{"title":"Create Application","description":"Step-by-step guide on creating a Go application using the Gin framework in KubeRocketCI via Marketplace, including build and deployment steps.","sidebar_label":"Create Application"},"sidebar":"quickStartSidebar","previous":{"title":"Integrate DockerHub","permalink":"/docs/next/quick-start/integrate-container-registry"},"next":{"title":"Integrate Argo CD","permalink":"/docs/next/quick-start/integrate-argocd"}}');var a=i(74848),s=i(28453);const c={title:"Create Application",description:"Step-by-step guide on creating a Go application using the Gin framework in KubeRocketCI via Marketplace, including build and deployment steps.",sidebar_label:"Create Application"},r="Create Application",o={},l=[{value:"Application Onboarding",id:"application-onboarding",level:2},{value:"Build Application",id:"build-application",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{Head:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"create-application",children:"Create Application"})}),"\n",(0,a.jsx)(t,{children:(0,a.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/quick-start/create-application/"})}),"\n",(0,a.jsx)(n.p,{children:"In KubeRocketCI, all software components, such as applications, libraries, Terraform infrastructures, and automated tests, are referred to as codebases. KubeRocketCI provides flexible methods for scaffolding these components."}),"\n",(0,a.jsxs)(n.p,{children:["This guide will walk you through the process of creating a Go application using the Gin framework. The ",(0,a.jsx)(n.a,{href:"/docs/next/user-guide/marketplace",children:"Marketplace"})," will be used to streamline the application creation process."]}),"\n",(0,a.jsx)(n.h2,{id:"application-onboarding",children:"Application Onboarding"}),"\n",(0,a.jsx)(n.p,{children:"To create the first application, complete the instructions below:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["In the KubeRocketCI, navigate to ",(0,a.jsx)(n.strong,{children:"Marketplace"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["In the ",(0,a.jsx)(n.strong,{children:"Marketplace"})," section, select ",(0,a.jsx)(n.strong,{children:"Web Applications with Gin Framework"}),":"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Marketplace applications",src:i(61619).A+"",title:"Marketplace applications",width:"1922",height:"1114"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["On the application template details window, click ",(0,a.jsx)(n.strong,{children:"Proceed"}),":"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Marketplace applications",src:i(75496).A+"",title:"Marketplace applications",width:"1922",height:"1114"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["In the appeared window, define the following values and click ",(0,a.jsx)(n.strong,{children:"Apply"}),":"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Component name: ",(0,a.jsx)(n.code,{children:"my-go-gin-app"})]}),"\n",(0,a.jsxs)(n.li,{children:["Description: ",(0,a.jsx)(n.code,{children:"My first application"})]}),"\n",(0,a.jsxs)(n.li,{children:["Git server: ",(0,a.jsx)(n.code,{children:"github"})]}),"\n",(0,a.jsxs)(n.li,{children:["Repository name: ",(0,a.jsx)(n.code,{children:"<github_account_name>/my-go-gin-app"})]}),"\n",(0,a.jsxs)(n.li,{children:["Codebase versioning type: ",(0,a.jsx)(n.code,{children:"edp"})]}),"\n",(0,a.jsxs)(n.li,{children:["Start version from: ",(0,a.jsx)(n.code,{children:"0.1.0"})]}),"\n",(0,a.jsxs)(n.li,{children:["Suffix: ",(0,a.jsx)(n.code,{children:"SNAPSHOT"})]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Application blank",src:i(73056).A+"",title:"Application blank",width:"1922",height:"1114"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["As soon as the codebase is created, navigate to it via the notification at the bottom left corner or click the ",(0,a.jsx)(n.strong,{children:"Components"})," section:"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Marketplace notification",src:i(53968).A+"",title:"Marketplace notification",width:"1922",height:"1114"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"build-application",children:"Build Application"}),"\n",(0,a.jsx)(n.p,{children:"Having created the Go application, proceed to build it by performing the following actions:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["In the ",(0,a.jsx)(n.a,{href:"https://sonarcloud.io/projects/create",children:"create project"})," page add new project to analyze it."]}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsx)(n.p,{children:"Project name in the Sonar cloud must be the same as codebase name."})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Add new project",src:i(33626).A+"",title:"Add new project",width:"1906",height:"1082"})}),"\n",(0,a.jsx)(n.p,{children:"Set the Previous version option and click Create project."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Add new project",src:i(87154).A+"",title:"Add new project",width:"1902",height:"1065"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["On the project menu, navigate to ",(0,a.jsx)(n.strong,{children:"Branches"})," menu, select ",(0,a.jsx)(n.code,{children:"master"})," branch and rename it to ",(0,a.jsx)(n.code,{children:"main"}),"."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Change default branch",src:i(52028).A+"",title:"Change default branch",width:"1900",height:"1085"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["On the ",(0,a.jsx)(n.a,{href:"https://sonarcloud.io/account/organizations",children:"account settings"})," copy the value of the SonarCloud organization name."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Organizations page",src:i(46137).A+"",title:"Organizations page",width:"1920",height:"1087"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["In the component details page, expand the application and click the ",(0,a.jsx)(n.strong,{children:"GIT"})," button:"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Marketplace notification",src:i(16743).A+"",title:"Application details",width:"1922",height:"1114"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["In the opened Source Code. In the ",(0,a.jsx)(n.code,{children:"main"})," branch in GitHub, open the ",(0,a.jsx)(n.code,{children:"sonar-project.properties"})," file and include the ",(0,a.jsx)(n.code,{children:"sonar.language=go"}),", and ",(0,a.jsx)(n.code,{children:"sonar.organization"})," parameters where ",(0,a.jsx)(n.code,{children:"sonar.organization"})," is equal to the value copied in the previous step, resulting in the following configuration:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ini",children:"sonar.projectKey=my-go-gin-app\nsonar.projectName=my-go-gin-app\nsonar.go.coverage.reportPaths=coverage.out\nsonar.test.inclusions=**/*_test.go\nsonar.exclusions=**/cmd/**,**/deploy/**,**/deploy-templates/**,**/*.groovy,**/config/**\nsonar.language=go\nsonar.organization=<organization-key>\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Commit the changes."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["In the component details page, click the ",(0,a.jsx)(n.strong,{children:"Trigger build pipeline run"})," button:"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Triggering pipeline run",src:i(5294).A+"",title:"Triggering pipeline run",width:"1922",height:"1114"})}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsx)(n.p,{children:"After first project scan, sonar creates Quality Gate for this project, and scan will be failed, rerun pipeline to analyze project with new Quality Gates."})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"To check the status of the build pipeline, click on its name:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Pipelinerun logs",src:i(62715).A+"",title:"Pipelinerun logs",width:"1922",height:"1114"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Once the build fails, click the failed task name to open the Tekton pipeline run:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Failure details",src:i(85702).A+"",title:"Failure details",width:"1922",height:"1114"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"In KubeRocketCI, initiate the build pipeline again and wait for its completion."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Successful pipelinerun",src:i(40070).A+"",title:"Successful pipelinerun",width:"1922",height:"1114"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Build pipelines in KubeRocketCI are specifically designed to generate an executable image of an application. Once the build process is complete, the resulting image can be deployed and run in a target environment."}),"\n",(0,a.jsxs)(n.p,{children:["Now that you have successfully built an application, the next step is to create an environment for deployment. In order to deploy the application, you will need to install and integrate Argo CD. To learn how to install and integrate Argo CD, please refer to the ",(0,a.jsx)(n.a,{href:"/docs/next/quick-start/integrate-argocd",children:"Integrate Argo CD"})," page."]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},73056:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/add_marketplace_app-c796b6c7281882e8b675b5aaf411b57d.png"},33626:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/add_sonar_project-04a16db352bd301e6e28cff415c40567.png"},87154:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/add_sonar_project2-11d62a00a881bd3222ffb37b7b15ab2d.png"},52028:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/change_default_branch-abfd874ea79b8f3fedd1af424ebb7d5c.png"},16743:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/go_to_source_code-c449f549fee0b121da9d69e8ca44316f.png"},75496:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/marketplace-template-details-3fa1f652231314b0318117023ddf0bfe.png"},61619:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/marketplace_application-5e823a9eb28da290ec2ca0b9d6b091c7.png"},53968:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/marketplace_notification-121b0335a99656091b4dc8bea87b76e9.png"},62715:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/pipelinerun_status-f50df71d351742140840ee2d54c03e20.png"},46137:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/sonar_org_page-da8b96b2cc2fabafd3c33372d2faf51b.png"},85702:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/sonar_step_status-02721fe21a0f072e08ec097d327a240e.png"},40070:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/successful_pipeline-4328e6b68be951b667968c99e76ac9e5.png"},5294:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/trigger_pipeline_run-82b1f80e9fe9f7eecc701cc85539e29b.png"},28453:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>r});var t=i(96540);const a={},s=t.createContext(a);function c(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);