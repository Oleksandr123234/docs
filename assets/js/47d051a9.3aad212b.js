"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[30384],{43518:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"glossary","title":"Glossary","description":"To help you navigate the platform more effectively, familiarize yourself with the definitions and context of the most useful platform terms presented in the table below.","source":"@site/versioned_docs/version-3.9/glossary.md","sourceDirName":".","slug":"/glossary","permalink":"/docs/3.9/glossary","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/glossary.md","tags":[],"version":"3.9","lastUpdatedBy":"Sergiy Kulanov","lastUpdatedAt":1740847812000,"frontMatter":{},"sidebar":"quickStartSidebar","previous":{"title":"Basic Concepts","permalink":"/docs/3.9/basic-concepts"},"next":{"title":"Supported Versions and Compatibility","permalink":"/docs/3.9/supported-versions"}}');var i=s(74848),r=s(28453);const a={},o="Glossary",d={},l=[];function c(e){const t={em:"em",h1:"h1",header:"header",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components},{Head:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"glossary",children:"Glossary"})}),"\n",(0,i.jsx)(s,{children:(0,i.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/glossary"})}),"\n",(0,i.jsx)(t.p,{children:"To help you navigate the platform more effectively, familiarize yourself with the definitions and context of the most useful platform terms presented in the table below."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Terms"}),(0,i.jsx)(t.th,{children:"Details"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.strong,{children:"Platform Component"})," - an item used in the CI/CD process"]}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.strong,{children:"Portal UI"})," - component that facilitates the management, setup, and control of business entities."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.strong,{children:"Artifactory"})," - component that serves as a repository for all binary artifacts. ",(0,i.jsxs)(t.em,{children:[(0,i.jsx)(t.strong,{children:"NOTE"}),": Nexus is a possible implementation of a repository."]})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.strong,{children:"CI/CD Server"})," - component that executes pipelines responsible for building, testing, and deploying code. ",(0,i.jsxs)(t.em,{children:[(0,i.jsx)(t.strong,{children:"NOTE"}),": Tekton is a possible implementation of a CI/CD server."]})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.strong,{children:"Code Review tool"})," - component that facilitates collaboration and review of code changes. ",(0,i.jsxs)(t.em,{children:[(0,i.jsx)(t.strong,{children:"NOTE"}),": GitHub/GitLab is a possible implementation of a code review tool."]})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.strong,{children:"Identity Server"})," - an authentication server that provides a centralized way to verify requests for all applications. ",(0,i.jsxs)(t.em,{children:[(0,i.jsx)(t.strong,{children:"NOTE"}),": Keycloak is a possible implementation of an identity server."]})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.strong,{children:"Security Realm Tenant"})," - a realm in the identity server (e.g., Keycloak) where user accounts and access permissions are managed. The realm is unique to the identity server instance."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.strong,{children:"Static Code Analyzer"})," - component that continuously inspects code quality before changes are merged into the master branch. ",(0,i.jsxs)(t.em,{children:[(0,i.jsx)(t.strong,{children:"NOTE"}),": SonarQube is a possible implementation of a static code analyzer."]})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.strong,{children:"VCS (Version Control System)"})," - a repository that tracks all changes made by developers. ",(0,i.jsxs)(t.em,{children:[(0,i.jsx)(t.strong,{children:"NOTE"}),": GitHub and GitLab are possible implementations of a version control system."]})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.strong,{children:"KubeRocketCI Business Entity"})," - a part of the CI/CD process (the integration, delivery, and deployment of any codebase changes)"]}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.strong,{children:"Application"})," - a codebase type that is built as the binary artifact and deployable unit with the code that is stored in VCS. As a result, the application becomes a container and can be deployed in an environment."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.strong,{children:"Autotests"})," - a codebase type that inspects a product (e.g. an application set) on a Deployment Stage. Autotests are not deployed to any container and launched from the respective code repository."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.strong,{children:"CD Pipeline (Continuous Delivery Pipeline)"})," - business entity that describes the whole delivery process of the selected application set via the respective stages. The main idea of the CD pipeline is to promote the application version between the stages by applying the sequential verification (i.e. the second stage will be available if the verification on the first stage is successfully completed). ",(0,i.jsxs)(t.em,{children:[(0,i.jsx)(t.strong,{children:"NOTE"}),": The CD pipeline can include the essential set of applications with its specific stages as well."]})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.strong,{children:"CD Pipeline Stage"})," - business entity that is presented as the logical gate required for the application set inspection. Every stage has one OpenShift project where the selected application set is deployed. All stages are sequential and promote applications one-by-one."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.strong,{children:"Codebase"})," - business entity that possesses a code."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.strong,{children:"Codebase Branch"})," - business entity that represents a specific version in a Git branch. Every codebase branch has a Codebase Docker Stream entity."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.strong,{children:"Codebase Docker Stream"})," - a deployable component that leads to the application build and displays that the last build was verified on the specific stage. Every CD pipeline stage accepts a set of Codebase Image Streams (cbis) that are input and output. ",(0,i.jsx)(t.em,{children:"SAMPLE: if an application1 has a master branch, the input cbis will be named as [app name]-[pipeline name]-[stage name]-[master] and the output after the passing of the DEV stage will be as follows: [app name]-[pipeline name]-[stage name]-[dev]-[verified]."})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.strong,{children:"Git Server"})," - a custom resource that is responsible for integration with Version Control System (VCS), whether it is GitHub, GitLab or Gerrit."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.strong,{children:"Infrastructure"})," - a codebase type that is used to define and manage the underlying infrastructure of projects using the ",(0,i.jsx)(t.em,{children:"Infrastructure as Code (IaC)"})," approach, ensuring consistency and reproducibility."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.strong,{children:"Library"})," - a codebase type that is built as the binary artifact, i.e. it`s stored in the Artifactory and can be uploaded by other applications, autotests or libraries."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.strong,{children:"Quality Gate"})," - business entity that represents the minimum acceptable results after the testing. Every stage has a quality gate that should be passed to promote the application. The stage quality gate can be a manual approve from a QA specialist OR a successful autotest launch."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.strong,{children:"Quality Gate Type"})," - this value defines trigger type that promotes artifacts (images) to the next environment in CD Pipeline. There are manual and automatic types of quality gates. The manual type means that the promoting process should be confirmed in Tekton. The automatic type promotes the images automatically in case there are no errors in the Allure Report. ",(0,i.jsxs)(t.em,{children:[(0,i.jsx)(t.strong,{children:"NOTE"}),": If any of the test types is not passed, the CD pipeline will fail."]})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.strong,{children:"Trigger Type"})," - a value that defines a trigger type used for the CD pipeline triggering. There are manual and automatic types of triggering. The manual type means that the CD pipeline should be triggered manually. The automatic type triggers the CD pipeline automatically as soon as the Codebase Docker Stream was changed."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.strong,{children:"Automated Tests"})," - different types of automated tests that can be run on the environment for a specific stage."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.strong,{children:"Build Pipeline"})," - a Tekton pipeline that builds a corresponding codebase branch in the Codebase."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.strong,{children:"Build Stage"})," - a stage that takes place after the code has been submitted/merged to the repository of the main branch (",(0,i.jsx)(t.em,{children:"the pull request from the feature branch is merged to the main one, the Patch set is submitted in GitHub/GitLab"}),")."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.strong,{children:"Code Review Pipeline"})," - a Tekton pipeline that inspects the code candidate in the Code Review tool, triggered on Pull Request created/updated event."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.strong,{children:"Code Review Stage"})," - a stage where code is reviewed before it goes to the main branch repository of the version control system (",(0,i.jsx)(t.em,{children:"the commit to the feature branch is pushed, the Patch set is created in GitHub/GitLab"}),")."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.strong,{children:"Deploy Pipeline"})," - a Tekton pipeline that is responsible for the CD Pipeline Stage deployment with the full set of applications and autotests."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.strong,{children:"Deployment Stage"})," - a part of the Continuous Delivery where artifacts are being deployed to environments."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.strong,{children:"CI Pipelines"})," - an orchestrator for stages that is responsible for the common technical events, e.g. initialization, in Tekton pipeline."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.strong,{children:"Environment"})," - a part of the stage where the built and packed into an image application are deployed for further testing. It`s possible to deploy several applications to several environments (Team and Integration environments) within one stage."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.strong,{children:"Integration Environment"})," - an environment type that is always deployed as soon as the new application version is built in order to launch the integration test and promote images to the next stages. The Integration Environment can be triggered manually or in case a new image appears in the Container registry."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"OpenShift / Kubernetes (K8S)"})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.strong,{children:"ConfigMap"})," - a resource that stores configuration data and processes the strings that do not contain sensitive information."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.strong,{children:"Container"})," - is a lightweight, standalone, and executable package."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.strong,{children:"Container Registry"})," - a store for the Container that is created for the application after the Build pipeline performance."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.strong,{children:"OpenShift Web Console"})," - a web console that enables to view, manage, and change OpenShift / K8S resources using browser."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.strong,{children:"Operator Framework"})," - a deployable unit in OpenShift that is responsible for one or a set of resources and performs its life circle (adding, displaying, and provisioning)."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.strong,{children:"Path"})," - a route component that helps to find a specified path (e.g. /api) at once and skip the other."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.strong,{children:"Pod"})," - the smallest deployable unit of the large microservice application that is responsible for the application launch. The pod is presented as the one launched container. When the container is collected, it will be kept in Container Registry and then saved as Pod in the OpenShift project. ",(0,i.jsxs)(t.em,{children:[(0,i.jsx)(t.strong,{children:"NOTE"}),": The Deployment Config is responsible for the Pod push, restart, and stop processes."]})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.strong,{children:"PV (Persistent Volume)"})," - a cluster resource that captures the details of the storage implementation and has an independent lifecycle of any individual pod."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.strong,{children:"PVC (Persistent Volume Claim)"})," - a user request for storage that can request specific size and access mode. PV resources are consumed by PVCs."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.strong,{children:"Route"})," - a resource in OpenShift that allows getting the external access to the pushed application."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.strong,{children:"Secret"})," - an object that stores and manages all the sensitive information (e.g. passwords, tokens, and SSH keys)."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.strong,{children:"Service"})," - an external connection point with Pod that is responsible for the network. A specific Service is connected to a specific Pod using labels and redirects all the requests to Pod as well."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.strong,{children:"Site"})," - a route component (link name) that is created from the indicated application name and applies automatically the project name and a wildcard DNS record."]})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>o});var n=s(96540);const i={},r=n.createContext(i);function a(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);