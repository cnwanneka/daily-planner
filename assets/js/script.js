$(function () {});

let today = moment().format("dddd, Do MMMM");

let now = moment().format("H A");

/* Entries for each hour of the workday */

let planWorkday = [
    { time: "9 AM", event: "" },
    { time: "10 AM", event: "" },
    { time: "11 AM", event: "" },
    { time: "12 PM", event: "" },
    { time: "1 PM", event: "" },
    { time: "2 PM", event: "" },
    { time: "3 PM", event: "" },
    { time: "4 PM", event: "" },
    { time: "5 PM", event: "" },
];

/* Store events in local storage */
let workEvents = JSON.parse(localStorage.getItem("workDay"));
if (workEvents) {
    planWorkday = workEvents;
}

$("#currentDay").text(today);

/* Creating the rows */
planWorkday.forEach(function(timeBlock, index) {
	let timeLabel = timeBlock.time;
	let blockColor = colorRow(timeLabel);
	let row =
		'<div class="time-block" id="' +
		index +
		'"><div class="row no-gutters input-group"><div class="col-sm col-lg-1 input-group-prepend hour justify-content-sm-end pr-3 pt-3">' +
		timeLabel +
		'</div><textarea class="form-control ' +
		blockColor +
		'">' +
		timeBlock.event +
		'</textarea><div class="col-sm col-lg-1 input-group-append"><button class="saveBtn btn-block" type="submit"><i class="fas fa-save"></i></button></div></div></div>';

	/* Adding rows to container div */
	$(".container").append(row);
});

/* Add color to the rows based on the current time */
function colorRow(time) {
	let planNow = moment(now, "H A");
	let planEntry = moment(time, "H A");
	if (planNow.isBefore(planEntry) === true) {
		return "future";
	} else if (planNow.isAfter(planEntry) === true) {
		return "past";
	} else {
		return "present";
	}
}

/* Save the events */
$(".saveBtn").on("click", function() {
	let blockID = parseInt(
		$(this)
			.closest(".time-block")
			.attr("id")
	);
	let userEntry = $.trim(
		$(this)
			.parent()
			.siblings("textarea")
			.val()
	);
	planWorkday[blockID].event = userEntry;

	/* Set up the local storage */
	localStorage.setItem("workDay", JSON.stringify(planWorkday));
});