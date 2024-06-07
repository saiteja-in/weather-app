import React from "react";

const Button = (props) => {
  return (
    <div>
      <button
        onClick={props.onClick}
        value={props.onClick}
        className="button"
      >{props.value}</button>
    </div>
  );
};

export default Button;
