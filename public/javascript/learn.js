
$(document).ready(function() {
	$('.no-display').hide();

	var sectionNames = ['overview', 'what', 'cost'];
	sectionNames.forEach(function(sectionName) {

		$('.button.enabled.' + sectionName).on('click', function(event) {
			var historyPath = (sectionName === 'overview' ? '' : sectionName);
			history.pushState(null, '', '/learn/' + historyPath);
			$('.button.enabled.selected').removeClass('selected');

			$('.button.enabled.' + sectionName).toggleClass('selected');
			$('.learn-content-section').trigger('sectionClicked', [sectionName]);
			event.preventDefault();
		});

		$('.learn-content-section').on('sectionClicked', function(event, sectionNameClicked) {
			if ($(this).attr('id') === sectionNameClicked) {
				$(this).show();

				var learnSidebarLinks = $(".jh-sidebar-full-content .sidebar-container .nav > .item").has("a[href*=learn]");
				var costSidebarLink = learnSidebarLinks.has("a[href*='cost']");
				var otherLearnSidebarLink = learnSidebarLinks.not(costSidebarLink);
				learnSidebarLinks.removeClass('selected');
				if (sectionNameClicked === 'cost') {
					costSidebarLink.addClass('selected');
				} else {
					otherLearnSidebarLink.addClass('selected');
				}
			} else {
				$(this).hide();
			}
		});
	});
});
