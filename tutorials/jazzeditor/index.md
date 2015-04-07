#Get started with Bluemix and Bluemix DevOps Services using Node.js

Last modified: 7 April 2015

Time: 30 minutes

* [Learning objectives](#objectives)
* [Before you begin](#prereq)
* [Create an app with Bluemix](#create_bluemix_app)
* [Set up Git integration and auto-deploy](#git_integration_and_autodeployment)
* [Push changes to the Git repository by using the Web IDE](#push)
* [Deploy by using the Web IDE](#deployment)
* [Update a running app automatically with Bluemix Live Sync](#bluemix_live_sync)
* [Summary](#summary)
 
 
 ---
<a name='objectives'></a>
##Learning objectives

* Create an app in IBM&reg; Bluemix&trade; by using the SDK for Node.js starter pack.
* Create a Git repository for the app.
* Push changes to the Git repository from the IBM&reg; Bluemix&trade; DevOps Services Web IDE.
* Preview and deploy your changes by using the Web IDE run bar.

---

<a name='prereq'></a>
##Before you begin

[Sign up for DevOps Services](https://hub.jazz.net/register). When you sign up, you'll create an IBM id, create an alias, and register with Bluemix. 

---
 
<a name='create_bluemix_app'></a>
##Create an app with IBM Bluemix

Bluemix is an open-standards, cloud-based platform where you can build, manage, and run all types
of apps: mobile, smart devices, web, and big data. The Bluemix capabilities include Java&trade;, mobile back-end development, 
app monitoring, and features from ecosystem partners and open source, 
all through an as-a-service model in the cloud.

You can find helpful information on the Bluemix website:

* [Getting Started with Bluemix](https://www.ng.bluemix.net/docs/#)
* [Bluemix Overview](https://www.ng.bluemix.net/docs/#overview/overview.html#overview)

To get started now, try this tutorial. You'll create an app and deploy it.

1. Sign in to Bluemix. The Dashboard opens:
![Bluemix Dashboard](/tutorials/jazzeditor/images/bm-home_NEW.png)
The Dashboard shows an overview of the active Bluemix space for your organization. 
By default, the space is `dev` and the organization is the user name of the person who created the project. 
For example, if `bob@example.com` logs in to Bluemix for the first time, the active space is `dev` and the organization 
is `bob@example.com`.
If you create more organizations or spaces in Bluemix, use the same ones as you follow the tutorials. Use the default selections.

2. Click **CREATE AN APP**. For the kind of app that you are creating, click **Web**.  

3. For your starter, click **SDK for Node.js**. Review the docs and details, and then click **CONTINUE**.

4. Name your app and then click **FINISH**. The name is a unique URL where you access your app. 
After a moment, the app starts. The app's Overview page opens and shows that the app is running.
![Bluemix Application tile](/tutorials/jazzeditor/images/bm-app-panel_NEW.png)

Now that your app is running, you can see and modify its code by using DevOps Services.

---
<a name='git_integration_and_autodeployment'></a>
##Set up Git integration and auto-deploy in DevOps Services

You can work with your app's code in many ways. For example, with auto-deploy, you can modify the code that runs in your app by pushing your changes to a Git repository. You can auto-deploy your code if you use the Build & Deploy capabilities of DevOps Services.

1. To enable auto-deploy, go to your app's Overview page on the Bluemix Dashboard and click **ADD GIT**. A Git repository is created and is populated with example code and a deployed app. You might be prompted to enter your password to verify that DevOps Services can act on your behalf. 
![Add Git button](/tutorials/jazzeditor/images/bm-add-git-integration_NEW.png)

2. Make sure that the **Populate the repository with the starter application package and enable build and deploy** check box is selected.
![Create Git repo dialog](/tutorials/jazzeditor/images/bm-create-git-repo_NEW.png)
You created a Git repository, populated it with the example code, and deployed the app.
![Git repo success message dialog](/tutorials/jazzeditor/images/bm-git-repo-success-msg_NEW.png)

3. Go to the app's Overview page and click **EDIT CODE**. Your new project opens in the web integrated development environment (Web IDE).  
![CODE button](/tutorials/jazzeditor/images/bm-code-button_NEW.png)

4. To check the status of the app, review the run bar and click the **Open the application URL** icon.
![Web IDE](/tutorials/jazzeditor/images/orion_NEW.png)

---
<a name='push'></a>
##Push changes to the Git repository by using the Web IDE

The integrated Web IDE is 
based on [the Eclipse Orion open-source project](http://orion.eclipse.org/). 
![Orion at Bluemix DevOps Services](/tutorials/jazzeditor/images/orion_1_NEW.png)

You can edit files with syntax coloring support for multiple languages, including HTML, 
CSS, JavaScript, Ruby, and Python. For some languages, such as JavaScript, the Web IDE also supports 
syntax checking and code completion, both for standard language constructs and for the services that Bluemix provides. To use content assist, press Ctrl+Space. For example, this image shows code completion for the standard Node.js express module:
![Orion showing express completions](/tutorials/jazzeditor/images/completion.png)

4. In the directory, find a file to modify; for example, `views/body.jade`. 

5. Edit the file in the editor.
![Orion editing index](/tutorials/jazzeditor/images/orion-really-cool_NEW.png)

6. Push the change by using the integrated Git support. 

	a. From the leftmost menu, click the **Git Repository** icon.
	
	b. Select the changed file:
![Orion Git staging](/tutorials/jazzeditor/images/orion-git-stage_NEW.png)
	c. Add a commit message and commit the changes:
![Orion Git commit](/tutorials/jazzeditor/images/orion-commit_NEW.png)
	d. Push the changes:
![Orion Git push](/tutorials/jazzeditor/images/orion-push_NEW.png)

7. To verify that your code was deployed, 
go to the Build & Deploy page and wait until you see an indication that the 
app was deployed again. Then, click the URL link that is next to "Deploy to." Your update is shown.
![Our really cool app](/tutorials/jazzeditor/images/really-cool_NEW.png)

---
<a name='deployment'></a>
##Deploy by using the Web IDE

###Run bar

In the Web IDE, you can deploy your code to Bluemix by clicking the **Play** icon on the run bar. 

![Run bar][1]

By clicking the **Play** icon, you deploy the current state of your code in the Web IDE. To deploy the code that is checked into the repository, use the Delivery Pipeline.

Both the command-line tools and the Web IDE are effective for rapid, solo development, but the IBM Continuous Delivery Pipeline for Bluemix feature adds the security of controlling what is pushed, especially in team environments. With the Delivery Pipeline feature, you always know that the code running in the app matches a known state in the repository, instead of whatever was in your working directory when you pushed changes.

<a name='bluemix_live_sync'></a>

###Update a running app automatically with Bluemix Live Sync

With Node.js apps, you can make changes to static files, like HTML or CSS, and have them immediately propagated to the deployed app by using the Bluemix Live Sync feature. 

1. In the Web IDE, turn on Live Edit mode. 
2. To see your updated static files, refresh the app in your browser.  
3. If you update a node module, use the **Quick Restart** icon to restart the node run time in a matter of seconds, without redeploying the app.

![Run bar with Live Edit](images/live_edit.png)

You can use the Debug feature to create breakpoints and inspect variables in your node modules so you can isolate problem areas as you work. 

For more information, see 
[Bluemix Live Sync](https://www.ng.bluemix.net/docs/#manageapps/bluemixlive.html#bluemixlive).



---
<a name='summary'></a>
##Summary

You have a good overview of how to get started with Node.js in Bluemix and DevOps Services. 

You saw how to create and run a Node.js web app by using Bluemix. 
With one click, you created a Git repository, populated it with example code, and automatically 
deployed the app. You changed the code and pushed the changes to the Git repository by using the 
Web IDE. Then, you automatically built and deployed your changes, checked the deployment status, 
and verified your changes. 

[1]: /tutorials/jazzeditor/images/runbar_green.png
