'use strict'

var element = document.getElementById('app')
console.log(element)

document.addEventListener('click', (event) => {
  element.innerHTML = 'Howdy, Harry!'
})
