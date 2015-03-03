#Getting Started with Bluemix and Bluemix DevOps Services using Java

Last modified: 17 February 2015

## Contents
* [Create an application with IBM Bluemix](#create_bluemix_app)
* [Build and deploy by using Bluemix DevOps Services](#build_and_deploy)
* [Push changes to the Git repository by using the command line](#push_to_git)
* [Edit and deploy code by using the Bluemix DevOps Services Web IDE](#edit_and_deploy_with_web_ide)
* [Summary](#summary)

<a name='create_bluemix_app'></a>
##Create an application with IBM Bluemix

IBM® Bluemix™ is an open-standard, cloud-based platform for building, managing and running apps of all types, including web, mobile, big data, smart devices. The Bluemix capabilities include Java™, mobile back-end development, application monitoring, and capabilities from ecosystem partners and open source, all through an as-a-service model in the cloud.

If you aren't registered, [sign up for free on the Bluemix home page][1].

![Sign up for free][2]

After you register, [learn more about Bluemix at IBM Bluemix Docs][53]. 

If you prefer to try things rather than read about them, try this tutorial. You can set up and run a sample app in minutes.

[Sign in to Bluemix][1] to start working!

![Bluemix Dashboard][6]

The dashboard shows an overview of the active Bluemix space for your organization. By default, the space is `dev` and the organization is the project creator's user name. For example, if `sara@example.com` signs in to Bluemix for the first time, the active space is `dev` and the organization is `sara@example.com`.

If you create other organizations or spaces in Bluemix, be sure to use the default selections as you follow the tutorial. 

Click **CREATE AN APP**, then select **WEB**. On the next page, select Liberty for Java, then click **CONTINUE**: 

![Bluemix Java Web Starter][7]

Choose a name for your app and click Finish.

![Naming a Bluemix app][54]

In a few moments, you'll have a Java web server application instance running on Bluemix:

![The new app's Bluemix dashboard][55]

If you click the route on the application dashboard, you can access the running Starter application:

![A running web application][10]

Although it's great that the application is running, you will want to modify it to make it more interesting.  

You can work with your application code in many ways. For example, with auto-deploy, you can modify the code that runs in your app by pushing the changes to a Git repository. The mechanism that implements auto-deploy is provided by Bluemix™ DevOps Services, but more about that later.

To enable auto-deploy, on your app’s overview page, click **ADD GIT**. 

![Add Git][11]

You might be prompted to enter your password because Bluemix DevOps Services must verify that it can act on your behalf. 

![Bluemix DevOps Services sign in page][12]

**Note:** The first time that you access IBM DevOps Services, you must create an alias that is linked to your IBM id. An alias is a unique, publicly visible short name that is used in Git repository paths, Track & Plan, and desktop and command line clients, including the URL for the repository that is created for you. For this one-time process, follow the instructions in the window.

Make sure you check "Populate the repository with the starter application package and enable build and deploy". Click **CONTINUE**, then **CLOSE**. 

![Create Git repo dialog][13]

You successfully created a Git repo and loaded it with the application starter code.

![Git repo success message dialog][14]

Before you start editing your code in Bluemix DevOps Services, enable the Delivery Pipeline service in Bluemix so that you can use several of the build and deployment capabilities later. 

1.	On the new app’s overview page, click **ADD A SERVICE**.
2.	Select the DevOps category, then Click **Delivery Pipeline**. 
3.	Use the default settings for Space and App.
4.	Click **CREATE**.

The Delivery Pipeline service is added to your Bluemix space. It will be ready when you need it later.

To see or edit the sample application code or to configure a Delivery Pipeline, use Bluemix DevOps Services. Click **EDIT CODE**.

![CODE button][15]

---
<a name='build_and_deploy'></a>
##Build and deploy by using Bluemix DevOps Services

Your project opens in the Bluemix DevOps Services Web IDE (integrated development environment). When you clicked **Add Git Integration** in Bluemix, you populated a new Git repository with sample code. When you click EDIT CODE, that content is loaded into a work area associated with the project, called the project workspace. For now, see how the code is pushed to Bluemix.

Click **BUILD & DEPLOY**.

![Web IDE][16]

Run your build by selecting the play icon in the Build stage tile. 

![Play button][57]

This starts the build stage. The deploy stage is configured to auto-deploy your application after a successful build. 
When the application is running, it is available at the URL shown on the Deploy stage tile. You can see the application's overview on Bluemix by clicking the app name.

![Bluemix DevOps Services autoconfigured Pipeline][17]

Your sample project is configured to automatically build and deploy the Liberty for Java sample application, but you can make changes to the configuration.

![A preconfigured Pipeline][52]

To see how to set up the Build & Deploy feature, also known as Pipeline, undo the configuration:
  
  1. On the Deploy Stage tile, click the gear icon. Click **Delete Stage** and confirm the deletion.
  2. On the Build Stage tile, click the gear icon. Click **Delete Stage** and confirm the deletion.

Within the Build & Deploy stages, you can configure jobs to compile and package your application, deploy the application to Bluemix, and run tests on your code. In this tutorial, you create a Build stage, which contains a build job, and a Deploy stage, which contains a deploy job.

![Unconfigured Advanced Build & Deploy page][45]

Configure the build stage:

  1. Click **ADD STAGE**. The Stage Configuration page opens.
  2. Click the stage name, **MyStage**. Enter `Build` as the new name.
  3. Make sure that the **Automatically execute jobs when a change is pushed to Git** option is selected. The stage is configured to accept input from the master branch of your project's Git repository.
  4. Click **JOBS**. Click **ADD JOB** and then select **Build**.
  5. For the builder type, select Ant. Use the default settings for everything else. The ant command will find the default build script file, 'build.xml', which is provided in the sample at the root directory. The files that are needed for deployment are copied into the build archive directory.
  6. Click **SAVE**.

![Configuring the Builder][18]

After a moment, the Pipeline page is refreshed and shows the information about your newly configured stage.

![A configured Builder panel][46]

Click the play icon at the top of the Build stage tile. After a moment, you have a successful build.

![A configured Builder panel with a successful build][47]

Create another stage so that you can deploy your build to Bluemix:

  1. Click **ADD STAGE**. The Stage Configuration page opens.
  2. Click the stage name, **MyStage**. Enter `Deploy to dev` as the new name.
  3. Make sure that the **Automatically execute jobs when the previous stage completes successfully** option is selected. The stage is already configured to accept the build job output from the Build stage that precedes it.
  4. Click **JOBS**. Click **ADD JOB** and then select **Deploy**.
  5. Use the default settings on the Deploy Configuration page.
  6. Check the **Space** field to confirm that you are deploying the app to your Bluemix organization's dev space.
  7. Click **SAVE**.

![Configuring the Deployer with the Add Deployer Stage screen][19]

After a moment, the Pipeline page is refreshed and shows the information about your newly configured stage.

![Fully configured Pipeline][48]

Start the deployment by dragging the build from the bottom of the Build stage onto the Deploy to dev stage. Dragging a build onto a stage with a deploy job is one way to start a deployment. In a few moments, your application is deployed to Bluemix. Because you selected **Automatically execute jobs when the previous stage completes successfully** when you set up the deploy stage, successful builds of your app are deployed automatically.

![Dropping to deploy][49]

To view your application on the web, in the Deploy to dev stage, click the URL under the Last Execution Result heading. To view your application’s Bluemix dashboard, click its name.

![A deployed app using fully configured Pipeline][50]

In this tutorial, you configured a single stage for deployment. You might want more stages; for example, so that you can have separate instances for testing and production. If so, create more stages that contain the jobs that you want to run.

When you build and deploy apps by using Bluemix, your Bluemix billing account might be charged. A project is granted 60 minutes of free build time per month. For more information about pricing for any service, see the [Bluemix Pricing page](https://bluemix.net/#/pricing).

---
<a name='push_to_git'></a>
##Push changes to the Git repository by using the command line

You now have a Git repo with sample code. You can use many tools to work with Git, including all of the major desktop IDEs and the Bluemix DevOps Services Web IDE. For now, use the command-line Git support.

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

To make changes to your app source code, find the `WebContent folder` then the file `index.html`. Change some text in the body of the HTML.  When you're done, change to your project directory and `git stage`, `git commit`, and `git push`:
 
    $ cd /project_directory
    $ git stage Webcontent/index.html
    $ git commit -m "Sample app headline change"
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
<a name='edit_and_deploy_with_web_ide'></a>
##Edit and deploy code by using the Bluemix DevOps Services Web IDE

In addition to build and deploy, Bluemix DevOps Services provides many other capabilities that are useful for application development:

  * Hosting for public projects
  * Multiple source code repositories
  * Support for teams that use agile development
  * Web-based development tools with customizations specifically for working with Bluemix

To learn more about Bluemix Bluemix DevOps Services, see its [Learn page][27].

So far, you used command-line tools to modify your code and push it to the repository. However, you can work with Bluemix DevOps Services entirely in your browser.

Return to the deployment page and click **EDIT CODE**. A complete online integrated development environment (IDE) opens, which is based on the work of the [Orion][28] open source project. 

![Orion at Bluemix DevOps Services][29]

In this environment, you can edit files with syntax coloring support for multiple programming languages, including HTML, CSS, Java, JavaScript, Ruby, and Python. For some languages, such as JavaScript and CSS, the IDE also supports syntax checking and content assist, both for standard language constructs and for services that Bluemix provides. To use content assist, press Ctrl + Space. For example, this image shows code completion for the standard Node.js express module:

![Orion showing express completions][30]

**Tip:** While you are outside of the code editor, you can search through the various key bindings in the IDE by pressing Shift + ?. To search while you’re in the editor, press Shift + Alt + ?. 

Fetch the change you made to the app and merge the change so that it is shown in the Web IDE. 

Open the Git Repository page. 

![Orion git status menu](/tutorials/jazzeditorjava/images/orion-git-status.png)

Fetch and then merge the change to your app.

![Fetching and merging the change](/tutorials/jazzeditorjava/images/merge.png)

Navigate through the directory tree and find the file you worked on before; for example, `WebContent/index.html`. 

Edit the file in place.

![Orion editing index](/tutorials/jazzeditorjava/images/heyworld.png)

Save your changes. Return to the Git page, then push the change by using the integrated Git support.

In the Working Directory pane, stage the change by selecting the files you want to commit to the master branch.

Type a description of the change and click **Commit**.

![Orion git commit][34]

Push the change from the local 'master' branch to the remote branch.

![Orion git push][35]

You can use either the Web IDE or the command line to make changes to your app. Open your application to see your changes. If you already have it open in a browser window, refresh the page.

![Our really cool app][36]


---
<a name='Summary'></a>
## Summary

In this tutorial, you learned to easily create a Java web app on Bluemix and run that app. With a few clicks, you created a Git repo, loaded it with the sample code, and automatically deployed the app. You changed code and pushed it by using the Git command line. You then did the same thing entirely in your browser by using the Bluemix DevOps Services Web IDE. You configured automatic building and deployment, checked the status of the app deployment, and ran the app to verify your changes. 

You learned how to get started with Bluemix and Bluemix DevOps Services by using Java. Lots of details were minimized, but you can find out more from the documentation links at the beginning of the tutorial.

To learn more about configuring Eclipse or other desktop clients to work with your Git repository, [see Setting up Eclipse, Git, and Rational Team Concert Desktop Clients for use with DevOps Service][26].

To learn about how to integrate unit testing into your Bluemix DevOps Services projects, [see Developing Bluemix applications in Java with Eclipse and Bluemix DevOps Services][40].

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
   [17]: /tutorials/jazzeditorjava/images/simpledeploy2.png
   [18]: /tutorials/jazzeditorjava/images/configbuilder.png 
   [19]: /tutorials/jazzeditorjava/images/deployer.png 
   [20]: /tutorials/clients (Setting up Eclipse, Git, and Rational Team Concert Desktop Clients for use with Bluemix DevOps Services)
   [21]: /tutorials/jazzeditorjava/images/cli-git-clone.gif 
   [22]: /tutorials/jazzeditorjava/images/cli-stage-commit.gif 
   [23]: /tutorials/jazzeditorjava/images/cli-push.gif 
   [24]: /tutorials/jazzeditorjava/images/autodeploy.gif 
   [25]: /tutorials/jazzeditorjava/images/app-new-title.png 
   [26]: /tutorials/clients (Setting up Eclipse, Git, and Rational Team Concert Desktop Clients for use with Bluemix DevOps Services)
   [27]: https://hub.jazz.net/learn (Bluemix DevOps Services introduction)
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
   [40]: /tutorials/jazzrtc (Developing Bluemix applications in Java with Eclipse and Bluemix DevOps Services)
   [41]: /tutorials/jazzeditor (Getting Started with Bluemix and Bluemix DevOps Services using Node.js)
   [42]: /tutorials/clients (Setting up Eclipse, Git, and Rational Team Concert Desktop Clients to access Bluemix DevOps Services)
   [43]: /tutorials/jazzweb (Developing Bluemix applications in Node.js with the Bluemix DevOps Services Web IDE)
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
   [57]: /tutorials/jazzeditorjava/images/playbutton.png
