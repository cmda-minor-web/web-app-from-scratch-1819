// Where should I put the new html?
var targetHTML = "#templateAPI"

function templateFunction(APIResponse, targetHTML) {
   console.log(APIResponse)
   
   Transparency.render(document.querySelector(targetHTML), APIResponse.recipes);    

};

document.querySelector('#navIDReturn').addEventListener('click', returnWindowXY);

function returnWindowXY(){
    window.scrollTo(0,0); 
};

