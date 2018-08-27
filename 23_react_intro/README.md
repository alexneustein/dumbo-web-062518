# Objectives
- Understand build tools and show how Webpack works
- Discuss the benefits of React and declarative programming
- Start to understand the Virtual DOM
- See what a React Component actually is (an object, made by a class or function)
- Build custom components and see initial JSX

## Exercises
- write a function `myCreateElement`

### 1: Article
Use `myCreateElement` to create a function that generates React elements with the following HTML structure:

```html
<!-- how the article should look -->
<h1 class='article-heading'>My article title</h1>
<p class='article-main'>My article text</p>
```

```js
const Article = (/* what args does this need? */) => {
  // your code here
};
```

### 2: Navbar

Use `myCreateElement` to create a function that generates React elements with the following HTML structure:

```html
<!-- how the navbar should look -->
<div class='ui inverted orange menu'>
   <a class='item'>
     <h2 class='ui header'>
       <i class='pencil alternate icon'></i>
       <div class='content'>
         Bloggr
       </div>
       <div class='sub header'>
         All my Blog Articles
       </div>
     </h2>
   </a>
 </div>
```

```js
const Navbar = () => {};
```