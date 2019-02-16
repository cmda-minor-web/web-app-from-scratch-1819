// Where should I put the new html?
var targetHTML = "#templateAPI"

//USE TESTOBJECT TO TEMPLATE AND FAKE CALL API
function templateFunction(APIResponse, targetHTML) {
   // console.log(APIResponse)
    Transparency.render(document.querySelector(targetHTML), APIResponse.recipes);    
};




// //REAL API CALL
// function templateFunction(APIResponse, htmlTarget){
//     //console.log(APIResponse)
//     //console.log(htmlTarget)
//     Transparency.render(document.querySelector(htmlTarget), APIResponse);
   
// };