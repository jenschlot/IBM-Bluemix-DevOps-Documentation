# Developing BlueMix applications in Node.js with the Web IDE

## Developing BlueMix applications in Node.js with the DevOps Services Web IDE

This tutorial shows you how to use DevOps Services to develop an application in the cloud and deploy it to [ BlueMix][1].

---
## Start with a sample project

Let's start with the sample project, [Sentiment Analysis App][2]. This is a hosted Node.js Git project that's configured with a Grunt build file to work out of the box with advanced building and deployment. Clicking **Edit Code** opens the Code Editor, where you can then click **Fork** to make your very own version of it.

![Fork button][3]

Enter whatever name you like for your fork of the Sentiment Analysis app. When you click **Save**, the code will be pushed into a new Git repository for you.

![Fork new project][4]

After your fork of the project is created, you'll see your project files in the Code Editor. You'll make your mark on the app in a moment, but for now, let's get this project live on the web using BlueMix.

Click **Build &amp; Deploy** at the top of the Code Editor. Click **Simple**.

![Simple deployment interface][5]

Simple deployment works by directly deploying the contents of the Git repository, using the `manifest.yml` file to tell it how to deploy to BlueMix. Your app will build and deploy in a few seconds. Click on the link to the deployed app to give it a look:

![Simple view up close][6]

![Sentiment Analysis Sample App][7]

We want to go deeper, though. Let's add some JSHint validation to make sure our code is prim, proper, and error free. The simple deployer doesn't support that sort of thing. To do this, we need to configure a builder. Head back to **Build &amp; Deploy** and click **Advanced**.

You can do as much creation and customization as you like when you configure your own project. This one, however, has been configured to require minimal fuss to get things up and running: a pre-configured Grunt build file, `Gruntfile.js`, is in the root directory, so it will automatically be found.

On the **Configure Builder** page, select "Grunt" as the **Builder**. Leave everything else as default and click **SAVE**.

![Configure Builder][8]

Next, click the **Deployer** box on the left side of the screen. DevOps Services integrates with BlueMix, and this is a simple project, so the default information here is sufficient to deploy your project. To make sure that the project has a unique path, though, add the flag `-n` followed by a host name to the BlueMix script that's sure to be unique. As an example:

![Configure Deployer][9]

If the project manifest file (`manifest.yml`) didn't specify a host name, or if the project required a particular service, you could define them here by adding `cf` command lines to the BlueMix script. The manifest included in this sample application specifies a host name and does not require any services, so we do not need to add anything to the script. Click **SAVE**, then click **Request Build**.

From the **History** page, you can see that your project has been queued to build. When the build completes successfully, your app will automatically deploy to BlueMix. You can observe its status from this page, as well as open the app once it's deployed.

To open the app, click the URL below its name. Click the gear button indicated below if you want to see your app's BlueMix dashboard:

![History page][10]

[BlueMix][11] allows you to manage the live application instance. The **Applications** tab on the **BlueMix Dashboard** has options to start, stop, and delete the application. The **Services** tab has options to add various services such as MongoDB, SSO, MapReduce, and more.

![Stopping a BlueMix app][12]

---
## Editing the Sample Application

This is certainly exciting, but you probably haven't come here to just build and deploy someone else's project. Next, you'll personalize the sample app using just DevOps Services' web-based Code Editor, push your changes to the project's remote repository, and initiate a re-deployment of your project. Best of all, this will only take you a few minutes.

Click **Edit Code** again, and then open the file `app.js` by clicking on it in the side panel. Notice that the editor has recognized and highlighted the code as JavaScript.

Let's change how the app greets its users with a little help from the editor. Click **Edit**, then **Find**. Search for the phrase "Welcome to the Twitter Sentiment Analysis app." You don't have to type the whole thing either, as the Web IDE will key in on that as a unique phrase in just a few characters:

![Configure Builder][13]

Replace occurrences of that message with whatever you like. When you're finished, hit Control %2B s (or Command %2B s on a Mac) to make sure that everything is saved.

