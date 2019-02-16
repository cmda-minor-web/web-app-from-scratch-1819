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
        for (var i = 0; i < APIResponse.recipes.length; i++) {
            saveInLocalStorage(APIResponse, searchQueryInput);
           
            console.log('sessionStorage.length = ' + sessionStorage.length + ' at the end of script')
             return console.log('Succesfully Rendered To Template');

        };
    })
    .catch(err => console.log(err));
};
    

/////////////////////////////////////////////////////////////////////////////