#Getting Started with BlueMix and DevOps Services using Java

##BlueMix

*[ BlueMix][1] is an open-standards, cloud-based platform for building, managing and running apps of all types (web, mobile, big data, new smart devices). Capabilities include Java, mobile backend development, application monitoring, as well as capabilities from ecosystem partners and open source, all through an as-a-service model in the cloud.*

If you haven't already done so, the first step to use these capabilities is to register. BlueMix is currently in beta, so you can register by going to the [BlueMix home page][1] and clicking **Sign up for the free beta**.

![Join us in beta][2]

Once you've registered, there is lots of helpful information available on the [ BlueMix][1] site, such as ...

  * [Getting Started with BlueMix][3]
  * [BlueMix Overview][4]
  * and a range of [Tutorials][5]

... but if you're like us and prefer to _try_ things rather than read about them, just _follow along_ while we build a new application.

You can start by signing in to BlueMix, which takes you to the _Dashboard_:

![BlueMix Dashboard][6]

Clicking **Add an application** lets you choose different kinds of Runtimes (like Java or Ruby), Services (such as DataCache or Mongo) and Boilerplates, which are essentially pre-configured application templates that are great ways to get started. Let's select the **Java Web Starter** Boilerplate, which opens a panel that displays more information about what it does:

![BlueMix Java Web Starter][7]

As you can see, the application is a simple Java Web server that includes some example code that demonstrates the IBM DataCache Service. Let's try it!

At this point, _you are just two clicks away from having a running application:_

  1. Click **CREATE APPLICATION**
  2. In the Create application window, fill in the **Name** and **Host** fields, and click **CREATE**.

![BlueMix Create App dialog][8]

The **Name** is a simple name you can use to find this application the next time you come back to the BlueMix dashboard. **Host** partially defines the URL (the rest comes BlueMix itself) that lets you access your new app from the Internet. As you probably guessed, this URL must be unique, since the URL space is shared amongst all users.

That's all there is to it! It takes a short while for the application to start up, but once it does a tile on the dashboard shows it running.

![An example app panel][9]

When you click the URL on the tile, it takes you to your already Internet-visible, running application.

![A running web application][10]

Cool!

But wait, it's great that the application is running, but it's not very useful if you can't see the code (and modify it), so let's do that.

There are a lot of ways you can work with your application code, but one of the slickest is to use something called _auto-deploy_. With auto-deploy you can modify the code that is running in your app by simply pushing the changes to a Git repository. The mechanism that implements auto-deploy is provided by the IBM DevOps Services powered by JazzHub Build &amp; Deploy support, but more about that later.

To enable automatic deployment, go back to your BlueMix application's dashboard and click **Add Git Integration**. With this single click, you get a Git repo, loaded with example code and a deployed app, right from BlueMix. Now that's cool.

![Add Git Integration][11]

You may be asked to enter your password because DevOps Services must verify that it can act on your behalf, so enter your IBM id password and click **Sign In**.

![DevOps Services sign in page][12]

_Note: The first time you access DevOps Services, you might need to create a "Jazz ID" and link it to your IBM id. A Jazz ID is a kind of "short name" that is used in several places, including the URL for the repository that is about to be created for you. Just follow the instructions in the dialogâ€”you will only ever see it once. _

Make sure the box to populate the Git repo with the starter application package and automatically deploy the app is checked.

![Create Git repo dialog][13]

Success! You've created a Git repo, loaded it with the example code, and deployed the app, all in a few clicks.

![Git repo success message dialog][14]

Now let's go see the status of the deployed app. Go to the BlueMix Dashboard and click **CODE**.

![CODE button][15]

---
## DevOps Services

Your new project opens in the DevOps Services Web IDE. There is lots of useful information on this page, which you can try later, but since we're just here to check the status of the application, you should go ahead and click the **BUILD &amp; DEPLOY** button.

![Web IDE][16]

Clicking that button opens a page that lets you configure and see the project's deployment status.

Select **Simple** deployment. With this deployment option, the contents of the Git repository are deployed directly to BlueMixâ€”there is no intermediate build step.

In a few seconds, the application will automatically deploy to BlueMix. Your sample app is available at the location linked after **Deploy to**, while you can click **Manage** to monitor the app on BlueMix.

