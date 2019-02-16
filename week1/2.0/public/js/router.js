

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
        template(testRecipes);
    },
    // tip, call: templating actor!!!

    '/readme': function () {
        console.log('read me')
        setContent("succesfully entered the readme");
    },
    '*': function () {
        console.log('404');
        setContent("succesfully not found what you're looking for")
    }

});

//////////////////////////////////////////////
