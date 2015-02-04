#Getting Started with IBM Bluemix and DevOps Services using Java

Last modified: 5 February 2015

##Create an app using IBM Bluemix

IBM® Bluemix™ is an open-standard, cloud-based platform for building, managing and running apps of all types: web, mobile, big data, smart devices. The Bluemix capabilities include Java™, mobile back-end development, application monitoring, and capabilities from ecosystem partners and open source, all through an as-a-service model in the cloud.

If you aren't registered, [sign up for free on the Bluemix home page][1].

![Sign up for free][2]

After you register, [learn more about Bluemix at IBM Bluemix Docs][53]. 

If you prefer to try things rather than read about them, try this tutorial. You can set up and run a sample app in minutes.

[Sign in to Bluemix][1]. The dashboard opens:

![Bluemix Dashboard][6]

The dashboard shows an overview of the active Bluemix space for your organization. By default, the space is `dev` and the organization is the project creator's user name. For example, if `sara@example.com` signs in to Bluemix for the first time, the active space is `dev` and their organization is `sara@example.com`.

If you create extra organizations or spaces in Bluemix, be sure to use the same ones as you follow these tutorials. Use the default selections.

Click **CREATE AN APP**, then select **WEB**. Select the Liberty from Java Starter, then click **CONTINUE**: 

![Bluemix Java Web Starter][7]

Choose a name for your app:

![Naming a Bluemix app][54]

In seconds, you'll a Java web server application instance running on Bluemix:

