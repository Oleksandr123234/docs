# Deploy Application From Feature Branch

## Overview

Deploying feature branches is crucial for testing activities, including manual testing of the product's functionality, running quality gates, and verifying dependencies or integrations with other components.

The KubeRocketCI platform enables the deployment of feature environments straight from feature branches. This guide offers comprehensive instructions for managing and deploying these branches.

### Preconditions

Before you start passing the use case, ensure to meet the following requirements:

- KubeRocketCI instance is [configured](../operator-guide/prerequisites.md) with [GitOps](../user-guide/gitops.md) repository.
- Developer has access to the KubeRocketCI instances using the [Single-Sign-On](../operator-guide/auth/platform-auth-model.md) approach or via token.
- Developer has access to the KubeRocketCI platform under the [Developer](../operator-guide/auth/platform-auth-model.md#keycloak-groups) role.
- Developer has merge permissions in [Bitbucket](../user-guide/gitops.md).
- Application you want to add a branch to is created in KubeRocketCI.

### Goals

Below are the goals to complete in the use case:

- Onboard a feature branch for the application.
- Configure GitOps approach for the environment by adding a GitOps repository codebase and a values.yaml file within it.
- Deploy application with redefined parameters.

## Scenario

The use case scenario contains the following stages:

- **Create a feature branch**: Create a feature branch and build artifact for it.
- **Create a deployment flow**: Create a deployment flow that contains an environment and deploy application within the environment.
- **Configure GitOps approach**: Adjust a GitOps repository by adding custom application configuration into it.
- **Apply custom settings for application**: Deploy application with custom parameters.

### Create Feature Branch

There are two approaches to onboard a feature branch:

1. **Create a Feature Branch via KubeRocketCI**: KubeRocketCI creates a new branch in Bitbucket.
2. **Onboard an Existing Branch in KubeRocketCI**: Manually [create the branch in Bitbucket](https://support.atlassian.com/bitbucket-cloud/docs/branch-a-repository/) using the correct naming convention and then onboard it into KubeRocketCI.

In this use case, we will follow the first approach to add a branch.

When creating a feature branch, use the naming convention `feature/<jira-ticket>` for feature branches, ensuring the branch name is lowercase (e.g., `feature/tt-000`) to meet Kubernetes restrictions.

To create a feature branch via KubeRocketCI. Follow these steps:

1. Open the KubeRocketCI portal endpoint and log into the platform:

  ![Login page](../assets/use-cases/deploy-application-from-feature-branch/kuberocketci-login-page.png "Login page")

2. Navigate to the **Components** section and select the desired component by clicking its name.

3. Click the **Create branch** button and fill in the form:

  * **Branch Name**: Specify the name (e.g., `feature/tt-000`).
  * **From Commit Hash**: Specify the commit hash or leave it empty for the latest commit.
  * **Branch Version**: Provide a version tag for the branch.
  * **Review Pipeline**: Leave the default pipeline.
  * **Build Pipeline**: Leave the default pipeline.

  ![Create branch button](../assets/use-cases/deploy-application-from-feature-branch/create-branch-button.png "Create branch button")

4. Click **Create** to finalize the branch creation.

5. The branch will also be created in Bitbucket. Verify its creation in the repository:

  ![Codebase branches in Bitbucket](../assets/use-cases/deploy-application-from-feature-branch/bitbucket-codebase-branches.png "Codebase branches in Bitbucket")

6. Build the application using the **Build** button:

  ![Build button](../assets/use-cases/deploy-application-from-feature-branch/build-application.png "Build button")

7. View the build pipeline run details by clicking the pipeline run name:

  ![Build pipeline details](../assets/use-cases/deploy-application-from-feature-branch/build-pipeline-details.png "Build pipeline details")

### Deploy Feature Branch

Once you have completed the onboarding process for the feature branch, you can deploy its artifacts to a dedicated feature environment.

#### Create Deployment Flow

Use initials to name the deployment flow. For example, a user with the email `firstname_lastname@example.com` should use `fl` as the identifier.

To create a feature environment, follow the steps below:

1. Open the **Deployment Flows** section and click **Create Deployment Flow**:

  ![Create deployment flow button](../assets/use-cases/deploy-application-from-feature-branch/create-deployment-flow-enter-name.png "Create deployment flow button")

2. Select components and branches for the deployment flow. Disable the **Promote Applications** switcher for environments without Quality Gate promotion and click **Create**:

  ![Enter name window](../assets/use-cases/deploy-application-from-feature-branch/create-deployment-flow-add-application.png "Enter name window")

#### Create Environment

The next step is to create an environment:

1. Select the deployment flow from the **Deployment Flows** section.

2. Click the **Create Environment** button and fill in the form:

  * **Cluster**: Choose the target cluster.
  * **Environment Name**: Specify the name (`dev`).
  * **Description**: Specify the description for the environment.
  * **Deploy Pipeline Template**: Select the deployment pipeline (`deploy`).
  * **Namespace**: Use the pre-defined namespace without modifications.
  * **Trigger Type**: Select `Manual`.
  * **Clean Pipeline Template**: Choose the clean pipeline (`clean`)

![Create environment menu](../assets/use-cases/deploy-application-from-feature-branch/create-environment-configure-stage.png "Create environment menu")

3. Set Manual as the Quality Gate type and click **Create**:

![Add quality gates menu](../assets/use-cases/deploy-application-from-feature-branch/create-environment-add-qg.png "Add quality gates menu")

4. On the congratulations window, click **Go to environment**.

The feature environment is now ready for deployment.

#### Deploy Application

To deploy an application, follow the steps below:

1. Click **Configure Deploy**, select the image tag to be deployed, and proceed with the **Start Deploy** button:

  ![Application deployment](../assets/use-cases/deploy-application-from-feature-branch/deploy-application.png "Application deployment")

2. Verify the deployment status in the **Pipelines** section:

  ![Check deploy pipeline run](../assets/use-cases/deploy-application-from-feature-branch/check-deploy-pipeline.png "Check deploy pipeline run")

3. Click the pipeline run name to view its details:

  ![View deploy pipeline details](../assets/use-cases/deploy-application-from-feature-branch/deploy-pipeline-details.png "View deploy pipeline details")

4. Open application in Argo CD by clicking the **Argo CD** button:

  ![Check deploy pipeline run](../assets/use-cases/deploy-application-from-feature-branch/open-in-argo-cd.png "Check deploy pipeline run")

5. View enhanced insights and log analysis:

  ![Argo CD application state](../assets/use-cases/deploy-application-from-feature-branch/argo-cd-state.png "Argo CD application state")

### Deploy With Custom Parameters

The platform utilizes a Helm chart found in the deploy-templates folder of each component repository. To deploy a feature branch with custom variables, select the **Values Override** option on the environment page.

:::note
Before enabling this option, you must provide custom parameters for the application. To do this, please add the required values to the `values.yaml` file in the GitOps repository, ensuring you follow the expected structure.
:::

For custom deployments, override default variables to increase the application replica count by following the guidelines below:

1. Open the GitOps repository by clicking the **Go to the source code** button:

  ![Go to the source code button](../assets/use-cases/deploy-application-from-feature-branch/go-to-the-source-code.png "Go to the source code button")

2. Clone the GitOps repository to the local machine. Checkout to another branch and create a file by the `<deployment-flow-name>/<environment-name>/<application-name>-values.yaml` pattern (in our case, `fl/dev/notifications-service-values.yaml`).

3. In the newly added `<application-name>-values.yaml` file, paste the following variables:

```bash
replicaCount: 2
```

4. Commit your changes, push your branch to the origin and create a pull request:

  ![Pull request details](../assets/use-cases/deploy-application-from-feature-branch/pull-request-details.png "Pull request details")

5. Merge the pull request using the **Merge button**:

  ![Merge pull request](../assets/use-cases/deploy-application-from-feature-branch/merge-pull-request-bitbucket.png "Merge pull request")

6. On the environment page, click the **Configure Deploy** button. When deploying an application, enable the **Values Override** option in the environment settings:

  ![Enable values override option](../assets/use-cases/deploy-application-from-feature-branch/enable-values-override.png "Enable values override option")

7. View the changed application resource in Argo CD:

  ![Argo CD state with GitOps values](../assets/use-cases/deploy-application-from-feature-branch/argo-cd-state-gitops.png "Argo CD state with GitOps values")

### Cleanup

After merging the feature branch, please delete the branch and environment.

#### Delete Feature Environment

1. In the KubeRocketCI portal, return to the environment.

2. Select application from the **Applications** tab and click the **Delete** button to remove the application from the environment:

  ![Delete application from environment](../assets/use-cases/deploy-application-from-feature-branch/delete-application.png "Delete application from environment")

3. Navigate to the **Deployment Flows** section. Click the actions button and select **Delete**:

  ![Delete deployment flow](../assets/use-cases/deploy-application-from-feature-branch/delete-deployment-flow.png "Delete deployment flow")

#### Delete Feature Branch

The last step is to delete a feature branch for the application:

1. Navigate to the **Components** section.

2. Open to the component where you want to delete the feature branch.

3. Delete the branch from the **Branches** tab:

  ![Delete branch in KubeRocketCI](../assets/use-cases/deploy-application-from-feature-branch/delete-feature-branch-portal.png "Delete branch in KubeRocketCI")

4. Delete the feature branch from Bitbucket:

  ![Delete branch in Bitbucket](../assets/use-cases/deploy-application-from-feature-branch/delete-feature-branch-bitbucket.png "Delete branch in Bitbucket")

## Related Articles

- [Use Cases](./index.md)
- [Add Application](../user-guide/add-application.md)
- [Add Deployment Flow](../user-guide/add-cd-pipeline.md)
- [Manage Deployment Flows](../user-guide/manage-environments.md)
- [Manage GitOps](../user-guide/gitops.md)
