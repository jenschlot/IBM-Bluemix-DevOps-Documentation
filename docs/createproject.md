<a id="startcodinginaproject"></a>
# Start coding in a new JazzHub project 

There are a lot of ways you can work with your application code, but one of the slickest is to use something called auto-deploy. 
Auto-deploy gives you the ability to modify the code that is running in your app by simply pushing the changes to a Git repository. 
The mechanism that implements auto-deploy is provided by JazzHub, so let's talk a bit more about that.

It turns out though that in addition to auto-deploy, JazzHub provides a lot of other capabilities that are useful for application development. 
Indeed, JazzHub is all about development with features like:

* Free public project hosting
* Multiple source code repositories
* Support for teams doing Agile development
* Web based development tools with customizations specifically for working with BlueMix
* and lots more coming...

If you want to know more about JazzHub, you can start by reading the information at http://hub.jazz.net, 
but since you're like us and prefer to try things rather than read about them, let's do something with JazzHub.

To start you must register at JazzHub. Take a look at [Register or sign in at JazzHub and BlueMix](registerandsignin).
After registering or signing in, you always end up at the JazzHub My Stuff page. From there, you can click **CREATE PROJECT** and fill in the details. 
Most of it is a personal choice, but there are are two important options. The first is the repo to use to manage your source code and the second is the option to deploy your app to BlueMix. 

JazzHub provides hosted Jazz SCM and Git repos and also lets you connect to an existing GitHub repo. If you choose hosted Git and you plan on using the Git command line or another Git client, you’ll need the Git Repository URL. The repository URL is shown on this page and is also  available later on your project’s pages.
Or, if you have source code in a project at GitHub, you can choose GitHub as an option and specify the URL to your GitHub repository.

In addition to enabling auto-deploy for the project, choosing the option to deploy to BlueMix configures the project with other capabilities that are useful for BlueMix development — more about that later.
 
Once the project is created, you are taken to the new project's home page. There is lots of useful information on this page, but since you want to work with the code for your app, the most important information is the **AUTO-DEPLOYMENT** tab in the left-hand pane. Clicking that tab opens a page that lets you configure (and see the status of) auto-deployment from this project.

Basically, all you do is change the switch to **ON**. Once auto-deployment is on, a dialog prompts you for your BlueMix credentials, so JazzHub can verify that it can push code on your behalf. After that, the page switches to something like this image:

>	![Auto deploy page](../images/guidebm/jazzhubautodeploypage.jpg)

Notice the Git URL field. That is the URL that you are going to use with your Git commands. 
You can copy it now, or come back to this page later.

You can auto-deploy your app changes to BlueMix. Because BlueMix is based on CloudFoundry, it is also possible to 
manually deploy apps directly to BlueMix using the standard cf and gcf command line tools. Similarly, 
in the JazzHub Web IDE, you can click **Deploy** to directly deploy whatever you are working on to BlueMix.

In both cases, this can be an effective way to work when you are doing rapid, solo development, 
but for many of you, the added security of having auto-deploy control of what is being pushed, 
is a better way to go. In essence, by using auto-deploy you always know that the code running in the application 
matches some known state in the repository, instead of whatever happened to be in your working directory at the time you pushed.