![The new app's Bluemix dashboard][55]

If you click the route on the application dashboard, you can access the running Starter application:

![A running web application][10]

Although it's great that the application is running, it's not interesting as it is. You will push updates to it.  

You can work with your application code in many ways. For example, with auto-deploy, you can modify the code that runs in your app by pushing the changes to a Git repository. The mechanism that implements auto-deploy is provided by the IBM DevOps Services, but more about that later.

To enable automatic deployment, on your app’s overview page, click **ADD GIT**. 

![Add Git][11]

You might be prompted to enter your password because DevOps Services must verify that it can act on your behalf. 

![DevOps Services sign in page][12]

**Note:** The first time that you access IBM DevOps Services, you must create an alias that is linked to your IBM id. An alias is a unique, publicly visible short name that is used in Git repository paths, Track & Plan, and desktop and command line clients, including the URL for the repository that is created for you. For this one-time process, follow the instructions in the window.

Make sure that the check box to populate the Git repo with the starter application package and automatically deploy the app is selected. Click **CONTINUE**. When you are prompted, click **CLOSE**. 

![Create Git repo dialog][13]

You created a Git repo, loaded it with additional sample code, and deployed the app.

![Git repo success message dialog][14]

Before you move to DevOps Services, do one more thing: enable the Delivery Pipeline service in Bluemix so that you can use several of the build and deployment capabilities later. 

1.	On the new app’s overview page, click **ADD A SERVICE**.
2.	For the DevOps category, select **Delivery Pipeline**. 
3.	Leave the settings for Space and App as is. 
4.	Click **CREATE**.

The Delivery Pipeline service is added to your Bluemix space, so it will be ready when you need it later. 

Want to see the app's code or configure how it deploys? Use IBM DevOps Services. Return to the dashboard, click your app's tile, and then click **EDIT CODE**.

![CODE button][15]

---
##Build and deploy using DevOps Services

Your new project opens in the DevOps Services web IDE. When you clicked **Add Git Integration** in Bluemix, you populated a new Git repository with the sample code that you now see. The repository contains lots of useful information, which you can peruse later. For now, see how the code is pushed to Bluemix. 

Click **BUILD & DEPLOY**.

![Web IDE][16]

The Build & Deploy page opens. If it's your first time using this feature, you will see a welcome page. Click **GET STARTED** to proceed.  

A deployment of your sample app is already started. When it's running, the app is available at the URL that is shown in the stage named "dev Deploy." You can see the app’s overview on Bluemix by clicking the app name.

![DevOps Services autoconfigured Pipeline][17]

DevOps Services is already configured to automatically build and deploy the Liberty for Java sample application. Undo this configuration to see how to set up Build & Deploy yourself:

![A preconfigured Pipeline][52]

  1. Click the gear icon on the rightmost tile (the stage named "dev Deploy"). Click **Delete Stage** and confirm the deletion.
  2. Click the gear icon on the remaining build stage tile. Click **Delete Stage** and confirm the deletion.

When you use Build & Deploy, you can configure a build stage to compile and package your application. Then, you configure a deploy stage to deploy the application to Bluemix.

![Unconfigured Advanced Build & Deploy page][45]

Configure the build stage:

  1. Click **add a builder**. The Add Builder page opens. 
  2. For this project, select "Ant" as the Builder, and use the default settings for everything else. 
    * The build stage will pull from the master branch of your Git repo. The builder will find the `build.xml` file in the root directory and run it during the build. The files that are needed for deployment are copied into the build archive directory. The build archive directory defaults to the same directory as the build script path. 
  3. Make sure that the check box for **Automatically build when a change is delivered/pushed** is selected.

![Configuring the Builder][18]

Click **SAVE**. In a moment, the Pipeline page is refreshed and shows the information about your newly configured builder. 

![A configured Builder panel][46]

Click **REQUEST BUILD**. After a moment, you have a successful build.

![A configured Builder panel with a successful build][47]

Put the build on the web by using Bluemix: click **add a stage**. 

The Deployer Stage Configuration page opens. On that page, you can configure deployments to Bluemix. You can give the app a name. By default, the name comes from the manifest file, `manifest.yml`, which Bluemix uses to deploy your application.

![Configuring the Deployer with the Add Deployer Stage screen][19]

1.  Leave the **Stage Name** field at its default.
2.	Leave the **Application name** field alone; the default name comes from the project `manifest.yml` file. 
3.	Leave the **Target** and **Organization** as they are. 
4.	You can select a **Space** to use, or create one. For the purposes of this tutorial, leave the space as "dev."  
The script section shows the deployment script that runs to deploy the application. The `CF_APP` variable resolves to the app name.
5.	Click **SAVE**. Your app is ready to be pushed to Bluemix. 

![Fully configured Pipeline][48]

Drag the build to the stage that you configured. Dragging a build onto a deployer stage is one way to kick off a deployment. In seconds, your app is on Bluemix. Because you configured the Delivery Pipeline service, future successful builds of your app are automatically deployed. 

![Dropping to deploy][49]

To view your app on the web, click its name. To view your app’s Bluemix dashboard, click next to your app in the *dev* deployment pane. 

![A deployed app using fully configured Pipeline][50]

In this tutorial, you configure a single deployment stage. If you want more stages, for example, to have separate instances for testing and production, use multistage deployment in DevOps Services. To learn more, watch this short video:

<iframe width="560" height="315" src="//www.youtube.com/embed/5jdKL8VZgP0?rel=0" frameborder="0" allowfullscreen></iframe> 

When you build and deploy apps by using Bluemix, your Bluemix billing account might be charged. A project is granted 60 minutes of free build time per month. For more information about pricing for any service, see the [Bluemix pricing page](https://bluemix.net/#/pricing).

---
##Push changes to the Git repository using the command line

You now have a Git repo with example code. You can use many tools to work with Git, including all of the major desktop IDEs and the DevOps Services web IDE. For now, use the command-line Git support.

**Note:** If you don't have Git, [see Setting up Eclipse, Git, and Rational Team Concert Desktop Clients for use with DevOps Service][20]. If you want to learn more about working with Git, [see the Git documentation pages](http://git-scm.com/doc).

Clone from the project repository URL, which you can find on the Bluemix application's dashboard or the DevOps project's overview:


    $ git clone https://hub.jazz.net/git/ibmdevopsservices/YourApp-2014
    Cloning into 'YourApp-2014'...
    Username for 'https://hub.jazz.net': ibmdevopsservices
    Password for 'https://ibmdevopsservices@hub.jazz.net':
    remote: Counting objects: 49, done
    remote: Finding sources: 100% (49/49)
    remote: Total 49 (delta 0), reused 49 (delta 0)
    Unpacking objects: 100% (49/49), done.
    Checking connectivity... done. 

Change your app source code and see what happens. In the `WebContent folder`, a file is named `index.html`. This file contains some of what you see when you view your app on the web. Change some text in the body of the HTML. For example, to see a quick change, add an extra message below the sample paragraph. When you're done, change to your project directory and `git stage`, `git commit`, and `git push`:

    $ cd /project_directory
    $ git stage Webcontent/index.html
    $ git commit -M "Sample app headline change"
    [master 2336018] Sample app headline change
    1 file changed, 1 insertion(+), 1 deletion(-)


    $ git push
    Username for 'https://hub.jazz.net': ibmdevopsservices
    Password for 'https://ibmdevopsservices@hub.jazz.net':
    Counting objects: 8, done.
    Delta compression using up to 4 threads.
    Compressing objects: 100% (4/4), done.
    Writing objects: 100% (4/4), 382 bytes | 0 bytes/s, done.
    Total 4 (delta 3), reused 0 (delta 0)
    remote: Resolving deltas: 100% (3/3)
    remote: Processing changes: refs: 1, done
    To https://hub.jazz.net/git/ibmdevopsservices/YourApp-2014
    	ab4aaad..2336018 master -> master

Return to the Build &amp; Deploy page. You can see that a new build was requested. It was automatically triggered by the changes that you delivered to the project repository. When the build is finished, it is deployed to Bluemix. When the instance is running, you can view your updated app on the web. 

Refresh your browser to ensure that the updated page is shown.

![Application page showing new message][25]

You can continue to modify the example and push your changes to the Git repository as often as needed. As the scope of the work grows and more people are added to the project, everyone can push changes to the repository. Standard repository operations and build and deploy are all that is required to ensure that the right bits are always running.

If you want to configure desktop clients to work with your Git repository, [see Setting up Eclipse, Git, and Rational Team Concert Desktop Clients for use with DevOps Service][26].

---
##Edit and deploy code using the DevOps Services web IDE

In addition to build and deploy, DevOps Services provides many other capabilities that are useful for application development:

  * Hosting for public projects
  * Multiple source code repositories
  * Support for teams that use agile development
  * Web-based development tools with customizations specifically for working with Bluemix

To learn more about DevOps Services, see its [Learn page][27].

So far, you used command-line tools to modify your code and push it to the repository. However, you can work with DevOps Services another way: entirely in your browser.

Return to the deployment page and click **EDIT CODE**. A complete online integrated development environment (IDE) opens, which is based on the work of the [Orion][28] open source project. 

![Orion at DevOps Services][29]

In this environment, you can edit files with syntax coloring support for multiple languages, including HTML, CSS, Java, JavaScript, Ruby, and Python. For some languages, such as JavaScript and CSS, the IDE also supports syntax checking and content assist, both for standard language constructs and for services that Bluemix provides. To use content assist, press Ctrl + Space. For example, this image shows code completion for the standard Node.js express module:

![Orion showing express completions][30]

**Tip:** While you are outside of the code editor, you can search through the various key bindings in the IDE by pressing Shift + ?. To search while you’re in the editor, press Shift + Alt + ?. 

To complete the process, you must make one more modification to your application in web IDE. First, though, you must fetch the change to the app title that you just made and merge the change so that it is shown in the web IDE. 

Open the Git Repository page. 

![Orion git status menu](/tutorials/jazzeditorjava/images/orion-git-status.png)

Fetch and then merge the change to your app.

![Fetching and merging the change](/tutorials/jazzeditorjava/images/merge.png)

Navigate through the directory tree until you reach the same file that you worked on before; for example, `WebContent/index.html`. 

Edit the file in place.

![Orion editing index](/tutorials/jazzeditorjava/images/heyworld.png)

Return to the Git page, then push the change by using the integrated Git support:

![Orion git status menu](/tutorials/jazzeditorjava/images/orion-git-status.png)

Stage the change by selecting the check box next to it.

![Orion git staging][33]

Enter a commit message and then click **Commit**.

![Orion git commit][34]

Push the change to the `master` branch on the `origin` remote.

![Orion git push][35]

This process is like the process you did on the command line, only with more clicks and less typing. To see that your app was updated, refresh your browser.

![Our really cool app][36]

---
## Manual deployment

While you're working in the directory that contains your `manifest.yml file`, you can manually deploy whatever is in the web IDE workspace to Bluemix by using the Play button in the Run Bar. Remember: When you deploy with the Run Bar, you deploy the current state of your code in the web IDE. Build &amp; Deploy deploys from what is checked into the repository.

![The IDE Run Bar][56]

You can configure web IDE manual deployment and Build &amp; Deploy's automatic deployment to use different app names. Then, you can use the web IDE deployment for a personal test environment and automatic deployment for a team integration environment. Manual deployment launch configurations are saved in the web IDE; you can access them via the dropdown menu in the Run Bar. 

Whether you are using command-line tools or the web IDE, both methods are effective for rapid, solo development. You might prefer the added security of having automatic deployment so that you can control what is being pushed. By using automatic deployment, you know that the code that is running in the app matches a known state in the repository. In contrast, manual deployment deploys whatever is in your working directory when you push.

---
## A final note

You saw how easy it is to create a Java web app on Bluemix and run that app. With a few clicks, you created a Git repo, loaded it with the sample code, and automatically deployed the app. You changed code and pushed it by using the Git command line. You then did the same thing entirely in your browser by using the DevOps Services web IDE. You configured automatic building and deployment, checked the status of the app deployment, and ran the app to verify your changes. 

Hopefully, you learned how to get started with Bluemix and DevOps Services by using Java. Lots of details were minimized, but you can find out more from the documentation links at the beginning of the tutorial.

To learn more about configuring Eclipse or other desktop clients to work with your Git repository, [see Setting up Eclipse, Git, and Rational Team Concert Desktop Clients for use with DevOps Service][26].

To learn about how to integrate unit testing into your DevOps Services projects, [see Developing Bluemix applications in Java with Eclipse and DevOps Services][40].

   [1]: https://bluemix.net/ (Bluemix)
   [2]: /tutorials/jazzeditorjava/images/bm-join.png
   [3]: https://bluemix.net/docs/QuickStart.jsp (Bluemix getting started)
   [4]: https://bluemix.net/docs/BlueMixIntro.jsp (Bluemix overview)
   [5]: https://bluemix.net/docs/Tutorials.jsp (Bluemix tutorials)
   [6]: /tutorials/jazzeditorjava/images/demo-dash.png 
   [7]: /tutorials/jazzeditorjava/images/bm-java-starter.png 
   [8]: /tutorials/jazzeditorjava/images/create-jws-app.png 
   [9]: /tutorials/jazzeditorjava/images/examplepanel.gif 
   [10]: /tutorials/jazzeditorjava/images/bm-example.png 
   [11]: /tutorials/jazzeditorjava/images/addgitintegration.png
   [12]: /tutorials/jazzeditorjava/images/jh-signin.gif 
   [13]: /tutorials/jazzeditorjava/images/bm-create-git-repo.png 
   [14]: /tutorials/jazzeditorjava/images/bm-git-repo-success-msg.png 
   [15]: /tutorials/jazzeditorjava/images/bm-code-button.png 
   [16]: /tutorials/jazzeditorjava/images/webide.gif 
   [17]: /tutorials/jazzeditorjava/images/simpledeploy.png 
   [18]: /tutorials/jazzeditorjava/images/configbuilder.png 
   [19]: /tutorials/jazzeditorjava/images/deployer.png 
   [20]: /tutorials/clients (Setting up Eclipse, Git, and Rational Team Concert Desktop Clients for use with DevOps Services)
   [21]: /tutorials/jazzeditorjava/images/cli-git-clone.gif 
   [22]: /tutorials/jazzeditorjava/images/cli-stage-commit.gif 
   [23]: /tutorials/jazzeditorjava/images/cli-push.gif 
   [24]: /tutorials/jazzeditorjava/images/autodeploy.gif 
   [25]: /tutorials/jazzeditorjava/images/app-new-title.png 
   [26]: /tutorials/clients (Setting up Eclipse, Git, and Rational Team Concert Desktop Clients for use with DevOps Services)
   [27]: https://hub.jazz.net/learn (DevOps Services introduction)
   [28]: http://orion.eclipse.org/ (The Eclipse Orion project)
   [29]: /tutorials/jazzeditorjava/images/orion.png
   [30]: /tutorials/jazzeditorjava/images/completion.png 
   [31]: /tutorials/jazzeditorjava/images/heyworld.png 
   [32]: /tutorials/jazzeditorjava/images/orion-git-status.png 
   [33]: /tutorials/jazzeditorjava/images/unstaged.png 
   [34]: /tutorials/jazzeditorjava/images/commit.png
   [35]: /tutorials/jazzeditorjava/images/push.png 
   [36]: /tutorials/jazzeditorjava/images/endexampleapp.png 
   [37]: /tutorials/jazzeditorjava/images/manualdeploy.png
   [38]: https://www.ibmdw.net/answers?community=jazzhub (forum)
   [39]: mailto:hub%40jazz.net
   [40]: /tutorials/jazzrtc (Developing Bluemix applications in Java with Eclipse and DevOps Services)
   [41]: /tutorials/jazzeditor (Getting Started with Bluemix and DevOps Services using Node.js)
   [42]: /tutorials/clients (Setting up Eclipse, Git, and Rational Team Concert Desktop Clients to access DevOps Services)
   [43]: /tutorials/jazzweb (Developing Bluemix applications in Node.js with the DevOps Services Web IDE)
   [44]: /tutorials/jazzeditorjava/images/panel_gear.gif
   [45]: /tutorials/jazzeditorjava/images/un-pipeline.png
   [46]: /tutorials/jazzeditorjava/images/configured-builder.png
   [47]: /tutorials/jazzeditorjava/images/configured-and-built.png
   [48]: /tutorials/jazzeditorjava/images/configured-pipeline.png
   [49]: /tutorials/jazzeditorjava/images/drop-to-deploy.png
   [50]: /tutorials/jazzeditorjava/images/deployed-with-pipeline.png
   [51]: /tutorials/jazzeditorjava/images/click-to-open.gif
   [52]: /tutorials/jazzeditorjava/images/config-to-delete.png
   [53]: https://www.ng.bluemix.net/docs/#
   [54]: /tutorials/jazzeditorjava/images/bm-name-app.png
   [55]: /tutorials/jazzeditorjava/images/bm-web-starter.png
   [56]: /tutorials/jazzeditorjava/images/runbar_green.png
