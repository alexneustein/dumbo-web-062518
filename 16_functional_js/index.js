// alert("It's working")

const els = document.querySelectorAll('li')

els.forEach(el => {
  el.addEventListener("click", colorChanger)
})


addEventListener("click", colorChanger)

function colorChanger (event){
  let random = Math.floor(Math.random()*250)
  let random2 = Math.floor(Math.random()*250)
  let random3 = Math.floor(Math.random()*250)
  // const els = document.querySelectorAll('li')
  // return els.forEach(el => {
  event.target.style.color = `rgb(${random}, ${random2}, ${random3})`
    // random = Math.floor(Math.random()*250)
    // random2 = Math.floor(Math.random()*250)
    // random3 = Math.floor(Math.random()*250)
  // })
}
// let array = [1,2,3,4,5]

// impure function
// function doubler(arr){
//   for (let i = 0; i < arr.length; i++){
//     arr[i] = arr[i] * 2
//   }
//   return arr
// }

// pure function
// function doubler(arr){
//   debugger;
//   const copy = [...arr]
//   for (let i = 0; i < arr.length; i++){
//     copy[i] = arr[i] * 2
//   }
//   return copy
// }

// const doubler = arr => arr.map(x =>  x*2 )

// // Object.assign
// const marlon = {
//   confetti: "a lot",
//   funfetti: "even more",
//   duck: "Xtra",
//   marlonArray: ["scarf", "hat", "cardigan"]
// }

// const marlonCopy = {...marlon, shirt: "pink"}


// console.log(doubler(array))



// function functionRunner(arrayFunctions){
//   const results = []
//   for (let i = 0; i < arrayFunctions.length; i++){
//     results.push(arrayFunctions[i]())
//   }
//   return results
// }

// function hello(){
//   return "hello"
// }

// function world(){
//   return "world"
// }

// console.log(functionRunner([hello, world]))





// const apples = () => {
//   let count = 0
//   return () => {
//     count++
//     return `I've sold ${count} apples`
//   }
// }


// const pears = () => {
//   let count = 0
//   return () => {
//     count++
//     return `I've sold ${count} pears`
//   }
// }

// const seller = fruit => {
//   let count = 0
//   return () => {
//     count++
//     return `I've sold ${count} ${fruit}s`
//   }
// }


// const avocado = seller('avocado')
// const raspberry = seller('raspberrie')
// const coconut = seller('coconut ')


// const pears = () => {
//     count++
//     return `I've sold ${count} pears`
// }






