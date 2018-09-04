import React from 'react'
import { Link } from 'react-router-dom'


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
  constructor() {
    super()
    this.state = {color: ''}
    // console.log('nav construct')
  }


  handleClick = (e) => {
    const i = Math.floor(Math.random() * colors.length)
    const color = colors[i]
    this.setState({color: color})
  }


  render() {
    // console.log('nav render')
    return (
      <div className={`ui inverted ${this.state.color} menu`}>
        <Link to='/'>
          <div className='item'>
            <h2 className='header'>
              <i className='icon paint brush'></i>
              <div className='content'>
                Painterest App
              </div>
            </h2>
          </div>
          </Link>
        <Link to='/about'>
          <div className='item'>About</div>
        </Link>
        <div className='right menu'>
          <div className='item'>
            <div className='ui button' onClick={this.handleClick}>Color Change</div>
          </div>
        </div>
      </div>
    )
  }
}
