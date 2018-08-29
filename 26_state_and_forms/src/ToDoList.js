import React, { Component } from 'react'


export default class ToDoList extends Component {
  render() {
    const list = this.props.todos.map(todo => <li>{todo}</li>)
    return(
      <div>
        {list}
      </div>
    )
  }
}