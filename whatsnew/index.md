# What's New

## Aug 28, 2014

# General enhancements

## Enhance your development experience in Bluemix with our Track & Plan and Delivery Pipeline Add-Ons

Our BUILD & DEPLOY and TRACK & PLAN features are now Bluemix Add-Ons to provide 
for a better integrated Bluemix experience.

The Track & Plan Add-On provides a listing of your IDS projects and their member count, 
visibility, and whether or not the TRACK & PLAN capability is enabled. 
From the Bluemix Add-On, you can quickly and easily create a new work item for any of your listed 
DevOps Services projects or navigate to your planning tools. 

>	![Track & Plan dashboard](/whatsnew/images/trackplan.png)


The Delivery Pipeline Add-On provides a listing of your 
DevOps Services projects and the state (SIMPLE, ADVANCED, OFF) of BUILD & DEPLOY use. 
From the Bluemix Add-On, you can quickly check the status of your builds, deployed app, and 
most recent deployments, or easily navigate to your most recent build logs or deployment details.

>	![Delivery Pipeline](/whatsnew/images/deliverypipeline.png)


You will be required to configure these Add-Ons if your project exceeds free TRACK & PLAN or BUILD & DEPLOY usage. 
Learn more about Bluemix pricing [here](https://hub.jazz.net/learn/cost). 

# Web IDE enhancements

## From Many to One

You can now work with Git from a single page. The current Git page looks like this (with sections collapsed):


>	![Git repository page](/whatsnew/images/orion-git-repo.png)


Let's take a look at what's in each of these sections. 

### Repo Header

At the very top of the page, there is name of the repo along with buttons that perform repo-level actions:

* **Apply Patch** shows a dialog so you can select the URL or file that contains the patch
* **Pull** performs a pull on the repo (fetch + rebase)
* **Delete** deletes this repo


### Changed Files

This section replaces the Git Status page. Changed Files shows you the current state of your working directory. With no files changed, the section looks like this:

.	![Git repo changed files](/whatsnew/images/orion-git-repo-changed-files.png)

The top of the section contains 2 buttons:

* **Discard** discards any changes made to selected files and reverts the files to their previous committed state.
* **Commit** commits the selected files with the messaged entered in the commit message box.

Next is the commit message box where you type your commit message. Notice the 2 checkboxes. **Amend Previous Commit** toggles to amend the previous commit (the previous message is fetched and displayed in the message box). **Prepare for Gerrit** adds a `ChangeId` to the commit message.

When files are changed, they show in a table under the commit message box:

>	![Git repo changed file selection](/whatsnew/images/orion-git-repo-changed-file-selection.png)

You can expand the files to reveal the changes made:

>	![Git repo changes revealed](/whatsnew/images/orion-git-repo-changes-revealed.png)

You can also view the differences side by side or open a compare editor to view the differences.

You can select the files to include in the commit by using the checkboxes (or the select all checkbox if you want to include all files). As you select files, a number counter at the top of the table changes to match your selected file count.

Once you have selected your files (and typed in a commit message) you can click **Commit** to commit them (or **Discard** to discard the changes made).

When you have files selected, a Show Patch link showns on the same line with the Commit and Discard buttons. This creates a patch for you out of the files that you have selected.


>	![Git repo commit](/whatsnew/images/orion-git-repo-commit.png)

###Commits

The commits section has new sub-sections.

>	![Git repo commits section](/whatsnew/images/orion-git-repo-commits-section.png)

* **Outgoing** lists all of the commits that were not pushed to the remote repo

* **Incoming** lists all of the commits that were not merged into the local repo

* **History** lists all of the commits that the local branch has in common with the remote branch

Let's see what happens, when a change is committed:

>	![Git repo commit changed file](/whatsnew/images/orion-git-repo-commit-changed-file.png)


The commit shows in the **Outgoing** section. There is a new **Undo** button so you can undo the commit and restore changed files back into your working directory (a soft reset).

Before pushing, you want to be sure that you are caught up to all changes, so you can click **Fetch** in the **Incoming** section to fetch the latest changes. All of the changes that were not merged show and you can accept them by clicking **Rebase** or **Merge**.

>	![Git repo commit fetch](/whatsnew/images/orion-git-repo-commit-fetch.png)


The accepted changes now show up in the **History** section. If you have lots of entries you can scroll down to view the the history, or click **More commits for <Branch>** to load more entries.

Once you are all up to date with the remote branch, you can push your changes.

There is also a new button **Sync**, which is a combination of Fetch, Rebase and Push functions.

### Changes in a Commit

Expanding any commit in the history shows the changed files (this is true for any place a commit is shown on the page):

>	![Git repo commit history](/whatsnew/images/orion-repo-commit-history.png)


### Branches and Tags

The branches and tags sections were merged into one section as well. There are top level items for local branches, remotes and tags. The 2 buttons in this section are:

* **New Remote** which opens a dialog to add a new remote
* **New Branch** which opens a dialog to create a new branch

>	![Git repo branches and tags](/whatsnew/images/orion-git-repo-branches-tags.png)

If you expand the local item, you can see all of the local branches that you have for the current repo. You can check a branch out from here.

>	![Git repo checkout branch](/whatsnew/images/orion-git-repo-checkout-branch.png)

If you expand the branch, you can see the log for that branch along with all the allowable actions next to each commit.

>	![Git repo expand branch](/whatsnew/images/orion-git-repo-expand-branch.png)

Each remote can be expanded to show all of its remote branches along with applicable actions for each entry.

You can see the log for a remote branch by expanding it.

The tags section follows the same pattern. When you expand the top level item, you are presented with the list of tags along with all the available actions for that tag.

 
### Configuration

The configuration section is now shown as a table.


>	![Git repo configuration section](/whatsnew/images/orion-git-repo-config-section.png)


## June 27, 2014

# Build and Deploy to IBM Bluemix

## Simple application deployment to IBM Bluemix for Jazz SCM projects

You can now set up Simple auto-deployment of your IBM&reg; Bluemix&trade; application for
a Jazz&trade; SCM project. 
If you selected the **Deploy to Bluemix** option when 
you created your Jazz SCM project, or choose this option in Project Settings,
you can select the Simple option under Build & Deploy.
When Simple is turned on, any changes delivered to the configured
Jazz SCM stream triggers a push 
of the application to Bluemix.

# General enhancements

## More options when forking a project

When you fork a project from the Web IDE, you can now select if your project is public or private, if
you would like to add features for Scrum
development, and if you would like to deploy your application to Bluemix. The options to make it private 
and deploy to Bluemix can be changed in Project Settings after your project is created.

>	![fork project settings](/whatsnew/images/jh-forkproj-settings.png)

## May 23rd, 2014

# Improved Track & Plan

## Agile tracking and planning

The new Track & Plan Beta makes viewing, editing, and planning tasks fast and easy. 
Track work for you and your team, quickly create new defects and check what's incoming. 
Also, groom your backlog and plan work for future sprints.

![quick planner][1]


# Web IDE enhancements

## Live preview of Markdown edits

When you select a Markdown file for editing, 
you will now see a side-by-side live preview of the rendered HTML. 
Syntax highlighting is now available as well!

![live markdown editing][2]

Check out this video about using live Markdown editing. 

<iframe width="640" height="390" src="//www.youtube.com/v/6FbZdz8561Y" frameborder="0" allowfullscreen></iframe>

## Better file sharing

### Convenient access to binary downloads

If your project contains binary data such as ZIP, JAR, or PDF files, you can now easily download those files from the project overview page.


![downloadable binaries][3]

---
## April 24, 2014

# General enhancements

## We are now IBM DevOps Services

We've got a new name! [Read more][4] about the name change and what's to come.

## Support for IBM ids

You can now sign in with your IBM id to get a more seamless experience across the IBM network.

![IBM ids][5]	

## Now running Rational Team Concert 4.0.6

We are running [Rational&reg; Team Concert 4.0.6][6] for tracking and planning, and Jazz source control. If you'd like to learn more, check out [what's new][7] for Rational Team Concert.


