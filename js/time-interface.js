var Time = require('./../js/time.js').timeModule;

// function update() {
//  $('#time').text(moment().format('H:mm:ss'));
// }
// setInterval(update, 1000);

$(document).ready(function(){
  var newAlarm = new Time();
  $("#new-item").submit(function(event) {
    event.preventDefault();
    newAlarm.setAlarm($('#alarm').val());
    // var alarm = $('#alarm').val();
    $('.output').prepend("<h2>alarm set for: " + newAlarm.alarm);
    console.log(newAlarm.alarm);
  });

  function update() {
   $('#time').text(moment().format('hh:mm:ss'));
   newAlarm.checkAlarm(moment().format('HH:mm'));
   return update;
  }
  setInterval(update(), 1000);

});
