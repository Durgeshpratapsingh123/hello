import React, { Component } from 'react'

class EventBind extends Component {

    constructor(){
        super()

        this.state = {
            message : "Event Handler"
        }  

        // this.clickHandler = this.clickHandler.bind(this);
    }

    // clickHandler(){
    //     this.setState({
    //         message : "This is Event Handling"
    //     })
    //     console.log(this);
        
    // }

    // calling the clickHandler as a arrow function 
    clickHandler = () => {
        this.setState({
            message : " This is Event Handling"
        })
        console.log(this);
        
    }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        {/* .bind(this ) used for event binding */}
        {/* <button onClick={this.clickHandler.bind(this)}>Click me</button> */}

        {/* arrow function for event binding */}
        {/* <button onClick={()=> this.clickHandler()}>Click me</button> */}

        {/* adding {this.clickHandler = this.clickHandler.bind()} in cunstructor and then simply call this.clickHandler*/}
        {/* <button onClick={this.clickHandler}>Click me</button> */}

        {/* calling clickHnadler function AS arrow function "class property as arrow function" */}
        <button onClick={this.clickHandler}>Click me</button>
      </div>
    )
  }
}

export default EventBind