# Build and deploy to Bluemix

## Simple application deployment configuration

We've created a dialog that provides more control over **Simple** application deployment.

> ![Application Deployment Configuration][8]

	
## Automatic build of source code

You can now configure a build engine to compile your source within Git and Jazz source code repositories. If you select the Advanced option under Build & Deploy, you will be able to configure Ant builds, Grunt builds and automated unit tests. Once configured, builds will be automatically triggered when source code changes are contributed. 

![Automatic Build of Source Code][9]


## Automatic deployment of built applications

You now have the option to configure a Deployer to deploy built packages to Bluemix. Once you have a successfully configured Builder, select Deployer to configure your deployment options for your application. Once configured, any successful build will trigger a push of the Application to Bluemix. 

![Automatic deployments of built applications][10]


## Track changes, build artifacts, and test completion

Leveraging the Advanced Build & Deploy you can now drill in to your build to view build logs, view work items included in a build, download the artifacts that were produced from the build, and view the test execution. 

![Track changes, build artifacts, and test completion][11]


## Select builds for deployment

You can select any build to deploy to your Bluemix space with the click of a button. To deploy a previous build, expand the desired build and select your space to deploy to. 

![Select builds for deployment][12]


## View your deployment history

You can now view the history of Application deployments to your Bluemix space. Just click the History button from the advanced Build & Deploy page, and then click the Space link. 

