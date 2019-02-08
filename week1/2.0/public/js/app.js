// Declare methods
//API 1
var httpRequest = new XMLHttpRequest();
var endpoint = 'https://www.food2fork.com/api/search';
var key = '828761ceff9d459c0761d86f78412455';
var url = endpoint + '?key=' + key;

var searchSubject = document.querySelector('#searchInput');
var submitButton = document.querySelector('#submitButton');


submitButton.addEventListener('click', submitted);

function submitted() {
    console.log('click works!', searchSubject.value);
    fireSearchForRecipe(searchSubject.value);
    //console.log(searchSubject);
    
}

// console.log(httpRequest);

// Log HTTP response to console--------------------ADDEVENTLISTENER MAKEN
httpRequest.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        // readyState 4: done. other respones : https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
        var jsonText = JSON.parse(httpRequest.responseText)
        // console.log("name: " + jsonText[0].name);
        
        ToInnerHTML(jsonText);
    }
    
};

// log user query to console
function fireSearchForRecipe(searchSubject) {
    var query = '&q=' + searchSubject;
    
    //Catch input query from user
    
    httpRequest.open("GET", url + query);
    httpRequest.send();
    console.log(url + query);

};


// Parse Json from API
// select html class for the logging of the JSON
function ToInnerHTML(data) {
    // insert Serialize? when needed?
    // console.log(data)

    // createElement
    // appendChild
    
    console.log("iets")
    for( let i = 0; i < 10; i++){
        //i < "number of displayed items"
        // console.log("nog iets" + i)
        
        var newP = document.createElement("BUTTON");
            newP.innerText = data.recipes[i].title;
            var newP2 = document.createElement("H5");
            newP2.innerText = data.recipes[i].ingredients;
            
         document.querySelector('#lookedUpTitles').appendChild(newP);
        // document.querySelector('.titlesIngredients').appendChild(newP2);
        //console.log(data.recipe[i].ingredients + " Ingredients found");
        // line above returns unidentified
        };



    
};



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
    var x = Math.floor(Math.random() *11);
    var selectedGenre = genre[x];
console.log("The value of x is " + selectedGenre);

// fireSearchForRecipe(searchSubject.value);
// searchSubject = selectedGenre;


}


// recipeShowcase();


// mapfilter
//reduce
//promises
//