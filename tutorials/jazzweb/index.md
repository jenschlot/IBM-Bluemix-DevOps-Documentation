# Developing an IBM Bluemix application in Node.js with the web IDE

Last modified: 9 December 2014

This tutorial shows you how to use DevOps Services to develop an application in the cloud and deploy it to [IBM® Bluemix™][1].

---
## Start with a sample project

You'll start with the sample project, [Sentiment Analysis App][2]. This app is a hosted Node.js Git project that's configured with a Grunt build file, so it's ready to use with Advanced Build & Deploy. You need to make your own copy of it. Click **Fork Project** on the sample project's Overview page to get started.

![Fork button][3]

Enter whatever name you like for your fork of the Sentiment Analysis app. Also, make sure that the **Deploy to Bluemix** box is checked. You can leave the other options at their defaults. When you click **CREATE**,  a fork of the sample Git repository is created.

![Fork new project][4]

You'll make your mark on the app in a moment, but for now, get your fork of the project live on the web by using Bluemix. To make the most of DevOps Services and Bluemix, make sure that your Bluemix space has the *Delivery Pipeline* service. If it doesn't yet have it, follow [these steps][26].

Click **Build &amp; Deploy** at the top of the screen. Then, click **Simple**.

![Simple deployment interface][5]

Simple deployment works by directly deploying the contents of the Git repository. It uses the `manifest.yml` file to tell it how to deploy to Bluemix. Your app will deploy in a few seconds. Click the link to the deployed app to give it a look:

![Simple view up close][6]

![Sentiment Analysis Sample App][7]

The sample project incorporates JSHint validation to make sure that your code is prim, proper, and error free. The simple deployer doesn't support that sort of thing, though. You need to configure a builder, which is only available in Advanced mode, also known as Pipeline. 

At the top of the *Build & Deploy* page, click **Advanced**. Because you've switched from Simple to Advanced mode, Pipeline will automatically generate a configuration for your project. You're going to create your own configuration, though, so you first need to reset Pipeline:

![A preconfigured Pipeline][25]

1. Click the gear icon on the rightmost tile, which represents a stage that is named `dev` by default. 
2. On the *Deployer Stage Configuration* page, click **DELETE**. Click **OK** when the confirmation message appears.
3. Click the gear icon on the Builder tile.
4. On the *Builder Configuration* page, click **RESET**. Click **OK** when the confirmation message appears.
 
And that's that. You can do as much creation and customization as you like when you configure your own project. This sample, however, is designed to require minimal fuss to get things up and running: a pre-configured Grunt build file, `Gruntfile.js`, is in the root directory, so it will automatically be found.

Click **add a builder**. On the *Add Builder* page that appears, select "Grunt" as the **Builder**. Leave everything else as default and click **SAVE**.

![Configuring the Builder][8]

Next, click **add a stage** on the right side of the screen. DevOps Services integrates with Bluemix, and this sample is a simple project, so the default information here is sufficient to deploy it. 

To make sure that the project has a unique path, add the flag `-n` followed by a unique host name to the first line of the Bluemix script. A complete version of the command might look like:

    cf push "${CF_APP}" -n Your-SA-App201410

As an example:

![Configuring the Deployer][9]

If the manifest file (`manifest.yml`) didn't specify a host, or if the project required a particular service, you might define them by adding `cf` commands to the Bluemix script. `cf` is the command that is used to deploy applications to Cloud Foundry-based platforms like Bluemix. For more information, see [Getting Started with cf v6][24].

The manifest included in this sample application specifies a host name and does not require any services, so you do not need to add anything to the script. Click **SAVE**. On the Pipeline page, click **Request Build**.

![Clicking Request Build on configured Pipeline][23]

You can see that your project is queued to build. When the build completes successfully, your app will automatically be queued for deployment to Bluemix. You can observe its status from this page, as well as open the app when it's deployed.

To open the app, click its name. Click the deployment box in your space if you want to see your app's Bluemix dashboard:

![Ready to click to Bluemix from Pipeline][10]

You can manage the live application instance in [Bluemix][11]. Click an app's gear icon to start, stop, edit, or delete it. The **Services** tab has options to add various services such as MongoDB, SSO, MapReduce, and more.

![Starting a Bluemix app][12]

