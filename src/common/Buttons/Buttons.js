import React from "react";
import "./Buttons.css";

const Buttons = (props) => {
  return (
    <div>
      <button className="cal-btn" onClick={props.btfun}>
        {props.btnName}{" "}
      </button>
    </div>
  );
};

export default Buttons;