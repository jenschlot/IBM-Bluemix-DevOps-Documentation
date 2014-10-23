#Working locally with IBM DevOps Services projects and Git source control

If you use a Git repository for your IBM&reg; DevOps Services project, you can manage your repository and work locally or by using the integrated Web IDE in DevOps Services. If you install Git, you can use the [command line to manage your repository](#command_line_git), or, if you work in [Eclipse](#eclipse_using_egit), you can install the EGit plug-in for version control. 

If you use the Track & Plan feature to manage your project plans and work items, you can access your project locally from Eclipse if you install the the Rational Team Concert plug-in.

---
##Contents

 * [Access your repository by using command-line Git](#command_line_git)
  * [Clone your Git project from the command line](#clone_your_git_project_from_the_command_line)
 * [Access your repository by using Eclipse and the EGit plug-in](#eclipse_using_egit)
  * [Install the EGit Eclipse plug-in](#install_the_egit_eclipse_plugin)
  * [Connect to your DevOps Services project by using EGit](#connect_to_your_devops_services_project_with_egit)
 * [Access your work items by using Eclipse and the Rational Team Concert plug-in](#eclipse_using_rtc)
  * [Install the Rational Team Concert plug-in](#install_eclipse_and_the_rational_team_concert_plugin)
  * [Connect to your DevOps Services project from Eclipse](#connect_to_your_devops_service_projects_from_eclipse)



<a name='command_line_git'></a>
## Access your repository by using command-line Git
---

If you're comfortable using the command line with Git, you can use this method to manage your repository. 

<a name='clone_your_git_project_from_the_command_line'></a>
### Clone your Git project from the command line
---

Before you access the contents of your repository outside the Web IDE, you make a local copy of the project files by cloning the Git repository. 

**Before you begin**: Check whether Git is already installed. At a command line, enter `git version`. If Git is installed, the version number is displayed and you can begin. If Git is not installed, download and install the version for your operating system from the [Git website](http://git-scm.com/downloads). You can accept the default installation values.

1. In [DevOps Services](https://hub.jazz.net/), navigate to your project page.

2. Copy the **Git URL** from the right side of the page.

3. Open a command line.

4. Change the directory to where you want the local copy of the Git repository.

5. Type `git clone`, paste the Git URL, and press Enter. When prompted, enter your Jazz ID and IBM id password.

After the download is complete, you have a local repository of the files for your project. For more information about using Git, see the [Git documentation](http://git-scm.com/doc).


<a name='eclipse_using_egit'></a>
## Access your repository by using Eclipse and the EGit plug-in
----

If you use Eclipse and you have a project that uses Git for source control, you can use the EGit plug-in to manage your repository from Eclipse. 

<a name='install_the_egit_eclipse_plugin'></a>
### Install the EGit Eclipse plug-in
---

If you use Eclipse 4.2.2 or later, complete these steps. If you use an earlier version of Eclipse, [see the EGit/FAQs](http://wiki.eclipse.org/EGit/FAQ#Where_can_I_find_older_releases_of_EGit.3F) for instructions. If you do not have Eclipse installed and want tools for Java development, download and install the [Java EE IDE for Eclipse](http://www.eclipse.org/downloads/packages/eclipse-ide-java-ee-developers/keplersr2) from eclipse.org.

**Before you begin**: Check whether the EGit plug-in is already installed. In Eclipse, click **Window > Show View > Other** and type `git` as the filter text. If you see a list of Git views, skip ahead to [Connect to your DevOps Services Project with EGit](#connect_to_your_devops_services_project_with_egit)

1. In Eclipse, click **Help > Install New Software**

4. In the Install window, complete the following steps:
 * In the **Work with** field, enter `http://download.eclipse.org/egit/updates`
 * Under **Eclipse Git Team Provider**, select only the **Eclipse Git Team Provider** check box.
 * Click **Next** and click **Next** again.
 * Review the license terms and if you agree to the terms, accept them.
 * Click **Finish** to install the plug-in.

7. If you receive a security warning message, click **OK**.

8. If you are prompted to restart Eclipse, click **Yes**.


<a name='connect_to_your_devops_services_project_with_egit'></a>
### Connect to your DevOps Services project by using EGit
---

1. In Eclipse, click **Window > Preferences > General > Workspaces**. In the Text file encoding pane, click **Other** and select **UTF-8** from the list.

1. In [DevOps Services](https://hub.jazz.net/), browse to your project page. 

2. Copy the **Git URL** from the right side of the page.

3. In Eclipse, click **File > Import**.

4. In the Import window, click **Git > Projects from Git** and click **Next**.

5. Select **Clone URI** and click **Next**.

6. In the **URI** field, paste the Git URL.

6. In the **Authentication** section, enter your Jazz ID and IBM id password, and click **Next**.

7. Select the branches that you want to work on and click **Next**.

8. If necessary, update the local destination of the cloned repository and click **Next**.

9. Click **Use the New Project wizard** and then click **Finish**.

10. Click **General > Project** and click **Next**.

11. Enter a project name and click **Finish**.

<a name='eclipse_using_rtc'></a>
## Access your work items by using Eclipse and the Rational Team Concert plug-in
---

If you use Eclipse, you can use the Rational Team Concert plug-in to access your work items.

<a name='install_eclipse_and_the_rational_team_concert_plugin'></a>
### Install the Rational Team Concert plug-in
---

**Before you begin**: Rational Team Concert 5.0 and later require Eclipse 4.3.2, and Eclipse requires Java 1.7.  
**Note**: If you do not have Eclipse installed and want tools for Java development, download and install the [Java EE IDE for Eclipse](http://www.eclipse.org/downloads/packages/eclipse-ide-java-ee-developers/keplersr2) from eclipse.org.

1. In Eclipse, click **Help > Install New Software**

3. In the Install window, complete the following steps:
 * In the **Work with** field, enter `https://jazz.net/downloads/rational-team-concert/5.0/5.0/p2`
 * Press Enter to load the contents of the update site.
 * Select the **Rational Team Concert Client Feature** check box.
 * Select the **Group items by category** check box
 * Click **Next** and click **Next** again.
 * Review the license terms and if you agree to the terms, accept them.
 * Click **Finish** to install the plug-in.

6. If you receive a security warning message, click **OK**.

7. If you are prompted to restart Eclipse, click **Yes**.

<a name='connect_to_your_devops_service_projects_from_eclipse'></a>
### Connect to your DevOps Services project from Eclipse
---

1. In Eclipse, click **Window > Show View > Other > Team Artifacts**.

2. Click the **Manage JazzHub Projects** icon.
![Manage JazzHub Projects button within the Team Artifacts View](./images/jazzhubfeature.png)

3. In the **Manage JazzHub Projects** window, enter your Jazz ID and IBM id password to sign in to DevOps Services, and click **Next**

4. Select the DevOps Services projects to connect to and click **Finish**.

---

Your feedback is important. What worked well? What could be better? Post your comments to the [IBM DevOps Services forum][18]
or send an [email][19].

For more information or to try a tutorial, [see the IBM DevOps Services Docs page][20].

© Copyright IBM Corporation 2013, 2014.

[18]: https://www.ibmdw.net/answers?community=Devops_services (DevOps Services forum)
[19]: mailto:hub%40jazz.net
[20]: https://hub.jazz.net/docs