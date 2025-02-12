import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    // 4-short circuit operator conditional rendering -> it is used when we want to display something or nothing
    return this.state.isLoggedIn && <div>Welcome dps..</div>

    // 3-Ternary conditional operator for conditional rendering
    // return this.state.isLoggedIn ? (
    //   <div>Welcome dps..</div>
    // ) : (
    //   <div>welcome guest</div>
    // );


    // 2-Element varaiable conditional rendering
    // let message
    // if(this.state.isLoggedIn){
    //      message = <div>welcome dps...</div>
    // }
    // else{
    //     message =  <div>welcome guest</div>
    // }
    // return <div>{message}</div>

    // 1-If/else conditional rendering
    // if(this.state.isLoggedIn){
    //     return <div>welcome dps...</div>
    // }
    // else{
    //     return <div>welcome guest</div>
    // }

    // return (
    //   <div>
    //     welcome dps...
    //   </div>
    // )
  }
}

export default UserGreeting;
