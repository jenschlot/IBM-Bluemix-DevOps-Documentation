# Administer a project in Bluemix DevOps Services 

Last modified: 26 February 2015

To administer IBM&reg; Bluemix&trade; DevOps Services (DevOps Services) projects, you must be a project admin or a project owner. A project can have multiple admins, but it can only have one owner. 

##Project owner privileges
A project owner can do everything that a project admin and project member can do and more. Only project owners can do these tasks:
* Rename the project
* Transfer ownership of the project
* Delete the project

##Project admin privileges

Project admins have the same privileges as project members and more. Project admins can also do these tasks:
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
A project member has the fewest privileges and responsibilities, but members can accomplish these tasks:
* Add and edit work items
* Create Git branches for Git projects
* Create tags for Git projects
* Push and pull source code from the repository
* View and edit pipelines
* Add, edit, delete, and run pipeline stages or jobs

----
##Managing projects

A common task for project owners and admins is to manage the project's settings and members. When you sign in to DevOps Services, the MY PROJECTS page opens. The REQUESTS tab on this page lists any incoming requests from others to join projects for which you are an admin. As an admin, you can accept or reject these requests. 

For a project for which you are an owner or admin, you can invite new members from the MEMBERS tab of the project page by clicking the **Invite Members** button.

As a project owner or admin, you can also change your project settings. To do so, click the **Settings** icon.

![Project settings gear icon][7]

On the project settings page, on the OVERVIEW tab, you can add or change the project image and modify the project description.  On the OPTIONS tab, you can make the project public or private and enable or disable Track & Plan. If you are the project owner, you can reassign ownership or delete the project entirely.

----
##Promoting or demoting project admins

In the past, DevOps Services projects only allowed one project admin. Now that you can have multiple admins, you can be promoted or promote others to the project admin role.

Before you can be promoted to a project admin, you must be a member of the project. Ask the project owner or a project admin to invite you to join the project and promote you to a project admin. (If you are the project creator, you already have the ability to promote others.)

To promote others to project admins, complete these steps:

1. If the people that you want to promote aren't project members, invite them. 

2. On the OVERVIEW or MEMBERS page, click **Settings**. 
![Settings button on the overview page][4]

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

