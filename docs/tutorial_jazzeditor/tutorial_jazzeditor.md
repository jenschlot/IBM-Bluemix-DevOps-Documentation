#Getting Started with BlueMix and DevOps Services using Node.js

##BlueMix

***[BlueMix](https://ace.ng.bluemix.net/) is an open-standards, cloud-based platform for building, managing and running apps of all types
(web, mobile, big data, new smart devices). Capabilities include Java, mobile backend development, 
application monitoring, as well as capabilities from ecosystem partners and open source, 
all through an as-a-service model in the cloud.***

If you haven't already done so, the first step to use these capabilities is to register. 
BlueMix is currently in beta, so you can register by going to the [BlueMix home page](https://ace.ng.bluemix.net/) and 
clicking **Sign up for the free beta**.

>	![Join us in beta](images/bm-join.png)

Once you've registered, there is lots of helpful information available on the [BlueMix](https://ace.ng.bluemix.net/) site, such as ...

* [Getting Started with BlueMix](https://www.ng.bluemix.net/docs/QuickStart.jsp)
* [BlueMix Overview](https://www.ng.bluemix.net/docs/BlueMixIntro.jsp)
* and a range of [Tutorials](https://www.ng.bluemix.net/docs/Tutorials.jsp)

... but if you're like us and prefer to ***try*** things rather than read about them, 
just ***follow along*** while we build a new application.

You can start by signing in to BlueMix, which takes you to the ***Dashboard***:

>	![Bluemix dashboard](images/bm-home.png)

Clicking **Add an application** lets you choose different kinds of Runtimes 
(like Java or Ruby), Services (such as DataCache or Mongo) and Boilerplates, 
which are essentially pre-configured application templates that are great ways to get started. 
Let's select the Node JS Web Starter Boilerplate, which opens a panel that displays 
more information about what it does:

>	![Bluemix NodeJS app](images/bm-web-starter.png)

As you can see, the application is a simple Node.JS web server that includes some example code 
that demonstrates the IBM DataCache Service. Let's try it!

At this point, ***you are just two clicks away from having a running application:***

1. Click CREATE APPLICATION
2. In the Create application window, fill in the **App name** and **Host** fields, and click **CREATE**.

>	![BlueMix Create App dialog](images/bm-create.png)

The **App name** is a simple name you can use to find this application the next time you come back to the 
BlueMix dashboard. Host defines the URL that lets you access your new app from the Internet. 
As you probably guessed this URL must be unique.

That's all there is to it! It takes a short while for the application to start up, 
but once it does a tile on the dashboard shows it running.

>	![BlueMix Application tile](images/bm-app-panel.png)

When you click the URL on the tile, it takes you to your already Internet-visible, running application.

 
>	![A running web application](images/bm-example.png)


Cool!

But wait, it's great that the application is running, but it's not very useful 
if you can't see the code (and modify it), so let's do that.

---
## DevOps Services

There are a lot of ways you can work with your application code, 
but one of the slickest is to use something called ***auto deploy***. 
With auto-deploy you can modify the code that is running in your app by simply pushing the changes to a 
Git repository. The mechanism that implements auto-deploy is provided by the IBM DevOps Services powered by 
JazzHub Build & Deploy support, but more about that later.

To enable automatic deployment, go back to your BlueMix application's dashboard and 
click **Add Git Integration**. With this single click, you get a Git repo, 
loaded with example code and a deployed app, right from BlueMix. Now that's cool.

>	![Add Git Integration button](images/bm-add-git-integration.png)


You may be asked to enter your password because DevOps Services must verify that it can act on your behalf, 
so enter your IBM id password and click **Sign In**.

>	![DevOps Services sign in page](images/jh-signin.png)

***Note: The first time you access DevOps Services, you might need to create a "Jazz ID" and link it to your IBM id. A Jazz ID is a kind of "short name" that is used in several places, 
including the URL for the repository that is about to be created for you. 
Just follow the instructions in the dialog — you will only ever see it once.***
 
Make sure the box to populate the Git repo with the starter application package and 
automatically deploy the app, is checked.

>	![Create Git repo dialog](images/bm-create-git-repo.png)

Success! You've created a Git repo, loaded it with the example code, and deployed the app, all in a few clicks.

>	![Git repo success message dialog](images/bm-git-repo-success-msg.png)


Now let's go see the status of the deployed app. Go to the BlueMix Dashboard and click **CODE**.

>	![CODE button](images/bm-code-button.png)

Your new project opens in the Web IDE. There is lots of useful information on this page, 
which you can try later, but since we're just here to check the status of the application, 
you should go ahead and click the **BUILD & DEPLOY** button.

>	![Web IDE](images/orion.png)

Clicking that button opens a page that lets you configure and see the status of deployment from this project.

>	![DevOps Services auto deploy page](images/jh-auto-deploy.png)

If you're wondering about the **ADVANCED** entry on the Build & Deploy page 
that allows you to add a Build step which is useful for Java applications, and control 
additional deployment options — but that's beyond the scope of this tutorial.

You can change the deployment settings by clicking **CONFIGURE**. And if you want to manage your app in 
BlueMix you can click **MANAGE**.

The Git URL is what you use with your Git commands. You can copy it now, or come back to this page later.

---
##The Command Line

You have a Git repo with example code. Lots of tools can be used to work with Git, including all of the major desktop IDEs 
and even directly from the web using the Web IDE (which we saw briefly above) 
but for now let's just use the command line Git support. (**Note**: If you need to install Git, 
take a look [here](./../tutorial_clients/tutorial_clients#gitinstall).

First you clone the local repo using the URL from the BlueMix application dashboard:

>	![Clone the local repository](images/cli-git-clone.png)

Next, let's change your app source code and see what happens. 
In the views folder there's a file called `index.ejs`. This file implements the main page from the example. 
If you change this file, for example, by modifying the title that is displayed,

>	![Changing the title](images/cli-edit-file.png)

and then do another `git push`, like this image:

>	![Pushing the change](images/cli-edit-push.png)

Now, this is where it starts to get interesting! If you go back to the Web IDE and check the 
Build & Deploy page, you see something like this image:

>	![Auto-deploy in action](images/jh-auto-deployed.png)

Notice that at the top of the **Recent auto-deployments** list is an entry with a comment that 
matches the commit you did using the command line. That shows your app is now running the code you pushed.

Next go look at your running app by clicking the link next to the **Deploy to** field and see 
that the title was updated (**Hint**: The title was Application Example: run DataCache using REST API): 
You may need to refresh your browser to ensure the updated page is displayed.

>	![Application page showing new title](images/app-new-title.png)

Well there you go. Now you can continue to make modifications to the example and push them to the 
Git repository as often as needed. And as the scope of the work grows, and more people are added to the 
project to work on it, everyone can push changes to the repository. Standard repository operations and 
auto-deploy are all that is required to ensure that the right bits are always running.

---
##Back to DevOps Services

It turns out though that in addition to auto-deploy, DevOps Services provides a lot of other capabilities 
that are useful for application development. Indeed, DevOps Services is all about development with features like:

* Free public project hosting
* Multiple source code repositories
* Support for teams doing Agile development
* Web based development tools with customizations specifically for working with BlueMix
* Continuous delivery pipeline to deploy applications to BlueMix
* and lots more coming...

If you want to know more about DevOps Services, you can start by checking out the information [here](https://hub.jazz.net/learn), 
but just as you did with BlueMix, let's do something.

So far you've used command line tools to modify your code and push it to the repository, and you've seen that this works just fine. 
However, there is another way you can work with DevOps Services.

If you go back to the deployment page, you can see a button labeled **Edit Code**. Clicking this button, takes you to a complete online integrated development environment (IDE), 
based on the work of the [Orion](http://orion.eclipse.org/) open source project. Here's what it looks like open on our example project:

>	![Orion at DevOps Services](images/orion.png)

From this environment, you can edit files with syntax coloring support for multiple languages including html, 
css, javascript, ruby, python and more. For some languages, such as JavaScript, the IDE also supports 
syntax checking and code completion, both for standard language constructs and for the services provided 
by BlueMix. For example, here's what it looks like providing completion for the standard node.js express module:

>	![Orion showing express completions](images/completion.png)

So just to round out the process, let's make one more modification to your application using the Web IDE. 
You can navigate using the tree until you get to the same file you worked on 
before (for example, `views/index.ejs`), and then simply edit in place.

>	![Orion editing index](images/orion-really-cool.png)

You can then use the integrated Git support to push the change. You start by switching to the Git Status page.

>	![Orion Git status menu](images/orion-git-status.png)

Where you can then stage...

>	![Orion Git staging](images/orion-git-stage.png)

... commit...

>	![Orion Git commit](images/orion-commit.png)

... and push the change...

>	![Orion Git push](images/orion-push.png)

... just like you did with the command line (only with a few more clicks and a lot less typing). 
And then, finally, you can see once again that your app was updated. 
(**Hint**: Click the link next to the **Deploy to** field on the Build & Deploy page to see that the title was updated.)

>	![Our really cool app](images/really-cool.png)

---
##Manual Deployment

So far in this tutorial, you have only looked at using simple deploy with BlueMix. 
If you want more control over the deployment options, you can choose advanced deploy. 
And because BlueMix is based on [Cloud Foundry](http://cloudfoundry.com/), it is also possible to manually deploy 
applications directly to BlueMix using the standard cf and gcf command line tools.

Similarly, in the Web IDE, you can use the **Deploy** button (see the IDE screenshot above) 
to manually deploy whatever you are working in the Web IDE to BlueMix. **Note**: The **Deploy** button 
in the Web IDE deploys the current state of your code in your Web IDE, whereas Auto-Deploy deploys 
from what is checked into the repository.

Whether you are using command line tools or the Web IDE, 
they can be an effective way to work when you are doing rapid, 
solo development, but for many of you the added security of having auto-deploy 
control of what is being pushed is a better way to go. 
In essence, by using auto-deploy you always know that the code running in the application matches 
some known state in the repository, instead of whatever happened to be in your working directory 
at the time you pushed.

---
##A Final Note

You've seen how easy it is to create a node.js web app at BlueMix and run that app. 
With one click you created a Git repo, loaded it with the example code and automatically 
deployed the app. You saw how easy it was to change the code and push it using the Git command line and the 
Web IDE, to check the status of the app deployment, and to run the app to show your changes. 
That's all there is to it.

For those of you who made it this far, we hope this tutorial has given you a feel for how to get started 
with BlueMix and DevOps Services using Node.js. Lots of details were glossed over, 
but the documentation links at the start can fill those in.

Thanks for following along. And tell us what you think. What did we do well? 
What can we do better? Post your comments to our [forum](https://www.ibmdw.net/answers?community=jazzhub) 
or send us an [email](hub%40jazz.net).

---
##More Tutorials

Interested in trying more BlueMix and DevOps capabilities? Here is a list of tutorials:

* [Getting Started with BlueMix and DevOps Services using Java](../tutorial_jazzeditorjava/tutorial_jazzeditorjava)
* [Setting up Eclipse, Git, and RTC Desktop Clients to access DevOps Service](../tutorial_clients/tutorial_clients)
* [Developing BlueMix applications in Node.js with the DevOps Services Web IDE](../tutorial_jazzweb/tutorial_jazzweb)
* [Developing BlueMix applications in Java with Eclipse and DevOps Services](../tutorial_jazzrtc/tutorial_jazzrtc)


