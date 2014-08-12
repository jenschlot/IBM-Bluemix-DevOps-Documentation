/**
 * Resize page based on window size
 */

$(document).ready(function(){
	resizePg();
	$(window).on('resize', resizePg());
});

var resizePg = function() {
	var docHeight = $(window).height();
	var navbarHeight = $("#navbar").height();
	var footerHeight = $("#footer").height();
	var contentHeight = $("#content").height();
	var minContentHeight = Math.max(docHeight - navbarHeight - footerHeight, contentHeight);
	$("#content").css('min-height', minContentHeight);	
};
