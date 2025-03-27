"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[46633],{10431:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>t,toc:()=>r});const t=JSON.parse('{"id":"user-guide/application","title":"Manage Applications","description":"This section describes the subsequent possible actions that can be performed with the newly added or existing applications.","source":"@site/versioned_docs/version-3.10/user-guide/application.md","sourceDirName":"user-guide","slug":"/user-guide/application","permalink":"/docs/3.10/user-guide/application","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/user-guide/application.md","tags":[],"version":"3.10","lastUpdatedBy":"Sergiy Kulanov","lastUpdatedAt":1740847812000,"frontMatter":{"title":"Manage Applications","sidebar_label":"Manage Applications","description":"This section describes the subsequent possible actions that can be performed with the newly added or existing applications."},"sidebar":"userGuideSidebar","previous":{"title":"Add Application","permalink":"/docs/3.10/user-guide/add-application"},"next":{"title":"SonarQube Project Properties for Application","permalink":"/docs/3.10/user-guide/application-sonarqube-project-properties"}}');var s=n(74848),a=n(28453);const o={title:"Manage Applications",sidebar_label:"Manage Applications",description:"This section describes the subsequent possible actions that can be performed with the newly added or existing applications."},l="Manage Applications",c={},r=[{value:"Check and Remove Application",id:"check-and-remove-application",level:2},{value:"Edit Existing Application",id:"edit-existing-application",level:2},{value:"Related Articles",id:"related-articles",level:2}];function d(e){const i={a:"a",admonition:"admonition",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components},{Head:t}=i;return t||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"manage-applications",children:"Manage Applications"})}),"\n",(0,s.jsx)(t,{children:(0,s.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/user-guide/application"})}),"\n",(0,s.jsx)(i.p,{children:"This section describes the subsequent possible actions that can be performed with the newly added or existing applications."}),"\n",(0,s.jsx)(i.h2,{id:"check-and-remove-application",children:"Check and Remove Application"}),"\n",(0,s.jsx)(i.p,{children:"As soon as the application is successfully provisioned, the following will be created:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"An Application Codebase type will appear in the Codebase list of the Components section."}),"\n",(0,s.jsxs)(i.li,{children:["With the ",(0,s.jsx)(i.strong,{children:"Create"})," strategy, a new project will be generated on GitHub or another integrated VCS. When ",(0,s.jsx)(i.strong,{children:"Clone"})," is chosen, the repository will be forked from the original and copied to the KubeRocketCI-integrated repository. If ",(0,s.jsx)(i.strong,{children:"Import"})," is selected, the platform connects to the chosen repository."]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"The added application will be listed in the Applications list allowing you to do the following:"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Applications menu",src:n(12709).A+"",title:"Applications menu",width:"4334",height:"2159"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Component status"})," - displays the application status. Can be red or green depending on if the KubeRocketCI portal managed to connect to the Git Server with the specified credentials or not."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Component name (clickable)"})," - displays the application name set during the application creation."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Open documentation"})," - opens the application related documentation page."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Enable filtering"})," - enables filtering by application name and namespace where this custom resource is located in."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Create new application"})," - displays the ",(0,s.jsx)(i.strong,{children:"Create new component"})," menu."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Selector"})," - Allows you to select multiple applications for bulk actions."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Delete selected"})," - Deletes all selected applications. This option is only available when one or more applications are selected using the ",(0,s.jsx)(i.strong,{children:"Selector"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["*",(0,s.jsx)(i.strong,{children:"Actions menu"})," provides additional options for each individual application:"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Edit"})," - Allows you to modify the application's settings. You can access this option by clicking the options icon (vertical ellipsis) next to the application's name in the list, and then selecting ",(0,s.jsx)(i.strong,{children:"Edit"}),". For more details, see the ",(0,s.jsx)(i.a,{href:"#edit-existing-application",children:"Edit Existing Application"})," section."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Delete"})," - Removes the application from the KubeRocketCI portal. You can access this option by clicking the options icon (vertical ellipsis) next to the application's name in the list, and then selecting ",(0,s.jsx)(i.strong,{children:"Delete"}),"."]}),"\n",(0,s.jsx)(i.admonition,{type:"warning",children:(0,s.jsx)(i.p,{children:"The application that is used in a CD pipeline cannot be removed."})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"There are also options to sort the applications:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Pagination menu"})," - select a number of applications displayed per page (15, 25 or 50 rows) and navigate between pages if the number of applications exceeds the capacity of a single page."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Enable filtering"})," - sort the existing applications in a table by clicking the sorting icons in the table header. Sort the applications alphabetically by their name, language, build tool, framework, and CI tool. You can also sort the applications by their status: Created, Failed, or In progress."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"edit-existing-application",children:"Edit Existing Application"}),"\n",(0,s.jsx)(i.p,{children:"KubeRocketCI Portal provides the ability to enable, disable or edit the Jira Integration functionality for applications."}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"To edit an application directly from the Applications overview page or when viewing the application data:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Select ",(0,s.jsx)(i.strong,{children:"Edit"})," in the options icon menu:"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Edit application on the Applications overview page",src:n(40262).A+"",title:"Edit application on the Applications overview page",width:"1922",height:"1114"})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Edit application when viewing the application data",src:n(37821).A+"",title:"Edit application when viewing the application data",width:"1922",height:"1114"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"The Edit Application dialog opens."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["To enable Jira integration, in the ",(0,s.jsx)(i.strong,{children:"Edit Application"})," dialog do the following:"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Edit application",src:n(84564).A+"",title:"Edit application",width:"3585",height:"1918"})}),"\n",(0,s.jsxs)(i.p,{children:["a. Mark the ",(0,s.jsx)(i.strong,{children:"Integrate with Jira server"})," check box and fill in the necessary fields. Please see steps d-h of the ",(0,s.jsx)(i.a,{href:"/docs/3.10/user-guide/add-application",children:"Add Application"})," page."]}),"\n",(0,s.jsxs)(i.p,{children:["b. Select the ",(0,s.jsx)(i.strong,{children:"Apply"})," button to apply the changes."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["To disable Jira integration, in the ",(0,s.jsx)(i.strong,{children:"Edit Application"})," dialog do the following:"]}),"\n",(0,s.jsxs)(i.p,{children:["a. Clear the ",(0,s.jsx)(i.strong,{children:"Integrate with Jira server"})," check box."]}),"\n",(0,s.jsxs)(i.p,{children:["b. Select the ",(0,s.jsx)(i.strong,{children:"Apply"})," button to apply the changes."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["To create, edit and delete application branches, please refer to the ",(0,s.jsx)(i.a,{href:"/docs/3.10/user-guide/manage-branches",children:"Manage Branches"})," page."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"/docs/3.10/user-guide/add-application",children:"Add Application"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"/docs/3.10/user-guide/manage-branches",children:"Manage Branches"})}),"\n"]})]})}function p(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},40262:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/application-manage-components-codebase-edit-1-2a09cad76ec2d5d8ef87444da77cac60.png"},37821:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/application-manage-components-codebase-edit-2-97cf4fe51b567df8a78991de0ec167d8.png"},84564:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/application-manage-edit-codebase-application-58005a6cd9da32cb911a8513f2ea100e.png"},12709:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/components-manage-components-menu-d2157cd05dc7756711ec3874493caa12.png"},28453:(e,i,n)=>{n.d(i,{R:()=>o,x:()=>l});var t=n(96540);const s={},a=t.createContext(s);function o(e){const i=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(a.Provider,{value:i},e.children)}}}]);