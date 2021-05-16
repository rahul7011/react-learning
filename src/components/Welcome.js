import React, { Component } from "react";

class Welcome extends Component {
  render() {
    const { name, children } = this.props;
    // const {state1,state2} = this.state;
    return (
      <div>
        <h1>Hello {name} from class component</h1>
        <strong>{children}</strong>
      </div>
    );
  }
}

export default Welcome;
