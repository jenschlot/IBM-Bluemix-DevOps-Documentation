# The manifest file

Deploying a DevOps Services project from the Web IDE requires the project to have a `manifest.yml` file. This file contains important settings such as the application instance name to use, the host machine, the services that the application uses, and more.

![An example manifest](/reference/images/manifest.gif)


The node.js boilerplate comes with this manifest file:
```
applications:
- services:
  - niftynodejsapp:DataCache
  disk_quota: 1024M
  host: niftynodejsapp
  name: niftynodejsapp
  command: node app.js
  path: .
  domain: mybluemix.net
  instances: 1
  memory: 512M
```
