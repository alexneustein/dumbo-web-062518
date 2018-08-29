import React, { Component } from 'react'


export default class ToDoInput extends Component {
  state = {todo: ''}

  handleChange = (e) => {
    this.setState({todo: e.target.value})
  }

  handleSubmit = () => {
    this.props.addToDo(this.state.todo)
    this.setState({todo: ''})
  }

  render() {
    return ([
        <input type='text' value={this.state.todo} onChange={this.handleChange}/>,
        <button onClick={this.handleSubmit}>Submit</button>
      ])
  }
}