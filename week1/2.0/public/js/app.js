// prevent global scope
"use strict";
import routerExport from "./router.js";
import key from './key.js';
import testRecipes from './testObject.js';
//import {Template} from './template.js';


(function () {

    const endpoint = 'https://www.food2fork.com/api/search';
    const url = endpoint + '?key=' + key;
    let submitButton = document.querySelector('#submitButton');
    let viewMoreButton = document.querySelector('.viewMore');

    routerExport();


    console.log();



    //Listen to submit button of search form
    submitButton.addEventListener('click', function () {
        
        
        //////////Real usage value of e///////////////////////////////////////////////////////////
        //let e = document.querySelector('#searchInput');
        //////Testing value of e/////////////////////////////////////////////////////////
        let e = testRecipes;
        
        
        
        if (e.value = testRecipes) {
            console.log('Using testObject' + testRecipes)
            //JSON.parse(testRecipes);
            for (let i = 0; i < testRecipes.recipes.length; i++) {
                new Template('#handleBarsTest', testRecipes.recipes[i], '#LookedUpTitles');
                console.log('test inserted to template' + testRecipes);
            }
        }

        //Actual Request//////////////////////////////////////////////////////////////////////////////////////////////////////////
    
        //         console.log("U searched for meals with: " + e.innerText);
        //    // console.log('api auto')
        //     apiRequestHandler(e.value).then((res)=>{
            //         for(let i = 0; i< 3; i++ ){  
                //             new Template('.main', res, '#LookedUpTitles');
                //             console.log('templating of ' + '#LookedUpTitles'  +  '  Element ' + i + ' succeeded!')
                //     }
                //     });
                
                
            });
            
            //END OF Actual Request/////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////OLD request
    //apiRequestHandler(e.value).then((res) => {
    //     //console.log(res);
    //     let JSONText = JSON.parse(res)
    //     console.log(JSONText[0]);
    //     let titleArray = JSONText[0].recipes.title;
    //     console.log(titleArray);
    //     for (let i = 0; i < res.recipes.title; i++) {

    //         new TemplateClass('#handleBarsTest', res, '#LookedUpTitles');
    //     }
    // });
    // console.log(searchSubject);


    class Template {
        constructor(htmlClass, res, toElement) {
            // data moet een object zijn
            // function templateEngine(htmlClass, data, toElement){
                //adjecenthtml / of .innertext ///// geen innerhtml!!
            // select the place to put the new content
            
            console.log('the templating data = ' + res)
            this.htmlClass = htmlClass
            let compiledTemplate = Handlebars.compile(htmlClass);
            // let template = template(res);
            //console.log(toElement);
            
            this.newHandlebar = JSON.stringify(res);
            this.newHandlebar = document.createElement('P');
            this.newHandlebar.innerText = compiledTemplate(res);
            let handleBar = this.newHandlebar
        console.log(this.newHandlebar.innerText)
            document.querySelector(toElement).appendChild(handleBar);

    
            // this.context = res;
            // let data = this.context;
            // console.log(data);
            //console.log(this.template);
            //console.log(this.htmlClass);
            //console.log(this.context)
            //define context
            // compile template
            // console.log(template);
            //href
            // let testcontext = {title: "this is a test", url: "www.thisisatesturl.url"};
            //debugger;
            //console.log(data);
            //console.log(compiledTemplate({newHandlebar}));
            
        };
    };
    

    function apiRequestHandler(searchSubject) {
        //return a new promise

        return new Promise(function (resolve, reject) {
            //make new XMLHttpRequest();
            // Kan dit onderstaande ook als fetch schrijven?

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
                    let APIResponse = JSON.parse(httpRequest.response)
                    console.log(APIResponse)
                    
                    resolve(APIResponse)

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

   



    
    
    

    const typeWriter = function (txtElement, words, wait = 2000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    };

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
    };
    // Init On DOM LOAD
    document.addEventListener('DOMContentLoaded', init);
    // Init App
    function init() {
        const txtElement = document.querySelector('.txt-type');
        //console.log(txtElement);
        const words = JSON.parse(txtElement.getAttribute('data-words'));
        const wait = txtElement.getAttribute('data-wait');
        
        
        new typeWriter(txtElement, words, wait);
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
        apiRequestHandler(selectedGenre).then((res) => {
            //console.log(res);
            var JSONText = JSON.parse(res)
            return JSONText
        }).then((res) => {
            new Template('#handleBarsTest', res, '#LookedUpTitles');
        });
    };

   // recipeShowcase();
})();

// Init Typewriter

// Templating engine should have:
// a function that creates the html element
// a function that adds an href
// the href should link the user to the interface with a detail section
//      of the selected recipe

// Listen to selecting a title and requesting details about recipe
//viewMoreButton.addEventListener('click', viewMore);

//function to give details about a recipe when the title is clicked!
//function viewMore(){
// give selected element selectedForDetail class
//var DetailedRecipe = document.getElementById('selectedForDetail');
// 

//  }



// mapfilter
//reduce
//promises
//