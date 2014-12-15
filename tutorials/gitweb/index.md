#Developing with Git in the IBM DevOps Services web IDE

Last modified: 27 October 2014

If you want to learn more about managing your Git repository, an open source code management system, with the IBM&reg; DevOps Services web IDE, complete this tutorial. The tutorial doesn't cover all of the possible Git commands in the DevOps Services web IDE, but you can practice creating a change on a separate branch, testing the change, and adding the change to the master branch. If you need help with specific commands, see the [Git reference](/../docs/reference/git).  If you want to try to work locally by using the command line, see [Work locally with IBM DevOps Services projects and Git source control](../../docs/reference/gitclient).

---
## Contents

 * [Before you begin](#before_you_begin)
 * [Fork a project](#fork_a_project)
 * [Create a branch](#create_a_branch)
 * [Deploy a new Bluemix app](#deploy_a_new_bluemix_app)
 * [Change and test the code](#change_and_test_the_code)c
 * [Deliver a change to the repository](#deliver_a_change_to_the_repository)
 * [Rebase to add changes to the master branch](#add_changes_to_the_master_branch)
 * [Summary](#summary)

---
<a name='before_you_begin'></a>
##Before you begin
[Register for DevOps Services](https://hub.jazz.net) and [register for a free trial of IBM&reg; Bluemix&trade;](https://ace.ng.bluemix.net/).

---
<a name='fork_a_project'></a>
##Fork a project
You complete this tutorial by copying a project, or forking, then modifying the new project. In this case, you fork the YummyRation project, which contains the Node.js code for a catering website

1. Open the [YummyRation project](https://hub.jazz.net/project/jlmarech/YummyRation/overview).

1. Click **EDIT CODE**.

1. Click **FORK**.

1. In the window that opens, name the project `YummyRation` and review the contents of the window.  Make sure that the **Deploy to Bluemix** check box is selected.
![Options while forking project][2]

1. Click **Save**. The new project's code is shown after a moment.

---
<a name='create_a_branch'></a>
## Create a branch
When you work with many people or want to test different ideas, a common practice is to work in different branches.

1. Click the **Git Repository** icon (<img src="images/gitrepository.png"  align="bottom" style="display: inline; margin: 0px; border-style: none; margin-bottom: -10px;">).

1. Click the **REFERENCE field**.

1. Click **NEW BRANCH**. For the name, enter `testbranch`. Click **Submit**.
![New branch dialog][10]

1. In the testbranch pane, click the **Checkout** icon.

1. Confirm that the value in the **REFERENCE** field is "testbranch => origin/testbranch [New Branch]".
![testbranch reference][11]

---
<a name='deploy_a_new_bluemix_app'></a>
##Deploy a new Bluemix app

To see the changes that you make to your code, create a Bluemix app and deploy the changes to the app. To create an app from within the DevOps Services web IDE, you edit the manifest.yml file to direct deployments to a different Bluemix app.

1. To view your code, click the **Show Current Folder** icon (<img src="images/showcurrentfolder.png"  align="bottom" style="display: inline; margin: 0px; border-style: none; margin-bottom: -10px;">).

1. Click **manifest.yml**.

1. In both the **host** and **name** fields, enter the same unique host name.  
**Note**: This name must be unique through all of Bluemix, so include your Jazz ID in the host name.
![Change the host and name entries in the manifest.yml file][1]

1. Click **File**, and then click **Save**.

1. Click **DEPLOY**, and then review the contents of the Configure Application Deployment window.
 * Make sure that the information about the organization and space are as you expected.
 * Make sure that the displayed host and application name match the contents of the manifest.yml file
 * Make sure the check box that is next to "Save to manifest file: /manifest.yml" is selected.

1. Click **DEPLOY**.

1. After the deployment succeeds, a message opens that describes the deployment.  In the message, click **root folder page**.  
    ![Manual deployment information][3]
    
1. In the Manual Deployment Information pane, click the link to open the site in a new browser tab.
![Deployment location information][4]

1. Click the **Seafood** image to check the information about the Fisherman's Platter.
![Original Fisherman's Feast price][8]

---
<a name='change_and_test_the_code'></a>
## Change and test the code
Now that you forked the code and created a Bluemix app, you can make and view changes to the code.

1. Return to your YummyRation project page on DevOps Services.

1. In the file explorer, next to routes, click the __>__ to expand the contents of the folder. Then, click **dishes.js**.

1. Locate the "Fisherman's Platter" code block and change the price to `$17.95`.
![Changed Fisherman's Platter code block][5]

1. Click **File**, and then click **Save**

1. Click **DEPLOY**.

1. Return to your deployed website and click **Refresh** to view your change.  
**Note**: If you closed your website, click **root folder page** in the deployment message, and then click the link in the Manual Deployment Information panel.

![New Fisherman's Feast price][7]

---
<a name='deliver_a_change_to_the_repository'></a>
##Deliver a change to the repository
You save your changes to your DevOps Services project.  Because this project uses a Git repository, you first make a commit to record all of your changes to your local branch. Then, you push the commit to the remote branch.

1. Return to your YummyRation project page on DevOps Services.

1. Click **Git Repository**.

1. In the Working Directory Changes pane, select the **Select All** check box.

1. In the **Enter the commit message** field, enter a descriptive commit message, such as `Add deployment information to manifest and updated Fisherman's Feast price`.
![Sample commit message][6]

1. Click **COMMIT** to commit your changes to your local repository.

1. View your commit in the OUTGOING pane of the Active Branch (testbranch) panel.
![Outgoing commit][9]

1. Click **PUSH** to copy your commit to the remote repository.

---
<a name='add_changes_to_the_master_branch'></a>
##Rebase to add changes to the master branch
After you confirm a change in a test branch, you can introduce its code to the master branch.  To do so, you copy the contents of the testbranch branch to the master branch by using a rebase command. When you use the rebase command, you place the commits from the testbranch branch after the commits on the master branch.  For more information about the rebase command, [review the official Git documentation](http://git-scm.com/book/ch3-6.html).

To rebase, you must compare the contents of one branch to another by modifying the references.

1. Click the **REFERENCE field**.

1. Next to local, click __>__ to expand the local pane.
![Expand local pane][13]

1. In the master pane, click the **Checkout** icon.

1. Click the **REFERENCE field**.

1. Next to local, click __>__ to expand the local pane again.

1. Compare the contents of the master and testbranch branches by clicking **testbranch**.
![Comparing testbranch to master][12]

1. Click the **Rebase** icon (<img src="images/rebase.png"  align="bottom" style="display: inline; margin: 0px; border-style: none; margin-bottom: -10px;">).

1. Click the **REFERENCE field**.

1. Next to origin, click **>** to expand the origin pane.

1. Click **master** to compare the contents of your local copy of the master branch and the remote copy of the master branch. 

1. Confirm that the commit that you made on the testbranch branch is visible in the OUTGOING pane.

1. Click **PUSH**. Your commit moves to the HISTORY pane.

---
<a name='summary'></a>
##Summary

You now know how to fork a project and manually deploy to a Bluemix app.  You can make a branch, complete changes to your code in the web IDE, and commit your changes. You can also combine contents of branches.


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

[18]: https://developer.ibm.com/answers/questions/?community=devops-services (DevOps Services forum)
[19]: mailto:hub%40jazz.net
[20]: /docs