![View your deployment history][13]
	

## Direct access to your Bluemix application

View your active deployment, with information directly from your Bluemix application. Access the application URL, and drill directly into your Bluemix application dashboard. 

![Direct access to your Bluemix application][14]
	

# Web IDE enhancements

## Easier searching within folders

A new Scope menu at the top of the page lets you select folders to search. The scope can be cleared by deleting the scope tag that is created when you select a folder.

![Scope Search][15]
 	

## Cloud Foundry deployment improvements

The Web IDE now supports deploying Cloud Foundry applications to multiple organizations and spaces. When deploy is triggered the first time, you will see a dialog to choose your target organization and space.

![Manual Deploy Dialog][16]
 
The next time you click Deploy, the last saved deployment is triggered. 
To deploy the app to a different target, choose **Deploy As > Deploy application from Web IDE to Bluemix**.

![Deploy As Dialog][17]
 

## Cloud Foundry v6 manifest support

The Web IDE now also supports deploying Cloud Foundry v6 service definitions. For example:

	applications:
	- name: SampleAppCFv2
	host: sampleAppCFv2Route
	memory: 128M
	instances: 1
	path: .
	command: node app.js
	services:
	- mysql-test_123

The new manifest attributes timeout and 
no-route are also now supported. 
Use the timeout attribute to give your application 
more time to start, up to 180 seconds. 
Use `no-route: true`, if your application should not be assigned routes.

## Additional syntax highlighting

The Web IDE now provides syntax highlighting for C program (.c), C header (.h), C++ (.cpp) and Arduino (.pde/.ino) files.

![Additional Syntax Highlighting][18]
 	

## JavaScript tooling inside HTML script blocks

Much of the JavaScript tooling support is now available while working in the HTML editor. Linting support will now run on JavaScript code inside of &lt;script&gt; tags. "Show occurrences" will function when variables and functions are selected inside your scripts.

![HTML JavaScript Linting][19]


## JavaScript validation overhaul

The validation/linting support for JavaScript, built on ESLint, has been given an overhaul with new rules, an updated engine and more user flexibility. The validator will scan your JavaScript files (as well as HTML &lt;script&gt; tags) and add errors or warnings to the margin of the editor. Hovering provides a more detailed explanation of the issue.

You can now customize the warnings you see on the validation settings page. Each validation rule can be set to error, warning or ignore. In addition, seven new validation rules have been added to capture more varieties of coding errors.

![Validation Settings Page][20]
 	

## Scoped code templates

When activating content assist (Ctrl+Space) the JavaScript tooling support provides many code templates for common code patterns and common library usage. Previously the entire template list would be made available to the content assist proposal list, only being filtered by the characters typed. Now, the location you are in is used to scope the proposals so that only applicable code patterns are provided.

![Unscoped and Scoped Templates][21]
 	

## Esprima updated

The Esprima parsing library that underpins much of the JavaScript tooling support has been updated to 1.1.0-dev.

# Manage code changes better

##Link work items to your Git commits

Add a work-item keyword and number to your Git commit 
message to link to a work item in a Git project hosted 
at DevOps Services. For example, 
the commit comment `Implements story 32` links to 
the referenced work item, which you can see in your 
project. The format for the comment is work item 
&lt;keyword&gt; &lt;number&gt;, where the keyword can be: 
`adoption item` , `bug` , `defect`, `epic`, `impediment`, `item`, `retrospective`, `story`, `task`, `track build item`, `work item`.

![Git Comment with Link to Task Work Item][22]

# Improved project management

## Project members page

We added a page to each project where project owners can manage project membership all in one place. Go to a project that you own, and click the Members tab to try it out.

![Project Member Page][23]
 
	
## Toggle project visibility between public and private

Project owners can now change the visibility of their projects from public to private and back. To access this feature, click the Settings button within your project, and then click Options.

![Toggle Project Visibility between Public and Private][24]
	

## Project ownership transfer

