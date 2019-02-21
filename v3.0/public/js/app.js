"use strict";
var searchQuery = document.querySelector('#searchQueryInput').innerHTML.value
var APIResponseString = (sessionStorage.getItem(APIResponseString));

// if wel aanwezig maar oude data (ouder dan een uur)
// leeg de localstorage met clear()
// callAPI


//if niet aanwezig:
//callAPI();


function getCurrentTime(){
    var d = new Date();
    var time = d.getTime();
    return time;
}

///////////////////////API REQUEST
function callAPI(searchQueryInput) {
    console.log('new api call');
    var endpoint = 'https://www.food2fork.com/api/search'
    const url = endpoint + '?key=' + key;
    var query = '&q=' + searchQueryInput;
    console.log('the total url = ' + url + query )
   // saveInLocalStorage(testObject);

    fetch(url + query)
    .then((res) => res.json())
    .then( res => {

        //Enter target id or class
        //var htmlTarget = '#templateAPI';
        
        //console.log(res);
        var APIResponse = res;
        console.log(APIResponse)
        // for (var i = 0; i < APIResponse.recipes.length; i++) {
        for (var i = 0; i < 8; i++) {
            saveInLocalStorage(APIResponse, searchQueryInput);
           
            console.log('sessionStorage.length = ' + sessionStorage.length + ' at the end of script')
             return console.log('Succesfully Rendered To Template');

        };
    })
    .catch(err => console.log(err));
};
    

/////////////////////////////////////////////////////////////////////////////Possible new module style.js?

// function backgroundEffect(body, color){
    
//     var element = document.getElementById('element');
// element.style.background = '#FF00AA';
    
//     document.addEventListener
// }

// backgroundEffect();

// color.onclick = function() {
//     document.querySelectorAll('.card').style.backgroundColor.text/CSS('background: rgb(0,0,0); background: linear-gradient(180deg, rgba(0,0,0,0.8861825980392157) 21%, rgba(255,255,255,1) 47%, rgba(0,17,122,0.8217568277310925) 78%)')
// }

// class particle{
//     constructor(){
//         this.
//     }
// }

function showBox(){
    document.querySelector('.GlobalContainer').style.display('grid');
}