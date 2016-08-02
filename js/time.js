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
