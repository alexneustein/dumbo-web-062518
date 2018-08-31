import React, { Component } from 'react'

class StockTicker extends Component {

  state = {
    price: (Math.floor(Math.random() * 100)),
    color: 'white'
  }

  setPrice = () => {
    return Math.floor(Math.random() * 100)
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setState({price: this.setPrice()}), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.price > prevState.price) {
      console.log('green')
      this.setState({color: 'green'})
    } else if (this.state.price < prevState.price) {
      console.log('red')
      this.setState({color: 'red'})
    } else {
      console.log(this.state.price === prevState.price)
    }
  }


  render () {
    return (
      <div className="app-children">
        <div id="ticker">
          <h2>Flatiron</h2>
          <div style={{color: this.state.color}}>
            {this.state.price}
          </div>
        </div>
      </div>
    )
  }
}

export default StockTicker
