#Configuring IBM Bluemix billing for IBM DevOps Services


IBM&reg; DevOps Services provides the Delivery Pipeline and Track & Plan services for IBM Bluemix&trade;.
All DevOps Services projects include an allowance of free services. To avoid interruptions when you exceed your allowances, you must set up a Bluemix billing account and configure your services. 

You can set up your Bluemix billing account independently from setting up your DevOps Services project at any time before your free services run out. Don't worry, you won't forfeit your free allowance when you set up billing. 

As a project owner you can set up a DevOps Services project and configure billing in two ways:
* Create an app on Bluemix > add a Git repository > add either the Delivery Pipeline service, the Track & Plan service, or both to the Bluemix space in which you created the app.
* Create a project using DevOps Services > configure the project to deploy to Bluemix > add either the Delivery Pipeline service, the Track & Plan service, or both to the Bluemix space that is configured in your project settings. 

Either way, managing your billing account is the same. When your trial period ends, you will be notified that you must configure billing before you can continue using these services.

---

### Understanding billing thresholds

You must configure both Delivery Pipeline and Track & Plan if you plan to use both. Configuring one service doesn’t affect the other and each service requires a separate billing configuration.  

### Table 1. Usage thresholds that trigger charges
<table border="1" summary="" width="100%">
	<tbody>
		<tr>
			<th>Service</th>
			<th>Charging metric</th>
			<th>Free allowance</th>
			<th>Cost</th>
		</tr>
		<tr style="background-color: #FFFFFF">
			<td rowspan="2">Delivery Pipeline</td>
			<td>Build minutes</td>
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

If a billing account hasn't been established for your project and you get close to exceeding your billing threshold, you will receive periodic warnings. Once you exceed your billing threshold, you will be blocked from the service or services.  

**Note:** The user responsible for setting up billing might not be the same user who triggers a warning. Enabling your Bluemix billing account right away will protect your project from build and deployment failures and blocked access to Track & Plan pages. Your Bluemix manager or billing manager can configure these services.

Protect your project from service interruptions by configuring billing between Bluemix and DevOps Services right away. Before you can do that, you need a Bluemix account and a DevOps Services project. If you need details, here are two tutorials to get you started:
* [Getting started with Bluemix and DevOps Services using Node.js](https://hub.jazz.net/tutorials/jazzeditor/)
* [Getting started with Bluemix and DevOps Services using Java&trade;](https://hub.jazz.net/tutorials/jazzeditorjava/)

To enable your account for billing, complete these steps:
1. Go to your Bluemix dashboard and select the space that is listed in your DevOps Services project settings. 
2. Click **Services** and select either **Delivery Pipeline** or **Track & Plan** from the DevOps section.
3. Make sure the space that corresponds to your DevOps Services project is selected.
4. Choose a billing plan that is best for your project. See [Bluemix plans](https://www.ng.bluemix.net/docs/#acctmgmt/billing.html#bil_plan) for billing plan details. 
5. Click **Create.**

---
##Monitoring your usage

You can monitor your Bluemix account by viewing your usage details. For information, see [billing and usage](https://www.ng.bluemix.net/docs/#acctmgmt/index-gentopic1.html#bil_usage) documentation and determine costs by visiting the [Bluemix pricing page](https://bluemix.net/#/pricing).

The Delivery Pipeline and Track & Plan services use metered pricing, where you pay based on consumption, but they also include a free monthly allowance. You can find more information about pricing from the DevOps section of the 
[Bluemix Pricing page](https://bluemix.net/#/pricing).

To help you monitor monthly usage, see the cost estimator on the [Bluemix Pricing page](https://bluemix.net/#/pricing).

To see your usage details go to **Profile Settings > Account > Usage Details**.

---
##Account terminology

For more information about terms like *application instance* and *application user*, as they pertain to billing, see the following DevOps Services documents:
* [IBM Continuous Delivery Pipeline for Bluemix](http://www.ibm.com/software/sla/sladb.nsf/pdf/6616-01/$file/i126-6616-01_06-2014_en_US.pdf)
* [IBM Track and Plan for Bluemix](http://www.ibm.com/software/sla/sladb.nsf/pdf/6615-01/$file/i126-6615-01_06-2014_en_US.pdf)
* [IBM DevOps Services Terms of Use](https://hub.jazz.net/terms)

For general understanding of terms like *orgs* and *spaces*, see the following Bluemix documents:
* [Bluemix organizations and spaces](https://www.ng.bluemix.net/docs/?cm_mc_uid=&cm_mc_sid_50200034|BLUEMIX=#acctmgmt/index.html#organdspaces)
* [Bluemix Terms](https://www.ng.bluemix.net/docs/?cm_mc_uid=&cm_mc_sid_50200034|BLUEMIX=#navigation/notices.html#terms)

&copy; Copyright IBM Corporation 2013, 2014.
