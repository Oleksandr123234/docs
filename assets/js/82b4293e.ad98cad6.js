"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[68004],{420:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"operator-guide/microsoft-entra/aws-eks-portal-authentication","title":"Guide: Microsoft Entra SSO integration with AWS EKS & KubeRocketCI Portal","description":"Comprehensive instructions on configuring OIDC authentication for AWS EKS and KubeRocketCI Portal using Microsoft Entra, including default namespace and user picture configuration.","source":"@site/versioned_docs/version-3.10/operator-guide/microsoft-entra/aws-eks-portal-authentication.md","sourceDirName":"operator-guide/microsoft-entra","slug":"/operator-guide/microsoft-entra/aws-eks-portal-authentication","permalink":"/docs/operator-guide/microsoft-entra/aws-eks-portal-authentication","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/operator-guide/microsoft-entra/aws-eks-portal-authentication.md","tags":[],"version":"3.10","lastUpdatedBy":"Sergiy Kulanov","lastUpdatedAt":1740847812000,"frontMatter":{"title":"Guide: Microsoft Entra SSO integration with AWS EKS & KubeRocketCI Portal","description":"Comprehensive instructions on configuring OIDC authentication for AWS EKS and KubeRocketCI Portal using Microsoft Entra, including default namespace and user picture configuration.","sidebar_label":"AWS EKS & KubeRocketCI Portal"},"sidebar":"operatorGuideSidebar","previous":{"title":"Ansible AWX","permalink":"/docs/operator-guide/microsoft-entra/awx-operator-authentication"},"next":{"title":"Dependency-Track","permalink":"/docs/operator-guide/microsoft-entra/dependency-track-authentication"}}');var s=n(74848),c=n(28453);const o={title:"Guide: Microsoft Entra SSO integration with AWS EKS & KubeRocketCI Portal",description:"Comprehensive instructions on configuring OIDC authentication for AWS EKS and KubeRocketCI Portal using Microsoft Entra, including default namespace and user picture configuration.",sidebar_label:"AWS EKS & KubeRocketCI Portal"},r="Guide: Microsoft Entra SSO integration with AWS EKS & KubeRocketCI Portal",a={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Integrate AWS EKS and KubeRocketCI Portal with Microsoft Entra",id:"integrate-aws-eks-and-kuberocketci-portal-with-microsoft-entra",level:2},{value:"Configure Default Namespace",id:"configure-default-namespace",level:2},{value:"Configure User Profile Picture",id:"configure-user-profile-picture",level:2},{value:"Configure Token Lifetime for Application",id:"configure-token-lifetime-for-application",level:2},{value:"Related Articles",id:"related-articles",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...e.components},{Head:i}=t;return i||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"guide-microsoft-entra-sso-integration-with-aws-eks--kuberocketci-portal",children:"Guide: Microsoft Entra SSO integration with AWS EKS & KubeRocketCI Portal"})}),"\n",(0,s.jsx)(i,{children:(0,s.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/operator-guide/microsoft-entra/aws-eks-portal-authentication"})}),"\n",(0,s.jsx)(t.p,{children:"This guide provides instructions on how to configure OpenID Connect (OIDC) authentication for the AWS EKS cluster and the KubeRocketCI Portal using Microsoft Entra as the Identity Provider (IdP), as well as how to configure the default namespace and user picture in the KubeRocketCI Portal using Microsoft Entra extension attributes."}),"\n",(0,s.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Access to the ",(0,s.jsx)(t.a,{href:"https://entra.microsoft.com/",children:"Microsoft Entra Admin Center"})," with administrative privileges."]}),"\n",(0,s.jsxs)(t.li,{children:["A running ",(0,s.jsx)(t.a,{href:"https://docs.aws.amazon.com/eks/latest/userguide/create-cluster.html",children:"AWS EKS"})," cluster with the necessary permissions for access and management."]}),"\n",(0,s.jsxs)(t.li,{children:["The ",(0,s.jsx)(t.a,{href:"https://github.com/int128/kubelogin",children:"kubelogin"})," plugin installed for authenticating to the EKS cluster using OIDC."]}),"\n",(0,s.jsxs)(t.li,{children:["The ",(0,s.jsx)(t.a,{href:"https://kubernetes.io/docs/tasks/tools/#kubectl",children:"kubectl"})," CLI tool installed."]}),"\n",(0,s.jsxs)(t.li,{children:["The ",(0,s.jsx)(t.a,{href:"https://aws.amazon.com/cli/",children:"aws cli"})," tool installed."]}),"\n",(0,s.jsxs)(t.li,{children:["The ",(0,s.jsx)(t.a,{href:"https://curl.se/",children:"curl"})," tool installed."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"integrate-aws-eks-and-kuberocketci-portal-with-microsoft-entra",children:"Integrate AWS EKS and KubeRocketCI Portal with Microsoft Entra"}),"\n",(0,s.jsxs)(t.p,{children:["For a detailed step-by-step guide on integrating OIDC authentication for AWS EKS and the KubeRocketCI Portal with Microsoft Entra, please refer to the ",(0,s.jsx)(t.a,{href:"/blog/integrating-oidc-authentication-microsoft-entra-aws-eks",children:"Integrating OIDC Authentication with Microsoft Entra in AWS EKS"})," blog post."]}),"\n",(0,s.jsx)(t.p,{children:"The blog covers the process of creating a Microsoft Entra tenant, configuring an application, and managing users and groups. It also explains how to integrate the created application with the AWS EKS cluster and set up authentication for the KubeRocketCI Portal."}),"\n",(0,s.jsx)(t.h2,{id:"configure-default-namespace",children:"Configure Default Namespace"}),"\n",(0,s.jsxs)(t.p,{children:["After logging in to the KubeRocketCI Portal, it is necessary to manually configure the ",(0,s.jsx)(t.strong,{children:"Default namespace"})," and ",(0,s.jsx)(t.strong,{children:"Allowed Namespaces"}),". To automate this process, it is possible to use the Microsoft Entra extension attributes."]}),"\n",(0,s.jsx)(t.p,{children:"Follow the steps below to configure the default namespace extension attribute in Microsoft Entra and assign it to the user:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Log in to the ",(0,s.jsx)(t.a,{href:"https://entra.microsoft.com/",children:"Microsoft Entra Admin Center"}),"."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Microsoft Entra Admin Center",src:n(74410).A+"",width:"3364",height:"1648"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["In the left sidebar menu, select ",(0,s.jsx)(t.strong,{children:"Applications"})," and navigate to the application created during the ",(0,s.jsx)(t.a,{href:"/blog/integrating-oidc-authentication-microsoft-entra-aws-eks",children:"OIDC integration process"})," with AWS EKS and the KubeRocketCI Portal (e.g., ",(0,s.jsx)(t.code,{children:"eks"}),")."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Microsoft Entra Application",src:n(70417).A+"",width:"3364",height:"1660"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["In the application tab, navigate to the ",(0,s.jsx)(t.strong,{children:"API permissions"})," section. Click on the ",(0,s.jsx)(t.strong,{children:"Add a permission"})," button. Select ",(0,s.jsx)(t.strong,{children:"Microsoft Graph"})," and then ",(0,s.jsx)(t.strong,{children:"Application permissions"}),". Add the following permissions:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.strong,{children:"Application.ReadWrite.All"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.strong,{children:"User.ReadWrite.All"})}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Graph API Permissions",src:n(30971).A+"",width:"3364",height:"1660"})}),"\n",(0,s.jsxs)(t.p,{children:["After adding the permissions, click on the ",(0,s.jsx)(t.strong,{children:"Grant admin consent for 'Tenant name'"})," button to grant the required permissions."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Navigate to the local terminal and run the following command to get the access token:"}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["You can use the ",(0,s.jsx)(t.a,{href:"https://stedolan.github.io/jq/",children:"jq"})," tool to parse the JSON response. If you do not have it installed, you can drop the ",(0,s.jsx)(t.code,{children:"| jq -r '.access_token'"})," part from the command."]})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'curl -X POST "https://login.microsoftonline.com/<tenant_id>/oauth2/v2.0/token" \\\n-d "client_id=<application_client_id>" \\\n-d "client_secret=<application_client_secret>" \\\n-d "scope=https://graph.microsoft.com/.default" \\\n-d "grant_type=client_credentials" | jq -r \'.access_token\'\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Replace ",(0,s.jsx)(t.code,{children:"<tenant_id>"}),", ",(0,s.jsx)(t.code,{children:"<application_client_id>"}),", and ",(0,s.jsx)(t.code,{children:"<application_client_secret>"})," with the corresponding values from the Microsoft Entra application."]}),"\n",(0,s.jsx)(t.p,{children:"Save the access token for further use."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Create the ",(0,s.jsx)(t.code,{children:"default_namespace"})," extension attribute for the Microsoft Entra application by running the following command:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'curl -X POST "https://graph.microsoft.com/v1.0/applications/<application_object_id>/extensionProperties" \\\n-H "Authorization: Bearer <access_token>" \\\n-H "Content-Type: application/json" \\\n-d \'{\n  "name": "default_namespace",\n  "dataType": "String",\n  "targetObjects": ["User"]\n}\'\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Replace ",(0,s.jsx)(t.code,{children:"<application_object_id>"})," with the Object ID of the Microsoft Entra application and ",(0,s.jsx)(t.code,{children:"<access_token>"})," with the saved access token."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Assign the ",(0,s.jsx)(t.code,{children:"default_namespace"})," extension attribute to the user by running the following command:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'curl -X PATCH "https://graph.microsoft.com/v1.0/users/<user_object_id>" \\\n-H "Authorization: Bearer <access_token>" \\\n-H "Content-Type: application/json" \\\n-d \'{\n  "extension_<application_client_id>_default_namespace": "<default_namespace>"\n}\'\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Replace ",(0,s.jsx)(t.code,{children:"<user_object_id>"}),", ",(0,s.jsx)(t.code,{children:"<application_client_id>"}),", ",(0,s.jsx)(t.code,{children:"<access_token>"}),", and ",(0,s.jsx)(t.code,{children:"<default_namespace>"})," with the user Object ID, application Client ID, saved access token, and the name of the desired default namespace, respectively."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Navigate to the Microsoft Entra Admin Center. In the left sidebar menu, select ",(0,s.jsx)(t.strong,{children:"Applications"})," and navigate to the Enterprise application created for OIDC integration with AWS EKS and the KubeRocketCI Portal (e.g., ",(0,s.jsx)(t.code,{children:"eks"}),")."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Enterprise Application",src:n(88543).A+"",width:"3364",height:"1660"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["In the application tab, navigate to the ",(0,s.jsx)(t.strong,{children:"Single sign-on"})," section. In the ",(0,s.jsx)(t.strong,{children:"Attributes & Claims"})," tab, click on the ",(0,s.jsx)(t.strong,{children:"Edit"})," button."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Attributes &amp; Claims",src:n(25272).A+"",width:"3364",height:"1660"})}),"\n",(0,s.jsxs)(t.p,{children:["After that, click on the ",(0,s.jsx)(t.strong,{children:"Add new claim"})," button."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Add new claim",src:n(68204).A+"",width:"3364",height:"1660"})}),"\n",(0,s.jsxs)(t.p,{children:["Fill in the ",(0,s.jsx)(t.strong,{children:"Name"})," field with ",(0,s.jsx)(t.code,{children:"default_namespace"})," and select the ",(0,s.jsx)(t.strong,{children:"Source"})," as ",(0,s.jsx)(t.code,{children:"Directory schema extension"}),"."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Claim settings",src:n(72497).A+"",width:"3364",height:"1660"})}),"\n",(0,s.jsxs)(t.p,{children:["In the ",(0,s.jsx)(t.strong,{children:"Select Application"})," tab, choose the application created for OIDC integration with AWS EKS and the KubeRocketCI Portal (e.g., ",(0,s.jsx)(t.code,{children:"eks"}),"). Click on the ",(0,s.jsx)(t.strong,{children:"Select"})," button."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Select Application",src:n(25150).A+"",width:"3364",height:"1660"})}),"\n",(0,s.jsxs)(t.p,{children:["In the ",(0,s.jsx)(t.strong,{children:"Add Extension Attributes"})," tab, select the ",(0,s.jsx)(t.code,{children:"user.default_namespace"})," attribute and click on the ",(0,s.jsx)(t.strong,{children:"Add"})," button."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Add Extension Attributes",src:n(41518).A+"",width:"3364",height:"1660"})}),"\n",(0,s.jsxs)(t.p,{children:["Click on the ",(0,s.jsx)(t.strong,{children:"Save"})," button to apply the changes."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Save Changes",src:n(55256).A+"",width:"3364",height:"1660"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["In the left sidebar menu, select ",(0,s.jsx)(t.strong,{children:"Applications"})," and navigate to the application created for OIDC integration with AWS EKS and the KubeRocketCI Portal (e.g., ",(0,s.jsx)(t.code,{children:"eks"}),"). In the application tab, navigate to the ",(0,s.jsx)(t.strong,{children:"Manifest"})," section."]}),"\n",(0,s.jsxs)(t.p,{children:["Find the ",(0,s.jsx)(t.code,{children:"acceptMappedClaims"})," parameter and set it to ",(0,s.jsx)(t.code,{children:"true"}),". Click on the ",(0,s.jsx)(t.strong,{children:"Save"})," button to apply the changes."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Accept Mapped Claims",src:n(30314).A+"",width:"3364",height:"1660"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["(Optional) Get the application access token and verify the ",(0,s.jsx)(t.code,{children:"default_namespace"})," extension attribute by running the following command:"]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["Before running the command, ensure that the ",(0,s.jsx)(t.code,{children:"Redirect URI"})," in the Microsoft Entra application is set to ",(0,s.jsx)(t.code,{children:"http://localhost:8000"}),".\n",(0,s.jsx)(t.img,{alt:"Redirect URI",src:n(39430).A+"",width:"2255",height:"1055"})]})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"kubelogin get-token --oidc-issuer-url=https://sts.windows.net/<tenant_id>/ --oidc-client-id=<application_client_id> --oidc-client-secret=<application_client_secret> --force-refresh\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Replace ",(0,s.jsx)(t.code,{children:"<tenant_id>"}),", ",(0,s.jsx)(t.code,{children:"<application_client_id>"}),", and ",(0,s.jsx)(t.code,{children:"<application_client_secret>"})," with the corresponding values from the Microsoft Entra application."]}),"\n",(0,s.jsxs)(t.p,{children:["After that, encode the token using the ",(0,s.jsx)(t.a,{href:"https://jwt.io/",children:"jwt.io"})," tool and verify the ",(0,s.jsx)(t.code,{children:"default_namespace"})," attribute in the decoded token."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Decoded Token",src:n(5821).A+"",width:"954",height:"304"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["After configuring the ",(0,s.jsx)(t.code,{children:"default_namespace"})," extension attribute, the account settings, such as the ",(0,s.jsx)(t.strong,{children:"Default namespace"})," and ",(0,s.jsx)(t.strong,{children:"Allowed namespaces"}),", will be automatically configured during login to the KubeRocketCI Portal."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Portal user default namespace",src:n(31448).A+"",title:"Portal user default namespace",width:"3364",height:"1660"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"configure-user-profile-picture",children:"Configure User Profile Picture"}),"\n",(0,s.jsx)(t.p,{children:"To enhance account personalization, it is possible to configure the user profile picture in the KubeRocketCI Portal using the Microsoft Entra extension attributes."}),"\n",(0,s.jsx)(t.p,{children:"Follow the steps below to configure the user profile picture extension attribute in Microsoft Entra and assign it to the user:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Log in to the ",(0,s.jsx)(t.a,{href:"https://entra.microsoft.com/",children:"Microsoft Entra Admin Center"}),"."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Microsoft Entra Admin Center",src:n(74410).A+"",width:"3364",height:"1648"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["In the left sidebar menu, select ",(0,s.jsx)(t.strong,{children:"Applications"})," and navigate to the application created during the ",(0,s.jsx)(t.a,{href:"/blog/integrating-oidc-authentication-microsoft-entra-aws-eks",children:"OIDC integration process"})," with AWS EKS and the KubeRocketCI Portal (e.g., ",(0,s.jsx)(t.code,{children:"eks"}),")."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Microsoft Entra Application",src:n(70417).A+"",width:"3364",height:"1660"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["In the application tab, navigate to the ",(0,s.jsx)(t.strong,{children:"API permissions"})," section. Click on the ",(0,s.jsx)(t.strong,{children:"Add a permission"})," button. Select ",(0,s.jsx)(t.strong,{children:"Microsoft Graph"})," and then ",(0,s.jsx)(t.strong,{children:"Application permissions"}),". Add the following permissions:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.strong,{children:"Application.ReadWrite.All"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.strong,{children:"User.ReadWrite.All"})}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Graph API Permissions",src:n(30971).A+"",width:"3364",height:"1660"})}),"\n",(0,s.jsxs)(t.p,{children:["After adding the permissions, click on the ",(0,s.jsx)(t.strong,{children:"Grant admin consent for 'Tenant name'"})," button to grant the required permissions."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Navigate to the local terminal and run the following command to get the access token:"}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["You can use the ",(0,s.jsx)(t.a,{href:"https://stedolan.github.io/jq/",children:"jq"})," tool to parse the JSON response. If you do not have it installed, you can drop the ",(0,s.jsx)(t.code,{children:"| jq -r '.access_token'"})," part from the command."]})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'curl -X POST "https://login.microsoftonline.com/<tenant_id>/oauth2/v2.0/token" \\\n-d "client_id=<application_client_id>" \\\n-d "client_secret=<application_client_secret>" \\\n-d "scope=https://graph.microsoft.com/.default" \\\n-d "grant_type=client_credentials" | jq -r \'.access_token\'\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Replace ",(0,s.jsx)(t.code,{children:"<tenant_id>"}),", ",(0,s.jsx)(t.code,{children:"<application_client_id>"}),", and ",(0,s.jsx)(t.code,{children:"<application_client_secret>"})," with the corresponding values from the Microsoft Entra application."]}),"\n",(0,s.jsx)(t.p,{children:"Save the access token for further use."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Create the ",(0,s.jsx)(t.code,{children:"picture"})," extension attribute for the Microsoft Entra application by running the following command:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'curl -X POST "https://graph.microsoft.com/v1.0/applications/<application_object_id>/extensionProperties" \\\n-H "Authorization: Bearer <access_token>" \\\n-H "Content-Type: application/json" \\\n-d \'{\n  "name": "picture",\n  "dataType": "String",\n  "targetObjects": ["User"]\n}\'\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Replace ",(0,s.jsx)(t.code,{children:"<application_object_id>"})," with the Object ID of the Microsoft Entra application and ",(0,s.jsx)(t.code,{children:"<access_token>"})," with the saved access token."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Assign the ",(0,s.jsx)(t.code,{children:"picture"})," extension attribute to the user by running the following command:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'curl -X PATCH "https://graph.microsoft.com/v1.0/users/<user_object_id>" \\\n-H "Authorization: Bearer <access_token>" \\\n-H "Content-Type: application/json" \\\n-d \'{\n  "extension_<application_client_id>_picture": "<picture_url>"\n}\'\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Replace ",(0,s.jsx)(t.code,{children:"<user_object_id>"}),", ",(0,s.jsx)(t.code,{children:"<application_client_id>"}),", ",(0,s.jsx)(t.code,{children:"<access_token>"}),", and ",(0,s.jsx)(t.code,{children:"<picture_url>"})," with the user Object ID, application Client ID, saved access token, and the URL of the user profile picture, respectively."]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"The profile picture URL should refer to an image accessible via a public URL."})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Navigate to the Microsoft Entra Admin Center. In the left sidebar menu, select ",(0,s.jsx)(t.strong,{children:"Applications"})," and navigate to the Enterprise application created for OIDC integration with AWS EKS and the KubeRocketCI Portal (e.g., ",(0,s.jsx)(t.code,{children:"eks"}),")."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Enterprise Application",src:n(88543).A+"",width:"3364",height:"1660"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["In the application tab, navigate to the ",(0,s.jsx)(t.strong,{children:"Single sign-on"})," section. In the ",(0,s.jsx)(t.strong,{children:"Attributes & Claims"})," tab, click on the ",(0,s.jsx)(t.strong,{children:"Edit"})," button."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Attributes &amp; Claims",src:n(25272).A+"",width:"3364",height:"1660"})}),"\n",(0,s.jsxs)(t.p,{children:["After that, click on the ",(0,s.jsx)(t.strong,{children:"Add new claim"})," button."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Add new claim",src:n(68204).A+"",width:"3364",height:"1660"})}),"\n",(0,s.jsxs)(t.p,{children:["Fill in the ",(0,s.jsx)(t.strong,{children:"Name"})," field with ",(0,s.jsx)(t.code,{children:"picture"})," and select the ",(0,s.jsx)(t.strong,{children:"Source"})," as ",(0,s.jsx)(t.code,{children:"Directory schema extension"}),"."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Picture Claim Settings",src:n(58426).A+"",width:"3364",height:"1660"})}),"\n",(0,s.jsxs)(t.p,{children:["In the ",(0,s.jsx)(t.strong,{children:"Select Application"})," tab, choose the application created for OIDC integration with AWS EKS and the KubeRocketCI Portal (e.g., ",(0,s.jsx)(t.code,{children:"eks"}),"). Click on the ",(0,s.jsx)(t.strong,{children:"Select"})," button."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Select Application",src:n(43217).A+"",width:"3364",height:"1660"})}),"\n",(0,s.jsxs)(t.p,{children:["In the ",(0,s.jsx)(t.strong,{children:"Add Extension Attributes"})," tab, select the ",(0,s.jsx)(t.code,{children:"user.picture"})," attribute and click on the ",(0,s.jsx)(t.strong,{children:"Add"})," button."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Add Extension Attributes",src:n(3809).A+"",width:"3364",height:"1660"})}),"\n",(0,s.jsxs)(t.p,{children:["Click on the ",(0,s.jsx)(t.strong,{children:"Save"})," button to apply the changes."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Save Changes",src:n(74747).A+"",width:"3364",height:"1660"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["In the left sidebar menu, select ",(0,s.jsx)(t.strong,{children:"Applications"})," and navigate to the application created for OIDC integration with AWS EKS and the KubeRocketCI Portal (e.g., ",(0,s.jsx)(t.code,{children:"eks"}),"). In the application tab, navigate to the ",(0,s.jsx)(t.strong,{children:"Manifest"})," section."]}),"\n",(0,s.jsxs)(t.p,{children:["Find the ",(0,s.jsx)(t.code,{children:"acceptMappedClaims"})," parameter and set it to ",(0,s.jsx)(t.code,{children:"true"}),". Click on the ",(0,s.jsx)(t.strong,{children:"Save"})," button to apply the changes."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Accept Mapped Claims",src:n(30314).A+"",width:"3364",height:"1660"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["(Optional) Get the application access token and verify the ",(0,s.jsx)(t.code,{children:"picture"})," extension attribute by running the following command:"]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["Before running the command, ensure that the ",(0,s.jsx)(t.code,{children:"Redirect URI"})," in the Microsoft Entra application is set to ",(0,s.jsx)(t.code,{children:"http://localhost:8000"}),".\n",(0,s.jsx)(t.img,{alt:"Redirect URI",src:n(39430).A+"",width:"2255",height:"1055"})]})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"kubelogin get-token --oidc-issuer-url=https://sts.windows.net/<tenant_id>/ --oidc-client-id=<application_client_id> --oidc-client-secret=<application_client_secret> --force-refresh\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Replace ",(0,s.jsx)(t.code,{children:"<tenant_id>"}),", ",(0,s.jsx)(t.code,{children:"<application_client_id>"}),", and ",(0,s.jsx)(t.code,{children:"<application_client_secret>"})," with the corresponding values from the Microsoft Entra application."]}),"\n",(0,s.jsxs)(t.p,{children:["After that, encode the token using the ",(0,s.jsx)(t.a,{href:"https://jwt.io/",children:"jwt.io"})," tool and verify the ",(0,s.jsx)(t.code,{children:"picture"})," attribute in the decoded token."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Decoded Token",src:n(400).A+"",width:"970",height:"426"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["After configuring the ",(0,s.jsx)(t.code,{children:"picture"})," extension attribute, the user profile picture will be displayed in the KubeRocketCI Portal."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Portal user profile picture",src:n(7955).A+"",title:"Portal user profile picture",width:"3364",height:"1660"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"configure-token-lifetime-for-application",children:"Configure Token Lifetime for Application"}),"\n",(0,s.jsx)(t.p,{children:"The default token lifetime in Microsoft Entra ID is set to 1 hour. This can cause issues for applications needing long-running processes or extended user sessions, leading to frequent re-authentication. To avoid this, a custom Token Lifetime Policy can be created and assigned to the application to extend the lifespan of ID Tokens or Access Tokens, improving the user experience and application efficiency."}),"\n",(0,s.jsx)(t.p,{children:"Follow the steps below to configure and assign a custom Token Lifetime Policy to the application:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Log in to the ",(0,s.jsx)(t.a,{href:"https://entra.microsoft.com/",children:"Microsoft Entra Admin Center"}),"."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Microsoft Entra Admin Center",src:n(74410).A+"",width:"3364",height:"1648"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["In the left sidebar menu, select ",(0,s.jsx)(t.strong,{children:"Applications"})," and navigate to the application for which the Token Lifetime Policy needs to be configured (e.g., ",(0,s.jsx)(t.code,{children:"eks"}),")."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Microsoft Entra Application",src:n(70417).A+"",width:"3364",height:"1660"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["In the application tab, navigate to the ",(0,s.jsx)(t.strong,{children:"API permissions"})," section. Click on the ",(0,s.jsx)(t.strong,{children:"Add a permission"})," button. Select ",(0,s.jsx)(t.strong,{children:"Microsoft Graph"})," and then ",(0,s.jsx)(t.strong,{children:"Application permissions"}),". Add the following permissions:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.strong,{children:"Policy.ReadWrite.ApplicationConfiguration"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.strong,{children:"Application.ReadWrite.All"})}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Lifetime Policy Permissions",src:n(80900).A+"",width:"3364",height:"1660"})}),"\n",(0,s.jsxs)(t.p,{children:["After adding the permissions, click on the ",(0,s.jsx)(t.strong,{children:"Grant admin consent for 'Tenant name'"})," button to grant the required permissions."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Navigate to the local terminal and run the following command to get the access token:"}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["You can use the ",(0,s.jsx)(t.a,{href:"https://stedolan.github.io/jq/",children:"jq"})," tool to parse the JSON response. If you do not have it installed, you can drop the ",(0,s.jsx)(t.code,{children:"| jq -r '.access_token'"})," part from the command."]})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'curl -X POST "https://login.microsoftonline.com/<tenant_id>/oauth2/v2.0/token" \\\n-d "client_id=<application_client_id>" \\\n-d "client_secret=<application_client_secret>" \\\n-d "scope=https://graph.microsoft.com/.default" \\\n-d "grant_type=client_credentials" | jq -r \'.access_token\'\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Replace ",(0,s.jsx)(t.code,{children:"<tenant_id>"}),", ",(0,s.jsx)(t.code,{children:"<application_client_id>"}),", and ",(0,s.jsx)(t.code,{children:"<application_client_secret>"})," with the corresponding values from the Microsoft Entra application."]}),"\n",(0,s.jsx)(t.p,{children:"Save the access token for further use."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Create the custom Token Lifetime Policy by running the following command:"}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"AccessTokenLifetime"})," value should be set in the format ",(0,s.jsx)(t.code,{children:"HH:MM:SS"})," (e.g., ",(0,s.jsx)(t.code,{children:"04:00:00"})," for 4 hours)."]})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'curl -X POST https://graph.microsoft.com/v1.0/policies/tokenLifetimePolicies \\\n-H "Authorization: Bearer <access_token>" \\\n-H "Content-Type: application/json" \\\n-d \'{\n    "definition": [\n        "{ \\"TokenLifetimePolicy\\": { \\"Version\\": 1, \\"AccessTokenLifetime\\": \\"04:00:00\\" }}"\n    ],\n    "displayName": "Custom Access Token Lifetime",\n    "isOrganizationDefault": false\n}\'\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Replace ",(0,s.jsx)(t.code,{children:"<access_token>"})," with the saved access token and set the ",(0,s.jsx)(t.code,{children:"AccessTokenLifetime"})," value as needed."]}),"\n",(0,s.jsxs)(t.p,{children:["After running the command, save the ",(0,s.jsx)(t.code,{children:"id"})," value from the response for further use."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Token Lifetime Policy",src:n(68743).A+"",width:"3328",height:"158"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Assign the custom Token Lifetime Policy to the application by running the following command:"}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["For UNIX-based systems, it is necessary to escape the ",(0,s.jsx)(t.code,{children:"$"})," character in the ",(0,s.jsx)(t.code,{children:"\\$ref"})," value."]})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'curl -X POST "https://graph.microsoft.com/v1.0/applications/<application_object_id>/tokenLifetimePolicies/\\$ref" \\\n-H "Authorization: Bearer <access_token>" \\\n-H "Content-Type: application/json" \\\n-d \'{\n    "@odata.id": "https://graph.microsoft.com/v1.0/policies/tokenLifetimePolicies/<policy_id>"\n}\'\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Replace ",(0,s.jsx)(t.code,{children:"<application_object_id>"}),", ",(0,s.jsx)(t.code,{children:"<access_token>"}),", and ",(0,s.jsx)(t.code,{children:"<policy_id>"})," with the Object ID of the Microsoft Entra application, the saved access token, and the ",(0,s.jsx)(t.code,{children:"id"})," value of the custom Token Lifetime Policy, respectively."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"(Optional) Get the application access or ID token and verify the token lifetime by running the following command:"}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["Before running the command, ensure that the ",(0,s.jsx)(t.code,{children:"Redirect URI"})," in the Microsoft Entra application is set to ",(0,s.jsx)(t.code,{children:"http://localhost:8000"}),".\n",(0,s.jsx)(t.img,{alt:"Redirect URI",src:n(39430).A+"",width:"2255",height:"1055"})]})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"kubelogin get-token --oidc-issuer-url=https://sts.windows.net/<tenant_id>/ --oidc-client-id=<application_client_id> --oidc-client-secret=<application_client_secret> --force-refresh\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Replace ",(0,s.jsx)(t.code,{children:"<tenant_id>"}),", ",(0,s.jsx)(t.code,{children:"<application_client_id>"}),", and ",(0,s.jsx)(t.code,{children:"<application_client_secret>"})," with the corresponding values from the Microsoft Entra application."]}),"\n",(0,s.jsxs)(t.p,{children:["After that, decode the token using the ",(0,s.jsx)(t.a,{href:"https://jwt.io/",children:"jwt.io"})," tool and verify the ",(0,s.jsx)(t.code,{children:"exp"})," claim to check the token expiration time. The lifetime of the token should match the ",(0,s.jsx)(t.code,{children:"AccessTokenLifetime"})," value set in the custom Token Lifetime Policy (e.g., the token should expire after 4 hours after issuance)."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Decoded Token",src:n(89359).A+"",width:"1102",height:"362"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"After configuring the custom Token Lifetime Policy, the application will issue tokens with the extended lifespan as defined in the policy."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/docs/operator-guide/microsoft-entra/oidc-authentication-overview",children:"OpenID Connect (OIDC) Authentication Overview"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},31448:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/portal-user-default-namespace-ccefbd11597b5ab0cb0722911825e815.png"},7955:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/portal-user-profile-picture-784ec5d81b5ee99ea8e2c0e6c63a8876.png"},30314:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/accept-mapped-claims-468854dd231e83191623daa3172d6674.png"},41518:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/add-extension-attributes-ef32db9fd83899f725cc0909a1bac5a5.png"},68204:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/add-new-claim-d47eb416e283df19f9e86a2eae776361.png"},25272:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/attributes-claims-0b872721fdcb1b81f71f1b5deaac3cf9.png"},72497:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/claim-settings-4ae6ee1f2c240653ac53ee7a95ac21f5.png"},5821:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/decoded-token-e62967627392d93c57829121921772a1.png"},88543:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/enterprise-application-2f8f5c157fbf3554bced3a21ba27e293.png"},30971:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/graph-api-permissions-a0db1e8e0bd3965184daf0385f454f38.png"},89359:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/lifetime-decoded-token-6341168d75a3cf8af48080c3c0aa4885.png"},80900:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/lifetime-policy-permissions-f28f05e13dcfe923b3013434a50980cd.png"},74410:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/microsoft-entra-admin-center-156ae7d9496f05355dce9a20eca80969.png"},70417:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/microsoft-entra-application-867f137071639b27c4e2286551a4fddc.png"},3809:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/picture-add-extension-attributes-64e84f53d9c5e9a655acdecd10cca675.png"},58426:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/picture-claim-settings-a9e1f28650731f5826be287df89a6e7a.png"},400:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/picture-decoded-token-0dd9c46b26a13e5699ba10a661b937aa.png"},74747:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/picture-save-changes-5dc58ee4e3664fb8e8b62052b6468466.png"},43217:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/picture-select-application-7a5a24d13ff4be784b695cf748662065.png"},39430:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/redirect-uri-d58f1b24470563cffded2622c74ed831.png"},55256:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/save-changes-61075c8599bd852211b95ee79b474297.png"},25150:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/select-application-96a3dc46ca072e86c0317f47c23efbcb.png"},68743:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/token-lifetime-policy-26e1066daa977e2a305d4049576349eb.png"},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>r});var i=n(96540);const s={},c=i.createContext(s);function o(e){const t=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(c.Provider,{value:t},e.children)}}}]);