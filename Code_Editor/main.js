let run = document.querySelector('.run');
let refresh = document.querySelector('.refresh')
let inputField = document.querySelector('.input');
let outputFeild = document.querySelector('.output');

run.addEventListener('click',execute)

function execute(){
    //reading inputFeild value.
    let input=inputField.value;
    //clearing outputField value after 1time execution.
    outputFeild.contentWindow.document.body.innerHTML="";
    //generating output.
    outputFeild.contentWindow.document.write(input);
}


//refreshing the input feild.
refresh.addEventListener('click',reLoad)
function reLoad(){
    let ref=inputField.value=''
}