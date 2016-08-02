function Time(alarm) {
  this.alarm = alarm;
 }

var currentTime = (moment().format('hh:mm'));

Time.prototype.alarmTime = function (alarm) {
  if (alarm === currentTime) {
    alert("Wakie wakie eggs and bacey");
  }

};
console.log(currentTime);

setInterval(1000);


exports.timeModule = Time;
