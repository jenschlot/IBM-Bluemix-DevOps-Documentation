# Get started with Bluemix DevOps Services

Last modified: 19 February 2015

Time: 60 minutes 


* [Learning objectives](#objectives)
* [Before you begin](#prereq)
* [Fork a sample project](#fork)
* [Plan a change to your project](#plan_change)
* [Modify your project's code](#modify_code)
* [Push your change to the project repository](#push_changes)
* [Configure builds and deployments](#build_deploy)
* [Deploy the app and verify your change](#deploy_app)
* [Complete the work item](#work_item)
* [Summary](#summary)
* [Next steps](#next_steps)

---
<a name='objectives'></a>
##Learning objectives

+ Create your own version of the IBM® Bluemix DevOps Services project, [Sentiment Analysis App][2], by forking it to your space.
+ Create a work item to plan a updates to your project by using the Track & Plan feature.
+ Make a code update and push it to the project repository by using the Web IDE.
+ Create build and deployment jobs by using the Build & Deploy feature.
+ Deploy your app to [IBM Bluemix™][1]. 

---
<a name='prereq'></a>
## Before you begin

To complete this tutorial, you need an [IBM id][30] that is registered with DevOps Services. Also, be sure to [register for Bluemix][32].

---
<a name='fork'></a>
## Fork a sample project

You start with the sample project, [Sentiment Analysis App][2]. This Node.js app uses a Git repository, and includes a Grunt build file.

Before you start, [explore the live version of the sample project][27]. The app analyzes Twitter users' collective sentiment about a search phrase. 

After you explore the project, click the button below to create your own copy of it by forking and deploying it:



<a target="_blank" href="https://bluemix.net/deploy?repository=https://hub.jazz.net/git/ibmdevopsservices/Sentiment.Analysis.App"><img src="images/bigButton.png" alt="Deploy to Bluemix"></a>

After the project is forked and the deployment completes, click **EDIT CODE** to continue.


---
<a name='plan_change'></a>
## Plan a change to your project

With the Track & Plan service in DevOps Services, you can manage projects by using an agile approach. You can create sprints and rank and assign stories, tasks, and defects to members of your development team. To keep this tutorial brief, create one task and assign it to yourself.

1. Near the top of the page, click **TRACK & PLAN**.
2. If you don't see lanes labeled OPEN and IN PROGRESS, enter the Lanes view by clicking **Display as lanes**.
![Click Display as lanes button][38]
3. In the OPEN lane, click **Create a work item**. Work items are grouped into the OPEN, IN PROGRESS, and RESOLVED lanes based on their status.

You can create different types of work items depending on what you're planning. For example, to describe a minor feature update, you might create a task item. To track the work to fix a problem, you might create a defect item. 

Describe a task to personalize the Sentiment Analysis App. You can assign attributes to the new work item by clicking the attribute icons under the **Create a work item** field, and you can use shorthand in the field:

1. For the work item summary, type `Update default search topic, then deploy app`.
2. Assign the "task" type to the work item: after the summary, type a space and then type `task`.
3. Assign the task to yourself by typing `@:<Your Username>`.
4. Assign a high priority to the task by typing `$high`. 
5. Click **CREATE**. Your new task is shown in the OPEN lane in the *Recently Created* section.

![Creating a new task item][4]
    
Your project now has one work item; it's a task to update the app's default search topic, and you need to do it soon.

![A recently created work item][5]

Start to work on your task:

1. On the task, click the **Status** icon.
2. Click **Start Working**. The task moves from the OPEN lane to IN PROGRESS lane.
![Click Start Working on a task in the lanes view.][12]
3. Optional: Write down the task's work item number. You need the task number later when you link the task to a commit on the Git Repository page.

---
<a name='modify_code'></a>
## Modify your project's code

You now have a sample project and a task to personalize it. You can make and deliver that change in your browser by using the DevOps Services Web IDE.

1. Click **EDIT CODE**. The Web IDE opens opens and your project’s root directory is shown in the navigation pane. 
2. Click the `app.js` file to open it in the code pane.
3. On line 6 of the file, find the `DEFAULT_TOPIC` variable. Change its value to whatever you like. 
4. When you stop typing for a moment, your change is saved automatically. You can save changes manually by clicking **File** > **Save**.

![Updating a variable in the Web IDE][6]

Your change is saved and ready to be committed to the project's remote repository.

---
<a name='push_changes'></a>
## Push your change to the project repository

For revision control and source code management, DevOps Services currently supports Git, Jazz SCM, and GitHub. Because the original Sentiment Analysis App project uses a Git repository that is hosted by IBM, your copy of the project uses a Git repository, too. The code that you changed is currently in your local workspace. Push the changed code to your project's master branch and then deploy your app to Bluemix.

1. On the left side of the screen, click the **Git Repository** icon. 
![The Git Repository icon][14]
On the Git page that opens, check the Working Directory Changes pane to verify that it shows an uncommitted change to `app.js`. The pane might also show other changes that are related to cloning the project into your workspace. If you see those changes, ignore them. To complete your self-assigned task, you need to modify only the `app.js` file.
2. Select the check box next to `app.js`, and in the **Enter the commit message** field, type a commit message. Somewhere in the message, be sure to include this phrase: `task <number of your work item>`. That phrase links this commit to the task. If you don’t remember the task number, return to the Track &amp; Plan area to find it.
![Ready to commit a change to app.js][13]
3. Click **COMMIT**. Your change is shown in the *Active Branch* panel.
4. Click **PUSH**. Your local master branch is pushed to the remote master branch. 

![Ready to push a file update][7]

You're almost done. Now that your updated code is in your remote repository, you can configure DevOps Services to build the code and then deploy it automatically to Bluemix. Your app is about to go live! 

---
<a name='build_deploy'></a>
## Configure builds and deployments

The sample project uses JSHint validation to check its code for errors. For that to work, you must configure a stage that contains a build job that uses Grunt.

**Important:** When you use the Build & Deploy feature with Bluemix, you can generate charges to your Bluemix account. However, you can complete this tutorial for free. If you see messages about billing and Bluemix, you can ignore them safely. For more information about Bluemix, DevOps Services, and charges, [see Configure Bluemix billing for Bluemix DevOps Services][39].

1. On the top navigation bar, click **BUILD & DEPLOY**. 
1. Delete the existing configuration. 

  **Note**: When you fork a project by clicking the **Deploy to Bluemix** button, the configuration is created for your project automatically. Later, you re-create the stages. If you fork a project without clicking the **Deploy to Bluemix** button, the configuration is not created automatically.
  
  a. On the rightmost tile, the Deploy stage, click the gear icon.  
  
  b. Click **Delete Stage** and confirm the deletion.
  
  c. On the remaining stage tile, the Build stage, click the gear icon. 
  
  d. Click **Delete Stage** and confirm the deletion.  

2. Click **ADD STAGE**. 
  
  a. Click the name of the new stage. Change it from **MyStage** to `Build`. In the Input Settings section, make sure that this stage uses the project repository's master branch as input. 
  
  b. Click **JOBS**, and then click **ADD JOB**. Select **Build.**
  
  c. For the builder type, seelect **Grunt**. The sample project includes a build file that uses Grunt and JSHint to check the code for errors.
  
  d. Leave the other settings as they are, and then click **SAVE**.

![A configured builder stage][8]

When you build your project now, it uses Grunt. In addition, every time a change is pushed to its repository, the project uses JSHint to make sure that the code is error-free. 

Next, you configure a stage that contains a deploy job. Deploy jobs deploy your project to Bluemix. You can have many deploy jobs in a project, but in this tutorial, you need only one:

0. Click **ADD STAGE**:
1. Click the name of the new stage. Change it from **MyStage** to 
`Deploy to dev`. In the Input Settings section, make sure that this stage receives the output from the Build stage's build job. 
2. Click **JOBS**, then **ADD JOB**. Select **Deploy.**
3. Leave the settings as they are. Click **SAVE**.

![A configured deployer stage][9]

You configured a stage to deploy your changes, and you even modified the deployment script. Bluemix is based on Cloud Foundry, so the deployment script uses the Cloud Foundry command-line interface command cf push to deploy your app. To learn more about configuring deployment scripts when using Cloud Foundry [see the Cloud Foundry documentation][29]. 

By connecting your stages, you configured a fully functional Build & Deploy pipeline. By default, the changes that you push to the master branch will trigger new builds. Successful builds are deployed according to your deploy stage configuration. 

---
<a name='deploy_app'></a>
## Deploy the app and verify your change

It's time to see your work in action. Because you configured the pipeline after you changed the code, you need to start your project's first build.

1. On the Build stage tile, click the **Play** icon. The build is added to the queue, is run, and then is deployed to Bluemix.
2. After the deployer status tile indicates that your app is running, click the URL that is under the app name. Make sure that your topic is in the input box.
3. Optional: To open the Bluemix Overview page for your running app, click the app's name. You can view lots of information about your app on the Overview page. For more information, [see Managing applications on Bluemix][28].

![The project's configured Pipeline][10]

Now that you’re familiar with the deployment process, return to the code editor, make another change, and push it to your project's repository. This practice is a good way to observe the automatic build and deployment capabilities in DevOps Services and become familiar with the interface. All you need to do is push a change. DevOps Services does the rest. To see the pipeline at work, click **BUILD & DEPLOY**.

When you're satisfied with your changes, close the task. 

---
<a name='work_item'></a>
## Complete the work item

You have paperwork to do, but it's quick and painless. 

1.	On the navigation bar at the top of the page, click **TRACK & PLAN**. 
2.	In the IN PROGRESS lane, find the task that you created earlier.
3.	Open the task in the work item editor by click the task's summary.
4.	Click the **LINKS** tab. Because you mentioned this task in your Git commit, DevOps Services linked your change to this work item automatically by using the commit ID.
5.	Return to the view that you started in by clicking **Back to My Work**. 
6.	Click the **Status** icon on the task. Select **Complete**. The task disappears.
7.	Scroll to the rightmost lane and verify that your newly resolved task is in the RESOLVED section.  

Well done! The Track & Plan service keeps administrative overheard to a minimum so that you can concentrate on development.

![A resolved work item][11]

---
<a name='summary'></a>
## Summary

In only a few minutes, you forked a Node.js app project, planned an update to the app, made the update, and deployed the updated app to Bluemix--all without leaving your browser. 

---
<a name='next_steps'></a>
## Next steps
Now that you know the basics, you might want to explore this information:

- [Integrate DevOps Services into your preferred development environment][37]
- [Develop like you would on the desktop by using Bluemix Live Sync][40]
- [Get started with the Track & Plan feature][35] 
- [Build & Deploy reference (Pipeline)][36]

[1]: https://bluemix.net/ (Bluemix)
[2]: https://hub.jazz.net/project/ibmdevopsservices/Sentiment%20Analysis%20App
[3]: /tutorials/devopsweb/images/forking.png
[4]: /tutorials/devopsweb/images/create_task.png
[5]: /tutorials/devopsweb/images/recent_task.png
[6]: /tutorials/devopsweb/images/edit_var.png
[7]: /tutorials/devopsweb/images/to_push.png
[8]: /tutorials/devopsweb/images/builder.png
[9]: /tutorials/devopsweb/images/deployer.png
[10]: /tutorials/devopsweb/images/configured_pipeline.png
[11]: /tutorials/devopsweb/images/resolved.png
[12]: /tutorials/devopsweb/images/start_working.png
[13]: /tutorials/devopsweb/images/about_to_commit.png
[14]: /tutorials/devopsweb/images/click_git.png
[20]: https://developer.ibm.com/answers/smartspace/devops-services/
[21]: mailto:hub%40jazz.net
[24]: http://docs.cloudfoundry.org/devguide/installcf/whats-new-v6.html
[26]: https://www.ng.bluemix.net/docs/#services/DeliveryPipeline/index.html#getstartwithCD
[27]: http://sentiment-ua.mybluemix.net/
[28]: https://www.ng.bluemix.net/docs/#manageapps/index.html#manageapps
[29]: http://docs.cloudfoundry.org/devguide/installcf/whats-new-v6.html#push
[30]: https://hub.jazz.net/register
[31]: https://jazz.net/action/register
[32]: https://apps.admin.ibmcloud.com/manage/trial/bluemix.html
[33]: https://www.ng.bluemix.net/docs/#services/DeliveryPipeline/index.html#getstartwithCD
[34]: /docs
[35]: /tutorials/trackplan/
[36]: /docs/reference/deploy/
[37]: /tutorials/clients
[38]: /tutorials/devopsweb/images/displayAsLanes.png
[39]: /docs/reference/billing/
[40]: /tutorials/livesync