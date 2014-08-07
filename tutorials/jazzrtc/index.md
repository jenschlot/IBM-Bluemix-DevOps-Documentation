#Developing IBM Bluemix applications in Java with Eclipse and DevOps Services

This tutorial shows you how to develop a Java&trade; application using IBM&reg; Bluemix&trade;, IBM DevOps Services and the Rational&reg; Team Concert client for Eclipse. 
Make sure that your IBM id is registered with [Bluemix](//bluemix.net). Login to DevOps Services with your IBM id.


##Getting your app

We'll start by forking the sample project, [WordCounter](https://hub.jazz.net/project/pskhadke/WordCounter/overview).
This project uses Jazz&trade; Source Control Management (Jazz SCM for short). It contains a manifest for deploying to Bluemix
and can be loaded directly in the Rational Team Concert client for Eclipse. DevOps Services also supports Git projects. To find out more
about support for Git, check out the
[Getting Started with Bluemix and DevOps Services using Java](/tutorials/jazzeditorjava) tutorial.

Go to the [WordCounter](https://hub.jazz.net/project/pskhadke/WordCounter/overview) project. Click **EDIT CODE** to
open the Web IDE.

![Click Edit Code](/tutorials/jazzrtc/images/click_edit_code.png "Click Edit Code")

You can build your own application by clicking the **FORK** button and entering a unique name when prompted.

![Fork](/tutorials/jazzrtc/images/fork.png "Fork")

You get a new project, a new project name and a copy of the code from the sample project.

![Create Project Dialog](/tutorials/jazzrtc/images/create_project.png "Create Project Dialog")

If you're getting an error, then you probably didn't register with Bluemix yet. Otherwise... you're all set to build and deploy!
Great!

---
##Deploying your app

Go to the deployment page by clicking the **BUILD & DEPLOY** button. Turn on deployment in the advanced mode by clicking the
**ADVANCED** button. You need builds to compile your Java code and this is supported by the advanced mode. Also note that
charges may apply for building and deployment. For more information, check out the [Bluemix pricing page](https://bluemix.net/#/pricing).
To track charging, you'll need to install the Delivery Pipeline Add-on after you've deployed your first build.

On the Pipeline page, click 'add a builder'. This opens the Add Builder page.

![Click Add A Builder](/tutorials/jazzrtc/images/add_builder.png "Click add a builder")

On the Add Builder page, specify
	
* The password associated with your IBM id as the "Your IBM DevOps Services password"
* The folder containing your code, i.e. "WordCounter" as the "Build script path". Upon loading the project in the Rational Team Concert client, this folder
automatically maps to an Eclipse project.
* A name for the "Build archive directory". This is where the build output files go and are archived as part of the build result.

Check the "Enable unit tests" checkbox to run test cases during a build. Finally, click **Save**.

![Add Builder](/tutorials/jazzrtc/images/configure_builder.png "Add Builder")

Click 'add a stage' to open the 'Add Deployer Stage' page.

![Click Add A New Stage](/tutorials/jazzrtc/images/add_deployer.png "Click add a new stage")

This page will use the settings provided by the `manifest.yml` file, included as part of the project. All of the values,
except for the hostname, can be used directly as provided. The hostname is used to define your application's url and needs
to be unqiue for each application deployed. Let's override the host with the `-n` option in the `cf push` command as below.
Click **Save** and you're all set!

![Add Deployer](/tutorials/jazzrtc/images/configure_deployer.png "Add Deployer")

Click the **REQUEST BUILD** button to see your project get built and deployed for the first time. This takes a couple of
minutes. And then... the circle goes green! The app's live!

![Successful Build](/tutorials/jazzrtc/images/build1_success.png "Successful Build")

Click the application link... It works! Awesome!

![Application](/tutorials/jazzrtc/images/app.png "Application")

---
##Installing the Delivery Pipeline Add-On

Let's add the Delivery Pipeline Add-on to our app. Click on the running instance of your app to view it from Bluemix. If prompted, enter your IBM id and password. 

![Bluemix Instance](/tutorials/jazzrtc/images/running_instance.png "Bluemix Instance")

1. Click **CONNECT AN ADD-ON** from your new app's overview.
2. Choose **Delivery Pipeline** in the DevOps category.
3. Don't worry about Space or App. Just click **CREATE**.

The Delivery Pipeline Add-on will be added to your Bluemix space. 

---
##Accessing your app from the Rational Team Concert client for Eclipse

Now that you have a running application, let's connect to it from the Rational Team Concert client for Eclipse. In the DevOps Services Web IDE, click on the project link to go to the Project Overview page. 

![Project Link](/tutorials/jazzrtc/images/project_link.png "Project Link")

You can get the Jazz Repository information here. 

![Team Invitation](/tutorials/jazzrtc/images/team_invite.png "Team Invitation")

The [Setting up Eclipse, Git, and Rational Team Concert Desktop Clients to access DevOps Services](/tutorials/clients#working_with_a_jazz_scm_project) tutorial shows you how to
set up the Rational Team Concert client for Eclipse, connect to your project and load the code.						

---
##Delivering your first change

You're in the Rational Team Concert client for Eclipse. So, let's change something and see it go live. For example, change the app name on
line 10 of index.html.

![Edit Code](/tutorials/jazzrtc/images/edit_code.png "Edit Code")

Next, you'll want to deliver the change to the Jazz SCM repository. To do this, check-in the change in a new Change set
using the Pending Changes view.

![Check In Change](/tutorials/jazzrtc/images/checkin.png "Check In Change")

You can edit the comment for the Change set...

![Edit Change Set Comment](/tutorials/jazzrtc/images/edit_comment.png "Edit Change Set Comment")

And then deliver it. 

![Deliver Change Set](/tutorials/jazzrtc/images/deliver.png "Deliver Change Set")

Visit the deployment page in the browser. A build should get triggered soon. The page gets automatically updated. Wait for
it to go green.

![Successful Build](/tutorials/jazzrtc/images/build2_success.png "Successful Build")

You click the app link and voila! The app name's updated! Cool!

![Application](/tutorials/jazzrtc/images/app2.png "Application") 

---
##Adding a test failure

Let's add a failure to the JUnit tests so that you can see what happens when the build fails. Set "this.wcFinder" to null
on line 26 of WordCounterFinderTest.java.

![Edit Test Case](/tutorials/jazzrtc/images/edit_testcase.png "Edit Test Case")

In addition, change the app name on line 10 of index.html. Deliver the changes.

![Edit App Name Again](/tutorials/jazzrtc/images/edit_code_2.png "Edit App Name Again")

The deployment page shows a failed build, as expected. Note how the build was not deployed automatically. Only successful
builds are automatically deployed. Also note that when you click the app link, the app name is not updated. 

![Failed Build](/tutorials/jazzrtc/images/build3_failure.png "Failed Build")

Click the build to access the build logs and test results.

![Click Build](/tutorials/jazzrtc/images/build_log.png "Click Build")

---
##Fixing the bug

Let's revert the code in WordCounterFinderTest.java to its previous state and deliver the change.

![Fix Test Case](/tutorials/jazzrtc/images/fix_testcase.png "Fix Test Case")

And our build is back to green! 

![Successful Build](/tutorials/jazzrtc/images/build4_success.png "Successful Build")

So is our app... Great!

![Application](/tutorials/jazzrtc/images/app3.png "Application")
						
That was easy. Now you can develop Java applications on your own. Thanks for following along. And tell us what you think.
What did we do well? What can we do better? Post your comments to our [forum](https://www.ibmdw.net/answers?community=jazzhub)
or send us an [email](mailto:hub%40jazz.net).

---

##More Tutorials

If you're interested in trying more Bluemix and DevOps capabilities, here is a list of tutorials:

* [Getting Started with Bluemix and DevOps Services using Node.js](/tutorials/jazzeditor)
* [Getting Started with Bluemix and DevOps Services using Java](/tutorials/jazzeditorjava)
* [Setting up Eclipse, Git, and Rational Team Concert Desktop Clients to access DevOps Services](/tutorials/clients)
* [Developing Bluemix applications in Node.js with the DevOps Services Web IDE](/tutorials/jazzweb)
* [Getting started with tracking and planning using IBM DevOps Services](/tutorials/trackplan)			

&copy; Copyright IBM Corporation 2013, 2014.