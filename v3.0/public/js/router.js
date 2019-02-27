//import templateFunction from "./app.js";
//console.log(testRecipes);
//prevent global scope
(function() {

    // write logic to fill html with detailed data
    var setContent = function (value) {
        alert(`${value}`);
    }
//////////////////////////////////////////////////////////////////////////////////
//detail page setLayout
function setLayoutDetail(id){
    console.log('setLayoutDetail was triggered')
    document.querySelector('.overview').innerHTML = null;
    //document.querySelector('.productName').innerHTML = null;
}

//home page setLayout
function setLayoutHome(){
    console.log('setLayoutHome was triggered')
   //document.querySelector('#GlobalContainer').innerHTML = null;
}
/////////////////////////////////////////////////////////////////////////////////
//init route, check if hash === '' => set to #home
    var initializeRoute = function () {
        
        if (window.location.hash === '') {
            window.location.hash = '#home'
            return;
        }
    }
    initializeRoute();
    
    var getHome = function(){
        window.location.hash = '#home'
        return;
    }
    
    ////////////////////////////////////////////////////////////////////////////////////////////
    // Init app, set base url equal to home
    routie({
        
        'home': function () {
            // call view functionalities to render content to the page
            setLayoutHome();
            initializeRoute();
            requestAPIFoodGroups()
            //    .then(foodgroups => template.renderFoodGroups(foodgroups))            
            
            console.log("succesfully entered the homepage");
            console.log(sessionStorage.length + ' = sessionStorageLength At end' );        
        },
        
        'home&:id': function(id){
            //Detail Page
            console.log('entered a detail page by :id')
            
            //setContent("this is a detail page");
            callAPI(id)
            setTimeout(1000);
            setLayoutDetail(id);
        },
        
        // tip, call: templating actor!!!
        '*': function () {
            console.log('404');
            setContent("Error 404, not found what you're looking for. You will be redirected back to homepage(/)")
            getHome();
        }
        
    });
    
    //////////////////////////////////////////////
})()