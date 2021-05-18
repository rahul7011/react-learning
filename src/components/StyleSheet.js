import React from "react";
import "./MyStyles.css";
function StyleSheet(props) {
  return <div className={`${props.primary} bg-color`}>style check</div>;
}

export default StyleSheet;
