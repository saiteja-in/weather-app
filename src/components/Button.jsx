import React from "react";

const Button = (props) => {
  return (
    <div>
      <button
        onClick={props.onClick}
        // value={props.onClick}
        className="button"
      >Search</button>
    </div>
  );
};

export default Button;
