// XHR Syntax
// So many steps, if only there were a better way!
// function reqListener() {
//   console.log(JSON.parse(this.response))
// }
//
// var req = new XMLHttpRequest()
// req.addEventListener("load", reqListener)
// req.open("GET", "http://localhost:3000/brews/")
// req.setRequestHeader('Content-Type', 'application/json')
// req.send()

document.addEventListener('DOMContentLoaded', init)

function init() {
  Adapter.getBrews()
    .then(renderBrews)
  const img = document.querySelector('img')
  img.addEventListener('click', e => console.log('clicked'))
}

function renderBrews(brews) {
  // const brews = response.brews
  // grabbed container off the dom
  const container = document.querySelector('#brews-container')
  // iterate through response array
  brews.forEach(brew => {
    // create a new html element, add properties, append to container
    const li = document.createElement('li')
    li.innerText = brew.blend_name
    const button = document.createElement('button')
    button.innerText = 'Show more'
    button.dataset.id = brew.id
    button.onclick = handleShow
    li.append(button)
    container.append(li)
  })
}

function handleShow(e) {
  const id = e.target.dataset.id
  Adapter.getBrew(id)
    .then(showBrew)
}


function showBrew(brew) {
  const container = document.querySelector('#brew-spotlight')
  container.innerHTML = ''
  const name = document.createElement('h3')
  name.innerText = brew.blend_name
  const origin = document.createElement('p')
  origin.innerText = brew.origin
  const notes = document.createElement('p')
  notes.innerText = brew.notes
  const strength = document.createElement('p')
  strength.innerText = brew.strength
  container.append(name, origin, notes, strength)
}
