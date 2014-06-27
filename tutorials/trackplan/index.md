#Getting started with tracking and planning in IBM DevOps Services

The Track and Plan Beta feature in IBM DevOps Services offers an easy way to manage any type of project by using an agile approach. After you enable the Track and Plan feature, you can start getting organized right away by creating and assigning work items for your project.

The tools in the Track and Plan feature can simplify your project planning process and speed your workflow. For example, you can drag items from one project phase to another, like from your project backlog to a sprint. You can also use the keyboard shortcuts or easy access icons to quickly assign work item attributes.

With support for many project roles, you can use the Track and Plan feature for large or small teams, and you can manage complex or simple projects, too. 

To try the Track and Plan feature, follow these instructions to start a simple, public, agile project. You'll use basic story, task, and defect work items to plan a chat page for a website.

---

 ##Set up an IBM DevOps Services project
1. Log in to https://hub.jazz.net, which takes you to your My Stuff page. 
![DevOps Services new user landing page][2]
2. Start a new project by clicking the orange icon over **Start coding**.
**Note:** If you see a project list instead of this landing page, click CREATE PROJECT.
3. Name the project `ChatPage`.
4. Click the **Create a Git repository** icon to make a new repository for your code at the specified location.  
**Tip**: You also can use the Track and Plan feature to manage an existing Git repository or a new Jazz SCM database.
5. Leave the **Private** check box cleared.  
**Note**: IBM DevOps Services supports both public and private projects. Anyone with a DevOps Services account can access your public projects, but only the users you invite can access your private projects.  
6. Leave the **Add features for Scrum development** check box selected. By enabling Scrum, you can create sprints from your project's backlog of work items.  
**Tip**: You need to enable Scrum development to use the full Track and Plan capabilities. However, if you like to plan traditional projects using simple tasks and iterations without a backlog, you would clear this check box.
7. Leave the **Deploy to Bluemix** check box cleared.  
**Note**: IBM Bluemix is a cloud-based software hosting and deployment service. To experience Bluemix, [register][3] for access.
8. Click **CREATE** to set up your project and go to the Overview page for the ChatPage project.  
**Tip**: To include other people in your project, you click **INVITE** and enter their email addresses.
![New project selections][4]

---

 ##Create your first work items

1. Click **TRACK & PLAN**. Review and close the message welcoming you to the Track & Plan Beta.  
**Note**: If you do not see the welcome message, you need to manually activate the Track and Plan Beta feature. Click the **Gear Icon** to access the Settings. Click **Beta Features**, select the **Try the new Track & Plan Beta** check box, and click **SAVE**. Now, click **TRACK & PLAN** again. Review and close the message welcoming you to the Track & Plan Beta.   
**Note**:From this page, you can see all the project work items that are assigned to you. Because you're the only person working on this project, you want to assign ownership of all work items to your Jazz user ID. The fastest way to do this is to create your work items from this page.
2. Click in the **Create a Work Item field** and type a summary for the first work item: `Create a simple chat page for our site.` Press **Enter**, and you'll see your new task.  
**Note**: The default work item type is **Task**.
3. Now, add more parameters to your task. Use the icons in the summary block to set the priority to High. 
4. Click the tag icon and type `website` in the displayed field. Press **Enter** to assign the tag.  
**Note**: A tag can help you group related work items. You can use the Track and Plan feature's filtering options to view only the items to which you have assigned a certain tag.
5. Type a summary for the next work item: `Incoming messages are not reaching other chat participants.`
6. Now, hover over the icons under the summary.  
**Note**: You use these icons to set the work item attributes. Don't worry if you aren't sure about an attribute or think one might change: you can always change it later.
![Set Attributes at work item creation using these][5]
7. Use the icons to set these parameters for the work item:
 * Set the type to **Defect** 
 * Set the severity to **Major** 
 * Add a `messages` tag 
 * Set the priority to **High**  
**Tip**: Notice the new text after your summary. When you set an attribute, Track and Plan appends your summary with the text code for that attribute.
![Defect summary appended with attribute codes][7]
5. When you're finished, click **SAVE**.
6. Click **Incoming Work** and evaluate your new work items. They are ranked by severity so that you know which tasks are most important. You can either send incoming work items to your backlog to be included on a sprint or you can trash them, which marks the work item as Invalid and moves it to the TRASHED lane.

7. Click the **Triage to Backlog** icon for each work item.

---

 ##Create work items in the backlog
 
You need to make a few more work items for your project.
 
1. Click **Backlog**, and then click in the **Create a Work Item** field.

2. Type a summary for the next work item: `As a user, I'd like your site to have a chat page.`  
**Tip**: Notice that the **Type** icon has changed from **Task**. By typing `As a user`, you automatically assigned the **Story** attribute to this work item.

3. Use the icons to finish setting the attributes. Make yourself the work item's owner, add a `website` tag, and set the priority to **Medium**. 

