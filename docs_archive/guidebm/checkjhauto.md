# Check the auto-deployment page for the BlueMix starter app 
You've just [pushed the BlueMix starter app code to your Git hosted repo on IBM DevOps Services](addcodetojh). 
When you created a IBM DevOps Services project you set auto-deployment on. 
Now, let's check the auto-deployment page. You see something like this image: 

>	![Auto deploy page results](../images/guidebm/jazzhubautodeploypageresults.jpg)

Notice that at the top of the recent auto-deployments list is an entry with a comment that matches 
the commit you did using the command line. That shows your app is now running the code you pushed.

If you're wondering about the **No application manifest found** entry on the auto-deployment page, 
that is because you turned on auto-deployment before you pushed any content into the repo. 
For auto-deployment to determine which application you want it to push to, it uses a file called manifest.yml. 
BlueMix provides that file in the download zip for the application, so once you pushed it to the repository, 
everything started working. 

So, now let's change your app source code and see what happens. And let's use the command line to do that.
Try it at [edit code with the Git command line](editgitcmdline).  


  

