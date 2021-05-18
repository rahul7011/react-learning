import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };

    // this.clickhandler=this.clickhandler.bind(this)           //First method 
  }

    // clickhandler(){
    //     this.setState({
    //         message:"GoodBye",
    //     })
    // }

    //second method

    clickhandler=()=>{
        this.setState({
            message:"Goodbye",
        })
    }

  render() {
    return (
      <div>
          <div>{this.state.message}</div>
        <button onClick={this.clickhandler}>click here</button>
      </div>
    );
  }
}

export default EventBind;
