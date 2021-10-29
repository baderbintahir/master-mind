import { useState } from "react";
import ColorPalette from "../ColorPalette/ColorPalette";
import Rows from "../Rows/Rows";
import "./GameBoard.css";

const GameBoard = () => {
  const [selectedColor, setSelectedColor] = useState(0);

  return (
    <div className="game-board">
      <ColorPalette
        selectedColor={selectedColor}
        handleClick={(e) => setSelectedColor(e.target.id.slice(-1))}
      />
      <Rows selectedColor={selectedColor} />
    </div>
  );
};

export default GameBoard;
