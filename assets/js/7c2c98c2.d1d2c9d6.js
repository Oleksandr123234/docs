"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[28192],{97114:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"operator-guide/microsoft-entra/defectdojo-oidc-authentication","title":"Guide: Microsoft Entra SSO Integration With Ansible AWX","description":"Step-by-step instructions on configuring Ansible AWX with OIDC authentication using Microsoft Entra as the Identity Provider for enhanced security.","source":"@site/versioned_docs/version-3.9/operator-guide/microsoft-entra/defectdojo-oidc-authentication.md","sourceDirName":"operator-guide/microsoft-entra","slug":"/operator-guide/microsoft-entra/defectdojo-oidc-authentication","permalink":"/docs/3.9/operator-guide/microsoft-entra/defectdojo-oidc-authentication","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/operator-guide/microsoft-entra/defectdojo-oidc-authentication.md","tags":[],"version":"3.9","lastUpdatedBy":"Oleksandr_Stepanov@epam.com","lastUpdatedAt":1740746844000,"frontMatter":{"title":"Guide: Microsoft Entra SSO Integration With Ansible AWX","description":"Step-by-step instructions on configuring Ansible AWX with OIDC authentication using Microsoft Entra as the Identity Provider for enhanced security.","sidebar_label":"Ansible AWX"},"sidebar":"operatorGuideSidebar","previous":{"title":"DefectDojo","permalink":"/docs/3.9/operator-guide/microsoft-entra/dependency-track-authentication"},"next":{"title":"Grafana","permalink":"/docs/3.9/operator-guide/microsoft-entra/grafana-authentication"}}');var r=n(74848),s=n(28453);const o={title:"Guide: Microsoft Entra SSO Integration With Ansible AWX",description:"Step-by-step instructions on configuring Ansible AWX with OIDC authentication using Microsoft Entra as the Identity Provider for enhanced security.",sidebar_label:"Ansible AWX"},c="Guide: Microsoft Entra SSO Integration With DefectDojo",a={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuring Microsoft Entra Application",id:"configuring-microsoft-entra-application",level:2},{value:"Configuring DefectDojo Helm chart",id:"configuring-defectdojo-helm-chart",level:2},{value:"Related articles",id:"related-articles",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{Head:i}=t;return i||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"guide-microsoft-entra-sso-integration-with-defectdojo",children:"Guide: Microsoft Entra SSO Integration With DefectDojo"})}),"\n",(0,r.jsx)(i,{children:(0,r.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/operator-guide/microsoft-entra/defectdojo-oidc-authentication/"})}),"\n",(0,r.jsx)(t.p,{children:"This guide provides instructions on how to configure DefectDojo with OpenID Connect (OIDC) authentication using Microsoft Entra as the Identity Provider (IdP)."}),"\n",(0,r.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Access to the ",(0,r.jsx)(t.a,{href:"https://entra.microsoft.com/",children:"Microsoft Entra Admin Center"})," with administrative privileges."]}),"\n",(0,r.jsx)(t.li,{children:"Created Microsoft Entra Tenant."}),"\n",(0,r.jsxs)(t.li,{children:["Installed DefectDojo (can be installed during ",(0,r.jsx)(t.strong,{children:"Configuring Helm chart"})," step)."]}),"\n",(0,r.jsxs)(t.li,{children:["Fork copy of the ",(0,r.jsx)(t.a,{href:"https://github.com/epam/edp-cluster-add-ons",children:"edp-cluster-add-ons"})," repository."]}),"\n",(0,r.jsx)(t.li,{children:"(Optional) Installed External Secrets Operator."}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"configuring-microsoft-entra-application",children:"Configuring Microsoft Entra Application"}),"\n",(0,r.jsx)(t.p,{children:"To configure Microsoft Entra as the Identity Provider for DefectDojo, it is necessary to create and configure an Application in the Microsoft Entra Admin Center."}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Log in to the ",(0,r.jsx)(t.a,{href:"https://entra.microsoft.com/?feature.msaljs=true#home",children:"Microsoft Entra Admin Center"}),"."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Microsoft Entra Admin Center",src:n(3394).A+"",width:"3364",height:"1648"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["In the left sidebar menu, select ",(0,r.jsx)(t.strong,{children:"Applications"})," and click ",(0,r.jsx)(t.strong,{children:"App registrations"}),"."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"App registrations",src:n(65275).A+"",width:"3364",height:"1648"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Click on the ",(0,r.jsx)(t.strong,{children:"New registration"})," button."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"New registration",src:n(6543).A+"",width:"3364",height:"1648"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Fill in the required fields, such as ",(0,r.jsx)(t.strong,{children:"Name"}),", ",(0,r.jsx)(t.strong,{children:"Supported account types"})," and ",(0,r.jsx)(t.strong,{children:"Redirect URI"})," (You can skip setting the ",(0,r.jsx)(t.strong,{children:"Redirect URI"})," if you don't deploy DefectDojo yet). Click ",(0,r.jsx)(t.strong,{children:"Register"})," to create the application."]}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.strong,{children:"Redirect URI"})," should be in the format ",(0,r.jsx)(t.code,{children:"https://<DefectDojo URL>/complete/azuread-tenant-oauth2/"}),"."]})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Register application",src:n(52997).A+"",width:"3364",height:"1658"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["In the created application, navigate to the ",(0,r.jsx)(t.strong,{children:"Certificates & secrets"})," section from the left sidebar menu. In the ",(0,r.jsx)(t.strong,{children:"Client secrets"})," tab, click on the ",(0,r.jsx)(t.strong,{children:"New client secret"})," button to create a new secret. Fill in the required fields and click ",(0,r.jsx)(t.strong,{children:"Add"}),"."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Client secrets",src:n(51096).A+"",width:"3364",height:"1658"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Copy the generated Client secret value and store it securely. You will need this value to configure the DefectDojo Helm chart."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Client secret",src:n(27707).A+"",width:"3364",height:"1658"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Navigate to the ",(0,r.jsx)(t.strong,{children:"API permissions"})," section. Ensure that the ",(0,r.jsx)(t.strong,{children:"User.Read"})," permission is added under the ",(0,r.jsx)(t.strong,{children:"Microsoft Graph"})," API. If not, click on the ",(0,r.jsx)(t.strong,{children:"Add a permission"})," button, select ",(0,r.jsx)(t.strong,{children:"Microsoft Graph"}),", and add the ",(0,r.jsx)(t.strong,{children:"User.Read"})," permission. After adding the permission, click on the ",(0,r.jsx)(t.strong,{children:"Grant admin consent for 'Tenant name'"})," button to grant the required permissions."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"API permissions",src:n(50646).A+"",width:"3364",height:"1658"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"configuring-defectdojo-helm-chart",children:"Configuring DefectDojo Helm chart"}),"\n",(0,r.jsxs)(t.p,{children:["To integrate DefectDojo with configured Microsoft Entra Application, it is necessary to configure the DefectDojo Helm chart.\nIn this example, we will use the ",(0,r.jsx)(t.a,{href:"https://github.com/epam/edp-cluster-add-ons",children:"edp-cluster-add-ons"})," repository to deploy DefectDojo to the Kubernetes (e.g. AWS EKS) cluster."]}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["The Application data, such as ",(0,r.jsx)(t.strong,{children:"Application (client) ID"})," and ",(0,r.jsx)(t.strong,{children:"Directory (tenant) ID"}),", can be found in the ",(0,r.jsx)(t.strong,{children:"Overview"})," section of the Application in the Microsoft Entra Admin Center.\n",(0,r.jsx)(t.img,{alt:"Application data",src:n(50998).A+"",width:"1289",height:"579"})]})}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Navigate to the forked ",(0,r.jsx)(t.a,{href:"https://github.com/epam/edp-cluster-add-ons",children:"Cluster Add-Ons repository"})," and locate the ",(0,r.jsx)(t.code,{children:"values.yaml"})," file in the ",(0,r.jsx)(t.code,{children:"clusters/core/addons/defectdojo"})," directory."]}),"\n",(0,r.jsxs)(t.p,{children:["Update the ",(0,r.jsx)(t.code,{children:"values.yaml"})," file with the following values:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",metastring:'title="clusters/core/addons/defectdojo/values.yaml"',children:"defectdojo:\n  extraConfigs:\n    DD_SOCIAL_AUTH_AZUREAD_TENANT_OAUTH2_KEY: '<Application (client) ID>'\n    DD_SOCIAL_AUTH_AZUREAD_TENANT_OAUTH2_SECRET: \"defectdojo-extrasecrets\"\n    DD_SOCIAL_AUTH_AZUREAD_TENANT_OAUTH2_TENANT_ID: '<Directory (tenant) ID>'\n    DD_SOCIAL_AUTH_AZUREAD_TENANT_OAUTH2_ENABLED: 'True'\n    DD_SESSION_COOKIE_SECURE: 'True'\n    DD_CSRF_COOKIE_SECURE: 'True'\n    DD_SECURE_SSL_REDIRECT: 'False'\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Replace the ",(0,r.jsx)(t.code,{children:"<Application (client) ID>"})," and ",(0,r.jsx)(t.code,{children:"<Directory (tenant) ID>"})," placeholders with the appropriate values from the Microsoft Entra Application created in the previous step."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Update or create the ",(0,r.jsx)(t.code,{children:"defectdojo-extrasecrets"})," secret with the Application Client Secret value."]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Using External Secrets Operator"}),"\n",(0,r.jsxs)(t.p,{children:["Navigate to the ",(0,r.jsx)(t.code,{children:"clusters/core/addons/defectdojo/templates/external-secrets/externalsecret-defectdojo-extrasecrets.yaml"})," file and set the ",(0,r.jsx)(t.code,{children:".spec.data.secretKey"})," field to the ",(0,r.jsx)(t.code,{children:"DD_SOCIAL_AUTH_AZUREAD_TENANT_OAUTH2_SECRET"})," value."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",metastring:'title="clusters/core/addons/defectdojo/templates/external-secrets/externalsecret-defectdojo-extrasecrets.yaml"',children:"apiVersion: external-secrets.io/v1beta1\nkind: ExternalSecret\nmetadata:\n  name: defectdojo-extrasecrets\nspec:\n  refreshInterval: 1h\n  secretStoreRef:\n    kind: SecretStore\n    name: {{ .Values.eso.secretStoreName }}\n  data:\n    - secretKey: DD_SOCIAL_AUTH_AZUREAD_TENANT_OAUTH2_SECRET\n      remoteRef:\n        key: {{ $secretName }}\n        property: defectdojo.oidcClientSecret\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Be sure to update the AWS Parameter Store object path specified in the ",(0,r.jsx)(t.code,{children:"clusters/core/addons/defectdojo/values.yaml"})," file in the ",(0,r.jsx)(t.code,{children:"eso.secretName"})," field with the Application Client Secret value."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",metastring:'title="AWS Parameter Store object"',children:'{\n  "defectdojo.oidcClientSecret": "<Application Client Secret>"\n}\n'})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Manual approach"}),"\n",(0,r.jsxs)(t.p,{children:["Create the ",(0,r.jsx)(t.code,{children:"defectdojo-extrasecrets"})," secret manually using the following template:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",metastring:'title="defectdojo-extrasecrets.yaml"',children:"apiVersion: v1\nkind: Secret\nmetadata:\n  name: defectdojo-extrasecrets\n  namespace: <namespace>\ntype: Opaque\ndata:\n  DD_SOCIAL_AUTH_AZUREAD_TENANT_OAUTH2_SECRET: <Application Client Secret>\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Replace ",(0,r.jsx)(t.code,{children:"<Application Client Secret>"})," with the generated Client secret value from the Microsoft Entra Application."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["After updating the ",(0,r.jsx)(t.code,{children:"values.yaml"})," file and creating the ",(0,r.jsx)(t.code,{children:"defectdojo-extrasecrets"})," secret, commit the changes to the repository and apply the changes with Helm or Argo CD."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Navigate to the Microsoft Entra Application and add the ",(0,r.jsx)(t.strong,{children:"Redirect URI"})," in the ",(0,r.jsx)(t.strong,{children:"Authentication"})," section if you haven't done it before."]}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.strong,{children:"Redirect URI"})," should be in the format ",(0,r.jsx)(t.code,{children:"https://<DefectDojo URL>/complete/azuread-tenant-oauth2/"}),"."]})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Redirect URI",src:n(32768).A+"",width:"3364",height:"1658"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Verify that the OIDC authentication is configured correctly by logging in to DefectDojo using the ",(0,r.jsx)(t.strong,{children:"Log in with Azure AD"})," option."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"DefectDojo login",src:n(57006).A+"",width:"3364",height:"1660"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"After successfully verifying the login, you can proceed with configuring specific permissions for each logged-in user directly within the DefectDojo application."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"related-articles",children:"Related articles"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/docs/3.9/operator-guide/microsoft-entra/oidc-authentication-overview",children:"OpenID Connect Authentication Overview"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},65275:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/app-registrations-85bb491010c97a96c465bae8c5f3d238.png"},50646:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/defectdojo-api-permissions-14ae8dcef4b2d4b925beb2fa6452df8d.png"},50998:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/defectdojo-application-data-6869e3bac9395962797f412f0e2732b1.png"},27707:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/defectdojo-client-secret-18243389ab8b9b71bcaa761924372a34.png"},51096:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/defectdojo-client-secrets-c99219e94ab9c039d8c4ebb879058d4c.png"},57006:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/defectdojo-login-3c694c475ec36024ee69a93222760500.png"},32768:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/defectdojo-redirect-uri-05a4946ee494615018d590c6c2eb91c5.png"},3394:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/microsoft-entra-admin-center-156ae7d9496f05355dce9a20eca80969.png"},6543:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/new-registration-47e751488bf7b3fc6c9c019c7e635ac8.png"},52997:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/register-application-abe176af450d421aa7dd9713dd3bf5cf.png"},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var i=n(96540);const r={},s=i.createContext(r);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);