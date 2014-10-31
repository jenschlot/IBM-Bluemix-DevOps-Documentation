#Build and Deploy quick reference

Through integration with IBM® Bluemix™, IBM DevOps Services provides multiple ways for you to get your code onto the web.

---
##[Manual deployment](#manual)

##[Auto-deployment](#auto)
* [How it works](#autohow)
* [Manifests](#manifests)

##[Pipeline](#pipeline)
* [Bluemix and the Delivery Pipeline Service](#service)
* [Multistage deployment](#multi)

<!--
##[Additional resources](#addl)
* [Charging](#charging)
* [Bluemix Delivery Pipeline Service Documentation](#servicedoc)
-->

---
<a name="manual"></a>
##Manual deployment 

In the Web IDE, while you're in the directory that contains your `manifest.yml` file, you can use the **Deploy** button to manually deploy whatever you're developing in the Web IDE to Bluemix. It is important to remember that this only deploys the current state of your code *in the Web IDE*, while Auto-Deploy deploys from what is checked into the project repository.

Optionally, you could configure the Web IDE deploy and the Auto-Deploy to use different app names so that you can use the Web ID deploy as a personal test environment and the Auto-Deploy as a team integration environment.

Whether you're using command line tools or the Web IDE, they can be an effective way to work when you are doing rapid, solo development, but for many developers, the added security of having auto-deploy control what is being pushed is a better way to go. By using auto-deploy, you always know that the code running in the application matches some known state in the repository, instead of whatever happened to be in your working directory at the time you pushed.

---
<a name="auto"></a>
##Auto-deployment

###How it works
Whether you're using Simple or Advanced deployment modes, builds and deployments are triggered when changes are pushed or delivered to a project's source control repository. Simple is different from Advanced in that it doesn't have a build stage, which means that compiled languages like Java won't work with it, and that it can only have one deployment target, whereas Advanced can have many. If you need automatic building *and* deployment, or want to deploy to multiple spaces, use Advanced rather than Simple. 

In Advanced mode, you can disable automatic builds that run when changes are pushed to your project. To disable automatic builds, clear the **Automatically build when a change is delivered/pushed** check box when you configure a build stage. You could then manually request builds and then deploy from the build history page by dragging a successful build into the box under a configured space, or by clicking the cloud icon beside a build and then selecting a space under **Deploy to**.

<a name="manifests"></a>
###Manifests

Manifest files (named `manifest.yml` in a project's root directory) control how your project is deployed to Bluemix. As Bluemix is based on Cloud Foundry, see the [Cloud Foundry manifest documentation][2] for detailed information on creating manifest files for your projects.  

The presence of a manifest file in a project's root directory is required for integration with Bluemix, but actually deploying based on the information in the file is optional. Everything in a manifest can also be specified by `cf push` command arguments. To learn about these arguments, see the [Cloud Foundry Push documentation][3]. To use them, modify the *Script* field in a deployer stage's configuration menu while in Advanced deployment mode.

As an example, the hostname argument, `-n`, allows you to specify a route with `cf push`. This is especially useful in projects that use multiple deployment stages: if the stages all attempt to use the same route (as specified in the project manifest), there will be a conflict. Modifying the deployment script for individual stages allows you to avoid this without needing to worry about the manifest.   

---
<a name="pipeline"></a>
##Pipeline

Advanced deployment mode uses Pipeline to build and deploy your project.

<a name="service"></a>
###Bluemix and the Delivery Pipeline Service

Making the most of Pipeline's integration with Bluemix requires that you add the Delivery Pipeline service to your targeted Bluemix spaces. For more information on the service, see [Getting started with IBM Continuous Delivery Pipeline for Bluemix][3]. For more information on charging and Pipeline, see the [DevOps Services Accounts document][4].

<a name="multi"></a>
###Multistage deployment

You can configure DevOps Services projects to deploy to multiple Bluemix spaces. To use multistage deployment, just create more than one deployer stage. For example, you might configure a stage that deploys to a development space, another to a staging space, and a third to a production space. 

By default, a deployment will automatically be initiated every time a build completes or deploys successfully in the previous stage of the Pipeline. For the first deployer stage, this happens when a build completes successfully. For subsequent deployer stages, this happens when a build is successfully deployed to the preceding stage. If you do not enable this option, builds must be deployed manually via drag & drop or using the deploy menu.


<!--
<a name="addl"></a>
##Additional resources
-->




 
[1]: http://docs.cloudfoundry.org/devguide/deploy-apps/manifest.html
[2]: https://www.ng.bluemix.net/docs/#services/DeliveryPipeline/index.html#getstartwithCD
[3]: http://docs.cloudfoundry.org/devguide/installcf/whats-new-v6.html#push
[4]: #