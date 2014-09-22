# Building a website with GitHub pages and DevOps Services 

This tutorial shows you how to create a website by using GitHub pages and IBM&reg; DevOps Services. 
In DevOps Services, you can connect to an existing GitHub project and edit it by using the integrated Web IDE.

Before you create the website, you set up accounts and repositories. Then, you push the first page to GitHub. 
After that, you can log in to DevOps Services, code your project, and push changes whenever you like.

---
## Create a GitHub account and repository

If you don't have a GitHub account, create one at [github.com](github.com).

Next, create a repository by clicking **+New repository**.

![GitHub](images/github.png)

The new repository name is the GitHub user name followed by `.github.io`. For 
example, if your user name is `mygithubtry`, the repository name is `mygithhubtry.github.io`.
This repository provides a working website. 

![GitHub Create Repo](images/github_createrepo.png)

---
##Create a DevOps Services account and project

In another browser tab, go to [hub.jazz.net](hub.jazz.net), which opens 
DevOps Services, where you can manage and develop projects in the cloud. If you don't have one, create 
a DevOps Services account.

![IDS home](images/jh_home.png)

After you sign in, the MY STUFF page opens. Click **Start coding in a new project**.

![IDS mystuff](images/jh_mystuff.png)

On the Create a project page, name the project and click **Connect to an external GitHub repository**.

![IDS create project](images/jh_createproject.png)

---
##Connect to an external GitHub repository 

In the field that is displayed, paste the URL to your GitHub repository.
 
**Tip:** To find the URL, go back to the GitHub browser tab where you created your repository and look in the lower right of the page for the **HTTPS clone URL** field. 
Copy that URL and go back to the DevOps Services browser tab.

![GitHub clone URL](images/github_cloneURL.png)

On the Create a project page, paste the URL into the **GitHub URL** field and click **CREATE**.
The overview page for the project opens. 

![IDS project overview](images/jh_projectoverview.png)

---
##Edit code

Click **EDIT CODE**. The Web IDE opens. The left side of the page shows a 
navigation tree for the code. Right-click the root folder, for example,
**jazzhubdemouser | coolwebsite**.

![IDS Web IDE](images/jh_editor.png)

A menu opens. Click **New > File** to create a file called `index.html`. 

![Web IDE menu](images/jh_menu.png)

In the editor pane, start writing some HTML.

![Edit file](images/jh_editfile.png)

Just write enough HTML to establish a page.
You can add more content later. 

![Edit file again](images/jh_editfileagain.png)

---
## Commit changes to your GitHub repository

On the navigation bar on the left, click the Git icon. The Git repository page opens
where you can commit a change to your GitHub repository.

![Git repo](images/jh_gitrepo.png)

To identify the changed files, select the **Select All** check box.

![Changed files](images/jh_chgedfiles.png)

Add a comment for the commit message and click **COMMIT**.

![Commit files](images/jh_commit.png)

Your change is displayed in the **Commits** section. 
Click **PUSH**. 

![Push files](images/jh_push.png)

For every change that
you push, you must provide your GitHub credentials.

![Push credentials](images/jh_credentials_submit.png) 

Type your GitHub user name and password, and click **Submit**.
 
The change is pushed to your GitHub repository. 

---
##Check your website 
The first time that you create a page, 
it can take up to 10 minutes for the page to start working. 
After that, changes that you make to the page are shown right away.
 
If this is the first time that you’ve used GitHub, 
you must verify your GitHub email address. 

To go to your new website, type `[your username].git` 
into your web browser.

![my website](images/github_website.png) 

Wait about 10 minutes to see the website. 
You can find information about GitHub pages at [pages.github.com](https://pages.github.com/).

---
##Make more changes to your website
Now, you can add a `.css` file and JavaScript, and drag photos 
from your desktop to make your website more interesting.

![Edit for css](images/jh_editfileforcss.png) 

You can add a `.css` file with a reference to a `site` CSS class  that makes  
the division orange, the text white, and that adds a margin and padding to the page. 

**Tip:** If you right-click `index.html`, you can open it with a web browser to check what 
your page looks like before you commit it again.

Commit this change the same way as before: go to the Git repository, add a comment, 
commit, and push the change. You can see the change right away. 

![my website with style](images/github_websitewithcss.png)

Each commit is recorded. You can build a website by storing new versions of 
the files, so if you make a mistake, you can easily go back and see what changed.

![File differences](images/jh_comparediffs.png) 

For example, you can see the color change from orange to red. 
You can compare changes for the file by going to the **Changed Files** section
and click **Compare**.
From the **Commits** section you can expand **HISTORY** to see the changed files.

---
##Summary

You saw how to build a website by using
GitHub pages and DevOps Services. 
You quickly set up accounts and repositories and
pushed your first page to GitHub. You continued to
make changes, commit and push them, and then saw  
your website updated right away.

Tell us what you think. What worked well? 
What could be better? Post your comments to the [IBM DevOps Services forum](https://www.ibmdw.net/answers?community=jazzhub) 
or send an [email](mailto:hub%40jazz.net).

---
##Tutorials

To learn more about IBM Bluemix&trade; and DevOps Services capabilities, see these tutorials:

* [Getting Started with IBM Bluemix and IBM DevOps Services using node.js](/tutorials/jazzeditor)
* [Getting Started with IBM Bluemix and IBM DevOps Services using Java](/tutorials/jazzeditorjava)
* [Setting up Eclipse, Git, and Rational Team Concert Desktop Clients to access IBM DevOps Services](/tutorials/clients)
* [Developing IBM Bluemix applications in Node.js with the IBM DevOps Services Web IDE](/tutorials/jazzweb)
* [Developing IBM Bluemix applications in Java with Eclipse and IBM DevOps Services](/tutorials/jazzrtc)    
* [Getting Started with tracking and planning using IBM DevOps Services](/tutorials/trackplan)  
    
&copy; Copyright IBM Corporation 2013, 2014.
