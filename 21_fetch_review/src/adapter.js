class Adapter {
  static getKoalas() {
    return fetch('http://localhost:3000/koalas')
      .then(r => r.json())
  }

  static updateKoala(id, name) {
    const url = `http://localhost:3000/koalas/${id}`
    return fetch(url, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({name: name})
    })
      .then(r => r.json())
      .then(console.log)
  }

  static deleteKoala(id) {
    const url = `http://localhost:3000/koalas/${id}`
    return fetch(url, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(r => r.json())
    .then(console.log)
  }
}