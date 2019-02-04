console.log('Hello World')

var main = document.querySelector('main')
var url = 'https://api.pokemontcg.io/v1/cards/base2-60'


var request = new XMLHttpRequest()
request.onload = function() {
    if (request.status == 200) {
      console.log("Loaded")
      var data = JSON.parse(request.responseText)
      var currentCard = data.card.name + ' from ' + data.card.series + ' ' + data.card.set
      document.title = currentCard
      document.querySelector('h1').innerText = 'Current Card is '+ currentCard
      handleData(data)
  } else {
    console.log("Error!")
  }
}

function handleData(data){
  console.log('data is handeled')

  var attacks = ''
  data.card.attacks.forEach( function(attack) {
    attacks +=
      `<p>${attack.cost}</p>
      <h3>${attack.name}</h3>
      <p>${attack.text}</p>`
    })

  var format =`
  <h2>${data.card.name} ${data.card.number} ${data.card.series} ${data.card.set}</h2>
  <section class='left half'>
    <img class='previewImage' src='${data.card.imageUrl}'/>
  </section>
  <section class='right half'>
    <section class='name'>
      <h3>${data.card.name}</h3>
      <h3>HP: ${data.card.hp}</h3>
      <p>${data.card.subtype}</p>
      <p>Type: ${data.card.types}</p>
    </section>
    <section class='attack'>
    ${attacks}
  </section>
  `

  main.innerHTML = format
}

request.open('GET', url, true)
request.send()
