// prevent global scope
"use strict";
import routerExport from "./router.js";
import key from './key.js';
(function (){
    
    var endpoint = 'https://www.food2fork.com/api/search';
    var url = endpoint + '?key=' + key;
    var searchSubject = document.querySelector('#searchInput');
    var submitButton = document.querySelector('#submitButton');
    var viewMoreButton = document.querySelector('.viewMore');
    
    routerExport();
    


    //Listen to submit button of search form
    submitButton.addEventListener('click', submitted);

    // Listen to selecting a title and requesting details about recipe
//viewMoreButton.addEventListener('click', viewMore);

//function to give details about a recipe when the title is clicked!
//function viewMore(){
// give selected element selectedForDetail class
//var DetailedRecipe = document.getElementById('selectedForDetail');
// 

//}
    
    function submitted() {
        console.log('click works!' + "U searched for meals with: " + searchSubject.value);
        fireSearchForRecipe(searchSubject.value).then((res) => {
            // console.log(res);
            var JSONText = JSON.parse(res)
            return JSONText
        }).then((res) => {
            ToInnerHTML(res, '#LookedUpTitles');
        })
        //console.log(searchSubject);
    };
    
    
    function fireSearchForRecipe(searchSubject) {
        //return a new promise
    
        return new Promise(function (resolve, reject) {
            //make new XMLHttpRequest();
            var query = '&q=' + searchSubject;
            var httpRequest = new XMLHttpRequest();
            httpRequest.open('GET', url + query);
            httpRequest.send();
            console.log(url + query);
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
                    console.error(error);
                };
            };
            //insert andere error
            httpRequest.onerror = function (e) {
                reject(e.status);
            }
        });
    
        //Handle network errors
    };

    // Parse Json from API
    // select html class for the logging of the JSON
    function ToInnerHTML(data, element) {
        // insert Serialize? when needed?
        // console.log(data)
        console.log(data);
        // .createElement() =  create a new html element
        // .querySelector() = select the .class or #id from the index.html file
        // .appendChild() = add something to the selected  
        for (let i = 0; i < 10; i++) {
            //i < "number of displayed items"

            //console.log(data.recipes[i].title);

            var newP = document.createElement("BUTTON");
            newP.innerText = data.recipes[i].title;
    
            data.recipes[i].title.forEach(title => {
                console.log(title);
                //////////////////////////////////////////////////////////////////////////////////////ADD CLASS .viewMore
                return;
            });


            var recipeImage = document.createElement("IMAGE");
            recipeImage.innerHTML = data.recipes[i].image;

            // var newP2 = document.createElement("H5");
            //newP2.innerText = data.recipes[i].ingredients;

            newP.data = data.recipes[i];
            newP.onclick = function (e) {

                console.log(this.data);
            }

            document.querySelector(element).appendChild(newP);
            // document.querySelector('.titlesIngredients').appendChild(newP2);
            //console.log(data.recipe[i].ingredients + " Ingredients found");
            // line above returns unidentified
        };


    };



    //Take a random number to choose a genre of food. 
    //display 10 meals from that genre
    // upon arriving on site.
    // need to add array with the 10 meals that will be displayed, currently 30+ are displayed.
    function recipeShowcase() {

        var genre = ["meat", "fruit", "icecream", "protein", "chicken", "sushi", "beef", "pancake", "vegetable", "drink",
            "rice", "pie", "cake", "smoothie", "strawberry", "cheesecake", "toast", "hamburger", "salad", "nuts"
        ]

        var x = Math.floor(Math.random() * genre.length);
        var selectedGenre = genre[x];
        console.log("The selected genre is " + selectedGenre);

        //searchSubject = selectedGenre;
        fireSearchForRecipe(selectedGenre).then((res) => {
            // console.log(res);
            var JSONText = JSON.parse(res)
            return JSONText
        }).then((res) => {
            ToInnerHTML(res, '.recommendedSection');
        });


    };

    //recipeShowcase();




    const typeWriter = function (txtElement, words, wait = 2000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }

    // Type Method
    typeWriter.prototype.type = function () {
        // Current index of word
        const current = this.wordIndex % this.words.length;
        // Get full text of current word
        const fullTxt = this.words[current];
        // check if deleting
        if (this.isDeleting) {
            // remove character
            this.txt = fullTxt.substring(0, this.txt.length - 1)
        } else {
            // add character
            this.txt = fullTxt.substring(0, this.txt.length + 1)
        }

        // insert txt into element
        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

        //  Initial Type Speed
        let typeSpeed = 150;
        if (this.isDeleting) {
            typeSpeed /= 2;
        }
        // If word is complete 
        if (!this.isDeleting && this.txt === fullTxt) {
            //make a pause at the end
            typeSpeed = this.wait;
            // set delete to true
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            // Move to next word
            this.wordIndex++
            // pause before start typing
            typeSpeed = 200;
        }
        setTimeout(() => this.type(), 200);
    }
    // Init On DOM LOAD
    document.addEventListener('DOMContentLoaded', init);
    // Init App
    function init() {
        const txtElement = document.querySelector('.txt-type');
        //console.log(txtElement);
        const words = JSON.parse(txtElement.getAttribute('data-words'));
        const wait = txtElement.getAttribute('data-wait');


        new typeWriter(txtElement, words, wait);
    }


})();


// Init Typewriter


// mapfilter
//reduce
//promises
//