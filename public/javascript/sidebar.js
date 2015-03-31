
// $(document).ready(function() { // Jazzhub Tutorials: Work item 37770
	var $linksWithChildren = $(".sidebar-container .item.has-children");
	$linksWithChildren.children('.item.selected').siblings().show();
	resizePgOnSidebarExpandCollapse();
	$linksWithChildren.children('a').click(function(event) {
		var resizedAlready = false;
		$(this).siblings('.item').toggle(300, function() {
			if (resizedAlready) return;
			resizedAlready = true;
			resizePgOnSidebarExpandCollapse();
		});
		event.preventDefault();
	});
// });

function resizePgOnSidebarExpandCollapse() {
	$.getScript("/tutorials/javascript/pageResize.js", function() {
		resizePg();
	});
}
