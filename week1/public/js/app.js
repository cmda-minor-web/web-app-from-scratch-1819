var request = new XMLHttpRequest();
var url = 'https://ghibliapi.herokuapp.com/films';
var main = document.getElementById('main');

request.open('GET', url, true);

//load in function fetchData
request.onload = (fetchData);

request.send();

//Fetch data from API into JavaScript file
function fetchData() {
  var data = JSON.parse(this.response);

    data.forEach(films => {
    // Log each film title
    // console.log(films.title);
    var section = document.createElement('section')
    var h1 = document.createElement('h1');
    var p = document.createElement('p')
    var title = document.createTextNode(films.title);
    var description = document.createTextNode(films.description);
    main.append(section);
    section.append(h1, p)
    h1.append(title);
    p.append(description)
  });
 }
