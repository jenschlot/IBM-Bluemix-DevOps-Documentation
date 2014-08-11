/**
 * Resize page based on window size
 */

$(document).ready(function(){
	var docHeight = $(window).height();
	var navbarHeight = $("#navbar").height();
	var footerHeight = $("#footer").height();
	var contentHeight = $("#content").height();
	if(contentHeight < (docHeight - navbarHeight - footerHeight)) {
		contentHeight = docHeight - navbarHeight - footerHeight;
		$("#content").height(contentHeight);		
	}
});
