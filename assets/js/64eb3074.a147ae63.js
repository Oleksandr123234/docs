"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[17972],{63111:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"operator-guide/microsoft-entra/grafana-authentication","title":"Guide: Microsoft Entra SSO Integration With Grafana","description":"Step-by-step guide on configuring Grafana with OpenID Connect authentication using Microsoft Entra as the Identity Provider for enhanced access management.","source":"@site/versioned_docs/version-3.9/operator-guide/microsoft-entra/grafana-authentication.md","sourceDirName":"operator-guide/microsoft-entra","slug":"/operator-guide/microsoft-entra/grafana-authentication","permalink":"/docs/3.9/operator-guide/microsoft-entra/grafana-authentication","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/operator-guide/microsoft-entra/grafana-authentication.md","tags":[],"version":"3.9","lastUpdatedBy":"Oleksandr_Stepanov@epam.com","lastUpdatedAt":1740746844000,"frontMatter":{"title":"Guide: Microsoft Entra SSO Integration With Grafana","description":"Step-by-step guide on configuring Grafana with OpenID Connect authentication using Microsoft Entra as the Identity Provider for enhanced access management.","sidebar_label":"Grafana"},"sidebar":"operatorGuideSidebar","previous":{"title":"Ansible AWX","permalink":"/docs/3.9/operator-guide/microsoft-entra/defectdojo-oidc-authentication"},"next":{"title":"Harbor","permalink":"/docs/3.9/operator-guide/microsoft-entra/harbor-authentication"}}');var i=t(74848),s=t(28453);const a={title:"Guide: Microsoft Entra SSO Integration With Grafana",description:"Step-by-step guide on configuring Grafana with OpenID Connect authentication using Microsoft Entra as the Identity Provider for enhanced access management.",sidebar_label:"Grafana"},o="Guide: Microsoft Entra SSO Integration With Grafana",c={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuring Microsoft Entra Application",id:"configuring-microsoft-entra-application",level:2},{value:"Creating the Groups",id:"creating-the-groups",level:2},{value:"Configuring Grafana Helm chart",id:"configuring-grafana-helm-chart",level:2},{value:"Related Articles",id:"related-articles",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{Head:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"guide-microsoft-entra-sso-integration-with-grafana",children:"Guide: Microsoft Entra SSO Integration With Grafana"})}),"\n",(0,i.jsx)(r,{children:(0,i.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/operator-guide/microsoft-entra/grafana-authentication/"})}),"\n",(0,i.jsx)(n.p,{children:"This guide provides instructions on configuring OpenID Connect (OIDC) authentication with Microsoft Entra for Grafana."}),"\n",(0,i.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Access to the ",(0,i.jsx)(n.a,{href:"https://entra.microsoft.com/",children:"Microsoft Entra Admin Center"})," with administrative privileges."]}),"\n",(0,i.jsx)(n.li,{children:"Created Microsoft Entra Tenant."}),"\n",(0,i.jsxs)(n.li,{children:["Installed Grafana (can be installed during ",(0,i.jsx)(n.strong,{children:"Configuring Helm chart"})," step)."]}),"\n",(0,i.jsxs)(n.li,{children:["Fork copy of the ",(0,i.jsx)(n.a,{href:"https://github.com/epam/edp-cluster-add-ons",children:"edp-cluster-add-ons"})," repository."]}),"\n",(0,i.jsx)(n.li,{children:"(Optional) Installed External Secrets Operator."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"configuring-microsoft-entra-application",children:"Configuring Microsoft Entra Application"}),"\n",(0,i.jsx)(n.p,{children:"To configure Microsoft Entra as the Identity Provider for Grafana, it is necessary to create and configure an Application in the Microsoft Entra Admin Center."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Log in to the ",(0,i.jsx)(n.a,{href:"https://entra.microsoft.com/?feature.msaljs=true#home",children:"Microsoft Entra Admin Center"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Microsoft Entra Admin Center",src:t(3394).A+"",width:"3364",height:"1648"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the left sidebar menu, select ",(0,i.jsx)(n.strong,{children:"Applications"})," and click ",(0,i.jsx)(n.strong,{children:"App registrations"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"App registrations",src:t(65275).A+"",width:"3364",height:"1648"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click on the ",(0,i.jsx)(n.strong,{children:"New registration"})," button."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"New registration",src:t(6543).A+"",width:"3364",height:"1648"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Fill in the required fields, such as ",(0,i.jsx)(n.strong,{children:"Name"}),", ",(0,i.jsx)(n.strong,{children:"Supported account types"})," and ",(0,i.jsx)(n.strong,{children:"Redirect URI"})," (You can skip setting the ",(0,i.jsx)(n.strong,{children:"Redirect URI"})," if you don't deploy Grafana yet). Click ",(0,i.jsx)(n.strong,{children:"Register"})," to create the application."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"Redirect URI"})," should be in the format ",(0,i.jsx)(n.code,{children:"https://<Grafana URL>/login/generic_oauth"}),"."]})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Register application",src:t(52997).A+"",width:"3364",height:"1658"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the created application, navigate to the ",(0,i.jsx)(n.strong,{children:"Authentication"})," section from the left sidebar menu. In the ",(0,i.jsx)(n.strong,{children:"Implicit grant and hybrid flows"})," section, select ",(0,i.jsx)(n.strong,{children:"ID tokens"})," for the token type. In the ",(0,i.jsx)(n.strong,{children:"Allow public client flows"})," section, set the value to ",(0,i.jsx)(n.strong,{children:"No"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Authentication settings",src:t(82670).A+"",width:"3364",height:"1662"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Navigate to the ",(0,i.jsx)(n.strong,{children:"Certificates & secrets"})," section. In the ",(0,i.jsx)(n.strong,{children:"Client secrets"})," tab, click on the ",(0,i.jsx)(n.strong,{children:"New client secret"})," button to create a new secret. Fill in the required fields and click ",(0,i.jsx)(n.strong,{children:"Add"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Client secrets",src:t(31783).A+"",width:"3364",height:"1662"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Copy the generated client secret value and store it securely. You will need this value to configure the Grafana Helm chart."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Client secret",src:t(5806).A+"",width:"3364",height:"1662"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Navigate to the ",(0,i.jsx)(n.strong,{children:"Token configuration"})," section and click on ",(0,i.jsx)(n.strong,{children:"Add groups claim"})," button. Choose the group type as ",(0,i.jsx)(n.strong,{children:"Security Groups"})," and for the ID token type, select ",(0,i.jsx)(n.strong,{children:"Group ID"}),". Also, choose the ",(0,i.jsx)(n.strong,{children:"Emit groups as role claims"})," option."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Token configuration",src:t(64010).A+"",width:"3364",height:"1662"})}),"\n",(0,i.jsxs)(n.p,{children:["Also, add the ",(0,i.jsx)(n.strong,{children:"preferred_username"}),", ",(0,i.jsx)(n.strong,{children:"email"})," and ",(0,i.jsx)(n.strong,{children:"upn"})," optional claims."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Token configuration",src:t(62467).A+"",width:"3364",height:"1662"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Navigate to the ",(0,i.jsx)(n.strong,{children:"API permissions"})," section. Click on the ",(0,i.jsx)(n.strong,{children:"Add a permission"})," button. Select ",(0,i.jsx)(n.strong,{children:"Microsoft Graph"})," and then ",(0,i.jsx)(n.strong,{children:"Delegated permissions"}),". Add the following permissions:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"email"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"openid"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"profile"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"User.Read"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"GroupMember.Read.All"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"API permissions",src:t(38455).A+"",width:"3364",height:"1662"})}),"\n",(0,i.jsxs)(n.p,{children:["After adding the permissions, click on the ",(0,i.jsx)(n.strong,{children:"Grant admin consent for 'Tenant name'"})," button to grant the required permissions."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"After configuring the Microsoft Entra Application, you can proceed with configuring the Grafana Helm chart."}),"\n",(0,i.jsx)(n.h2,{id:"creating-the-groups",children:"Creating the Groups"}),"\n",(0,i.jsx)(n.p,{children:"To manage access to Grafana, it is necessary to create the groups in Microsoft Entra and assign users to it."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the Microsoft Entra Admin Center, in the left sidebar menu, select ",(0,i.jsx)(n.strong,{children:"Groups"})," and then ",(0,i.jsx)(n.strong,{children:"All groups"}),". Click on ",(0,i.jsx)(n.strong,{children:"New group"})," button to create a new group(s) for users who will have access to Grafana (e.g., ",(0,i.jsx)(n.code,{children:"administrator"}),", ",(0,i.jsx)(n.code,{children:"developer"}),")."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"New group",src:t(38403).A+"",width:"3364",height:"1647"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Fill in the required fields, such as ",(0,i.jsx)(n.strong,{children:"Groups type"})," and ",(0,i.jsx)(n.strong,{children:"Group name"}),". In the ",(0,i.jsx)(n.strong,{children:"Members"})," section, add users who will be part of the group."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Create group",src:t(79909).A+"",width:"3364",height:"1658"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["After adding the necessary members, review the group settings and click ",(0,i.jsx)(n.strong,{children:"Create"})," to save the group. Repeat this process for each required group."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"configuring-grafana-helm-chart",children:"Configuring Grafana Helm chart"}),"\n",(0,i.jsxs)(n.p,{children:["To integrate Grafana with configured Microsoft Entra Application, it is necessary to configure the Grafana Helm chart. In this example, we will use the ",(0,i.jsx)(n.a,{href:"https://github.com/epam/edp-cluster-add-ons",children:"edp-cluster-add-ons"})," repository and the ",(0,i.jsx)(n.strong,{children:"prometheus-operator"})," Helm chart to deploy Grafana to the Kubernetes (e.g. AWS EKS) cluster."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["The Application data, such as ",(0,i.jsx)(n.strong,{children:"Application (client) ID"})," and ",(0,i.jsx)(n.strong,{children:"Directory (tenant) ID"}),", can be found in the ",(0,i.jsx)(n.strong,{children:"Overview"})," section of the Application in the Microsoft Entra Admin Center.\n",(0,i.jsx)(n.img,{alt:"Application data",src:t(26913).A+"",width:"1296",height:"587"})]})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"Object ID"})," can be found in the ",(0,i.jsx)(n.strong,{children:"Overview"})," section of the group in the Microsoft Entra Admin Center.\n",(0,i.jsx)(n.img,{alt:"Group Object ID",src:t(35661).A+"",width:"1350",height:"903"})]})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Navigate to the forked ",(0,i.jsx)(n.a,{href:"https://github.com/epam/edp-cluster-add-ons",children:"Cluster Add-Ons repository"})," and locate the ",(0,i.jsx)(n.code,{children:"values.yaml"})," file in the ",(0,i.jsx)(n.code,{children:"clusters/core/addons/prometheus-operator"})," directory."]}),"\n",(0,i.jsxs)(n.p,{children:["Update the ",(0,i.jsx)(n.code,{children:"grafana"})," section in the ",(0,i.jsx)(n.code,{children:"values.yaml"})," file with the following values:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'title="clusters/core/addons/prometheus-operator/values.yaml"',children:"kube-prometheus-stack:\n  grafana:\n    grafana.ini:\n      auth.generic_oauth:\n        enabled: true\n        client_secret: ${GF_AUTH_AZUREAD_CLIENT_SECRET}\n        client_id: \"<Application (client) ID>\"\n        allow_sign_up:  true\n        scopes:  openid email profile\n        auth_url: \"https://login.microsoftonline.com/<Directory (tenant) ID>/oauth2/v2.0/authorize\"\n        token_url: \"https://login.microsoftonline.com/<Directory (tenant) ID>/oauth2/v2.0/token\"\n        role_attribute_strict: false\n        role_attribute_path: contains(roles[*], '<Object ID of the Administrator group>') && 'Admin' || contains(roles[*], 'Object ID of the Developer group') && 'Editor' || 'Viewer'\n        skip_org_role_sync: false\n        api_url: \"https://graph.microsoft.com/oidc/userinfo\"\n"})}),"\n",(0,i.jsx)(n.p,{children:"Replace the following placeholders with the actual values:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"<Application (client) ID>"})," - The Application ID from the Microsoft Entra Application settings."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"<Directory (tenant) ID>"})," - The Directory ID of your Microsoft Entra Tenant."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"<Object ID of the Administrator group>"})," - The Object ID of the ",(0,i.jsx)(n.code,{children:"administrator"})," group created in Microsoft Entra."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"<Object ID of the Developer group>"})," - The Object ID of the ",(0,i.jsx)(n.code,{children:"developer"})," group created in Microsoft Entra."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Update or create the ",(0,i.jsx)(n.code,{children:"keycloak-client-grafana-secret"})," secret with the Application Client Secret value."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Using External Secrets Operator"}),"\n",(0,i.jsxs)(n.p,{children:["Navigate to the ",(0,i.jsx)(n.code,{children:"clusters/core/addons/prometheus-operator/templates/external-secrets/externalsecret-keycloak-client-grafana-secret.yaml"})," file and set the ",(0,i.jsx)(n.code,{children:"spec.data.secretKey"})," field to the ",(0,i.jsx)(n.code,{children:"GF_AUTH_AZUREAD_CLIENT_SECRET"})," value."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'title="clusters/core/addons/prometheus-operator/templates/external-secrets/externalsecret-keycloak-client-grafana-secret.yaml"',children:"{{- if .Values.eso.enabled }}\n{{- $secretName := .Values.eso.secretName }}\napiVersion: external-secrets.io/v1beta1\nkind: ExternalSecret\nmetadata:\n  name: keycloak-client-grafana-secret\nspec:\n  refreshInterval: 1h\n  secretStoreRef:\n    kind: SecretStore\n    name: {{ .Values.eso.secretStoreName }}\n  data:\n  - secretKey: GF_AUTH_AZUREAD_CLIENT_SECRET\n    remoteRef:\n      conversionStrategy: Default\n      decodingStrategy: None\n      key: {{ $secretName }}\n      metadataPolicy: None\n      property: keycloak-client-grafana-secret.clientSecret\n {{- end }}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Be sure to update the AWS Parameter Store object path specified in the ",(0,i.jsx)(n.code,{children:"clusters/core/addons/prometheus-operator/values.yaml"})," file in the ",(0,i.jsx)(n.code,{children:"eso.secretName"})," field with the Application Client Secret value."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:'title="AWS Parameter Store object"',children:'{\n  "keycloak-client-grafana-secret": {\n    "clientSecret": "<Application Client Secret>"\n  }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Replace the ",(0,i.jsx)(n.code,{children:"<Application Client Secret>"})," placeholder with the actual Client Secret value."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Manual approach"}),"\n",(0,i.jsxs)(n.p,{children:["Create the ",(0,i.jsx)(n.code,{children:"keycloak-client-grafana-secret"})," secret manually using the following template:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'title="keycloak-client-grafana-secret.yaml"',children:"apiVersion: v1\nkind: Secret\nmetadata:\n  name: keycloak-client-grafana-secret\n  namespace: <namespace>\ndata:\n  GF_AUTH_AZUREAD_CLIENT_SECRET: <Application Client Secret>\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Replace the ",(0,i.jsx)(n.code,{children:"<Application Client Secret>"})," placeholder with the actual Client Secret value."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["After updating the ",(0,i.jsx)(n.code,{children:"values.yaml"})," file and creating the ",(0,i.jsx)(n.code,{children:"keycloak-client-grafana-secret"})," secret, commit the changes to the repository and apply the changes with Helm or Argo CD."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Verify that the OIDC authentication is configured correctly by logging in to Grafana using the Microsoft Entra credentials."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Grafana login",src:t(4911).A+"",width:"3364",height:"1642"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"After completing these steps, Grafana will be configured to use Microsoft Entra as the Identity Provider for authentication."}),"\n",(0,i.jsx)(n.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/3.9/operator-guide/microsoft-entra/oidc-authentication-overview",children:"OpenID Connect (OIDC) Authentication Overview"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},65275:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/app-registrations-85bb491010c97a96c465bae8c5f3d238.png"},79909:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/create-group-9dbf252dc7cd4c8f3b75962d9c234114.png"},38455:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/grafana-api-permissions-0a418039df42f2526ae39a9b7530e2e9.png"},26913:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/grafana-application-data-91cfe1da01fc91af9b8ea983472cdd3d.png"},82670:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/grafana-authentication-settings-298cc2acf9d3da8eaa111d738aa87193.png"},5806:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/grafana-client-secret-02d58c70b4f8256180fd7416d722e056.png"},31783:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/grafana-client-secrets-fb586aa15116e4e778386b46c97acfaa.png"},4911:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/grafana-login-dddded387629a8f76747b20bc6fbd809.png"},62467:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/grafana-token-configuration-2-c7d1647deff6d692e0e8764b5a1f0944.png"},64010:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/grafana-token-configuration-b07549bdd42a9253c085ab08cd3fe74e.png"},3394:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/microsoft-entra-admin-center-156ae7d9496f05355dce9a20eca80969.png"},38403:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/new-group-e01c9c34e53e303a3e24acfa7233005c.png"},6543:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/new-registration-47e751488bf7b3fc6c9c019c7e635ac8.png"},35661:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/oauth2-proxy-group-object-id-7e806c8677ce759613bad1cb357c7af5.png"},52997:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/register-application-abe176af450d421aa7dd9713dd3bf5cf.png"},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var r=t(96540);const i={},s=r.createContext(i);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);