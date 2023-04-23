
$(document).ready(function() {
    var workdayStart = moment().hour(9).minute(0).second(0);
    var workdayEnd = moment().hour(17).minute(0).second(0);
    var html = '';
    while (workdayStart.isBefore(workdayEnd)) {
        html += '<div class="time-slot">';
        html += '<div class="time">' + workdayStart.format('h:mm A') + '</div>';
        html += '<div class="event" data-time="' + workdayStart.format('h:mm A') + '"></div>';
        html += '</div>';
        workdayStart.add(1, 'hour');
    }
    $('#workday').append(html);

    $('form').on('submit', function(event) {
        event.preventDefault();
        var eventName = $('#event-name').val();
        var eventTime = $('#event-time').val();
        var eventHTML = '<div><h3>' + eventName + '</h3><p>' + moment(eventTime).format('h:mm A') + '</p></div>';
        $('.event[data-time="' + moment(eventTime).format('h:mm A') + '"]').html(eventHTML);
        localStorage.setItem(moment(eventTime).format('h:mm A'), eventName);
    });

    for (var i = 0; i < localStorage.length; i++) {
        var eventTime = localStorage.key(i);
        var eventName = localStorage.getItem(eventTime);
        var eventHTML = '<div><h3>' + eventName + '</h3><p>' + eventTime + '</












// Getting the button that was clicked.

$("button").on("click", function(event){

    console.log($(event.target).siblings("textarea").val())


})




});