4. Click **SAVE**.  
**Tip**: You can set or change attributes of existing work items in several ways. For example, you can click the summary of your story to open the work item editor. 

![Work item editor page][8]

You can change or set any work item attribute from within this editor. You can change most of the attributes from the **OVERVIEW** tab. If you want to add a reference file or add or remove a parent/child relationship or subscriber, click **LINKS**. You can explore the other tabs later.  
**Note**: When you share work with a team, add more details supporting the work item to the **DESCRIPTION** field on the **OVERVIEW** tab.

5. Use the **Priority** drop-down menu to change the priority to **High**. Now, click **Save** to capture your changes and click **< Back to Backlog** to return to the backlog.

6. Click in the story's title field. You can modify more attributes from this drop-down menu. Now, hover over the icons in your story's summary field. Click **Priority: High** and set the priority to **Medium**. 

![Attribute modification icons and dropdown][9]

7. Note the ID number of your story. For example, the story ID in the image is 1080.  
This number is unique to your project and helps you keep track of each work item. If you know the ID for a particular work item, you can easily find it by using the search function above the view list or you can add relationships to it.


8. Now, click in the **Type a work item summary** field and type `Configure a chat server using node.js.` 


9. Slowly type `\*task` to set the **Type** to task. Watch how the **Type** drop-down menu appears when you type the asterisk (\*).  
**Tip**: If you prefer to keep your hands on the keyboard, you can enter most of your initial attributes without touching the mouse. 

10. Enter these attributes and then click SAVE:

 * @:yourJazzID 
 * /#server 
 * $high 

11. Click the **Add a child** icon in your story's attributes. Now, type `node` into the search field and select the “Configure a chat server using node.js.” task. Notice that a plus sign appears beside the story. Click it and confirm that your new task is nested under your story. Notice that the task remains on your ranked list. This behavior lets you see the tasks that are associated with a story, but you can still rank the tasks individually.

12. Make the task “Create a simple chat page for our site.“ a child of your story. Click the **Add Child** icon beside your story again, search for website, and select the task from the results.  
**Note**: Notice how you can search by keyword or tag.

13. You need a few more work items to complete this project. Add the following work items and attributes using whichever method you like best. Remember that you can assign or modify attributes after you've created the work item, too.
 * As a user, I'd like to be able to log into your chat with my Facebook or Google+ account. *story #login $high 
 * Integrate OAuth to the chat site. *task #login #website $high
     * Make this task a child of the new story, “As a user, I'd like to be able to log into your chat with my Facebook or Google+ account.”

14. Refresh your browser, expand your parent work items, and your backlog should look like it does in this image:

![Unranked work items in the backlog][10]

---

 ##Triage the backlog

Before you make your sprint, you should triage the work items in your backlog. If you use agile management techniques with your projects, you probably use a similar process during your sprint planning meetings.

1. Collapse the parent items, and notice how each work item's rank is **Not Ranked**. You can easily change this status. Drag the task “Create a simple chat page for our site.“ to the top of the list and see how its rank changes to 1. 

2. Rank the rest of the work items in this order: 

![Ranked work items in the backlog][11]

3. Now that you've ranked the work items, assign story points to them. Expand each story by clicking the plus sign and review its child items. Then, click **0 pts** beside each story and select **20 pts** from the drop-down list.  
**Note**: In agile projects, story points are a team-determined scale reflecting the effort required to implement a story.

4. Before you finish triaging your tasks, finish assigning work items owners. In the **Type keyword, \*type, #tag, @:owner, $priority, !severity to filter** bar, type #. Notice how a list of your project's tags appears. Type login and press Enter.  
**Tip**: Another way to display the unassigned tasks is to enter `@:unassigned` into the query bar and press **Enter**.

5. Click the **Owner** icon for each filtered work item and select your name from the drop-down list. After you assign your items, delete `#login` from the query bar.  
**Tip**: If you are working with other team members, you can use this method to assign related work items to them.

6. Because you've assigned your story points and owners, you can create time estimates to ensure you place an appropriate number of stories on a sprint. Click to expand the “Integrate OAuth to the chat site.” item's drop-down menu and select **Estimate: Unassigned** from the drop-down menu.

7. Set the duration to 3 days and click OK.


![Location of Estimate: unassigned][12]

8. Assign 3-day estimates to your defect and remaining tasks

---
 	
##Plan Sprint 1

1. Click **Sprint Planning** and then click **CREATE SPRINTS** to start creating sprints for your project. Use the calendars by the start and end dates to create two 2-week sprints that start on Mondays.  
**Note**: Only the project owner can create and edit sprints.

     ![Sprint creation dialog showing two two-week sprints][13]

2. Click OK and you  can see lanes for your backlog and for Sprint 1. Scroll to the right to see Sprint 2.

