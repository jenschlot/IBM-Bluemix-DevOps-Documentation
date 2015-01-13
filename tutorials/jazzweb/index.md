#Developing an IBM Bluemix application in Node.js with the web IDE

Last modified: 12 January 2015

In this tutorial, you use IBM DevOps Services to develop an application in the cloud and deploy it to [IBM® Bluemix™][1].

---
##Start by using a sample project

Start with the sample project, [Sentiment Analysis App][2]. This app is a hosted Node.js Git project. You need your own copy of the project, which you can get by forking the project. 

On the sample project's Overview page, click **FORK PROJECT**.

![Fork button][3]

Enter a name for your fork of the Sentiment Analysis app, and make sure that the **Deploy to Bluemix** check box is selected. You can use the default settings for the other options. When you click **CREATE**, a fork of the sample Git repository is created.

![Fork new project][4]

Put your fork of the project on the web by using Bluemix. To make the most of DevOps Services and Bluemix, make sure that your Bluemix space has the Delivery Pipeline service. If it doesn't have that service, [follow these steps][26].

At the top of the screen, click **Build &amp; Deploy**. Then, click **Simple**.

![Simple deployment interface][5]

Simple deployment directly deploys the contents of the Git repository. Simple deployment uses the information in the project's `manifest.yml` file to specify how the repository code will be deployed to Bluemix. Your app will be deployed in a few seconds. 

To see your deployed app, click the link to it:

![Simple view up close][6]
 
![Sentiment Analysis Sample App][7]

The sample project incorporates JSHint validation to ensure that your code is correctly formed and error-free. This can't happen in the simple deployment mode, though: all that mode can do is *deploy* your code. You must configure a builder. Builders are only available in Advanced mode, which is also known as Pipeline. 

At the top of the Build & Deploy page, click **ADVANCED**. Because you switched from Simple to Advanced mode, Pipeline automatically generates a configuration for your project. However, you're going to create a configuration, so you first must reset Pipeline:

![Deleting a preconfigured Pipeline][25]

1. Click the gear icon on the rightmost tile, which represents a stage named `dev Deploy` by default. Click **Delete Stage** and confirm the deletion.
2. Click the gear icon on the remaining build stage tile. Click **Delete Stage** and confirm the deletion.
 
You reset the Delivery Pipeline service. When you configure your own project, you can create and customize as much as you want to. However, this sample, is designed to require minimal activity to get started: a pre-configured Grunt build file, `Gruntfile.js`, is in the root directory, so it is automatically found. This Grunt build file includes JSHint validation, so your project's code will be checked automatically each time a build occurs.

Click **add a builder**. On the Add Builder page, select **Grunt** as the Builder. Leave the default settings as is and then click **SAVE**.

![Configuring the Builder][8]

On the right side of the screen, click **add a stage**. Because DevOps Services integrates with Bluemix and this sample is a simple project, the default information is sufficient to deploy the project. 

Make sure that the project has a unique path by editing the first line of the Bluemix script: add the `-n` flag followed by a unique host name. A complete version of the command might look like this example:
 
    cf push "${CF_APP}" -n Your-SA-App201501

The Deployer Stage Configuration might look like this example:

![Configuring the Deployer][9]

The manifest file that is included in this sample application specifies a host name and does not require any services, so you do not need to add anything to the script.

If the manifest file (`manifest.yml`) didn't specify a host or other parameter, you can define them by adding cf commands to the Bluemix script. The cf command deploys applications to Cloud Foundry-based platforms such as Bluemix. For more information, [see Getting Started with cf v6][24].

Click **SAVE**. On the Pipeline page, click **Request Build**.

![Clicking Request Build on configured Pipeline][23]

Your project is queued to build. When the build is completed, your app automatically is queued for deployment to Bluemix. You can observe its status from this page and open the app when it's deployed.

To open the app, click its name. If you want to see your app's Bluemix dashboard, click the deployment box in your space:

![Ready to click to Bluemix from Pipeline][10]

You can manage the live application instance on [Bluemix][11]. Click an app's gear icon to start, stop, edit, or delete the app. On the Services tab, you can add various services such as MongoDB, SSO, MapReduce, and more.
 

![Starting a Bluemix app][12]

