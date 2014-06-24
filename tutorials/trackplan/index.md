#Getting started with tracking and planning in IBM DevOps Services

IBM DevOp Services' new Track and Plan service offers you an easy, flexible way to manage your projects. Its features and functions support Agile project development. After you enable Track and Plan for your project, you can add Work Items, prioritize and assign items to sprints, and track your progress. ([Click here][1] for more information about Track and Plan's terminology.)

With the Track and Plan tool, you will use flexible features that simplify your process workflow, making it faster. You can assign attributes to Work Items by typing character accelerators or selecting options from easily accessible icons. You can drag and drop items from one project area to another, like from your project backlog to a sprint.

Track and Plan's flexibility extends beyond the interface. It supports many project roles, scales to support both large and small teams, and can support traditional projects, too. 

If you want to try out Track and Plan, follow these instructions to start a simple, public, Agile project. You'll use basic story, task, and defect Work Items to plan the creation of a chat page for a website.

---

 ##Setting up a DevOps Project
Start by logging in to hub.jazz.net, which takes you to your **My Stuff** page. 

![DevOps Services new user landing page][2]

Click the orange icon over **Start coding** to start a new project. Name it “ChatPage.” Select **Create a Git repository** to make a new repo for your code at the location shown.  
*Note: You also can use Track and Plan to manage an existing Git repo or a new Jazz SCM database.*

IDS supports both public and private projects. Anyone with a JazzHub account can access your public projects, but only the users you invite can access your private projects. Leave **Private** unchecked.  
*Note: You can use the Track and Plan feature with all your public IBM DevOps Services projects at no cost. If you use the feature with private projects, a fee might apply. See the [subscription details][3].*

Check **Add features for Scrum development**. By enabling Scrum, you can create sprints from your project's backlog of Work Items. If you like to plan iterations without a backlog, you would leave this unchecked.  
*Note: You need to enable Scrum development to fully utilize Track and Plan.*

IBM Bluemix Services is IBM's new cloud-based software hosting and deployment service. To experience Bluemix, check out one of the Getting Started tutorials [here][17]. Leave **Deploy to Bluemix** unchecked.

Click **CREATE** to set up your project and go to ChatPage's **Overview** page.  
*Note: If you wanted to involve other people with your work, you would click **INVITE**. Then, you'd enter their email addresses.*

![New project selections][4]

---

 ##Create Your First Work Items

<!---
As of the 6/18 build, the new Track and Plan is automatically enabled. Confirm with the 6/25 build.
-->

Click **TRACK & PLAN**. From here, you can see all of the project Work Items that are assigned to you. Once you make them, that is. Since you're the only person working on this project, you want to assign all the Work Items to you. The fastest way to do that is to create your Work Items from this page.

Click in the **Add a Work Item...** field and type in the text of the first task summary, “Create a simple chat page for our site.” Tap **Enter**, and you'll see your Work Item appear.

Click in the field again, and start typing the next Work Item summary, “Incoming messages are not reaching other chat participants.” Before you tap **Enter**, mouse over the icons by **SAVE**.

![Set Attributes at work item creation using these][5]

You use these icons to set the Work Item attributes you know at its creation. Don't worry about messing up your Work Item's attributes. You can always change them later. If you aren't sure what some of the attributes mean, check out the [glossary][1].

Use the icons to set these parameters.

* Set Type to Defect
* Set Severity to Major
* Add a messages Tag
* Set Priority to High

Notice the new text after your summary. When you set an attribute, Track and Plan appends your summary with the text code for that attribute.

![Defect summary appended with attribute codes][7]

Click **SAVE** when you're finished.

Now, add some parameters to your task. Click the tag icon in its title block and type “website” into the displayed field. Then click the **Priority** icon and select High.

Click on **Incoming Work** and evaluate your new Work Items. They are ranked by severity so you know which tasks are most important. You can either send incoming Work Items to your **Backlog** for inclusion in a sprint or trash them. Click the **Triage to Backlog** icon for each Work Item.

