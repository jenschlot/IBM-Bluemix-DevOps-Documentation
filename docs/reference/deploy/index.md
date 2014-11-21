#Build and Deploy reference

Last modified: 21 November 2014

You can get your code on the web in multiple ways by using IBM® DevOps Services, which integrates with IBM® Bluemix™.

---
##[Manual deployment](#manual)

##[Auto-deployment](#auto)
* [Overview](#autohow)
* [Manifests](#manifests)

##[Pipeline](#pipeline)
* [Bluemix and the Delivery Pipeline service](#service)
* [Multistage deployment](#multi)
* [Logging](#logs)

<!--
##[Additional resources](#addl)
* [Charging](#charging)
* [Bluemix Delivery Pipeline Service Documentation](#servicedoc)
-->

---
<a name="manual"></a>
##Manual deployment 

In the web IDE, if you're in the directory that contains the `manifest.yml` file, you can manually deploy whatever you're developing in the web IDE to Bluemix. Remember: Only the current state of the code in the web IDE is deployed. If you use Auto-Deploy, it deploys what is checked into the project repository.

You can configure the web IDE deploy and the Auto-Deploy to use different app names so that you can use the web IDE deploy tool as a personal test environment and the Auto-Deploy as a team integration environment.

Both command-line tools and the web IDE are effective way to work when you are doing rapid, solo development, but many developers want the added security of auto-deploy control. By using auto-deploy, you know that the code that is running in the application matches a known state in the repository, instead of whatever was in your working directory when you you pushed.

---
<a name="auto"></a>
##Auto-deployment

###Overview
Whether you use Simple or Advanced deployment modes, when changes are pushed to a project's source control repository, builds and deployments are triggered. Simple mode differs from Advanced in that Simple doesn't have a build stage. As a result, compiled languages like Java won't work with Simple mode, and it can have only one deployment target. Advanced mode can have many deployment targets. If you need automatic building deployment, or if you want to deploy to multiple spaces, use Advanced mode rather than Simple. 

In Advanced mode, you can disable automatic builds that run when changes are pushed to your project. To disable automatic builds, when you configure a build stage, clear the **Automatically build when a change is delivered/pushed** check box. You can then manually request builds and deploy from the build history page in one of two ways:

* Drag a build to the box that is under a configured space.
* Click the cloud icon that is next to a build and then select a space under the Deploy to heading.

<a name="manifests"></a>
###Manifests

Manifest files, which are named `manifest.yml` in a project's root directory, control how your project is deployed to Bluemix. For information about creating manifest files for a project, see the [Cloud Foundry manifest documentation][2]. Bluemix is based on Cloud Foundry.

To integrate with Bluemix, a project must contain a manifest file in its root directory. However, you are not required to deploy based on the information in the file. Everything in a manifest file can also be specified by `cf push` command arguments. To learn about the arguments, see the [Cloud Foundry Push documentation][3]. To use them, while you are in Advanced deployment mode, modify the Script field in a deployer stage's configuration menu.

As an example, you can use the hostname argument, `-n` to specify a route using `cf push`. That example is helpful in projects that use multiple deployment stages: if all of the the stages try to use the same route, as specified in the project manifest, a conflict occurs. By modifying the deployment script for individual stages, you can avoid conflicts without using the manifest file.

---
<a name="pipeline"></a>
##The Delivery Pipeline service

Advanced deployment mode uses the IBM Delivery Pipeline for Bluemix (the Delivery Pipeline service). 

<a name="service"></a>
###Bluemix and the Delivery Pipeline service

To make the most of the Delivery Pipeline service's integration with Bluemix, you must add the service to your targeted Bluemix spaces. For more information about the service, see [Getting started with IBM Continuous Delivery Pipeline for Bluemix][3]. For information about how your account might be charged, see the [the Bluemix pricing overview][4].

<a name="multi"></a>
###Multistage deployment

You can configure DevOps Services projects to deploy to multiple Bluemix spaces. To use multistage deployment, create more than one deployer stage. For example, you might configure three stages: one that deploys to a development space, another that deploys to a staging space, and a third that deploys to a production space. 

By default, every time a build is completed or deploys in the Delivery Pipeline service, a deployment is automatically initiated. In later deployer stages, automatic deployment happens when a build is deployed to the preceding stage. 

If automatic building and deployment is not enabled for your project, you can still take advantage of multistage deployment. However, you will need to manually deploy builds.

<a name="logs"></a>
###Logging

You can view history pages containing logs for your builder and deployer stages by clicking on particular builds or deployments, as well as clicking on the **Last Build** or **Deployed** links.

![Locations that open history pages from Advanced Build & Deploy][5]

In addition to the build logs themselves, you can also view unit test results, generated artifacts, and code changes for any particular build from the build history page.   


<!--
<a name="addl"></a>
##Additional resources
-->




 
[1]: http://docs.cloudfoundry.org/devguide/deploy-apps/manifest.html
[2]: https://www.ng.bluemix.net/docs/#services/DeliveryPipeline/index.html#getstartwithCD
[3]: http://docs.cloudfoundry.org/devguide/installcf/whats-new-v6.html#push
[4]: https://ace.ng.bluemix.net/#/pricing/cloudOEPaneId=pricing
[5]: ./images/open_logs.png
