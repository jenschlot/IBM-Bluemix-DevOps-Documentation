## What's New

---
### September 12, 2014

## Build and Deploy to IBM Bluemix

###Multistage deployment

You can now configure IBM DevOps Services projects to deploy to multiple Bluemix spaces. To use multistage deployment, create more than one deployer stage. For example, you might configure a stage that deploys to a "dev" space for development, and another that deploys to a "production" space. 

![a configured pipeline set-up][55]

### Automatic builds can now be disabled

When you use the Advanced Build & Deploy option, you can disable automatic builds that run when changes are pushed to your project. To disable the automatic builds, clear the **Automatically build when a change is delivered/pushed** check box when you configure a builder.

---
### September 2, 2014
 
## Track & Plan Beta 
 
### Task board view added 
  
Now you can view all of the children of a parent work item at the same time. 
 
Click on the blue arrow on a parent item to open the parent's task board.   
 
>	![Location of child task breakdown icon](/whatsnew/images/childbreakdownicon.gif) 
 
From here, you can view all the child items in lanes by status.  
You can see which tasks you need to start to complete the story. 
 
>	![Sample task breakdown view](/whatsnew/images/childtask.gif) 
 
You can drag a work item into another lane to change its status or click **Back to My Work** to return to your original view. 
 
###Track & Plan interface updates 
 
You can now use the All Work view to see all the work items that are associated with your IBM&reg;  
DevOps Services Track & Plan Beta project. Use this view to see both incoming items and items that are assigned to sprints.  
 
>	![all work view](/whatsnew/images/all-work-view.gif) 
 
Notable UI design changes: 
 * When you change views, you will see only the items in your current sprint. To view another sprint, click **Sprint 1 (Current Sprint)** 
and select the sprint from the list. 
 * The options to create or edit sprints are available only in the Sprint Planning view.

---
### Aug 28, 2014

## General enhancements

### Our BUILD & DEPLOY and TRACK & PLAN features are now Bluemix Add-Ons to provide a better integrated Bluemix experience

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


If your project exceeds free TRACK & PLAN or BUILD & DEPLOY usage, 
you will need to configure these Add-Ons in Bluemix. 
Learn more about [Bluemix pricing](https://hub.jazz.net/learn/cost). 

## Web IDE enhancements

### From Many to One

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


## Behind the Scenes

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
[55]:/whatsnew/images/configured-pipeline.png
