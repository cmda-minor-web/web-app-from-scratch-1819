// Declare methods
//API 1
var httpRequest = new XMLHttpRequest();
var endpoint = 'https://www.food2fork.com/api/search';
var key = '828761ceff9d459c0761d86f78412455';
var url = endpoint + '?key=' + key;

var searchSubject = document.querySelector('#searchInput');

var submitButton = document.querySelector('#submitButton');
submitButton.addEventListener('click', testClick);

function testClick () {
    console.log('click werkt!', searchSubject.value)
    fireSearchForRecipe(searchSubject.value);
    // console.log(searchSubject);
    
    
}

// httpRequest.open("GET", url);
// httpRequest.send();

// console.log(httpRequest);

// Log HTTP response to console--------------------ADDEVENTLISTENER MAKEN
httpRequest.onreadystatechange=function(){
    if(this.readyState==4 && this.status ==200){
        // readyState 4: done. other respones : https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
        var jsonText = JSON.parse(httpRequest.responseText)
        // console.log("name: " + jsonText[0].name);
        
        ToInnerHTML(jsonText);
    }
    
};
    
// log user query to console
function fireSearchForRecipe(searchSubject){
    var query = '&q=' + searchSubject;
    
    //Catch input query from user
    
    httpRequest.open("GET", url + query);
    httpRequest.send();
    console.log(url + query);

};


// Parse Json from API
// select html class for the logging of the JSON
function ToInnerHTML(data){
    // insert Serialize? when needed?
   // console.log(data)
 
    // createElement
        // appendChild
    data.recipes.forEach(recipe => {
        
        var newP = document.createElement("H3");
        newP.innerText = recipe.title;
        var newP2 = document.createElement("H5");
        newP2.innerText = recipe.ingredients;

        document.querySelector('#selectedTitles').appendChild(newP);
        document.querySelector('.titlesIngredients').appendChild(newP2);
        console.log(recipe.ingredients + " Ingredients found");
       
        // var boxClass = document.createAttribute('class');
        // boxClass.value = "nested";
        // newP.setAttributeNode(boxClass);

    
   });  
};


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

fireSearchForRecipe(searchSubject.value);
searchSubject = selectedGenre;

    
}


recipeShowcase();


// mapfilter
//reduce
//promises
//