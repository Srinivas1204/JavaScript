let textArea=document.getElementById("text-content");
let word_Count=document.getElementById("word-count");
let char_Count=document.getElementById("char-count");
let textCount;

//adding event on textarea input change.
textArea.addEventListener('input',()=>{
    //getting the value of textarea
    textCount=textArea.value;
    //finding the length of characters and updating char_Count in Html.
    char_Count.innerHTML=textCount.length;
    //finding the no.of words by using split() with RGEX character as seperator. And updating word count in Html.
    word_Count.innerHTML=textCount.trim().split(/\s/).length;
})
