#Develop a Bluemix application in Node.js using the Web IDE

Last modified: 17 February 2015

In this tutorial, you use IBM® Bluemix™ DevOps Services to develop an application in the cloud and deploy it to [IBM® Bluemix™][1].

---

## Contents
* [Fork a sample project](#fork)
* [Build and deploy with the Delivery Pipeline](#deploy)
* [Edit the sample application](#edit)
* [Push changes to the repository](#push)
* [The manifest file](#manifest)
* [Deploy by using the Web IDE](#deploy_from_web_ide)
* [Automatic and manual deployment](#automatic_deployment)

---
<a name='fork'></a>
##Fork a sample project

Start with the sample project, [Sentiment Analysis App][2]. That app is a hosted Node.js Git project. You need your own copy of the project, which you can get by clicking the button below to fork the project:

[![Deploy to Bluemix](https://bluemix.net/deploy/button.png)](https://bluemix.net/deploy?repository=https://hub.jazz.net/git/ibmdevopsservices/Sentiment.Analysis.App)

<a name='deploy'></a>
##Build and deploy with the Delivery Pipeline
To make the most of Bluemix DevOps Services and Bluemix, make sure that your Bluemix space has the Delivery Pipeline service. Follow these steps to add the service to your Bluemix space if needed: [Getting started with Delivery Pipeline][26].

When you configure your own project, you can create and customize as much as you want to. This sample, however, is designed to require minimal activity to get started: a pre-configured Grunt build file, `Gruntfile.js`, is in the root directory, so it is automatically found. This Grunt build file includes JSHint validation so that your project's code is checked automatically each time a build runs.

The Delivery Pipeline configuration for your Sentiment Analysis app has two stages: a build stage and a deploy stage. These stages form a pipeline. The build stage runs a build job on the included `Gruntfile.js` to validated your code. Then, the deploy stage runs a deploy job to deploy your code to Bluemix.

1. At the top of the screen, click **BUILD &amp; DEPLOY**. 
2. Configure a stage to run a build job on code from your project's Git repository:

  a. Click **ADD STAGE**. At the top of the Stage Configuration page, click the **MyStage** name and change it to `Build`.

  b. Click **JOBS**. Click **ADD JOB**, and then select **Build**. 

  c. On the Build Configuration page, select **Grunt** as the Builder Type. Leave the default settings as they are and click **SAVE**.

	![Configuring the Builder][8]

3. Configure a stage to deploy the output from the Build stage to Bluemix:

  a. Click **ADD STAGE**. At the top of the Stage Configuration page, click the **MyStage** name and change it to `Deploy to dev`.

	This stage immediately follows the Build stage, so its default input is from that stage’s build job. Because Bluemix DevOps Services integrates with Bluemix and this sample project is simple, you can use the other default information to deploy the project, too.

  b. Click **JOBS**. Click **ADD JOB**, and then select **Deploy**.

4. Make sure that the project has a unique path by editing the first line of the Bluemix script: add the `-n` flag followed by a unique host name. A complete version of the command might look like this example:
 
   `cf push "${CF_APP}" -n mysaap`

	The configuration for the Deploy Stage might look like this example:

	![Configuring the Deployer][9]

	The manifest file that is in this sample application specifies a host name and does not require any services, so you do not need to add anything to the script.

5. If the manifest file (`manifest.yml`) didn't specify a host or other parameter, you can define that information by adding cf commands to the Bluemix script. The cf command deploys applications to Cloud Foundry based platforms, such as Bluemix.  For more information, [see Getting Started with cf v6][24].

6. Leave the other settings as they are and click **SAVE**. 

7. On the Pipeline page, click the **Play** icon at the top of the Build stage.

	![Clicking Request Build on configured Pipeline][23]

	Your project is queued to build. When the build is completed, your app is queued for deployment to Bluemix automatically. You can observe its status from this page and open the app when it is deployed.

8. To open the app, click its URL on the Deploy to dev tile. If you want to see your app's Bluemix dashboard, click its name:

![Ready to click to Bluemix from Pipeline][10]

You can manage the live application instance on the [Bluemix dashboard][11]. From the Menu, you can start, stop, edit, or delete the app. On the Services tab, you can add various services such as MongoDB, SSO, MapReduce, and more.
 

![Starting a Bluemix app][12]

**Important:** Building and deploying apps using Bluemix can result in charges to your Bluemix billing account. A project is granted 60 minutes of free build time per month, an amount that even the most dedicated tutorial enthusiasts are unlikely to accumulate. For more information about pricing for any service, [see the Bluemix pricing page](https://bluemix.net/#/pricing).

---
<a name='edit'></a>
##Edit the sample application

You can now personalize the sample app in a Bluemix DevOps Services' web-based code editor, push your changes to the project's remote repository, and initiate a redeployment of your project. These activities won’t take more than a few minutes.

1. Click **Edit Code**, and then open the `app.js` file by clicking it in the side panel. The editor recognizes and highlights the code as JavaScript.

2. Change how the app greets its users: click **Edit**, and then click **Find**. Search for the phrase "Welcome to the Twitter Sentiment Analysis app."

	![Configure Builder][13]

3. Replace occurrences of that message with whatever you like.

4. If you want a fully functional version of the app, you must supply your own Twitter API keys. To sign up for API keys, [go to Twitter Application Management][27]. When you have the API keys, you can replace the keys that are in the tweeter variable, which starts at line 22. 

5. When you're finished, save your work by pressing Ctrl+S (or Command+S on a Mac).

---
<a name='push'></a>
##Push changes to the repository

After you edit the `app.js` file, share the changed file with other members of your project by pushing the file to the repository. 

1. In the sidebar, click the Git Repository icon. 
2. Stage the change to `app.js` by selecting the check box next to it:

	![Stage Changes][14]

3. Commit your change to the Git repository for your project by entering a commit message, and then clicking **COMMIT**.

	![Committing changes][15]

4. Push the change to the remote project repository by clicking **PUSH**.

![Pushing Changes][16]

Any changes that are delivered to your project trigger a build. When a build is completed successfully, it is deployed automatically. If you click **BUILD &amp; DEPLOY** again, you'll see that your change started a new build that will be deployed when the build is finished.

---
<a name='manifest'></a>
##The manifest file

When you deploy a Bluemix DevOps Services project from the Web IDE, the project must have a `manifest.yml` file. This file contains important settings, such as the application instance name to use, the host machine, the services that the application uses, and more. The sample application in this tutorial already contains a manifest file.

![An example manifest][17]


---
<a name='deploy_from_web_ide'></a>
##Deploy using the Web IDE

While you're working in the directory that contains your `manifest.yml file`, you can manually deploy whatever is in the Web IDE workspace to Bluemix by clicking Play on the Run Bar. **Remember:** When you deploy by using the Run Bar, you deploy the current state of your code in the Web IDE. When you deploy by using the Build &amp; Deploy feature, you deploy the code that is checked into the repository.

![The IDE Run Bar][28]

You can configure Web IDE deployment and the Delivery Pipeline service to use different app names. Then, you can use the Web IDE deployment for a personal test environment and the Delivery Pipeline deployment for a team integration environment. The Web IDE saves launch configurations; you can access them from the menu on the Run Bar. 

Whether you are using command-line tools or the Web IDE, both methods are effective for rapid, solo development. You might prefer the added security of having automatic deployment via Pipeline so that you can control what is being pushed. By using automatic deployment, you know that the code that is running in the app matches a known state in the repository. In contrast, the Web IDE deploys whatever is in your working directory when you push.

---
<a name='automatic_deployment'></a>
##Automatic and manual deployment

Builds are triggered when changes are delivered to a project. Successful builds are automatically deployed.

To manually deploy a specific successful build:
1. On the build history page, select a build.
2. Drag the build to the box that is under a configured space. 

OR

1. On the build history page, Click **Deploy to**
2. Select a stage with a deploy job from the menu. 

![Deploying an app after expanding a completed build][22]

When the app is deployed, try it by clicking its web URL:

![Our updated app on Bluemix][19]

You developed and deployed a Bluemix application by using the Web IDE. 

[1]: https://bluemix.net/ (Bluemix)
[2]: https://hub.jazz.net/project/ibmdevopsservices/Sentiment%20Analysis%20App/overview
[3]: /tutorials/jazzweb/images/forkbutton.png
[4]: /tutorials/jazzweb/images/forknew.png
[5]: /tutorials/jazzweb/images/simpledeployment.png
[6]: /tutorials/jazzweb/images/closedeploy.png
[7]: /tutorials/jazzweb/images/stockapp.png
[8]: /tutorials/jazzweb/images/builder1.png
[9]: /tutorials/jazzweb/images/deployscriptex.png
[10]: /tutorials/jazzweb/images/click2blue.png
[11]: https://bluemix.net
[12]: /tutorials/jazzweb/images/startappbluemix.png
[13]: /tutorials/jazzweb/images/autocompletesearch.png
[14]: /tutorials/jazzweb/images/staging.png
[15]: /tutorials/jazzweb/images/commit.png
[16]: /tutorials/jazzweb/images/pushing.png
[17]: /tutorials/jazzweb/images/manifest.png
[18]: /tutorials/jazzweb/images/manualdeploy.png
[19]: /tutorials/jazzweb/images/updatedapp.png
[20]: https://www.ibmdw.net/answers?community=jazzhub (forum)
[21]: mailto:hub%40jazz.net
[22]: /tutorials/jazzweb/images/deployto.png
[23]: /tutorials/jazzweb/images/request-build.png  
[24]: http://docs.cloudfoundry.org/devguide/installcf/whats-new-v6.html
[25]: /tutorials/jazzweb/images/config-to-delete.png
[26]: https://www.ng.bluemix.net/docs/#services/DeliveryPipeline/index.html#getstartwithCD
[27]: https://dev.twitter.com/apps
[28]: /tutorials/jazzweb/images/runbar_green.png