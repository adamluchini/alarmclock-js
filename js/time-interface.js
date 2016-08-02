var Time = require('./../js/time.js').timeModule;

$(document).ready(function(){
  $('#time').text(moment().format('H:mm'));
  $("#new-item").submit(function(event) {
    event.preventDefault();
    var alarm = $('#alarm').val();
    var newAlarm = new Time (alarm);
    newAlarm.alarmTime();
    $('.output').prepend("<h2>alarm submitted</h2>");
  });
});
