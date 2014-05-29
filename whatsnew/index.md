# What's New
## May 23rd, 2014

# Improved Track & Plan

## Agile tracking and planning

The new Track & Plan Beta makes viewing, editing, and planning tasks fast and easy. 
Track work for you and your team, quickly create new defects and check what's incoming. 
Also, groom your backlog and plan work for future sprints.

>	![quick planner](/whatsnew/images/quick-planner2.png)


# Web IDE enhancements

## Live preview of Markdown edits

When you select a Markdown file for editing, 
you will now see a side-by-side live preview of the rendered HTML. 
Syntax highlighting is now available as well!

>	![live markdown editing](/tutorials/whatsnew/images/live-markdown-editing.png)

Check out this video about using live Markdown editing. 

<iframe width="640" height="390" src="//www.youtube.com/v/6FbZdz8561Y" frameborder="0" allowfullscreen></iframe>

## Better file sharing

### Convenient access to binary downloads

If your project contains binary data such as ZIP, JAR, or PDF files, you can now easily download those files from the project overview page.


>	![downloadable binaries](/whatsnew/images/downloadable-binaries.png)

---
## April 24, 2014

# General enhancements

## We are now IBM DevOps Services

We've got a new name! [Read more](https://jazz.net/blog/index.php/2014/04/15/jazzhub-is-now-ibm-devops-services/) about the name change and what's to come.

## Support for IBM ids

You can now sign in with your IBM id to get a more seamless experience across the IBM network.

>	![IBM ids](/whatsnew/images/ibm-ids.png)	

## Now running Rational Team Concert 4.0.6

