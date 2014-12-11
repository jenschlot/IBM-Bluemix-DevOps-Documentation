#Developing IBM Bluemix applications in Java with Eclipse and DevOps Services

Last modified: 10 October 2014

This tutorial shows you how to develop a Java&trade; application by using IBM&reg; Bluemix&trade;, IBM DevOps Services and the Rational&reg; Team Concert client for Eclipse. 
Make sure that your IBM id is registered with [Bluemix](//bluemix.net). Log in to DevOps Services with your IBM id.


##Getting your app

We'll start by forking the sample project, [WordCounter](https://hub.jazz.net/project/pskhadke/WordCounter/overview).
This project uses Jazz&trade; Source Control Management (Jazz SCM for short). It contains a manifest for deploying to Bluemix
and can be loaded directly in the Rational Team Concert client for Eclipse. DevOps Services also supports Git projects. To find out more
about support for Git, see
[Getting Started with Bluemix and DevOps Services using Java](/tutorials/jazzeditorjava).

In the WordCounter project overview, click **EDIT CODE** to
open the web IDE.

![Click Edit Code](/tutorials/jazzrtc/images/click_edit_code.png "Click Edit Code")

You can build your own application by clicking the **FORK** button and entering a unique name when prompted.

![Fork](/tutorials/jazzrtc/images/fork.png "Fork")

You get a new project, a new project name, and a copy of the code from the sample project.

![Create Project dialog](/tutorials/jazzrtc/images/create_project.png "Create Project dialog")

If you're getting an error, then you probably didn't [register with Bluemix](//bluemix.net). Otherwise, you're all set to build and deploy!
Great!

---
##Deploying your app

Go to the deployment page by clicking the **BUILD & DEPLOY** button. Turn on deployment in the advanced mode by clicking the
**ADVANCED** button. You need builds to compile your Java code, which requires the advanced mode. Also note that
charges might apply for building and deployment. For more information, go to the [Bluemix pricing page](https://bluemix.net/#/pricing).
To track charging, you need to add the Delivery Pipeline service to your space after you've deployed your first build.

On the Pipeline page, click 'add a builder'. The Add Builder page opens.

![Click Add A Builder](/tutorials/jazzrtc/images/add_builder.png "Click add a builder")

On the Add Builder page, specify
	
* The password that is associated with your IBM id as the "Your IBM DevOps Services password."
* The folder that contains your code, for example, "WordCounter" as the "Build script path". Upon loading the project in the Rational Team Concert client, this folder
automatically maps to an Eclipse project.
* A name for the "Build archive directory". This directory is where the build output files go and are archived as part of the build result.

Select the "Enable unit tests" to run test cases during a build. Finally, click **Save**.

![Add Builder](/tutorials/jazzrtc/images/configure_builder.png "Add Builder")

Click 'add a stage' to open the 'Add Deployer Stage' page.

![Click Add A New Stage](/tutorials/jazzrtc/images/add_deployer.png "Click add a new stage")

The Add Deployer Stage page uses the settings that are provided by the `manifest.yml` file, included as part of the project. All of the values,
except for the hostname, can be used directly as provided. The hostname is used to define your application's url and needs
to be unique for each application deployed. Override the host with the `-n` option in the `cf push` command as shown in the example.
Click **Save** and you're all set!

![Add Deployer](/tutorials/jazzrtc/images/configure_deployer.png "Add Deployer")

Click the **REQUEST BUILD** button to see your project get built and deployed for the first time. This takes a couple of
minutes. And then... the circle goes green! The app is live!

![Successful Build](/tutorials/jazzrtc/images/build1_success.png "Successful Build")

Click the application link... It works! Awesome!

![Application](/tutorials/jazzrtc/images/app.png "Application")

---
##Adding the Delivery Pipeline service

Add the Delivery Pipeline service to the app. Click the running instance of your app to view it from Bluemix. If prompted, enter your IBM id and password. 

![Bluemix Instance](/tutorials/jazzrtc/images/running_instance.png "Bluemix Instance")

1. Click **ADD A SERVICE** from your new app's overview.
2. Choose **Delivery Pipeline** in the DevOps category.
3. Don't worry about Space or App. Click **CREATE**.

The Delivery Pipeline service will be added to your Bluemix space. 

---
##Accessing your app from the Rational Team Concert client for Eclipse

Now that you have a running application, connect to it from the Rational Team Concert client for Eclipse. In the DevOps Services Web IDE, click the project link to go to the Project Overview page. 

![Project Link](/tutorials/jazzrtc/images/project_link.png "Project Link")

You can get the Jazz Repository information here. 

![Team Invitation](/tutorials/jazzrtc/images/team_invite.png "Team Invitation")

To learn how to set up the Rational Team Concert client for Eclipse, connect to your project, and load the code, see [Setting up Eclipse, Git, and Rational Team Concert Desktop Clients to access DevOps Services](/tutorials/clients#working_with_a_jazz_scm_project).

---
##Delivering your first change

You're in the Rational Team Concert client for Eclipse. Now change something and see it go live. For example, change the app name on
line 10 of index.html.

![Edit Code](/tutorials/jazzrtc/images/edit_code.png "Edit Code")

Next, deliver the change to the Jazz SCM repository. To deliver the change, check in the change in a new Change set
by using the Pending Changes view.

![Check In Change](/tutorials/jazzrtc/images/checkin.png "Check In Change")

You can edit the comment for the Change set...

![Edit Change Set Comment](/tutorials/jazzrtc/images/edit_comment.png "Edit Change Set Comment")

and then deliver it. 

![Deliver Change Set](/tutorials/jazzrtc/images/deliver.png "Deliver Change Set")

Visit the deployment page in the browser. A build will get triggered. The page is automatically updated. Wait for
it to go green.

![Successful Build](/tutorials/jazzrtc/images/build2_success.png "Successful Build")

You click the app link and the app name is updated! Cool!

![Application](/tutorials/jazzrtc/images/app2.png "Application") 

---
##Adding a test failure

Add a failure to the JUnit tests so that you can see what happens when the build fails. Set "this.wcFinder" to null
on line 26 of WordCounterFinderTest.java.

![Edit Test Case](/tutorials/jazzrtc/images/edit_testcase.png "Edit Test Case")

In addition, change the app name on line 10 of index.html. Deliver the changes.

![Edit App Name Again](/tutorials/jazzrtc/images/edit_code_2.png "Edit App Name Again")

The deployment page shows a failed build, as expected. Note how the build was not deployed automatically. Only successful
builds are automatically deployed. Also, note that when you click the app link, the app name is not updated. 

![Failed Build](/tutorials/jazzrtc/images/build3_failure.png "Failed Build")

Click the build to access the build logs and test results.

![Click Build](/tutorials/jazzrtc/images/build_log.png "Click Build")

---
##Fixing the bug

Revert the code in WordCounterFinderTest.java to its previous state and deliver the change.

![Fix Test Case](/tutorials/jazzrtc/images/fix_testcase.png "Fix Test Case")

And the build is back to green! 

![Successful Build](/tutorials/jazzrtc/images/build4_success.png "Successful Build")

So is the app!

![Application](/tutorials/jazzrtc/images/app3.png "Application")
						
Now you can develop Java applications on your own. Thanks for following along.
