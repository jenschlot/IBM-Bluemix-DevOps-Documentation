#Getting acquainted with Bluemix DevOps Services
####Obviously not the final title

Last modified: 19 March 2015

Time: 5 minutes

* Learning objectives
* Before you begin
* Deploy a sample app
* Explore the app's pipeline
* Edit the app
* Summary
* Next steps

---
##Learning objectives

In this tutorial, you learn how to:
* Create a sample IBM Bluemix app
* View the preconfigured Bluemix DevOps Services pipeline that deploys your app to Bluemix 
* Make a quick change to your app in the DevOps Services Web IDE
* View your updated app on the web

--- 
##Before you begin

To complete this tutorial, you need an [IBM id][30] that is registered with DevOps Services. Also, be sure to [register for Bluemix][32].

--- 
##Deploy a sample app

**This section needs to be retooled for the new sample Node.js app (under construction). Sentiment Analysis requires messing with Twitter API keys and is therefore not delightful.**

You start with the sample project, [Sentiment Analysis App][2]. This Node.js app uses a Git repository, and includes a Grunt build file.

Before you start, [explore the live version of the sample project][27]. The app analyzes Twitter users' collective sentiment about a search phrase. 

After you explore the project, click the button below to create your own copy of it by forking and deploying it:

<a target="_blank" href="https://bluemix.net/deploy?repository=https://hub.jazz.net/git/ibmdevopsservices/Sentiment.Analysis.App"><img src="images/bigButton.png" alt="Deploy to Bluemix"></a>

After the project is forked and the deployment completes, click **EDIT CODE** to continue.

---
##Explore the app's pipeline

DevOps Services projects are deployed by using pipelines. When you fork a project by clicking the **Deploy to Bluemix** button, a pipeline configuration is created for your project automatically.

This default pipeline configuration comprises two stages: a Build stage that takes the code in the project's master Git branch, and a Deploy stage that takes the packaged code from the build stage and deploys it to Bluemix. Whenever a project member pushes a change to the project, the pipeline's build and deploy capabilties are automatically triggered.

<!--We shouldn't actually talk about jobs here, right?-->

Next, in order to see the pipeline at work, edit the app.

---
##Edit the app

Click **EDIT CODE**. The Web IDE opens opens and your project’s root directory is shown in the navigation pane. 

1. Click the `app.js` file to open it in the code pane.
2. On line 6 of the file, find the `DEFAULT_TOPIC` variable. Change its value to whatever you like. 
3. When you stop typing for a moment, your change is saved automatically. 

Your change is saved and ready to be committed to the project's remote repository. 

Click **Git Repository**. The Repositories page opens. Next, stage the change to `app.js`, commit it, and push it.

1. Under Working Directory Changes, click the checkbox beside `app.js`.
2. Enter a commit message (`Updating DEFAULT_TOPIC`, for example) and click **Commit**.
3. Under Active Branch, click **Push**.

The update to `app.js` is pushed to the remote master branch that acts as input to your project's pipeline. 

Click **BUILD & DEPLY** to see the pipeline build and deploy your updated app. When the second stage completes, click the URL beneath Last Execution Result to verify your change.

---
##Summary

There you have it! In a few minutes, you forked and deployed a sample Bluemix app, edited it in the Web IDE, and watched as your changes triggered a new build and deployment of it. Easy, right?

---
##Next steps

This quick tour barely scratched the surface of what you can do with Bluemix. Want to learn more? See our tutorials on...

[30]: https://hub.jazz.net/register
[31]: https://jazz.net/action/register
[32]: https://apps.admin.ibmcloud.com/manage/trial/bluemix.html