"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[52672],{6460:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"operator-guide/ci/ci-pipeline-terraform","title":"CI Pipeline for Terraform","description":"Explore the CI pipeline stages for Terraform in KubeRocketCI, ensuring code quality, security, and compliance for Infrastructure as Code (IaC) management.","source":"@site/versioned_docs/version-3.10/operator-guide/ci/ci-pipeline-terraform.md","sourceDirName":"operator-guide/ci","slug":"/operator-guide/ci/ci-pipeline-terraform","permalink":"/docs/3.10/operator-guide/ci/ci-pipeline-terraform","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/operator-guide/ci/ci-pipeline-terraform.md","tags":[],"version":"3.10","lastUpdatedBy":"Sergiy Kulanov","lastUpdatedAt":1740847812000,"frontMatter":{"title":"CI Pipeline for Terraform","description":"Explore the CI pipeline stages for Terraform in KubeRocketCI, ensuring code quality, security, and compliance for Infrastructure as Code (IaC) management.","sidebar_label":"CI Pipeline for Terraform"},"sidebar":"operatorGuideSidebar","previous":{"title":"Microsoft Teams Notification","permalink":"/docs/3.10/operator-guide/ci/notification-msteams"},"next":{"title":"Customize Deploy Pipeline","permalink":"/docs/3.10/operator-guide/cd/customize-deploy-pipeline"}}');var o=i(74848),n=i(28453);const s={title:"CI Pipeline for Terraform",description:"Explore the CI pipeline stages for Terraform in KubeRocketCI, ensuring code quality, security, and compliance for Infrastructure as Code (IaC) management.",sidebar_label:"CI Pipeline for Terraform"},a="CI Pipeline for Terraform",c={},d=[{value:"Pipeline Stages for Terraform",id:"pipeline-stages-for-terraform",level:2},{value:"Related Articles",id:"related-articles",level:2}];function l(e){const r={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components},{Head:i}=r;return i||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.header,{children:(0,o.jsx)(r.h1,{id:"ci-pipeline-for-terraform",children:"CI Pipeline for Terraform"})}),"\n",(0,o.jsx)(i,{children:(0,o.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/operator-guide/ci/ci-pipeline-terraform"})}),"\n",(0,o.jsxs)(r.p,{children:["KubeRocketCI ensures the implemented Terraform support by adding a separate component type called ",(0,o.jsx)(r.strong,{children:"Infrastructure"}),". The ",(0,o.jsx)(r.strong,{children:"Infrastructure"})," codebase type allows to work with Terraform code that is processed by means of stages in the ",(0,o.jsx)(r.strong,{children:"Code-Review"})," and ",(0,o.jsx)(r.strong,{children:"Build"})," pipelines."]}),"\n",(0,o.jsx)(r.h2,{id:"pipeline-stages-for-terraform",children:"Pipeline Stages for Terraform"}),"\n",(0,o.jsxs)(r.p,{children:["Under the hood, Infrastructure codebase type, namely Terraform, looks quite similar to other codebase types. The distinguishing characteristic of the ",(0,o.jsx)(r.code,{children:"Infrastructure"})," codebase type is that there is a stage called ",(0,o.jsx)(r.strong,{children:"terraform-check"})," in both of ",(0,o.jsx)(r.strong,{children:"Code Review"})," and ",(0,o.jsx)(r.strong,{children:"Build"})," pipelines. This stage runs the pre-commit activities which in their turn run the following commands and tools:"]}),"\n",(0,o.jsxs)(r.ol,{children:["\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.a,{href:"https://developer.hashicorp.com/terraform/cli/commands/fmt",children:"Terraform fmt"})," - the first step of the stage is basically the ",(0,o.jsx)(r.code,{children:"terraform fmt"})," command. The ",(0,o.jsx)(r.code,{children:"terraform fmt"})," command automatically updates the formatting of Terraform configuration files to follow the standard conventions and make the code more readable and consistent."]}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.a,{href:"https://developer.hashicorp.com/terraform/tutorials/configuration-language/provider-versioning",children:"Lock provider versions"})," - locks the versions of the Terraform providers used in the project. This ensures that the project uses specific versions of the providers and prevents unexpected changes from impacting the infrastructure due to newer provider versions."]}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.a,{href:"https://developer.hashicorp.com/terraform/cli/commands/validate",children:"Terraform validate"})," - checks the syntax and validity of the Terraform configuration files. It scans the configuration files for all possible issues."]}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.a,{href:"https://github.com/terraform-docs/terraform-docs",children:"Terraform docs"})," - generates human-readable documentation for the Terraform project."]}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.a,{href:"https://github.com/terraform-linters/tflint",children:"Tflint"})," - additional validation step using the ",(0,o.jsx)(r.code,{children:"tflint"})," linter to provide more in-depth checks in addition to what the ",(0,o.jsx)(r.code,{children:"terraform validate"})," command does."]}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.a,{href:"https://github.com/bridgecrewio/checkov",children:"Checkov"})," - runs the ",(0,o.jsx)(r.code,{children:"checkov"})," command against the Terraform codebase to identify any security misconfigurations or compliance issues."]}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.a,{href:"https://github.com/aquasecurity/tfsec",children:"Tfsec"})," - another security-focused validation step using the ",(0,o.jsx)(r.code,{children:"tfsec"})," command. Tfsec is a security scanner for Terraform templates that detects potential security issues and insecure configurations in the Terraform code."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(r.admonition,{type:"note",children:(0,o.jsxs)(r.p,{children:["The commands and their attributes are displayed in the ",(0,o.jsx)(r.a,{href:"https://github.com/epmd-edp/hcl-terraform-terraform/blob/master/.pre-commit-config.yaml",children:(0,o.jsx)(r.strong,{children:".pre-commit-config.yaml"})})," file."]})}),"\n",(0,o.jsx)(r.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.a,{href:"/docs/3.10/user-guide/",children:"User Guide Overview"})}),"\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.a,{href:"/docs/3.10/user-guide/add-infrastructure",children:"Add Infrastructure"})}),"\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.a,{href:"/docs/3.10/user-guide/infrastructure",children:"Manage Infrastructures"})}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,r,i)=>{i.d(r,{R:()=>s,x:()=>a});var t=i(96540);const o={},n=t.createContext(o);function s(e){const r=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(n.Provider,{value:r},e.children)}}}]);