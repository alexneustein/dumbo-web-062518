# This
## Objectives
* Leverage Ruby's `self` to frame our JS `this` conversation
* Recognize and value the differences
* Answer Dan Abramov's [question](https://twitter.com/dan_abramov/status/790858537513656320)
* The JS environment rules that govern `this`
    <!-- -  `this` within a function called with the keyword `new` in front will point to the newly created object -->
    -  `this` within a function called with apply/call/bind will be the object passed as the first parameter
    -  `this` within a function called with a context (i.e. Object.method()) will be the object.
    -  `this` for a simple function call (fn()) will be the window (browser) or the global object (Node). If we are in strict mode this will be undefined for simple function calls
* How do we control `this`
* This of arrow functions

## This vs Self
- this and self both refer to the receiver of the method call
- this can be passed around
- this within a 'function' is what the function is called on
- this within an 'arrow' is about where the function was defined
  - an arrow function is bound where it is defined

## Resources
* [MDN `this` article](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)