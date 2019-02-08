var endpoint = 'https://www.food2fork.com/api/search';
var key = '828761ceff9d459c0761d86f78412455';
var url = endpoint + '?key=' + key;

var searchSubject = document.querySelector('#searchInput');
var submitButton = document.querySelector('#submitButton');


submitButton.addEventListener('click', submitted);

function submitted() {
    console.log('click works!' + "U searched for meals with: " + searchSubject.value);
    fireSearchForRecipe(searchSubject.value).then((res)=>{
       // console.log(res);
        var JSONText = JSON.parse(res)
        return JSONText
    }).then((res)=>{
        ToInnerHTML(res, '#LookedUpTitles');
    })
    //console.log(searchSubject);
};

// Parse Json from API
// select html class for the logging of the JSON
function ToInnerHTML(data, element) {
    // insert Serialize? when needed?
    // console.log(data)

    // createElement
    // appendChild
    for( let i = 0; i < 10; i++){
        //i < "number of displayed items"
        // console.log("nog iets" + i)
        
        var newP = document.createElement("BUTTON");
            newP.innerText = data.recipes[i].title;
            var newP2 = document.createElement("H5");
            newP2.innerText = data.recipes[i].ingredients;
            
         document.querySelector(element).appendChild(newP);
        // document.querySelector('.titlesIngredients').appendChild(newP2);
        //console.log(data.recipe[i].ingredients + " Ingredients found");
        // line above returns unidentified
        };


};




function fireSearchForRecipe(searchSubject) {
    //return a new promise
  
   return new Promise(function (resolve, reject) {
                //make new XMLHttpRequest();
                var query = '&q=' + searchSubject;
                var httpRequest = new XMLHttpRequest();
                httpRequest.open('GET', url + query);
                httpRequest.send();
                //.log(httpRequest);

                httpRequest.onload = function () {
                    //This is called even on 404 etc
                    // so check the status

                    if (httpRequest.status >= 200 && httpRequest.status < 400) {
                        //Resolve the promise with the response text
                        
                        resolve(httpRequest.response)
                        
                        
                    } else {
                        //otherwise reject with the status text
                        // which will be an error
                        reject(httpRequest.status);
                    };
                };
                //insert andere error
                httpRequest.onerror = function(e){
                    reject(e.status);
                }
            });
            
            // bla.then((res)=>{
            //     console.log(res);
            // });
         

            //Handle network errors
            

        

                
            };

        // },
        // function (error) {
        //     console.error("Failed! this is an error", error);

        // });







//Take a random number to choose a genre of food. 
//display 10 meals from that genre
//outcommented because the result interferes with searchSubject
// upon arriving on site.
// need to add array with the 10 meals that will be displayed, currently 30+ are displayed.
function recipeShowcase(){

    var genre = [
        "meat", "fruit", "icecream", 
        "protein", "chicken", "sushi",
        "beef", "pancake", "vegetable",
        "drink"
    ]
    var x = Math.floor(Math.random()*genre.length);
    var selectedGenre = genre[x];
console.log("The value of x is " + selectedGenre);

//searchSubject = selectedGenre;
fireSearchForRecipe(selectedGenre).then((res)=>{
    // console.log(res);
     var JSONText = JSON.parse(res)
     return JSONText
 }).then((res)=>{
     ToInnerHTML(res, '#ingredients');
 });


 };


 recipeShowcase();


// mapfilter
//reduce
//promises
//

