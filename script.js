var textareabutton=document.querySelector(".text-area")
var button=document.querySelector(".nav-button")
var outputdiv=document.querySelector("nav-output")
//const URL="https://api.funtranslations.com/translate/minion.json"

const URL="https://api.funtranslations.com/translate/dothraki.json"
function getURL(text)
{
  return URL+"?text="+text;
}
function errorhandler(error)
{
  console.log("Error is "+error);
}
function clickhandler()
{
    var textintextarea=textareabutton.value;
    fetch(getURL(textintextarea))
    .then(response=>response.json())
    .then(json=>{
      var translatedText = json.contents.translated;
      outputdiv.innerText = translatedText;
    }) 
    .catch(errorhandler)
}
button.addEventListener("click",clickhandler)