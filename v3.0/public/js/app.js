"use strict";
var APIResponseString = (sessionStorage.getItem(APIResponseString));

var event = document.querySelector('#APIButton').addEventListener('click', addToUrlInput);
var query = document.getElementById("searchQueryInput").textContent;
var queryString = [];

var selectedCatArray = [];
var selectedCatFirstTime = 0;
var categoryArray = [];

var getHome = function(){
    window.location.hash = '#home'
    return;
}

function addToUrlInput() {
    console.log(document.getElementById("searchQueryInput").value)
    var fgID = '';
    for(var i = 0; i < categoryArray[0].item.length; i++) {
        if(selectedCatArray[0] === categoryArray[0].item[i].name) {
            fgID = fgID.concat("&fg=")
            fgID =  fgID.concat(categoryArray[0].item[i].id);
        };
    };
   // console.log(fgID);
    callAPIProducts(fgID)
};


function getCurrentTime() {
    var d = new Date();
    var time = d.getTime();
    return time;
}


function requestAPIFoodGroups() {
    console.log('new api call -- looking up food groups')
    var endpoint = 'https://api.nal.usda.gov/ndb/list?format=json&lt=g&sort=n&api_key=' + key;
    var url = endpoint;
    
    console.log('the total url = ' + url)
    
    fetch(url)
    .then((res) => res.json())
    .then(res => {
        categoryArray.push(res.list);
       // console.log(res);
        //console.log(JSON.stringify(res))
        
        for (var i = 0; i < res.list.item.length; i++) {
            var name = res.list.item[i].name.valueOf();
            var id = res.list.item[i].id.valueOf();
            var x = new fgID_fgName(name, id)
            // console.log(x);
            templator(res, targetHTML1);
        }
        
    })     
    .then(function(){
        document.querySelector('#searchQueryInput').addEventListener('keyup', function(query){
            if(query.key != 'backspace'){
                queryString.push(query.key)
            }
            
            if(query.key == 'Backspace'){
                queryString.pop(); // pop('backspace')
                queryString.pop(); // pop('new key')
            }

            if(document.querySelector('#searchQueryInput').value == ''){
            queryString == [];
            }
            console.log(queryString)
        });
        
    })
    .catch(err => console.log(err));
}



function callAPIProducts(fgID) {
    // need to change the fgID tag in url below to match &fg=
    // for(var i = 0; i < fgID_fgName.length; i++){
    //     fgID.push("&fg=" +     
    //     console.log(fgID)
    var queryURL = '';
for(var i = 0; i < queryString.length; i++){
    queryURL += (queryString[i])
}
//console.log(queryURL)

    var url = 'https://api.nal.usda.gov/ndb/search/?format=json&q=' + queryURL + '&sort=n&max=25&offset=0' + fgID + '&api_key=' + key;
    console.log('the total url = ' + url)
    fetch(url)
    .then((res) => res.json())
    .then((res) => {
       // console.log(res)
        //need to insert caching before templateFunction is called
        templateFunction(res);
        })
        .catch(err => console.log(err));
}




///////////////////////API REQUEST
function callAPI(productNumber) {
    console.log('new api call for ' + productNumber);

    var url = 'https://api.nal.usda.gov/ndb/reports/?ndbno=' + productNumber + '&type=b&format=json&api_key=' + key;
    // var endpoint =  'https://api.nal.usda.gov/ndb/V2/reports?ndbno=' + productNumber + '&type=b&format=json&api_key=' + key;
    // var endpoint = 'https://api.nal.usda.gov/ndb/search/?format=json&q=' + searchQuery + '&max=25&offset=0&api_key=' + key; 
    // https://api.nal.usda.gov/ndb/V2/reports?ndbno=01009&type=b&format=json&api_key=DEMO_KEY
    // Browser: https://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=DEMO_KEY&nutrients=205&nutrients=204&nutrients=208&nutrients=269&ndbno=01009



   // console.log('the total url = ' + url)
    // saveInLocalStorage(testObject);

    fetch(url)
        .then((res) => res.json())
        .then(res => {
            //Enter target id or class
            //var htmlTarget = '#templateAPI';

            //console.log(res);
            // for (var i = 0; i < APIResponse.recipes.length; i++) {
            for (var i = 0; i < 8; i++) {


                saveInSessionStorage(res, productNumber);

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



// function databasefunction(){
//     for(var i = 0 ;  i < database.name.length; i++){

//         database.get[i]('regio')

//         if(database.res === searchInput){
//             return database.res
//         }

//         getData(res)

//     }
    
// }



// function getData(res){
//     var plaatsOpWebsite = document.querySelector('plaatsnaam').innerHTML
//     plaatsOpWebsite.value = res;

// }


// // input ding

// // input = budgetlegal


// database = [
    
//     {
//     name: 'budgetlegal',
//     regio: 'hoorn',
//     prijs: '100',
//     unit: 'uur',
//     rechtsgebied: [
//         {
//             name1: 'bedrijfsrecht',
//         },

//         {
//             //name 2
//         }
//     ]
//     }
// ]

// // detailpagina 
//     //form
//         // knop submit 
//         // input

// // knop submit heef functie onclick
 
// // onclick="voegToeAanDatabase()"


// function voegToeAanDatabase(){
//     var x = document.querySelector('input element id').value
    
//     new databaseData(x)    
// }

// var i =  getDate()

// eindevandedagFunctie(){
//     var y = getDate()
//     if(y > i + 600000){

//         database.put([x])
//     }    
    
// }

// class databaseData(x){
//     constructor(
//         this.name = x.name;
//     )



// }