---
## Pushing changes to the repository

After making changes, you'll want to share them with other members of your project, so let's push them to the repository. Hover over the repositories icon in the sidebar, and click **Git Status**. Stage the changes to `app.js`:

![Stage Changes][14]

Commit your changes to the git repository for your project by clicking **COMMIT**, entering a commit message, and finally hitting **Submit**.

![Committing changes][15]

Clicking the **PUSH** button pushes the changes to the remote project repository.

![Pushing Changes][16]

Those changes will automatically queue a build, which, when it completes successfully, will be automatically deployed.

---
## About the manifest

Deploying a DevOps Services project from the Web IDE requires the project to have a `manifest.yml` file. This file contains important settings such as the application instance name to use, the host machine, the services that the application uses, and more. The sample application already contains a manifest, so you can leave it alone in this tutorial.

![An example manifest][17]

---
## Manual Deployment

In the Web IDE, you can use the Deploy button to manually deploy whatever you are working in the Web IDE to BlueMix. It is important to remember that the Deploy button in the Web IDE deploys the current state of your code in your Web IDE, while Auto-Deploy deploys from what is checked into the repository.

![About to click the Deploy button in the Web IDE][18]

Optionally, you could configure the Web IDE deploy and the Auto-Deploy to use different app names so that you can use the Web ID deploy as a personal test environment and the Auto-Deploy as a team integration environment.

Whether you are using command line tools or the Web IDE, they can be an effective way to work when you are doing rapid, solo development, but for many of you the added security of having auto-deploy control of what is being pushed is a better way to go. In essence, by using auto-deploy you always know that the code running in the application matches some known state in the repository, instead of whatever happened to be in your working directory at the time you pushed.

---
## Auto-deployment

Builds are automatically delivered when changes are delivered to a project, and successful builds are automatically deployed. You can also manually deploy from the build history page by dragging a successful build into the **Environment** box, or clicking **Deploy to** on a successful build. When the app is deployed, click on its web URL to give it a whirl:

![Our updated app on BlueMix][19]

And that's it! You now know just what you need to do to develop and deploy a BlueMix application with the Web IDE. If it seemed a little too easy, well, that's just how working with BlueMix and DevOps Services is. Have fun!

Thanks for following along. And tell us what you think. What did we do well? What can we do better? Post your comments to our [forum][20] or send us an [email][21].

---
## More Tutorials

Interested in trying more BlueMix and DevOps capabilities? Here is a list of tutorials:

* [Getting Started with BlueMix and DevOps Services using Node.js](../tutorial_jazzeditor/tutorial_jazzeditor.md)
* [Getting Started with BlueMix and DevOps Services using Java](../tutorial_jazzeditorjava/tutorial_jazzeditorjava.md)
* [Setting up Eclipse, Git, and RTC Desktop Clients to access DevOps Service](../tutorial_clients/tutorial_clients.md)
* [Developing BlueMix applications in Java with Eclipse and DevOps Services](../tutorial_jazzrtc/tutorial_jazzrtc)


   [1]: https://ace.ng.bluemix.net/ (BlueMix)
   [2]: https://hub.jazz.net/project/curtispd/Sentiment%20Analysis%20App/overview
   [3]: images/forkbutton.gif
   [4]: images/ForkNew.gif
   [5]: images/simpledeployment.gif
   [6]: images/closesimple.gif
   [7]: images/StockApp.gif
   [8]: images/Builder1.gif
   [9]: images/DeployScriptEx.gif
   [10]: images/history.gif
   [11]: https://ace.ng.bluemix.net
   [12]: images/startappbluemix.gif
   [13]: images/AutocompleteSearch.gif
   [14]: images/staging.gif
   [15]: images/commit.gif
   [16]: images/pushing.gif
   [17]: images/manifest.gif
   [18]: images/manualdeploy.gif
   [19]: images/UpdatedApp.gif
   [20]: https://www.ibmdw.net/answers?community=jazzhub (forum)
   [21]: mailto:hub%40jazz.net
  