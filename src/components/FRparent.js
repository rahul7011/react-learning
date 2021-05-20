import React, { Component } from "react";
import FRinput from "./FRinput";

class FRparent extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }
  clickHandler = ()=>{
      this.inputRef.current.focus()
  }
  render() {
    return (
      <div>
        <FRinput ref={this.inputRef}></FRinput>
        <button type="submit" onClick={this.clickHandler}>Focus Input</button>
      </div>
    );
  }
}

export default FRparent;
