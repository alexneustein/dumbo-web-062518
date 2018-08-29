import React, { Component } from 'react';
import './App.css';
import InputLogger from './InputLogger'
import Switch from './Switch'
import ToDoContainer from './ToDoContainer'

class App extends Component {

  state = {status: true}

  switchLights = () => {
    this.setState((prevState) => ({status: !prevState.status}))
  }

  render() {
    return (
      <div className={`App ${this.state.status ? 'lights-on' : 'lights-off'}`}>
        <InputLogger />
        <Switch switchLights={this.switchLights} status={this.state.status}/>
        <ToDoContainer />

      </div>
    );
  }
}

export default App;
