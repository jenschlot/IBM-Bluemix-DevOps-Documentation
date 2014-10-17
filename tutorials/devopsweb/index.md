Obvious questions:

* Swap Pipeline and code editor sections?
* Alt: just extend verification section
* I really don't want this to ever become bloated, so I'm shy of including anything more than a little on concepts in any one section. I'd prefer to link out to reference topics when appropriate.


# The Son of "Developing an IBM Bluemix application in Node.js with the Web IDE"


In this tutorial, you'll learn how to:

+ Fork an existing IBM® DevOps Services project, the [Sentiment Analysis App][2] 
+ Plan a minor update to it with Track & Plan
+ Make that update with DevOps Services' web-based IDE
+ Deploy your updated app to [IBM Bluemix™][1] 

---
## Before you begin

To follow this tutorial, you'll need to have signed up for an [IBM id][30]. You'll also need a [Jazz ID][31], which you'll be prompted to create after you register for your IBM id. You should also be sure to [register for Bluemix][32].

If it's not already present in your Bluemix space, you'll also need to add the *Delivery Pipeline* Add-on to it. To learn how, [click here][33]. 

---
## Start with a sample project

You'll start with the sample project, [Sentiment Analysis App][2]. This app is a hosted Node.js Git project that's configured with a Grunt build file, so it's ready to use with Advanced Build & Deploy. 

Before beginning, take a look at a live version of it [here][27]. You're going to make your own copy of it: 

1. Open the sample app's [Overview][2] page. 
2. Click **Edit Code**. The sample project will open in DevOps Services' Web IDE.
3. Click **Fork**. A dialogue for saving your copy of the sample will appear.
4. Enter whatever **Name** you like. Leave the project public, but make sure that the boxes for **Add features for Scrum development** and **Deploy to Bluemix** are checked. 
5. Click **Save**. 

In a moment, your copy of the sample Sentiment Analysis App project will open. If you ever need to find it again, look under **My Stuff**, which is on the navigation bar at the top of the page.

---
## Plan a change to your project

With DevOps Services' Track & Plan Beta feature, you can manage projects using an agile approach. You could potentially plan lots of serious work with it by creating sprints, and then ranking and assigning stories, tasks, and defects to members of your development team. To keep this tutorial brief, though, you're going to create a single task and assign it to yourself for resolution.  

1. Click TRACK & PLAN. Review and close the message that welcomes you to the Track & Plan Beta. If you do not see the welcome message, you need to manually activate the Track & Plan Beta feature:
    1. Click the dropdown menu beside the TRACK & PLAN icon and click **Try the new Track & Plan Beta** to access the Beta Feature Settings. 
    2. Select the **Try the new Track & Plan Beta** checkbox and click **SAVE**. 
    3. Finally, click **TRACK & PLAN** again.
2. Click the **Display as lanes** icon to make sure you're in the *Lanes* view. 
3. Click **Create a work item** in the *Open* lane. 

Next, you'll describe a task for yourself to personalize the Sentiment Analysis app:

1. For the work item summary, type `Update default search topic, then deploy app`.
2. Assign the work item the "task" type by typing a space and then `*task` after the summary.
3. Assign the task to yourself by adding `@:<Your Username>` after that.
4. Finally, assign the task a high priority by typing `$high`. 
5. Click **SAVE**. Your new task will appear in the *Open* panel under *Recently Created*.
    
Your project now has a single work item: it's a task for you to update the app's default search topic, and it needs to be done soon. To get going:

1. Click the **Status** icon on your task.
2. Click **Start Working**. Your task will move from the *Open* panel to *In Progress*.
3. Optionally, make a note of the task's work item number. You'll need the task number later on the Git Repository page to link the task to a commit, so save yourself a click by copying or writing it down. 

---
## Modify your project's code

You now have a sample project and a task to personalize it. You can make and deliver that change right in your browser using DevOps Services' full-featured, web-based IDE.  

