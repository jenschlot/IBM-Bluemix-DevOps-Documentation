# Administer a project in Bluemix DevOps Services 

Last modified: 16 April 2015

To administer IBM&reg; Bluemix&trade; DevOps Services projects, you must be a project admin or a project owner. A project can have multiple admins, but it can only have one owner. 

##Project owner privileges
Project owners can do everything that project admins and members can do. In addition, project owners can do these tasks:
* Rename the project
* Transfer ownership of the project
* Delete the project

##Project admin privileges

Project admins can do the tasks that project members can do, as well as these tasks:
* Invite others to join the project
* Accept or decline when others request to join the project
* Promote members to admins 
* Demote admins to members (including self)
* Edit Track & Plan sprints
* Update these project settings: 

	a. Change the project photo and description
	
	b. Enable or disable project privacy
	
	c. Enable or disable the Track & Plan feature
	
* Manage these functions for Git projects:

	a. Update and delete branches and tags
	
	b. Force pushes


##Project member privileges
Project members have the fewest privileges and responsibilities. They can do these tasks:  
* Add and edit work items
* Create Git branches for Git projects
* Create tags for Git projects
* Push and pull source code from the repository
* View and edit pipelines
* Add, edit, delete, and run pipeline stages or jobs

----
##Managing projects

A common task for project owners and admins is to manage the project's settings and members. When you sign in to DevOps Services, the My Projects page opens. The Requests page, you can see any requests to join projects that you administer. As an admin, you can accept or reject those requests. 

In projects that you own or administer, you can invite people to be members. On the Members page, click **INVITE MEMBERS**.

As a project owner or admin, you can also change your project settings. For example, you can add or change the project's image, modify its description, enable or disable features, and make the project public or private. If you are the project owner, you can also reassign its ownership or delete the project. To access the project settings, click the **Settings** icon.

![Project settings gear icon][7]

----
##Promoting or demoting project admins

In the past, DevOps Services projects only allowed one project admin. Now that you can have multiple admins, you can be promoted or promote others to the project admin role.

Before you can be promoted to a project admin, you must be a member of the project. Ask the project owner or a project admin to invite you to join the project and promote you to a project admin. (If you are the project creator, you already have the ability to promote others.)

To promote others to project admins, complete these steps:

1. If the people that you want to promote aren't project members, invite them. 

2. On the OVERVIEW or MEMBERS pages, click **Settings**. Note that on the MEMBERS page, you can also click **MANAGE ADMINS**, which is a shortcut to the PROJECT ADMINS page.
![Settings and manage admins buttons on the members page][4]

3. When the GENERAL page opens, click the PROJECT ADMINS page in the navigation pane.
![Project Admins page link in navigation pane][5]

4. On the PROJECT ADMINS page, select the members to promote and click **PROMOTE**.
![Promote button on the project admins page][6]

The newly promoted members are listed as project admins and an email is sent that shares the good news.  

To demote project admins to be regular project members, on the Project Admins page, select the admins whose privileges to remove and click **DEMOTE**.
![Project admin selected for demotion][8]

The former project admins are listed as members and an email is sent that notifies the former admins of the change.

[1]: images/invitemembers.png
[2]: images/projadminspage1.png
[3]: images/projectoptionspage1.png
[4]: images/SettingsIcon.png
[5]: images/ProjectAdminsNav.png
[6]: images/promotemember.png
[7]: images/projectsettings.png
[8]: images/demoteadmin.png

