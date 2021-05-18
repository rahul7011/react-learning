import React, { Component } from "react";

class UserGreetings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    //Method 3
    return this.state.isLoggedIn ? (
      <div>
        Hello,You are <strong>logged-IN!</strong>
      </div>
    ) : (
      <div>
        Hello,You are<strong>Not logged-IN!</strong>{" "}
      </div>
    );

    //Method 2

    // let message;
    // if (this.state.isLoggedIn)
    // message=<div>Hello,You are <strong>logged-IN!</strong></div>
    // else
    // message=<div>Hello,You are<strong>Not logged-IN!</strong> </div>

    // return message

    //Method 1

    // if(this.state.isLoggedIn)
    // return <div>Hello,You are <strong>logged-IN!</strong></div>
    // else
    // return <div>Hello,You are<strong>Not logged-IN!</strong> </div>
  }
}

export default UserGreetings;
