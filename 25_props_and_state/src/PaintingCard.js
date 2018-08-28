import React from 'react'

export default class PaintingCard extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {votes: props.painting.votes}
  }

  handleClick = () => {
    const votes = ++this.state.votes
    this.setState((prevState) => {
      return {votes: ++prevState.votes}
    })
    this.setState({votes: votes})

  }

  render() {
    return(
      <div>
        <h4>{this.props.painting.title}</h4>
        <img src={this.props.painting.image} alt=''/>
        <p>{this.props.painting.artist.name}</p>
        <i className='large caret up icon' onClick={this.handleClick}></i>
        <div>{this.state.votes} votes</div>
      </div>
    )
  }
}