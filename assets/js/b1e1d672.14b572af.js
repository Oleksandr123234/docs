"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[23943],{82308:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"user-guide/build-pipeline","title":"Build Pipeline","description":"This section provides details on the Build pipeline of the KubeRocket CI/CD pipeline framework. Explore below the pipeline purpose, stages and possible actions to perform.","source":"@site/versioned_docs/version-3.10/user-guide/build-pipeline.md","sourceDirName":"user-guide","slug":"/user-guide/build-pipeline","permalink":"/docs/3.10/user-guide/build-pipeline","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/user-guide/build-pipeline.md","tags":[],"version":"3.10","lastUpdatedBy":"Sergiy Kulanov","lastUpdatedAt":1740847812000,"frontMatter":{}}');var s=n(74848),l=n(28453);const r={},a="Build Pipeline",d={},o=[{value:"Build Pipeline Purpose",id:"build-pipeline-purpose",level:2},{value:"Build Pipeline for Application and Library",id:"build-pipeline-for-application-and-library",level:2},{value:"Check the Tag in Kubernetes/OpenShift and Nexus",id:"check-the-tag-in-kubernetesopenshift-and-nexus",level:2},{value:"Configure and Start Pipeline Manually",id:"configure-and-start-pipeline-manually",level:2},{value:"Related Articles",id:"related-articles",level:3}];function c(e){const i={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",mermaid:"mermaid",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,l.R)(),...e.components},{Head:n}=i;return n||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"build-pipeline",children:"Build Pipeline"})}),"\n",(0,s.jsx)(n,{children:(0,s.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/user-guide/build-pipeline"})}),"\n",(0,s.jsx)(i.p,{children:"This section provides details on the Build pipeline of the KubeRocket CI/CD pipeline framework. Explore below the pipeline purpose, stages and possible actions to perform."}),"\n",(0,s.jsx)(i.h2,{id:"build-pipeline-purpose",children:"Build Pipeline Purpose"}),"\n",(0,s.jsx)(i.p,{children:"The purpose of the Build pipeline contains the following points:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Check out, test, tag and build an image from the mainstream branch after a patch set is submitted in order to inspect whether the integrated with the mainstream code fits all quality gates, can be built and tested;"}),"\n",(0,s.jsx)(i.li,{children:"Be triggered if any new patch set is submitted;"}),"\n",(0,s.jsx)(i.li,{children:"Tag a specific commit in Gerrit in case the build is successful;"}),"\n",(0,s.jsx)(i.li,{children:"Build a Docker image with an application that can be afterward deployed using the Tekton/Argo CD Deploy pipeline."}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Find below the functional diagram of the Build pipeline with the default stages:"}),"\n",(0,s.jsx)(i.mermaid,{value:"flowchart TD\n   build --\x3e get-nexus-repository-url\n   compile --\x3e test\n   start([fa:fa-circle]) --\x3e fetch-repository\n   fetch-repository --\x3e init-values\n   get-nexus-repository-url --\x3e push\n   get-version --\x3e update-build-number\n   git-tag --\x3e update-cbis\n   init-values --\x3e get-version\n   kaniko-build --\x3e git-tag\n   push --\x3e kaniko-build\n   sast --\x3e compile\n   sonar --\x3e build\n   test --\x3e sonar\n   update-build-number --\x3e sast\n   update-cbis --\x3e stop([fa:fa-circle])"}),"\n",(0,s.jsx)(i.h2,{id:"build-pipeline-for-application-and-library",children:"Build Pipeline for Application and Library"}),"\n",(0,s.jsx)(i.p,{children:"The Build pipeline is triggered automatically after the Code Review pipeline is completed and the changes are submitted."}),"\n",(0,s.jsx)(i.p,{children:"To review the Build pipeline, take the following steps:"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"Open Tekton Dashboard via Overview page of the UI Portal."}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"Review stages for the application and library codebases:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"Init - initialization of the Code Review pipeline inputs;"}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"Checkout - checkout of the application code;"}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"Get-version - get the version from the pom.XML file and add the build number;"}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"Compile - code compilation;"}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"Tests - tests execution;"}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"Sonar - Sonar launch that checks the whole code;"}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"Build - artifact building and adding to Nexus;"}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["Build-image - docker image building and adding to Docker Registry. The Build pipeline for the library has the same stages as the application except the ",(0,s.jsx)(i.strong,{children:"Build-image"})," stage, i.e. the Docker image is not building."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"Push - artifact docker image pushing to Nexus and Docker Registry;"}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"Git-tag - adding of the corresponding Git tag of the current commit to relate with the image, artifact, and build version."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"After the Build pipeline runs all the stages successfully, the corresponding tag numbers will be created in Kubernetes/OpenShift and Nexus."}),"\n",(0,s.jsx)(i.h2,{id:"check-the-tag-in-kubernetesopenshift-and-nexus",children:"Check the Tag in Kubernetes/OpenShift and Nexus"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"After the Build pipeline is completed, check the tag name and the same with the commit revision. Simply navigate to Gerrit \u2192 Projects \u2192 List \u2192 select the project \u2192 Tags."}),"\n",(0,s.jsx)(i.admonition,{type:"note",children:(0,s.jsx)(i.p,{children:"For the Import strategy, navigate to the repository from which a codebase is imported \u2192 Tags. It is actual both for GitHub and GitLab."})}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"Open the Kubernetes/OpenShift Overview page and click the link to Nexus and check the build of a new version."}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"Switch to Kubernetes \u2192 CodebaseImageStream (or OpenShift \u2192 Builds \u2192 Images) \u2192 click the image stream that will be used for deployment."}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"Check the corresponding tag."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"configure-and-start-pipeline-manually",children:"Configure and Start Pipeline Manually"}),"\n",(0,s.jsx)(i.p,{children:"The Build pipeline can be started manually. To set the necessary stages and trigger the pipeline manually, take the following steps:"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"Open the Build pipeline for the created library."}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["Click the ",(0,s.jsx)(i.strong,{children:"Build with parameters"})," option from the left-side menu. Modify the stages by removing the whole objects massive:",(0,s.jsx)(i.code,{children:'{"name". "tests"}'})," where ",(0,s.jsx)(i.em,{children:"name"})," is a key and ",(0,s.jsx)(i.em,{children:"tests"})," is a stage name that should be executed."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"Open Tekton Dashboard or Component details page and check the successful execution of all stages."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"related-articles",children:"Related Articles"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"/docs/3.10/user-guide/add-application",children:"Add Application"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"/docs/3.10/user-guide/add-autotest",children:"Add Autotest"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"/docs/3.10/user-guide/add-library",children:"Add Library"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"/docs/3.10/operator-guide/project-management-and-reporting/jira-integration",children:"Adjust Jira Integration"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"/docs/3.10/use-cases/autotest-as-quality-gate",children:"Autotest as Quality Gate"})}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,l.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>r,x:()=>a});var t=n(96540);const s={},l=t.createContext(s);function r(e){const i=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(l.Provider,{value:i},e.children)}}}]);