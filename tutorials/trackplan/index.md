
#Getting started with tracking and planning in IBM DevOps Services

The Track & Plan Beta feature in IBM&reg; DevOps Services offers an easy way to manage any type of project by using an agile approach. After you enable the Track & Plan feature, you can start getting organized right away by creating and assigning work items for your project.

The tools in the Track & Plan feature can simplify your project planning and speed your workflow. For example, you can drag items from one project phase to another, like from your project backlog to a sprint. You can also use the keyboard shortcuts or easy access icons to quickly assign work item attributes.

With support for many project roles, you can use the Track & Plan feature for large or small teams, and you can manage complex or simple projects, too. 

To try the Track & Plan feature, follow these instructions to start a simple, public, agile project. You'll use basic story, task, and defect work items to plan a chat page for a website.

---
## Contents

* [Set up an IBM DevOps Services project](#set_up_an_IBM_devops_services_project)
* [Create your first work items](#create_your_first_work_items)
* [Create work items in the backlog](#create_work_items_in_the_backlog)
* [Triage the backlog](#triage_the_backlog)
* [Plan Sprint 1](#plan_sprint_1)
* [Work through the sprint](#work_through_the_sprint)
* [Activate Track & Plan in your IBM Bluemix project](#activate_track&plan_in_your_IBM_bluemix_project)
* [Summary](#summary)

---
<a name='set_up_an_IBM_devops_services_project'></a>
 ##Set up an IBM DevOps Services project
1. Log in to [IBM DevOps Services][1], which takes you to your My Stuff page.  
![DevOps Services new user landing page][2]

2. Start a new project by clicking the **Start coding** icon.  
**Note:** If you see a project list instead of this page, click **CREATE PROJECT**.

3. Name the project `ChatPage`.

4. Click the **Create a Git repository** icon to make a new repository for your code at the specified location.  
**Tip**: You can also manage an existing Git repository or a new Jazz SCM database.

5. Leave the **Private** check box cleared.  
**Note**: IBM DevOps Services supports both public and private projects. Anyone can access your public projects, but only the DevOps Services users you invite can access your private projects.  
**Note**: You can use the Track & Plan feature with all your public IBM DevOps Services projects at no cost. If you use the feature with private projects, a fee might apply. See the [subscription][22] details.

6. Leave the **Add features for Scrum development** check box selected. By enabling Scrum, you can create sprints from your project's backlog of work items.  
**Note**: You need to enable Scrum development to use the full Track & Plan capabilities. However, if you plan traditional projects that use simple tasks and iterations without a backlog, you would clear this check box.

7. Leave the **Deploy to Bluemix** check box cleared.  
**Tip**: IBM&reg; Bluemix&trade; is a cloud-based software hosting and deployment service. To experience Bluemix, [register][3] for access.

8. Click **CREATE** to set up your project and go to the Overview page for the ChatPage project.  
**Tip**: To include other people in your project, you click **INVITE** and enter their email addresses.
     ![New project selections][4]

---
<a name='create_your_first_work_items'></a>
 ##Create your first work items

1. Click **TRACK & PLAN**. Review and close the message that welcomes you to the Track & Plan Beta.  
**Note**: If you do not see the welcome message, you need to manually activate the Track & Plan Beta feature. Click the down arrow by **TRACK & PLAN** icon (<img src="/tutorials/trackplan/images/downarrow.gif"  align="bottom" style="display: inline; margin: 0px; border-style: none; margin-bottom: -10px;">) and click **Try the new Track & Plan Beta** to access the Settings. Select the **Try the new Track & Plan Beta** check box and click **SAVE**. Now, click **TRACK & PLAN** again.   

2. Review the My Work view. From this view, you can see all the project work items that are assigned to you. Because you're the only person working on this project, you want to assign ownership of all work items to your Jazz user ID. The fastest way to do this is to create your work items from this view.

2. Click in the **Create a Work Item** field and type a summary for the first work item: `Create a simple chat page for our site.` Press **Enter** to create the new task.  
**Note**: The default work item type is **Task** (<img src="/tutorials/trackplan/images/task.gif"  align="bottom" style="display: inline; margin: 0px; border-style: none; margin-bottom: -10px;">).

3. Now, add more parameters to your task. Use the **Priority** icon (<img src="/tutorials/trackplan/images/priority.gif"  align="bottom" style="display: inline; margin: 0px; border-style: none; margin-bottom: -10px;">) in the title bar to set the priority to **High**. 

4. Click the tag icon (<img src="/tutorials/trackplan/images/tag.gif"  align="bottom" style="display: inline; margin: 0px; border-style: none; margin-bottom: -10px;">) and type `website` in the displayed field. Press **Enter** to assign the tag.  
**Tip**: A tag can help you group related work items. For example, you can use filtering options to view only the items that have a certain tag.    
<iframe width="640" height="360" src="//www.youtube.com/embed/EvVPxazK5jU" frameborder="0" allowfullscreen></iframe>
<div align = center>Video: Adding attributes to an existing work item</div> 

5. Type a summary for the next work item: `Incoming messages are not reaching other chat participants.`

6. Now, hover over the icons under the summary.  
![Set Attributes at work item creation using these][5]  
**Note**: You use these icons to set the work item attributes. Don't worry if you aren't sure about an attribute or think one might change, because you can always change it later.

7. Use the icons to set these parameters for the work item:
 * Set the type to **Defect** (<img src="/tutorials/trackplan/images/defect.gif"  align="bottom" style="display: inline; margin: 0px; border-style: none; margin-bottom: -10px;">)
 * Set the severity (<img src="/tutorials/trackplan/images/severity.gif"  align="bottom" style="display: inline; margin: 0px; border-style: none; margin-bottom: -10px;">) to **Major**   
**Note**: You can only assign severity to defects.
 * Add a tag (<img src="/tutorials/trackplan/images/tag.gif"  align="bottom" style="display: inline; margin: 0px; border-style: none; margin-bottom: -10px;">) named `messages` 
 * Set the priority (<img src="/tutorials/trackplan/images/priority.gif"  align="bottom" style="display: inline; margin: 0px; border-style: none; margin-bottom: -10px;">) to **High**  
**Tip**: Notice the new text after your summary. When you set an attribute, the text code for that attribute is added after the summary.  
![Defect summary appended with attribute codes][7]

5. When you're finished, click **SAVE**.  
<iframe width="640" height="360" src="//www.youtube.com/embed/t5xJnL_jinc" frameborder="0" allowfullscreen></iframe>
<div align = center>Video: Adding attributes while you create a work item</div>

6. Click **Incoming Work** and evaluate your new work items. They are ranked by severity so that you know which tasks are most important. You can either send incoming work items to your backlog to be included on a sprint (<img src="/tutorials/trackplan/images/triagetobacklog.gif"  align="bottom" style="display: inline; margin: 0px; border-style: none; margin-bottom: -10px;">) or you can trash (<img src="/tutorials/trackplan/images/trash.gif"  align="bottom" style="display: inline; margin: 0px; border-style: none; margin-bottom: -10px;">) them, which marks the work item as Invalid and moves it to the TRASHED tab.

7. Click the **Triage to Backlog** icon (<img src="/tutorials/trackplan/images/triagetobacklog.gif"  align="bottom" style="display: inline; margin: 0px; border-style: none; margin-bottom: -10px;">) for each work item.

---
<a name='create_work_items_in_the_backlog'></a>
 ##Create work items in the backlog
 
You need to make a few more work items for your project.
 
1. Click **Backlog**, and then click in the **Create a Work Item** field.

2. Type a summary for the next work item: `As a user, I'd like your site to have a chat page.`  
**Tip**: Notice that the **Type** icon has changed from **Task** (<img src="/tutorials/trackplan/images/task.gif"  align="bottom" style="display: inline; margin: 0px; border-style: none; margin-bottom: -10px;">). By typing `As a user`, you automatically assigned the **Story** (<img src="/tutorials/trackplan/images/story.gif"  align="bottom" style="display: inline; margin: 0px; border-style: none; margin-bottom: -10px;">) attribute to this work item.

3. Use the icons to finish setting the attributes. Make yourself the work item's owner (<img src="/tutorials/trackplan/images/owner.gif"  align="bottom" style="display: inline; margin: 0px; border-style: none; margin-bottom: -10px;">), add a `website` tag (<img src="/tutorials/trackplan/images/tag.gif"  align="bottom" style="display: inline; margin: 0px; border-style: none; margin-bottom: -10px;">), and set the priority (<img src="/tutorials/trackplan/images/priority.gif"  align="bottom" style="display: inline; margin: 0px; border-style: none; margin-bottom: -10px;">) to **Medium**. 

4. Click **SAVE**.  
**Tip**: You can set or change attributes of existing work items in several ways. For example, you can click the summary of your story to open the work item editor.  
     ![Work item editor page][8]    
You can change or set any work item attribute from within this editor. You can change most of the attributes from the **OVERVIEW** tab. If you want to add a file, create a relationship with another work item, or add a subscriber, click **LINKS**. You can explore the other tabs later.  
**Tip**: When you share work with a team, add more details about a work item to the **OVERVIEW** tab in the **DESCRIPTION** field.

5. In the **Priority** field, change the priority to **High**. Now, click **Save** to capture your changes and click **Back to Backlog** (<img src="/tutorials/trackplan/images/backtobacklog.gif"  align="bottom" style="display: inline; margin: 0px; border-style: none; margin-bottom: -10px;">) to return to the backlog.

6. Click in the story's title field. You can modify more attributes from this drop-down menu. Click **Priority: High** icon and set the priority to **Medium**.  
     ![Attribute modification icons and dropdown][9]

7. Note the ID number of your story. For example, the story ID in the image is 1080.  
This number is unique to your project and helps you keep track of each work item. If you know the ID for a particular work item, you can easily find it by using the search function above the view list or you can add relationships to it.

8. Now, click in the **Type a work item summary** field and type `Configure a chat server using node.js.` 

9. Slowly type `*task` to assign the task type. Watch how the **Type** drop-down menu appears when you type the asterisk (\*).  
**Tip**: If you prefer to keep your hands on the keyboard, you can enter most of the attributes by typing their text code instead of using the mouse. 

10. Enter these attributes and then click **SAVE**:
 * @:*yourJazzID* 
 * \#server 
 * $high 

11. Click the **Add a child** icon (<img src="/tutorials/trackplan/images/addachild.gif"  align="bottom" style="display: inline; margin: 0px; border-style: none; margin-bottom: -10px;">) in your story's attributes. Now, type `node` into the search field and select the "Configure a chat server using node.js" task.

12. Notice that a plus sign appears beside the story. Click the plus sign to confirm that your new task is nested under your story.  
**Note**: Notice that the task remains on your ranked list. This behavior lets you see the tasks that are associated with a story, but you can still rank the tasks individually.

12. Make the "Create a simple chat page for our site" task a child of your story. Click the **Add Child** icon beside your story again, search for `website`, and select the task from the results.  
**Note**: Notice how you can search by keyword or tag.

13. You need a few more work items to complete this project. Add the following work items and attributes by using whichever method you like best. Remember that you can assign or modify attributes after you've created the work item, too.
 * As a user, I'd like to be able to log into your chat with my Facebook or Google+ account. #login $high 
 * Integrate OAuth to the chat site. *task #login #website $high
     * Make this task a child of the new story, "As a user, I'd like to be able to log into your chat with my Facebook or Google+ account."

14. Refresh your browser, expand your parent work items, and your backlog should look like it does in this image:  
     ![Unranked work items in the backlog][10]

---
<a name='triage_the_backlog'></a>
 ##Triage the backlog

Before you populate a sprint, you should rank the work items in your backlog. If you use agile management techniques with your projects, you probably use a similar process during your sprint planning meetings.

1. Collapse the parent items and notice how each work item's rank is **Not Ranked**. You can easily change this status. Drag the "Create a simple chat page for our site" task to the top of the list and see how its rank changes to 1.  
<iframe width="640" height="360" src="//www.youtube.com/embed/twr30-5wcfc" frameborder="0" allowfullscreen></iframe>
<div align = center>Video: Ranking work items in the backlog </div>

2. Rank the rest of the work items in this order:  
     ![Ranked work items in the backlog][11]

3. Now that you've ranked the work items, assign story points to the stories.  Then, click **0 pts** beside each story and select **20 pts** from the drop-down list.  
**Note**: In agile projects, story points are a team-determined scale reflecting the effort required to implement a story. Remember that you can expand each story by clicking the plus sign to review its child items.

4. Before you finish triaging your tasks, finish assigning work items owners. In the text filter field, type `@:unassigned` and press **Enter**.  
![Empty text filter field][14]

5. Click the **Owner** icon for each filtered work item and select your name from the drop-down list. After you assign your items, delete `@:unassigned` from the text filter field.  
**Tip**: If you are working with other team members, you can use this method to assign related work items to them.

6. You should create time estimates to ensure you place an appropriate number of stories on a sprint. Click to expand the "Integrate OAuth to the chat site" item's drop-down menu and select **Estimate: Unassigned** from the drop-down menu.  
**Tip**: Remember to review your story points and work item owners when creating time estimates.

7. Set the duration to 3 days and click OK.  
     ![Location of Estimate: unassigned][12]  

8. Assign 3-day estimates to your defect and remaining tasks.

---
 <a name='plan_sprint_1'></a>	
##Plan Sprint 1

1. To start creating sprints for your project, click **Sprint Planning** and then click **Create Sprints**. Use the calendars by the start and end dates to create two 2-week sprints that start on Mondays.  
**Note**: Only the project owner can create and edit sprints.  
     ![Sprint creation dialog showing two two-week sprints][13]

2. Click **OK** and you  can see lanes for your backlog and for Sprint 1. Scroll to the right to see Sprint 2.

3. Click the title bar of the "Create a simple chat page for our site" task from the backlog lane and drag it to the Sprint 1 lane. Drag the rest of the work items to Sprint 1 in ascending order by ranking.  
<iframe width="640" height="360" src="//www.youtube.com/embed/SLQVK6V3qME" frameborder="0" allowfullscreen></iframe>
<div align = center>Video: Populating a sprint</div>

---
 <a name='work_through_the_sprint'></a>
 ##Work through the sprint
 
Now that you set up your sprint you're ready to start work.

1. Click **Team's Work**. At first, you'll see all the team's work for the whole project. In this view, work items are grouped by owner, so you always know which tasks your team members own. Click **All Sprints** and select **Sprint 1** from the drop-down menu to hide items from other sprints so that you can focus on this sprint's work.  
**Tip**: This view is useful when you share work with others.

2. Click **My Work**. Because you own all the tasks and haven't started working on them, you can see them all in your Open lane.  
**Note**: If you do not see both the Open and In Progress lanes, click **Display as Lanes** (<img src="/tutorials/trackplan/images/displaylanes.gif"  align="bottom"  style="display: inline; margin: 0px; border-style: none; margin-bottom: -10px;">) to switch from the list view.

3. For the "Configure a chat server using node.js" task, click the **Status** icon (<img src="/tutorials/trackplan/images/statusnew.gif"  align="bottom" style="display: inline; margin: 0px; border-style: none; margin-bottom: -10px;">) and click **Start Working** from the pop-up menu.

4. Notice how this item moves from the Open lane to the In Progress lane.

4. Just like in the Sprint Planning view, you can drag items between lanes. Drag the "Integrate OAuth to the chat site" task to the In Progress lane.

5. As you work on your tasks that are in progress, update the number of hours spent on the task. Find the "Configure a chat server using node.js" task and click in its title bar to expand the drop-down menu. Use the **Time Spent** option to show that you've spent 16 hours on the task.

6. Find the the "Configure a chat server using node.js" task. Click its **Status** icon (<img src="/tutorials/trackplan/images/statusopen.gif"  align="bottom" style="display: inline; margin: 0px; border-style: none; margin-bottom: -10px;">) and select **Resolve** and then **Fixed** from the pop-up menu to close the task.  
**Tip**: You can complete this process from the Team's Work view, too. You might find the ability to assign hours and complete tasks useful during your daily scrum meeting.  

The Track & Plan feature makes it easy for you to track your sprint's work as you complete planned tasks. It's also easy to create and address new work items.

1. In the Open lane, click in the **Create a work item** field and make three more work items:
  * As a user, I'd like your chat site to look good on my phone. #mobile $low 
  * Test site on mobile devices and optimize Bootstrap and CSS files to improve performance. *task #mobile #website $low
  * The server handles the requests too slowly. *defect #server $high !major 

5. Go to the Incoming Work view to triage these new tasks. Use the **Triage to Backlog** icon to send all the work items to the backlog.

6. Wait. This defect seems pretty important. Click **Sprint Planning** and drag the defect from the Backlog lane into the Sprint 1 lane.  
**Tip**: If you are leading a team, you would want to triage new work items in the Incoming Work view and the Backlog view during your sprints.

---
<a name='activate_track&plan_in_your_IBM_bluemix_project'></a>
##Activate Track & Plan in your IBM Bluemix project

The best way to learn more about the IBM DevOps Services Track & Plan feature is to use it in your own projects. 

To activate Track & Plan for an IBM Bluemix project, follow these instructions.  
**Note**: If you do not have a Bluemix project, complete the [Getting Started with Bluemix and DevOps Services using Node.js][41] or [Getting Started with Bluemix and DevOps Services using Java][44].

1. Log into [Bluemix][21], which takes you to your dashboard.

2. Click the application you want to use Track & Plan with.

3. Click **CODE** (<img src="/tutorials/trackplan/images/code.gif"  align="bottom" style="display: inline; margin: 0px; border-style: none; margin-bottom: -10px;">) to launch DevOps Services in a new browser tab.  
**Note**: If you do not see the **CODE** button, you need to create a DevOps Services project for your app. Click **ADD GIT**. Review the contents of the pop-up, then click **CONTINUE** and **CLOSE** to create a linked Git repository and DevOps Services project for your application.

4. From DevOps Services, click the **SETTINGS** icon (<img src="/tutorials/trackplan/images/gearicon.gif"  align="bottom" style="display: inline; margin: 0px; border-style: none; margin-bottom: -10px;">). Click **OPTIONS** and select the **Enable Track & Plan** check box. Click **SAVE**.

5. Click **BETA FEATURES** and select the **Try the new Track & Plan Beta** check box. Click **SAVE**.

6. Return to your Bluemix tab and click **DASHBOARD**.

7. Expand **ADD-ONS** and confirm that Track & Plan is not listed.  
**Note**: If you see Track & Plan, skip the next two steps.

7. Click **Connect an Add-On** (<img src="/tutorials/trackplan/images/connectaddon.gif"  align="bottom" style="display: inline; margin: 0px; border-style: none; margin-bottom: -10px;">). Locate the DevOps section on the new page and click **Track & Plan**.  
     ![IBM DevOps Services Track & Plan add-on tile][20]

8. After you review the contents of the pop-up, click **CREATE**.

9. Notice that the Track & Plan add-on is listed. Click **Track & Plan** and confirm that your project's add-on state is ON.

10. Return to your DevOps services browser tab and click **TRACK & PLAN**. You're ready to begin planning.

---
 <a name='summary'></a> 
 ##Summary

You should now have a good overview of the Track & Plan feature and see that you can use it to track any type of project, no matter how small or complex.

Tell us what you think. What did we do well? What can we do better? Post your comments to the [IBM DevOps Services forum][18]
or send an [email][19].

To learn more about IBM Bluemix and IBM DevOps Services capabilities, see these tutorials:

* [Getting Started with Bluemix and DevOps Services using Node.js][41]
* [Getting Started with Bluemix and DevOps Services using Java][44]
* [Setting up Eclipse, Git, and Rational Team Concert Desktop Clients to access DevOps Services][42]
* [Developing Bluemix applications in Node.js with the DevOps Services Web IDE][43]
* [Developing Bluemix applications in Java with Eclipse and DevOps Services][40]

&copy; Copyright IBM Corporation 2013, 2014.

[1]: https://hub.jazz.net
[2]: /tutorials/trackplan/images/mystufflanding.gif
[3]: https://bluemix.net/ (Register for Bluemix)
[4]: /tutorials/trackplan/images/newprojectselection.gif
[5]: /tutorials/trackplan/images/wiicons.gif
[6]: https://bluemix.net/#/pricing/cloudOEPaneId=pricing 
[7]: /tutorials/trackplan/images/appendeddefect.gif
[8]: /tutorials/trackplan/images/workitemeditor.gif
[9]: /tutorials/trackplan/images/attributechange.gif
[10]: /tutorials/trackplan/images/unrankedbacklog.gif
[11]: /tutorials/trackplan/images/rankedlist.gif
[12]: /tutorials/trackplan/images/estimateunassigned.gif
[13]: /tutorials/trackplan/images/editsprints.gif
[14]: /tutorials/trackplan/images/querybar.gif
[15]: https://hub.jazz.net/tutorials/jazzeditor
[16]: https://hub.jazz.net/tutorials/jazzeditorjava
[17]: https://bluemix.net/
[18]: https://www.ibmdw.net/answers?community=jazzhub (DevOps Services forum)
[19]: mailto:hub%40jazz.net
[20]: /tutorials/trackplan/images/taptile.gif 
[21]: https://bluemix.net/ (Log into Bluemix)
[22]: https://ace.ng.bluemix.net/#/pricing
[40]: /tutorials/jazzrtc (Developing Bluemix applications in Java with Eclipse and DevOps Services)
[41]: /tutorials/jazzeditor (Getting Started with Bluemix and DevOps Services using Node.js)
[42]: /tutorials/clients (Setting up Eclipse, Git, and Rational Team Concert Desktop Clients to access DevOps Services)
[43]: /tutorials/jazzweb (Developing Bluemix applications in Node.js with the DevOps Services Web IDE)
[44]: /tutorials/jazzeditorjava (Getting Started with Bluemix and DevOps Services using Java)

