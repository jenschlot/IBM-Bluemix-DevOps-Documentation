#Developing with Git in the Bluemix DevOps Services Web IDE

Last modified: 13 February 2015

If you want to learn more about managing your Git repository, an open source code management system, with the IBM® Bluemix&trade; DevOps Services Web IDE, complete this tutorial. The tutorial doesn't cover all of the possible Git commands in the DevOps Services Web IDE, but you can practice creating a change on a separate branch, testing the change, and adding the change to the master branch. If you need help with specific commands, [see the Git reference](/../docs/reference/git).  If you want to try to work locally by using the command line, [see Work locally with IBM DevOps Services projects and Git source control](../../docs/reference/gitclient).

---
## Contents

 * [Before you begin](#before_you_begin)
 * [Fork a project](#fork_a_project)
 * [Create a branch](#create_a_branch)
 * [Deploy a new Bluemix app](#deploy_a_new_bluemix_app)
 * [Change and test the code](#change_and_test_the_code)
 * [Deliver a change to the repository](#deliver_a_change_to_the_repository)
 * [Rebase to add changes to the master branch](#add_changes_to_the_master_branch)
 * [Summary](#summary)

---
<a name='before_you_begin'></a>
##Before you begin
  * [Register for Bluemix DevOps Services](https://hub.jazz.net)
  * [Register for a free trial of IBM&reg; Bluemix&trade;](https://ace.ng.bluemix.net/)

---
<a name='fork_a_project'></a>
##Fork a project
You complete this tutorial by copying, or forking, a project. Then, you modify the new project. In this case, you fork the YummyRation project, which contains the Node.js code for a catering website

1. [Open the YummyRation project](https://hub.jazz.net/project/jlmarech/YummyRation/overview).

1. Click **FORK PROJECT**.

1. In the window that opens, name the project `YummyRation` and review the contents of the window.  Make sure that the **Make this a Bluemix Project** check box is selected.

    ![Options while forking project][2]
1. Click **CREATE**. The new project's Overview page is shown after a moment.

---
<a name='create_a_branch'></a>
## Create a branch
When you work with many people or want to test different ideas, a common practice is to work in different branches.

1. Click **EDIT CODE**.

1. Click the **Git Repository** icon <img src="images/gitrepository.png"  align="bottom" style="display: inline; margin: 0px; border-style: none; margin-bottom: -10px;">.

1. Click the **REFERENCE field**.

1. Click **NEW BRANCH**. For the name, enter `testbranch`. Click **Submit**.
![New branch dialog][10]

1. Under **local**, next to the `testbranch` branch, click the **Checkout** icon.

1. Confirm that the value in the **REFERENCE** field is "testbranch => origin/testbranch [New Branch]".
![testbranch reference][11]

1. Beneath the **REFERENCE** field, click the **PUSH** button to populate `origin/testbranch` with the current contents of your local workspace.

---
<a name='deploy_a_new_bluemix_app'></a>
##Deploy a new Bluemix app

To see the changes that you make to your code, create a Bluemix app and deploy the changes to the app. To create an app from within the Bluemix DevOps Services Web IDE, you edit the manifest.yml file to direct deployments to a different Bluemix app.

1. To view your code, click the **Show Current Folder** icon <img src="images/showcurrentfolder.png"  align="bottom" style="display: inline; margin: 0px; border-style: none; margin-bottom: -10px;">.

1. In the project side panel, click the `manifest.yml` file.

1. In both the **host** and **name** fields, enter the same unique host name.  
**Note**: The host name must be unique through all of Bluemix.
![Change the host and name entries in the manifest.yml file][1]

1. Click **File**, and then click **Save**.

1. Click the status area in the Run Bar. Click **+**, and then review the contents of the Edit Launch Configuration window.
![The dropdown menu in the Run Bar][33]
 * Make sure that the information about the organization and space are as you expected.
 * Make sure that the displayed host and application name match the contents of the `manifest.yml` file

6. Click **SAVE**.

7. In the Run Bar, click the Play icon. After the deployment succeeds, click the **Open the application URL** button to see the YummyRation project page.
![Play button in the Run Bar][34]
![Open URL button in the Run Bar][31]

Leave this page open; you'll need it in a moment.

---
<a name='change_and_test_the_code'></a>
## Change and test the code

1. Return to your YummyRation project page on Bluemix DevOps Services.

1. Near the run bar, click the **Live Edit** button. Let the app deployment finish.
  * Bluemix Live Sync allows you to quickly preview changes to Node.js applications in Live Edit mode. When you update your static files with Live Edit turned on, you can refresh your web application's browser window to see those changes reflected seconds after you make them. For more information on Bluemix Live Sync, [see the Bluemix Live Sync documentation][14].

2. In the file explorer, next to `views`, click the **>** to expand the contents of the folder. Then, click **home.jade**.

3. Locate the phrase "We deliver delicious fresh cooked food for your next dinner, cocktail, or party." Change it to `We deliver delicious, freshly cooked food for your next dinner or gathering.`
![Changed Fisherman's Platter code block][5]

4. Switch to the browser window where you have the YummyRation page open. Refresh it to see your change.
![Runbar at status green with Upen URL button highlighted][31]

![New subheader][7]

That looks better! Click the **Live Edit** button again to stop using Bluemix Live Sync.

---
<a name='deliver_a_change_to_the_repository'></a>
##Deliver a change to the repository
You save your changes to your Bluemix DevOps Services project.  Because this project uses a Git repository, you first make a commit to record all of your changes to your local branch. Then, you push the commit to the remote branch.

1. Return to your YummyRation project page on Bluemix DevOps Services.

1. Click **Git Repository**.

1. In the Working Directory Changes panel, select the check boxes next to `manifest.yml` and `views/home.jade`.

1. In the **Enter the commit message** field, enter a descriptive commit message, like `Add deployment information to manifest and updated home page`.
![Sample commit message][6]

1. Click **COMMIT** to commit your changes to your local repository.

1. View your commit in the Active Branch (testbranch) panel under OUTGOING.
![Outgoing commit][9]

1. Click **PUSH** to copy your commit to the remote repository.

---
<a name='add_changes_to_the_master_branch'></a>
##Rebase to add changes to the master branch
After you confirm a change in a test branch, you can introduce its code to the master branch.  To do so, you copy the contents of the testbranch branch to the master branch by using a rebase command. When you use the rebase command, you place the commits from the testbranch branch after the commits on the master branch.  For more information about the rebase command, [review the official Git documentation](http://git-scm.com/book/ch3-6.html).

To rebase, you must compare the contents of one branch to another by modifying the references.

1. Click the **REFERENCE field**.

1. Next to local, click __>__ to expand the list of local branches.

1. Next to the local master branch, click the **Checkout** icon.
![Checkout master branch][13]

1. Click the **REFERENCE field** again.

1. Next to local, click __>__ to expand the list of local branches again.

1. Compare the contents of the local master and testbranch branches by clicking the **testbranch** row.
![Comparing testbranch to master][12]

1. Click the **Rebase** icon <img src="images/rebase.png"  align="bottom" style="display: inline; margin: 0px; border-style: none; margin-bottom: -10px;">.

1. Click the **REFERENCE field**.

1. Next to origin, click **>** to expand the list of remote branches.

1. Click **master** to compare the contents of your local copy of the master branch and the remote copy of the master branch. 

1. Confirm that the commit that you originally made on the testbranch branch is visible under OUTGOING.

1. Click **PUSH**. Your commit moves to the HISTORY panel.

---
<a name='summary'></a>
##Summary

You forked a project and manually deployed to a Bluemix app. You made a branch, completed changes to your code in the Web IDE, and committed your changes. You also combined contents of branches.


[1]: images/manifest.png
[2]: images/forkproject.png
[3]: images/manualdeployment.png
[4]: images/manualdeploymentpanel.png
[5]: images/fishermansfeast.png
[6]: images/commitmessage.png
[7]: images/newffprice.png
[8]: images/oldffprice.png
[9]: images/outgoingcommit.png
[10]: images/newbranch.png
[11]: images/testbranchreference.png
[12]: images/mastertotestbranch.png
[13]: images/arrowbylocal.png
[14]: https://www.ng.bluemix.net/docs/#manageapps/bluemixlive.html
[18]: https://developer.ibm.com/answers/questions/?community=devops-services (Bluemix DevOps Services forum)
[19]: mailto:hub%40jazz.net
[20]: /docs
[28]: https://developer.ibm.com/answers/smartspace/devops-services/
[30]: /docs
[31]: images/runbar_url.png
[32]: images/runbar_play.png
[33]: images/launch-configs-callout.png
[34]: images/runbar_click_play.png