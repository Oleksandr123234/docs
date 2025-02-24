"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[51051],{24826:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"user-guide/add-infrastructure","title":"Add Infrastructure","description":"Learn how to add, clone, and import infrastructure projects in KubeRocketCI, automating resource creation in the cloud for robust development.","source":"@site/docs/user-guide/add-infrastructure.md","sourceDirName":"user-guide","slug":"/user-guide/add-infrastructure","permalink":"/docs/next/user-guide/add-infrastructure","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/user-guide/add-infrastructure.md","tags":[],"version":"current","lastUpdatedBy":"Oleksandr_Stepanov@epam.com","lastUpdatedAt":1739954692000,"frontMatter":{"title":"Add Infrastructure","sidebar_label":"Add Infrastructure","description":"Learn how to add, clone, and import infrastructure projects in KubeRocketCI, automating resource creation in the cloud for robust development."},"sidebar":"userGuideSidebar","previous":{"title":"Manage Libraries","permalink":"/docs/next/user-guide/library"},"next":{"title":"Manage Infrastructures","permalink":"/docs/next/user-guide/infrastructure"}}');var i=n(74848),s=n(28453);const a={title:"Add Infrastructure",sidebar_label:"Add Infrastructure",description:"Learn how to add, clone, and import infrastructure projects in KubeRocketCI, automating resource creation in the cloud for robust development."},o="Add Infrastructure",c={},d=[{value:"Create Infrastructure in YAML",id:"create-infrastructure-in-yaml",level:2},{value:"Create Infrastructure via UI",id:"create-infrastructure-via-ui",level:2},{value:"Codebase Info Menu",id:"codebase-info-menu",level:3},{value:"Advanced Settings Menu",id:"advanced-settings-menu",level:3},{value:"Related Articles",id:"related-articles",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{Head:r}=t;return r||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"add-infrastructure",children:"Add Infrastructure"})}),"\n",(0,i.jsx)(r,{children:(0,i.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/user-guide/add-infrastructure/"})}),"\n",(0,i.jsxs)(t.p,{children:["KubeRocketCI portal allows you to create an application, clone an existing repository with the application to your Version Control System (VCS), or using an external repository and importing an application to the environment.\nWhen an application is created or cloned, the system automatically generates a corresponding repository within the integrated Version Control System. The functionality of the Infrastructure codebase type is to create resources in cloud provider. You can create an Infrastructure ",(0,i.jsx)(t.a,{href:"#create-infrastructure-in-yaml",children:"in YAML"})," or ",(0,i.jsx)(t.a,{href:"#create-infrastructure-via-ui",children:"via the two-step menu"})," in the dialog."]}),"\n",(0,i.jsxs)(t.p,{children:["To add an infrastructure, navigate to the ",(0,i.jsx)(t.strong,{children:"Components"})," section on the navigation bar and click ",(0,i.jsx)(t.strong,{children:"+ Create component"}),":"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Create new infrastructure",src:n(62269).A+"",title:"Create new infrastructure",width:"1922",height:"1114"})}),"\n",(0,i.jsxs)(t.p,{children:["Once clicked, the ",(0,i.jsx)(t.strong,{children:"Create new component"})," dialog will appear. Select ",(0,i.jsx)(t.strong,{children:"Infrastructure"})," and click ",(0,i.jsx)(t.strong,{children:"Next"}),":"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Infrastructure info",src:n(61218).A+"",width:"1922",height:"1114"})}),"\n",(0,i.jsxs)(t.p,{children:["Choose one of the strategies and click ",(0,i.jsx)(t.strong,{children:"Create"}),":"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Select strategy",src:n(89237).A+"",title:"Select strategy",width:"1922",height:"1114"})}),"\n",(0,i.jsxs)(t.p,{children:["In the ",(0,i.jsx)(t.strong,{children:"Create new component"})," menu, select the necessary configuration strategy. The choice will define the parameters you will need to specify:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Create from template"})," \u2013 creates a project on the pattern in accordance with an infrastructure language, a build tool, and a framework."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Import project"})," - allows using existing VCS repository to integrate with KubeRocketCI. While importing the existing repository, select the Git server from the drop-down list and define the relative path to the repository, such as ",(0,i.jsx)(t.code,{children:"epmd-edp/python-python-flask"}),"."]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["In order to use the ",(0,i.jsx)(t.strong,{children:"Import project"})," strategy, make sure to adjust it with the ",(0,i.jsx)(t.a,{href:"/docs/next/user-guide/add-git-server",children:"Integrate GitLab/GitHub With Tekton"})," page."]})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Clone project"})," \u2013 clones the indicated repository into KubeRocketCI. While cloning the existing repository, it is required to fill in the ",(0,i.jsx)(t.strong,{children:"Repository URL"})," field and specify the ",(0,i.jsx)(t.strong,{children:"Repository credentials"})," field if needed:"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Clone infrastructure",src:n(17239).A+"",title:"Clone infrastructure",width:"1922",height:"1114"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"create-infrastructure-in-yaml",children:"Create Infrastructure in YAML"}),"\n",(0,i.jsxs)(t.p,{children:["Click ",(0,i.jsx)(t.strong,{children:"Edit YAML"})," in the upper-right corner of the ",(0,i.jsx)(t.strong,{children:"Create Infrastructure"})," dialog to open the YAML editor and create the Infrastructure."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Edit YAML",src:n(18398).A+"",title:"Edit YAML",width:"1922",height:"1114"})}),"\n",(0,i.jsxs)(t.p,{children:["To edit YAML in the minimal editor, turn on the ",(0,i.jsx)(t.strong,{children:"Use minimal editor"})," toggle in the upper-right corner of the ",(0,i.jsx)(t.strong,{children:"Create Infrastructure"})," dialog."]}),"\n",(0,i.jsxs)(t.p,{children:["To save the changes, select the ",(0,i.jsx)(t.strong,{children:"Save & Apply"})," button."]}),"\n",(0,i.jsx)(t.h2,{id:"create-infrastructure-via-ui",children:"Create Infrastructure via UI"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.strong,{children:"Create Infrastructure"})," dialog contains the two steps:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"The Codebase Info Menu"}),"\n",(0,i.jsx)(t.li,{children:"The Advanced Settings Menu"}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"codebase-info-menu",children:"Codebase Info Menu"}),"\n",(0,i.jsxs)(t.p,{children:["In our example, we will use the ",(0,i.jsx)(t.strong,{children:"Create from template"})," strategy."]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Select all the settings that define how the infrastructure will be added to Git server:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Create infrastructure",src:n(92028).A+"",title:"Create infrastructure",width:"1922",height:"1114"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Git server"})," - the pre-configured server where the component will be hosted. Select one from the from the drop-down list. Please refer to the ",(0,i.jsx)(t.a,{href:"/docs/next/user-guide/git-server-overview",children:"Manage Git Servers"})," page to learn how to create the one."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Repository name"})," - the relative path to the repository, such as ",(0,i.jsx)(t.code,{children:"epmd-edp/python-python-flask"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Component name"})," - the name of the infrastructure. Must be at least two characters using the lower-case letters, numbers and inner dashes."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Description"})," - brief and concise description that explains the purpose of the infrastructure."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Empty project"})," - check this box to create a infrastructure with an empty repository. The empty repository option is available only for the ",(0,i.jsx)(t.strong,{children:"Create from template"})," strategy."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Specify the infrastructure language properties:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Infrastructure code language"})," - defines the code language with its supported frameworks."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Language version/framework"})," - defines the specific framework or language version of the infrastructure. The field depends on the selected code language."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Build Tool"})," - allows to choose the build tool to use. A set tools and can be changed in accordance with the selected code language."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"advanced-settings-menu",children:"Advanced Settings Menu"}),"\n",(0,i.jsxs)(t.p,{children:["In the ",(0,i.jsx)(t.strong,{children:"Advanced Settings"})," menu, specify the branch options and define the Jira settings:"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Advanced settings",src:n(56349).A+"",title:"Advanced settings",width:"1922",height:"1114"})}),"\n",(0,i.jsxs)(t.p,{children:["Follow the instructions below to fill in the fields of the ",(0,i.jsx)(t.strong,{children:"Advanced Setting"})," menu:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Default branch"})," - the name of the branch where you want the development to be performed."]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"The default branch cannot be deleted."})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Codebase versioning type"})," - defines how will the infrastructure tag be changed once the new image version is built. There are two versioning types:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"default"}),": Using the default versioning type, in order to specify the version of the current artifacts, images, and tags in the Version Control System, a developer should navigate to the corresponding file and change the version ",(0,i.jsx)(t.strong,{children:"manually"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"edp"}),": Using the edp versioning type, a developer indicates the version number from which all the artifacts will be versioned and, as a result, ",(0,i.jsx)(t.strong,{children:"automatically"})," registered in the corresponding file (e.g. pom.xml). When selecting the edp versioning type, the extra fields will appear, type the version number from which you want the artifacts to be versioned:"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Edp versioning",src:n(67797).A+"",title:"Edp versioning",width:"1922",height:"1114"})}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.strong,{children:"Start Version From"})," field should be filled out in compliance with the semantic versioning rules, e.g. 1.2.3 or 10.10.10. Please refer to the ",(0,i.jsx)(t.a,{href:"https://semver.org/",children:"Semantic Versioning"})," page for details."]})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Specify the pattern to validate a commit message"})," - the regular expression used to indicate the pattern that is followed on the project to validate a commit message in the code review pipeline. An example of the pattern: ",(0,i.jsx)(t.code,{children:"^[PROJECT_NAME-d{4}]:.*$"}),"."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"JIRA integration",src:n(61107).A+"",title:"JIRA integration",width:"1922",height:"1114"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Integrate with Jira server"})," - this check box is used in case it is required to connect Jira tickets with the commits and have a respective label in the ",(0,i.jsx)(t.strong,{children:"Fix Version"})," field."]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["To adjust the Jira integration functionality, first apply the necessary changes described on the ",(0,i.jsx)(t.a,{href:"/docs/next/operator-guide/project-management-and-reporting/jira-integration",children:"Adjust Jira Integration"})," page."]})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Jira Server"})," - the integrated Jira server with related Jira tasks."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Specify the pattern to find a Jira ticket number in a commit message"})," - based on this pattern, the value from KubeRocketCI will be displayed in Jira."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Mapping field name",src:n(12409).A+"",title:"Mapping fields",width:"1922",height:"1114"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Mapping field name"})," - the section where the additional Jira fields are specified the names of the Jira fields that should be filled in with attributes from KubeRocketCI:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Select the name of the field in a Jira ticket. The available fields are the following: ",(0,i.jsx)(t.em,{children:"Fix Version/s"}),", ",(0,i.jsx)(t.em,{children:"Component/s"})," and ",(0,i.jsx)(t.em,{children:"Labels"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Click the ",(0,i.jsx)(t.strong,{children:"Add"})," button to add the mapping field name."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Enter Jira pattern for the field name:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["For the ",(0,i.jsx)(t.strong,{children:"Fix Version/s"})," field, select the ",(0,i.jsx)(t.strong,{children:"EDP_VERSION"})," variable that represents an EDP upgrade version, as in ",(0,i.jsx)(t.em,{children:"2.7.0-SNAPSHOT"}),".Combine variables to make the value more informative. For example, the pattern ",(0,i.jsx)(t.strong,{children:"EDP_VERSION-EDP_COMPONENT"})," will be displayed as ",(0,i.jsx)(t.em,{children:"2.7.0-SNAPSHOT-nexus-operator"})," in Jira."]}),"\n",(0,i.jsxs)(t.li,{children:["For the ",(0,i.jsx)(t.strong,{children:"Component/s"})," field select the ",(0,i.jsx)(t.strong,{children:"EDP_COMPONENT"})," variable that defines the name of the existing repository. For example, ",(0,i.jsx)(t.em,{children:"nexus-operator"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["For the ",(0,i.jsx)(t.strong,{children:"Labels"})," field select the ",(0,i.jsx)(t.strong,{children:"EDP_GITTAG"}),"variable that defines a tag assigned to the commit in Git Hub. For example, ",(0,i.jsx)(t.em,{children:"build/2.7.0-SNAPSHOT.59"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Click the bin icon to remove the Jira field name."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Click the ",(0,i.jsx)(t.strong,{children:"Apply"})," button to add the infrastructure to the Components list."]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["After the complete adding of the application, inspect the ",(0,i.jsx)(t.a,{href:"/docs/next/user-guide/infrastructure",children:"Manage Infrastructures"})," page to learn how you can operate with infrastructure codebase types."]})}),"\n",(0,i.jsx)(t.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/next/user-guide/application",children:"Application Overview"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/next/user-guide/add-cd-pipeline",children:"Add CD Pipelines"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/next/operator-guide/project-management-and-reporting/jira-integration",children:"Adjust Jira Integration"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},62269:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/components-create-new-codebase-76c260a02f23b6ff5a7cd8b4df44ac29.png"},67797:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/components-edp-versioning-ddfdcae4888bed4009bf2ec44140d81d.png"},12409:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/components-jira-advanced-mapping-456b39ab41dec65e54f9b76e927b72d8.png"},61107:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/components-jira-server-dcccd23fd1096676f79738cdb7714ac6.png"},89237:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/components-select-strategy-f8507ec26c07f703e9ebd00aefe27a55.png"},61218:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/components-select-type-new-codebase-dcc1137655ed2bb742c6227d9867ac3e.png"},56349:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/components-specify-advanced-settings-4fa590f7c781d6184a208929bd7ecef5.png"},17239:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/infrastructure-clone-infrastructure-428629ea46ab88a350fc019061393df1.png"},92028:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/infrastructure-create-infrastructure-9fe7d206b5b3f9f410c31220e318ea50.png"},18398:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/infrastructure-yaml-edit-a982abbc2e1bb727b7bea8c4d657bbb4.png"},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var r=n(96540);const i={},s=r.createContext(i);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);