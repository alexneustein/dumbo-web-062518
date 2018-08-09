// by hand objects - no way!
[
  {
    name: 'jane',
    role: 'TCF',
    hobby: 'skydiving',
    afterWork: afterWork
  }, {
    name: 'greg',
    role: 'TCF',
    hobby: 'playing trombone in a ska band',
    afterWork: afterWork
  }
]

// factory pattern - oldie but goodie
function instructorFactory(name, role, hobby) {
  const obj = {}
  obj.name = name
  obj.role = role
  obj.hobby = hobby
  return obj
}

// factory pattern with closure for class variables
// outer function runs once to set the id variable
// then returns the inner function which we save in instructorFactory
// we use instructorFactory to make new instructors
let instructorFactoryWithId = (function() {
  let id = 0

  return function(name, role, hobby) {
    const obj = {}
    obj.name = name
    obj.role = role
    obj.hobby = hobby
    obj.id = ++id
    return obj
  }
})()
instructorFactoryWithId('jane', 'tcf', 'skydiving')

// ES 5 - getting there
// uses the 'new' keyword which gives our function access to the new instance as this
function Instructor(name, role, hobby) {
  // instance variables
  this.name = name
  this.role = role
  this.hobby = hobby
}

// we can add instance methods to all instances using the prototype
function afterWork() {
  return `After work I enjoy ${this.hobby}.`
}

Instructor.prototype.afterWork = afterWork

let jane = new Instructor('jane', 'tcf', 'skydiving')
jane.afterWork() // `After work I enjoy skydiving`

// and with closures to get a class variable again
function InstructorMaker() {
  all = []

  function getAll() {
    return [...all]
  }

  function maker(name, role, hobby) {
    // instance variables
    this.name = name
    this.role = role
    this.hobby = hobby
    all.push(this)
  }

  // class methods
  return {all: getAll, maker: maker}
}


let InstructorClass = InstructorMaker()
let Instructor = InstructorClass.maker
new Instructor('jane', 'tcf', 'skydiving')
InstructorClass.all()

// ES 6 - now we are talking

function instructorMaker() {
  let all = []
  return class {
    constructor(name, role, hobby) {
      // instance variables
      this.name = name
      this.role = role
      this.hobby = hobby
      all.push(this)
    }

    // instance method
    afterWork() {
      return `After work I enjoy ${this.hobby}.`
    }

    // class method
    static afterHours() {
      return 'all the instructors enjoy coding'
    }

    static getAll() {
      return all.slice()
    }
  }
}

let Instructor = instructorMaker()

new Instructor('greg', 'tcf', 'ska')
new Instructor('jane', 'tcf', 'skydiving')
