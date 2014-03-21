# Start coding with a BlueMix starter app

***
## Create an app from a NodeJS Web Starter Boilerplate

Codename BlueMix is an open-standards, cloud-based platform for building, 
managing and running apps of all types (web, mobile, big data, new smart devices). 
Capabilities include Java, mobile backend development, application monitoring, 
as well as capabilities from ecosystem partners and open source, 
all through an as-a-service model in the cloud.

If you haven't already done so, the first step to use these capabilities is to register. 
There is lots of information about registering and signing in here. (Register and sign article link)

Once you've registered, there is lots of helpful information available on the Codename BlueMix site, such as ...

* Getting Started with BlueMix
* BlueMix Overview
-and a range of Tutorials

... but if you're like us and prefer to try things rather than read about them, just follow along 
while we build a new app.

You can start by signing in to Codename BlueMix, which takes you to the Dashboard:

>	![Bluemix dashboard](../images/guide bm/bluemixdashboard.jpg)

Clicking **Add an application** lets you choose different kinds of runtimes (like Java or Ruby), 
services (such as DataCache or Mongo) and boilerplates, which are essentially pre-configured application templates 
that are great ways to get started. Let's select the Node JS Web Starter Boilerplate, 
which opens a panel that displays more information about what it does:

>	![Bluemix NodeJS app](../images/guide bm/bluemixnodejsstarter.jpg)

As you can see, the application is a simple Node.JS web server that includes some example code that 
demonstrates the IBM DataCache Service. Let's try it! 

At this point, you are just two clicks away from having a running application:

1. Click **CREATE APPLICATION**
2. In the Create application window, fill in the **App name** and **Host** fields, and click **CREATE**.

>	![Bluemix create app](../images/guide bm/bluemixcreateapp.jpg)

The **App name** is a simple name you can use to find this application the next time you come back to the 
dashboard. **Host** defines the URL that let's you access your new app from the Internet. 
(As you probably guessed this URL must be unique.)

That's all there is to it! It takes a short while for the application to start up, but once it does a 
tile on the dashboard shows it running.

>	![Bluemix app tile](../images/guide bm/bluemixapptile.jpg)

When you click the URL on the tile, it takes you to your already Internet visible, running application.

>	![Bluemix running app](../images/guide bm/bluemixrunningapp.jpg)

Cool!

But wait, it's great that the application is running, but it's not very useful if you can't see the code 
(and modify it), so let's get ready to do that. Read on at create a project for a bluemix app to learn more. 
(Link to create a project article)

There are a lot of ways you can work with your application code, 
but one of the slickest is to use something called auto-deploy. 
Auto-deploy gives you the ability to modify the code that is running in your app by simply 
pushing the changes to a Git repository. 
The mechanism that implements auto-deploy is provided by another IBM property called JazzHub, 
so let's talk a bit more about that.



Includes running the app from the Dashboard and 
downloading the starter app package

References creating a JazzHub project (Git repo and
auto-deploy) to contain the starter app

Load repo of starter app by using the Git command
line (clone, unzip, push)
***
Next steps (reference other articles)
- change code and push changes using
Git command line; view running code from BM
- change code and push changes using JazzHub editor 
(Web IDE)
