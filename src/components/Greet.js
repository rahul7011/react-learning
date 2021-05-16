import React from "react";

// function Greet() {
//   return <h1>Hello Super</h1>;
// }

const Greet = ({ name, children }) => {
  // console.log(props.name);
  // console.log(props.number);
  return (
    <div>
      <h1>Hello {name} from functions component</h1>
      {children}
    </div>
  );
};
export default Greet;
