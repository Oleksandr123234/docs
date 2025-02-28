"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[70480],{88130:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"operator-guide/infrastructure-providers/aws/kaniko-irsa","title":"IAM Roles for Kaniko Service Accounts","description":"Guide on creating IAM roles for Kaniko service accounts in AWS EKS, including policy creation and role association to enable ECR integration in Tekton pipelines.","source":"@site/docs/operator-guide/infrastructure-providers/aws/kaniko-irsa.md","sourceDirName":"operator-guide/infrastructure-providers/aws","slug":"/operator-guide/infrastructure-providers/aws/kaniko-irsa","permalink":"/docs/next/operator-guide/infrastructure-providers/aws/kaniko-irsa","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/operator-guide/infrastructure-providers/aws/kaniko-irsa.md","tags":[],"version":"current","lastUpdatedBy":"Oleksandr_Stepanov@epam.com","lastUpdatedAt":1740746844000,"frontMatter":{"title":"IAM Roles for Kaniko Service Accounts","description":"Guide on creating IAM roles for Kaniko service accounts in AWS EKS, including policy creation and role association to enable ECR integration in Tekton pipelines.","sidebar_label":"IAM Roles for Kaniko Service Accounts"},"sidebar":"operatorGuideSidebar","previous":{"title":"Associate IAM Roles With Service Accounts","permalink":"/docs/next/operator-guide/infrastructure-providers/aws/enable-irsa"},"next":{"title":"Deploy OKD 4.9 Cluster","permalink":"/docs/next/operator-guide/infrastructure-providers/okd/deploy-okd-4.9"}}');var r=o(74848),t=o(28453);const s={title:"IAM Roles for Kaniko Service Accounts",description:"Guide on creating IAM roles for Kaniko service accounts in AWS EKS, including policy creation and role association to enable ECR integration in Tekton pipelines.",sidebar_label:"IAM Roles for Kaniko Service Accounts"},a="IAM Roles for Kaniko Service Accounts",c={},l=[{value:"Related Articles",id:"related-articles",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components},{Head:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"iam-roles-for-kaniko-service-accounts",children:"IAM Roles for Kaniko Service Accounts"})}),"\n",(0,r.jsx)(i,{children:(0,r.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/operator-guide/infrastructure-providers/aws/kaniko-irsa/"})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["The information below is relevant in case ECR is used as Docker container registry.\nMake sure that IRSA is enabled and ",(0,r.jsx)(n.a,{href:"https://github.com/aws/amazon-eks-pod-identity-webhook/tree/master",children:"amazon-eks-pod-identity-webhook"})," is deployed according to the ",(0,r.jsx)(n.a,{href:"/docs/next/operator-guide/infrastructure-providers/aws/enable-irsa",children:"Associate IAM Roles With Service Accounts"})," documentation."]})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Alternatively, the Kaniko IAM Role can also be created automatically during the cluster installation process.\nFor more details, refer to the ",(0,r.jsx)(n.a,{href:"/docs/next/operator-guide/deploy-aws-eks",children:"Deploy AWS EKS Cluster"})," page."]})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"build-image-kaniko"})," stage, used in Tekton build pipelines, manages ",(0,r.jsx)(n.a,{href:"https://aws.amazon.com/ecr/",children:"ECR"})," through IRSA that should be available on the cluster. Follow the steps below to create a required role:"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Create AWS IAM Policy ",(0,r.jsx)(n.code,{children:"AWSIRSA_<CLUSTER_NAME>_Kaniko_policy"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n        "Effect": "Allow",\n        "Action": [\n            "ecr:*",\n            "cloudtrail:LookupEvents"\n        ],\n        "Resource": "arn:aws:ecr:<AWS_REGION>:<AWS_ACCOUNT_ID>:repository/*"\n    },\n    {\n        "Effect": "Allow",\n        "Action": "ecr:GetAuthorizationToken",\n        "Resource": "*"\n    },\n    {\n        "Effect": "Allow",\n        "Action": [\n            "ecr:DescribeRepositories",\n            "ecr:CreateRepository"\n        ],\n        "Resource": "arn:aws:ecr:<AWS_REGION>:<AWS_ACCOUNT_ID>:repository/*"\n    }\n  ]\n}\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Create AWS IAM Role ",(0,r.jsx)(n.code,{children:"AWSIRSA_<CLUSTER_NAME>_Kaniko"})," with trust relationships:"]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"OIDC_PROVIDER"})," value can be found in the AWS Management Console under the Elastic Kubernetes Service (EKS) service. Select the appropriate cluster and navigate to the ",(0,r.jsx)(n.strong,{children:"Overview"})," tab to find the ",(0,r.jsx)(n.code,{children:"OpenID Connect provider URL"})," value.\n",(0,r.jsx)(n.img,{alt:"OIDC_PROVIDER",src:o(57093).A+"",width:"2646",height:"392"})]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Effect": "Allow",\n      "Principal": {\n        "Federated": "arn:aws:iam::<AWS_ACCOUNT_ID>:oidc-provider/<OIDC_PROVIDER>"\n      },\n      "Action": "sts:AssumeRoleWithWebIdentity",\n      "Condition": {\n        "StringEquals": {\n          "<OIDC_PROVIDER>:sub": "system:serviceaccount:*"\n        }\n      }\n    }\n  ]\n}\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Attach the ",(0,r.jsx)(n.code,{children:"AWSIRSA_<CLUSTER_NAME>_Kaniko_policy"})," policy to the ",(0,r.jsx)(n.code,{children:"AWSIRSA_<CLUSTER_NAME>_Kaniko"})," role."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Set the resulting Amazon Resource Name (ARN) of the role in the ",(0,r.jsx)(n.code,{children:"edp-tekton.kaniko.roleArn"})," field within the ",(0,r.jsx)(n.code,{children:"values.yaml"})," file during the ",(0,r.jsx)(n.a,{href:"/docs/next/operator-guide/install-kuberocketci",children:"KubeRocketCI installation"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/next/operator-guide/infrastructure-providers/aws/enable-irsa",children:"Associate IAM Roles With Service Accounts"})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},57093:(e,n,o)=>{o.d(n,{A:()=>i});const i=o.p+"assets/images/oidc-provider-b3f5e2cbf5fbeba4a20e63c3ecd953ca.png"},28453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>a});var i=o(96540);const r={},t=i.createContext(r);function s(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);