/**
 * Find the maintenance message if present
 */

$(document).ready(function() {
	$.get("/manage/service/com.ibm.team.jazzhub.common.service.IServerService/message", function(response) {
		$("#messageSummary").html(response.message);
		if(response.message.length > 0) {
			$("#announcement").removeClass("hidden");
		}
	});
});

