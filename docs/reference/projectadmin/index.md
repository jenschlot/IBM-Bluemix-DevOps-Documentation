# Administer a project in IBM Bluemix DevOps Services 

Last modified: 10 February 2015

To administer IBM&reg; Bluemix&trade; DevOps Services projects (DevOps Services), you must be a project admin or a project owner. A project can have multiple admins, but it can only have one owner. 

##Project admin privileges

Each project admin can perform these tasks:
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

##Project owner privileges
A project owner can do everything that a project admin can do and more. Project owners can also perform these tasks:
* Rename the project
* Transfer ownership of the project
* Delete the project

----
##Managing projects

A common task for project owners and admins is to manage the project's settings and members. When you sign in to DevOps Services, the MY PROJECTS page opens. The REQUESTS tab on this page lists any incoming requests from others to join projects for which you are an admin. As an admin, you can accept or reject these requests. You can also invite members to join by using the **Invite Members** button on the member page for these projects.

As a project owner or admin, you can also change your project settings. To do so, click the **Settings** icon.

![Project settings gear icon][7]

On the project settings page, you can add or change the project image, modify the project description, make the project public or private, and enable tracking and planning options. If you are the project owner, you can reassign ownership or delete the project entirely.

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

4. On the Project Admins page, select the members to promote and click **PROMOTE**.
![Promote button on the project admins page][6]

The newly promoted members are listed as project admins and an email is sent that shares the good news.  

To demote project admins, on the Project Admins page, select the admins whose privileges to remove and click **DEMOTE**.
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

