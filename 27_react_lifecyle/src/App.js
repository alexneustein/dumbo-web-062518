import React, { Component } from 'react';
// import RandomKoala from './components/RandomKoala'
import StockTicker from './components/StockTicker'
import DigitalClock from './components/DigitalClock'
import WidgetSelector from './components/WidgetSelector'

class App extends Component {
  constructor() {
    super()
    this.state =  {
      showClock: true,
      koala: {}
    }
    console.log('app constructor')
  }

  handleShow = () => {
    this.setState(prevState => ({showClock: !prevState.showClock}))
  }

  componentDidMount = () => {
    fetch('http://localhost:3000/koalas')
      .then(r => r.json())
      .then(data => this.setState({koala: data[0]}))
  }


  render() {
    return (
      <div id='app'>
        <WidgetSelector handleShow={this.handleShow} />
        { this.state.showClock ?
          <DigitalClock />
          : <StockTicker />
         }
      </div>
    )
  }
}

export default App;