1. Click **EDIT CODE**. The IDE opens. 
2. You will see your project's root directory in the navigation panel. Click the file **app.js** to open it in the code panel.
3. On line 6 of **app.js**, you'll see the variable `DEFAULT_TOPIC`. Change its value to whatever you like. 
4. When you stop typing for a moment, your change will be saved automatically, though you can save manually as well by clicking **File**, then **Save**.

And that's it. Your change is saved and ready to be committed to the project's remote repository.

---
## Push your change to the project repository

DevOps Services currently supports Git or Jazz SCM for revision control and source code management. Because the original *Sentiment Analysis App* project uses a Git repository hosted by IBM, your copy of it does, too. The code that you've modified is currently in the local branch of your repository; it needs to be pushed to the remote branch to be deployed to Bluemix. 

1. Click the **Git Repository** icon. The Git page will open, and you'll see in the *Working Directory Changes* panel that there is an uncommitted change to app.js. 
2. Select the checkbox next to `app.js`, and then enter a commit message in the **Enter the commit message** field. Somewhere in the message, be sure to enter the phrase `task <number of your work item>`. This will link this commit to the task. Refer back to the Track & Plan area if you've forgotten the number. 
3. Click **COMMIT**. Your change will appear in the *Active Branch* panel.
4. Click **PUSH**. Your local `master` branch will be pushed to the remote `master` branch. 

You're almost done. With your updated code now on your remote repository, you can now configure DevOps Services to build it and then deploy it automatically to IBM Bluemix. Your app is about to go live! 

---
## Configure automatic building and deployment

<!--This section will probably see heavy changes when Simple is folded into Pipeline-->

Because this is a Node.js project, you could deploy it using Simple mode. Simple deployment works by directly deploying the contents of the Git repository. It uses the manifest.yml file in the project's root directory to tell it how to deploy to Bluemix. There isn't an intermediate build step, so it's not intended for use with compiled languages like Java™.

Although the sample is a Node.js app, the sample project uses JSHint validation to check its code for errors. For that to work, you need to configure a builder, which is only available in Advanced mode.

1. On the top navigation bar, click **BUILD & DEPLOY**. 
2. Click **ADVANCED**.
3. Click **add a builder**. 
    1. Select *Grunt* as the *Builder*. The sample project includes a build file that uses Grunt and JSHint to check the code for errors.
    2. Leave else everything at its default.
    3. Note that **Automatically build when a change is delivered/pushed** is checked. If you deliver more changes to this project in the future, DevOps Services will automatically build and deploy them when they're delivered.
4. Click **SAVE**.

Your project will now build with Grunt, using JSHint to make sure that your code is prim and proper, every time a change is pushed to its repository. Now, configure a deployer stage:

1. Click **add a stage**. 
2. Under *Script*, change the first line to `cf push "${CF_APP}"`. After that, type `-n` followed by a new hostname. This will prevent conflicts between your sample app and other developers' on Bluemix. 
3. Leave the other default settings alone.
4. Click **SAVE**. 

You now have a configured deployer stage, and you even modified the deployment script. If you'd like to learn more about configuring deployment scripts, [click here][29]. 

Changes pushed to the master branch will trigger new builds; successful builds will be deployed according to your stage configuration. This convenient process is why Pipeline has its name. 

---
## Deploy the app and verify your change

It's time to see your work in action. Because you configured the Pipeline after making the code change, you'll need to kick off your project's first build yourself.

1. Click **REQUEST BUILD** on the *Builder* tile. The build will queue, run, and then deploy to Bluemix.
2. Once the deployer status tile indicates that your app is running, click on its name to see it on the web. You should see your topic in the input box.
3. Optionally, click on empty space in your deployed app's tile to see its overview on Bluemix. You can view lots of information about your application instance from there. For more information, see [Managing applications on Bluemix][28].

If you like, you can head back to the code editor, make another change or two, and push it to your project's repository. This is a good way to observe DevOps Services' automatic build & deploy capabilities in action, as well as familiarize yourself with the interface. When you're satisfied with your changes, there's just one thing left to do: close out that task. 