---

 ##Creating Backlogged Work Items
You'll need to make a few more Work Items for your sprint. Click **Backlog**, then click in the **Add a Work Item...** field.

Start typing your next Work Item summary, “As a user, I'd like your site to have a chat page.” Notice how the **Type** icon automatically changed. Track and Plan recognizes the difference between common Work Item types and changes their attributes for you.

Use the icons to finish setting attributes. Make yourself the Work Item's owner, add a “website” **Tag**, and set the **Priority** to Medium. 

Click **SAVE**

You can set or change attributes of existing Work Items several ways. Click the summary of your story to open the Work Item editor. 

<!---
As of the 6/18 build, the new work item editor is not in place. Confirm its function with the 6/25 build.
-->

![Work item editor popup][8]

You can change or set any work item attribute from within this editor. Most of the attributes are even visible on the **Overview** page. If you want to add or remove a parent/child relationship or Work Item subscriber, click **Links**. Click **History** to view all the changes to the Work Item. Don't worry about the **Acceptance** or **Approvals** sections for now. You can explore their functions later. Since you did not make changes, click **Cancel**.

You can quickly make attribute changes without opening the Work Item editor. Mouse over the icons visible in your Work Item's title bar. Several functions available during Work Item creation are here. Now, click in some empty space the story's title bar. You can modify more attributes from this dropdown.

![Attribute modification icons and dropdown][9]

Note the ID number of your chat page creation story. (The one in the example is 1080.) This number is unique to your project, and Track and Plan uses it to keep track of each Work Item. If you know the ID number for a particular Work Item, you can easily find it using the search function above the view list or add relationships to it.

Now type “Configure a chat server using node.js.” in the field to start another Work Item. Instead of using the icons to set attributes, try typing them out. Slowly type \*task to set the **Type** to task. Watch how the **Type** drop-down appears when you enter the \*. If you prefer to keep your hands on the keyboard, you can enter most of your initial attributes without touching the mouse. Enter these attributes, then click **SAVE**:
	
* @:yourJazzID
* \#server
* $high
* -> chat page story ID number

Refresh your browser and you can see a **Plus sign** icon by your story's summary. Click it and confirm that your new task is nested under your story. 

Click the **X** icon by your task summary to remove the link between these items.

Wait. Those items really are related. Find the **Add a child** icon near your story's summary and click it. Now, type “node” into the search box and select the task from the filtered list of results. Notice that the **Plus sign** reappears beside the story and the task remains on your ranked list. This behavior lets you see the tasks associated with a story but still rank the tasks individually.

While you're assigning children, go ahead and make your Work Item to create the chat page a child of your story. Click the **Add Child** icon by your story again, search for “website,” and select the task from the results.

You need a few more Work Items to complete this project. Add the following Work Items and attributes using whichever method you like best.  Remember that you can assign or modify attributes after you've created the Work Item, too.

* As a user, I'd like to be able to log into your chat with my Facebook or Google+ account. \*story #login $high
* Integrate OAuth to the chat site. *task #login #website $high
 * Make this task a child of #login story

Refresh your browser, expand your child items, and your backlog should look like this: 

![Unranked work items in the backlog][10]

---

 ##Triage Backlog

<!---
As of the 6/18 build, ranking is broken. Confirm with the 6/25 build.
-->

Before you make your sprint, you should triage the Work Items in your **Backlog**. Notice how each Work Item's rank is “Not Ranked.” You can easily change this. Click the empty space around the task to create a chat site. Drag it to the top of the list and see how its rank changes to 1. Rank the rest of the Work Items in this order: 

![Ranked work items in the backlog][11]

Now that you've ranked the Work Items, assign them story points. Expand each story using its **Plus sign** and review its children. Then, click the **0 pts** by each story and change each to **20 pts**.

<!---
As of the 6/18 build, you can't add story points this way. Confirm with the 6/25 build.
-->

