"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[86762],{72088:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"operator-guide/cd/argocd-integration","title":"Argo CD Integration","description":"Guide on integrating Argo CD with KubeRocketCI for GitOps-based deployments, including setup instructions for Keycloak OIDC authentication.","source":"@site/docs/operator-guide/cd/argocd-integration.md","sourceDirName":"operator-guide/cd","slug":"/operator-guide/cd/argocd-integration","permalink":"/docs/next/operator-guide/cd/argocd-integration","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/operator-guide/cd/argocd-integration.md","tags":[],"version":"current","lastUpdatedBy":"Sergiy Kulanov","lastUpdatedAt":1740938144000,"frontMatter":{"title":"Argo CD Integration","description":"Guide on integrating Argo CD with KubeRocketCI for GitOps-based deployments, including setup instructions for Keycloak OIDC authentication.","sidebar_label":"Argo CD Integration"},"sidebar":"operatorGuideSidebar","previous":{"title":"Deployment Strategies Overview","permalink":"/docs/next/operator-guide/cd/auto-stable-trigger-type"},"next":{"title":"Overview","permalink":"/docs/next/operator-guide/infrastructure-providers/overview"}}');var a=t(74848),o=t(28453),s=t(65537),i=t(79329);const l={title:"Argo CD Integration",description:"Guide on integrating Argo CD with KubeRocketCI for GitOps-based deployments, including setup instructions for Keycloak OIDC authentication.",sidebar_label:"Argo CD Integration"},c="Argo CD Integration",d={},p=[{value:"Argo CD Deployment Approach in KubeRocketCI",id:"argo-cd-deployment-approach-in-kuberocketci",level:2},{value:"Integration",id:"integration",level:2},{value:"Argo CD Configuration",id:"argo-cd-configuration",level:2},{value:"Check Argo CD Integration (Optional)",id:"check-argo-cd-integration-optional",level:2},{value:"Deploy Argo CD Application to Remote Cluster (Optional)",id:"deploy-argo-cd-application-to-remote-cluster-optional",level:2},{value:"Keycloak Integration (Optional)",id:"keycloak-integration-optional",level:2},{value:"Related Articles",id:"related-articles",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components},{Details:r,Head:l}=n;return r||g("Details",!0),l||g("Head",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"argo-cd-integration",children:"Argo CD Integration"})}),"\n",(0,a.jsx)(l,{children:(0,a.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/operator-guide/cd/argocd-integration"})}),"\n",(0,a.jsxs)(n.p,{children:["KubeRocketCI uses Argo CD as a ",(0,a.jsx)(n.a,{href:"/docs/next/user-guide/cd-pipeline-details",children:"part of the Continuous Delivery/Continuous Deployment"}),"\nimplementation. Argo CD follows the best GitOps practices, uses Kubernetes native approach for the Deployment Management, has rich UI and\nrequired RBAC capabilities."]}),"\n",(0,a.jsx)(n.h2,{id:"argo-cd-deployment-approach-in-kuberocketci",children:"Argo CD Deployment Approach in KubeRocketCI"}),"\n",(0,a.jsxs)(n.p,{children:["Argo CD can be installed using ",(0,a.jsx)(n.a,{href:"https://argo-cd.readthedocs.io/en/stable/operator-manual/installation",children:"two different approaches"}),":"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Cluster-wide scope with the cluster-admin access"}),"\n",(0,a.jsx)(n.li,{children:"Namespaced scope with the single namespace access"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Both approaches can be deployed with High Availability (HA) or Non High Availability (non HA) installation manifests."}),"\n",(0,a.jsxs)(n.p,{children:["KubeRocketCI uses the HA deployment with the cluster-admin permissions, to minimize cluster resources consumption by sharing\nsingle Argo CD instance across multiple EDP Tenants. Please follow ",(0,a.jsx)(n.a,{href:"/docs/next/operator-guide/install-argocd",children:"the installation instructions"})," to deploy Argo CD."]}),"\n",(0,a.jsx)(n.h2,{id:"integration",children:"Integration"}),"\n",(0,a.jsx)(n.p,{children:"See a diagram below for the details:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"edp-argocd",src:t(70552).A+"",title:"Argo CD Diagram",width:"925",height:"691"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Argo CD is deployed in a separate ",(0,a.jsx)(n.code,{children:"argocd"})," namespace."]}),"\n",(0,a.jsxs)(n.li,{children:["Argo CD uses a ",(0,a.jsx)(n.code,{children:"cluster-admin"})," role for managing cluster-scope resources."]}),"\n",(0,a.jsxs)(n.li,{children:["The ",(0,a.jsx)(n.code,{children:"control-plane"})," application is created using the App of Apps approach, and its code is managed by the ",(0,a.jsx)(n.code,{children:"control-plane"})," members."]}),"\n",(0,a.jsxs)(n.li,{children:["The ",(0,a.jsx)(n.code,{children:"control-plane"})," is used to onboard new Argo CD Tenants (Argo CD Projects - AppProject)."]}),"\n",(0,a.jsxs)(n.li,{children:["The ",(0,a.jsx)(n.code,{children:"KubeRocketCI Tenant Member"})," manages ",(0,a.jsx)(n.code,{children:"Argo CD Applications"})," using ",(0,a.jsx)(n.code,{children:"kind: Application"})," in the ",(0,a.jsx)(n.code,{children:"edpTenant"})," namespace."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.a,{href:"https://argo-cd.readthedocs.io/en/stable/operator-manual/cluster-bootstrapping/",children:"App Of Apps approach"})," is used to\nmanage the ",(0,a.jsx)(n.code,{children:"KubeRocketCI Tenants"}),". Inspect the ",(0,a.jsx)(n.a,{href:"https://github.com/SergK/edp-grub",children:"edp-grub"})," repository structure that is used to\nprovide the KubeRocketCI Tenants for the Argo CD Projects:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"edp-grub\n\u251c\u2500\u2500 LICENSE\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 apps                      ### All Argo CD Applications are stored here\n\u2502\xa0\xa0 \u251c\u2500\u2500 grub-argocd.yaml      # Application that provisions Argo CD Resources - Argo Projects (KubeRocketCI Tenants)\n\u2502\xa0\xa0 \u2514\u2500\u2500 grub-keycloak.yaml    # Application that provisions Keycloak Resources - Argo CD Groups (KubeRocketCI Tenants)\n\u251c\u2500\u2500 apps-configs\n\u2502\xa0\xa0 \u2514\u2500\u2500 grub\n\u2502\xa0\xa0     \u251c\u2500\u2500 argocd            ### Argo CD resources definition\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2514\u2500\u2500 edp.yaml\n\u2502\xa0\xa0     \u2514\u2500\u2500 keycloak          ### Keycloak resources definition\n\u2502\xa0\xa0         \u2514\u2500\u2500 edp.yaml\n\u251c\u2500\u2500 bootstrap\n\u2502\xa0\xa0 \u2514\u2500\u2500 root.yaml             ### Root application in App of Apps, which provision Applications from /apps\n\u2514\u2500\u2500 examples                  ### Examples\n    \u2514\u2500\u2500 tenant\n        \u2514\u2500\u2500 edp-petclinic.yaml\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The Root Application must be created under the ",(0,a.jsx)(n.code,{children:"control-plane"})," scope."]}),"\n",(0,a.jsx)(n.h2,{id:"argo-cd-configuration",children:"Argo CD Configuration"}),"\n",(0,a.jsx)(n.p,{children:"Now that Argo CD is integrated, it is time to configure it properly. To configure Argo CD for KubeRocketCI, follow the steps below:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Modify the ",(0,a.jsx)(n.code,{children:"argocd-cmd-params-cm"})," ConfigMap in the ",(0,a.jsx)(n.code,{children:"argocd"})," namespace and add the ",(0,a.jsx)(n.code,{children:"application.namespaces"})," parameter to the subsection data:"]}),"\n",(0,a.jsxs)(s.A,{defaultValue:"kubectl",values:[{label:"kubectl",value:"kubectl"},{label:"manifest",value:"manifest"}],children:[(0,a.jsx)(i.A,{value:"kubectl",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'kubectl patch configmap argocd-cmd-params-cm -n argocd --type merge -p \'{"data":{"application.namespaces":"edp"}}\'\n'})})}),(0,a.jsx)(i.A,{value:"manifest",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"data:\n  application.namespaces: edp\n"})})})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Add a ",(0,a.jsx)(n.a,{href:"https://argo-cd.readthedocs.io/en/stable/user-guide/private-repositories/#private-repositories",children:"credential template"}),"\nfor GitHub, GitLab, Bitbucket, or Gerrit integrations. The credential template must be created for each Git Server."]}),"\n",(0,a.jsxs)(s.A,{defaultValue:"github",values:[{label:"GitHub/GitLab/Bitbucket",value:"github"},{label:"Gerrit",value:"gerrit"}],children:[(0,a.jsxs)(i.A,{value:"github",children:[(0,a.jsx)(n.p,{children:"Generate an SSH key pair and add a public key to GitLab, GitHub, or Bitbucket account."}),(0,a.jsxs)(n.admonition,{type:"warning",children:[(0,a.jsxs)(n.p,{children:["Use an additional GitHub/GitLab User to access a repository. For example:",(0,a.jsx)("br",{})]}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:['GitHub, add a User to a repository with a "Read" role.',(0,a.jsx)("br",{})]}),"\n",(0,a.jsx)(n.li,{children:'GitLab, add a User to a repository with a "Guest" role.'}),"\n"]})]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'ssh-keygen -t ed25519 -C "email@example.com" -f argocd\n'})}),(0,a.jsx)(n.p,{children:"Copy SSH private key to Argo CD namespace."}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'EDP_NAMESPACE="edp"\nVCS_HOST="<github.com_or_gitlab.com_or_bitbucket.org>"\nACCOUNT_NAME="<ACCOUNT_NAME>"\nURL="ssh://git@${VCS_HOST}:22/${ACCOUNT_NAME}"\n\nkubectl create secret generic ${EDP_NAMESPACE} -n argocd \\\n  --from-file=sshPrivateKey=argocd \\\n  --from-literal=url="${URL}"\nkubectl label --overwrite secret ${EDP_NAMESPACE} -n argocd "argocd.argoproj.io/secret-type=repo-creds"\n'})})]}),(0,a.jsxs)(i.A,{value:"gerrit",children:[(0,a.jsx)(n.p,{children:"Copy existing SSH private key for Gerrit to Argo CD namespace."}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'EDP_NAMESPACE="edp"\nGERRIT_PORT=$(kubectl get gerrit gerrit -n ${EDP_NAMESPACE} -o jsonpath=\'{.spec.sshPort}\')\nGERRIT_ARGOCD_SSH_KEY_NAME="gerrit-ciuser-sshkey"\nGERRIT_URL=$(echo "ssh://edp-ci@gerrit.${EDP_NAMESPACE}:${GERRIT_PORT}" | base64)\nkubectl get secret ${GERRIT_ARGOCD_SSH_KEY_NAME} -n ${EDP_NAMESPACE} -o json | jq \'del(.data.username,.metadata.annotations,.metadata.creationTimestamp,.metadata.labels,.metadata.resourceVersion,.metadata.uid,.metadata.ownerReferences)\' | jq \'.metadata.namespace = "argocd"\' | jq --arg name "${EDP_NAMESPACE}" \'.metadata.name = $name\' | jq --arg url "${GERRIT_URL}" \'.data.url = $url\' | jq \'.data.sshPrivateKey = .data.id_rsa\' | jq \'del(.data.id_rsa,.data."id_rsa.pub")\' | kubectl apply -f -\nkubectl label --overwrite secret ${EDP_NAMESPACE} -n argocd "argocd.argoproj.io/secret-type=repo-creds"\n'})})]})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Add ",(0,a.jsx)(n.a,{href:"https://argo-cd.readthedocs.io/en/stable/user-guide/private-repositories/#unknown-ssh-hosts",children:"SSH Known hosts"}),"\nfor GitHub, GitLab, Bitbucket, or Gerrit integration."]}),"\n",(0,a.jsxs)(s.A,{defaultValue:"github",values:[{label:"GitHub/GitLab/Bitbucket",value:"github"},{label:"Gerrit",value:"gerrit"}],children:[(0,a.jsxs)(i.A,{value:"github",children:[(0,a.jsx)(n.p,{children:"Add GitHub, GitLab, or Bitbucket host to Argo CD config map with known hosts."}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'EDP_NAMESPACE="edp"\nVCS_HOST="<VCS_HOST>"\nKNOWN_HOSTS_FILE="/tmp/ssh_known_hosts"\nARGOCD_KNOWN_HOSTS_NAME="argocd-ssh-known-hosts-cm"\n\nrm -f ${KNOWN_HOSTS_FILE}\nkubectl get cm ${ARGOCD_KNOWN_HOSTS_NAME} -n argocd -o jsonpath=\'{.data.ssh_known_hosts}\' > ${KNOWN_HOSTS_FILE}\nssh-keyscan ${VCS_HOST} >> ${KNOWN_HOSTS_FILE}\nkubectl create configmap ${ARGOCD_KNOWN_HOSTS_NAME} -n argocd --from-file ${KNOWN_HOSTS_FILE} -o yaml --dry-run=client | kubectl apply -f -\n'})})]}),(0,a.jsxs)(i.A,{value:"gerrit",children:[(0,a.jsx)(n.p,{children:"Add Gerrit host to Argo CD config map with known hosts"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'EDP_NAMESPACE="edp"\nKNOWN_HOSTS_FILE="/tmp/ssh_known_hosts"\nARGOCD_KNOWN_HOSTS_NAME="argocd-ssh-known-hosts-cm"\nGERRIT_PORT=$(kubectl get gerrit gerrit -n ${EDP_NAMESPACE} -o jsonpath=\'{.spec.sshPort}\')\n\nrm -f ${KNOWN_HOSTS_FILE}\nkubectl get cm ${ARGOCD_KNOWN_HOSTS_NAME} -n argocd -o jsonpath=\'{.data.ssh_known_hosts}\' > ${KNOWN_HOSTS_FILE}\nkubectl exec -it deployment/gerrit -n ${EDP_NAMESPACE} -- ssh-keyscan -p ${GERRIT_PORT} gerrit.${EDP_NAMESPACE} >> ${KNOWN_HOSTS_FILE}\nkubectl create configmap ${ARGOCD_KNOWN_HOSTS_NAME} -n argocd --from-file ${KNOWN_HOSTS_FILE} -o yaml --dry-run=client | kubectl apply -f -\n'})})]})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Create an Argo CD Project (Tenant), for example, with the ",(0,a.jsx)(n.code,{children:"edp"})," name:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",metastring:'title="AppProject"',children:"apiVersion: argoproj.io/v1alpha1\nkind: AppProject\nmetadata:\n  name: edp\n  namespace: argocd\n  # Finalizer that ensures that project is not deleted until it is not referenced by any application\n  finalizers:\n    - resources-finalizer.argocd.argoproj.io\nspec:\n  destinations:\n    # by default edp work with 'edp-*' namespace\n    - namespace: 'edp-*'\n    # allow to deploy to specific server (local in our case)\n      name: in-cluster\n  # Deny all cluster-scoped resources from being created, except for Namespace\n  clusterResourceWhitelist:\n  - group: ''\n    kind: Namespace\n  # Allow all namespaced-scoped resources to be created, except for ResourceQuota, LimitRange, NetworkPolicy\n  namespaceResourceBlacklist:\n  - group: ''\n    kind: ResourceQuota\n  - group: ''\n    kind: LimitRange\n  - group: ''\n    kind: NetworkPolicy\n  # we are ok to create any resources inside namespace\n  namespaceResourceWhitelist:\n  - group: '*'\n    kind: '*'\n  # enable access only for specific git server. The example below 'edp' - it is namespace where KubeRocketCI deployed\n  sourceRepos:\n    - ssh://git@github.com/*\n  # enable capability to deploy objects from namespaces\n  sourceNamespaces:\n    - edp\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Check that your new ",(0,a.jsx)(n.strong,{children:"Repository"}),", ",(0,a.jsx)(n.strong,{children:"Known Hosts"}),", and ",(0,a.jsx)(n.strong,{children:"AppProject"})," are added to the Argo CD UI."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Generate Argo CD project token for deploy integration:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'URL=<ARGO CD URL>\nTOKEN=$(argocd proj role create-token edp developer -i argocd-ci -t)\n\n\ncat <<EOF | kubectl apply -f -\napiVersion: v1\nkind: Secret\nmetadata:\n  name: argocd-ci\n  namespace: edp\n  labels:\n    app.edp.epam.com/integration-secret: "true"\n    app.edp.epam.com/secret-type: "argocd"\ntype: Opaque\nstringData:\n  token: $TOKEN\n  url: $URL\nEOF\n'})}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Once Argo CD is successfully integrated, KubeRocketCI user can utilize Argo CD to deploy ",(0,a.jsx)(n.a,{href:"/docs/next/user-guide/add-cd-pipeline",children:"CD pipelines"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"check-argo-cd-integration-optional",children:"Check Argo CD Integration (Optional)"}),"\n",(0,a.jsx)(n.p,{children:"This section provides the information on how to test the integration with Argo CD and is not mandatory to be followed."}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Add an Argo CD application:"}),"\n",(0,a.jsxs)(r,{children:[(0,a.jsx)("summary",{children:(0,a.jsx)("b",{children:"View: argocd-values.yaml"})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"apiVersion: argoproj.io/v1alpha1\nkind: Application\nmetadata:\n  name: demo\nspec:\n  project: edp\n  destination:\n    namespace: edp-demo\n    server: https://kubernetes.default.svc\n  source:\n    helm:\n      parameters:\n        - name: image.tag\n          value: master-0.1.0-1\n        - name: image.repository\n          value: image-repo\n    path: deploy-templates\n    # github/gitlab example ssh://git@github.com/<github_account_name>/<repository_name>.git\n    # gerrit example ssh://<gerrit_user>@gerrit.edp:30007/<repository_name>.git\n    repoURL: ssh://git@github.com/edp/demo.git\n    targetRevision: master\n  syncPolicy:\n    syncOptions:\n      - CreateNamespace=true\n    automated:\n      selfHeal: true\n      prune: true\n"})})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Check that your new Application is added to the Argo CD UI under the ",(0,a.jsx)(n.code,{children:"edp"})," Project scope."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"deploy-argo-cd-application-to-remote-cluster-optional",children:"Deploy Argo CD Application to Remote Cluster (Optional)"}),"\n",(0,a.jsx)(n.p,{children:"KubeRocketCI also supports deploying Argo CD applications to a remote cluster. To deploy applications to remote clusters, follow the steps below:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Create ",(0,a.jsx)(n.code,{children:"ServiceAccount"})," ",(0,a.jsx)(n.code,{children:"ClusterRoleBinding"})," and ",(0,a.jsx)(n.code,{children:"Secret"})," for that ",(0,a.jsx)(n.code,{children:"ServiceAccount"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Receive the bearer token:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"BEAR_TOKEN=$(kubectl get secret <serviceaccount-secret-name> -o jsonpath='{.data.token}' | base64 --decode)\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Create ArgoCD secret for remote cluster:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",metastring:'title="manifest"',children:'apiVersion: v1\nkind: Secret\nmetadata:\n  name: edp-remote-cluster\n  namespace: argocd\ndata:\n  # Remote cluster config\n  config: {"bearerToken":"<BEAR_TOKEN>","tlsClientConfig":{"insecure":false,"caData":"<certificate-authority-data>"}}\n  # Remote cluster name\n  name: "edp-remote-cluster"\n  # Cluster endpoint URL\n  server: "https://xxxxxxxxxxxxxxxxxxxx.sk1.eu-central-1.eks.amazonaws.com"\ntype: stringData\n'})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Update an Argo CD Project (EDP Tenant), with the ",(0,a.jsx)(n.code,{children:"edp"})," name:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",metastring:'title="AppProject"',children:"apiVersion: argoproj.io/v1alpha1\nkind: AppProject\nmetadata:\n  name: edp\nspec:\n  destinations:\n      # Add block that allow deploy in remote cluster\n      # by default edp work with 'edp-*' namespace\n    - namespace: 'edp-*'\n      # allow to deploy to specific server (remote in our case)\n      name: edp-remote-cluster\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Add a remote cluster in the KubeRocketCI portal. Please refer to the ",(0,a.jsx)(n.a,{href:"/docs/next/user-guide/add-cluster",children:"Add Cluster"})," page for details."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"keycloak-integration-optional",children:"Keycloak Integration (Optional)"}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["To proceed with the steps below, you need the ",(0,a.jsx)(n.a,{href:"https://github.com/epam/edp-keycloak-operator",children:"edp-keycloak-operator"})," to be deployed."]})}),"\n",(0,a.jsx)(n.p,{children:"To provide Argo CD with the Keycloak SSO authorization mechanism, follow the guidelines below:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Create secret ",(0,a.jsx)(n.code,{children:"keycloak-client-argocd-secret"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"kubectl create secret generic keycloak-client-argocd-secret \\\n--from-literal=clientSecret=$(openssl rand -base64 32) \\\n--namespace=argocd\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Update the ",(0,a.jsx)(n.code,{children:"argocd-cm"})," ConfigMap:"]}),"\n",(0,a.jsxs)(s.A,{defaultValue:"kubectl",values:[{label:"kubectl",value:"kubectl"},{label:"manifest",value:"manifest"}],children:[(0,a.jsx)(i.A,{value:"kubectl",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'kubectl patch configmap argocd-cm -n argocd --patch "$(cat <<EOF\ndata:\n  oidc.config: |\n    name: Keycloak\n    issuer: https://<keycloakEndpoint>/auth/realms/edp\n    clientID: argocd-tenant\n    clientSecret: $keycloak-client-argocd-secret:clientSecret\n    requestedScopes:\n      - openid\n      - profile\n      - email\n      - groups\nEOF\n)"\n'})})}),(0,a.jsx)(i.A,{value:"manifest",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:'data:\n  oidc.config:\n    url: "https://argocd.<.Values.global.dnsWildCard>"\n    application.instanceLabelKey: argocd.argoproj.io/instance-edp\n    oidc.config: |\n      name: Keycloak\n      issuer: https://<.Values.global.keycloakEndpoint>/auth/realms/edp\n      clientID: argocd-tenant\n      clientSecret: $keycloak-client-argocd-secret:clientSecret\n      requestedScopes:\n        - openid\n        - profile\n        - email\n        - groups\n'})})})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Create a Keycloak Group:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"apiVersion: v1.edp.epam.com/v1\nkind: KeycloakRealmGroup\nmetadata:\n  name: argocd-edp-users\nspec:\n  name: ArgoCD-edp-users\n  realm: main\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Create a Keycloak Client:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:'apiVersion: v1.edp.epam.com/v1\nkind: KeycloakClient\nmetadata:\n  name: argocd\n  namespace: argocd\nspec:\n  advancedProtocolMappers: true\n  attributes:\n    post.logout.redirect.uris: +\n  clientId: argocd-tenant\n  defaultClientScopes:\n    - groups\n  realmRef:\n    kind: ClusterKeycloakRealm\n    name: main\n  secret: keycloak-client-argocd-secret\n  webUrl: "https://argocd.<.Values.global.dnsWildCard>"\n'})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["In Keycloak, add users to the ",(0,a.jsx)(n.code,{children:"ArgoCD-edp-users"})," Keycloak Group."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Update spec in project:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",metastring:'title="AppProject"',children:"spec:\n  description: CD pipelines for edp\n  roles:\n    - name: developer\n      description: Users for edp tenant\n      policies:\n        - p, proj:edp:developer, applications, create, edp/*, allow\n        - p, proj:edp:developer, applications, delete, edp/*, allow\n        - p, proj:edp:developer, applications, get, edp/*, allow\n        - p, proj:edp:developer, applications, override, edp/*, allow\n        - p, proj:edp:developer, applications, sync, edp/*, allow\n        - p, proj:edp:developer, applications, update, edp/*, allow\n        - p, proj:edp:developer, repositories, create, edp/*, allow\n        - p, proj:edp:developer, repositories, delete, edp/*, allow\n        - p, proj:edp:developer, repositories, update, edp/*, allow\n        - p, proj:edp:developer, repositories, get, edp/*, allow\n      groups:\n        # Keycloak Group name\n        - ArgoCD-edp-users\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Then restart the deployment:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"kubectl -n argocd rollout restart deployment argo-argocd-server\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/docs/next/operator-guide/install-argocd",children:"Install Argo CD"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}function g(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},79329:(e,n,t)=>{t.d(n,{A:()=>s});t(96540);var r=t(34164);const a={tabItem:"tabItem_Ymn6"};var o=t(74848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,s),hidden:t,children:n})}},65537:(e,n,t)=>{t.d(n,{A:()=>y});var r=t(96540),a=t(34164),o=t(65627),s=t(56347),i=t(50372),l=t(30604),c=t(11861),d=t(78749);function p(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return p(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const a=(0,s.W6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(a.location.search);n.set(o,e),a.replace({...a.location,search:n.toString()})}),[o,a])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,o=u(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:o}))),[c,p]=g({queryString:t,groupId:a}),[m,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,o]=(0,d.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:a}),x=(()=>{const e=c??m;return h({value:e,tabValues:o})?e:null})();(0,i.A)((()=>{x&&l(x)}),[x]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),p(e),b(e)}),[p,b,o]),tabValues:o}}var b=t(9136);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(74848);function f(e){let{className:n,block:t,selectedValue:r,selectValue:s,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),a=i[t].value;a!==r&&(c(n),s(a))},p=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>{l.push(e)},onKeyDown:p,onClick:d,...o,className:(0,a.A)("tabs__item",x.tabItem,o?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function A(e){let{lazy:n,children:t,selectedValue:o}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function k(e){const n=m(e);return(0,j.jsxs)("div",{className:(0,a.A)("tabs-container",x.tabList),children:[(0,j.jsx)(f,{...n,...e}),(0,j.jsx)(A,{...n,...e})]})}function y(e){const n=(0,b.A)();return(0,j.jsx)(k,{...e,children:p(e.children)},String(n))}},70552:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/edp-argocd-910f2968a3ffd0c29cfb620352db38ae.png"},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>i});var r=t(96540);const a={},o=r.createContext(a);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);