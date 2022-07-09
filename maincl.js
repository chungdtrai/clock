var day=null, hour=null, minute=null, tick=null;
// day = document.getElementById("day").value
// hour = document.getElementById("hour").value
// minute = document.getElementById("minute").value
// tick = document.getElementById("tick").value
// day = parseInt(document.getElementById("day").value)
// hour = parseInt(document.getElementById("hour").value)
// minute = parseInt(document.getElementById("minute").value)
// tick = parseInt(document.getElementById("tick").value)
// console.log(day, hour, minute, tick)
var settime;
function start(){
    console.log(day, hour, minute, tick)
    if(day === null){
        day = document.getElementById("day").value
        hour = document.getElementById("hour").value
        minute = document.getElementById("minute").value
        tick = document.getElementById("tick").value
    }
    if(tick === -1){
        minute -=1;
        tick = 59;
    }
    if(minute === -1){
        hour -= 1;
        minute = 59;
    }
    if(hour === -1){
        day -=1;
        hour = 23;
    } 
    if(day == -1){
        alert("TIME OUT");
    }
    document.getElementById('t').innerText = tick.toString();
    document.getElementById('m').innerText = minute.toString();
    document.getElementById('h').innerText = hour.toString();
    document.getElementById('d').innerText = day.toString();
    settime = setTimeout(function(){
        tick--;
        start();
    },1000) 
}
function stop(){
    clearTimeout(settime)
}
