import React, { Component } from 'react'

class AnalogClock extends Component {
  render () {
    const now = new Date();
    // ...
    const secondsDegrees = // give hand location in circle degrees
    const minsDegrees = // give hand location in circle degrees
    const hourDegrees = // give hand location in circle degrees

     return (
      <div className='clock-container'>
        <div className="clock">
          <div className="clock-face">
            <div style={{transform: `rotate(${hourDegrees}deg)`, background: 'darkred'}} className="hand hour-hand"></div>
            <div style={{transform: `rotate(${minsDegrees}deg)`, background: 'darkblue'}} className="hand min-hand"></div>
            <div style={{transform: `rotate(${secondsDegrees}deg)`, background: 'darkgreen'}} className="hand second-hand"></div>
          </div>
        </div>
      </div>
    )
  }
}
 export default AnalogClock