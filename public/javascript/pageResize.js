/**
 * Resize page based on window size
 */

$(document).ready(function(){
	resizePg();
	$(window).resize(resizePg);
});

var resizePg = function() {
	console.log("Resizing page");
	var windowHeight = $(window).height();
	console.log("Window height is " + windowHeight);
	var navbarHeight = $("#navbar").height();
	var footerHeight = $("#footer").height();
	var contentHeight = $("#content").height();
	var minContentHeight = windowHeight - navbarHeight - footerHeight;
	$("#content").css('min-height', minContentHeight);	
};
