# Start a project in IBM DevOps Services 

Last modified: 6 January 2015

You can start an IBM&reg; DevOps Services project in several ways. If you want to start with all new code or use an existing Git repository, [start a new project](#starting_a_devops_services_project). If you want to start from a copy of the code in a DevOps Services project, [fork it](#forking_a_devops_services_project).  You can also [create a DevOps Services project from an IBM&reg; Bluemix&trade; app](#creating_a_devops_services_project_for_your_bluemix_app).

Before you create a project, [register for DevOps Services](https://hub.jazz.net). If you plan to deploy your project to IBM Bluemix, which is a cloud-based software hosting and deployment service, first you must [register for Bluemix](https://ace.ng.bluemix.net/). 

---
## Contents

 * [Starting a DevOps Services project](#starting_a_devops_services_project)
 * [Forking a DevOps Services project](#forking_a_devops_services_project)
 * [Creating a DevOps services project for your Bluemix app](#creating_a_devops_services_project_for_your_bluemix_app)

---
<a name='starting_a_devops_services_project'></a>
##Starting a DevOps Services project

1. Sign in to [DevOps Services](https://hub.jazz.net). The My Stuff page opens.

2. If this project is your first project, click the **Start coding** icon. Otherwise, click **CREATE PROJECT**.

3. Type the project name.

4. Select a repository type.  
 * If you are familiar with IBM&reg;  Rational Team Concert&trade; and want to use Jazz&trade; source control management (SCM), click the **Use Jazz SCM** icon.
 * If you are familiar with Git and want to create a hosted repository, click the **Create a Git repository** icon.  
**Note**: You can host a local Git repository on DevOps Services. First, create the new DevOps Services project and then force push the local repository to the new hosted repository.
 * If yoIf you stored your code in a GitHub repository, you can continue to use that repository. Click the **Connect to an external GitHub repository** icon and paste the repository URL into the field.

5. To control who can view your project and its code, select the **Private** check box.  
**Note**: DevOps Services supports both public and private projects. Anyone can access your public projects, but only the DevOps Services users that you invite can access your private projects.  

6. To use all the Track & Plan features, including the ability to create sprints from the project backlog of work items, select the **Add features for Scrum development** check box.  
To use the Track & Plan feature for traditional planning that uses simple tasks and iterations without a backlog, clear the check box.

7. To deploy the project code to Bluemix, select the **Deploy to Bluemix** check box.  
**Note**: Building and deploying apps can result in charges to your Bluemix billing account. For more information about pricing, see the [Bluemix pricing page](https://ace.ng.bluemix.net/#/pricing).

8. Click **CREATE**.  

---
<a name='forking_a_devops_services_project'></a>
## Forking a DevOps Services project

1. Sign in to [DevOps Services](https://hub.jazz.net).

1. Click **EXPLORE**, find the project to start from, and click its name.
![DevOps Services new user landing page][1]

1. Click **FORK PROJECT**.  
**Note**: If the **FORK PROJECT** button is not shown, click **EDIT CODE**, and then click **FORK**. 

1. In the window that opens, type your project name, review the contents of the window, and specify options as needed.  
**Note**: For more information about the options, see [Starting a DevOps Services project](#starting_a_devops_services_project).
![Options while forking project][2]

1. Click **Save**.

---
<a name='creating_a_devops_services_project_for_your_bluemix_app'></a>
##Creating a DevOps services project for your Bluemix app

1. Log in to [Bluemix][3].

1. On the Bluemix dashboard, click the app that you want to create a DevOps Services project for.

1. On the app's dashboard, click **ADD GIT**.

1. Review the message and click **CONTINUE**.

1. After the repository is created, review the new message and click **CLOSE**.

1. To access the new DevOps Services project, click **EDIT CODE**.  
**Note**: If you wrote code for your app, push your code to your project's repository.

[1]: images/projectname.png
[2]: images/newprojectwindow.png
[3]: https://ace.ng.bluemix.net/
