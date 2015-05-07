#Build & Deploy reference

Last modified: 7 May 2015

The IBM® Bluemix™ DevOps Services Build & Deploy feature, also known as the pipeline, automates the continuous deployment of your projects. In a project's pipeline, sequences of stages retrieve input and run jobs, such as builds, tests, and deployments.

---
##Contents
* [Bluemix and the Delivery Pipeline service](#service)
* [Deployment using the DevOps Services pipeline](#auto)
  * [Stages](#key)
    * [Stage triggers](#pipeline_automatic)
    * [Stage input and revision selection](#revisions)
    * [Multistage deployments](#multi)
    * [Environment properties](#env_props)
  * [Jobs](#jobs)
    * [Build jobs](#builds)
    * [Deploy jobs](#deploys)
    * [Test jobs](#tests)
  * [Simple configuration example](#example)
  * [Logging](#logs)
* [Deployment using the Web IDE](#manual)
  * [The run bar](#runbar)
* [Manifest files](#manifests)

---

<a name="service"></a>
##Bluemix and the Delivery Pipeline service

The Build & Deploy feature uses the IBM Delivery Pipeline for Bluemix (the Delivery Pipeline service). To make the most of Pipeline's integration with Bluemix, add the service to your targeted Bluemix spaces. For more information about the service, [see Getting started with IBM Continuous Delivery Pipeline for Bluemix][2]. For information about possible charges to your account, [see the Bluemix Pricing page][4].

---

<a name="auto"></a>
##Deployment using the DevOps Services pipeline


<a name="key"></a>

###Stages
Stages organize input and output as your code is built, deployed, and tested. When you create your first stage, typically, the default settings are set for you on the **Input** tab. 

One decision you must make is whether you want the stage to be triggered automatically or manually.

<a name="pipeline_automatic"></a>
####Stage triggers
By default in a stage, builds and deployments are triggered automatically every time changes are delivered to a project's source control repository. 

However, you might want tighter control of a specific build or deployment stage. If you do not want builds to occur every time a change is pushed to the repository, you can disable the capability. On the **Input** tab, in the **Stage Trigger** section, click **Only execute jobs when a user manually runs this stage**. 

Then, you can request on-demand builds and deployments from the build history page in one of two ways:
* Drag a build to the box that is under a configured space.
* Next to a build, click the **Deploy to** icon and then select a space to deploy to.

<a name="revisions"></a>
####Stage input and revision selection

When you run a stage manually, or if it runs because the stage before it is completed, the running stage selects its input revision. Usually, the input revision is a build number. To select the input revision, the stage follows this process:

1. If a specific revision is selected, use it.
2. If a specific revision is not specified, search previous stages until a stage is found that uses the same input. Find and use the last successfully run revision of that input.
3. If a specific revision is not specified and no other stages use the specified source as input, use the latest revision of the input.

<a name="multi"></a>
####Multistage deployments

You might create a multistage deployment when you want to the same project to multiple Bluemix spaces. For example, you might configure three stages: 
* Stage 1: Deploy to a development space
* Stage 2: Deploy to a staging space
* Stage 3: Deploy to a production space

By default, every time a stage is completed in the pipeline, the next stage begins automatically. In later stages, automatic deployment happens only when all of the preceding stages succeed.

**Important**: If all of your deployment stages try to use the route that is specified in your project manifest file, a route collision occurs. For more information about preventing route collisions when you deploy to multiple stages, [see the Manifest files section][6].

<a name="env_props"></a>
####Environment properties

Environment properties are variables whose values can be accessed by any job in a stage. These properties are useful when run scripts within stages. For example, you might have a test script that refers to a `URL` variable. You can reuse that script across many stages that run jobs to test a particular web app deployment. For each stage, only the `URL` variable would need to be created; the script itself would just refer to its stage's `URL` environment property. 

You can create environment properties for a stage when you are configuring the stage. Enter the properties individually on the **Environment Properties** tab. You can also provide a stage with a properties file by entering the path relative to the stage input. 

<a name="jobs"></a>
###Jobs
A job is an execution unit within a stage. A stage can contain multiple jobs, and the jobs in a stage run sequentially. All of the jobs in a stage must be completed successfully in order for the stage to be completed successfully. If a job fails, subsequent jobs in the stage do not run.

<a name="builds"></a>
####Build jobs

Builds jobs compile your project in preparation for deployment. 

**Note**: If you select the **Simple** builder type for a build job, you skip the build process. In that case, your code is not compiled, but is sent to the deploy stage as is. To both build and deploy, select a builder type other than **Simple**. 

<a name="deploys"></a>
####Deploy jobs
Deploy jobs upload your project to Bluemix as an app and are accessible from a URL. After a project is deployed, you can find the deployed app on your Bluemix dashboard. You can configure the build and deploy jobs as separate stages or add them to the same stage to run automatically.

<a name="tests"></a>
####Test jobs
If you want to require that certain conditions are met, include test jobs before or after your build and deployment jobs.

<a name="example"></a>
###Simple configuration example
A simple Delivery Pipeline configuration might contain a build stage that takes input from a Git repository. By running build and test jobs, the build stage builds a project and runs unit tests against it. If the build and test jobs both run successfully, the compiled project is sent to a deploy stage. The deploy stage contains a job that pushes the app to Bluemix.

<a name="logs"></a>
###Logging

You can view the logs for your Build & Deploy jobs on the Stage Job History page. Click a job, or click **View logs and history**.

In addition to logs, you can view unit test results, generated artifacts, and code changes for any build job.

---
<a name="manual"></a>
##Deployment using the Web IDE

While you're working in the directory that contains your `manifest.yml` file, you can deploy whatever is in the Web IDE workspace to Bluemix by clicking the **Play** icon on the run bar.  The Web IDE deploys whatever is in your working directory when you push.

**Remember:** By clicking the **Play** icon, you deploy the current state of your code in the Web IDE workspace. To deploy the code that is checked in to the repository, use the pipeline.

You can configure Web IDE deployment and the pipeline to use different app names. Then, you can use the Web IDE deployment for a personal test environment and the pipeline for a team integration environment. The Web IDE saves deployment launch configurations; you can access them from the menu on the run bar. 

Whether you are using command-line tools or the Web IDE, both methods are effective for rapid, solo development. 


<a name="runbar"></a>
###The run bar

![Annotated Run Bar screenshot][7]

1. **Launch configuration list:** Shows which launch configuration is selected and the deployment status of your app. If your project doesn't have a launch configuration, create one by clicking the arrow and then clicking the **Create a new launch configuration icon.**
2. **Play icon:** Deploys your app manually by using the currently selected launch configuration.
3. **Stop icon:** Stops your running app. 
4. **Open URL icon:** Opens your running app. 

---

<a name="manifests"></a>
###Manifest files

Manifest files, which are named `manifest.yml` in a project's root directory, control how your project is deployed to Bluemix. For information about creating manifest files for a project, [see the Bluemix documentation about application manifests][1]. To integrate with Bluemix, your project must have a manifest file in its root directory. However, you are not required to deploy based on the information in the file. 

In the pipeline, you can specify everything in a manifest file by using `cf push` command arguments. The `cf push` command arguments are helpful in projects that have multiple deployment targets. If multiple deploy jobs all try to use the route that is specified in the project manifest file, a conflict occurs. 

To avoid conflicts, you can specify a route by using `cf push` followed by the host name argument, `-n`, and a route name. By modifying the deployment script for individual stages, you can avoid conflicts without using the manifest file.

To use the cf push command arguments, open the configuration settings for a deploy job and modify the **Deploy Script** field. For more information, [see the Cloud Foundry Push documentation][3]. 

 
[1]: https://www.ng.bluemix.net/docs/#manageapps/index-gentopic2.html#appmanifest
[2]: https://www.ng.bluemix.net/docs/#services/DeliveryPipeline/index.html#getstartwithCD
[3]: http://docs.cloudfoundry.org/devguide/installcf/whats-new-v6.html#push
[4]: https://console.ng.bluemix.net/?ace_base=true/#/pricing/cloudOEPaneId=pricing
[5]: ./images/open_logs.png
[6]: #manifests
[7]: ./images/runbar-annotated.png
