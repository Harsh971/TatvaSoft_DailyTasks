import React, { Component } from 'react'

export class EventBinding extends Component {
    constructor(){
        super()
        this.state={
          message:"hello"
        }
    }
    
    clickHandler =() =>{
        this.setState({
            message:"Goodbye"
        })
    }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
        {/* <button onClick={()=> this.clickHandler()}>Click</button> */}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default EventBinding