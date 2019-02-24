// function getInput() {
//     checkSessionStorage(searchQueryInput);
// }



function checkSessionStorage(searchQueryInput) {
   // console.log('Old dataset string: ' + oldQueryData);

    // What if there's no old query?
    if (APIResponseString === null || undefined) {
        console.log('there was no old query, called API');
    }

    else{
          // what if there is an old dataset?
          var data = JSON.parse(APIResponseString);
          console.log(data);
          filterForQuery(data, (res) => {
              console.log('the value of res = ' + res)
              templateFunction(res, '#templateAPI');
                


          });
        console.log('Succesfully Rendered To Template');

    }

        // // What if there is an old Query?
        // else (oldQueryData !== undefined) ;{


    // else (confirm(
    //         "We've found an old dataset from your previous queries\n" +
    //         'Do you want to load that old one instead of the new one?\n\n\n' +
    //         'Press OK if you want to load the OLD dataset!\n\n' +
    //         'Press Cancel if you want to load a NEW dataset!\n\n'
    //     )) {
    //     console.log('OK - Loading Old Dataset')
    //     //YES you want to load the old dataset
    //     //var APIResponse = sessionStorage.getItem('keyOfAPIResponse')
        // APIResponse = JSON.parse(APIResponseString);
        // console.log(APIResponseString);
        // saveInSessionStorage(APIResponse);
        // templateFunction(APIResponse)
        // console.log('Succesfully Rendered To Template');

    // else {
    //     console.log('CANCEL - Loading New Dataset')
    //     //NO! I'll get you a new dataset by your new query
    // }

    
}
// // TEST
// if(oldQueryValue  === null  ){
// saveInLocalStorage(testObject);
//     //console.log(e)
// }
function saveInSessionStorage(APIResponse) {
    console.log('save in local storage is called ' + APIResponse);
    var APIResponseString = JSON.stringify(APIResponse);
    var APIStorageKey = 'keyOfAPIResponse';
    sessionStorage.setItem(APIStorageKey, APIResponseString)
    display(APIResponseString);
}


function display(APIResponseString) {
    for (var i = 0; i < sessionStorage.length; i++) {
        var data = JSON.parse(sessionStorage.getItem('keyOfAPIResponse'));
        console.log(data);
        templateFunction(data, '#templateAPI');



    }
}


function clear() {
    console.log(sessionStorage.length)
    sessionStorage.clear();
    console.log('sessionStorage Cleared: ' + sessionStorage.length)
}


function clearStorageFromPage() {
    sessionStorage.clear();
    location.reload();
}