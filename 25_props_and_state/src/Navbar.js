import React from 'react'


const colors = [
  'red',
  'orange',
  'yellow',
  'olive',
  'green',
  'teal',
  'blue',
  'violet',
  'purple',
  'pink',
  'brown',
  'grey',
  'black'
]

export default class Navbar extends React.Component {
  constructor(){
    super()
    this.state = {color: ''}
    console.log('constructing navbar')
    // this.handleClick = this.handleClick.bind(this)
  }

  // state = {color: ''}

  handleClick = (e) => {
    const i = Math.floor(Math.random() * colors.length)
    const color = colors[i]
    this.setState({color: color})
  }


  render() {

    // console.log(color)
    return (
      <div className={`ui inverted ${this.state.color} menu`}>
        <div className='item'>
          <h2 className='header'>
            <i className='icon paint brush'></i>
            <div className='content'>
              Painterest App
            </div>
            <div className='sub header'>
              An app for paintings
            </div>
          </h2>
        </div>
        <div className='right menu'>
          <div className='item'>
            <div className='ui button' onClick={this.handleClick}>Color Change</div>
          </div>
        </div>
      </div>
    )
  }
}

// export default Navbar