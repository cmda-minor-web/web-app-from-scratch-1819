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
};

function fireSearchForRecipe(searchSubject) {
    var query = '&q=' + searchSubject;


    function get(url) {
        //return a new promise
        return new Promise(function (resolve, reject) {
            //make new XMLHttpRequest();
            var httpRequest = new XMLHttpRequest();
            httpRequest.open('GET', url + query);

            httpRequest.onload = function () {
                //This is called even on 404 etc
                // so check the status

                if (httpRequest.status == 200) {
                    //Resolve the promise with the response text
                    resolve(httpRequest.response);
                    ToInnerHTML(jsonText);
                    console.log(jsonText);
                } else {
                    //otherwise reject with the status text
                    // which will be an error
                    reject(Error(httpRequest.statusText));
                }
            };

            //Handle network errors
            httpRequest.onerror = function () {
                reject(Error("Network Error"));
                console.log("OOPS this is an error");
            };
            get('story.json').then(function (response) {
                console.log("Succes! No error", response);

                function getJSON(url) {
                    return get(url).then(JSON.parse);
                };

            }, function (error) {
                console.error("Failed! this is an error", error);

            });



        });
    };
    // Parse Json from API
    // select html class for the logging of the JSON
    function ToInnerHTML(data) {
        // insert Serialize? when needed?
        // console.log(data)

        // createElement
        // appendChild
        data.recipes.forEach(recipe => {

            var newP = document.createElement("BUTTON");
            newP.innerText = recipe.title;
            var newP2 = document.createElement("H5");
            newP2.innerText = recipe.ingredients;

            document.querySelector('#LookedUpTitles').appendChild(newP);
           
            // document.querySelector('.titlesIngredients').appendChild(newP2);
            console.log(recipe.ingredients + " Ingredients found");
            // line above returns unidentified



        });
    };



    //Take a random number to choose a genre of food. 
    //display 10 meals from that genre
    //outcommented because the result interferes with searchSubject
    // upon arriving on site.
    // need to add array with the 10 meals that will be displayed, currently 30+ are displayed.
    // function recipeShowcase(){

    //     var genre = [
    //         "meat", "fruit", "icecream", 
    //         "protein", "chicken", "sushi",
    //         "beef", "pancake", "vegetable",
    //         "drink"
    //     ]
    //     var x = Math.floor(Math.random() *11);
    //     var selectedGenre = genre[x];
    // console.log("The value of x is " + selectedGenre);

    // fireSearchForRecipe(searchSubject.value);
    // searchSubject = selectedGenre;


    // }


    // recipeShowcase();


    // mapfilter
    //reduce
    //promises
    //

};