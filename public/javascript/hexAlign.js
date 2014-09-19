$(document).ready(function (){
	hexAlign();
	$(window).resize(hexAlign);
});

var hexAlign = function () {

	for (i = 1; i < 7; i++) {
		var calloutContainerHeight = 118;
		var calloutHeight = $("#"+i).height();
		var topMargin = (calloutContainerHeight - calloutHeight - 30)/2;
		$("#"+i).css('margin-top', topMargin);
	}
}