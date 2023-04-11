var buttonSelector = document.querySelector("#btn-translator");
var textInput = document.querySelector("#txt-input");

console.log(textInput);

function clickEventHandler() {
    console.log("Clicked!");
    console.log("input",textInput.value);
}

buttonSelector.addEventListener("click",clickEventHandler);


