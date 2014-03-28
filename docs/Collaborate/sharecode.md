# Share code changes from Eclipse
You can update your application that is in a Git repo hosted at JazzHub and then push those changes so that your teammates have them. 
The following instructions explain how to complete those tasks from Eclipse.

This procedure is more effective if you complete it with a partner, so the steps are divided between Partner A and Partner B.

## Make a change and check it in from Eclipse

Partner A completes these steps:

Application source code is contained in your JazzHub project. You must commit the code into Eclipse to edit it. 
1. In Eclipse, click Window > Show View> Project Explorer. 
Screenshot: Project Explorer

2. In the Project Explorer view, double-click the hosted Git application to expand its contents. Double-click the WebContent folder. 
3. Select the WEB-INF folder. Right-click and select New > File. 
Screenshot: new file

4. In the New File window, name your file and click Finish. 
Screenshot: New name

5. Edit your file and save it by clicking File > Save. 

6. Select the project in the Project Explorer view.
7. Right-click and select Team > Commit. This backs up your changes in the local respository for the project. 
Screenshot: Commit

8. If prompted, enter your Jazz user ID and email. 
Screenshot: Jazz.net Username and Email

9. When prompted, enter a commit message. 
Screenshot: Commit Message

10. Right-click and select Team > Push to Upstream. This backs up the changes to the remote repository for the project. 
Screenshot: Push to upstream

11. If prompted, enter your jazz.net credentials and click OK. 
Screenshot: Credentials

12. Click OK again. The changes that you made should be in the repository. 
Screenshot: Review results

## Accept your teammate’s changes from Eclipse

Partner B completes these steps: 
1. In Eclipse, select Window > Show View. Click Project Explorer.
2. In the Project Explorer view, right-click the hosted Git application.
3. Select Team > Pull. 
Screenshot: Pull
4. In the Pull Result window, review the commits that were pulled and click OK. 
Screenshot: Review commits

You edited an application and pushed the updates to your teammates.  

***
# Share code changes from the JazzHub Web IDE 

You can update your application that is a Git repo hosted at JazzHub, push your changes to IBM BlueMix, and then deliver those changes so that your teammates have them. The following instructions explain how to complete those tasks from the Web IDE.

This section introduces you to Git source control in JazzHub. For information about source control command shortcuts, see the Jazz.net blog post about What's the difference between Ignore, Undo, Deliver, Suspend, Discard, and Reverse.

This procedure is more effective if you complete it with a partner, so the steps are divided between Partner A and Partner B. To add a teammember for this procedure, execute the steps in the Invite others to join your project section of this tutorial.

## Make a change and push it from the Web IDE

Partner A pushes changes to the repository by completing these steps.

If you are not currently in the JazzHub code editor, browse for your project on hub.jazz.net, open your project, and then click Edit Code for your project.
    Open a file in your sample application code base and make a change to it that you can test when you deploy the application. For example, if you are using the Sentiment Analysis App code base, you have already made changes to manifest.yml and package.json while configuring your forked application.
    In the Unstaged section, click the Stage icon.

    Screenshot: Stage
    Your change is shown in the Staged section. Changes in this section are checked into your repository workspace and are backed up on the server; however, they are not delivered to the project stream for others on your team. Click COMMIT to commit the changes.

    Screenshot: Commit
    In the commit message window, enter a comment to describe your changes and click SUBMIT.

    Screenshot: Submit
    Your change is shown in the Commits for "master" branch section. Changes in this section are checked into your repository workspace and are backed up on the server; however, they are not delivered to the project stream for others on your team.
    In the Commits for "master" branch section, click PUSH to push changes to the project stream for your teammates.

    Screenshot: Push

Acce## pt YouryTeamtate's Chances

 from the Web IDEPartner B updates his/her local repository by completing these steps.

    If you are not in the JazzHub code editor, browse for your project on hub.jazz.net, open your project, and then click the Edit Code tab for your project.
    Click Git status to see changes from Partner A.
    The changes from Partner A reside in the Commits for "master" branch section. Click FETCH to fetch the changes from the remote repository. Expand the Commits for "master" branch section to see what changes Partner A made.

    Screenshot: Fetch
    Click MERGE in the Commits for "master" branch section to bring in the updated files into your repository workspace.

    Screenshot: Merge
    Return to the JazzHub code editor by clicking the pencil icon in the left navigation pane.

Navigate to the file that was updated by partner A and verify the changes.

You edited your application. No and pushed the changes to your teammates.