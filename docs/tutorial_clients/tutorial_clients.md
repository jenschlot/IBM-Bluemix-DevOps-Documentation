Setting up Eclipse, Git, and RTC Desktop Clients to access DevOps Services
==========================================================================

DevOps Services lets you decide how you code.

Want to get started right away? Try our Web IDE, based on Eclipse Orion technology. 
You can edit any text file or script from within your browser. If your project contains
 JavaScript, HTML, CSS, Ruby or PHP code, the Web IDE is likely all you need to make 
 changes.

If you want to work with a desktop client, this tutorial shows you how to configure 
your clients based on what type of DevOps Services project you are working with.

*** 

### Contents

- [Planning your client setup](#planning_your_client_setup)
- [Working with a Git project](#working_with_a_git_project)
  - [Installing Git](#installing_git)
  - [Connecting to your Git project from the command line](#connecting_to_your_git_project_from_the_command_line)
  - [Working with EGit](#working_with_egit)
    - [Installing the EGit Eclipse plug-in](#installing_the_egit_eclipse_plugin)
    - [Connecting to your DevOps Services Project with EGit](#connecting_to_your_devops_services_project_with_egit)
- [Working with a Jazz SCM project](#working_with_a_jazz_scm_project)
  - [Working with Rational Team Concert](#working_with_rational_team_concert)
    - [Installing Eclipse and the Rational Team Concert plug-in](#installing_eclipse_and_the_rational_team_concert_plugin)
    - [Connecting to your DevOps Services projects from Eclipse](#connecting_to_your_devops_services_projects_from_eclipse)
    - [Loading code into Eclipse from Jazz SCM](#loading_code_into_eclipse_from_jazz_scm)

***

<a name='planning_your_client_setup'></a>
Planning your client setup
--------------------------

Take a moment to inspect your DevOps Services project to decide which clients you'll 
need. Where is your code stored? Look at your project page on 
[DevOps Services](https://hub.jazz.net/) to determine what type of 
software configuration management (SCM) your project uses. You will see a link on the
 right side of the page that says either **Jazz Repository** or **Git URL**.

- If your link is a **Git URL**, you want to take a look at [Working with a Git project](#working_with_a_git_project).
- If the link is a **Jazz Repository**, then you have a Jazz SCM project. You should check out [Working with a Jazz SCM project](#working_with_a_jazz_scm_project).


***

<a name='working_with_a_git_project'></a>
Working with a Git project
--------------------------

If your code is in Git, you may choose to interact with your code by installing Git and using the command line or 
by installing the EGit tool in Eclipse. You can also connect to your DevOps Services project using Rational Team 
Concert to work on project plans and track work items. 
See [Working with Rational Team Concert](#working_with_rational_team_concert) for more details. 
If you are not sure if you have a Git project, see [Planning your client setup](#planning_your_client_setup).


<a name='installing_git'></a>
Installing Git
--------------

1. Check to see if Git is already installed. Open a Terminal and enter: `git --version`. If Git is installed, the command returns with your version and you can skip step 2.
2. Download and install the version for your platform from [Git](http://git-scm.com/downloads).


<a name='connecting_to_your_git_project_from_the_command_line'></a>
Connecting to your Git project from the command line
----------------------------------------------------

1. Browse to your project page on [DevOps Services](https://hub.jazz.net/).
2. Copy the **Git URL** from the right side of your project page.
3. Open a Terminal.
4. Change to the directory where you want to put the code from your Git project.
5. Type `git clone`, paste in the Git URL, and press Enter.
6. Once it completes, you have a local repository of the code for your project. Browse [git documentation](http://git-scm.com/doc) to learn more about working with Git.


<a name='working_with_egit'></a>
Working with EGit
-----------------

If you are using Eclipse and you have a Git project, you can use the EGit tool to interact with your code from within Eclipse.


<a name='installing_the_egit_eclipse_plugin'></a>
### Installing the EGit Eclipse plug-in

1. Before installing EGit, check to see if it is already installed. In Eclipse, go to **Window > Show View > Other...** and enter `git` as the filter text.
2. If you see a list of Git-related views, skip ahead to [Connecting to your DevOps Services Project with EGit](#connecting_to_your_devops_services_project_with_egit)
3. In Eclipse, go to **Help > Install New Software...**
4. In the **Install** window, complete the following steps:
  1. In the **Work with** field, enter `http://download.eclipse.org/egit/updates`
  2. Press **Enter** to load the contents of the update site.
  3. Select the **Eclipse Git Team Provider** check box.
  4. Click **Next**.
5. Click on **Next**. Review the license terms and if you agree to the terms, accept them.
6. Click **Finish** to install the plug-in.
7. If you receive a security warning message, click **OK**.
8. If you are required to restart Eclipse, click **Yes**.



<a name='connecting_to_your_devops_services_project_with_egit'></a>
### Connecting to your DevOps Services Project with EGit

1. Browse to your project page on [DevOps Services](https://hub.jazz.net/).
2. Copy the **Git URL** from the right side of your project page.
3. In Eclipse, select **File > Import**.
4. In the Import window, select **Git > Projects from Git** and click **Next**.
5. Select **Clone URI** and click **Next**.
6. Paste the copied Git URL in the **URI** field. Enter your Jazz.net User ID and IBM ID password in the Authentication section. Click **Next**.
7. Select the branches that you want to work on and click **Next**.
8. Update the Local Destination of the cloned repository if needed and click **Next**.
9. Click **Next** and then **Finish**.

***

<a name='working_with_a_jazz_scm_project'></a>
Working with a Jazz SCM project
===============================

If your code is stored in Jazz SCM, you will enjoy interacting with your code using 
Rational Team Concert in Eclipse. If you are not sure if your project is using Jazz 
SCM, see [Planning your client setup](#planning_your_client_setup).


<a name='working_with_rational_team_concert'></a>
Working with Rational Team Concert
----------------------------------

DevOps Services is built on Rational Team Concert, so this is a great place to start
 if you want to edit code locally on your desktop. If you have the Rational Team 
 Concert client, skip ahead to 
 [connect to your DevOps Services project](#connecting_to_your_devops_services_projects_from_eclipse) 
 from within
 the client. If you don't have the Rational Team Concert client yet, you can install 
 Rational Team Concert as a plug-in for Eclipse. In the next steps, we'll get the 
 required version of Eclipse and install the plug-in.


<a name='installing_eclipse_and_the_rational_team_concert_plugin'></a>
Installing Eclipse and the Rational Team Concert plug-in
--------------------------------------------------------

1. Rational Team Concert requires Eclipse 4.2.2. If you don't have Eclipse 4.2.2, download 
and install [Eclipse 4.2.2](http://www.eclipse.org/downloads/packages/release/juno/sr2) from Eclipse.org.
2. In Eclipse, go to **Help > Install New Software...**
3. In the **Install** window, complete the following steps:
  1. In the **Work with** field, enter `https://jazz.net/downloads/rational-team-concert/4.0.6/4.0.6/p2`
  1. Press **Enter** to load the contents of the update site.
  2. Select the **Rational Team Concert Client Feature** check box.
  3. Select the **Group items by category** check box
  4. Click **Next**.
4. Click on **Next**. Review the license terms and if you agree to the terms, accept them.
5. Click **Finish** to install the plug-in.
6. If you receive a security warning message, click **OK**.
7. If you are required to restart Eclipse, click **Yes**.


<a name='connecting_to_your_devops_services_projects_from_eclipse'></a>
Connecting to your DevOps Services projects from Eclipse
--------------------------------------------------------

You have two options to connect to your projects from Rational Team Concert:

- Connect via the **Manage JazzHub Projects** tool
- Or accept a **Team Invitation**

Option 1: Connect via the **Manage JazzHub Projects** tool

1. In Eclipse, go to **Window > Show View > Team Artifacts**.
2. Click on the JazzHub icon to launch the **Manage JazzHub Projects** tool
![Manage JazzHub Projects button within the Team Artifacts View](images/jazzhubfeature.png)
3. In the **Manage JazzHub Projects** window, enter your Jazz User ID and IBM ID password for authentication to DevOps Services.
4. Select the DevOps Services projects you want to connect to and click **Finish**.

Option 2: Accept a **Team Invitation**

1. Browse to your project page on [DevOps Services](https://hub.jazz.net/).
2. Click on the **Jazz Repository** link on the right side of the project page.
3. Copy the text for the project invitation.
4. In Eclipse, go to **File > Accept Team Invitation**.
5. Paste the copied invitation text, and click **Finish**.

Now you have connceted to your DevOps Services project in Eclipse. Click the **Team Artifacts** tab and see the new Repository Connection and Project Area


<a name='loading_code_into_eclipse_from_jazz_scm'></a>
Loading code into Eclipse from Jazz SCM
---------------------------------------

If your project is in a Jazz SCM repository, follow these steps to create a new Repository Workspace and load your components into Eclipse.

1. In Eclipse, go to **Window > Show View > Team Artifacts**.
2. Expand your Project Area to see the **Source Control** folder.
3. Select the **Source Control** folder, right-click, and select **New > Repository Workspace...**
4. Select the stream you want to flow to. Click **Next**.
5. Specify a new name for your repository workspace. Include the word "Eclipse" in the name. Click **Finish**.
6. The tool continues with additional steps. Select **Find and load Eclipse projects** to load all of the projects from the components in the new repository workspace into your local Eclipse.
7. Select the Eclipse projects to be loaded into your local Eclipse. Click **Finish**.
8. If you are working on an existing project with code, click on the **Package or Project Explorer** tab to browse the loaded files, open a file, and edit code.

***

Did you find the information you needed? Tell us what you think. What did we do well? What can we do better? Post your comments to our [forum](https://www.ibmdw.net/answers?community=jazzhub) or send us an [email](mailto:hub%40jazz.net).

More Tutorials
--------------

Interested in trying more BlueMix and DevOps capabilities, here is a list of tutorials:

* [Getting Started with BlueMix and DevOps Services using Node.js](../tutorial_jazzeditor/tutorial_jazzeditor)
* [Getting Started with BlueMix and DevOps Services using Java](../tutorial_jazzeditorjava/tutorial_jazzeditorjava)
* [Developing BlueMix applications in Node.js with the DevOps Services Web IDE](../tutorial_jazzweb/tutorial_jazzweb)
* [Developing BlueMix applications in Java with Eclipse and DevOps Services](../tutorial_jazzrtc/tutorial_jazzrtc)
