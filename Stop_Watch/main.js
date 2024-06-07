let mseconds=0,seconds=0,minutes=0,hours=0;
let TimeCounter=document.querySelector(".TimeCount")
let timer;


document.getElementById('start').onclick=function(){
    timer=setInterval(updateTime,10)
}


function updateTime(){
    mseconds=mseconds+10;
    if(mseconds==1000){
        seconds+=1;
        mseconds=0
        if(seconds==60){
            minutes+=1;
            seconds=0;
            if(minutes==60){
                hours+=1;
                minutes=0;
            }
        }

    }
    let h,m,s,ms;
    if(hours<10){
        h='0'+hours;
    }
    else{
        h=hours;
    }
    if(minutes<10){
        m='0'+minutes;
    }
    else{
        m=minutes;
    }
    if(seconds<10){
        s='0'+seconds;
    }
    else{
        s=seconds;
    }
    if(mseconds<10){
        ms='0'+mseconds;
    }
    else if(mseconds<100){
        ms='00'+mseconds;
    }
    else{
        ms=mseconds;
    }
    TimeCounter.innerHTML = `${h} : ${m} : ${s} : ${ms}`
}
document.getElementById("pause").onclick=function(){
    clearInterval(timer)
}
document.getElementById("reset").onclick=function(){
    clearInterval(timer);
    mseconds=0;
    seconds=0;
    minutes=0;
    hours=0;
    TimeCounter.innerHTML="00 : 00 : 00 : 000"
}