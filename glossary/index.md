# IBM DevOps Services Glossary

Below are a list of some terms we use in IBM DevOps Services.

##App
A software application.

##Auto-deploy
An automated process that retrieves and packages build output, and then moves that 
output to another location so that users can run or 
test it. 

## Branch (v)
To create a stream for parallel or insulated development.

## Builder
A reusable component that dynamically generates Java and JSP code based on the context in 
which it is called. For example, it can add a button to a JSP page, link fields in a form to 
an XML variable, or create a web service.

## Clone
In Git, to create an exact copy of a repository into a new directory. 

## Commit (v)
In Git, to store a new snapshot of the project state in the history, by creating a commit 
that represents the index's current state and pointing HEAD to the new commit.

## Dashboard 
Use dashboards to see a high-level overview of your project or workload status.
Dashboards are a means of displaying various types of data from different sources onto a 
single page, which can be useful for tracking status, progress, and activity at a glance. 
They can be customized to track any data, and they provide links for more details. 

## Fork
v: To create a copy of an existing project that you can modify and synchronize with the 
original project. 
n: A copy of an existing project that you can modify and synchronize with the original 
project.

## Git repository (Git repo)

## Manifest file
With Android apps, the manifest file specifies permissions and data collection parameters 
so that mobile devices can report required information from testers and customers. 
Different manifests are required for internal testers and customers.

## Milestone
The milestone is a target date to meet a specific development goal.  Like the release concept 
from the enterprise, it  is typically stable points of deployed code.  In the enterprise case, 
the milestone packages small product updates and or bug fixes and releases packages big UI 
changes.

## Push (v)
In Git, to move objects from a local branch into a remote repository. A push only works if 
the remote head ref is a direct ancestor to the local branch's head ref. 

## Product Backlog
The product backlog is where all the user requirements are captured. It is a list of items that
need to be completed at some point in the future. After items are captured, the team goes 
through each item and prioritizes them by a ranking system. Items ranked 1 take the highest 
priority.

For large teams working on a complex product, items then need to be also moved into specific 
release and sprint backlogs (enterprise model)
For small teams working on a simpler product, mulitple backlogs is not necessary since the 
number of features that need to be implemented is likely small.

## Project
An organized collection used to group folders or packages. Projects are used for building, 
version management, sharing, and organizing resources related to a single work effort.

In Eclipse, a unit of organization used to group folders or packages. Projects are used for 
building, version management, sharing, and organizing resources.

##Project manifest file
See manifest file.

## Project WAR file - where do we use this?
A web archive (WAR) file that contains the configurations for the Worklight runtime 
environemnt and is deployed on an application server.

## Remote project repository
Versions of your project that are hosted on a non-local network (including on the internet).


## Repository (repo)
A persistent storage area for data and other application resources.

## Repository workspace
A repository object that includes one or more components. Repository workspaces are typically used by individual team members to contain their changes in progress. Team members deliver their changes from their repository workspace to the stream and accept changes from other team members into their repository workspace from the stream. Every repository workspace has an owner, and only the owner can make changes in the workspace.

## Scrum 
Scrum is a daily morning development sync call where each person has 1-2 min to talk about what 
they're working on and what's blocking their work. It's meant to be short and brief. 
Discussions on long standing issues that require more time is taken off the call. 

## Sprint
A sprint is a repeat work cycle for a team which spans a period of time, so 1 week, 2 week, 
3 week or 1 month. Each development team defines their sprint cycles differently. Teams usually 
have sprint planning meetings where they move the committed work items from the backlog into 
specific sprints to organize the chunks of work they have. In the enterprise world, they call 
this repeatable work cycle an iteration. It's essentially the same thing.


## Timeline 
A timeline represents an area of activity within a project that typically has its own schedule, 
deliverables, teams, and process. For example, a project with both new product release 
development and current product maintenance might define these two efforts in separate 
timelines because they have different delivery schedules, teams, and processes. Within a 
timeline, you can create a hierarchy of iterations where top-level iterations represent 
releases and child iterations represent milestones within those releases.

## Web IDE
The IBM DevOps Service browser-based integration platform which is entirely
focused on developing for the web, in the web based on Orion Eclipse technology.

## Work Item
Use work items to manage the tasks and issues that your team must address during the 
development cycle. 

### Work Item Types

* **Adoption Item**: Tracks when changes by one team must be adopted by another team 

* **Defect**: Identifies a bug 

* **Retrospective**: Records what went well and what did not go well in the recently completed iteration 

* **Story**: Describes part of a use case 

* **Task**: Describes a specific piece of work 

* **Impediment**: Tracks things that get in the way of progress 

* **Epic**: Used when a story is too big to complete in a single iteration (sometimes called a "sprint") or when there are too many unknowns to estimate the amount of work. An Epic can be broken down into several stories. 

* **Track build item**: Typically created from a build result to track the fixes that are needed for a failed build 

## Workspace
In Eclipse, the collection of projects and other resources that the user is currently developing in the workbench. Metadata about these resources resides in a directory on the file system; the resources might reside in the same directory.