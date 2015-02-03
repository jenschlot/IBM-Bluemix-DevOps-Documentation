
$(document).ready(function() {
	var $linksWithChildren = $(".sidebar-container .item.has-children");

	$linksWithChildren.children('.item.selected').siblings().show({duration: 300});
	$linksWithChildren.children('a').click(function(event) {
		$(this).siblings('.item').toggle({duration: 300});
		resizePgOnSidebarExpandCollapse();
		event.preventDefault();
	});
});

function resizePgOnSidebarExpandCollapse() {
	$.getScript("/tutorials/javascript/pageResize.js", function() {
		resizePg();
	});
}
