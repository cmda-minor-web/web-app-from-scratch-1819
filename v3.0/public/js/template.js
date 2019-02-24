var selectedCatArray = [];
var selectedCatFirstTime = 0;
var categoryArray = [];
var fgID = [];

console.log(searchQueryInput);

// Where should I put the new html?
var targetHTML1 = "#templateAPICategories"; // look up te food groups
var targetHTML2 = "#templateAPI"; // specific data
var targetHTML3 = ".selectedCat"; // selected categories


function addCatToFilter() {
    var x = document.querySelector(targetHTML1)
    var y = x.options[x.selectedIndex].text;
    selectedCatArray.push(y);
    console.log('Added: ' + y + ' to filters')
    selectedCatFirstTime++;
    templateSelectedCat();

}

function templateSelectedCat() {
    for (var i = 0; i < selectedCatArray.length; i++) {
        document.querySelector(targetHTML3).innerHTML = `
        
        <div class="selectedCategorie"><p>${selectedCatArray}</p><button onclick=resetSelectedCat()><i class="fas fa-backspace fa-x3"></i></button></div>
        `
    }
    
    
    
    
}


// I have a bug that keeps adding deleted selected categories back when a new categorie is added
function resetSelectedCat() {
    if(selectedCatArray.length != 0) {
        selectedCatArray.pop();
        console.log('deleted newest filter');
        console.log(selectedCatArray)
    }
    else{
        console.log('No Filter Applied')
        console.log(selectedCatArray.length); 
        templateSelectedCat();
        }
}


function templateCategories(APIResponse, targetHTML) {
    return `
        <div class="categories"><option>${APIResponse.name}</option></div> 
        `
}


function templator(APIResponse, targetHTML) {
    categoryArray.push(APIResponse.list.item);
    document.querySelector(targetHTML).innerHTML = `
    <option>Filter Foodgroups</option>
    ${APIResponse.list.item.map(templateCategories).join('')}
    `
}
// function templateCategories(APIResponse){
//     var data = APIResponse.list.item;
//     // templatedata = 
//     console.log(APIResponse);
//     Transparency.render(document.querySelector(targetHTML1), data);
//     return APIResponse;
//     console.log()
// }


function templateFunction(APIResponse, targetHTML) {
    console.log(APIResponse)
    var APIResponseItems = APIResponse;
    filterForQuery(APIResponseItems);
    Transparency.render(document.querySelector(targetHTML2), APIResponse.report.food);


};

document.querySelector('.navIDReturn').addEventListener('click', returnWindowXY);

function returnWindowXY() {
    window.scrollTo(0, 0);
};



// Filter Through data to find names that match the searchQuery from the input element

var categoryArray = [document.querySelector('.name')]
var goodFilteredArray = [];

function filterForQuery(APIResponseItems) {
    console.log()
    for (var i = 0; i < categoryArray.length; i++)
        if (categoryArray[i].checked = false) {
            console.log('adfadfadadasd')
        }
    else {
        // unimportant items
    }
}