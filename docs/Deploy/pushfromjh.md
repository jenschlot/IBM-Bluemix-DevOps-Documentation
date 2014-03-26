# Deploy to BlueMix 

Talk about deployment options and what they mean and why you want to use each.

***
## Deploy automatically from the JazzHub auto-deployment page  

You've just pushed the BlueMix starter app code to your Git hosted repo on JazzHub. 
When you created a JazzHub project you set auto-deployment on. 
Now, let's check the auto-deployment page, you see something like this image: 

>	![Auto deploy page results](../images/guidebm/jazzhubautodeploypageresults.jpg)

Notice that at the top of the recent auto-deployments list is an entry with a comment that matches 
the commit you did using the command line. That shows your app is now running the code you pushed.

If you're wondering about the **No application manifest found** entry on the auto-deployment page, 
that is because you turned on auto-deployment before you pushed any content into the repo. 
For auto-deployment to determine which application you want it to push to, it uses a file called manifest.yml. 
BlueMix provides that file in the download zip for the application, so once you pushed it to the repository, 
everything started working. 

So, now let's change your app source code and see what happens. And let's use the command line to do that.
Read on at [edit code with the Git command line](../Edit/editgitcmdline).  

## Push changes from the JazzHub editor  

You've just made changes to your BlueMix starter app code by using the JazzHub editor. 
You can then use the integrated Git support to push the change.

You start by switching to the Git Status page.

>	![Git status page](../images/guidebm/jazzhubgitstatuspage.jpg)

Where you can then stage

>	![Stage change](../images/guidebm/jazzhubeditorstage.jpg)

commit

>	![Commit change](../images/guidebm/jazzhubeditorcommit.jpg)

and push the change 

>	![Stage push](../images/guidebm/jazzhubeditorpush.jpg)

just like you did with the command line (only with a few more clicks and a lot less typing). 
And then, finally, you can see once again that your app was updated.

>	![BlueMix running app changed again](../images/guidebm/bluemixrunningappchangedagain.jpg)

If auto-deployment is on, your changes are automatically deployed to BlueMix.  If auto-deployment is off, you
can manually deploy your changes (see the next section) or you can turn auto-deployment on for you project by changing
your project settings (coming soon).


## Deploy manually from the JazzHub editor  

