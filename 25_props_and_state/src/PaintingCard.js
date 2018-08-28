import React from 'react'

export default class PaintingCard extends React.Component {

  render() {


    return(
      <div>
        <h4>{this.props.painting.title}</h4>
        <img src={this.props.painting.image} alt=''/>
        <p>{this.props.painting.artist.name}</p>
      </div>
    )
  }
}