"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[29797],{51546:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"user-guide/add-library","title":"Add Library","description":"Discover how to add and manage libraries in KubeRocketCI, from cloning repositories to leveraging external sources for improved development.","source":"@site/docs/user-guide/add-library.md","sourceDirName":"user-guide","slug":"/user-guide/add-library","permalink":"/docs/next/user-guide/add-library","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/user-guide/add-library.md","tags":[],"version":"current","lastUpdatedBy":"Oleksandr_Stepanov@epam.com","lastUpdatedAt":1741959075000,"frontMatter":{"title":"Add Library","description":"Discover how to add and manage libraries in KubeRocketCI, from cloning repositories to leveraging external sources for improved development.","sidebar_label":"Add Library"},"sidebar":"userGuideSidebar","previous":{"title":"Manage Autotests","permalink":"/docs/next/user-guide/autotest"},"next":{"title":"Manage Libraries","permalink":"/docs/next/user-guide/library"}}');var r=i(74848),s=i(28453);const a={title:"Add Library",description:"Discover how to add and manage libraries in KubeRocketCI, from cloning repositories to leveraging external sources for improved development.",sidebar_label:"Add Library"},l="Add Library",o={},d=[{value:"Create Library in YAML",id:"create-library-in-yaml",level:2},{value:"Create Library via UI",id:"create-library-via-ui",level:2},{value:"The Codebase Info Menu",id:"the-codebase-info-menu",level:3},{value:"The Advanced Settings Menu",id:"the-advanced-settings-menu",level:3},{value:"Related Articles",id:"related-articles",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{Head:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"add-library",children:"Add Library"})}),"\n",(0,r.jsx)(t,{children:(0,r.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/user-guide/add-library"})}),"\n",(0,r.jsxs)(n.p,{children:["KubeRocketCI portal allows you to create a library, clone an existing repository with the library to your Version Control System (VCS), or using an external repository and importing a library to the environment.\nWhen a library is created or cloned, the system automatically generates a corresponding repository within the integrated VCS. You can create a library ",(0,r.jsx)(n.a,{href:"#create-library-in-yaml",children:"in YAML"})," or ",(0,r.jsx)(n.a,{href:"#create-library-via-ui",children:"via the two-step menu"})," in the dialog."]}),"\n",(0,r.jsxs)(n.p,{children:["To add a library, navigate to the ",(0,r.jsx)(n.strong,{children:"Components"})," section on the navigation bar and click ",(0,r.jsx)(n.strong,{children:"+ Create component"}),":"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Create new library",src:i(62269).A+"",title:"Create new library",width:"1922",height:"1114"})}),"\n",(0,r.jsxs)(n.p,{children:["Once clicked, the ",(0,r.jsx)(n.strong,{children:"Create new component"})," dialog will appear. Select ",(0,r.jsx)(n.strong,{children:"Library"})," and click ",(0,r.jsx)(n.strong,{children:"Next"}),":"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Edit YAML",src:i(61218).A+"",title:"Create new component menu",width:"1922",height:"1114"})}),"\n",(0,r.jsxs)(n.p,{children:["Choose one of the strategies and click ",(0,r.jsx)(n.strong,{children:"Create"}),":"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Select strategy",src:i(89237).A+"",title:"Select strategy",width:"1922",height:"1114"})}),"\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.strong,{children:"Create new component"})," menu, select the necessary configuration strategy. The choice will define the parameters you will need to specify:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Create from template"})," \u2013 creates a project on the pattern in accordance with a library language, a build tool, and a framework."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Import project"})," - allows using existing VCS repository to integrate with KubeRocketCI. While importing the existing repository, select the Git server from the drop-down list and define the relative path to the repository, such as ",(0,r.jsx)(n.code,{children:"epmd-edp/python-python-flask"}),"."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["In order to use the ",(0,r.jsx)(n.strong,{children:"Import project"})," strategy, make sure to adjust it with the ",(0,r.jsx)(n.a,{href:"/docs/next/user-guide/add-git-server",children:"Integrate GitLab/GitHub With Tekton"})," page."]})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Clone project"})," \u2013 clones the indicated repository into KubeRocketCI. While cloning the existing repository, it is required to fill in the ",(0,r.jsx)(n.strong,{children:"Repository URL"})," field and specify the ",(0,r.jsx)(n.strong,{children:"Repository credentials"})," field if needed:"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Clone library",src:i(34397).A+"",title:"Clone library",width:"1922",height:"1114"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"create-library-in-yaml",children:"Create Library in YAML"}),"\n",(0,r.jsxs)(n.p,{children:["Click ",(0,r.jsx)(n.strong,{children:"Edit YAML"})," in the upper-right corner of the ",(0,r.jsx)(n.strong,{children:"Create Library"})," dialog to open the YAML editor and create the library:"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Edit YAML",src:i(11918).A+"",title:"Edit YAML",width:"1922",height:"1114"})}),"\n",(0,r.jsxs)(n.p,{children:["To edit YAML in the minimal editor, turn on the ",(0,r.jsx)(n.strong,{children:"Use minimal editor"})," toggle in the upper-right corner of the ",(0,r.jsx)(n.strong,{children:"Create Library"})," dialog."]}),"\n",(0,r.jsxs)(n.p,{children:["To save the changes, select the ",(0,r.jsx)(n.strong,{children:"Save & Apply"})," button."]}),"\n",(0,r.jsx)(n.h2,{id:"create-library-via-ui",children:"Create Library via UI"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"Create Library"})," dialog contains the two steps:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The Codebase Info Menu"}),"\n",(0,r.jsx)(n.li,{children:"The Advanced Settings Menu"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"the-codebase-info-menu",children:"The Codebase Info Menu"}),"\n",(0,r.jsxs)(n.p,{children:["In our example, we will use the ",(0,r.jsx)(n.strong,{children:"Create from template"})," strategy:"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Create library",src:i(54649).A+"",title:"Create library",width:"1922",height:"1114"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Select all the settings that define how the library will be added to Git server:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Git server"})," - the pre-configured server where the component will be hosted. Select one from the drop-down list. Please refer to the ",(0,r.jsx)(n.a,{href:"/docs/next/user-guide/git-server-overview",children:"Manage Git Servers"})," page to learn how to create the one."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Repository name"})," - the relative path to the repository, such as ",(0,r.jsx)(n.code,{children:"epmd-edp/python-python-flask"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Component name"})," - the name of the library. Must be at least two characters using the lower-case letters, numbers and inner dashes."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Description"})," - brief and concise description that explains the purpose of the library."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Empty project"})," - check this box to create a library with an empty repository. The empty repository option is available only for the ",(0,r.jsx)(n.strong,{children:"Create from template"})," strategy."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Specify the library language properties:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Library code language"})," - defines the code language with its supported frameworks:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Java \u2013 selecting specific Java version available."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"JavaScript - selecting JavaScript allows using the NPM tool."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Python - selecting Python allows using the Python v.3.8, FastAPI, Flask."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Groovy-pipeline - selecting Groovy-pipeline allows having the ability to customize a stages logic."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Terraform - selecting Terraform allows using the Terraform different versions via the ",(0,r.jsx)(n.strong,{children:"Terraform version manager"})," (",(0,r.jsx)(n.a,{href:"https://github.com/tfutils/tfenv#usage",children:"tfenv"}),").\nKubeRocketCI supports all the actions available in Terraform, thus providing the ability to modify the virtual infrastructure and launch some checks with the help of linters.\nFor details, please refer to the ",(0,r.jsx)(n.a,{href:"/docs/next/operator-guide/ci/ci-pipeline-terraform",children:"Use Terraform Library in KubeRocketCI"})," page."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Rego - this option allows using Rego code language with an Open Policy Agent (OPA) Library."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Container - this option allows using the Kaniko tool for building the container images from a Dockerfile."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Helm - this option allows using the ",(0,r.jsx)(n.a,{href:"https://github.com/helm/chart-testing",children:"chart testing lint"})," (Pipeline) for Helm charts or using Helm chart as a set of other Helm charts organized according to the ",(0,r.jsx)(n.a,{href:"https://github.com/argoproj/argo-helm/tree/main",children:"example"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"C# - selecting C# allows using .Net v.3.1 and .Net v.6.0."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Other - selecting Other allows extending the default code languages when creating a codebase with the Clone/Import strategy."}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"Create"})," strategy does not allow to customize the default code language set."]})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Language version/framework"})," - defines the specific framework or language version of the library. The field depends on the selected code language."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Build Tool"})," - allows to choose the build tool to use. A set tools and can be changed in accordance with the selected code language."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Click the ",(0,r.jsx)(n.strong,{children:"Next"})," button to switch to the next menu."]}),"\n",(0,r.jsx)(n.h3,{id:"the-advanced-settings-menu",children:"The Advanced Settings Menu"}),"\n",(0,r.jsx)(n.p,{children:"In the Advanced Settings menu, specify the branch options and define the Jira settings:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Advanced settings",src:i(56349).A+"",title:"Advanced settings",width:"1922",height:"1114"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Default branch"})," - the name of the branch where you want the development to be performed."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"The default branch cannot be deleted."})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Codebase versioning type"})," - defines how will the library tag be changed once the new image version is built. There are two versioning types:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"default"}),": Using the ",(0,r.jsx)(n.code,{children:"default"})," versioning type, in order to specify the version of the current artifacts, images, and tags in the Version Control System, a developer should navigate to the corresponding file and change the version ",(0,r.jsx)(n.strong,{children:"manually"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"semver"}),": Using the ",(0,r.jsx)(n.code,{children:"semver"})," versioning type, a developer indicates the version number from which all the artifacts will be versioned and, as a result, ",(0,r.jsx)(n.strong,{children:"automatically"})," registered in the corresponding file (e.g. pom.xml). When selecting the ",(0,r.jsx)(n.code,{children:"semver"})," versioning type, the extra fields will appear, type the version number from which you want the artifacts to be versioned:"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Semver versioning",src:i(67797).A+"",title:"Semver versioning",width:"1922",height:"1114"})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"Start Version From"})," field should be filled out in compliance with the semantic versioning rules, e.g. 1.2.3 or 10.10.10. Please refer to the ",(0,r.jsx)(n.a,{href:"https://semver.org/",children:"Semantic Versioning"})," page for details."]})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Specify the pattern to validate a commit message"})," - the regular expression used to indicate the pattern that is followed on the project to validate a commit message in the code review pipeline. An example of the pattern: ",(0,r.jsx)(n.code,{children:"^[PROJECT_NAME-d{4}]:.*$"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Integrate with Jira server",src:i(61107).A+"",title:"Integrate with Jira server",width:"1922",height:"1114"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Integrate with Jira server"})," - this check box is used in case it is required to connect Jira tickets with the commits\nand have a respective label in the ",(0,r.jsx)(n.strong,{children:"Fix Version"})," field."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["To adjust the Jira integration functionality, first apply the necessary changes described on the ",(0,r.jsx)(n.a,{href:"/docs/next/operator-guide/project-management-and-reporting/jira-integration",children:"Adjust Jira Integration"})," page."]})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Jira Server"})," - the integrated Jira server with related Jira tasks."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Specify the pattern to find a Jira ticket number in a commit message"})," - based on this pattern, the value from KubeRocketCI will be displayed in Jira."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Mapping fields",src:i(12409).A+"",title:"Mapping fields",width:"1922",height:"1114"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Mapping field name"})," - the section where the additional Jira fields are specified the names of the Jira fields that should be filled in with attributes from KubeRocketCI:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Select the name of the field in a Jira ticket. The available fields are the following: ",(0,r.jsx)(n.em,{children:"Fix Version/s"}),", ",(0,r.jsx)(n.em,{children:"Component/s"})," and ",(0,r.jsx)(n.em,{children:"Labels"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Click the ",(0,r.jsx)(n.strong,{children:"Add"})," button to add the mapping field name."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Enter Jira pattern for the field name:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["For the ",(0,r.jsx)(n.strong,{children:"Fix Version/s"})," field, select the ",(0,r.jsx)(n.strong,{children:"EDP_VERSION"})," variable that represents an EDP upgrade version, as in ",(0,r.jsx)(n.em,{children:"2.7.0-SNAPSHOT"}),".Combine variables to make the value more informative. For example, the pattern ",(0,r.jsx)(n.strong,{children:"EDP_VERSION-EDP_COMPONENT"})," will be displayed as ",(0,r.jsx)(n.em,{children:"2.7.0-SNAPSHOT-nexus-operator"})," in Jira."]}),"\n",(0,r.jsxs)(n.li,{children:["For the ",(0,r.jsx)(n.strong,{children:"Component/s"})," field select the ",(0,r.jsx)(n.strong,{children:"EDP_COMPONENT"})," variable that defines the name of the existing repository. For example, ",(0,r.jsx)(n.em,{children:"nexus-operator"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["For the ",(0,r.jsx)(n.strong,{children:"Labels"})," field select the ",(0,r.jsx)(n.strong,{children:"EDP_GITTAG"})," variable that defines a tag assigned to the commit in Git Hub. For example, ",(0,r.jsx)(n.em,{children:"build/2.7.0-SNAPSHOT.59"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Click the bin icon to remove the Jira field name."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Click the ",(0,r.jsx)(n.strong,{children:"Create"})," button to add the library to the Components list."]}),"\n",(0,r.jsxs)(n.p,{children:["After the complete adding of the library, inspect the ",(0,r.jsx)(n.a,{href:"/docs/next/user-guide/library",children:"Library Overview"})," page to learn how you can operate applications."]}),"\n",(0,r.jsx)(n.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/next/user-guide/library",children:"Manage Libraries"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/next/user-guide/add-cd-pipeline",children:"Add CD Pipeline"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/next/operator-guide/project-management-and-reporting/jira-integration",children:"Adjust Jira Integration"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/next/user-guide/add-git-server",children:"Manage Git Providers"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},62269:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/components-create-new-codebase-55bd8bd759922d9b476264d330e67577.png"},67797:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/components-edp-versioning-8341356d48fd4dae0c62970f2d60ba29.png"},12409:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/components-jira-advanced-mapping-babd9fcd1d3031aaf9e9b068f04835fe.png"},61107:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/components-jira-server-13b792cf8a282ce69b97a5d06798c2a9.png"},89237:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/components-select-strategy-7843b45b6bcb5706ebacecffeafb3643.png"},61218:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/components-select-type-new-codebase-e8fa465d2bd5b2162b990077c8fbf42a.png"},56349:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/components-specify-advanced-settings-4d0681e478e4e7cf9ff8e5b68587ce21.png"},34397:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/library-clone-library-ade30ac2d745a586974931eaa45d04d0.png"},54649:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/library-create-new-library-7e9f6b7a2c3b3291907a174da515ae17.png"},11918:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/library-yaml-edit-6b2058354f310dbe445fb305685f2e86.png"},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>l});var t=i(96540);const r={},s=t.createContext(r);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);