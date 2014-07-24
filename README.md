NAME
----

jazzhubdocs


DESCRIPTION
-----------

Docs for the IBM DevOps Services cloud development environment.


MAINTAINING
-----------

Documents go under one of the following directories:

- features/
- glossary/
- help/faq/
- tutorials/

See existing documents for examples.


RUNNING
-------

	# In Windows:
	set PORT=3000
	
	# In Linux:
	export PORT=3000
	
	git clone https://hub.jazz.net/git/agarcher/JazzHub.Tutorials
	cd JazzHub.Tutorials
	npm install
	node app

	# Browse to https://localhost:3000 by default.

DEPLOYING
---------

Commit.  Deploys will go to [jazzhubdocs On Bluemix](http://jazzhubdocs.mybluemix.net/tutorials).


PERSONAL DEPLOY FROM ORION
--------------------------

To do a personal deployment from the Web IDE:

- Make sure you have a Bluemix account.
- Edit your **manifest.yml** file to point to a Bluemix hostname and application name you own.  Just make the changes locally.  Do not stage or commit these changes.
- Click on the *Deploy As* button in the Orion menubar and choose *Deploy Application From WebIDE to Bluemix*.
- Click on the *Deploy* button to attempt this deployment.  If the Bluemix application doesn't already exist, it'll be created.
- Browse to your application, but make sure to navigate to *https://YOURHOST.mybluemix.net/tutorials*, under the newly deployed app.  The */tutorials* is important.
- Return to the Web IDE and revert your changes to the *manifest.yml*.  Again, DO NOT commit this change.
- To redeploy to this application in the future, select it from the same *Deploy As* button you used before.
- When staging/committing changes, make sure not to stage changes under *launchConfigurations/* or *manifest.yml*.

BUGS
----

None known yet.


AUTHOR
------

The IBM DevOps Services Team <hub@jazz.net>




