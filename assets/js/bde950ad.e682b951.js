"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[53379],{45547:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"developer-guide/aws-infrastructure-cost-estimation","title":"AWS Infrastructure Cost Estimation","description":"A detailed guide for estimating AWS infrastructure costs for KubeRocketCI, including component descriptions, purposes, and approximate monthly costs.","source":"@site/docs/developer-guide/aws-infrastructure-cost-estimation.md","sourceDirName":"developer-guide","slug":"/developer-guide/aws-infrastructure-cost-estimation","permalink":"/docs/next/developer-guide/aws-infrastructure-cost-estimation","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/developer-guide/aws-infrastructure-cost-estimation.md","tags":[],"version":"current","lastUpdatedBy":"Sergiy Kulanov","lastUpdatedAt":1740847812000,"frontMatter":{"title":"AWS Infrastructure Cost Estimation","description":"A detailed guide for estimating AWS infrastructure costs for KubeRocketCI, including component descriptions, purposes, and approximate monthly costs.","sidebar_label":"AWS Infrastructure Cost Estimation"},"sidebar":"developerGuideSidebar","previous":{"title":"KubeRocketCI Deployment on AWS","permalink":"/docs/next/developer-guide/aws-deployment-diagram"},"next":{"title":"KubeRocketCI Contribution","permalink":"/docs/next/developer-guide/edp-workflow"}}');var n=r(74848),i=r(28453);const o={title:"AWS Infrastructure Cost Estimation",description:"A detailed guide for estimating AWS infrastructure costs for KubeRocketCI, including component descriptions, purposes, and approximate monthly costs.",sidebar_label:"AWS Infrastructure Cost Estimation"},c="AWS Infrastructure Cost Estimation",a={},d=[{value:"Platform Components and Approximate Costs",id:"platform-components-and-approximate-costs",level:2},{value:"AWS Pricing Calculator",id:"aws-pricing-calculator",level:2},{value:"Related Articles",id:"related-articles",level:2}];function l(e){const t={a:"a",admonition:"admonition",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{Head:r}=t;return r||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"aws-infrastructure-cost-estimation",children:"AWS Infrastructure Cost Estimation"})}),"\n",(0,n.jsx)(r,{children:(0,n.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/developer-guide/aws-infrastructure-cost-estimation"})}),"\n",(0,n.jsx)(t.p,{children:"Effective planning and budgeting are essential for developing applications in cloud computing, with a key part being accurate infrastructure cost estimation. This not only helps in keeping within budget but also enables informed decision-making and resource optimization for project viability."}),"\n",(0,n.jsx)(t.p,{children:"This guide aims to offer an in-depth look at the factors affecting AWS infrastructure costs for KubeRocketCI and includes analytics and tools for cost estimation."}),"\n",(0,n.jsx)(t.h2,{id:"platform-components-and-approximate-costs",children:"Platform Components and Approximate Costs"}),"\n",(0,n.jsx)(t.p,{children:"This section contains tables outlining the key components of our AWS infrastructure, including a brief description of each component's role, its purpose within our infrastructure, and an estimate of its monthly cost."}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["The costs mentioned below are estimates. For the most accurate and up-to-date pricing, please refer to the ",(0,n.jsx)(t.a,{href:"https://aws.amazon.com/pricing/?aws-products-pricing.sort-by=item.additionalFields.productNameLowercase&aws-products-pricing.sort-order=asc&awsf.Free%20Tier%20Type=*all&awsf.tech-category=*all",children:"AWS official documentation"}),"."]})}),"\n",(0,n.jsx)(t.p,{children:"The table below outlines key AWS infrastructure components for KubeRocketCI, detailing each component's role, purpose, and estimated monthly cost:"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Component"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Purpose Within Infrastructure"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Application Load Balancer (ALB)"}),(0,n.jsx)(t.td,{children:"Distributes incoming application traffic across multiple targets."}),(0,n.jsx)(t.td,{children:"Ensures high availability and fault tolerance for our applications."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Virtual Private Cloud (VPC)"}),(0,n.jsx)(t.td,{children:"Provides an isolated section of the AWS cloud where resources can be launched."}),(0,n.jsx)(t.td,{children:"Segregates our infrastructure for enhanced security and management."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"3x Network Address Translation (NAT) Gateways"}),(0,n.jsx)(t.td,{children:"Enables instances in a private subnet to connect to the internet or other AWS services."}),(0,n.jsx)(t.td,{children:"Provides internet access to EC2 instances without exposing them to the public internet."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Elastic Container Registry (ECR)"}),(0,n.jsx)(t.td,{children:"A fully managed container registry."}),(0,n.jsx)(t.td,{children:"Stores, manages, and deploys container images."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Elastic Kubernetes Service (EKS)"}),(0,n.jsx)(t.td,{children:"A managed Kubernetes service."}),(0,n.jsx)(t.td,{children:"Simplifies running Kubernetes applications on AWS."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Elastic Block Store (EBS)"}),(0,n.jsx)(t.td,{children:"Provides persistent block storage volumes for use with EC2 instances."}),(0,n.jsx)(t.td,{children:"Offers highly available and durable storage for our applications."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Elastic Compute Cloud (EC2)"}),(0,n.jsx)(t.td,{children:"Provides scalable computing capacity."}),(0,n.jsx)(t.td,{children:"Hosts our applications, supporting varied compute workloads."})]})]})]}),"\n",(0,n.jsx)(t.p,{children:"The table below presents an itemized estimate of monthly costs for KubeRocketCI's AWS infrastructure components, including ALB, VPC, EC2, and more:"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Component"}),(0,n.jsx)(t.th,{children:"Approximate Monthly Cost"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Application Load Balancer (ALB)"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"$30.00"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["Virtual Private Cloud (VPC) ",(0,n.jsx)("br",{}),"- 3x Network Address Translation Gateways  ",(0,n.jsx)("br",{}),"- 3x Public IPv4 Address"]}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)("br",{}),(0,n.jsx)(t.strong,{children:"$113.88"})," ",(0,n.jsx)("br",{}),(0,n.jsx)(t.strong,{children:"$10.95"})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Elastic Container Registry (ECR)"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"$5.00"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Elastic Kubernetes Service (EKS)  - 1x EKS Clusters"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"$73.00"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Elastic Block Store (EBS)"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"$14.28"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["Elastic Compute Cloud (EC2) ",(0,n.jsx)("br",{}),"- 2x c5.2xlarge (Spot)  ",(0,n.jsx)("br",{}),"- 2x c5.2xlarge (On-Demand)"]}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)("br",{}),(0,n.jsx)(t.strong,{children:"$219.11"})," ",(0,n.jsx)("br",{}),(0,n.jsx)(t.strong,{children:"$576.00"})]})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"aws-pricing-calculator",children:"AWS Pricing Calculator"}),"\n",(0,n.jsx)(t.p,{children:"To further assist in your planning and budgeting efforts, we have pre-configured the AWS Pricing Calculator with inputs matching our infrastructure setup. This tool allows you to explore and adjust the cost estimation based on your specific needs, giving you a personalized overview of potential expenses."}),"\n",(0,n.jsxs)(t.p,{children:["Access the AWS Pricing Calculator with our pre-configured setup here: ",(0,n.jsx)(t.a,{href:"https://calculator.aws/#/estimate?id=42ed1a892c891ebcd905734b437f722122983f61",children:"AWS Pricing Calculator"})]}),"\n",(0,n.jsx)(t.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/docs/next/developer-guide/aws-deployment-diagram",children:"KubeRocketCI Deployment on AWS"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/docs/next/developer-guide/aws-reference-architecture",children:"KubeRocketCI Reference Architecture on AWS"})}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>c});var s=r(96540);const n={},i=s.createContext(n);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);