#Getting Started with IBM Bluemix and IBM DevOps Services using Node.js

##Create an application with IBM Bluemix

[IBM Bluemix](https://ace.ng.bluemix.net/) is an open-standards, cloud-based platform for building, managing, and running all types
of applications (mobile, smart devices, web, big data). The platform includes capabilities for Java, mobile back-end development, 
application monitoring, as well as capabilities from ecosystem partners and open source, 
all through an as-a-service model in the cloud.

Before you can use the IBM Bluemix capabilities, you have to register. To register, go to the [IBM Bluemix home page](https://ace.ng.bluemix.net/) and 
click **Sign up for the free beta**.

>	![Join us in beta](/tutorials/jazzeditor/images/bm-join.png)

After you register, the [IBM Bluemix site](https://ace.ng.bluemix.net/) offers helpful information about Bluemix:

* [Getting Started with IBM Bluemix](https://www.ng.bluemix.net/docs/QuickStart.jsp)
* [IBM Bluemix Overview](https://www.ng.bluemix.net/docs/BlueMixIntro.jsp)
* Several [tutorials](https://www.ng.bluemix.net/docs/Tutorials.jsp)

To get started now, 
follow this workflow to create and deploy a new application.

Start by signing in to IBM Bluemix, which takes you to a dashboard:

>	![Bluemix dashboard](/tutorials/jazzeditor/images/bm-home.png)

Click **Add an application** to choose different runtimes 
(such as Java or Ruby), services (such as IBM DataCache or MongoDB), and boilerplates, 
which are preconfigured application templates. 

For this workflow, select the Node JS Web Starter boilerplate and review 
its description:

>	![Bluemix NodeJS app](/tutorials/jazzeditor/images/bm-web-starter.png)

As you can see, the application is a simple Node.js web server that includes example code 
that demonstrates the IBM DataCache service. 

At this point, you are two clicks away from a running application:

1. Click **CREATE APPLICATION**.
2. Complete the **Name** and **Host** fields, and click **CREATE**.

The name is a descriptive name to identify the application on the 
Bluemix dashboard. The host is a unique URL where you access your app. 


>	![Bluemix Create App dialog](/tutorials/jazzeditor/images/bm-create.png)


That's all there is to creating an application. It takes a moment for the application to start, 
but when it does, a tile on the dashboard shows that it's running.

>	![Bluemix Application tile](/tutorials/jazzeditor/images/bm-app-panel.png)

When you click the URL on the tile, it takes you to your already Internet-visible, running application.

 
>	![A running web application](/tutorials/jazzeditor/images/bm-example.png)


Now that your application is running, you can see and modify its code with IBM DevOps Services.

---
##Enable Git integration and auto-deployment with IBM DevOps Services

You can work with your application code in many ways, 
but one of the most impressive features is *auto-deploy*. 
With the auto-deploy feature, you can modify the code that is running in your app by pushing the changes to a 
Git repository. The mechanism that implements auto-deployment is powered by 
the Build & Deploy capabilities of IBM DevOps Services.

To enable auto-deployment, go to the Bluemix dashboard for your application and 
click **Add Git Integration**. This single click in Bluemix gives you a Git repository that's 
loaded with example code and a deployed application. 

>	![Add Git Integration button](/tutorials/jazzeditor/images/bm-add-git-integration.png)


You might need to enter your password to verify that DevOps Services can act on your behalf. Enter your IBM ID password and click **Sign In**.

>	![DevOps Services sign in page](/tutorials/jazzeditor/images/jh-signin.png)

**Note:** The first time that you access IBM DevOps Services, you might need to create a Jazz ID and link it to your IBM ID. A Jazz ID is a "short name" that is used in several places, 
including the URL for the repository that is created for you. For this one-time process, follow 
the instructions in the dialog box.
 
Ensure that the check box is selected to populate the Git repository with the starter application package and 
to automatically deploy the app.

>	![Create Git repo dialog](/tutorials/jazzeditor/images/bm-create-git-repo.png)

With these few clicks, you created a Git repository, loaded it with the example code, and deployed the application.

>	![Git repo success message dialog](/tutorials/jazzeditor/images/bm-git-repo-success-msg.png)


To see the status of the deployed app, go to the Bluemix dashboard and click **CODE**.

>	![CODE button](/tutorials/jazzeditor/images/bm-code-button.png)

Your new project opens in the Web IDE. This page contains a lot of useful information that you can review later. To check the status of the application, 
click **BUILD & DEPLOY**.

>	![Web IDE](/tutorials/jazzeditor/images/orion.png)

A page opens where you can configure and see the deployment status for the project.

>	![DevOps Services auto deploy page](/tutorials/jazzeditor/images/jh-auto-deploy.png)

**Tip:** If you're curious, the **ADVANCED** option 
enables you to add a build step, which is useful for Java applications, and to control 
additional deployment options. But those options are more advanced than this basic workflow.

To change the deployment settings, you click **CONFIGURE**. To manage your application in 
Bluemix, you click **MANAGE**.

You use the Git URL in Git commands. You can copy this URL now or return to the page to copy it later.

---
##Push changes to the Git repository by using the command line

You now have a Git repository that contains example code. You can use several tools to work with Git, including desktop IDEs 
and the browser-based Web IDE, but you can also use the command line. 

**Note**: If you need to install Git, 
see [Installing Git](/tutorials/clients#installing_git).

Start by cloning the local repository using the URL from the Bluemix application dashboard:

>	![Clone the local repository](/tutorials/jazzeditor/images/cli-git-clone.png)

Next, change the application source code to see what happens. 
The views folder contains a file named `index.ejs`. This file implements the main page for the example. 
Change this file, for example, modify the title that is displayed.

>	![Changing the title](/tutorials/jazzeditor/images/cli-edit-file.png)

Then, do a Git push as shown in this image:

>	![Pushing the change](/tutorials/jazzeditor/images/cli-edit-push.png)

If you go back to the Web IDE and check the 
Build & Deploy page, you should see something similar to this image:

>	![Auto-deploy in action](/tutorials/jazzeditor/images/jh-auto-deployed.png)

The top of the **Recent auto-deployments** list shows an entry with a comment that 
matches the commit operation you made from the command line. The entry shows that your app is running the code that you pushed.

Next, look at your running app by clicking the link in the **Deploy to** field and verify
that the title was updated. You might need to refresh your browser to see the updates.

**Tip**: The original title was Application Example: run DataCache using REST API. 


>	![Application page showing new title](/tutorials/jazzeditor/images/app-new-title.png)

You can continue to modify the example code and push the changes to the 
Git repository as often as you like. If your project and scope of work grows, you can add more people to the 
project and everyone can push changes to the repository. Standard repository operations and 
auto-deployment are all you need to ensure that the application's always running.

---
##Push changes to the Git repository by using the Web IDE

In addition to auto-deployment, IBM DevOps Services provides many other useful capabilities 
for application development:

* Free hosting for public projects
* Multiple source code repositories
* Support for agile development
* Web-based development tools with customizations for IBM Bluemix
* Continuous delivery pipeline for deploying applications to IBM Bluemix
* More capabilities under development

To learn about all the features, see the [IBM DevOps Services website](https://hub.jazz.net/learn). 

You've already used the command line modify your code and push it to the repository. 
Now you can use the Web IDE in DevOps Services to do the same thing.

If you go back to the deployment page, you can click **Edit Code** to access the complete, integrated Web IDE that's 
based on the [Eclipse Orion](http://orion.eclipse.org/) open-source project. 

Here's what the Web IDE looks like with the example project open:

>	![Orion at DevOps Services](/tutorials/jazzeditor/images/orion.png)

From this environment, you can edit files with color syntax support for multiple languages, including HTML, 
CSS, JavaScript, Ruby, Python, and more. For some languages, such as JavaScript, the Web IDE also supports 
syntax checking and code completion, both for standard language constructs and for the services provided 
by IBM Bluemix. For example, this image shows code completion for the standard Node.js express module:

>	![Orion showing express completions](/tutorials/jazzeditor/images/completion.png)

To try working in the Web IDE, you can make another change to your application. 
But, before you do, you must fetch and merge the title change that you made with the command line
so that it shows in the Web IDE. You fetch and merge from the Git Status page. 

>	![Orion Git status menu](/tutorials/jazzeditor/images/orion-git-status.png)

On the Git Status page, fetch and then merge the change that you made to the title.

>	![Orion Git merge](/tutorials/jazzeditor/images/orion-git-merge.png)

Next, use the navigation tree to find the file that you modified 
before (for example, `views/index.ejs`) and edit it in the integrated editor.

>	![Orion editing index](/tutorials/jazzeditor/images/orion-really-cool.png)

You can then use the integrated Git support to push the change. Switch to the Git Status page and follow these steps:

>	![Orion Git status menu](/tutorials/jazzeditor/images/orion-git-status.png)

Stage the changes:

>	![Orion Git staging](/tutorials/jazzeditor/images/orion-git-stage.png)

Commit the changes:

>	![Orion Git commit](/tutorials/jazzeditor/images/orion-commit.png)

Push the changes:

>	![Orion Git push](/tutorials/jazzeditor/images/orion-push.png)

These are the same steps that you performed with the command line. 
To see that your app was updated again, go to the Build & Deploy page and click the link in the **Deploy to** field.

>	![Our really cool app](/tutorials/jazzeditor/images/really-cool.png)

---
##Advanced manual deployment features

In this workflow, you only used the simple deploy features with IBM Bluemix. 
For more control over deployment, you can use the advanced options. 
Because IBM Bluemix is based on [Cloud Foundry](http://cloudfoundry.com/), you can also manually deploy 
applications directly to Bluemix by using the standard cf and gcf command line tools. Similarly, in the Web IDE, you can click **Deploy** to manually deploy your code to IBM Bluemix. 

**Note**:The **Deploy** button in the Web IDE deploys the current state of the code in your Web IDE, whereas auto-deploy deploys the code that is
checked in to the repository.

Both the command-line tools and the Web IDE are effective for rapid, 
solo development, but the auto-deploy feature adds the security of controlling what is pushed, especially in team environments. 
With auto-deployment, you always know that the code running in the application matches 
a known state in the repository, instead of whatever was in your working directory 
when you pushed changes.


---
##Summary

You should now have a good overview of how to get started with IBM Bluemix and IBM DevOps Services using Node.js. 

You've seen how to create and run a Node.js web app with IBM Bluemix. 
With one click, you created a Git repository, loaded it with example code, and automatically 
deployed the application. In minutes, you changed the code, pushed the changes to the Git repository by using both the command line and the 
Web IDE, automatically built and deployed the application, checked the deployment status, 
and ran the app to show your changes. 

Tell us what you think. What did we do well? 
What can we do better? Post your comments to the [IBM DevOps Services forum](https://www.ibmdw.net/answers?community=jazzhub) 
or send an [email](mailto:hub%40jazz.net).

---
##Tutorials

To learn more about IBM Bluemix and IBM DevOps Services capabilities, see these tutorials:

* [Getting Started with IBM Bluemix and IBM DevOps Services using Java](/tutorials/jazzeditorjava)
* [Setting up Eclipse, Git, and Rational Team Concert Desktop Clients to access IBM DevOps Services](/tutorials/clients)
* [Developing IBM Bluemix applications in Node.js with the IBM DevOps Services Web IDE](/tutorials/jazzweb)
* [Developing IBM Bluemix applications in Java with Eclipse and IBM DevOps Services](/tutorials/jazzrtc)    
  
    
&copy; Copyright IBM Corporation 2013, 2014.