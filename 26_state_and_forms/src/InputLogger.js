import React, { Component } from 'react'


export default class InputLogger extends Component {
  state = {text: '', secretText: ''}

  changeHandler = (event) => {
    // event.persist()
    // console.log('regular change handler')
    // const text = event.target.value
    // this.setState((prevState) => {
    //   return {text}
    // })

    this.setState({[event.target.name]: event.target.value})
  }

  // changeHandlerSecret = (event) => {
  //   console.log('secret change handler')
  //   const secretText = event.target.value
  //   this.setState((prevState) => {
  //     return {secretText}
  //   })
  // }

  clearForm = () => {
    this.setState({text: '', secretText: ''})
  }



  render() {
    return(
      <div>
        <div>
          <input type='text' onChange={this.changeHandler} name='text' value={this.state.text}/>
        </div>
        <div>
          <input type='text' onChange={this.changeHandler} name='secretText' value={this.state.secretText}/>
        </div>
        <div>
          <button onClick={this.clearForm}>Clear</button>
        </div>
        <div>
          {this.state.text}
        </div>
      </div>
    )
  }
}