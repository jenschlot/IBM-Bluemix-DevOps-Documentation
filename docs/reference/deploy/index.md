#Build & Deploy reference

Last modified: 19 February 2015

The Bluemix DevOps Services Build & Deploy feature, also known as Pipeline, automates the continuous deployment of your projects. In a project's Pipeline, sequences of stages retrieve input and run jobs, such as builds, tests, and deployments.

---
##[Stages and jobs](#key)

##[Deployment using the Bluemix DevOps Services Pipeline](#auto)
* [Manual deployment from Pipeline](#pipeline_manual)
* [Multistage deployment](#multi)
* [Manifest files](#manifests)
* [Bluemix and the Delivery Pipeline service](#service)
* [Logging](#logs)

##[Deployment using the Web IDE](#manual)
* [The run bar](#runbar)

---
<a name="key"></a>
##Stages and jobs

Stages organize input and output as your code is built, deployed, and tested. The actual building, deploying, and testing is done by the jobs that are in a stage. 

A job is an execution unit that is in a stage. A stage can contain multiple jobs, and the jobs in a stage run sequentially. All of the jobs in a stage must be completed successfully in order for the stage to be completed successfully. If a job fails, subsequent jobs in a stage do not run.

For example, a simple Delivery Pipeline configuration might contain a Build stage that takes input from a Git repository.  By running build and test jobs, the Build stage builds a project and runs unit tests against it. If the build and test jobs both run successfully, the compiled project is output to a Deploy stage that contains a job that pushes the app to Bluemix.


---
<a name="auto"></a>
##Deployment using the Bluemix DevOps Services Pipeline

In a fully configured Pipeline, the changes that you deliver to a project's source control repository can trigger builds and deployments.

**Remember**: If you select the **Simple** builder type for a build job, you skip the build process. Your code will not be compiled, but will be sent to the deploy stage as is. To both build and deploy, select a builder type other than **Simple**.  

<a name="pipeline_manual"></a>
###Manual deployment from Pipeline

You can disable automatic builds that run when changes are pushed to your project. To disable automatic builds, when you configure a stage that has a build job, clear the **Automatically execute jobs when a change is pushed to Git** check box on the **INPUT** tab. Then, you can request builds manually and deploy from the build history page in one of two ways:
  * Drag a build to the box that is under a configured space.
  * Next to a build, click **Deploy to** icon and then select a space that has a deploy job.

<a name="multi"></a>
###Multistage deployment

You can configure Bluemix DevOps Services projects to deploy to multiple Bluemix spaces. For example, you might configure three stages: one that deploys to a development space, another that deploys to a staging space, and a third that deploys to a production space.

If your deployment stages all try to use the route that is specified in your project manifest file, a route collision occurs. For more information about preventing route collisions when you deploy to multiple stages, [see the Manifest files section][6].

By default, every time a build is completed or deploys in Pipeline, a deployment starts automatically. In later deploy stages, automatic deployment happens when both a build and the preceding stage succeed. 

<a name="manifests"></a>
###Manifest files

Manifest files, which are named `manifest.yml` in a project's root directory, control how your project is deployed to Bluemix. For information about creating manifest files for a project, [see the Bluemix documentation about application manifests][1].

To integrate with Bluemix, your project must have a manifest file in its root directory. However, you are not required to deploy based on the information in the file. You can specify everything in a manifest file by using `cf push` command arguments. To learn about the arguments, [see the Cloud Foundry Push documentation][3]. To use the arguments, modify the **Script** field in a deployer job's configuration menu.

One case where the `cf push` command arguments are helpful is in a project that has multiple deployment targets. If multiple deploy jobs try to use the same route, as specified in the project manifest, a conflict occurs. 

To avoid conflicts, you can use `cf push` followed by the host name argument `-n` and a route name to specify a route. By modifying the deployment script for individual stages, you can avoid conflicts without using the manifest file.


<a name="service"></a>
###Bluemix and the Delivery Pipeline service

The Build & Deploy feature uses the IBM Delivery Pipeline for Bluemix (the Delivery Pipeline service). To make the most of Pipeline's integration with Bluemix, add the service to your targeted Bluemix spaces. For more information about the service, [see Getting started with IBM Continuous Delivery Pipeline for Bluemix][2]. For information about possible charges to your account, [see the Bluemix Pricing page][4].

<a name="logs"></a>
###Logging

You can view the logs for your Build & Deploy jobs on the Stage Job History page. Click a job, or click **View logs and history**.

In addition to logs, you can view unit test results, generated artifacts, and code changes for any build job.

---
<a name="manual"></a>
##Deployment using the Web IDE

While you're working in the directory that contains your `manifest.yml` file, you can deploy whatever is in the Web IDE workspace to Bluemix by clicking the **Play** icon on the run bar. 

**Remember:** By clicking the **Play** icon, you deploy the current state of your code in the Web IDE. To deploy the code that is checked in to the repository, use Pipeline.

You can configure Web IDE deployment and Build & Deploy's Pipeline to use different app names. Then, you can use the Web IDE deployment for a personal test environment and Pipeline for a team integration environment. The Web IDE saves deployment launch configurations; you can access them from the menu on the run bar. 

Whether you are using command-line tools or the Web IDE, both methods are effective for rapid, solo development. You might prefer the added security of using auto-deploy so that you can control what is being pushed. Auto-deploy is available through Pipeline. By using auto-deploy, you know that the code that is running in the app matches a known state in the repository. In contrast, the Web IDE deploys whatever is in your working directory when you push.


<a name="runbar"></a>
###The run bar

![Annotated Run Bar screenshot][7]

1. **Status area:** Shows which launch configuration is selected and the deployment status of your app. If your project doesn't contain a launch configuration, create one by clicking the menu and then clicking **CREATE NEW**.
2. **Play icon:** Deploys your app manually by using the currently selected launch configuration.
3. **Stop icon:** Stops a running app. 
4. **Open URL icon:** Opens a running app. 



 
[1]: https://www.ng.bluemix.net/docs/#manageapps/index-gentopic2.html#appmanifest
[2]: https://www.ng.bluemix.net/docs/#services/DeliveryPipeline/index.html#getstartwithCD
[3]: http://docs.cloudfoundry.org/devguide/installcf/whats-new-v6.html#push
[4]: https://console.ng.bluemix.net/?ace_base=true/#/pricing/cloudOEPaneId=pricing
[5]: ./images/open_logs.png
[6]: #manifests
[7]: ./images/runbar-annotated.png
