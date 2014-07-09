#Getting Started with IBM Bluemix and IBM DevOps Services using Node.js

##Create an application with IBM Bluemix

<<<<<<< HEAD
[IBM&reg; Bluemix&trade;](https://bluemix.net/) is an open-standards, cloud-based platform for building, managing, and running all types
=======
[IBM Bluemix](https://bluemix.net/) is an open-standards, cloud-based platform for building, managing, and running all types
>>>>>>> 1357c0ad3291f4404f74909d86395086e13ea35e
of applications (mobile, smart devices, web, big data). Capabilities include Java, mobile back-end development, 
application monitoring, as well as features from ecosystem partners and open source, 
all through an as-a-service model in the cloud.

Before you can use the Bluemix capabilities, you have to register. To register, go to the [IBM Bluemix home page](https://bluemix.net/) and 
click **Sign up for a free trial**.

![Sign up for a free trial](/tutorials/jazzeditor/images/bm-join.png)

After you register, the [IBM Bluemix site](https://bluemix.net/) offers helpful information about Bluemix:

* [Getting Started with Bluemix](https://bluemix.net/docs/QuickStart.jsp)
* [Bluemix Overview](https://bluemix.net/docs/BlueMixIntro.jsp)


To get started now, 
follow this workflow to create and deploy a new application.

Start by logging in to Bluemix, which takes you to a dashboard:

![Bluemix dashboard](/tutorials/jazzeditor/images/bm-home.png)

The dashboard gives you an overview of the active Bluemix space for your organization. 
By default, the space is `dev` and the organization is the project creator's username. 
For example, if `bob@example.com` logs in to Bluemix for the first time, Bob's active space is `dev` and Bobs organization 
is `bob@example.com`.

If you create additional organizations or spaces in Bluemix, 
remember to use the same ones as you follow our tutorials. If you stick to the default selections, you should be just fine.

Click **CREATE AN APP** to choose particular runtimes 
(such as Java or Ruby), services (such as IBM DataCache or MongoDB), and boilerplates, 
which are preconfigured application templates. 

For this workflow, select the Node JS Web Starter boilerplate and review 
its description.

As you can see, the application is a simple Node.js web server that includes example code 
that demonstrates the IBM DataCache service. 

At this point, you are a click away from a running application:

1. Complete the **Name** and **Host** fields. The name is a descriptive name to identify the application on the 
Bluemix dashboard. The host is a unique URL where you access your app. 

2. Your default space is fine, and you can leave the Datacache Plan set to **Free**.

3. Click **CREATE**.


![Bluemix Create App dialog](/tutorials/jazzeditor/images/bm-create.png)


That's all there is to creating an application. It takes a moment for the application to start, 
but when it does, a tile on the dashboard shows that it's running.

![Bluemix Application tile](/tutorials/jazzeditor/images/bm-app-panel.png)

Click the URL on the tile to open the application dashboard. 
When you click the URL on the application dashboard, it takes you to your already Internet-visible, running application.

 
![A running web application](/tutorials/jazzeditor/images/bm-example.png)


Now that your application is running, you can see and modify its code with IBM DevOps Services.

---
##Enable Git integration and auto-deployment with DevOps Services

You can work with your application code in many ways, 
but one of the most impressive features is *auto-deploy*. 
With the auto-deploy feature, you can modify the code that is running in your app by pushing the changes to a 
Git repository. The mechanism that implements auto-deployment is powered by 
the Build & Deploy capabilities of DevOps Services.

To enable auto-deployment, go to the Bluemix dashboard for your application and 
click **ADD GIT**. This single click in Bluemix gives you a Git repository that's 
loaded with example code and a deployed application. 

![Add Git button](/tutorials/jazzeditor/images/bm-add-git-integration.png)


You might need to enter your password to verify that DevOps Services can act on your behalf. Enter your IBM ID password and click **Sign In**.

![DevOps Services sign in page](/tutorials/jazzeditor/images/jh-signin.png)

**Note:** The first time that you access IBM DevOps Services, you might need to create a Jazz&trade; ID and link it to your IBM ID. A Jazz ID is a "short name" that is used in several places, 
including the URL for the repository that is created for you. For this one-time process, follow 
the instructions in the dialog box.
 
Ensure that the check box is selected to populate the Git repository with the starter application package and 
to automatically deploy the app.

![Create Git repo dialog](/tutorials/jazzeditor/images/bm-create-git-repo.png)

With these few clicks, you created a Git repository, loaded it with the example code, and deployed the application.

![Git repo success message dialog](/tutorials/jazzeditor/images/bm-git-repo-success-msg.png)


To see the status of the deployed app, go to the Bluemix application dashboard and click **CODE**.

![CODE button](/tutorials/jazzeditor/images/bm-code-button.png)

Your new project opens in the Web IDE. This page contains a lot of useful information that you can review later. To check the status of the application, 
click **BUILD & DEPLOY**.

![Web IDE](/tutorials/jazzeditor/images/orion.png)

A page opens where you can configure and see the deployment status for the project.

![DevOps Services auto deploy page](/tutorials/jazzeditor/images/jh-auto-deploy.png)

**Tip:** If you're curious, the **ADVANCED** option 
enables you to add a build step, which is useful for Java applications, and to control 
additional deployment options. However, those options are more advanced than this basic workflow.

Notice the warning message on this page about outgoing changes. These are project
files that are created when you created your Git repository project. 
You'll check in those files later in this tutorial.

To change the deployment settings, you click **CONFIGURE**. To manage your application in 
Bluemix, you click the link next to the **Deploy to** field. You can request a deployment 
of your application by clicking **REQUEST DEPLOY**.

You use the Git URL in Git commands. You can copy this URL now or return to the page to copy it later.

---
##Push changes to the Git repository by using the command line

You now have a Git repository that contains example code. You can use several tools to work with Git, including desktop IDEs 
and the browser-based Web IDE, but you can also use the command line. 

**Note**: If you need to install Git, 
see [Installing Git](/tutorials/clients#installing_git).

Browse the [git documentation](http://git-scm.com/doc) to learn more about working with Git.

Start by cloning the local repository using the Git URL from either the Bluemix application dashboard 
or the Build & Deploy page:


	$ git clone https://hub.jazz.net/git/jazzhubdemouser/mycoolwebappp0630
    Cloning into 'mycoolwebapp0630'...
    Username for 'https://hub.jazz.net': jazzhubdemouser
    Password for 'https://jazzhubdemouser@hub.jazz.net':
    remote: Counting objects: 23, done
    remote: Finding sources: 100% (23/23)
    remote: Total 23 (delta 0), reused 23 (delta 0)
    Unpacking objects: 100% (23/23), done.
    Checking connectivity... done. 


Next, change the application source code to see what happens. Change to your Git clone directory. 
The views folder contains a file named `index.ejs`. This file implements the main page for the example. 
Change this file, for example, modify the title that is displayed.

![Changing the title](/tutorials/jazzeditor/images/cli-edit-file.png)

Then, change to your Git clone directory and do a Git push as shown in this image:

	$ cd ..
    $ git add *
    $ git commit -m "Changing title of app"
    [master bf26680] Changing title of app
    1 file changed, 2 insertions(+), 2 deletions(-)

	$ git push
    Username for 'https://hub.jazz.net': jazzhubdemouser
    Password for 'https://jazzhubdemouser@hub.jazz.net':
    Counting objects: 8, done.
    Delta compression using up to 2 threads.
    Compressing objects: 100% (3/3), done.
    Writing objects: 100% (4/4), 382 bytes | 0 bytes/s, done.
    Total 4 (delta 2), reused 0 (delta 0)
    remote: Resolving deltas: 100% (2/2)
    remote: Processing changes: refs: 1, done
    To https://hub.jazz.net/git/jazzhubdemouser/mycoolwebapp0630
    	43c6bc7..bf26680 master -> master

If you go back to the Web IDE and check the 
Build & Deploy page, you should see something similar to this image:

![Auto-deploy in action](/tutorials/jazzeditor/images/jh-auto-deployed.png)

The top of the **Recent auto-deployments** list shows an entry with a comment that 
matches the commit operation you made from the command line. 
The entry shows that your app is running the code that you pushed.

Next, look at your running app and verify
that the title was updated. You might need to refresh your browser to see the updates.

Click the link in the **Deploy to** field. The Bluemix application dashboard opens. 
When you click the URL on the application dashboard, it takes you to your updated running application.
To get to your running application faster, just click the URL on the same line as the 
**Deploy to** field.

**Tip**: The original title was Application Example: run DataCache using REST API. 


![Application page showing new title](/tutorials/jazzeditor/images/app-new-title.png)

You can continue to modify the example code and push the changes to the 
Git repository as often as you like. If your project and scope of work grows, you can add more people to the 
project and everyone can push changes to the repository. Standard repository operations and 
auto-deployment are all you need to ensure that the application's always running.


---
##Push changes to the Git repository by using the Web IDE

In addition to auto-deployment, IBM DevOps Services provides many other useful capabilities 
for application development:

* Hosting for public projects
* Multiple source code repositories
* Support for agile development
* Web-based development tools with customizations for Bluemix
* Continuous delivery pipeline for deploying applications to Bluemix
* More capabilities under development

To learn about all the features, see the [IBM DevOps Services website](https://hub.jazz.net/learn). 

You've already used the command line to modify your code and push it to the repository. 
Now you can use the Web IDE in DevOps Services to do the same thing.

If you go back to the deployment page, you can click **EDIT CODE** to access the complete, integrated Web IDE that's 
based on the [Eclipse Orion](http://orion.eclipse.org/) open-source project. 

Here's what the Web IDE looks like with the example project open:

![Orion at DevOps Services](/tutorials/jazzeditor/images/orion.png)

From this environment, you can edit files with color syntax support for multiple languages, including HTML, 
CSS, JavaScript, Ruby, Python, and more. For some languages, such as JavaScript, the Web IDE also supports 
syntax checking and code completion, both for standard language constructs and for the services provided 
by Bluemix. To use Content Assist, just press **Ctrl + Space**. For example, this image shows code completion for the standard Node.js express module:

![Orion showing express completions](/tutorials/jazzeditor/images/completion.png)

To try working in the Web IDE, you can make another change to your application. 
But, before you do, you must merge the title change that you made with the command line
so that it shows in the Web IDE. You merge from the Git Repository page. 

![Orion Git repository icon](/tutorials/jazzeditor/images/orion-git-status.png)

On the Git Repository page, merge the change that you made to the title.

![Orion Git merge](/tutorials/jazzeditor/images/orion-git-merge.png)

Next, click the pencil icon in the left bar to get back to the edit page, and then use the navigation tree to find the file that you modified 
before (for example, `views/index.ejs`) and edit it in the integrated editor.

![Orion editing index](/tutorials/jazzeditor/images/orion-really-cool.png)

You can then use the integrated Git support to push the change. Switch to the Git Repository page and follow these steps:

![Orion Git repository icon](/tutorials/jazzeditor/images/orion-git-status.png)

Select the changed files, which include project files from when you created the Git repository and
your changed title file:

![Orion Git staging](/tutorials/jazzeditor/images/orion-git-stage.png)

Commit the changes:

![Orion Git commit](/tutorials/jazzeditor/images/orion-commit.png)

Push the changes:

![Orion Git push](/tutorials/jazzeditor/images/orion-push.png)

These are the same steps that you performed with the command line. 
To see that your app was updated again, 
go to the Build & Deploy page, wait until it shows that the 
application was deployed again, and then click the URL link next to the value in the **Deploy to** field.

When you click the URL you see your updated running application.


![Our really cool app](/tutorials/jazzeditor/images/really-cool.png)

---
##Advanced deployment features

In this workflow, you only used the simple deploy features with Bluemix. 
For more control over deployment, you can use the advanced options. 
Because Bluemix is based on [Cloud Foundry](http://cloudfoundry.com/), you can also manually deploy 
applications directly to Bluemix by using the standard cf and gcf command line tools. Similarly, in the Web IDE, you can click **Deploy** to manually deploy your code to Bluemix. 

**Note**: The **Deploy** button in the Web IDE deploys the current state of the code in your Web IDE, whereas auto-deploy deploys the code that is
checked in to the repository.

Both the command-line tools and the Web IDE are effective for rapid, 
solo development, but the auto-deploy feature adds the security of controlling what is pushed, especially in team environments. 
With auto-deployment, you always know that the code running in the application matches 
a known state in the repository, instead of whatever was in your working directory 
when you pushed changes.


---
##Summary

You should now have a good overview of how to get started with Bluemix and DevOps Services using Node.js. 

You've seen how to create and run a Node.js web app with Bluemix. 
With one click, you created a Git repository, loaded it with example code, and automatically 
deployed the application. In minutes, you changed the code, pushed the changes to the Git repository by using both the command line and the 
Web IDE, automatically built and deployed the application, checked the deployment status, 
and ran the app to show your changes. 

Tell us what you think. What did we do well? 
What can we do better? Post your comments to the [IBM DevOps Services forum](https://www.ibmdw.net/answers?community=jazzhub) 
or send an [email](mailto:hub%40jazz.net).

---
##Tutorials

To learn more about Bluemix and DevOps Services capabilities, see these tutorials:

* [Getting Started with IBM Bluemix and IBM DevOps Services using Java](/tutorials/jazzeditorjava)
* [Setting up Eclipse, Git, and Rational Team Concert Desktop Clients to access IBM DevOps Services](/tutorials/clients)
* [Developing IBM Bluemix applications in Node.js with the IBM DevOps Services Web IDE](/tutorials/jazzweb)
* [Developing IBM Bluemix applications in Java with Eclipse and IBM DevOps Services](/tutorials/jazzrtc)    
* [Getting Started with tracking and planning using IBM DevOps Services](/tutorials/trackplan)  
    
Java and all Java-based trademarks and logos are trademarks or registered trademarks of Oracle and/or its affiliates.    

&copy; Copyright IBM Corporation 2013, 2014.
