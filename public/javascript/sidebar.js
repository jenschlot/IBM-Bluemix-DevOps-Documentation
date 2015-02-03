
$(document).ready(function() {
	var $linksWithChildren = $(".sidebar-container .item.has-children");
	resizePgOnSidebarExpandCollapse();
	$linksWithChildren.children('.item.selected').siblings().show(300);
	$linksWithChildren.children('a').click(function(event) {
		var resizedAlready = false;
		$(this).siblings('.item').toggle(300, function() {
			if (resizedAlready) return;
			resizedAlready = true;
			resizePgOnSidebarExpandCollapse();
		});
		event.preventDefault();
	});
});

function resizePgOnSidebarExpandCollapse() {
	$.getScript("/tutorials/javascript/pageResize.js", function() {
		resizePg();
	});
}
