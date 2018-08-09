// by hand objects - no way!
// const jane = {
//   name: 'jane',
//   role: 'TCF',
//   hobby: 'skydiving',
//   afterWork: afterWork
// }
//
// const greg = {
//   name: 'greg',
//   role: 'TCF',
//   hobby: 'playing trombone in a ska band',
//   afterWork: afterWork
// }

function afterWork(friend) {
  return `After work I enjoy ${this.hobby} with ${friend}.`
}


// es 5
function Instructor(name, role, hobby) {
  // instance variables
  this.name = name
  this.role = role
  this.hobby = hobby
}

// instance method
Instructor.prototype.afterWork = afterWork
const greg = new Instructor('greg', 'tcf', 'ska')
const jane = new Instructor('jane', 'tcf', 'skydiving')
// Instructor.all()
// Instructor.size()