Before you finish assigning your tasks, make your tags help you. Under **Filters** select **by tags**. Now select login from the tag list and hit **Enter**. Click on the **Owner** by each #login Work Item and select your name from the drop down list. When you've assigned your items, mouse over **login** in the filter area, and click the **X** to remove it.  
*Note: If you were working with others, you could use this method to easily assign related Work Items to them.*

Since you've assigned your story points and owners, you can create time estimates. Click the white space near the task to add OAuth. Select **Estimate: Unassigned** from the drop down menu. Set the duration to 3 days and click **OK**. While you're at it, assign 3-day estimates to your defect and remaining tasks, too.

![Location of Estimate: unassigned][12]

 ---
 	
##Plan Sprint 1


Click **Sprint** Planning and then **CREATE SPRINTS** to start. Use the calendars by the Start and End dates to create two two-week sprints that start on Mondays.  
*Note: You are the project's owner. Even if you added team mates, only you can create and edit sprints.*

![Sprint creation dialog showing two two-week sprints][13]

Click **OK**, and you can see the sprints under **Sprint Planning** on the left. You can see tiles for your Backlog and Sprint 1. (If you scroll to the right, you will reveal Sprint 2.) Click the task to configure a node.js server from the Backlog tile, drag it to the Sprint 1 tile, and drop it. That was easy. Go ahead and drag the rest of the Work Items to Sprint 1.

---

 ##Review Project Data
Before you start working on your project, review Track and Plan's views.

<!---
As of the 6/18 build, the dashboard as described is missing. Confirm with the 6/25 build.
-->

Click the down arrow by the **TRACK & PLAN** button to visit the dashboard. Notice that the **Sprint Burndown** chart reflects the hours of work planned for the sprint. You will find more information on your project's dashboard as your work through the Sprint, so don't forget about it. Additionally, you can create custom dashboard widgets to show you exactly what you need to know. But, you should try that another day.

<!---
As of the 6/18 build, the views are on different pages instead of tiles. Confirm with the 6/25 build, and fix all references to tiles.
-->

Click the **TRACK & PLAN** button to return to **My Work**. Since you own all the tasks and haven't started working on them, you can see them all in your Open tile.

Now, click **Team's Work**. You'll see all the team's work for the whole project at first. Track and Plan groups the Work Items by owner, so you will always know which tasks your team members own. Click **Sprint 1** to hide items on other sprints so you can focus on this sprint's work. You will find more value in this view when you share work with others!

Take a minute to explore the other available views and think ways you could use them to support your current project workflow.

---

 ##Working Through the Sprint
Now that you've set up your sprint and know how to find the sprint data, you're ready to start work.

Go back to **My Work**. For each #website and #server item, click the **Status** icon and select **Start Working** from the popup. 

![Status: new icon location][14]

Notice how these items move from the **Open** tile to the **In Progess** tile.

As you work on your tasks in progress, update the number of hours spent on the task. Find the task to configure a node.js server and click in the space by its comment to expand the drop-down. Use **Time Spent** to show that you've spent 16 hours on the task. 

When you're finished with a work item, click the **Status** icon and select **Complete** from the popup to finish the task. Close the task to configure a node.js server.  
*Note: You can complete this process from **Team's Work**, too. You might find the ability to assign hours and complete tasks useful during your daily Scrum meeting.*

Track and Plan makes it easy for you to track your sprint's work as you complete planned tasks. It's also easy to create and address new Work Items.

Click in the Work Item creation bar in the Open tile, and make three more Work Items:

* As a user, I'd like your chat site to look good on my phone. \*story #mobile $low
* Test site on mobile devices and optimize Bootstrap and CSS files to improve performance. \*task #mobile #website $low
 * Make this a child of #mobile story
* The server handles the requests too slowly. \*defect #server $high !major

