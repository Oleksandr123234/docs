"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[77511],{89960:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"operator-guide/artifacts-management/package-registry","title":"Package Registry","description":"This page describes the supported package registry providers and provides detailed instruction on how to adjust configurations to work properly with these package registry providers.","source":"@site/versioned_docs/version-3.10/operator-guide/artifacts-management/package-registry.md","sourceDirName":"operator-guide/artifacts-management","slug":"/operator-guide/artifacts-management/package-registry","permalink":"/docs/operator-guide/artifacts-management/package-registry","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/operator-guide/artifacts-management/package-registry.md","tags":[],"version":"3.10","lastUpdatedBy":"Sergiy Kulanov","lastUpdatedAt":1737665576000,"frontMatter":{},"sidebar":"operatorGuideSidebar","previous":{"title":"Sonatype Nexus Repository OSS Integration","permalink":"/docs/operator-guide/artifacts-management/nexus-sonatype"},"next":{"title":"Install Harbor","permalink":"/docs/operator-guide/artifacts-management/harbor-installation"}}');var r=s(74848),i=s(28453);const a={},o="Package Registry",c={},l=[{value:"Supported Package Registry Providers",id:"supported-package-registry-providers",level:2},{value:"Proxy Package Registry Configuration",id:"proxy-package-registry-configuration",level:2},{value:"Snapshot/Release Package Registry Configuration",id:"snapshotrelease-package-registry-configuration",level:2},{value:"Customizing Maven Settings",id:"customizing-maven-settings",level:3},{value:"Customizing NPM Settings",id:"customizing-npm-settings",level:3},{value:"Customizing Python Configurations",id:"customizing-python-configurations",level:3},{value:"Customizing NuGet Settings",id:"customizing-nuget-settings",level:3},{value:"Related Articles",id:"related-articles",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{Head:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"package-registry",children:"Package Registry"})}),"\n",(0,r.jsx)(s,{children:(0,r.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/operator-guide/artifacts-management/package-registry/"})}),"\n",(0,r.jsx)(n.p,{children:"This page describes the supported package registry providers and provides detailed instruction on how to adjust configurations to work properly with these package registry providers."}),"\n",(0,r.jsx)(n.h2,{id:"supported-package-registry-providers",children:"Supported Package Registry Providers"}),"\n",(0,r.jsx)(n.p,{children:"Currently, KubeRocketCI support the following package registries:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Sonatype Nexus Repository OSS;"}),"\n",(0,r.jsx)(n.li,{children:"GitLab;"}),"\n",(0,r.jsx)(n.li,{children:"GitHub;"}),"\n",(0,r.jsx)(n.li,{children:"Azure DevOps."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"The table below displays the supported registries and the languages they correspond to:"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Language"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Framework"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Build Tool"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Proxy Registry"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Snapshots/Releases Registry"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Java"}),(0,r.jsxs)(n.td,{style:{textAlign:"center"},children:["Java 8",(0,r.jsx)("br",{}),"Java 11",(0,r.jsx)("br",{}),"Java 17"]}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Maven"}),(0,r.jsxs)(n.td,{style:{textAlign:"center"},children:["Nexus",(0,r.jsx)("br",{}),"Gitlab",(0,r.jsx)("br",{}),"GitHub",(0,r.jsx)("br",{}),"Azure DevOps"]}),(0,r.jsxs)(n.td,{style:{textAlign:"center"},children:["Nexus",(0,r.jsx)("br",{}),"Gitlab",(0,r.jsx)("br",{}),"GitHub",(0,r.jsx)("br",{}),"Azure DevOps"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Python"}),(0,r.jsxs)(n.td,{style:{textAlign:"center"},children:["Python 3.8",(0,r.jsx)("br",{}),"FastAPI",(0,r.jsx)("br",{}),"Flask"]}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Python"}),(0,r.jsxs)(n.td,{style:{textAlign:"center"},children:["Nexus",(0,r.jsx)("br",{}),"Gitlab",(0,r.jsx)("br",{}),"Azure DevOps"]}),(0,r.jsxs)(n.td,{style:{textAlign:"center"},children:["Nexus",(0,r.jsx)("br",{}),"Gitlab",(0,r.jsx)("br",{}),"Azure DevOps"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"C#"}),(0,r.jsxs)(n.td,{style:{textAlign:"center"},children:[".Net 3.1",(0,r.jsx)("br",{}),".Net 6.0"]}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:".Net"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"No proxy is used for this language."}),(0,r.jsxs)(n.td,{style:{textAlign:"center"},children:["Nexus",(0,r.jsx)("br",{}),"Gitlab",(0,r.jsx)("br",{}),"GitHub",(0,r.jsx)("br",{}),"Azure DevOps"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"JavaScript"}),(0,r.jsxs)(n.td,{style:{textAlign:"center"},children:["React",(0,r.jsx)("br",{}),"Vue",(0,r.jsx)("br",{}),"Angular",(0,r.jsx)("br",{}),"Express",(0,r.jsx)("br",{}),"Next.js",(0,r.jsx)("br",{}),"Antora"]}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"NPM"}),(0,r.jsxs)(n.td,{style:{textAlign:"center"},children:["Nexus",(0,r.jsx)("br",{}),"Gitlab",(0,r.jsx)("br",{}),"GitHub",(0,r.jsx)("br",{}),"Azure DevOps"]}),(0,r.jsxs)(n.td,{style:{textAlign:"center"},children:["Nexus",(0,r.jsx)("br",{}),"Gitlab",(0,r.jsx)("br",{}),"GitHub",(0,r.jsx)("br",{}),"Azure DevOps"]})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"proxy-package-registry-configuration",children:"Proxy Package Registry Configuration"}),"\n",(0,r.jsx)(n.p,{children:"By default, KubeRocketCI uses Nexus as the proxy registry for storing and caching application dependencies. This setting is fixed and cannot be modified."}),"\n",(0,r.jsx)(n.h2,{id:"snapshotrelease-package-registry-configuration",children:"Snapshot/Release Package Registry Configuration"}),"\n",(0,r.jsxs)(n.p,{children:["The edp-tekton Helm Chart allows to override the default settings for package registries through ",(0,r.jsx)(n.code,{children:"tekton.configs"})," part of its ",(0,r.jsx)(n.a,{href:"https://github.com/epam/edp-tekton/blob/release/0.12/charts/pipelines-library/values.yaml#L81",children:"values.yaml"})," file."]}),"\n",(0,r.jsxs)(n.p,{children:["To provide necessary credentials for accessing the package registries, the user should create the ",(0,r.jsx)(n.code,{children:"package-registries-auth-secret"})," secret and set the ",(0,r.jsx)(n.code,{children:"tekton.packageRegistriesSecret.enabled"})," value to ",(0,r.jsx)(n.code,{children:"true"})," to mount the secret into the pipeline."]}),"\n",(0,r.jsxs)(n.p,{children:["To replace the default name of the secret, the user should set the ",(0,r.jsx)(n.code,{children:"tekton.packageRegistriesSecret.name"})," parameter to the desired value:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'tekton:\n  packageRegistriesSecret:\n    enabled: true\n    name: "package-registries-auth-secret"\n\n  configs:\n    # Build Tool: Maven\n    mavenConfigMap: "custom-maven-settings"\n    # Build Tool: NPM\n    npmConfigMap: "custom-npm-settings"\n    # Build Tool: Python\n    pythonConfigMap: "custom-python-settings"\n    # Build Tool: .Net\n    nugetConfigMap: "custom-nuget-settings"\n'})}),"\n",(0,r.jsx)(n.h3,{id:"customizing-maven-settings",children:"Customizing Maven Settings"}),"\n",(0,r.jsxs)(n.p,{children:["A new custom configuration map should contain the ",(0,r.jsx)(n.code,{children:"settings.xml"})," file, which overrides the default Maven configuration."]}),"\n",(0,r.jsxs)(n.p,{children:["For example, the following configuration map contains the ",(0,r.jsx)(n.code,{children:"settings.xml"})," file with the following settings:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Proxy registry"}),": Nexus."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Snapshots/Releases registry"}),": Azure DevOps registry."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Authentication"}),":","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"CI_USERNAME"})," and ",(0,r.jsx)(n.code,{children:"CI_PASSWORD"})," - these environment variables are used for authentication to Nexus."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"CI_AZURE_DEVOPS_USERNAME"})," and ",(0,r.jsx)(n.code,{children:"CI_AZURE_DEVOPS_PASSWORD"})," - these environment variables are used for authentication to Azure DevOps registry."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Secrets"}),":","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"CI_AZURE_DEVOPS_USERNAME"})," and ",(0,r.jsx)(n.code,{children:"CI_AZURE_DEVOPS_PASSWORD"})," - these environment variables are taken from the ",(0,r.jsx)(n.code,{children:"package-registries-auth-secret"})," secret."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{title:"Example: custom-maven-settings.yaml",type:"note",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'  apiVersion: v1\n  kind: ConfigMap\n  metadata:\n    name: new-custom-maven-settings\n  data:\n    settings.xml: |\n      <settings xmlns="http://maven.apache.org/SETTINGS/1.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0 http://maven.apache.org/xsd/settings-1.0.0.xsd">\n          <localRepository>/workspace/source/cache</localRepository>\n\n          <pluginGroups>\n              <pluginGroup>org.sonarsource.scanner.maven</pluginGroup>\n          </pluginGroups>\n          <servers>\n              \x3c!-- The "nexus" server is defined to provide credentials required by the mirror. --\x3e\n              <server>\n                  <id>nexus</id>\n                  <username>${env.CI_USERNAME}</username>\n                  <password>${env.CI_PASSWORD}</password>\n              </server>\n              \x3c!-- The "azure-devops-registry" server is defined to provide credentials required by the Azure DevOps registry.\n              Username and password are used for authentication.\n              More documentation: https://learn.microsoft.com/en-us/azure/devops/artifacts/get-started-maven?view=azure-devops --\x3e\n              <server>\n                  <id>azure-devops-registry</id>\n                  <username>${env.CI_AZURE_DEVOPS_USERNAME}</username>\n                  <password>${env.CI_AZURE_DEVOPS_PASSWORD}</password>\n              </server>\n          </servers>\n\n          <mirrors>\n              <mirror>\n                  \x3c!--This sends everything else to /public --\x3e\n                  <id>nexus</id>\n                  <mirrorOf>*</mirrorOf>\n                  <url>http://nexus.nexus:8081/repository/krci-maven-group</url>\n              </mirror>\n          </mirrors>\n\n          <profiles>\n              <profile>\n                  <id>sonar</id>\n                  <activation>\n                        <activeByDefault>true</activeByDefault>\n                  </activation>\n                  <properties>\n                      <sonar.login>\n                          ${env.SONAR_TOKEN}\n                      </sonar.login>\n                      <sonar.host.url>\n                          ${env.SONAR_HOST_URL}\n                      </sonar.host.url>\n                  </properties>\n              </profile>\n              \x3c!-- Azure DevOps registry profile for managing artifacts within Azure DevOps. --\x3e\n              <profile>\n                  <id>azure-devops-registry</id>\n                  <properties>\n                      <altSnapshotDeploymentRepository>azure-devops-registry::default::https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/maven/v1</altSnapshotDeploymentRepository>\n                      <altReleaseDeploymentRepository>azure-devops-registry::default::https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/maven/v1</altReleaseDeploymentRepository>\n                  </properties>\n              </profile>\n          </profiles>\n          \x3c!-- Specify the active profile here. If you want to push packages to nexus (default), gitlab registry, github registry,\n          or Azure DevOps registry, change the activeProfile id to the required profile id. --\x3e\n          <activeProfiles>\n              <activeProfile>azure-devops-registry</activeProfile>\n          </activeProfiles>\n      </settings>\n'})})}),"\n",(0,r.jsx)(n.h3,{id:"customizing-npm-settings",children:"Customizing NPM Settings"}),"\n",(0,r.jsxs)(n.p,{children:["A new custom configuration map should contain the ",(0,r.jsx)(n.code,{children:".npmrc-ci"}),", ",(0,r.jsx)(n.code,{children:".npmrc-publish-snapshots"})," and ",(0,r.jsx)(n.code,{children:".npmrc-publish-releases"})," files,\nwhich override the default npm configuration."]}),"\n",(0,r.jsxs)(n.p,{children:["For example, the following configuration map contains the ",(0,r.jsx)(n.code,{children:".npmrc-ci"}),", ",(0,r.jsx)(n.code,{children:".npmrc-publish-snapshots"})," and ",(0,r.jsx)(n.code,{children:".npmrc-publish-releases"})," files\nwith the following settings:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Proxy registry"}),": Nexus."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Snapshots/Releases registry"}),": Azure DevOps registry."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Authentication"}),":","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["'upBase64' (",(0,r.jsx)(n.code,{children:'"${CI_USERNAME}:${CI_PASSWORD}"'})," string in base64) - this environment variable is used for authentication to Nexus."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"CI_AZURE_DEVOPS_USERNAME"})," and ",(0,r.jsx)(n.code,{children:"CI_AZURE_DEVOPS_PASSWORD_IN_BASE64"})," - these environment variables are used for authentication to Azure DevOps registry."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Secrets"}),":","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"CI_AZURE_DEVOPS_USERNAME"})," and ",(0,r.jsx)(n.code,{children:"CI_AZURE_DEVOPS_PASSWORD_IN_BASE64"})," - these environment variables are taken from the ",(0,r.jsx)(n.code,{children:"package-registries-auth-secret"})," secret."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{title:"Example: custom-npm-settings.yaml",type:"note",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: custom-npm-settings\ndata:\n  .npmrc-ci: |\n    registry=${NEXUS_HOST_URL}/repository/krci-npm-group\n    _auth=${upBase64}\n    cache=${NPM_CACHE_DIR}\n\n  .npmrc-publish-snapshots: |\n    registry=https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/npm/registry\n    username=${CI_AZURE_DEVOPS_USERNAME}\n    _password=${CI_AZURE_DEVOPS_PASSWORD_IN_BASE64}\n    email=${CI_AZURE_DEVOPS_USERNAME}\n    cache=${NPM_CACHE_DIR}\n\n  .npmrc-publish-releases: |\n    registry=https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/npm/registry\n    _auth=${upBase64}\n    cache=${NPM_CACHE_DIR}\n"})})}),"\n",(0,r.jsx)(n.h3,{id:"customizing-python-configurations",children:"Customizing Python Configurations"}),"\n",(0,r.jsx)(n.p,{children:"For customizing python settings, a new configuration map can be prepared to replace the default pythonConfigMap.\nThis custom configuration map should contain the PIP_TRUSTED_HOST, PIP_INDEX, PIP_INDEX_URL, REPOSITORY_URL_SNAPSHOTS and REPOSITORY_URL_RELEASES environment variables, which overrides the default python configuration."}),"\n",(0,r.jsx)(n.p,{children:"For example, the following configuration map contains the following settings:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Proxy registry"}),": Azure DevOps registry."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Snapshots/Releases registry"}),": Azure DevOps registry."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Authentication"}),":","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["'upBase64' (",(0,r.jsx)(n.code,{children:'"${CI_USERNAME}:${CI_PASSWORD}"'})," string in base64) - this environment variable is used for authentication to Azure DevOps registry."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{title:"Example: custom-python-settings.yaml",type:"note",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: custom-python-settings\ndata:\n  PIP_INDEX_PATH: "/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/pypi"\n  PIP_INDEX_URL_PATH: "/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/pypi/simple"\n\n  REPOSITORY_SNAPSHOTS_PATH: "/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/pypi/upload"\n  REPOSITORY_RELEASES_PATH: "/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/pypi/upload"\n'})})}),"\n",(0,r.jsx)(n.h3,{id:"customizing-nuget-settings",children:"Customizing NuGet Settings"}),"\n",(0,r.jsxs)(n.p,{children:["A new custom configuration map should contain the ",(0,r.jsx)(n.code,{children:"nuget.config"})," file, which overrides the default NuGet configuration."]}),"\n",(0,r.jsxs)(n.p,{children:["For example, the following configuration map contains the ",(0,r.jsx)(n.code,{children:"nuget.config"})," file with the following settings:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Snapshots/Releases registry"}),": Azure DevOps registry."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Authentication"}),":","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"CI_AZURE_DEVOPS_USERNAME"})," and ",(0,r.jsx)(n.code,{children:"CI_AZURE_DEVOPS_PASSWORD"}),"  - these environment variables are used for authentication to Azure DevOps registry."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Secrets"}),":","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"CI_AZURE_DEVOPS_USERNAME"})," and ",(0,r.jsx)(n.code,{children:"CI_AZURE_DEVOPS_PASSWORD"})," - these environment variables are taken from the ",(0,r.jsx)(n.code,{children:"package-registries-auth-secret"})," secret."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{title:"Example: custom-nuget-settings.yaml",type:"note",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: custom-nuget-settings\ndata:\n  nuget.config: |\n    <?xml version="1.0" encoding="utf-8"?>\n    <configuration>\n        <packageSources>\n            <add key="nugetStorageSnapshots" value="https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/nuget/v3/index.json" />\n            <add key="nugetStorageReleases" value="https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/nuget/v3/index.json" />\n        </packageSources>\n        <packageSourceCredentials>\n            <nugetStorageSnapshots>\n                <add key="Username" value="%CI_AZURE_DEVOPS_USERNAME%" />\n                <add key="ClearTextPassword" value="%CI_AZURE_DEVOPS_PASSWORD%" />\n            </nugetStorageSnapshots>\n            <nugetStorageReleases>\n                <add key="Username" value="%CI_AZURE_DEVOPS_USERNAME%" />\n                <add key="ClearTextPassword" value="%CI_AZURE_DEVOPS_PASSWORD%" />\n            </nugetStorageReleases>\n        </packageSourceCredentials>\n    </configuration>\n'})})}),"\n",(0,r.jsx)(n.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/user-guide/manage-container-registries",children:"Manage Container Registries"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/operator-guide/artifacts-management/nexus-sonatype",children:"Nexus Sonatype Integration"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/user-guide/git-server-overview",children:"Manage Git Servers"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>o});var t=s(96540);const r={},i=t.createContext(r);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);