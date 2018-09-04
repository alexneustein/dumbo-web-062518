import React from 'react'
import { Link } from 'react-router-dom'

export default class PaintingCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {votes: props.painting.votes}
  }

  handleClick = () => {
    this.setState((prevState) => {
      return {votes: ++prevState.votes}
    })
  }

  renderLink = () => {
    if (this.props.match.params.slug) {
      return <img src={this.props.painting.image} alt=''/>
    } else {
      return <Link to={`/paintings/${this.props.painting.slug}`} >
      <img src={this.props.painting.image} alt=''/>
    </Link>
    }
  }


  render() {

    return(
      <div>
        <h4>{this.props.painting.title}</h4>
        <p>{this.props.painting.artist.name}</p>
        {this.renderLink()}
        <div>
          <i className='large caret up icon' onClick={this.handleClick}></i>
          {this.state.votes} votes
        </div>
      </div>
    )
  }
}