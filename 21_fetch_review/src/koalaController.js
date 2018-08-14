class koalaController {
  static init() {
    const btn = document.querySelector('#get-koalas')
    btn.addEventListener('click', () => {Adapter.getKoalas()
      .then(koalaController.renderKoalas)
    })
    document.addEventListener('click', koalaController.delegator)
  }

  static delegator(e) {
    const target = e.target
    if (target.innerText === 'Delete'){
      koalaController.deleteKoala(target)
    }
  }

  static renderKoalas(koalas) {
    // find the container on the dom
    const container = document.querySelector('#koalas')
    koalas.forEach(koala => {
      // calls koala elements and attaches to DOM
      const el = koalaController.koalaElement(koala)
      container.append(el)
    })
  }

  static koalaElement(koala){
    // returns a fully assembled koala element
    const div = document.createElement('div')
    div.id = `koala-${koala.id}`
    const img = document.createElement('img')
    img.src = koala.image_url
    img.width = '200'
    const input = document.createElement('input')
    input.value = koala.name
    input.id = `input-${koala.id}`
    const button = document.createElement('button')
    button.innerText = 'Update Name'
    button.addEventListener('click', koalaController.updateName)
    button.dataset.id = koala.id
    const deleteBtn = document.createElement('button')
    deleteBtn.innerText = 'Delete'
    // deleteBtn.addEventListener('click', koalaController.deleteKoala)
    deleteBtn.dataset.id = koala.id
    div.append(img, input, button, deleteBtn)
    return div
  }

  static updateName(e) {
    // get the name
    // get the id
    // make a patch request
    // update the dom
    const id = e.target.dataset.id
    const input = document.querySelector(`#input-${id}`)
    const name = input.value
    Adapter.updateKoala(id, name)
  }

  static deleteKoala(target) {
    const id = target.dataset.id
    Adapter.deleteKoala(id)
    const container = document.querySelector('#koalas')
    const div = document.querySelector(`#koala-${id}`)
    container.removeChild(div)
  }
}
