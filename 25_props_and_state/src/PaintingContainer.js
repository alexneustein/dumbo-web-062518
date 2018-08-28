import React from 'react'
import PaintingCard from './PaintingCard'


export default class PaintingContainer extends React.Component{

  mapPaintings() {
    return this.props.paintings.map(p => <PaintingCard painting={p} key={p.slug}/>)
  }

  render() {
    // console.log(this.props.paintings)
    return (
      <div>
        {this.mapPaintings()}
      </div>
    )
  }
}