<h1 id="javascript">
    <div class="icon" style="float:left; margin-right:10px;height:50px;">
    <img src="/views/images/Droid_SDK_icon.png">
    </div>Android</h1>

The Mobile Cloud Services SDK for Android integrates with the Mobile Cloud Services.  The SDK has a modular design, so you can add services that are required by your application as needed.

##Set up SDK
To use the Mobile Cloud Services SDK in your application, download the latest [Android SDK](https://mbaas-catalog.ng.bluemix.net/sdk/ibm-baas-sdk-android.zip) and add the JAR files that are required for the services you are using in your application.  At a minimum, include the `ibmbaas.jar` file.  The `ibmbaas.jar` file provides basic functionality to communicate with Mobile Cloud Services.  

When the Android application requires another service, add JAR files associated with the service.  For example, to use the Push service, add the `ibmpush.jar` file to the project.


##Initialize SDK
Your Android application must initialize the Mobile Cloud Services SDK and all the services used by the application.  Add the following initialization code to the `MainActivity` class in your application.  The `context` value could be the `MainActivity` class. The *applicationId* value is the unique key that is assigned to the `Mobile Cloud` that you created on BlueMix.

```java
// Place initialization code in native application
IBMBaaS.initializeSDK(context, applicationId);
IBMPush.initializeService();
```

Each of the key services for the SDK are broken out into separate JAR files that you can add to the project individually. You can pick and choose the services for the application.


Cloud code
===

Cloud code has two main pieces:
* A Node.js application that is hosted in the Mobile Cloud
* Native code that makes calls to the Node application.  

There is no restriction on writing the Node.js code. You can take the advantage of a wide range of third party modules available on the web.

Configure Node.js in your Mobile Cloud application on BlueMix.  For more information, see <a href="https://www.ng.bluemix.net/docs/MobileCloud.jsp" target="_blank">Extending Node.js for Mobile Cloud Services applications</a>.


##Initialize cloud code
To invoke cloud code from the Android application, add the `IBMCloudCode.jar` file and initialize the Cloud Code SDK.  The `IBMCloudCode` class provides an API for invoking Cloud Code requests.

To use cloud code, initialize IBMBaaS with the applicationId that you copied from BlueMix.  Initialize the SDK with the hostName of the Bluemix application that you created.  With this information,  the SDK can route cloud code calls to the correct Mobile Cloud application.

```java
IBMBaaS.initializeSDK(context, applicationId);
IBMCloudCode cloudCodeService = IBMCloudCode.initializeService(hostName);
```

##Invoke cloud code
Create a subclass of the class `IBMHttpRequestDelegate` class to handle the responses from the cloud code request.  An example of a `IBMHttpRequestDelegate` class follows.  The `EchoDelegate` class displays the response, error, or security invocations.

```java
public class EchoDelegate implements IBMHttpRequestDelegate {
	private static final String TAG = EchoDelegate.class.getName();

	@Override
	public void onResponse(IBMHttpRequest request, URLConnection connection, InputStream response) {
        // Handle data from request
	}

	@Override
	public void onSecurityHandling(IBMHttpRequest request) {
		Log.i(TAG, "onSecurityHandling");
	}

	@Override
	public void onFailure(IBMHttpRequest request, Exception reason) {
		Log.e(TAG, "onFailure", reason);
	}
}
```
## HTTP operations

The following examples use the EchoDelegate in the cloud code calls.  Assume that the Mobile Cloud application has been uploaded to BlueMix and the Mobile Cloud Code Service SDK are initialized.  

Assume that invocation payload is a JSONObject object.  The `JSONObject` class is serialized to JSON by Android.  The URI is relative to the BlueMix host route.  For example, the a request to URI `"/hello"` reaches `https://mobile.ng.bluemix.net/${mbaasHostname}/v1/apps/${applicationId}/item`

#### GET 

```java
EchoDelegate delegate = new EchoDelegate();
IBMCloudCode ccs = IBMCloudCode.getService();
css.get("/items", delegate);
```

####POST 
The payload can be sent as JSON or an InputStream.  You can use InputStream payloads to send binary content.  The JSON payload methods automatically set the correct headers for JSON content.  In this example, the payload contains the contents of the item to be created.

```java
EchoDelegate delegate = new EchoDelegate();
IBMCloudCode ccs = IBMCloudCode.getService();
css.post("/item", delegate, json);
```
#### PUT
The payload can be sent as JSON or an InputStream.  You can use InputStream payloads to send binary content.  The JSON payload methods automatically set the correct headers for JSON content.  In this example, the payload contains the contents to update an item.  The `id` would correspond to the item to update.

```java
EchoDelegate delegate = new EchoDelegate();
IBMCloudCode ccs = IBMCloudCode.getService();
css.put("/item/id", delegate, json);
```

#### DELETE
In this example, the `id` corresponds to the item to delete.

```java
EchoDelegate delegate = new EchoDelegate();
IBMCloudCode ccs = IBMCloudCode.getService();
css.delete("/item/id", delegate);
```

Mobile Data
===
With the Mobile Data service, you can create, update, and query  data objects that are stored and shared through the Mobile Data service that is running in BlueMix.

To use Mobile Data for Android, include the `ibmbaas.jar`, `ibmdata.jar` and `ibmfilesync.jar` files in the `libs` folder of your project.

## Initialize Mobile Data
As a service within BlueMix, Mobile Data is initialized separately from the SDK. The Mobile Cloud Services SDK must be initialized before the Mobile Data service. Then, run the `IBMData.initializeService()` method for object storage and the `IBMFileSync.initializeService()` method for file storage. 

Register any specializations of the `IBMDataObject` class. In the following examples, the `Item` class extends the `IBMDataObject` class. After initializing Mobile Data, call the static `registerSpecialization(Class class)` method.

```java
IBMBaaS.initializeSDK(context, applicationId);  //Initializing Mobile Cloud Services SDK

IBMData dataService = IBMData.initializeService();  //Initializing object storage capability

IBMFileSync fileSync = IBMFIleSync.initializeService();  //Initializing file storage capability

Item.registerSpecialization(Item.class);  //Registering a specialization
```

##Data operations
Store objects using the Mobile Data service.

####Add Mobile Data to your model

In many situations, you can use instances of the `IBMDataObject` class to build the data you want to persist. However, it is sometimes better to implement a specialization of the `IBMDataObject` class. For example, you might implement an `Item` class to represent things that you can buy from the grocery store.

To implement the `Item` class, extend the `IBMDataObject` class and use the `IBMDataObjectSpecialization` annotation.  Then, implement `get` and `set` methods that correspond to the fields that you want to persist. Instead of creating local fields within the class declaration, use keys to set and retrieve values. In this example, a `name` key represents the name of the `Item`. 

To implement our setter and getter methods, call the `getObject(String key)` and `setObject(String key, Object value)` methods that are inherited from the `IBMDataObject` class.

```java
@IBMDataObjectSpecialization("Item")
public class Item extends IBMDataObject {
	private static final String NAME = "name";

	public String getName() {
		return (String) getObject(NAME);
	}

	public void setName(String itemName) {
		setObject(NAME, (itemName != null) ? itemName : "");
	}
}
```

####Create data objects
To create a new object, you need an instance of the `IBMDataObject` class or a class that extends the `IBMDataObject` class. Then, call the `saveInBackground()` method on the instance. In the example, use the optional `saveInBackground(IBMObjectResult callback)` method to specify the actions to take when the save is successful or not successful.

```java
Item item = new Item();
item.saveInBackground(new IBMObjectResult<Item>() {

    public void onResult(Item object) {
        if (!isFinishing()) {
            // Do something to update UI
        }
    }

    public void onError(IBMDataException error) {
        // Handle error
    }
}
```

####Read data objects
For read operations, use the `IBMQuery` class. You can generate queries by class using either the `queryForClass(Class class)` or `queryForClass(String class)` methods. You can also generate a query of a specific object with the `queryForObjectId(String id)` static method or call the `getQuery()` method on an instance of an `IBMDataObject`. After your query is generated, call the `findObjectsInBackground(IBMQueryResult callback)` and implement the callback methods.
```java
// Find a set of objects by class
IBMQuery<Item> queryByClass = IBMQuery.queryForClass(Item.class);

// Find a specific object
IBMQuery<Item> queryForObject = myItem.getQuery();

queryByClass.findObjectsInBackground(new IBMQueryResult<Item>() {
	public void onResult(final List<Item> objects) {
		// Do something to update UI

	}
	public void onError(IBMDataException error) {
		// Handle error
	}
});
```



####Update data objects
To update an instance of the `IBMDataObject` class, use the `setObject()` method. The set of entries are then marked dirty and are persisted when the `saveInBackground()` method is called.
```java
// Update the name field
item.setName("Apple");

// Adding a new field 'price'
item.setObject("price", 0.50);

item.saveInBackground(new IBMObjectResult<Item>() {
	public void onResult(Item object) {
		// Do something to update UI
	}

	public void onError(IBMDataException error) {
		// Handle error
	}
}
```

####Delete data objects
To delete an object, use the `deleteInBackground()` method on an instance of the `IBMDataObject` class. Optionally, use the `deleteInBackground(IBMObjectResult callback)` and implement the callback to specify what is supposed to happen when the delete is successful or receives an error.
```java
item.deleteInBackground(new IBMObjectResult<Item>() {
	public void onResult(Item item) {
		// Do something to update UI
	}

	public void onError(IBMDataException error) {
		// Handle error
	}
}
```

##File storage
File Sync stores files using the Mobile Data service.  The files can be synchronized across various mobile devices.

####Setting the File Sync usage context
Use the `IBMDataClientManager` to provide the usage context and connect to the File Sync plug-in. The usage context uniquely identifies the files that should be grouped together for synchronization. For example, files can be grouped by an application ID and user ID.  If you do not specify a user ID, the usage context uses a default user ID called "publicuser", which can be used to make an application-wide context.  For this beta, only files stored in an application-wide context will be viewable in the Data viewer.

```java
    // get the IBMDataClientManager where "this" is an Android Application
    IBMDataClientManager clientManager = IBMDataClient.getManager(this);

    // register "this" as the callback which is an Android Application and implements
    // IBMDataClientManagerCallback
    clientManager.registerCallback(this);

    // build parameters
    HashMap parameters = new HashMap();

    //default use of "publicuser" if no specific user is supplied.
    //parameters.put(IBMDataClient.CL_USERID_KEY,"MyUserID");
    
    // enable automatic syncing
    parameters.put(IBMDataClient.CL_LIVE_SYNC_ENABLE_KEY,Boolean.TRUE);
    try {
    	// connect to File Sync passing in the parameters
    	//and IBMDataClientManager.IBMDataClientManagerConnectionCallback
    	 clientManager.connect(parameters,
    		new IBMDataClientManager.IBMDataClientManagerConnectionCallback() {
    			public void onResult(IBMDataClientManager mgr)
    				// do something now that you are connected
    				....
    			}
    			public void onError(IBMDataClientManager mgr,IBMDataException error) {
    				// do error handling here
    				.....
    			}
    		});

    } catch (CloudException error) {
    	showError(error);
    }
```

####Synchronize files
All files are placed in a managed directory, which is identified by the usage context.  In live mode, the directory automatically synchronizes. You can also synchronize this directory manually, as in the following code snippet.

```java
    // get the IBMDataClientManager which accepts as a parameter an Android Application
    IBMDataClientManager clientManager = IBMDataClient.getManager(this);

    // get reference to managed directory
    IBMDataFileSystem syncedFiles = clientManager.getFileSystem();

    // manually invoke sync and pass in an IBMDataFileSystem.IBMDataFileSynchronizeCallback
    // which implements onResult() or onError() methods
    syncedFiles.sync(myCallback);
```

####Upload files with the IBMDataFile class

The File Sync plug-in stores all files for a usage context in the cloud and in the local managed directory on the device. To add a new file to the usage context, the app can use the `IBMDataFile` class to create a reference to an existing file and upload it to the cloud.  If the upload succeeds, the `IBMDataFile` class copies the file into the managed directory.

```java
    //get the IBMDataClientManager which accepts as a parameter an Android Application
    IBMDataClientManager clientManager = IBMDataClient.getManager(this);

     // get reference to managed directory
     IBMDataFileSystem syncedFiles = clientManager.getFileSystem();

    // create a synced file using a byte array "fileBytes".   The relative path is most commonly just a file name.  However,
    // it can also include a path set by the app, e.g. "some/custom/path/myFile.txt" (note
    // there can be no leading slash before "some") to help organize files. This will create the specified path
    // in the managed directory to the file
    IBMDataFile myFile = syncedFiles.file("myFile.txt", fileBytes);

    // upload to the File Sync.  This will first upload the file.  If the upload
    // is successful, then the SDK will copy the file to the managed directory.
    // The callback to upload is an IBMDataFile.IBMDataFileCallback which implements
    // onResult(), onNotFound,  and onError() messages
    file.upload(new IBMDataFile.IBMDataFileCallback() {
			public void onResult(IBMDataFile file) {
				.. do something ..
			}
			public void onNotFound(IBMDataFile file) {
				.. do something ..
			}
			public void onError(IBMDataFile file, IBMDataException error) {
				.. do something ..

			}
	});
```

####Retrieve synchronized files
Use the `IBMDataFile` class to retrieve a file within your app.  The app uses a download request policy to specify if the `IBMDataFile` class must check the local managed directory first for a local copy of the file, or bypass the managed directory and download the file from the cloud.  A download call always results in the file getting cached in the managed directory.

```java
     IBMDataClientManager clientManager = IBMDataClient.getManager(this);
     IBMDataFileSystem fileSystem = clientManager.getFileSystem();

     IBMDataFile file = fileSystem.file(relativePath);
		    file.download(IBMDataFileRequestReturnCachedIfExists,
		    new IBMDataFile.IBMDataFileCallback() {
				@Override
				public void onResult(IBMDataFile file) {
					if (callback != null)
						callback.run();
				}
				@Override
				public void onNotFound(IBMDataFile file) {
					showError(....);
				}
				@Override
				public void onError(IBMDataFile file, IBMDataFileException error) {
					showError(error);
				}
			});
```

####Access the managed directory directly
You can get direct access to the managed directory and use standard file operation to create, read, update, and delete files in that directory. When you choose live mode, the File Sync plug-in automatically detects changes in the managed directory and keeps its contents synchronized.

```java
    // get the IBMDataClientManager which accepts as a parameter an Android Application
    IBMDataClientManager clientManager = IBMDataClient.getManager(this);
    // get reference to managed directory
    IBMDataFileSystem syncedFiles = clientManager.getFileSystem();

	// manually invoke sync and pass in an IBMDataFileSystem.IBMDataFileSynchronizeCallback
	// which implements onResult() or onError() methods
	syncedFiles.sync(myCallback);
```


Push
===
With the Push service Android SDK, you can register a device, subscribe to a tag, unsubscribe to a tag, and receive push notifications that are sent from the Push service.

##Pre-requisites

1. Copy the library project at <android-sdk>/extras/google/ google_play_services_version /libproject/google-play-services_lib/ to your Eclipse workspace with your Android app projects.

2. Import Google Play Services library into your workspace.  Click ** File > Import > Android > Existing Android Code into Workspace**. Browse to the copy of the Google Play Service library project to import it.  Select **Copy projects into workspace**.

3. Add a reference of Google Play Services library to your Android application.

	Right click ** *project* > Properties > Android > Add**. Add the Google Play services reference from your project workspace.

	For complete documentation on how to set up Google Play Services, see 
[Set Up Google Play Services SDK](http://developer.android.com/google/play-services/setup.html).

4. Add the `ibmpush.jar` and `ibmcore.jar` files from the Push SDK to `libs` directory of the Android application.

5. Open your `AndroidManifest.xml` file and make the following changes: 

   a. Add the following tag as a child of the `<application>` element:

    	<meta-data android:name="com.google.android.gms.version"
    			   android:value="@integer/google_play_services_version" />

   b. Add the following permissions to the `AndroidManifest.xml` file of your Android project: 
    	<permission android:name="com.ibm.mbaas.push.android.sample.permission.C2D_MESSAGE" android:protectionLevel="signature" />
    	<uses-permission android:name="android.permission.INTERNET" />
    	<uses-permission android:name="com.ibm.mbaas.push.android.sample.permission.C2D_MESSAGE" />
    	<uses-permission android:name="com.google.android.c2dm.permission.RECEIVE" />
    	<uses-permission android:name="android.permission.WAKE_LOCK" />
    	<uses-permission android:name="android.permission.GET_ACCOUNTS" />
    	<uses-permission android:name="android.permission.USE_CREDENTIALS" />
    	<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
    	<uses-permission android:name="android.permission.ACCESS_WIFI_STATE"/>
**Note:** `com.ibm.mbaas.push.android.sample` is the application package name that is used in this sample.  Replace this value with your package name as needed.
   
   c. Add the notification intent settings for the activity. This setting is required to start the application when the app user clicks the received notification from the Notification area. Fo more information, see [Holding Notifications](Holding Notification).
    	<intent-filter>
    		<action android:name="com.ibm.mbaas.push.android.sample.IBMPushNotification" />
    		<category android:name="android.intent.category.DEFAULT" />
    	</intent-filter>

   d. Add the GCM Intent Service and Intent filters for RECEIVE event of notifications.

    	<service android:name="com.ibm.mobile.services.push.IBMPushIntentService" />

    	<receiver android:name="com.ibm.mobile.services.push.IBMPushBroadcastReceiver" android:permission="com.google.android.c2dm.permission.SEND">
    		<intent-filter>
    			<action android:name="com.google.android.c2dm.intent.RECEIVE" />
    			<category android:name="com.ibm.mbaas.push.android.sample" />
    		</intent-filter>
    		<intent-filter>
                <action android:name="android.intent.action.BOOT_COMPLETED" />
                <category android:name="com.ibm.mbaas.push.android.sample" />
            </intent-filter>
    	</receiver>

##Initialize Push
Add the following initialization code to the `MainActivity` class in your application. The `context` value could be the `MainActivity` class. The `applicationId` value is the unique key that is assigned to the Mobile Cloud that you created on BlueMix.

```java
IBMBaaS.initializeSDK(context, applicationId);
IBMPush.initializeService();
```

All Push service methods that interact with Push server are non-blocking methods.  Therefore, a listener must be passed to all the methods.  These listeners act as callbacks when a response is obtained from the Push server. All callback listeners are instances of the `IBMPushResponseListener` class.

```java
public class DemoPushResponseListener implements IBMPushResponseListener<String>{
	@Override
	public void onSuccess(String deviceId) {
		// Handle successful calls
	}

	@Override
	public void onFailure(IBMPushException ex) {
		// Handle failed calls
	}
}
```

## Notifications
To register a device with the Push service, create an instance of the `DemoPushResponseListener` object. Then, call the Push service to register the the device with alias, consumerId and the listener object you created.

```java
// initialize push service
IBMPush push = IBMPush.initializeService();

//create an instnace of PushResponseListener you created
DemoPushResponseListener demoResponseListener = new DemoPushResponseListener();

//call the push service to register the device and listener
push.register(deviceAlias, consumerID, demoResponseListener);
```

To enable your application to receive push notifications, an implementation of the `IBMPushNotificationListener` instance must be registered as a callback. Push service will invoke the `onReceive` method when a notification is received.

```java

//define IBMPushNotificationListener behavior on receipt of a push notification

IBMPushNotificationListener notificationListener = new IBMPushNotificationListener() {
	
	@Override
	public void onReceive(final IBMSimplePushNotification message) {
		// Handle Push Notification
	}
	
};
```
#### Listen to notifications
To register the `notificationListener` object with the Push service on Bluemix, call the `listen()` method of the Push service. This method is typically called from the `onResume()` method of the activity that is handling push notifications.

```java

	@Override
	protected void onResume() {
		super.onResume();
		if (push != null) {
			push.listen(notificationListener);
		}
	}
	
```
	
#### Hold listening to notifications
When your application goes into background you'd want Push to hold back notifications sent to your application.  To do this you must call the 'hold()' in the 'onPause()' method of the activity that is handling push notifications.

```java

	@Override
	protected void onPause() {
		super.onPause();

		if (push != null) {
			push.hold();
		}
	}
	
```

##Subscriptions
When a mobile application registers itself with the Push service, it can receive broadcasts.  Broadcasts are notifications that are general and are pushed to all applications. The mobile application can also receive notifications for specific tags by subscribing to Push and including the tag name. 

The `getTags` method returns the list of available tags to which the device can subscribe. After the device is subscribed to a particular tag, the device can receive any push notifications that are sent for that tag.

```java
	push.getTags(new IBMPushResponseListener<List<String>>() {
		@Override
		public void onSuccess(List<String> tags) {
			System.out.println("Retrieved Tags : " + tags);
		}

		@Override
		public void onFailure(IBMPushException ex) {
			System.out.println("Error getting tags..." + ex.getMessage());
		}
	});
```
Use the `subscribe` method to subscribe to a tag.

```java
	 push.subscribe(tagName, callback);
```

Use the `unsubscribe` method to unsubscribe from a tag.

```java
	push.unsubscribe(tagName, callback);
```

Use the `getSubscriptions` API to get a list of tags that to which the device is subscribed.

```java
	push.getSubscriptions((new IBMPushResponseListener<List<String>>() {
		@Override
		public void onSuccess(List<String> tags) {
			System.out.println("Retrieved tag subscriptions : " + tags);
		}

		@Override
		public void onFailure(IBMPushException ex) {
			System.out.println("Error getting subscriptions..." + ex.getMessage());
		}
	});
```

Security
===

##OAuth
If you have set up OAuth security with your application, you can set up the SDK to pass the security token and provider in headers on all HTTP requests to the MBaaS services. Cloud Code can then validate the security token and obtain user information.  Currently, Google and Worklight are supported as security providers.

```java
// Obtain the authentication token and pass it to Mobile Cloud Services SDK
IBMBaaS.setSecurityContext(GOOGLE, token);
IBMBaaS.setSecurityContext(WORKLIGHT, token);

// To clear the security context, us the following
IBMBaaS.clearSecurityContext();
```
