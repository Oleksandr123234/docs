"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[10434],{79819:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"user-guide/infrastructure","title":"Manage Infrastructures","description":"Guide to managing infrastructures in KubeRocketCI, including setup, modification, and integration with Jira for comprehensive development management.","source":"@site/versioned_docs/version-3.9/user-guide/infrastructure.md","sourceDirName":"user-guide","slug":"/user-guide/infrastructure","permalink":"/docs/3.9/user-guide/infrastructure","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/user-guide/infrastructure.md","tags":[],"version":"3.9","lastUpdatedBy":"Oleksandr_Stepanov@epam.com","lastUpdatedAt":1740747668000,"frontMatter":{"title":"Manage Infrastructures","sidebar_label":"Manage Infrastructures","description":"Guide to managing infrastructures in KubeRocketCI, including setup, modification, and integration with Jira for comprehensive development management."},"sidebar":"userGuideSidebar","previous":{"title":"Add Infrastructure","permalink":"/docs/3.9/user-guide/add-infrastructure"},"next":{"title":"Manage Branches","permalink":"/docs/3.9/user-guide/manage-branches"}}');var s=n(74848),i=n(28453);const a={title:"Manage Infrastructures",sidebar_label:"Manage Infrastructures",description:"Guide to managing infrastructures in KubeRocketCI, including setup, modification, and integration with Jira for comprehensive development management."},c="Manage Infrastructures",o={},d=[{value:"Check and Remove Infrastructure",id:"check-and-remove-infrastructure",level:2},{value:"Edit Existing Infrastructure",id:"edit-existing-infrastructure",level:2},{value:"Related Articles",id:"related-articles",level:2}];function l(e){const t={a:"a",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{Head:r}=t;return r||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"manage-infrastructures",children:"Manage Infrastructures"})}),"\n",(0,s.jsx)(r,{children:(0,s.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/user-guide/infrastructure/"})}),"\n",(0,s.jsx)(t.p,{children:"This section describes the subsequent possible actions that can be performed with the newly added or existing infrastructures."}),"\n",(0,s.jsx)(t.h2,{id:"check-and-remove-infrastructure",children:"Check and Remove Infrastructure"}),"\n",(0,s.jsx)(t.p,{children:"As soon as the infrastructure is successfully provisioned, the following will be created:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"An Infrastructure Codebase type will appear in the Codebase list of the Components section."}),"\n",(0,s.jsxs)(t.li,{children:["With the ",(0,s.jsx)(t.strong,{children:"Create"})," strategy, a new project will be generated on GitHub or another integrated VCS. When ",(0,s.jsx)(t.strong,{children:"Clone"})," is chosen, the repository will be forked from the original and copied to the KubeRocketCI-integrated repository. If ",(0,s.jsx)(t.strong,{children:"Import"})," is selected, the platform connects to the chosen repository."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"The added infrastructure will be listed in the infrastructure list allowing you to do the following:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Components menu",src:n(9133).A+"",title:"Components menu",width:"4305",height:"2145"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Component status"})," - displays the infrastructure status. Can be red or green depending on if the KubeRocketCI portal managed to connect to the Git Server with the specified credentials or not."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Component name (clickable)"})," - displays the infrastructure name set during the library creation."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Open documentation"})," - opens the infrastructure related documentation page."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Enable filtering"})," - enables filtering by library name and namespace where this custom resource is located in."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Create new component"})," - displays the ",(0,s.jsx)(t.strong,{children:"Create new component"})," menu."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Selector"})," - Allows you to select multiple infrastructures for bulk actions."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Delete selected"})," - Deletes all selected infrastructures. This option is only available when one or more infrastructures are selected using the ",(0,s.jsx)(t.strong,{children:"Selector"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["*",(0,s.jsx)(t.strong,{children:"Actions menu"})," provides additional options for each individual infrastructure:"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Edit"})," - edit the infrastructure by selecting the options icon next to its name in the infrastructures list, and then selecting ",(0,s.jsx)(t.strong,{children:"Edit"}),". For details see the ",(0,s.jsx)(t.a,{href:"#edit-existing-infrastructure",children:"Edit Existing Infrastructure"})," section."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Delete"})," - remove infrastructure by clicking the vertical ellipsis button and then selecting ",(0,s.jsx)(t.strong,{children:"Delete"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"There are also options to sort the infrastructures:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Enable filtering"})," - Sort the existing infrastructures in a table by clicking the sorting icons in the table header. Sort the infrastructures alphabetically by their name, language, build tool, framework, and CI tool. You can also sort the infrastructures by their status: Created, Failed, or In progress."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Pagination menu"})," - Select a number of infrastructures displayed per page (15, 25 or 50 rows)  and navigate between pages if the number of items exceeds the capacity of a single page."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"edit-existing-infrastructure",children:"Edit Existing Infrastructure"}),"\n",(0,s.jsx)(t.p,{children:"KubeRocketCI portal provides the ability to enable, disable or edit the Jira Integration functionality for infrastructures."}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"To edit an infrastructure directly from the infrastructures overview page or when viewing the infrastructure data:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Select ",(0,s.jsx)(t.strong,{children:"Edit"})," in the options icon menu:"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Edit infrastructure on the Infrastructures overview page",src:n(32027).A+"",title:"Edit infrastructure on the Infrastructures overview page",width:"3584",height:"2016"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Edit infrastructure when viewing the infrastructure data",src:n(70048).A+"",title:"Edit infrastructure when viewing the infrastructure data",width:"3584",height:"2016"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["The ",(0,s.jsx)(t.strong,{children:"Edit Infrastructure"})," dialog opens."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["To enable Jira integration, in the ",(0,s.jsx)(t.strong,{children:"Edit Infrastructure"})," dialog do the following:"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Edit infrastructure",src:n(4277).A+"",title:"Edit infrastructure",width:"3584",height:"2016"})}),"\n",(0,s.jsxs)(t.p,{children:["a. Mark the ",(0,s.jsx)(t.strong,{children:"Integrate with Jira server"})," check box and fill in the necessary fields. Please see steps d-h on the ",(0,s.jsx)(t.a,{href:"/docs/3.9/user-guide/add-infrastructure",children:"Add Infrastructure page"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["b. Select the ",(0,s.jsx)(t.strong,{children:"Apply"})," button to apply the changes."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["To disable Jira integration, in the ",(0,s.jsx)(t.strong,{children:"Edit Infrastructure"})," dialog do the following:"]}),"\n",(0,s.jsxs)(t.p,{children:["a. Clear the ",(0,s.jsx)(t.strong,{children:"Integrate with Jira server"})," check box."]}),"\n",(0,s.jsxs)(t.p,{children:["b. Select the ",(0,s.jsx)(t.strong,{children:"Apply"})," button to apply the changes."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["To create, edit and delete infrastructure branches, please refer to the ",(0,s.jsx)(t.a,{href:"/docs/3.9/user-guide/manage-branches",children:"Manage Branches"})," page."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/docs/3.9/user-guide/add-infrastructure",children:"Add Infrastructure"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/docs/3.9/user-guide/manage-branches",children:"Manage Branches"})}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},9133:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/components-manage-components-menu-bd475d2da1cdcbabdc4eeb5f0bd93444.png"},32027:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/infrastructure-manage-components-edit-infrastructure-1-3812bbc4378b430ea77cab931bf5c0bd.png"},70048:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/infrastructure-manage-components-edit-infrastructure-2-8d02a4fc7c8ab7ee4d753fa66103015d.png"},4277:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/infrastructure-manage-edit-codebase-infrastructure-66e3fd4874fa6bdd477db6b042bb82a9.png"},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>c});var r=n(96540);const s={},i=r.createContext(s);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);