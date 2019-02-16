document.querySelector('#APIButton').addEventListener('click', getInput);


function getInput() {
    var searchQueryInput = document.querySelector('#searchQueryInput').value;
    checkSessionStorage(searchQueryInput);
}



function checkSessionStorage(searchQueryInput) {
    var oldQueryData = sessionStorage.getItem('keyOfAPIResponse');
    console.log(oldQueryData)

    // What if there's no old query?
    if (oldQueryData == null) {
        callAPI(searchQueryInput)
        console.log('there was no old query, called API');
    }
    // What if there is an old Query?
    if (oldQueryData !== null) {


        if (confirm('Hey There Hungry Person!\n\n' +
                "We've found an old dataset from your previous queries\n" +
                'Do you want to load that old one instead of the new one?\n\n' +
                'Press Confirm if you want to load the OLD dataset!\n\n' +
                'Press Cancel if you want to load a NEW dataset!\n\n'
            )) {
            console.log('OK - Loading Old Dataset')
            //YES you want to load the old dataset
            //var APIResponse = sessionStorage.getItem('keyOfAPIResponse')
            APIResponse = JSON.parse(APIResponseString);
            saveInLocalStorage(APIResponse);
            templateFunction(APIResponse)
            console.log('Succesfully Rendered To Template');

        } else {
            console.log('CANCEL - Loading New Dataset')
            //NO! I'll get you a new dataset by your new query
            callAPI(searchQueryInput);
        }

    }
}
// // TEST
// if(oldQueryValue  === null  ){
// saveInLocalStorage(testObject);
//     //console.log(e)
// }
function saveInLocalStorage(APIResponse) {
    console.log('save in local storage is called');
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