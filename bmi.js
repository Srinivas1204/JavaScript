
while(true)
    {
        var mass=parseFloat(prompt("Enter your mass in kgs?"))
        var height=parseFloat(prompt("Enter your height in CM!"))
        bmi=mass/(height/100)**2
        if(bmi<=18.5){
            alert("You are Under weighted!!");
        }
        else if(bmi<=25){
            alert("You are Normal weighted!!")
        }
        else if(bmi<=30){
            alert("You are Over weighted!!")
        }
        else{
            alert("obesed")
        }
        var txt=prompt("Do you want to continue? YES/NO")
        if(txt !="yes"){
            break;
        }
        
    }