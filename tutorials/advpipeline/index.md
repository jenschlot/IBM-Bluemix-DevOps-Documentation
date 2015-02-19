# Exploring advanced pipeline capabilities

Last modified: 18 February 2015

In this tutorial, you configure a pipeline in IBM Bluemix DevOps Services that:

* Builds a sample Java application
* Deploys the application to a staging instance on Bluemix and then runs a set of regression tests against it
* Deploys successfully built and tested builds of the application to two separate Bluemix regions

---
## Contents
* Before you begin
* Fork the sample project
* Somethingorother
* Summary

---
## Before you begin

To complete this tutorial, you need an [IBM id][30] that is registered with DevOps Services. Also, be sure to [register for Bluemix][32].

---
## Fork the sample project

You start with the sample project, [CloudTrader][2]. This Java project uses a DevOps Services-hosted Git repository. It includes application code, an Ant build script and a set of regression tests.

After you explore the project, make your own copy of it by forking it:

1. [Open the sample app's Overview page][2].
2. Click **Fork Project**.
3. Enter a name for your project, and make sure that the box **Make this a Bluemix Project** is selected.
4. Leave the other settings as they are, and then click **CREATE**.

![Fork project dialogue][1]

In a moment, your copy of the sample CloudTrader project opens. If you leave the project, you can find it by clicking **MY PROJECTS** on the navigation bar at the top of the page.

---
## Configure the pipeline

Next, configure a pipeline to build, test, and deploy the project. In this tutorial, the final pipeline comprises four stages:

1. **Build:** Build the code in the remote master branch of the Git repository.
2. **FVT:** When there is a successful build output from the Build stage, deploy that build and execute a set of regression tests against the application.
3. **PROD-US South:** When the deployment and regression tests in the FVT stage complete successfully, deploy the build from the Build stage to a datacenter in the United States.
4. **PROD-London:** When the PROD-US South stage completes successfully, deploy the build from the Build stage to a datacenter in London.

### Create the Build stage

Create a stage called Build that contains a build job and takes input from the project Git repository.

1. Click **BUILD & DEPLOY**.
2. Click **ADD STAGE**.
3. Click **MyStage** and change the stage name to `Build`. Note that, by default, this stage consumes input from the master branch of the Git repository.
4. Click **JOBS**, and then click **ADD JOB**. Select **Build**.
5. Click **Builder Type**, and then select **Ant**. 
6. In the **Working directory** field, enter `Cloudtrader`.
7. Clear the **Build Archive Directory** field.
8. Click **SAVE**. 

You now have a stage that will take input from the Git repository and run a build job that uses the build script in the CloudTrader directory.

### Create the FVT stage

Create a stage called FVT that takes input from the Build stage, runs a deploy job, and then runs a test job on the deployed application.

1. Click **ADD STAGE**.
2. Click **MyStage** and change the stage name to `FVT`. Note that, by default, this stage consumes input from the Build stage's build job.
3. Add a deploy job:
  1. Click **JOBS**, and then click **ADD JOB**. Select **Deploy**.
  5. Beside the **Space** field, click **+**. Type a name for the new space: `test`.
  6. In the Deploy Script field, delete the default script and type `source simple_deploy.sh`. 
    * You can enter a deploy script directly, or refer to a file in your repository. In this stage, you do the latter. 
4. Add a test job:
  1. At the top of the page, click **ADD JOB**. Select **Test**.
  2. Click the job name **Test**; change it to `Test App`. 
  3. In the Test Command field, below the existing line, add `ant -buildfile test.xml -DTARGET_URL="${TEST_URL}"`.
  4. Check **Enable Results Reporting**.
5. Define the environment properties that are used by your deploy and test job scripts:
    1. At the top of the page, click **ENVIRONMENT PROPERTIES**. 
    2. Using the **ADD PROPERTY** button, add the following three text properties:
    
Name  | Value
------------- | -------------
CF_HOSTNAME | DeliveryPipelineSample-[uniqueText]
TEST_URL  | set_in_job
CF_DOMAIN | mybluemix.net

Where `[uniqueText]` is a string of your own choosing. If the hostname is not unique across the domain, the deployment will fail.

When finished, click **SAVE**. 

You now have a stage that takes successful builds from the Build stage, run a deploy job and, using the included test script, run tests against the deployed application.

The environment properties that you provided are referenced in the deploy and test scripts. The deploy script, for example, uses the values of CF_HOSTNAME and CF_DOMAIN to determine your running application's URL. By leaving these values to be determined by environment properies, the script can be re-used in any number of stages. 

The test script uses the URL from the deploy script to set the target of its tests. Because Results Reporting is enabled in the test job, the test job reports the test case execution results that are created by running the test script. View the test results in the test job's logs. 

**Remember:** The output from a test script must match the JUnit XML format. 

Examine the project deployment and test scripts in the Web IDE if you want to see more.

### Create the PROD-US South stage

Create a stage called PROD-US South that takes input from the Build stage and runs a deploy job. 

1. On the Build & Deploy page, click **ADD STAGE*.
2. Click **MyStage** and change the stage name to `PROD-US South`. Note that, by default, this stage consumes input from the Build stage's build job.
3. Click **JOBS**, and then click **ADD JOB**. Select **Deploy**.
4. Click the job name **Deploy**; change it to `Deploy to Prod`.
5. Beside the **Space** field, click **+**. Type a name for the new space: `DeliveryPipelineSample`.
6. In the Deploy Script field, delete the default script and type `source rolling_deploy.sh`. 
7. Define the environment properties that are used by the deploy script:
    1. At the top of the page, click **ENVIRONMENT PROPERTIES**. 
    2. Using the **ADD PROPERTY** button, add the following three text properties:
    
Name  | Value
------------- | -------------
CF_HOSTNAME | DeliveryPipelineProd-[uniqueText]
CF_DOMAIN | mybluemix.net 

Where `[uniqueText]` is a string of your own choosing. If the hostname is not unique across the domain, the deployment will fail.

When finished, click **SAVE**.

You now have a stage that, once the stage that precedes it completes, takes input from the Build stage's build job and deploys the compiled application to the US South Bluemix region.

### Create the PROD-United Kingdom stage

Create a stage called PROD-United Kingdom that takes input from the Build stage and runs a deploy job. 

1. On the Build & Deploy page, click **ADD STAGE*.
2. Click **MyStage** and change the stage name to `PROD-London`. Note that, by default, this stage consumes input from the Build stage's build job.
3. Click **JOBS**, and then click **ADD JOB**. Select **Deploy**.
4. Click the job name **Deploy**; change it to `Deploy to Prod`.
5. Beside the **Space** field, click **+**. Type a name for the new space: `DeliveryPipelineSampleLondon`.
6. In the Deploy Script field, delete the default script and type `source rolling_deploy.sh`.
  * This is the same script used in the PROD-US South stage. Because the stages have different environment properties, the script can be re-used.
7. Define the environment properties that are used by the deploy script:
    1. At the top of the page, click **ENVIRONMENT PROPERTIES**. 
    2. Using the **ADD PROPERTY** button, add the following three text properties:
    
Name  | Value
------------- | -------------
CF_HOSTNAME | DeliveryPipelineProd-[uniqueText]
CF_DOMAIN | eu-gb.mybluemix.net

Where `[uniqueText]` is a string of your own choosing. If the hostname is not unique across the domain, the deployment will fail.

When finished, click **SAVE**.

You now have a stage that, once the stage that precedes it completes, takes input from the Build stage's build job and deploys the compiled application to the United Kingdom Bluemix region.

---
## Summary

And there you have it: a fully configured pipline that incorporates building, deployment to multiple spaces and regions using scripts and environment variables, and automated testing. Click **Run Stage** on the Build stage to see it in action. From now on, new changes pushed to the project repository will trigger the automated build, test, and deploy process again. You can also disable automation in a pipeline if you like in a stage's options.

[1]: 
[2]: https://hub.jazz.net/project/idsorg/DeliveryPipeline-CFSample

[30]: https://hub.jazz.net/register
[32]: https://apps.admin.ibmcloud.com/manage/trial/bluemix.html