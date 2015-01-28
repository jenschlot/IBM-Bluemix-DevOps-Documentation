/**
 * Resize page based on window size
 */

$(document).ready(function(){
	resizePg();
	$(window).resize(resizePg);
});

var resizePg = function() {
	var windowHeight = $(window).height();
	var navbarHeight = $("#navbar").height();
	var footerHeight = $("#footer").height();
	var sidebarHeight = $(".sidebar-container").height();
	var minContentHeight = Math.max(windowHeight - navbarHeight - footerHeight, sidebarHeight);
	$("#content").animate(
	{
		'min-height': minContentHeight
	}, 200);
};
