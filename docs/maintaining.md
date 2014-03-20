Maintaining JazzHub.Tutorials In UNIX
=====================================

Prerequisites
-------------

* <tt>git</tt>
* <tt>node</tt>
* <tt>npm</tt>

In a Nutshell
-------------

		# Get source
		git clone https://hub.jazz.net/git/agarcher/JazzHub.Tutorials
		cd JazzHub.Tutorials
		# Build and run
		npm install
		node app
		^C
		# ^-- Browse to http://localhost:3000 by default.
		# Edit and run
		vim app.js
		node app
		# Make changes available
		git add .
		git commit -m 'ct: Changed the app'
		git pull
		git push

Maintaining JazzHub.Tutorials In Eclipse
========================================

Prerequisites
-------------

* A modern version of Eclipse w/ the RTC plugin installed. See [this page](https://www-304.ibm.com/connections/wikis/home?lang=en-us#!/wiki/JazzHub%20Development/page/Eclipse%20IDE%20Setup)

Install Git Support in Eclipse
------------------------------

* Choose the *Help/Install New Software* menu.
* Choose the source representing the Eclipse release.
* Search for *Git*
* Choose *Eclipse Git Team Provider* and click Install.
* Confirm all pages in the wizard.
* After the wizard confirm you want to restart Eclipse.

Install <tt>node</tt>
---------------------

* Browse to [the node website](http://nodejs.org/download/) and grab the 64-bit installer.
* Run the installer.  Choose defaults.

Connect to the Project on JazzHub
---------------------------------

* Click on the JazzHub icon in the *Team Artifacts* view.
* Login and continue through the wizard, selecting the *JazzHub Tutorials* project
* Return to *Team Artifacts* and IGNORE the Source Control drop down.  This was only so you get visiblity on work items opened through the JazzHub project.

Create a new Git Branch for code on JazzHub
-------------------------------------------

* Switch to the *Git perspective* (CTRL+3, type Git, choose Git Perspective)
* Click on *Clone a Git Repository*.
* Enter <tt>https://hub.jazz.net/git/agarcher/JazzHub.Tutorials</tt> as the URL, hit tab, and a whole bunch of fields will be populated.  Enter your JazzHub username and password and hit Next.
* Click next to select the master branch (the only branch)
* On the next page, confrim where Eclipse will be placing your clone of the branch. The default will work.
* On the next page, choose the option to import existing projects.
* Return to the *Java EE perspective* (CTRL+3, type *Java EE*, choose *Java EE perspective*).
* Open the Project Explorer view (CTRL+3, type *Project Explorer*, hit enter)
* Notice a new project, *JazzHub.Tutorials*.

Running the server
------------------

* Open the *Project Explorer* view, and expand *JazzHub.Tutorials/eclipse*.
* From the context menu of *...npm install...* choose *Run As/...npm install....*
* A console will pop up.  Wait until the process terminates.
* Back in Project Explorer, launch the *...node...* launch.
* Review the output in the console (NB: port number).
* Browse to the server on that port.
* Most changes require a server restart.

Making Changes
--------------

* Use the Project Explorer view to locate and change files, run the server and test things out.
* When you're satisfied, change to the Synchronize perspective in Eclipse.
* In the *Synchronize* view, select *Synchronize...* from the drop down menu of the first icon in the view's toolbar.
* Choose *Git* and next.
* On this page:
    * For the *Destination*, choose *refs/heads/master*.
    * Check both checkboxes and click Finish.
* The *Synchronize view* should be populated with what changed locally.  Review these changes.
* When you want to commit, select Commit... from the context menu of the project directory.
* Enter a meaningful commit message.  A good convention is:
    * Single line.
    * Prefix with your initials.
* Review the files in the lower part of the window.  Git will not automatically add new files, so be careful to check what you want to commit.
* If these changes complete your feature, click on Commit and Push.  You're done.
* If this is just a step towards completing something, click Commit to make a new version of your local clone of the main branch.  Later, when you're ready to push your changes, click on the Push button (the cylinder with a red arrow) in the Synchronize view to push.
* Before pushing changes, you'll get a dialog listing the commits you're about to push.  Review and click OK to confirm.
* Browse to (the deploy tab)[https://hub.jazz.net/project/agarcher/JazzHub%20Tutorials/deployment] of the JazzHub Tutorials project to check the progress of the auto-deploy.
* Browse to (the deployed instance)[http://jazzhublearni.ng.bluemix.net/] to test things out.
