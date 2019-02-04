console.log('Hello World')

var main = document.querySelector('main')
var currentNumber = 60
var url = 'https://api.pokemontcg.io/v1/cards/base2-' + currentNumber
var input = document.querySelector('input')

input.addEventListener('submit', () => {
  currentNumber = input.value
  url = url
  console.log(currentNumber)
  console.log(url)
  request.open('GET', url, true)
  request.send();
 })


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

function handleData(data){
  console.log('data is handeled')

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

  function costToImage(cost){
    var totalCost = ''
    cost.forEach(function(element) {
      totalCost +=
      `<i class='energy ${element.toLowerCase()}'></i>`
    })
    return totalCost
  }

  var format =`
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
    ${renderAttacks()}
  </section>
  `

  main.innerHTML = format
}

request.open('GET', url, true)
request.send()
