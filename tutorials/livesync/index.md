#Getting started with Bluemix Live Sync and Node.js

Last modified: 12 February 2015

##Contents
* [Create a Node.js app from a Bluemix Starter](#create)
* [Connect the Node.js app instance to DevOps Services](#connect)
* [Edit the app using the Web IDE and Live Sync](#edit_ide)
* [Edit the app on your workstation using Live Sync](#edit_local)
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

If you are building a Node.js app, you can use Bluemix™ Live Sync to quickly update the app instance on Bluemix and develop as you would on the desktop without redeploying. Bluemix Live Sync works from both the command line and in the web IDE. For an app written in Node.js or Java™, you can also [use Bluemix Live Sync to debug the app][2].

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
3. Once the repository is successfully initialized, click **CLOSE**. 

Your app instance is now associated with a DevOps Services project and Git Repository.

<a name='edit_ide'></a>
##Make a change to the app using the Web IDE and Live Sync

<a name='edit_local'></a>
##Make a change to the app on your workstation using Live Sync

<a name='summary'></a>
##Summary

[1]: http://livesync.mybluemix.net/downloads/blive_setup.msi
[2]: https://www.ng.bluemix.net/docs/#manageapps/bluemixlive.html#bluemixlivedebugger
[3]: https://console.ng.bluemix.net/