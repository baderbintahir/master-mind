import React from "react";
import ColorCircle from "../ColorCircle/ColorCircle";
import "./ColorPalette.css";

function ColorPalette(props) {
  let palettes = [];
  for (let i = 0; i < 6; i++) {
    palettes.push(
      <ColorCircle
        key={i}
        class={`${i} ${i === Number(props.selectedColor) ? "selected" : null}`}
        handleClick={props.handleClick}
        id={`p-${i}`}
      />
    );
  }

  return <div className="color-palette">{palettes}</div>;
}

export default ColorPalette;
