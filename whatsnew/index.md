## What's New

### January 13, 2015

## New way to deploy from the workspace

The DEPLOY and DEPLOY as buttons for deploying to Bluemix directly from the web IDE are replaced with a new, more powerful mechanism called the ***run bar***.

![Run Bar](images/run-bar.png)

For more information, [please see where did the Deploy button go in DevOps Services?](https://developer.ibm.com/bluemix/2015/01/14/deploy-button/)


### December 17, 2014

You can now see the documentation in different languages by using the our machine translation pilot.  To display the content of a page in a different language, select the language and accept the disclaimer.
![images/translate-widget.jpg]

### December 10, 2014

The IBM&reg; DevOps Services Track & Plan feature is now generally available for all DevOps Services projects. You can use the Track & Plan feature to track your work, monitor your team’s activity, and plan sprints. 

The latest iteration of this feature includes changes that are based on feedback that people like you provided. The Track & Plan team values your continued feedback.

Here’s what's new in the Track & Plan feature:

## Easier access
You don't need to enable the new Track & Plan feature; it opens when you click **Track & Plan**.

The previous version of the Track & Plan feature is still available for a limited time. To use the previous version, click the down arrow on the **Track & Plan** button and then click **Project Dashboard**.

## Track & Plan replaces Current Work
The new Track & Plan feature replaces the Current Work feature. If you click the **Current Work** tab or use a bookmark to the Current Work page, the new Track & Plan feature opens.

## Ranking improvements
You can rank items by dragging them from the Recently Created view to the Ranked List view. The rank of the item is also displayed in the Sprint Planning view. 
![dragging work item to rank][68]

Instead of dragging an item to rank it, you can also click the rank number and edit it. 
![editing rank number][69]

## Work item count
The work item count is now displayed in each view. For views that have paged results, the count includes the work items that are not loaded yet. The count is updated as work items are added to or removed from the view and when filters are applied to the view.  
![count examples on My Work lanes and backlog][70] 

## Shortcut for setting the planned for attribute
When you use the Quick Create feature to create a work item, you can quickly set the planned for attribute by typing a tilde (~). 
![Planned for attribute shortcut][71]

## New table view
The new table view displays more work items and columns in a more condensed form than the grid view. The table view is useful when you are looking for information in a long list of work items. 
![New table view][72]

## Sprint Planning dates
The start and end dates of the sprint are now shown in the title of each lane in the Sprint Planning view. 
![Dates in Sprint Planning view][73]

## Task breakdown action is available everywhere
Previously, the task breakdown action was accessible only from the Backlog or Sprint Planning views. Now, you can access the task breakdown action from all views. For example, when you are assigned a story, you can break it into tasks without leaving the My Work view. 
![task breakdown in My Work view][74]


### November 10, 2014

In the DevOps Services web integrated development environment (IDE), you'll notice signicant changes: several new user interfaces (UIs) and more capabilities.

## Git UI

On the Git UI, you can access all major Git capabilities in a layout that is like the web IDE editor. On one page, you can view history, sync changes, create commits, and more. For complete details about the updates, [see the announcement on the Orion website](http://planetorion.org/news/2014/10/announcing-orion-7-0/).

![Image of new Git UI showing commits](images/gitcommit.png)

##Web IDE Help system

The help system is now a simple HTML5 and JavaScript page that contains overview and detail panes.

![Image of new web IDE help system](images/newidehelp.png)

##A new global search UI

To search, you no longer need to open the global search page. You can search directly from the editor. To run a global search, click **Edit -> Global Search**.

![Image of new web IDE search](images/newidesearch.png)

##Third-party libraries

 * [ESLint was updated to 0.7.2](https://github.com/eslint/eslint)
 * [Doctrine was updated to 0.5.1](https://github.com/Constellation/doctrine) 
 * [CSSLint was updated to 0.10.0](https://github.com/CSSLint/csslint)

##Language tooling

The CSS and JavaScript language tooling is improved in this release.

###Content assist

By using the JavaScript content assist, you can place proposals inside JSDoc-formatted comments and get help while you add JSDoc tags and work with parameters, type objects, and RegExp literals. For full details, [see the Orion website](http://planetorion.org/news/2014/10/orion-7-0-language-tooling-enhancements/).

###ESLint support

The web IDE has new linting rules and content assist templates and completions that you can use to create ESLint directives.

 * You can detect empty code blocks by using the new no-empty-block rule, which is off by default.
 * The new throw-error rule ensures that you throw error-objects from  only throw statements. 
 * The web IDE no longer uses JSLint or JSHint directives. Instead, warnings are shown when unsupported usage is detected. The warnsing are based on a linting rule. 
 * To correct ESLint directives, you can use the new content assist completions.
 * New ESLint directive templates are available.
 * You can find assistance to set up an environment and to disable or enable rules.

For full details, [see the Orion website](http://planetorion.org/news/2014/10/orion-7-0-language-tooling-enhancements/).

###Parser improvements

To provide content assist inside JSDoc blocks, the web IDE now recovers unclosed or incomplete comment blocks while it parses your source. The new block comment recovery support parses and recovers all of the complete statements up to the incomplete comment.

The web IDE also reports parsing errors that cause a complete failure to parse, where no tokens are being returned from the parse. For full details, [see the Orion website](http://planetorion.org/news/2014/10/orion-7-0-language-tooling-enhancements/).

###Improved occurrence support

The web IDE is more accurate and provides more occurrence support.

 * You can show occurrences of labeled statements, throw statements, and things that were not defined in the file.
 * You can mark occurrences in use-before-define and hoisting scenarios. 

For full details, [see the Orion website](http://planetorion.org/news/2014/10/orion-7-0-language-tooling-enhancements/).

##Editor hover help

In the web IDE, if you hover over a function, the rendered documentation for that function is shown. To view an example, [see the Orion website](http://planetorion.org/news/2014/10/orion-7-0-language-tooling-enhancements/).

##Cloud foundry tooling

The web IDE now has a Cloud Foundry manifest editor that highlights syntax, reports on errors and warnings, and provides content assist. From the deploy window, you can launch applications that are missing manifests or that have incomplete manifests, and persist missing manifest content during deployment. For more details, [see the Orion website](http://planetorion.org/news/2014/10/orion-7-0-language-tooling-enhancements/).

---
### October 24, 2014

## Docs page 

The Docs page contains all of the documentation about IBM&reg; DevOps Services. Think of it as the starting point for learning about DevOps Services and how to integrate with IBM Bluemix&trade;. 

On one page, you can find tutorials, references, resources listed by topic, and even this "What's New" information. The resources by topic include valuable content from the members of the DevOps Services community.

You can reach the home page from any DevOps Services page by clicking the  **Help** menu.
![Help menu with link to Doc page][67]

The topics pages are regularly updated. Check them often.

### New tutorial

 * Try the new tutorial, [Developing with Git in the IBM DevOps Services web IDE.](/tutorials/gitweb)

### New reference pages 

 * If you use a Git repository for your DevOps Services project, [learn how to configure a local client.](/docs/reference/gitclient/)
 * If you use Jazz source control management for your DevOps Services project, [learn how to configure a local client.](/docs/reference/jazz_scm_client/) 
 * If you use a Git repository for your DevOps Services project, [learn how to do common tasks in the web IDE.](/docs/reference/git/)

### October 2, 2014

## Track & Plan Beta

###Save and share custom views
You can now save customized views and share them with teammates.

After you apply a filter to a view, you can save it.
![filter text and save button][63]

Your custom views are shown in the navigation area near the standard views. To share a view with your teammates, click the **Share** icon.

![share custom view with team][61]

You can display both your custom views and your shared custom views or only your custom views.  Click the icon to show and hide the views.
![toggle shared views display][62]

###Quickly see team progress on a sprint
You can now see how much work your team completed for a sprint.  In the Team's Work and Sprint Planning views, click **Team Progress** to see the time remaining, hours worked, items resolved, and story points that were achieved during a sprint.
![team progress view showing in-process sprint][56]

###Assign child relationships by dragging work items
You can now assign child work items to work items that are in the backlog. Click a work item and drag it to the intended parent work item.  The **Add as child** hover text indicates the relationship between the work item that you are dragging and the work item you are dragging it to.
![drag work items to assign child relationship][59]

###My Activities view

You can use the My Activities view to see important project activity.
 * To view work items that your teammates mentioned you in, see the My Events section.
 * To view updates to your subscribed work items, see the My Subscriptions section.

![My Activities showing mentions and updates to subscribed work items][64]

###Create child tasks 

You can now create an item and assign it to a parent from the taskboard.

To open the taskboard, click the **Child task breakdown** icon.

![My Activities showing mentions and updates to subscribed work items][66]

From this view, you can see the parent item and any children. To create an item and assign it to the parent work item that is listed, click the **Create a child work item** field.

![My Activities showing mentions and updates to subscribed work items][65]

###Other improvements

You can now add and remove work item subscribers from the drop-down work item editor.  To view the drop-down menu and either add or remove subscribers, click the title field of the work item.
![add work item subscriber][57]
![remove work item subscriber][58]

To quickly differentiate between work item priority, severity, and status, use the new color-coded icons.
![Sprint Planning view displaying colored icons][60]


---
### September 12, 2014

## Build and Deploy to IBM Bluemix

###Multistage deployment

You can now configure IBM DevOps Services projects to deploy to multiple Bluemix spaces. To use multistage deployment, create more than one deployer stage. For example, you might configure a stage that deploys to a "dev" space for development, and another stage that deploys to a "production" space. 

![a configured pipeline set-up][55]

### Automatic builds can now be disabled

When you use the Advanced Build & Deploy option, you can disable automatic builds that run when changes are pushed to your project. To disable the automatic builds, when you configure a builder, clear the **Automatically build when a change is delivered/pushed** check box.

---
### September 2, 2014
 
## Track & Plan Beta 
 
### New Task board view
  
You can view all of the children of a parent work item at the same time. 
 
To open the parent work item's task board, click the blue arrow on a parent work item.   
 
>	![Location of child task breakdown icon](/whatsnew/images/childbreakdownicon.gif) 
 
You can view all of the child work items sorted by status.  
You can also see which tasks you must start to complete the story. 
 
>	![Sample task breakdown view](/whatsnew/images/childtask.gif) 
 
To change a work item's status, drag it. For example, you might drag a work item from the Open section to the In Progress section.  To return to your original view, click **Back to My Work**. 
 
###Track & Plan interface updates 
 
From the All Work view, you can see all of the work items that are associated with your IBM&reg;  
DevOps Services Track & Plan Beta project. The view shows both incoming items and items that are assigned to sprints.  
 
>	![all work view](/whatsnew/images/all-work-view.gif) 
 
Notable UI design changes: 
 * When you change views, you see only the items in your current sprint. To view another sprint, click **Sprint 1 (Current Sprint)** 
and select the sprint from the list. 
 * The options to create or edit sprints are available only in the Sprint Planning view.

---
### Aug 28, 2014

## General enhancements

### The Build & Deploy and Track & Plan features are now Bluemix Add-Ons to provide a better integrated Bluemix experience

The Track & Plan Add-On provides a list of your IBM DevOps Services projects. You can view a project's member count and
visibility, and see whether the Track & Plan feature is enabled. 
From the Bluemix Add-On, you can create a work item for any of your listed 
DevOps Services projects or navigate to your planning tools. 

>	![Track & Plan dashboard](/whatsnew/images/trackplan.png)


The Delivery Pipeline Add-On provides a list of your 
DevOps Services projects and the state  of Build & Deploy use. The state can be SIMPLE, ADVANCED, or OFF.
From the Bluemix Add-On, you can check the status of your builds, deployed app, and 
most recent deployments, or navigate to your most recent build logs or deployment details.

>	![Delivery Pipeline](/whatsnew/images/deliverypipeline.png)


If your project exceeds the free Track & Plan or Build & Deploy usage, 
you must configure those Add-Ons in Bluemix. 
For more information, [see Bluemix pricing](https://hub.jazz.net/learn/cost). 

## Web IDE enhancements

### From many to one

You can now work with Git from a single page. The current Git page looks like this example (with collapsed sections):


>	![Git repository page](/whatsnew/images/orion-git-repo.png)


Take a look at what's in each of these sections. 

### Repo header

At the top of the page, you can see the name of the repo and buttons for repo-level actions:

* If you click **Apply Patch**, you can select the URL or file that contains the patch.
* If you click **Pull**, a pull is done on the repo.  A pull is a combination of a fetch and rebase.
* If you click **Delete**, the repo is deleted.


### Changed Files section

This section replaces the Git Status page. You can see the current state of your working directory. When no files are changed, the section looks like this example:

.	![Git repo changed files](/whatsnew/images/orion-git-repo-changed-files.png)

The top of the section contains two buttons:

* If you click **Discard**, any changes to selected files are discarded and the files are reverted to their previous committed state.
* If you click, **Commit**, the selected files are committed with the messages that were entered in the commit message box.

The next field is where you type your commit message. If you select the **Amend Previous Commit** check box, the message from the previous commit is fetched and displayed in the message box. If you select the **Prepare for Gerrit** check box,  a `ChangeId` is added to the commit message.

When files are changed, they are shown in a table:

>	![Git repo changed file selection](/whatsnew/images/orion-git-repo-changed-file-selection.png)

You view details about the changes by expanding the files.

>	![Git repo changes revealed](/whatsnew/images/orion-git-repo-changes-revealed.png)

You can also view the differences side-by-side or in a compare editor.

To select the files to include in the commit, select the check boxes. You can select the All check box to include all of the files. As you select files, a number counter at the top of the table indicates how many files you selected.

After you select files and type a commit message, you can click **Commit** or **Discard**.

When files are selected, a **Show Patch** link is shown next to the **Commit** and **Discard** buttons. If you click the link, you can create a patch that is composed of the files that you selected.


>	![Git repo commit](/whatsnew/images/orion-git-repo-commit.png)

###Commits

The commits section has new sub-sections.

>	![Git repo commits section](/whatsnew/images/orion-git-repo-commits-section.png)

* The **Outgoing** section lists all of the commits that were not pushed to the remote repo

* The **Incoming** section lists all of the commits that were not merged into the local repo

* The **History** section lists all of the commits that the local branch has in common with the remote branch

The following example shows what happens when a change is committed:

>	![Git repo commit changed file](/whatsnew/images/orion-git-repo-commit-changed-file.png)


The commit is shown in the **Outgoing** section. If needed you can undo the commit and restore changed files back into your working directory by clicking the **Undo** button.

Before you push, click **Fetch** in the **Incoming** section to fetch the latest changes. All of the changes that were not merged are shown. You can accept them by clicking **Rebase** or **Merge**.

>	![Git repo commit fetch](/whatsnew/images/orion-git-repo-commit-fetch.png)


The accepted changes are shown in the **History** section. If you have many entries, you can scroll to view the history or you can load more entries by clicking **More commits for <Branch>**.

After you are up to date with the remote branch, you can push your changes.

You can also use the new **Sync** button, which is a combination of the fetch, rebase, and push functions.

### Changes in a commit

If you expand any commit in the history, you can see the changed files:

>	![Git repo commit history](/whatsnew/images/orion-repo-commit-history.png)


### Branches and tags

The branches and tags sections were merged into one section. The section contains two buttons:

* **New Remote**
* **New Branch**

>	![Git repo branches and tags](/whatsnew/images/orion-git-repo-branches-tags.png)

If you expand the local item, you can see all of the local branches that you have for the current repo. You can check a branch out from here.

>	![Git repo checkout branch](/whatsnew/images/orion-git-repo-checkout-branch.png)

If you expand the branch, you can see the log for that branch and all of the actions that are allow for each commit.

>	![Git repo expand branch](/whatsnew/images/orion-git-repo-expand-branch.png)

You can expand each remote to show all of its remote branches and the applicable actions for each entry.

To see the log for a remote branch, expand it.

The tags section uses the same pattern. When you expand the top-level item, the list of tags and all of the available actions for each tag are shown.

 
### Configuration

The configuration section is now shown as a table.


>	![Git repo configuration section](/whatsnew/images/orion-git-repo-config-section.png)

---
### June 27, 2014

## Build and deploy to IBM Bluemix

### Simple application deployment to IBM Bluemix for Jazz SCM projects

You can now set up simple auto-deployment of your IBM&reg; Bluemix&trade; application for
a Jazz&trade; SCM project. 
If you selected the **Deploy to Bluemix** option when 
you created your Jazz SCM project, or if you chose that option in the Project Settings,
you can select the Simple option for the Build & Deploy feature.
When simple application is enabled, any changes that are delivered to the configured
Jazz SCM stream trigger a push 
of the application to Bluemix.

## General enhancements

### More options when forking a project

When you fork a project from the web IDE, you can now select whether your project is public or private, whether to add features for Scrum
development, and  whether to deploy your application to Bluemix. After you create the project, you can change the options to make it private 
and to deploy to Bluemix from your project settings.

>	![fork project settings](/whatsnew/images/jh-forkproj-settings.png)



&copy; Copyright IBM Corporation 2013, 2015.


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
[55]: /whatsnew/images/configured-pipeline.png
[56]: /whatsnew/images/teamprogressview.gif
[57]: /whatsnew/images/addsubscriber.gif
[58]: /whatsnew/images/removesubscriber.gif
[59]: /whatsnew/images/dragdropchild.png
[60]: /whatsnew/images/iconcolors.gif
[61]: /whatsnew/images/shareviewwithteam.gif
[62]: /whatsnew/images/showsharedviews.gif
[63]: /whatsnew/images/savecustomview.gif
[64]: /whatsnew/images/myactivities.png
[65]: /whatsnew/images/childtaskboard.png
[66]: /whatsnew/images/childtaskbreakdown.png
[67]: /whatsnew/images/doc_landing_menu.png
[68]: /whatsnew/images/unrankedItems.png
[69]: /whatsnew/images/explicitRanking.png
[70]: /whatsnew/images/count-all.png
[71]: /whatsnew/images/selectSprintQuickCreate.png
[72]: /whatsnew/images/tableView.png
[73]: /whatsnew/images/sprintPlanning.png
[74]: /whatsnew/images/taskBreakdown.png
