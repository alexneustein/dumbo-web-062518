class Adapter {
  static getBrews() {
    return fetch("http://localhost:3000/brews/")
    .then(r => r.json())
    .then(r => r.brews)
  }

  static getBrew(id) {
    return fetch(`http://localhost:3000/brews/${id}`)
    .then(r => r.json())
  }
}