Go to the **Incoming Work** view to triage these new tasks. Use the **Triage to Backlog** icon to send the two #mobile stories to the **Backlog**. This defect seems pretty important, though. Click on its summary to open the Work Item Editor, then select **Sprint 1** from the **Planned for** dropdown to move it to this sprint. Use the **Estimate** field to assign 8 hours to the defect, then click **Save** to capture all your changes.  
*Note: If you were leading a team, you would want to triage new Work Items in the **Incoming Work** and **Backlog** during your sprints.*

<!---
As of the 6/18 build, I can't send items to Sprint 1 from Incoming Work. Confirm with the 6/25 build.
-->

---

 ##Activating Track and Plan in Your Project

By now you should have a good idea of how to use Track and Plan, and you might know some ways could put it to work in your projects. The best way for you to continue to learn about Track and Plan is to use it in your projects!  
*Note: If you don't own any Bluemix projects, work through either the [Getting Started with IBM Bluemix and IBM DevOps Services using Node.js][15] or [Getting Started with IBM Bluemix and DevOps Services using Java][16] tutorial to learn how to make a new app.*

If you already have a Bluemix project, here's how you enable Track and Plan.  

<!---
As of the 6/18 build, the tiles still aren't present in Bluemix. The text is based off of Philippe's flow in https://jazz.net/jazz/web/projects/Jazz%20Lifecycle%20Integration%20Platform#action=com.ibm.team.workitem.viewWorkItem&id=317748. Confirm with the 6/25 build.
-->

Log into Bluemix and go to your **DASHBOARD**. Make sure that you're in the dev Space. Now, click on the app that you'd like to use Track and Plan with.

Click on the **CODE** button to go to DevOps. From there click the **Gear Icon** to access the project's settings. Now, click **OPTIONS**, and select **Enable Tracking & Planning**. Click **SAVE**.  
*Note: Make sure that you uncheck private if you would like a public project.*

Now, go back to your dev Space **DASHBOARD** in Bluemix. Click **ADD-ONS**, then select **+Connect an Add-On** from the exposed menu. Scroll down to the DevOps section, and select **Track and Plan**. Scroll up, and notice that the Track and Plan add-on appears in the **ADD-ONS** list.

Click Track and Plan and confirm that your project is listed. Now, go back to DevOps, and click **TRACK & PLAN**. You can now start adding your project plan.
 
 ---
 
 ##A Final Note

If you've made it to the end, you've seen Track and Plan's flexibilty and functionality. Remember that you can use Track and Plan to plan any size and complexity of project. The different views and filters let you keep track of a large amount of data.

Thanks for following along. And tell us what you think. What did we do well? What can we do better? What can we do better? Post your comments to the [IBM DevOps Services forum][18]
or send an [email][19].
 	
[1]: hub.jazz.net/tutorials/jazzeditorjava (IBM DevOps Services Glossary)
[2]: /tutorials/trackplan/images/mystufflanding.gif
[3]: https://ace.stage1.ng.bluemix.net/#/pricing (Bluemix Pricing)
[4]: /tutorials/trackplan/images/newprojectselection.gif
[5]: /tutorials/trackplan/images/wiicons.gif

[7]: /tutorials/trackplan/images/appendeddefect.gif
[8]: /tutorials/trackplan/images/workitemeditor.gif
[9]: /tutorials/trackplan/images/attributechange.gif
[10]: /tutorials/trackplan/images/unrankedbacklog.gif
[11]: /tutorials/trackplan/images/rankedlist.gif
[12]: /tutorials/trackplan/images/estimateunassigned.gif
[13]: /tutorials/trackplan/images/editsprints.gif
[14]: /tutorials/trackplan/images/statusnew.gif
[15]: https://hub.jazz.net/tutorials/jazzeditor
[16]: https://hub.jazz.net/tutorials/jazzeditorjava
[17]: **I need the tutorials landing page link.**
[18]: https://www.ibmdw.net/answers?community=jazzhub (DevOps Services forum)
[19]: mailto:hub%40jazz.net