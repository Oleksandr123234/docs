"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[66962],{399:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>a,default:()=>f,frontMatter:()=>r,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"operator-guide/ci/notification-msteams","title":"Microsoft Teams Notification","description":"Configure Microsoft Teams notifications for Tekton pipelines, ensuring prompt status updates in the associated channel.","source":"@site/versioned_docs/version-3.10/operator-guide/ci/notification-msteams.md","sourceDirName":"operator-guide/ci","slug":"/operator-guide/ci/notification-msteams","permalink":"/docs/3.10/operator-guide/ci/notification-msteams","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/operator-guide/ci/notification-msteams.md","tags":[],"version":"3.10","lastUpdatedBy":"Oleksandr_Stepanov@epam.com","lastUpdatedAt":1741605107000,"frontMatter":{"title":"Microsoft Teams Notification","sidebar_label":"Microsoft Teams Notification","description":"Configure Microsoft Teams notifications for Tekton pipelines, ensuring prompt status updates in the associated channel."},"sidebar":"operatorGuideSidebar","previous":{"title":"Tekton Long-Term Log Storage","permalink":"/docs/3.10/operator-guide/ci/tekton-long-term-storage"},"next":{"title":"CI Pipeline for Terraform","permalink":"/docs/3.10/operator-guide/ci/ci-pipeline-terraform"}}');var o=n(74848),s=n(28453);const r={title:"Microsoft Teams Notification",sidebar_label:"Microsoft Teams Notification",description:"Configure Microsoft Teams notifications for Tekton pipelines, ensuring prompt status updates in the associated channel."},a="Microsoft Teams Notification",c={},d=[{value:"Create Incoming WebHook",id:"create-incoming-webhook",level:2},{value:"Customize Notification Message",id:"customize-notification-message",level:2},{value:"Related Articles",id:"related-articles",level:2}];function l(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{Head:t}=i;return t||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.header,{children:(0,o.jsx)(i.h1,{id:"microsoft-teams-notification",children:"Microsoft Teams Notification"})}),"\n",(0,o.jsx)(t,{children:(0,o.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/operator-guide/ci/notification-msteams"})}),"\n",(0,o.jsx)(i.p,{children:"This section describes how to set up and add notification status to Tekton pipelines by sending pipeline status to the Microsoft Teams channel."}),"\n",(0,o.jsx)(i.h2,{id:"create-incoming-webhook",children:"Create Incoming WebHook"}),"\n",(0,o.jsx)(i.p,{children:"To create a link to Incoming Webhook for the Microsoft Teams channel, follow the steps below:"}),"\n",(0,o.jsxs)(i.ol,{children:["\n",(0,o.jsxs)(i.li,{children:["\n",(0,o.jsxs)(i.p,{children:["Open the channel which will be receiving notifications and click the ",(0,o.jsx)(i.code,{children:"\u2022\u2022\u2022"})," button from the upper-right corner. Select ",(0,o.jsx)(i.strong,{children:"Connectors"})," in the dropdown menu:"]}),"\n",(0,o.jsx)(i.p,{children:(0,o.jsx)(i.img,{alt:"Menu",src:n(62678).A+"",title:"Microsoft Teams menu",width:"1460",height:"962"})}),"\n"]}),"\n",(0,o.jsxs)(i.li,{children:["\n",(0,o.jsxs)(i.p,{children:["In the search field, type ",(0,o.jsx)(i.strong,{children:"Incoming Webhook"})," and click ",(0,o.jsx)(i.strong,{children:"Configure"}),":\n",(0,o.jsx)(i.img,{alt:"Connectors",src:n(80733).A+"",title:"Connectors",width:"824",height:"661"})]}),"\n"]}),"\n",(0,o.jsxs)(i.li,{children:["\n",(0,o.jsxs)(i.p,{children:["Provide a name and upload an image for the webhook if necessary. Click ",(0,o.jsx)(i.strong,{children:"Create"}),":\n",(0,o.jsx)(i.img,{alt:"Connectors setup",src:n(88434).A+"",title:"Connectors setup",width:"824",height:"733"})]}),"\n"]}),"\n",(0,o.jsxs)(i.li,{children:["\n",(0,o.jsxs)(i.p,{children:["Copy and save the unique ",(0,o.jsx)(i.code,{children:"WebHookURL"})," presented in the dialog. Click ",(0,o.jsx)(i.code,{children:"Done"}),":\n",(0,o.jsx)(i.img,{alt:"WebhookURL",src:n(89621).A+"",title:"WebHookURL",width:"690",height:"710"})]}),"\n"]}),"\n",(0,o.jsxs)(i.li,{children:["\n",(0,o.jsxs)(i.p,{children:["Create a secret with the ",(0,o.jsx)(i.code,{children:"<WebHookURL>"})," within the krci namespace."]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-yaml",children:"kubectl -n krci create secret generic microsoft-teams-webhook-url-secret \\\n--from-literal=url=<webhookURL>\n"})}),"\n"]}),"\n",(0,o.jsxs)(i.li,{children:["\n",(0,o.jsxs)(i.p,{children:["Add the notification task to the pipeline and add the code below in ",(0,o.jsx)(i.code,{children:"final-block"})," in the pipeline and save:"]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-yaml",children:'{{ include "send-to-microsoft-teams-build" . | nindent 4 }}\n'})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(i.h2,{id:"customize-notification-message",children:"Customize Notification Message"}),"\n",(0,o.jsx)(i.p,{children:"To make notification message informative, relevant text should be added to the message. Here are the steps to implement it:"}),"\n",(0,o.jsxs)(i.ol,{children:["\n",(0,o.jsxs)(i.li,{children:["\n",(0,o.jsx)(i.p,{children:"Create a new pipeline with a unique name or modify your custom pipeline created before."}),"\n"]}),"\n",(0,o.jsxs)(i.li,{children:["\n",(0,o.jsxs)(i.p,{children:["Add the task below in the ",(0,o.jsx)(i.code,{children:"finally"})," block with a unique name. Edit the ",(0,o.jsx)(i.code,{children:"params.message"})," value if necessary:"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(i.admonition,{title:"Task send-to-microsoft-teams",type:"note",children:(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-yaml",children:"- name: microsoft-teams-pipeline-status-notification-failed\n  params:\n  - name: webhook-url-secret\n    value: microsoft-teams-webhook-url-secret\n  - name: webhook-url-secret-key\n    value: url\n  - name: message\n    value: >-\n      Build Failed project: $(params.CODEBASE_NAME)<br /> branch: $(params.git-source-revision)<br /> pipeline: <a href=$(params.pipelineUrl)>$(context.pipelineRun.name)</a><br /> commit message: $(params.COMMIT_MESSAGE)\n  taskRef:\n    kind: Task\n    name: send-to-microsoft-teams\n  when:\n  - input: $(tasks.status)\n    operator: in\n    values:\n    - Failed\n    - PipelineRunTimeout\n"})})}),"\n",(0,o.jsx)(i.p,{children:"After customization, the following message is supposed to appear in the channel when failing pipelines:"}),"\n",(0,o.jsx)(i.p,{children:(0,o.jsx)(i.img,{alt:"Notification example",src:n(71059).A+"",title:"Notification example",width:"1020",height:"141"})}),"\n",(0,o.jsx)(i.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:(0,o.jsx)(i.a,{href:"/docs/3.10/operator-guide/install-kuberocketci",children:"Install KubeRocketCI"})}),"\n",(0,o.jsx)(i.li,{children:(0,o.jsx)(i.a,{href:"/docs/3.10/operator-guide/install-tekton",children:"Install Tekton"})}),"\n"]})]})}function f(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},80733:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/ms-notification-con-ea3625ac40ac5b5c900da873408c2315.png"},71059:(e,i,n)=>{n.d(i,{A:()=>t});const t="data:image/png;base64,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"},89621:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/ms-notification-settings-done-b7e73f7237e8d179d1ad57dec30530fa.png"},88434:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/ms-notification-settings-6911877de832819606134e58f35d60f5.png"},62678:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/ms-notification-144ab9b460d0968679fdfba70222709e.png"},28453:(e,i,n)=>{n.d(i,{R:()=>r,x:()=>a});var t=n(96540);const o={},s=t.createContext(o);function r(e){const i=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(s.Provider,{value:i},e.children)}}}]);