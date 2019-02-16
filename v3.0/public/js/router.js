
// write logic to fill html with detailed data
const setContent = function (value) {
    alert(`${value}`);
}
//init route, check if hash === '' => set to #home
const initializeRoute = function () {

    if (window.location.hash === '') {
        window.location.hash = '#home'
        return;
    }
}

// Init app, set base url equal to home
initializeRoute();
routie({

    'home': function () {
        // call view functionalities to render content to the page
        console.log("succesfully entered the homepage");

    },
    // tip, call: templating actor!!!
    '*': function () {
        console.log('404');
        setContent("succesfully not found what you're looking for. You will be redirected back to homepage(/)")
        initializeRoute()
    },

    '/readme': function () {
        console.log('read me')
        setContent("succesfully entered the readme");   
    }

});

//////////////////////////////////////////////
