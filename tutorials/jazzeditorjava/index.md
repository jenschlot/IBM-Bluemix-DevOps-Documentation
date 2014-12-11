#Getting Started with IBM Bluemix and DevOps Services using Java

Last modified: 4 November 2014

##Create an application with IBM Bluemix

*[IBM® Bluemix™][1] is an open-standard, cloud-based platform for building, managing and running apps of all types (web, mobile, big data, new smart devices). Capabilities include Java™, mobile backend development, application monitoring, as well as capabilities from ecosystem partners and open source, all through an as-a-service model in the cloud.*

If you aren't registered already, you'll need to do so at the [Bluemix home page][1]. Click **Sign up for free** to get set up. 

![Sign up for a free][2]

After you register, there is lots of helpful information available on the [Bluemix][1] site, such as ...

* [Getting Started with IBM Bluemix](https://bluemix.net/docs/QuickStart.jsp)
* [IBM Bluemix Overview](https://bluemix.net/docs/BlueMixIntro.jsp)

... but if you prefer to _try_ things rather than read about them, follow along. You can have a sample application up and running in minutes.

You can start by signing in to [Bluemix][1], which takes you to the _Dashboard_:

![Bluemix Dashboard][6]

The dashboard gives you an overview of the active Bluemix space for your organization. By default, the space is `dev` and the organization is the project creator's user name. For example, if `sara@example.com` logs in to Bluemix for the first time, their active space is `dev` and their organization is `sara@example.com`.

If you create extra organizations or spaces in Bluemix, remember to use the same ones as you follow these tutorials. If you stick to the default selections, you will be fine.

Click **CREATE AN APP** to choose different kinds of runtimes (like Java or Ruby), services (such as DataCache or Mongo), and Boilerplates, which are application templates that get you started quickly. Select the **Java Web Cache Starter** Boilerplate:

![Bluemix Java Web Starter][7]

As you can see, the application is a simple Java Web server that includes some example code that demonstrates the IBM DataCache and Monitoring and Analytics services. You'll use this Boilerplate in this tutorial. 

You're a few clicks away from having a running application.

In the *Create an app* panel, enter a **Name** for your app. Enter a different host if Bluemix indicates that a host route is taken (or if you want a host that's different from the app name). Leave the **Space** field as it is. 
![Bluemix Create App dialog][8]

The **Name** is a simple name that you can use to find this application the next time you come back to the Bluemix dashboard. **Host** partially defines the URL (the rest comes from Bluemix itself) that is used to access your new app from the Internet. As you probably guessed, this URL must be unique, since the URL space is shared among all users. In *Selected Plans*, leave **Liberty for Java™** as *Default*, and **Datacache** and **Monitoring and Analytics** as *Free.*

That's all there is to it! You'll be taken to your app's overview page. It takes a short while for the application to start, but when it does, click your app's route to see it running:

![A running web application][10]

It's great that the application is running, but it's not especially interesting if you don't have a way to publish updates to it. 

There are lots of ways you can work with your application code, but one of the slickest is to use something that is called _auto-deploy_. With auto-deploy, you can modify the code that is running in your app by pushing the changes to a Git repository. The mechanism that implements auto-deploy is provided by the IBM DevOps Services powered by JazzHub Build &amp; Deploy support, but more about that later.

To enable automatic deployment, click **ADD GIT** on your app's overview page. With a click, you get a Git repo that's populated with the code from the sample Java app.

![Add Git][11]

You might be asked to enter your password because DevOps Services must verify that it can act on your behalf, so enter your IBM id password and click **Sign In**.

![DevOps Services sign in page][12]

*Note: The first time that you access DevOps Services, you might need to create a "Jazz™ ID" and link it to your IBM id. A Jazz ID is a kind of "short name" that is used in several places, including the URL for the repository that is about to be created for you. Follow the instructions in the dialog. You'll only ever see it once.*

Make sure the box to populate the Git repo with the starter application package and automatically deploy the app is checked.

![Create Git repo dialog][13]

Success! You've created a Git repo, loaded it with the example code, and deployed the app, all in a few clicks.

![Git repo success message dialog][14]

There's just one more thing to do before you move on to DevOps Services: you need to enable the Delivery Pipeline service in Bluemix to take advantage of some of the fancier build and deployment capabilities later on. 

To add it:
1. Click **ADD A SERVICE** from your new app's overview.
2. Choose **Delivery Pipeline** in the *DevOps* category. 
3. Don't worry about *Space* or *App*. Click **CREATE**.

The Delivery Pipeline service will be added to your Bluemix space, ready to spring into action as you need it later.  

What if you want to see the app's code, now, or configure how it deploys? These things are done in IBM DevOps Services. Return to the dashboard, click your app's tile to open its overview, and then click **EDIT CODE**.

![CODE button][15]

---
##DevOps Services

Your new project opens in the DevOps Services web IDE. When you clicked "Add Git Integration" in Bluemix, you chose to populate a new Git repository with the code that's now in front of you. There is lots of useful information here, which you can peruse later, but for now, you will see how the code you have here is pushed out to Bluemix. Click **BUILD &amp; DEPLOY**.

![Web IDE][16]

You'll arrive at the **Simple** page. With this deployment option, the contents of the Git repository are deployed directly to Bluemix. There is no intermediate build step.

A deployment of your sample app is already started. When it's running, it's available at the URL linked after **Deploy to**, while you can click the app name to view its overview on Bluemix.

![DevOps Services auto deploy page][17]

You might be wondering how DevOps Services deployed a Java application directly from source, and well, it's not: this project is designed to help you get a sample application to run on Bluemix as quickly as possible. The app is already compiled, and the sample .war file is in the root directory.

When you change things, you'll need to build the app again, and the Simple deployer doesn't do that. It's time to change the switch to **Advanced**. Click it!

---
## Configuring Advanced Build &amp; Deploy

When you switch from Simple to Advanced mode, Pipeline automatically generates a configuration for your project. You will configure Advanced Build & Deploy from scratch, though, so before you go further:

![A preconfigured Pipeline][52]

1. Click the gear icon on the rightmost tile, which represents a stage that is named `dev` by default. 
2. On the *Deployer Stage Configuration* page, click **DELETE**. Click **OK** when the confirmation message appears.
3. Click the gear icon on the Builder tile.
4. On the *Builder Configuration* page, click **RESET**. Click **OK** when the confirmation message appears.

With the Advanced option, also known as Pipeline, you can configure a builder to compile and package your application. You can then configure a deployer to deploy the application to Bluemix with any additional options needed.

![Unconfigured Advanced Build & Deploy page][45]

First, configure the builder. Click **add a builder**. The *Add Builder* configuration page will open. 

![Configuring the Builder][18]

The default settings will work for this project: build with Ant and pull from the master branch of your Git repo. The builder will find `build.xml` in the root directory and run it during the build. The files that are needed for deployment are output into the build archive directory. It defaults to the same directory as the build script path, so there's no need to change that setting, either. Additionally, with automatic building enabled, changes delivered to the selected Git branch will trigger new builds. 

Click **Save**. In a moment, the Pipeline page will refresh with information on your newly configured builder. 

![A configured Builder panel][46]

Click **REQUEST BUILD**. In a moment, you will have a successful build on your hands. 

![A configured Builder panel with a successful build][47]

But what to do with it? Get it on the web with Bluemix! Click **add a stage**.  

![Configuring the Deployer with the Add Deployer Stage screen][19]

Here, you can configure deployments to Bluemix. You can give the app a name; by default, the name comes from the manifest file, `manifest.yml`, which tells Bluemix how to deploy your application. Leave it blank so that it will use the name in the manifest.

Leave the organization as it is. You can choose an existing space to use, or create a new one. Here, leave it as dev. 

The script section shows the deployment script that will be run to deploy the application. The `CF_APP` variable resolves to the app name. In this case, it will resolve to the name in the manifest, as the *Application name* field is blank. Click **SAVE**. 

![Fully configured Pipeline][48]

And that's as much configuration as you need to do. Next, your app is ready to be pushed out onto Bluemix. 

Remember the build that you requested a few moments ago? Drop it onto the stage you configured.

![Dropping to deploy][49]

Dragging a build onto a deployer stage is one way to kick off a deployment. In seconds, your app will be on Bluemix. Fast, right? And with the Pipeline configured, future successful builds of your app will be automatically deployed. 

![A deployed app using fully configured Pipeline][50]

You can click your app's name to view it on the web; click next to it in the  *dev* deployment box to look at your app's Bluemix dashboard. 

For this tutorial, you configure a single deployment stage. If you want more stages (maybe you want separate instances for testing and production, for example) you'll enjoy DevOps Services' multistage deployment capability. To learn more, watch this short video:

<iframe width="560" height="315" src="//www.youtube.com/embed/5jdKL8VZgP0?rel=0" frameborder="0" allowfullscreen></iframe> 

Building and deploying apps with Bluemix can result in charges to your Bluemix billing account. A project is granted 60 minutes of free build time per month, an amount that even the most dedicated tutorial enthusiasts are unlikely to accumulate. For more information about pricing for any service, see the [Bluemix pricing page](https://bluemix.net/#/pricing).

---
##Push changes to the Git repository by using the command line

You now have a Git repo with example code. Lots of tools can be used to work with Git, including all of the major desktop IDEs and DevOps Services' own web IDE. For now, use the command-line Git support.

**Note:** If you don't have Git, you can find information on installing it at [Setting up Eclipse, Git, and Rational Team Concert Desktop Clients for use with DevOps Service][20]. If you want to learn more about working with Git, you can browse the [Git documentation pages](http://git-scm.com/doc).

First, clone from the project repository URL, which you can find on the Bluemix application's dashboard _or_ the DevOps project's overview:


    $ git clone https://hub.jazz.net/git/jazzhubdemouser/YourApp-2014
    Cloning into 'YourApp-2014'...
    Username for 'https://hub.jazz.net': jazzhubdemouser
    Password for 'https://jazzhubdemouser@hub.jazz.net':
    remote: Counting objects: 49, done
    remote: Finding sources: 100% (49/49)
    remote: Total 49 (delta 0), reused 49 (delta 0)
    Unpacking objects: 100% (49/49), done.
    Checking connectivity... done. 

Next, change your app source code and see what happens. In the `WebContent` folder, there's a file that is named `index.html`. This file contains some of what you see when you view your app on the web. Change some text in the body of the HTML there with whatever tool you like. To see a quick change, search for the title text, `Welcome to my very own <span class="blue">Java Web Starter</span> on Bluemix!`, and edit a word or two. When you're done, change to your project directory and `git stage`, `git commit`, and `git push`, like so:

    $ cd /project_directory
    $ git stage Webcontent/index.html
    $ git commit -M "Sample app headline change"
    [master 2336018] Sample app headline change
    1 file changed, 1 insertion(+), 1 deletion(-)


    $ git push
    Username for 'https://hub.jazz.net': jazzhubdemouser
    Password for 'https://jazzhubdemouser@hub.jazz.net':
    Counting objects: 8, done.
    Delta compression using up to 4 threads.
    Compressing objects: 100% (4/4), done.
    Writing objects: 100% (4/4), 382 bytes | 0 bytes/s, done.
    Total 4 (delta 3), reused 0 (delta 0)
    remote: Resolving deltas: 100% (3/3)
    remote: Processing changes: refs: 1, done
    To https://hub.jazz.net/git/jazzhubdemouser/YourApp-2014
    	ab4aaad..2336018 master -> master

If you go back to the Build &amp; Deploy page, you might notice that a new build was requested. It was automatically triggered by the changes you delivered to the project repository. When it's finished, it will be deployed to Bluemix. When it's running, you can view your updated app on the web. Refresh your browser to ensure the updated page is displayed.

![Application page showing new title][25]

Excellent! Now you can continue to modify the example and push your changes to the Git repository as often as needed. And as the scope of the work grows, and more people are added to the project to work on it, _everyone_ can push changes to the repository. Standard repository operations and build and deploy are all that is required to ensure that the right bits are always running.

If you want to configure desktop clients to work with your Git repository, see [Setting up Eclipse, Git, and Rational Team Concert Desktop Clients for use with DevOps Service][26].

---
## Back to DevOps Services

In addition to build and deploy, DevOps Services provides many other capabilities that are useful for application development:

  * Hosting for public projects
  * Multiple source code repositories
  * Support for teams that use agile development
  * Web-based development tools with customizations specifically for working with Bluemix
  * And lots more coming...

To learn more about DevOps Services, see its [Learn page][27].

So far you've used command-line tools to modify your code and push it to the repository. However, you can work with DevOps Services another way: entirely in your browser.

Go back to the deployment page and click **EDIT CODE**. You'll be taken to a complete online integrated development environment (IDE), based on the work of the [Orion][28] open source project. Here's what it looks like when you open the example project:

![Orion at DevOps Services][29]

From this environment, you can edit files with syntax coloring support for multiple languages, including HTML, CSS, Java, JavaScript, Ruby, Python, and more. For some languages, like JavaScript and CSS, the IDE also supports syntax checking and content assist, both for standard language constructs and for services that are provided by Bluemix. To use Content Assist, press **Ctrl + Space**. For example, here's what it looks like providing code completion for the standard `node.js express` module:

![Orion showing express completions][30]

*Tip: While outside of the code editor, type Shift + ? to search through the various key bindings in the IDE. Type Shift + Alt + ? to do so while you're in the editor.* 

To round out the process, you'll make one more modification to your application in web IDE. Before you do that, though, you must fetch and merge the app title change that you just made with the command line so that it shows in the web IDE. You do that with the Git page. Open it. 

![Orion git status menu](/tutorials/jazzeditorjava/images/orion-git-status.png)

From the Git page, fetch and then merge the change to your app.

![Fetching and merging the change](/tutorials/jazzeditorjava/images/merge.png)

Next, navigate through the directory tree until you get to the same file you worked on before (for example, <tt>WebContent/index.html</tt>), then edit in place.

![Orion editing index](/tutorials/jazzeditorjava/images/heyworld.png)

You can then use the integrated Git support to push the change. Head back to the Git page.

![Orion git status menu](/tutorials/jazzeditorjava/images/orion-git-status.png)

Then, stage the change by checking the box next to it:

![Orion git staging][33]

Enter a commit message and then click **Commit**:

![Orion git commit][34]

**Push** the change to the <tt>master</tt> branch on the <tt>origin</tt> remote:

![Orion git push][35]

It's just like you did with the command line, only with a few more clicks and a lot less typing. And now that you've done that, you can again see that your app was updated (refresh your browser to view the changes).

![Our really cool app][36]

---
## Manual Deployment

Whie you're working in the directory that contains your `manifest.yml` file, you can click **Deploy** to manually deploy whatever is in the web IDE workspace to Bluemix. Remember: the **Deploy** button deploys the current state of your code *in your web IDE*, while Auto-Deploy deploys from what is checked into the repository.

![About to click the Deploy button in the Web IDE][37]

You could configure the web IDE deploy and the Auto-Deploy to use different app names. Then, you could use the web IDE deployment for a personal test environment and Auto-Deployment for a team integration environment.

Whether you are using command-line tools or the web IDE, they can be an effective way to work when you are doing rapid, solo development. For many of you, the added security of having auto-deploy control of what is being pushed is a better way to go. By using auto-deploy, you always know that the code that is running in the application matches some known state in the repository. In contrast, manual deployment deploys whatever happens to be in your working directory at the time you push.

---
## A Final Note

You just saw how easy it is to create a Java web app at Bluemix and run that app. With a few clicks, you created a Git repo, loaded it with the example code, and automatically deployed the app. In minutes, you changed code and pushed it using the Git command line. You then did the same thing entirely in your browser with DevOps Services' web IDE. You configured automatic building and deployment, checked the status of the app deployment, and ran the app to verify your changes. 

Hopefully, this tutorial gave you a feel for how to get started with Bluemix and DevOps Services using Java. Lots of details were glossed over, but the documentation links at the start can fill those in.

If you want to learn more about configuring Eclipse or other desktop clients to work with your Git repository, see [Setting up Eclipse, Git, and Rational Team Concert Desktop Clients for use with DevOps Service][26].

If you want to learn about how to integrate unit testing into your DevOps Services projects, see [Developing Bluemix applications in Java with Eclipse and DevOps Services][40].

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
   [13]: /tutorials/jazzeditorjava/images/bm-create-git-repo.gif 
   [14]: /tutorials/jazzeditorjava/images/bm-git-repo-success-msg.gif 
   [15]: /tutorials/jazzeditorjava/images/bm-code-button.png 
   [16]: /tutorials/jazzeditorjava/images/webide.gif 
   [17]: /tutorials/jazzeditorjava/images/simpledeploy.png 
   [18]: /tutorials/jazzeditorjava/images/configbuilder.gif 
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
   [45]: /tutorials/jazzeditorjava/images/un-pipeline.gif
   [46]: /tutorials/jazzeditorjava/images/configured-builder.gif
   [47]: /tutorials/jazzeditorjava/images/configured-and-built.gif
   [48]: /tutorials/jazzeditorjava/images/configured-pipeline.gif
   [49]: /tutorials/jazzeditorjava/images/drop-to-deploy.gif
   [50]: /tutorials/jazzeditorjava/images/deployed-with-pipeline.gif
   [51]: /tutorials/jazzeditorjava/images/click-to-open.gif
   [52]: /tutorials/jazzeditorjava/images/config-to-delete.gif
