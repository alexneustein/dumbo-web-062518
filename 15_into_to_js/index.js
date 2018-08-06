// var onLoad;


document.addEventListener("DOMContentLoaded", onLoad )

var onLoad = function(){
  console.log("We are in the event listener")
}


// console.log(bananas)

const bananas = "bananas"

// const weWork = ["flatiron", "dumbo"]
// weWork = [1, 2, 3]
// console.log(weWork)

let apples = "apples"

function seeMyApples(){
  let oranges = "oranges"
  return function(){
    let bananas = "bananas"
    return bananas
  }
}

const oranges = seeMyApples()

console.log("seeMyApples", oranges())

// if (1 === 1){
//   const i = 0
// }

// for (const i = 0; i < 5; i++){
//   console.log("lol")
// }

// const string = "Marlon"
// for (let i = 0; i < string.length; i++){
//   console.log(string[i])
// }

// console.log("trying to console log i", i)


let array = [1,2,3,4,5]
// array.map{|x| x + 2}



console.log("result of mapping", array.map(x =>  x + 2))

console.log("JS filter", array.filter(x => x > 2))

