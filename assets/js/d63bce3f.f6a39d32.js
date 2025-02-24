"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[15885],{95575:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"operator-guide/devsecops/overview","title":"Overview","description":"KubeRocketCI emphasizes the importance of incorporating security practices into the software development lifecycle through the DevSecOps approach. By integrating a diverse range of open-source and enterprise security tools tailored to specific functionalities, organizations can ensure efficient and secure software development. These tools, combined with fundamental DevSecOps principles such as collaboration, continuous security, and automation, contribute to the identification and remediation of vulnerabilities early in the process, minimizes risks, and fosters a security-first culture across the organization.","source":"@site/versioned_docs/version-3.9/operator-guide/devsecops/overview.md","sourceDirName":"operator-guide/devsecops","slug":"/operator-guide/devsecops/overview","permalink":"/docs/3.9/operator-guide/devsecops/overview","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/operator-guide/devsecops/overview.md","tags":[],"version":"3.9","lastUpdatedBy":"Sergiy Kulanov","lastUpdatedAt":1738923070000,"frontMatter":{},"sidebar":"operatorGuideSidebar","previous":{"title":"External Secrets Operator Integration","permalink":"/docs/3.9/operator-guide/secrets-management/external-secrets-operator-integration"},"next":{"title":"Integrate DependencyTrack","permalink":"/docs/3.9/operator-guide/devsecops/dependency-track"}}');var s=i(74848),r=i(28453);const o={},a="Overview",c={},d=[{value:"Supported Solutions",id:"supported-solutions",level:2},{value:"Integrated Tools",id:"integrated-tools",level:2},{value:"DefectDojo",id:"defectdojo",level:3},{value:"OWASP Dependency Track",id:"owasp-dependency-track",level:3},{value:"Gitleaks",id:"gitleaks",level:3},{value:"Trivy",id:"trivy",level:3},{value:"Grype",id:"grype",level:3},{value:"Tfsec",id:"tfsec",level:3},{value:"Checkov",id:"checkov",level:3},{value:"Cdxgen",id:"cdxgen",level:3},{value:"Semgrep CLI",id:"semgrep-cli",level:3},{value:"Clair",id:"clair",level:3},{value:"OpenVAS",id:"openvas",level:3},{value:"TruffleHog",id:"trufflehog",level:3},{value:"Git-secrets",id:"git-secrets",level:3},{value:"ELK Stack",id:"elk-stack",level:3},{value:"Loki",id:"loki",level:3},{value:"OpenSearch",id:"opensearch",level:3},{value:"OWASP Dependency-Check",id:"owasp-dependency-check",level:3},{value:"OWASP Zed Attack Proxy (ZAP)",id:"owasp-zed-attack-proxy-zap",level:3}];function l(e){const t={a:"a",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components},{Head:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"overview",children:"Overview"})}),"\n",(0,s.jsx)(n,{children:(0,s.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/operator-guide/devsecops/overview/"})}),"\n",(0,s.jsx)(t.p,{children:"KubeRocketCI emphasizes the importance of incorporating security practices into the software development lifecycle through the DevSecOps approach. By integrating a diverse range of open-source and enterprise security tools tailored to specific functionalities, organizations can ensure efficient and secure software development. These tools, combined with fundamental DevSecOps principles such as collaboration, continuous security, and automation, contribute to the identification and remediation of vulnerabilities early in the process, minimizes risks, and fosters a security-first culture across the organization."}),"\n",(0,s.jsx)(t.h2,{id:"supported-solutions",children:"Supported Solutions"}),"\n",(0,s.jsx)(t.p,{children:"The below table categorizes various open-source and enterprise security tools based on their specific functionalities. It provides a comprehensive view of the available options for each security aspect. This classification facilitates informed decision-making when selecting and integrating security tools into a development pipeline, ensuring an efficient and robust security stance. KubeRocketCI supports the integration of both open-source and enterprise security tools, providing a flexible and versatile solution for security automation. See table below for more details."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Functionality"}),(0,s.jsx)(t.th,{children:"Open-Source Tools (integrated in Pipelines)"}),(0,s.jsx)(t.th,{children:"Enterprise Tools (available for Integration)"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Hardcoded Credentials Scanner"}),(0,s.jsx)(t.td,{children:"TruffleHog, GitLeaks, Git-secrets"}),(0,s.jsx)(t.td,{children:"GitGuardian, SpectralOps, Bridgecrew"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Static Application Security Testing"}),(0,s.jsx)(t.td,{children:"SonarQube, Semgrep CLI"}),(0,s.jsx)(t.td,{children:"Veracode, Checkmarx, Coverity"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Software Composition Analysis"}),(0,s.jsx)(t.td,{children:"OWASP Dependency-Check, cdxgen"}),(0,s.jsx)(t.td,{children:"Black Duck Hub, Mend, Snyk"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Container Security"}),(0,s.jsx)(t.td,{children:"Trivy, Grype, Clair"}),(0,s.jsx)(t.td,{children:"Aqua Security, Sysdig Secure, Snyk"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Infrastructure as Code Security"}),(0,s.jsx)(t.td,{children:"Checkov, Tfsec"}),(0,s.jsx)(t.td,{children:"Bridgecrew, Prisma Cloud, Snyk"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Dynamic Application Security Testing"}),(0,s.jsx)(t.td,{children:"OWASP Zed Attack Proxy"}),(0,s.jsx)(t.td,{children:"Fortify WebInspect, Rapid7 InsightAppSec, Checkmarx"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Continuous Monitoring and Logging"}),(0,s.jsx)(t.td,{children:"ELK Stack, OpenSearch, Loki"}),(0,s.jsx)(t.td,{children:"Splunk, Datadog"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Security Audits and Assessments"}),(0,s.jsx)(t.td,{children:"OpenVAS"}),(0,s.jsx)(t.td,{children:"Tenable Nessus, QualysGuard, BurpSuite Professional"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Vulnerability Management and Reporting"}),(0,s.jsx)(t.td,{children:"DefectDojo, OWASP Dependency-Track"}),(0,s.jsx)(t.td,{children:"Metasploit"})]})]})]}),"\n",(0,s.jsx)(t.p,{children:"See visualization the scheme below:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Security tools in KubeRocketCI",src:i(32296).A+"",title:"Security tools in KubeRocketCI",width:"2369",height:"921"})}),"\n",(0,s.jsx)(t.h2,{id:"integrated-tools",children:"Integrated Tools"}),"\n",(0,s.jsx)(t.p,{children:"For obtaining and managing report post scanning, deployment of various vulnerability management systems and security tools is required. These include:"}),"\n",(0,s.jsx)(t.h3,{id:"defectdojo",children:"DefectDojo"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://www.defectdojo.com/",children:"DefectDojo"})," is a comprehensive vulnerability management and security orchestration platform facilitating the handling of uploaded security reports. Examine the prerequisites and fundamental instructions for ",(0,s.jsx)(t.a,{href:"/docs/3.9/operator-guide/devsecops/defectdojo",children:"installing DefectDojo"})," on Kubernetes or OpenShift platforms."]}),"\n",(0,s.jsx)(t.h3,{id:"owasp-dependency-track",children:"OWASP Dependency Track"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://dependencytrack.org/",children:"Dependency Track"})," is an intelligent Software Composition Analysis (SCA) platform that provides a comprehensive solution for managing vulnerabilities in third-party and open-source components."]}),"\n",(0,s.jsx)(t.h3,{id:"gitleaks",children:"Gitleaks"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://github.com/gitleaks/gitleaks",children:"Gitleaks"})," is a versatile SAST tool used to scan Git repositories for hardcoded secrets, such as passwords and API keys, to prevent potential data leaks and unauthorized access."]}),"\n",(0,s.jsx)(t.h3,{id:"trivy",children:"Trivy"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://github.com/aquasecurity/trivy",children:"Trivy"})," is a simple and comprehensive vulnerability scanner for containers and other artifacts, providing insight into potential security issues across multiple ecosystems. Trivy can be seamlessly integrated into CI/CD pipelines or utilized as part of Harbor, enhancing the security posture of your development and deployment environments."]}),"\n",(0,s.jsx)(t.h3,{id:"grype",children:"Grype"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://github.com/anchore/grype",children:"Grype"})," is a fast and reliable vulnerability scanner for container images and filesystems, maintaining an up-to-date vulnerability database for efficient and accurate scanning."]}),"\n",(0,s.jsx)(t.h3,{id:"tfsec",children:"Tfsec"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://github.com/aquasecurity/tfsec",children:"Tfsec"})," is an effective Infrastructure as Code (IaC) security scanner, tailored specifically for reviewing Terraform templates. It helps identify potential security issues related to misconfigurations and non-compliant practices, enabling developers to address vulnerabilities and ensure secure infrastructure deployment."]}),"\n",(0,s.jsx)(t.h3,{id:"checkov",children:"Checkov"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://github.com/bridgecrewio/checkov",children:"Checkov"})," is a robust static code analysis tool designed for IaC security, supporting various IaC frameworks such as Terraform, CloudFormation, and Kubernetes. It assists in detecting and mitigating security and compliance misconfigurations, promoting best practices and adherence to industry standards across the infrastructure."]}),"\n",(0,s.jsx)(t.h3,{id:"cdxgen",children:"Cdxgen"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://github.com/CycloneDX/cdxgen",children:"Cdxgen"})," is a lightweight and efficient tool for generating Software Bill of Materials (SBOM) using CycloneDX, a standard format for managing component inventory. It helps organizations maintain an up-to-date record of all software components, their versions, and related vulnerabilities, streamlining monitoring and compliance within the software supply chain."]}),"\n",(0,s.jsx)(t.h3,{id:"semgrep-cli",children:"Semgrep CLI"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://github.com/semgrep/semgrep",children:"Semgrep CLI"})," is a versatile and user-friendly command-line interface for the Semgrep security scanner, enabling developers to perform Static Application Security Testing (SAST) for various programming languages. It focuses on detecting and preventing potential security vulnerabilities, code quality issues, and custom anti-patterns, ensuring secure and efficient code development."]}),"\n",(0,s.jsx)(t.h3,{id:"clair",children:"Clair"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://github.com/quay/clair",children:"Clair"})," is an open-source container security tool that is designed to help you assess the security of container images and identify vulnerabilities within them. It is particularly useful for organizations using container orchestration platforms such as Kubernetes."]}),"\n",(0,s.jsx)(t.h3,{id:"openvas",children:"OpenVAS"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://openvas.org/",children:"OpenVAS"})," is an open-source network vulnerability scanner and security management tool. It is designed to identify and assess security vulnerabilities in computer systems, networks, and applications. OpenVAS provides a comprehensive set of features for vulnerability scanning, assessment, and management."]}),"\n",(0,s.jsx)(t.h3,{id:"trufflehog",children:"TruffleHog"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://github.com/trufflesecurity/trufflehog",children:"TruffleHog"})," is an open-source Python tool designed for finding and identifying potentially sensitive and secret information in the source code and commit history of Git repositories. It's particularly useful for locating unintentional disclosures of confidential data, such as API keys, passwords, and other credentials, that might have been inadvertently committed to a code repository."]}),"\n",(0,s.jsx)(t.h3,{id:"git-secrets",children:"Git-secrets"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://github.com/awslabs/git-secrets",children:"Git-secrets"})," is an open-source tool that helps prevent the accidental committing of secrets, sensitive information, and other types of confidential data into Git repositories. It is designed to enforce security best practices and reduce the risk of unintentional data exposure by scanning Git repositories for predefined secret patterns."]}),"\n",(0,s.jsx)(t.h3,{id:"elk-stack",children:"ELK Stack"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/docs/3.9/operator-guide/monitoring-and-observability/kibana-ilm-rollover",children:"ELK Stack"})," (Fluent Bit, Elasticsearch, Kibana) stack is used in Kubernetes instead of ELK because this stack provides us with the support for Logsight for Stage Verification and Incident Detection. In addition to it, Fluent Bit has a smaller memory fingerprint than Logstash. Fluent Bit has the Inputs, Parsers, Filters and Outputs plugins similarly to Logstash."]}),"\n",(0,s.jsx)(t.h3,{id:"loki",children:"Loki"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://github.com/Neo23x0/Loki",children:"Loki"})," is a log aggregation system and log processing system designed for cloud-native environments. It is part of the CNCF (Cloud Native Computing Foundation) and is often used alongside other CNCF projects like Prometheus for monitoring and observability."]}),"\n",(0,s.jsx)(t.h3,{id:"opensearch",children:"OpenSearch"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://opensearch.org/",children:"OpenSearch"})," is the flexible, scalable, open-source way to build solutions for data-intensive applications. Explore, enrich, and visualize your data with built-in performance, developer-friendly tools, and powerful integrations for machine learning, data processing, and more."]}),"\n",(0,s.jsx)(t.h3,{id:"owasp-dependency-check",children:"OWASP Dependency-Check"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://owasp.org/www-project-dependency-check/",children:"OWASP Dependency-Check"})," is a software composition analysis tool that helps identify and report known security vulnerabilities in project dependencies. It is particularly valuable for developers and organizations looking to secure their applications by identifying and addressing vulnerabilities in the libraries and components they use."]}),"\n",(0,s.jsx)(t.h3,{id:"owasp-zed-attack-proxy-zap",children:"OWASP Zed Attack Proxy (ZAP)"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://www.zaproxy.org/",children:"OWASP Zed Attack Proxy (ZAP)"})," is an security testing tool for finding vulnerabilities in web applications during the development and testing phases. ZAP is designed to help developers and security professionals identify and address security issues and potential vulnerabilities in web applications. It provides automated and manual testing capabilities, as well as a wide range of features for security testing."]})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},32296:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/security-tools-fc9f4ce22b928b6063b6fbf42048ddab.png"},28453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>a});var n=i(96540);const s={},r=n.createContext(s);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);