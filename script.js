window.addEventListener('load',calculateTime); //calls function upon load

function calculateTime(){
    let date = new Date();
    console.log(date);

    let dayNumber = date.getDay();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let ampm = hour >= 12 ? 'PM' : 'AM'  //if true, PM. Else AM

    let dayNames = ["SUN", "MON","TUE","WED","THU","FRI","SAT"];

    hour = hour % 12;   // 17%12 = 5, standard time format

    hour = hour ? hour:'12';    //hour > 0 : hour     hour == 0 : '12' 
    hour = hour < 10 ? '0' + hour : hour;
    minute = minute < 10 ? '0' + minute : minute;

    document.getElementById("day").innerHTML = dayNames[dayNumber];
    document.getElementById("hour").innerHTML = hour;
    document.getElementById("minute").innerHTML = minute;
    document.getElementById("ampm").innerHTML = ampm;

    setTimeout(calculateTime, 200);  //repeatively calls function per 200ms
}

