# Administer a project in IBM DevOps Services 

Last modified: 29 January 2015


To administer IBM&reg; DevOps Services projects you must be a project owner or a project admin. You can only have one project owner, but you can have multiple project admins. 

##Project admin privileges

Each admin has the following privileges:
* Send invitations to join the project
* Accept or decline requests to join the project
* Promote members to admins and demote admins to members
* Demote self from admin to member
* Update the following project settings: 

	a. Change project photo and description
	
	b. Enable or disable project privacy
	
	c. Enable or disable Track & Plan
	
* Manage the following functions for Git projects:

	a. Update and delete branches and tags
	
	b. Force pushes

##Project owner privileges
A project owner can do all the things that project admins can do and more. Here are the additional privileges for a project owner:
* Rename the project
* Transfer ownership of the project
* Delete the project

----
##Managing projects

A common task for project owners and admins is managing the project's settings and members. When you sign in to DevOps Services, the MyStuff page is loaded. The REQUESTS tab on this page lists incoming requests to join projects for which you are an admin. As an admin, you can accept or reject these requests. You can also invite members to join by using the Invite Members button on the members page for these projects.

As a project owner or admin you can also change your project settings. To do so, click the gear icon.

![Project settings gear icon][7]

From the project settings page you can add or change the project image; modify the project description; make the project public or private; enable tracking and planning options. If you are the project owner, you can reassign ownership or delete the project entirely.

----
##Promoting or demoting project admins

In the past, DevOps Services projects only allowed one project admin. Now that you can have multiple admins, here are the steps you can take to be promoted or promote others to project admin.

You must be a member of the project before you can be promoted to project admin. Ask the project owner or a project admin to invite you to join the project and promote you to project admin. (If you are the project creator, then you already have the ability to promote others.)

To promote other project admins, complete the following steps:

1. If the people that you want to promote aren't project members, invite them. 

2. From the Overview page, click **Manage**.
![Manage button on the overview page][4]

3. On the Members page, click **MANAGE ADMINS**.
![Manage admins button on the member page][5]

4. On the Project Admins page, select the member or members that you want to promote to project admin and click **PROMOTE**.

![Promote button on the project admins page][6]

The newly promoted member's name is listed as a project admin and an email message is sent that shares the good news.  

To demote a project admin, from the Project Admins page, select the admin whose privileges you want to remove and click **DEMOTE**.
![Project admin selected for demotion][8]

The former project admin's name appears in the list of other members and an email notification is sent that notifies the user of the change.

[1]: images/invitemembers.png
[2]: images/projadminspage1.png
[3]: images/projectoptionspage1.png
[4]: images/managemembers.png
[5]: images/manageadmins.png
[6]: images/promotemember.png
[7]: images/projectsettings.png
[8]: images/demoteadmin.png

