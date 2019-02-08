
// Declare methods
//API 1
var httpRequest = new XMLHttpRequest();
const urlJsonApi = 'https://jsonplaceholder.typicode.com/users';
//API2
var httpRequest2 = new XMLHttpRequest();
const urlJsonApi2  = 'https://randomuser.me/api/';

// const content = Element.innerHTML;
// Element.innerHTML = htmlString;
//
// tie HTTP method and URL endpoint together + fire off request
httpRequest.open("GET", urlJsonApi);
httpRequest.send();

httpRequest2.open("GET", urlJsonApi2);
httpRequest2.send();


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!Extra self made
// function storeData(){
// document.getElementById("recentlyAddedFirstName") = document.getElementById("input1").innerText
// document.getElementById("recentlyAddedLastName") = document.getElementById("input2").innerText
// document.getElementById("recentlyAddedEmail") = document.getElementById("input3").innerText
// };

// var recentlyAddedFirstName = document.getElementById("input1").innerText
// /////////////////////////////////////////
// Log HTTP response to console
httpRequest.onreadystatechange=function(){
    if(this.readyState==4 && this.status ==200){
// readyState 4: done. other respones : https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
    console.log(JSON.parse(httpRequest.responseText))
    var jsonText = JSON.parse(httpRequest.responseText)
    console.log("name: " + jsonText[0].name);
    };

 
// Parse Json from API
// select html class for the logging of the JSON
function ToInnerHTML(msg){
    // insert Serialize? when needed?

    var logElem = document.getElementsByClassName('log');
    console.log(jsonText)
    document.getElementById('log').innerHTML = jsonText[1].name + "<br/>" + jsonText[1].email;
    document.getElementById('log1').innerHTML = jsonText[2].name + "<br/>" + jsonText[1].email;
    document.getElementById('log2').innerHTML = jsonText[3].name + "<br/>" + jsonText[1].email;

//   Stop dit in een lijst die dynamisch html genereerd!!!!


// Read the html content of an element
    // console.log(logElem);

    //replacing contents of an element
// document.logElem.innerHTML= httpRequest.responseText
  

}; //API 2
   httpRequest2.onreadystatechange=function(){
        if(this.readyState==4 && this.status ==200){
    // readyState 4: done. other respones : https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
        console.log(JSON.parse(httpRequest2.responseText2))
        var jsonText = JSON.parse(httpRequest2.responseText2)  
        document.getElementById('PictureBox1').innerHTML = jsonText[1].picture.medium;

        };
    
    ToInnerHTML();

////////////////////////////////////////
//Extra oefening
// connect input boxes convert to json, return as text


storeData();




    };
};
