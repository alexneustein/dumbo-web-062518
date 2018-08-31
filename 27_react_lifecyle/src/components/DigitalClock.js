import React, { Component } from 'react'

class DigitalClock extends Component {
  state = {time: new Date().toLocaleTimeString()}
  // constructor() {
  //   super()
  //   this.state = {time: new Date().toLocaleTimeString()}
  //   setInterval(() => this.setState({time: new Date().toLocaleTimeString()}),
  //  1000)
  // }

  componentDidMount = () => {
    this.interval = setInterval(() => this.setState({time: new Date().toLocaleTimeString()}),
   1000)
  }

  componentWillUnmount = () => {
    clearInterval(this.interval)
  }



  render () {
    return (
      <div className="app-children">
        <h2 id="digital">
          {this.state.time}
        </h2>
      </div>
    )
  }
}

export default DigitalClock
