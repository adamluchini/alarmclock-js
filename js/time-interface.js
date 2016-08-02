var Time = require('./../js/time.js').timeModule;

// function update() {
//  $('#time').text(moment().format('H:mm:ss'));
// }
// setInterval(update, 1000);

$(document).ready(function(){
  $("#new-item").submit(function(event) {
    event.preventDefault();
    var alarm = $('#alarm').val();
    var newAlarm = new Time (alarm);
    newAlarm.alarmTime();
    $('.output').prepend("<h2>alarm set for: " + alarm);
  });
  function update() {
   $('#time').text(moment().format('hh:mm:ss'));
  }
  setInterval(update, 1000);
});
