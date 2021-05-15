import React from "react";

// function Greet() {
//   return <h1>Hello Super</h1>;
// }

const Greet = (props) => {
  console.log(props.name);
  console.log(props.number);
  return(
    <div>
        <h1>Hello {props.name} from functions component</h1>
        {props.children}
    </div>
  )
      
};
export default Greet;
