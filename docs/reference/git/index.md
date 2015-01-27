#Git reference

Last modified: 14 January 2015

If you store your code in a Git repository that is hosted by IBM® DevOps Services, you can work with code in a Git terminal or in a web integrated development environment (IDE). If you work on a local workstation, you can use Git terminal commands to edit the contents of your hosted repository. If you use the web IDE, you don't need the Git terminal: you can run many common Git commands in the web IDE.  

To access Git commands from the web IDE, click the Git Repository icon <img src="./images/gitrepository.png"  align="bottom" style="display: inline; margin: 0px; border-style: none; margin-bottom: 0px;">.

No matter where you code, you can use this quick reference to do common tasks.

---
##[Repositories](#repositories)
* [Set up a local Git repository](#set_up_a_local_git_repository)
* [Replace your origin repository](#replace_your_origin _repository)
* [Integrate local commits in the web IDE](#integrate_local_commits_in_the_web_IDE)

##[Branches](#branches)
* [Create a local branch](#create_a_local_branch)
* [Work on a local branch](#start_working_on_a_local_branch)
* [Delete a local branch](#delete_a_local_branch)
* [Update a local branch with changes from the remote branch](#update_a_local_branch_with_changes_from_the_remote_branch)

##[Commits](#commits)
* [Commit files and push to the remote branch](#commit_files_to_the_remote_branch)
* [Link a commit to a work item](#link_commit)
* [View the commit history](#view_the_commit_history)
* [Compare changes that a commit introduced](#compare_changes_that_a_commit_introduced)
* [Modify the last commit](#modify_the_last_commit)
* [Tag a commit](#tag_a_commit)
* [Change the committer name and email address](#change_the_committer_name_and_email_address)

##[Change integration](#change_integration)
* [Merge changes](#merge_changes)
* [Resolve a merge conflict](#resolve_a_merge_conflict)
* [Rebase branches](#rebase_branches)
* [Resolve a rebase conflict](#resolve_a_rebase_conflict)

##[Git terminal only](#git_terminal)
* [Troubleshoot authentication issues by using the push command](#troubleshoot_authentication_issues_by_using_the_push_command)
* [Delete a branch from origin](#delete_a_branch_from_origin)

---
<a name="repositories"></a>
##Repositories

---
<a name="set_up_a_local_git_repository"></a>
### Set up a local Git repository

#### DevOps Services web IDE
When you use a hosted Git repository with your DevOps Services project, you work with both your local and remote repositories through the web IDE.

1. Click **EDIT CODE** <img src="./images/editcode.gif"  align="bottom" style="display: inline; margin: 0px; border-style: none; margin-bottom: 0px;"> and start coding!

#### Git terminal
If you want to code and test locally, set up a local repository.

**Before you begin**: If Git is not installed on your computer, [follow these instructions][1].

1. Determine which directory to store your local repository in. If necessary, you can create a directory.

1. By using your terminal, move to the directory.  

1. [Go to DevOps Services][2]. On the My Stuff page, click your project's name.

1. From your project's Overview page, click **Git URL** and copy the URL.

1. In your terminal, type `git clone `, paste your Git URL, and press Enter.

1. When you are prompted, enter your IBM id and password.  
**Note**: If you are not prompted for your password, do not continue.  Delete your cloned repository
and repeat the steps by using a modified repository address: `https://your_jazz_id:your_IBM_ID_password@hub.jazz.net/jazz_id/project_name`.

1. After your repository replicates, move into your new local repository.  

---
<a name="replace_your_origin _repository"></a>
### Replace your origin repository

#### DevOps Services web IDE

1. Click the configuration icon <img src="./images/configuration.png"  align="bottom" style="display: inline; margin: 0px; border-style: none; margin-bottom: 0px;">.

1. In the remote.origin.url pane, click the edit icon <img src="./images/editconfiguration.png"  align="bottom" style="display: inline; margin: 0px; border-style: none; margin-bottom: 0px;"> to edit the configuration entry.

1. In the **value** field, paste your new repository URL. Click **Submit**.

1. Click the **REFERENCE** field.

1. In the origin pane, click the fetch icon <img src="./images/fetchfromremote.png"  align="bottom" style="display: inline; margin: 0px; border-style: none; margin-bottom: 0px;"> to fetch from the remote repository.

#### Git terminal

1. Type `git remote set-url origin <repository_url>` and press Enter.

---
<a name="integrate_local_commits_in_the_web_IDE"></a>

###Integrate local commits in the web IDE

When you work in the web IDE, both your local and remote repositories are hosted on the cloud. To view the your changes that you made in a local repository that is stored outside of DevOps Services, you must sync to your remote repository.

1. Click **SYNC**. Sync combines the fetch, rebase, and push commands.

---
<a name="branches"></a>
##Branches

--- 
<a name="create_a_local_branch"></a>
### Create a local branch

#### DevOps Services web IDE
1. Click the **REFERENCE** field.

1. Click **NEW BRANCH**.

2. In the **Name** field, type your branch name. Click **Submit**.

#### Git terminal
1. Type `git branch <branchname>` and press Enter.

---
<a name="start_working_on_a_local_branch"></a>
### Work on a local branch

#### DevOps Services web IDE
1. Click the **REFERENCE** field

1. Next to local, click **>**.

2. Next to the branch to modify, click **Checkout** <img src="./images/checkout.gif"  align="bottom" style="display: inline; margin: 0px; border-style: none; margin-bottom: 0px;">.

1. Confirm that the contents of the **REFERENCE** field contain your selected branch.

#### Git terminal
1. To view your local branches, type `git branch -l` and press Enter.

2. Type `git checkout <branchname>` and press Enter.

---
<a name="delete_a_local_branch"></a>
### Delete a local branch

####DevOps Services web IDE
1. Confirm that you do not have the branch to delete checked out. If you do, [check out another branch](#start_working_on_a_local_branch).

1. Click the **REFERENCE** field

1. Next to local, click **>**.

2. Next to the local branch to remove, click **Delete** <img src="./images/delete.gif"  align="bottom" style="display: inline; margin: 0px; border-style: none; margin-bottom: 0px;">.

####Git terminal
1. Type `git branch -d <branchname>` and press Enter.

---
<a name="update_a_local_branch_with_changes_from_the_remote_branch"></a>
### Update a local branch to include changes from the remote branch

####DevOps Services web IDE
1. Click **SYNC**.

1. If you encounter conflicts, [resolve them](#resolve_a_rebase_conflict).

####Git terminal
1. Type `git pull` and press Enter.

1. Enter your IBM id and password.

---
<a name="commits"></a>
##Commits

---
<a name="commit_files_to_the_remote_branch"></a>
### Commit files and push to the remote branch

#### DevOps Services web IDE
2. In the Working Directory Changes pane, select the check box for each file to commit.

3. In the **Enter the commit message** field, type a message that describes your changes.  
**Tip**: In the commit message, describe your changes well.

4. Click **COMMIT**.

5. Click **PUSH**.

#### Git terminal
1. Type `git status` and press Enter.

2. Review the changes to be committed. If all of your files are listed to be committed, proceed. To commit unstaged files, stage them first.

3. Type `git commit -m "<commit_message>"` and press Enter.
**Tip**: In the commit message, describe your changes well.

---
<a name="link_commit"></a>
### Link a commit to a work item
To link a commit to a Track & Plan work item for a Git project that is hosted at DevOps Services, add a work-item keyword and number to the Git commit message.

1. When you write a Git commit message, specify a work item. The message format is `<work item keyword> <number>`.
 * For example, if you type `Implements story 32` as the commit message, you link the commit to story item 32.
 * Valid work item keywords: `adoption item, bug, defect, epic, impediment, item, retrospective, story, task, track build item,` and `work item`.
2. Push the commit. A linked commit is shown on a work item's **LINKS** tab.
3. Alternatively, link a commit that was already pushed:
	1. Open your project's Overview page.
	2. Click **GIT LOG**.
	3. Open the commit to link to a work item
	4. Click **Link Work Item**.

**Note:** If your repository is hosted on GitHub, you can link your commits to work items when you push. This activity requires extra configuration:

1. Open your DevOps Services project's Overview page.
2. Under the message to GitHub users, click **configure GitHub** to get instructions to configure commit linking between GitHub and DevOps Services.

---
<a name="view_the_commit_history"></a>
### View the commit history

####DevOps Services web IDE
1. In the Active Branch pane, next to HISTORY, click the **>**.

####Git terminal
1. Type `git log` and press Enter. 

2. Navigate through the committer's commits.  
 * To view more entries, press Page Down.  
 * To view previous entries, press Page Up.

3. To stop viewing entries, press  Q.

---
<a name="compare_changes_that_a_commit_introduced"></a>
### Compare changes that a commit introduced

####DevOps Services web IDE
1. View your commit history and locate the commit. For more information, [see View the commit history][4].

2. View the details of the commit by clicking it.

3. Next to a file, click the **>** and review the file's changes.  
**Note**: If a commit introduced a change to a line, the original line is shaded pink and the new line is shaded green.  Similarly, lines that were added by a commit are shaded green and lines that were removed by a commit are shaded pink.

####Git terminal
1. Type `git log -p` and press Enter.  
**Note**: To view only a certain number of commits, type `git log -p -<number_of_commits_to_view>`.

2. Navigate through the committer commits.
 * To view more entries, press Page Down.  
 * To view previous entries, press Page Up.

3. Review the changes.  
**Note**: If a commit introduced a change to a line, the original line is in red text and starts with a minus sign (-). The new line is in green text and starts with a plus sign (+).  Similarly, lines that were added by a commit are in green text and start with a +. Lines that were removed by a commit are in red text and start with a -.

1. To stop viewing entries, press  Q.

---
<a name="modify_the_last_commit"></a>
### Modify the last commit
**Note**: Do not modify your last commit after you push it to a remote repository.

####DevOps Services web IDE
1. Select the check boxes for the items to add to the commit.

1. Select the **Amend Previous Commit** check box.

2. If necessary, enter a new commit message.

3. Click **COMMIT**.

####Git terminal
1. Check your status. As necessary, stage or unstage files.

2. Type `git commit --amend` and press Enter.

3. In your text editor, accept or modify the commit message.  
**Note**: To save your commit message and close Vim, which might be your default text editor, press Esc, type `:wq`, and press Enter.

---
<a name="tag_a_commit"></a>
### Tag a commit

####DevOps Services web IDE
1. View your commit history and locate the commit. For more information, [see View the commit history][4].

2. View the details of the commit by clicking it.

2. In the commit pane, click **Create a tag for the commit** <img src="./images/tag.gif"  align="bottom" style="display: inline; margin: 0px; border-style: none; margin-bottom: 0px;">.

3. In the name field, type your tag text. Click **Submit**.

####Git terminal
1. View the commit history and obtain the ID of the commit to tag. For more information, [see View the commit history][4].

2. Type `git tag -a <tag_text> <commit_id>` and press Enter. 

---
<a name="change_the_committer_name_and_email_address"></a>
### Change the committer name and email address

#### DevOps Services web IDE
2. Click **Settings**.

3. Update the committer Git Email Address and Git Username; then, press Enter.

#### Git terminal
To update your name and email address for a single repository

1. Type `git config user.email "<your@email.com>"` and press Enter.

2. Type `git config user.name "<Your Name>"` and press Enter.

To update your name and email address for all repositories

1. Type `git config --global user.email "<your@email.com>"` and press Enter.

2. Type `git config --global user.name "<Your Name>"` and press Enter.

---
<a name="change_integration"></a>
##Change integration

<a name="merge_changes"></a>
### Merge changes

####DevOps Services web IDE
1. Decide which branches to merge. You merge the contents of the source branch into the destination branch.

2. Checkout the destination branch. For more information, [see Work on a local branch][5].

1. Click the **REFERENCE** field.

1. Click the name of the source branch.

1. On the Active Branch panel, in the Incoming pane, click **Merge**.

1. Click the **REFERENCE** field.

1. Expand the **>** by origin and click the name of the source branch.

1. Click **PUSH**.

####Git terminal
1. Decide which branches to merge. You merge the contents of the source branch into the destination branch.

2. Checkout the destination branch. For more information, [see Work on a local branch][5].

3. Type `git merge <source_name>` and press Enter.

---
<a name="resolve_a_merge_conflict"></a>
### Resolve a merge conflict

####DevOps Services web IDE
1. In the Changed Files pane, review the list of files that contain conflicts.

2. In the web IDE, open each file that contains conflicts.

3. Resolve each conflicting change.  
**Note**: Delete all of the text that you do not want to keep. Each conflict is in this format:

		<<<<<<< HEAD  
		Text in checked out branch.  
		=======
		Text in merged branch.  
		>>>>>>> commit_ID_from_merged_branch
4. For each conflicting file, select the check box. Type a merge commit message, and click **COMMIT**.

####Git terminal
1. For the files that contain conflicts, review the Git message for the names.

2. In a text editor, open a file that contains conflicts.

3. Resolve each conflicting change, and then save the file.  
**Note**: Delete all of the text that you do not want to keep. Each conflict is in this format: 
 
		<<<<<<< HEAD  
		Text in checked out branch.  
		=======   
		Text in merged branch.  
		>>>>>>> merged_branch
4. Stage each file that you modified, and then commit the merge.

---
<a name="rebase_branches"></a>
### Rebase branches

#### DevOps Services web IDE
1. Decide which branches to rebase. You will rebase the contents of the source branch into the destination branch.

2. Checkout the destination branch. For more information, [see Work on a local branch][5].

1. Click the **REFERENCE** field.

1. Click the name of the source branch.

1. In the Active Branch panel, under Incoming, click **Rebase** <img src="./images/rebase.gif"  align="bottom" style="display: inline; margin: 0px; border-style: none; margin-bottom: 0px;">.

5. If you encounter conflicts, [resolve them](#resolve_a_rebase_conflict).

6. Repeat the previous step as many times as necessary to complete the rebase operation.

1. Click the **REFERENCE** field.

1. Expand the **>** by origin and click the name of the source branch.

1. Click **PUSH**.

#### Git terminal
1. Check out the branch to update by typing `git checkout <destination_branchname>` and pressing Enter.

2. Type `git rebase <source_branchname>` and press Enter.

3. If you encounter conflicts, [resolve them](#resolve_a_rebase_conflict).

5. Repeat the previous step as many times as necessary to complete the rebase operation.  
**Note**: To stop the rebase operation, type `git rebase --abort` and press Enter.

---
<a name="resolve_a_rebase_conflict"></a>
### Resolve a rebase conflict

#### DevOps Services web IDE
1. In the Working Directory Changes pane, review the list of conflicting files.

2. In the web IDE, open each file that contains conflicts.

3. Resolve each conflicting change.  
**Note**: Delete all of the text that you do not want to retain. Each conflict is in this format: 
  
		<<<<<<< HEAD  
		Text in checked out branch.  
		=======  
		Text in merged branch.  
		>>>>>>> commit_ID_from_merged_branch
4. In the rebase pane, select the check box for each corrected file and click **CONTINUE**.

####Git terminal
1. For the files that contain conflicts, review the Git message for the names.

2. In a text editor, open a file that contains conflicts.

3. Resolve each conflicting change, and then save the file.   
**Note**: Delete all of the text that you do not want to retain. Each conflict is in this format:     

		<<<<<<< HEAD  
		Text in checked out branch.  
		=======  
		Text in merged branch.  
		>>>>>>> merged_branch
4. Stage each file that you modified.

5. Resume the rebase operation by typing `git rebase --continue` and pressing Enter.


---
<a name="git_terminal"></a>
##Git terminal only

---
<a name="troubleshoot_authentication_issues_by_using_the_push_command"></a>
### Troubleshoot authentication issues by using the push command

When you push, if a "406 Not Acceptable" error occurs, complete these steps:

1. Upgrade your version of Git.

1. If you cannot upgrade Git, add your repository again but place your Jazz ID in the repository URL.  For example: `https://your_Jazz_ID@hub.jazz.net/Jazz_ID/project_name`.

---
<a name="delete_a_branch_from_origin"></a>
### Delete a branch from origin

Only project owners can delete branches from origin.

1. Type `git push origin :<your_branch_name>` and press Enter.

[1]: ../gitclient/#command_line_git
[2]: https://hub.jazz.net
[3]: https://hub.jazz.net/gitHook/ryehle/GitHubSentiment
[4]: #view_the_commit_history
[5]: #start_working_on_a_local_branch