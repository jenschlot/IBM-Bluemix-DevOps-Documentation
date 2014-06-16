# FAQs
##### Updated on June 13, 2014

Can't find the answer to your question here? [Check out our forum](https://www.ibmdw.net/answers?community=jazzhub).
____

-   [I see JazzHub is now called IBM DevOps Services. Can you tell me
    more?](#q1)
-   [How much does it cost?](#q2)
-   [What additional help resources are available?](#q17)
-   [Why does my sign in to DevOps Services fail from my Rational Team
    Concert desktop client or Git client?](#rtcgit)
-   [Can I connect my project to a GitHub repository?](#git)
-   [Is DevOps Services right for me if our team is not developing
    code?](#q5)
-   [How do I report a bug?](#q7)
-   [How can I provide additional feedback?](#q8)
-   [I'm an IBMer. What do I need to know about starting a DevOps
    Services project?](#ibmer)
-   [How can I report abuse?](#q18)
-   [How can I see what's new?](#q19)
-   [Which browser should I be using?](#q20)
-   [Which repos can  I use?](#q21)
-   [Which local clients can I use?](#q22)
-   [Tips for using the Eclipse RTC client](#rtc)

____

<a name="q1"></a>

### I see JazzHub is now called IBM DevOps Services. Can you tell me more? 

JazzHub has a new name! The JazzHub of today began its life as an experimental development collaboration hub for academia and researchers, based on IBM's Jazz technology. We learned a lot from that experience and since then we have re-implemented JazzHub in the cloud and opened it up to everyone.

We integrated the [Eclipse](http://eclipse.org/ "Eclipse") Orion Web IDE, introduced the ability to deploy applications directly to [IBM's BlueMix Cloud Platform](https://ace.ng.bluemix.net/ "BlueMix"), and we
plan to expand that capability to include continuous integration, unit test, and deployment based on Jenkins and UrbanCode. With these new capabilities and more to come, JazzHub builds on the core Jazz services to provide a pretty nice environment for cloud application development. To reflect the expanded role of JazzHub in the IBM family, we are renaming it "IBM DevOps Services", or "IDS" for short. JazzHub will continue to refer to the underlying technology stack, as in "Powered by JazzHub".

<a name="q2"></a>

### How much does it cost?

Read the [latest information about cost](/learn/cost).

<a name="q17"></a>

### What additional help resources are available? 

We developed the following tutorials to help you get started.

- [Getting Started with BlueMix and DevOps Services using Node.js](/tutorials/jazzeditor)
- [Getting Started with BlueMix and DevOps Services using Java](/tutorials/jazzeditorjava)
- [Setting up Eclipse, Git, and RTC Desktop Clients to access DevOps Services](/tutorials/clients)
- [Developing BlueMix applications in Node.js with the DevOps Services Web IDE](/tutorials/jazzweb)
- [Developing BlueMix applications in Java with Eclipse and DevOps Services](/tutorials/jazzrtc)

<a name="rtcgit"></a>

### Why does my sign in to DevOps Services fail from my Rational Team Concert desktop client or Git client? 

You can now sign in to DevOps Services with your Jazz User ID or your IBM id. More than likely, you are reading this FAQ because you use an IBM id to access DevOps Services, and you cannot sign in to DevOps Services from your Rational Team Concert desktop client, or you see an authentication failure when you try to access your Git repository from your local Git client. This failure is probably because your IBM id and Jazz User ID are linked, and you did not use your IBM id password with your Jazz User ID. To fix this problem, you must sign in with your Jazz User ID and IBM id password.

This odd combination of Jazz User ID and IBM id password is required to support the desktop-client users who created data with Jazz User IDs. Desktop-client users include those who use Rational Team Concert clients for Eclipse and Visual Studio, as well as any local Git client. So, for now, new or existing desktop-client users must sign in with their Jazz User ID and IBM id password when they connect to DevOps Services.

<a name="git"></a>

### Can I connect my project to a GitHub repository? 

Yes. When you create a project, select the option for GitHub and input your GitHub repository.

You can track and plan the work you'll store in your GitHub repository from within DevOps Services. To configure GitHub to update your work items when you push your changes, navigate to your project and click the **configure GitHub** link on the left side of the page.

You can also edit the code stored in your GitHub repository using the Web IDE. When you want to begin coding, navigate to your project and click **Edit Code** at the top of the page. Your GitHub repository will automatically be cloned for you, and your existing files will display in the navigation pane. You can create new files or edit existing ones. When you have saved changes to your files, select **Activities \> Git Status**. On this page, you can stage, commit, and push your changes.

<a name="q5"></a>

### Is DevOps Services right for me if our team is not developing code? 

Yes it is. You can plan, define requirements, track tasks, and collaborate on any type of project.

<a name="q7"></a>

### How do I report a bug? 

If something's not working, we'd like to hear about it. [Report a bug here](https://hub.jazz.net/ccm01/web/projects/srich%20%7C%20JazzHub#action=com.ibm.team.dashboard.viewDashboard).

<a name="q8"></a>

### How can I provide additional feedback?

We love feedback. If you have a suggestion about how to make something better, [share your idea here](https://hub.jazz.net/ccm01/web/projects/srich%20%7C%20JazzHub#action=com.ibm.team.dashboard.viewDashboard).
To ask a question, check out [our forum](https://www.ibmdw.net/answers?community=jazzhub).

<a name="ibmer"></a>

### I'm an IBMer. What do I need to know about starting a DevOps Services project? 

In the spirit of open development, we encourage both public and private
projects, and we ask that you remember the following:

- Never add IBM Confidential information to a DevOps Services project. 
- Before getting involved in projects that have open source code, consult the [Open Source Participation Guidelines](https://w3-connections.ibm.com/wikis/home?lang=en-us#!/wiki/W783ba5fa6c1a_40b3_945a_07d0eb0115bd).
- When participating in projects on your own time, follow the [Business Conduct Guidelines](http://w3-03.ibm.com/ibm/documents/corpdocweb.nsf/ContentDocsByTitle/Business+Conduct+Guidelines), especially section 5.0 On Your Own Time. -- Talk it over with your manager, and involve your IBM legal contact
  as needed.

<a name="q18"></a>

### How can I report abuse? 

To report an instance of abuse of DevOps Services or a violation of the
[Terms of Use](/terms), send an email to [hub@jazz.net](mailto:hub@jazz.net?Subject=Reporting%20abuse%20of%20JazzHub&Body=Please%20include%20the%20following%20information%3A%0A%0A%20-%20Your%20email%20address%3A%0A%20-%20The%20URL%28s%29%20where%20you%20observed%20abuse%20on%20Jazzhub%3A%0A%20-%20Any%20other%20details%20you%20feel%20could%20help%20in%20our%20investigation%20of%20this%20issue%3A%0A%0AThank%20you%20for%20your%20report%2C%0A%0AThe%20JazzHub%20Team). Please include as much information as possible including the URL where you see the abuse and a description of the nature of the problem.

<a name="q19"></a>

### How can I see what's new?

See our [What's New](/whatsnew) page.

<a name="q20"></a>
### Which browser should I be using? 

DevOps Services supports the following browsers:

<div class="jh-columns">
	<div class="f_left google-chrome pts pbs mrxs ">
		__Chrome__ v24+
	</div>
	<div class="f_left mozilla-firefox pts pbs mrxs ">
		__Firefox__ v17+
	</div>
	<div class="f_left microsoft-ie pts pbs mrxs ">
		__Internet Explorer__ 10+
	</div>
	<div class="f_left apple-safari pts pbs">
		__Safari__ 6+
	</div>
</div>


If your browser is not listed above, you may have a compromised experience.

<a name="q21"></a>

### Which repos can  I use? 

DevOps Services supports Git, GitHub and Jazz Source Control (from Rational Team Concert).

#### Comparison of Git, GitHub and Jazz Source Control Management (Jazz SCM).

<div name="table-header" class="jh-columns pbs">
	<div class="jh-col-12-2 f_left prm">__Repo__</div>
	<div class="jh-col-12-7 prm">__Description__</div>
	<div class="jh-col-12-2 f_right">__Location__</div>
</div> 
<div name="git" class="jh-columns pbs">
	<div class="jh-col-12-2 f_left prm">Git</div>
	<div class="jh-col-12-7 prm">Distributed version control system. Git is responsible for keeping track of changes to content (usually code files) and it provides mechanisms for sharing that content with others</div>
	<div class="jh-col-12-3 f_right">[DevOps Git](https://hub.jazz.net/git "DevOps Git - https://hub.jazz.net/git")</div>
</div> 
<div name="github" class="jh-columns pbs">
	<div class="jh-col-12-2 f_left prm">Git Hub</div>
	<div class="jh-col-12-7 prm">Hosting Service for Git Repositories</div>
	<div class="jh-col-12-3 f_right">GitHub</div>
</div> 
<div name="jazz-scm" class="jh-columns pbs">
	<div class="jh-col-12-2 f_left prm">Jazz SCM</div>
	<div class="jh-col-12-7 prm">Rational Team Concert source control stores artifacts such as repository files and folders in the Jazz repsitory</div>
	<div class="jh-col-12-3 f_right">[DevOps Services Site](https://hub.jazz.net/ccm "DevOps Services Site - https://hub.jazz.net/ccm")</div>
</div> 

<a name="q22"></a>

### Which local clients can I use? 

DevOps Services supports the Eclipse client (with Rational Team Concert extension) 

<a name="rtc"></a>

### How do I get most out of the Eclipse Rational Team Concert client 

You should set UTF-8 as the default encoding in the preferences using *Window* > *Preferences* > *General* > *Workspaces*.