Project owners can transfer ownership of the project to any existing project member. The project owner retains membership of the project after the transfer completes. To access this feature, click the Settings button within your project, and then click **Change Owner**.

![Project Ownership Transfer][25]


---
## February 20, 2014

# Quicker project creation

We know you've been wanting this one! We've shaved down the time it takes to create a project so that each new project should now display within a few seconds after you click the **Create** button on the project creation page.

![Successful Project Creation][26]
 

# Convenient views into the project code

The redesigned project home page allows you to see the code, even when you're not logged in. Use the built-in navigator and file viewer to browse files; whether they're stored in Jazz SCM, a Git repository, or a repository at GitHub. Also, the README.md file displays prominently so that you can easily read what developers have to say about using the code.

![New design for project home][27]
 
 
# Git hosting

Prefer Git for source control? Create a Git-hosted project from our improved project creation page.

![Git hosting][28]
 

# For cloning: an easy way to copy the Git URL

If you want to clone your Git repo using a client other than the Web IDE, you'll need the Git URL. We give you a convenient way to copy the URL from the project home page.

![Git URL copy][29]
  

# Project settings page

You can update your project's information or change options - all from the new project settings page. Try it out by clicking the Settings button within your project.

![Settings page][30]
 	

# A new welcome page for My Stuff

The welcome page for My Stuff has been redesigned to better help you get started. Click to start a new project, or to explore existing projects that you can fork. Also, learn more about deploying your app to Bluemix.

![My Stuff welcome page][31]
 


# New navigation features in the Web IDE

Menu items and a navigation bar have been added, and you can hide the navigation bar if you want to focus on coding. Context menus provide a familiar experience for accessing common commands, and keyboard shortcuts now display along side the menu items.

![Orion menus][32]
 
 

# Deployment options from the Web IDE

Click **Deploy** to manually push a new application to Bluemix. This type of deployment uses the contents of the manifest.yml file, and your sign in credentials. If you're editing a file you can click **Deploy As** to re-deploy to an existing application name.

![Orion deploy options][33]
 
	

# Auto-Deploying applications to Bluemix

In addition to manually deploying your applications from within the Web IDE you can also setup Auto-Deploy of your Bluemix application. If you selected the **Deploy to Bluemix** option when creating your Git-hosted project you'll find an Auto-Deployment section in the Project overview page. When this is enabled, any push to the git repository for this project will trigger a push of the Application to Bluemix using the contents of the selected branch.

![Automatic deployment][34]
 


# JavaScript development and code assist

The Web IDE has new capabilities for JavaScript development and code assist. Just add a small line in your JavaScript file /* jshint node:true */ to have access to content assist for common node modules plus some of the node services at Bluemix including MongoDB and Redis. Also, there is a growing list of Templates to help you get started with services such as MongoDB.

![Orion capabilities][35]
	
# Easier handling of multiple invitations

You can now accept multiple project invitations without having to leave My Stuff. To see if you have pending invitations, go to My Stuff and click View Invitations.

![Inline project invitations][36]
 
 
---
### January 5, 2014

# Rational Team Concert 4.0.5

We are now running [Rational Team Concert 4.0.5][37], which comes with [lots of new features][38]\!

# Connect to projects from the Eclipse Client

In the [Rational Team Concert 4.0.5][39] client, there is a new ***Connect to JazzHub*** feature in the Team Artifacts view.

![Connect from eclipse][40]

# Mark Occurrences for JavaScript Files

The Web IDE now supports Mark Occurrences for JavaScript files. You can enable this feature through the Tools Menu > Settings and then within the Editor settings for Language Tools.

![Mark occurrences][41]
 
# Outline view for JavaScript Files

There's also a new outliner for JavaScript files that you can change to using the View Changer.

![JavaScript Outline view][42]

# Preview for Markdown Files

If you're editing a Markdown file, you can display the rendered version by toggling the visible editor on the right hand side.

![Markdown viewer][43]

# Decline to Join a Project

Received an invitation to join a project but don't have the time to contribute? You can now politely decline.

![Invite decline][44]

# Cancel a Project Invitation

Invited someone to join your project by mistake? You can now rescind that invitation and the user will not be able to join.

![Invite cancel][45]

---
## November 3, 2013

# GitHub Integration

Already have a GitHub repository? Now you can link to your existing branch when creating a new project. We also support linking commits to work items.

![Github integration][46]

# My Stuff

We redesigned our home page to include the stuff that's important to you. This new My Stuff view gives you quick access to all of your projects' tasks and code, as well as feeds for invitations and requests. To try it out, visit our home page and sign in.