---
## Complete the work item

Although you have some paperwork to do, it'll be quick and painless. 

1. Click **TRACK & PLAN** on the navigation bar at the top of the page. 
2. Look at the *In Progress* lane. You'll see the task you created earlier.
3. Click on the task's summary to open the work item editor.
4. Click on the **LINKS** tab. Because you mentioned this task specifically in your Git commit earlier, note that DevOps Services automatically linked your change to this work item.
5. Click **Back to My Work** to open the list view you'd started in. 
6. Click the **Status** icon on the task. Select **Complete**. The task will disappear immediately.
7. Back at the top of the page, click **RESOLVED**. Your newly resolved task will now be there. 

Well done! It's as quick as that. The Track & Plan feature does a great job of keeping administrative overheard to a minimum so that you can concentrate on development.

---
## Wrapping up

And there you have it: in only a few minutes, you forked a Node.js app project, did some paperwork with Track & Plan, modified code with the Web IDE, and used Pipeline to deploy your personalized app with Pipeline to IBM Bluemix--all without leaving your browser. 

Now that you know the basics, you might want to explore [the Track & Plan feature][35], [dive into Pipeline][36], or find out how to [adapt DevOps Services to your preferred development environment][37].

Your feedback is important. What worked well? What could be better? Post your comments to the [IBM DevOps Services forum][20] or send an [email][21].


---
## Learn More


Interested in learning more about Bluemix and DevOps Services? Visit our [Docs page!][34]

&copy; Copyright IBM Corporation 2013, 2014.

[1]: https://bluemix.net/ (Bluemix)
[2]: https://hub.jazz.net/project/curtispd/Sentiment%20Analysis%20App/overview
[3]: /tutorials/jazzweb/images/forkbutton.png
[4]: /tutorials/jazzweb/images/forknew.png
[5]: /tutorials/jazzweb/images/simpledeployment.gif
[6]: /tutorials/jazzweb/images/closesimple.gif
[7]: /tutorials/jazzweb/images/stockapp.gif
[8]: /tutorials/jazzweb/images/builder1.png
[9]: /tutorials/jazzweb/images/deployscriptex.png
[10]: /tutorials/jazzweb/images/click2blue.png
[11]: https://bluemix.net
[12]: /tutorials/jazzweb/images/startappbluemix.png
[13]: /tutorials/jazzweb/images/autocompletesearch.gif
[14]: /tutorials/jazzweb/images/staging.png
[15]: /tutorials/jazzweb/images/commit.png
[16]: /tutorials/jazzweb/images/pushing.png
[17]: /tutorials/jazzweb/images/manifest.gif
[18]: /tutorials/jazzweb/images/manualdeploy.png
[19]: /tutorials/jazzweb/images/updatedapp.gif
[20]: https://www.ibmdw.net/answers?community=jazzhub (forum)
[21]: mailto:hub%40jazz.net
[22]: /tutorials/jazzweb/images/deployto.png
[23]: /tutorials/jazzweb/images/request-build.png  
[24]: http://docs.cloudfoundry.org/devguide/installcf/whats-new-v6.html
[25]: /tutorials/jazzweb/images/config-to-delete.png
[26]: https://www.ng.bluemix.net/docs/#services/DeliveryPipeline/index.html#getstartwithCD
[27]: http://simplesentimentanalysis.mybluemix.net/
[28]: https://www.ng.bluemix.net/docs/#manageapps/index.html#manageapps
[29]: http://docs.cloudfoundry.org/devguide/installcf/whats-new-v6.html#push
[30]: https://hub.jazz.net/register
[31]: https://jazz.net/action/register
[32]: https://apps.admin.ibmcloud.com/manage/trial/bluemix.html
[33]: https://www.ng.bluemix.net/docs/#services/DeliveryPipeline/index.html#getstartwithCD
[34]: https://hub.jazz.net/docs
[35]: https://hub.jazz.net/tutorials/trackplan/
[36]: ##
[37]: https://hub.jazz.net/tutorials/clients