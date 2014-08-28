	"content": [									// Add items use section_router.js to render the markdown pages	
		{
			"uri_prefix": "/maintenance",			// request url to render the page
			"section_name": "Maintenance Schedule",	// Section name that appears in the top-left section of navbar
			"directory": "maintenance"				// physical directory where index.md is stored
		}
	],
	"resource": [									// Add items use resource_router.js	 to render the markdown content for Key Resources
		{
			"uri_prefix": "/whatsnew",				// request url to render the page
			"section_name": "Key Resources",		// Section that leads into the requested page (Key Resources in this case)
			"resource_name": "What's New",			// title of the key resource page
			"img_icon": "whatsnew",					// Icon for page(defined in style.less as a fixed position in icon sprite)
			"directory": "whatsnew"					// pyhsical directory for the page where index.md is stored
		}
	],
	"topic": [										// Add items use resource_router.js	 to render the markdown content for Key Resources
		{
			"uri_prefix": "/help/academics",		// request url to render the page
			"section_name": "Topics",				// Section that leads into the requested page (Key Resources in this case)
			"topic_name": "Academics",				// title of the key resource page
			"img_icon": "academics",				// Icon for page(defined in style.less as a fixed position in icon sprite)
			"directory": "/help/topics/academics"	// pyhsical directory for the page where index.md is stored
		}
	]
}