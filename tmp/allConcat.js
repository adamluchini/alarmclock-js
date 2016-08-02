var Time = require('./../js/time.js').timeModule;

$(document).ready(function(){
  $('#time').text(moment().format('hh:mm'));
  $("#new-item").submit(function(event) {
    event.preventDefault();
    var alarm = $('#alarm').val();
    console.log(alarm);
    var newAlarm = new Time (alarm);
    var alertTime = newAlarm.alarmTime(alarm);
    $('.output').prepend("<h2>the alarm is going off</h2>");
  });
});
