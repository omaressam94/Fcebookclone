function showTime() {
    var dateTime = new Date();
    var hours = dateTime.getHours();
    var minutes = dateTime.getMinutes();
    var seconds = dateTime.getSeconds();
    var timeZone = "AM";
    if (hours == 0) {
        hours = 12;
    } if (hours > 12) {
        hours = hours - 12
        timeZone = "PM";
    }
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    var clock = hours + ":" + minutes + ":" + seconds + " " + timeZone;

    document.getElementById("clock").innerHTML = clock;
    setTimeout(showTime, 1000);
}
showTime();