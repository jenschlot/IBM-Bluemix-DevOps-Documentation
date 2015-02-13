#Getting Started with Bluemix and Bluemix DevOps Services using Node.js

Last modified: 13 February 2015

## Contents
* [Create an application with IBM Bluemix](#create_bluemix_app)
* [Enable Git integration and autodeployment](#git_integration_and_autodeployment)
* [Push changes to the Git repository by using the command line](#push_to_git)
* [Push changes to the Git repository by using the Web IDE](#push_with_web_ide)
* [Deployment using the Web IDE](#deployments)
* [Summary](#summary)
 
<a name='create_bluemix_app'></a>
##Create an application with IBM Bluemix

IBM&reg; Bluemix&trade; is an open-standards, cloud-based platform for building, managing, and running all types
of applications: mobile, smart devices, web, and big data. The Bluemix capabilities include Java&trade;, mobile back-end development, 
application monitoring, and features from ecosystem partners and open source, 
all through an as-a-service model in the cloud.

Before you can use the Bluemix capabilities, [sign up for free](https://bluemix.net/).

After you sign up, you can find helpful information on the Bluemix website:

* [Getting Started with Bluemix](https://www.ng.bluemix.net/docs/#)
* [Bluemix Overview](https://www.ng.bluemix.net/docs/#overview/overview.html#overview)

To get started now, try this tutorial. You'll create an application and deploy it.

1. Sign into Bluemix. The dashboard opens:
![Bluemix dashboard](/tutorials/jazzeditor/images/bm-home_NEW.png)
The dashboard shows an overview of the active Bluemix space for your organization. 
By default, the space is `dev` and the organization is the project creator's user name. 
For example, if `bob@example.com` logs in to Bluemix for the first time, the active space is `dev` and the organization 
is `bob@example.com`.
If you create more organizations or spaces in Bluemix, be sure to use the same ones as you follow the tutorials. Use the default selections.

2. Click **CREATE AN APP** and click **Web** as the kind of app you are creating.  

3. For your starter, click **SDK for Node.js** and review the docs and details. Click **CONTINUE**.

4. Name your app and click **FINISH**. The name is a unique URL where you access your app. 
The app starts after a moment. The app dashboard opens and shows that it's running.
![Bluemix Application tile](/tutorials/jazzeditor/images/bm-app-panel_NEW.png)

Now that your application is running, you can see and modify its code with IBM® Bluemix™ DevOps Services.

---
<a name='git_integration_and_autodeployment'></a>
##Enable Git integration and autodeployment with Bluemix DevOps Services

You can work with your application code in many ways. For example, with the autodeploy feature, you can modify the code that runs in your app by pushing the changes to a 
Git repository. The mechanism that implements autodeployment is powered by 
the BUILD & DEPLOY capabilities of Bluemix DevOps Services.

1. To enable autodeployment, go to the Bluemix overview for your application and 
click **ADD GIT**. You get a Git repository that is populated with example code and a deployed app. 
![Add Git button](/tutorials/jazzeditor/images/bm-add-git-integration_NEW.png)
You might be prompted to enter your password to verify that Bluemix DevOps Services can act on your behalf. 
![Bluemix DevOps Services sign in page](/tutorials/jazzeditor/images/jh-signin.png)
**Note:** The first time that you access IBM DevOps Services, you must create an alias that is linked to your IBM id. An alias is a unique, publicly visible short name that is used in Git repository paths, Track & Plan, and desktop and command line clients, including the URL for the repository that is created for you. For this one-time process, follow the instructions in the window.
 
2. Make sure that the check box is selected to populate the Git repository with the starter application package and 
to automatically deploy the app.
![Create Git repo dialog](/tutorials/jazzeditor/images/bm-create-git-repo_NEW.png)
You created a Git repository, populated it with the example code, and deployed the app.
![Git repo success message dialog](/tutorials/jazzeditor/images/bm-git-repo-success-msg_NEW.png)

3. Go to the Bluemix application overview and click **EDIT CODE**.
![CODE button](/tutorials/jazzeditor/images/bm-code-button_NEW.png)
Your new project opens in the Web IDE. The project page contains useful information that you can review later. 

4. To check the status of the application, review the Run bar and click the **Open application** icon.
![Web IDE](/tutorials/jazzeditor/images/orion_NEW.png)

---
<a name='push_to_git'></a>
##Push changes to the Git repository by using the command line

You now have a Git repository that contains example code. You can use several tools to work with Git, including desktop IDEs, the browser-based Web IDE, and the command line. 

**Before you begin:**
If you need to install Git, [see Installing Git](/tutorials/clients#installing_git).

To learn more about working with Git, [browse the Git documentation](http://git-scm.com/doc).

1. Clone the local repository by using the Git URL from the Bluemix application dashboard, the BUILD & DEPLOY page, or your Bluemix DevOps Services project overview:

		$ git clone https://hub.jazz.net/git/jazzhubdemouser/newcoolwebappdemo
    	Cloning into 'mycoolwebappdemo'...
    	Username for 'https://hub.jazz.net': jazzhubdemouser
    	Password for 'https://jazzhubdemouser@hub.jazz.net':
    	remote: Counting objects: 23, done
    	remote: Finding sources: 100% (23/23)
    	remote: Total 23 (delta 0), reused 23 (delta 0)
	    Unpacking objects: 100% (23/23), done.
	    Checking connectivity... done. 

2. Change the application source code and see what happens:

	a. Change to your Git clone directory. The views folder contains a file that is named `body.jade`. This file implements the main page for the example. 

	b. Change this file. For example, modify the heading.
![Changing the title](/tutorials/jazzeditor/images/cli-edit-file_NEW.png)

	c. Change to your Git clone directory and do a Git add, commit and push as shown:

		$ cd ..
    	$ git add *
    	$ git commit -m "changed h1 text"
 	   [master bf26680] changed h1 text
    	1 file changed, 2 insertions(+), 2 deletions(-)

		$ git push
    	Username for 'https://hub.jazz.net': jazzhubdemouser
    	Password for 'https://jazzhubdemouser@hub.jazz.net':
    	Counting objects: 8, done.
    	Delta compression using up to 2 threads.
    	Compressing objects: 100% (3/3), done.
    	Writing objects: 100% (4/4), 383 bytes | 0 bytes/s, done.
    	Total 4 (delta 2), reused 0 (delta 0)
    	remote: Resolving deltas: 100% (2/2)
    	remote: Processing changes: refs: 1, done
    	To https://hub.jazz.net/git/jazzhubdemouser/newcoolwebappdemo
    		43c6bc7..bf26680 master -> master
	
	d. Return to the Web IDE and check the BUILD & DEPLOY page.
	![Auto-deploy in action](/tutorials/jazzeditor/images/jh-autodeployed_NEW.png)
At the top of the leftmost tile, under Input, an entry has a comment that matches the commit operation that you made from the command line. The entry shows that your app is running the code that you pushed.
	
	e. View your running app and verify that the title was updated. You might need to refresh your browser to see the updates.

3. In the rightmost tile, under the Last Execution Result heading, click the application name. The Bluemix application dashboard opens. When you click the URL on the application dashboard, your updated, running application opens. To access your application quickly, click the URL that is under the Last Execution Result heading.

![Application page with new title](/tutorials/jazzeditor/images/app-new-title_NEW.png)

You can continue to modify the example code and push the changes to the Git repository. If your project and scope of work grow, you can add people to the project and everyone can push changes to the repository. Standard repository operations and autodeployment features are all that you need to ensure that the application is always running.


---
<a name='push_with_web_ide'></a>
##Push changes to the Git repository by using the Web IDE

In addition to autodeployment, IBM Bluemix DevOps Services provides many other useful capabilities 
for application development:

* Hosting for public projects
* Multiple source code repositories
* Support for agile development
* Web-based development tools with customizations for Bluemix
* Continuous delivery pipeline for deploying applications to Bluemix
* More capabilities under development

To learn about all the features, [see the IBM Bluemix DevOps Services website](https://hub.jazz.net/docs). 

You used the command line to modify your code and push it to the repository. 
Now, try the Web IDE in Bluemix DevOps Services to do the same thing.

1. Return to the deployment page and click **EDIT CODE** to access the complete, integrated Web IDE that's 
based on [the Eclipse Orion open-source project](http://orion.eclipse.org/). When the example project is open, the Web IDE looks like this image:
![Orion at Bluemix DevOps Services](/tutorials/jazzeditor/images/orion_1_NEW.png)
In this environment, you can edit files with syntax coloring support for multiple languages, including HTML, 
CSS, JavaScript, Ruby, and Python. For some languages, such as JavaScript, the Web IDE also supports 
syntax checking and code completion, both for standard language constructs and for the services that Bluemix provides. To use content assist, press **Ctrl + Space**. For example, this image shows code completion for the standard Node.js express module:
![Orion showing express completions](/tutorials/jazzeditor/images/completion.png)

2. Before you make another change to your application, merge the title change that you made on the command line
so that the change shows in the Web IDE. You merge from the Git Repository page. 
![Orion Git repository icon](/tutorials/jazzeditor/images/orion-git-status_NEW.png)

3. On the Git Repository page, sync the change that you made to the title.
![Orion Git merge](/tutorials/jazzeditor/images/orion-git-merge_NEW.png)

4. In the left bar, click the pencil icon to get to the edit page. Then, use the navigation tree to find the file that you modified 
before; for example, `views/body.jade`. Edit the file in the integrated editor.
![Orion editing index](/tutorials/jazzeditor/images/orion-really-cool_NEW.png)

5. Push the change by using the integrated Git support. Switch to the Git Repository page and follow these steps:

	a. Select the changed file:
![Orion Git staging](/tutorials/jazzeditor/images/orion-git-stage_NEW.png)
	b. Add a commit message and commit the changes:
![Orion Git commit](/tutorials/jazzeditor/images/orion-commit_NEW.png)
	c. Push the changes:
![Orion Git push](/tutorials/jazzeditor/images/orion-push_NEW.png)
These steps are the same steps that you completed by using the command line. 

6. To verify that your code was deployed, 
go to the BUILD & DEPLOY page and wait until you see an indication that the 
application was deployed again. Then, click the URL link that is next to "Deploy to." Your update is shown.
![Our really cool app](/tutorials/jazzeditor/images/really-cool_NEW.png)

---
<a name='deployment'></a>
##Deployment using the Web IDE

Because Bluemix is based on [Cloud Foundry](http://cloudfoundry.com/), you can deploy applications directly to Bluemix by using the standard cf and gcf command line tools. Similarly, in the Web IDE, you can deploy your code to Bluemix by using the Play button in the Run Bar. 

![Screenshot here of Run Bar][1]

**Note**: Clicking the Play button in the Run Bar deploys the current state of the code in your Web IDE, whereas Pipeline deploys the code that is checked in to the repository.

Both the command-line tools and the Web IDE are effective for rapid, solo development, but the Pipeline adds the security of controlling what is pushed, especially in team environments. With Pipeline, you always know that the code running in the application matches a known state in the repository, instead of whatever was in your working directory when you pushed changes.

---
<a name='summary'></a>
##Summary

You have a good overview of how to get started with Bluemix and Bluemix DevOps Services by using Node.js. 

You saw how to create and run a Node.js web app by using Bluemix. 
With one click, you created a Git repository, populated it with example code, and automatically 
deployed the application. You changed the code and pushed the changes to the Git repository by using both the command line and the 
Web IDE. Then, you automatically built and deployed your changes, checked the deployment status, 
and verified your changes. 

[1]: /tutorials/jazzeditor/images/runbar_green.png
