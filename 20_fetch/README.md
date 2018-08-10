# Goals
- fetch
  - a fetch always return a promise
  - chaining then onto promises always returns promises
  - to use the data from the fetch, must pass a callback function
- promise is an object that promises to resolve to data in the future
- code structure
- process for writing code

# Process
- add a content load event listener
  - fetches initial data
  - add event listeners to things already on the dom
- fetching data should always have a .then callback to put info on the DOM
  - if this adds an element which needs a new event listener, add that here