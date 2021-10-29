import React from "react";
import "./ColorCircle.css";

const ColorCircle = (props) => {
  return (
    <div className="color-circle">
      <span className={`palette-${props.class}`}>
        <input
          type="radio"
          id={props.id}
          onClick={props.handleClick}
          disabled={!props.selectedRow && props.id[0] !== "p"}
        />
        <label htmlFor={props.id}></label>
      </span>
    </div>
  );
}

export default ColorCircle;
