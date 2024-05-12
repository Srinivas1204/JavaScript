const gNumber=Math.floor(Math.random()*100)+1;

chance=0;

while(chance<5){
var num = parseInt(prompt("Guess the secret number (between 1 and 100)!"))
if(num > gNumber){
    alert("You Entered a high number!!");
}
else if(num < gNumber){
    alert(" You Entered a lower number!!");
}
else if(num==gNumber){
    alert("Congratulations You've guessed the numbe!.")
    break;
}
else{
    alert("Please Enter a number!")
}
chance++
if(chance==4){
    alert("This is your last chance to guess the number!")
}
else if(chance==5){
    alert(`Game over! The correct number is ${gNumber}.`)
}
}