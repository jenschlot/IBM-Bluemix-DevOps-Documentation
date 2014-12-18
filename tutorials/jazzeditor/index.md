#Getting Started with IBM Bluemix and IBM DevOps Services by using Node.js

Last modified: 18 December 2014

##Create an application with IBM Bluemix

IBM&reg; Bluemix&trade; is an open-standards, cloud-based platform for building, managing, and running all types
of applications: mobile, smart devices, web, and big data. The Bluemix capabilities include Java&trade;, mobile back-end development, 
application monitoring, and features from ecosystem partners and open source, 
all through an as-a-service model in the cloud.

Before you can use the Bluemix capabilities, [sign up for free](https://bluemix.net/).

After you sign up, you can find helpful information on the Bluemix website:

* [Getting Started with Bluemix](https://bluemix.net/docs/QuickStart.jsp)
* [Bluemix Overview](https://bluemix.net/docs/BlueMixIntro.jsp)

To get started now, try this tutorial. You'll create an application and deploy it.

1. Sign into Bluemix. The dashboard opens:
![Bluemix dashboard](/tutorials/jazzeditor/images/bm-home.png)
The dashboard shows an overview of the active Bluemix space for your organization. 
By default, the space is `dev` and the organization is the project creator's user name. 
For example, if `bob@example.com` logs in to Bluemix for the first time, the active space is `dev` and the organization 
is `bob@example.com`.
If you create more organizations or spaces in Bluemix, be sure to use the same ones as you follow the tutorials. Use the default selections.

2. Click **CREATE AN APP** to select from several run times, such as Java or Ruby; services, such as IBM DataCache or MongoDB; and boilerplates, 
which are preconfigured app templates. 

3. For this workflow, select the Node JS Web Starter boilerplate and review 
its description. As you can see, the app is a simple Node.js web server that includes example code 
that demonstrates the IBM DataCache service. 

4. Name the app and enter a host. The name is a unique URL where you access your app. 

5. For the space, use the default setting. For the Datacache Plan, make sure that **Free** is selected.

6. Click **CREATE**.
![Bluemix Create App dialog](/tutorials/jazzeditor/images/bm-create.png)
The app starts after a moment. The app dashboard opens and shows that it's running.
![Bluemix Application tile](/tutorials/jazzeditor/images/bm-app-panel.png)

7. On the dashboard, click the URL to open your running app.

 ![A running web application](/tutorials/jazzeditor/images/bm-example.png)

Now that your application is running, you can see and modify its code with IBM DevOps Services.

---
##Enable Git integration and auto-deployment with DevOps Services

You can work with your application code in many ways. For example, with the auto-deploy feature, you can modify the code that runs in your app by pushing the changes to a 
Git repository. The mechanism that implements auto-deployment is powered by 
the BUILD & DEPLOY capabilities of DevOps Services.

1. To enable auto-deployment, go to the Bluemix dashboard for your application and 
click **ADD GIT**. You get a Git repository that is populated with example code and a deployed app. 
![Add Git button](/tutorials/jazzeditor/images/bm-add-git-integration.png)
You might be prompted to enter your password to verify that DevOps Services can act on your behalf. 
![DevOps Services sign in page](/tutorials/jazzeditor/images/jh-signin.png)
**Note:** The first time that you access IBM DevOps Services, you might need to create a Jazz&trade; ID and link it to your IBM id. A Jazz ID is a short name that is used in several places, 
including the URL for the repository that is created for you. For this one-time process, follow 
the instructions in the window.
 
2. Make sure that the check box is selected to populate the Git repository with the starter application package and 
to automatically deploy the app.
![Create Git repo dialog](/tutorials/jazzeditor/images/bm-create-git-repo.png)
You created a Git repository, populated it with the example code, and deployed the app.
![Git repo success message dialog](/tutorials/jazzeditor/images/bm-git-repo-success-msg.png)

3. To see the status of the deployed app, go to the Bluemix application dashboard and click **EDIT CODE**.
![CODE button](/tutorials/jazzeditor/images/bm-code-button.png)
Your new project opens in the web IDE. The project page contains useful information that you can review later. 

4. To check the status of the application, click **BUILD & DEPLOY**.
![Web IDE](/tutorials/jazzeditor/images/orion.png)
A page opens where you can configure and see the deployment status for the project.
![DevOps Services auto deploy page](/tutorials/jazzeditor/images/jh-auto-deploy.png)
**Tip:** With Advanced deployment, you can add a build step, which is useful for Java applications. You can also control 
more deployment options. However, those options are more advanced than this basic workflow.

Notice the warning message about outgoing changes. The outgoing files are project files that are created when you create a Git repository project. You'll check in those files later.

The Git URL is used in Git commands. You can copy the URL now or return to this page and copy it later.

5. To manage your application in Bluemix, click the link next to the **Deploy to** field.

---
##Push changes to the Git repository by using the command line

You now have a Git repository that contains example code. You can use several tools to work with Git, including desktop IDEs, the browser-based web IDE, and the command line. 

**Before you begin:**
If you need to install Git, [see Installing Git](/tutorials/clients#installing_git).

To learn more about working with Git, [browse the Git documentation](http://git-scm.com/doc).

1. Clone the local repository by using the Git URL from either the Bluemix application dashboard 
or the BUILD & DEPLOY page:

	$ git clone https://hub.jazz.net/git/jazzhubdemouser/mycoolwebappdemo
    Cloning into 'mycoolwebappdemo'...
    Username for 'https://hub.jazz.net': jazzhubdemouser
    Password for 'https://jazzhubdemouser@hub.jazz.net':
    remote: Counting objects: 23, done
    remote: Finding sources: 100% (23/23)
    remote: Total 23 (delta 0), reused 23 (delta 0)
    Unpacking objects: 100% (23/23), done.
    Checking connectivity... done. 

2. Change the application source code and see what happens:

a. Change to your Git clone directory. The views folder contains a file that is named `index.ejs`. This file implements the main page for the example. 

b. Change this file. For example, modify the title.
![Changing the title](/tutorials/jazzeditor/images/cli-edit-file.png)

c. Change to your Git clone directory and do a Git add, commit and push as shown:

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
    Writing objects: 100% (4/4), 383 bytes | 0 bytes/s, done.
    Total 4 (delta 2), reused 0 (delta 0)
    remote: Resolving deltas: 100% (2/2)
    remote: Processing changes: refs: 1, done
    To https://hub.jazz.net/git/jazzhubdemouser/mycoolwebappdemo
    	43c6bc7..bf26680 master -> master

d. If you return to the web IDE and check the 
BUILD & DEPLOY page, you will see something like this image:
![Auto-deploy in action](/tutorials/jazzeditor/images/jh-auto-deployed.png)
At the top of the **Recent auto-deployments** list, an entry has a comment that 
matches the commit operation that you made from the command line. 
The entry shows that your app is running the code that you pushed.

e. View your running app and verify that the title was updated. You might need to refresh your browser to see the updates.

3. Next to "Deploy to," click the link. The Bluemix application dashboard opens. 
When you click the URL on the application dashboard, your updated running application opens.
To access your running application quickly, click the URL that is next to  
"Deploy to."

![Application page with new title](/tutorials/jazzeditor/images/app-new-title.png)

You can continue to modify the example code and push the changes to the 
Git repository. If your project and scope of work grow, you can people to the 
project and everyone can push changes to the repository. Standard repository operations and 
auto-deploy features are all that you need to ensure that the application is always running.


---
##Push changes to the Git repository by using the web IDE

In addition to auto-deployment, IBM DevOps Services provides many other useful capabilities 
for application development:

* Hosting for public projects
* Multiple source code repositories
* Support for agile development
* Web-based development tools with customizations for Bluemix
* Continuous delivery pipeline for deploying applications to Bluemix
* More capabilities under development

To learn about all the features, [see the IBM DevOps Services website](https://hub.jazz.net/learn). 

You used the command line to modify your code and push it to the repository. 
Now, try the web IDE in DevOps Services to do the same thing.

1. Return to the deployment page and click **EDIT CODE** to access the complete, integrated web IDE that's 
based on [the Eclipse Orion open-source project](http://orion.eclipse.org/). When the example project is open, the web IDE looks like this image:
![Orion at DevOps Services](/tutorials/jazzeditor/images/orion.png)
In this environment, you can edit files with syntax coloring support for multiple languages, including HTML, 
CSS, JavaScript, Ruby, and Python. For some languages, such as JavaScript, the web IDE also supports 
syntax checking and code completion, both for standard language constructs and for the services that Bluemix provides. To use content assist, press **Ctrl + Space**. For example, this image shows code completion for the standard Node.js express module:
![Orion showing express completions](/tutorials/jazzeditor/images/completion.png)

2. Before you make another change to your application, merge the title change that you made on the command line
so that the change shows in the web IDE. You merge from the Git Repository page. 
![Orion Git repository icon](/tutorials/jazzeditor/images/orion-git-status.png)

3. On the Git Repository page, sync the change that you made to the title.
![Orion Git merge](/tutorials/jazzeditor/images/orion-git-merge.png)

4. In the left bar, click the pencil icon to get to the edit page. Then, use the navigation tree to find the file that you modified 
before; for example, `views/index.ejs`. Edit the file in the integrated editor.
![Orion editing index](/tutorials/jazzeditor/images/orion-really-cool.png)

5. Push the change by using the integrated Git support. Switch to the Git Repository page and follow these steps:
![Orion Git repository icon](/tutorials/jazzeditor/images/orion-git-status.png)
a. Select the changed files, which include project files from when you created the Git repository and
your changed title file:
![Orion Git staging](/tutorials/jazzeditor/images/orion-git-stage.png)
b. Commit the changes:
![Orion Git commit](/tutorials/jazzeditor/images/orion-commit.png)
c. Push the changes:
![Orion Git push](/tutorials/jazzeditor/images/orion-push.png)
These steps are the same steps that you completed by using the command line. 

6. To verify that your app was updated, 
go to the BUILD & DEPLOY page and wait until you see an indication that the 
application was deployed again. Then, click the URL link that is next to "Deploy to." Your updated running application is shown.
![Our really cool app](/tutorials/jazzeditor/images/really-cool.png)

---
##Advanced deployment features

In this tutorial, you used only the simple deploy features with Bluemix. 
If you want more control over deployment, use the advanced options. 
Because Bluemix is based on Cloud Foundry, you can also manually deploy 
applications directly to Bluemix by using the standard cf and gcf command-line tools. Similarly, in the web IDE, you can click **DEPLOY** to manually deploy your code to Bluemix. [Learn more about Cloud Foundry](http://cloudfoundry.com/).

**Important**: The **DEPLOY** button in the web IDE deploys the current state of the code in your web IDE, the auto-deploy feature deploys the code that is
checked in to the repository.

Both the command-line tools and the web IDE are effective for rapid, 
solo development. However, the auto-deploy feature adds the security of controlling what is pushed, especially in team environments. 
With auto-deployment, you always know that the code that is running in the application matches 
a known state in the repository. In contrast, manual deployment deploys whatever is in your working directory 
when you push changes.


---
##Summary

You have a good overview of how to get started with Bluemix and DevOps Services by using Node.js. 

You saw how to create and run a Node.js web app by using Bluemix. 
With one click, you created a Git repository, populated it with example code, and automatically 
deployed the application. You changed the code and pushed the changes to the Git repository by using both the command line and the 
web IDE. Then, you automatically built and deployed the app, checked the deployment status, 
and ran the app to view your changes. 