Building and deploying apps with Bluemix can result in charges to your Bluemix billing account. A project is granted 60 minutes of free build time per month, an amount that even the most dedicated tutorial enthusiasts are unlikely to accumulate. For more information about pricing for any service, [see the Bluemix pricing page](https://bluemix.net/#/pricing).

---
##Edit the Sample Application

In this section of the tutorial, you personalize the sample app in DevOps Services' web-based code editor, push your changes to the project's remote repository, and initiate a redeployment of your project. These activities won’t take more than a few minutes.

Click **Edit Code**, and then open the `app.js` file by clicking it in the side panel. The editor recognizes and highlights the code as JavaScript.

Change how the app greets its users: click **Edit**, and then click **Find**. Search for the phrase "Welcome to the Twitter Sentiment Analysis app."

![Configure Builder][13]

Replace occurrences of that message with whatever you like.

If you want a fully functional version of the app, you also must supply your own Twitter API keys. To sign up for API keys, [go to Twitter Application Management][27]. When you have the API keys, you can replace the keys that are in the tweeter variable, which starts at line 22. 

When you're finished, press Ctrl + S (or Command + S on a Mac) to make sure that everything is saved..

---
##Push changes to the repository

After you edit the `app.js` file, share the changed file with other members of your project by pushing the file to the repository. 

In the sidebar, click the Git Repository icon. Stage the change to `app.js` by selecting the check box next to it:

![Stage Changes][14]

Commit your change to the Git repository for your project by entering a commit message, and then clicking **COMMIT**.

![Committing changes][15]

**PUSH** to push the change to the remote project repository.

![Pushing Changes][16]

Any changes that are delivered to your project trigger a build. When a build is completed successfully, it is automatically deployed. If you click **Build &amp; Deploy** again, you'll see that your change started a new build that, when it finishes, will be deployed.

---
##The manifest file

Deploying a DevOps Services project from the web IDE requires the project to have a `manifest.yml` file. This file contains important settings, such as the application instance name to use, the host machine, the services that the application uses, and more. The sample application already contains a manifest file, so you can leave it alone in this tutorial.

![An example manifest][17]

---
##Manual deployment

While you're working in the directory that contains your `manifest.yml file`, you can manually deploy whatever is in the web IDE workspace to Bluemix by clicking **Deploy**. Remember: When you click **Deploy**, you deploy the current state of your code in your web IDE. Build &amp; Deploy deploys from what is checked into the repository.

![About to click the Deploy button in the Web IDE][18]

You can configure web IDE manual deployment and Build &amp; Deploy's automatic deployment to use different app names. Then, you can use the web IDE deployment for a personal test environment and automatic deployment for a team integration environment.

Whether you are using command-line tools or the web IDE, both methods are effective for rapid, solo development. You might prefer the added security of having automatic deployment so that you can control what is being pushed. By using automatic deployment, you know that the code that is running in the app matches a known state in the repository. In contrast, manual deployment deploys whatever is in your working directory when you push.

---
##Automatic deployment

Builds are triggered when changes are delivered to a project. Successful builds are automatically deployed. You can also manually deploy in these ways:
  * On the build history page, drag a successful build to the box that is under a configured space. 
  * Next to a build, click the cloud icon and then select a space. 

![Deploying an app after expanding a completed build][22]

When the app is deployed, try it by clicking its web URL:

![Our updated app on Bluemix][19]

You developed and deployed a Bluemix application by using the web IDE. 

[1]: https://bluemix.net/ (Bluemix)
[2]: https://hub.jazz.net/project/curtispd/Sentiment%20Analysis%20App/overview
[3]: /tutorials/jazzweb/images/forkbutton.png
[4]: /tutorials/jazzweb/images/forknew.png
[5]: /tutorials/jazzweb/images/simpledeployment.png
[6]: /tutorials/jazzweb/images/closesimple.png
[7]: /tutorials/jazzweb/images/stockapp.png
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
[19]: /tutorials/jazzweb/images/updatedapp.png
[20]: https://www.ibmdw.net/answers?community=jazzhub (forum)
[21]: mailto:hub%40jazz.net
[22]: /tutorials/jazzweb/images/deployto.png
[23]: /tutorials/jazzweb/images/request-build.png  
[24]: http://docs.cloudfoundry.org/devguide/installcf/whats-new-v6.html
[25]: /tutorials/jazzweb/images/config-to-delete.png
[26]: https://www.ng.bluemix.net/docs/#services/DeliveryPipeline/index.html#getstartwithCD
[27]: https://dev.twitter.com/apps