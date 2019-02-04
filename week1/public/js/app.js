
// Declare methods
var httpRequest = new XMLHttpRequest();
const urlJsonApi = 'https://jsonplaceholder.typicode.com/users'

// const content = Element.innerHTML;
// Element.innerHTML = htmlString;

// tie HTTP method and URL endpoint together + fire off request
httpRequest.open("GET", urlJsonApi);
httpRequest.send();



// Log HTTP response to console
httpRequest.onreadystatechange=function(){
    if(this.readyState==4 && this.status ==200){
// readyState 4: done. other respones : https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
    console.log(httpRequest.responseText);

// Parse Json from API
var json = (httpRequest.responseText);
var obj = JSON.parse(json);
console.log(obj.name);
console.log(obj.email);
    
// select html class for the logging of the JSON
function ToInnerHTML(msg){
    // Serialize?
    var logElemUnserialized = document.querySelector('.log');
    var logElem = serialize(logElemUnserialized);
   
    logElem.innerHTML = msg + "<br/>";

// Read the html content of an element
    console.log(logElem);

    //replacing contents of an element
document.logElem.innerHTML= httpRequest.responseText;
    };
};







}
