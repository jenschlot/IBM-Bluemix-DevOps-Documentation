# FAQs
##### Updated on August 28, 2014

Can't find the answer to your question here? [Check out our DevOps Services Forum](https://developer.ibm.com/answers/questions/?community=devops-services).
____

-   [I see JazzHub is now called IBM DevOps Services. Can you tell me
    more?](#q1)
-   [How much does it cost?](#q2)
-   [What additional help resources are available?](#q17)
-   [Why does my attempt to sign in to DevOps Services fail from my Rational Team
    Concert desktop client or Git client?](#rtcgit)
-   [Why can I no longer sign in to DevOps Services by using my Jazz ID?](#login)
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

____

<a name="q1"></a>

### I see JazzHub is now called IBM&reg; DevOps Services. Can you tell me more? 

JazzHub has a new name! The JazzHub of today began life as an experimental development collaboration hub for 
academia and researchers, which was based on IBM&reg; Jazz&trade; technology. We learned a lot from that 
experience, and since then, we implemented JazzHub again in the cloud and opened it up to everyone.

We integrated the [Eclipse](http://eclipse.org/ "Eclipse") Orion Web IDE and introduced the ability to deploy applications directly to the [IBM Bluemix&trade; cloud platform](https://bluemix.net/ "Bluemix"). IBM also 
plans to expand that capability to include continuous integration, unit testing, and deployment that is based 
on Jenkins and IBM UrbanCode. With these new capabilities and more to come, JazzHub builds on the core 
Jazz services to provide a pretty nice environment for cloud application development. 
To reflect the expanded role of JazzHub in the IBM family, we are renaming it "IBM DevOps Services." 
"JazzHub" will continue to refer to the underlying technology stack, as in "Powered by JazzHub."

<a name="q2"></a>

### How much does it cost?

Read the [latest information about cost](/learn/cost).

<a name="q17"></a>

### What additional help resources are available? 

We developed the following tutorials to help you get started.

- [Getting Started with Bluemix and DevOps Services by using Node.js](/tutorials/jazzeditor)
- [Getting Started with Bluemix and DevOps Services by using Java](/tutorials/jazzeditorjava)
- [Setting up Eclipse, Git, and Rational Team Concert Desktop Clients to access DevOps Services](/tutorials/clients)
- [Developing Bluemix applications in Node.js with the DevOps Services Web IDE](/tutorials/jazzweb)
- [Developing Bluemix applications in Java with Eclipse and DevOps Services](/tutorials/jazzrtc)
- [Getting started with tracking and planning in IBM DevOps Services](/tutorials/trackplan)

<a name="rtcgit"></a>

### Why does my sign in to DevOps Services fail from my Rational Team Concert&trade; desktop client or Git client? 

To sign in to DevOps Services from a web browser, you must first link an IBM id with a Jazz ID. After you link the IDs, you use your IBM id and IBM password to 
sign in to DevOps Services from a web browser. However, you use the combination of your Jazz ID and
 your IBM password to sign in from your Rational Team Concert&trade; desktop client or to access a Git 
 repository from your local Git client. This combination of Jazz ID and IBM password is a temporary 
 solution: the goal is to move toward a single sign-on experience with an IBM id.

<a name="login"></a>

### Why can I no longer sign in to DevOps Services by using my Jazz ID?

IBM DevOps Services, formerly known as JazzHub, initially required a Jazz ID 
to sign in. To move toward the goal of a single sign-on experience for all IBM services 
through a single IBM id, DevOps Services now requires that Jazz users link 
their Jazz ID with an IBM id, and all web users must user their IBM id to 
sign in.  

<a name="git"></a>

### Can I connect my project to a GitHub repository? 

Yes. When you create a project, select the option for GitHub and input your GitHub repository.

You can track and plan the work you'll store in your GitHub repository from within DevOps Services. To configure GitHub to update your work items when you push your changes, navigate to your project and click the **configure GitHub** link on the left side of the page.

You can also edit the code that is stored in your GitHub repository by using the Web IDE. When you want to begin coding, navigate to your project and click **Edit Code** at the top of the page. Your GitHub repository will automatically be cloned for you, and your existing files will display in the navigation pane. You can create new files or edit existing ones. After you save changes to your files, select **Activities \> Git Status**. On this page, you can stage, commit, and push your changes.

<a name="q5"></a>

### Is DevOps Services right for me if our team is not developing code? 

Yes it is. You can plan, define requirements, track tasks, and collaborate on any type of project.

<a name="q7"></a>

### How do I report a bug? 

If something's not working, we'd like to hear about it. [Report a bug here](https://hub.jazz.net/ccm01/web/projects/srich%20%7C%20JazzHub#action=com.ibm.team.dashboard.viewDashboard).

<a name="q8"></a>

### How can I provide more feedback?

We love feedback. If you have a suggestion about how to make something better, [share your idea here](https://hub.jazz.net/ccm01/web/projects/srich%20%7C%20JazzHub#action=com.ibm.team.dashboard.viewDashboard).
To ask a question, check out our [DevOps Services Forum](https://developer.ibm.com/answers/questions/?community=devops-services).

<a name="ibmer"></a>

### I'm an IBMer. What do I need to know about starting a DevOps Services project? 

In the spirit of open development, we encourages both public and private
projects and ask that you remember these guidelines:

- Never add IBM Confidential information to a DevOps Services project. 
- Before you get involved in projects that have open source code, consult the [Open Source Participation Guidelines](https://w3-connections.ibm.com/wikis/home?lang=en-us#!/wiki/W783ba5fa6c1a_40b3_945a_07d0eb0115bd).
- When you participate in projects on your own time, follow the [Business Conduct Guidelines](http://w3-03.ibm.com/ibm/documents/corpdocweb.nsf/ContentDocsByTitle/Business+Conduct+Guidelines), especially section 5.0 On Your Own Time. Talk it over with your manager, and involve your IBM legal contact
  as needed.

<a name="q18"></a>

### How can I report abuse? 

To report an instance of abuse of DevOps Services or a violation of the
[Terms of Use](/terms), send an email to [hub@jazz.net](mailto:hub@jazz.net?Subject=Reporting%20abuse%20of%20JazzHub&Body=Please%20include%20the%20following%20information%3A%0A%0A%20-%20Your%20email%20address%3A%0A%20-%20The%20URL%28s%29%20where%20you%20observed%20abuse%20on%20Jazzhub%3A%0A%20-%20Any%20other%20details%20you%20feel%20could%20help%20in%20our%20investigation%20of%20this%20issue%3A%0A%0AThank%20you%20for%20your%20report%2C%0A%0AThe%20JazzHub%20Team). 
Please include as much information as possible including the URL where you see the abuse and a description of the nature of the problem.

<a name="q19"></a>

### How can I see what's new?

See our [What's New](/whatsnew) page.

<a name="q20"></a>
### Which browser should I use? 

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


If your browser is not in the preceding list, your experience might not be optimal.

&copy; Copyright IBM Corporation 2013, 2014.
