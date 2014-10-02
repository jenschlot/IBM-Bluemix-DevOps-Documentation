# Deployment

## Manual Deployment

In the Web IDE, while you're in the directory that contains your `manifest.yml` file, you can use the Deploy button to manually deploy whatever you're developing in the Web IDE to Bluemix. It is important to remember that the Deploy button in the Web IDE deploys the current state of your code in your Web IDE, while Auto-Deploy deploys from what is checked into the repository.

![About to click the Deploy button in the Web IDE][1]

Optionally, you could configure the Web IDE deploy and the Auto-Deploy to use different app names so that you can use the Web ID deploy as a personal test environment and the Auto-Deploy as a team integration environment.

Whether you are using command line tools or the Web IDE, they can be an effective way to work when you are doing rapid, solo development, but for many of you the added security of having auto-deploy control of what is being pushed is a better way to go. In essence, by using auto-deploy you always know that the code running in the application matches some known state in the repository, instead of whatever happened to be in your working directory at the time you pushed.

# Auto-deployment

Builds are triggered when changes are delivered to a project, and successful builds are automatically deployed. You can also manually deploy from the build history page by dragging a successful build into the box under a configured space, or by clicking the cloud icon beside a build and then selecting a space under **Deploy to**. 

![Deploying an app after expanding a completed build][2]

When the app is deployed, click on its web URL to give it a whirl:

![Our updated app on Bluemix][3]

&copy; Copyright IBM Corporation 2013, 2014.

[1]:/reference/images/manualdeploy.png 
[2]:/reference/images/deployto.gif
[3]:/reference/images/updatedapp.gif

