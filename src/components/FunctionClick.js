import React from "react";

export default function FunctionClick() {
  function clicked() {
    console.log("function clicked");
  }

  return (
    <div>
      <button onClick={clicked}>Click function</button>
    </div>
  );
}
