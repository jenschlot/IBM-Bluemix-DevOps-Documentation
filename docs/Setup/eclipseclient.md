# Code with Eclipse plug-ins 
You can connect to your JazzHub projects from your Eclipse development environment to work on project plans, 
track work items, and develop code. 
Take a look at this list of Eclipse plug-ins, and decide which tools can help you get the most out of JazzHub: 


* [Rational Team Concert](#rtc)

* [Cloud Foundry](#cf)

* [EGit](#egit)

<a id="rtc"></a>
## Rational Team Concert 

JazzHub is built on Rational Team Concert, so this is a great place to start if you want to edit code locally 
on your desktop. If you have the Rational Team Concert client, skip ahead to [connect to your JazzHub project](#connectrtc) 
from within the client. If you don't have the Rational Team Concert client yet, 
you can install Rational Team Concert as a plug-in for Eclipse. 
In the next steps, you'll get the required version of Eclipse and install the plug-in. 

### Install Eclipse and the Rational Team Concert plug-in
Rational Team Concert requires Eclipse 4.2.2. If you don't have Eclipse 4.2.2, 
download and install it from [Eclipse.org](http://eclipse.org). 

In Eclipse, go to the Help menu and find the option to install new software. 
Get to the Install page and make these selections:

* https://jazz.net/downloads/rational-team-concert/4.0.6/4.0.6/p2 for the update site. Press **Enter** to load the contents of the update site. 
* **Rational Team Concert Client Feature** and **Group items by category** 
>	![Install page](../images/guidesetup/setupinstallpage.jpg)

Keep paging through the wizard until you see the license terms. Accept the terms and then click **Finish** 
to install the plug-in. 

Installing the plug-in can take several minutes. You might see a warning message that you are 
installing software that contains unsigned content, which is expected. Keep going. 

Finally, restart Eclipse for the changes to take effect. 

Your done. Well, not quite. You've got Rational Team Concert running in Eclipse, which is great, but 
you want to connect your JazzHub project with Eclipse too. So, lets do that next. 

<a id="connectrtc"></a>
### Connect to your Jazz SCM repo hosted at JazzHub from Eclipse
You've set up a JazzHub project that uses a Jazz SCM repo for source control. 
Now you want to connect that project to Rational Team Concert.

Go to Eclipse and open the Team Artifacts view (**Window > Show View > Team Artifacts**). You 
want to see your JazzHub projects, so click the JazzHub icon.
>	![RTC JazzHub icon](../images/guidesetup/setuprtcjhicon.jpg)

Now you must authenticate for JazzHub to show you your projects, so in the Manage JazzHub Projects window, enter your Jazz User ID and password.
Keep going. Select the JazzHub projects you want to connect to and click **Finish**.
>	![Select project to connect to](../images/guidesetup/setupjhprojectselect.jpg)

If you look at the **Team Artifacts** tab,you'll see the new Repository Connection and Project Area.
>	![Project selected](../images/guidesetup/setupprojectselect.jpg)

So your connected to your Jazz SCM repo hosted at JazzHub from Eclipse, what's next.  Load your
code from repo so you can work with the code from Eclipse.  

#### Load code into Eclipse from Jazz SCM
Your JazzHub project uses a Jazz SCM repo for source control and you want to load that code into Eclipse. 

First you want to create a repo workspace. That's easy to do. Right-click **My Repository Workspaces** and
select the option for a new repo workspace. 
>	![Create workspace](../images/guidesetup/setupcreaterepowrkspace.jpg)

Next, select the stream you want to flow to. Keep going.
>	![Select stream](../images/guidesetup/setupselectstream.jpg)

Give your repo workspace a name and click **Finish**.
>	![Name workspace](../images/guidesetup/setupnameworkspace.jpg)

The Load Repository workspace page opens. Choose to find and load Eclipse projects to load all of the projects from the components in your 
repo workspace. This loads the code into your local Eclipse workspace. 
Select the Eclipse projects to load into your local Eclipse workspace and then click **Finish**.
>	![Select project](../images/guidesetup/setupselectprojtoload.jpg)

You have created a repo workspace and loaded code. 
>	![Loaded workspace](../images/guidesetup/setuploadedworkspace.jpg)

Now you can use the Package or Project Explorer to browse the loaded files, open a file, and edit code. 
>	![Project files view](../images/guidesetup/setupprojfilesview.jpg)

<a id="cf"></a>
## Cloud Foundry Eclipse plug-in
You use the Cloud Foundry Eclipse plug-in to connect to Codename BlueMix.
1. In Eclipse, click **Help > Eclipse Marketplace**. 
2. In the Eclipse Marketplace window, in the **Find** field, 
enter Cloud Foundry Integration for Eclipse, and click the search icon.
>	![Cloud Foundry](../images/guidesetup/setupcffind.jpg)
3. After the results are displayed, in the section for Cloud Foundry Integration for Eclipse 1.5.1, click **Install**.
>	![Cloud Foundry confirm](../images/guidesetup/setupcfplugin.jpg)
4. On the Confirm Selected Features page, clear the **GoPivotal, Inc. UAA Integration (optional)** check box 
and click **Confirm**.
>	![Cloud Foundry confirm](../images/guidesetup/setupcfconfirm.jpg)
5. When you are prompted, accept the terms and click **Finish**.
6. If you are prompted to restart Eclipse, click **Yes**.

<a id="egit"></a>
## EGit Eclipse plug-in
You use EGit to work with Rational Team Concert and a Git repo hosted on JazzHub.
First install EGit. Then connector to a Git repo hosted at JazzHub using EGit. 

### Install EGit
Before you install EGit, check to see if it is already installed. In Eclipse, 
go to **Window > Show View > Other** and enter git as the filter text. 
2. If you see views similar to the following list of git tools, 
skip ahead to Connecting to your JazzHub Project with EGit.
>	![EGit tools](../images/guidesetup/setupegit.jpg)
3. In Eclipse, click **Help > Install New Software**. 
4. In the Install window, complete the following steps: 
	* In the Work with field, enter http://download.eclipse.org/egit/updates, and click **Add**.
	* Select the **Eclipse Git Team Provider** check box.
	* Click **Next**. 
	>	![EGit tools](../images/guidesetup/setupegitprovider.jpg)
5. Click **Next** to complete the steps in the wizard.
6. When you are prompted, accept the terms and click **Finish**.
7.If you receive a security warning message, click **OK**.
8.If you are prompted to restart Eclipse, click **Yes**.

### Connect to your JazzHub Project with EGit
After your project is set up, 
you can copy the Git URL so that you can connect Rational Team Concert with your hosted Git repository. 

1. Go to https://hub.jazz.net and log in.
2. From the list in the View field, select **All My Projects**.
3. Click the link to open the project details page for your project.
4. In the Code section, click the Git URL link and copy the text in the Git URL box.
>	![Git URL](../images/guidesetup/setupconnectgiturl.jpg)
5. In Eclipse, use the Import wizard to load your Git repo. Use **File > Import** from Eclipse. Click **Next** to page
through the Import wizard.
	* Select your Git project source to import.
>	![Git project source](../images/guidesetup/setupselectgitprojectsource.jpg)
	* Select the Git repo URI.
>	![Git URI](../images/guidesetup/setupselectgituri.jpg)
	* Paste the copied Git URL in the URI field. Also enter your Jazz.net User ID and password in the Authentication section.    
>	![Git URI](../images/guidesetup/setupgituriauthentication.jpg)
	* Update the Local Destination of the cloned repository if needed. 
>	![Git URI](../images/guidesetup/setupdirectorygit.jpg)
	* Click **Next** and then **Finish**.