var btnTranslate = document.querySelector("#btn-translator");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/navi.json" 
// API endpoint
	

// API request
function getTranslationURL(text) {  
   return serverURL + "?" + "text=" + text
}

function errorHandler(error) {     // error handling
   console.log("error occurred",error);
   alert("something wrong with server,try again after some time ");
}


function clickEventHandler() {
   var inputText = txtInput.value;

   fetch(getTranslationURL(inputText))
   .then(response => response.json())
   .then(json => {
      var translatedText = json.contents.translated;
      outputDiv.innerText = translatedText;
   })
   .catch(errorHandler)
   
}

btnTranslate.addEventListener("click",clickEventHandler);


