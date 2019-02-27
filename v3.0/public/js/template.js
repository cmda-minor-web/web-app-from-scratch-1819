class fgID_fgName {
    constructor(name, fgID) {
        this.name = name;
        this.fgID = fgID;
    }
};



// Where should I put the new html?
var targetHTML1 = "#templateAPICategories"; // look up te food groups
var targetHTML2 = "#templateAPI"; // specific data
var targetHTML3 = ".selectedCat"; // selected categories

//////////////////////////////////////////////////////////////////////Template Home

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
    if (selectedCatArray.length != 0) {
        selectedCatArray.pop();
        console.log('deleted newest filter');
        console.log(selectedCatArray)
    } else {
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
        document.querySelector(targetHTML).innerHTML = `
        <option>Filter Foodgroups</option>
        ${APIResponse.list.item.map(templateCategories).join('')}
        `;
        
    }
    // function templateCategories(APIResponse){
        //     var data = APIResponse.list.item;
        //     // templatedata = 
        //     console.log(APIResponse);
        //     Transparency.render(document.querySelector(targetHTML1), data);
        //     return APIResponse;
        //     console.log()
        // }
        
        
        function templateProducts(res) {
            var node = document.createElement("P");
            //  console.log(res.id)
            node.innerHTML =  `<div class="card">
            <a class="productName" href="#home&${res.ndbno}">${res.name}</a>
            
            </div> `
            //console.log(res.id)
            document.querySelector(targetHTML2).appendChild(node);
            document.querySelector(targetHTML2).getElementsByTagName("A")
            
            
            
            //      var element = document.createElement("P");
            //      document.querySelector(targetHTML2).innerHTML = element
            //      return document.querySelector(targetHTML2).appendChild = `
            //      <div class="card">${res.name}</div> 
            //      `
            //  }
        }
        
        //////////////////////////////////////////////////////////////////////Template Detail
    function templateProductNutrients(data) {
        return `
        
        <strong>${data.name}</strong> ${data.unit} = ${data.value} <br> 
        `
    }
    
    
    function templateDetail(data, targetHTML) {
       // console.log('templating detail page' + 'data = ' + data+ '______' + 'targetHTML= ' + targetHTML)
        document.querySelector('.productName').style.display = "none";
        document.querySelector(targetHTML).innerHTML = `
        <div class="GlobalContainer"> 
           
                <div class="card-head"> ${data.report.food.name}
                
                
                <div class="product-detail"> ${data.report.food.nutrients.map(templateProductNutrients).join('')}
                </div>
            </div>
        </div>
        `
    }
  
  
    // document.querySelector(targetHTML).innerHTML = `
    // <option>Filter Foodgroups</option>
    // ${APIResponse.report.food.name.map(templateCategories).join('')}
    // `;

function templateFunction(res) {
    
    console.log(res)
    //console.log(res.list.item.length)
    
    for(var i = 0; i < res.list.item.length; i++){
        
        templateProducts(res.list.item[i]);
        

    }
    //console.log(res.list.item[i])
    // document.querySelector(targetHTML2).innerHTML +=(`
    // ${res.list.item.map(templateProducts)}
    // <div class="card">${res}</div>`)


    // console.log(APIResponse)
    // var APIResponseItems = APIResponse;
    // Transparency.render(document.querySelector(targetHTML2), APIResponse.report.food);


};

document.querySelector('.navIDReturn').addEventListener('click', returnWindowXY);

function returnWindowXY() {
    window.scrollTo(0, 0);
};



// Filter Through data to find names that match the searchQuery from the input element

// var categoryArray = [document.querySelector('.name')]
// var goodFilteredArray = [];

// function filterForQuery(APIResponseItems) {
//     console.log()
//     for (var i = 0; i < categoryArray.length; i++)
//         if (categoryArray[i].checked = false) {
//             console.log('adfadfadadasd')
//         }
//     else {
//         // unimportant items
//     }
// }