const massInputBox =document.getElementById("mass");
const heightInputBox = document.getElementById("height")
const result = document.getElementById('result')
const errors=document.getElementById("errors")
//const clocks =document.getElementById("clocks")

const validateInput = ()=>{
    result.innerText=""
    errors.innerText=""
    if(massInputBox.value===""){
        errors.innerText="Please provide Mass"
        return false
    }
    else if(!/\d+/.test(massInputBox.value)){
        errors.innerText = "Please provide valid Mass in kgs"
        return false
    }
    if(heightInputBox.value===""){
        errors.innerText="Please provide Height"
        return false
    }
    else if(!/\d+/.test(heightInputBox.value)){
        errors.innerText = "Please provide valid height in cms"
        return false
    }
    return true
}
const calculateBMI = () =>{

// while(true)
//     {
        var mass=parseFloat(massInputBox.value)
        var height=parseFloat(heightInputBox.value)
        bmi=mass/(height/100)**2;
        bmiRound=bmi.toFixed(2)
        if(bmi<=18.5){
            result.innerHTML=`You are BMI is:${bmiRound} <br>
            you are Under weighted!!`;
        }
        else if(bmi<=25){
            result.innerHTML=`You are BMI is:${bmiRound} <br>
            Normal weighted!!`;
        }
        else if(bmi<=30){
            result.innerHTML=`You are BMI is:${bmiRound} <br>
            Over weighted!!`;
        }
        else{
            result.innerHTML=`You are BMI is:${bmiRound} <br>
            You are obesed!!`;
        }
        
    }
// }

// let clockCounter=0
// const updateClock=()=>{
//     clocks.innerHTML=clockCounter
//     clockCounter++
// }
// setInterval(updateClock,1000)