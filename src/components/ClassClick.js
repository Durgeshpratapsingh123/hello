import React, { Component } from "react";

class ClassClick extends Component {
  clickHandler() {
    console.log("Button Clicked");
  }

  render() {
    return (
      <div>
        <h1>ClassClick</h1>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default ClassClick;
