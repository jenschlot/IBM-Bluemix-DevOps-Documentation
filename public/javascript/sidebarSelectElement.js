
$(document).ready(function() {
	refreshActiveElement();
});

function hideAllChildElements() {
	$(".jh-sidebar-full-content .sidebar-container .nav .item .item").hide({
		duration: 300
	});
}

function showActiveElement(element) {
	var $element = $(element);
	$element.show();
	$element.parent().show();
	$element.siblings().show({
		duration: 300
	});
	$element.children().show({
		duration: 300
	});
}

function findActiveElement() {
	var activeElement = null;
	$(".jh-sidebar-full-content .sidebar-container .nav .item").each(function() {
		var a = $(this).children("a");
		var curPath = window.location.pathname;
		curPath += window.location.hash;
		if (normalizeEqual(curPath, a.attr('href'))) {
			$(this).addClass('selected');
			activeElement = this;
		} else {
			$(this).removeClass('selected');
		}
	});
	return activeElement;
}

function refreshActiveElement() {
	hideAllChildElements();
	var activeElement = findActiveElement();
	showActiveElement(activeElement);
}

function normalizeEqual(path_a, path_b) {
	function normalize(path) {
		return path.toLowerCase().replace(/\//g, '');
	}
	return normalize(path_a) === normalize(path_b);
}
