import React from 'react'
import PaintingCard from './PaintingCard'
import { Route, Switch } from 'react-router-dom'


export default class PaintingContainer extends React.Component{


  render() {
    const paintings = this.props.paintings.map(p => <PaintingCard painting={p} key={p.slug} {...this.props}/>)

    return (
      <div>
        <Switch >
          <Route path='/paintings/:slug' render={(props) => {
            // const id = parseInt(props.match.params.id, 10)
            const slug = props.match.params.slug
            const painting = this.props.paintings.find(p => p.slug === slug)
            return <PaintingCard painting={painting} {...props} />
          }} />
          <Route path='/paintings' render={(props) =>  paintings} />
        </Switch>
      </div>
    )
  }
}