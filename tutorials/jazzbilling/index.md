#Configuring Bluemix billing for DevOps Services

All IBM DevOps Services projects include an allotment of free services. To avoid service interruptions when you exceed those allotments, you must set up an IBM&reg; Bluemix&trade; billing account and configure DevOps Services Add-ons. 

You can set up your account as soon as you set up your DevOps Services project or any time before your free services run out. You won't forfeit your free allotment, even when you set up billing. The free allotment varies, depending on whether your project is public or private, but to set up your billing account, you must set up Delivery Pipeline or Track & Plan Add-ons for your corresponding Bluemix space.

As a project owner you can set up a project in two ways:
* Create an app on Bluemix and add DevOps Services Add-ons
* Set up a project using DevOps Services and deploy it to Bluemix

Either way, managing your account is the same. When your trial period ends or if your project requires advanced features immediately, we give you the tools to manage your account and monitor your usage.

---

### Understanding billing thresholds

Your team's work is free until you reach a billing threshold by using up your free allotments. After you exceed those allotment thresholds, your service will be interrupted unless you set up your Bluemix billing account.

<table border="1" summary="" width="100%">
	<tbody>
		<tr>
			<th>Add-on</th>
			<th>Charging metric</th>
			<th>Free allotment</th>
			<th>Cost</th>
		</tr>
		<tr style="background-color: #FFFFFF">
			<td rowspan="2">Delivery Pipeline</td>
			<td >Build minutes</td>
			<td>60 minutes per application (project), per month</td>
			<td rowspan="2">See Bluemix [Pricing Sheet](https://ace.ng.bluemix.net/#/pricing/)</td>
		</tr>
		<tr style="background-color: #FFFFFF">
			<td>Application instances (deployers)</td>
			<td>First two application instances (deployers) per application (project), per month</td>
		</tr>
		<tr style="background-color: #EBEBFF">
			<td rowspan="2">Track &amp; Plan</td>
			<td rowspan="2">Users per application</td>
			<td>Private project: Three users</td>
			<td rowspan="2">See Bluemix [Pricing Sheet](https://ace.ng.bluemix.net/#/pricing/)</td>
		</tr>
		<tr style="background-color: #EBEBFF">
			<td>Public project: Unlimited users</td>
		</tr>
	</tbody>
</table> 

If a billing account hasn't been established for your project and you get close to exceeding your billing threshold, you will receive a warning similar to this:
![Billing warning](/tutorials/jazzbilling/images/warn_track_plan.png)

**Note:** The user responsible for setting up billing might not be the same user who triggers a warning. Enabling your Bluemix billing account right away will protect your project from build and deployment failures and blocked access to Track & Plan pages.

---
##Enabling your Bluemix account
To protect your project from service interruptions it's a good idea to enable your Bluemix billing account by configuring the DevOps Services Add-ons that your project needs right away. Before you can do that, you need a Bluemix account and a DevOps Services project. If you need details on how to do that, we have a couple tutorials to get you started:
* [Getting started with Bluemix and DevOps Services using Node.js](https://hub.jazz.net/tutorials/jazzeditor/)
* [Getting started with Bluemix and DevOps Services using Java&trade;](https://hub.jazz.net/tutorials/jazzeditorjava/)

The Delivery Pipeline and Track & Plan Add-ons are the services that link your Bluemix space and DevOps Services projects together.

To enable your account for billing, complete these steps:
1. Go to the your Bluemix dashboard and select your space. 
2. Click *Add-ons* and select either **Delivery Pipeline** or **Track & Plan** from the DevOps catalog.
3. Make sure the space that corresponds to your DevOps Services project is selected and click **Create.**



---
##Monitoring your usage

You can manage your Bluemix account by viewing [billing and usage](https://www.ng.bluemix.net/docs/#acctmgmt/index-gentopic1.html#bil_usage) information and determine costs by visiting the [Bluemix Pricing page](https://bluemix.net/#/pricing).

The Delivery Pipeline Add-on and the Track & Plan Add-on
use metered pricing, where you pay based on consumption but they also include free
monthly allotments. You can find more information about pricing from the DevOps section of the 
[Bluemix Pricing page](https://bluemix.net/#/pricing).

To help you monitor monthly usage, see the cost estimator on the [Bluemix Pricing page](https://bluemix.net/#/pricing).

To see your usage details from **Profile Settings > Account > Usage Details**.


### Choosing a billing plan

Before your free trial period expires, decide which billing plan 
is best for your project. Read [Bluemix plans](https://www.ng.bluemix.net/docs/#acctmgmt/billing.html#bil_plan)
to see billing plan details.


---
##Account terminology

For account management, you need to know how we define a few key terms for billing. 
1. **Application** - An application is a uniquely named software program that is separately installable on 
a computing device. For billing purposes, an IBM DevOps Services 
project is considered to be an application.
2. **Application Instance** - An application instance is an instance of an application connected to or managed 
by the cloud service (Bluemix and IBM DevOps Services). An application in multiple environments, such as test, development, staging, and 
production, is counted as separate instances. Multiple copies of an application running in the same environment are also counted as separate instances. Your billing charges are calculated for each application instance beyond the free threshold. Also called "application instance (deployer)." 
3. **Application User** -  An authenticated user who accesses an application. For each application managed by Bluemix and IBM DevOps Services, you will be charged for each 
authenticated user who accesses that application during the billing period. Multiple authentications by a 
single user to a single application count as a single application user. A single user authenticating to 
multiple applications counts as multiple application users. 
Note: For the purposes of this charge metric, Application is defined to be an IBM DevOps Services 
Project, and membership in a Project during a billing period is deemed to be access to that Project during 
that billing period. Each Application-User is billed on a monthly basis. Partial month usage is not available at this time. 
4. **Deployment Stages** - Deployment stages are the steps in application development used for testing and running software. (Typical stages are "staging," "test," "QA," and "production.") For billing purposes, deployment stages are application instances.
5. **Organization (Orgs)** - The grouping methodology for users in Bluemix. Organizations are used to manage quotas. Users in an org share memory and service instance quotas. 
6. **Space** - A sub-group within a Bluemix organization. Users who are members of an organization are given access to one or more of its spaces, with permissions associated with a particular role (such as developer, manager, or auditor). Any member of the space can view apps, but only members with the developer role can create apps and add service instances to the space. Apps and service instances are associated with spaces. 

Additional resources: 
* [IBM Continuous Delivery Pipeline for Bluemix](http://www.ibm.com/software/sla/sladb.nsf/pdf/6616-01/$file/i126-6616-01_06-2014_en_US.pdf)
* [IBM Track and Plan for Bluemix](http://www.ibm.com/software/sla/sladb.nsf/pdf/6615-01/$file/i126-6615-01_06-2014_en_US.pdf)
* [IBM DevOps Services Terms of Use](https://hub.jazz.net/terms)



&copy; Copyright IBM Corporation 2013, 2014.
