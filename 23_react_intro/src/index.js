
// call every time you want to create an element
// React.createElement(tagName, props, children)
// called once
// ReactDOM.render(whatToRender, whereToPutIt)

import React from 'react'
import ReactDOM from 'react-dom'

document.addEventListener('DOMContentLoaded', () => {

  // const h1 = myCreateElement({type: 'h1', props: {}, children: 'this is my react page'})
  // const p = myCreateElement({type: 'p', props: {}, children: 'it is super cool'})
  // const div = myCreateElement({type: 'div', props: {}, children: [h1, p]})

  const posts = [{title: 'article1', body: 'this is the text for my article'}, {title: 'article2', body: 'this is the text for my article'}, {title: 'article3', body: 'this is the text for my article'}].map(obj => singlePost(obj.title, obj.body))

  ReactDOM.render([Navbar('Bloggr', 'My Blogging App'), posts], document.querySelector('#main'))
})

// {type: 'div', props: {}, children: children}

// const myCreateElement = ({type, props, children}) => {
//   return {
//     // $$typeof: Symbol(react.element),
//     $$typeof: Symbol.for('react.element'),
//     key: null,
//     props: Object.assign({}, props, {children: children}),
//     ref: null,
//     type: type
//   }
// }
//
const Navbar = (content, header) => {
  const h2 = React.createElement('h2', {className: 'ui header'}, [
    React.createElement("i", {className: 'pencil alternate icon'}),
    React.createElement("div", {className: 'content'}, content),
    React.createElement("div", {className: 'sub header'}, header)
  ])
  const a = React.createElement('a', {className: 'item'}, h2)

  return React.createElement('div', {className: 'ui inverted orange menu'}, a)
}

const singlePost = (title, body) => {
  return React.createElement('div', {}, [
    React.createElement('h3', {}, title),
    React.createElement('p', {}, body)
  ])
}
