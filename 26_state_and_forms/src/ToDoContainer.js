import React, { Component } from 'react'
import ToDoInput from './ToDoInput'
import ToDoList from './ToDoList'


export default class ToDoContainer extends Component {
  state = {
    todos: ['laundry', 'sweeping', 'dusting']
  }

  addToDo = (todo) => {
    this.setState(prevState => ({todos: [...prevState.todos, todo]}))
  }

  render() {
    return(
      <div>
        <ToDoInput addToDo={this.addToDo}/>
        <ToDoList todos={this.state.todos}/>

      </div>
    )
  }
}