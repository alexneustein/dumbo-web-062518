document.addEventListener('DOMContentLoaded', init)

function init() {
  // iterate over array
  // for each element create object and append to dom
  renderBands()
}

function renderBands() {
  const list = document.querySelector('#band-list')
  nineties.forEach(renderBand)

  function renderBand(band) {
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
    li.append(h, img, p, a)
    list.append(li)
  }
}




