---

title: "Add Container Registry"
description: "Step-by-step guide on integrating and managing container registries within KubeRocketCI, enhancing artifact storage and deployment processes."
sidebar_label: "Add Container Registry"

---
<!-- markdownlint-disable MD025 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Add Container Registry

<head>
  <link rel="canonical" href="https://docs.kuberocketci.io/docs/user-guide/manage-container-registries" />
</head>

This guide provides instructions on integrating the container registry with the KubeRocketCI.

## Supported Registry Providers

The following table displays the registry services supported for both OpenShift and Kubernetes clusters.

|Container Registry|OpenShift|Kubernetes|
|:-:|:-:|:-:|
|AWS ECR|:white_check_mark:|:white_check_mark:|
|DockerHub|:white_check_mark:|:white_check_mark:|
|Harbor|:white_check_mark:|:white_check_mark:|
|Nexus|:white_check_mark:|:white_check_mark:|
|GitHub (GHCR)|:white_check_mark:|:white_check_mark:|

## Add Container Registry

Follow a three-step process to integrate a container registry in KubeRocketCI:

1. In the **Configuration** -> **Artifacts storage** -> **Registry** click the **+ Add Registry** button:

    ![Registry settings](../assets/operator-guide/container-registry-list.png "Registry settings")

2. Select **Registry Provider** and enter the required details.

3. Confirm settings by clicking the **Save** button.

    The required fields vary depending on which container registry is chosen:

    <Tabs
      defaultValue="ecr"
      values={[
        {label: 'AWS ECR', value: 'ecr'},
        {label: 'DockerHub', value: 'docker'},
        {label: 'Harbor', value: 'harbor'},
        {label: 'Nexus', value: 'nexus'},
        {label: 'GitHub', value: 'github'}
      ]}>

        <TabItem value="ecr">
          ![AWS ECR settings](../assets/operator-guide/container-registry-ecr.png "AWS ECR settings")

          |Fields|Description|
          |:-|:-|
          |Registry Endpoint|Format for the (AWS) Elastic Container Registry endpoint: xxxxxxxxxxxx.dkr.ecr.\<region\>.amazonaws.com. Where `xxxxxxxxxxxx` is your AWS account ID and `\<region\>` is where your ECR is hosted.|
          |Registry Space|The suffix project name in registry.|
          |AWS Region| The geographic area where the (AWS) Elastic Container Registry repository is hosted.|
          |Authentication/IRSA Role ARN|Specify the [IAM role](https://docs.aws.amazon.com/AmazonECR/latest/userguide/repository-policies.html) with a policy for interacting with ECR with your Kubernetes cluster.
        </TabItem>

        <TabItem value="docker">
          ![DockerHub settings](../assets/operator-guide/container-registry-dockerhub.png "DockerHub settings")

          |Fields|Description|
          |:-|:-|
          |Registry Space|The unique identifier/name of the user or company linked to your DockerHub account.|
          |User|The user account ID or community user account ID with push permission.|
          |Password/Token|Provide the [Password/Token](https://docs.docker.com/security/for-developers/access-tokens/) corresponding to your DockerHub account. It is recommended to use Token for security purposes.|
          |Checkbox/Use the Push Account's credentials|Check this to use the same account for pulling and pushing operations. If unchecked, please enter the user account ID and Password/Token for your DockerHub account or community user account ID with pull permission.|
        </TabItem>

        <TabItem value="harbor">
          ![Harbor settings](../assets/operator-guide/container-registry-harbor.png "Harbor settings")

          |Fields|Description|
          |:-|:-|
          |Registry Endpoint|Enter Harbor registry endpoint URL, for example, registry.example.com.|
          |Registry Space|The project name in registry.|
          |User|Provide the [robot account](../operator-guide/artifacts-management/harbor-integration.md#set-up-robot-account) name with push permissions.|
          |Password/Token|Provide the [secret](../operator-guide/artifacts-management/harbor-integration.md#set-up-robot-account) corresponding to your harbor account.|
          |Checkbox/Use the Push Account's credentials|Check this to use the same account for pulling and pushing operations. Provide the account name with pull permissions.|
        </TabItem>

        <TabItem value="nexus">
          ![Nexus settings](../assets/operator-guide/container-registry-nexus.png "Nexus settings")

          |Fields|Description|
          |:-|:-|
          |Registry Endpoint|Nexus service registry endpoint URL (e.g., image-registry.nexus-image-registry.svc:5000).|
          |Repository|Specify the Nexus repository that corresponds to your project.|
          |User|Provide the username with push permissions.|
          |Password/Token|Enter the confidential combination used for authenticating your access to the container registry.|
        </TabItem>

        <TabItem value="github">
          ![GitHub container registry settings](../assets/operator-guide/container-registry-github.png "GitHub container registry settings")

          |Fields|Description|
          |:-|:-|
          |Registry Space|The unique identifier/name of the user or company linked to your GitHub account.|
          |User|The user account ID or community user account ID with push permission.|
          |Password/Token|Provide the [Token](https://docs.github.com/en/enterprise-server@3.9/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens) corresponding to your  GitHub account. The minimal set of permissions required for the token is described in the [Manage Git Providers](../user-guide/add-git-server.md).|
          |Checkbox/Use the Push Account's credentials|Check this to use the same account for pulling and pushing operations. If unchecked, please enter the user account ID and Token for your GitHub account or community user account ID with pull permission.|
        </TabItem>
    </Tabs>

## Remove Container Registry

To remove container registry integration from KubeRocketCI, follow the steps below:

:::warning
    Proceed with caution, removing registry settings might disrupt your CI/CD process. All new components created after changing the registry such as Components and Environments will start working out of the box. To work with existing codebases and pipelines familiarize with the [change container registry guide](change-container-registry.md).
:::

  1. In the **Configuration** -> **Artifacts storage** -> **Registry**.

  2. Click the **Reset registry** button, type the `confirm` word and then click **Confirm**:

  ![Registry settings](../assets/operator-guide/container-registry-reset.png "Registry settings")

## Related Articles

* [Install KubeRocketCI](../operator-guide/install-kuberocketci.md)
* [Install Harbor](../operator-guide/artifacts-management/harbor-installation.md)
* [Change Container Registry](change-container-registry.md)
