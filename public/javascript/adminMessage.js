/**
 * Find the maintenance message if present
 */

$(document).ready(function() {
	$.get("/manage/service/com.ibm.team.jazzhub.common.service.IServerService/message", function(response) {
		console.log(response);
		$("#messageSummary").html(response.message);
	});
});