#Developing IBM Bluemix applications in Java with Eclipse and DevOps Services

Last modified: 13 January 2015

Follow the steps in this tutorial to develop a Java&trade; application by using IBM&reg; Bluemix&trade;, IBM DevOps Services, and the Rational&reg; Team Concert client for Eclipse. 

##Before you begin

1. Make sure that your IBM id is registered with Bluemix. 
2. Log in to DevOps Services by using your IBM id.

##Get your app

To get your app, you fork a sample project named WordCounter. WordCounter uses Jazz&trade; source control management (SCM) and contains a manifest for deploying to Bluemix. You can load the project directly in the Rational Team Concert client for Eclipse. To explore the project before you fork it,  [see the WordCounter project page](https://hub.jazz.net/project/pskhadke/WordCounter/overview).

DevOps Services also supports Git projects. For more information, [see Getting Started with Bluemix and DevOps Services using Java](/tutorials/jazzeditorjava).

On the WordCounter project overview page, click **FORK PROJECT**. 
![Click Fork Project](/tutorials/jazzrtc/images/click_fork_project.png "Click Fork Project")

When you are prompted, enter a new, unique name for your project. Then, click **CREATE**.
![Create Project Dialog](/tutorials/jazzrtc/images/create_project.png "Create Project Dialog")

You get a new project, a new project name, and a copy of the code from the sample project.

**Tip:** If you see an error message, [make sure you have a Bluemix account](//bluemix.net).

You're ready to build and deploy.

---
##Deploy your app

1. Go to the deployment page by clicking **BUILD & DEPLOY**. 
  * If it's your first time using this feature, you will see a welcome page. Click **GET STARTED** to proceed. 
  * When you build and deploy, your Bluemix account might be charged. For more information, [see the Bluemix pricing page](https://bluemix.net/#/pricing).
To track charges, after you deploy your first build, add the Delivery Pipeline service to your space.

3. On the Pipeline page, click **add a builder**. The Add Builder page opens.
![Click Add A Builder](/tutorials/jazzrtc/images/add_builder.png "Click add a builder")

4. On the Add Builder page, enter this information:
    * In the **Builder** menu, select **Ant**.
	* In the **Your IBM DevOps Services password** field, type the password that is associated with your IBM id.
	* In the **Build script path**, type the folder that contains your code; for example,  `WordCounter`. When the project is loaded in the Rational Team Concert client, this folder automatically maps to an Eclipse project.
	* In the **Build archive directory** field, type the directory where the build output files are archived as part of the build result.

5. Select the **Enable unit tests** check box so that you can run the test cases during a build. Then, click **Save**.
![Add Builder](/tutorials/jazzrtc/images/configure_builder.png "Add Builder")

6. Click **add a stage**. The Add Deployer Stage page opens.
![Click Add A New Stage](/tutorials/jazzrtc/images/add_deployer.png "Click add a new stage")

7. This page will use the settings provided by the `manifest.yml` file, included as part of the project. All of the values,
except for the hostname, can be used directly as provided. The hostname is used to define your application's url and needs
to be unique for each application deployed. Let's override the host with the `-n` option in the `cf push` command as below.
Click **Save** and you're all set!
![Add Deployer](/tutorials/jazzrtc/images/configure_deployer.png "Add Deployer")

8. Click **Save**. You're ready to deploy.

9. Click **REQUEST BUILD** to see your project be built and deployed for the first time. The build process takes a couple of minutes. When you see a green circle, the app is live.
![Successful Build](/tutorials/jazzrtc/images/build1_success.png "Successful Build")

10. Click the application link to verify that the app is running.
![Application](/tutorials/jazzrtc/images/app.png "Application")

---
##Add the Delivery Pipeline service

Add the Delivery Pipeline service to the app.

1. Click the running instance of you app to view it from Bluemix. If prompted, enter your IBM id and password.
![Bluemix Instance](/tutorials/jazzrtc/images/running_instance.png "Bluemix Instance")

2. From the new app's overview page, click **ADD A SERVICE**.

3. In the DevOps category, select **Delivery Pipeline**.

4. Leave the settings for Space and App as is. Click **CREATE**.

The Delivery Pipeline service is added to your Bluemix space. 

---
##Access your app from the Rational Team Concert client for Eclipse

From the Rational Team Concert client for Eclipse, connect to your running app. 

1. In the DevOps Services web IDE, click the project link to go to the project overview page. 
![Project Link](/tutorials/jazzrtc/images/project_link.png "Project Link")

2. From this page, get the Jazz repository information. 
![Team Invitation](/tutorials/jazzrtc/images/team_invite.png "Team Invitation")

3. In the Rational Team Concert client for Eclipse, connect to your project and load the code. For detailed instructions, [see Setting up Eclipse, Git, and Rational Team Concert Desktop Clients to access DevOps Services](/tutorials/clients#working_with_a_jazz_scm_project).				

---
##Deliver your first change

When you're in the Rational Team Concert client for Eclipse, change your code then verify that the change is shown in the running app.

1. On line 10 of `index.html`, change the app name.
![Edit Code](/tutorials/jazzrtc/images/edit_code.png "Edit Code")

2. Deliver the change to the Jazz SCM repository:

	a. In the Pending Changes view, check in the change in a new change set.
	![Check In Change](/tutorials/jazzrtc/images/checkin.png "Check In Change")

	b. If necessary, you can edit the comment for the change set.
	![Edit Change Set Comment](/tutorials/jazzrtc/images/edit_comment.png "Edit Change Set Comment")
	
	c. Deliver the change. 
	![Deliver Change Set](/tutorials/jazzrtc/images/deliver.png "Deliver Change Set")

3. In a browser, go to the deployment page. A build is triggered soon and then the page is automatically updated. Wait until the app status is green. 
![Successful Build](/tutorials/jazzrtc/images/build2_success.png "Successful Build")

4. Click the app link and verify that the app name is updated.
![Application](/tutorials/jazzrtc/images/app2.png "Application") 

---
##Add a test failure

To see what happens when the build fails, add a failure to the JUnit tests. 

1. In the `WordCounterFinderTest.java` file, on line 26, set `this.wcFinder` to null.
![Edit Test Case](/tutorials/jazzrtc/images/edit_testcase.png "Edit Test Case")

2. In the `index.html` file, on line 10, change the app name. 
![Edit App Name Again](/tutorials/jazzrtc/images/edit_code_2.png "Edit App Name Again")

3. Deliver the changes. The deployment page shows a failed build, as expected. The build was not automatically deployed. Only successful builds are automatically deployed. When you click the app link, the app name is not updated. 
![Failed Build](/tutorials/jazzrtc/images/build3_failure.png "Failed Build")

4. Access the build logs and test results by clicking the build.
![Click Build](/tutorials/jazzrtc/images/build_log.png "Click Build")

---
##Fix the bug

1. Revert the code in `WordCounterFinderTest.java` to its previous state and deliver the change.
![Fix Test Case](/tutorials/jazzrtc/images/fix_testcase.png "Fix Test Case")

2. Verify that the build is now green.
![Successful Build](/tutorials/jazzrtc/images/build4_success.png "Successful Build")

3. Verify that the app is running, too.
![Application](/tutorials/jazzrtc/images/app3.png "Application")
						
You finished this tutorial. You are ready to develop Java applications on your own. 