We are running [Rational Team Concert 4.0.6](https://jazz.net/blog/index.php/2014/02/28/off-and-running-in-2014-announcing-clm-4-0-6/) for tracking and planning, and Jazz source control. If you'd like to learn more, check out [what's new](https://jazz.net/products/rational-team-concert/whatsnew/) for Rational Team Concert.


# Build and deploy to BlueMix

## Simple application deployment configuration

We've created a dialog that provides more control over **Simple** application deployment.

> ![Application Deployment Configuration](/whatsnew/images/configure-application-deployment.png)

	
## Automatic build of source code

You can now configure a build engine to compile your source within Git and Jazz source code repositories. If you select the Advanced option under Build & Deploy, you will be able to configure Ant builds, Grunt builds and automated unit tests. Once configured, builds will be automatically triggered when source code changes are contributed. 

>	![Automatic Build of Source Code](/whatsnew/images/automatic-build-source-code.png)


## Automatic deployment of built applications

You now have the option to configure a Deployer to deploy built packages to BlueMix. Once you have a successfully configured Builder, select Deployer to configure your deployment options for your application. Once configured, any successful build will trigger a push of the Application to BlueMix. 

>	![Automatic deployments of built applications](/whatsnew/images/automatic-deployment-built-applications.png)


## Track changes, build artifacts, and test completion

Leveraging the Advanced Build & Deploy you can now drill in to your build to view build logs, view work items included in a build, download the artifacts that were produced from the build, and view the test execution. 

>	![Track changes, build artifacts, and test completion](/whatsnew/images/track-changes-deploy.png)


## Select builds for deployment

You can select any build to deploy to your BlueMix space with the click of a button. To deploy a previous build, expand the desired build and select your space to deploy to. 

>	![Select builds for deployment](/whatsnew/images/select-builds-deployment.png)


## View your deployment history

You can now view the history of Application deployments to your BlueMix space. Just click the History button from the advanced Build & Deploy page, and then click the Space link. 

>	![View your deployment history](/whatsnew/images/deployment-history.png)
	

## Direct access to your BlueMix application

View your active deployment, with information directly from your BlueMix application. Access the application URL, and drill directly into your BlueMix application dashboard. 

>	![Direct access to your BlueMix application](/whatsnew/images/drill-in-bluemix.png)
	

# Web IDE enhancements

## Easier searching within folders

A new Scope menu at the top of the page lets you select folders to search. The scope can be cleared by deleting the scope tag that is created when you select a folder.

>	![Scope Search](/whatsnew/images/scope-search.png)
 	

## Cloud Foundry deployment improvements

The Web IDE now supports deploying Cloud Foundry applications to multiple organizations and spaces. When deploy is triggered the first time, you will see a dialog to choose your target organization and space.

>	![Manual Deploy Dialog](/whatsnew/images/manual-deploy-dialog.png)
 
The next time you click Deploy, the last saved deployment is triggered. 
To deploy the app to a different target, choose **Deploy As > Deploy application from Web IDE to Bluemix**.

>	![Deploy As Dialog](/whatsnew/images/deploy-as.png)
 

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

>	![Additional Syntax Highlighting](/whatsnew/images/additional-syntax-6.png)
 	

## JavaScript tooling inside HTML script blocks

Much of the JavaScript tooling support is now available while working in the HTML editor. Linting support will now run on JavaScript code inside of &lt;script&gt; tags. "Show occurrences" will function when variables and functions are selected inside your scripts.

>	![HTML JavaScript Linting](/whatsnew/images/html-javascript-linting.png)


## JavaScript validation overhaul

The validation/linting support for JavaScript, built on ESLint, has been given an overhaul with new rules, an updated engine and more user flexibility. The validator will scan your JavaScript files (as well as HTML &lt;script&gt; tags) and add errors or warnings to the margin of the editor. Hovering provides a more detailed explanation of the issue.

You can now customize the warnings you see on the validation settings page. Each validation rule can be set to error, warning or ignore. In addition, seven new validation rules have been added to capture more varieties of coding errors.

>	![Validation Settings Page](/whatsnew/images/validation-settings-page.png)
 	

## Scoped code templates

When activating content assist (Ctrl+Space) the JavaScript tooling support provides many code templates for common code patterns and common library usage. Previously the entire template list would be made available to the content assist proposal list, only being filtered by the characters typed. Now, the location you are in is used to scope the proposals so that only applicable code patterns are provided.

>	![Unscoped and Scoped Templates](/whatsnew/images/unscoped-templates.png)
 	

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

>	![Git Comment with Link to Task Work Item](/whatsnew/images/commit-task-git.png)
	
# Improved project management

## Project members page

We added a page to each project where project owners can manage project membership all in one place. Go to a project that you own, and click the Members tab to try it out.

>	![Project Member Page](/whatsnew/images/project-member-tab.png)
 
	
## Toggle project visibility between public and private

Project owners can now change the visibility of their projects from public to private and back. To access this feature, click the Settings button within your project, and then click Options.

>	![Toggle Project Visibility between Public and Private](/whatsnew/images/private-project-setting.png)
	

## Project ownership transfer

Project owners can transfer ownership of the project to any existing project member. The project owner retains membership of the project after the transfer completes. To access this feature, click the Settings button within your project, and then click **Change Owner**.

>	![Project Ownership Transfer](/whatsnew/images/change-owner.png)


---
## February 20, 2014

# Quicker project creation

We know you've been wanting this one! We've shaved down the time it takes to create a project so that each new project should now display within a few seconds after you click the **Create** button on the project creation page.

>	![Successful Project Creation](/whatsnew/images/SuccessfulProjectCreation.png)
 

# Convenient views into the project code

The redesigned project home page allows you to see the code, even when you're not logged in. Use the built-in navigator and file viewer to browse files; whether they're stored in Jazz SCM, a Git repository, or a repository at GitHub. Also, the README.md file displays prominently so that you can easily read what developers have to say about using the code.

>	![New design for project home](/whatsnew/images/new-project-details.png)
 
 
# Git hosting

Prefer Git for source control? Create a Git-hosted project from our improved project creation page.

>	![Git hosting](/whatsnew/images/git-hosting.png)
 

# For cloning: an easy way to copy the Git URL

If you want to clone your Git repo using a client other than the Web IDE, you'll need the Git URL. We give you a convenient way to copy the URL from the project home page.

>	![Git URL copy](/whatsnew/images/copy-git-url.png)
  

# Project settings page

You can update your project's information or change options - all from the new project settings page. Try it out by clicking the Settings button within your project.

>	![Settings page](/whatsnew/images/settings-page.png)
 	

# A new welcome page for My Stuff

The welcome page for My Stuff has been redesigned to better help you get started. Click to start a new project, or to explore existing projects that you can fork. Also, learn more about deploying your app to BlueMix.

>	![My Stuff welcome page](/whatsnew/images/mystuff-gettingstarted.png)
 


# New navigation features in the Web IDE

Menu items and a navigation bar have been added, and you can hide the navigation bar if you want to focus on coding. Context menus provide a familiar experience for accessing common commands, and keyboard shortcuts now display along side the menu items.

>	![Orion menus](/whatsnew/images/orion-menus.png)
 
 

# Deployment options from the Web IDE

Click **Deploy** to manually push a new application to BlueMix. This type of deployment uses the contents of the manifest.yml file, and your sign in credentials. If you're editing a file you can click **Deploy As** to re-deploy to an existing application name.

>	![Orion deploy options](/whatsnew/images/orion-deploy-options.png)
 
	

# Auto-Deploying applications to BlueMix

In addition to manually deploying your applications from within the Web IDE you can also setup Auto-Deploy of your BlueMix application. If you selected the **Deploy to BlueMix** option when creating your Git-hosted project you'll find an Auto-Deployment section in the Project overview page. When this is enabled, any push to the git repository for this project will trigger a push of the Application to BlueMix using the contents of the selected branch.

>	![Automatic deployment](/whatsnew/images/auto-deploy.jpg)
 


# JavaScript development and code assist

The Web IDE has new capabilities for JavaScript development and code assist. Just add a small line in your JavaScript file /* jshint node:true */ to have access to content assist for common node modules plus some of the node services at BlueMix including MongoDB and Redis. Also, there is a growing list of Templates to help you get started with services such as MongoDB.

>	![Orion capabilities](/whatsnew/images/orion-capabilities.png)
	
# Easier handling of multiple invitations

You can now accept multiple project invitations without having to leave My Stuff. To see if you have pending invitations, go to My Stuff and click View Invitations.

>	![Inline project invitations](/whatsnew/images/accepted-invite-inline.png)
 
 
---
### January 5, 2014

# Rational Team Concert 4.0.5

We are now running [Rational Team Concert 4.0.5](https://jazz.net/blog/index.php/2013/12/06/just-in-time-for-the-new-year-many-reasons-to-celebrate-clm-4-0-5/), which comes with [lots of new features](https://jazz.net/products/rational-team-concert/whatsnew/)!

# Connect to projects from the Eclipse Client

In the [Rational Team Concert 4.0.5](https://jazz.net/downloads/rational-team-concert/releases/4.0.5?p=news#jazzhub) client, there is a new ***Connect to JazzHub*** feature in the Team Artifacts view.

>	![Connect from eclipse](/whatsnew/images/connectfromeclipse.png)

# Mark Occurrences for JavaScript Files

The Web IDE now supports Mark Occurrences for JavaScript files. You can enable this feature through the Tools Menu > Settings and then within the Editor settings for Language Tools.

>	![Mark occurrences](/whatsnew/images/MarkOccurrences.png)
 
# Outline view for JavaScript Files

There's also a new outliner for JavaScript files that you can change to using the View Changer.

>	![JavaScript Outline view](/whatsnew/images/JavaScriptOutlineView.png)

# Preview for Markdown Files

If you're editing a Markdown file, you can display the rendered version by toggling the visible editor on the right hand side.

>	![Markdown viewer](/whatsnew/images/MarkdownViewer.png)

# Decline to Join a Project

Received an invitation to join a project but don't have the time to contribute? You can now politely decline.

>	![Invite decline](/whatsnew/images/invite-decline.png)

# Cancel a Project Invitation

Invited someone to join your project by mistake? You can now rescind that invitation and the user will not be able to join.

>	![Invite cancel](/whatsnew/images/invite-cancel.png)

---
## November 3, 2013

# GitHub Integration

Already have a GitHub repository? Now you can link to your existing branch when creating a new project. We also support linking commits to work items.

>	![Github integration](/whatsnew/images/githubintegration.png)

# My Stuff

We redesigned our home page to include the stuff that's important to you. This new My Stuff view gives you quick access to all of your projects' tasks and code, as well as feeds for invitations and requests. To try it out, visit our home page and sign in.

>	![My stuff page](/whatsnew/images/mystuff.png)

# Project Delete and Rename

You can now delete or rename projects, right from your project page.

>	![Project rename before](/whatsnew/images/project-rename-before.png)

>	![Project rename after](/whatsnew/images/project-rename-after.png)

# README.md

Want to describe and document your code? Create a README.md file in any source folder. These Markdown pages now display in the file browser.

>	![Readme](/whatsnew/images/readmemd-large.png)

# Code Editor Settings

The code editor now includes a new settings window with options for fine-tuning JSLint, turning on faster auto-saving and more.

>	![Auto save options](/whatsnew/images/autosaveoptions.png)

# Easier Coding

New to the editor, block comment creation and auto-indent are recent enhancements.

# Improved Work Item Editor

Can't remember a work item? Our work item editor now includes Eclipse-style content-assist and linking as-you-type.

>	![Rich work item editor](/whatsnew/images/richworkitemeditor.png)

# Behind the Scenes

We've also been working behind the scenes to improve performance and streamline your user experience.

Don't forget to let us know how we're doing by [reporting a bug](https://hub.jazz.net/project/srich/JazzHub) or [sharing an idea](https://hub.jazz.net/project/srich/JazzHub).

Cheers!
