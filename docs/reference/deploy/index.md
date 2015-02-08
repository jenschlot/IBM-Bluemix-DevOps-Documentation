#Build & Deploy reference

Last modified: 10 February 2015

You can get your code on the web in multiple ways by using IBM® Bluemix&trade; DevOps Services, which integrates with IBM® Bluemix™.

---
##[Overview](#overview)
* [Stages and jobs](#key)

##[Deployment using the Bluemix DevOps Services Pipeline](#auto)
* [Manually deploying from Pipeline](#pipeline_manual)
* [Multistage deployment](#multi)
* [Manifests](#manifests)
* [Bluemix and the Delivery Pipeline service](#service)
* [Logging](#logs)

##[Deployment from the web IDE](#manual)
* [The Run Bar explained](#runbar)

<!--
##[Additional resources](#addl)
* [Charging](#charging)
* [Bluemix Delivery Pipeline Service Documentation](#servicedoc)
-->

---
<a name="overview"></a>
##Overview

The Bluemix Devops Services Build & Deploy feature, also known as Pipeline, automates continuous deployment of your projects. A fully configured Pipeline comprises sequences of stages that retrieve input and run jobs, such as builds, tests, and deployments.

<a name="key"></a>
###Stages and jobs

Stages organize input and output as your code is built, deployed, and tested. Actual building, deploying, and testing is done by the jobs that a stage contains. 

A job is an execution unit that is contained within a stage. There can be multiple jobs within a stage; jobs within a stage run sequentially. All jobs within a stage must complete successfully for that stage to complete successfully. If a job fails, subsequent jobs within a stage will not run.

A simple example Pipeline configuration might contain a "Build" stage that takes input from a Git repository and, by running build and test jobs, builds and unit tests a project. If the build and test jobs both run successfully, that compiled project would be output to a "Deploy" stage that contains a job that pushes the application to Bluemix.

---
<a name="auto"></a>
##Deployment using the Bluemix DevOps Services Pipeline

In a fully configured Pipeline, changes that are delivered to a project's source control repository can trigger builds and deployments.

**Note**: If you select the **Simple** builder type for a build job, remember that the *build* process will be skipped. Your code won't compile; it will be output to the deploy stage as it is. If you need both building and deployment, select a builder type other than **Simple**.  

<a name="pipeline_manual"></a>
###Manually deploying from Pipeline

You can disable automatic builds that run when changes are pushed to your project. To disable automatic builds, when you configure a stage that has a build job, clear the **Automatically build when a change is delivered/pushed** check box on the INPUT tab. You can then manually request builds and deploy from the build history page in one of two ways:
  * Drag a build to the box that is under a configured space.
  * Next to a build, click **Deploy to** icon and then select a space that has a deploy job.

<a name="multi"></a>
###Multistage deployment

You can configure Bluemix DevOps Services projects to deploy to multiple Bluemix spaces. For example, you might configure three stages: one that deploys to a development space, another that deploys to a staging space, and a third that deploys to a production space.

If your deployment stages all attempt to use the route specified in your project manifest, there will be a route collision. For more information on preventing route collisions when deploying to multiple stages, [see the Manifests section][6].

By default, every time a build is completed or deploys in the Delivery Pipeline service, a deployment is automatically initiated. In later deployer stages, automatic deployment happens when successful build input is available and the preceding stage runs successfully.

<a name="manifests"></a>
###Manifests

Manifest files, which are named `manifest.yml` in a project's root directory, control how your project is deployed to Bluemix. For information about creating manifest files for a project, [see the Cloud Foundry manifest documentation][2]. Bluemix is based on Cloud Foundry.

To integrate with Bluemix, a project must have a manifest file in its root directory. However, you are not required to deploy based on the information in the file. Everything in a manifest file can also be specified by using `cf push` command arguments. To learn about the arguments, [see the Cloud Foundry Push documentation][3]. To use the arguments, modify the **Script** field in a deployer job's configuration menu.

One case where the `cf push` command arguments are helpful is in a project that has multiple deployment targets. If multiple deploy jobs try to use the same route, as specified in the project manifest, a conflict occurs. To avoid conflicts, you can use `cf push` followed by the host name argument `-n` and a route name to specify a route. By modifying the deployment script for individual stages, you can avoid conflicts without using the manifest file.

<a name="service"></a>
###Bluemix and the Delivery Pipeline service

The Build & Deploy feature uses the IBM Delivery Pipeline for Bluemix (the Delivery Pipeline service). To make the most of the Delivery Pipeline service's integration with Bluemix, add the service to your targeted Bluemix spaces. For more information about the service, [see Getting started with IBM Continuous Delivery Pipeline for Bluemix][3]. For information about possible charges to your account, [see the Bluemix pricing overview][4].

<a name="logs"></a>
###Logging

You can view the logs for your Build & Deploy jobs on the Stage Job History page. Click a job, or click **View logs and history**.

![Locations that open history pages from Advanced Build & Deploy][5]

In addition to logs, you can view unit test results, generated artifacts, and code changes for any build job.

---
<a name="manual"></a>
##Deployment from the web IDE

While you're working in the directory that contains your `manifest.yml file`, you can deploy whatever is in the web IDE workspace to Bluemix by using the Play button in the Run Bar. Remember: When you deploy with the Run Bar, you deploy the current state of your code in the web IDE. Build &amp; Deploy deploys from what is checked into the repository.

You can configure web IDE deployment and Build &amp; Deploy's Pipeline to use different app names. Then, you can use the web IDE deployment for a personal test environment and Pipeline for a team integration environment. The web IDE saves deployment launch configurations; you can access them via the dropdown menu in the Run Bar. 

Whether you are using command-line tools or the web IDE, both methods are effective for rapid, solo development. You might prefer the added security of having automatic deployment by using Pipeline so that you can control what is being pushed. By using automatic deployment, you know that the code that is running in the app matches a known state in the repository. In contrast, the web IDE deploys whatever is in your working directory when you push.

<a name="runbar"></a>
###The Run Bar explained

![Annotated Run Bar screenshot][7]

1. **Status area:** See which launch configuration is selected and the deployment status of your app here. If your project doesn't contain any launch configurations, click the dropdown menu and then **CREATE NEW** to create one.
2. **Play button:** Manually deploy your app using the currently selected launch configuration.
3. **Stop button:** Stop a running application. 
4. **Open URL button:** Open a running application. 


<!--
<a name="addl"></a>
##Additional resources
-->




 
[1]: http://docs.cloudfoundry.org/devguide/deploy-apps/manifest.html
[2]: https://www.ng.bluemix.net/docs/#services/DeliveryPipeline/index.html#getstartwithCD
[3]: http://docs.cloudfoundry.org/devguide/installcf/whats-new-v6.html#push
[4]: https://ace.ng.bluemix.net/#/pricing/cloudOEPaneId=pricing
[5]: ./images/open_logs.png
[6]: #manifests
[7]: ./images/runbar-annotated.png
