	"content": [									// Items that use section_router.js to render the markdown pages	
		{
			"uri_prefix": "/maintenance",			// request url to render the page
			"section_name": "Maintenance Schedule",	// Section name that appears in the top-left section of navbar
			"directory": "maintenance"				// physical directory where index.md is stored
		}
	],
	"resource": [									// Items that use resource_router.js to render the markdown content for Key Resources
		{
			"uri_prefix": "/whatsnew",				// request url to render the page
			"section_name": "Docs",					// Section of Navbar that leads to the requested page
			"resource_name": "What's New",			// title of the key resource page
			"img_icon": "whatsnew",					// Key Resource Icon (See Note: style.less TOC - 3.2.1)
			"directory": "whatsnew"					// pyhsical directory for the page where index.md is stored
		}
	],
	"topic": [										// Items that use topic_router.js to render the markdown content for Topics
		{
			"uri_prefix": "/help/academics",		// request url to render the page
			"section_name": "Docs",					// Section of Navbar that leads to the requested page
			"topic_name": "Academics",				// title of the key resource page
			"img_icon": "academics",				// Topic Icon (See Note: style.less TOC - 3.3.2)
			"directory": "/help/topics/academics"	// pyhsical directory for the page where index.md is stored
		}
	]
}

__How to make a template for subpages with different header?___

1. Create a `.dust` layout in views folder.
	- Create CSS Styles for the new layout using either section 3.2.2 or 3.3.3 of `style.less` as reference
	- Use `topic.dust` or `key_resource.dust` as reference to create a new layout and change ids and classes to the ones created in previous step
	
2. Add data to config.json
	- Create a new array with all the objects that contain all the necessary routing information such as `uri_prefix`, `section_name`, `directory`, `img_icon`, and a title for the page.

3. Add a router in the `routes` folder.
	- Use `topic_router.js` or `resource_router.js` as reference an create a new router

4. Use the router in app.js
	```
	_.each(
	config.your_array,
	function (your_array) {
		app.use(
			your_array.uri_prefix, 
			routes.router_filename(app.get('env'), 
					      your_array.section_name,
					      your_array.resource_name, 
					      your_array.img_icon,
					      path.join(__dirname, your_array.directory)
				)
			);
		}
	);
	```

	