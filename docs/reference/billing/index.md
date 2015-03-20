#Configure Bluemix billing for Bluemix DevOps Services

Last modified: 20 March 2015

All IBM&reg;  Bluemix&trade; DevOps Services projects include an allowance of free services. If you exceed your allowances, your work is interrupted. To avoid interruptions, set up a Bluemix billing account and configure your services. By configuring your Bluemix account, you also get advanced features for monitoring your builds, deployments, and status of your projects. 

If you plan to use the Delivery Pipeline (Build & Deploy) and Track & Plan services beyond the free allowance, configure both services. Each service requires a separate billing configuration. 

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
			<td>60 minutes per app (project), per month</td>
			<td rowspan="2">See the Bluemix [Pricing page](https://ace.ng.bluemix.net/#/pricing/)</td>
		</tr>
		<tr style="background-color: #FFFFFF">
			<td>App instances (deployers)</td>
			<td>First two app instances (deployers) per app (project), per month</td>
		</tr>
		<tr style="background-color: #EBEBFF">
			<td rowspan="2">Track &amp; Plan</td>
			<td rowspan="2">Users per app</td>
			<td>Private project: Three users</td>
			<td rowspan="2">See the Bluemix [Pricing page](https://ace.ng.bluemix.net/#/pricing/)</td>
		</tr>
		<tr style="background-color: #EBEBFF">
			<td>Public project: Unlimited users</td>
		</tr>
	</tbody>
</table> 

---
##Set up a billing account

Before you set up your billing account, determine what the best plan for your project is. [Review the Bluemix plans](https://www.ng.bluemix.net/docs/#acctmgmt/billing.html#bil_plan).

**Important:** The person who is responsible for setting up the billing account might not be the same person who is most affected by build and deployment failures and blocked access to Track & Plan pages. If you are not the person who sets up the account, ask your Bluemix billing manager to enable your billing account early.

To set up your billing account, complete these steps: 
1. Go to your Bluemix dashboard and select the space that is listed in your Bluemix DevOps Services project settings. 
2. Click **Services**, and from the DevOps section, select either **Delivery Pipeline** or **Track & Plan**.
3. Make sure that the space that corresponds to your Bluemix DevOps Services Bluemix project is selected.
4. Choose a billing plan.  
5. Click **Create.**

---
##Monitor your usage


You can monitor the usage details for your Bluemix account. For more information, [see the billing and usage documentation](https://www.ng.bluemix.net/docs/#acctmgmt/index-gentopic1.html#bil_usage). To determine costs, [see the Bluemix Pricing page](https://bluemix.net/#/pricing).

The Delivery Pipeline and Track & Plan services use metered pricing, where you pay based on consumption. However, they also include a free monthly allowance.

To help monitor monthly usage, [see the Bluemix cost estimator](https://ace.ng.bluemix.net/#/pricing/paneId=pricingSheet).

To see your usage details, click **Profile Settings <img src="./images/bm-profilealien.png"  align="bottom" style="display: inline; margin: 0px; border-style: none; margin-bottom: -10px;"> > Account > Usage Details**.





