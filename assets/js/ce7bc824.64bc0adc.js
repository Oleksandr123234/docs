"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[88715],{76434:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"operator-guide/project-management-and-reporting/jira-integration","title":"Jira Integration","description":"Guide for enabling Jira integration in KubeRocketCI, detailing steps for configuring Jira with OIDC authentication using Microsoft Entra and setting up multitenant logging components.","source":"@site/docs/operator-guide/project-management-and-reporting/jira-integration.md","sourceDirName":"operator-guide/project-management-and-reporting","slug":"/operator-guide/project-management-and-reporting/jira-integration","permalink":"/docs/next/operator-guide/project-management-and-reporting/jira-integration","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/operator-guide/project-management-and-reporting/jira-integration.md","tags":[],"version":"current","lastUpdatedBy":"Oleksandr_Stepanov@epam.com","lastUpdatedAt":1740746844000,"frontMatter":{"title":"Jira Integration","description":"Guide for enabling Jira integration in KubeRocketCI, detailing steps for configuring Jira with OIDC authentication using Microsoft Entra and setting up multitenant logging components.","sidebar_label":"Jira Integration"},"sidebar":"operatorGuideSidebar","previous":{"title":"Manage Project Visibility","permalink":"/docs/next/operator-guide/code-quality/sonarqube-visibility"},"next":{"title":"Install ReportPortal","permalink":"/docs/next/operator-guide/project-management-and-reporting/install-reportportal"}}');var i=t(74848),a=t(28453),s=t(65537),o=t(79329);const l={title:"Jira Integration",description:"Guide for enabling Jira integration in KubeRocketCI, detailing steps for configuring Jira with OIDC authentication using Microsoft Entra and setting up multitenant logging components.",sidebar_label:"Jira Integration"},c="Jira Integration",d={},u=[{value:"Overview",id:"overview",level:2},{value:"Integration Procedure",id:"integration-procedure",level:2},{value:"Enable Jira During Platform Deployment",id:"enable-jira-during-platform-deployment",level:2},{value:"Jira Usage",id:"jira-usage",level:2},{value:"Related Articles",id:"related-articles",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components},{Head:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"jira-integration",children:"Jira Integration"})}),"\n",(0,i.jsx)(r,{children:(0,i.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/operator-guide/project-management-and-reporting/jira-integration/"})}),"\n",(0,i.jsx)(n.p,{children:"This documentation guide provides step-by-step instructions for enabling the Jira integration option in the Portal UI for KubeRocketCI. Jira integration allows including useful metadata in Jira tickets."}),"\n",(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(n.p,{children:"Integrating Jira can provide a number of benefits, such as increased visibility and traceability, automatic linking code changes to relevant Jira issues, streamlining the management and tracking of development progress."}),"\n",(0,i.jsx)(n.p,{children:"By linking CI pipelines to Jira issues, teams can get a better understanding of the status of their work and how it relates to the overall development process. This can help to improve communication and collaboration, and ultimately lead to faster and more efficient delivery of software."}),"\n",(0,i.jsx)(n.p,{children:"Enabling Jira integration allows for the automatic population of three fields in Jira tickets: Fix Versions, Components, and Labels. Each of these fields provides distinct benefits:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Fix Versions"}),": helps track progress against release schedules;"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Components"}),": allows grouping related issues together;"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Labels"}),": enables identification of specific types of work."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Teams can utilize these fields to enhance their work prioritization, identify dependencies, improve collaboration, and ultimately achieve faster software delivery."}),"\n",(0,i.jsx)(n.h2,{id:"integration-procedure",children:"Integration Procedure"}),"\n",(0,i.jsx)(n.p,{children:"In order to adjust the Jira server integration, add the JiraServer CR by performing the following:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Provision the ",(0,i.jsx)(n.strong,{children:"ci-jira"})," secret using ",(0,i.jsx)(n.code,{children:"EDP Portal"}),", ",(0,i.jsx)(n.code,{children:"Manifest"})," or with the ",(0,i.jsx)(n.code,{children:"externalSecrets"})," operator:"]}),"\n",(0,i.jsxs)(s.A,{defaultValue:"portal",values:[{label:"KubeRocketCI",value:"portal"},{label:"Manifests",value:"manifests"},{label:"External Secrets Operator",value:"externalsecret"}],children:[(0,i.jsxs)(o.A,{value:"portal",children:[(0,i.jsxs)(n.p,{children:["Go to ",(0,i.jsx)(n.strong,{children:"KubeRocketCI"})," -> ",(0,i.jsx)(n.strong,{children:"Configuration"})," -> ",(0,i.jsx)(n.strong,{children:"Management Tool"}),"."]}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Jira update manual secret",src:t(53899).A+"",title:"Jira update manual secret",width:"1915",height:"956"})}),(0,i.jsxs)(n.p,{children:["Fill in the ",(0,i.jsx)(n.strong,{children:"URL"}),", ",(0,i.jsx)(n.strong,{children:"User"}),", ",(0,i.jsx)(n.strong,{children:"Password"})," fields and click the ",(0,i.jsx)(n.strong,{children:"Save"})," button:"]}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Add Jira Server",src:t(40927).A+"",title:"Add Jira Server",width:"1915",height:"958"})})]}),(0,i.jsx)(o.A,{value:"manifests",children:(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Create Kubernetes Secret:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"apiVersion: v1\nkind: Secret\nmetadata:\n  name: ci-jira\n  namespace: edp\n  labels:\n    app.edp.epam.com/secret-type=jira\nstringData:\n  username: username\n  password: password\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Create ",(0,i.jsx)(n.code,{children:"JiraServer"})," CR with the ",(0,i.jsx)(n.strong,{children:"apiUrl"}),", ",(0,i.jsx)(n.strong,{children:"credentialName"})," and ",(0,i.jsx)(n.strong,{children:"rootUrl"})," fields:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"apiVersion: v2.edp.epam.com/v1\nkind: JiraServer\nmetadata:\n  name: jira-server\n  namespace: edp\nspec:\n  apiUrl: 'https://jira-api.example.com'\n  credentialName: ci-jira\n  rootUrl: 'https://jira.example.com'\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["The value of the ",(0,i.jsx)(n.strong,{children:"credentialName"})," property is the name of the Kubernetes Secret, created on the previous step."]})}),"\n"]}),"\n"]})}),(0,i.jsx)(o.A,{value:"externalsecret",children:(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Configure secret in Parameter Store:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'"ci-jira":\n{\n  "username": "username",\n  "password": "password"\n}\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Create ",(0,i.jsx)(n.code,{children:"JiraServer"})," CR with the ",(0,i.jsx)(n.strong,{children:"apiUrl"}),", ",(0,i.jsx)(n.strong,{children:"credentialName"})," and ",(0,i.jsx)(n.strong,{children:"rootUrl"})," fields:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"apiVersion: v2.edp.epam.com/v1\nkind: JiraServer\nmetadata:\n  name: jira-server\n  namespace: edp\nspec:\n  apiUrl: 'https://jira-api.example.com'\n  credentialName: ci-jira\n  rootUrl: 'https://jira.example.com'\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["The value of the ",(0,i.jsx)(n.strong,{children:"credentialName"})," property is the name of the Kubernetes Secret, created on the previous step."]})}),"\n"]}),"\n"]})})]}),"\n",(0,i.jsxs)(n.admonition,{title:"Required Permissions for Issue Management",type:"note",children:[(0,i.jsx)(n.p,{children:"To manage issue labels, components, and add links in Jira, please make sure the user has the following permissions:"}),(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Edit Issues:"})," This permission is necessary to modify issue fields, including adding or removing labels and components."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Link Issues:"})," You must have this permission to create and manage links between issues."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Add Comments:"})," Required for adding external links and comments to issues."]}),"\n"]})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"enable-jira-during-platform-deployment",children:"Enable Jira During Platform Deployment"}),"\n",(0,i.jsxs)(n.p,{children:["KubeRocketCI offers the capability to incorporate Jira integration as part of its deployment process. To follow this approach, please review the following parameters of the ",(0,i.jsx)(n.a,{href:"https://github.com/epam/edp-install/blob/release/3.9/deploy-templates/values.yaml#L145",children:"values.yaml"})," file. Enabling the ",(0,i.jsx)(n.code,{children:"jira.integration"})," parameter creates the following custom resources:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"QuickLink;"}),"\n",(0,i.jsx)(n.li,{children:"JiraServer;"}),"\n",(0,i.jsx)(n.li,{children:"External Secrets Operator (in case it is used)."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"To set up Jira integration along with the platform, follow the steps below:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Create the ",(0,i.jsx)(n.strong,{children:"ci-jira"})," secret in the platform namespace (e.g., ",(0,i.jsx)(n.code,{children:"edp"}),") as it's described ",(0,i.jsx)(n.a,{href:"#integration-procedure",children:"above"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Deploy the platform with the ",(0,i.jsx)(n.code,{children:"jira.integration"})," parameter set to ",(0,i.jsx)(n.code,{children:"true"})," in the ",(0,i.jsx)(n.a,{href:"https://github.com/epam/edp-install/blob/release/3.8/deploy-templates/values.yaml#L138",children:"values.yaml"})," file."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"jira-usage",children:"Jira Usage"}),"\n",(0,i.jsx)(n.p,{children:"To use Jira, you need to set up your codebases properly."}),"\n",(0,i.jsxs)(n.p,{children:["During the codebase creation process, proceed to the ",(0,i.jsx)(n.strong,{children:"Advanced Settings"})," tab. Here, ensure to mark the ",(0,i.jsx)(n.strong,{children:"Integrate with Jira server"})," checkbox and complete the necessary fields accordingly:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Advanced settings",src:t(21907).A+"",title:"Advanced settings",width:"1915",height:"958"})}),"\n",(0,i.jsxs)(n.p,{children:["There are four predefined variables, each with specific values, that can be utilized individually or in combination. These variables display varying data based on the versioning type in use (",(0,i.jsx)(n.code,{children:"edp"})," or ",(0,i.jsx)(n.code,{children:"default"}),"):"]}),"\n",(0,i.jsxs)(n.p,{children:["When using the ",(0,i.jsx)(n.code,{children:"edp versioning"})," scheme:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"EDP_COMPONENT"})," \u2013 yields the name of the application;"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"EDP_VERSION"})," \u2013 produces either 0.0.0-SNAPSHOT or 0.0.0-RC as output;"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"EDP_SEM_VERSION"})," \u2013 generates a semantic version, specifically 0.0.0;"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"EDP_GITTAG"})," \u2013 returns a Git tag format such as build/0.0.0-SNAPSHOT.2 or build/0.0.0-RC.2"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["If the ",(0,i.jsx)(n.code,{children:"default versioning"})," type is used:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"EDP_COMPONENT"})," \u2013 returns application-name;"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"EDP_VERSION"})," \u2013 returns the date when the application was tagged. (Example: 20231023-131217);"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"EDP_SEM_VERSION"})," \u2013 returns the date when the application was tagged. (Example: 20231023-131217);"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"EDP_GITTAG"})," \u2013 returns the date when the application was tagged. (Example: 20231023-131217)."]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["There are no character restrictions when combining the variables. You can concatenate them using the dash sign.\nCombination samples:",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.strong,{children:"EDP_SEM_VERSION-EDP_COMPONENT"}),";",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.strong,{children:"EDP_COMPONENT-hello-world/EDP_VERSION"}),";",(0,i.jsx)("br",{}),"\netc."]})}),"\n",(0,i.jsx)(n.p,{children:"Upon successful configuration of the Jira integration, your tickets will be enriched with additional metadata:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Additional Metadata",src:t(3192).A+"",title:"Additional Metadata",width:"1031",height:"376"})}),"\n",(0,i.jsxs)(n.p,{children:["Should you encounter an issue where metadata is not appearing within a Jira ticket, it's advisable to inspect the status field of the ",(0,i.jsx)(n.code,{children:"JiraIssueMetadata"})," custom resources located in the platform namespace (e.g, ",(0,i.jsx)(n.code,{children:"edp"}),"). The codebase-operator typically removes this resource after post-processing, it may persist in case of reconciliation issues, remaining within the namespace."]}),"\n",(0,i.jsx)(n.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/next/user-guide/add-application",children:"Add Application"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},79329:(e,n,t)=>{t.d(n,{A:()=>s});t(96540);var r=t(34164);const i={tabItem:"tabItem_Ymn6"};var a=t(74848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,s),hidden:t,children:n})}},65537:(e,n,t)=>{t.d(n,{A:()=>w});var r=t(96540),i=t(34164),a=t(65627),s=t(56347),o=t(50372),l=t(30604),c=t(11861),d=t(78749);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:i}}=e;return{value:n,label:t,attributes:r,default:i}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const i=(0,s.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(i.location.search);n.set(a,e),i.replace({...i.location,search:n.toString()})}),[a,i])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,a=h(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[c,u]=g({queryString:t,groupId:i}),[m,j]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,a]=(0,d.Dv)(t);return[i,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:i}),x=(()=>{const e=c??m;return p({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{x&&l(x)}),[x]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),j(e)}),[u,j,a]),tabValues:a}}var j=t(9136);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(74848);function b(e){let{className:n,block:t,selectedValue:r,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),i=o[t].value;i!==r&&(c(n),s(i))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>{l.push(e)},onKeyDown:u,onClick:d,...a,className:(0,i.A)("tabs__item",x.tabItem,a?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function y(e){const n=m(e);return(0,f.jsxs)("div",{className:(0,i.A)("tabs-container",x.tabList),children:[(0,f.jsx)(b,{...n,...e}),(0,f.jsx)(v,{...n,...e})]})}function w(e){const n=(0,j.A)();return(0,f.jsx)(y,{...e,children:u(e.children)},String(n))}},40927:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/add_jira_server-fc7ee0764020c99d9545ddbcef727395.png"},53899:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/jira-edp-portal-secret-e71d8869826cbd6227706d689320af26.png"},21907:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/jira_integration_ac-d6e7296d44381007076a7cc62378e67c.png"},3192:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/jira_versioning_type_example-33061d903a59fd43e955d2563e062187.png"},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var r=t(96540);const i={},a=r.createContext(i);function s(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);