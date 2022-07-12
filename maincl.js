let day = null, hour = null, minute = null, tick = null;
let settime;
var startbut = document.getElementById("startbut");
var stopbut = document.getElementById("stopbut");
function start() {
    clicktime++;
    console.log(clicktime);
    if (day === null) {
        day = document.getElementById("day").value
        hour = document.getElementById("hour").value
        minute = document.getElementById("minute").value
        tick = document.getElementById("tick").value
    }
    if (tick === -1) {
        minute -= 1;
        tick = 59;
    }
    if (minute === -1) {
        hour -= 1;
        minute = 59;
    }
    if (hour === -1) {
        day -= 1;
        hour = 23;
    }
    if (day == -1) {
        alert("TIME OUT");
    }
    let time1, time2, time3, time4;
    tick < 10 ? time1 = "0" + tick : time1 = tick;
    minute < 10 ? time2 = "0" + minute : time2 = minute;
    hour < 10 ? time3 = "0" + hour : time3 = hour;
    document.getElementById('t').innerText = time1;
    document.getElementById('m').innerText = time2;
    document.getElementById('h').innerText = time3;
    document.getElementById('d').innerText = day;
    settime = setTimeout(function () {
        tick--;
        start();
        startbut.onclick = function (e) { }
    }, 1000)
}
function stop() {
    clearTimeout(settime)
    startbut.onclick = function (e) {
        start();
    }
}
startbut.onclick = function (e) {
    start();
}
stopbut.onclick = function (e) {
    stop()
}

