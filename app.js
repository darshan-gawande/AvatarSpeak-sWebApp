var buttonSelector = document.querySelector("#btn-translator");
var textInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");


function clickEventHandler() {
   outputDiv.innerText = "ajnskankdsngskna = " + textInput.value;
}

buttonSelector.addEventListener("click",clickEventHandler);


