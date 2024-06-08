let hrHand=document.querySelector('.hr-hand');
let minHand=document.querySelector('.min-hand');
let secHand=document.querySelector('.sec-hand');

setInterval(clockTime,1000);

function clockTime(){
    let date = new Date();
    secHand.style.transform = `rotate(${date.getSeconds()*6}deg)`
    minHand.style.transform = `rotate(${date.getMinutes()*6}deg)`
    hrHand.style.transform = `rotate(${date.getHours()*30}deg)`
}