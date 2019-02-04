/* global fetch */

'use strict'

console.log('init!')

const url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY'

fetch(url)
  .then(res => console.log(res.json()))
  .catch(err => console.error(err))
