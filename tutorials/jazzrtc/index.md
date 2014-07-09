#Developing IBM Bluemix applications in Java with Eclipse and DevOps Services

This tutorial shows you how to develop a Java™ application using IBM® Bluemix™, IBM DevOps Services and the Rational® Team Concert client for Eclipse. 
Make sure that your IBM id is registered with [Bluemix](//bluemix.net). Login to DevOps Services with your IBM id.


##Getting your app

We'll start by forking the sample project, [WordCounter](https://hub.jazz.net/project/pskhadke/WordCounter/overview).
This project uses Jazz™ Source Control Management (Jazz SCM for short). It contains a manifest for deploying to Bluemix
and can be loaded directly in the Rational Team Concert client for Eclipse. DevOps Services also supports Git projects. To find out more
about support for Git, check out the
[Getting Started with Bluemix and DevOps Services using Java](/tutorials/jazzeditorjava) tutorial.

Go to the [WordCounter](https://hub.jazz.net/project/pskhadke/WordCounter/overview) project. Click **EDIT CODE** to
open the Web IDE.

![Click Edit Code](/tutorials/jazzrtc/images/click_edit_code.jpg "Click Edit Code")

You can build your own application by clicking the **FORK** button and entering a unique name when prompted.

![Fork](/tutorials/jazzrtc/images/fork.jpg "Fork")

You get a new project, a new project name and a copy of the code from the sample project.

![Create Project Dialog](/tutorials/jazzrtc/images/create_project.jpg "Create Project Dialog")

If you're getting an error, then you probably didn't register with Bluemix yet. Otherwise... you're all set to build and deploy!
Great!

---
##Deploying your app

Go to the deployment page by clicking the **BUILD & DEPLOY** button. Turn on deployment in the advanced mode by clicking the
**ADVANCED** button. You need builds to compile your Java code and this is supported by the advanced mode. Also note that
charges may apply for building and deployment. For more information, check out the [Bluemix pricing page](https://bluemix.net/#/pricing).

On the Configure Builder page, specify
	
* The password associated with your IBM id as the "Your IBM DevOps Services password"
* The folder containing your code, i.e. "WordCounter" as the "Build script path". Upon loading the project in the Rational Team Concert client, this folder
automatically maps to an Eclipse project.
* A name for the "Build archive directory". This is where the build output files go and are archived as part of the build result.

Check the "Enable unit tests" checkbox to run test cases during a build. Finally, click **Save**.

![Configure Builder](/tutorials/jazzrtc/images/configure_builder.jpg "Configure Builder")

Click on **Deployer** to open the Configure Deployer page. This page will use the settings provided by the `manifest.yml`
file, included as part of the project. All of the values, except for the hostname, can be used directly as provided. The
hostname is used to define your application's url and needs to be unqiue for each application deployed. Let's override the
host with the `-n` option in the `cf push` command as below. Click **Save** and you're all set!

![Configure Deployer](/tutorials/jazzrtc/images/configure_deployer.jpg "Configure Deployer")

Click the **REQUEST BUILD** button to see your project get built and deployed for the first time. This takes a couple of
minutes. And then... the circle goes green! The app's live!

![Successful Build](/tutorials/jazzrtc/images/build1_success.jpg "Successful Build")

Click the application link... It works! Awesome!

![Application](/tutorials/jazzrtc/images/app.jpg "Application")

---
##Accessing your app from the Rational Team Concert client for Eclipse

Now that you have a running application, let's connect to it from the Rational Team Concert client for Eclipse. Click on the project link to
go to the Project Overview page. 

![Project Link](/tutorials/jazzrtc/images/project_link.jpg "Project Link")

You can get the Jazz Repository information here. 

![Team Invitation](/tutorials/jazzrtc/images/team_invite.jpg "Team Invitation")

The [Setting up Eclipse, Git, and Rational Team Concert Desktop Clients to access DevOps Services](/tutorials/clients#working_with_a_jazz_scm_project) tutorial shows you how to
set up the Rational Team Concert client for Eclipse, connect to your project and load the code.						

---
##Delivering your first change

You're in the Rational Team Concert client for Eclipse. So, let's change something and see it go live. For example, change the app name on
line 10 of index.html.

![Edit Code](/tutorials/jazzrtc/images/edit_code.jpg "Edit Code")

Next, you'll want to deliver the change to the Jazz SCM repository. To do this, check-in the change in a new Change set
using the Pending Changes view.

![Check In Change](/tutorials/jazzrtc/images/checkin.jpg "Check In Change")

You can edit the comment for the Change set...

![Edit Change Set Comment](/tutorials/jazzrtc/images/edit_comment.jpg "Edit Change Set Comment")

And then deliver it. 

![Deliver Change Set](/tutorials/jazzrtc/images/deliver.jpg "Deliver Change Set")

Visit the deployment page in the browser. A build should get triggered soon. The page gets automatically updated. Wait for
it to go green.

![Successful Build](/tutorials/jazzrtc/images/build2_success.jpg "Successful Build")

You click the app link and voila! The app name's updated! Cool!

![Application](/tutorials/jazzrtc/images/app2.jpg "Application") 

---
##Adding a test failure

Let's add a failure to the JUnit tests so that you can see what happens when the build fails. Set "this.wcFinder" to null
on line 26 of WordCounterFinderTest.java.

![Edit Test Case](/tutorials/jazzrtc/images/edit_testcase.jpg "Edit Test Case")

In addition, change the app name on line 10 of index.html. Deliver the changes.

![Edit App Name Again](/tutorials/jazzrtc/images/edit_code_2.jpg "Edit App Name Again")

The deployment page shows a failed build, as expected. Note how the build was not deployed automatically. Only successful
builds are automatically deployed. Also note that when you click the app link, the app name is not updated. 

![Failed Build](/tutorials/jazzrtc/images/build3_failure.jpg "Failed Build")

In the history section of the deployment page, click the build to access the build logs and test results.

![Click Build](/tutorials/jazzrtc/images/build_log.jpg "Click Build")

---
##Fixing the bug

Let's revert the code in WordCounterFinderTest.java to its previous state and deliver the change.

![Fix Test Case](/tutorials/jazzrtc/images/fix_testcase.jpg "Fix Test Case")

And our build is back to green! 

![Successful Build](/tutorials/jazzrtc/images/build4_success.jpg "Successful Build")

So is our app... Great!

![Application](/tutorials/jazzrtc/images/app3.jpg "Application")
						
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