![DevOps Services auto deploy page][17]

You might be wondering how we're deploying a Java application directly from source, and well, we're not: this project is designed to help you get a sample application running on BlueMix as quickly as possible, after all. The app has already been compiled, and the sample .war file is in the root directory.

Once you change things, you'll need to build the app again, and the Simple deployer doesn't do that. It's time to change the switch to **Advanced**.

---
## Configuring Advanced Build &amp; Deploy

With the Advanced option, you can configure a builder to compile and package your application using an Ant or Grunt build script, and you can configure a deployer to deploy the application to BlueMix with any additional options needed.

First, let's configure the builder. The default settings will work for this project: build using Ant and pull from the master branch. The builder will find `build.xml` in the root directory and run it during the build. The files that are needed for deployment are output into the build artifacts directory. It defaults to the same directory as the build script path, so there's no need to change that, either.

![Configuring the Builder][18]

Then, go to the Deployer. As you might guess, this is what you configure to _deploy_ to BlueMix. You can give the app a name; by default, this comes from the manifest, which `` is a file that tells BlueMix how to deploy your application. Let's leave it blank so that it will use the name in the manifest.

You can choose which space you want, or create a new one. Leave it as dev. The script section shows the deployment script that will be executed to deploy the application. The `CF_APP` variable resolves to the app name. In this case, it will resolve to the name in the manifest as we did not specify a different app name.

![Configuring the Deployer][19]

Once everything is configured, click **REQUEST BUILD**. The page refreshes with the **HISTORY** tab selected. You can see the build is running; click on it if you want to see a build log. When the build finishes successfully, it will deploy automatically to BlueMix, just as you've configured it. Click on the gear icon to view your app on BlueMix:

You can also click the app route in the panel to visit your app on the web.

---
## The Command Line

You now have a Git repo with example code. Lots of tools can be used to work with Git, including all of the major desktop IDEs and even directly from the web using the Web IDE, but for now, let's just use the command line Git support.