Building and deploying apps with Bluemix can result in charges to your Bluemix billing account. A project is granted 60 minutes of free build time per month, an amount that even the most dedicated tutorial enthusiasts are unlikely to accumulate. For more information about pricing for any service, see [the Bluemix pricing page](https://bluemix.net/#/pricing).

---
## Editing the Sample Application

You probably haven't come here to build and deploy someone else's project, though. Next, you'll personalize the sample app in DevOps Services' web-based Code Editor, push your changes to the project's remote repository, and initiate a redeployment of your project. Best of all, this won't take more than a few minutes.

Click **Edit Code**, and then open the file `app.js` by clicking it in the side panel. Notice that the editor recognized and highlighted the code as JavaScript.

Next, change how the app greets its users with a little help from the editor. Click **Edit**, then **Find**. Search for the phrase "Welcome to the Twitter Sentiment Analysis app."

![Configure Builder][13]

Replace occurrences of that message with whatever you like. 

If you want a fully functional version of the app, you'll also need to supply your own Twitter API keys. You can sign up for them at [Twitter Application Management][27]. When you have them, you can replace the keys already present in the `tweeter` variable that starts at line 22. 

When you're finished, press Control + S (or Command + S on a Mac) to make sure that everything is saved.

---
## Pushing changes to the repository

After you edit `app.js`, you'll want to share the changed file with other members of your project, so push it to the repository. Click the **Git Repository** icon in the sidebar. Stage the change to `app.js` by selecting the check box next to it:

![Stage Changes][14]

Commit your change to the Git repository for your project by entering a commit message, and then clicking **COMMIT**.

![Committing changes][15]

Clicking **PUSH** pushes the change to the remote project repository.

![Pushing Changes][16]

Any changes that are delivered to your project will trigger a build, which, when it completes successfully, will be automatically deployed. If you click **Build & Deploy** again, you'll see that your change kicked off a new build that, when it finishes, will be deployed.

---
## About the manifest

Deploying a DevOps Services project from the web IDE requires the project to have a `manifest.yml` file. This file contains important settings such as the application instance name to use, the host machine, the services that the application uses, and more. The sample application already contains a manifest, so you can leave it alone in this tutorial.

![An example manifest][17]

---
## Manual Deployment

In the web IDE, while you're in the directory that contains your `manifest.yml` file, you can manually deploy whatever you're developing in the web IDE to Bluemix by clicking **DEPLOY**. Manual deployment deploys the current state of your code in your web IDE, while Auto-Deploy deploys from what is checked into the repository.

![About to click the Deploy button in the Web IDE][18]

Optionally, you could configure the web IDE deploy and the Auto-Deploy to use different app names so that you can use the web IDE deployment for a personal test environment and Auto-Deployment for a team integration environment.

Whether you are using command-line tools or the web IDE, they can be an effective way to work when you are doing rapid, solo development. For many of you, the added security of having auto-deploy control of what is being pushed is a better way to go. By using auto-deploy, you always know that the code that is running in the application matches some known state in the repository. In contrast, manual deployment deploys whatever happens to be in your working directory at the time you push.

---
## Auto-deployment

Builds are triggered when changes are delivered to a project, and successful builds are automatically deployed. You can also manually deploy from the build history page by dragging a successful build into the box under a configured space, or by clicking the cloud icon beside a build and then selecting a space under **Deploy to**. 

![Deploying an app after expanding a completed build][22]

When the app is deployed, click its web URL to give it a whirl:

![Our updated app on Bluemix][19]

And that's it! You now know just what you need to do to develop and deploy a Bluemix application with the web IDE. If it seemed a little too easy, well, that's just how working with Bluemix and DevOps Services is. Have fun!

[1]: https://bluemix.net/ (Bluemix)
[2]: https://hub.jazz.net/project/curtispd/Sentiment%20Analysis%20App/overview
[3]: /tutorials/jazzweb/images/forkbutton.png
[4]: /tutorials/jazzweb/images/forknew.png
[5]: /tutorials/jazzweb/images/simpledeployment.gif
[6]: /tutorials/jazzweb/images/closesimple.gif
[7]: /tutorials/jazzweb/images/stockapp.gif
[8]: /tutorials/jazzweb/images/builder1.png
[9]: /tutorials/jazzweb/images/deployscriptex.png
[10]: /tutorials/jazzweb/images/click2blue.png
[11]: https://bluemix.net
[12]: /tutorials/jazzweb/images/startappbluemix.png
[13]: /tutorials/jazzweb/images/autocompletesearch.gif
[14]: /tutorials/jazzweb/images/staging.png
[15]: /tutorials/jazzweb/images/commit.png
[16]: /tutorials/jazzweb/images/pushing.png
[17]: /tutorials/jazzweb/images/manifest.gif
[18]: /tutorials/jazzweb/images/manualdeploy.png
[19]: /tutorials/jazzweb/images/updatedapp.gif
[20]: https://www.ibmdw.net/answers?community=jazzhub (forum)
[21]: mailto:hub%40jazz.net
[22]: /tutorials/jazzweb/images/deployto.png
[23]: /tutorials/jazzweb/images/request-build.png  
[24]: http://docs.cloudfoundry.org/devguide/installcf/whats-new-v6.html
[25]: /tutorials/jazzweb/images/config-to-delete.png
[26]: https://www.ng.bluemix.net/docs/#services/DeliveryPipeline/index.html#getstartwithCD
[27]: https://dev.twitter.com/apps
