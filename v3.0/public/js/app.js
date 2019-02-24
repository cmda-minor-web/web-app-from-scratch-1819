"use strict";
var APIResponseString = (sessionStorage.getItem(APIResponseString));

var searchQueryInput = document.querySelector('#searchQueryInput').value;
const event = document.querySelector('#APIButton').addEventListener('click', callAPIDetail);



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


function requestAPIFoodGroups(){
    console.log('new api call -- looking up food groups')
    var endpoint = 'https://api.nal.usda.gov/ndb/list?format=json&lt=g&sort=n&api_key=' + key;
    var url = endpoint;
    
    console.log('the total url = ' + url )
    
    fetch(url)
    .then((res) => res.json())
    .then( res  => {
    
    console.log(res);


    for(var e = 0; e < fgID.length; e++){
        
    }
    console.log(fgID)
        templator(res, targetHTML1);    
    });

}

requestAPIFoodGroups();

function callAPIDetail(fgID){
    // need to change the fgID tag in url below to match &fg=
    console.log(selectedCatArray)
    for(var i = 0; i < res.list.item.length; i++){
        fgID.push("&fg=" + res.list.item[i].id);    
        console.log(fgID)
    }




    var url = 'https://api.nal.usda.gov/ndb/search/?format=json&q=' + searchQueryInput  + '&sort=n&max=25&offset=0' + fgID[0] + '&api_key=' + key;
    console.log('the total url = ' + url )
    fetch(url)
    .then((res) => {
        res.json()
        
    })
    .then((res) => {
        console.log('new api call' + searchQueryInput);
        console.log('the productnumber = ' + res);
        var APIResponse = res;
    });

}


///////////////////////API REQUEST
function callAPI(productNumber) {  
    console.log('new api call' + searchQueryInput);

    var url = 'https://api.nal.usda.gov/ndb/reports/?' + productNumber + '&type=b&format=json&api_key=' + key;
    // var endpoint =  'https://api.nal.usda.gov/ndb/V2/reports?ndbno=' + productNumber + '&type=b&format=json&api_key=' + key;
    // var endpoint = 'https://api.nal.usda.gov/ndb/search/?format=json&q=' + searchQuery + '&max=25&offset=0&api_key=' + key; 
    // https://api.nal.usda.gov/ndb/V2/reports?ndbno=01009&type=b&format=json&api_key=DEMO_KEY
    // Browser: https://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=DEMO_KEY&nutrients=205&nutrients=204&nutrients=208&nutrients=269&ndbno=01009
    
    
    
    console.log('the total url = ' + url )
    // saveInLocalStorage(testObject);
    
    fetch(url)
    .then((res) => res.json())
    .then( res => {
        //Enter target id or class
        //var htmlTarget = '#templateAPI';
        
        //console.log(res);
        var APIResponse = res;
        console.log(APIResponse)
        // for (var i = 0; i < APIResponse.recipes.length; i++) {
            for (var i = 0; i < 8; i++) {
                

                saveInSessionStorage(APIResponse, productNumber);
                
                console.log('sessionStorage.length = ' + sessionStorage.length + ' at the end of script')
                return console.log('________________________________________________________Succesfully Rendered To Template');
                
        };
    })
    .catch(err => console.log(err));
};
    
// All foods:
// Browser: http://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=DEMO_KEY&nutrients=205&nutrients=204&nutrients=208&nutrients=269
// CURL: curl -H "Content-Type:application/json" -d '{"nutrients":["204","205","208","269"],"max":25,"offset":0}' DEMO_KEY@api.nal.usda.gov/ndb/nutrients
// For food groups Dairy and Egg Products (id = 0100) and Poultry Products (id=0500):
// Browser: https://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=DEMO_KEY&nutrients=205&nutrients=204&nutrients=208&nutrients=269&fg=0100&fg=0500
// CURL: curl -H "Content-Type:application/json" -d '{"nutrients":["204","205","208","269"],"fg":["0100","0500"],"max":25,"offset":0}' DEMO_KEY@api.nal.usda.gov/ndb/nutrients

// For chedder cheese (ndbno 01009) only:
// Browser: https://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=DEMO_KEY&nutrients=205&nutrients=204&nutrients=208&nutrients=269&ndbno=01009
// CURL: curl -H "Content-Type:application/json" -d '{"nutrients":["204","205","208","269"],"ndbno":"01009","max":25,"offset":0}' DEMO_KEY@api.nal.usda.gov/ndb/nutrients


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

// function showBox(){
//     var myElement = document.querySelector('.GlobalContainer')
//     myElement.style.display('grid');
// }

// showBox();
