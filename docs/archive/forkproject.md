# Fork code from a IBM DevOps Services project 
It's easy to get started quickly to create your app from IBM DevOps Services by forking an existing IBM DevOps Services project. 
Both the Sentiment Analysis (node.js) and Twitter Influence Analyzer (Java) are IBM DevOps Services projects hosted in a
Git repo on IBM DevOps Services and are configured to push to BlueMix in that you don't need to learn how to 
write a manifest file. So what is a manifest and why is it necessary? 
A manifest file contains important settings such as the application instance name to use, the host machine, 
the services that the application utilizes and more. 
Deployment of a IBM DevOps Services project from the Web IDE requires the project to have a manifest.yml file. 
This is because for auto-deployment to determine which application you want it to push to, it uses the information in 
the manifest file.

If you haven't already done so, the first step before you fork is to register. 
Take a look at [Register or sign in at IBM DevOps Services and BlueMix](registerandsignin).

And by the way only one person on a team needs to fork the IBM DevOps Services project.
 