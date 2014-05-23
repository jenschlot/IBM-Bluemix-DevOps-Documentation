# Share code changes from Eclipse
You can update your application and then push those changes so that your teammates have them. 
The following instructions explain how to complete those tasks from Eclipse when you have your source
code in a Git repo hosted at IBM DevOps Services.

This procedure is more effective if you complete it with a partner, so the steps are divided between Partner A and Partner B.

## Make a change and check it in from Eclipse

Partner A completes these steps.

Application source code is contained in your IBM DevOps Services project. You must commit the code into Eclipse to edit it. 

1. In Eclipse, click **Window > Show View> Project Explorer**. 
2. In the Project Explorer view, double-click the hosted Git application to expand its contents. 
Double-click the **WebContent** folder. 
3. Select the **WEB-INF** folder. Right-click and select **New > File**. 
4. In the New File window, name your file and click Finish. 
>	![Add file](../images/guidejheclipse/eclipseaddfile.jpg)
5. Edit your file and save it.
6. Select the project in the Project Explorer view.
7. Right-click and select **Team > Commit**. This backs up your changes in the local respository for the project. 
>	![Commit from Eclipse](../images/guidejheclipse/eclipsegitcommit.jpg)
8. If prompted, enter your Jazz user ID and email. 
9. When prompted, enter a commit message. 
>	![Commit msg](../images/guidejheclipse/eclipsecommitmsg.jpg)
10. Right-click and select **Team > Push to Upstream**. This backs up the changes to the remote repository for the project. 
11. If prompted, enter your jazz.net credentials and click **OK**. 
12. Click **OK** again. The changes that you made should be in the repository. 
>	![Push results](../images/guidejheclipse/eclipsepushresults.jpg)

## Accept your teammate’s changes from Eclipse

Partner B completes these steps.

1. In Eclipse, select **Window > Show View**. Click Project Explorer.
2. In the Project Explorer view, right-click the hosted Git application.
3. Select **Team > Pull**. 
4. In the Pull Result window, review the commits that were pulled and click OK. 
>	![Pull result](../images/guidejheclipse/eclipsepullresult.jpg)

You edited an application in a Git repo hosted on IBM DevOps Services, pushed, fetched and merged updates by using Eclipse.  

