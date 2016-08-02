(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Time() {
  this.alarm = alarm;
 }



Time.prototype.setAlarm = function (time) {
  this.alarm = time
  // var currentTime = (moment().format('H:mm'));
  //console.log(currentTime);
  console.log(this.alarm);
};

Time.prototype.checkAlarm = function (time) {
  console.log(time);
  if (this.alarm === time) {
    alert("Wakie wakie eggs and bacey");
  }
}

exports.timeModule = Time;

},{}],2:[function(require,module,exports){
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

},{"./../js/time.js":1}]},{},[2]);
