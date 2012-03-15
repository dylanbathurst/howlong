exports.howLong = howLong;

function howLong(milliseconds) {
  var originalDate = new Date(milliseconds);

  var newDate = new Date();
  var time = (newDate - originalDate) / 1000;
  var days = Math.floor(time / (60 * 60 * 24));

  if (days < 0) {
  return 'Just Now';
  } else if (days == 0) {
  var hours = Math.floor(time / (60 * 60));

  if (hours == 0) {
    var minutes = Math.floor(time / 60);

    if (minutes == 0) {
      return 'Just Now';
    } else if (minutes == 1) {
      return '1 Minute Ago';
    } else {
      return minutes + ' Minutes Ago';
    }

  } else if (hours == 1) {
    return '1 Hour Ago';
  } else {
    return hours + ' Hours Ago';
  }

  } else if (days == 1) {
  return '1 Day Ago';
  } else {
  return days + ' Days Ago';
  }
}

// Key
// var milliseconds = newDate - originalDate;
// var seconds = milliseconds / 1000;
// var minutes = seconds / 60;
// var hours = minutes / 60;
// var days = hours / 24;
// var months = days / 30;
// var years = months / 12;
// console.log(milliseconds, seconds, minutes, hours, days, months, years);
