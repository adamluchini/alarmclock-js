(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Time(alarm) {
  this.alarm = alarm;
 }



Time.prototype.alarmTime = function () {
  var currentTime = (moment().format('H:mm'));

  if (this.alarm === currentTime) {
    alert("Wakie wakie eggs and bacey");
  }
  console.log(currentTime);
  console.log(this.alarm);
};
setInterval(1000);


exports.timeModule = Time;

},{}],2:[function(require,module,exports){
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

},{"./../js/time.js":1}]},{},[2]);
