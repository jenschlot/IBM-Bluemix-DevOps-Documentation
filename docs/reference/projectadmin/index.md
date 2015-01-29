# Administer a project in IBM DevOps Services 

Last modified: 29 January 2015


<<<<<<< HEAD
To administer IBM&reg; DevOps Services projects you must be a project owner or a project admin. You can only have one project owner, but you can have multiple project admins. 
=======
<<<<<<< HEAD
To administer IBM&reg; DevOps Services projects you must be a project owner or a project administrator. You can only have one project owner, but you can have multiple project administrators. 
=======
To administer IBM&reg; DevOps Services projects you must be a project owner or a project admin. You can only have one project owner, but you can have multiple project admins. 
>>>>>>> c9ed607e34ef38d65260eee844f2bb22f1ff554d
 
>>>>>>> c815263e0cccb0608bc53c97201903d0da8842b5

##Project admin privileges
<<<<<<< HEAD

Each admin has the following privileges:
* Send invitations to join the project
* Accept or decline requests to join the project
* Promote members to admins and demote admins to members
* Demote self from admin to member
=======
<<<<<<< HEAD
Each administrator has the following privileges:
* Send invitations for new members and new project admins
* Accept or decline requests to join a project
* Remove other members and admins from the project
* Promote members to admin
* Remove project admin privileges from another project admin (demote)
* Demote himself from admin to member
=======
Each admin has the following privileges:
* Send invitations to join the project
* Accept or decline requests to join the project
* Promote members to admins and demote admins to members
* Demote self from admin to member
>>>>>>> c9ed607e34ef38d65260eee844f2bb22f1ff554d
>>>>>>> c815263e0cccb0608bc53c97201903d0da8842b5
* Update the following project settings: 
<<<<<<< HEAD

	a. Change project photo and description
	
	b. Enable or disable project privacy
	
	c. Enable or disable Track & Plan
	
* Manage the following functions for Git projects:

	a. Update and delete branches and tags
	
=======

	a. Change project photo and description
	
<<<<<<< HEAD
	b. Change public and private setting
	
	c. Enable or disable Track & Plan and Build & Deploy features
	
* Configure builder and deployer on the Build & Deploy page
* Manage the following functions for Git projects:
	a. Update and delete branches and tags
=======
	b. Enable or disable project privacy
	
	c. Enable or disable Track & Plan feature
	
* Manage the following functions for Git projects:

	a. Update and delete branches and tags
	
>>>>>>> c9ed607e34ef38d65260eee844f2bb22f1ff554d
>>>>>>> c815263e0cccb0608bc53c97201903d0da8842b5
	b. Force pushes

##Project owner privileges
A project owner can do all the things that project admins can do and more. Here are the additional privileges for a project owner:
<<<<<<< HEAD
* Rename the project
* Transfer ownership of the project
* Delete the project
=======
<<<<<<< HEAD
* Rename a project
* Transfer ownership of a project
* Delete a project
* Remove the project owner from the project
>>>>>>> c815263e0cccb0608bc53c97201903d0da8842b5

----
##Managing projects

<<<<<<< HEAD
A common task for project owners and admins is managing the project's settings and members. When you sign in to DevOps Services, the MyStuff page is loaded. The REQUESTS tab on this page lists incoming requests to join projects for which you are an admin. As an admin, you can accept or reject these requests. You can also invite members to join by using the Invite Members button on the members page for these projects.
=======
A common task for project owners and admins is managing projects and members. When you sign in to DevOps Services, the My Stuff page has a REQUESTS tab, which lists incoming requests to join projects for which you are an administrator. As an administrator, you can accept or reject these requests. You can also invite members to join by using either the "Invite others to join your project" link or from the MANAGE page. 
=======
* Rename the project
* Transfer ownership of the project
* Delete the project
* Remove the project owner from the project

----
##Managing projects

A common task for project owners and admins is managing projects and members. When you sign in to DevOps Services, the My Stuff page has a REQUESTS tab, which lists incoming requests to join projects for which you are an admin. As an admin, you can accept or reject these requests. You can also invite members to join by using either the "Invite others to join your project" link or from the MANAGE page. 
>>>>>>> c9ed607e34ef38d65260eee844f2bb22f1ff554d
Note: The "Invite others to join your project" link is only available if you haven't invited any members to join yet.
>>>>>>> c815263e0cccb0608bc53c97201903d0da8842b5

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