3. Click the title bar of the “Create a simple chat page for our site” task from the backlog lane and drag it to the Sprint 1 lane. Drag the rest of the work items to Sprint 1 in ascending order by ranking.

---

 ##Work through the sprint
 
Now that you set up your sprint and know how to find the sprint data, you're ready to start work.

1. Now, click **Team's Work**. At first, you'll see all the team's work for the whole project. Here work items are grouped by owner, so you always know which tasks your team members own. Click **All Sprints** and select **Sprint 1** from the dropdown to hide items from other sprints so that you can focus on this sprint's work.  
**Note**: You will find more uses for this view when you share work with others.

2. Click **My Work**. Because you own all the tasks and haven't started working on them, you can see them all in your Open lane.  
**Note**: If you do not see both the **Open** and **In Progress lanes**, click **Display as Lanes** to switch from the list view.

3. For the “Configure a chat server using node.js“ task, click the **Status** icon and click **Start Working** from the context menu. Notice how this item moves from the Open lane to the In Progess lane.

4. Just like in Sprint Planning, you can drag and drop items between lanes. Drag and drop the “Integrate OAuth to the chat site” task to the **In Progress** lane.

5. As you work on your tasks in progress, update the number of hours spent on the task. Find the “Configure a chat server using node.js” task and click in its title bar to expand the drop-down menu. Use the **Time Spent** option to show that you've spent 16 hours on the task. 

6.  Find the the “Configure a chat server using node.js” task. Click its **Status** icon and select **Complete** from the pop-up menu to close the task.  
**Note**: You can complete this process from the Team's Work view, too. You might find the ability to assign hours and complete tasks useful during your daily scrum meeting.

The Track and Plan feature makes it easy for you to track your sprint's work as you complete planned tasks. It's also easy to create and address new work items.

1. In the Open lane, click in the **Create a work item field**, and make three more work items:
  * As a user, I'd like your chat site to look good on my phone. *story #mobile $low 
  * Test site on mobile devices and optimize Bootstrap and CSS files to improve performance. *task #mobile #website $low
  * The server handles the requests too slowly. *defect #server $high !major 

5. Go to the Incoming Work view to triage these new tasks. Use the **Triage to Backlog** icon to send all the work items to the Backlog.

6. Wait. This defect seems pretty important.

7. Click **Sprint Planning** and drag and drop the defect from the Backlog lane into the Sprint 1 lane.  
**Tip**: If you are leading a team, you would want to triage new work items in the Incoming Work and Backlog during your sprints.

---
 
 ##A Final Note

You should now have a good overview of the Track and Plan feature and see that you can use it to track any type of project, no matter how small or complex.

Tell us what you think. What did we do well? What can we do better? Post your comments to the [IBM DevOps Services forum][18]
or send an [email][19].

To learn more about IBM Bluemix and IBM DevOps Services capabilities, see these tutorials:

* [Getting Started with Bluemix and DevOps Services using Node.js][41]
* [Getting Started with Bluemix and DevOps Services using Java][44]
* [Setting up Eclipse, Git, and RTC Desktop Clients to access DevOps Services][42]
* [Developing Bluemix applications in Node.js with the DevOps Services Web IDE][43]
* [Developing Bluemix applications in Java with Eclipse and DevOps Services][40]

 	

[2]: /tutorials/trackplan/images/mystufflanding.gif
[3]: https://ace.ng.bluemix.net/ (Register for Bluemix)
[4]: /tutorials/trackplan/images/newprojectselection.gif
[5]: /tutorials/trackplan/images/wiicons.gif

[7]: /tutorials/trackplan/images/appendeddefect.gif
[8]: /tutorials/trackplan/images/workitemeditor.gif
[9]: /tutorials/trackplan/images/attributechange.gif
[10]: /tutorials/trackplan/images/unrankedbacklog.gif
[11]: /tutorials/trackplan/images/rankedlist.gif
[12]: /tutorials/trackplan/images/estimateunassigned.gif
[13]: /tutorials/trackplan/images/editsprints.gif

[15]: https://hub.jazz.net/tutorials/jazzeditor
[16]: https://hub.jazz.net/tutorials/jazzeditorjava
[17]: https://ace.ng.bluemix.net/
[18]: https://www.ibmdw.net/answers?community=jazzhub (DevOps Services forum)
[19]: mailto:hub%40jazz.net
[40]: /tutorials/jazzrtc (Developing Bluemix applications in Java with Eclipse and DevOps Services)
[41]: /tutorials/jazzeditor (Getting Started with Bluemix and DevOps Services using Node.js)
[42]: /tutorials/clients (Setting up Eclipse, Git, and RTC Desktop Clients to access DevOps Services)
[43]: /tutorials/jazzweb (Developing Bluemix applications in Node.js with the DevOps Services Web IDE)
[44]:/tutorials/jazzeditorjava (Getting Started with Bluemix and DevOps Services using Java)