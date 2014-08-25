/**
 * Find the maintenance message if present
 */

$(document).ready(function() {
	$.get("/manage/service/com.ibm.team.jazzhub.common.service.IServerService/message", function(response) {		
		if(response.message.length > 0) {
			$("#messageSummary").html(response.message);
			$("#announcement").removeClass("hidden");
		}
		$("#messageSummary").html("Test maintenance bar");
		$("#announcement").removeClass("hidden");
	});
});

