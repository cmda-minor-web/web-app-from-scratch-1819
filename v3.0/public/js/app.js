"use strict";
// Imports
import key from './key.js';
import testRecipes from './testObject.js';
// Prevent global scope
(function (){
    
    function callAPI(){
        ///////////////////////API REQUEST
        var endpoint = 'https://www.food2fork.com/api/search'
        const url = endpoint + '?key=' + key;
        var query = '&q=' + 'banana';
        var httpRequest = new XMLHttpRequest();
        httpRequest.open('GET', url + query)
        httpRequest.send();
        console.log(url + query);

        httpRequest.onload = function(){
        if (httpRequest.status >= 200 && httpRequest.status < 400) {
            //Resolve the promise with the response text
            var APIResponse = JSON.parse(httpRequest.response)
            console.log(APIResponse)
            console.log(APIResponse.recipes.length)
            var htmlTarget = '#templateAPI';           
            console.log(htmlTarget);
            for(var i = 0; i < APIResponse.recipes.length; i++){
                template(APIResponse.recipes, htmlTarget)    
                }
            };
        };
    }

    //////////////////////TEMPLATING

    //USE TESTOBJECT TO TEMPLATE AND FAKE CALL API
    template(testRecipes);
    function template(APIResponse){
        console.log(document.querySelector('#templateAPI'));
        Transparency.render(document.querySelector("#templateAPI"), APIResponse.recipes);
        console.log('Succesfully Rendered To Template');
        };

//REAL API CALL
    //function template(APIResponse){
        //      Transparency.render(document.querySelector('#templateClass'), APIResponse);
        //};

/////

    // function createNode(element){
    //     return document.createElement(element);
    // }

    // function appendChild(htmlClassOrID, element){
    //     return htmlClassOrID.appendChild("'" + element + "'")
    // }




/////////////////////////////////////////////////////////////////////////////
})();