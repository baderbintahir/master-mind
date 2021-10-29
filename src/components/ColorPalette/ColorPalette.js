import React from "react";
import ColorCircle from "../ColorCircle/ColorCircle";
import "./ColorPalette.css";

const ColorPalette = (props) => {
  const colors = [0, 1, 2, 3, 4, 5]

  return (
    <div className="color-palette">
      {colors.map((i) => (
        <ColorCircle
          key={i}
          class={`${i} ${
            i === Number(props.selectedColor) ? "selected" : null
          }`}
          handleClick={props.handleClick}
          id={`p-${i}`}
        />
      ))}
    </div>
  );
};

export default ColorPalette;
