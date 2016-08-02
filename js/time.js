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
exports.timeModule = Time;
