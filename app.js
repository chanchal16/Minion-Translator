var btnInput = document.querySelector('#btn-input');
var txtInput = document.querySelector('#txt-input');
var outputDiv = document.querySelector('#output');

console.log(outputDiv);
var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationUrl(input){
    return serverURL + "?" + "text=" + input;
}

function clickHandler(){
    var inputText = txtInput.value;//taking input

    fetch(getTranslationUrl(inputText))           //processing i/p
    .then(response => response.json())
    .then(json => {
        // var translatedTxt =json.contents.translated 
        // outputDiv.innerHTML= translatedTxt;
        console.log(json)
    })
    .catch(err => console.log('error detected', err));      //error handling
}

btnInput.addEventListener('click',clickHandler)
