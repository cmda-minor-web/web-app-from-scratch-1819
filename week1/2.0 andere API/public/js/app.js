// Declare methods
//API 1
var httpRequest = new XMLHttpRequest();
var endpoint = 'https://www.food2fork.com/api/search';
var key = 'b17fa4c70e792c176ba3904b1abec970';
var url = endpoint + '?key=' + key;

var searchSubject = document.getElementById('#searchInput').value;
var query = '&q=' + searchSubject;

var submitButton = document.querySelector('#submitButton');
submitButton.addEventListener('click', testClick);

function testClick () {
    console.log('click werkt!')
    console.log(searchSubject);
}

// httpRequest.open("GET", url);
// httpRequest.send();

// console.log(httpRequest);

// Log HTTP response to console
httpRequest.onreadystatechange=function(){
    if(this.readyState==4 && this.status ==200){
// readyState 4: done. other respones : https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
    console.log(JSON.parse(httpRequest.responseText))
    var jsonText = JSON.parse(httpRequest.responseText)
    // console.log("name: " + jsonText[0].name);
    };



    // log user query to console
function fireSearchForRecipe(){
    //Catch input query from user
  
    console.log(searchSubject);

    httpRequest.open("GET", url);
    httpRequest.send();
};

fireSearchForRecipe();



    // Parse Json from API
// select html class for the logging of the JSON
function ToInnerHTML(msg){
    // insert Serialize? when needed?
    console.log(jsonText)
    document.getElementById('apiOutput').innerHTML = jsonText[1].recipe + "<br/>" ;
};

ToInnerHTML();
};