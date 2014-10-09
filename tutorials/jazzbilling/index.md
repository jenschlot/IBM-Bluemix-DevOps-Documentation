#Configuring Bluemix billing for IBM DevOps Services

All IBM DevOps Services projects include an allowance of free services. To avoid service interruptions when you exceed those allowances, you must set up a Bluemix billing account and configure the DevOps Services Add-ons. 

You can set up your account as soon as you set up your project or any time before your free services run out. You won't lose your free allowance, even when you set up billing. The free allowance varies, depending on whether your project is public or private, but to set up your billing account, you must set up Delivery Pipeline or Track & Plan Add-ons for your Bluemix organization.

##Starting a project

As a project owner you can set up a project in two ways:
* Create an app on Bluemix and add DevOps Services Add-ons
* Set up a project using DevOps Services and deploy it to Bluemix

Either way, managing your account is the same. When your trial period ends or if your project requires advanced features immediately, we give you the tools to manage your account and predict your expenses.

---

### Billing thresholds

Your team's work is free until you reach a billing threshold by using up your free allotments. 

|   **Add-on**      |  **Charging metric**               | **Free allotment**                            | ** Cost **                                  |
|:----------------  |:----------------                   |:-------------------                           |:-------------------                   | 
| Delivery Pipeline | Build minutes                      | 60 minutes per Application (Project), per month      |              |
|                   | Application instances (deployers)  | First 2 Application Instances (Deployers) per Application (Project), per month | See Bluemix [Pricing Sheet](https://ace.ng.bluemix.net/#/pricing/)|

|Track & Plan       | Users per application              |Public projects: unlimited users| |
|                   |                                    |Private projects: 3 users       | |





After you exceed those thresholds, your service will be interrupted unless you set up your Bluemix billing account.

---
##Enabling your Bluemix account
To manage your billing, you must have a Bluemix account. Go to the [IBM Bluemix home page](https://bluemix.net/) and log in or sign up for a new account. The Bluemix dashboard gives you an overview of the active Bluemix space for the Bluemix space that is associated with your project. (The organization is the account owner's user name.)


The Delivery Pipeline and Track & Plan Add-ons are the services that link your Bluemix and IBM DevOps Services projects together.

---
##Manage your billing account

You can manage your Bluemix account by viewing [billing and usage](https://www.ng.bluemix.net/docs/#acctmgmt/index-gentopic1.html#bil_usage) information and determine costs by visiting the [Bluemix Pricing page](https://bluemix.net/#/pricing).

The Delivery Pipeline Add-on and the Track & Plan Add-on
use metered pricing, where you pay based on consumption but they also include free
monthly allowances. You can find more information about pricing from the DevOps section of the 
[Bluemix Pricing page](https://bluemix.net/#/pricing).

To help you track monthly usage, see the cost estimator on the [Bluemix Pricing page](https://bluemix.net/#/pricing).

###Monitor usage 

You can monitor usage from **Profile Settings > Account > Usage Details**.

![Bluemix profile settings](images/bm-profilesettings.png)

### Choose a billing plan

Before your free trial period expires, decide which billing plan 
is best for your project. Read [Bluemix plans](https://www.ng.bluemix.net/docs/#acctmgmt/billing.html#bil_plan)
to see billing plan details.


---
##Account terminology

For account management, you need to know how we define a few key terms for billing. 
1. **Application** - An application is a uniquely named software program that is separately installable on 
a computing device. For billing purposes, application is defined to be an IBM DevOps Services 
Project.
2. **Application Instance** - An application instance is an instance of an application connected to or managed 
by the cloud service (Bluemix and IBM DevOps Services). An application in multiple environments, such as test, development, staging, and 
production, is counted as separate instances. Multiple copies of an application running in the same 
environment are also counted as separate instances. Your billing charges are calculated for each application instance beyond the free threshold. Also called "application instance (deployer)." 
3. **Application User** -  An authenticated user who accesses an application. For each application managed by Bluemix and IBM DevOps Services, you will be charged for each 
authenticated user who accesses that application during the billing period. Multiple authentications by a 
single user to a single application count as a single application user. A single user authenticating to 
multiple applications counts as multiple application users. 
Note: For the purposes of this charge metric, Application is defined to be an IBM DevOps Services 
Project, and membership in a Project during a billing period is deemed to be access to that Project during 
that billing period. Each Application-User is billed on a monthly basis. Partial month usage is not available at this time. 
4. **Deployment Stages** - Deployment stages are the steps in application development used for testing and running software. (Typical stages are "staging," "test," "QA," and "production.") For billing purposes, deployment stages are application instances.
5. **Organization (Orgs)** - The grouping methodology for users in Bluemix. Organizations are used to manage quotas. Users in an org share memory and service instance quotas. 
6. **Space** - A sub-group within a Bluemix organization. Users who are members of an org are given access to one or more of its spaces, with permissions associated with a particular role (such as developer, manager, or auditor). Any member of the space can view apps, but only members with the developer role can create apps and add service instances to the space. Apps and service instances are associated with spaces. 

Link to these terms docs? 
* [IBM Continuous Delivery Pipeline for Bluemix](http://www.ibm.com/software/sla/sladb.nsf/pdf/6616-01/$file/i126-6616-01_06-2014_en_US.pdf)
* [IBM Track and Plan for Bluemix](http://www.ibm.com/software/sla/sladb.nsf/pdf/6615-01/$file/i126-6615-01_06-2014_en_US.pdf)
* [IBM DevOps Services Terms of Use](https://hub.jazz.net/terms)



&copy; Copyright IBM Corporation 2013, 2014.
