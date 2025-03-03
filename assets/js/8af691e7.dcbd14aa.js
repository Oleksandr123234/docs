"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[66908],{12951:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"operator-guide/auth/configure-keycloak-oidc-eks","title":"EKS OIDC With Keycloak","description":"Step-by-step guide on configuring Keycloak as OIDC Identity Provider for EKS, enabling Single Sign-On capabilities for enhanced security.","source":"@site/docs/operator-guide/auth/configure-keycloak-oidc-eks.md","sourceDirName":"operator-guide/auth","slug":"/operator-guide/auth/configure-keycloak-oidc-eks","permalink":"/docs/next/operator-guide/auth/configure-keycloak-oidc-eks","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/operator-guide/auth/configure-keycloak-oidc-eks.md","tags":[],"version":"current","lastUpdatedBy":"Sergiy Kulanov","lastUpdatedAt":1740847812000,"frontMatter":{"title":"EKS OIDC With Keycloak","description":"Step-by-step guide on configuring Keycloak as OIDC Identity Provider for EKS, enabling Single Sign-On capabilities for enhanced security.","sidebar_label":"EKS OIDC With Keycloak"},"sidebar":"operatorGuideSidebar","previous":{"title":"Portal OIDC Configuration","permalink":"/docs/next/operator-guide/auth/ui-portal-oidc"},"next":{"title":"Tekton Dashboard Authentication","permalink":"/docs/next/operator-guide/auth/oauth2-proxy"}}');var r=t(74848),i=t(28453),a=t(65537),o=t(79329);const l={title:"EKS OIDC With Keycloak",description:"Step-by-step guide on configuring Keycloak as OIDC Identity Provider for EKS, enabling Single Sign-On capabilities for enhanced security.",sidebar_label:"EKS OIDC With Keycloak"},c="EKS OIDC With Keycloak",d={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Solution Overview",id:"solution-overview",level:2},{value:"Keycloak Configuration",id:"keycloak-configuration",level:2},{value:"AWS Configuration",id:"aws-configuration",level:2},{value:"Kubeconfig",id:"kubeconfig",level:2},{value:"Access Validation",id:"access-validation",level:2},{value:"Session Update",id:"session-update",level:2},{value:"Access Cluster via Lens",id:"access-cluster-via-lens",level:2},{value:"Changing the Lifespan of an Access Token",id:"changing-the-lifespan-of-an-access-token",level:2},{value:"Related Articles",id:"related-articles",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{Head:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"eks-oidc-with-keycloak",children:"EKS OIDC With Keycloak"})}),"\n",(0,r.jsx)(s,{children:(0,r.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/operator-guide/auth/configure-keycloak-oidc-eks"})}),"\n",(0,r.jsxs)(n.p,{children:["This article provides the instruction of configuring Keycloak as ",(0,r.jsx)(n.a,{href:"https://aws.amazon.com/blogs/containers/introducing-oidc-identity-provider-authentication-amazon-eks/",children:"OIDC Identity Provider"})," for EKS.\nThe example is implemented following the KubeRocketCI add-ons approach."]}),"\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsx)(n.p,{children:"To follow the instruction, check the following prerequisites:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"(Optional) Terraform version 1.5.7"}),"\n",(0,r.jsx)(n.li,{children:"Kubelogin version >= v1.25.1"}),"\n",(0,r.jsxs)(n.li,{children:["(Optional) ",(0,r.jsx)(n.a,{href:"/docs/next/operator-guide/add-ons-overview",children:"EDP Cluster Add-ons"})," Solution is applied"]}),"\n",(0,r.jsxs)(n.li,{children:["(Optional) ",(0,r.jsx)(n.a,{href:"https://github.com/epam/edp-cluster-add-ons/tree/main/clusters/core/addons/external-secrets",children:"External Secrets Operator"})]}),"\n",(0,r.jsxs)(n.li,{children:["A running ",(0,r.jsx)(n.a,{href:"https://github.com/epam/edp-cluster-add-ons/tree/main/clusters/core/addons/keycloak",children:"Keycloak instance"})]}),"\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.a,{href:"https://github.com/epam/edp-cluster-add-ons/tree/main/clusters/core/addons/keycloak-operator",children:"Keycloak operator"})," is deployed"]}),"\n",(0,r.jsx)(n.li,{children:"The Keycloak Realm's OIDC discovery URL and jwks_uri endpoints are publicly accessible"}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["To connect OIDC with a cluster, install and configure the ",(0,r.jsx)(n.a,{href:"https://github.com/int128/kubelogin",children:"kubelogin"})," plugin. For Windows, it is recommended to download the kubelogin as a binary and add it to your PATH."]})}),"\n",(0,r.jsx)(n.h2,{id:"solution-overview",children:"Solution Overview"}),"\n",(0,r.jsxs)(n.p,{children:["This architecture encompasses three primary resource types: AWS (EKS), Keycloak, and Kubernetes.\nWithin this setup, the Keycloak resources, once established, remain static, facilitating the assignment of claims based on user group memberships. This stability contrasts with the dynamic nature of other resources, which may be created, modified, or deleted as necessary.\nOf particular importance within the Kubernetes ecosystem are the ",(0,r.jsx)(n.code,{children:"RoleBindings"})," and ",(0,r.jsx)(n.code,{children:"ClusterRoles/Roles"}),". These elements define a permissions framework, where Roles specify the permissions available, and RoleBindings serve to associate those Roles with specific Keycloak groups. This association ensures that members of a group are granted only the permissions that are pertinent to their role."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"EKS Keycloak OIDC",src:t(40953).A+"",width:"941",height:"738"})}),"\n",(0,r.jsx)(n.h2,{id:"keycloak-configuration",children:"Keycloak Configuration"}),"\n",(0,r.jsx)(n.p,{children:"The initial step involves setting up the Keycloak operator (configure connections to the Keycloak instance) and along creation its associated resources, including realms, clients, roles, and groups."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Create user with ",(0,r.jsx)(n.a,{href:"/docs/next/operator-guide/auth/keycloak#configuration",children:"necessary"})," privileges to Keycloak:"]}),"\n",(0,r.jsxs)(a.A,{defaultValue:"eso",values:[{label:"External Secret Operator",value:"eso"},{label:"Manual",value:"manual"}],children:[(0,r.jsxs)(o.A,{value:"eso",children:[(0,r.jsx)(n.p,{children:"Store user credentials in AWS Parameter Store:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",metastring:'title="AWS Parameter Store"',children:'{\n  "keycloak": {\n    "username": "<KEYCLOAK_USERNAME>",\n    "password": "<KEYCLOAK_PASSWORD>"\n  }\n}\n'})})]}),(0,r.jsxs)(o.A,{value:"manual",children:[(0,r.jsxs)(n.p,{children:["Deactivate the External Secret Operator within the primary ",(0,r.jsx)(n.a,{href:"https://github.com/epam/edp-cluster-add-ons/blob/main/clusters/core/addons/kuberocketci-rbac/values.yaml#L27",children:"kuberocketci-rbac"})," chart:"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:'title="values.yaml"',children:"# Configure components of the External Secrets Operator (ESO).\neso:\n  # -- Install components of the ESO.\n  enabled: false\n"})}),(0,r.jsx)(n.p,{children:"Create secret with user credentials:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"kubectl create secret generic keycloak \\\n  --from-literal=username=<KEYCLOAK_USERNAME> \\\n  --from-literal=password=<KEYCLOAK_PASSWORD>\n"})})]})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Begin by installing the ",(0,r.jsx)(n.a,{href:"https://github.com/epam/edp-cluster-add-ons/tree/main/clusters/core/addons/kuberocketci-rbac",children:(0,r.jsx)(n.strong,{children:"kuberocketci-rbac"})})," add-on. This can be accomplished through the use of the add-ons method, as detailed in the ",(0,r.jsx)(n.a,{href:"/docs/next/operator-guide/add-ons-overview",children:"addons approach"}),". Utilize the following values in the ",(0,r.jsx)(n.code,{children:"values.yaml"})," file:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:'title="values.yaml"',children:'keycloakUrl: "https://example.com"\n# -- This block enable the creation of Keycloak operator resources for the\n# EKS OIDC configuration, such as client, client scope, and realm groups.\nkubernetes:\n  enabled: true\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Activate the ",(0,r.jsx)(n.a,{href:"https://github.com/epam/edp-cluster-add-ons/blob/main/chart/values.yaml#L58",children:(0,r.jsx)(n.strong,{children:"kuberocketci-rbac"})})," add-on within the application settings:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:'title="values.yaml"',children:"kuberocketci-rbac:\n  createNamespace: true\n  enable: true\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"This add-ons facilitates sets up a broker realm to manage traffic redirection between external Identity Providers (IdP) and internal clients. Additionally, it creates a shared realm that encompasses all clients, including to EKS, Sonar, Nexus, and Portal."}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.a,{href:"https://github.com/epam/edp-cluster-add-ons/tree/main/clusters/core/addons/kuberocketci-rbac",children:"KubeRocketCI RBAC add-on"})," creates Keycloak groups that are used in the KubeRocketCI platform to manage access to resources. For more details refer to the ",(0,r.jsx)(n.a,{href:"/docs/next/operator-guide/auth/platform-auth-model#groups",children:"KubeRocketCI Groups"})," documentation."]}),"\n",(0,r.jsx)(n.h2,{id:"aws-configuration",children:"AWS Configuration"}),"\n",(0,r.jsx)(n.p,{children:"Configure Identity provider in kubernetes cluster"}),"\n",(0,r.jsxs)(a.A,{defaultValue:"terraform",values:[{label:"Terraform",value:"terraform"},{label:"AWS Console UI",value:"aws"}],children:[(0,r.jsxs)(o.A,{value:"terraform",children:[(0,r.jsxs)(n.p,{children:["For integrating OpenID Connect (OIDC) with Amazon EKS through terraform, it's essential to update the EKS module within your terraform repository. The relevant repository can be found at KubeRocketCI's ",(0,r.jsx)(n.a,{href:"https://github.com/KubeRocketCI/terraform-aws-platform/tree/master/eks",children:"terraform-aws-platform"}),". Adjust the module by incorporating the following configuration in the ",(0,r.jsx)(n.code,{children:"eks/template.tfvars"})," file:"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",metastring:'title="eks/template.tfvars"',children:'# OIDC Identity provider configuration\ncluster_identity_providers = {\n  keycloak = {\n    client_id = "eks"\n    issuer_url = "https://example.com/auth/realms/shared"\n    groups_claim = "groups"\n  }\n}\n'})}),(0,r.jsxs)(n.p,{children:["This configuration snippet specifies the Keycloak as the OIDC Identity Provider for your EKS cluster. It includes the client ID (",(0,r.jsx)(n.code,{children:"eks"}),"), the issuer URL (pointing to the Keycloak realm), and the claim used for groups (",(0,r.jsx)(n.code,{children:"groups"}),"). This setup ensures that authentication and authorization mechanisms for accessing the EKS cluster are correctly configured to use Keycloak as the identity provider."]})]}),(0,r.jsxs)(o.A,{value:"aws",children:[(0,r.jsx)(n.p,{children:"The objective is to configure an Identity Provider within your Kubernetes cluster. The process involves several steps within the AWS Management Console:"}),(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Begin by opening the AWS Management Console."}),"\n",(0,r.jsx)(n.li,{children:"Navigate to the Elastic Kubernetes Service (EKS) section."}),"\n",(0,r.jsxs)(n.li,{children:["Select your specific ",(0,r.jsx)(n.strong,{children:"Cluster name"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Go to the ",(0,r.jsx)(n.strong,{children:"Access"})," tab, then find and select the ",(0,r.jsx)(n.strong,{children:"OIDC identity providers"})," section."]}),"\n",(0,r.jsxs)(n.li,{children:["Click on ",(0,r.jsx)(n.strong,{children:"Associate identity provider"}),"."]}),"\n"]}),(0,r.jsx)(n.p,{children:"When associating the identity provider, ensure you input the following details:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"Issuer URL: https://example.com/auth/realms/shared\nClient ID: eks\nGroups Claim: groups\n"})})]})]}),"\n",(0,r.jsx)(n.h2,{id:"kubeconfig",children:"Kubeconfig"}),"\n",(0,r.jsx)(n.p,{children:"Template for kubeconfig:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"apiVersion: v1\npreferences: {}\nkind: Config\n\nclusters:\n- cluster:\n    server: https://<eks_url>.eks.amazonaws.com\n    certificate-authority-data: <certificate_authority_data>\n  name: eks\n\ncontexts:\n- context:\n    cluster: eks\n    user: <keycloak_user_email>\n  name: eks\n\ncurrent-context: eks\n\nusers:\n- name: <keycloak_user_email>\n  user:\n    exec:\n      apiVersion: client.authentication.k8s.io/v1beta1\n      command: kubectl\n      args:\n      - oidc-login\n      - get-token\n      - -v1\n      - --oidc-issuer-url=https://<keycloak_url>/auth/realms/shared\n      - --oidc-client-id=eks\n      - --oidc-client-secret=<keycloak_client_secret>\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Flag ",(0,r.jsx)(n.code,{children:"-v1"})," can be used for debug, in a common case it's not needed and can be deleted."]}),"\n",(0,r.jsx)(n.p,{children:"To find the client secret:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Open Keycloak"}),"\n",(0,r.jsxs)(n.li,{children:["Choose ",(0,r.jsx)(n.strong,{children:"Shared realm"})]}),"\n",(0,r.jsxs)(n.li,{children:["Find ",(0,r.jsx)(n.strong,{children:"eks"})," keycloak client"]}),"\n",(0,r.jsx)(n.li,{children:"Open Credentials tab"}),"\n",(0,r.jsx)(n.li,{children:"Copy Secret"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"access-validation",children:"Access Validation"}),"\n",(0,r.jsxs)(n.p,{children:["To validate access to the Kubernetes cluster by using the default ",(0,r.jsx)(n.strong,{children:"cluster-admin"})," role. Assign the user the ",(0,r.jsx)(n.strong,{children:"oidc-cluster-admins"})," Keycloak group."]}),"\n",(0,r.jsx)(n.p,{children:"To add a user to a Keycloak group, follow these steps:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Open Keycloak"}),"\n",(0,r.jsxs)(n.li,{children:["Choose ",(0,r.jsx)(n.strong,{children:"Shared"})," realm"]}),"\n",(0,r.jsx)(n.li,{children:"Open user screen with search field"}),"\n",(0,r.jsx)(n.li,{children:"Find a user and open the configuration"}),"\n",(0,r.jsx)(n.li,{children:"Open Groups tab"}),"\n",(0,r.jsxs)(n.li,{children:["In Available Groups, choose an ",(0,r.jsx)(n.strong,{children:"oidc-cluster-admins"})," group"]}),"\n",(0,r.jsxs)(n.li,{children:["Click the ",(0,r.jsx)(n.strong,{children:"Join"})," button"]}),"\n",(0,r.jsx)(n.li,{children:"The group should appear in the User's Group Membership list"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"As a result, the required access mapping is implemented using the following resources:"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Keycloak Group Name"}),(0,r.jsx)(n.th,{children:"Kubernetes ClusterRole"}),(0,r.jsx)(n.th,{children:"Kubernetes ClusterRoleBinding"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://github.com/epam/edp-cluster-add-ons/blob/main/clusters/core/addons/kuberocketci-rbac/templates/kubernetes/keycloak-realmgroups-cluster-admins.yaml",children:"oidc-cluster-admins"})}),(0,r.jsx)(n.td,{children:"cluster-admin (built-in)"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://github.com/epam/edp-cluster-add-ons/blob/main/clusters/core/addons/kuberocketci-rbac/templates/kubernetes/clusterrolebinding-admin.yaml",children:"cluster-admin"})})]})})]}),"\n",(0,r.jsxs)(n.p,{children:["In this configuration, the Keycloak ",(0,r.jsx)(n.strong,{children:"oidc-cluster-admins"})," group is mapped to the Kubernetes ",(0,r.jsx)(n.strong,{children:"cluster-admin"})," role. This setup grants members of the ",(0,r.jsx)(n.strong,{children:"oidc-cluster-admins"})," group the necessary permissions to perform administrator management in the Kubernetes cluster. You can further customize access by associating different Keycloak groups with specific Kubernetes roles."]}),"\n",(0,r.jsxs)(n.p,{children:["KubeRocketCI follows the same approach for managing access to its resources. For more information, refer to the ",(0,r.jsx)(n.a,{href:"/docs/next/operator-guide/auth/platform-auth-model#groups",children:"KubeRocketCI Groups"})," documentation."]}),"\n",(0,r.jsx)(n.p,{children:"Follow the steps below to test the configuration:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Run kubectl command, it is important to specify the correct kubeconfig:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"KUBECONFIG=<path_to_oidc_kubeconfig> kubectl get ingresses -n <namespace_name>\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["After the first run and redirection to the Keycloak login page, log in using credentials (login",":password",") or using SSO Provider.\nIn case of the successful login, you will receive the following notification that can be closed:"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"OIDC Successful Login",src:t(19073).A+"",width:"564",height:"207"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"As the result, a respective response from the Kubernetes will appear in the console\nin case a user is configured correctly and is a member of the correct group and Roles/RoleBindings."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"If something is not set up correctly, the following output error will be displayed:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'Error from server (Forbidden): ingresses.networking.k8s.io is forbidden:\nUser "https://<keycloak_url>/auth/realms/shared#<keycloak_user_id>"\ncannot list resource "ingresses" in API group "networking.k8s.io" in the namespace "<namespace_name>"\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"session-update",children:"Session Update"}),"\n",(0,r.jsx)(n.p,{children:"To update the session, clear cache.\nThe default location for the login cache:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"rm -rf ~/.kube/cache\n"})}),"\n",(0,r.jsx)(n.h2,{id:"access-cluster-via-lens",children:"Access Cluster via Lens"}),"\n",(0,r.jsxs)(n.p,{children:["To access the Kubernetes cluster via ",(0,r.jsx)(n.a,{href:"https://k8slens.dev/",children:"Lens"}),", follow the steps below to configure it:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Add a new kubeconfig to the location where Lens has access. The default location of the kubeconfig is ",(0,r.jsx)(n.strong,{children:"~/.kube/config"})," but it can be changed by navigating to ",(0,r.jsx)(n.strong,{children:"File"})," -> ",(0,r.jsx)(n.strong,{children:"Preferences"})," -> ",(0,r.jsx)(n.strong,{children:"Kubernetes"})," -> ",(0,r.jsx)(n.strong,{children:"Kubeconfig Syncs"}),";"]}),"\n",(0,r.jsx)(n.li,{children:"(Optional) Using Windows, it is recommended to reboot the system after adding a new kubeconfig;"}),"\n",(0,r.jsx)(n.li,{children:"Authenticate on the Keycloak login page to be able to access the cluster."}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Lens does not add namespaces of the project automatically, so it is necessary to add them manually, simply go to ",(0,r.jsx)(n.strong,{children:"Settings"})," -> ",(0,r.jsx)(n.strong,{children:"Namespaces"})," and add the namespaces of a project."]})}),"\n",(0,r.jsx)(n.h2,{id:"changing-the-lifespan-of-an-access-token",children:"Changing the Lifespan of an Access Token"}),"\n",(0,r.jsxs)(n.p,{children:["By default, the Keycloak token has a lifespan of 5 minutes. To modify this duration refer to the guidelines outlined in this ",(0,r.jsx)(n.a,{href:"/docs/next/operator-guide/auth/ui-portal-oidc#changing-the-lifespan-of-an-access-token",children:"document"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/next/operator-guide/auth/ui-portal-oidc",children:"Headlamp OIDC Configuration"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},79329:(e,n,t)=>{t.d(n,{A:()=>a});t(96540);var s=t(34164);const r={tabItem:"tabItem_Ymn6"};var i=t(74848);function a(e){let{children:n,hidden:t,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,a),hidden:t,children:n})}},65537:(e,n,t)=>{t.d(n,{A:()=>v});var s=t(96540),r=t(34164),i=t(65627),a=t(56347),o=t(50372),l=t(30604),c=t(11861),d=t(78749);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:r}}=e;return{value:n,label:t,attributes:s,default:r}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const r=(0,a.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(i),(0,s.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})}),[i,r])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,i=h(e),[a,l]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:i}))),[c,u]=g({queryString:t,groupId:r}),[m,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,i]=(0,d.Dv)(t);return[r,(0,s.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:r}),b=(()=>{const e=c??m;return p({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{b&&l(b)}),[b]);return{selectedValue:a,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,i]),tabValues:i}}var f=t(9136);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(74848);function k(e){let{className:n,block:t,selectedValue:s,selectValue:a,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),r=o[t].value;r!==s&&(c(n),a(r))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>{l.push(e)},onKeyDown:u,onClick:d,...i,className:(0,r.A)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:i}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===i));return e?(0,s.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function y(e){const n=m(e);return(0,x.jsxs)("div",{className:(0,r.A)("tabs-container",b.tabList),children:[(0,x.jsx)(k,{...n,...e}),(0,x.jsx)(j,{...n,...e})]})}function v(e){const n=(0,f.A)();return(0,x.jsx)(y,{...e,children:u(e.children)},String(n))}},19073:(e,n,t)=>{t.d(n,{A:()=>s});const s="data:image/png;base64,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"},40953:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/oidc_eks.drawio-0549ed86ffb4162161989f8587add515.png"},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var s=t(96540);const r={},i=s.createContext(r);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);