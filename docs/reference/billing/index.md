#Configuring IBM Bluemix billing for IBM DevOps Services
Last modified: 16 December 2014

All IBM&reg; DevOps Services projects include an allowance of free services. If you exceed your allowances, your work is interrupted. To avoid interruptions, set up a Bluemix billing account and configure your services.

If you plan to use the Delivery Pipeline and Track & Plan services beyond the free allowance, you must configure both services. Each service requires a separate billing configuration.

### Table: Free allowance details
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

---
##Setting up a billing account

To select the best plan for your project, before you set up your billing account, review the [Bluemix plans](https://www.ng.bluemix.net/docs/#acctmgmt/billing.html#bil_plan).

**Note:** The person who is responsible for setting up the billing account might not be the same person who receives a warning. To protect your project from build and deployment failures and blocked access to the Track & Plan pages, ask your Bluemix manager or billing manager to enable your Bluemix billing account early.

To set up your billing account, complete these steps: 
1. Go to your Bluemix dashboard and select the space that is listed in your DevOps Services project settings. 
2. Click **Services**, and from the DevOps section, select either **Delivery Pipeline** or **Track & Plan**.
3. Make sure that the space that corresponds to your DevOps Services project is selected.
4. Choose a billing plan.  
5. Click **Create.**

---
##Monitoring your usage


You can monitor the usage details for your Bluemix account. For information, see the [billing and usage documentation](https://www.ng.bluemix.net/docs/#acctmgmt/index-gentopic1.html#bil_usage). To determine costs, see the [Bluemix pricing page](https://bluemix.net/#/pricing) .

The Delivery Pipeline and Track & Plan services use metered pricing, where you pay based on consumption; however, they also include a free monthly allowance.

To help monitor monthly usage, see the Bluemix [cost estimator](https://ace.ng.bluemix.net/#/pricing/paneId=pricingSheet).

To see your usage details, click **Profile Settings (<img src="images/bm-profilealien.png"  align="bottom" style="display: inline; margin: 0px; border-style: none; margin-bottom: -10px;">) > Account > Usage Details**.



---
##Billing terminology

Several terms pertain to billing; for example, *application instance* and *application user*. To become familiar with the billing terminology, see the [IBM DevOps Services Terms of Use](https://hub.jazz.net/terms).


&copy; Copyright IBM Corporation 2013, 2014.