![My stuff page][47]

# Project Delete and Rename

You can now delete or rename projects, right from your project page.

![Project rename before][48]

![Project rename after][49]

# README.md

Want to describe and document your code? Create a README.md file in any source folder. These Markdown pages now display in the file browser.

![Readme][50]

# Code Editor Settings

The code editor now includes a new settings window with options for fine-tuning JSLint, turning on faster auto-saving and more.

![Auto save options][51]

# Easier Coding

New to the editor, block comment creation and auto-indent are recent enhancements.

# Improved Work Item Editor

Can't remember a work item? Our work item editor now includes Eclipse-style content-assist and linking as-you-type.

![Rich work item editor][52]

# Behind the Scenes

We've also been working behind the scenes to improve performance and streamline your user experience.

Don't forget to let us know how we're doing by [reporting a bug][53] or [sharing an idea][54].

Cheers!

&copy; Copyright IBM Corporation 2013, 2014.


[1]: /whatsnew/images/quick-planner2.png
[2]: /whatsnew/images/live-markdown-editing.png
[3]: /whatsnew/images/downloadable-binaries.png
[4]: https://jazz.net/blog/index.php/2014/04/15/jazzhub-is-now-ibm-devops-services/
[5]: /whatsnew/images/ibm-ids.png
[6]: https://jazz.net/blog/index.php/2014/02/28/off-and-running-in-2014-announcing-clm-4-0-6/
[7]: https://jazz.net/products/rational-team-concert/whatsnew/
[8]: /whatsnew/images/configure-application-deployment.png
[9]: /whatsnew/images/automatic-build-source-code.png
[10]: /whatsnew/images/automatic-deployment-built-applications.png
[11]: /whatsnew/images/track-changes-deploy.png
[12]: /whatsnew/images/select-builds-deployment.png
[13]: /whatsnew/images/deployment-history.png
[14]: /whatsnew/images/drill-in-bluemix.png
[15]: /whatsnew/images/scope-search.png
[16]: /whatsnew/images/manual-deploy-dialog.png
[17]: /whatsnew/images/deploy-as.png
[18]: /whatsnew/images/additional-syntax-6.png
[19]: /whatsnew/images/html-javascript-linting.png
[20]: /whatsnew/images/validation-settings-page.png
[21]: /whatsnew/images/unscoped-templates.png
[22]: /whatsnew/images/commit-task-git.png
[23]: /whatsnew/images/project-member-tab.png
[24]: /whatsnew/images/private-project-setting.png
[25]: /whatsnew/images/change-owner.png
[26]: /whatsnew/images/SuccessfulProjectCreation.png
[27]: /whatsnew/images/new-project-details.png
[28]: /whatsnew/images/git-hosting.png
[29]: /whatsnew/images/copy-git-url.png
[30]: /whatsnew/images/settings-page.png
[31]: /whatsnew/images/mystuff-gettingstarted.png
[32]: /whatsnew/images/orion-menus.png
[33]: /whatsnew/images/orion-deploy-options.png
[34]: /whatsnew/images/auto-deploy.jpg
[35]: /whatsnew/images/orion-capabilites.png
[36]: /whatsnew/images/accepted-invite-inline.png
[37]: https://jazz.net/blog/index.php/2013/12/06/just-in-time-for-the-new-year-many-reasons-to-celebrate-clm-4-0-5/
[38]: https://jazz.net/products/rational-team-concert/whatsnew/
[39]: https://jazz.net/downloads/rational-team-concert/releases/4.0.5?p=news#jazzhub
[40]: /whatsnew/images/connectfromeclipse.png
[41]: /whatsnew/images/MarkOccurrences.png
[42]: /whatsnew/images/JavaScriptOutlineView.png
[43]: /whatsnew/images/MarkdownViewer.png
[44]: /whatsnew/images/invite-decline.png
[45]: /whatsnew/images/invite-cancel.png
[46]: /whatsnew/images/githubintegration.png
[47]: /whatsnew/images/mystuff.png
[48]: /whatsnew/images/project-rename-before.png
[49]: /whatsnew/images/project-rename-after.png
[50]: /whatsnew/images/readmemd-large.png
[51]: /whatsnew/images/autosaveoptions.png
[52]: /whatsnew/images/richworkitemeditor.png
[53]: https://hub.jazz.net/project/srich/JazzHub
[54]: https://hub.jazz.net/project/srich/JazzHub
