[rtcWorkItemDoc]: http://www-01.ibm.com/support/knowledgecenter/SSYMRC_5.0.2/com.ibm.team.workitem.doc/topics/t_creating_work_items_web.html 

# Track & Plan reference for Bluemix DevOps Services

Last updated: 1 February 2015

## Contents
* [Creating work items](#creatingwis)
* [Searching for a work item](#searchingwis)
* [Work item states](#wistates)
* [Work item display options](#widisplay)
* [Filtering work items](#filteringwis)
* [Viewing and organizing your work items](#organizingwis)
* [Triaging work items](#triaging)
* [Planning the work for your team](#planning)
* [Reviewing the team's progress](#progress)

With the Track & Plan feature, you track work for a project through work items. For example, if you find a bug in someone's code, you can open a Defect work item and assign it to the person who owns the code. 

<a name='creatingwis'></a>
##Creating work items
You can create a work item in more than one way, and how you set up a work item depends on how you create it. For example, if you create a work item in the "My work" view, you own the work item automatically. To set the attributes, click the icons, as shown in the following image. You can also open and edit a work item's attributes by clicking the work item's summary. 

![Assigning work item attributes](images/work_item_attributes.png)

Note: Some attributes are available for only specific work item types. For example, the Severity attribute type is available for Defects only.

For more information about creating work items and defining their attributes, [see the documentation for IBM&reg; Rational Team Concert&#8482;][rtcWorkItemDoc]. 

<a name='searchingwis'></a>
##Searching for a work item
You can search for a work item by ID or keyword. As you type, the results are displayed under the search field.

![Search field](images/search.png)

<a name='wistates'></a>
##Work item states
- **Open**: The work item is not started yet. Its status is New.
- **In progress**: The work item is started. Its status is In progress.
- **Resolved**: The work item is finished. Its status is Complete or Invalid.

<a name='widisplay'></a>
##Work item display options
###List 
When you view work items in a list, each work item spans the width of the section. You can see more information by expanding it. Attributes are displayed as icons.

![List display](images/list_view.png)

###Table  
When you view work items in a table, each work item is displayed in a condensed format. Some attributes are displayed in a textual format and are arranged into columns.

![Table display](images/table_view.png)

###Lane 
When you view work items in lanes, the work items are grouped by states. Attributes are displayed as icons. You can view two states at a time. To view the third state, scroll horizontally.

![Lane display](images/lane_view.png)

<a name='filteringwis'></a>
##Filtering work items
You can filter work items based on keywords or on values for specific attribute types in the following views:
- My work
- My subscribed
- Incoming work
- Backlog
- Sprint planning
- Team's work
- All work

If you type a keyword, the work item summaries that contain that keyword are displayed. You can also filter work items based on values for specific attributes. For details, see the following table.

| Attribute filter |Example | 
|-------|-------|
|*Type  | *Defect |
|#Tag  | #conference| 
|@:Owner  | @:jasmith|
|^Category|^Development team|
|$Priority|$High|
|!Severity|!Major|

You can save custom filters and share them with your team. 
1. In the filter field, type the character for an attribute types and an attribute.
2. Click **SAVE**.
3. Name the view.
4. If you want to include the sprint in your custom view, click the check box.
5. Click **SAVE**. 
6. If you want to share the view with your team, click the arrow next to the new view in the Custom Views section, and then click **OK**.

You can delete custom filters or keep them private. Note that custom filters only return results for the current sprint and status that you reviewing.

If you want to modify a saved custom filter, you must delete it and create a new filter. 

<a name='organizingwis'></a>
##Viewing and organizing your work items

- To view work items that you own, see the "My work" view. 
- If you often use specific work items, you can mark them as your favorites by clicking their Star icons. Then, you can see all of your favorite work items in n the "My starred" view. When you click the Star icon for a work item, no one else can see that you marked it as a favorite.  
- To view all of the work items that you are subscribed to, see the "My subscribed" view.
- To view your work items sorted by their modified dates, see the "My Recent Work" view.
- To view your work item activity, see the "My activities" view. The "My Events" section lists the work items that you were mentioned in. The "My Subscriptions" section lists all of the changes that occurred in work items that you are subscribed to.



<a name='triaging'></a>
##Triaging work items
You can see new work items that team members or guests create in the "Incoming work" view. Work items are displayed in that view when they are not assigned to a sprint. As soon as they are assigned to a sprint, they are no longer displayed in the "Incoming work" view.

In the “Incoming work” view, you can triage work items in several ways: 
- To reject the work item, click the **Trash this item** icon . The work item is resolved and its status is changed to **Invalid**.
- To accept the work item and assign it to the backlog, click the **Triage to backlog** icon. Then, you can evaluate the work item against other work items in the "Sprint planning" view and assign the work item to a sprint.
- To assign the work item to a sprint, open the work item and select a value for the **Planned for** field.

![Triaging work items in the Incoming work view](images/incoming_work_attributes.png)


<a name='planning'></a>
##Planning the work for your team
In the "Sprint planning" view, you can plan sprints by dragging ranked work items between sprints. To reassign work items, drag them between the lanes.  Tip: If you keep the backlog open, you can move work items easily from the backlog to a specific sprint. You can keep the backlog open by clicking the **Pin** icon.

You can also review statistics about the sprint's progress:
- Hours worked vs. total hours estimated
- Work items completed vs. total work items
- Story points achieved vs. total story points estimated

###Ranking work items
While you plan a sprint, review the work items in the "Backlog" and "Sprint planning" views to rank the work items. Assign story points to work items and  assign them a rank by dragging work items into position.


<a name='progress'></a>
##Reviewing the team's progress
In the "Team's work" view, you can review all of the work items that are assigned to the team and the statistics for the team's progress.

You can also review these available statistics:
- Hours worked vs. total hours estimated
- Work items completed vs. total work items
- Story points achieved vs. total story points estimated

You can also review all of the work items by state in the "All work" view.

