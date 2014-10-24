# Working locally with IBM DevOps Services projects and Jazz source control

Last modified: 23 October 2014

If you use Jazz Source Control Management for your IBM&reg; DevOps Services project you can complete work locally or by using the integrated Web IDE. If you work in Eclipse, you can install the Rational Team Concert plug-in for version control.

If you use the Track & Plan feature to manage your project plans and work items, you can also access your work items from Eclipse if you install the the Rational Team Concert plug-in.

---
##Contents

 * [Install Eclipse and the Rational Team Concert plug-in](#install_eclipse_and_the_rational_team_concert_plugin)
 * [Connect to your DevOps Services projects from Eclipse](#connect_to_your_devops_services_projects_from_eclipse)
 * [Import code into Eclipse from Jazz source control](#import_code_into_eclipse_from_jazz_source_control)


<a name='install_eclipse_and_the_rational_team_concert_plugin'></a>
## Install Eclipse and the Rational Team Concert plug-in
---

**Before you begin**: Rational Team Concert 5.0 and later require Eclipse 4.3.2, and Eclipse requires Java 1.7.  
**Note**: If you do not have Eclipse installed and want tools for Java development, download and install the [Java EE IDE for Eclipse](http://www.eclipse.org/downloads/packages/eclipse-ide-java-ee-developers/keplersr2).  If you do not have Java 1.7 installed, download and install the [Java SE Development Kit](http://www.oracle.com/technetwork/java/javase/downloads/jdk7-downloads-1880260.html).

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


<a name='connect_to_your_devops_services_projects_from_eclipse'></a>
##Connect to your DevOps Services projects from Eclipse
---

From Rational Team Concert, you can connect to your projects in two ways:

 * Use the Manage JazzHub Projects tool
 * Accept a team invitation

After you connect to your project, you can access its work items.

Option 1: Use the Manage JazzHub Projects tool

1. In Eclipse, click **Window > Show View > Other > Team Artifacts**.

2. Click the **Manage JazzHub Projects** icon.
![Manage JazzHub Projects button within the Team Artifacts View](./images/jazzhubfeature.png)

3. In the **Manage JazzHub Projects** window, enter your Jazz ID and IBM id password to sign in to DevOps Services, and click **Next**

4. Select the DevOps Services projects to connect to and click **Finish**.

Option 2: Accept a team invitation

1. In [DevOps Services](https://hub.jazz.net/), browse to your project page.

2. Click **Configure eclipse client** on the right side of the page.

3. Copy the text for the project invitation.

4. In Eclipse, click **File > Accept JazzHub Client Configuration**. If you don't see that menu option, go to **File > Accept Team Invitation**.

5. Paste the invitation text, click **Next**, and then click **Finish**.

6. Enter your Jazz ID and IBM id password to sign in  to DevOps Services.

Now you have connected to your DevOps Services project in Eclipse. Click the **Team Artifacts** tab and see the new repository connection and project area


<a name='import_code_into_eclipse_from_jazz_source_control'></a>
##Import code into Eclipse from Jazz source control
---

After you [connect to a project](#connect_to_your_devops_services_projects_from_eclipse) that stores code in a Jazz SCM repository, complete these steps to create a new repository workspace and load your components into Eclipse.

1. In Eclipse, click **Window > Show View > Other > Team Artifacts**.

2. Expand your project area to see the **Source Control** folder.

3. Right-click the **Source Control** folder, and click **New > Repository Workspace**

4. Select the stream to flow to, and click **Next**.

5. Specify a new name for your repository workspace. Add the word `Eclipse` to the name. Click **Finish**.

6. The tool continues with additional steps. Select **Find and load Eclipse projects** to load all of the projects from the components in the new repository workspace into your local instance of Eclipse. Click **Next**.

7. Select the Eclipse projects to load into your local Eclipse instance, and click **Finish**.

8. If you are working on an existing project with code, click the **Package** tab or **Project Explorer** tab to browse the loaded files, open a file, and edit code.

---

Your feedback is important. What worked well? What could be better? Post your comments to the [IBM DevOps Services forum][18]
or send an [email][19].

For more information or to try a tutorial, [see the IBM DevOps Services Docs page][20].

© Copyright IBM Corporation 2013, 2014.

[18]: https://www.ibmdw.net/answers?community=Devops_services (DevOps Services forum)
[19]: mailto:hub%40jazz.net
[20]: https://hub.jazz.net/docs