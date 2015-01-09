#Build and Deploy reference

Last modified: 11 December 2014

You can get your code on the web in multiple ways by using IBM® DevOps Services, which integrates with IBM® Bluemix™.

---
##[Manual deployment from the web IDE](#manual)

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
##Manual deployment from the web IDE

While you're working in the directory that contains your `manifest.yml file`, you can manually deploy whatever is in the web IDE workspace to Bluemix by clicking **Deploy**. Remember: When you click **Deploy**, you deploy the current state of your code in your web IDE. Build &amp; Deploy deploys from what is checked into the repository.

You can configure web IDE manual deployment and Build &amp; Deploy's automatic deployment to use different app names. Then, you can use the web IDE deployment for a personal test environment and automatic deployment for a team integration environment.

Whether you are using command-line tools or the web IDE, both methods are effective for rapid, solo development. You might prefer the added security of having automatic deployment so that you can control what is being pushed. By using automatic deployment, you know that the code that is running in the app matches a known state in the repository. In contrast, manual deployment deploys whatever is in your working directory when you push.

---
<a name="auto"></a>
##Auto-deployment

###Overview
Whether you use the Simple or Advanced deployment modes, when changes are pushed to a project's source control repository, builds and deployments are triggered. Simple mode doesn't have a build stage, but Advanced mode does. As a result, compiled languages such as Java won't work with Simple mode, and Simple mode can have only one deployment target. Advanced mode can have many deployment targets. If you need automatic building and deployment, or if you want to deploy to multiple spaces, use Advanced mode.  

In Advanced mode, you can disable automatic builds that run when changes are pushed to your project. To disable automatic builds, when you configure a build stage, clear the **Automatically build when a change is delivered/pushed** check box. You can then manually request builds and deploy from the build history page in one of two ways:
  * Drag a build to the box that is under a configured space.
  * Next to a build, click the cloud icon and then select a space.

<a name="manifests"></a>
###Manifests

Manifest files, which are named `manifest.yml` in a project's root directory, control how your project is deployed to Bluemix. For information about creating manifest files for a project, [see the Cloud Foundry manifest documentation][2]. Bluemix is based on Cloud Foundry.

To integrate with Bluemix, a project must have a manifest file in its root directory. However, you are not required to deploy based on the information in the file. Everything in a manifest file can also be specified by using `cf push` command arguments. To learn about the arguments, [see the Cloud Foundry Push documentation][3]. To use the arguments, while you are in Advanced deployment mode, modify the **Script** field in a deployer stage's configuration menu.

One case where the `cf push` command arguments are helpful is in a project that uses multiple deployment stages. If all of the stages try to use the same route, as specified in the project manifest, a conflict occurs. To avoid conflicts, you can use `cf push` followed by the host name argument `-n` and a route name to specify a route. By modifying the deployment script for individual stages, you can avoid conflicts without using the manifest file.

---
<a name="pipeline"></a>
##The Delivery Pipeline service

Advanced deployment mode uses the IBM Delivery Pipeline for Bluemix (the Delivery Pipeline service). 

<a name="service"></a>
###Bluemix and the Delivery Pipeline service

To make the most of the Delivery Pipeline service's integration with Bluemix, add the service to your targeted Bluemix spaces. For more information about the service, [see Getting started with IBM Continuous Delivery Pipeline for Bluemix][3]. For information about possible charges to your account, [see the Bluemix pricing overview][4].

<a name="multi"></a>
###Multistage deployment

You can configure DevOps Services projects to deploy to multiple Bluemix spaces. To use multistage deployment, create multiple deployer stages. For example, you might configure three stages: one that deploys to a development space, another that deploys to a staging space, and a third that deploys to a production space. 

If your deployment stages all attempt to use the route specified in your project manifest, there will be a route collision. For more information on preventing route collisions when deploying to multiple stages, [see the Manifests section][6].

By default, every time a build is completed or deploys in the Delivery Pipeline service, a deployment is automatically initiated. In later deployer stages, automatic deployment happens when a build is deployed to the preceding stage.

If automatic building and deployment are not enabled for your project, you can still use multistage deployment. However, you must manually deploy builds

<a name="logs"></a>
###Logging

You can view the logs for your builder and deployer stages on the Build and Deployment pages. Click a build or deployment, or click **View logs and history**.

![Locations that open history pages from Advanced Build & Deploy][5]

On the Builds page, you can also view unit test results, generated artifacts, and code changes for any build.  


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
