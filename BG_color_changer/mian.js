
//rendering color picker into js file.
let bgChange = document.getElementById("bgcolor")

//1st way
//generating event to change the background color based on input.


// bgChange.oninput=function(){
//     document.body.style.backgroundColor=this.value;
// }


//2nd way
//using addEventListener()

bgChange.addEventListener('input',change)
function change(){

    document.body.style.backgroundColor=this.value;
}
