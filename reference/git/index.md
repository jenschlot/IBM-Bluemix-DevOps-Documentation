# Git quick reference

If you store your code in a Git repository hosted by IBM&reg; DevOps Services, you have options for working with your code. If you prefer to work on a local machine, you can use Git terminal commands to manipulate the contents of your hosted repository. If you prefer to work with the web IDE, you never have to use the Git terminal: you can perform many common Git commands using the web IDE.  

No matter where you like to code, use this quick reference to find steps for common tasks.

---
##[Repositories](#repositories)
* [Set up a local Git repository](#set_up_a_local_git_repository)

##[Branches](#branches)
* [Create a local branch](#create_a_local_branch)
* [Start work on a local branch](#start_work_on_a_local_branch)
* [Delete a local branch](#delete_a_local_branch)
* [Update a local branch with changes from the remote branch](#update_a_local_branch_with_changes_from_the_remote_branch)

##[Commits](#commits)
* [Commit files to the active branch](#commit_files_to_the_active_branch)
* [View the commit history](#view_the_commit_history)
* [Compare changes introduced by a commit](#compare_changes_introduced_by_a_commit)
* [Modify the last commit](#modify_the_last_commit)
* [Tag a commit](#tag_a_commit)
* [Change committer name and email address](#change_committer_name_and_email_address)

##[Change integration](#change_integration)
* [Merge changes](#merge_changes)
* [Resolve a merge conflict](#resolve_a_merge_conflict)
* [Rebase branches](#rebase_branches)
* [Resolve a rebase conflict](#resolve_a_rebase_conflict)

##[Git terminal only](#git_terminal)
* [Troubleshoot authentication issues with push command](#troubleshoot_authentication_issues_with_push_command)

---
<a name="repositories"></a>
##Repositories

<a name="set_up_a_local_git_repository"></a>
### Set up a local Git repository

#### DevOps Services Web IDE
When you use a hosted Git repository with your DevOps Services project, you work with both your local and remote repositories through the Web IDE.

1. Click **EDIT CODE** (<img src="images/editcode.gif"  align="bottom" style="display: inline; margin: 0px; border-style: none; margin-bottom: -10px;">) and start work.

#### Git terminal
If you want to code and test on a local machine, you need to set up a local repository. If you have not installed Git, find instructions [here][1].

1. Create or determine a directory to store your local repository.

1. Using your terminal, move to your new directory.  
**Tip**: If you're using Windows and the Git Bash, type `cd /<path>`  and press __Enter__.

1. From the My Stuff page on [DevOps Services][2], click your project's name.

1. From your project's Overview page, click **Git URL** and copy the URL.

1. In your terminal, type `git clone `, paste your Git URL, and press **Enter**.

1. When prompted, enter your IBM id and password.  
**Note**: If you are not prompted for your password, do not continue.  Delete your cloned repository
and repeat the steps using a modified repository address: https://*<your_jazz_id:your_IBM_ID_password@>*hub.jazz.net/*<jazz_id>*/*<project_name>* 

1. After your repository replicates, move into your new local repository.  
**Tip**: If you're using Windows and Git Bash, type `cd ./<project_name>` and press __Enter__.
 
1. Start work.

---
<a name="branches"></a>
##Branches

--- 
<a name="create_a_local_branch"></a>
### Create a local branch

#### DevOps Services Web IDE
1. Click the **REFERENCE** field.

1. Click __NEW BRANCH__.

2. Type your branch name in the **Name** field and click __Submit__.

#### Git terminal
1. Type `git branch <branchname>` and press __Enter__.

---
<a name="start_work_on_a_local_branch"></a>
### Start work on a local branch

#### DevOps Services Web IDE
1. Click the **REFERENCE** field

1. Click __>__ by local.

2. Click __Checkout__ (<img src="images/checkout.gif"  align="bottom" style="display: inline; margin: 0px; border-style: none; margin-bottom: -10px;">) by the branch you want to modify.

1. Note that the contents of the REFERENCE field contains your selected branch.

#### Git terminal
1. Type `git branch -l` and press __Enter__ to view your local branches.

2. Type `git checkout <branchname>` and press __Enter__.

---
<a name="delete_a_local_branch"></a>
### Delete a local branch

####DevOps Services Web IDE
1. Confirm that you do not have the branch you want to delete checked out. If you do, [checkout](#start_work_on_a_local_branch) a different branch.

1. Click the **REFERENCE** field

1. Click __>__ by local.

2. Click __Delete__ (<img src="images/delete.gif"  align="bottom" style="display: inline; margin: 0px; border-style: none; margin-bottom: -10px;">) by the local branch you want to remove.

####Git terminal
1. Type `git branch -d <branchname>` and press __Enter__.

---
<a name="update_a_local_branch_with_changes_from_the_remote_branch"></a>
### Update a local branch with changes from the remote branch

####DevOps Services Web IDE
1. Click __SYNC__.

1. If you encounter conflicts, [resolve](#resolve_a_rebase_conflict) them.

####Git terminal
1. Type `git pull` and press __Enter__.

1. Enter your IBM id and password.

---
<a name="commits"></a>
##Commits

---
<a name="commit_files_to_the_active_branch"></a>
### Commit files to the active branch

#### DevOps Services Web IDE
2. In the Working Directory Changes pane, select the check box for each file you want to commit.

3. Type a message describing your change in the __Enter the commit message__ field.  
__Tip__: Ensure your commit messages describe your changes well.

4. Click __COMMIT__.

#### Git terminal
1. Type `git status` and press __Enter__.

2. Review the changes to be committed. If all your files are listed to be committed, proceed. If you want to commit unstaged files, [stage](#how_do_I_stage_a_file) them first.

3. Type `git commit -m "<commit_message>"` and press __Enter__.  
__Tip__: Ensure your commit messages describe your changes well.

---
<a name="view_the_commit_history"></a>
### View the commit history

####DevOps Services Web IDE
1. In the Active Branch pane, click the __>__ by HISTORY.

####Git terminal
1. Type `git log` and press __Enter__. 

2. Navigate through the committer commits.  
 * Press __Page Down__ to view more entries.  
 * Press __Page Up__ to view previous entries.

3. Press  __q__ to stop viewing entries.

---
<a name="compare_changes_introduced_by_a_commit"></a>
### Compare changes introduced by a commit

####DevOps Services Web IDE
1. [View](#view_the_commit_history) your commit history and locate the commit.

2. Click the commit to view its details in the Commit pane.

3. Click the __>__ by a file and review its changes.  
__Note__: If a commit introduced a change to a line, you will see the original shaded pink and the new line shaded green.  Similarly, you will see that lines added with a commit shaded green and lines removed with a commit shaded pink.

####Git terminal
1. Type `git log -p` and press __Enter__.  
__Note__: If you want to view only a certain number of commits, type `git log -p -<number_of_commits_to_view>` instead.

2. Navigate through the committer commits.
 * Press __Page Down__ to view more entries.  
 * Press __Page Up__ to view previous entries.

3. Review the changes.  
__Note__: If a commit introduced a change to a line, the original line is shown in red text and starts with a "-". The new line is shown in green text and starts with a "+".  Similarly, lines added with a commit are shown in green text and start with a "+." Lines removed with a commit are shown in red text and start with a "-".

1. Press  __q__ to stop viewing entries.

---
<a name="modify_the_last_commit"></a>
### Modify the last commit
__Note__: Do not modify your last commit after you push it to a remote repository.

####DevOps Services Web IDE
1. Select the check boxes for the items you want to add to the commit.

1. Select the __Amend Previous Commit__ check box.

2. If desired, enter a new commit message.

3. Click __COMMIT__.

####Git terminal
1. Check your status and stage or unstage files as necessary.

2. Type `git commit --amend` and press __Enter__.

3. Accept or modify the commit message in your text editor.  
__Note__: To save your commit mesasge and close Vim, which may be your default text editor, press __Esc__, type `:wq`, and press __Enter__.

---
<a name="tag_a_commit"></a>
### Tag a commit

####DevOps Services Web IDE
1. [View](#view_the_commit_history) your commit history and locate the commit.

2. Click the commit to view its details in the Commit pane.

2. In the commit pane, click __Create a tag for the commit__ (<img src="images/tag.gif"  align="bottom" style="display: inline; margin: 0px; border-style: none; margin-bottom: -10px;">) .

3. In the name field, type your tag text and click __Submit__.

####Git terminal
1. [View](#view_the_commit_history) the commit history and obtain the id of the commit you want to tag.

2. Type `git tag -a <tag_text> <commit_id>` and press __Enter__. 

---
<a name="change_committer_name_and_email_address"></a>
### Change committer name and email address

#### DevOps Services Web IDE
2. Click __Settings__.

3. Update the committer Git Email Address and Git Username as necessary and press __Enter__.

#### Git terminal
To update your name and email address for a single repository

1. Type `git config user.email "<your@email.com>"` and press __Enter__.

2. Type `git config user.name "<Your Name>"` and press __Enter__.

To update your name and email address for all repositories

1. Type `git config --global user.email "<your@email.com>"` and press __Enter__.

2. Type `git config --global user.name "<Your Name>"` and press __Enter__.

---
<a name="change_integration"></a>
##Change integration

<a name="merge_changes"></a>
### Merge changes

####DevOps Services Web IDE
1. Decide which branches you want to merge. You will merge the contents of the source branch into the destination branch.

2. [Checkout](#how_do_I_start_working_on_a_local_branch) the destination branch.

1. Click the **REFERENCE** field.

1. Click the name of the source branch.

1. In the Incoming pane of the Active Branch panel, click **Merge**.

2. [Checkout](#how_do_I_start_working_on_a_local_branch) the destination branch again.

1. Click **PUSH**.

####Git terminal
1. Decide which branches you want to merge. You will merge the contents of the source branch into the destination branch.

2. [Checkout](#how_do_I_start_working_on_a_local_branch) the destination branch.

3. Type `git merge <source_name>` and press __Enter__.

---
<a name="resolve_a_merge_conflict"></a>
### Resolve a merge conflict

####DevOps Services Web IDE
1. Review the list of conflicting files in the Changed Files pane.

2. Open each file in the web IDE.

3. Resolve each conflicting change.  
__Note__: Delete all text that you do not want to retain. Each conflict takes this form:  
<<<<<<< HEAD  
Text in checked out branch.  
=======&nbsp;  
Text in merged branch.  
\>>>>>>> commit_ID_from_merged_branch

4. Select the check box for each conflicting file, enter the merge commit message, and click __COMMIT__.

####Git terminal
1. Review the Git message for the names of files that contain conflicts.

2. Open a file that contains conflicts in a text editor.

3. Resolve each conflicting change and save the file.  
__Note__: Delete all text that you do not want to retain. Each conflict takes this form:  
<<<<<<< HEAD  
Text in checked out branch.  
=======&nbsp;   
Text in merged branch.  
\>>>>>>> merged_branch

4. Stage each file you modified and commit the merge.

---
<a name="rebase_branches"></a>
### Rebase branches

#### DevOps Services Web IDE
1. Decide which branches you want to rebase. You will rebase the contents of the source branch into the destination branch.

2. [Checkout](#how_do_I_start_working_on_a_local_branch) the destination branch.

1. Click the **REFERENCE** field.

1. Click the name of the source branch.

1. In the Incoming pane of the Active Branch panel, click **Rebase** (<img src="images/rebase.gif"  align="bottom" style="display: inline; margin: 0px; border-style: none; margin-bottom: -10px;">) .

5. If you encounter conflicts, [resolve](#resolve_a_rebase_conflict) them.

6. Repeat the previous step as many times as necessary to complete the rebase operation.

2. [Checkout](#how_do_I_start_working_on_a_local_branch) the destination branch again.

1. Click **PUSH**.

#### Git terminal
1. Type `git checkout <destination_branchname>` and press __Enter__ to checkout the branch you want to update.

2. Type `git rebase <source_branchname>` and press __Enter__.

3. If you encounter conflicts, [resolve](#resolve_a_rebase_conflict) them.

5. Repeat the previous step as many times as necessary to complete the rebase operation.  
__Note__: If you want to stop the rebase operation, type `git rebase --abort` and press __Enter__.

---
<a name="resolve_a_rebase_conflict"></a>
### Resolve a rebase conflict

#### DevOps Services Web IDE
1. Review the list of conflicting files in the Working Directory Changes pane.

2. Open each file in the web IDE.

3. Resolve each conflicting change.  
__Note__: Delete all text that you do not want to retain. Each conflict takes this form:  
<<<<<<< HEAD  
Text in checked out branch.  
=======&nbsp;  
Text in merged branch.  
\>>>>>>> commit_ID_from_merged_branch

4. Select the check box for each corrected file and click __CONTINUE__ in the rebase pane.

####Git terminal
1. Review the Git messages for the names of files that contain conflicts.

2. Open a file that contains conflicts in a text editor.

3. Resolve each conflicting change and save the file.   
__Note__: Delete all text that you do not want to retain. Each conflict takes this form:  
<<<<<<< HEAD  
Text in checked out branch.  
=======&nbsp;  
Text in merged branch.  
\>>>>>>> merged_branch

4. Stage each file you modified.

5. Type `git rebase --continue` and press __Enter__ to resume the rebase operation


---
<a name="git_terminal"></a>
##Git terminal only

---
<a name="troubleshoot_authentication_issues_with_push_command"></a>
### Troubleshoot authentication issues with push command

Upgrade your version of git. If you cannot upgrade Git, try these steps.

1. Add your repository again but place your Jazz ID in the repository URL. https://*<your_Jazz_ID@>*hub.jazz.net/*<Jazz_ID>*/*<project_name>*

[1]: https://hub.jazz.net/tutorials/clients#installing_git
[2]: https://hub.jazz.net
