"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[9827],{11502:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"developer-guide/artifacts-verification","title":"Verification of KubeRocketCI Artifacts","description":"This documentation outlines platform SLSA integration and guides verifying image authenticity and provenance.","source":"@site/docs/developer-guide/artifacts-verification.md","sourceDirName":"developer-guide","slug":"/developer-guide/artifacts-verification","permalink":"/docs/next/developer-guide/artifacts-verification","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/developer-guide/artifacts-verification.md","tags":[],"version":"current","lastUpdatedBy":"Sergiy Kulanov","lastUpdatedAt":1737708473000,"frontMatter":{},"sidebar":"developerGuideSidebar","previous":{"title":"Working With Documentation","permalink":"/docs/next/developer-guide/documentation-guide"},"next":{"title":"Quality Control","permalink":"/docs/next/developer-guide/autotest-coverage"}}');var a=n(74848),r=n(28453);const s={},c="Verification of KubeRocketCI Artifacts",o={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Release Assets",id:"release-assets",level:2},{value:"Verify Container Images",id:"verify-container-images",level:2},{value:"Verify Container Image With SLSA Attestations",id:"verify-container-image-with-slsa-attestations",level:2},{value:"Verify Release Pipeline",id:"verify-release-pipeline",level:2},{value:"Related Articles",id:"related-articles",level:2}];function l(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components},{Head:n}=i;return n||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.header,{children:(0,a.jsx)(i.h1,{id:"verification-of-kuberocketci-artifacts",children:"Verification of KubeRocketCI Artifacts"})}),"\n",(0,a.jsx)(n,{children:(0,a.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/developer-guide/artifacts-verification/"})}),"\n",(0,a.jsx)(i.p,{children:"This documentation outlines platform SLSA integration and guides verifying image authenticity and provenance."}),"\n",(0,a.jsxs)(i.p,{children:["Supply Chain Levels of ",(0,a.jsx)(i.a,{href:"https://slsa.dev/",children:"Software Assurance (SLSA)"})," is a framework for assessing and enhancing software supply chain security.\nSoftware Supply Chain Security is a critical aspect of modern software development and deployment. Supply Chain Levels of Software Assurance (SLSA) provides a framework for assessing and enhancing the security of your software supply chain."]}),"\n",(0,a.jsx)(i.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsxs)(i.p,{children:["Ensure you have installed ",(0,a.jsx)(i.a,{href:"https://docs.sigstore.dev/logging/installation/",children:"rekor-cli"})," and ",(0,a.jsx)(i.a,{href:"https://docs.sigstore.dev/cosign/system_config/installation/",children:"cosign"})," on your environment before proceeding."]}),"\n",(0,a.jsx)(i.hr,{}),"\n",(0,a.jsx)(i.h2,{id:"release-assets",children:"Release Assets"}),"\n",(0,a.jsx)(i.p,{children:"The table below represents a list of KubeRocketCI components with corresponding images that are signed and pushed to DockerHub:"}),"\n",(0,a.jsxs)(i.table,{children:[(0,a.jsx)(i.thead,{children:(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.th,{children:"Asset"}),(0,a.jsx)(i.th,{children:"Description"})]})}),(0,a.jsxs)(i.tbody,{children:[(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.td,{children:(0,a.jsx)(i.a,{href:"https://github.com/epam/edp-codebase-operator/tree/master",children:"codebase-operator"})}),(0,a.jsx)(i.td,{children:(0,a.jsx)(i.a,{href:"https://hub.docker.com/r/epamedp/cd-pipeline-operator",children:"Docker Image"})})]}),(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.td,{children:(0,a.jsx)(i.a,{href:"https://github.com/epam/edp-headlamp",children:"edp-headlamp"})}),(0,a.jsx)(i.td,{children:(0,a.jsx)(i.a,{href:"https://hub.docker.com/r/epamedp/edp-headlamp",children:"Docker Image"})})]}),(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.td,{children:(0,a.jsx)(i.a,{href:"https://github.com/epam/edp-tekton",children:"edp-tekton"})}),(0,a.jsx)(i.td,{children:(0,a.jsx)(i.a,{href:"https://hub.docker.com/r/epamedp/edp-tekton",children:"Docker Image"})})]}),(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.td,{children:(0,a.jsx)(i.a,{href:"https://github.com/epam/edp-cd-pipeline-operator",children:"cd-pipeline-operator"})}),(0,a.jsx)(i.td,{children:(0,a.jsx)(i.a,{href:"https://hub.docker.com/r/epamedp/cd-pipeline-operator",children:"Docker Image"})})]}),(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.td,{children:(0,a.jsx)(i.a,{href:"https://github.com/epam/edp-gerrit-operator",children:"gerrit-operator"})}),(0,a.jsx)(i.td,{children:(0,a.jsx)(i.a,{href:"https://hub.docker.com/r/epamedp/gerrit-operator",children:"Docker Image"})})]}),(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.td,{children:(0,a.jsx)(i.a,{href:"https://github.com/epam/edp-gerrit",children:"edp-gerrit"})}),(0,a.jsx)(i.td,{children:(0,a.jsx)(i.a,{href:"https://hub.docker.com/r/epamedp/edp-gerrit",children:"Docker Image"})})]})]})]}),"\n",(0,a.jsx)(i.hr,{}),"\n",(0,a.jsx)(i.h2,{id:"verify-container-images",children:"Verify Container Images"}),"\n",(0,a.jsxs)(i.p,{children:["KubeRocketCI's container images are signed using cosign with the ",(0,a.jsx)(i.a,{href:"https://raw.githubusercontent.com/epam/edp-install/master/cosign.pub",children:"cosign.pub"})," key for signing and transparency. You can verify a container image's signature by executing the ",(0,a.jsx)(i.code,{children:"cosign verify"})," command."]}),"\n",(0,a.jsxs)(i.p,{children:["To confirm the authenticity of the image, run the ",(0,a.jsx)(i.code,{children:"cosign verify"})," command. See the example below:"]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-bash",children:"cosign verify  --key https://raw.githubusercontent.com/epam/edp-install/master/cosign.pub epamedp/codebase-operator:2.20.0 | jq .\n"})}),"\n",(0,a.jsxs)(i.p,{children:["Verification for ",(0,a.jsx)(i.a,{href:"https://hub.docker.com/layers/epamedp/codebase-operator/2.20.0/images/sha256-36585a13b5b5ff5a15138e9d16cc74eb3aac4560b77be15161d3b3db25b89e1d?context=repo",children:"epamedp/codebase-operator:2.20.0"}),":"]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-bash",children:'Verification for index.docker.io/epamedp/codebase-operator:2.20.0\nThe following checks were performed on each of these signatures:\n  - The cosign claims were validated\n  - The claims were present in the transparency log\n  - The signatures were integrated into the transparency log when the certificate was valid\n  - The signatures were verified against the specified public key\n[\n  {\n    "critical": {\n      "identity": {\n        "docker-reference": "index.docker.io/epamedp/codebase-operator"\n      },\n      "image": {\n        "docker-manifest-digest": "sha256:36585a13b5b5ff5a15138e9d16cc74eb3aac4560b77be15161d3b3db25b89e1d"\n      },\n      "type": "cosign container image signature"\n    },\n    "optional": null\n  }\n]\n'})}),"\n",(0,a.jsx)(i.h2,{id:"verify-container-image-with-slsa-attestations",children:"Verify Container Image With SLSA Attestations"}),"\n",(0,a.jsxs)(i.p,{children:["An ",(0,a.jsx)(i.a,{href:"https://slsa.dev/",children:"SLSA"})," Level 3 provenance is verified using. The following command will verify the signature of an attestation and how it was issued. It will contain the payloadType, payload, and signature."]}),"\n",(0,a.jsxs)(i.p,{children:["Run the ",(0,a.jsx)(i.code,{children:"cosign verify-attestation"})," command using the ",(0,a.jsx)(i.a,{href:"https://raw.githubusercontent.com/epam/edp-install/master/cosign.pub",children:"cosign.pub"}),":"]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-bash",children:"cosign verify-attestation --key https://raw.githubusercontent.com/epam/edp-install/master/cosign.pub --type slsaprovenance epamedp/codebase-operator:2.20.0 | jq .\n"})}),"\n",(0,a.jsxs)(i.p,{children:["Verification for ",(0,a.jsx)(i.a,{href:"https://hub.docker.com/layers/epamedp/codebase-operator/2.20.0/images/sha256-36585a13b5b5ff5a15138e9d16cc74eb3aac4560b77be15161d3b3db25b89e1d?context=repo",children:"epamedp/codebase-operator:2.20.0"}),":"]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-bash",children:'Verification for epamedp/codebase-operator:2.20.0\nThe following checks were performed on each of these signatures:\n  - The cosign claims were validated\n  - The claims were present in the transparency log\n  - The signatures were integrated into the transparency log when the certificate was valid\n  - The signatures were verified against the specified public key\n{\n  "payloadType": "application/vnd.in-toto+json",\n  "payload": "eyJfdHlwZSI6Imh0dHBzOi8vaW4tdG90by5pby9TdGF0ZW1lbnQvdjAuMSIsInByZWRpY2F0ZVR5cGUiOiJodHRwczovL3Nsc2EuZGV2L3Byb3ZlbmFuY2UvdjAuMiIsInN1YmplY3QiOlt7Im5hbWUiOiJpbmRleC5kb2NrZXIuaW8vZXBhbWVkcC9jb2RlYmFzZS1vcGVyYXRvciIsImRpZ2VzdCI6eyJzaGEyNTYiOiIzNjU4NWExM2I1YjVmZjVhMTUxMzhlOWQxNmNjNzRlYjNhYWM0NTYwYjc3YmUxNTE2MWQzYjNkYjI1Yjg5ZTFkIn19XSwicHJlZGljYXRlIjp7ImJ1aWxkZXIiOnsiaWQiOiJodHRwczovL3Rla3Rvbi5kZXYvY2hhaW5zL3YyIn0sImJ1aWxkVHlwZSI6InRla3Rvbi5kZXYvdjFiZXRhMS9UYXNrUnVuIiwiaW52b2NhdGlvbiI6eyJjb25maWdTb3VyY2UiOnt9LCJwYXJhbWV0ZXJzIjp7IkJVSUxERVJfSU1BR0UiOiJnY3IuaW8va2FuaWtvLXByb2plY3QvZXhlY3V0b3I6djEuMTIuMS1kZWJ1ZyIsIkNPTlRFWFQiOiIuLyIsIkRPQ0tFUkZJTEUiOiJEb2NrZXJmaWxlIiwiSU1BR0UiOiJlcGFtZWRwL2NvZGViYXNlLW9wZXJhdG9yOjIuMjAuMCIsIklNQUdFX1RBUiI6ImNvZGViYXNlLW9wZXJhdG9yXzIuMjAuMCJ9LCJlbnZpcm9ubWVudCI6eyJhbm5vdGF0aW9ucyI6eyJtZXRhLmhlbG0uc2gvcmVsZWFzZS1uYW1lIjoiZWRwLWN1c3RvbS1waXBlbGluZXMiLCJtZXRhLmhlbG0uc2gvcmVsZWFzZS1uYW1lc3BhY2UiOiJlZHAtZGVsaXZlcnkiLCJwaXBlbGluZS50ZWt0b24uZGV2L2FmZmluaXR5LWFzc2lzdGFudCI6ImFmZmluaXR5LWFzc2lzdGFudC1iZjRkNzRkMWM0IiwicGlwZWxpbmUudGVrdG9uLmRldi9yZWxlYXNlIjoiMjI5OWIxNSIsInRla3Rvbi5kZXYvY2F0ZWdvcmllcyI6IkltYWdlIEJ1aWxkIiwidGVrdG9uLmRldi9kaXNwbGF5TmFtZSI6IkJ1aWxkIGFuZCB1cGxvYWQgY29udGFpbmVyIGltYWdlIHVzaW5nIEthbmlrbyIsInRla3Rvbi5kZXYvcGlwZWxpbmVzLm1pblZlcnNpb24iOiIwLjE3LjAiLCJ0ZWt0b24uZGV2L3BsYXRmb3JtcyI6ImxpbnV4L2FtZDY0IiwidGVrdG9uLmRldi90YWdzIjoiaW1hZ2UtYnVpbGQifSwibGFiZWxzIjp7ImFwcC5rdWJlcm5ldGVzLmlvL21hbmFnZWQtYnkiOiJIZWxtIiwiYXBwLmt1YmVybmV0ZXMuaW8vdmVyc2lvbiI6IjAuOC4wIiwiaGVsbS5zaC9jaGFydCI6ImVkcC1jdXN0b20tcGlwZWxpbmVzLTAuOC4wIiwiazhzbGVucy1lZGl0LXJlc291cmNlLXZlcnNpb24iOiJ2MSIsInRla3Rvbi5kZXYvbWVtYmVyT2YiOiJ0YXNrcyIsInRla3Rvbi5kZXYvcGlwZWxpbmUiOiJnZXJyaXQtb3BlcmF0b3JzLWFwcC1yZWxlYXNlLWVkcCIsInRla3Rvbi5kZXYvcGlwZWxpbmVSdW4iOiJlZHAtY29kZWJhc2Utb3BlcmF0b3ItcmVsZWFzZSIsInRla3Rvbi5kZXYvcGlwZWxpbmVUYXNrIjoia2FuaWtvLWJ1aWxkIiwidGVrdG9uLmRldi90YXNrIjoia2FuaWtvLXJlbGVhc2UifX19LCJidWlsZENvbmZpZyI6eyJzdGVwcyI6W3siZW50cnlQb2ludCI6Ii9rYW5pa28vZXhlY3V0b3IgXFxcbiAgLS1kb2NrZXJmaWxlPS93b3Jrc3BhY2Uvc291cmNlL0RvY2tlcmZpbGUgXFxcbiAgLS1jb250ZXh0PS93b3Jrc3BhY2Uvc291cmNlLy4vIFxcXG4gIC0tZGVzdGluYXRpb249ZXBhbWVkcC9jb2RlYmFzZS1vcGVyYXRvcjoyLjIwLjAgXFxcbiAgLS1kaWdlc3QtZmlsZT0vdGVrdG9uL3Jlc3VsdHMvSU1BR0VfRElHRVNUIFxcXG4gIC0tdGFyLXBhdGg9Y29kZWJhc2Utb3BlcmF0b3JfMi4yMC4wLnRhciBcXFxuIiwiYXJndW1lbnRzIjpudWxsLCJlbnZpcm9ubWVudCI6eyJjb250YWluZXIiOiJidWlsZC1hbmQtcHVzaCIsImltYWdlIjoib2NpOi8vZ2NyLmlvL2thbmlrby1wcm9qZWN0L2V4ZWN1dG9yQHNoYTI1NjphN2VhOWY2OWQ3N2Q3ZTdhMGVhODIxZjE1MDY5YmU0NTQyMGE1MzZmODFhYjU3ODdhOTg4NjU5ZTQ4YzI1Mzc3In0sImFubm90YXRpb25zIjpudWxsfSx7ImVudHJ5UG9pbnQiOiJzZXQgLWVcbmltYWdlPVwiZXBhbWVkcC9jb2RlYmFzZS1vcGVyYXRvcjoyLjIwLjBcIlxuZWNobyAtbiBcIiR7aW1hZ2V9XCIgfCB0ZWUgXCIvdGVrdG9uL3Jlc3VsdHMvSU1BR0VfVVJMXCJcbiIsImFyZ3VtZW50cyI6bnVsbCwiZW52aXJvbm1lbnQiOnsiY29udGFpbmVyIjoid3JpdGUtdXJsIiwiaW1hZ2UiOiJvY2k6Ly9kb2NrZXIuaW8vbGlicmFyeS9hbHBpbmVAc2hhMjU2OjcxNDRmN2JhYjNkNGMyNjQ4ZDdlNTk0MDlmMTVlYzUyYTE4MDA2YTEyOGM3MzNmY2ZmMjBkM2E0YTU0YmE0NGEifSwiYW5ub3RhdGlvbnMiOm51bGx9XX0sIm1ldGFkYXRhIjp7ImJ1aWxkU3RhcnRlZE9uIjoiMjAyMy0xMS0wM1QxMzozMDo1NVoiLCJidWlsZEZpbmlzaGVkT24iOiIyMDIzLTExLTAzVDEzOjMxOjE1WiIsImNvbXBsZXRlbmVzcyI6eyJwYXJhbWV0ZXJzIjpmYWxzZSwiZW52aXJvbm1lbnQiOmZhbHNlLCJtYXRlcmlhbHMiOmZhbHNlfSwicmVwcm9kdWNpYmxlIjpmYWxzZX0sIm1hdGVyaWFscyI6W3sidXJpIjoib2NpOi8vZ2NyLmlvL2thbmlrby1wcm9qZWN0L2V4ZWN1dG9yIiwiZGlnZXN0Ijp7InNoYTI1NiI6ImE3ZWE5ZjY5ZDc3ZDdlN2EwZWE4MjFmMTUwNjliZTQ1NDIwYTUzNmY4MWFiNTc4N2E5ODg2NTllNDhjMjUzNzcifX0seyJ1cmkiOiJvY2k6Ly9kb2NrZXIuaW8vbGlicmFyeS9hbHBpbmUiLCJkaWdlc3QiOnsic2hhMjU2IjoiNzE0NGY3YmFiM2Q0YzI2NDhkN2U1OTQwOWYxNWVjNTJhMTgwMDZhMTI4YzczM2ZjZmYyMGQzYTRhNTRiYTQ0YSJ9fV19fQ==",\n  "signatures": [\n    {\n      "keyid": "SHA256:7E2nAQnycq4vfPlzmLZGzpK/Vr6oXKqqGokDyrBSLck",\n      "sig": "MEUCIAZLrA/wTkqmnCZXh85R9Y/Ue5f8wuGgjLMYdoFw9GRLAiEA/sE598EX5fppqbry+xvE+aap8+qHPioOin8t6Ttzx3k="\n    }\n  ]\n}\n'})}),"\n",(0,a.jsxs)(i.p,{children:["For more details about attestation, please refer to the official ",(0,a.jsx)(i.a,{href:"https://docs.sigstore.dev/cosign/verifying/verify/",children:"cosign documentation"})," page."]}),"\n",(0,a.jsx)(i.h2,{id:"verify-release-pipeline",children:"Verify Release Pipeline"}),"\n",(0,a.jsxs)(i.p,{children:["Within each release component, you will discover a ",(0,a.jsx)(i.a,{href:"https://search.sigstore.dev/?uuid=24296fb24b8ad77a671b24f6b83f79e46fe5214cde46ed045ceba35d640a7e017cbc5524e90329ff",children:"Rekor UUID"}),", which serves to validate the flow of the release pipeline. Execute the following command to obtain comprehensive information about the release pipeline of ",(0,a.jsx)(i.a,{href:"https://github.com/epam/edp-codebase-operator/releases/tag/v2.20.0",children:"codebase-operator"})," with UUID:"]}),"\n",(0,a.jsxs)(i.p,{children:[(0,a.jsx)(i.code,{children:"24296fb24b8ad77a671b24f6b83f79e46fe5214cde46ed045ceba35d640a7e017cbc5524e90329ff"}),":"]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-bash",children:"rekor-cli get --uuid 24296fb24b8ad77a671b24f6b83f79e46fe5214cde46ed045ceba35d640a7e017cbc5524e90329ff --format json | jq -r .Attestation | jq .\n"})}),"\n",(0,a.jsx)(i.p,{children:"The result:"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-bash",children:'{\n  "_type": "https://in-toto.io/Statement/v0.1",\n  "predicateType": "https://slsa.dev/provenance/v0.2",\n  "subject": [\n    {\n      "name": "index.docker.io/epamedp/codebase-operator",\n      "digest": {\n        "sha256": "36585a13b5b5ff5a15138e9d16cc74eb3aac4560b77be15161d3b3db25b89e1d"\n      }\n    }\n  ],\n  "predicate": {\n    "builder": {\n      "id": "https://tekton.dev/chains/v2"\n    },\n    "buildType": "tekton.dev/v1beta1/TaskRun",\n    "invocation": {\n      "configSource": {},\n      "parameters": {\n        "BUILDER_IMAGE": "gcr.io/kaniko-project/executor:v1.12.1-debug",\n        "CONTEXT": "./",\n        "DOCKERFILE": "Dockerfile",\n        "IMAGE": "epamedp/codebase-operator:2.20.0",\n        "IMAGE_TAR": "codebase-operator_2.20.0"\n      },\n      "environment": {\n        "annotations": {\n            ...\n        },\n        "labels": {\n            ...\n        }\n      }\n    },\n    "buildConfig": {\n      "steps": [\n        {\n          "entryPoint": "/kaniko/executor \\\\\\n  --dockerfile=/workspace/source/Dockerfile \\\\\\n  --context=/workspace/source/./ \\\\\\n  --destination=epamedp/codebase-operator:2.20.0 \\\\\\n  --digest-file=/tekton/results/IMAGE_DIGEST \\\\\\n  --tar-path=codebase-operator_2.20.0.tar \\\\\\n",\n          "arguments": null,\n          "environment": {\n            "container": "build-and-push",\n            "image": "oci://gcr.io/kaniko-project/executor@sha256:a7ea9f69d77d7e7a0ea821f15069be45420a536f81ab5787a988659e48c25377"\n          },\n          "annotations": null\n        },\n        {\n          "entryPoint": "set -e\\nimage=\\"epamedp/codebase-operator:2.20.0\\"\\necho -n \\"${image}\\" | tee \\"/tekton/results/IMAGE_URL\\"\\n",\n          "arguments": null,\n          "environment": {\n            "container": "write-url",\n            "image": "oci://docker.io/library/alpine@sha256:7144f7bab3d4c2648d7e59409f15ec52a18006a128c733fcff20d3a4a54ba44a"\n          },\n          "annotations": null\n        }\n      ]\n    },\n    "metadata": {\n        ...\n    },\n    "materials": [\n      {\n        "uri": "oci://gcr.io/kaniko-project/executor",\n        "digest": {\n          "sha256": "a7ea9f69d77d7e7a0ea821f15069be45420a536f81ab5787a988659e48c25377"\n        }\n      },\n      {\n        "uri": "oci://docker.io/library/alpine",\n        "digest": {\n          "sha256": "7144f7bab3d4c2648d7e59409f15ec52a18006a128c733fcff20d3a4a54ba44a"\n        }\n      }\n    ]\n  }\n}\n'})}),"\n",(0,a.jsx)(i.p,{children:"By signing all our artifacts, we assure you that they are trustworthy. This guide is indispensable for developers and administrators to enhance their software's reliability and meet modern security standards. The adoption of SLSA will bring you confidence while using the platform."}),"\n",(0,a.jsx)(i.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:(0,a.jsx)(i.a,{href:"https://docs.sigstore.dev/cosign/verifying/verify/",children:"In-Toto Attestations"})}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>s,x:()=>c});var t=n(96540);const a={},r=t.createContext(a);function s(e){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(r.Provider,{value:i},e.children)}}}]);