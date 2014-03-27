# Fork code from a JazzHub project 
It's easy to get started quickly to create your app from JazzHub by forking an existing JazzHub project. 
Both the Sentiment Analysis (node.js) and Twitter Influence Analyzer (Java) are JazzHub projects hosted in a
Git repo on JazzHub and are configured to push to BlueMix in that you don't need to learn how to 
write a manifest file. So what is a manifest and why is it necessary? 
A manifest file contains important settings such as the application instance name to use, the host machine, 
the services that the application utilizes and more. 
Deployment of a Jazzhub project from the Web IDE requires the project to have a manifest.yml file. 
This is because for auto-deployment to determine which application you want it to push to, it uses the information in 
the manifest file.

***
## Fork code from Sentiment Analysis (node.js) with JazzHub

### Start with a sample JazzHub project
Before you fork the [Sentiment Analysis App](https://hub.jazz.net/project/spirit/Sentiment%20Analysis%20App/overview) app,
you might want to look at it first. Let's do that. You can see that this sample is a hosted Git project 
and that it contains the manifest.yml file for deployment. Let's suppose that you want to customize
the sample app. That's easy. Clicking **Edit Code** opens the JazzHub code editor 
where you can load the app.js file. Now change the app name on lines 87 and 124. 
Notice that the editor recognizes the file as a Javascript file and highlights everything for you.

>	![Sentiment app in JazzHub editor](../images/guidejhwebide/jazzhubwebidesentimentapp.jpg)

After changing the name, you can deploy the application to BlueMix and see your change. 
To deploy the application, you click **DEPLOY**. 

>	![Deploy button in JazzHub editor](../images/guidejhwebide/jazzhubeditordeploybutton.jpg)

You then check the deployment status shown in the Manual Deployment Information section. 
The status is green, so your deployment was successful.

>	![Deploy app status in JazzHub editor](../images/guidejhwebide/jazzhubeditordeploystatus.jpg)

To see your change, you click the application link, which shows your running app.

>	![Link to running app from JazzHub editor](../images/guidejhwebide/jazzhubeditorlinktorunningapp.jpg)

### Fork the sample application
Instead of working off a shared code-base, you can fork this code into your own project and 
use it as a starting point for your next application. You fork this code by clicking **FORK** and enter a name 
You get a new project, a new project name, and a copy of the code from the sample project.

>	![Fork button in JazzHub editor](../images/guidejhwebide/jazzhubeditorforkbutton.jpg)

Now you can edit app.js in your own project, deploy the changes and see them go live. 
You can manage the live application instance from BlueMix. 
The **Applications** tab on the BlueMix Dashboard has the options to start, stop and delete the application. 
The **Services** tab has options to add various services such as mongodb, SSO, MapReduce and more.

After making changes, you'll want to share them with other users of the project 
so let's push them to the repository. Read on at [../Deploy/pushfromjh]

***
## Fork code from Twitter Influence Analyzer (Java) with Eclipse and JazzHub

- Uses Git repo
Includes these subtasks
- connecting RTC with the Git repo hosted at JazzHub
- configure the sample project by following the README.md file

next steps  

Push the sample app to BlueMix (includes adding MongoDB service)
(includes prereq Connect to BlueMix using the Cloud Foundry plug-in)