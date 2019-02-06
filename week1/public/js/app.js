console.log('Hello World')

var main = document.querySelector('main')
var currentNumber = 60
var url = 'https://api.pokemontcg.io/v1/cards/base1-' + currentNumber
var input = document.querySelector('input')

// eventListener to any change on the input element
input.addEventListener('change', () => {
  currentNumber = input.value
  url = 'https://api.pokemontcg.io/v1/cards/base1-' + currentNumber
  console.log(currentNumber)
  console.log(url)
  request.open('GET', url, true)
  request.send();
 })

// create new XHR
var request = new XMLHttpRequest()
request.onload = function() {
    if (request.status == 200) {
      console.log("Loaded")
      var data = JSON.parse(request.responseText)
      var currentCard = data.card.name + ' from ' + data.card.series + ' ' + data.card.set
      document.title = currentCard
      document.querySelector('h1').innerText = data.card.name + ' #' + data.card.number + ' ' + data.card.set
      handleData(data)
  } else {
    console.log("Error!")
  }
}

// function that renders the text of the card

function handleData(data){
  console.log('data is handeled')

// render the attack and call the costToImage function to load symbols
  function renderAttacks() {
    var attacks = ''
    data.card.attacks.forEach( function(attack) {
      attacks +=
        `<section class='singleAttack'>
          ${costToImage(attack.cost)}
          <h3>${attack.name}</h3>
          <p>${attack.text}</p>
          <h3 class='damage'>${attack.damage}</h3>
        </section>
          `
      })

      return attacks
    }
// loop through the text value of an attack and use the <i> as a symbol for every value
  function costToImage(cost){
    var totalCost = ''
    cost.forEach(function(element) {
      totalCost +=
      `<i class='energy ${element.toLowerCase()}'></i>`
    })
    return totalCost
  }
// create a string of html for the card
  var format =`
  <section class='left half'>
    <img class='previewImage' src='${data.card.imageUrlHiRes}'/>
  </section>
  <section class='right half'>
    <section class='name'>
      <h3>${data.card.name}</h3>
      <h3>HP: ${data.card.hp}</h3>
      <p>${data.card.subtype}</p>
      <p>Type: ${data.card.types}</p>
    </section>
    <section class='attack'>
    ${renderAttacks()}

    <section>
    <h3>Artist</h3><p>${data.card.artist}</p>
    </section>
  </section>
  `
// insert format within main element
  main.innerHTML = format
}

//open en send initial request
request.open('GET', url, true)
request.send()
