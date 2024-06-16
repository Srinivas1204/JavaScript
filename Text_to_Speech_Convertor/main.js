let textArea = document.getElementById('text');

let voiceEle = document.getElementById('voiceList');

let btn = document.getElementById('speak');

let error = document.getElementById('error');

//speechSynthesis is browser api which is used to work with the voices in a application.
let speechSynth = speechSynthesis;

speechSynth.addEventListener('voiceschanged',loadVoice);

//getting all voices from browser and appeding as a option of drop down.
function loadVoice(){
    let voices = speechSynth.getVoices();
    for(voice of voices){
        //creating option element.
        let option = document.createElement('option');
        option.value = voice.name;
        //setting option tag content.
        option.innerText = `${voice.name} ${voice.lang}`;
        //adding all elements to drop-down.
        voiceEle.appendChild(option);

    }
}

//generating voice for text that is present in textarea.
function textTospeech(text){
    let utterance = new SpeechSynthesisUtterance(text);
    //validating the selected value.
    for(let voice of speechSynth.getVoices()){
        if(voice.name === voiceEle.value){
            utterance.voice = voice;
        }
    }
    speechSynth.speak(utterance);
}

//adding event to button.
btn.addEventListener('click',()=>{
    if(textArea.value === ''|| textArea.value === '.'){
        error.innerText='Please provide any text to speak.';
    }
    else{
         textTospeech(textArea.value)
            error.innerText=''
    }
})
