import React, { Component } from 'react'


export default class Switch extends Component {

  handleClick = () => {
    this.props.switchLights()
  }

  render() {
    console.log(this.state)
    return(
      <div >
        <button onClick={this.handleClick}>Lights {this.props.status ? 'On' : 'Off'}</button>
      </div>
    )
  }
}