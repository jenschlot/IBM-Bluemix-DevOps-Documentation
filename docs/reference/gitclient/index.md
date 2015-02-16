#Setting up local clients to work with Git source control 

Last modified: 3 February 2015

If you use a Git repository for your IBM&reg; Bluemix&trade; DevOps Services project, you can manage your repository and work locally or by using the integrated Web IDE in Bluemix DevOps Services. If you install Git, you can use the [command line to manage your repository](#command_line_git). If you work in Eclipse, you can install the EGit plug-in for version control.  For more information, [see using EGit in Eclipse](#eclipse_using_egit).

If you use the Track & Plan feature to manage your project plans and work items, and if you install the the Rational Team Concert plug-in, you can access your project locally from Eclipse.

---
##Contents

 * [Access your repository by using command-line Git](#command_line_git)
  * [Clone your Git project from the command line](#clone_your_git_project_from_the_command_line)
 * [Access your repository by using Eclipse and the EGit plug-in](#eclipse_using_egit)
  * [Install the EGit Eclipse plug-in](#install_the_egit_eclipse_plugin)
  * [Connect to your Bluemix DevOps Services project by using EGit](#connect_to_your_devops_services_project_with_egit)
 * [Access your work items by using Eclipse and the Rational Team Concert plug-in](#eclipse_using_rtc)
  * [Install the Rational Team Concert plug-in](#install_eclipse_and_the_rational_team_concert_plugin)
  * [Connect to your Bluemix DevOps Services project from Eclipse](#connect_to_your_devops_service_projects_from_eclipse)
 * [Bluemix Live Sync](#livesync)


---
<a name='command_line_git'></a>
## Access your repository by using command-line Git


If you know how to use the command line with Git, you can use this method to manage your repository. 

---
<a name='clone_your_git_project_from_the_command_line'></a>
### Clone your Git project from the command line


Create a local copy of the project files by cloning the Git repository so that you can access the contents of your repository outside the Web IDE. 

**Before you begin**

Check whether Git is installed. On a command line, enter `git version`. If Git is installed, the version number is shown and you can begin. If Git is not installed, [go to the Git website](http://git-scm.com/downloads). Download and install the version for your operating system. You can accept the default installation values.

**Clone your project**

1. Sign in to [Bluemix DevOps Services](https://hub.jazz.net/)

2. Navigate to your project page.

2. From the right side of the page, copy the **Git URL** .

3. Open a command line.

4. Change the directory to where you want the local copy of the Git repository to be.

5. Type `git clone`, paste the Git URL, and press Enter. When prompted, enter your alias and IBM id password.

After the download is complete, you have a local repository of the files for your project. For more information about using Git,  [see the Git documentation](http://git-scm.com/doc).

----
<a name='eclipse_using_egit'></a>
## Access your repository by using Eclipse and the EGit plug-in


If you use Eclipse and have a project that uses Git for source control, you can use the EGit plug-in to manage your repository from Eclipse. 

---
<a name='install_the_egit_eclipse_plugin'></a>
### Install the EGit Eclipse plug-in

**Before you begin**: 

* If you use Eclipse 4.2.2 or later, complete these steps. If you use an earlier version of Eclipse, [see the EGit/FAQs for instructions](http://wiki.eclipse.org/EGit/FAQ#Where_can_I_find_older_releases_of_EGit.3F).  
* If you do not have Eclipse installed and want tools for Java development, [download and install Eclipse IDE for Java EE Developers](http://www.eclipse.org/downloads/packages/eclipse-ide-java-ee-developers/keplersr2).  
* If you do not have Java 1.7 installed, [download and install the Java SE Development Kit](http://www.oracle.com/technetwork/java/javase/downloads/jdk7-downloads-1880260.html).
* Check whether the EGit plug-in is already installed. In Eclipse, click **Window > Show View > Other** and type `git` as the filter text. If you see a list of Git views, skip ahead to [Connect to your Bluemix DevOps Services Project with EGit](#connect_to_your_devops_services_project_with_egit)

**Install the plug-in**
1. In Eclipse, click **Help > Install New Software**

2. In the Install window, complete these  steps:
  1. In the **Work with** field, enter `http://download.eclipse.org/egit/updates`.
  2. In the Eclipse Git Team Provider section, select only the **Eclipse Git Team Provider** check box.
  3. Click **Next** and click **Next** again.
  4. Review the license terms. If you agree to the terms, accept them.
  5. Click **Finish** to install the plug-in.

4. If you see a security warning message, click **OK**.

5. If you are prompted to restart Eclipse, click **Yes**.

---
<a name='connect_to_your_devops_services_project_with_egit'></a>
### Connect to your Bluemix DevOps Services project by using EGit

1. In Eclipse, click **Window > Preferences > General > Workspaces**. In the Text file encoding pane, click **Other** and from the list, select **UTF-8**.

1. In [Bluemix DevOps Services](https://hub.jazz.net/), browse to your project page. 

2. Copy the **Git URL** from the right side of the page.

3. In Eclipse, click **File > Import**.

4. In the Import window, click **Git > Projects from Git** and then click **Next**.

5. Select **Clone URI** and click **Next**.

6. In the **URI** field, paste the Git URL.

6. In the **Authentication** section, enter your alias and IBM id password, and click **Next**.

7. Select the branches to work on and click **Next**.

8. If necessary, update the local destination of the cloned repository and click **Next**.

9. Click **Use the New Project wizard** and click **Finish**.

10. Click **General > Project** and click **Next**.

11. Enter a project name and click **Finish**.

---
<a name='eclipse_using_rtc'></a>
## Access your work items by using Eclipse and the Rational Team Concert plug-in

If you use Eclipse, you can use the Rational Team Concert plug-in to access your work items.

---
<a name='install_eclipse_and_the_rational_team_concert_plugin'></a>
### Install the Rational Team Concert plug-in


**Before you begin**

* Rational Team Concert 5.0.2 and later require Eclipse 4.3.2, and Eclipse requires Java 1.7.  
* If you do not have Eclipse installed and want tools for Java development, [download and install the  Java EE IDE for Eclipse](http://www.eclipse.org/downloads/packages/eclipse-ide-java-ee-developers/keplersr2).  
* If you do not have Java 1.7 installed, [download and install the Java SE Development Kit](http://www.oracle.com/technetwork/java/javase/downloads/jdk7-downloads-1880260.html).

**Install the plug-in**

1. In Eclipse, click **Help > Install New Software**

3. In the Install window, complete these steps:
  1. In the **Work with** field, enter `https://jazz.net/downloads/rational-team-concert/5.0.2/5.0.2/p2`
  2. Press Enter to load the contents of the update site.
  3. Select the **Rational Team Concert Client Feature** check box.
  4. Select the **Group items by category** check box
  5. Click **Next** and click **Next** again.
  6.  Review the license terms. If you agree to the terms, accept them.
  7.  Click **Finish** to install the plug-in.

6. If you see a security warning message, click **OK**.

7. If you are prompted to restart Eclipse, click **Yes**.

---
<a name='connect_to_your_devops_service_projects_from_eclipse'></a>
### Connect to your Bluemix DevOps Services project from Eclipse


1. In Eclipse, click **Window > Show View > Other > Team Artifacts**.

2. Click the **Manage JazzHub Projects** icon.

 ![Manage JazzHub Projects button within the Team Artifacts View](./images/jazzhubfeature.png)

3. In the **Manage JazzHub Projects** window, enter your alias and IBM id password to sign in to Bluemix DevOps Services, and click **Next**

4. Select the Bluemix DevOps Services projects to connect to and click **Finish**.

<a name='livesynct'></a>
## Bluemix Live Sync

With Node.js apps, you can make changes to Markdown, HTML, or CSS files and have those changes reflected in the deployed app without redeploying by using the Bluemix Live Sync feature. You can still edit code with Live Sync enabled, but you must restart the instance to have those changes applied to the deployed app. For more information about Live Sync, see [the Bluemix Live Sync documentation][1].

[1]: https://www.ng.bluemix.net/docs/#manageapps/bluemixlive.html
[18]: https://developer.ibm.com/answers/questions/?community=devops-services (Bluemix DevOps Services forum)
[19]: mailto:hub%40jazz.net
[20]: /docs
