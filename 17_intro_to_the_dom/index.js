// always wait for the page to load before you interact with DOM elements
document.addEventListener('DOMContentLoaded', init)

function init() {
  // iterate over array
  // for each element create object and append to dom
  renderBands(nineties)
  renderButton()
  document.querySelector('body').className = '90'
}

function renderButton() {
  const button = document.createElement('button')
  const main = document.querySelector('#main')
  button.innerText = 'Switch to 80s'
  button.onclick = toggle
  main.prepend(button)
}

function toggle() {
  const body = document.querySelector('body')
  const list = document.querySelector('#band-list')
  if (body.className === '90') {
    body.className = ('80')
    list.innerHTML = ''
    document.querySelector('h1').innerText = 'My 80s Music Fanpage!!'
    renderBands(eighties)
    document.querySelector('button').innerText = 'Switch to 90s'
  } else {
    body.className = ('90')
    list.innerHTML = ''
    document.querySelector('h1').innerText = 'My 90s Music Fanpage!!'
    renderBands(nineties)
    document.querySelector('button').innerText = 'Switch to 80s'
  }
}

function renderBands(bands) {
  const list = document.querySelector('#band-list')
  bands.forEach(band => {
    const li = bandTemplate(band)
    list.append(li)
  })
}

function bandTemplate(band) {
  const li = document.createElement('li')
  const h = document.createElement('h3')
  h.innerText = band.name
  const p = document.createElement('p')
  p.innerText = band.bio
  const img = document.createElement('img')
  img.src = band.picture
  const a = document.createElement('a')
  a.href = band.url
  a.innerText = `${band.name} Homepage`
  const iframe = document.createElement('iframe')
  iframe.src = embedSrc(band.video)
  iframe.width = "560"
  iframe.height = "315"

  li.append(h, img, p, a, iframe)
  return li
}

function embedSrc(video) {
  const videoId = video.split('=')[1]
  return `https://www.youtube.com/embed/${videoId}`
}