(If you don't have Git, you can find information on installing it at [Setting up Eclipse, Git, and RTC Desktop Clients for use with DevOps Service][20].)

First, clone the repo using the URL, which you can find on the BlueMix application's dashboard _or_ the DevOps project's overview:

![Clone the repository][21]

Next, let's change your app source code and see what happens. In the `WebContent` folder there's a file called `index.html`. This contains some of what you see when you view your app on the web. Change some text in the body of the HTML there with whatever tool you like. If you just want to see a quick change, search for the title, "Application Example: run ECAAS operations using Java Native APIs," and change a word or two. When you're done, `git stage`, `git commit`, and `git push`, like so:

![changing the title][22]

![pushing the title change][23]

Now, this is where it starts to get interesting! If you go back to the Web IDE and check the Build &amp; Deploy page, you see something like this image:

![Auto-deploy in action][24]

Notice that a new build has been queued; it was automatically triggered by the changes you delivered to the project repository. ****When it's finished, it will be deployed to BlueMix. Once it's there, you can view your updated app on the web. Refresh your browser to ensure the updated page is displayed.

![Application page showing new title][25]

There you go! Now you can continue to make modifications to the example and push them to the Git repository as often as needed. And as the scope of the work grows, and more people are added to the project to work on it, _everyone_ can push changes to the repository. Standard repository operations and build and deploy are all that is required to ensure that the right bits are always running.

If you want to configure desktop clients to work with your git repository, check out [Setting up Eclipse, Git, and RTC Desktop Clients for use with DevOps Service][26] later.

---
## Back to DevOps Services

It turns out though that in addition to build and deploy, DevOps Services provides a lot of other capabilities that are useful for application development. Indeed, DevOps Services is _all about development_ with features like:

  * Free public project hosting
  * Multiple source code repositories
  * Support for teams doing Agile development
  * Web based development tools with customizations specifically for working with BlueMix
  * and lots more coming...

If you want to know more about DevOps Services, you can start by checking out the information [here][27], but just as you did with BlueMix, let's _do something_.

So far you've used command line tools to modify your code and push it to the repository, and you've seen that this works just fine. However, there is another way you can work with DevOps Services.

If you go back to the deployment page, you can see a button labeled **Edit Code**. Clicking this button, takes you to a complete online integrated development environment (IDE), based on the work of the [ Orion][28] open source project. Here's what it looks like when you open the example project:

![Orion at DevOps Services][29]

From this environment, you can edit files with syntax coloring support for multiple languages including HTML, CSS, Java, JavaScript, Ruby, Python and more. For some languages, such as JavaScript, the IDE also supports syntax checking and code completion, both for standard language constructs and for the services provided by BlueMix. For example, here's what it looks like providing completion for the standard `node.js express` module:

![Orion showing express completions][30]

So just to round out the process, let's make one more modification to your application using the Web IDE. Before you do that, though, you must fetch and merge the app title change that you just made with the command line so that it shows in the Web IDE. You do that with the Git Status page. We'll go over more about this page in a moment, but in the meantime, switch to the Git Status page. 

![Orion git status menu](/tutorials/tutorial_jazzeditorjava/images/orion-git-status.png)

From the Git Status page, fetch and then merge the change to your app.

![Fetching and merging the change](/tutorials/tutorial_jazzeditorjava/images/merge.png)

Next, navigate through the directory tree until you get to the same file you worked on before (for example, <tt>WebContent/index.html</tt>), then simply edit in place.

![Orion editing index](/tutorials/tutorial_jazzeditorjava/images/heyworld.gif)

You can then use the integrated Git support to push the change. Head back to the Git Status page.

![Orion git status menu](/tutorials/tutorial_jazzeditorjava/images/orion-git-status.png)

Where you can then stage..

![Orion git staging][33]

... commit...

![Orion git commit][34]

... and push the change...

![Orion git push][35]

... just like you did with the command line (only with a few more clicks and a lot less typing). And then, finally, you can see once again that your app was updated (refresh your browser to see the changes).

![Our really cool app][36]

---
## Manual Deployment

In the Web IDE, you can use the **Deploy** button to manually deploy whatever you are working in the Web IDE to BlueMix. It is important to remember that the **Deploy** button in the Web IDE deploys the current state of your code in your Web IDE, while Auto-Deploy deploys from what is checked into the repository.

![About to click the Deploy button in the Web IDE][37]

Optionally, you could configure the Web IDE deploy and the Auto-Deploy to use different app names so that you can use the Web ID deploy as a personal test environment and the Auto-Deploy as a team integration environment.

Whether you are using command line tools or the Web IDE, they can be an effective way to work when you are doing rapid, solo development, but for many of you the added security of having auto-deploy control of what is being pushed is a better way to go. In essence, by using auto-deploy you always know that the code running in the application matches some known state in the repository, instead of whatever happened to be in your working directory at the time you pushed.

---
## A Final Note

You just saw how easy it is to create a Java web app at BlueMix and run that app. With a few clicks, you created a Git repo, loaded it with the example code, and automatically deployed the app. In minutes, you changed code and pushed it using the Git command line and the Web IDE, automatically ran a build and deploy, checked the status of the app deployment, and ran the app to show your changes. That's all there is to it.

For those of you who made it this far, we hope this tutorial has given you a feel for how to get started with BlueMix and DevOps Services using Java. Lots of details were glossed over, but the documentation links at the start can fill those in.

Thanks for following along. And tell us what you think. What did we do well? What can we do better? Post your comments to our [forum][38] or send us an [email][39].

---
## Next Steps

If you want to learn more about configuring Eclipse or other desktop clients to work with your git repository, see [Setting up Eclipse, Git, and RTC Desktop Clients for use with DevOps Service][26].

If you want to learn about how to integrate unit testing into your DevOps Services projects, see [Developing BlueMix applications in Java with Eclipse and DevOps Services][40].

---
## More Tutorials

Interested in trying more BlueMix and DevOps capabilities? Here is a list of tutorials:

  * [Getting Started with BlueMix and DevOps Services using Node.js][41]
  * [Setting up Eclipse, Git, and RTC Desktop Clients to access DevOps Services][42]
  * [Developing BlueMix applications in Node.js with the DevOps Services Web IDE][43]
  * [Developing BlueMix applications in Java with Eclipse and DevOps Services][40]


   [1]: https://ace.ng.bluemix.net/ (BlueMix)
   [2]: /tutorials/tutorial_jazzeditorjava/images/bm-join.gif 
   [3]: https://www.ng.bluemix.net/docs/QuickStart.jsp (BlueMix getting started)
   [4]: https://www.ng.bluemix.net/docs/BlueMixIntro.jsp (BlueMix overview)
   [5]: https://www.ng.bluemix.net/docs/Tutorials.jsp (BlueMix tutorials)
   [6]: /tutorials/tutorial_jazzeditorjava/images/demo-dash.gif 
   [7]: /tutorials/tutorial_jazzeditorjava/images/bm-java-starter.gif 
   [8]: /tutorials/tutorial_jazzeditorjava/images/bm-create-jws.gif 
   [9]: /tutorials/tutorial_jazzeditorjava/images/examplepanel.gif 
   [10]: /tutorials/tutorial_jazzeditorjava/images/bm-example.gif 
   [11]: /tutorials/tutorial_jazzeditorjava/images/addgitintegration.gif 
   [12]: /tutorials/tutorial_jazzeditorjava/images/jh-signin.gif 
   [13]: /tutorials/tutorial_jazzeditorjava/images/bm-create-git-repo.gif 
   [14]: /tutorials/tutorial_jazzeditorjava/images/bm-git-repo-success-msg.gif 
   [15]: /tutorials/tutorial_jazzeditorjava/images/bm-code-button.gif 
   [16]: /tutorials/tutorial_jazzeditorjava/images/webide.gif 
   [17]: /tutorials/tutorial_jazzeditorjava/images/simpledeploy.gif 
   [18]: /tutorials/tutorial_jazzeditorjava/images/configbuilder.gif 
   [19]: /tutorials/tutorial_jazzeditorjava/images/deployer.gif 
   [20]: /tutorials/tutorial_clients (Setting up Eclipse, Git, and RTC Desktop Clients for use with DevOps Services)
   [21]: /tutorials/tutorial_jazzeditorjava/images/cli-git-clone.gif 
   [22]: /tutorials/tutorial_jazzeditorjava/images/cli-stage-commit.gif 
   [23]: /tutorials/tutorial_jazzeditorjava/images/cli-push.gif 
   [24]: /tutorials/tutorial_jazzeditorjava/images/autodeploy.gif 
   [25]: /tutorials/tutorial_jazzeditorjava/images/app-new-title.gif 
   [26]: /tutorials/tutorial_clients (Setting up Eclipse, Git, and RTC Desktop Clients for use with DevOps Services)
   [27]: https://hub.jazz.net/learn (DevOps Services introduction)
   [28]: http://orion.eclipse.org/ (The Eclipse Orion project)
   [29]: /tutorials/tutorial_jazzeditorjava/images/orion.gif 
   [30]: /tutorials/tutorial_jazzeditorjava/images/completion.png 
   [31]: /tutorials/tutorial_jazzeditorjava/images/heyworld.gif 
   [32]: /tutorials/tutorial_jazzeditorjava/images/orion-git-status.png 
   [33]: /tutorials/tutorial_jazzeditorjava/images/unstaged.gif 
   [34]: /tutorials/tutorial_jazzeditorjava/images/commit.gif 
   [35]: /tutorials/tutorial_jazzeditorjava/images/push.gif 
   [36]: /tutorials/tutorial_jazzeditorjava/images/endexampleapp.gif 
   [37]: /tutorials/tutorial_jazzeditorjava/images/manualdeploy.gif
   [38]: https://www.ibmdw.net/answers?community=jazzhub (forum)
   [39]: mailto:hub%40jazz.net
   [40]: /tutorials/tutorial_jazzrtc (Developing BlueMix applications in Java with Eclipse and DevOps Services)
   [41]: /tutorials/tutorial_jazzeditor (Getting Started with BlueMix and DevOps Services using Node.js)
   [42]: /tutorials/tutorial_clients (Setting up Eclipse, Git, and RTC Desktop Clients to access DevOps Services)
   [43]: /tutorials/tutorial_jazzweb (Developing BlueMix applications in Node.js with the DevOps Services Web IDE)
  
