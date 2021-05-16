import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  increment() {
    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   () => {
    //     console.log("Synchronous", this.state.count);
    //   }
    // );
    // console.log("Asynchronous",this.state.count);
    //if we have to call the function numerous time then we have to use this method
    this.setState(
      (prevstate, props) => ({
        count: prevstate.count + 1,
      }),
      () => {
        console.log("Synchronous", this.state.count);
      }
    );
    console.log("Asynchronous", this.state.count);
  }

  incrementfivetimes(){
      this.increment()
      this.increment()
      this.increment()
      this.increment()
      this.increment()
  }
  render() {
    return (
      <div>
        <p>count:{this.state.count}</p>
        <button onClick={() => this.incrementfivetimes()}>Increment</button>
      </div>
    );
  }
}

export default Counter;
