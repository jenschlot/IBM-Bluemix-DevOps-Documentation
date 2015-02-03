
$(document).ready(function() {
	$('.no-display').hide();

	var sectionNames = ['overview', 'what'];
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
			} else {
				$(this).hide();
			}
		});
	});
});
