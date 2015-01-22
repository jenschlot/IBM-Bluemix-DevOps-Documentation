
$(document).ready(function() {
	applySidebarSelectedElementStyles();
});

function applySidebarSelectedElementStyles() {
	$(".jh-sidebar-full-content .sidebar-container .nav .item").each(function() {
		var a = $(this).children("a");
		if (normalize(window.location.pathname) === normalize(a.attr('href'))) {
			$(this).addClass('selected');
		} else {
			$(this).removeClass('selected');
		}
	});
}

function normalize(path) {
	return path.toLowerCase().replace(/\//g, '');
}