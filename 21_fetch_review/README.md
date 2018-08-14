Code Challenge
- check index.html and any example html files to see what starter code or what templates are provided

- fetching data from a backend
- adding things to the DOM
- updating things already on the DOM
- adding event listeners to things you are putting on the DOM
- adding event listeners to things already on the DOM
- keep in mind the order that your functions are running in
  - test by console.logging
  - add domcontentloaded listener

# MVC
- models
  - blueprint for instances, interface with database
- views
  - about presentation
  - no logic, no brain
- controller
  - only way the views talk to the models
  - go-between, decision-maker

# Fetching
- the pattern is to fetch the data THEN parse into JSON THEN do something with it
```
fetch('http://localhost:3000/koalas')
  .then(r => r.json())
  .then(does the thing with it)
```

# DOM Manipulation
- always try out code in console first, esp for selectors
- to put something on the dom
  - find the container
  - create the element
  - add properties
  - attach nested elements
  - attach the element to the container

# Optimistic Rendering
- updating the DOM before a fetch to the backend has resolved
- we update the DOM optimistically hoping that our fetch works
- best used on smaller pieces of information

# Event Delegation

