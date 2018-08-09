function whoDis() {
  console.log(this)
}

function afterWork(friend1, friend2) {
  return `After work I enjoy ${this.hobby} with ${friend1} and ${friend2}`
}

const arrowDis = console.log

const jane = {
  name: 'jane',
  role: 'TCF',
  hobby: 'skydiving',
  dis: whoDis
}

const greg = {
  name: 'greg',
  role: 'TCF',
  hobby: 'playing trombone in a ska band',
  dis: whoDis
}

// function outer() {
//   console.log(this)
//   return function () {
//     console.log(this)
//
//   }
// }

