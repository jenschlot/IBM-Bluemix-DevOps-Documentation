#Getting started with Bluemix Live Sync and Node.js

Last modified: 12 February 2015

##Contents
* [Create a Node.js app from a Bluemix Starter](#create)
* [Connect the Node.js app instance to DevOps Services](#connect)
* [Edit the app using the Web IDE and Live Sync](#edit_ide)
* [Edit the app locally using Live Sync](#edit_local)
* [Summary](#summary)

<!--
- Create a a Node.js app from a bluemix boiler plate
- Press ADD GIT
- Press Edit Code
- Turn on Live Edit
- Press Open URL to open a browser on the running app
- Make a change (static file)
- See it appear in a browser
- Make a change (node module)
- Press restart
- See it appear in a browser
- Download the CLI from the project page
- Set up a synchronization directory
- Edit a file locally
- See the change immediately in the browser
- See how changes you make in the desktop stay in sync with the Web IDE (browser refresh unfortunately needed)
- Learn how to start, stop, and (quick) restart, the app from the CLI
- Talk about how you can check in to Git from either desktop or CLI
-->

If you are building a Node.js app, you can use Bluemix™ Live Sync to quickly update the app instance on Bluemix and develop as you would on the desktop without redeploying. Bluemix Live Sync works from both the command line and in the web IDE. [Learn more about Live Sync here][4]. For an app written in Node.js or Java™, you can also [use Bluemix Live Sync to debug the app][2].

In this tutorial, you deploy a Node.js app from a Bluemix Starter. Then, you update the app using Bluemix DevOps Services and Bluemix Live Sync. By using Live Sync, you immediately see the impact of your changes on the running Bluemix application without waiting for redeployment.

**Before you begin:** [install the Bluemix Live Sync command-line interface][1].

<a name='create'></a>
##Create a Node.js app from a Bluemix Starter

First, you need an app to edit. Bluemix provides everything you need to get started:

1. [Sign in to Bluemix][3].
2. Click **CREATE AN APP**.
3. Click **WEB**.
4. Select the **SDK for Node.js** Starter, then click **CONTINUE**.
5. Give the app a name, then click **FINISH**.

In a few seconds, your app will be running on Bluemix. Click the URL after Route to view it.

<a name='connect'></a>
##Connect the Node.js app instance to DevOps Services

Next, create a Git repository that's hosted by Bluemix DevOps Services and associate it with your app instance. The repository will be populated with the SDK for Node.js Starter code.

1. On your app's Overview page, click **ADD GIT**.
2. On the Create Git Repository Page, confirm that the check box is selected. Click **CONTINUE**.
3. When the repository is successfully initialized, click **CLOSE**. 

Your app instance is now associated with a DevOps Services project and Git Repository.

<a name='edit_ide'></a>
##Edit the app using the Web IDE and Live Sync

<a name='edit_ide_create'></a>
###Create a launch configuration to use with Live Sync

Launch configurations define the settings that will be used by the Web IDE to deploy your app to Bluemix. By default, DevOps Services deploys to the Bluemix app it was associated with at creation. Because you want to test your changes before commiting to them, create a new launch configuration.

1. On your app's Overview page, click **EDIT CODE**. The Web IDE opens. 
2. Click the dropdown menu next in the run bar and click **+**. 
3. On the Edit Launch Configuration menu, append an indication that this is a test version of your app app, like `-live`, to the app's name and host. Give the new launch configuration a name.
4. Click **SAVE**. 

You created a launch configuration that will allow you to perform Live Sync editing of your project.

<a name='edit_ide_live'></a>
###Making changes in Live Edit mode

Redeploying to Bluemix for every little change wastes valuable development time. Next, enable Live Sync's Live Edit mode in the DevOps Services Web IDE to quickly make and preview changes to your project.

1. Click the dropdown menu in the run bar and select your new launch configuration. 
2. Click the **Live Edit** button. The code in your workspace is deployed to Bluemix according to the new launch configuration.
3. When deployment finishes, the phrase "(running debug)" appears next to your launch configuration in the run bar.
4. In the run bar, click **Open URL**. The Live Sync app appears in a new browser window.

Make a change to the Starter app to see Live Sync in action:

1. In the Web IDE project view, open the **public** folder. Under **stylesheets**, open **style.css**.
2. In the `h1` rule set, increase the `font-size` to `4em`.
3. Refresh the browser window that shows the running app. The header size will double.

Note that changes to static file types like CSS and HTML will be reflected when you refresh your browser. If you make changes to a Node module, you first need to **Quick Restart** to see your changes in Live Edit mode.

Click the **Live Edit** button once more to disable Live Edit mode.

You edited the project in the Web IDE and previewed the result of your changes without redeploying to Bluemix. Excellent!

<a name='edit_local'></a>
##Edit the app locally using Live Sync

Live Sync isn't just available for work done in the Web IDE. You can also make changes on your local environment and see them previewed on Bluemix by using the Live Sync command-line tool. If you don't have it, [install the Live Sync command-line interface][1].

<a name='edit_local_download'></a>
###Download your DevOps Services project

To work locally, you need a local version of your DevOps Services project. You could clone from the project's Git repository, but that isn't required to use Live Sync. Instead, download an archive of your project files:

1. Select the root directory. Click **File**, **Export**, and **Zip**.
2. Save the archive file to your local environment. 
3. Extract the archive file.

###Synchronize your local environment with Bluemix

Next, configure your local environment to work with Bluemix Live Sync:

1. Open a command prompt.
2. Log in to Bluemix with your IBM® id and password:
```
bl login -u user_name -p password
```
3. View a list of your Bluemix projects: 
```
bl projects
```
4. Synchronize your local environment with your project on Bluemix:
```
bl sync projectName -d localDirectory --verbose
```
Where `localDirectory` is the location where you extracted your project files. Press `q` to end synchronization.

###Edit the app locally using Live Sync

In a second command prompt, begin editing the application:
```
cd localDirectory
bl start
```
Using the most recent launch configuration from the Web IDE by default, Live Edit mode is enabled in your local environment. View the App URL, Debug URL, Manage URL, and Live Sync state in the second command prompt window.

Changes that you save to local, static files will appear in your Debug instance after a browser refresh. Add the declaration `color: #00aed1` to the `h1` rule set to view a quick change. If you update the Node module, restart the Debug instance by entering `bl stop` and then `bl start` in the Live Edit command-line interface to see your changes.

###Stop Live Edit mode and stop synchronization: 

If you made both changes suggested in this tutorial, the header on your application page should be big and blue. Nice work! 

Finally, disable Live Sync:
1. In the second command prompt, enter `bl stop`. 
2. In the first command prompt, press `q`.

If you were working on a real project, you might commit your changes in Git or discard them. 

<a name='summary'></a>
##Summary

You edited a Node.js project both in the cloud and locally, using Bluemix Live Sync to preview your changes along the way. 

[1]: http://livesync.mybluemix.net/downloads/blive_setup.msi
[2]: https://www.ng.bluemix.net/docs/#manageapps/bluemixlive.html#bluemixlivedebugger
[3]: https://console.ng.bluemix.net/
[4]: https://www.ng.bluemix.net/docs/#manageapps/bluemixlive.html